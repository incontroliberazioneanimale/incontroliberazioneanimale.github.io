/** @class wixapps.core.expressions.Expression */
define.Class('wixapps.core.expressions.Expression', function(classDefinition) {
	/** @type bootstrap.managers.classmanager.ClassDefinition */
	var def = classDefinition;

	def.utilize(['wixapps.core.expressions.ExpressionParser']);

	/** @lends wixapps.core.expressions.Expression */
	def.fields({
		_funcLib: null,
		_expr: null,
		_exprSource: ""
	});

    var parser = null;


	/** @lends wixapps.core.expressions.Expression */
	def.methods({
		initialize: function(funcLib) {
            if (!parser) {
                parser = new this.imports.ExpressionParser();
            }
			this._funcLib = funcLib;
		},

		parseExpression: function(source) {
			this._exprSource = source;
			this._expr = parser.parseExpressionSource(source)[0];
		},

		getSymbolItems: function(symbolResolver) {
			var refListReduce = function(acc, item) {
				if (item.type == 'ref') {
					return acc.concat(symbolResolver.resolveExpressionReference(item.content));
				} else if (item.type == 'function') {
					return acc.concat(_.reduce(item.params, refListReduce, []));
				} else {
					return acc;
				}
			};
			return _([this._expr])
                .reduce(refListReduce, [])
                .filter(function(item) { return item.addEvent; })
                .valueOf();
		},

        getFunctionCalls: function () {
            var self = this;
            var refListReduce = function(acc, item) {
                if (item.type == 'function') {
                    var func = self._funcLib.getFunctionByName(item.content);
                    return acc.concat(func || [], _.reduce(item.params, refListReduce, []));
                } else {
                    return acc;
                }
            };
            return _([this._expr])
                .reduce(refListReduce, [])
                .valueOf();
        },

		evaluate: function(symbolResolver) {
			var self = this;
			var evalInternal = function(exprDesc, funcLib, refResolver) {
				if (exprDesc.type == "function") {
					var func = funcLib.getFunctionByName(exprDesc.content);
					var params = Array.map(exprDesc.params, function(item) {
						return evalInternal(item, funcLib, refResolver);
					});

					if(func) {
						return func.apply(null, params);
					} else {
                        throw new Error("Expression: " + self._exprSource + " | Cannot resolve function " + exprDesc.content + "()");
                    }

				} else if (exprDesc.type == "primitive") {
					return exprDesc.content;
				} else if (exprDesc.type == "ref") {
					var dataItem = refResolver.evaluateExpressionReference(exprDesc.content);
					if (dataItem === undefined) {
						throw new Error("Expression: " + self._exprSource + " | Cannot resolve symbol " + exprDesc.content);
					}
					return dataItem;
				}
			};
			if (this._expr) {
				return evalInternal(this._expr, this._funcLib, symbolResolver);
			}
		},

		_performDebugFunc: function(funcName, symbolResolver, params) {
			if (funcName == "Debug.symbols") {
				var symDict = symbolResolver.listSymbols();
				Object.each(symDict, function(key, value) {
					console.log(key, "=", value);
				});
			}
		},

		dispose: function() {
			this._funcLib = null;
		}

	});
});