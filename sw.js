/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","5158ea3c7fa39d10e7b08f0a5df12f37"],["/2player-battle-system/index.html","3b252c9cc2d49b78a4e79f5d15857cd9"],["/404.html","113c801384169204aa168787e200838c"],["/about/index.html","572e0b4790bcdac766cc2b1b407594bb"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","f6ba59792b6540500f9077f6fe69a222"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","deef8603f5629c331b3cccb78aaa1802"],["/animated-title-main-menu/index.html","0ef55e2334844238a15e1667c89119b8"],["/archives/2022/05/index.html","b890eb94f8e88a929333985ceb8e515f"],["/archives/2022/06/index.html","ef3fe792de3c562352c720042ee8948a"],["/archives/2022/08/index.html","b211eaec3be9051e307231d1322b8f33"],["/archives/2022/09/index.html","0457a0544b544c7dd504ba714dcf82bf"],["/archives/2022/10/index.html","cb38eb3ee8edc85f7ba64e826832598c"],["/archives/2022/11/index.html","cf81f606c4800efe51b53993cc4d15fc"],["/archives/2022/12/index.html","6551c3ddaa9217889f9c095f389c6be7"],["/archives/2022/12/page/2/index.html","09e2587a5e0a3dea9bbc678152e1f495"],["/archives/2022/index.html","bad8dae89945aafb3de172ea7907395c"],["/archives/2022/page/2/index.html","a7d9a77e1c568ff4b2bfea10259a9c55"],["/archives/2022/page/3/index.html","8966f5a0cbb941114fd7d3c1c095dde4"],["/archives/2023/01/index.html","cf3b38fcab653e8332083cf36b068b43"],["/archives/2023/02/index.html","95a361418efd5c77fdec5a553c6592d9"],["/archives/2023/03/index.html","d7fa21f10ee0c5b838d76c39dbb70ef2"],["/archives/2023/04/index.html","71836f0346049dc80ecc34588dd5a627"],["/archives/2023/05/index.html","199a6e53602459dfd0bf7232c4857624"],["/archives/2023/06/index.html","b38e2a85702888a5fa5a552d53d47f3a"],["/archives/2023/07/index.html","5d84194aa06f50fdbe17606fda80a06b"],["/archives/2023/08/index.html","9450ca261a441287a5b732e137044649"],["/archives/2023/index.html","e1038d4fd5557d0dc03d4a0018fc623b"],["/archives/2023/page/2/index.html","945f462cb19703d29993829ae02274e3"],["/archives/2023/page/3/index.html","16f808e2cec9f5cb36e9e92c39ac8aa9"],["/archives/index.html","8a01ace9502cb34e4358b3f64b5e8e4f"],["/archives/page/2/index.html","576220d13d78544c47128fd020b0c80d"],["/archives/page/3/index.html","5468455ffec25decc827e97d23b455fb"],["/archives/page/4/index.html","aefcbe7b849f4187df627535decaae3c"],["/archives/page/5/index.html","60f33f696036a973127f5f2fc5a09893"],["/archives/page/6/index.html","188c1786eb9096ee18af7b8df2d36386"],["/artitalk/index.html","20f2b3271c393003d2b763062be78578"],["/battle-beautiful/index.html","7b1607d4dd4bbd8b4e513830c1f897f1"],["/blur-effect/index.html","13a702f78333226238bcb0f2f7424bbc"],["/butterfly-custom-tag/index.html","9240b3bc247d28e21c2707a267805788"],["/butterfly-plugins-faq/index.html","581309e12285f1c748f8f6379babb6f9"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","fb6efb406a04f63a534a5e10e6fcf667"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","765b0ec3cbb7770303ce7ba8360747bb"],["/categories/announcement/index.html","2de30562f3fb9764f6ecbebd1b0f4ea3"],["/categories/diary/index.html","d5666835528b047b6f3c6db35891cdc7"],["/categories/game-dev/game-engine/index.html","75db9cb189fba1e90e1cda2bd950014f"],["/categories/game-dev/game-engine/lightvn/index.html","83af0077f3cdc781a51d5b28eb951760"],["/categories/game-dev/game-engine/nvl-maker/index.html","b9bfd83ee19cbbccfa998448e39f8479"],["/categories/game-dev/game-engine/page/2/index.html","596d8a8f65eeb3d7db2e32b61302c1e6"],["/categories/game-dev/game-engine/page/3/index.html","65b947a9340a2fd9978e3344e77790f1"],["/categories/game-dev/game-engine/page/4/index.html","6723517584423b320c672daa9217d9f7"],["/categories/game-dev/game-engine/renpy/index.html","47a9c76a28a60f5481197647c88f91df"],["/categories/game-dev/game-engine/renpy/page/2/index.html","f6ef46c7ea0d3807801d7b01f413dbb7"],["/categories/game-dev/game-engine/renpy/page/3/index.html","2b0725abeb6467bf0328ec59577abbe6"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","9fc4a719176c152038e67fe3e2f1db6d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","b71e15f0da4c8e025715b89b28fef2c0"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","d8a304a459e46aa92dad40a374c6b57e"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","7772220126891d0558aec438dc5193f7"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","d03ee465373ce69cf352fe86fd738583"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","e83bb131b930399cbb6844f2ffeb22de"],["/categories/game-dev/game-engine/rpgmaker/index.html","2c736d43c78bb1c80fb17d03680f0265"],["/categories/game-dev/game-engine/tyranobuilder/index.html","13c9b5def466ce3231d66707c6144363"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","af68928dc37a846d23ac2a85498f1f12"],["/categories/game-dev/index.html","6ad6f08437a36b9c1635a6373272d061"],["/categories/game-dev/page/2/index.html","fd0d77457133e1e29b76630383d97961"],["/categories/game-dev/page/3/index.html","31092520729c788ba89f01b5746ecc6a"],["/categories/game-dev/page/4/index.html","0f810bd6e31ba5eedb64647c41bd494d"],["/categories/hexo/index.html","8743a66a45a5e615df762cd88abd2032"],["/categories/index.html","8ba53007d7e894e76356fae64e7945f5"],["/categories/material/index.html","ee2ee50429608202e09adf58c364aa7d"],["/categories/update/index.html","30e6e88eecaea5fe32011408a762864a"],["/change-according-to-real-time/index.html","ca0e099f584872cbf2dc60e47350c497"],["/change-character-info/index.html","997b23e320aada4472f8c09aa24b7719"],["/change-title-after-first-time-viewing/index.html","46ed7ffe887fc4fe1a68683088697b47"],["/change-title-based-on-event/index.html","c5295c5155b2d6a45267ea7029def79f"],["/character-interaction/index.html","30f94fe1a2bdb406e69be53f4d1665be"],["/character-stats/index.html","acf151d88b2a044c57102898206021bf"],["/chatbot/index.html","353c48b138d2a56f17633d661507b203"],["/choice-time/index.html","8f093d07e13734df2a97fb82c6f74b0a"],["/comments/index.html","503278ae826846729ae1d1a49a9da15c"],["/commission-info/index.html","09a9d870aa2911121ad014ff1a7bd511"],["/create-button-anywhere/index.html","1d0ed6f913ab19a4454adbf9685937af"],["/css/eurkon.css","eabb28eef6e1f3cc1b0315116930c7df"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","934572630ba49624b2d7368505184243"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f6673f14fba5949df95d07c056e7dbee"],["/css/rightmenu.css","0d8a298ebd298fd5e928564fea5f11df"],["/css/siz.css","954c9f1b6a034bef2250c6412dd76453"],["/css/swiper.css","410ce27745e6a94dc4af7e9dc75de441"],["/css/swiperstyle.css","6b92e93bc55f19edf991e629dcc950b2"],["/css/var.css","cda5ea2b73ad364c0b80acebc4b1dce4"],["/ctc/index.html","57117aeb7e70a8d0cfaf63295811afba"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","abd6d5c1b069d7a0d3a4a5354792524a"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","8edc8c3fa798138ac1549b0d0b351ba3"],["/custom-launcher/index.html","597dea4909e6dff0234ea61bf558955f"],["/custom-loading-screen/index.html","710070802074127e4057173d338647a9"],["/custom-mouse/index.html","1a3223ee9dfa77df5cc30633fabf1c52"],["/custom-music-room-screen/index.html","b051bd4ad6ac8e6e41acbeec49dc63d0"],["/custom-music-room-screen2/index.html","dca2ff32e017da756732bc6eab7857fb"],["/custom-nvl/index.html","4a6f7d36f3f19ad7a2dd098f23eb1657"],["/custom-player/index.html","8687a4b4568f7988aaf0a212473de439"],["/custom-preferences-screen/index.html","a9cadb4bcac4ab4b52a7f218497a5b85"],["/custom-say-screen/index.html","029c29cf7a3e8a84eab6880dc427202b"],["/custom-title-screen/index.html","adbfde954c7e7a22199b78d7210c1481"],["/define-npcs/index.html","fb0f12c2e15bbaf0e017d86f5f8d2b4c"],["/dice-function/index.html","1a7c1fe6a31061736356e643891d9bd7"],["/disclaimer/index.html","5ce77219f840b0f510e31841e7a984b3"],["/enter-name-screen/index.html","4db46a89192b8c62154d9fca8ca5e941"],["/export-game/index.html","2d2ff15a256639a4df278e919b37750e"],["/faq/index.html","11b1f443300576ed3cbf38ecf6e2bfce"],["/friends/index.html","d093bbdc5e6ca2e3d7c489a0285fcd7a"],["/gallery-template-assets/index.html","c3b561f4e5dd177e16c4f5df0ebb1688"],["/gallery/index.html","092d589df1d4c2292403ef10c84a2323"],["/gallery/photo/bg/index.html","a3a12a7879b3e649561cbf0f45fc75eb"],["/gallery/photo/gui/index.html","8a1c32d685e676cd92c521343d6cb844"],["/game-only-text/index.html","1f20c2e23f795913e603dbc1380074e7"],["/gui-017/index.html","2d6a852f89522aa82b99b5c2f431ceb6"],["/gui-vertical-002/index.html","7067be9490086c91fbd396fe1029d920"],["/gui012/index.html","8cbbd013f239a21067b9affc42387a74"],["/gui018/index.html","9ccfc4fe98e34c198dcdba0b970070a8"],["/gui019/index.html","7d98d60faf2f2a3e4b0f4b7443879f64"],["/gui020/index.html","0bc65bc96b2681735b76eeac9edb7e59"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","1ed39d0eb2a3489df23eba63be402b26"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","7c813fb610bd1478d93d108ceb312a33"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","8c8d3b81ce34b0b88b75601ba09b386f"],["/images-tip-function/index.html","aa7ebcf97732e2b583bee56090003f4d"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","ff271d3cfbe626a306cb44f022f8d47e"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","8c17457c8d3ddfd676b505a4d00bd650"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","3aaf1137df6efb9d47d2fe244c618cec"],["/items-sprites-effect/index.html","f3985cf0e75c998a86c03f94470a72d6"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","35b12eb8bdf07d42add89748d1d8b3bf"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","1f9bea39f0596d226ef06850d71b5f51"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","2ea735c78ac9ae594353cf449a99bb10"],["/link/index.html","2312480676e0ddb210269cb4234ae7ac"],["/make-butterfly-beautiful4/index.html","ecdc0de6fce59d6527d346ae80a1544a"],["/map-puzzle-system/index.html","3702d2aac87ae68d016b0bc8725bc921"],["/maple-effect/index.html","bc2d85779c176994e96cf0fdd4682489"],["/memberships-2/index.html","327e5ff7324725a1ff35a88dd50575b3"],["/memberships/index.html","8d2c41e2810ce0fbf0de335125a3ebfc"],["/multiple-language/index.html","ac8956f130197512a316e6d19a788e1e"],["/name-input-assets/index.html","fbcfa91e5bb799b2d9634c3e3ee16f9a"],["/new-year-event-2023/index.html","d426b018be2a384117c3cb3022da1f4a"],["/newsletter/index.html","5477aff56137854e761a2a3f6b51c702"],["/nsfw-limited/index.html","31a69de732f443b115f7088b6f7a40df"],["/null/index.html","a271449d5c30c0201f77eb9201e629fd"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","bca1366fb3a4398737c990dcfad52ae9"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","9f1649e2bb01160f766197146843834b"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","67be22b4eaf6f9917c2fb9e5d85eaa24"],["/original/index.html","2eab0c273fa8092dd1a1feb84e214a1e"],["/page/2/index.html","31fb92fc90596eed58cdaef8c4edb12f"],["/page/3/index.html","36a587a4de4e8e9d0a0ba0c67241d2d5"],["/page/4/index.html","712b77f5eb944d50a48e2341b6c031e6"],["/page/5/index.html","e7fbc282396a7206e2ad92a5e14b1986"],["/page/6/index.html","04d49bda707c46a90f29751b3b884d07"],["/point-pop-up-assets/index.html","b07c4f70e6aed1c7d6986df067a48d72"],["/pop-point/index.html","09941187c1f20eead536fba960aa69f5"],["/privacy-policy/index.html","6616d56550ce747da652f1dbdb128a52"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","37fc9ed9b55b0ef7a5bb61c9d0d31206"],["/random-number/index.html","807e8edbe910c99d56896894fe6649f0"],["/random.html","443400a81613eb1bdb4e69470e34421d"],["/release-017/index.html","1dc260b04895e0503c9fd3787dea595d"],["/renpy-basic/index.html","14554df8bfdd2cb888137f99e370a08a"],["/renpy-crash-glitch-effect/index.html","200ba5db1ed504fb3e373db2fc39da0c"],["/renpy-matrixcolor/index.html","fbca6218ec1b31779a58ad1bd3b7d267"],["/renpy-overlay/index.html","bdd359235f900e262d9ac116083bf8e1"],["/renpy-review/index.html","160630edacfffcab3d11a0c907307a88"],["/renpy-typing-effect/index.html","fe25d430c035e546ecd6f74acaac6146"],["/rpgmaker-assets-menu/index.html","ae49cf45fa292a19ca1767523dffd529"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","7f2fdd2ff1db5b96bd5a40e9a2fea8a1"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","f7dbcf202dc0e1070787c7a09abf4c63"],["/sakura-tree-background/index.html","bbefafc18fce6f5bceaf5ab6f74156da"],["/service-worker.js","dc146d9f4016ba731d9f2dcf9c89b059"],["/show-variable/index.html","88c99f1bcdfd9d7dc59e9b89e06b3c5a"],["/side-image/index.html","fb835bbb9fa3b79718b2eeb9d31b79e0"],["/snow-effect/index.html","e19d90d993bdec57970cda6ce25ec603"],["/speaking-animation/index.html","bfebb26b65a0420f016919d468a4edd9"],["/splashscreen/index.html","4a9766b308be07ecb4ab0cb5b523a24d"],["/sw-register.js","3ab2782bfe56641ce3413450e2e0dce2"],["/tags/Hexo-plugins/index.html","20a1a5626b7e1b28a0fb1d7d745b9771"],["/tags/Light-VN/index.html","8ea2aec8581d0f1f96f9199ce5029ad7"],["/tags/ai/index.html","e2210866076ff47e191cfaed23186924"],["/tags/butterfly-beauty-diary/index.html","374f155ce7ad34996af5d96a6cd40a92"],["/tags/custom-hexo-theme-butterfly/index.html","ef44a5ff38169e71914e0b0629ab9983"],["/tags/custom-renpy-title/index.html","6a71e4ad20052b996116a122f515e7f6"],["/tags/dialogue/index.html","1c768f3e0933acf8aa69f99c84907a7a"],["/tags/effect/index.html","190f5a90d255c3eb0a9d5af3743eb206"],["/tags/event/index.html","132916e8defd3509199ad6eeb71f6070"],["/tags/hosting-own-website/index.html","83269b7a18bbd244edf316ac86d0342c"],["/tags/index.html","b8b6f91c4b932636a929d1693ea74d94"],["/tags/itch-io/index.html","59bd5be1de486d0132528dfc2710f230"],["/tags/light-vn-update/index.html","e8d22c0da586ff459b510feb4e78a071"],["/tags/nvl-maker/index.html","adc3b9a8ec73eae1177ac12046db7177"],["/tags/player-related/index.html","d8f9aa350088705b232d7ef7b3adef55"],["/tags/pro-tutorial/index.html","6b5acb0e8bc56210741018e3bb1a4308"],["/tags/pro-tutorial/page/2/index.html","6d8cc7258d2a0ab1f648e02931f34abd"],["/tags/pro-tutorial/page/3/index.html","eeaba9f0dbe07270816e361662438e55"],["/tags/renpy/index.html","4987989f7826bc72f6c8fc0aeda06d39"],["/tags/rpg-maker-custom-map/index.html","e9ad81082e277fa718c772d451bbcddd"],["/tags/screen/index.html","0cc70f1e0eba858fe18f8416db22d34a"],["/tags/special-function/index.html","876b54b4ab881a5ebfb215621d305d0f"],["/tags/tyranobuilder/index.html","a687f726b209e4719e2df82c75c78199"],["/tags/ui-assets/index.html","3d579dab50093c3c36b6932251e99a3b"],["/tags/update/index.html","694dc192c5f067211b99245808b906cf"],["/tags/upload-game/index.html","2000ad607364dbe4abc20e56069e3f87"],["/tags/variable/index.html","8706112ac7d1dcd8ed17bd6965e03f6c"],["/tags/visual-novel-maker/index.html","1f6a094b4868021d5d18d24e1a93b746"],["/tags/封面製作/index.html","c32051da770e484c353e229b9a90e969"],["/tags/背景素材/index.html","452979bb373270789a99b0d5157e955b"],["/tags/隨機功能/index.html","afa0987a972388b72af3b76a5d407abb"],["/test123/index.html","f1510fc6c1b4a29aedfee76dabd46054"],["/textbutton/index.html","34c5e9dd4e02c805663af3c626776dd3"],["/to-do-tutorial/index.html","1fb5f1ded84310151088d48ef77c33fb"],["/tools/index.html","48bee3b7f294f45acff80fe11f00196c"],["/transfer-to-hexo/index.html","72a3c121213c1e8fff5d8c93fbafeb3f"],["/tutorial-update-history/index.html","cfac97d1fcbc26de96fcdbf271315b4e"],["/tyrano-name/index.html","919ce74c461197eb80067225e96019ae"],["/tyranobuilder/index.html","8d6edb6b141bbfb6329e66dcb5252860"],["/undefined/index.html","4d60c83d78e1ddc0aeb64473bfb81721"],["/update-20221211/index.html","b645a376dda6eeeaf0a72377c183639e"],["/update-20221218/index.html","4f28d72eb6bdd1d35256fe49f0afd104"],["/upload-your-game-itch-io/index.html","626e44a3fdbb9ab82023f41f7dc64cdf"],["/use-list/index.html","ea2555d3b8407609d3e39fba922f49cf"],["/use-nvl-mode/index.html","27488370bedbe09268392f7c3cec4b3e"],["/useimage/index.html","ecb74ea354bb08d1f58950b200addda6"],["/variable-change-image/index.html","ffef363c4f4af884639d96727c9ce0a4"],["/variable/index.html","76fe21bcd20e981181d59ddcdd6b8486"],["/vnmaker/index.html","235ec34c18c57b14b9999fc01a4f8712"],["/weather-effect-tutorial/index.html","43e37c4dc394fc55308239adc425f886"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
