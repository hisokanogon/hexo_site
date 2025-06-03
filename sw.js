/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","9ad6b27674ca1d8491468aaf27beb093"],["/2024-future-plan/index.html","35bb986ae542478b5bdb4af918c98b92"],["/2player-battle-system/index.html","09249088708c87969ba3ebfd962687ed"],["/404.html","a020efda7f1b218607bea02ee3ae87c0"],["/about/index.html","71d2be55dd998a1d6ecc8552d29b59fb"],["/acg-creator/index.html","da762b7843eccebb70b46561400824f6"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","d08ce87816c549cf92a6d66c7a57c94c"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","e993293f49192de47377b125472322aa"],["/animated-title-main-menu/index.html","c0c220799eb8e56e11eafc9276eef0e0"],["/animation-movie-cg-gallery-screen/index.html","da26d2ed22bc77b6362f0602c2343e9c"],["/archives/2022/05/index.html","f86fea5e99749238d7b199e9d9691d17"],["/archives/2022/06/index.html","146b69f312d0714c9a5c11460007abb1"],["/archives/2022/08/index.html","ff60d4c5950cf19c7e0c4aa6b78d9220"],["/archives/2022/09/index.html","42adde8efa6bf98912692ece12c10773"],["/archives/2022/10/index.html","fdf696cdd2a0d2b6e9893509af15a5c3"],["/archives/2022/11/index.html","a73ad362dfa151809fb299ed31ef055e"],["/archives/2022/12/index.html","40c65feeb6f7f7dabfaec1f6bccbbffd"],["/archives/2022/12/page/2/index.html","af7f83dab42cdc37821d4cbd47d6c64c"],["/archives/2022/index.html","15754dbd850dd6212c043720f1c2f95e"],["/archives/2022/page/2/index.html","01b80597bf9b3b6cf1db081bf7968bde"],["/archives/2022/page/3/index.html","6714715fbe6732742c878131c4638fe6"],["/archives/2023/01/index.html","675d6346c91b1a93720c14edb87f91ad"],["/archives/2023/02/index.html","3f8529803c6f40bf65ac93c3a30c5073"],["/archives/2023/03/index.html","8b39f3da6fa169aa9595491cdb4aa430"],["/archives/2023/04/index.html","b63da1b139a1c9de5939e8a7205d7463"],["/archives/2023/05/index.html","97b34db60f444d0a6986cdfbe1dbb50c"],["/archives/2023/06/index.html","a21006fada5b9666acf19e0c3d09b3bb"],["/archives/2023/07/index.html","19ac522466aa0a7d4096504ec69a54ff"],["/archives/2023/08/index.html","000871c48f8d675de9b7fb2a2008ee4b"],["/archives/2023/09/index.html","c5c6f144131971bd1941181a17d10419"],["/archives/2023/10/index.html","d640cd82a592b2d563f2a7173f5deec8"],["/archives/2023/11/index.html","63378777d214ad61ae55f2fb1dfe1c2e"],["/archives/2023/12/index.html","d6cb0831498042345fd365f4a6837fe9"],["/archives/2023/index.html","8fcfe06b0b8766b7e8c9118c52f8735c"],["/archives/2023/page/2/index.html","b7d31cc4b72a84ddd8ef1f0006554958"],["/archives/2023/page/3/index.html","88e1a34af00c59fe92d051a578d3630d"],["/archives/2024/01/index.html","f2294a308102708942d37b9800a8a716"],["/archives/2024/02/index.html","132cfd8a400f83a35721778cb80bc6fa"],["/archives/2024/03/index.html","9ea2ccf994def09bac1bf63171338506"],["/archives/2024/04/index.html","90699a071e6712ef6a26a0b65cd4a8f5"],["/archives/2024/05/index.html","e581d99d113f498c6b630e3a0c65d3b2"],["/archives/2024/06/index.html","556ee5e21aa101bbd03b1dc5c607fb47"],["/archives/2024/07/index.html","8c82156eedf2de727bdc0543245cb576"],["/archives/2024/08/index.html","1342082946ea3a07266c1673eb74ccfb"],["/archives/2024/10/index.html","e52972f7be4b3422c4214e197d512d19"],["/archives/2024/11/index.html","881ac767cddecb19457637580480f880"],["/archives/2024/12/index.html","92315662540ed990a8d1312d68a9b6df"],["/archives/2024/index.html","b8472f73f9040764ced3cfcb99117a55"],["/archives/2024/page/2/index.html","5a3aa3945f89812aa59db59150b92256"],["/archives/2025/04/index.html","999e5b4f8f08179f3895b13bdfaedaa2"],["/archives/2025/05/index.html","d1b3c5b7b4af20e2470e01d11169c1cd"],["/archives/2025/index.html","70d8515379cbb1b2d33d3f9072c1f2bd"],["/archives/index.html","a69de57affdfdba91406c2f4a36416c9"],["/archives/page/2/index.html","5d68bc99523f88e7f1fb086a5592813a"],["/archives/page/3/index.html","4a9cf042dd2be2526acc9a8e5fbab637"],["/archives/page/4/index.html","35bab232a65766214820851589e0e706"],["/archives/page/5/index.html","6d6a94f312d63374142c3106df676fbc"],["/archives/page/6/index.html","ca55b05e7f042a380552d5f502a2ef0d"],["/archives/page/7/index.html","f309d16491623609ea752e012c7d493c"],["/archives/page/8/index.html","93325f1e592bb5cc7a6e068964f1ad68"],["/artitalk/index.html","337714bfef635524c7f1a50244f87424"],["/battle-beautiful/index.html","abaed8d0299e6296f38c7949dc7c7c48"],["/blur-effect/index.html","6808d46c89811d1858aefc0d0d415cad"],["/butterfly-custom-tag/index.html","7d35c6b26618fe05f9f9a9c6f57b04ea"],["/butterfly-plugins-faq/index.html","931a725b3c06bd3a57b1ebce27f714d8"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","49730e6c181b4eb1713d8ca0ec82635a"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","11453b451b89f4ed49ddd6272b5e47e4"],["/categories/announcement/index.html","c772e104c1b3d76881d52bc430a43535"],["/categories/diary/index.html","32e2ad887e9311380ebfc610359770c7"],["/categories/game-dev/game-engine/acg-creator/index.html","658879ce3dbabf76589fad583e68bb8c"],["/categories/game-dev/game-engine/index.html","c7373552c9ef1a4dafcd37d1b1bf680f"],["/categories/game-dev/game-engine/lightvn/index.html","d50c747e7302c4cc0dd6b70d46ca8f3b"],["/categories/game-dev/game-engine/nvl-maker/index.html","971dcff1423902c3e1f5290af3cb1f0e"],["/categories/game-dev/game-engine/page/2/index.html","df7fe624ed34dd55cce5c7b291d84f19"],["/categories/game-dev/game-engine/page/3/index.html","6cb42daa2ec5d4aa4e98df063e8ac5b2"],["/categories/game-dev/game-engine/page/4/index.html","1f987b4b38e01af3e4db34481d1a4dab"],["/categories/game-dev/game-engine/page/5/index.html","f2527d20f84920380d46a4fedf54ee04"],["/categories/game-dev/game-engine/page/6/index.html","3c21390690fce4dc0a99b7ce709b457d"],["/categories/game-dev/game-engine/renpy/index.html","5c106301ff27e0903562c73b81892577"],["/categories/game-dev/game-engine/renpy/page/2/index.html","ca5793cbc374b2a733af37935dcba374"],["/categories/game-dev/game-engine/renpy/page/3/index.html","3600ce2cda45a435cfb270aceeb17efe"],["/categories/game-dev/game-engine/renpy/page/4/index.html","57f4aed25a063983140e0bafd36858b6"],["/categories/game-dev/game-engine/renpy/page/5/index.html","4c0c5a28f3da94eff8df2222b39dfa64"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","3250dff6873a63b5f4536a5412bab044"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","e024c0a34af475e5b1f8d21f1fed8efe"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","79bf7c4ecbc0dbf0a3913d19504dc275"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","98b6a7e2b748e59a9c348e1493771537"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","324ca1ea7ab3e2e3cadd9a9c1ab33a44"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","e170ffdedd2106a25aa68bd8ba3ffb2a"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","ba291d884c8815e3a566c4c5aef14972"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","dfdf7f7ae054ca2e26f5a540cd2ad449"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","4b8d739798b3231f6bd9de1cf43c015e"],["/categories/game-dev/game-engine/rpgmaker/index.html","413a3b117cb121196685c327253dca12"],["/categories/game-dev/game-engine/suika2/index.html","0d451be7340f9a8852e5b9874c5793e2"],["/categories/game-dev/game-engine/tyranobuilder/index.html","70817be1da7f566ee588597fb3d7583e"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","6706b5fec82eafc845eac9519a29764d"],["/categories/game-dev/game-engine/webgal/index.html","fd04af0fc47f07f56e11943adf0ff38e"],["/categories/game-dev/index.html","e0bb228932f5a7b2fa48a7a9462f3d20"],["/categories/game-dev/page/2/index.html","90bf5110bad356d9d63d353ee1cc2c85"],["/categories/game-dev/page/3/index.html","f5c26f2d51296e303132eb2352effbe1"],["/categories/game-dev/page/4/index.html","29195006d9d4567c6385ece321e676b4"],["/categories/game-dev/page/5/index.html","583c1521941444f41ed7374491917648"],["/categories/game-dev/page/6/index.html","76ed2e872d4ce18b9f90778d1d7e8377"],["/categories/hexo/index.html","325ab2f64565186ba1667f3420ffb340"],["/categories/index.html","a88ff73c9072b288753507a1d3f73939"],["/categories/material/index.html","78b3c4d2cd8dd9ef8a945386d2bf2cee"],["/categories/update/index.html","82b5aab6450e8576ea622e9094310d82"],["/change-according-to-real-time/index.html","b4c2558f9d9cc5de362109aea637e390"],["/change-character-info/index.html","af7977cdbd153ce3999f1bc6ac85fe07"],["/change-title-after-first-time-viewing/index.html","4e0f6a32eca60452d3d77b937f0147a3"],["/change-title-based-on-event/index.html","7827e8f24283787c66d1c0704dd73350"],["/chapter-selection/index.html","5f5b9b12cf9fbdd51e5adf16085a794e"],["/character-base-state/index.html","cbd2a841c7327ec27c87dfa99e6735e9"],["/character-interaction/index.html","12d010d0a8bb053164f2a8ea1fa3e45e"],["/character-start-personality/index.html","bd66ecd3e783aa7e9dd65de74d60781e"],["/character-stats/index.html","bf759658ba8b51e5791735393e283f46"],["/chatbot/index.html","040d8b880cccce60272408fab040c4ec"],["/choice-time/index.html","41495fd404084bcc59489e42ec7dea6e"],["/comments/index.html","a1d0d200362cf9fd937611593d30b20e"],["/commission-info/index.html","9fefaa2a606dad0cb15b6c49193decde"],["/count-login-number/index.html","d7761be0556e5aa5545b468a6bb6e721"],["/create-button-anywhere/index.html","5846858faee3a0a653f3454d0d717dca"],["/css/eurkon.css","2ddf74373c0a69de5fe5fc5c200b3cda"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","b3537e5067d5df8a6fde2da257bdc498"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","ffc3da8ba851f00bc779a855cc0bf37a"],["/css/rightmenu.css","b0d3a730598351ea30dc2754320cbd1a"],["/css/siz.css","62af186dd22dee66c928ad69bb7d1e3a"],["/css/swiper.css","0e913588129e63d435ebbfafcf3ad225"],["/css/swiperstyle.css","2cb921ea89c0bb5aa14040eb55fa42f4"],["/css/var.css","f827c14bcf0d41f0ebc990db56e1c02d"],["/ctc/index.html","4553f719f2f4e2a6cb12fa2eb776498f"],["/custom-credit-screen/index.html","79d1133139d67f3f6505964e68453a27"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","0a4f7861829631953d39e4cc7b722ea8"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","60219e5536f493f64a471797c10e9605"],["/custom-gallery-cg-screen/index.html","f4d15af70fa3d86422a21304b67104de"],["/custom-launcher/index.html","122b78605beec8a027865d001242910b"],["/custom-loading-screen/index.html","e2893222b41046de6181e1beb35c3490"],["/custom-mouse/index.html","ff571f8dc8b9852c1d1088156aa4063f"],["/custom-music-room-screen/index.html","06279155682d61e77e2a1e1648227ad1"],["/custom-music-room-screen2/index.html","17f70744ca4703078b9e00af882a83b3"],["/custom-nvl/index.html","d32d8b1210a5534cbac74b9ee79ac606"],["/custom-player/index.html","f6d34978b4c0ad92d522b2a1d7c4e308"],["/custom-preferences-screen/index.html","65162864008568a7985ac069264ca8af"],["/custom-say-screen/index.html","1583d8120bb04ccee963dcf987d68ab9"],["/custom-scrollbar/index.html","b8eb3fd3e4a0f5965272741608f80232"],["/custom-style-bar/index.html","48dea36818e4d03c7dbf42f16ba7da86"],["/custom-style-box/index.html","0ec7e126744be8a991245bce8b3f43cd"],["/custom-style-button/index.html","7ff7325cfc5506f8c68c54d9418ef56e"],["/custom-style-grid/index.html","e9bcb8765d1f8c90c0bbff32fe6ccc39"],["/custom-style-position/index.html","b18e3829e7bfcddcf1ce274427fb5e82"],["/custom-style-prefix/index.html","40e099e2edd71adf2d8da00d3b5088a3"],["/custom-style-text/index.html","7a28bfcf03ac9ef1e6f9cd8f89f255de"],["/custom-style-window/index.html","3215d6a78599cc1e2660af8b391839b1"],["/custom-title-screen/index.html","11718b3487812819a399a21121acb529"],["/define-npcs/index.html","a0be134371b1bd54076fe005f8e8d62a"],["/delete-save/index.html","b10af75ad0df557efe6cd32fa8f0621d"],["/dice-function/index.html","7c884ad20cb6c0c60963fc5a9e08b770"],["/disclaimer/index.html","2a928d9247c7fcf825d10a9a13ea7a94"],["/display-immediately-all-dialogues/index.html","3b78765b709855ee46decbc5711a285f"],["/display-real-time/index.html","29252b0200d104d92082eff0c5301c8b"],["/en.refund-policy/index.html","5ee53d0ed858f74a28a1a76f1f069f74"],["/enter-name-screen/index.html","cfd097c45d34b73e8ece74a48e21d949"],["/export-game/index.html","c064a7d525a60240f95bec9ec6f9cc03"],["/faq/index.html","7c6b30c247aa9884ed6614715fa61764"],["/friends/index.html","d46d65d23c8f9c3e2f971f65b04f3eea"],["/gallery-template-assets/index.html","3a6e633520477367bb1891ce6a6dfc3e"],["/gallery-template-default-ver/index.html","aad3ae88e353cff5d48d9dd24eb5250d"],["/gallery/index.html","18b1e8e1302e2c6d0608abae0e8e8f45"],["/gallery/photo/bg/index.html","a7431dbb378d141f2feb3c586fed7c03"],["/gallery/photo/gui/index.html","a87083739ded60698377127dc2c3d746"],["/game-only-text/index.html","61beb97e7cbccbe49ec692b0e0e86b75"],["/generate-random-name/index.html","aa987626ae872b2e84a822a92bab6050"],["/gui-017/index.html","d0e1133e47937938096a3342d7db0a5e"],["/gui-vertical-002/index.html","5077120bcb719eef6f1be91a7208f14e"],["/gui012/index.html","5fb79258ff59ad3b204690af69965ce0"],["/gui018/index.html","f79d023eb48a3422a3390aa9d3c8eeff"],["/gui019/index.html","2be2c9f6b27dd00aa9652cbed1cf844b"],["/gui020/index.html","42751527718c5bae5e59e3f3a09043ba"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","70ea687e12e88aea602ce89eba86c86b"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","3d9b92e4ab5f38abf24f81a10cb9b30e"],["/hide-quickmenu/index.html","25acb6890447e2d30f2f3b2b94e7b97e"],["/hide-textbox/index.html","9784b9202495187a3437aeabff3dc2ef"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","ae457f72f31ea2b91ad508d9e5167c72"],["/images-tip-function/index.html","18eaaecf0dcce6dff6cec7abdcda0f20"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","02c8ac89c1a55d37f417e61d33926e5c"],["/index.html","fdd6611984050c6c6af7af002699a8a1"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","38f58e242eb367897c25b682309071e1"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","620eacd85149df0771870d1cf1251e18"],["/items-sprites-effect/index.html","e5acfbb2e4034afbeb335d8fc121bedd"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","92f1167f715e5bef636c70ad6292d620"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","6688404ff89984ecd1aa82e6ca9ce1b2"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","a7456c39eb5822fa266cd31882db07d4"],["/link/index.html","9f8d7dc5271c82a0323fc89cc05a9135"],["/login-reward/index.html","b9bbbc0448aa90506214ca6807e445a7"],["/long-press/index.html","a79f35ecec50350cb72099191f1721bf"],["/main-menu-music/index.html","e0879fe0a6fd298bb72b582eca9179be"],["/make-butterfly-beautiful4/index.html","85f2517099073265317fe7623050d4d1"],["/map-puzzle-system/index.html","8751fa8d2d3d4ee1a14a2e77ca45ab76"],["/maple-effect/index.html","820f2aa14e918c62631ad4830e362dc4"],["/memberships-2/index.html","e839890485ffc40e7a92caf693d37744"],["/memberships/index.html","8c0ba7b62d554e5a10ee1a842d03c059"],["/multiple-language/index.html","b1443011bd78efe273c8e03411639f42"],["/name-input-assets/index.html","c08e52ae3e55986a1772d9fe075b8400"],["/new-year-event-2023/index.html","064b7dd8731f2fd219f8e21c051f3415"],["/newsletter/index.html","57762d9e5d4fad263c120f430818bf01"],["/nsfw-limited/index.html","8dd1939a8b871abf1f9b40f8c28d1f5b"],["/null/index.html","a688a1782f4d6f8dd08d5f4d9041f3e4"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","7047e7120369f3435619e8087620a8e4"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","692e0a03654dde4c0652837f6d0006c1"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","dd887f3665491029e7278cc127f02fe9"],["/openchatai-renpy/index.html","c501bcad95bf8bd4a02d3283ba3ab64e"],["/original/index.html","5ae296cc9deb4dfee6d9fea0ba4daa4f"],["/page/2/index.html","a99415132e234606aa888f9dc4697441"],["/page/3/index.html","159bf56c86c4acddef52cdc6298d08ff"],["/page/4/index.html","6c776e36858f618ac32fc281f5b14741"],["/page/5/index.html","147661871f7071b9ac9b7fa2fd77b294"],["/page/6/index.html","ec1b466535e48c35b6ef99ec639c2cac"],["/page/7/index.html","e6c0e01193bf3dc4efcbbe94f5fee031"],["/page/8/index.html","3dac654d169bdf078dfb5f6368c7a3d6"],["/point-pop-up-assets/index.html","3b946414769506490d391f2589cc6cdd"],["/pop-point/index.html","0adeaaad3ef2ffcf906e57481e475b66"],["/privacy-policy/index.html","61889b3ff63787600a14e901cdfdf791"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","6741c79aa43bf70d5ddce05dd56ca565"],["/random-number/index.html","2d9eb0b7d3a1d6be48fec021ed59a3fa"],["/random.html","2de171d2f0521daa0287387a139f53d9"],["/refund-policy/index.html","32d929162a43837403f9f930dd8dee25"],["/release-017/index.html","5d239a32e0ed56b7c00ddbb8dbcb7b33"],["/remembering-choices/index.html","e0546f58e58bfb6c1a733b6ec67e5a4d"],["/renpy-basic/index.html","9cd636b939d108f1cab939167119a425"],["/renpy-crash-glitch-effect/index.html","188ad3c8b521dbcc3b4056f9bb307dbb"],["/renpy-flip-image/index.html","f9dafa971e64a540d72a0bd90867ee24"],["/renpy-matrixcolor/index.html","3720c016899c8249c9efd63a9711a502"],["/renpy-overlay/index.html","7fe05dceda77878bd001e85ef753407c"],["/renpy-review/index.html","8440692486302108a95bce212fd0bf28"],["/renpy-typing-effect/index.html","70153435a7058d1b4e1933ada1a8972a"],["/replay-cg-screen/index.html","34680fa1cf735ea6dd72eb5879535d9a"],["/rpgmaker-assets-menu/index.html","560ed7d4f1dc8c96e9a0325c1aae3567"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","1991ea04297b6a5bb9345165aa063575"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","8ad41007e58aa334ea53865e5340243d"],["/sakura-tree-background/index.html","bb140df2fab8bf2b2f145ef512f24988"],["/selected-button-style/index.html","5e2bc7595464ada4a536b56e1011676a"],["/show-variable/index.html","696526ae844e291bc84d27e76336c1d4"],["/side-image/index.html","3cdbf5d1eb480734e5dc1f3e76de8093"],["/snow-effect/index.html","3bbfd39c5ee3b8daadb5e001b4087386"],["/speaking-animation/index.html","eb5e3fe064e43e4957b648710dc3d02a"],["/splashscreen/index.html","5ad73622e7fcd6d2d9af0ea213b3a573"],["/suika2/index.html","51f5466385b839b88a7e22a5e14ee104"],["/sw-register.js","63d0fae905303664919de74392b10ee3"],["/switch-chapter/index.html","e65f25f6c6d0ab96287b564622911f73"],["/tags/Hexo-plugins/index.html","c216e37e1c5a853311ecaed6e9cd8aa4"],["/tags/Light-VN/index.html","ac51b08cd25793fe8cd6f167ae064d76"],["/tags/acg-creator/index.html","97883a7d38e6377ee4708ca2abafe300"],["/tags/ai/index.html","7c9e7a19e9253c63a3163c2023c93796"],["/tags/butterfly-beauty-diary/index.html","a77f56467afb9f4a352df99f0f65d4d0"],["/tags/custom-hexo-theme-butterfly/index.html","afee599c5d64a5f2cb86bcbb688f05fc"],["/tags/custom-renpy-title/index.html","84f40e500d164efe5042e33cd2542ab0"],["/tags/dialogue/index.html","3346f05205413a00c49bb1e59b6de712"],["/tags/effect/index.html","00884d4cfbd0db28f796e68bdc7c7d5b"],["/tags/event/index.html","944d2a66acc65102813c31e9001cabd2"],["/tags/hosting-own-website/index.html","7dc3738f89be121871d7eda9bfcc508a"],["/tags/index.html","ab8f65af3300a10b3e48fed1aa7626f2"],["/tags/itch-io/index.html","783912bdb958153277db9c4b158c8cd1"],["/tags/light-vn-update/index.html","e934a612e6e9af9129cb5eb77dd53266"],["/tags/nvl-maker/index.html","1d29c241fdaa75610e7c4fb421ab3a5d"],["/tags/player-related/index.html","01b0b9cf37c36c52f6cb2192459742c9"],["/tags/pro-tutorial/index.html","ce3bcea51b38e68503e99bf0f3572843"],["/tags/pro-tutorial/page/2/index.html","025e9063033442d6984f22bae0c7b17e"],["/tags/pro-tutorial/page/3/index.html","a75319e0dbd3991c46dccbf63114c4b2"],["/tags/pro-tutorial/page/4/index.html","849586664785ec59ca5a72650008d0e7"],["/tags/pro-tutorial/page/5/index.html","1512cfea47bc9ec2ca20c938ed4d6255"],["/tags/renpy/index.html","d218647b79e07e00ea5432d46d90519c"],["/tags/rpg-maker-custom-map/index.html","92a5b558ad3ae5a358f15daa0ee5af8e"],["/tags/screen/index.html","a22d352b802be0c7dc65d2a356a17e53"],["/tags/special-function/index.html","354d7c5156e560a657277158d27fe2b6"],["/tags/suika2/index.html","58c0b2b3e839796b69180137ab82ac72"],["/tags/terms/index.html","f5f6f7f5b3a33d20369558c01bbe7f6e"],["/tags/tyranobuilder/index.html","e575719b913f705c6b56b974fe47c4d4"],["/tags/ui-assets/index.html","2c368df85bd3142725e442401ee4ff06"],["/tags/update/index.html","b7264ab477608c51febceae67d340513"],["/tags/upload-game/index.html","386614bf27e05328363f222077c1a176"],["/tags/variable/index.html","85e75c5bd957d7e8b541a6729e3d47b2"],["/tags/visual-novel-maker/index.html","2ef416b2748015c96b5c8237ae5c8fd9"],["/tags/webgal/index.html","ec006f27a0d6a17eb758ba3207652cc6"],["/tags/封面製作/index.html","2d3f01e2c59d5449bc8128dd9d52d319"],["/tags/背景素材/index.html","9bd33a3a9e39eb8d3f828a2253e34cca"],["/tags/隨機功能/index.html","eb295cb8cca3ec15cf2b5095c0718f6f"],["/test123/index.html","eb4a9b451186e024a6f478c63203fc31"],["/textbutton/index.html","f050094ae8a69a3c8fb0e999c4c982c9"],["/to-do-tutorial/index.html","57f46904d693130ecd3a0d21e4e2f31b"],["/tools/index.html","7069db039a0691bf4c5f03e2ed20ba8e"],["/tooltip-function/index.html","c560d3f66be4a8667666b85299627635"],["/transfer-to-hexo/index.html","204a20c894dd4cd867c28b3f409d464e"],["/tutorial-update-history/index.html","d9acee295d633ef395289d8013b4a3e5"],["/tyrano-name/index.html","981c5a8c689ee7dbd02c9b098374dfe2"],["/tyranobuilder/index.html","3f8ae9bd6d7b27fdf0ff1acbc4ab692b"],["/undefined/index.html","7e85334ed8d778109253a0b464b17e2c"],["/unskippable-video/index.html","20fc12209f458fcdaca6a4795afb8108"],["/update-20221211/index.html","b332e28d3c9b90dc8d01bd643b23505f"],["/update-20221218/index.html","6170ac500d81801be6296caba615747c"],["/upload-download-save/index.html","d8040d3d2362756391de71506d523000"],["/upload-your-game-itch-io/index.html","f5b1362709a347dc35fd9683dfb4ad87"],["/use-list/index.html","216aba0a38c2269755b640ddf3ad8212"],["/use-nvl-mode/index.html","1f92040c0c74568a384bb52dbd3f0dc4"],["/useimage/index.html","3e7f71bf713c967dcdb0f7fbf9338abd"],["/variable-change-image/index.html","782f8618e8eaf5b4687210f2bad4abfe"],["/variable/index.html","755e5ed67fedf4cf22f6caed3387dffb"],["/vibration-function/index.html","bff04d6a5d1c8fa1175477fb55dde9a5"],["/vnmaker/index.html","ca1b9d257b95f8567e132901fbe89158"],["/weather-effect-tutorial/index.html","e63c63e51436b7aa203cccb5e0c3462a"],["/webgal/index.html","403863d4e950ca41a6579b5834a87640"]];
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
