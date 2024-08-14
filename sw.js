/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","073913f6b6720a975480938d1e113cca"],["/2024-future-plan/index.html","0722d69c88af309ee77bc2a07408722f"],["/2player-battle-system/index.html","85e871cb597ca5af5842a789452019dc"],["/404.html","b4bb46dd01b9e4436b9a4ea515b7093d"],["/about/index.html","2d6e0eb4e50d7d7e94bc21323b1e99d2"],["/acg-creator/index.html","44b1332cd01638e0138dabdb07bcbada"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","ae6e3f46ce2e99e9362705ca81769e28"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","6e2d4b95c7a679d299d702e92c90c6b0"],["/animated-title-main-menu/index.html","37fe8fe0f5f86942c5c2d203f56ab281"],["/archives/2022/05/index.html","1534c00d42e1b4cb629cb43ae0dd7f80"],["/archives/2022/06/index.html","abeaf90489326c1aacf32a0c51b63c4a"],["/archives/2022/08/index.html","ca08e3cc7e1147cc600fdb9bdced53cd"],["/archives/2022/09/index.html","de0c2f91a2ee75969a0833dea1f0678a"],["/archives/2022/10/index.html","bb3ead3b5aa34197a409b91ef551aa07"],["/archives/2022/11/index.html","417d92cbf8df55ebf198d4634b26f0c5"],["/archives/2022/12/index.html","bc951c8f18fca2c109906ce6694fcbfa"],["/archives/2022/12/page/2/index.html","4c66cb9028768fce096ee7ebd3c57c70"],["/archives/2022/index.html","828072ca5da3fc15f569e020420f1230"],["/archives/2022/page/2/index.html","568c9dd9f1e53bdd121f9db7dcee482e"],["/archives/2022/page/3/index.html","28faa49832d0009b73fc2e4ffd52bfe2"],["/archives/2023/01/index.html","253f0137c2f1a5476c7fc9625fe3473c"],["/archives/2023/02/index.html","113f6c27d98f3f2955743920da45df53"],["/archives/2023/03/index.html","d555802a4d3af075f56fb731bc2461a4"],["/archives/2023/04/index.html","01797b20fa43101a026ed8f983c7d05b"],["/archives/2023/05/index.html","f0b4971b76dd44bcf20148eeca2ccad0"],["/archives/2023/06/index.html","a3765b7377ecbbfe1c4fe119b4bdd68c"],["/archives/2023/07/index.html","0a1b4e27226fca95d471b149e20a38d0"],["/archives/2023/08/index.html","37dac0286d7d320e990601518fb065ad"],["/archives/2023/09/index.html","53bc19f452a7efa741998fe609d485ad"],["/archives/2023/10/index.html","1d6b5335a82bf8ddf1360052eb3132e3"],["/archives/2023/11/index.html","3e0a80973b24b75e55c3d7b98109e8e3"],["/archives/2023/12/index.html","53d9d3718717f7c0a06c4bc863b02458"],["/archives/2023/index.html","ebcfc132762c56d8c8141b69aa4d82ff"],["/archives/2023/page/2/index.html","001b5cd01a724baa000923ca4ebe7c2c"],["/archives/2023/page/3/index.html","51d47f544fa724897e04f3b8b0d746b8"],["/archives/2024/01/index.html","6f93e1325c4ab74bc51c30e31b4c396e"],["/archives/2024/02/index.html","6fe2a834f66e76553af1cb86eeef5992"],["/archives/2024/03/index.html","41aa41fea7783a811b922f02a4128db9"],["/archives/2024/04/index.html","b50321be0e3abdc8c2f90503b90f56e2"],["/archives/2024/05/index.html","cd94d059c2bd423281181578f3ed79e7"],["/archives/2024/06/index.html","a7b7269385b9fc185db1655a11571a59"],["/archives/2024/07/index.html","d24069c576db8739dfb026d544a28d7e"],["/archives/2024/08/index.html","c6834b992e3c852af8dd94a233b19353"],["/archives/2024/index.html","9720bb065b39844656df7017aaee8670"],["/archives/2024/page/2/index.html","803ae16408f4a2a996db2aafc2b08856"],["/archives/index.html","2212ca04eac57edf0db15f76af24802b"],["/archives/page/2/index.html","707fb701fe6739f5ab1ee69bd5b2e766"],["/archives/page/3/index.html","bc84217483a58b386af0ae2d722bd2cc"],["/archives/page/4/index.html","13f62728e3e74e65b52d251df74a3f1a"],["/archives/page/5/index.html","6509d031356036e43e490cdd80f0d835"],["/archives/page/6/index.html","5d5e371709e2bdaecd08482c76d1c2d2"],["/archives/page/7/index.html","285b39c3c5838730d6661e9e3bada8cb"],["/artitalk/index.html","843c791dfb73cc637fb0e4fae0007493"],["/battle-beautiful/index.html","c317045cf4def97be333edc02a0137b9"],["/blur-effect/index.html","74c1b9d9eb73f95aa7fc3db769928dc2"],["/butterfly-custom-tag/index.html","674652a8779b94cac800056eb2697262"],["/butterfly-plugins-faq/index.html","0d84cd3ac2a5099f0cfbe1f7bb8b8371"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","193a5066be86ef363529eccae88662f5"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","77a19c893bfba0bb1d6c005cd3291707"],["/categories/announcement/index.html","4f81cb2efba0e84718c52695e829db87"],["/categories/diary/index.html","112ebdf027a0c2b4d8b1f62d20bb5e79"],["/categories/game-dev/game-engine/acg-creator/index.html","7ba72cd6efd0f83c0577ef220d889e45"],["/categories/game-dev/game-engine/index.html","428d8fd9e8a99c91fda7a5a2f08b0821"],["/categories/game-dev/game-engine/lightvn/index.html","ae798443257799882265a7c9def5a1f9"],["/categories/game-dev/game-engine/nvl-maker/index.html","ce386467a5bd169c42e6fed843399cdc"],["/categories/game-dev/game-engine/page/2/index.html","5dec97541c035d7dbad48e0c5c0d5388"],["/categories/game-dev/game-engine/page/3/index.html","27bbf39ab806583c72a6c210faa6238d"],["/categories/game-dev/game-engine/page/4/index.html","1da75a7509277b1b2bb000cc9d3e1a2f"],["/categories/game-dev/game-engine/page/5/index.html","dab8d2789082bd32615e010764d28f2f"],["/categories/game-dev/game-engine/renpy/index.html","d5b70db0d87f67fb9cb22dae568f044a"],["/categories/game-dev/game-engine/renpy/page/2/index.html","f1fcb7fe3ff76ea492fbc5a628cf4303"],["/categories/game-dev/game-engine/renpy/page/3/index.html","5eb168e5e3b3517193e8c76ef943adbf"],["/categories/game-dev/game-engine/renpy/page/4/index.html","1289574f25c0493160b92f0b5b147f0a"],["/categories/game-dev/game-engine/renpy/page/5/index.html","54d0a1d4dcaa6dd623efe4447bf7d57d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","95caa55539bd62053c92b5d13d65ef98"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","98e4d46b74ed4b8fde5e8cc49238c7a8"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","3822dbea5f0acd79f2a60bc804c738f4"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","f425fd2e07460f1b08bbc57db9a0885f"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","948084925772139742f7c9c362a2f6ca"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","90a4bffaa34d53a6341d619b5b81f9e8"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","8052f46e21b05d9f16feb81859c5dc6c"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","4ba68ea0c3ed76d1801855536d65b186"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","7539e2bb5924d435207d843cbef7e9d1"],["/categories/game-dev/game-engine/rpgmaker/index.html","607ea77d144f3e20c1bc8660cffcb618"],["/categories/game-dev/game-engine/suika2/index.html","36ce36750c1e0048249787c992fd14ef"],["/categories/game-dev/game-engine/tyranobuilder/index.html","1ea36a40de95e58e31b8717b6c3d63b3"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","caccf3a21b774202d31d76cdf0380b17"],["/categories/game-dev/game-engine/webgal/index.html","3eda9998f5678548f8bb89412593e3e7"],["/categories/game-dev/index.html","ffaa1025b93d07fe40d1babbd1043fe3"],["/categories/game-dev/page/2/index.html","6904a99b2b11b8d9ddc6f1ea93672a3d"],["/categories/game-dev/page/3/index.html","fba86874642dcbda42f6a37fd62e11f9"],["/categories/game-dev/page/4/index.html","5fc2a680747fe28df544f36185f84b03"],["/categories/game-dev/page/5/index.html","0381776741f6d950fb90f45a20557304"],["/categories/hexo/index.html","8c17d094513073504b371f44df101434"],["/categories/index.html","82b7178aa2de481dc88dba69b1adb0f2"],["/categories/material/index.html","06c4a79e00a791d8e4d268dc5757628a"],["/categories/update/index.html","902577ad4f6f50aab08e15fe8d243bd5"],["/change-according-to-real-time/index.html","9fa7ea7f9d87c1e1cf45cbc809b6ce53"],["/change-character-info/index.html","275cd192035608b0f18308aa6ad4be96"],["/change-title-after-first-time-viewing/index.html","ad268f6ed53c70a5f1d19b383c535b80"],["/change-title-based-on-event/index.html","00e16e8d9c4074ce4b0eb112834bf621"],["/chapter-selection/index.html","a9e7a9260c73d9d9de0c4e447606deec"],["/character-interaction/index.html","16e1918c0460f1a966104a665382986e"],["/character-stats/index.html","28cf59adb508c632e879f146d8cb7055"],["/chatbot/index.html","d60bcb93351473683df3e532625643db"],["/choice-time/index.html","37b4951ff127e6f5523ae3dee404298b"],["/comments/index.html","19fe0117de419eae444e3ed25e8dd39b"],["/commission-info/index.html","7b635080d533cc84f82503bd39bde988"],["/count-login-number/index.html","b688130770104076c66e01987312a443"],["/create-button-anywhere/index.html","cc1720dda1d1db1d44a78196940a920a"],["/css/eurkon.css","3f3288c55f4f257be9798019e5794663"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","4235d966b89131176175ff8d1028fc14"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","07ae60cddf509ac09cb61197690d58cc"],["/css/rightmenu.css","d62706117e16538c32449d14304a280a"],["/css/siz.css","f0950060b5a92b9127f20d3315a311cc"],["/css/swiper.css","61229468773f46e88a0323fa8bed9ef3"],["/css/swiperstyle.css","a8fa5ce656d651ef881143e0f4436a10"],["/css/var.css","f3e469296067d57be4c31e14dab17a81"],["/ctc/index.html","547069ea1c1455b9a20fa89685f546d8"],["/custom-credit-screen/index.html","7ceb04875eb8d37af79d5140a4ecb241"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","8b86d00c070fe3f3551be57ac53fdac2"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","6b8a68e11e10cd64edef751491bde2e0"],["/custom-gallery-cg-screen/index.html","7c171cfda6a1caf8a7ebb8346497083d"],["/custom-launcher/index.html","32105a99efc95ac5d7500f59f505f959"],["/custom-loading-screen/index.html","7618486d7eac4ae3fa4a6b76de27b4f1"],["/custom-mouse/index.html","66c64b8753f69470fe3ec0fb02dc260f"],["/custom-music-room-screen/index.html","04249c1f8666a0169219b846f982c505"],["/custom-music-room-screen2/index.html","7fa50924171173f8a69265a92f5559be"],["/custom-nvl/index.html","125968664e726ff4751aab5c2091f276"],["/custom-player/index.html","16226f1fecf29dfae7d87c5029dc47b6"],["/custom-preferences-screen/index.html","896fdd3580cd18cb7e3a3b8e00d73210"],["/custom-say-screen/index.html","d33eba760f2156040416692cf4658c87"],["/custom-style-bar/index.html","06467f56fe0a2b2a80a80e7435b60eed"],["/custom-style-box/index.html","851e75281af36a2897bd505501f5447f"],["/custom-style-button/index.html","c865e65e80402cd9b16d39c8f5c27f8c"],["/custom-style-grid/index.html","8b015f95dc29c1d50d70629b756f69b1"],["/custom-style-position/index.html","57764b1b001bb4263bf0f33be16d749f"],["/custom-style-prefix/index.html","ed0928de4bd28d392890e91b440d5c22"],["/custom-style-text/index.html","7b2bd45d3c6d99428a7278220dfd7861"],["/custom-style-window/index.html","70771865d007811f8faeb74e3d101d7e"],["/custom-title-screen/index.html","67af2a2a945de8f71c7b2270c21d822f"],["/define-npcs/index.html","57708b17501211ce6046991eb849ceef"],["/delete-save/index.html","5d38cded88b0b9a1040ba99b7e1f3ef1"],["/dice-function/index.html","d8a8440a55c237795cf8d587f286296e"],["/disclaimer/index.html","91978e35a80642a6c626a948f618f0a9"],["/display-immediately-all-dialogues/index.html","c55a8fd4bb3957f63f2f3aa5f220792c"],["/display-real-time/index.html","36a3196a1c4fc6bd6ae0562478652c21"],["/en.refund-policy/index.html","eb821e01aace4bbb1f50b6184bbdcd25"],["/enter-name-screen/index.html","522ee1fc7f35ca17bad5162d2aabed4f"],["/export-game/index.html","847936a5b08e3b5e480fee41db7e001c"],["/faq/index.html","8394d550a375e82f1c653b5903acdd74"],["/friends/index.html","81e56cdbbee1cae0480f6bb79c900a7b"],["/gallery-template-assets/index.html","dc00d2b040c51f5e403a6911752437e3"],["/gallery-template-default-ver/index.html","5a0b173f8f2789d4a36d9a07cf49db80"],["/gallery/index.html","7f8c597440d3326d0f0f8582811ad322"],["/gallery/photo/bg/index.html","276589567ed67fe8dbd92518dc80bab7"],["/gallery/photo/gui/index.html","d9d0fbe6add44e57748578a98f263f8c"],["/game-only-text/index.html","ddfec62bf0d2b73a214e1e36c31662d5"],["/generate-random-name/index.html","8bf5ef12a943498e2262b65cceafd91c"],["/gui-017/index.html","c992102c2a0e4190670678014ef4e68b"],["/gui-vertical-002/index.html","79eddc41a0ea8218b6b59bf27be573f8"],["/gui012/index.html","9f6b253d7aa9a2107f24cefaaf2d6212"],["/gui018/index.html","ade2b0dda5a6397cc5f6c8236b2602d3"],["/gui019/index.html","6ee7199dff85393131725793ad56fe82"],["/gui020/index.html","eb7d1d85642693fcc0fc75628b432840"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","9ac1409fd11fe9699c2147cde9a06474"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","8b4f3c4769b95dbeefff67ced877728f"],["/hide-textbox/index.html","6871c1e36906273cfc19b81cad464929"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","91769b95520c516700ba79f953bc8e93"],["/images-tip-function/index.html","184b60d6710129bd0650bd000fb8a9f0"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","c75a82da5e771e68616aadb1b5186178"],["/index.html","478bf20c1b4ed5364e78a6fa8bc5d160"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","06b58e6dda5e3f93a0f4496b353dca8f"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","01ed4de2c5891cb768fdf94d308d7b26"],["/items-sprites-effect/index.html","07616774d5c4884172cdad2e28270769"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","81e6afef5a8791189f31f722be2e87f1"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","a66511da8c8ce90a1d1d226ff5f0308b"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","783d3bb9031875bfba5d53e932b6e1c3"],["/link/index.html","da2652c1c51cf325081d858e4102c193"],["/login-reward/index.html","669e3714c79a193b6d984002d38c2208"],["/main-menu-music/index.html","9a6e0497762ae05fe9b303aa319419f0"],["/make-butterfly-beautiful4/index.html","7b9691e3fbda60da366c8fa2d061e65a"],["/map-puzzle-system/index.html","bd15f1e043f9e282916e90cb96560f97"],["/maple-effect/index.html","5383c98aa4ab0f48f2bdc58f71ea5ba9"],["/memberships-2/index.html","78c87d27d304cf5e3b9aeb3101e1f968"],["/memberships/index.html","55d941465bb6e346f48798d349af21b5"],["/multiple-language/index.html","442eca655eee70f68b01779ed623b3b8"],["/name-input-assets/index.html","1a136d5fde79e4b899387c2e8398e423"],["/new-year-event-2023/index.html","703f0fda3593c6fd3b38a1e07777b32a"],["/newsletter/index.html","1a481e4a83d7983e12b1199f4e18f2d9"],["/nsfw-limited/index.html","d6d6f1bd78a647a466a9d5f246887f8a"],["/null/index.html","26a630d86f52cb35d4a8bfc327f5821b"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","d84b08ab728fa96fdfd5544cac61068f"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","22efaef9155b9a5a8d63fc4a138fbd02"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","6c5bbc44c62cc42d6b72ec437f0e5fab"],["/openchatai-renpy/index.html","fdee9e3cb84e10ec7fcdc18eed57d41f"],["/original/index.html","2d334916db4e95b9eacfcf9db37b1bda"],["/page/2/index.html","6237cd3fa54196d6f008cf574af973a9"],["/page/3/index.html","dd9d535da2dc24104ff77cadf09fe91e"],["/page/4/index.html","ca2a62eba2a2b2c3f026a61fdde45914"],["/page/5/index.html","a3b64db2017036272097b480410c54d8"],["/page/6/index.html","e1b3f301c7055c0445c6a64d6534c50e"],["/page/7/index.html","411d112b58877a3c3f0534f28f8f86fc"],["/point-pop-up-assets/index.html","5c7ee880e42fad19e2f189d1d121aee5"],["/pop-point/index.html","1cfdc9eef7f09686ef551a06cfef5cec"],["/privacy-policy/index.html","41d69b5e59834c3d7be730ecb08461b8"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","5a49499fe867d5e36ca4528d9c022da7"],["/random-number/index.html","db38e4a5396d29b12972ed099be44d3e"],["/random.html","10c12e4790a526ebd2d37d4cf9bcd3e5"],["/refund-policy/index.html","3f0be801860a9b18745cab26547cadbc"],["/release-017/index.html","b486794a20ab978fa2846ba42eb960f2"],["/remembering-choices/index.html","86b5f5ab50d54f034f448c74492f026a"],["/renpy-basic/index.html","039e3175103a42dfe6f16208440db469"],["/renpy-crash-glitch-effect/index.html","a189f5b2fb45a46a374fd83ccbe54ab4"],["/renpy-flip-image/index.html","aad724323d1b846cd1705fec6e320da1"],["/renpy-matrixcolor/index.html","8bd011a329d03e40c5b8de1cc1407d6d"],["/renpy-overlay/index.html","e176424ea2fd249babf1aaeb6b2d8ff7"],["/renpy-review/index.html","0c6a3af9c2ea7d71f9dcdda029bd41c2"],["/renpy-typing-effect/index.html","ee24ed66ae0084559b46806768f5977f"],["/rpgmaker-assets-menu/index.html","e247613df226de8c8bfff6a85537222e"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","2952f710162c79ee688643d0cacca9c7"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","861b04fb699dff58847feed86bcdc070"],["/sakura-tree-background/index.html","d9b4307393c85e7d1f5308e311d1f567"],["/selected-button-style/index.html","cdfbe54b6e7298bd65cf9689b4fb7ed7"],["/service-worker.js","3e3361242c3c6b3af4019a6daadeca33"],["/show-variable/index.html","13847bc2ac4efa163480669ea46be0a2"],["/side-image/index.html","8c6db62bc194a1b66752fcb2ea42eaa5"],["/snow-effect/index.html","4bf3f198d2a61d5d9d9eaf777d054828"],["/speaking-animation/index.html","bd69252395f4a78cc6b3ef264da1080a"],["/splashscreen/index.html","2c63f091477e2bb2e7a92458f8eedf0b"],["/suika2/index.html","12b6ecd7c3bfe93b02f1c2c7491f603a"],["/sw-register.js","213ad2ce24ea273fe48dc71c61e81f07"],["/switch-chapter/index.html","64d80e18cd7e300c2efdd5e158f2b38c"],["/tags/Hexo-plugins/index.html","6540abf5394bb2b556bbb1f7e65164cc"],["/tags/Light-VN/index.html","bfb3046926d2809928bf363f3b0f3ba5"],["/tags/acg-creator/index.html","e9feec04048c425dca4841fcaf54e87c"],["/tags/ai/index.html","717f0d421d4e0a5a0f91d4ada164069b"],["/tags/butterfly-beauty-diary/index.html","8feb92ad543c269325e234ebf47d767b"],["/tags/custom-hexo-theme-butterfly/index.html","b20eedf3db19f8404d6c5e13dd757bce"],["/tags/custom-renpy-title/index.html","59e54172b5bd00de008fdcdbd3cc4ecc"],["/tags/dialogue/index.html","a78f3a07adc49fff0ea20cb44ba9c34a"],["/tags/effect/index.html","50afd9066115244135af74e9a2d6158f"],["/tags/event/index.html","a7eab76418c9ac63b57d8b4b511c4d28"],["/tags/hosting-own-website/index.html","ae56f126bd79e6de77fc190d7bca94fb"],["/tags/index.html","ed51a74c3979cd4e18ece9518dbddef1"],["/tags/itch-io/index.html","773dfd04c8fe6ee04ca1970df06cd740"],["/tags/light-vn-update/index.html","91c98c7f180398279607a3818b89a5fc"],["/tags/nvl-maker/index.html","2c4752cf986ca909b1a8a62cc2dd5e43"],["/tags/player-related/index.html","80b9c74aef525605b5d652b19ac0b885"],["/tags/pro-tutorial/index.html","0ed0f4d0c056a07468ac51e10bec8deb"],["/tags/pro-tutorial/page/2/index.html","09c5653962f52123e8a576b1a68c1bad"],["/tags/pro-tutorial/page/3/index.html","3f58e4e76f56b649bc006418cc428e59"],["/tags/pro-tutorial/page/4/index.html","fc0ac0ca9b3dba5222636f6a868c2074"],["/tags/pro-tutorial/page/5/index.html","a4bdb0f71a437f6136e9067726970a5d"],["/tags/renpy/index.html","ea9e9bac7052749eda222621141d2286"],["/tags/rpg-maker-custom-map/index.html","75aba943695876c3f671afd8af7c2fb4"],["/tags/screen/index.html","0066041c75c3fe6d5906b17ddcf468e0"],["/tags/special-function/index.html","6bc0617beaf243323645bc704fef6bb7"],["/tags/suika2/index.html","33cfe3b5b0c1ec7421f01fb17d384aa5"],["/tags/terms/index.html","204c49a98aaee4c54d1caccedec35571"],["/tags/tyranobuilder/index.html","e2192f1ae047db91583dce470bf60526"],["/tags/ui-assets/index.html","18396c0f7eae76953fd7bfff2e09e2cc"],["/tags/update/index.html","6a400e972d6b701ed8e8d71e69b17609"],["/tags/upload-game/index.html","9d0a8c26990e3e2cbdbe6c0caf0d7277"],["/tags/variable/index.html","4c2ee46340b76c4b34738c87d5bb1be2"],["/tags/visual-novel-maker/index.html","8c76211d0fb6cc62e2455808d3905719"],["/tags/webgal/index.html","f52aa887eccb89eee306f1da00c67745"],["/tags/封面製作/index.html","d20fb9e665c67fb7d50161fa216fcbc5"],["/tags/背景素材/index.html","ebccf635432618712776dade1ba3d028"],["/tags/隨機功能/index.html","37ae515482e8559f310b555a26b512eb"],["/test123/index.html","59af11567f085fc275fc32bcb112cc06"],["/textbutton/index.html","93adccf62014d5545b2272082cd507b0"],["/to-do-tutorial/index.html","46ad908ec835b2b5fba70501ff65c475"],["/tools/index.html","a1e7cd867624f2b0099c823f68818c46"],["/tooltip-function/index.html","02b3834a4bee02660a734b3e5e878fec"],["/transfer-to-hexo/index.html","3e9d1e39a62c78131c877c5cd5d1cb69"],["/tutorial-update-history/index.html","a6361c04a6a21e566278428f6d90c815"],["/tyrano-name/index.html","49fdc36cb73075974593d38317ff0220"],["/tyranobuilder/index.html","2f7adbf1fa60193940e7f40988492cba"],["/undefined/index.html","84c05fb0c1911da5a05e18933914178b"],["/unskippable-video/index.html","c97d431c07d621b42a7b58a1801e5afc"],["/update-20221211/index.html","d5f074ba225558b2d0e5953520a32726"],["/update-20221218/index.html","8c70886f912eaf091359b1cceb24c1cb"],["/upload-download-save/index.html","2eeb145b7e682d20e744e6fa9d83d01b"],["/upload-your-game-itch-io/index.html","ca622cf12149d80df5d2c5186d50d69c"],["/use-list/index.html","8ea8bce1d7cf6a423bf587d7dc345986"],["/use-nvl-mode/index.html","67620ba1a058ae47e75f133508cdde07"],["/useimage/index.html","3e93f9f2d2c966dbc1834ab85a584447"],["/variable-change-image/index.html","592d04388f13e2e34ee79ee5d230ea4b"],["/variable/index.html","e92805fa3e02c20b90f460c981359c12"],["/vibration-function/index.html","d47b84e4467f5380211a44bdec1b1ef3"],["/vnmaker/index.html","c0df74a971144708d306dec960efba3d"],["/weather-effect-tutorial/index.html","5d2b4bd9d72b2ca9e397c779d1673ce9"],["/webgal/index.html","79e195406fcfac1ba8cd1db6097079ef"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
