/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","7eeb9531cb1c3cfdf3791cea34a3b1d7"],["/2player-battle-system/index.html","bba97b546b9e19f8b9ec682df5d7c526"],["/404.html","f54db000a632cfc03d3b533703c34cd5"],["/about/index.html","4b3ae55e330870598e7ffde1691f69df"],["/acg-creator/index.html","f0db6c361ecaa6a96944a4da4914f80b"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","1a5e81554049c8e85705a7db38c2180f"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","b918dc337a0c763e311e048c515f8674"],["/animated-title-main-menu/index.html","a8fba6a307430077cca48082999e2429"],["/archives/2022/05/index.html","5e0c46e625e6ec5dc51d179a96b35e3d"],["/archives/2022/06/index.html","8093da3d449e57a96e4b3a0b12d3ec53"],["/archives/2022/08/index.html","d1794609f1d2e8ffa06f74c1263f0786"],["/archives/2022/09/index.html","bcdfdc84b041c272a4f18a3eef289322"],["/archives/2022/10/index.html","7bff45e2d89550424e91365e80dee22c"],["/archives/2022/11/index.html","ebd63d9e6d5083865cfa34c1018564e8"],["/archives/2022/12/index.html","76e4d505aa8fe604630d6fa8b8249f79"],["/archives/2022/12/page/2/index.html","b9e32d0c1b95c49c5d1a6abb4f09c2d1"],["/archives/2022/index.html","f8d9cb6dadd54bc10853f8c47fc82fb4"],["/archives/2022/page/2/index.html","3fa244ede81a024c89274252b2a1434a"],["/archives/2022/page/3/index.html","7f2984a13d3922b39a0f218476a65b4d"],["/archives/2023/01/index.html","ea6266560aae55aa9a6b5582ca002417"],["/archives/2023/02/index.html","efa3ad30aac9f7ef8bab72acafcdd2e6"],["/archives/2023/03/index.html","4230b24ec37374f39057cc7c62a9a7ac"],["/archives/2023/04/index.html","2421a6ff05104b751e803be19dc7122c"],["/archives/2023/05/index.html","e87fc00b63f67cae3f9b2b47b28533f4"],["/archives/2023/06/index.html","93886472d0d8b4e499d7a6c5f63b4707"],["/archives/2023/07/index.html","ce6860079ffbf3553fbc759ca8d63262"],["/archives/2023/08/index.html","9061bc8d760e754e03b4fecfeb860494"],["/archives/2023/09/index.html","394533d0d36a53efb0bfa0e3aa09cd5b"],["/archives/2023/10/index.html","0dc0dd312fcd5a27b04756e862430037"],["/archives/2023/index.html","4a4b09444da9386502f6ef516562d7dc"],["/archives/2023/page/2/index.html","770623b8f212e61c9c64c4345b3c5b96"],["/archives/2023/page/3/index.html","7a4909dc1e2830f6e38b9b14cbc2bade"],["/archives/index.html","cbef1a1a656d14dea0ea1aa16a60840f"],["/archives/page/2/index.html","39904c292be82643c3a08e9e1945d340"],["/archives/page/3/index.html","d1333b7113915e1751a3742bdd82354e"],["/archives/page/4/index.html","e507a677fc54398aa7d081c10b95c3a4"],["/archives/page/5/index.html","47a18a3e31108844111d11d78f07c1ee"],["/archives/page/6/index.html","3c844673f687ac04aee5b7855ed756df"],["/artitalk/index.html","a558d4a638d7224cf0b4eb07f2634a67"],["/battle-beautiful/index.html","7e38ae035edc5dbfe16bd05f5e23ab63"],["/blur-effect/index.html","d49ac017ee7266cd14d11ac1b4b0ef37"],["/butterfly-custom-tag/index.html","0513261225de026a7a919f7bc476ca42"],["/butterfly-plugins-faq/index.html","67349b44655462537ab0f224b2b79ac3"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","4e7d07af82f918243a77f1305b89e2b6"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","0fec99c7e08eba2a68ef804b023e6382"],["/categories/announcement/index.html","fc1fefd5c3ae435620f025d9f3079323"],["/categories/diary/index.html","da4eb97644902d5a6a0dc01bb86cd37c"],["/categories/game-dev/game-engine/acg-creator/index.html","2d08593f560c9cd4e1b743e6a3456a6d"],["/categories/game-dev/game-engine/index.html","05f6eedc0653cc10e5a4deccff2aff86"],["/categories/game-dev/game-engine/lightvn/index.html","0073aef640c9abd716df2a7b664ff077"],["/categories/game-dev/game-engine/nvl-maker/index.html","3c4b6313329eafe5286c22ce27aa8423"],["/categories/game-dev/game-engine/page/2/index.html","192c415ec5e9f194caf562cbad4bced5"],["/categories/game-dev/game-engine/page/3/index.html","be14995cabe5e854474b9a67fb29b7de"],["/categories/game-dev/game-engine/page/4/index.html","de4f74f1bb7cad8df3b881e466ad66a8"],["/categories/game-dev/game-engine/renpy/index.html","a5a36bbfa328586250570b24934c5202"],["/categories/game-dev/game-engine/renpy/page/2/index.html","6f9b108f121493cbbd2b625a70818397"],["/categories/game-dev/game-engine/renpy/page/3/index.html","1a8cf3e2a1e094879b60c34cb5ffafec"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","b4d5776d343da319cf650943278afb62"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","12917cf9f71f9b519cab41369bcde11f"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","d1757e0b09cf5fdd5a391d7f77b963d0"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","8502994723887d3bffb7a8ef2a95ea6b"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","bd89c2e22d62d44aee616635299cfb06"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","28c413dca404d3230e448812ebe2b68a"],["/categories/game-dev/game-engine/rpgmaker/index.html","b7c8f39394dff92b25e11dfbeaf268c2"],["/categories/game-dev/game-engine/suika2/index.html","340d618a6e9b78084df3f24ee62e2f80"],["/categories/game-dev/game-engine/tyranobuilder/index.html","f582fdaca12e045873aad6fef234d48a"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","0295711ab2fa844730c7f8f39d62c9a8"],["/categories/game-dev/index.html","efab0c46af4ca0a01bca06e99e3a0835"],["/categories/game-dev/page/2/index.html","69855477618926b72a7f23185541b31f"],["/categories/game-dev/page/3/index.html","925d61c57cad433c698a7299e94b0849"],["/categories/game-dev/page/4/index.html","b86a104e6508841a7481db30d2d71414"],["/categories/hexo/index.html","0484b21436e4e50201101b0bc57c6884"],["/categories/index.html","8693078ca42686c49382c13af50ff568"],["/categories/material/index.html","4c53750eae4950e3fe589cf4563bbeb9"],["/categories/update/index.html","54ea31bc220583efad17768a3a61ce08"],["/change-according-to-real-time/index.html","394fd9aa6c993bc5f30b028ff5cbe7e1"],["/change-character-info/index.html","d9b046c92cdbdb8037c151bd0e03b87b"],["/change-title-after-first-time-viewing/index.html","514db3701f90c8bfc3cc6932b48b3e19"],["/change-title-based-on-event/index.html","5d71e900117ec6edc526ba3725e32b43"],["/character-interaction/index.html","6a853f3267cc822d4d41e0d99e097191"],["/character-stats/index.html","e9f2df01bb594322b1d63f3a9777a075"],["/chatbot/index.html","b597e46333cc75b741e5311ee3673c37"],["/choice-time/index.html","31b454efbd3fd30bf6905d597b9c9590"],["/comments/index.html","58730a03db01c9ab6a613cb6504e02a6"],["/commission-info/index.html","8b1c093040e8e0fe01bfe0bda4483fd2"],["/create-button-anywhere/index.html","45736703f746ad03d4a2a18bdb511962"],["/css/eurkon.css","db6b210dd43c8ae171da500c198c2695"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","5971a20ad6c8d006e776873dd07f9563"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","6f5c37d823bacaf06121fdc0c154edcf"],["/css/rightmenu.css","3038208ab2aa9dc990073e801e5819b9"],["/css/siz.css","6c00aa18b8aa19f37b0e533b1cff3eea"],["/css/swiper.css","fae39d01b4a9eb450da94710b323699f"],["/css/swiperstyle.css","53ac59a4ee8104097ad7e6480b551e7a"],["/css/var.css","ca4233cdf0023c6c769c46d9e1998971"],["/ctc/index.html","7fc9700e52af9c1fb44f8d2ce32d39ab"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","9d27178efde445bf0ab35dd346b78fef"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","65783c2992eb982d4357592442799e83"],["/custom-launcher/index.html","ff5bff2e2b41c86d8e7f82a56a99efea"],["/custom-loading-screen/index.html","abb71d79427ae9bb89a341b3be02dbac"],["/custom-mouse/index.html","c15a7db08fa84c6771f0abacc4327eae"],["/custom-music-room-screen/index.html","227ba207d26619eec376a9c2994c382b"],["/custom-music-room-screen2/index.html","cde85f5853d2f91fdcb8b7ef6d595c81"],["/custom-nvl/index.html","4d099c70cbaa2973fbdcb3cb3cd6511f"],["/custom-player/index.html","24650cf3b1e31577fa144c59a2c4f320"],["/custom-preferences-screen/index.html","2f0e3ab51aff5dde867f27995519d303"],["/custom-say-screen/index.html","862c11a54848c3e62a5359de19b6270b"],["/custom-title-screen/index.html","7e80778fb8a4f9c2fda8daaeab36148c"],["/define-npcs/index.html","a2c5cdeb7713abe623dcdc62fa2c9ec9"],["/dice-function/index.html","fa039d6377dd45d6f0f05f0b2769448d"],["/disclaimer/index.html","3fdfc698da01c392435118029b41cddb"],["/display-immediately-all-dialogues/index.html","4075daed20115022e7fa79bb2af42221"],["/enter-name-screen/index.html","17b97555761b88a37b4d4e67bc3f3202"],["/export-game/index.html","1f64ab20d641cd0054df8818e1d588af"],["/faq/index.html","f6314c6cc74e1906f4d675f5c9dd2d6e"],["/friends/index.html","5179465765b909a12024b0aa62e7b753"],["/gallery-template-assets/index.html","90d31cc22e4aced68c8debe894b0234d"],["/gallery/index.html","d8d514c84009ef3e918b41a801cb7839"],["/gallery/photo/bg/index.html","f95d4f460accfd028b34c98e7f86a259"],["/gallery/photo/gui/index.html","58f5628de68d2e2fe2a9b17cd1a4dadb"],["/game-only-text/index.html","061d0539f3d5c615a7c7cf98ebf2c084"],["/gui-017/index.html","4572973533acfa375d8fc382c2420b4c"],["/gui-vertical-002/index.html","4f736b15711cce482c9c593cac6ef56a"],["/gui012/index.html","b7ade29dc5b00403e60d84bc8c4d80d6"],["/gui018/index.html","024738494645b9130a4d649336ef7897"],["/gui019/index.html","013ffa0e14d6d924f77d4ec6901cb05e"],["/gui020/index.html","fc5a17e27589d3563f1715389d3b622d"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","a9308513837898fff00821da3ccd7453"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","07a113a2b175aaae1b6e39342af42a74"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","0d9315f8ddd4e13a76325d9e6ec98251"],["/images-tip-function/index.html","af8ea372006e1e978ab2c35511d9834a"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","afb993ca244819bb454ff21ee2e5e58a"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","cf5224fdde066ab0ed7fd5cf1c8c00a8"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","0b100f229b6b419d7b097210b77647af"],["/items-sprites-effect/index.html","b612767e9dc737a856f4dfce13aaafeb"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","2e5cedb3e4b9ac45c6bfe5a03c97a922"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","5ac2fbe4e17b4017a541ad618310a4b6"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","8f05ab80c4a7bb56c0c8fa90c26d0872"],["/link/index.html","56a770979eed1037f2bcdd8801795865"],["/make-butterfly-beautiful4/index.html","21a11b58f53672a4279f2a903e9290d8"],["/map-puzzle-system/index.html","325772e6a293865a5c9cbc81d75df1a7"],["/maple-effect/index.html","1f2e6a8a4861f7d2ff8caebcc411268a"],["/memberships-2/index.html","0d66145a1d308d11272d0e32127ec170"],["/memberships/index.html","82cdf87b30471e2e0ea94f3742e86106"],["/multiple-language/index.html","54b450dd08c413e3d13431fb64a242f6"],["/name-input-assets/index.html","c47c1471af1bfd7370b963b6848750ec"],["/new-year-event-2023/index.html","08e3b6fffdd78b1d953b82c3ac4e673e"],["/newsletter/index.html","947faff4e9b1fcc3b5be6f4e29d6554b"],["/nsfw-limited/index.html","c7e3af351ffea3e2608b7e2d46842015"],["/null/index.html","d298ac2f89479b94033bd0589142c8d8"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","9a642b816cdde9b3b73b48ebf0d9ef55"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","4f006a062e812a96aaca442394e87dd2"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","2ec3f0863e7ab48ae3849a913ed5b593"],["/original/index.html","813a54340ea0e37aef34588a92cec676"],["/page/2/index.html","81bb5366579113688159fff05f2840fe"],["/page/3/index.html","5bb12a3a93aa2e98d842f1e71d0b0f77"],["/page/4/index.html","1d1dbb71ade8b500c212116067379f92"],["/page/5/index.html","23f0732f3ba8ccfe8da428d717d82853"],["/page/6/index.html","6ee79b22271fcd1c4f43d6bae8dc38ac"],["/point-pop-up-assets/index.html","62830ae9cd2f35697bb6d57314395cde"],["/pop-point/index.html","f918be41d477580adea7634147ebbc9c"],["/privacy-policy/index.html","757371b09b583b36aaf43f888526e735"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","b18f07b34d69e9424472b31afc3d0a13"],["/random-number/index.html","97ef3d883bd13dac9a196a5bb7b64c22"],["/random.html","2c9a58dc5205fa859689e234b2627276"],["/release-017/index.html","7fe4140882116eb7b0111c59532ed59b"],["/renpy-basic/index.html","87495137124b7851e631c347173dbf6a"],["/renpy-crash-glitch-effect/index.html","c56fae59e747fc832e819f102d35e64b"],["/renpy-matrixcolor/index.html","66210af6ed8eebf8ef9d65c89607f1dc"],["/renpy-overlay/index.html","3258a2f0007e9d9b9521c2e94371542a"],["/renpy-review/index.html","701d29405ef3091bf3ac4a882fa3547f"],["/renpy-typing-effect/index.html","3d20c1bc79052de3e56483283ccea2de"],["/rpgmaker-assets-menu/index.html","a205f292f5c59c75585b1865ea3c69c4"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","bc7ad68241f2a76acde680df5edb0f9d"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","82bf46301448e148df6d037eb8759274"],["/sakura-tree-background/index.html","9d43f75bdc0d69484729518b3db4a8b2"],["/selected-button-style/index.html","ab2d137050e14c08954392dfeee59ac4"],["/service-worker.js","397929e0bc8f27cd9e048efc7f1b7eea"],["/show-variable/index.html","ee7a447549e020941e2be92f8442823a"],["/side-image/index.html","fd7fb517a5cca2e65ab11e3609a5392d"],["/snow-effect/index.html","e8d6e4d5fb7907be6f8c0ef1e78b1b31"],["/speaking-animation/index.html","b055ffefa51262b7d1e944e62b11ed88"],["/splashscreen/index.html","67340f152adb906206f40b72d3eab3af"],["/suika2/index.html","bb0489c6774ee5fd61ab80154bbd88a6"],["/sw-register.js","5b2b09c8fe000beef85eabc54c1a3616"],["/tags/Hexo-plugins/index.html","66a388cd8dddc89a5197760b70a37893"],["/tags/Light-VN/index.html","ce8fad1f2825dd52edadcb6ad5518f62"],["/tags/acg-creator/index.html","6e923e775babfd9459557c246325df51"],["/tags/ai/index.html","c9e4fc737f0ecbe38dc674ab9ed01ff3"],["/tags/butterfly-beauty-diary/index.html","e3b7af366ec346aeeb987a4266494d66"],["/tags/custom-hexo-theme-butterfly/index.html","8ccd5f6eb645af133cf7807ab0236c5d"],["/tags/custom-renpy-title/index.html","42ecb23930eebb4186920dcf3a90d74b"],["/tags/dialogue/index.html","4d5c23db2d3d3df7ac478e61b81125c3"],["/tags/effect/index.html","ede7f99dd13af2291a5a74a4b3bda7b0"],["/tags/event/index.html","160f65e2ba385618ba0fb06de488f805"],["/tags/hosting-own-website/index.html","0a6619b3e3dc7d835dc8e7da0200c612"],["/tags/index.html","f37f28b5a9cc2d4478a89035bedfe566"],["/tags/itch-io/index.html","530de761c8c3022042da22c17a281bf4"],["/tags/light-vn-update/index.html","61667bc05b3f64856ed8a4f604e3057f"],["/tags/nvl-maker/index.html","1492ab05e5bad9d6cc164fd89d95d913"],["/tags/player-related/index.html","cb4e1fc347cea46a39626810c42339a5"],["/tags/pro-tutorial/index.html","c38f24a8ee8cf75357bff202881d9c53"],["/tags/pro-tutorial/page/2/index.html","cd9d23ad7debe5f9eb18c4a28ad23f61"],["/tags/pro-tutorial/page/3/index.html","a02e41ae14cb5bc4552e959317be0927"],["/tags/renpy/index.html","e32f35e5ea17944692648ee17152343f"],["/tags/rpg-maker-custom-map/index.html","67d8993e203acd5f1452c160b96bc1e6"],["/tags/screen/index.html","d6f7b0d57189ea2fb94d1d09b82fe938"],["/tags/special-function/index.html","538aa00a70efcaf0392510d2eb3174e5"],["/tags/suika2/index.html","45b5d7e698cc20ed0845b799c664ac07"],["/tags/tyranobuilder/index.html","3be9ffbc76e3bd0a7de74cc5e7c451f0"],["/tags/ui-assets/index.html","9b6c72138c1d627dfb60c25cf23a21f6"],["/tags/update/index.html","5c4e20efc6469af4f4db7caa784b44ef"],["/tags/upload-game/index.html","3753aa39bc42f3416278edba0c8bea94"],["/tags/variable/index.html","8a7ea29206ea30096adee6f17b0f813e"],["/tags/visual-novel-maker/index.html","baca6f0617180d546bf5caace24843c0"],["/tags/封面製作/index.html","d194a9e451f4655fab9cd05501935857"],["/tags/背景素材/index.html","f2799251629c4b0174dc0a690a7c8c51"],["/tags/隨機功能/index.html","31da3e05858223950b4fedd5af3aafb0"],["/test123/index.html","94f3d6acf4fbfe3c3e7ed892ab6d4a53"],["/textbutton/index.html","44719b884149eb70208a4852414f036f"],["/to-do-tutorial/index.html","506ebcd1e042732d6d9e9e79fa34984a"],["/tools/index.html","b459e6df08db497773caf3d4677b8055"],["/transfer-to-hexo/index.html","678c837c1841e586d24a29d43e269c40"],["/tutorial-update-history/index.html","d122a3b897114ed6155f1ede2e7f5a60"],["/tyrano-name/index.html","80319fd45ed2ea1774a84b3604514251"],["/tyranobuilder/index.html","7e659eb172f6975cecbdf9b7ccb7a93c"],["/undefined/index.html","d89732a229f61ac323c0863c2081c6db"],["/update-20221211/index.html","d50db5fbedbad4b601c2d35cc5c52425"],["/update-20221218/index.html","48fe88217e5dca3cb6101ed46a97ca6b"],["/upload-your-game-itch-io/index.html","6d1a1e08b10d08ba27fe6abe9f93b316"],["/use-list/index.html","6c5a2e333e8c9c62af8219ec67b0c975"],["/use-nvl-mode/index.html","66b3c76e679c2ca645fd6e54013c4b1d"],["/useimage/index.html","7bd342167fc7869c4c570dd58bafbcc1"],["/variable-change-image/index.html","013ba0d1afb12749716b9913e8b88104"],["/variable/index.html","1e7db3f4631aeb4f8c2314b9d2fdf4f7"],["/vnmaker/index.html","c39b3e89507388a4a85a816c46ef4cbb"],["/weather-effect-tutorial/index.html","d45daeacee9640bc3dd49245c537368c"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
