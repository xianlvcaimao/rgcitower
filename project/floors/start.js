main.floors.start=
{
    "floorId": "start",
    "title": "地面",
    "name": "地面",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 80016,
    "firstArrive": [
        {
            "type": "showStatusBar"
        },
        {
            "type": "setValue",
            "name": "item:book",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:fly",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:shop1",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:gcjg",
            "value": "1000"
        },
        {
            "type": "setValue",
            "name": "flag:gu1c",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:gu2c",
            "value": "5"
        },
        {
            "type": "setValue",
            "name": "flag:gu3c",
            "value": "5"
        },
        {
            "type": "setValue",
            "name": "flag:gu4c",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "flag:gczy",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:pczy",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:gjyzy",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:pjyzy",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:gcfw",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:lvzs",
            "value": "0.44"
        },
        {
            "type": "setValue",
            "name": "flag:zczy",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:zjyzy",
            "value": "1"
        },
        {
            "type": "setText",
            "align": "left",
            "lineHeight": 22
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,0": [
            {
                "type": "choices",
                "text": "\t[草升级]本页面加成\n草：${flag:gczy}x\n经验：${flag:gjyzy}x\n层点：${flag:gjczy}x\n割草间隔：${flag:gcjg}ms\n割草范围：${flag:gcfw}x${flag:gcfw}",
                "choices": [
                    {
                        "text": "割草间隔(${flag:gu1c})",
                        "color": [
                            0,
                            255,
                            34,
                            1
                        ],
                        "condition": "flag:gcjgdj<10",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:gu1c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "flag:gu1c"
                                    },
                                    {
                                        "type": "if",
                                        "condition": "(flag:gcjg<=200)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:gcjg",
                                                "operator": "-=",
                                                "value": "25"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:gcjg",
                                                "operator": "-=",
                                                "value": "200"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gcjgdj",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gu1c",
                                        "value": "(Math.ceil((flag:gu1c*2)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            0
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "草增益(${core.formatBigNumber(flag:gu2c)}) ",
                        "color": [
                            0,
                            255,
                            34,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:gu2c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "flag:gu2c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gu2c",
                                        "value": "(Math.ceil((flag:gu2c*1.2)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            0
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "经验增益(${core.formatBigNumber(flag:gu3c)}) ",
                        "color": [
                            0,
                            255,
                            34,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:gu3c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "flag:gu3c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gjyzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gu3c",
                                        "value": "(Math.ceil((flag:gu3c*1.2)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            0
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "割草范围(${core.formatBigNumber(flag:gu4c)}) ",
                        "color": [
                            0,
                            255,
                            34,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:gu4c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "flag:gu4c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gcfw",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gu4c",
                                        "value": "(Math.ceil((flag:gu4c*2.5)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            0
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "层点增益(${core.formatBigNumber(flag:gu5c)}) ",
                        "color": [
                            0,
                            255,
                            34,
                            1
                        ],
                        "condition": "flag:jd>=2",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:gu5c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "flag:gu5c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gjczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gu5c",
                                        "value": "(Math.ceil((flag:gu5c*2.1)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "6,1": [
            "真实割草之塔v0.21\n作者：咸绿菜猫\n当前残局 10草场\n点击地图上的人物查看功能"
        ],
        "5,0": [
            {
                "type": "if",
                "condition": "((flag:auto>=2)&&(flag:zd2<7))",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[自动化2]消耗白金",
                        "choices": [
                            {
                                "text": "自动购买第一个声望升级(2500)",
                                "need": "status:mana>=2500",
                                "condition": "flag:zdpu1==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "2500"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdpu1",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第二个声望升级(2500)",
                                "need": "status:mana>=2500",
                                "condition": "flag:zdpu2==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "2500"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdpu2",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第三个声望升级(2500)",
                                "need": "status:mana>=2500",
                                "condition": "flag:zdpu3==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "2500"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdpu3",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第四个声望升级(2500)",
                                "need": "status:mana>=2500",
                                "condition": "flag:zdpu4==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "2500"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdpu4",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第五个声望升级(2500)",
                                "need": "status:mana>=2500",
                                "condition": "flag:zdpu5==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "2500"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdpu5",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第五个草升级(2500)",
                                "need": "status:mana>=2500",
                                "condition": "flag:zdgu5==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "2500"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdgu5",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得100%的声望(2e4)",
                                "need": "status:mana>=20000",
                                "condition": "flag:pp==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "20000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pp",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "返回",
                                "action": []
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "((flag:auto>=1)&&(flag:zd1<6))",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[自动化1]消耗白金",
                        "choices": [
                            {
                                "text": "初始保留50ms割草间隔(50)",
                                "need": "status:mana>=50",
                                "condition": "flag:blgcjg==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "50"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:blgcjg",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第二个草升级(25)",
                                "need": "status:mana>=25",
                                "condition": "flag:zdgu2==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "25"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdgu2",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第三个草升级(25)",
                                "need": "status:mana>=25",
                                "condition": "flag:zdgu3==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "25"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdgu3",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第四个草升级(25)",
                                "need": "status:mana>=25",
                                "condition": "flag:zdgu4==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "25"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdgu4",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得2000%的草(200)",
                                "need": "status:mana>=200",
                                "condition": "flag:gp==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "200"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gp",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得2000%的经验(200)",
                                "need": "status:mana>=200",
                                "condition": "flag:expp==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "200"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:expp",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "返回",
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ],
        "1,1": [
            {
                "type": "if",
                "condition": "(flag:auto>=1)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[白金升级1]所有升级消耗1白金\n白金加成\n草：${(Math.floor((flag:bjczy)*100)/100)}x\n经验：${(Math.floor((flag:bjjyzy)*100)/100)}x\n声望：${(Math.floor((flag:bjpzy)*100)/100)}x",
                        "choices": [
                            {
                                "text": "草增益增加5%",
                                "need": "status:mana>=1",
                                "condition": "flag:bjczy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjczy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjczy",
                                        "value": "(Math.min(flag:bjczy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "经验增益增加5%",
                                "need": "status:mana>=1",
                                "condition": "flag:bjjyzy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjyzy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjyzy",
                                        "value": "(Math.min(flag:bjjyzy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "声望增益增加5%",
                                "need": "status:mana>=1",
                                "condition": "flag:bjpzy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpzy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpzy",
                                        "value": "(Math.min(flag:bjpzy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "返回",
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ],
        "3,1": [
            "解锁声望后开启\n声望会重置草，经验，草升级\n基础获取:(等级-29)^${core.getFlag('pexp',1)}\n当前:${Math.max(status:hp-29,0)}^${core.getFlag('pexp',1)}\n至少需要30等级"
        ],
        "9,1": [
            "解锁水晶后开启\n水晶进行1次声望重置\n加上重置声望，声望升级\n基础获取:{[(等级-97)/3]*[log2(声望/5000)]}^${core.getFlag('sjexp',0.5)}\n当前:(${Math.floor(core.getFlag('lvsjzy',0)*10000)/10000}*${Math.floor(core.getFlag('pzsjzy',0)*10000)/10000})^${core.getFlag('sjexp',0.5)}\n至少要100等级和1e4声望"
        ],
        "6,7": [
            "打开背包查看"
        ],
        "10,1": [
            {
                "type": "choices",
                "text": "\t[声望升级]基础获取：${core.formatBigNumber(Math.floor(Math.pow(flag:lvsjzy*flag:pzsjzy,flag:sjexp)*10000)/10000)}(基于等级,声望）\n本页面加成\n草和经验：${flag:sjczy}x 声望：${flag:sjpzy}x\n水晶：${flag:sjsjzy}x 白金：${flag:sjbjzy}x\n层点：${flag:sjjczy}x",
                "choices": [
                    {
                        "text": "重置(+${core.formatBigNumber(flag:zsjzy)})",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "need": "status:hp>=100&&status:def>=10000",
                        "action": [
                            {
                                "type": "insert",
                                "name": "水晶重置"
                            },
                            {
                                "type": "setValue",
                                "name": "status:mdef",
                                "operator": "+=",
                                "value": "flag:zsjzy"
                            }
                        ]
                    },
                    {
                        "text": "草和经验增益(${core.formatBigNumber(flag:sju1c)}) ",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=flag:sju1c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "flag:sju1c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjjyzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sju1c",
                                        "value": "(Math.ceil((flag:sju1c*1.4)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "层点增益(${core.formatBigNumber(flag:sju2c)}) ",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=flag:sju2c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "flag:sju2c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjjczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sju2c",
                                        "value": "(Math.ceil((flag:sju2c*1.4)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "声望增益(${core.formatBigNumber(flag:sju3c)}) ",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=flag:sju3c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "flag:sju3c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjpzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sju3c",
                                        "value": "(Math.ceil((flag:sju3c*1.8)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "白金增益(${core.formatBigNumber(flag:sju4c)}) ",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=flag:sju4c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "flag:sju4c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjbjzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sju4c",
                                        "value": "(Math.ceil((flag:sju4c*1.8)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "水晶增益(${core.formatBigNumber(flag:sju5c)}) ",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=flag:sju5c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "flag:sju5c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjsjzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sju5c",
                                        "value": "(Math.ceil((flag:sju5c*2)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "解锁新的东西（100）",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "condition": "flag:auto<2",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=100)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:auto",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjsjzy",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjczy",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N1121",
                                        "loc": [
                                            [
                                                11,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N1125",
                                        "loc": [
                                            [
                                                12,
                                                1
                                            ]
                                        ]
                                    },
                                    "解锁了新的自动化和白金升级，水晶挑战",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "阶层的效果变得更好（1e4，永久保留）",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "condition": "flag:auto>=2&&flag:jcgh==0",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=10000)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "10000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jcgh",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jceffexp",
                                        "value": "1.75"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "4,0": [
            {
                "type": "choices",
                "text": "游戏阶段指示",
                "choices": [
                    {
                        "text": "查看当前阶段",
                        "action": [
                            {
                                "type": "switch",
                                "condition": "flag:jd",
                                "caseList": [
                                    {
                                        "case": "3",
                                        "action": [
                                            "阶段4-1：草场\n草场是一个大重置，会解锁草场里程碑，极大加成之前资源的获取\n从现在开始白金按期望获得，且最低为1\n到10草场进入第二部分"
                                        ]
                                    },
                                    {
                                        "case": "2",
                                        "action": [
                                            "阶段3：水晶&挑战\n水晶会重置之前的所有，在第一次重置之后解锁阶层（需要层点，割草获取），它能增加经验获取，且在本层级不会被重置\n进入挑战会获得限制并重置该层，但是完成后也能获得奖励"
                                        ]
                                    },
                                    {
                                        "case": "1",
                                        "action": [
                                            "阶段2：首次重置\n声望是第一个重置，它会重置你之前的所有东西，根据等级获得声望\n从现在开始，你每次割草将有1%的概率获得白金\n还可以解锁自动化，帮助你解放双手"
                                        ]
                                    },
                                    {
                                        "case": "0",
                                        "action": [
                                            "阶段1：旅程的开始  \n你可以割草获取草和经验，草生长需要一段时间，升级以解锁更多内容\n当前割草范围只加成草，层点是后面的内容"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "解锁声望（30等级）",
                        "color": [
                            0,
                            179,
                            255,
                            1
                        ],
                        "need": "status:hp>=30",
                        "condition": "flag:jd==0",
                        "_collapsed": true,
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:jd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:ppzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pexp",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pbjzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pu1c",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pu2c",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pu3c",
                                "value": "3"
                            },
                            "解锁了声望区域",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        3,
                                        2
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "解锁水晶（100等级）",
                        "color": [
                            188,
                            0,
                            255,
                            1
                        ],
                        "need": "status:hp>=100",
                        "condition": "flag:jd==1",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:jc",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jceff",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jceffexp",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jcjy",
                                "value": "10"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jczs",
                                "value": "0.8"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjexp",
                                "value": "0.5"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sju1c",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sju2c",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sju3c",
                                "value": "2"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sju4c",
                                "value": "3"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sju5c",
                                "value": "5"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gu5c",
                                "value": "1e+10"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pu5c",
                                "value": "1000"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:zjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjpzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjsjzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjbjzy",
                                "value": "1"
                            },
                            "解锁了水晶区域",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        9,
                                        2
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "解锁草场（300等级）",
                        "color": [
                            236,
                            208,
                            246,
                            1
                        ],
                        "need": "status:hp>=300",
                        "condition": "flag:jd==2",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:jd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:nextcc",
                                "value": "300"
                            },
                            "解锁了草场区域",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        3,
                                        6
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "choices",
                "text": "\t[千夜,E716]如果你喜欢本作，\n可以关注我的B站账号：\r[yellow]幼年猫妖\r，以第一时间获取更新信息。\n也可以加入讨论群\r[yellow]947190984\r，与作者和其他玩家交流讨论。\n每一份这样的支持都可以为作者提供更多的精神动力。",
                "choices": [
                    {
                        "text": "作者的个人主页",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nwindow.open(\"https://space.bilibili.com/13853635?spm_id_from=333.1007.0.0\")\n}"
                            }
                        ]
                    },
                    {
                        "text": "作者的更多作品",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[千夜,E716]B站账号：\r[yellow]幼年猫妖\r\n讨论群：\r[yellow]947190984\r",
                                "choices": [
                                    {
                                        "text": "星之葬",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Star/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "花之伤",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Flower/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "时盘乐园",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Time/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "完美生命",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Perfect/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "不死少女",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Alive/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "殉道者",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Martyr/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "空白",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Blank/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "纯黑",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Black/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "纸船效应",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Boat/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "下一页",
                                        "action": [
                                            {
                                                "type": "choices",
                                                "text": "\t[千夜,E716]B站账号：\r[yellow]幼年猫妖\r\n讨论群：\r[yellow]947190984\r",
                                                "choices": [
                                                    {
                                                        "text": "夜花吟",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Night/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "潮汐之囚",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Sea/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "光风霁月 ~ 晴之章",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/ToWish/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "花与泪的瞬间",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Forever/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "萤之盲",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Blind/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "夕之降",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Decline/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "吃小雨",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/xiaoyu/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "返回上一页",
                                                        "action": [
                                                            {
                                                                "type": "insert",
                                                                "loc": [
                                                                    6,
                                                                    10
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退出选项",
                                                        "action": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "退出选项",
                        "action": []
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "(flag:auto>=2)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[白金升级2]所有升级消耗100白金\n白金加成\n草：${(Math.floor((flag:bjczy)*100)/100)}x\n经验：${(Math.floor((flag:bjjyzy)*100)/100)}x\n层点：${(Math.floor((flag:bjjczy)*100)/100)}x\n声望：${(Math.floor((flag:bjpzy)*100)/100)}x\n水晶：${(Math.floor((flag:bjsjzy)*100)/100)}x",
                        "choices": [
                            {
                                "text": "草增益增加50%",
                                "need": "status:mana>=100",
                                "condition": "flag:bjczy<50",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjczy",
                                        "operator": "+=",
                                        "value": "0.5"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjczy",
                                        "value": "(Math.min(flag:bjczy,50))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            11,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "经验增益增加50%",
                                "need": "status:mana>=100",
                                "condition": "flag:bjjyzy<50",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjyzy",
                                        "operator": "+=",
                                        "value": "0.5"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjyzy",
                                        "value": "(Math.min(flag:bjjyzy,50))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            11,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "层点增益增加5%",
                                "need": "status:mana>=100",
                                "condition": "flag:bjjczy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjczy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjczy",
                                        "value": "(Math.min(flag:bjjczy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            11,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "声望增益增加50%",
                                "need": "status:mana>=100",
                                "condition": "flag:bjpzy<50",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpzy",
                                        "operator": "+=",
                                        "value": "0.5"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpzy",
                                        "value": "(Math.min(flag:bjpzy,50))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            11,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "水晶增益增加5%",
                                "need": "status:mana>=100",
                                "condition": "flag:bjsjzy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjsjzy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjsjzy",
                                        "value": "(Math.min(flag:bjsjzy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            11,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "返回",
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ],
        "12,1": [
            {
                "type": "if",
                "condition": "(flag:auto>=2)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[水晶挑战]进入后进行水晶重置\n目标：(100+完成次数*15)等级\n挑战1：等级要求更昂贵\n挑战2：草,经验增益^0.8\n挑战3：你无法获得声望\n奖励：经验获取x${flag:sjtz1+1}\n草获取x${flag:sjtz2+1}\n声望获取指数+${flag:sjtz3/10}",
                        "choices": [
                            {
                                "text": "级别折算(${flag:sjtz1}/5)",
                                "color": [
                                    160,
                                    0,
                                    255,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "insert",
                                        "name": "水晶重置"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jrsjtz1",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:lvzs",
                                        "value": "0.48"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjtzmb",
                                        "value": "(100+(flag:sjtz1*15))"
                                    }
                                ]
                            },
                            {
                                "text": "资源减少(${flag:sjtz2}/5)",
                                "color": [
                                    160,
                                    0,
                                    255,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "insert",
                                        "name": "水晶重置"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jrsjtz2",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjtzmb",
                                        "value": "(100+(flag:sjtz2*15))"
                                    }
                                ]
                            },
                            {
                                "text": "重置禁制(${flag:sjtz3}/5)",
                                "color": [
                                    160,
                                    0,
                                    255,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "insert",
                                        "name": "水晶重置"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jrsjtz3",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjtzmb",
                                        "value": "(100+(flag:sjtz3*15))"
                                    }
                                ]
                            },
                            {
                                "text": "完成挑战",
                                "color": [
                                    160,
                                    0,
                                    255,
                                    1
                                ],
                                "condition": "(status:hp>=flag:sjtzmb)&&(flag:jrsjtz1==1||flag:jrsjtz2==1||flag:jrsjtz3==1)",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "((flag:jrsjtz1===1)&&(status:hp>=flag:sjtzmb))",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:sjtz1",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:sjtz1",
                                                "operator": "min=",
                                                "value": "5"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "if",
                                        "condition": "((flag:jrsjtz2===1)&&(status:hp>=flag:sjtzmb))",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:sjtz2",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:sjtz2",
                                                "operator": "min=",
                                                "value": "5"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "if",
                                        "condition": "((flag:jrsjtz3===1)&&(status:hp>=flag:sjtzmb))",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:sjtz3",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:sjtz3",
                                                "operator": "min=",
                                                "value": "5"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:pexp",
                                                "value": "(1+(flag:sjtz3*0.1))"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:pexp",
                                                "value": "((Math.floor((flag:pexp*10)))/10)"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:pexp",
                                                "operator": "min=",
                                                "value": "1.5"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "if",
                                        "condition": "(flag:jrsjtz1===1)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:lvzs",
                                                "value": "0.45"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jrsjtz1",
                                        "value": "0"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jrsjtz2",
                                        "value": "0"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jrsjtz3",
                                        "value": "0"
                                    }
                                ]
                            },
                            {
                                "text": "退出挑战",
                                "color": [
                                    160,
                                    0,
                                    255,
                                    1
                                ],
                                "condition": "flag:jrsjtz1==1||flag:jrsjtz2==1||flag:jrsjtz3==1",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:jrsjtz1===1)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:lvzs",
                                                "value": "0.45"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jrsjtz1",
                                        "value": "0"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jrsjtz2",
                                        "value": "0"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jrsjtz3",
                                        "value": "0"
                                    }
                                ]
                            },
                            {
                                "text": "返回",
                                "color": [
                                    233,
                                    227,
                                    237,
                                    1
                                ],
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ],
        "0,1": [
            {
                "type": "choices",
                "text": "\t[声望升级]基础获取：${core.formatBigNumber(Math.floor(flag:lvpzy*10000)/10000)}(基于等级）\n本页面加成\n草：${flag:pczy}x\n经验：${flag:pjyzy}x\n声望：${flag:ppzy}x\n白金：${flag:pbjzy}x",
                "choices": [
                    {
                        "text": "重置(+${core.formatBigNumber(flag:zpzy)})",
                        "color": [
                            0,
                            243,
                            255,
                            1
                        ],
                        "need": "status:hp>=30",
                        "action": [
                            {
                                "type": "insert",
                                "name": "声望重置"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "+=",
                                "value": "flag:zpzy"
                            }
                        ]
                    },
                    {
                        "text": "草增益(${core.formatBigNumber(flag:pu1c)}) ",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=flag:pu1c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "flag:pu1c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu1c",
                                        "value": "(Math.ceil((flag:pu1c*1.25)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "经验增益(${core.formatBigNumber(flag:pu2c)}) ",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=flag:pu2c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "flag:pu2c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pjyzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu2c",
                                        "value": "(Math.ceil((flag:pu2c*1.25)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "声望增益(${core.formatBigNumber(flag:pu3c)}) ",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=flag:pu3c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "flag:pu3c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:ppzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu3c",
                                        "value": "(Math.ceil((flag:pu3c*1.5)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "白金增益(${core.formatBigNumber(flag:pu4c)}) ",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "condition": "flag:auto>=1",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=flag:pu4c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "flag:pu4c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pbjzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu4c",
                                        "value": "(Math.ceil((flag:pu4c*2)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "层点增益(${core.formatBigNumber(flag:pu5c)}) ",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "condition": "flag:jd>=2",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=flag:pu5c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "flag:pu5c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pjczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu5c",
                                        "value": "(Math.ceil((flag:pu5c*1.3)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "解锁自动化和白金升级（100）",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "condition": "flag:auto<1",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=100)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:auto",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu4c",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjczy",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjyzy",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpzy",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N659",
                                        "loc": [
                                            [
                                                5,
                                                0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N707",
                                        "loc": [
                                            [
                                                1,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "3,5": [
            "解锁草场后开启\n草场会重置水晶，水晶升级，水晶挑战，前2组自动化和白金升级\n以及进行一次水晶重置\n下一个草场需要${core.getFlag('nextcc',300)}等级"
        ],
        "0,5": [
            {
                "type": "choices",
                "text": "\t[草场页面]下一个草场需要${core.getFlag('nextcc',300)}\n等级\n里程碑需要达到对应草场才能生效",
                "choices": [
                    {
                        "text": "获得草场",
                        "need": "status:hp>=flag:nextcc",
                        "action": [
                            {
                                "type": "insert",
                                "name": "草场重置"
                            }
                        ]
                    },
                    {
                        "text": "查看里程碑",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "action": [
                            "1 获得${core.itemCount(\"I848\")*4+1}x更多的草,解锁更多自动化\n2 获得${core.itemCount(\"I848\")*4+1}x更多的经验\n3 获得${core.itemCount(\"I848\")*4+1}x更多的层点\n4 白金价值+${Math.max(core.itemCount(\"I848\")-2,0)}(从3草场开始),解锁更多自动化\n5 在草场上保留水晶挑战\n6 白金几率x2\n7 阶层效果的指数+0.25\n10 解锁钢铁(还没做),草场不会重置白金升级"
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "1,5": [
            {
                "type": "if",
                "condition": "(flag:ccauto>=1)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[草场自动化]消耗白金",
                        "choices": [
                            {
                                "text": "返回",
                                "action": []
                            },
                            {
                                "text": "自动购买第一个水晶升级(5e4)",
                                "color": [
                                    254,
                                    0,
                                    255,
                                    1
                                ],
                                "need": "status:mana>=50000",
                                "condition": "flag:zdsju1==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "50000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdsju1",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第二个水晶升级(5e4)",
                                "color": [
                                    254,
                                    0,
                                    255,
                                    1
                                ],
                                "need": "status:mana>=50000",
                                "condition": "flag:zdsju2==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "50000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdsju2",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第三个水晶升级(5e4)",
                                "color": [
                                    254,
                                    0,
                                    255,
                                    1
                                ],
                                "need": "status:mana>=50000",
                                "condition": "flag:zdsju3==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "50000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdsju3",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第四个水晶升级(5e4)",
                                "color": [
                                    254,
                                    0,
                                    255,
                                    1
                                ],
                                "need": "status:mana>=50000",
                                "condition": "flag:zdsju4==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "50000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdsju4",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第五个水晶升级(5e4)",
                                "color": [
                                    254,
                                    0,
                                    255,
                                    1
                                ],
                                "need": "status:mana>=50000",
                                "condition": "flag:zdsju5==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "50000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdsju5",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "草场重置时保留自动化1(1e5)",
                                "need": "status:mana>=100000",
                                "condition": "flag:blzd1==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "100000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:blzd1",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "草场重置时保留自动化2(2e5)",
                                "need": "status:mana>=200000",
                                "condition": "flag:blzd2==0&&flag:blzd1==1",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "200000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:blzd2",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得100%的水晶(5e5)",
                                "need": "status:mana>=500000",
                                "condition": "flag:sjpp==0&&item:I848>=4",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "500000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjpp",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得2000%的层点(5e5)",
                                "need": "status:mana>=500000",
                                "condition": "flag:jcpp==0&&item:I848>=4",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "500000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jcpp",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得2000%的白金(0)",
                                "condition": "flag:bjpp==0&&item:I848>=4",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpp",
                                        "value": "1"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "insert",
                "name": "割草事件"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {
        "10,1": []
    },
    "cannotMoveIn": {},
    "map": [
    [159,159,159,159,884,159,159,159,761,159,159,159,159],
    [133,  0,  0,129,  0,  0,102,  0,  0,129,1117,  0,  0],
    [  0,  0,  0, 85,  0,  0,  0,  0,  0, 85,  0,  0,  0],
    [  0,  0,  0,159,  0,  0,  0,  0,  0,159,  0,  0,  0],
    [159,159,159,159,  0,  0,  0,  0,  0,159,159,159,159],
    [707,  0,  0,129,  0,  0,201,  0,  0,159,  0,  0,  0],
    [  0,  0,  0, 85,  0,  0,  0,  0,  0, 85,  0,  0,  0],
    [  0,  0,  0,159,  0,  0,1157,  0,  0,159,  0,  0,  0],
    [159,159,159,159,  0,  0,  0,  0,  0,159,159,159,159],
    [  0,  0,  0,159,  0,  0,  0,  0,  0,159,  0,  0,  0],
    [  0,  0,  0, 85,  0,  0,  0,  0,  0, 85,  0,  0,  0],
    [  0,  0,  0,159,  0,  0,  0,  0,  0,159,  0,  0,  0],
    [159,159,159,159,159,159,891,159,159,159,159,159,159]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 15, 15, 15,  0,  0,  0,  0,  0,  0,  0,  5,  5,  5],
    [ 15, 15, 15,  0,  0,  0,  0,  0,  0,  0,  5,  5,  5],
    [ 15, 15, 15,  0,  0,  0,  0,  0,  0,  0,  5,  5,  5],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [20228,20228,20228,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [20228,20228,20228,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [20228,20228,20228,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,101,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "bgm.mp3"
}