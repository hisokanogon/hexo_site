/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","789d87a1c3fc670c1dc7118f01c2c1f0"],["/2player-battle-system/index.html","35fbba2b07e1b644564f510aefb2bdb1"],["/404.html","eb077fd9870d19551275303283b6e8bb"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","ba9710f57fee963066ed8c810dded33e"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","884dc457294f86f0e494ee5c0f65bcb9"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","94e43c16842ed43a2924acd3c28a0d84"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","752a24ec86a227e0060bda2067d6ba8a"],["/animated-title-main-menu/index.html","bb73662033fbd39285d93737ff05f83c"],["/archives/2022/05/index.html","e73c1ff475958845c218419126aaeb4d"],["/archives/2022/06/index.html","a0ebc7c1874cb536fb3ceeacce84fd5c"],["/archives/2022/08/index.html","2deba6b069b98f91ef51a583f0b3e6f6"],["/archives/2022/09/index.html","c02fe3b8a1b8fa7570042b0ddd140a59"],["/archives/2022/10/index.html","d4322307c998df57e79aa1321cdcbe28"],["/archives/2022/11/index.html","d811c4dc2c4d1a8ab1ddf7c47c309a3f"],["/archives/2022/12/index.html","47ae4e735f3d1c68719c0c15b97976de"],["/archives/2022/12/page/2/index.html","d653ee3822f468042dad3424c8ab14e8"],["/archives/2022/index.html","b9a9a9da39455e2e99662ecdd6bec0e4"],["/archives/2022/page/2/index.html","44180ec8d5e05f27cba6cf97d4974afb"],["/archives/2022/page/3/index.html","0a5e00a3cd8284b6fccc121381e0c0a1"],["/archives/2023/01/index.html","29b625df89a4601ca51b2ec238814092"],["/archives/2023/index.html","a040a38fd55c49c9b319c241528c3b0f"],["/archives/index.html","653a82e7c118e793f3104acbd604801f"],["/archives/page/2/index.html","4ca483399cabc908ff34c50950f2d6e6"],["/archives/page/3/index.html","d2c2bee2e8621bb11357c29b13b9bf52"],["/archives/page/4/index.html","e3e1adbbff8a28a187e409bd9655615e"],["/artitalk/index.html","c845cf1884f0982f87b54dc6f3d2ae42"],["/butterfly-custom-tag/index.html","7dbcabd875b7f4ef84dbcf14b29f4627"],["/butterfly-plugins-faq/index.html","b3a215d12f275209f9f47648cdcdff2b"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","5da1f1995d641631d5fdaab028268649"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/announcement/index.html","3cb4edb57c7916279a19b72cb1cc72c1"],["/categories/diary/index.html","e02247aeede0bfb640c147cdd1fc8fc7"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","61d3460eb7ae52a9d74b6efa5545f442"],["/categories/game-dev/game-engine/index.html","60706427973964d7e13209e540e1dab4"],["/categories/game-dev/game-engine/lightVN/index.html","11ee9c68ee973c298d50d52bead9d8f7"],["/categories/game-dev/game-engine/nvl-maker/index.html","4d977dc078e37d412e9ad7b373bbd47d"],["/categories/game-dev/game-engine/page/2/index.html","dbed46ffeff0425881691b35351da538"],["/categories/game-dev/game-engine/page/3/index.html","ee45b5e41f15245cf6e73de5cebf7809"],["/categories/game-dev/game-engine/renpy/index.html","40732aad44c8d20c09e3331e843cc68f"],["/categories/game-dev/game-engine/renpy/page/2/index.html","e6af46118d286410a7f847c37a49ea14"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","7e52c154109b18cfc85127c57a720c57"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","399edbdab17b1c2cf6122e13dc9d2bd4"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","7075b070a84608e1fb44d51465af592f"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","53537ae2f01698d43665bf974e2598e7"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","c1f90399204dcbb8dda6898fce90d857"],["/categories/game-dev/game-engine/rpgmaker/index.html","46f2eee51eb9a63e18fc00600e65338a"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","a17eac8a3b72e9d26146b151d2b6d09c"],["/categories/game-dev/index.html","266acc481858680e686388356a1cd609"],["/categories/game-dev/page/2/index.html","42522e94121a99366befad5383aaf27d"],["/categories/game-dev/page/3/index.html","032feae4b9dfe6582accced383b58b11"],["/categories/hexo/index.html","657e6330d85dafaf08924770297c18fc"],["/categories/index.html","f77b23805fadc48df1f819112392f651"],["/categories/material/index.html","f0500348a37ea64462585eb6fc13d8b5"],["/categories/update/index.html","4797fa98247105550d9a00fc038ab201"],["/change-time-according-to-real-time/index.html","b8ac36310158d9b8775640933a918800"],["/change-title-based-on-event/index.html","2c27b1863d099e3dc5abc14ad8bd273f"],["/character-stats/index.html","bd542e765ee9ffab5eea85508a6d33b1"],["/chatbot/index.html","67396b06453cda4acedc9cd3269ef00e"],["/comments/index.html","d64a4693a7f35134e7fca74953161078"],["/create-button-anywhere/index.html","0dc8457599eb98572cce94f15a82ab29"],["/css/eurkon.css","84228cdc0de968839083f21425382d39"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","ccf5c46998d1392bfd1de75669d343e1"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","7da7eca003114794bff122a32c20d20d"],["/css/rightmenu.css","b6f10e5cd3640428bcb259aa26191815"],["/css/siz.css","41eb793cc0e809a0ab7a4d2db77019d1"],["/css/swiper.css","86452e9f9d2592a46279ce224d4b90bd"],["/css/swiperstyle.css","f88320767345a2eb248934c633e34c8b"],["/css/var.css","abae0659d20a97c1ed0c74d5e8157d38"],["/ctc/index.html","6ab76f615dc8cf2d8b095edc2c1c72fc"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","06346e9b0e1c86829a964bc14c1a4da5"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","5565619694f89b816eda293e43082851"],["/custom-loading-screen/index.html","bc0872233c42115153497973e22b0bb1"],["/custom-mouse/index.html","a9046a2a3831cc3d5ef05110fade5ea0"],["/custom-player/index.html","9458cc1ebb0f154f2c8c486d325eb513"],["/custom-preferences-screen/index.html","b807ca3dea3af5277d0a1d3e7497f48c"],["/custom-say-screen/index.html","61409e0703642adf19d16ebfdc609e14"],["/custom-title-screen/index.html","721d12e658e5e54141dacabe7a967faf"],["/dice-function/index.html","38d0c320517aa03cf9d91cbdf0fafb5f"],["/friends/index.html","1979be0c6a2dd977d8e7eced04040b01"],["/gallery/index.html","b52b3238de34cce0dd32e97b85f771f2"],["/gallery/photo/bg/index.html","d6cf6b0316ab61660315f2ca3b914fed"],["/gallery/photo/gui/index.html","e4074b732bcb45f048076f3a6dfb5f5f"],["/gui-017/index.html","ed4a4da67da285a9d9620ab0bee6b659"],["/gui012/index.html","b599297727027d47f8d0c97d94eef183"],["/gui018/index.html","61c386b4ce284f1602b88c8d9f7a66d3"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","1a178ee1c826ded5c50b5acca88a3abe"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","9e701c704b5b4795803a044d0c1b72d0"],["/images-tip-function/index.html","40b9b7fac9eba07a14e461c42aaaf5d6"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","6f022e0cc8474a64d1e78d817e8ee701"],["/inventory-system/index.html","f233abbd2b5fe0de59cfc674732feb57"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","7dfed9c2e3a6a4c7f93ca0f7fbffc7b8"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","b5b7f2ed2e360594bad6628982d314b6"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","c9a7963f7dfe562eae8ba8d27c3eb824"],["/link/index.html","171435b5fb0cfa6f5b3c9f01d2c83879"],["/map-puzzle-system/index.html","aa2516af0ff1932814e544f4add9d314"],["/maple-effect/index.html","5087ba23ae3dfe1f4ed26d67d5d7d149"],["/memberships/index.html","9ee56c397bf186377a4fe299e8f25603"],["/new-year-event-2023/index.html","090382c09eec3c9fbed6e1515ed5865a"],["/newsletter/index.html","88554f5a6f09e981d8e87d11f1252796"],["/null/index.html","acb66ed7e5802b0c487c7f14e1b6a0a8"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","5bf81a991d3c80adda7e16a1cce12e32"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","cab7ce460e53b49000044a118b8bde2a"],["/original/index.html","a02271c3115dc15bdaf38144ee03668e"],["/page/2/index.html","8a51ea6a17054a6e33978b4d363a658c"],["/page/3/index.html","2eade181de8300f5a4890fd10cfab158"],["/page/4/index.html","ba9543365f9b90093b63bfe2b7538052"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","4b5e53745da6c3513d9441326fbb9f7f"],["/random-number/index.html","f125cf496c4e2ad6fd312de01a89a467"],["/random.html","1db085a836e356aa38fc224a2439711b"],["/release-017/index.html","e055f96b4a71b52d21a7c9222c213906"],["/renpy-basic/index.html","2acb1a70551b4a09406deb824a970485"],["/renpy-matrixcolor/index.html","d71fadea6403c5978029ed33318a2145"],["/renpy-overlay/index.html","b9941a56b3e42ab8fb41f45195237011"],["/renpy-review/index.html","22a8330edbbbd7771b73beadb4d76d09"],["/rpgmaker-assets-menu/index.html","79e2350ce669d10075df77b1bc9620bf"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","a700225b678dbb57b8559726a20cdad7"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","ee7b6781eb6b952de48d5715ad7ae7dd"],["/service-worker.js","ed6fbe704c544d8caba675c20e9bd915"],["/side-image/index.html","a17ae30678352c0138e77d034f100768"],["/snow-effect/index.html","8a6d6add4c4a513173f9927952bc2a84"],["/speaking-animation/index.html","20f94e4628fa2b123a74513c651a48e6"],["/splashscreen/index.html","4015d1ffbe330122b9f2375a8833cbdd"],["/sw-register.js","56b1b978e4c19b245055ca8448c15d7b"],["/tags/Hexo-plugins/index.html","aa05e9094ffc7463fe3f05925ed35a84"],["/tags/Light-VN/index.html","b725363d97c297133f75681b15ee8754"],["/tags/Premium教學/index.html","f25fdd7a03f9d1aa9443a8e2322d33c2"],["/tags/Renpy/index.html","4ab43e3e69e6fe42eb92c06c28eb951d"],["/tags/ai/index.html","c930e892ccb31cb23f6249e8bfd29b0b"],["/tags/butterfly-beauty-diary/index.html","524347c10de78e7b5797eb29584a4bdb"],["/tags/commision/index.html","70b075c455ce470711dcf34b8f1d9c2f"],["/tags/custom-hexo-theme-butterfly/index.html","dc3706385d5bf860664c30d34b8084cc"],["/tags/custom-title/index.html","094dff7c31bb217276f87a6a496911b3"],["/tags/dialogue/index.html","d7f07a7e4d2eb5545bdf5a526398303e"],["/tags/effect/index.html","71dfd434f690a553f9347553f9454187"],["/tags/event/index.html","f4ba63b8ef4b56c2d9fa206952bd019f"],["/tags/hosting-own-website/index.html","20483c94ac58482a56a77f4c64161d79"],["/tags/index.html","4d794d6fa98ffad9f9af8e49e7756cd8"],["/tags/itch-io/index.html","7dc78971e6c00e759ad08f4212190e70"],["/tags/light-vn-update/index.html","d380702beab7f79a59a6f9a42cbf39e5"],["/tags/nvl-maker/index.html","4b0b789924cd8323f1a4402d819c8ac5"],["/tags/player-related/index.html","641f9fd1315646206f92d9ee3dcaa70a"],["/tags/pro-tutorial/index.html","b0e44ea62e05d53e42b7de6a0caa80b3"],["/tags/pro-tutorial/page/2/index.html","cc674d597ab0b04d3c0658df9f2cd37f"],["/tags/rpg-maker-custom-map/index.html","e2d3d99413e59398110d1e1427558000"],["/tags/screen/index.html","d46376db63e6f590eae859b5b4771908"],["/tags/special-function/index.html","bfdeda349638057e96d3b5f9c370a5dc"],["/tags/tyranobuilder/index.html","2aa136e80f7946657d2269b890fbf9ff"],["/tags/ui-assets/index.html","6cda8bf282ff4afd388ce7ebd3a13900"],["/tags/update/index.html","b3aa49b4434b533d230b198ca0142670"],["/tags/upload-game/index.html","ea16c09d449d3f4bac5e1f62802ab871"],["/tags/variable/index.html","0381c67cd9cfc056fe67394faf51b5ad"],["/tags/visual-novel-maker/index.html","c7d8a8d2578c5167db7e588610bb5073"],["/tags/隨機功能/index.html","de70b7b9224697ca32f268d84f17aa46"],["/test123/index.html","87bd7dbbff8b86555d9e37acc6685bb2"],["/textbutton/index.html","07fea707b9b6f66c702c5188d372d8ad"],["/to-do-tutorial/index.html","56f06e55c71a59d9900ab1ff63978b32"],["/tools/index.html","e01b6a7fc3dc94eb4466c40efa44ac0f"],["/transfer-to-hexo/index.html","6667ded969eb20d90f94343b013a5436"],["/tutorial-update-history/index.html","636b1e331634f0ec777db8d33d0201d2"],["/tyrano-name/index.html","c4ddd15e96b1933243818843be7abf9f"],["/tyranobuilder/index.html","6950ec9aadafbebd2443423d583c1dae"],["/undefined/index.html","88675a9a73520c9efcfb5f297754d91c"],["/update-20221211/index.html","86d7d3ddd74815cfceb90092f2d79281"],["/update-20221218/index.html","61817c1f707e572448d4b324a195bbb0"],["/upload-your-game-itch-io/index.html","1e88b750734fa267cce45f8128dcbbd3"],["/use-list/index.html","0ce10e7967e96100b61c22bf5bef526d"],["/use-nvl-mode/index.html","98d86a8e57e2e5f4a2371455841b5b9d"],["/useimage/index.html","65fa89b97a4e39c46a258260c157335a"],["/variable/index.html","0f496b1c8e47cd0f6fd6e4720bcfb1e0"],["/vnmaker/index.html","9fc043dcb67b3cd0d1865d8eef514bbe"],["/weather-effect-tutorial/index.html","6de697ee5512ecc9a1901adb5821ca40"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
