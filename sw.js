/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","c6c0dc1cca263deba7978f778256ee45"],["/2024-future-plan/index.html","40b22478b18ccdb23d8eb33e15877cf6"],["/2player-battle-system/index.html","4071b2890c7f3bf59cae6e8856961367"],["/404.html","8202083c6a2de08f43d20ceb41f8a011"],["/about/index.html","c7f4197d3056e51bc53b9195d6f6ae5d"],["/acg-creator/index.html","0244d9ca550f056396718715387ad6bb"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","6adc39a5786464a870ca05b1b47beab8"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","6df0db66555ac181758e0f8fba5734b9"],["/animated-title-main-menu/index.html","0eb2d197e7db9bf3673a1882f835a296"],["/archives/2022/05/index.html","4744e689554ca52a659bbe977e89aa20"],["/archives/2022/06/index.html","b0d4d0bf99d37b368b57e234b6aee78a"],["/archives/2022/08/index.html","9c76734def3f896307be6f06e2418692"],["/archives/2022/09/index.html","5755c9a8fad5ad90310ffeb8fc622be7"],["/archives/2022/10/index.html","8aed1d89a9755a29cbff36b6cc3fc158"],["/archives/2022/11/index.html","474bf8b6f519b449dcea76092d8ca3ed"],["/archives/2022/12/index.html","4f2050b66ae850e326e6b094afb52540"],["/archives/2022/12/page/2/index.html","c8cc1b591e94a5138dbf81189fdbb3f4"],["/archives/2022/index.html","3f73c8d37cbd8e8116587ab0c752a76e"],["/archives/2022/page/2/index.html","335f66db25fd0f86d6bc400ed73c002d"],["/archives/2022/page/3/index.html","80f1c8ac3e3152a223e88257575b5a37"],["/archives/2023/01/index.html","3244035e3260cebf8600cba7b6358161"],["/archives/2023/02/index.html","b845d9cd13ce893eeff82247aa7129c7"],["/archives/2023/03/index.html","248a1cb8b73d3e82d4dde396d3d59d6f"],["/archives/2023/04/index.html","73853b58397e0dcd627772ca6e609401"],["/archives/2023/05/index.html","e585f0e8de81325a4469028b0551c10b"],["/archives/2023/06/index.html","5118123edf75a7bed4d2ae521d442fa0"],["/archives/2023/07/index.html","5be2392bcdae1b893c7327b5b01319ae"],["/archives/2023/08/index.html","b9467068d254e0d006aa88328d6089b4"],["/archives/2023/09/index.html","6f43656329b7d1ea710f57ab78b951e9"],["/archives/2023/10/index.html","4e6c6fd2218c8a244256e3527dcd1eb2"],["/archives/2023/11/index.html","2a0ea5f04e07c5aa876b6da8f238a965"],["/archives/2023/12/index.html","90ae09253bf1b0a4e1d1ac899bbd607f"],["/archives/2023/index.html","49ad343f9bea65463ef382c84c6dc387"],["/archives/2023/page/2/index.html","d0aebd10dd7cf6f027a5f7fc873bf5c8"],["/archives/2023/page/3/index.html","8bbe3da494a7e74606d5e4f248e8776f"],["/archives/2024/01/index.html","aa306eaccad77266979b9c6b6e72fee5"],["/archives/2024/02/index.html","bab4ad981cb5967e9072c8b497ceb908"],["/archives/2024/03/index.html","e4b89a8a5bfd4499d9f8cfe3406ebc50"],["/archives/2024/04/index.html","9853dc83ce5f4db3db7b74e35fc4f2c8"],["/archives/2024/05/index.html","6c90f2ae1798336add6a0fc31c1e66b8"],["/archives/2024/06/index.html","4d3100b3b7a44752ac148a8bf18779ed"],["/archives/2024/07/index.html","a0b16e6cb1a94c100cf120bc3823ad20"],["/archives/2024/index.html","a9a85f1810187154fea7165c06a0c20b"],["/archives/2024/page/2/index.html","a587620b63df3f09db9a4359ce7611f1"],["/archives/index.html","f96f5079e1640661606670a76282c611"],["/archives/page/2/index.html","18b6da74c4684a55671b116872d9dec5"],["/archives/page/3/index.html","41929a5c2b7215b92755356e15be7e38"],["/archives/page/4/index.html","6bb2c20070199480ab54d3a7d8340958"],["/archives/page/5/index.html","46fe0bed43c7457b94a1a44e9501c621"],["/archives/page/6/index.html","1229767ac8b559eb6b862ec40a552024"],["/archives/page/7/index.html","6104c1be2dc0aab901cfa6387430ad3c"],["/artitalk/index.html","ea32e3ef4b61570cdb067ac91ddf59aa"],["/battle-beautiful/index.html","d22702d1fd3b742c247ceff118919d29"],["/blur-effect/index.html","0a88e79e8467cad1118e8e5b6c80a7ed"],["/butterfly-custom-tag/index.html","d2ab56c67569a1a6af16df624c7dd776"],["/butterfly-plugins-faq/index.html","9c1997c30a46d843301869ea68e90a13"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","dbf276439125fa5c8afeb07da6deb9b3"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","41f1e8c07da3b93a129f275bdf5f98d6"],["/categories/announcement/index.html","5157d57e95d778ffe4d53fbd0c075612"],["/categories/diary/index.html","eebc9aac09d117c4475dec7ad879da1f"],["/categories/game-dev/game-engine/acg-creator/index.html","a389e1e60da9cbca93d398d5a90a9781"],["/categories/game-dev/game-engine/index.html","daf3e2d0c4df8c381be9a4cb85e1cf2b"],["/categories/game-dev/game-engine/lightvn/index.html","76263c04283b022bd8be1b737832ccad"],["/categories/game-dev/game-engine/nvl-maker/index.html","7f7f247a449a7cf96d2035e96b6fa4d4"],["/categories/game-dev/game-engine/page/2/index.html","8f7277959ebc6ac59ea817a810452758"],["/categories/game-dev/game-engine/page/3/index.html","34380a380c1c60734a535f1df04e7ae2"],["/categories/game-dev/game-engine/page/4/index.html","8a547146107434b249e096ea35087efe"],["/categories/game-dev/game-engine/page/5/index.html","ac586596789a0e1ee69f74b152c5a496"],["/categories/game-dev/game-engine/renpy/index.html","a32848f22581ff53aae4c7386ab50a35"],["/categories/game-dev/game-engine/renpy/page/2/index.html","79287c20025160f8631cc9575f7ac015"],["/categories/game-dev/game-engine/renpy/page/3/index.html","39b9a5851bcd43d5d8edc45238f22bbd"],["/categories/game-dev/game-engine/renpy/page/4/index.html","a7e8896ce26d7b672ba8296db4fd76ad"],["/categories/game-dev/game-engine/renpy/page/5/index.html","e759364768bf853ef88e6b0decb4a5f3"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","7b83bd1434fa0210c1ec995e26a929fb"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","5dd5c527a7e72bb6abae314c0e4914e3"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","aced4ad397cffe544437585d036d6288"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","e4df4a214922f1544dfc4e13193d2b87"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","1a4b0de52d042dfe7a041459f19d1ee6"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","f6610450a479de3694f7238ccbbc8930"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","a5f426a0b4d4c6b7961c6732da70a016"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","78ca16eab76e15f17058dd80106513bf"],["/categories/game-dev/game-engine/rpgmaker/index.html","776cd5bb2013896229e73fb4a48e6713"],["/categories/game-dev/game-engine/suika2/index.html","8cf58985c31de15fc3fc9a797fc48d70"],["/categories/game-dev/game-engine/tyranobuilder/index.html","e8d6b8165ec16ac5e5a7fa7b74a8c7da"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","7ee55494b463c385a0b11ba32e3ff651"],["/categories/game-dev/game-engine/webgal/index.html","3620b88eb3720f8e1656b5fca045fc45"],["/categories/game-dev/index.html","0a64bae8934ee2e2184b5bd00f029b9d"],["/categories/game-dev/page/2/index.html","2a99275019e3cace200fbf5bd9de5896"],["/categories/game-dev/page/3/index.html","d1da7d67d0d2cc8b1a1ddad09c781e8d"],["/categories/game-dev/page/4/index.html","d5078e15bbc389c3b52cebd92536bd51"],["/categories/game-dev/page/5/index.html","85410bb1ac9b1bdf008b3d2d9bcfb0b5"],["/categories/hexo/index.html","1f2439bf38f667f8a7b665641e42c36c"],["/categories/index.html","f440e88abe9276d6ca3698583cc3fe2c"],["/categories/material/index.html","5207c3dd04624ebae3469a6c99ca671d"],["/categories/update/index.html","79263f4c428e586844e74dc48aa623f6"],["/change-according-to-real-time/index.html","4172c149072e2ba021ec0b334465d510"],["/change-character-info/index.html","43c807b178a9dbb328570e0c190d8f56"],["/change-title-after-first-time-viewing/index.html","9e837a3af470e286fd095e6a5ee0d78b"],["/change-title-based-on-event/index.html","608b7f883330af73a8fb6a30433cafc7"],["/chapter-selection/index.html","eaeb9dd7177b4f8ef66a46829dfc0046"],["/character-interaction/index.html","f666056aea0cb50d4a0a2d4d078c4eef"],["/character-stats/index.html","c36e815788b10773249db33b537b75d3"],["/chatbot/index.html","cdf59127c4a2ba8762f501a381ac1c4b"],["/choice-time/index.html","8036bf0c42a5916b7f4e5e9ee7a471e7"],["/comments/index.html","5dbe54149936f86a28323db2350290c2"],["/commission-info/index.html","a994e5a7107729d8b0b77353a8c00d49"],["/count-login-number/index.html","68edd3d6fec831c59dafa2da925cdeab"],["/create-button-anywhere/index.html","d3bcb8a30940d111fd8a841668eda859"],["/css/eurkon.css","19da48c37197e5ca0543e98e697df942"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","08f4f012f34ba126ec940d5cf3d3454c"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","8417a483c5d64604bf57e15fec2ab4c2"],["/css/rightmenu.css","0d7b5cd4e1fc68885146c0437a821027"],["/css/siz.css","752c997c7e3d72c8776e53c74fcb2407"],["/css/swiper.css","c4ff4fbb269c028d0f89773ad1018ca3"],["/css/swiperstyle.css","339dd2ec3e344c8b9ae5299c0b8b8acf"],["/css/var.css","2a038fc3455ca09c6f612af3575bbbb6"],["/ctc/index.html","625fce08c5c6875f832289105e74a9db"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","bcde7daf07fb080f26139d9f2f45ba23"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","b99063738f9862dc825cb43f88ee0e6e"],["/custom-gallery-cg-screen/index.html","0a4f434af950a89e652ffd48069b6564"],["/custom-launcher/index.html","baa1f9095d4aee8718a7f803e6ddb1a7"],["/custom-loading-screen/index.html","bff7c7070d1d315e5540cb4f24b97374"],["/custom-mouse/index.html","c177e99fb77d0290cada06cc87d34f5d"],["/custom-music-room-screen/index.html","bf45dbba8764edaa1427afef83a9fb68"],["/custom-music-room-screen2/index.html","3735276f2f5cef4c3ba817cd4fc3dd50"],["/custom-nvl/index.html","3a9155f574e4de49667e9eabe1905b50"],["/custom-player/index.html","bcd72663a24abaaef8165ed7595cb10e"],["/custom-preferences-screen/index.html","36cd8941803c4536bff6f92bea5a685b"],["/custom-say-screen/index.html","9cfdbd8dea0d722c1ae9468dbc824a35"],["/custom-style-bar/index.html","871ffd4065b5e08153ab227f8e464a91"],["/custom-style-box/index.html","d496975c6878acf7b3d7d39aee15694d"],["/custom-style-button/index.html","11307ec74872c86c3ddbc3b9229ca9e5"],["/custom-style-grid/index.html","e82b0ce0916e19a8c436dd12bfb97af8"],["/custom-style-position/index.html","1eac2813f6b2eb7f7b9c012dd21b699c"],["/custom-style-prefix/index.html","c20dac4f86143c94b6d08737734c3207"],["/custom-style-text/index.html","f73546b945424e762f3131d56144420b"],["/custom-style-window/index.html","71f81546b8e17593315411543a5ca9a0"],["/custom-title-screen/index.html","b3d1d791dfdb05f9f7c1da2d9e63bf39"],["/define-npcs/index.html","74621c7ef5cef9dbfe75c3f2c79cbb84"],["/delete-save/index.html","bf37f75fa6fb9ff0395c257e6c3881df"],["/dice-function/index.html","3344b95ef2b12b87cc1a0a01db00ce95"],["/disclaimer/index.html","5955b28e82a0ddb9e755813b531f7583"],["/display-immediately-all-dialogues/index.html","5e18795412770aa25576446ba5de60ab"],["/display-real-time/index.html","e443689f11279d8d689aa1da2a8ac4e2"],["/en.refund-policy/index.html","843d7bc989b38b54b2a0a8a7de8b749e"],["/enter-name-screen/index.html","89b07683c19826cd477cbfea290af382"],["/export-game/index.html","655e5e5b23497ac51bf74cdf89e3e13d"],["/faq/index.html","a984d60778447313496944e35058323a"],["/friends/index.html","1463befe37acc14832b905398668756f"],["/gallery-template-assets/index.html","8b8f7eda7589397c38f233501dc870b6"],["/gallery-template-default-ver/index.html","ab4bd30e8295462f9abfccf8de8966fa"],["/gallery/index.html","577077917bba3a30de5f97333df24ce9"],["/gallery/photo/bg/index.html","4f0f33597ac4b40dd28460b28a24b90b"],["/gallery/photo/gui/index.html","6ecd8021515289197d1f532dba10ec41"],["/game-only-text/index.html","7d6eb675af6fecc17de840dcad7fa825"],["/generate-random-name/index.html","a6bbcfcedb7d892c3328f2b1a260d28c"],["/gui-017/index.html","128df0c587a4036a20160b1bec13e925"],["/gui-vertical-002/index.html","2a8b60b72d2a30dce969a4b95c36f3f0"],["/gui012/index.html","dc431bc740549021631c521f442e62f6"],["/gui018/index.html","b8ab0b294d7d03d8393474a9d936e491"],["/gui019/index.html","0c3b07571b3a6fd5522c77590bb01cad"],["/gui020/index.html","6c72cca0c479a220cf2d65ac8a3bf1c7"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","ba9fc3e40866ef162bb639344df6ce32"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","1d8d724af8d850b650015438a620da66"],["/hide-textbox/index.html","43bef11b88268c1d297147da8531b32f"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","d9cdff3f7b6810da31adba7f2107ede1"],["/images-tip-function/index.html","05f33377083d6dc9c83e48af21b74db3"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","723db20cd20017e2cc3b2b6ff766b9ea"],["/index.html","c532ce86f45dbb1389de589dab1d48ab"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","f745825b32aedf0f68cc98c72c1841d3"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","2e1583932b23335bc53f0e1cf2f175cf"],["/items-sprites-effect/index.html","18962a64fa9330ba5f0febff17b340d1"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","5d5fe490a8765331af6a49228347d15f"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","7a31ff60c291a2a577318a42f829b255"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","6140555cb9e92692dbc19f0c60961a9f"],["/link/index.html","b47d6c74be06c577ef571c1feebe11f7"],["/login-reward/index.html","216c1e1c822f93058bc17a052041babf"],["/main-menu-music/index.html","6c10ebb386ea1ced0a5a5f7d5f5f1885"],["/make-butterfly-beautiful4/index.html","d7c54dae8f4d8e3a3b6e33e9812f4ea5"],["/map-puzzle-system/index.html","dfc8fd31b74b140f7eeee40fede363d4"],["/maple-effect/index.html","9279763a7ecf9e0dbc03c0bb1affb526"],["/memberships-2/index.html","5dff2879a7fdb51f3732e3ad562da2fc"],["/memberships/index.html","dbfc0684d44c26bfa3713cca39f61127"],["/multiple-language/index.html","a18d2ae3a03d4a89cd6f02acca9442b1"],["/name-input-assets/index.html","4766741956476a4b5d8e5c061ab66f72"],["/new-year-event-2023/index.html","bdc153132fa6f50692df34339cea7b21"],["/newsletter/index.html","4d284bf0e294b7e58cf8fc5d8e083caf"],["/nsfw-limited/index.html","33be19896c0d7b93b08fe6a88ccc4ad5"],["/null/index.html","ab50f7363e3e29fa5f2b5ebbb186aa66"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","1219b95f4aced4c65249355eeac1aa29"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","c442df58465ecbd140ec171753b73632"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","6fa4f67b8d1c54a25006dfedfb86202e"],["/openchatai-renpy/index.html","6716da12d5a17b16217c0d4e56df52e9"],["/original/index.html","e6686d6851f89ef3c1c9d08fd11e4c26"],["/page/2/index.html","c5e2c6e419a0651d1248ae517bda9baf"],["/page/3/index.html","b6e32f10ea430635cd87d0efd4043cd5"],["/page/4/index.html","8e7ab250db09393f09e9509313c66152"],["/page/5/index.html","b786936cae61bb0fd1d5ad7cbd72aba1"],["/page/6/index.html","951b8537ecbeaba2144fe327fcbcf17d"],["/page/7/index.html","4bd5db3c07623ec3296af5b7fcf3f876"],["/point-pop-up-assets/index.html","f6265fa4d5f88eb84063a4da50ffa422"],["/pop-point/index.html","02467e72563768b99d17badf147968cc"],["/privacy-policy/index.html","3571891aeec0da5e64d1499466c16ad5"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","929f70e9b05c414079afcc12807921d2"],["/random-number/index.html","85dd1937bcb67c306cbda20e47d53a26"],["/random.html","0ae9029773c3df6c7382e78af93b4924"],["/refund-policy/index.html","d6b235356339c361d864c4b22242a8af"],["/release-017/index.html","24afcd17f3627d9d58c82e1ac1ab6149"],["/remembering-choices/index.html","0592467beb95ca5cbadc2868909181d4"],["/renpy-basic/index.html","71449a3868d7c659e0b337cfaf20e2f0"],["/renpy-crash-glitch-effect/index.html","b1d9660c383920f67fcede53fa5c5cca"],["/renpy-flip-image/index.html","e7a4ca2b09f557b770ec0155a5ccdcd2"],["/renpy-matrixcolor/index.html","66e087e18904c1fe772215497102270a"],["/renpy-overlay/index.html","5dcc80425eca7c8882eb89c966001892"],["/renpy-review/index.html","7372858794b3e76ff51b551cd583dd8e"],["/renpy-typing-effect/index.html","dbcae0541e399aff3cb3a3aa9a984405"],["/rpgmaker-assets-menu/index.html","11fd0f80d212d534fc977c9bcb4fcfeb"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","87affc4234cb764c2058c5f8ee2dd88d"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","90ee4a552f6ec4c5db0347950caa7c1c"],["/sakura-tree-background/index.html","fee5943855bd1c9e02b9b9ebb0eab6b1"],["/selected-button-style/index.html","b46a0f61cc85f7313a97e5b423058dc6"],["/service-worker.js","2063a8ec66d9e46170ee5f840a65e05a"],["/show-variable/index.html","c7291fee61e986548843fbc6fe394dd9"],["/side-image/index.html","fd40a02498618a214c8b540de41cc697"],["/snow-effect/index.html","df1bbc38e83ed75dceb0f78393c0ce85"],["/speaking-animation/index.html","982915b7e95d2752477fb77e142ff18d"],["/splashscreen/index.html","6f143fdcb475a503962b99d80ae85bed"],["/suika2/index.html","c1ba2d9df42cb5860e5c2e56b58c8ab7"],["/sw-register.js","23f09b0693647dd882f7395017e78ca3"],["/tags/Hexo-plugins/index.html","631e644662b4a278493d5e3465d5beb3"],["/tags/Light-VN/index.html","6aedaa454cacb71fe33abbf52035c622"],["/tags/acg-creator/index.html","c196cfca158191861f0dde221f8ef703"],["/tags/ai/index.html","9d7327b2cb319c52ec510db5252beec6"],["/tags/butterfly-beauty-diary/index.html","d15ae34c9964abb582bafc5138faa2eb"],["/tags/custom-hexo-theme-butterfly/index.html","14b20448498981aa66995e29d1ba2ad0"],["/tags/custom-renpy-title/index.html","f283604e25f512e270a621e9a23d13ce"],["/tags/dialogue/index.html","a8d7a610502bec789d144ebdc62fd48c"],["/tags/effect/index.html","f5f3b127bf63fac6dba169ba76b576ef"],["/tags/event/index.html","9d3fb9e89f97526896c4c2f9fb15775d"],["/tags/hosting-own-website/index.html","693e9517104fcaff48add644a4af6f5a"],["/tags/index.html","ea15a8c2173a20e8b08604e39cc3520d"],["/tags/itch-io/index.html","037f9617e64b210b95e2eef5ab7dad3f"],["/tags/light-vn-update/index.html","a1fd762471303c08e19671735f2e3863"],["/tags/nvl-maker/index.html","866d07ebe36e3e53c7ca1aa5c9c35b13"],["/tags/player-related/index.html","01074b3c71f2704813ab7925894eefe3"],["/tags/pro-tutorial/index.html","a0ae1cb0e4e08fb3e6056790a2676386"],["/tags/pro-tutorial/page/2/index.html","0b63e92f4c8f3bf04c912927a4cdaff9"],["/tags/pro-tutorial/page/3/index.html","c859e33eafb170ab2ca15ff81af9572b"],["/tags/pro-tutorial/page/4/index.html","7dd265d7393343a52de5642dc9f41a78"],["/tags/renpy/index.html","aa93f36f68c780daa6fd440ab8bb1e24"],["/tags/rpg-maker-custom-map/index.html","674563ec31f72f2b71ad2f8f30ba7978"],["/tags/screen/index.html","bf51d95cb6102b07592aeac2709ef5f3"],["/tags/special-function/index.html","99471edba30e0583a151db8fc2b1c047"],["/tags/suika2/index.html","3003e45a9024e8e99d0e6b9f7d075a4e"],["/tags/terms/index.html","93c3fefd9c43c1d2ee5910d8aae5eecb"],["/tags/tyranobuilder/index.html","9a4c8015ea9509594f49a80285bc4266"],["/tags/ui-assets/index.html","f2106e53c3374779370a37d7d75d36f6"],["/tags/update/index.html","cc5c2bb10c247e68b34f067351b39db6"],["/tags/upload-game/index.html","d0144771a4b8ccee791f4959153c7082"],["/tags/variable/index.html","650245622a72b748215c72ff849ce2ca"],["/tags/visual-novel-maker/index.html","2479195291bd5bd7d28d14f34ed47bdf"],["/tags/webgal/index.html","197946397c765b507618c16157ebe675"],["/tags/封面製作/index.html","48d96c3cdd187999d531f5330753c56e"],["/tags/背景素材/index.html","65c77cac987c87c818253c5e68a8ce08"],["/tags/隨機功能/index.html","bbf08c1dc4a3da07d33c793a4cbc3ed8"],["/test123/index.html","8e0310c668270c88b749c49d4fda989a"],["/textbutton/index.html","9f4e417a7f68e59844cd8e73b600ef6e"],["/to-do-tutorial/index.html","ed1a27aa41acd29492ac303af6a37be3"],["/tools/index.html","1104f1169336e90deac1f55c3dd43d5d"],["/tooltip-function/index.html","ff6ba49ac35ee49ff21372938bafc642"],["/transfer-to-hexo/index.html","7306b95051f9da67d24311b2bc56c732"],["/tutorial-update-history/index.html","58301db4db443dbce3c6a438e256d5fe"],["/tyrano-name/index.html","f62da6679e852d53265b47326b92fb24"],["/tyranobuilder/index.html","e34d5f7e2593fb7766f8cf6f37f200b3"],["/undefined/index.html","7c2068bef4f1b816cae86a1136b15c9f"],["/unskippable-video/index.html","23b04fca2027422a54ef8c6da71b871f"],["/update-20221211/index.html","155e5ea015782d8a5d512b88bc81eba1"],["/update-20221218/index.html","a2ddd981ae21b786f71f3a066228acd9"],["/upload-download-save/index.html","0c260ac59feee1534e0d45fd0f1e0f9a"],["/upload-your-game-itch-io/index.html","4c40e721d6e5e036e657a8f190eec0a5"],["/use-list/index.html","e9ccd819c555428b006074eac178ff94"],["/use-nvl-mode/index.html","5e938b334cddbda8de74702330dcdc5f"],["/useimage/index.html","0e5cdcc955e31cc2967c7563a06958ee"],["/variable-change-image/index.html","c5cca55fb84f3742fc35b3279ffc57ef"],["/variable/index.html","2d8b0a7a4bf3a3c56b644850f176adff"],["/vibration-function/index.html","68306895760b14da6f3655296a843f59"],["/vnmaker/index.html","f41f0b781a64188ea62d7070e11a9c86"],["/weather-effect-tutorial/index.html","ad2e25f0d0479218dfb2027b6cfcf71a"],["/webgal/index.html","c7a8221eacb16cfea9eb6bc67e5003a1"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
