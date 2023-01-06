/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","ee01fd3889cf075df15b894ecf0a8ac6"],["/2player-battle-system/index.html","660f5cb6e11ef4ebb5fbd5f87bf672d5"],["/404.html","ace162f16ed63b0006cf867bd0ebbe79"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","833c18ff0abe3e26302387e286c100e1"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","5f0de73bafef1789fd4dc72cfb670cb5"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","ec593c6c98bd7224649c326d235c3fd9"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","df7526930899a5ad0ca84832a662ca5e"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/OpenChatAI-Renpy/index.html","1a62f3a3a4e7359cecec95c85450723d"],["/Transfer-To-Hexo/index.html","eca5bf81288c22430a4ca0fd972ad9b5"],["/TyranoBuilder/index.html","c4a6cdb41f7cf20cb5b61281f9571d0d"],["/about/index.html","cf1070154295d7b52fd9f56a76abe7fc"],["/all-discount/index.html","0dfdf801a7317bd81edf40565403a0f4"],["/animated-title-main-menu/index.html","eab63993a913a8f7a65bf270fea3f536"],["/archives/2022/05/index.html","4cecd2cafc848267c1b7af774ee6e6d5"],["/archives/2022/06/index.html","af43bb8fa99746340ab3af3838712a4a"],["/archives/2022/08/index.html","14d4c66e5a01ed53913a1dae91ce0467"],["/archives/2022/09/index.html","ccc9408845069ff3c44b1169e3231125"],["/archives/2022/10/index.html","24bb74218c1905aedca61fd60475279e"],["/archives/2022/11/index.html","8bf82090fb565005739e2b53f5c72a89"],["/archives/2022/12/index.html","500b6d3d62c04fa6e2b6d629e3c38d50"],["/archives/2022/12/page/2/index.html","972eaedc5931d69d4a32ac820294a677"],["/archives/2022/index.html","d9b5f7278f03819d5b7561808c6c35f9"],["/archives/2022/page/2/index.html","09ad5d6adfef60619eda0916f2db61d2"],["/archives/2022/page/3/index.html","5faf9dd8ab91aa46fbddb330f1560c81"],["/archives/2023/01/index.html","cd1f5fe483ab4e87bde276acfeeea638"],["/archives/2023/index.html","77b7916e2eff84d34b51b45c31b8803c"],["/archives/index.html","850f2153901ab152200ac782b0311a65"],["/archives/page/2/index.html","e0cc673476ee696c0370149d0bff279d"],["/archives/page/3/index.html","3015c10a4e6ec016a6883197603253f9"],["/archives/page/4/index.html","116715dbc33dad034f98f27440c9a37f"],["/artitalk/index.html","17a46ad24743c52e9fec900d9b4867bb"],["/butterfly-custom-tag/index.html","812a5a51a35be72dc654293e8c9c56a4"],["/butterfly-plugins-faq/index.html","a5f1f8de7f1b6dc82bf8199eaaa33734"],["/categories/Announcement公告/index.html","19ee84e46d1d33c098d4ff17d7dc5dbc"],["/categories/Hexo/index.html","e590dc49522242c82b4e7e44bb5ed4ec"],["/categories/game-dev遊戲開發/index.html","cd1408843052e08ecb27393fd4db1688"],["/categories/game-dev遊戲開發/page/2/index.html","d4e3453c10f7412519f2146c92c95023"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","f4b0f941b5b2ce35313a268fc789c4f3"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","c358fca9f47e13bc90966bd25d344c42"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","d79ee2607a7e62bc2fac27d0069087c9"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","e595eee9f0f88a08277212ead62ccb53"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","acce3c29e21bf01c42006f4fd9b53098"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","e998b54ee4538f11813afba91691989e"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","7295bad9dbc86154e6d2825990466707"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","ce6fd74ed35627e1e31c9dc8607df600"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","a1c388ac24d6e47e5bee7a16ee0a7439"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","9d5c0920bd72ca0e21442fe969c42f5e"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","e6a380e2f34adc603373a6a75d877b4c"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","ab648851b0b93f201664d57c6105b80c"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","8d26802cb272c7efbb44873d36e261b5"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","99f3f72b4579def4974743a0db2283c8"],["/categories/index.html","322ff971e067e1f11787984925b27882"],["/categories/更新update/index.html","54d282f6d3a358a790e3b1c824381237"],["/categories/資源/index.html","d4e77dfba2d076e32d48002f8b054f6a"],["/change-title-based-on-event/index.html","d4f1fad3f10130937850e8c68c1476ff"],["/character-stats/index.html","4af08de2ad45c14949b3dc82c065a74f"],["/chatbot/index.html","70b55aa7584b73534e878230b8edb1aa"],["/comments/index.html","e216489f26bd330b5d32816ccfc51679"],["/create-button-anywhere/index.html","6a206edb0cd3da966fe829690d30c822"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","389a524fe901d6cd5978750763f87e1e"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","ed773591e49315de31481ab53a0f39a8"],["/css/rightmenu.css","4ddc162429f4e1ae541b9ea03fd73dac"],["/css/siz.css","8da88f6baf319c86fa3b2af99981b2af"],["/css/swiper.css","f58beb835987e7451146a21fca936a9f"],["/css/swiperstyle.css","d28ac1a89e196cd311f92a369690b48a"],["/css/var.css","0eee1f7cff02eba78f8535da151dbca8"],["/ctc/index.html","3f217b671a4ccd10e8bfb2eb44ef066c"],["/custom-gallery-cg-screen/index.html","df0fc061ac530d6068faf51c2ffa197b"],["/custom-mouse/index.html","249bc88c70212560de3634f6e09629db"],["/custom-player/index.html","629dfe17d760cdc984a95c95b1c64d25"],["/custom-preferences-screen/index.html","321beb268d0f6b686a28864a49a17a39"],["/custom-say-screen/index.html","a1e13163a105f82b72b3c73b49e58e05"],["/custom-title-screen/index.html","4fe3b815e991b8ce5a2f59a3401b6171"],["/dice-function/index.html","fa3ca6996f59af1ca276653cde601b0d"],["/friends/index.html","c6d2dd2eb9bc1a6719d65db70cbe83b0"],["/gallery/index.html","fc310bd77335f889d74ba8106e21440c"],["/gallery/photo/bg/index.html","2cb463c1ddbc2e8d9dfe2ca668e701ed"],["/gallery/photo/gui/index.html","4f2af88c62f56fe58db23f5f563f807f"],["/gui-017/index.html","a5de51bb92f27cb1932dee9b49c437e8"],["/gui018/index.html","6150dcd4b9b69b040b20adf4b9081d51"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","51006368e2e42d8c00a12790e79b2289"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","8663989700f9990eead7e801d75be5d1"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","a254d1e4a14b98425d89a0424611d33a"],["/inventory-system/index.html","c2c0292f6088ae9e298e4b5dcba449a5"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","ffd0799d731f2fcaf5b440de585c4d57"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","989af277c9eaf4c3e19383f0e5226fd9"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","25124c419b9487bb129bc31880a6cc0a"],["/link/index.html","87de1cc6a9e5f357543faa2e24e7e7f1"],["/map-puzzle-system/index.html","ed2e493814df5ea473a0b0ce0ca46a3e"],["/maple-effect/index.html","32ba64fcc2cf22324bb87f70f7d2c221"],["/memberships/index.html","093cc7028d67f37a7df7c405230cf3bb"],["/messageboard/index.html","8a632919824284c917b057b8ab491d82"],["/new-year-event-2023/index.html","9bc96c48a43708e2f2230cfea7002584"],["/newsletter/index.html","087c7d8418daccf2078c84c5a10e9578"],["/notice/index.html","c930388b756eb71b673751aa5528e615"],["/null/index.html","8eda837aa66e8f9cd9d792e818bcdc36"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","4c9ca86eea451525dbb5ca3baf815012"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","39e542063cab8922c8e5953e0d812590"],["/othersite/index.html","8aec9299df3e60613748d77ed503f707"],["/page/2/index.html","5e72136916c2a8758d042ac2ae8210c7"],["/page/3/index.html","20b89867727b6f93c0b0f63e6be0a871"],["/page/4/index.html","b11187b6344839d688b407b48dbe6056"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","feb047048406f278122b9c1b495562d0"],["/random.html","818f0e4c45c6e209b98c68c9c95b5b71"],["/release-017/index.html","3353bc2756314bf153bd15cd6a70ecf8"],["/renpy-MatrixColor/index.html","9d676e1406107eec4b7893cf5737380f"],["/renpy-basic/index.html","9123ebd484ed875c3c1c9d2fd3c32698"],["/renpy-overlay/index.html","29b0200b2ec939b35642abe6d5c96d96"],["/renpy-review/index.html","7aff2ccc375ba373ee37cc62ead3f1ab"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","76e43179b2a7f052b808237bae7bc61b"],["/rpgmaker-assets-menu/index.html","ee1284565a3428799cee4839ed7bbb2c"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","5aa7c9e515fe5f43d2854c3415b7020a"],["/service-worker.js","e19509d02a48d91288b17876f47c6e2b"],["/side-image/index.html","12640e42cbb3b148e77397a954f9176e"],["/snow-effect/index.html","5bbb55c8bb790adb6e057e47b4ab1656"],["/speaking-animation/index.html","336297fdea101efe377d8f3b2ca24778"],["/sw-register.js","c49303474f328e44a5c175d9c5783161"],["/tags/2022-年-12-月/index.html","29cce1df7b932d6e6fb013d5bb7caaf4"],["/tags/AI/index.html","92e7c4077761dcbc91cdb08a5f245463"],["/tags/Butterfly-主題美化教學日記/index.html","540fb20b6d7ea845094faf49466add7c"],["/tags/Hexo-插件/index.html","79ab3eab5fec46fed1039cbd77eee83d"],["/tags/Itch-io/index.html","0a15df50c43f763352e48bbe5a87d693"],["/tags/Light-VN-更新update/index.html","0cfe76b24659564e79f57b996077c2a5"],["/tags/Light-VN/index.html","5ad3570e8015afd2881a7824a2b815d8"],["/tags/NVL-Maker/index.html","9e0a0674d0d4498dec559c1af762c84e"],["/tags/Premium教學/index.html","693ae0278dda3e75f61a9e675477ed24"],["/tags/Premium教學/page/2/index.html","811ca249e0174982b43cfcf5665e31c3"],["/tags/RPG-Maker-地圖製作/index.html","75ef2440f6f3fbb5c18171205b1e317a"],["/tags/Renpy/index.html","7eac81a9b43ead203dd129ca6eceef54"],["/tags/TyranoBuilder/index.html","72040e9c228b1b85421f6cb367e864d0"],["/tags/UI素材/index.html","261872528fe7b9e3e43b2cbc168e4cdf"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","abeb5ee353e3106028721bbff3d1524d"],["/tags/index.html","b093d059471f435a9c5fef681d4bea8d"],["/tags/renpy-basic-Code/index.html","1d359f4015c21e38bfc7a9dd2fcf7b0e"],["/tags/委託/index.html","06447e1d3dae3d88f845b64d3d3a3614"],["/tags/封面製作/index.html","bff614926bd913be5fbf740e39295770"],["/tags/對話/index.html","c4c3560bf2fb496065035d87689eea7d"],["/tags/活動/index.html","bf8939e45f4c58336f8e3b99f9d9774c"],["/tags/特效/index.html","66b45e36f2d0c988e5150ed508ff5c53"],["/tags/特殊功能/index.html","19edc6fa1a040c4ea14437866a40cfa2"],["/tags/畫面/index.html","880037dbab996f308f98eff15fb74a46"],["/tags/網站發布/index.html","39205553a72f680b0a480fc19c553a48"],["/tags/自架網站/index.html","ca89c7047a07d26ca15e9cd4ae2b9a03"],["/tags/自訂-Hexo-主題-Butterfly/index.html","7152885bc113161532a636eae3236788"],["/tags/角色相關/index.html","616fadbba50c92ffb560c62458e7d45c"],["/tags/變量/index.html","fe6ace013e4d9950f508a882772c4c4c"],["/tags/遊戲上架/index.html","12a2ed9c32f9bff7d2268fdeedf0a9f8"],["/test123/index.html","e647584615e584a1b3aae94f27503022"],["/textbutton/index.html","95958b49d8882940d5e3e345ac92f2f3"],["/to-do-tutorial/index.html","64b8b4f937b0b6eaa5057e3c4920166d"],["/tools/index.html","caee22cb9a9519ad5c736df90f1ce207"],["/tutorial-update-history/index.html","04593e715a56554d123cc2f48696d7cc"],["/tyrano-name/index.html","fc132022caad39c2f43c7c1756548d39"],["/undefined/index.html","436e2b09bd944053422c7922820959b1"],["/update-20221211/index.html","9a6aa286167cbfbf11d0a3fd5aa29d63"],["/update-20221218/index.html","f2cf6f8ccf893891d68b9ab54637cd41"],["/update/index.html","4dfcbd115c5d7efde8dfaad75da5d7ca"],["/upload-your-game-itch-io/index.html","a57525709f884f49af999ea2a1676837"],["/use-list/index.html","5bb753c6afb04bb3e367ef5503d4c5bf"],["/use-nvl-Mode/index.html","bb4d2e56dc8cd1c48a480da0e03db2a3"],["/useimage/index.html","d0d187d5825370d6201716b0d3a181d8"],["/variable/index.html","75d9c12f129fefb633a7f57964a91618"],["/vnmaker/index.html","8df201e5c7be7ca775ba1044fe61448a"],["/weather-effect-tutorial/index.html","bf7ef7cc4dab77bfcc0abc10072413b3"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
