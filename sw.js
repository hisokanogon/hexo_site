/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","b43f73aa14200ba6b91c4e54f0f79820"],["/2player-battle-system/index.html","dcdc6ffc10c3bbabc243188e34e17b38"],["/404.html","2ece24ce15e109fa88a92f05bb3df671"],["/about/index.html","67e91d3b395b77bdd8af081fbb6a0a02"],["/acg-creator/index.html","b8ed7b0ca7ffaed2b29495f3ac7b5124"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","8201b40d9f232abdf29af1832866e37d"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","dec9905767a886785167c5bee5eb97fd"],["/animated-title-main-menu/index.html","fcc767764a4f5ba7d05391db5e494fef"],["/archives/2022/05/index.html","0757a925dc21dbdf39f9f37aa9b6dacc"],["/archives/2022/06/index.html","7801f87f61525a97ca2f851e5a616f11"],["/archives/2022/08/index.html","5b2e2fbd4965534ca427543214a8f527"],["/archives/2022/09/index.html","b559c9c4ecb1a4940fe643435c067040"],["/archives/2022/10/index.html","9edfec0872519629b2221974cfe75bcc"],["/archives/2022/11/index.html","0510b87085fc101d3ba1a2ff7e7132a0"],["/archives/2022/12/index.html","874baddb653a296e7e1bcffea8ecb01a"],["/archives/2022/12/page/2/index.html","28750eae11aa6f7a334ca9b00ecada74"],["/archives/2022/index.html","8c53cf1c43b3d9d5955b3bad5ba5ae2a"],["/archives/2022/page/2/index.html","12fa8f5b692897c8da67bbf31677b21c"],["/archives/2022/page/3/index.html","a8086193a824d90623b2fddff6378ef9"],["/archives/2023/01/index.html","8b9b64f7bac3337ce2bc2a55dbfa221e"],["/archives/2023/02/index.html","b157f1ca0c602e3ea6736b50b97a2997"],["/archives/2023/03/index.html","ab7dd126c753c85ed5a42cd0174293c6"],["/archives/2023/04/index.html","9073bcd58c82d433b0b64946d23fb8f4"],["/archives/2023/05/index.html","394ee3fce1208de42feb445149fec5d9"],["/archives/2023/06/index.html","7a1a123d72946d8c6e99a764870fa6cd"],["/archives/2023/07/index.html","8b23939cf4a6094d3f24412b291b77dc"],["/archives/2023/08/index.html","9fecf23269ce270b02e7abbd559d0b1f"],["/archives/2023/09/index.html","adaf7a858ea7bac7e01606d635757ced"],["/archives/2023/10/index.html","b0abe8928b84b738a241b57d6e1b7078"],["/archives/2023/index.html","3e15f567fcbc46cfc0b46b64b0f53cad"],["/archives/2023/page/2/index.html","0fe6f428188604c00f7a3a784e797cab"],["/archives/2023/page/3/index.html","b376c06128463ef8fdf400e532464d5e"],["/archives/index.html","9a08bb395a26e66c7ee6e0233c096a9a"],["/archives/page/2/index.html","8703c84a63d101d874f86aacd006b3dc"],["/archives/page/3/index.html","ce9659c93abc0231169560621dcc0d25"],["/archives/page/4/index.html","43e8522c023a822ce59467c63f89e9d3"],["/archives/page/5/index.html","0374d8bc8b72876b2e0adbe94eb495e9"],["/archives/page/6/index.html","fc6b90b33b45a0612973dd2eb71fcc7f"],["/artitalk/index.html","8f3bd3556b8c6ca4fec06c576fd2e01e"],["/battle-beautiful/index.html","b68b3b43321600b8d2d957fe065b8dc0"],["/blur-effect/index.html","14dddd95f160ab9e5cc1147cbb80d855"],["/butterfly-custom-tag/index.html","7bb6ae79107aaf8642c6a2742b564b3c"],["/butterfly-plugins-faq/index.html","9c5fbd07546a5b259edc9e0a9f993c85"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","8174ef01b2448b4a15b43af7e7c1f112"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","a608fc8ca03396e2cd58f05752e04453"],["/categories/announcement/index.html","882d7f8218918d605f966680f34a9ed8"],["/categories/diary/index.html","60f9acd9e623b8fec55ed77e7c21bfc9"],["/categories/game-dev/game-engine/acg-creator/index.html","b8c96d2e8d89a3239300b11463de6853"],["/categories/game-dev/game-engine/index.html","aca2df5b936f9e85ed85c458b8bfe2d3"],["/categories/game-dev/game-engine/lightvn/index.html","e6ca9d2d95372b5f56a8f1e180e4ab11"],["/categories/game-dev/game-engine/nvl-maker/index.html","d325d7e46cd5e627df5e679ea0726c0d"],["/categories/game-dev/game-engine/page/2/index.html","15d2acfd186a77fc6c89c07c12389fc7"],["/categories/game-dev/game-engine/page/3/index.html","1c2b1662ee236053734de33119687f68"],["/categories/game-dev/game-engine/page/4/index.html","6a392d24839e50fc29d8aec3d47af0a8"],["/categories/game-dev/game-engine/renpy/index.html","9598d8c23829205c89a105a6e193c3c7"],["/categories/game-dev/game-engine/renpy/page/2/index.html","7a9b1f60ce90a3e9c191251dccb9554b"],["/categories/game-dev/game-engine/renpy/page/3/index.html","cc7b2d29a2af672fddfb4b187df60e88"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","95f0cbf35f636d31509c1b4808f8742c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","a0321e2445f2a66a453472263de5f2a6"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","76bc78ddf8ecccfba7c6f4c1bf307827"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","d4a6a3cad40b675ddf2dcb0a31ce6d41"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","d373ed3d684a52ea05a3d8085cc91dd3"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","4bb84f6ce9a502153fac22beb95db82e"],["/categories/game-dev/game-engine/rpgmaker/index.html","2708157eba6cf742acadcbd725a46837"],["/categories/game-dev/game-engine/tyranobuilder/index.html","652defd53feaf25ecb0e52920a632919"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","dd1779e79a2bb1063256f8df8273a1fd"],["/categories/game-dev/index.html","da46d7630c0472200d381422fff9c400"],["/categories/game-dev/page/2/index.html","b0affd70174d60c22d9a855e172658da"],["/categories/game-dev/page/3/index.html","f46530f3865ee7e111818b3a82b04e0b"],["/categories/game-dev/page/4/index.html","3db22e28bd03cbe6467fe51f32fe8bf8"],["/categories/hexo/index.html","eb1f6753d90c364875492894f83bdf8c"],["/categories/index.html","b0827e206d7f7e828df74919d563710c"],["/categories/material/index.html","6c5c03ce6f75a906cf7a7c28475a27ba"],["/categories/update/index.html","00dcfbab3f8407125beba9eead561a9d"],["/change-according-to-real-time/index.html","7f423dd00581939998013cbd36912673"],["/change-character-info/index.html","7d8cb7e878817a4a742cd6643fb7bfdb"],["/change-title-after-first-time-viewing/index.html","f54f6e5ea2227ce02724cf448475a2ed"],["/change-title-based-on-event/index.html","76d1a3ff6ac3005f48d6051fc57c73e0"],["/character-interaction/index.html","64e607097422b862e86c34daeaac0f75"],["/character-stats/index.html","bfa0b3c02bf21a60dac68bfb05e14c70"],["/chatbot/index.html","623556909b1a49dc9a547dbf4823e288"],["/choice-time/index.html","1a55753936a9b55b67ab42048d44534d"],["/comments/index.html","0dc06203d7578b0c519e668156a25291"],["/commission-info/index.html","f688e01fe37de1108ba85ab93beb89f3"],["/create-button-anywhere/index.html","3b7e1797542196ea1defad0fd6f0b88a"],["/css/eurkon.css","c9efc0cba7b01545aafd856ab941ec71"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","33ed8fc4ccf549bf0fb7e66c694e0c1f"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","7aa42c802afffb259f36fdeceb0d59e3"],["/css/rightmenu.css","104919b51f69affa82716198495d30cb"],["/css/siz.css","1dc683b7340dbbc672238cbbf629d3a0"],["/css/swiper.css","12852e1fc2bc87173907e7801ffb4496"],["/css/swiperstyle.css","0cecefc3684f025e38920d5806a34c91"],["/css/var.css","53716bcfa8b47e5ed819823f62e6ac5c"],["/ctc/index.html","e5d14146b95aa3f7a9a13eb87d6f3a23"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","08659f42cb18dc319f53cd2c5345e3f0"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","7d6582d151daf94b5698e3254b6cd409"],["/custom-launcher/index.html","bd69a80fdf26c69df600ba4e2c5ee08c"],["/custom-loading-screen/index.html","e90e22b4bb47428cda6edfe304474252"],["/custom-mouse/index.html","1646fef53f4b7978d9045ec9c4dc0a92"],["/custom-music-room-screen/index.html","edf113e1dc276054cd5734a90dc0e31d"],["/custom-music-room-screen2/index.html","e591794ede0ac376f0be022986570acc"],["/custom-nvl/index.html","c667922b0edc1764b8d5df7f3087df82"],["/custom-player/index.html","5a3f4ac8e1926c6a46cf70629b1c489c"],["/custom-preferences-screen/index.html","c70714a0bdd3764177c6ef9cb86939de"],["/custom-say-screen/index.html","df7391377c946808ebf54bdc827c0fb1"],["/custom-title-screen/index.html","1389af8bcf2e90c39c19858407ab8801"],["/define-npcs/index.html","da3ec0ceb505e8d116fbabf486a33782"],["/dice-function/index.html","d71dca2826af906f9ff74b50e661967c"],["/disclaimer/index.html","85604744a7e32272b08a1f2182c942e1"],["/display-immediately-all-dialogues/index.html","534a5fe2229ec213eaa4cba4576dc0f5"],["/enter-name-screen/index.html","9496642edecc422e45b7466386c37728"],["/export-game/index.html","c562331bd17df8436ab92531052a6dce"],["/faq/index.html","49ad01424fa2c9abeb312a6fee5f844c"],["/friends/index.html","a21963e8ff7706ff6889d95f41bb52e4"],["/gallery-template-assets/index.html","6454bc1f48f7b352402bdd856f220922"],["/gallery/index.html","b12821b797e6a289596cfe02b6287f6c"],["/gallery/photo/bg/index.html","db324e0aa13ec8d05ec52745d82f81c9"],["/gallery/photo/gui/index.html","f294e594ef58a94e3dd287114cc56020"],["/game-only-text/index.html","00c227f118767e764a0ec33fca4c4c7b"],["/gui-017/index.html","6bfbdaffc85d896ee95795c63244e3a4"],["/gui-vertical-002/index.html","c8528d9bf88f897d080178adfde5c8b1"],["/gui012/index.html","e5af0559cefc55d784256586f9d2414a"],["/gui018/index.html","4ba3355f2ec59eced80ab14d954a2242"],["/gui019/index.html","2978e2544eddb21da413fca6fdb491a6"],["/gui020/index.html","e5b24797dac16d2071bebf22be20961a"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","ad667b9ba47e6355789454b2a1f9e973"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","4f3e3383d2b239e0aa68bc82d4dd4599"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","2119331dfc0c9411c4ad6403d62fa436"],["/images-tip-function/index.html","7434782b46a405e04f8038667559023b"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","d82893d7e3c187af99fc5ccd273820d4"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","d5b55bff35ab585f5084b97ce4dcf688"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","8010d0b917a5ed0ecbcdea8fcdcf54e6"],["/items-sprites-effect/index.html","0170d70ba7f53d0e7519ee7bfcf4a49b"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","f9519792baee21e40178075c2b98be06"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","e7e5f537f7208d5c05092f13b56e644a"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","930565ef17c6e61bede9116e1056c488"],["/link/index.html","20af3c50df54703c66472e16aca2ee44"],["/make-butterfly-beautiful4/index.html","5f9335fc1965f9cf2a110ef515f3f819"],["/map-puzzle-system/index.html","93979bab669f5f4d52ee89c115a99ab3"],["/maple-effect/index.html","752e5a33537998e99a67ff9872ec99e1"],["/memberships-2/index.html","53f7ff2550a735564c31d03226cb3862"],["/memberships/index.html","4a247fa33ccea4ae68d225a8c325308b"],["/multiple-language/index.html","7a2d2c098571d71c58e800c8f180c673"],["/name-input-assets/index.html","1833160fb07f9e2382310cf850cda14c"],["/new-year-event-2023/index.html","e4467cdc23b60926c9c67e4d931329b6"],["/newsletter/index.html","1e7fa81cd433bee89408d2c48e28985e"],["/nsfw-limited/index.html","20384009233cdc478117b5b7758472c6"],["/null/index.html","50b79ca7f3deef9b01b5548b7bc0c0a1"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","d7ac643cc7e6f9f43c9851b0f9092ed5"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","2fe3ff09bad2d1246354c79e0258400b"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","203137c3810c2ce54654874ffef94051"],["/original/index.html","d99a6c25270fbd9d63a78971835a3886"],["/page/2/index.html","6418d0fc1c0c8965c760dbdf8dea6b15"],["/page/3/index.html","9a6a17016c02e28e41ca4b9ed97cbeea"],["/page/4/index.html","7b279b79dd8a6510b539952392275296"],["/page/5/index.html","07ecf4e3be177ca892f7179f6f83c1dc"],["/page/6/index.html","9ebf7280377a91e3ab442a4c0c8f4eb1"],["/point-pop-up-assets/index.html","2201c5d52ddc9c3ecf67c5ee82175a4c"],["/pop-point/index.html","8068f62366bd0d672f035702bc2f03dd"],["/privacy-policy/index.html","94646d4ecec634861381841eaaa1700e"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","095acd4dce913d4309ca638400ca651c"],["/random-number/index.html","9c2f863df9c95a86fff721d75e9c0d58"],["/random.html","ed618f950d73bf780b7e9402997be025"],["/release-017/index.html","9be18030ceb75167a2c63942101903dc"],["/renpy-basic/index.html","59d9775bae018aefe0d49c0fa6555749"],["/renpy-crash-glitch-effect/index.html","1d3915c30950e00e85c53d70c410afea"],["/renpy-matrixcolor/index.html","796506d638880c650961e9dbcc7cd35b"],["/renpy-overlay/index.html","37700284fdb589f32f218add32adf6de"],["/renpy-review/index.html","199ca4396eef5a3e6d468232e664ca39"],["/renpy-typing-effect/index.html","135af41d3c60ddb9cf67437b7a54f9bf"],["/rpgmaker-assets-menu/index.html","0bca21335e6b218c61a93e129fd86039"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","b860e5a960b1cd3b323000899eaeae0c"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","c49d7ec9c114967e6480dca6824b49c1"],["/sakura-tree-background/index.html","51a08565980531f07bb7dee12784b45b"],["/selected-button-style/index.html","8100b098960354b084dfefdbf05bfb59"],["/service-worker.js","e8b9d68e22dbdd4c5e28cd94261619e1"],["/show-variable/index.html","f926f3424b08f66e179b7c3df65f4241"],["/side-image/index.html","587da03c73637239e14868636122688a"],["/snow-effect/index.html","0e0c548cfe1c15810318f505dac28f85"],["/speaking-animation/index.html","67c27d8f8ca1254c832164e9d80f0ee3"],["/splashscreen/index.html","f76db3997d60d79b3e51520304891124"],["/sw-register.js","98f6616f624c382009eed91e2a5fb3eb"],["/tags/Hexo-plugins/index.html","674ade9ba7d811b9593382d8d4645af8"],["/tags/Light-VN/index.html","b473ed10e92f51ed202997ce0a242b1a"],["/tags/acg-creator/index.html","ffb432b5235f1fa85aa0615deeeaaa61"],["/tags/ai/index.html","4dbbb2654aa3b83e35db50fb1c49783f"],["/tags/butterfly-beauty-diary/index.html","4d67bf59b640cf66133e3eb2b481d944"],["/tags/custom-hexo-theme-butterfly/index.html","c0528f969653cff713489c2dbdd56ee6"],["/tags/custom-renpy-title/index.html","689a95d9002d391f9a50eccaba8fa064"],["/tags/dialogue/index.html","c1651f59b5a7d7a9bb9ffcdabaf35757"],["/tags/effect/index.html","dfc9008f2628089540e3d84ed81d03f8"],["/tags/event/index.html","44aaf13436ff9fc517b7018984198ccd"],["/tags/hosting-own-website/index.html","f572b21346bdee3c8308d286d8679af9"],["/tags/index.html","5f2d144939ae13adbbd3cc0e62c10cfa"],["/tags/itch-io/index.html","0f8a900e392a5374da32a4436df6f8a6"],["/tags/light-vn-update/index.html","aa330f18f9b55f59ab066ad92763cd36"],["/tags/nvl-maker/index.html","182c47bd7f89c898cd3e0bba3de0b744"],["/tags/player-related/index.html","af063cdcfc4fd7fec92c0c005c708ceb"],["/tags/pro-tutorial/index.html","ef7ac4227798fdd5f23d18a37135a059"],["/tags/pro-tutorial/page/2/index.html","1ea47f22c640fe44e5724452642b614f"],["/tags/pro-tutorial/page/3/index.html","4e98de387bbb1f688b13415afbb61e28"],["/tags/renpy/index.html","d5975b3acdec1ea332de4810c852d488"],["/tags/rpg-maker-custom-map/index.html","dc8d14639fa463adc7c80501de3d7758"],["/tags/screen/index.html","4ca27a4f17955fa5258f1251c007dfe3"],["/tags/special-function/index.html","06d558ab37119fbc2903c3f1a2b8b5de"],["/tags/tyranobuilder/index.html","e34259f96abbac444061f7be9753183c"],["/tags/ui-assets/index.html","aaca737fcabf1342d041270504aba93a"],["/tags/update/index.html","01cf1f94c2abbdbaba33fa9983b2ee2e"],["/tags/upload-game/index.html","c5d6cd2c41ade220231a5290ef5fda5f"],["/tags/variable/index.html","db3e987f608b15f8c628a91dcc03f85d"],["/tags/visual-novel-maker/index.html","bcca00aae22e950e58045a6517b48244"],["/tags/封面製作/index.html","e831dbd8e3fe91244c3ce7d57287623a"],["/tags/背景素材/index.html","a3aa7474e1a10300c4e87219c942fb01"],["/tags/隨機功能/index.html","98f2b16ab9aa91b57ba8feccb07711dd"],["/test123/index.html","d9011612a6944a43aea95c40de8bc2d9"],["/textbutton/index.html","6e6d7abf7dfa534de6cd2c8065a35c86"],["/to-do-tutorial/index.html","c50ec9a8dd126f6414afc55787d91d3e"],["/tools/index.html","7aca044e88e762149415dfa5091450da"],["/transfer-to-hexo/index.html","0e7946cc211b6acc7bc446d0ddccfce7"],["/tutorial-update-history/index.html","a800e763586c27f6e0cd77673d13b155"],["/tyrano-name/index.html","3b6a7fbcc6af561264ebeb205361338e"],["/tyranobuilder/index.html","ef4aaddd69820934bc2e97dbe815b5fa"],["/undefined/index.html","ad2c56ea0358a0652afe050baa4a43c1"],["/update-20221211/index.html","457e847fd3c5ade766c5fcf0a63c8488"],["/update-20221218/index.html","a5fab76b9f9dec2b29ca0a9d338cf4e5"],["/upload-your-game-itch-io/index.html","8261ca4bb84aac4b71e7846e0a62ce39"],["/use-list/index.html","7b9f1dfbe8d3b58f85f5586b43fd1fdc"],["/use-nvl-mode/index.html","b9d455f398845f5fb303e6e4fbc84912"],["/useimage/index.html","30a651fb453ae3cf4b3f094d8ee8ad55"],["/variable-change-image/index.html","e08e77318a1a37a74dfec75452e3cad8"],["/variable/index.html","a7be3cffb641f058c59565753537fe49"],["/vnmaker/index.html","5df2d80f549567553a47700273c62b8e"],["/weather-effect-tutorial/index.html","3610fbcad432bcecc4a8c3596036da6b"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
