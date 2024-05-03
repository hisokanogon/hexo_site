/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","a285a1a22f22355f2addf9668b6640f9"],["/2024-future-plan/index.html","399ba165e5683e9de4c2e530aab56e04"],["/2player-battle-system/index.html","cb42452572e54870ac4d982400a4185d"],["/404.html","ee9eced26683695848d2f026c70b2d59"],["/about/index.html","9e77222082bacccda7d9fcb6e1841c02"],["/acg-creator/index.html","7f1444732172a4f40cc45f88fd9d2a53"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","fc15741843a6e0e489d1ef8844e48661"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","d86a89125615e0e82e014e4e57183695"],["/animated-title-main-menu/index.html","af97310f606ba9020304f5adcb9a2603"],["/archives/2022/05/index.html","5a69b01a78032bc635dea7587a4d6ff3"],["/archives/2022/06/index.html","13b90e4073e4ecc789881e6d9f8769c9"],["/archives/2022/08/index.html","9323502c4ea925de197ee95ba5fe980f"],["/archives/2022/09/index.html","8f26dd0f074854bd188d6977be6f44bf"],["/archives/2022/10/index.html","38bd8682958df0b4c6f90c288c9c0b17"],["/archives/2022/11/index.html","38f1ef1fe887cb0f656fddcc8539236b"],["/archives/2022/12/index.html","4cb0c64f48d11690add71f7b6114d9a7"],["/archives/2022/12/page/2/index.html","d405f5ef1a40d7b469ee7086d38f66ad"],["/archives/2022/index.html","b00db8ce80d3bc76d871f6f5a3ced663"],["/archives/2022/page/2/index.html","ca779d7bd400a9d0bba136cfe5c7fd11"],["/archives/2022/page/3/index.html","ed76e7f5dcd2c77176bc91cc28cd4863"],["/archives/2023/01/index.html","cbe6b8713e321cf0e4e1ed0ab06013b5"],["/archives/2023/02/index.html","4735946f8ff85526f878de08502ddcac"],["/archives/2023/03/index.html","846e71fa95787410a4283100e209590f"],["/archives/2023/04/index.html","927166792fb6892c1a943006e342ef0b"],["/archives/2023/05/index.html","6b1df7a1609633a46519d2f510a56d36"],["/archives/2023/06/index.html","cc6be09f9c49acf37ac88e6496b7b9d1"],["/archives/2023/07/index.html","d059f6b882077ea0bc13f4f28e735da8"],["/archives/2023/08/index.html","e671f1104d9c426a9d46ee6e0197f982"],["/archives/2023/09/index.html","fa805bfcfbc81642f05f571aaa4d0df4"],["/archives/2023/10/index.html","b8e9e05b446580c5c20aa47dfc06fcd4"],["/archives/2023/11/index.html","37a841a9fbf79fff9d26e6e80f4bbb91"],["/archives/2023/12/index.html","83fb4954da013da06c7f9eb234564368"],["/archives/2023/index.html","f7ee840398ecea968da9f2bd8e10b7ed"],["/archives/2023/page/2/index.html","595783d18d1e40f8af9b0ea36b12c005"],["/archives/2023/page/3/index.html","496689dad5fbb21918f600079648e257"],["/archives/2024/01/index.html","7d82bf48b4035526522879e93e4c11b4"],["/archives/2024/02/index.html","09dabb148c08a20aa0c0b77b36cd1937"],["/archives/2024/03/index.html","7445d691062e0d83b4c96ef9324371fa"],["/archives/2024/04/index.html","0da0e4d23ff32bb4d6253684f988ed4a"],["/archives/2024/index.html","254ed9d0ece9f49f58536cd6692f4a76"],["/archives/index.html","335ea608746c11cb21377d355e394551"],["/archives/page/2/index.html","5949b848b16e776e02218bbf413e7450"],["/archives/page/3/index.html","cc2662d59bd098796c93d62d9df5b796"],["/archives/page/4/index.html","b734e1f3ce9b68ccf5921e202f2e5adc"],["/archives/page/5/index.html","f479fa7eeb8ca2e62dbefde1efc788ef"],["/archives/page/6/index.html","8ed6ab56c56a2ce4921bf4071a801f9d"],["/artitalk/index.html","384c7de9be6004620004f1a5d87d589c"],["/battle-beautiful/index.html","aa4f13650daa1b86b400903b93851198"],["/blur-effect/index.html","624e60ff18b36c534fcf9c93825cfd41"],["/butterfly-custom-tag/index.html","cfdc33a68bb22bdbd2e7b3dd5054fc32"],["/butterfly-plugins-faq/index.html","ae601754818098fa92f024a6f8523898"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","eaa8741c11db5b2eb08865034b8c6a15"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","942c07681597d24fbdb8d73f0856347f"],["/categories/announcement/index.html","265a29ab5c9d4e1dff3b013e3689a546"],["/categories/diary/index.html","baa8f86fd774c0251ae9fbf97eed84c1"],["/categories/game-dev/game-engine/acg-creator/index.html","f5d7fed1a9a7cd6969f8c8e6a0d039ea"],["/categories/game-dev/game-engine/index.html","2f987d809e859926d13ab503cc1831e8"],["/categories/game-dev/game-engine/lightvn/index.html","29ce440c9b7227e3f7b2b63598120e3d"],["/categories/game-dev/game-engine/nvl-maker/index.html","5d1fd81bbd3d1ce2a59c77fa18740cfc"],["/categories/game-dev/game-engine/page/2/index.html","ef30a0807b1f2453d814543bfb92fb7b"],["/categories/game-dev/game-engine/page/3/index.html","360ee882356111ec670b7d94fe54ec59"],["/categories/game-dev/game-engine/page/4/index.html","38c8280825ba6247b4f662653015455d"],["/categories/game-dev/game-engine/renpy/index.html","da8b519420e9e41ba5aa8b867d43c12c"],["/categories/game-dev/game-engine/renpy/page/2/index.html","f7f6945b4c9a533dd8a631206943237f"],["/categories/game-dev/game-engine/renpy/page/3/index.html","a37f3ea4f5509c64faa0e19b4d11d7fc"],["/categories/game-dev/game-engine/renpy/page/4/index.html","6a03da5a50c79a73bc1eda61725bfc3a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","c1a0ad097616f74bf848ee8a1bb09960"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","903b12dcf583305992fc4a74a488c4f8"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","1e2e72d0ae66d261f4137cae1616cf0f"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","4e9090a30f9536d6461e4a288badfd0d"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","1ca63ecdcd57eb71a4c16c07486522c5"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","71abc2a06b3b906044a2693e92365d83"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","880fe762cef52f3f3fca4d33456d9a37"],["/categories/game-dev/game-engine/rpgmaker/index.html","362702b89b6ad3f9e52ad934a1db10a9"],["/categories/game-dev/game-engine/suika2/index.html","60a6534015abbc99951f40cacc74f41c"],["/categories/game-dev/game-engine/tyranobuilder/index.html","ec704b7a496d407d48e21f7e27070c0e"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","e1bacdf84062d068975d092cdd72b4eb"],["/categories/game-dev/game-engine/webgal/index.html","874e550a320019189747e948a3230fc6"],["/categories/game-dev/index.html","0fde0f1d504cc619c22216fec46ad664"],["/categories/game-dev/page/2/index.html","5107227078f7c59f491f5b8bc7cb0369"],["/categories/game-dev/page/3/index.html","db7b1a16d265e209cdfb215a55e98e72"],["/categories/game-dev/page/4/index.html","de2c1bccf7e091a603560971c13a8815"],["/categories/game-dev/page/5/index.html","5d4ffc2f8beee9995999f7e0dd844e3f"],["/categories/hexo/index.html","7ccd6230afab942ce1328372ff4ec268"],["/categories/index.html","76a4c812a104a5951cd1f4117690ce29"],["/categories/material/index.html","2a4c59cdcf76e20ebbf7f1898329fd7e"],["/categories/update/index.html","21f36ddbde138e80ce72d27636ddc19f"],["/change-according-to-real-time/index.html","9c52d03ad6f0fb4eea6bf0adf0a29234"],["/change-character-info/index.html","9d8b190c751c37be84c984dd382019a5"],["/change-title-after-first-time-viewing/index.html","7ba4fca11444daa3b685fdc0f9e71c8b"],["/change-title-based-on-event/index.html","330199c18f37ab6324db327404423e81"],["/character-interaction/index.html","62a8a106f9e22db84a809480813d0880"],["/character-stats/index.html","2ee97e0ca940751936e5cf1693d4c422"],["/chatbot/index.html","d30c42d53f339928912cf1f28919ba6b"],["/choice-time/index.html","c65e387691cbaefb184c7e250e107f8d"],["/comments/index.html","a6da00952b82d08f7d9a2d872698b0c9"],["/commission-info/index.html","b8dd8c7bd97246bf1abd82ba90d92554"],["/count-login-number/index.html","8accb48ecdfb7a214b1418ed9004483e"],["/create-button-anywhere/index.html","21a044805467193276818b813f06360c"],["/css/eurkon.css","3c87c04a06931967aff60c45161c2d32"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","240a968055084720d83c84baa0bb699f"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","50933fc6970dfe9b991d25589eb8aa21"],["/css/rightmenu.css","920429f30c1c334bc98ac3989229285f"],["/css/siz.css","ba918484782f0a1bb058c710afcd2673"],["/css/swiper.css","5a51ea2c4869c36fbfa0fbc70d1d84ae"],["/css/swiperstyle.css","55e3ac7a66c454b60f7428de07c4acde"],["/css/var.css","3a45c27310cbf2ca1d565f33be32d24e"],["/ctc/index.html","aebb99227fb86e492725e6e5ec1652f8"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","e78751316f80fb8c3e41c80581b15ba2"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","8cb59f2968e14910fbea647766fc549d"],["/custom-launcher/index.html","7a336b403e794e7b33cb5cbc842b17eb"],["/custom-loading-screen/index.html","4d6c02a72656c92771733bdbdec10f95"],["/custom-mouse/index.html","f23ff8ba3fd9628c2613da920bac0830"],["/custom-music-room-screen/index.html","7fb5ccf1592b182f60df2d2b6711ff04"],["/custom-music-room-screen2/index.html","d947dbc08720a7b6a0bd877f5a624d89"],["/custom-nvl/index.html","7b5b6e8dc7f03bd078bc9ff48d83a3f2"],["/custom-player/index.html","d23b2051795b02b61ace445f5115a796"],["/custom-preferences-screen/index.html","64e6626a99434de989f37205d07cebee"],["/custom-say-screen/index.html","30905f395061a0d9c05846371c22ec87"],["/custom-title-screen/index.html","923c6b22279157822b11cfa505c5076c"],["/define-npcs/index.html","c65f6cad60f1d4c2006fdc5f0103595b"],["/delete-save/index.html","1506ed99a6a9bb1a4e82e4f80c2ba450"],["/dice-function/index.html","9e1f4419e64bbb5c348381f9a5b363ad"],["/disclaimer/index.html","d17e0e833f2ef596661a6bac4b18066b"],["/display-immediately-all-dialogues/index.html","17684b66721950cb2400a85b76cb1445"],["/display-real-time/index.html","bdebf26b928c2caab137f381ea325dbb"],["/enter-name-screen/index.html","fbff393d08670971dc9eaf1fa94ac63c"],["/export-game/index.html","ad60c8b804b238ab2ce740497d1f413a"],["/faq/index.html","0c475acd9520620025e24129c8cec667"],["/friends/index.html","2f0979b331a6a78f0eeeb0d0a05d9c0e"],["/gallery-template-assets/index.html","192eb535faed285fa9a0e9a82bc08c9b"],["/gallery-template-default-ver/index.html","a9435173c27bf5df90ca7a92a9e166f2"],["/gallery/index.html","5c6e538805a8edbea594c43c3ae71a11"],["/gallery/photo/bg/index.html","f4621bcaa472550db674fccd6f4c3a2b"],["/gallery/photo/gui/index.html","c70a5c40d0612b4199829d43d7d108ca"],["/game-only-text/index.html","eee66cf017190be89e4928a71b9ce61a"],["/gui-017/index.html","053a9fdf39d573b262bba90e8ed6fa51"],["/gui-vertical-002/index.html","7b7a5221edcd25d0cb01b25c9388d759"],["/gui012/index.html","652a5524a156bd962418a13cf2f8018e"],["/gui018/index.html","1cd17bb7fa51e6353da434b9b1111cf3"],["/gui019/index.html","21f5287e22bce0534cbac892106e6a25"],["/gui020/index.html","73dbc72401efeec33b2486394eeea675"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","bf2646e455e8d855037ecb35b422cddf"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","339ed441bc3c6f73a7e811177be92996"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","37561527244485295515803b61bb044b"],["/images-tip-function/index.html","081eb22d02c415a61a6a743227c793b3"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","cac6bf7baf1d7548a1198fe471f35013"],["/index.html","265ecbf925101aafc5f5f7279c46063e"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","896504597d0f4666c27525e40de1fd74"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","f4cf47e6f24855e2166837b4d63f37c9"],["/items-sprites-effect/index.html","ceef5b6ed6823b0505aca1c8e21d2557"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","778675efaeffcb004f91b83baed0ff86"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","d559aae6e67a9d9699ae6501731ac40f"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","ca4d3c2fb195a4b7d35c3473be3ca54d"],["/link/index.html","f8d850b4e26bca65c180d7a691798879"],["/login-reward/index.html","16edc159ca299f008c917e2d3912fcb0"],["/make-butterfly-beautiful4/index.html","b6e634cb9c77be96254023f6d75f0815"],["/map-puzzle-system/index.html","3b6ff0dc0a06c5dbafb3617c7624182c"],["/maple-effect/index.html","9a84a70bd646efc95716980a075d836b"],["/memberships-2/index.html","c1574135415d348373bbacf07ab3d87d"],["/memberships/index.html","4a9fa3c540e0742d5b095004d41afacc"],["/multiple-language/index.html","70a42d863749b7ad358f6d45fe2509c1"],["/name-input-assets/index.html","89f58191fcf6e79ab20048439a69f6c6"],["/new-year-event-2023/index.html","1b66771ef780ff44cfa897b0be34d2d7"],["/newsletter/index.html","f87b97b3f2020a5a05e86fc29416a326"],["/nsfw-limited/index.html","d9b9b350e97bd55946483620dc5be5e9"],["/null/index.html","b8c5d6eed501f8b2d37f43454cb03e6b"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","57dd00280eeb1ea5aec7e3f81e1a3aa4"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","a9a9c8e3e0364f08cd816d958d50b7dc"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","55118dc3b101dda1aeaffbe52b93d38b"],["/openchatai-renpy/index.html","ff24ba6ebf6b72da157396570158ae33"],["/original/index.html","833ca8f13252aed1cc586f714a19f4b0"],["/page/2/index.html","97efab57c5a707e20a75fd6d10e09f16"],["/page/3/index.html","2afbfb6559fab3dd71f06be8792f00bb"],["/page/4/index.html","343371c1feab65b67d78cbb0a358cfa4"],["/page/5/index.html","44f121ca8f4b64ea0b94763280323e8b"],["/page/6/index.html","60722400421726887aeb3ba9daa36915"],["/point-pop-up-assets/index.html","086322c0e66a9c26382754156cc3b6ad"],["/pop-point/index.html","71cc85935861fb3751be443a8bed81e9"],["/privacy-policy/index.html","a0be2fef57a3c27d2bb83933986fcedb"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","54a04aa39628cf782bba6cc0fc8f4f2b"],["/random-number/index.html","b5120c4115317fa2cb001cd932e7d59e"],["/random.html","fa9c6ecc266ca121f6436ad2dfe8571c"],["/release-017/index.html","52c48cbfb1d6cea641401305845fdf47"],["/renpy-basic/index.html","3137fe64a83606a302ecc2c468cc6978"],["/renpy-crash-glitch-effect/index.html","4de035ec855e96554a0e7b4f2bd9eb6b"],["/renpy-flip-image/index.html","3871115b38d21e75880f0783735a60a4"],["/renpy-matrixcolor/index.html","4dd1ee72d4541f79178e7396e5b96a86"],["/renpy-overlay/index.html","96c534d299b40273dba5c8de0d0342dc"],["/renpy-review/index.html","ace2d53e47efeca65cc3976d14e4701f"],["/renpy-typing-effect/index.html","00a8ec1d1d20928d493d1faf0623d257"],["/rpgmaker-assets-menu/index.html","dd64aa4899aac4205b79608780b28cb8"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","777e3744dbb3e207ce0875efc2bd35e8"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","d784e9bfd7c73862065700ab0cd01fef"],["/sakura-tree-background/index.html","23f068bd5acf2e523c7ceffc5e5e94fc"],["/selected-button-style/index.html","f57b3c348d9571cc39ad868c5fd5dd56"],["/service-worker.js","b5fa98e68b661368a5cacebd04c9908c"],["/show-variable/index.html","c3df171bb688a2d2d4111c421e745d74"],["/side-image/index.html","c7c0db238930f4a8c2e807e54de88ba4"],["/snow-effect/index.html","52cc90b66a45533affeb94ecfe2d1395"],["/speaking-animation/index.html","c8ec0e697a847adb4f26cfb5884ef250"],["/splashscreen/index.html","4775d3efd506b8fd9013b5d8f636b7b8"],["/suika2/index.html","b8e383cb375672bdf382d7b3bac32737"],["/sw-register.js","c4beb6256ecc2bb942e378ba624ac2fc"],["/tags/Hexo-plugins/index.html","6070b6b9000a33e9ff6019246882c257"],["/tags/Light-VN/index.html","6ca02822140f17cefb5ac584048ad303"],["/tags/acg-creator/index.html","509385614af0ff1b7cbb1ebb0a9ad75f"],["/tags/ai/index.html","5a09c09e79a4a14fd2c515005185bcb4"],["/tags/butterfly-beauty-diary/index.html","a0460ddfa72732155a07669f618f7a4a"],["/tags/custom-hexo-theme-butterfly/index.html","10c6eee67ad639054fb10bd77232cd07"],["/tags/custom-renpy-title/index.html","ae9793b17ce3c896a1e61abf0ab22965"],["/tags/dialogue/index.html","0ca72911d9cd7af54c77b380107b831c"],["/tags/effect/index.html","a4316094e4108b6a280aaa10e3485fb8"],["/tags/event/index.html","df42d9b7d319296031d09cf46d26a7b1"],["/tags/hosting-own-website/index.html","81b5ea565029806c4235196dfe330bec"],["/tags/index.html","89bdc4ec180fdfd76e94784f14057ddd"],["/tags/itch-io/index.html","bb79d97048e4b115c58888700ece61cd"],["/tags/light-vn-update/index.html","b2baca1ea1d60355f104eea969f741d7"],["/tags/nvl-maker/index.html","6372ec60cbcff518c343bfef8cc39e4f"],["/tags/player-related/index.html","ec393be126d9d8d5342d45e8221a9337"],["/tags/pro-tutorial/index.html","bbcaa59b164d43ee0c4ba0b4c70639cb"],["/tags/pro-tutorial/page/2/index.html","e69e8de5f51f9e29719278dd08a929b5"],["/tags/pro-tutorial/page/3/index.html","1fee3ca052c3a1674424e3847dda71fe"],["/tags/pro-tutorial/page/4/index.html","220afaa2b87b60005f4e00d2d63f7ff5"],["/tags/renpy/index.html","e098cb03fc63922c2099f878fc0c7b2d"],["/tags/rpg-maker-custom-map/index.html","59a2b69afd192a40645f881ef2f5a11d"],["/tags/screen/index.html","f8de2e099168633849041c8eb71c2adb"],["/tags/special-function/index.html","c77427127c4500d82bbcd033aaae589c"],["/tags/suika2/index.html","fb68b415985caf151f94e90075871199"],["/tags/tyranobuilder/index.html","93d92259a5b70093e02ffae769365c45"],["/tags/ui-assets/index.html","75032e49bf7a81d324f903a280b180a5"],["/tags/update/index.html","a0bf5f11ed44aedcdaf7dfcf146d8af5"],["/tags/upload-game/index.html","703741d7fb40c884c508c1a7c2973571"],["/tags/variable/index.html","3df14d8e86ed3c21c9009a84836252a8"],["/tags/visual-novel-maker/index.html","35d43b5a8ad45b50b98b450b3557f76b"],["/tags/webgal/index.html","0ae1f15d484fe0d4ec1262cf48460cb8"],["/tags/封面製作/index.html","61ccd98f17a1f118d8acc7e1753409b0"],["/tags/背景素材/index.html","22b5a5015d3c02b30142f6991f327403"],["/tags/隨機功能/index.html","3d265112d9c2760184977712b5fbdb17"],["/test123/index.html","94f469b312c6d7c992ebc883831801c7"],["/textbutton/index.html","22229fc3b0c6245bd63986b52df3d828"],["/to-do-tutorial/index.html","948641e80ff814721a6fe022a1dea897"],["/tools/index.html","ca23731c19132ff883deeeb5fc659faf"],["/tooltip-function/index.html","d777f61d6d5b716c7fad75970dbe845c"],["/transfer-to-hexo/index.html","1b56ce607cc56569a0604730ebacc35a"],["/tutorial-update-history/index.html","93d960f88e96ed8d8e022c8c64200a61"],["/tyrano-name/index.html","b8cb17e59a36d777c265e124e5c998bf"],["/tyranobuilder/index.html","205f77fae81291126076a9d34239c190"],["/undefined/index.html","b68890e4a8b31f51140bc4121ea632c5"],["/unskippable-video/index.html","e75501a747d9a8b54ed0509279a9c70c"],["/update-20221211/index.html","f377600873dc15b763ba640922d30302"],["/update-20221218/index.html","8f2097d630b526a10ffea831f029b3ba"],["/upload-download-save/index.html","a7526018cb715373ee7be223209b8bfc"],["/upload-your-game-itch-io/index.html","66e5bafb4ba8ad52420a33a40ba84389"],["/use-list/index.html","6671e1a6ed8cb472ff721d8ad4a65ef9"],["/use-nvl-mode/index.html","62f999c26e1bbd198862eb0bf3508d79"],["/useimage/index.html","e2cb9dd0b872c0855a1f11444dc193e7"],["/variable-change-image/index.html","aeda026032a2b9af30e1a03dd3d315bb"],["/variable/index.html","408cbe9c43c19c9e762e78eb23ec483d"],["/vibration-function/index.html","6bab58d00af218e34a95b41818aa4510"],["/vnmaker/index.html","e1b093cd460c25bc5b6daccd5bc30513"],["/weather-effect-tutorial/index.html","985cd1de691f36f11fec682b9eb0b469"],["/webgal/index.html","702a45a8893ea83a7ef86c617efd72ee"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
