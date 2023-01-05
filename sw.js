/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","12bd61d706ca5fe815463bcd2225057c"],["/2player-battle-system/index.html","090f50e85959ffc716c13ee64c33673a"],["/404.html","c7cfc4cd465e3e0a735a033063506100"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","6213a004da74545333a19b6d7c45f912"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","fed99e0b01fcd27edc8eaf1f2e1305df"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","360e2d69c7184c631b761007c9f06cae"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","29b2f0740e6cb9753c9a0352a910b35a"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/OpenChatAI-Renpy/index.html","3e916a3a6698f7ece0da7e05637c9eea"],["/Transfer-To-Hexo/index.html","b86d789c8966984d4dc11d8be49bc4d4"],["/TyranoBuilder/index.html","ffd51217955d9f5d4cd033c80120f021"],["/about/index.html","3a75371b58e87b60e4b963f23d729819"],["/all-discount/index.html","1f2a44eb01ed4e944305bfc4e19cc435"],["/animated-title-main-menu/index.html","ca8c433957efaddbee9c1cbbe5893656"],["/archives/2022/05/index.html","527c55442c48616a2cc2fbddeda2df91"],["/archives/2022/06/index.html","4ce2902f75ad3c25ad1f0e8f4461d529"],["/archives/2022/08/index.html","a37f6bb71a7342e70966a7bd545f7d27"],["/archives/2022/09/index.html","c9cd2a64cb2cc968afd259b6143f34b5"],["/archives/2022/10/index.html","30124da8dcfa2272b67db7edd4caa79c"],["/archives/2022/11/index.html","88d666be45569695113f5305493e3e3c"],["/archives/2022/12/index.html","ded220b681915d778c7c3aa630bbd478"],["/archives/2022/12/page/2/index.html","139a30acbc4dbdce4e3944483ab2eb44"],["/archives/2022/index.html","d3d500aa6da5646ecfd83622eeaa5f62"],["/archives/2022/page/2/index.html","1c6b8e0cb2cffb555e37f38116d68189"],["/archives/2022/page/3/index.html","c7384e938a43337b7f467f729a119397"],["/archives/index.html","7611a846b0d9ccdcfa088811f1021e9b"],["/archives/page/2/index.html","01dd6559c9b8ac44d3a5fe6d585434fc"],["/archives/page/3/index.html","77115bf7f9a86c3c81af483705e6e4d6"],["/artitalk/index.html","2b8c28bb30d7a44f7ccadbf035068355"],["/butterfly-plugins-faq/index.html","f1eb6d6ea4a38c8329dc4f06055fa474"],["/categories/Announcement公告/index.html","c6fd5f29110cbaab6bb4f5cc8f0db8e9"],["/categories/Hexo/index.html","740d59632be742ee9c83e6cb3d657c41"],["/categories/game-dev遊戲開發/index.html","6641c0b697d7955e6ceb4b0be0513188"],["/categories/game-dev遊戲開發/page/2/index.html","66c3a4bc6946e4136c4a3d8dcf71b77f"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","2bd071b3af05da99d31d070043fb653e"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","bfd5c5ba57ac864519ca3e64210371f7"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","2ce3c44aeca486751c0543c5d2df43b2"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","bf536599e40a1047af7c723763aa52ed"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","3ced78727d2cd127324cfa5dd3897ca1"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","6510ef44bf03e10646a0d3cdf454c561"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","e6ffc80167d742a23b068b0ee823795b"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","b9e197c6dea61a4b028052060b0c91f0"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","73c6b6c76a4e554585ee720ba70ae7de"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","1cffeee59d38b072595171a7b4d29e2b"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","86d1fa81b480182517db59e8be2744d9"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","8b7f181cf30b3cfd129694a557903339"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","70adae97474269cc4235cdf6f66053aa"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","6a4f97ecb05c1d2794d201e8b759e499"],["/categories/index.html","aef4181de017ad4e8228a2fa64152736"],["/categories/更新update/index.html","4fe6bfb7d101f4ea11c07630042a97e9"],["/categories/資源/index.html","52972a282686a9a9451b82d7bad830f8"],["/change-title-based-on-event/index.html","6d48e92ee85db508416a0b8558ad37da"],["/character-stats/index.html","13d9e9b21adc2696b6103fbc45deabe3"],["/chatbot/index.html","a414b7db8c3c9a0e99bac159d6139545"],["/comments/index.html","d8fc863a339a635441502cd37c194770"],["/create-button-anywhere/index.html","afa4b62fe529a813ddf6f503eadc23a0"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","afdfa340e68a95e9f160354b7db42f5f"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","635e65a535e0b6cc8bc6e983ccc6fba1"],["/css/rightmenu.css","fbb465588b333e0180b42a52ebd02a23"],["/css/siz.css","8ff5100d89889870cdbd351a953af956"],["/css/swiper.css","13f098e4bce281c53d6983749ae5e405"],["/css/swiperstyle.css","d6272ea45fdde6001245f379246726d2"],["/css/var.css","7a0e11bc1d8227f2afd12c44666804bd"],["/ctc/index.html","5e2bb2f76220bad7cfe18c5807d5c992"],["/custom-gallery-cg-screen/index.html","2aa2a3ee1dc1eb64a3b4c59739bbd3d9"],["/custom-mouse/index.html","6b1c84e4ca9edcb70ccaee38b46a2584"],["/custom-player/index.html","e87e8ccb3dacce9b8fda197c51c7424f"],["/custom-preferences-screen/index.html","dfe00b45f29d460486a01a3e3f37fb21"],["/custom-say-screen/index.html","5f2c224ac33523581817291748c08af7"],["/custom-title-screen/index.html","7604c1f139e088ed2f5b3a713ee62d24"],["/dice-function/index.html","b06b2a2e8f22cd9e21f1d68c16dc9dc2"],["/friends/index.html","a3797fef791cf3a5a3147cb400905980"],["/gallery/index.html","2fd93dd7c415f6ff9fa3859b487beeda"],["/gallery/photo/bg/index.html","b3857170a80dba952f87b4be7873a65f"],["/gallery/photo/gui/index.html","6fb631afeed5046e59c7c092e0ac32e5"],["/gui-017/index.html","20c3f70a556c3dc1320c8751bc80a7ca"],["/gui018/index.html","0bb3e442cd05eaf3d5e28353fc2a1927"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","ab8abcebb551871f5375599b0447527d"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","816618b3313e3d3f3b5299a9087945ec"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","f52c555f6aa8980a2900a6b32e800ce3"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","42b501bfa398e716c3320707ed9e115c"],["/img/n2.png","2c6bfc075533bfdd83c69752b6ece4f4"],["/img/n3.png","17e293b6fb4ddc16f2d25d074551edb5"],["/img/n4.png","588b27e78ca8404971fb853023231756"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","f10d838b892d2c8dfab780b691e081e8"],["/inventory-system/index.html","2885407d5c5ffce70de3990d6f02edad"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","c6dba43663f8d3bf111f2b8d06c8ee2c"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","a1a5d1f77ff5e35bd59b89d53818f31f"],["/link/index.html","172efa464f757d6bee6550e1121e9dd6"],["/map-puzzle-system/index.html","13a63913a48c6239ac4be0bff82b9da7"],["/maple-effect/index.html","55a788d9c26cfdc93d70f64a8891c7cd"],["/memberships/index.html","da68d5a0092d2b55cfadceeb38b638d3"],["/messageboard/index.html","403489da6b0f0b492e68c67d5e747913"],["/new-year-event-2023/index.html","229cf1a97a47bd8c82f64d998d0795b0"],["/newsletter/index.html","8e35b22299eb29c9b248cd09a40c2310"],["/null/index.html","f53fb0bd44d1297c549a40f5b47ccf26"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","d9d310e9d05db106b66c338e6dd14537"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","69ad1ad042b0b1ac92412ab48d32e033"],["/othersite/index.html","0555afc3940643ab673885c6bef08423"],["/page/2/index.html","c18c974ff84fe2d8e3ae86f2e4905045"],["/page/3/index.html","49e4024d03c7cc5924b8f1d0801c5f59"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","a9bf648280bc600d50ae69875dcb1bf6"],["/release-017/index.html","79a67889f49f9ba1bc00eaf5b0099f9d"],["/renpy-MatrixColor/index.html","a7b9fa95e1a63a20f94ebdbcce706b24"],["/renpy-basic/index.html","2f883c8121788d203dd1a0729aa80dbb"],["/renpy-overlay/index.html","574ece9ff5d7a926bb07c4a8a92ea887"],["/renpy-review/index.html","38d45ddc99929477a6271d87d4be4001"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","ac4a495ab55f0c29e4362e34c5affcc9"],["/rpgmaker-assets-menu/index.html","14626d4a614a344c8fefb6ceb4bfa547"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","132abcba1a814fa9f5c7594e84357e80"],["/service-worker.js","f0e7d9d234fa83c7a3fedeba0fe987b4"],["/side-image/index.html","f5514ecbfa9a8facaf5ef8fe731579fb"],["/snow-effect/index.html","5766276fdc2d145edc5767855908d0d6"],["/speaking-animation/index.html","8f1dd1fb8127bf3ac614efd487415429"],["/sw-register.js","0b8ceeb4ca97ac5b777b11301bfc4907"],["/tags/2022-年-12-月/index.html","e91817b11f5105bc3010fd257e872aff"],["/tags/AI/index.html","0a5b816edc23eb978d7f7baeb3adba61"],["/tags/Hexo-插件/index.html","12343b48842ca0e2abe9ae4b65ea4930"],["/tags/Itch-io/index.html","8deda393d43b53f26c198115b6cf9b35"],["/tags/Light-VN-更新update/index.html","139511eeff994c710154ebaa79466d24"],["/tags/Light-VN/index.html","b5ba3c17972982215c74f2a9937bd687"],["/tags/NVL-Maker/index.html","66d7f83342a7c9581c19e2c4da86a457"],["/tags/Premium教學/index.html","1f09b5a102f89119a779f93e530e5bfd"],["/tags/Premium教學/page/2/index.html","a399ae557901cef5d3311619dfa4bf6b"],["/tags/RPG-Maker-地圖製作/index.html","5ae8ff841dd01f77aadeda3542f68b32"],["/tags/Renpy/index.html","dce9f7f54cb4f23f3e8d5e89525373e9"],["/tags/TyranoBuilder/index.html","6c8de9c6f20f53c56363d345459b3c0a"],["/tags/UI素材/index.html","c150a3b94da8778a32db2cac22cd174b"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","ac633366dfa24ac4f33681dbbe35da94"],["/tags/index.html","ebf369f42d1e0d151ffd667f1f4e79f2"],["/tags/renpy-basic-Code/index.html","a19dbfcbb3b4337743c20834a1509507"],["/tags/委託/index.html","42e23b61095b4b9ccede8ffdd6879930"],["/tags/封面製作/index.html","4415677db44997691eeebde2998a8bd6"],["/tags/對話/index.html","5221690ae63c5ab0c54bbf29e1cc4d2a"],["/tags/活動/index.html","1ca8d356e5cab8cb8a874e21f4a0cad0"],["/tags/特效/index.html","c3b0beebea1c81f7ca18b4f6da5fadb8"],["/tags/特殊功能/index.html","b038ca48939cdb96b334d8279805d808"],["/tags/畫面/index.html","cd774e4d373f02a77e5f58bd1d45ab1c"],["/tags/網站發布/index.html","c3973ede49d5a11485b07d84baab488f"],["/tags/自架網站/index.html","15275174bb01a0bcd4934b4ae21f86a3"],["/tags/自訂-Hexo-主題-Butterfly/index.html","d6ded771ff7534c04abf34a394049ecd"],["/tags/角色相關/index.html","9386b20eff0613ed5735a472a21bd2e8"],["/tags/變量/index.html","80135b35b16be455b320e468405c9f00"],["/tags/遊戲上架/index.html","fd11547dd2a85ff9d8e6578189bb24c8"],["/test123/index.html","97a44cc679917e3df008d9f8aece7f06"],["/textbutton/index.html","e7bf03b6d8acb279e3a027f3ded2c06b"],["/to-do-tutorial/index.html","4d81b832c727059e83876d8ddb48a4ba"],["/tools/index.html","5e3a23778aac930fc3c9a4386a733b1e"],["/tutorial-update-history/index.html","5b09bb1a4467e91f8b34fbf438695bfc"],["/tyrano-name/index.html","0829894fa4c67d6106cffd42f37605e9"],["/undefined/index.html","0bda3ba1dd8763e734fb04e28f0234ae"],["/update-20221211/index.html","3b11dfc4dfa6a5192dba2f2158334eb1"],["/update-20221218/index.html","cbd29ff2d161ed57fec34a71a9b41adb"],["/update/index.html","eb2e76bf87c73022f3c016c32593ce1f"],["/upload-your-game-itch-io/index.html","e3538a05a2a380c0f146f296272b4da4"],["/use-list/index.html","bf0b83fd76970439b300b7648aa562ba"],["/use-nvl-Mode/index.html","68022c97b1cd1adfb2ecd7848cd74ed1"],["/useimage/index.html","178e02cc623d86e06afcf639a176f3db"],["/variable/index.html","961b57713dc7e933755c8be176522269"],["/vnmaker/index.html","1a49ceaf5136f926b3ccd6cedaabd8dc"],["/weather-effect-tutorial/index.html","005ead4968c7f37a7e0cf9dd98cc334f"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
