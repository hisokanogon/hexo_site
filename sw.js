/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","978a9cac476e0a65e01b65353c80c221"],["/2player-battle-system/index.html","f5c6f3b3e304a5faf696bca884cb4e2f"],["/404.html","3dabc7d246c275b39986495a38fe52db"],["/about/index.html","eee00ad74b887c566934990060b9f648"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","fd2cbdb5df4b97d265dc50a36f3726c0"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","12fe4292e9a40805d784c2ce51a8e880"],["/animated-title-main-menu/index.html","7c3738e2efe88260a7aca18e1499dbc8"],["/archives/2022/05/index.html","dd36deebee21ebe8556c534da061fe04"],["/archives/2022/06/index.html","eff0485b3fc80463ec673b9ee59d4932"],["/archives/2022/08/index.html","dc2e4546ac571f21344fb48a9d249e97"],["/archives/2022/09/index.html","512833e2e6761a167158da222fe4e6dc"],["/archives/2022/10/index.html","90bc4bd42b74d85f6dc65f8b7caa8471"],["/archives/2022/11/index.html","0a35ef993076930497cfd875c724d035"],["/archives/2022/12/index.html","0ad13571abb8ca2f31b4efea41e044bf"],["/archives/2022/12/page/2/index.html","c10acc9b3715e6fd4cbe8b67669b62bd"],["/archives/2022/index.html","1df117cb1871da10bcd4aa451d69cba5"],["/archives/2022/page/2/index.html","35e4fb728ee3856c057f9d5e73966872"],["/archives/2022/page/3/index.html","14b69a44966c2dc9d536f8f7070b7981"],["/archives/2023/01/index.html","9ce73657daebddc86e790554ec57c336"],["/archives/2023/02/index.html","106efbe177c33fd34e7bca8b21b1051f"],["/archives/2023/03/index.html","6c64f7abe3a2bab8db823f262a71194a"],["/archives/2023/04/index.html","ab4075044bc6922f6dd9e1b9b5142e4e"],["/archives/2023/05/index.html","ea748b57c819f57367323b148a30f880"],["/archives/2023/06/index.html","82430bc228b8aa960c42fc25bce21a9c"],["/archives/2023/07/index.html","c8043b865ed06a38af5ddfcae11c4a7b"],["/archives/2023/08/index.html","223d1371a3d65ca5abf614272a441a64"],["/archives/2023/09/index.html","67dcf85a0a0d748e75e917be932115c0"],["/archives/2023/index.html","e37e6be21c6883438b9845ebcd68dd9c"],["/archives/2023/page/2/index.html","8c03d31cc098904f3b37434fca602c8d"],["/archives/2023/page/3/index.html","efde1cbbbd3d9c256d75cdc883a6f98c"],["/archives/index.html","ecc705716e8ccb6fbcb140641d64fa30"],["/archives/page/2/index.html","ace28294f56a14e5585d9607390f2b4c"],["/archives/page/3/index.html","ac7f850572c289c3be5efa28035da064"],["/archives/page/4/index.html","32d3a37f55cda0e392e07517292e3d84"],["/archives/page/5/index.html","73f4b86e23a4f95b00870ba5aa708b3e"],["/archives/page/6/index.html","b217ab4f0c988f87c1d942f3c69cabe3"],["/artitalk/index.html","48bb5bf9a16376b07dc17ea2670f760e"],["/battle-beautiful/index.html","ea60ee6857b4bd92ff0eec14b379a713"],["/blur-effect/index.html","10c62e5a6a1c89e928b35c79f5a88f65"],["/butterfly-custom-tag/index.html","331ef513a81a4b77ee9658445e0ffe49"],["/butterfly-plugins-faq/index.html","797e3c2b8d6c2e9800944f24ff0d960c"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","b0d418b1cf4c2f64e954fb417537cb58"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","3394d94c3c02f31b3eaf7dc0a4871081"],["/categories/announcement/index.html","cf28ea31d0e549ece0c49153b3bd8743"],["/categories/diary/index.html","f98946ea1448a1c51e71a5a7de7952f8"],["/categories/game-dev/game-engine/index.html","5f6189b6095c490ad8c42135bcafa3de"],["/categories/game-dev/game-engine/lightvn/index.html","1cfe4c701c647b45a2d10d07565ad146"],["/categories/game-dev/game-engine/nvl-maker/index.html","25e7d1384301d8ed3dbe58f7758131dd"],["/categories/game-dev/game-engine/page/2/index.html","e266bda266850ed3722d2c6ac285feba"],["/categories/game-dev/game-engine/page/3/index.html","68f2a64f8bc07f5b514af24f2f5d2059"],["/categories/game-dev/game-engine/page/4/index.html","184bc3a24e845da86645c65a548af517"],["/categories/game-dev/game-engine/renpy/index.html","6e2e4340364d49965a7c7d034b4f3fba"],["/categories/game-dev/game-engine/renpy/page/2/index.html","f9de1973b802a9758f223ccb7f65c22a"],["/categories/game-dev/game-engine/renpy/page/3/index.html","05c03c8cf56f661f49b3679cf0c69a7c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","bf18f7a24ee1d32564a2fd84f02bef91"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","f7e201857fa691e7d1759068130c1056"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","29bcac7c0a298c43c5e83b0fa4e7c0aa"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","95c0b14f7517c408546b90328bca9d41"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","90213aaca2bbbe30c99d58cd55de1e7d"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","ffad9abe1dae3fa460d78a3da5b1cd0a"],["/categories/game-dev/game-engine/rpgmaker/index.html","cb0e52fd4200225c7584ca6f62c4ff06"],["/categories/game-dev/game-engine/tyranobuilder/index.html","1e222ce3ebc67eba5bb5cc5bc70805ed"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","f85428fdcaeb165ce3f843637b143be0"],["/categories/game-dev/index.html","3cba3a46c56dd2b772f54367fcdbfc0f"],["/categories/game-dev/page/2/index.html","17ee91014b73bbeef8de860a0a139a8c"],["/categories/game-dev/page/3/index.html","86165c82abb9a20bca210161e6e37c98"],["/categories/game-dev/page/4/index.html","2efd856f033be2e8bc97fe2141525fb9"],["/categories/hexo/index.html","da9e73ed6b5ee77c0059f3362f89073c"],["/categories/index.html","fcdacf915e611abe7d5e19ca98f13f24"],["/categories/material/index.html","682de684d49b51fe44ea23ca6c6667c6"],["/categories/update/index.html","26ac501430a9291f14882ff08ee4c5e9"],["/change-according-to-real-time/index.html","9f122ac28bc630d373ed42cffbc1661a"],["/change-character-info/index.html","aa2467c987f69618aa997496170eeb52"],["/change-title-after-first-time-viewing/index.html","ee1744f8fec86e1efc7f2ad017d63779"],["/change-title-based-on-event/index.html","37fe269730e0bc96a02ace748a019f2e"],["/character-interaction/index.html","52586aa25bab66acec39049314c7eafe"],["/character-stats/index.html","c4ba9c98dc0c869cd152ca0108663da7"],["/chatbot/index.html","29a9a53263a1f5e1c72417d300359c7d"],["/choice-time/index.html","181eecf0f30a6c4744f0067feccee35e"],["/comments/index.html","aae55fdb12365c5f154e25adcbb31619"],["/commission-info/index.html","23b64dd388adcc4d0c338882a0a6599f"],["/create-button-anywhere/index.html","53f5b657c5a20d684a4375c5b016a8e3"],["/css/eurkon.css","28c7d27ce79542c0f6c156e53cf9552e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","183c659e00af0a1e20c6dc4fbe9582f1"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","79d02ab83103c6e37450a6dcee70e62b"],["/css/rightmenu.css","09b7f9174ea060e00def0b42212acc89"],["/css/siz.css","42efc27e7e5a254cd334ff769e4ae7f1"],["/css/swiper.css","a9cabe033cb97d2c7fa2a2d42f385c78"],["/css/swiperstyle.css","443cf99161203c44b0b06db428592f0b"],["/css/var.css","19c0b58a1a3778609af1d73c557e25c1"],["/ctc/index.html","71b9f0730b9969146498fe394849327a"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","fff456ede25de61f52c67ec2abcbe2a2"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","92040ef949be5c9b2a21371cc32b208b"],["/custom-launcher/index.html","8def4c5b83305e5393228b81cb3234cc"],["/custom-loading-screen/index.html","fa9944e024525664872ab887fd715b8c"],["/custom-mouse/index.html","19b126a8894cc1f6379f7afbedd4752f"],["/custom-music-room-screen/index.html","4a5b2389c55e8ae7480fed853905e285"],["/custom-music-room-screen2/index.html","915ce09b63f0d9863e8a2a4b3302206b"],["/custom-nvl/index.html","44780a9be54aaf790935cc3b75e85943"],["/custom-player/index.html","37609abcc25d64fa300403e1908a37cb"],["/custom-preferences-screen/index.html","1fbca637fc1c605414f42516ff9b4d87"],["/custom-say-screen/index.html","20f967dc404dc5b2c1163034c96f5f08"],["/custom-title-screen/index.html","a862ea0e59de28354748f0cc2f23d2ae"],["/define-npcs/index.html","28a6fee203d40afeb30d0c56e13df2ea"],["/dice-function/index.html","0cb401239f7663a8035916e14080da17"],["/disclaimer/index.html","10aa76810b2e1f425c66cc224d78fed6"],["/display-immediately-all-dialogues/index.html","00fe75ba6563c016a80666d32a457b49"],["/enter-name-screen/index.html","0ec3696bfe30f1c3bf3737576482c68e"],["/export-game/index.html","1d86e8c4e511051e6ca4ad16ceb3e287"],["/faq/index.html","7a4cf7a5e5a39c06b7d8f74b00b354de"],["/friends/index.html","c8a5efa4b267543529ac26b0e5ada1f6"],["/gallery-template-assets/index.html","5125eab5f70e7e206b4b0ae063023952"],["/gallery/index.html","8e1e1e32e374dde318cd25853bb41730"],["/gallery/photo/bg/index.html","797d6bcb46610dc35a3ef957b7cbe58e"],["/gallery/photo/gui/index.html","00764b27749837cc1c27db4c7dd22765"],["/game-only-text/index.html","58348e9ef11f5c1d2d48bd946f7760ad"],["/gui-017/index.html","0f40b10a51c9606277cb16b2afbe8197"],["/gui-vertical-002/index.html","9f49c93335c462ba39f882a59976d194"],["/gui012/index.html","35ffdeb586988825d4579732b6e6a994"],["/gui018/index.html","75c5f71206cd864e3f22a0612b220b2a"],["/gui019/index.html","af64abd0d1b69906843b1011c6eebb65"],["/gui020/index.html","5d5a5d9fcc0d9a46ea7a2e0314006ad9"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","7be16d83350cae7f96a71d8420558328"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","fb05393c5e525f1ec021c1716fe67476"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","4502ca206fca9a1d443fb57376cedff1"],["/images-tip-function/index.html","3085074bf82d9953eceba04e770f452b"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","8c7f431901b371874ee3ace26ae571b3"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","e8a0583226c134839a2e61d50944e254"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","d660e81770d4b91cf4de5ca5263692c7"],["/items-sprites-effect/index.html","4a7ac1c518e7dc4874a01ad4b4a06705"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","01f01078f0d565b00c12bb1eb23e122b"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","ecb8dfbe19203393c01b8e69892c029a"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","c66505eddf0203d8593c8a139aeefb83"],["/link/index.html","d627fe9412232081f66ce38378bfbca7"],["/make-butterfly-beautiful4/index.html","dff706d09755ca16690532f38990f893"],["/map-puzzle-system/index.html","1bbb907b4f7e707bb6a3df21f7cce24b"],["/maple-effect/index.html","b778abffe2d821e482718d1445e9e9b7"],["/memberships-2/index.html","3a77a8257b7ee1fbef1d0c51c901ac10"],["/memberships/index.html","4a5aefa15acbff9efb161f23f186dc5e"],["/multiple-language/index.html","16ef7edb8d15114d0f1e8f542f575b2a"],["/name-input-assets/index.html","b4220f11be2948de3b2550f7c4f4523d"],["/new-year-event-2023/index.html","c8302f0f1bf4e7368468da97c90205b1"],["/newsletter/index.html","5f437acbc6f196c2ca26500aa0c9ec74"],["/nsfw-limited/index.html","095ac487750f6ad8b55e85a32eeaa1d6"],["/null/index.html","e45d9fb26aa4e47dc6257af810d27506"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","db12f1befab10f9e8f021502035ed370"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","8b22291453b2be38d5a614f88eb1052c"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","f86856beac617ded52716ee60bc891e8"],["/original/index.html","ea1a5c220d48c659ada326f004d3549e"],["/page/2/index.html","57a19d3bb68bd4ea2151fd54cfbbcda2"],["/page/3/index.html","b46595321d9ea19683edd244a135f2bf"],["/page/4/index.html","1844660051f8a52e87ab0e4eaa3239c1"],["/page/5/index.html","88d95a9c82920e4cf15d6e4e64911936"],["/page/6/index.html","972a8dc43878ff6a7a83d50cc3789b8b"],["/point-pop-up-assets/index.html","c03f97c3c58ab84eadc7c9a32797295f"],["/pop-point/index.html","64bc3a099efa87d292b3f68785b6275e"],["/privacy-policy/index.html","b9340115a49ed010f033eaba87db5902"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","ca2905201260166fb1030c622db6d0a7"],["/random-number/index.html","30f891a85ebb6eff035da8ff7a594f29"],["/random.html","3e3001416c5bc8539ec51de5acde2323"],["/release-017/index.html","d0017201d307a6ff6b29635c78cc0b46"],["/renpy-basic/index.html","b728341fd0e37b11135bd3dcfdbae940"],["/renpy-crash-glitch-effect/index.html","65938d919ec95c1e2326ec20dbc278f2"],["/renpy-matrixcolor/index.html","824df6ea74fe2f0d0b822554c832d99b"],["/renpy-overlay/index.html","df3c7ef6a4aee29698b8a0f4bb7671dc"],["/renpy-review/index.html","6d183e95280ba120de88a790984b5694"],["/renpy-typing-effect/index.html","318031f094716a915b7ce70641213e63"],["/rpgmaker-assets-menu/index.html","f6b39990183d0dfd1602de5a648117c0"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","6cb5373b83aee82f78e45c3ab37c4386"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","84fc236b0e91cd244507831881f7671a"],["/sakura-tree-background/index.html","de9b5459c19bc45c2fed0fb92b9bd625"],["/selected-button-style/index.html","0bd12400e0ad3025241b18c92ea0acf7"],["/service-worker.js","be438e517c0d453ced56a16d5f03a773"],["/show-variable/index.html","3d41912583b442aaf77e69f1c6cdb814"],["/side-image/index.html","8a9d5d914b50d594a4bed481967424d1"],["/snow-effect/index.html","ff155d90e2ca63710ba2f59b78a8884c"],["/speaking-animation/index.html","e55026d89a76f955eb1b40da80a0c342"],["/splashscreen/index.html","623948c44fcd00191edfc9b87dcb545f"],["/sw-register.js","9f22fec7f0856878ab8871c3dbb4f86d"],["/tags/Hexo-plugins/index.html","a2a8b31eb4f354458010c9d46b55207c"],["/tags/Light-VN/index.html","0ee860e625258e60fe7ca670e724da29"],["/tags/ai/index.html","8a155d4c0f5615c04571297cb130ceec"],["/tags/butterfly-beauty-diary/index.html","a488de6706332848475d81b87bcc4ca2"],["/tags/custom-hexo-theme-butterfly/index.html","77fd1db813e18a97d01bc65be3cc301d"],["/tags/custom-renpy-title/index.html","2da223494724c53f3a608b32b4130828"],["/tags/dialogue/index.html","17574eef30304108df0ef77e4731dd3f"],["/tags/effect/index.html","ab3621acb56cb941e97b56f238590a71"],["/tags/event/index.html","a6420aa483dee1e950e0e9f43a698f73"],["/tags/hosting-own-website/index.html","0257adba8bcdeb45ddc02b286fb9a892"],["/tags/index.html","71935da15b514a9b906493ae7d1806e2"],["/tags/itch-io/index.html","7d34e45626939dca0f5d456c36629738"],["/tags/light-vn-update/index.html","b54d9a457138cb2ba4c72b009104d2f6"],["/tags/nvl-maker/index.html","54cb57dc6f2fed7af9c1ad5e56a4d9ca"],["/tags/player-related/index.html","d14ebacdd0c39b3ce5e03f11041aa7bc"],["/tags/pro-tutorial/index.html","97df5772b8cc49db3ae66bc33b2a974e"],["/tags/pro-tutorial/page/2/index.html","6820972ccd4e6a7e7e852c87acf94851"],["/tags/pro-tutorial/page/3/index.html","2d4f166929aa43ff7d519b2bac7ba0e8"],["/tags/renpy/index.html","227243bc3d38ab44ea12c07ba6e3dd4c"],["/tags/rpg-maker-custom-map/index.html","001a0166104227212e964dfbbfd0eaec"],["/tags/screen/index.html","90f9a8802840fef61c0791f17c99bcd0"],["/tags/special-function/index.html","8e81e5199497dc3bd16601562ef4b756"],["/tags/tyranobuilder/index.html","88cb609d0b19df2da89c27fcbcb2d45a"],["/tags/ui-assets/index.html","8c193d994267d80c4b438c00cc344205"],["/tags/update/index.html","cf3875f3bb8944be333eb4b2d5fa7405"],["/tags/upload-game/index.html","49a90895c2dd4af3a646af1ff21e5e0f"],["/tags/variable/index.html","f1e97592d206d6c357068446b7fc2d67"],["/tags/visual-novel-maker/index.html","ff4fc6826ce7c88df0cd934c0c1ca80e"],["/tags/封面製作/index.html","b40fe0442458cfd2c752e544c2022259"],["/tags/背景素材/index.html","379c198c7a3cba2048b6dbade0650f36"],["/tags/隨機功能/index.html","1ed6ecdac03ab31ee298b67775e3f4b6"],["/test123/index.html","b67baf2d240cb917a5a6d6093a87ee49"],["/textbutton/index.html","429f55114147e96b2eaf0e82b1667db5"],["/to-do-tutorial/index.html","4947a1e37c3a8dfe32f9a4078c71fbfa"],["/tools/index.html","62339abdf92aaa68ccb051d2c235e9a1"],["/transfer-to-hexo/index.html","4db14eea401c89c347248192146e5b53"],["/tutorial-update-history/index.html","30ddb2cb7fa927b1a6c22f40727eb103"],["/tyrano-name/index.html","b1af7feb8ab0dd9ecd2854e40b5c87b0"],["/tyranobuilder/index.html","ff4b95ecd765e123a91bd8f0b235c7b2"],["/undefined/index.html","b3bbc1af8ae3b7096290e0806e435704"],["/update-20221211/index.html","f4e744c18d0def8b09278fa253a28fe0"],["/update-20221218/index.html","b3b8c1f43c0f5df01092149291ddc0a3"],["/upload-your-game-itch-io/index.html","fc90acf2421d3d1f3bd6f7db30e78920"],["/use-list/index.html","9126685fd20ff4d7f9ee8f492bb13537"],["/use-nvl-mode/index.html","24227371831b5f3ea0b0bee1541ed604"],["/useimage/index.html","883397ddd3ac5872f669772f45ee5a4c"],["/variable-change-image/index.html","a95adf65cdee9448d242a7166e535c34"],["/variable/index.html","f16aa9f6a2c7a278624e8a988a9d778d"],["/vnmaker/index.html","6b7ec2d36ba820c34752640475304adf"],["/weather-effect-tutorial/index.html","8ac26949be8417f04a2eea8e9337fea2"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
