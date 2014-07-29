W.Apps.registerAppDescriptor({
    id: "491f9ddf-cbfd-402b-9991-0ff6e336470d",
    "packageName": "news",
    "name": "@NEWS_APP_NAME@",
    "version": 1,
    "appIcon": "images/news-app-icon.png",
    "helpId":'/node/10694',
    "pictures": [
        "images/news-screen-01.png",
        "images/news-screen-02.png",
        "images/news-screen-03.png"
    ],
    "experiments": {
        "WixAppsTranslation": function(descriptor) {
            delete descriptor.lang;
        }
    },
    "description": "News App",
    "parts": [
        {
            "id": "045dd836-ef5d-11e1-ace3-c0dd6188709b",
            "name": "@NEWS_APP_parts_NAME@",
            "widgetIcon": "images/news-icon.png",
            "defaultWidth":460,
            "defaultHeight":500,
            "description": "@NEWS_APP_parts_Description@",
            "pictures": [
//                "http://joebess.com/Feb12/AnimationBlogIndex.gif",
//                "http://themes.zenverse.net/themedata/monoshade/screenshots/indexstyle1.gif"
            ],
            "logic": {
                display: { type: "wixapps.core.logics.CategoryLogic", options: { collectionId: "Lists", itemId: "SampleFeed1" } },
                seo: { type: "SingleItem", options: { collectionId: "Lists", itemId: 'SampleFeed1' } }
            },
	        allowRtl: false,
            allowZoomCustomization: true,
            "views": ["SimpleVList", "ImageVList", "DateVList"],
            "customizationsViewMapping": {
//                "SimpleVList": "MobileVList",
//                "ImageVList": "MobileVList",
//                "DateVList": "MobileVList"
            },
            zoomPartName: ["63631b64-a981-40c3-8772-40238db5aff6"]
        },
        {
            "id": "63631b64-a981-40c3-8772-40238db5aff6",
            "name": "@NEWS_APP_Customize_Expand_NAME@",
            "description": "@NEWS_APP_Customize_Expand_Description@",
            "listedInStore": false,
            "widgetIcon": "images/news-icon.png",
            "defaultWidth":500,
            "defaultHeight":500,
            "pictures": [
//                "http://joebess.com/Feb12/AnimationBlogIndex.gif",
//                "http://themes.zenverse.net/themedata/monoshade/screenshots/indexstyle1.gif"
            ],
            "logic": {
                "display": { "type": "wixapps.core.logics.SingleItemLogic", "options": { "collectionId": "Items", "itemId": "0537E434-5F86-4392-BEF5-7DC62B8412B3" } },
                "seo": { "type": "SingleItem", "options": { "collectionId": "Items", itemId: '0537E434-5F86-4392-BEF5-7DC62B8412B3' } }
            },
            "zoomParams": {urlIdPrefix: 'nws',"urlTitle": "news","width":820, "minHeight": 600, "itemIdParamName": 'itemId'},
            "mobileZoomExtraParams": { 'enableSwipe': true, 'enableScroll': true, 'disableRerender': true },
            "views": [ "ZoomView"],
            zoomCustomizations: {
                types:['Item'],
                styleEditLabel: " ",
                typeSelectionLabel: " ",
                itemNavigationLabel: "@Customize_Expand_itemNavigationLabel@",
                prevBtnLabel: "@Customize_Expand_prevBtnLabel@",
                nextBtnLabel: "@Customize_Expand_nextBtnLabel@"
            }
        }

    ],
    "viewDescriptions": [
        {
            "id": "SimpleVList",
            "name": "@NEWS_VIEW_NAME_SIMPLE@",
            "description": "Shows news items in a vertical list.",
            "icon": "images/simple-list.png"
        },
        {
            "id": "ImageVList",
            "name": "@NEWS_VIEW_NAME_IMAGE@",
            "description": "Shows news items with images in a vertical list.",
            "icon": "images/image-list.png"
        },
        {
            "id": "DateVList",
            "name": "@NEWS_VIEW_NAME_DATE@",
            "description": "Shows news items and dates in a vertical list.",
            "icon": "images/date-list.png"
        }
    ],
    "links": [],
    "collections": [
        { "id": "Lists", "allowedTypes": [ "ItemList"], "name": "Lists"},
        { "id": "Items", "allowedTypes": [ "Item" ], "name": "Items" }
    ],
    "types": [
        {
            "_iid": "ItemList",
            "_type": "wix:Type",
            "fields": [
                {"name": "title", "_type": "wix:Field", "type": "String", "defaultValue": "",validations: [{func:'minLength', params:[2]}]},
                {"name":"items", "_type": "wix:Field", type: "Array<wix:Ref<Item>>"}
            ],
            permissions: {
                '*': { Read: 'Anonymous', Update: 'SiteOwner', Create: 'SiteOwner', Delete: 'SiteOwner' }
            }

        },
        {
            "_iid": "Item",
            "_type": "wix:Type",
            "fields": [
                { "_type": "wix:Field", "name": "title", "type": "String", "defaultValue": "",validations: [{func:'minLength', params:[2]}] },
                { "_type": "wix:Field", "name": "date", type: "wix:Date", defaultValue: {_type:'wix:Date', iso: '1970-01-01T00:00:00.000Z' } },
                { "_type": "wix:Field", "name": "image", "type": "wix:Image", "defaultValue": { "_type": "wix:Image", "title": "Default image", "src": "2f7b76_f3e0b18a805017bb5c34c633f3fd93bc.png", "width": 1280, "height": 960 } },
                { "_type": "wix:Field", "name": "content", "type": "wix:RichText", "defaultValue": {_type:'wix:RichText'}},
                { "_type": "wix:Field", "name": "newsSource", "type": "String", "defaultValue": ""},
                { "_type": "wix:Field", "name": "newsSourceLink", "type": "wix:LinkBase", "defaultValue": {_type:'wix:LinkBase'}},
                { "_type": "wix:Field", "name": "parentRefs", "type": "Array<wix:Ref<ItemList>>", "defaultValue": []}
            ],
            permissions: {
                '*': { Read: 'Anonymous', Update: 'SiteOwner', Create: 'SiteOwner', Delete: 'SiteOwner' }
            }
        }
    ],

    "preLoadedData":{
        "Lists": [
            {
                "_iid": "576807B9-0771-44C5-A399-F0073BCACD48",
                "_type": "ItemList",
                "title": "I'm a news section 2",
                "items": [
                    {
                        "_type": "wix:Ref<Item>",
                        "collectionId": "Items",
                        "itemId": "CDEFC28C-D17F-45F6-A321-7AC96ED093DB"
                    },
                    {
                        "_type": "wix:Ref<Item>",
                        "collectionId": "Items",
                        "itemId": "0537E434-5F86-4392-BEF5-7DC62B8412B3"
                    },
                    {
                        "_type": "wix:Ref<Item>",
                        "collectionId": "Items",
                        "itemId": "20A12C07-475F-4DF6-B375-66B23BE25459"
                    }
                ]
            },
            {
                "_iid": "SampleFeed1",
                "_type": "ItemList",
                "title": "I'm a news section 1",
                "items": [
                    {
                        "_type": "wix:Ref<Item>",
                        "collectionId": "Items",
                        "itemId": "42c94a2d-9356-43f8-83d8-34bab795e0d9"
                    },
                    {
                        "_type": "wix:Ref<Item>",
                        "collectionId": "Items",
                        "itemId": "29a0cc5b-010c-40cc-9585-18fbbdf36168"
                    },
                    {
                        "_type": "wix:Ref<Item>",
                        "collectionId": "Items",
                        "itemId": "A824C130-CF1A-47CE-A8A1-49A6269F869B"
                    }
                ]
            }
        ],
        "Items": [
            {
                "_type": "Item",
                "title": "I'm a news headline. Use me to give your news story a title.",
                "date": {
                    "_type": "wix:Date",
                    "iso": "2017-12-23T00:00:00.000Z"
                },
                "content": {
                    "_type": "wix:RichText",
                    "text": "<p><span>I'm a news story. Click here to open up the News Editor and change my text. I'm a great place for you to let your users know what's new with your company.</span></p>",
                    "links": []
                },
                "newsSource": "Team Wix",
                "_iid": "0537E434-5F86-4392-BEF5-7DC62B8412B3",
                "image": {
                    "_type": "wix:Image",
                    "title": "Default image",
                    "src": "images/news-app-news-paper-image.jpg",
                    "width": 1280,
                    "height": 960
                },
                "newsSourceLink": {
                    "_type": "wix:ExternalLink",
                    "linkId": "news_7E0F737A",
                    "target": "_blank", "protocol": "http",
                    "address": "www.wix.com"
                },
                "parentRefs": [
                    {
                        "_type": "wix:Ref<ItemList>",
                        "collectionId": "Lists",
                        "itemId": "576807B9-0771-44C5-A399-F0073BCACD48"
                    }
                ]
            },
            {
                "_type": "Item",
                "title": "I'm a news headline. Use me to give your news story a title. Click here to open up the News Editor and change my text.",
                "date": {
                    "_type": "wix:Date",
                    "iso": "2017-12-23T00:00:00.000Z"
                },
                "content": {
                    "_type": "wix:RichText",
                    "text": "<p><span>I'm a news story. Click here to open up the News Editor and change my text. Simply click me, Edit News and start editing your news. I'm a great place for you to let your users know what's new with your company. You can use this area to write your own news or include articles where you've been mentioned in the press.</span><br><span>In your News Editor you can store all your news and choose which stories are displayed and which you'd prefer to keep hidden. You can click on any of the Sections, Headlines and Stories already in the News Editor and replace with your own content. Clicking Add lets you create news headlines and stories which you can attach to any News Section. To add your own News Section, click Add Section. And when you're done, click Save and your work will be saved in your News editor. You can choose what news stories appear on your page. You can even choose to only display stories by the News Section or News Headline.</span></p>",
                    "links": []
                },
                "newsSource": "Team Wix",
                "_iid": "20A12C07-475F-4DF6-B375-66B23BE25459",
                "image": {
                    "_type": "wix:Image",
                    "title": "Default image",
                    "src": "images/news-app-news-paper-image.jpg",
                    "width": 1280,
                    "height": 960
                },
                "newsSourceLink": {
                    "_type": "wix:ExternalLink",
                    "linkId": "news_7E0F737B",
                    "target": "_blank", "protocol": "http",
                    "address": "www.wix.com"
                },
                "parentRefs": [
                    {
                        "_type": "wix:Ref<ItemList>",
                        "collectionId": "Lists",
                        "itemId": "576807B9-0771-44C5-A399-F0073BCACD48"
                    }
                ]
            },
            {
                "_iid": "29a0cc5b-010c-40cc-9585-18fbbdf36168",
                "_type": "Item",
                "title": "I'm a news headline. Use me to give your news story a title.",
                "date": {
                    "_type": "wix:Date",
                    "iso": "2017-12-23T00:00:00.000Z"
                },
                "content": {
                    "_type": "wix:RichText",
                    "text": "<p><span>I'm a news story. Click here to open up the News Editor and change my text. I'm a great place for you to let your users know what's new with your company.</span></p>",
                    "links": []
                },
                "newsSource": "Team Wix",
                "newsSourceLink": {
                    "_type": "wix:ExternalLink",
                    "linkId": "news_7E0F737C",
                    "target": "_blank", "protocol": "http",
                    "address": "www.wix.com"
                },
                "image": {
                    "_type": "wix:Image",
                    "title": "",
                    "src": "images/news-app-news-paper-image.jpg",
                    "width": 1280,
                    "height": 853
                },
                "parentRefs": [
                    {
                        "_type": "wix:Ref<ItemList>",
                        "collectionId": "Lists",
                        "itemId": "SampleFeed1"
                    }
                ]
            },
            {
                "_iid": "42c94a2d-9356-43f8-83d8-34bab795e0d9",
                "_type": "Item",
                "title": "I'm a news headline.",
                "date": {
                    "_type": "wix:Date",
                    "iso": "2017-12-23T00:00:00.000Z"
                },
                "content": {
                    "_type": "wix:RichText",
                    "text": "<p><span>I'm a news story. Click here to open up the News Editor and change my text.</span></p>",
                    "links": []
                },
                "newsSource": "Team Wix",
                "newsSourceLink": {
                    "_type": "wix:ExternalLink",
                    "linkId": "news_7E0F737D",
                    "target": "_blank", "protocol": "http",
                    "address": "www.wix.com"
                },
                "image": {
                    "_type": "wix:Image",
                    "title": "",
                    "src": "images/news-app-news-paper-image.jpg",
                    "width": 1280,
                    "height": 853
                },
                "parentRefs": [
                    {
                        "_type": "wix:Ref<ItemList>",
                        "collectionId": "Lists",
                        "itemId": "SampleFeed1"
                    }
                ]
            },
            {
                "_type": "Item",
                "title": "I'm a news headline. Use me to give your news story a title. Click here to open up the News Editor and change my text.",
                "date": {
                    "_type": "wix:Date",
                    "iso": "2017-12-23T00:00:00.000Z"
                },
                "content": {
                    "_type": "wix:RichText",
                    "text": "<p><span>I'm a news story. Click here to open up the News Editor and change my text. Simply click me, Edit News and start editing your news. I'm a great place for you to let your users know what's new with your company. You can use this area to write your own news or include articles where you've been mentioned in the press.</span></p><p><span>In your News Editor you can store all your news and choose which stories are displayed and which you'd prefer to keep hidden. You can click on any of the Sections, Headlines and Stories already in the News Editor and replace with your own content. Clicking Add lets you create news headlines and stories which you can attach to any News Section. To add your own News Section, click Add Section. And when you're done, click Save and your work will be saved in your News editor. You can choose what news stories appear on your page. You can even choose to only display stories by the News Section or News Headline.</span></p>",
                    "links": []
                },
                "newsSource": "Team Wix",
                "_iid": "A824C130-CF1A-47CE-A8A1-49A6269F869B",
                "image": {
                    "_type": "wix:Image",
                    "title": "",
                    "src": "images/news-app-news-paper-image.jpg",
                    "width": 1280,
                    "height": 853
                },
                "newsSourceLink": {
                    "_type": "wix:ExternalLink",
                    "linkId": "news_7E0F737E",
                    "target": "_blank", "protocol": "http",
                    "address": "www.wix.com"
                },
                "parentRefs": [
                    {
                        "_type": "wix:Ref<ItemList>",
                        "collectionId": "Lists",
                        "itemId": "SampleFeed1"
                    }
                ]
            },
            {
                "_type": "Item",
                "title": "I'm a news headline.",
                "date": {
                    "_type": "wix:Date",
                    "iso": "2017-12-23T00:00:00.000Z"
                },
                "content": {
                    "_type": "wix:RichText",
                    "text": "<p><span>I'm a news story. Click here to open up the News Editor and change my text.</span></p>",
                    "links": []
                },
                "newsSource": "Team Wix",
                "_iid": "CDEFC28C-D17F-45F6-A321-7AC96ED093DB",
                "image": {
                    "_type": "wix:Image",
                    "title": "Default image",
                    "src": "images/news-app-news-paper-image.jpg",
                    "width": 1280,
                    "height": 960
                },
                "newsSourceLink": {
                    "_type": "wix:ExternalLink",
                    "linkId": "news_7E0F737F",
                    "target": "_blank", "protocol": "http",
                    "address": "www.wix.com"
                },
                "parentRefs": [
                    {
                        "_type": "wix:Ref<ItemList>",
                        "collectionId": "Lists",
                        "itemId": "576807B9-0771-44C5-A399-F0073BCACD48"
                    }
                ]
            }
        ]
    } ,
    "views": [].concat(
// Start generated views
[
	{
		"name":"NewsDate1","forType":"wix:Date","id":"date","data":"this","comp":
		{
			"name":"Date","format":"d mmm yyyy"
		},
		"customizations":
		[
			{
				"priority":99,"fieldId":"date","key":"comp.format","format":"*","input":
				{
					"name":"combobox","label":"@Customize_News_DATE_FORMAT@","options":
					[
						{
							"label":"23 Jan 2017","value":"d mmm yyyy"
						},
						{
							"label":"23-Jan-2017","value":"d-mmm-yyyy"
						},
						{
							"label":"January 23, 2017","value":"longDate"
						},
						{
							"label":"Sunday, January 23, 2017","value":"fullDate"
						},
						{
							"label":"23 January 2017","value":"d mmmm yyyy"
						},
						{
							"label":"23-January-2017","value":"d-mmmm-yyyy"
						},
						{
							"label":"1/23/2017","value":"m/d/yyyy"
						},
						{
							"label":"01/23/2017","value":"mm/dd/yyyy"
						}
					]
				}
			}
		]
	},
	{
		"name":"NewsDate2","forType":"wix:Date","id":"date","data":"this","comp":
		{
			"name":"Date","format":"d mmm yyyy"
		},
		"customizations":
		[
			{
				"priority":99,"fieldId":"date","key":"comp.format","format":"*","input":
				{
					"name":"combobox","label":"@Customize_News_DATE_FORMAT@","options":
					[
						{
							"label":"23 Jan 2017","value":"d mmm yyyy"
						},
						{
							"label":"23-Jan-2017","value":"d-mmm-yyyy"
						},
						{
							"label":"January 23, 2017","value":"longDate"
						},
						{
							"label":"Sunday, January 23, 2017","value":"fullDate"
						},
						{
							"label":"23 January 2017","value":"d mmmm yyyy"
						},
						{
							"label":"23-January-2017","value":"d-mmmm-yyyy"
						},
						{
							"label":"1/23/2017","value":"m/d/yyyy"
						},
						{
							"label":"01/23/2017","value":"mm/dd/yyyy"
						}
					]
				}
			}
		]
	},
	{
		"name":"NewsDate3","forType":"wix:Date","id":"date","data":"this","comp":
		{
			"name":"Date","format":"d mmm yyyy"
		},
		"customizations":
		[
			{
				"priority":99,"fieldId":"date","key":"comp.format","format":"*","input":
				{
					"name":"combobox","label":"@Customize_News_DATE_FORMAT@","options":
					[
						{
							"label":"23 Jan 2017","value":"d mmm yyyy"
						},
						{
							"label":"23-Jan-2017","value":"d-mmm-yyyy"
						},
						{
							"label":"January 23, 2017","value":"longDate"
						},
						{
							"label":"Sunday, January 23, 2017","value":"fullDate"
						},
						{
							"label":"23 January 2017","value":"d mmmm yyyy"
						},
						{
							"label":"23-January-2017","value":"d-mmmm-yyyy"
						},
						{
							"label":"1/23/2017","value":"m/d/yyyy"
						},
						{
							"label":"01/23/2017","value":"mm/dd/yyyy"
						}
					]
				}
			}
		]
	},
	{
		"name":
		[
			"NewsDate1","NewsDate2","NewsDate3"
		],
		"forType":"wix:Date","format":"Mobile","id":"date","data":"this","comp":
		{
			"name":"Date","format":"d mmm yyyy"
		}
	},
	{
		"name":"NewsDate5","forType":"wix:Date","format":"Mobile","id":"date","data":"this","comp":
		{
			"name":"Date","color":"#ffffff","fontSize":"14","format":"d mmm yyyy"
		},
		"customizations":
		[
			{
				"priority":99,"fieldId":"date","key":"comp.format","input":
				{
					"name":"combobox","label":"Date format","options":
					[
						{
							"label":"23 Jan 2017","value":"d mmm yyyy"
						},
						{
							"label":"23-Jan-2017","value":"d-mmm-yyyy"
						},
						{
							"label":"January 23, 2017","value":"longDate"
						},
						{
							"label":"Sunday, January 23, 2017","value":"fullDate"
						},
						{
							"label":"23 January 2017","value":"d mmmm yyyy"
						},
						{
							"label":"23-January-2017","value":"d-mmmm-yyyy"
						},
						{
							"label":"1/23/2017","value":"m/d/yyyy"
						},
						{
							"label":"01/23/2017","value":"mm/dd/yyyy"
						}
					]
				}
			}
		]
	},
	{
		"name":"NewsSourceView1","forType":"Item","data":"newsSourceLink._type","comp":
		{
			"name":"SwitchBox","cases":
			{
				"default":
				[
					{
						"data":"newsSourceLink","comp":
						{
							"name":"Link","items":
							[
								{
									"data":"newsSource","comp":
									{
										"name":"Label","singleLine":"true","noWrap":"true","showTooltip":"true"
									}
								}
							]
						}
					}
				],
				"wix:LinkBase":
				[
					{
						"data":"newsSource","comp":
						{
							"name":"Label","singleLine":"true","noWrap":"true","showTooltip":"true"
						}
					}
				]
			},
			"css":
			{
				"box-flex":1
			}
		}
	},
	{
		"name":"NewsSourceView2","forType":"Item","data":"newsSourceLink._type","comp":
		{
			"name":"SwitchBox","cases":
			{
				"default":
				[
					{
						"data":"newsSourceLink","comp":
						{
							"name":"Link","items":
							[
								{
									"data":"newsSource","comp":
									{
										"name":"Label","singleLine":"true","showTooltip":"true"
									}
								}
							]
						}
					}
				],
				"wix:LinkBase":
				[
					{
						"data":"newsSource","comp":
						{
							"name":"Label","singleLine":"true","showTooltip":"true"
						}
					}
				]
			},
			"css":
			{
				"box-flex":1
			}
		}
	},
	{
		"name":"NewsSourceView3","forType":"Item","data":"newsSourceLink._type","comp":
		{
			"name":"SwitchBox","cases":
			{
				"default":
				[
					{
						"data":"newsSourceLink","comp":
						{
							"name":"Link","items":
							[
								{
									"data":"newsSource","comp":
									{
										"name":"Label","singleLine":"true","showTooltip":"true"
									}
								}
							]
						}
					}
				],
				"wix:LinkBase":
				[
					{
						"data":"newsSource","comp":
						{
							"name":"Label","singleLine":"true","showTooltip":"true"
						}
					}
				]
			},
			"css":
			{
				"box-flex":1
			}
		}
	},
	{
		"name":
		[
			"NewsSourceView1","NewsSourceView2","NewsSourceView3"
		],
		"forType":"Item","format":"Mobile","data":"newsSourceLink._type","comp":
		{
			"name":"SwitchBox","cases":
			{
				"default":
				[
					{
						"data":"newsSourceLink","comp":
						{
							"name":"Link","items":
							[
								{
									"data":"newsSource","comp":
									{
										"name":"Label","singleLine":"true","showTooltip":"true"
									}
								}
							]
						}
					}
				],
				"wix:LinkBase":
				[
					{
						"data":"newsSource","comp":
						{
							"name":"Label","singleLine":"true","showTooltip":"true"
						}
					}
				]
			},
			"css":
			{
				"box-flex":1
			}
		}
	},
	{
		"name":"NewsSourceView5","forType":"Item","data":"newsSourceLink._type","comp":
		{
			"name":"SwitchBox","cases":
			{
				"default":
				[
					{
						"data":"newsSourceLink","comp":
						{
							"name":"Link","items":
							[
								{
									"data":"newsSource","comp":
									{
										"name":"Label","singleLine":"true","color":"#ffffff","fontSize":"14","showTooltip":"true"
									}
								}
							]
						}
					}
				],
				"wix:LinkBase":
				[
					{
						"data":"newsSource","comp":
						{
							"name":"Label","singleLine":"true","color":"#ffffff","fontSize":"14","showTooltip":"true"
						}
					}
				]
			},
			"css":
			{
				"box-flex":1
			}
		}
	},
	{
		"name":"DateAndSource1","forType":"Item","comp":
		{
			"name":"VBox","items":
			[
				{
					"id":"dateNameSwitch","value":"showDate","comp":
					{
						"name":"Switch","cases":
						{
							"default":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"contentBox","comp":
											{
												"name":"HBox","items":
												[
													{
														"id":"source","comp":
														{
															"name":"HBox","items":
															[
																{
																	"comp":
																	{
																		"name":"NewsSourceView1"
																	}
																}
															]
														},
														"layout":
														{
															"box-flex":1
														}
													}
												]
											},
											"layout":
											{
												"spacerAfter":8
											}
										}
									]
								}
							},
							"showDate":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"contentBox","comp":
											{
												"name":"HBox","items":
												[
													{
														"data":"date","comp":
														{
															"name":"NewsDate1"
														}
													},
													{
														"id":"newsSourceSwitch","data":"newsSource","comp":
														{
															"name":"Switch","cases":
															{
																"default":
																{
																	"id":"source","comp":
																	{
																		"name":"HBox","items":
																		[
																			{
																				"value":",","comp":
																				{
																					"name":"Label"
																				},
																				"layout":
																				{
																					"spacerAfter":5
																				}
																			},
																			{
																				"comp":
																				{
																					"name":"NewsSourceView1"
																				},
																				"layout":
																				{
																					"box-flex":1
																				}
																			}
																		],
																		"css":
																		{
																			"width":"100%"
																		}
																	}
																},
																"":"NO_PROXY"
															}
														},
														"layout":
														{
															"box-flex":1
														}
													}
												]
											},
											"layout":
											{
												"spacerAfter":8
											}
										}
									]
								}
							}
						}
					},
					"layout":
					{
						"spacerBefore":0
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":89,"fieldId":"dateNameSwitch","key":"layout.spacerBefore","input":
				{
					"name":"slider","maxVal":"100","minVal":"0","label":"@Customize_Title_Source_spacing@"
				}
			},
			{
				"priority":85,"fieldId":"contentBox","key":"layout.spacerAfter","input":
				{
					"name":"slider","maxVal":"100","minVal":"0","label":"@Customize_Story_Source_spacing@"
				}
			},
			{
				"priority":88,"fieldId":"source","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_source@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":87,"fieldId":"dateNameSwitch","key":"value","input":
				{
					"name":"checkbox","falseVal":"hideDate","label":"@Customize_Show_date@","defaultVal":"showDate","trueVal":"showDate"
				}
			}
		]
	},
	{
		"name":"DateAndSource2","forType":"Item","comp":
		{
			"name":"VBox","items":
			[
				{
					"id":"dateNameSwitch","value":"showDate","comp":
					{
						"name":"Switch","cases":
						{
							"default":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"contentBox","comp":
											{
												"name":"HBox","items":
												[
													{
														"id":"source","comp":
														{
															"name":"HBox","items":
															[
																{
																	"comp":
																	{
																		"name":"NewsSourceView2"
																	}
																}
															]
														},
														"layout":
														{
															"box-flex":1
														}
													}
												]
											},
											"layout":
											{
												"spacerAfter":8
											}
										}
									]
								}
							},
							"showDate":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"contentBox","comp":
											{
												"name":"HBox","items":
												[
													{
														"data":"date","comp":
														{
															"name":"NewsDate2"
														}
													},
													{
														"id":"newsSourceSwitch","data":"newsSource","comp":
														{
															"name":"Switch","cases":
															{
																"default":
																{
																	"id":"source","comp":
																	{
																		"name":"HBox","items":
																		[
																			{
																				"value":",","comp":
																				{
																					"name":"Label"
																				},
																				"layout":
																				{
																					"spacerAfter":5
																				}
																			},
																			{
																				"comp":
																				{
																					"name":"NewsSourceView2"
																				}
																			}
																		]
																	}
																},
																"":"NO_PROXY"
															}
														},
														"layout":
														{
															"box-flex":1
														}
													}
												]
											},
											"layout":
											{
												"spacerAfter":8
											}
										}
									]
								}
							}
						}
					},
					"layout":
					{
						"spacerBefore":0
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":89,"fieldId":"dateNameSwitch","key":"layout.spacerBefore","input":
				{
					"name":"slider","maxVal":"100","minVal":"0","label":"@Customize_Title_Source_spacing@"
				}
			},
			{
				"priority":85,"fieldId":"contentBox","key":"layout.spacerAfter","input":
				{
					"name":"slider","maxVal":"100","minVal":"0","label":"@Customize_Story_Source_spacing@"
				}
			},
			{
				"priority":88,"fieldId":"source","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_source@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":87,"fieldId":"dateNameSwitch","key":"value","input":
				{
					"name":"checkbox","falseVal":"hideDate","label":"@Customize_Show_date@","defaultVal":"showDate","trueVal":"showDate"
				}
			}
		]
	},
	{
		"name":"DateAndSource3","forType":"Item","comp":
		{
			"name":"VBox","items":
			[
				{
					"id":"dateNameSwitch","value":"showDate","comp":
					{
						"name":"Switch","cases":
						{
							"default":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"contentBox","comp":
											{
												"name":"HBox","items":
												[
													{
														"id":"source","comp":
														{
															"name":"HBox","items":
															[
																{
																	"comp":
																	{
																		"name":"NewsSourceView3"
																	}
																}
															]
														},
														"layout":
														{
															"box-flex":1
														}
													}
												]
											},
											"layout":
											{
												"spacerAfter":8
											}
										}
									]
								}
							},
							"showDate":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"contentBox","comp":
											{
												"name":"HBox","items":
												[
													{
														"data":"date","comp":
														{
															"name":"NewsDate3"
														}
													},
													{
														"id":"newsSourceSwitch","data":"newsSource","comp":
														{
															"name":"Switch","cases":
															{
																"default":
																{
																	"id":"source","comp":
																	{
																		"name":"HBox","items":
																		[
																			{
																				"value":",","comp":
																				{
																					"name":"Label"
																				},
																				"layout":
																				{
																					"spacerAfter":5
																				}
																			},
																			{
																				"comp":
																				{
																					"name":"NewsSourceView3"
																				}
																			}
																		]
																	}
																},
																"":"NO_PROXY"
															}
														},
														"layout":
														{
															"box-flex":1
														}
													}
												]
											},
											"layout":
											{
												"spacerAfter":8
											}
										}
									]
								}
							}
						}
					},
					"layout":
					{
						"spacerBefore":0
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":89,"fieldId":"dateNameSwitch","key":"layout.spacerBefore","input":
				{
					"name":"slider","maxVal":"100","minVal":"0","label":"@Customize_Title_Source_spacing@"
				}
			},
			{
				"priority":85,"fieldId":"contentBox","key":"layout.spacerAfter","input":
				{
					"name":"slider","maxVal":"100","minVal":"0","label":"@Customize_Story_Source_spacing@"
				}
			},
			{
				"priority":88,"fieldId":"source","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_source@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":87,"fieldId":"dateNameSwitch","key":"value","input":
				{
					"name":"checkbox","falseVal":"hideDate","label":"@Customize_Show_date@","defaultVal":"showDate","trueVal":"showDate"
				}
			}
		]
	},
	{
		"name":
		[
			"DateAndSource1","DateAndSource2","DateAndSource3"
		],
		"forType":"Item","format":"Mobile","comp":
		{
			"name":"VBox","items":
			[
				{
					"id":"dateNameSwitch","value":"showDate","comp":
					{
						"name":"Switch","cases":
						{
							"default":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"contentBox","comp":
											{
												"name":"HBox","items":
												[
													{
														"id":"source","comp":
														{
															"name":"HBox","items":
															[
																{
																	"comp":
																	{
																		"name":
																		{
																			"$expr":"String.concat('NewsSourceView', $viewIndex)"
																		}
																	}
																}
															]
														},
														"layout":
														{
															"box-flex":1
														}
													}
												]
											},
											"layout":
											{
												"spacerAfter":8
											}
										}
									]
								}
							},
							"showDate":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"contentBox","comp":
											{
												"name":"HBox","items":
												[
													{
														"data":"date","comp":
														{
															"name":
															{
																"$expr":"String.concat('NewsDate', $viewIndex)"
															}
														}
													},
													{
														"id":"newsSourceSwitch","data":"newsSource","comp":
														{
															"name":"Switch","cases":
															{
																"default":
																{
																	"id":"source","comp":
																	{
																		"name":"HBox","items":
																		[
																			{
																				"value":",","comp":
																				{
																					"name":"Label"
																				},
																				"layout":
																				{
																					"spacerAfter":5
																				}
																			},
																			{
																				"comp":
																				{
																					"name":
																					{
																						"$expr":"String.concat('NewsSourceView', $viewIndex)"
																					}
																				}
																			}
																		]
																	}
																},
																"":"NO_PROXY"
															}
														},
														"layout":
														{
															"box-flex":1
														}
													}
												]
											},
											"layout":
											{
												"spacerAfter":8
											}
										}
									]
								}
							}
						}
					},
					"layout":
					{
						"spacerBefore":0
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":89,"fieldId":"dateNameSwitch","key":"layout.spacerBefore","input":
				{
					"name":"slider","maxVal":"100","minVal":"0","label":"@Customize_Title_Source_spacing@"
				}
			},
			{
				"priority":88,"fieldId":"source","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_source@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":87,"fieldId":"dateNameSwitch","key":"value","input":
				{
					"name":"checkbox","falseVal":"hideDate","label":"@Customize_Show_date@","defaultVal":"showDate","trueVal":"showDate"
				}
			}
		]
	},
	{
		"name":"DateAndSource5","forType":"Item","format":"Mobile","comp":
		{
			"name":"HBox","items":
			[
				{
					"id":"dateNameSwitch","value":"showDate","comp":
					{
						"name":"SwitchBox","cases":
						{
							"default":
							[
								{
									"comp":
									{
										"name":"VBox","items":
										[
											{
												"id":"contentBox","comp":
												{
													"name":"HBox","items":
													[
														{
															"id":"source","comp":
															{
																"name":"HBox","items":
																[
																	{
																		"comp":
																		{
																			"name":"NewsSourceView5"
																		}
																	}
																]
															},
															"layout":
															{
																"box-flex":1
															}
														}
													]
												},
												"layout":
												{
													"spacerAfter":8
												}
											}
										]
									}
								}
							],
							"showDate":
							[
								{
									"comp":
									{
										"name":"VBox","items":
										[
											{
												"id":"contentBox","comp":
												{
													"name":"HBox","items":
													[
														{
															"data":"date","comp":
															{
																"name":"NewsDate5"
															}
														},
														{
															"id":"newsSourceSwitch","data":"newsSource","comp":
															{
																"name":"Switch","cases":
																{
																	"default":
																	{
																		"id":"source","comp":
																		{
																			"name":"HBox","items":
																			[
																				{
																					"value":",","comp":
																					{
																						"name":"Label","color":"#ffffff","fontSize":"14"
																					},
																					"layout":
																					{
																						"spacerAfter":5
																					}
																				},
																				{
																					"comp":
																					{
																						"name":"NewsSourceView5"
																					}
																				}
																			]
																		}
																	},
																	"":"NO_PROXY"
																}
															},
															"layout":
															{
																"box-flex":1
															}
														}
													]
												},
												"layout":
												{
													"spacerAfter":8
												}
											}
										]
									}
								}
							]
						}
					},
					"layout":
					{
						"width":"100%"
					}
				}
			],
			"css":
			{
				"width":"100%"
			}
		},
		"customizations":
		[
			{
				"priority":89,"fieldId":"dateNameSwitch","key":"layout.spacerBefore","input":
				{
					"name":"slider","maxVal":"100","minVal":"0","label":"@Customize_Title_Source_spacing@"
				}
			},
			{
				"priority":88,"fieldId":"source","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_source@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":87,"fieldId":"dateNameSwitch","key":"value","input":
				{
					"name":"checkbox","falseVal":"hideDate","label":"@Customize_Show_date@","defaultVal":"showDate","trueVal":"showDate"
				}
			}
		]
	},
	{
		"name":"SimpleVList","forType":"ItemList","comp":
		{
			"name":"VBox","items":
			[
				{
					"data":"title","comp":
					{
						"name":"Label"
					},
					"layout":
					{
						"spacerAfter":22
					}
				},
				{
					"data":"items","comp":
					{
						"name":"VerticalList","isStyleEditable":"false","templates":
						{
							"item":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"comp":
											{
												"name":"SimpleVList"
											}
										},
										{
											"id":"inline-news-spacer","comp":
											{
												"name":"VSpacer","size":"30"
											}
										}
									]
								}
							},
							"last":
							{
								"comp":
								{
									"name":"SimpleVList"
								}
							}
						}
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":109,"fieldId":"title","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_section_title@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":111,"fieldId":"title","key":"layout.spacerAfter","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_Section_title_spacing@"
				}
			},
			{
				"priority":90,"fieldId":"inline-news-spacer","key":"comp.size","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_Item_spacing@"
				}
			}
		]
	},
	{
		"name":"SimpleVList","forType":"Item","comp":
		{
			"name":"ZoomLink","listExpression":"parent.parent.items","items":
			[
				{
					"data":"title","comp":
					{
						"name":"Label"
					}
				},
				{
					"comp":
					{
						"name":"DateAndSource1"
					}
				},
				{
					"data":"content","comp":
					{
						"name":"ClippedParagraph","maxLines":"3"
					},
					"layout":
					{
						"width":"100%"
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":50,"fieldId":"content","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_story@","defaultVal":"false","trueVal":"false"
				}
			}
		]
	},
	{
		"name":"ImageVList","forType":"ItemList","comp":
		{
			"name":"VBox","items":
			[
				{
					"data":"title","comp":
					{
						"name":"Label"
					},
					"layout":
					{
						"spacerAfter":22
					}
				},
				{
					"data":"items","comp":
					{
						"name":"VerticalList","isStyleEditable":"false","templates":
						{
							"item":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"comp":
											{
												"name":"ImageVList"
											}
										},
										{
											"id":"inline-news-spacer","comp":
											{
												"name":"VSpacer","size":"30"
											}
										}
									]
								}
							},
							"last":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"comp":
											{
												"name":"ImageVList"
											}
										}
									]
								}
							}
						}
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":109,"fieldId":"title","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_section_title@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":111,"fieldId":"title","key":"layout.spacerAfter","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_Section_title_spacing@"
				}
			},
			{
				"priority":95,"fieldId":"inline-news-spacer","key":"comp.size","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_Item_spacing@"
				}
			}
		]
	},
	{
		"name":"ImageVList","forType":"Item","comp":
		{
			"name":"ZoomLink","orientation":"horizontal","box-align":"left","listExpression":"parent.parent.items","items":
			[
				{
					"id":"imageBox","comp":
					{
						"name":"VBox","items":
						[
							{
								"data":"image","comp":
								{
									"name":"Image","style":"wp2"
								},
								"layout":
								{
									"box-flex":1
								}
							}
						]
					},
					"layout":
					{
						"width":100,"height":100,"spacerAfter":17
					}
				},
				{
					"comp":
					{
						"name":"VBox","items":
						[
							{
								"data":"title","comp":
								{
									"name":"ClippedParagraph","maxLines":"2"
								},
								"layout":
								{
									"spacerAfter":2
								}
							},
							{
								"comp":
								{
									"name":"DateAndSource2"
								}
							},
							{
								"data":"content","comp":
								{
									"name":"ClippedParagraph","maxLines":"1"
								}
							}
						]
					},
					"layout":
					{
						"box-flex":1
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":80,"fieldId":"imageBox","key":"layout.height","input":
				{
					"name":"slider","maxVal":"300","minVal":"1","label":"@Customize_Image_height@"
				}
			},
			{
				"priority":81,"fieldId":"imageBox","key":"layout.width","input":
				{
					"name":"slider","maxVal":"300","minVal":"1","label":"@Customize_Image_width@"
				}
			},
			{
				"priority":82,"fieldId":"imageBox","key":"layout.spacerAfter","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_Item_image_spacing@"
				}
			},
			{
				"priority":86,"fieldId":"content","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_story@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":83,"fieldId":"content","key":"comp.maxLines","input":
				{
					"name":"slider","maxVal":"5","minVal":"1","label":"@Customize_Maximum_story_lines@"
				}
			}
		]
	},
	{
		"name":"DateVList","forType":"ItemList","comp":
		{
			"name":"VBox","items":
			[
				{
					"data":"title","comp":
					{
						"name":"Label"
					},
					"layout":
					{
						"spacerAfter":22
					}
				},
				{
					"data":"items","comp":
					{
						"name":"VerticalList","isStyleEditable":"false","templates":
						{
							"item":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"comp":
											{
												"name":"DateVList"
											}
										},
										{
											"id":"inline-news-spacer","comp":
											{
												"name":"VSpacer","size":"30"
											}
										}
									]
								}
							},
							"last":
							{
								"comp":
								{
									"name":"DateVList"
								}
							}
						}
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":109,"fieldId":"title","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_section_title@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":110,"fieldId":"title","key":"layout.spacerAfter","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_Section_title_spacing@"
				}
			},
			{
				"priority":90,"fieldId":"inline-news-spacer","key":"comp.size","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_Item_spacing@"
				}
			}
		]
	},
	{
		"name":"DateVList","forType":"Item","comp":
		{
			"name":"ZoomLink","listExpression":"parent.parent.items","items":
			[
				{
					"comp":
					{
						"name":"VBox","items":
						[
							{
								"comp":
								{
									"name":"HBox","items":
									[
										{
											"comp":
											{
												"name":"VBox","items":
												[
													{
														"id":"dateBox","comp":
														{
															"name":"HBox","items":
															[
																{
																	"data":"date","comp":
																	{
																		"name":"NewsDate3"
																	}
																}
															]
														},
														"layout":
														{
															"min-width":80
														}
													}
												]
											}
										},
										{
											"comp":
											{
												"name":"VBox","items":
												[
													{
														"data":"title","comp":
														{
															"name":"Label"
														}
													}
												]
											},
											"layout":
											{
												"box-flex":1
											}
										}
									]
								}
							}
						]
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":98,"fieldId":"dateBox","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_date@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":90,"fieldId":"dateBox","key":"layout.min-width","input":
				{
					"name":"slider","maxVal":"300","minVal":"50","label":"@Customize_Date_item_spacing@"
				}
			}
		]
	},
	{
		"name":
		[
			"SimpleVList","ImageVList","DateVList"
		],
		"forType":"ItemList","format":"Mobile","comp":
		{
			"name":"VBox","items":
			[
				{
					"data":"title","comp":
					{
						"name":"Label"
					},
					"layout":
					{
						"spacerAfter":22
					}
				},
				{
					"data":"items","comp":
					{
						"name":"VerticalList","isStyleEditable":"false","templates":
						{
							"item":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"comp":
											{
												"name":
												{
													"$expr":"$viewName"
												}
											}
										},
										{
											"id":"inline-news-spacer","comp":
											{
												"name":"VSpacer","size":"30"
											}
										}
									]
								}
							},
							"last":
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"comp":
											{
												"name":
												{
													"$expr":"$viewName"
												}
											}
										}
									]
								}
							}
						}
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":109,"fieldId":"title","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_section_title@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":111,"fieldId":"title","key":"layout.spacerAfter","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_Section_title_spacing@"
				}
			},
			{
				"priority":95,"fieldId":"inline-news-spacer","key":"comp.size","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_Item_spacing@"
				}
			}
		]
	},
	{
		"name":
		[
			"SimpleVList","ImageVList","DateVList"
		],
		"forType":"Item","format":"Mobile","comp":
		{
			"name":"ZoomLink","orientation":"horizontal","box-align":"left","listExpression":"parent.parent.items","items":
			[
				{
					"comp":
					{
						"name":"VBox","items":
						[
							{
								"data":"title","comp":
								{
									"name":"ClippedParagraph","maxLines":"2"
								},
								"layout":
								{
									"spacerAfter":2
								}
							},
							{
								"data":"$viewName","comp":
								{
									"name":"Switch","cases":
									{
										"SimpleVList":
										{
											"comp":
											{
												"name":"DateAndSource1","vars":
												{
													"viewIndex":1
												}
											}
										},
										"ImageVList":
										{
											"comp":
											{
												"name":"DateAndSource2","vars":
												{
													"viewIndex":2
												}
											}
										},
										"DateVList":
										{
											"comp":
											{
												"name":"DateAndSource3","vars":
												{
													"viewIndex":3
												}
											}
										}
									}
								}
							},
							{
								"id":"date-image-spacer","comp":
								{
									"name":"VSpacer","size":"10"
								}
							},
							{
								"data":"image","comp":
								{
									"name":"Image","style":"wp2","imageMode":"fill"
								},
								"layout":
								{
									"height":240,"width":"100%"
								}
							},
							{
								"id":"image-content-spacer","comp":
								{
									"name":"VSpacer","size":"10"
								}
							},
							{
								"data":"content","comp":
								{
									"name":"ClippedParagraph","maxLines":"4"
								}
							}
						]
					},
					"layout":
					{
						"box-flex":1
					}
				}
			]
		},
		"customizations":
		[
			{
				"priority":86,"fieldId":"image","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_image@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":84,"fieldId":"image","key":"layout.height","input":
				{
					"name":"slider","maxVal":"300","minVal":"1","label":"@Customize_Image_height@"
				}
			},
			{
				"priority":82,"fieldId":"date-image-spacer","key":"comp.size","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_image_before_spacing@"
				}
			},
			{
				"priority":81,"fieldId":"image-content-spacer","key":"comp.size","input":
				{
					"name":"slider","maxVal":"300","minVal":"0","label":"@Customize_image_after_spacing@"
				}
			},
			{
				"priority":85,"fieldId":"content","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_story@","defaultVal":"false","trueVal":"false"
				}
			},
			{
				"priority":80,"fieldId":"content","key":"comp.maxLines","input":
				{
					"name":"slider","maxVal":"5","minVal":"1","label":"@Customize_Maximum_story_lines@"
				}
			}
		]
	},
	{
		"name":"ZoomView","forType":"Item","comp":
		{
			"name":"ZoomLayout","items":
			[
				{
					"comp":
					{
						"name":"VBox","items":
						[
							{
								"data":"title","comp":
								{
									"name":"Label"
								}
							},
							{
								"comp":
								{
									"name":"DateAndSource1"
								}
							},
							{
								"data":"image.src","comp":
								{
									"name":"Switch","cases":
									{
										"default":
										{
											"comp":
											{
												"name":"VBox","items":
												[
													{
														"data":"image","comp":
														{
															"name":"Image","imageMode":"fitWidth"
														},
														"layout":
														{
															"spacerBefore":25
														}
													}
												]
											}
										},
										"2f7b76_f3e0b18a805017bb5c34c633f3fd93bc.png":"NO_PROXY"
									}
								},
								"layout":
								{
									"min-width":300
								}
							},
							{
								"data":"content","comp":
								{
									"name":"Label"
								},
								"layout":
								{
									"spacerBefore":20,"spacerAfter":25
								}
							}
						],
						"css":
						{
							"height":"100%","padding":10,"min-width":320
						}
					}
				}
			],
			"css":
			{
				"text-align":"left"
			}
		}
	},
	{
		"name":"ZoomView","forType":"Item","format":"Mobile","comp":
		{
			"name":"MobileZoomView"
		}
	},
	{
		"name":"MobileZoomView","forType":"Item","format":"Mobile","comp":
		{
			"name":"ZoomLayout","items":
			[
				{
					"comp":
					{
						"name":"HBox","items":
						[
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"comp":
											{
												"name":"VSpacer","size":"20"
											}
										},
										{
											"comp":
											{
												"name":"HBox","items":
												[
													{
														"data":"title","comp":
														{
															"name":"Label","color":"#ffffff","bold":"true","fontSize":"24"
														},
														"layout":
														{
															"spacerBefore":10,"spacerAfter":10
														}
													}
												]
											}
										},
										{
											"comp":
											{
												"name":"VSpacer","size":"5"
											}
										},
										{
											"comp":
											{
												"name":"HBox","items":
												[
													{
														"comp":
														{
															"name":"DateAndSource5"
														},
														"layout":
														{
															"spacerBefore":10,"spacerAfter":10
														}
													}
												]
											}
										},
										{
											"data":"image.src","comp":
											{
												"name":"SwitchBox","orientation":"horizontal","cases":
												{
													"default":
													[
														{
															"comp":
															{
																"name":"VBox","items":
																[
																	{
																		"data":"image","comp":
																		{
																			"name":"Image","imageMode":"fitWidth"
																		},
																		"layout":
																		{
																			"spacerBefore":20
																		}
																	}
																]
															},
															"layout":
															{
																"spacer":10,"width":300
															}
														}
													],
													"2f7b76_f3e0b18a805017bb5c34c633f3fd93bc.png":
													[
													]
												}
											}
										},
										{
											"comp":
											{
												"name":"VSpacer","size":"20"
											}
										},
										{
											"comp":
											{
												"name":"HBox","items":
												[
													{
														"data":"content","comp":
														{
															"name":"Label","color":"#ffffff","fontSize":"16"
														},
														"layout":
														{
															"spacerBefore":10,"spacerAfter":10
														}
													}
												]
											}
										},
										{
											"comp":
											{
												"name":"VSpacer","size":"20"
											}
										}
									]
								},
								"layout":
								{
									"box-flex":1,"text-align":"left"
								}
							}
						]
					}
				}
			],
			"css":
			{
				"text-align":"left"
			}
		},
		"customizations":
		[
			{
				"priority":86,"fieldId":"image","key":"comp.hidden","input":
				{
					"name":"checkbox","falseVal":"true","label":"@Customize_Show_image@","defaultVal":"false","trueVal":"false"
				}
			}
		]
	},
	{
		"name":"editorSummary","forType":"ItemList","comp":
		{
			"name":"VBox","items":
			[
				{
					"id":"summaryTitle","data":"title","comp":
					{
						"name":"Label","postfix":"<span class='typeName'> | @EditorSummary_News_Section@<\/span>","singleLine":"true"
					},
					"layout":
					{
						"spacerBefore":18,"spacerAfter":19
					}
				}
			],
			"css":
			{
				"height":54
			}
		}
	},
	{
		"name":"editorSummary","forType":"Item","comp":
		{
			"name":"HBox","items":
			[
				{
					"comp":
					{
						"name":"HBox","items":
						[
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"data":"image","comp":
											{
												"name":"Image"
											},
											"layout":
											{
												"spacer":"*","width":50,"height":50
											}
										}
									]
								},
								"layout":
								{
									"spacer":10
								}
							},
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"summaryTitle","data":"title","comp":
											{
												"name":"UnstyledLabel","postfix":"<span class='typeName'> | @EditorSummary_News_item@<\/span>","singleLine":"true"
											},
											"layout":
											{
												"spacerBefore":3,"spacerAfter":3
											}
										},
										{
											"id":"summaryDescription","data":"content","comp":
											{
												"name":"UnstyledLabel","singleLine":"true"
											},
											"layout":
											{
												"spacerAfter":9
											}
										}
									]
								},
								"layout":
								{
									"box-flex":1
								}
							}
						]
					},
					"layout":
					{
						"box-flex":1,"spacerAfter":200
					}
				}
			],
			"css":
			{
				"height":54
			}
		}
	},
	{
		"name":"editorForm","forType":"ItemList","comp":
		{
			"name":"VBox","items":
			[
				{
					"id":"label","value":"@EditorForm_News_Title@","comp":
					{
						"name":"Label"
					}
				},
				{
					"data":"title","comp":
					{
						"name":"TextInput","placeholder":"@EditorForm_News_Title_Placeholder@"
					},
					"layout":
					{
						"spacerAfter":150
					}
				}
			],
			"css":
			{
				"width":"100%"
			}
		}
	},
	{
		"name":"editorForm","forType":"Item","comp":
		{
			"name":"VBox","items":
			[
				{
					"id":"label","value":"@EditorForm_News_Item_Title@","comp":
					{
						"name":"Label"
					}
				},
				{
					"data":"title","comp":
					{
						"name":"TextInput","placeholder":"@EditorForm_News_Item_Title_Placeholder@"
					},
					"layout":
					{
						"spacerAfter":5
					}
				},
				{
					"comp":
					{
						"name":"HBox","items":
						[
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"label","value":"@EditorForm_News_Item_Image@","comp":
											{
												"name":"Label"
											}
										},
										{
											"data":"image","comp":
											{
												"name":"ImageSelector","defaultImage":
												{
													"_type":"wix:Image","title":"Default image","src":"2f7b76_f3e0b18a805017bb5c34c633f3fd93bc.png","width":1280,"height":960
												}
											},
											"layout":
											{
												"width":200,"height":120
											}
										}
									]
								}
							},
							{
								"comp":
								{
									"name":"VBox","items":
									[
										{
											"id":"label","value":"@EditorForm_News_Item_Date_Created@","comp":
											{
												"name":"Label"
											}
										},
										{
											"data":"date","comp":
											{
												"name":"DateEdit","allowEmpty":"false"
											},
											"layout":
											{
												"spacerAfter":"*","spacerBefore":6
											}
										},
										{
											"id":"label","value":"@EditorForm_News_Item_Source@","comp":
											{
												"name":"Label"
											}
										},
										{
											"comp":
											{
												"name":"HBox","items":
												[
													{
														"data":"newsSource","comp":
														{
															"name":"TextInput","placeholder":"@EditorForm_News_Item_Source_Description@"
														},
														"layout":
														{
															"box-flex":1,"spacerAfter":5
														}
													},
													{
														"comp":
														{
															"name":"VBox","items":
															[
																{
																	"data":"newsSourceLink","comp":
																	{
																		"name":"LinkSelector"
																	},
																	"layout":
																	{
																		"spacer":"*"
																	}
																}
															]
														}
													}
												]
											}
										}
									]
								},
								"layout":
								{
									"spacerBefore":30,"box-flex":1
								}
							}
						]
					},
					"layout":
					{
						"spacerAfter":5
					}
				},
				{
					"id":"label","value":"@EditorForm_News_Item_Description@","comp":
					{
						"name":"Label"
					}
				},
				{
					"data":"content","comp":
					{
						"name":"RichTextEditorInline","height":"240","css":
						{
							"width":512
						}
					}
				}
			],
			"css":
			{
				"width":518
			}
		}
	},
	{
		"name":"ErrorInEditor","forType":"Error","data":"code","comp":
		{
			"name":"Switch","cases":
			{
				"default":
				{
					"value":"@ERROR_MESSAGE_IN_EDITOR@","comp":
					{
						"name":"Label","isStyleEditable":"false"
					}
				},
				"-1021":
				{
					"comp":
					{
						"name":"VBox","box-align":"center","items":
						[
							{
								"value":
								{
									"_type":"wix:Image","src":"images/warning-icon.png","width":256,"height":256
								},
								"comp":
								{
									"name":"Image","isStyleEditable":"false"
								},
								"layout":
								{
									"spacerBefore":30,"spacerAfter":10,"width":64,"height":64
								}
							},
							{
								"value":"@ERROR_ITEM_NOT_FOUND_TITLE@","comp":
								{
									"name":"Label","style":"Heading M","isStyleEditable":"false","color":"#FFFFFF"
								},
								"layout":
								{
									"spacerAfter":10
								}
							},
							{
								"value":"@ERROR_ITEM_NOT_FOUND_DESCRIPTION@","comp":
								{
									"name":"Label","style":"Body M","isStyleEditable":"false","color":"#FFFFFF"
								},
								"layout":
								{
									"spacerAfter":10
								}
							},
							{
								"value":"@ERROR_ITEM_NOT_FOUND_DISCLAIMER@","comp":
								{
									"name":"Label","style":"Body XS","isStyleEditable":"false","color":"#FFFFFF","italic":"true"
								},
								"layout":
								{
									"spacerAfter":30
								}
							}
						],
						"css":
						{
							"background-color":"red"
						}
					}
				}
			}
		}
	},
	{
		"name":"ErrorInPublished","forType":"Error","data":"code","comp":
		{
			"name":"Switch","cases":
			{
				"default":
				{
					"value":"@ERROR_MESSAGE_IN_PUBLISHED@","comp":
					{
						"name":"Label","isStyleEditable":"false"
					}
				},
				"-1021":"NO_PROXY"
			}
		}
	}
]

// End generated views
    ),
    "customizations": [
        { "forType": "Item", "view": "ZoomView",        "fieldId": "title", "key": "comp.style",   "value": "Heading S" },
        { "forType": "Item", "view": "ZoomView",        "fieldId": "date", "key": "comp.style",     "value": "Body S" },
        { "forType": "Item", "view": "ZoomView",        "fieldId": "content", "key": "comp.style",  "value": "Body M" },
//        { "forType": "Item", "view": "MobileZoomView",        "fieldId": "title", "key": "comp.style",   "value": "Heading S" },
//        { "forType": "Item", "view": "MobileZoomView",        "fieldId": "date", "key": "comp.style",     "value": "Body S" },
//        { "forType": "Item", "view": "MobileZoomView",        "fieldId": "content", "key": "comp.style",  "value": "Body M" },
        { "forType": "Item", "view": "SimpleVList",        "fieldId": "title", "key": "comp.style",   "value": "Heading S" },
        { "forType": "Item", "view": "SimpleVList",        "fieldId": "date", "key": "comp.style",     "value": "Body S" },
        { "forType": "Item", "view": "SimpleVList",        "fieldId": "content", "key": "comp.style",  "value": "Body M" },
        { "forType": "ItemList", "view": "SimpleVList",   "fieldId": "title", "key": "comp.style",  "value": "Heading M" },

        { "forType": "Item", "view": "ImageVList",        "fieldId": "title", "key": "comp.style",   "value": "Heading S" },
        { "forType": "Item", "view": "ImageVList",        "fieldId": "date", "key": "comp.style",     "value": "Body S" },
        { "forType": "Item", "view": "ImageVList",        "fieldId": "content", "key": "comp.style",  "value": "Body M" },
        { "forType": "ItemList", "view": "ImageVList",   "fieldId": "title", "key": "comp.style",  "value": "Heading M" },

        { "forType": "Item", "view": "DateVList",        "fieldId": "title", "key": "comp.style",   "value": "Heading S" },
        { "forType": "Item", "view": "DateVList",        "fieldId": "date", "key": "comp.style",     "value": "Body S" },
        { "forType": "Item", "view": "DateVList",        "fieldId": "content", "key": "comp.style",  "value": "Body M" },
        { "forType": "ItemList", "view": "DateVList",   "fieldId": "title", "key": "comp.style",  "value": "Heading M" },

        //editing customizations
        { "forType": "*", "view": "editorSummary", "fieldId": "summaryTitle", "key": "comp.cssClass", "value": "headingGrey16" },
        { "forType": "*", "view": "editorSummary", "fieldId": "summaryDescription", "key": "comp.cssClass", "value": "textItalic14" },
        { "forType": "ItemList", "view": "editorSummary", "fieldId": "summaryTitle", "key": "comp.cssClass", "value": "headingGrey18" },
        { "forType": "*", "view": "editorForm", "fieldId": "label", "key": "comp.cssClass", "value": "labelStyle" },

// =============================================================
// Customizations for [news] component [ppPrt0] view [SimpleVList]
// =============================================================
        { "forType": "wix:Date", "view": "NewsDate1", "fieldId": "date", "key": "comp.format", "value": "longDate" },
        { "forType": "ItemList", "view": "SimpleVList", "fieldId": "title", "key": "layout.spacerAfter", "value": "10" },
        { "forType": "Item", "view": "DateAndSource1", "fieldId": "dateNameSwitch", "key": "layout.spacerBefore", "value": "0" },
        { "forType": "Item", "view": "DateAndSource1", "fieldId": "def_10", "key": "layout.spacerAfter", "value": "8" },
        { "forType": "ItemList", "view": "SimpleVList", "fieldId": "inline-news-spacer", "key": "comp.size", "value": "25" },
        { "forType": "Item", "view": "DateAndSource1", "fieldId": "contentBox", "key": "layout.spacerAfter", "value": "12" },
        { "forType": "ItemList", "view": "SimpleVList", "fieldId": "title", "key": "comp.style", "value": "Heading M" },
        { "forType": "Item", "view": "SimpleVList", "fieldId": "title", "key": "comp.style", "value": "Heading S" },
        { "forType": "wix:Date", "view": "NewsDate1", "fieldId": "date", "key": "comp.style", "value": "Body S" },
        { "forType": "Item", "view": "NewsSourceView1", "fieldId": "newsSource", "key": "comp.style", "value": "Body S" },
        { "forType": "Item", "view": "SimpleVList", "fieldId": "content", "key": "comp.style", "value": "Body M" },
        { "forType": "ItemList", "view": "SimpleVList", "fieldId": "items", "key": "comp.style", "value": "vr1" },
// =============================================================
// Customizations for [news] component [ppPrt1] view [ImageVList]
// =============================================================
        { "forType": "ItemList", "view": "ImageVList", "fieldId": "title", "key": "layout.spacerAfter", "value": "10" },
        { "forType": "Item", "view": "ImageVList", "fieldId": "title", "key": "layout.spacerAfter", "value": "2" },
        { "forType": "Item", "view": "DateAndSource2", "fieldId": "def_10", "key": "layout.spacerAfter", "value": "6" },
        { "forType": "ItemList", "view": "ImageVList", "fieldId": "inline-news-spacer", "key": "comp.size", "value": "29" },
        { "forType": "ItemList", "view": "ImageVList", "fieldId": "title", "key": "comp.style", "value": "Heading M" },
        { "forType": "Item", "view": "ImageVList", "fieldId": "image", "key": "comp.style", "value": "wp2" },
        { "forType": "Item", "view": "ImageVList", "fieldId": "title", "key": "comp.style", "value": "Heading S" },
        { "forType": "wix:Date", "view": "NewsDate2", "fieldId": "date", "key": "comp.style", "value": "Body S" },
        { "forType": "Item", "view": "NewsSourceView2", "fieldId": "newsSource", "key": "comp.style", "value": "Body S" },
        { "forType": "Item", "view": "ImageVList", "fieldId": "content", "key": "comp.style", "value": "Body M" },
        { "forType": "wix:Date", "view": "NewsDate2", "fieldId": "date", "key": "comp.format", "value": "longDate" },
        { "forType": "ItemList", "view": "ImageVList", "fieldId": "items", "key": "comp.style", "value": "vr1" },
// =============================================================
// Customizations for [news] component [ppPrt2] view [DateVList]
// =============================================================
        { "forType": "ItemList", "view": "DateVList", "fieldId": "title", "key": "comp.style", "value": "Heading S" },
        { "forType": "wix:Date", "view": "NewsDate3", "fieldId": "date", "key": "comp.style", "value": "Body M" },
        { "forType": "Item", "view": "DateVList", "fieldId": "title", "key": "comp.style", "value": "Body M" },
        { "forType": "wix:Date", "view": "NewsDate3", "fieldId": "date", "key": "comp.format", "value": "mm/dd/yyyy" },
        { "forType": "ItemList", "view": "DateVList", "fieldId": "items", "key": "comp.style", "value": "vr1" },
        { "forType": "ItemList", "view": "DateVList", "fieldId": "inline-news-spacer", "key": "comp.size", "value": "30" },
        { "forType": "Item", "view": "DateVList", "fieldId": "dateBox", "key": "layout.width", "value": "80" },
 // =============================================================
// Customizations for [news] component [ppPrt1] view [MobileVList]
// =============================================================
        { "forType": "ItemList", "view": "MobileVList", "fieldId": "title", "mode": "view", "key": "layout.spacerAfter", "value": "30" },
        { "forType": "Item", "view": "MobileVList", "fieldId": "title", "mode": "view", "key": "layout.spacerAfter", "value": "2" },
        { "forType": "Item", "view": "DateAndSource4", "fieldId": "def_10", "mode": "view", "key": "layout.spacerAfter", "value": "6" },
        { "forType": "ItemList", "view": "MobileVList", "fieldId": "inline-news-spacer", "mode": "view", "key": "comp.size", "value": "20" },
        { "forType": "ItemList", "view": "MobileVList", "fieldId": "title", "mode": "view", "key": "comp.style", "value": "Heading M" },
        { "forType": "Item", "view": "MobileVList", "fieldId": "image", "mode": "view", "key": "comp.style", "value": "wp2" },
        { "forType": "Item", "view": "MobileVList", "fieldId": "title", "mode": "view", "key": "comp.style", "value": "Heading S" },
        { "forType": "wix:Date", "view": "NewsDate4", "fieldId": "date", "mode": "view", "key": "comp.style", "value": "Body S" },
        { "forType": "Item", "view": "NewsSourceView4", "fieldId": "newsSource", "mode": "view", "key": "comp.style", "value": "Body S" },
        { "forType": "Item", "view": "MobileVList", "fieldId": "content", "mode": "view", "key": "comp.style", "value": "Body M" },
        { "forType": "wix:Date", "view": "NewsDate4", "fieldId": "date", "mode": "*", "key": "comp.format", "value": "longDate" },
        { "forType": "ItemList", "view": "MobileVList", "fieldId": "items", "mode": "view", "key": "comp.style", "value": "vr1" },

// =============================================================
// Customizations for [news] component [ppPrt1] view [ZoomView]
// =============================================================
        { "forType": "Item", "view": "DateAndSource1", "fieldId": "contentBox", "key": "layout.spacerAfter", "value": "0" }


    ],
    "dataEditing": {
        logicParams: {
            dataSelection: {
                categoriesSelectionSort: {title:1},
                noCategoriesLabel: "@News_noCategoriesLabel@",
                addFirstCategoryLabel: "@News_addFirstCategoryLabel@",
                anotherCategoryLabel: "@News_anotherCategoryLabel@",
                inlineHelp: "@News_editing_inlineHelp@",
                newItemType: "ItemList",
                newItemOverrides: {title:"@News_Title_newItemOverrides@"},
                newItemCollection: "Lists",
                newItemErrorTitle: "@News_newItemErrorTitle@",
                newItemErrorDescription: "@News_newItemErrorDescription@"
            }
        },
        dataSelectionLabel:"@News_dataSelectionLabel@",
        dataEditingLabel:"@News_dataEditingLabel@",
        helpId: '/node/10695',
        itemEditingHelpId: '/node/10695',
        "categories": [
            {
                "name": "@News_Categories_itemEditing@",
                "newTypes": ["ItemList"],
                "height" : [300],
                "items": [
                    {"type": "tree",
                        "name": "Sections tree",
                        "treeId": "newsTree"}
                ]
            },
            {
                "name": "@News_News_Items_itemEditing@",
                "newTypes": [],
                "items": [
                    {   "type": "query",
                        "name": "@News_All_Items_itemEditing@",
                        "collectionId": "Items",
                        "filter": {},
                        "sort": {"title":1},
                        "skip": 0,
                        "limit": -1,
                        "isDefault":true,
                        defaultChildType: 'Item',
                        noResultsMessage: "@News_Items_noResultsMessage@"
                    } ,
                    { "type": "query",
                      "name": "@News_Items_Hidden_items@",
                      "collectionId": "Items",
                      "filter": {"parentRefs":{"$size":0}},
                      "sort": {"title":1},
                      "skip": 0, "limit": -1 ,
                      defaultChildType: 'Item'}
                ]
            }
        ],
        "trees": {
            "newsTree": {
                "collectionId": "Lists",
                "includedTypes": ["ItemList", "Item"],
                "topLevelSorting": {"title": 1}
            }
        },

        "typeMetaData": {
            "ItemList": {
                "friendlyName": "@News_Item_list_typeMetaData@",
                "validationMessages": {
                    "title": "@News_Item_list_validationMessages@"
                },
                "newItemTemplate": {
                    "_type": "ItemList",
                    "title": "",
                    "items": []
                },
                childrenField: 'items',
                "parentsTreeId": "newsTree",
                "collectionId": "Lists",
                "noChildrenMessage": '@News_Item_list_noChildrenMessage@'
            },

            "Item": {
                "friendlyName": "@News_Item_typeMetaData@",
                "validationMessages": {
                    "title": "@News_Item_validationMessages@",
                    "content": "@News_Item_content_validationMessages@"
                },
                "newItemTemplate": {
                    "_type": "Item",
                    "title": "",
                    "date": {_type:'wix:Date', iso: "1970-01-01T00:00:00.000Z" },
                    "content": {_type:'wix:RichText'},
                    "newsSource": ""
                },
                parentField: "parentRefs",
                "parentsTreeId": "newsTree",
                "collectionId": "Items",
                noChildrenMessage: " "
            }

        }
    },
    lang: {
        // Start generated lang
"de": {"NEWS_APP_NAME":"News","NEWS_APP_parts_NAME":"Newsliste","NEWS_APP_parts_Description":"Erstellen Sie eine Liste Ihrer aktuellsten News. Wählen Sie ein Layout und passen Sie Ihre Newsliste an. Sie können alle News-Artikel in der Vorschau ansehen und diese individuell anpassen, indem Sie auf Ausdehnen anpassen klicken. Um einen neuen Bereich oder Artikel hinzuzufügen, klicken Sie auf News bearbeiten. ","NEWS_APP_Customize_Expand_NAME":"Ausdehnen anpassen","NEWS_APP_Customize_Expand_Description":"Klicken Sie auf irgendetwas im Ausdehnungsmodus um dessen Stil zu ändern und benutzen Sie die Einstellungen unten um den Abstand einzustellen.","Customize_Expand_itemNavigationLabel":"Wählen Sie den neuen Artikel, den Sie bearbeiten möchten.","Customize_Expand_prevBtnLabel":"Vorheriger Artikel","Customize_Expand_nextBtnLabel":"Nächster Artikel","News_noCategoriesLabel":"Kein News-Bereich gefunden","News_addFirstCategoryLabel":"Erstellen Sie einen neuen News-Bereich","News_anotherCategoryLabel":"Nein danke, ich möchte einen neuen News-Bereich erstellen ","News_editing_inlineHelp":"Wählen Sie, welcher News-Bereich angezeigt werden soll und klicken Sie auf OK.","News_Title_newItemOverrides":"Neuer News-Bereich","News_newItemErrorTitle":"Fehler beim Erstellen eines neuen News-Bereichs","News_newItemErrorDescription":"Bitte versuchen Sie es in wenigen Minuten erneut","News_Categories_itemEditing":"Alle Bereiche","News_News_Items_itemEditing":"News-Artikel","News_All_Items_itemEditing":"Alle Artikel","News_Items_noResultsMessage":"Kein News-Artikel gefunden","News_Items_Hidden_items":"Ausgeblendete Artikel","News_Item_list_typeMetaData":"News-Bereich","News_Item_list_validationMessages":"Titel muss mehr als 2 Zeichen  beinhalten","News_Item_list_noChildrenMessage":"Sie haben noch keine News. Klicken Sie auf \"Hinzufügen\" um damit zu beginnen, Ihre News-Bereiche hinzuzufügen.","News_Item_typeMetaData":"News-Artikel","News_Item_validationMessages":"Der Titel muss mehr als 2 Zeichen beinhalten","News_Item_content_validationMessages":"Der Inhalt muss mehr als 2 Zeichen beinhalten","News_dataSelectionLabel":"News Bereich auswählen","News_dataEditingLabel":"News bearbeiten","NEWS_VIEW_NAME_SIMPLE":"Newsliste","NEWS_VIEW_NAME_IMAGE":"Newsliste mit Bildern","NEWS_VIEW_NAME_DATE":"Newsliste mit Datum","Customize_News_DATE_FORMAT":"Datumsformat","Customize_News_DATE_COMBO1":"23 Jan 2017","Customize_News_DATE_COMBO2":"23-Jan-2017","Customize_News_DATE_COMBO3":"23. Januar 2017","Customize_News_DATE_COMBO4":"Sonntag, der 23. Januar 2017","Customize_News_DATE_COMBO5":"23. Januar 2017","Customize_News_DATE_COMBO6":"23-Januar-2017","Customize_Title_Source_spacing":"Abstand Titel und Erstellt von","Customize_Story_Source_spacing":"Abstand Erstellt von und Abschnitt","Customize_Show_source":"Erstellt von anzeigen","Customize_Show_date":"Datum anzeigen","Customize_Show_section_title":"Bereichstitel anzeigen","Customize_Section_title_spacing":"Abstand Bereichtitel","Customize_Item_spacing":"Abstand Artikel","Customize_Show_story":"Abschnitt anzeigen","Customize_Image_height":"Bildhöhe","Customize_Image_width":"Bildbreite","Customize_Item_image_spacing":"Abstand Artikel und Bild","Customize_Maximum_story_lines":"Maximale Zeilenanzahl Abschnitt","Customize_Date_item_spacing":"Abstand Datum und Artikel","EditorSummary_News_Section":"News-Bereich","EditorSummary_News_item":"News-Artikel","EditorForm_News_Title":"Titel:","EditorForm_News_Title_Placeholder":"Ich bin der Titel eines News-Bereichs","EditorForm_News_Item_Title":"Titel:","EditorForm_News_Item_Title_Placeholder":"Ich bin der Titel eines News-Artikels","EditorForm_News_Item_Image":"Bild:","EditorForm_News_Item_Date_Created":"Erstellt:","EditorForm_News_Item_Source":"Erstellt von:","EditorForm_News_Item_Source_Description":"Würdigung des Erstellers oder Autors","EditorForm_News_Item_Description":"Beschreibung:","ERROR_ITEM_NOT_FOUND_TITLE":"News-Bereich nicht gefunden","ERROR_ITEM_NOT_FOUND_DESCRIPTION":"Klicken Sie und wählen \"Neuen Bereich auswählen\" um einen gültigen News-Bereich auszuwählen","ERROR_ITEM_NOT_FOUND_DISCLAIMER":"Diese Nachricht wird nicht auf Ihrer publizierten Site angezeigt","ERROR_MESSAGE_IN_PUBLISHED":"Ein Fehler ist aufgetreten"},
"en": {
    "NEWS_APP_NAME": "News",
    "NEWS_APP_parts_NAME": "News List",
    "NEWS_APP_parts_Description": "Create a list of your latest news. Choose a layout and customize your news list. You can preview the full news item and personalize it by clicking Customize Expand. To add a news section or item, click Edit News.",

    "NEWS_APP_Customize_Expand_NAME": "Customize Expand",
    "NEWS_APP_Customize_Expand_Description": "Click anything in the expand view to change its style and use the settings below to adjust the spacing.",
    "Customize_Expand_itemNavigationLabel": "Choose the news item you want to edit.",
    "Customize_Expand_prevBtnLabel": "Previous Item",
    "Customize_Expand_nextBtnLabel": "Next Item",

    "News_noCategoriesLabel": "No news sections found",
    "News_addFirstCategoryLabel": "Create a new news section",
    "News_anotherCategoryLabel": "No thanks, I'd like to create a new news section",
    "News_editing_inlineHelp": "Pick which news section you'd like to appear and click OK.",
    "News_Title_newItemOverrides":"New News section",
    "News_newItemErrorTitle": "Error creating new news section",
    "News_newItemErrorDescription": "Please try again in a few minutes",
    "News_Categories_itemEditing": "All Sections",
    "News_News_Items_itemEditing": "News Items",
    "News_All_Items_itemEditing": "All items",
    "News_Items_noResultsMessage": "No News Items found",
    "News_Items_Hidden_items": "Hidden items",
    "News_Item_list_typeMetaData": "News Section",
    "News_Item_list_validationMessages": "Title needs to be longer than 2 characters",
    "News_Item_list_noChildrenMessage": "You have no news yet. \n Click \"Add\" to start adding \n items to your news section.",
    "News_Item_typeMetaData": "News Item",
    "News_Item_validationMessages": "Title needs to be longer than 2 characters",
    "News_Item_content_validationMessages": "Content needs to be longer than 2 characters",

    "News_dataSelectionLabel":"Choose News Section",
    "News_dataEditingLabel":"Edit News",

    "NEWS_VIEW_NAME_SIMPLE": "News list",
    "NEWS_VIEW_NAME_IMAGE": "News list with images",
    "NEWS_VIEW_NAME_DATE": "News list with date",
    "NEWS_VIEW_NAME_MOBILE": "News column",

    "Customize_News_DATE_FORMAT": "Date format",

    "Customize_Title_Source_spacing": "Title and created by spacing",
    "Customize_Story_Source_spacing": "Created by and story spacing",
    "Customize_Show_source": "Show created by",
    "Customize_Show_date": "Show date",
    "Customize_Show_section_title": "Show section title",
    "Customize_Show_image": "Show image",
    "Customize_Section_title_spacing": "Section title spacing",
    "Customize_Item_spacing": "Item spacing",
    "Customize_Show_story": "Show story",
    "Customize_Image_height": "Image height",
    "Customize_Image_width": "Image width",
    "Customize_Item_image_spacing": "Item and image spacing",
    "Customize_Maximum_story_lines": "Maximum story lines",
    "Customize_Date_item_spacing": "Date and item spacing",
    "Customize_image_before_spacing":"Spacing above image",
    "Customize_image_after_spacing":"Spacing below image",

    "EditorSummary_News_Section": "News Section",
    "EditorSummary_News_item": "News item",

    "EditorForm_News_Title": "Title: ",
    "EditorForm_News_Title_Placeholder": "I'm a News Section title.",
    "EditorForm_News_Item_Title": "Title: ",
    "EditorForm_News_Item_Title_Placeholder": "I'm a News Item title.",
    "EditorForm_News_Item_Image": "Image: ",
    "EditorForm_News_Item_Date_Created": "Created: ",
    "EditorForm_News_Item_Source": "Created by: ",
    "EditorForm_News_Item_Source_Description": "Give credit to the creator or author.",
    "EditorForm_News_Item_Description": "Description: ",

	"ERROR_ITEM_NOT_FOUND_TITLE": "News Section not found",
	"ERROR_ITEM_NOT_FOUND_DESCRIPTION": "Click and select \"Choose News Section\" to select a valid News Section",
	"ERROR_ITEM_NOT_FOUND_DISCLAIMER": "This message will not be shown on your published site",
	"ERROR_MESSAGE_IN_PUBLISHED": "Error has occurred"
},
"es": {"NEWS_APP_NAME":"Noticias","NEWS_APP_parts_NAME":"Lista de Noticias","NEWS_APP_parts_Description":"Crea una lista de tus últimas noticias. Elige un diseño y personaliza tu lista de noticias. Puedes ver la noticia completa y personalizarla haciendo clic en Personalizar Expandir. Para agregar una sección de noticias o un artículo, haz clic en Editar Noticia.","NEWS_APP_Customize_Expand_NAME":"Personalizar Expandir","NEWS_APP_Customize_Expand_Description":"Haz clic en cualquier elemento al expandirse para cambiar su estilo y utilizar la configuración siguiente para ajustar el espaciado.","Customize_Expand_itemNavigationLabel":"Elige la noticia que quieres editar.","Customize_Expand_prevBtnLabel":"Item Anterior","Customize_Expand_nextBtnLabel":"Item Siguiente ","News_noCategoriesLabel":"No se encontró secciones de noticias","News_addFirstCategoryLabel":"Crear una nueva sección de noticia","News_anotherCategoryLabel":"No gracias, quiero crear una sección nueva","News_editing_inlineHelp":"Elige cual sección de noticias quieres que aparezca y haz clic en OK.","News_Title_newItemOverrides":"Nueva sección de noticias","News_newItemErrorTitle":"Error al crear sección de noticia","News_newItemErrorDescription":"Por favor intenta de nuevo en unos minutos","News_Categories_itemEditing":"Todas las Secciones","News_News_Items_itemEditing":"Items de Noticias","News_All_Items_itemEditing":"Todos los items","News_Items_noResultsMessage":"No se encontraron Items de Noticias","News_Items_Hidden_items":"Items Ocultos","News_Item_list_typeMetaData":"Sección de Noticias","News_Item_list_validationMessages":"El título debe tener más de 2 caracteres","News_Item_list_noChildrenMessage":"No tiene noticias todavía. Haz clic en \"Agregar\" para empezar a añadir artículos a tu sección de noticias.","News_Item_typeMetaData":"Item de Noticia","News_Item_validationMessages":"El título debe tener más de 2 caracteres","News_Item_content_validationMessages":"El contenido debe tener más de 2 caracteres","News_dataSelectionLabel":"Elegir Sección de Noticia","News_dataEditingLabel":"Editar Noticia","NEWS_VIEW_NAME_SIMPLE":"Lista de noticia","NEWS_VIEW_NAME_IMAGE":"Lista de noticias con imagenes","NEWS_VIEW_NAME_DATE":"Lista de noticias con fecha","Customize_News_DATE_FORMAT":"Formato de la fecha","Customize_News_DATE_COMBO1":"23 Ene 2017","Customize_News_DATE_COMBO2":"23-Ene-2017","Customize_News_DATE_COMBO3":"Enero 23, 2017","Customize_News_DATE_COMBO4":"Domingo, Enero 23, 2017","Customize_News_DATE_COMBO5":"23 de Enero del 2017","Customize_News_DATE_COMBO6":"23-Enero-2017","Customize_Title_Source_spacing":"Espaciado de título y creado por","Customize_Story_Source_spacing":"Espaciado de creado por y de la historia","Customize_Show_source":"Mostrar creado por","Customize_Show_date":"Mostrar Fecha","Customize_Show_section_title":"Mostrar título de la sección","Customize_Section_title_spacing":"Espaciado del título de la sección","Customize_Item_spacing":"Espaciado del item","Customize_Show_story":"Mostrar historia","Customize_Image_height":"Altura de imagen","Customize_Image_width":"Anchura de imagen","Customize_Item_image_spacing":"Espaciado del item y la imágen","Customize_Maximum_story_lines":"Máximo de líneas","Customize_Date_item_spacing":"Espaciado de item y fecha","EditorSummary_News_Section":"Sección de Noticia","EditorSummary_News_item":"Item de noticia","EditorForm_News_Title":"Título:","EditorForm_News_Title_Placeholder":"Soy un título de una Sección de Noticia.","EditorForm_News_Item_Title":"Título:","EditorForm_News_Item_Title_Placeholder":"Soy un título de un Item de Noticia.","EditorForm_News_Item_Image":"Imágen:","EditorForm_News_Item_Date_Created":"Creado:","EditorForm_News_Item_Source":"Creado por:","EditorForm_News_Item_Source_Description":"Dar crédito al creador o al autor.","EditorForm_News_Item_Description":"Descripción:","ERROR_ITEM_NOT_FOUND_TITLE":"No se encontró esta Sección de Noticia ","ERROR_ITEM_NOT_FOUND_DESCRIPTION":"Haz clic en \"Elegir Sección de Noticia\" para seleccionar una sección válida","ERROR_ITEM_NOT_FOUND_DISCLAIMER":"Este mensaje no se verá en tu sitio publicado","ERROR_MESSAGE_IN_PUBLISHED":"Ocurrió un error"},
"fr": {"NEWS_APP_NAME":"News","NEWS_APP_parts_NAME":"News List","NEWS_APP_parts_Description":"Créez une liste de vos dernières news. Choisissez une mise en page et personnalisez votre news list. Vous pouvez voir un aperçu de l'élément news dans son ensemble et le personnaliser en cliquant sur Personnaliser Agrandissement. Pour ajouter une section news ou un élément, cliquez sur Modifier News. ","NEWS_APP_Customize_Expand_NAME":"Personnaliser Agrandissement\n\n\n","NEWS_APP_Customize_Expand_Description":"Cliquez sur un élément en mode agrandissement pour changer son style et utilisez les paramètres ci-dessous pour ajuster l'espacement.","Customize_Expand_itemNavigationLabel":"Sélectionnez  l'élément news que vous souhaitez modifier.","Customize_Expand_prevBtnLabel":"Élément Précédent","Customize_Expand_nextBtnLabel":"Élément Suivant","News_noCategoriesLabel":"Aucune section News trouvée","News_addFirstCategoryLabel":"Créer une nouvelle section news","News_anotherCategoryLabel":"Non merci, j'aimerais créer une nouvelle Section News","News_editing_inlineHelp":"Choisissez la section news que vous souhaitez voir apparaître et cliquez sur OK.","News_Title_newItemOverrides":"Nouvelle section news","News_newItemErrorTitle":"Erreur lors de la création d'une nouvelle section news","News_newItemErrorDescription":"Veuillez réessayer dans quelques minutes\n\n","News_Categories_itemEditing":"Toutes les Sections","News_News_Items_itemEditing":"Éléments News","News_All_Items_itemEditing":"Tous les éléments","News_Items_noResultsMessage":"Aucun Élément News trouvé\n\n","News_Items_Hidden_items":"Éléments cachés","News_Item_list_typeMetaData":"Section News","News_Item_list_validationMessages":"Le titre doit contenir plus de 2 caractères","News_Item_list_noChildrenMessage":"Vous n'avez pas encore de news. Cliquez sur \"Ajouter\" pour commencer à ajouter des éléments dans votre section news.\n\n\n\n\n\n\n","News_Item_typeMetaData":"Élément News","News_Item_validationMessages":"Le titre doit contenir plus de 2 caractères","News_Item_content_validationMessages":"Le contenu doit comporté plus de 2 caractères\n","News_dataSelectionLabel":"Choisir Section News","News_dataEditingLabel":"Modifier News","NEWS_VIEW_NAME_SIMPLE":"News List\n","NEWS_VIEW_NAME_IMAGE":"News list avec images","NEWS_VIEW_NAME_DATE":"News list avec date","Customize_News_DATE_FORMAT":"Format date","Customize_News_DATE_COMBO1":"23 Jan 2017","Customize_News_DATE_COMBO2":"23-Jan-2017","Customize_News_DATE_COMBO3":"23 Janvier, 2017","Customize_News_DATE_COMBO4":"Dimanche 23 Janvier 2017","Customize_News_DATE_COMBO5":"23 Janvier 2017","Customize_News_DATE_COMBO6":"23-Janvier-2017","Customize_Title_Source_spacing":"Espace entre Titre et Créer par","Customize_Story_Source_spacing":"Espace entre Créer par et Article","Customize_Show_source":"Afficher créer par","Customize_Show_date":"Afficher date","Customize_Show_section_title":"Afficher section titre","Customize_Section_title_spacing":"Espacement de la section titre","Customize_Item_spacing":"Espacement de l'élément","Customize_Show_story":"Afficher article","Customize_Image_height":"Hauteur de l'image","Customize_Image_width":"Largeur de l'image","Customize_Item_image_spacing":"Espace entre élément et Image","Customize_Maximum_story_lines":"Nombre de lignes maximum","Customize_Date_item_spacing":"Espace entre date et Article","EditorSummary_News_Section":"Section News","EditorSummary_News_item":"Élément News","EditorForm_News_Title":"Titre:","EditorForm_News_Title_Placeholder":"Je suis un titre de Section News.","EditorForm_News_Item_Title":"Titre:","EditorForm_News_Item_Title_Placeholder":"Je suis un titre d'Élément News","EditorForm_News_Item_Image":"Image:","EditorForm_News_Item_Date_Created":"Créé:","EditorForm_News_Item_Source":"Créé par:","EditorForm_News_Item_Source_Description":"Mentionnez le créateur ou l'auteur.","EditorForm_News_Item_Description":"Description:","ERROR_ITEM_NOT_FOUND_TITLE":"Section News introuvable","ERROR_ITEM_NOT_FOUND_DESCRIPTION":"Cliquez et sélectionnez  \"Choisir une Section News\" pour sélectionner une Section News valide","ERROR_ITEM_NOT_FOUND_DISCLAIMER":"Ce message n'apparaîtra pas sur la version publiée de votre site","ERROR_MESSAGE_IN_PUBLISHED":"Une erreur s'est produite"},
"it": {"NEWS_APP_NAME":"News","NEWS_APP_parts_NAME":"News List","NEWS_APP_parts_Description":"Crea una lista delle tue ultime news. Scegli un layout e personalizza la tua news list. Puoi vedere in anteprima l'intero elemento news e personalizzarlo cliccando su Personalizza Espandi. Per aggiungere una sezione o un elemento news, clicca su Modifica News.","NEWS_APP_Customize_Expand_NAME":"Personalizza Espandi","NEWS_APP_Customize_Expand_Description":"Clicca su un qualsiasi elemento nella visualizzazione estesa per cambiare il suo stile e usa le impostazioni sotto per aggiustare la spaziatura","Customize_Expand_itemNavigationLabel":"Seleziona l'elemento news che desideri modificare.","Customize_Expand_prevBtnLabel":"Elemento Precedente","Customize_Expand_nextBtnLabel":"Elemento Successivo","News_noCategoriesLabel":"Nessuna sezione news trovata","News_addFirstCategoryLabel":"Crea una nuova sezione news","News_anotherCategoryLabel":"No grazie, vorrei creare una nuova sezione news","News_editing_inlineHelp":"Scegli quale sezione news vorresti far apparire e clicca OK.","News_Title_newItemOverrides":"Nuova sezione news","News_newItemErrorTitle":"Errore nella creazione di una nuova sezione news","News_newItemErrorDescription":"Per favore riprova tra qualche minuto","News_Categories_itemEditing":"Tutte le Sezioni","News_News_Items_itemEditing":"Elementi News","News_All_Items_itemEditing":"Tutti gli elementi","News_Items_noResultsMessage":"Nessun Elemento News trovato","News_Items_Hidden_items":"Elementi nascosti","News_Item_list_typeMetaData":"Sezione News","News_Item_list_validationMessages":"Il titolo dev'essere più lungo di 2 caratteri","News_Item_list_noChildrenMessage":"Non sono ancora presenti news.\nClicca \"Aggiungi\" per iniziare ad aggiungere elementi alla tua sezione news.","News_Item_typeMetaData":"Elemento News","News_Item_validationMessages":"Il titolo dev'essere più lungo di 2 caratteri","News_Item_content_validationMessages":"Il contenuto dev'essere più lungo di 2 caratteri","News_dataSelectionLabel":"Scegli Sezione News","News_dataEditingLabel":"Modifica News","NEWS_VIEW_NAME_SIMPLE":"Lista news","NEWS_VIEW_NAME_IMAGE":"Lista news con immagini","NEWS_VIEW_NAME_DATE":"Lista news con data","Customize_News_DATE_FORMAT":"Formato data","Customize_News_DATE_COMBO1":"23 Gen 2017","Customize_News_DATE_COMBO2":"23-Gen-2017","Customize_News_DATE_COMBO3":"23 Gennaio, 2017","Customize_News_DATE_COMBO4":"Domenica, 23 Gennaio, 2017","Customize_News_DATE_COMBO5":"23 Gennaio 2017","Customize_News_DATE_COMBO6":"23-Gennaio-2017","Customize_Title_Source_spacing":"Spaziatura del Titolo e di Creato da","Customize_Story_Source_spacing":"Spaziatura di Creato da e della Storia","Customize_Show_source":"Mostra creato da","Customize_Show_date":"Mostra data","Customize_Show_section_title":"Mostra titolo sezione","Customize_Section_title_spacing":"Spaziatura della sezione titolo","Customize_Item_spacing":"Spaziatura dell'elemento","Customize_Show_story":"Mostra storia","Customize_Image_height":"Altezza dell'immagine","Customize_Image_width":"Larghezza dell'immagine","Customize_Item_image_spacing":"Spaziatura dell'elemento e dell'immagine","Customize_Maximum_story_lines":"Numero massimo di linee per storia","Customize_Date_item_spacing":"Spaziatura della data e dell'elemento","EditorSummary_News_Section":"Sezione News","EditorSummary_News_item":"Elemento News","EditorForm_News_Title":"Titolo:","EditorForm_News_Title_Placeholder":"Sono il titolo di una Sezione News.","EditorForm_News_Item_Title":"Titolo:","EditorForm_News_Item_Title_Placeholder":"Sono il titolo di un Elemento News","EditorForm_News_Item_Image":"Immagine:","EditorForm_News_Item_Date_Created":"Creato:","EditorForm_News_Item_Source":"Creato da:","EditorForm_News_Item_Source_Description":"Accredita il creatore o l'autore:","EditorForm_News_Item_Description":"Descrizione:","ERROR_ITEM_NOT_FOUND_TITLE":"Sezione News non trovata","ERROR_ITEM_NOT_FOUND_DESCRIPTION":"Clicca e seleziona \"Scegli Sezione News\" per selezionare una Sezione News valida.","ERROR_ITEM_NOT_FOUND_DISCLAIMER":"Questo messaggio non verrà visualizzato sul tuo sito pubblicato","ERROR_MESSAGE_IN_PUBLISHED":"Si è verificato un errore"},
"ja": {"NEWS_APP_NAME":"ニュース","NEWS_APP_parts_NAME":"ニュースリスト","NEWS_APP_parts_Description":"最新ニュースのリストを作成します。レイアウトを選択して、ニュースリストをカスタマイズして下さい。「拡大モードのカスタマイズ」をクリックすると、ニュースアイテムのプレビューを表示させたり、カスタマイズしたりできます。ニュースセクションを追加するには、「ニュースの編集」をクリックして下さい。","NEWS_APP_Customize_Expand_NAME":"拡大モードのカスタマイズ","NEWS_APP_Customize_Expand_Description":"拡大表示されたアイテムをクリックしてスタイルを変更します。下に表示された設定でスペースを調整します。","Customize_Expand_itemNavigationLabel":"編集したいニュースアイテムの選択","Customize_Expand_prevBtnLabel":"前のアイテム","Customize_Expand_nextBtnLabel":"次のアイテム","News_noCategoriesLabel":"ニュースセクションは見つかりませんでした","News_addFirstCategoryLabel":"新しいニュースセクションの作成","News_anotherCategoryLabel":"いいえ、結構です。新しいニュースセクションを作成します。","News_editing_inlineHelp":"表示させたいニュースセクションを選択し、「ＯＫ」をクリックします。","News_Title_newItemOverrides":"新しいニュースセクション","News_newItemErrorTitle":"ニュースセクションを作成中にエラーが発生しました","News_newItemErrorDescription":"数分経ってから再度実行して下さい。","News_Categories_itemEditing":"全てのセクション","News_News_Items_itemEditing":"ニュースアイテム","News_All_Items_itemEditing":"全てのアイテム","News_Items_noResultsMessage":"ニュースアイテムは見つかりませんでした","News_Items_Hidden_items":"非表示のアイテム","News_Item_list_typeMetaData":"ニュースセクション","News_Item_list_validationMessages":"タイトルは2文字以上で入力して下さい。","News_Item_list_noChildrenMessage":"まだニュースを投稿していません。「追加」をクリックして、ニュースセクションにアイテムを追加して下さい。","News_Item_typeMetaData":"ニュースアイテム","News_Item_validationMessages":"タイトルは2文字以上で入力して下さい。","News_Item_content_validationMessages":"コンテンツは2文字以上で入力して下さい。","News_dataSelectionLabel":"ニュースセクションの選択","News_dataEditingLabel":"ニュースの編集","NEWS_VIEW_NAME_SIMPLE":"ニュースリスト","NEWS_VIEW_NAME_IMAGE":"画像が表示されたニュースリスト","NEWS_VIEW_NAME_DATE":"日付が表示されたニュースリスト","Customize_News_DATE_FORMAT":"日付の表示方法","Customize_News_DATE_COMBO1":"2017年1月23日","Customize_News_DATE_COMBO2":"1月23日2017年","Customize_News_DATE_COMBO3":"January 23, 2017","Customize_News_DATE_COMBO4":"2017年1月23日 （日）","Customize_News_DATE_COMBO5":"2017年1月23日","Customize_News_DATE_COMBO6":"1月23日2017年","Customize_Title_Source_spacing":"タイトルと作成者間の幅","Customize_Story_Source_spacing":"作成者と記事間の幅","Customize_Show_source":"作成者名の表示","Customize_Show_date":"日付の表示","Customize_Show_section_title":"セクションタイトルの表示","Customize_Section_title_spacing":"セクションタイトル間の幅","Customize_Item_spacing":"アイテム間の幅","Customize_Show_story":"記事の表示","Customize_Image_height":"画像の高さ","Customize_Image_width":"画像の幅","Customize_Item_image_spacing":"アイテムと画像間の幅","Customize_Maximum_story_lines":"記事の最大行数","Customize_Date_item_spacing":"日付とアイテム間のスペース","EditorSummary_News_Section":"ニュースセクション","EditorSummary_News_item":"ニュースアイテム","EditorForm_News_Title":"タイトル","EditorForm_News_Title_Placeholder":"ここにニュースセクションタイトルを記入します。","EditorForm_News_Item_Title":"タイトル","EditorForm_News_Item_Title_Placeholder":"ここにニュースアイテムタイトルを記入します。","EditorForm_News_Item_Image":"画像","EditorForm_News_Item_Date_Created":"作成日","EditorForm_News_Item_Source":"作成者","EditorForm_News_Item_Source_Description":"作成者または著者にクレジットする","EditorForm_News_Item_Description":"説明","ERROR_ITEM_NOT_FOUND_TITLE":"ニュースセクションが見つかりませんでした","ERROR_ITEM_NOT_FOUND_DESCRIPTION":"「ニュースセクション」をクリックして、有効なニュースセクションを選択してください","ERROR_ITEM_NOT_FOUND_DISCLAIMER":"このメッセージは、公開されたウェブサイトには表示されません","ERROR_MESSAGE_IN_PUBLISHED":"エラーが発生しました"},
"ko": {"NEWS_APP_NAME":"News","NEWS_APP_parts_NAME":"News List","NEWS_APP_parts_Description":"Create a list of your latest news. Choose a layout and customize your news list. You can preview the full news item and personalize it by clicking Customize Expand. To add a news section or item, click Edit News.","NEWS_APP_Customize_Expand_NAME":"Customize Expand","NEWS_APP_Customize_Expand_Description":"Click anything in the expand view to change its style and use the settings below to adjust the spacing.","Customize_Expand_itemNavigationLabel":"Choose the news item you want to edit.","Customize_Expand_prevBtnLabel":"Previous Item","Customize_Expand_nextBtnLabel":"Next Item","News_noCategoriesLabel":"No news sections found","News_addFirstCategoryLabel":"Create a new news section","News_anotherCategoryLabel":"No thanks, I'd like to create a new news section","News_editing_inlineHelp":"Pick which news section you'd like to appear and click OK.","News_Title_newItemOverrides":"New News section","News_newItemErrorTitle":"Error creating new news section","News_newItemErrorDescription":"Please try again in a few minutes","News_Categories_itemEditing":"All Sections","News_News_Items_itemEditing":"News Items","News_All_Items_itemEditing":"All items","News_Items_noResultsMessage":"No News Items found","News_Items_Hidden_items":"Hidden items","News_Item_list_typeMetaData":"News Section","News_Item_list_validationMessages":"Title needs to be longer than 2 characters","News_Item_list_noChildrenMessage":"You have no news yet. \n Click \"Add\" to start adding \n items to your news section.","News_Item_typeMetaData":"News Item","News_Item_validationMessages":"Title needs to be longer than 2 characters","News_Item_content_validationMessages":"Content needs to be longer than 2 characters","News_dataSelectionLabel":"Choose News Section","News_dataEditingLabel":"Edit News","NEWS_VIEW_NAME_SIMPLE":"News list","NEWS_VIEW_NAME_IMAGE":"News list with images","NEWS_VIEW_NAME_DATE":"News list with date","Customize_News_DATE_FORMAT":"Date format","Customize_News_DATE_COMBO1":"23 Jan 2017","Customize_News_DATE_COMBO2":"23-Jan-2017","Customize_News_DATE_COMBO3":"January 23, 2017","Customize_News_DATE_COMBO4":"Sunday, January 23, 2017","Customize_News_DATE_COMBO5":"23 January 2017","Customize_News_DATE_COMBO6":"23-January-2017","Customize_Title_Source_spacing":"Title and created by spacing","Customize_Story_Source_spacing":"Created by and story spacing","Customize_Show_source":"Show created by","Customize_Show_date":"Show date","Customize_Show_section_title":"Show section title","Customize_Section_title_spacing":"Section title spacing","Customize_Item_spacing":"Item spacing","Customize_Show_story":"Show story","Customize_Image_height":"Image height","Customize_Image_width":"Image width","Customize_Item_image_spacing":"Item and image spacing","Customize_Maximum_story_lines":"Maximum story lines","Customize_Date_item_spacing":"Date and item spacing","EditorSummary_News_Section":"News Section","EditorSummary_News_item":"News item","EditorForm_News_Title":"Title: ","EditorForm_News_Title_Placeholder":"I'm a News Section title.","EditorForm_News_Item_Title":"Title: ","EditorForm_News_Item_Title_Placeholder":"I'm a News Item title.","EditorForm_News_Item_Image":"Image: ","EditorForm_News_Item_Date_Created":"Created: ","EditorForm_News_Item_Source":"Created by: ","EditorForm_News_Item_Source_Description":"Give credit to the creator or author.","EditorForm_News_Item_Description":"Description: ","ERROR_ITEM_NOT_FOUND_TITLE":"News Section not found","ERROR_ITEM_NOT_FOUND_DESCRIPTION":"Click and select \"Choose News Section\" to select a valid News Section","ERROR_ITEM_NOT_FOUND_DISCLAIMER":"This message will not be shown on your published site","ERROR_MESSAGE_IN_PUBLISHED":"Error has occurred"},
"pl": {"NEWS_APP_NAME":"Artykuły","NEWS_APP_parts_NAME":"News List","NEWS_APP_parts_Description":"Kliknij na listę ostatnich artykułów. Wybierz układ i dostosuj listę artykułów. Możesz uzyskać podgląd pełnego artykułu i go spersonalizować, klikając Dostosuj Tryb Rozszerzenia. Aby dodać sekcję artykułów lub artykuł, kliknij Edytuj Artykuł.","NEWS_APP_Customize_Expand_NAME":"Dostosuj Tryb Rozszerzenia","NEWS_APP_Customize_Expand_Description":"Kliknij na dowolne pole w trybie rozszerzonym, aby zmienić styl i użyć ustawień poniżej w celu dostosowania odstępu.","Customize_Expand_itemNavigationLabel":"Wybierz artykuł, który chcesz edytować.","Customize_Expand_prevBtnLabel":"Poprzedni Artykuł","Customize_Expand_nextBtnLabel":"Następny Artykuł","News_noCategoriesLabel":"Nie odnaleziono sekcji artykułów","News_addFirstCategoryLabel":"Stwórz nową sekcję artykułów","News_anotherCategoryLabel":"Nie dziękuję, chcę stworzyć nową sekcję artykułów ","News_editing_inlineHelp":"Wybierz sekcję artykułów, która ma zostać wyświetlona i kliknij OK.","News_Title_newItemOverrides":"Sekcja Nowych Artykułów","News_newItemErrorTitle":"Wystąpił błąd podczas tworzenia nowej sekcji artykułów","News_newItemErrorDescription":"Spróbuj ponownie za kilka minut","News_Categories_itemEditing":"Wszystkie Sekcje","News_News_Items_itemEditing":"Artykuły","News_All_Items_itemEditing":"Wszystkie artykuły","News_Items_noResultsMessage":"Nie Odnaleziono Artykułów","News_Items_Hidden_items":"Ukryte Artykuły","News_Item_list_typeMetaData":"Nowa Sekcja","News_Item_list_validationMessages":"Tytuł musi być dłuższy niż 2 znaki","News_Item_list_noChildrenMessage":"Nie posiadasz jeszcze artykułów.  Kliknij \"Dodaj\", aby rozpocząć dodawanie elementów do sekcji artykułów.","News_Item_typeMetaData":"Artykuł","News_Item_validationMessages":"Tytuł musi być dłuższy niż 2 znaki","News_Item_content_validationMessages":"Treść musi być dłuższa niż 2 znaki","News_dataSelectionLabel":"Wybierz Sekcję Artykułów","News_dataEditingLabel":"Edytuj Artykuł","NEWS_VIEW_NAME_SIMPLE":"Lista Artykułów","NEWS_VIEW_NAME_IMAGE":"Lista Artykułów z obrazami","NEWS_VIEW_NAME_DATE":"Lista Artykułów z datą","Customize_News_DATE_FORMAT":"Format daty","Customize_News_DATE_COMBO1":"23 Styczeń 2017","Customize_News_DATE_COMBO2":"23-St-2017","Customize_News_DATE_COMBO3":"23 Stycznia, 2017","Customize_News_DATE_COMBO4":"Niedziela, 23 Stycznia 2017","Customize_News_DATE_COMBO5":"23 Stycznia 2017","Customize_News_DATE_COMBO6":"23-Stycznia-2017","Customize_Title_Source_spacing":"Odstęp tytułu i stworzone przez","Customize_Story_Source_spacing":"Odstęp stworzone przez i wpisu","Customize_Show_source":"Pokaż stworzone przez","Customize_Show_date":"Pokaż datę","Customize_Show_section_title":"Pokaż sekcję tytułu","Customize_Section_title_spacing":"Odstęp sekcji tytułu","Customize_Item_spacing":"Odstęp artykułu","Customize_Show_story":"Pokaż wpis","Customize_Image_height":"Wysokość Obrazu","Customize_Image_width":"Szerokość Obrazu","Customize_Item_image_spacing":"Odstęp artykułu i obrazu","Customize_Maximum_story_lines":"Maksymalna fabuła","Customize_Date_item_spacing":"Odstęp daty i artykułu","EditorSummary_News_Section":"Sekcja artykułów","EditorSummary_News_item":"Wpis","EditorForm_News_Title":"Tytuł:","EditorForm_News_Title_Placeholder":"Jestem tytułem Sekcji Artykułów.","EditorForm_News_Item_Title":"Tytuł:","EditorForm_News_Item_Title_Placeholder":"Jestem tytułem Artykułu. ","EditorForm_News_Item_Image":"Obraz:","EditorForm_News_Item_Date_Created":"Dodane:","EditorForm_News_Item_Source":"Stworzone przez:","EditorForm_News_Item_Source_Description":"Wyróżnij twórcę lub autora.","EditorForm_News_Item_Description":"Opis:","ERROR_ITEM_NOT_FOUND_TITLE":"Nie odnaleziono Sekcji Aktualności","ERROR_ITEM_NOT_FOUND_DESCRIPTION":"Kliknij na \"Wybierz Sekcję Aktualności\", aby wybrać ważną Sekcję Aktualności","ERROR_ITEM_NOT_FOUND_DISCLAIMER":"Ta wiadomość nie będzie wyświetlona na twojej opublikowanej witrynie","ERROR_MESSAGE_IN_PUBLISHED":"Wystąpił błąd"},
"pt": {"NEWS_APP_NAME":"Notícias","NEWS_APP_parts_NAME":"Lista de Notícias","NEWS_APP_parts_Description":"Crie uma lista com as suas notícias mais recentes. Escolha um layout e personalize a sua lista de notícias. Você pode pré-visualizar todas as suas notícias e personalizá-las clicando em Personalizar Expansão. Para adicionar uma seção de notícias ou um artigo, clique em Editar Notícias.","NEWS_APP_Customize_Expand_NAME":"Personalizar Expansão","NEWS_APP_Customize_Expand_Description":"Clique em qualquer lugar no modo de expansão para alterar o seu estilo e use as configurações abaixo para ajustar o espaçamento.","Customize_Expand_itemNavigationLabel":"Escolha a notícia que você quer editar.","Customize_Expand_prevBtnLabel":"Artigo Anterior","Customize_Expand_nextBtnLabel":"Próximo Artigo","News_noCategoriesLabel":"Não foram encontradas seções de notícias","News_addFirstCategoryLabel":"Crie uma nova seção de notícia","News_anotherCategoryLabel":"Não obrigado, eu quero criar uma nova seção de notícias","News_editing_inlineHelp":"Escolha a seção de notícias que quer que apareça e clique em OK.","News_Title_newItemOverrides":"Nova secção de notícias","News_newItemErrorTitle":"Erro ao criar nova seção de notícias","News_newItemErrorDescription":"Por favor, tente novamente em alguns minutos","News_Categories_itemEditing":"Todas as Seções","News_News_Items_itemEditing":"Notícias","News_All_Items_itemEditing":"Todas os artigos","News_Items_noResultsMessage":"Não foram encontradas notícias","News_Items_Hidden_items":"Artigos Ocultas","News_Item_list_typeMetaData":"Seção de Notícias","News_Item_list_validationMessages":"O título tem de ter mais de 2 caracteres","News_Item_list_noChildrenMessage":"Você ainda não tem notícias. Clique em \"Adicionar\" para começar a adicionar artigos em suas seções de notícias.","News_Item_typeMetaData":"Notícia","News_Item_validationMessages":"O título tem de ter mais de 2 caracteres","News_Item_content_validationMessages":"O conteúdo tem de ter mais de 2 caracteres","News_dataSelectionLabel":"Escolha Seção de Notícias","News_dataEditingLabel":"Editar Notícias","NEWS_VIEW_NAME_SIMPLE":"Lista de Notícias","NEWS_VIEW_NAME_IMAGE":"Lista de notícias com imagens","NEWS_VIEW_NAME_DATE":"Lista de notícias com data","Customize_News_DATE_FORMAT":"Formato da data","Customize_News_DATE_COMBO1":"23 Jan 2017","Customize_News_DATE_COMBO2":"23-Jan-2017","Customize_News_DATE_COMBO3":"23 de Janeiro, 2017","Customize_News_DATE_COMBO4":"Domingo, 23 de Janeiro de 2017","Customize_News_DATE_COMBO5":"23 de Janeiro de 2017","Customize_News_DATE_COMBO6":"23-Janeiro-2017","Customize_Title_Source_spacing":"Espaçamento do título e criado por","Customize_Story_Source_spacing":"Espaçamento de criado por e história","Customize_Show_source":"Mostrar criado por","Customize_Show_date":"Mostrar data","Customize_Show_section_title":"Mostrar título da seção","Customize_Section_title_spacing":"Espaçamento do título da seção","Customize_Item_spacing":"Espaçamento do artigo","Customize_Show_story":"Mostrar história","Customize_Image_height":"Altura da imagem","Customize_Image_width":"Largura da imagem","Customize_Item_image_spacing":"Espaçamento do artigo e da imagem","Customize_Maximum_story_lines":"Número máximo de linhas por história","Customize_Date_item_spacing":"Espaçamento da data e artigo\n","EditorSummary_News_Section":"Seção de Notícia","EditorSummary_News_item":"Notícia","EditorForm_News_Title":"Título:","EditorForm_News_Title_Placeholder":"Sou um título de uma seção de notícia.","EditorForm_News_Item_Title":"Título:","EditorForm_News_Item_Title_Placeholder":"Sou um título de Notícia.","EditorForm_News_Item_Image":"Imagem:","EditorForm_News_Item_Date_Created":"Criado:","EditorForm_News_Item_Source":"Criado por:","EditorForm_News_Item_Source_Description":"Dê crédito ao criador ou autor.","EditorForm_News_Item_Description":"Descrição:","ERROR_ITEM_NOT_FOUND_TITLE":"Seção de Notícias não encontrada","ERROR_ITEM_NOT_FOUND_DESCRIPTION":"Clique e selecione \"Escolher Seção de Notícias\" para selecionar uma seção de notícias válida.","ERROR_ITEM_NOT_FOUND_DISCLAIMER":"Esta mensagem não será mostrada em seu site online","ERROR_MESSAGE_IN_PUBLISHED":"Ocorreu um erro"},
"ru": {"NEWS_APP_NAME":"Новости","NEWS_APP_parts_NAME":"Список новостей","NEWS_APP_parts_Description":"Создайте список последних новостей. Выберите дизайн и настройте список новостей. Вы можете посмотреть новость целиком и настроить её, нажав Настроить увеличение. Чтобы добавить раздел или новость, нажмите Редактировать новости.","NEWS_APP_Customize_Expand_NAME":"Настроить увеличение","NEWS_APP_Customize_Expand_Description":"Кликните на элемент в увеличенном режиме, чтобы поменять стиль и отступ, используя настройки ниже.","Customize_Expand_itemNavigationLabel":"Выберите новость, которую вы хотите редактировать","Customize_Expand_prevBtnLabel":"Предыдущая новость","Customize_Expand_nextBtnLabel":"Следующая новость","News_noCategoriesLabel":"Разделы новостей не найдены","News_addFirstCategoryLabel":"Создать новый раздел новостей","News_anotherCategoryLabel":"Нет, спасибо, я хочу создать новый Раздел новостей","News_editing_inlineHelp":"Выберите, какой раздел новостей вы хотите показать и нажмите ОК.","News_Title_newItemOverrides":"Новый раздел новостей","News_newItemErrorTitle":"Ошибка создания нового раздела новостей","News_newItemErrorDescription":"Пожалуйста, попробуйте еще раз позже","News_Categories_itemEditing":"Все разделы","News_News_Items_itemEditing":"Новость","News_All_Items_itemEditing":"Все новости","News_Items_noResultsMessage":"Новостей не найдено","News_Items_Hidden_items":"Скрытые новости","News_Item_list_typeMetaData":"Раздел новостей","News_Item_list_validationMessages":"Заголовок должен быть длиннее 2 символов","News_Item_list_noChildrenMessage":"У вас еще нет новостей. Нажмите кнопку Добавить, чтобы добавить новости в раздел.","News_Item_typeMetaData":"Новость","News_Item_validationMessages":"Заголовок должен быть длиннее 2 символов","News_Item_content_validationMessages":"Содержание должно быть длиннее 2 символов","News_dataSelectionLabel":"Выберите раздел новостей","News_dataEditingLabel":"Редактировать новости","NEWS_VIEW_NAME_SIMPLE":"Список новостей","NEWS_VIEW_NAME_IMAGE":"Список новостей с фото","NEWS_VIEW_NAME_DATE":"Список новостей с датой","Customize_News_DATE_FORMAT":"Формат даты","Customize_News_DATE_COMBO1":"23 Янв 2017","Customize_News_DATE_COMBO2":"23-Янв-2017","Customize_News_DATE_COMBO3":"Январь 23, 2017","Customize_News_DATE_COMBO4":"Вскр, Январь 23, 2017","Customize_News_DATE_COMBO5":"23 Января 2017","Customize_News_DATE_COMBO6":"23-Января-2017","Customize_Title_Source_spacing":"Отступ от заголовка и создано","Customize_Story_Source_spacing":"Отступ от создано и история","Customize_Show_source":"Показать кем создано","Customize_Show_date":"Показать дату","Customize_Show_section_title":"Показать название раздела","Customize_Section_title_spacing":"Отступ от названия раздела ","Customize_Item_spacing":"Отступ новости","Customize_Show_story":"Показать историю","Customize_Image_height":"Высота фото","Customize_Image_width":"Ширина фото","Customize_Item_image_spacing":"Отступ от новости и картинки","Customize_Maximum_story_lines":"Максимальное кол-во строк","Customize_Date_item_spacing":"Отступ от даты и новости","EditorSummary_News_Section":"Раздел Новостей","EditorSummary_News_item":"Новость","EditorForm_News_Title":"Заголовок:","EditorForm_News_Title_Placeholder":"Я - название раздела новостей.","EditorForm_News_Item_Title":"Заголовок:","EditorForm_News_Item_Title_Placeholder":"Я - заголовок новости.","EditorForm_News_Item_Image":"Фото:","EditorForm_News_Item_Date_Created":"Дата:","EditorForm_News_Item_Source":"Создано:","EditorForm_News_Item_Source_Description":"Выразить благодарность создателю или автору","EditorForm_News_Item_Description":"Описание:","ERROR_ITEM_NOT_FOUND_TITLE":"Раздел Новостей не найден","ERROR_ITEM_NOT_FOUND_DESCRIPTION":"Кликните и нажмите \"Выбрать новый раздел\", чтобы выбрать Раздел Новостей","ERROR_ITEM_NOT_FOUND_DISCLAIMER":"Это сообщение не будет показано на опубликованном сайте","ERROR_MESSAGE_IN_PUBLISHED":"Произошла ошибка"}
// End generated lang
    }
});
