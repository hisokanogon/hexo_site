/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","d1976ef74f244a9dbffd1db251908396"],["/2player-battle-system/index.html","def551e84c0bf48779221244ec7d2615"],["/404.html","1e9783fe4d73e73580bd3ee5969dc279"],["/about/index.html","0ef64acd4a13f2789c0e5df5791166dc"],["/acg-creator/index.html","d6cecf6fb050c547cbaccd9a56505721"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","0db35cf7d1193d4647c448a96d62b0a5"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","36b66bef65b416d2ee12deed78fc7f29"],["/animated-title-main-menu/index.html","cba308b97be82f9d8cc87b1b6a374e81"],["/archives/2022/05/index.html","821adc9289a15046fb60f649fc86a982"],["/archives/2022/06/index.html","45f4c0c904b050ad929d10d53549285a"],["/archives/2022/08/index.html","a2511261f68732515536e88ac93d9d95"],["/archives/2022/09/index.html","08e82057b47dbd6ea8193090c34942b2"],["/archives/2022/10/index.html","17653a9821b684b235abedc7308a619f"],["/archives/2022/11/index.html","17393078fa97cc3379ad0f5397db516a"],["/archives/2022/12/index.html","5f70d39373f964b3e92d894947ec10af"],["/archives/2022/12/page/2/index.html","edfdb6f65b4a02d22c61d346081bcabe"],["/archives/2022/index.html","4075191df8483f8c4e406949bff2a233"],["/archives/2022/page/2/index.html","ee60f4afd6bf3851f4cd6cc68ee24167"],["/archives/2022/page/3/index.html","e93c91b45bd2868b20861f28a4fdf985"],["/archives/2023/01/index.html","e6d4f573a2fdcd7639b9a8d529f91a22"],["/archives/2023/02/index.html","512486f96189e1bba412d19d3a2d390d"],["/archives/2023/03/index.html","708fe7ff92dc3cdb916667adf59e9ce6"],["/archives/2023/04/index.html","0659469e8199759c3569d93c3790a9b8"],["/archives/2023/05/index.html","966d92ea645255a99123e180fd58860a"],["/archives/2023/06/index.html","dbb96a8ddb0c1a8d52c5680de6713829"],["/archives/2023/07/index.html","14cb52f1a990b22e972ba8b6a4b12e29"],["/archives/2023/08/index.html","4ba353550c4a7a77e5abf79874d4a01c"],["/archives/2023/09/index.html","2da3a8797f7939f8c35b355fee930449"],["/archives/2023/10/index.html","cd67855a6b0142a6b95fe92c20779863"],["/archives/2023/11/index.html","3587b53f22b0f28ea7228611c382a4f5"],["/archives/2023/12/index.html","9312de07633585d8b75b945ead688ea0"],["/archives/2023/index.html","5375feef49b707e54fc60e04bffd2d10"],["/archives/2023/page/2/index.html","b9dbf6c1457beecb3b30b8587a89fdda"],["/archives/2023/page/3/index.html","873402a78bf64146157124fc982c6eab"],["/archives/index.html","7832d80056d994a2ccf49c708b081b93"],["/archives/page/2/index.html","4b083d2cab15ab0445d0b05c12c9ab53"],["/archives/page/3/index.html","da97d71c37f14d4820f461f6a8ee14ca"],["/archives/page/4/index.html","76f0948d295f3deec0b36b2d5b235ca0"],["/archives/page/5/index.html","adf6d7d708e8709705e3d09273965d2b"],["/archives/page/6/index.html","1b21c6ebe49602acbb47ead670bb730c"],["/artitalk/index.html","01b52f26e30716cff5aba8d7d4619528"],["/battle-beautiful/index.html","2c4c3468e8adf63b98a16673dfb74549"],["/blur-effect/index.html","6671260d4570baf72f88ae7c56ed8bb1"],["/butterfly-custom-tag/index.html","df88d29532bb13a2f518322b44aba62d"],["/butterfly-plugins-faq/index.html","fa82298a416a0c4aff1efc4fc435e607"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","ba88cf9b24356e27251b71d5919ce5bc"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","6b794e4420890ed8155b3c9428821ce5"],["/categories/announcement/index.html","9a2e52ef16987884574c87c84fe93d5d"],["/categories/diary/index.html","d5e7cd14287d7ec7ca255537939b310d"],["/categories/game-dev/game-engine/acg-creator/index.html","954b051f8d010d7f1d64d051f5a33e07"],["/categories/game-dev/game-engine/index.html","a8f18e50a8a20aec85e880478046ac22"],["/categories/game-dev/game-engine/lightvn/index.html","e9980dff740cc80920bf1fd674e4930f"],["/categories/game-dev/game-engine/nvl-maker/index.html","9f2a18c1be7ae755c87cb3e976b5f327"],["/categories/game-dev/game-engine/page/2/index.html","9a8e26cdbc9101c8efa060cced4889f5"],["/categories/game-dev/game-engine/page/3/index.html","eed7e4ab6b443c6e15fb73fdbcac86dd"],["/categories/game-dev/game-engine/page/4/index.html","949419f89e88353e67bedb786a9d9074"],["/categories/game-dev/game-engine/renpy/index.html","a1f00e464fad188f141df25035e1b978"],["/categories/game-dev/game-engine/renpy/page/2/index.html","3cfcb9f9e1e80d3460fcfc666ca07ef3"],["/categories/game-dev/game-engine/renpy/page/3/index.html","a0730f65267bfc7ce169c0e287695e14"],["/categories/game-dev/game-engine/renpy/page/4/index.html","72223ca46d67ebf1283978bb8b00c6d0"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","d0f45b9b2ef234b609c46a72db809d03"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","71dcce9431d4e5a62d029865650bad9e"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","079f9e95a62dc79e1af242b52b90711b"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","43c68a2727a2dfe004150bdffb565c9e"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","8690d7e5307d0fc25024f22a60b2aff2"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","f0ce6172a868ece897aebb891d1abfc2"],["/categories/game-dev/game-engine/rpgmaker/index.html","4edaa4c69525ee8dcd1a487c85f12f66"],["/categories/game-dev/game-engine/suika2/index.html","1e7fcf82acff434fe5f8ee899cdb2a1c"],["/categories/game-dev/game-engine/tyranobuilder/index.html","32a84db1cae431ac86b6cc9d2953f576"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","736cee1bb6eb47e2aea20f25d567b6b9"],["/categories/game-dev/game-engine/webgal/index.html","f0bac7335dda38f16ff23c8b46477795"],["/categories/game-dev/index.html","bb4fc76c6ec0a53a396a76a40170cb5f"],["/categories/game-dev/page/2/index.html","bf1d5e88c7c6c0aafab8779123e47b95"],["/categories/game-dev/page/3/index.html","967b5262b0a8c97d45c41955decb2e37"],["/categories/game-dev/page/4/index.html","3c1c15603a7b9da6fd0de084584b283a"],["/categories/hexo/index.html","2552d59f9aa243152e3d1836e0428680"],["/categories/index.html","b3041eb22b5ee9b4e3203b554107d5af"],["/categories/material/index.html","2aba32d3cecca541bf5818d39920ebe9"],["/categories/update/index.html","696c9e6b57d9066ff2497be302634600"],["/change-according-to-real-time/index.html","24212de4f39baba827387fc88aa87ca2"],["/change-character-info/index.html","9e3ed3700023124f2f7192b0f43e8f0b"],["/change-title-after-first-time-viewing/index.html","4278d2fb4e55ccbaeb6bcf09c8f2d616"],["/change-title-based-on-event/index.html","96fe6cf997b224164f79b1b804345554"],["/character-interaction/index.html","3600ed1bb5903dc8bbd297b8494814f0"],["/character-stats/index.html","b47c7bf4b7f41d5c6b898b5052611f77"],["/chatbot/index.html","800364b251a40618bd018cdfbf04ccea"],["/choice-time/index.html","3a21e70f3449fddae85ea66f670d0c7f"],["/comments/index.html","7f6093dd674675876923a339a5933203"],["/commission-info/index.html","4a9268ffacf998fe4c3f9a825c871c41"],["/create-button-anywhere/index.html","aa8965e1daeacecfc5285ba4ae6d126e"],["/css/eurkon.css","a0ece66b1d0e55d3f19fa376131f089e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c59d14fc202d9470ddfbb497a5b66e74"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","355fd352ad97d325e17fb971d23f0019"],["/css/rightmenu.css","4e3e302c9a5cffa250c4f474ca42614d"],["/css/siz.css","46800560af829d125755584dd89a146f"],["/css/swiper.css","82b8a3df22e0fe9c0776fed9cbf16f94"],["/css/swiperstyle.css","a72946dbc5f855b5eadc40d7bebfdfd3"],["/css/var.css","d9c931dec12acbbd637af80669000c85"],["/ctc/index.html","d2ad31e335f1d2a3cd119301de0d39c0"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","7a5c3972a62f7e084070bb8ed833d7e1"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","8c3d13a9dd41fd989b3deb27715bfe64"],["/custom-launcher/index.html","ed225c6af1337bc96558a8161c01ae93"],["/custom-loading-screen/index.html","040e467eee503db6f3eeb487a842e76e"],["/custom-mouse/index.html","fcb01c29d0f64af42aa6ff87a14b7342"],["/custom-music-room-screen/index.html","0a6df0e839f16b2f74349d7b69c287d2"],["/custom-music-room-screen2/index.html","db84f4308f954d35fe5d0394f7043ee9"],["/custom-nvl/index.html","28c68468d321d7a384a430cc3316de66"],["/custom-player/index.html","c19647efd83510419e2b5e8cfb8b418d"],["/custom-preferences-screen/index.html","8d41552f8981376e93c2ec3d4b3af5cb"],["/custom-say-screen/index.html","10c0bb0e42acf821ac745704acefbd44"],["/custom-title-screen/index.html","5e8055ba1da77a6a48d9e81dd38350b2"],["/define-npcs/index.html","24f73fc065fe53800da184780536b3ab"],["/dice-function/index.html","480930054be262d43a44495732e4c997"],["/disclaimer/index.html","8fda879a871988783cb17a887e30f7a3"],["/display-immediately-all-dialogues/index.html","bcfd4b5c271205863216adac18060812"],["/display-real-time/index.html","848360dd91a9e7b8699a2057c4e52c5a"],["/enter-name-screen/index.html","7e162cfc90d86884a6dca2045c027ece"],["/export-game/index.html","c92ab83790015282224f0f8f37c98068"],["/faq/index.html","0e7e1f44e83a73756e848f7a465be5f7"],["/friends/index.html","6925cf1cbc986f3bd4b02f44f737a7f1"],["/gallery-template-assets/index.html","ad892b959bd36a9d9b1b8b60f0876c01"],["/gallery-template-default-ver/index.html","4601cbb3abfeb69dedebc8254ad671a2"],["/gallery/index.html","a8e8ef85be9e57eb19ffbb91a4137f98"],["/gallery/photo/bg/index.html","45f675b2c3a29b43564d0198a003d7ea"],["/gallery/photo/gui/index.html","09f08c7292e056cb473a4f9cae55d711"],["/game-only-text/index.html","f5634c7fdf59a286fdd7685f7912141b"],["/gui-017/index.html","cf2ee745506dda7878831b7a61764d61"],["/gui-vertical-002/index.html","a538aea7d779193de4b2551f10866739"],["/gui012/index.html","e8ad498817a1f1f39ed9aa969f9d6166"],["/gui018/index.html","ac40414a07a5436a2f4c53ced791536c"],["/gui019/index.html","fdc471b81a0a58a309dbfdf47a20aa20"],["/gui020/index.html","dd5452a378b6343da56ee61faf3bbafb"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","127a45e7f11aaccc1a1bb194838dd0ab"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","f9549682eca44a41a98b8201907ee73a"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","9997ae2ff51ea892e602a99d4a1af5e2"],["/images-tip-function/index.html","34c7832f2754d062672eff4a7631558e"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","25c4877bbe20e7079857d78324fbdfe8"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","ff5bc6d4dd977e9ba53274db9626abaf"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","9a825803dc9a823e2f827708555fbadd"],["/items-sprites-effect/index.html","dc48e5aba531ebf63e3fd90c3b9450cc"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","610d825af5d53e7bc52939328c02111d"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","0d99e130bd3a9f9508f28637c021238a"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","bc266b4efa970f409d35ceb52ac0826b"],["/link/index.html","29902c160bcceb0dc8595b481f9b61fd"],["/make-butterfly-beautiful4/index.html","c5ad71ac4d983b5a3fbf38537e25decd"],["/map-puzzle-system/index.html","3d7d5c20bb4068acb49b36040512e5b8"],["/maple-effect/index.html","cce19dbb23f49ab6a889c99a31660f41"],["/memberships-2/index.html","fffeb78452c5c72159baf5cf79cc1bc8"],["/memberships/index.html","62d01c209b67afdf5396b288b75a9ea2"],["/multiple-language/index.html","dfe9fee10518999f8358078c149b4483"],["/name-input-assets/index.html","ef7f9bedf78eb39a9a37f34fbc288b6d"],["/new-year-event-2023/index.html","4af9004949a0bca9db4da8941decb597"],["/newsletter/index.html","e509ae663d774865ccffd91ada53e023"],["/nsfw-limited/index.html","dc2ef6dfb5f767aa0dac4107151eaa75"],["/null/index.html","a8454c1f436dd6324f4fbe17dcd5ea60"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","a2765e23e60b5552593ab2de17ca5605"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","43705bc3a13c09e1a6f23fd35e924992"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","654cae43d0a64e7f46890c4fcf51fbf7"],["/original/index.html","897a5335da19cf0b00cf61084c3a55f1"],["/page/2/index.html","e136c88f266ed356ccfddc52082ff02b"],["/page/3/index.html","44929ca8daea5cc18801c1fc059ef124"],["/page/4/index.html","c407dfa9f0650c9b7e3abcf775e0c7c7"],["/page/5/index.html","e3d613b91267f35bfe27600d8080b3a5"],["/page/6/index.html","1a44c0a35d971973c26150396521b2c4"],["/point-pop-up-assets/index.html","a23e91fae155635679d42f180ecb90fd"],["/pop-point/index.html","a3be0cf6ca05234dabe2c2845515040a"],["/privacy-policy/index.html","9d2754497232fb11302d30af28ac160c"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","22b1c20d4f81b254aed8b30a84ad8f39"],["/random-number/index.html","1e3232206d490df9929601a52c103738"],["/random.html","c622e40beec4b86b5864747ea7d7b7bc"],["/release-017/index.html","9cd200011494587612f13c3acf2ade4b"],["/renpy-basic/index.html","5b1d0bec8bc82b09d564beb3184a98cf"],["/renpy-crash-glitch-effect/index.html","3edd254c1ed1dad762470ed7689cf432"],["/renpy-matrixcolor/index.html","ffc95f363167bc1384ad8a00f93aaaa3"],["/renpy-overlay/index.html","7a73fbbbed994b7ef8122e44cc2687bb"],["/renpy-review/index.html","889c97c7633a30d6303ad395c10bbade"],["/renpy-typing-effect/index.html","05b743cdd19878907416f268573c3b21"],["/rpgmaker-assets-menu/index.html","40342391ce40b258f9cc2ecd0341b759"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","16a7db14e30f7d804f5e1de895b1e224"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","966653f835199d4b4a854fcff155a8b1"],["/sakura-tree-background/index.html","9824593a6a7909ae60f37f1e0855b731"],["/selected-button-style/index.html","561ecd9b91d62cb6618103520c1d400a"],["/service-worker.js","249deea5bc8f2a10f4d507b20a7aead4"],["/show-variable/index.html","d020ff17554598c473160e2e93b2a889"],["/side-image/index.html","010a4c7f496f038bdcd185755292f164"],["/snow-effect/index.html","443934ba95b162c680f15bd6c0f578df"],["/speaking-animation/index.html","e0b0e76b03f4886032810b7e39d227ff"],["/splashscreen/index.html","ab25530605b76a199780b34e5134fc6b"],["/suika2/index.html","da3e7aa76d3c417c5867423100bb5073"],["/sw-register.js","b1e30ece4151c785694b305711e34235"],["/tags/Hexo-plugins/index.html","1c422d3d9715df808de9a8050d467f53"],["/tags/Light-VN/index.html","8663ca2b6eb8be0de7c827bfc3030795"],["/tags/acg-creator/index.html","6dd059d3eba1655a44484a5ac04c3198"],["/tags/ai/index.html","095fde78b775953af6be02b3a32fff22"],["/tags/butterfly-beauty-diary/index.html","75b8cde8fddfd3fd90e1512df5982a2e"],["/tags/custom-hexo-theme-butterfly/index.html","1d8535631b9f46e112a2949f861f59c7"],["/tags/custom-renpy-title/index.html","0b4a2e367b6b4fd8ea8b8b07f8a9d65b"],["/tags/dialogue/index.html","8614098d16295f9c14f1fdfa2256a753"],["/tags/effect/index.html","aea9c1cd25da9b38cb933d9616cde3b5"],["/tags/event/index.html","8302e22fbd861c1c94e6913be4bc5828"],["/tags/hosting-own-website/index.html","f945c6a4e827184759e72bdcd668f056"],["/tags/index.html","45bf84b0a2772d5299927ec7227ef0b5"],["/tags/itch-io/index.html","832d0234b31120abdfde7564013459a0"],["/tags/light-vn-update/index.html","748e7e35214f435f4ea738688aa15131"],["/tags/nvl-maker/index.html","d92fb9b0d60ee4a47315f4c82f245f7b"],["/tags/player-related/index.html","da99e0edc8821a42b2e98247bc962be5"],["/tags/pro-tutorial/index.html","1e6e72614d961eca23bda74d4ca927ba"],["/tags/pro-tutorial/page/2/index.html","9683619eb3a1ac87dde82e7983a7e06a"],["/tags/pro-tutorial/page/3/index.html","3e62cfd1e677ae039ea825a2909817b2"],["/tags/renpy/index.html","d2d0ce7f71b9665b1fa8cc9411d1a1a0"],["/tags/rpg-maker-custom-map/index.html","fe8cda63e47a3b2b2c6599f45458436a"],["/tags/screen/index.html","a5dbf9d609ed25a7e5ff49718a6be391"],["/tags/special-function/index.html","e44ba0cc4d87efdf81ea4e170d4a6732"],["/tags/suika2/index.html","d6d12d38f21ca94a1aa3cee319b72b6c"],["/tags/tyranobuilder/index.html","a436a1c259318229ad634c5c9d215f22"],["/tags/ui-assets/index.html","237baf9a13b0ad36c05e653a37be7025"],["/tags/update/index.html","b0b699a9e6704884d05eb14a514aeb6b"],["/tags/upload-game/index.html","61b8085ca5bb473db0ccf42a9fb182c6"],["/tags/variable/index.html","f263e427c3974f8ef40591d58758bdb2"],["/tags/visual-novel-maker/index.html","a57cff604e8c5f14fcbede4535f1f991"],["/tags/webgal/index.html","2bcbb289e0991d51a8b952bc9943f7ab"],["/tags/封面製作/index.html","987009792cbb71758dafc77b28c61714"],["/tags/背景素材/index.html","ba867399365ddfc65eab02b203ae2064"],["/tags/隨機功能/index.html","0c307f1922488de9b7a3a0bb1b0da441"],["/test123/index.html","4d2c78ab72be519b541e76197792b1f1"],["/textbutton/index.html","78c94aa54076c782a4a3b33802cc54b2"],["/to-do-tutorial/index.html","cca56b9ac285566c31e22e4df5db600a"],["/tools/index.html","916d557a783f886def6279a3c2cbed2d"],["/tooltip-function/index.html","7e7a097f9958d14911e2ad714ebc2d27"],["/transfer-to-hexo/index.html","e3669b24d92849e869a592171180620c"],["/tutorial-update-history/index.html","a61a4290b4b0d63d67e93b7a754ec19f"],["/tyrano-name/index.html","cd3524032e89efaa4b6910fa6555460c"],["/tyranobuilder/index.html","0092b4697131c8d355db30cb52a6d300"],["/undefined/index.html","4d633937b327440a220afcafc0c2c0b0"],["/update-20221211/index.html","2c06767d435e7f37cede530369d67573"],["/update-20221218/index.html","75c86db48ae4700c726a3c5ab495a91b"],["/upload-your-game-itch-io/index.html","32eb4e8e6c125ea7d584656762e233af"],["/use-list/index.html","dab5ec329b1ac07dc65b36da05e71a20"],["/use-nvl-mode/index.html","66e6fbf778e6e0ec28ecbfee6729c525"],["/useimage/index.html","fc6007b4cb77233fcffebaaae775015d"],["/variable-change-image/index.html","64c82b6a84210356ad0e0af8169dcd5e"],["/variable/index.html","7c6cf993c04f48c41b89ab409eb1c60f"],["/vibration-function/index.html","4c328bf8d741dd7c5422440fcfd315fe"],["/vnmaker/index.html","746dcc67cf05c1c6328c30b45a136482"],["/weather-effect-tutorial/index.html","0959da79c5d411b57c897e6eb3114ba3"],["/webgal/index.html","4c8bcff13292d9af903ebce3250b7515"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
