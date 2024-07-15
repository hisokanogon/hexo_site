/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","3536ecad43ac25b7027f45d3b9f65e63"],["/2024-future-plan/index.html","8de715f3d19239149d07810a7177e4c9"],["/2player-battle-system/index.html","5af35efb54f7ee1222530b0dcc234990"],["/404.html","90b9c7c13ac5d1baad56861d8feefa9f"],["/about/index.html","be3d4eafe8352323c6207f6f5431d24a"],["/acg-creator/index.html","7036b3ec667f784b793f7f339b3442db"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","b18314c24c563686a0b650ed3b3794a5"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","cb83194fd4280ebce7fa66822425d0e9"],["/animated-title-main-menu/index.html","40a4b0c17f7b2b52d0dffebe0560c2df"],["/archives/2022/05/index.html","6420fb85d0b003d07437ccdc9e1baa83"],["/archives/2022/06/index.html","841dca0629aea8200af79e0be4501d43"],["/archives/2022/08/index.html","888a06f967b45e6a21fd3af815ab7423"],["/archives/2022/09/index.html","d72acaa199a3ce63509c2eaf26dc59dd"],["/archives/2022/10/index.html","e5b0616bbd4c8329caebe2438f451ab0"],["/archives/2022/11/index.html","19668c725a0336c680480d90cd965118"],["/archives/2022/12/index.html","78e89d3588cabb004fd01d17b9e7a7c1"],["/archives/2022/12/page/2/index.html","b8be61fa94d28fbebdcf65f2c91e34ad"],["/archives/2022/index.html","d7a9e479aedcf01f3838aee566e78691"],["/archives/2022/page/2/index.html","51c64396dfdd2018e210c423ed042c9a"],["/archives/2022/page/3/index.html","dd395f8ff562b5919dc86694c8033da7"],["/archives/2023/01/index.html","7a517f2192c28d0b889488c31bb6dd83"],["/archives/2023/02/index.html","89c356062917b9a0bc841b43b20173ec"],["/archives/2023/03/index.html","b29c5b5225b9af0571e74a8decca30fe"],["/archives/2023/04/index.html","d2a28e76890f1f4b2bea07bcd704d383"],["/archives/2023/05/index.html","8e62b6999525978b34ceb4e5371f955e"],["/archives/2023/06/index.html","a6ca98a44afce4fae7906ec1b7787943"],["/archives/2023/07/index.html","7a673302d3df4455b90dabc318c755e6"],["/archives/2023/08/index.html","32fc65088fc9b908bc4aa6b8036bd36d"],["/archives/2023/09/index.html","9d2cc739a2afb1da8a8ad85d3f886dea"],["/archives/2023/10/index.html","9328205d7b59daeecfcf8e6502dfe415"],["/archives/2023/11/index.html","f210c1e8784e9b526bbf38b7d9ee3f5b"],["/archives/2023/12/index.html","2d79eba343152592344c9f9381f0b0d1"],["/archives/2023/index.html","26ededfd2474a3a11409cf817f396d66"],["/archives/2023/page/2/index.html","361ccd19744d32d803498e632b7542b1"],["/archives/2023/page/3/index.html","4bf863de857a389718c8c12ac5cc608d"],["/archives/2024/01/index.html","5ada799275c73d767b56e21511b6128a"],["/archives/2024/02/index.html","b52eb491767891ddfcca9bab6c505405"],["/archives/2024/03/index.html","3eadc1e762db26e0d1a62ae25e3c4e25"],["/archives/2024/04/index.html","2647f35d78cf28341f0c4563e66e67ad"],["/archives/2024/05/index.html","7ecfe1bab3e494656cc3aacfbc203393"],["/archives/2024/06/index.html","f446cc5e6d9797b32311485b8b51077d"],["/archives/2024/07/index.html","0cefebec1c1f614361bbad8e2fb2b85d"],["/archives/2024/index.html","12a6ad78a8e74d7a2edc834a67212ff9"],["/archives/index.html","e6d9fcc09be092110bcb317ebbafae09"],["/archives/page/2/index.html","57111730c6a8e4e056c93cd3053d4733"],["/archives/page/3/index.html","2badb290f901cd13834fe746d4d50258"],["/archives/page/4/index.html","b7802acf5d5c96b8f255f51b922364bb"],["/archives/page/5/index.html","b751f69337ea9d9d1fab6b2c754e1b29"],["/archives/page/6/index.html","be7c2a0d63a276e1582049ecc485b705"],["/archives/page/7/index.html","925385a5299629c3cfbb229cff7a2c28"],["/artitalk/index.html","fff1c33fc19ffa2f3c4560955a0c2c85"],["/battle-beautiful/index.html","6b45578689c07ff1acdcc7ffe7b2b480"],["/blur-effect/index.html","f94672c7960408f601064722e2091f87"],["/butterfly-custom-tag/index.html","a6e439fe05bf206da76ff324d7d6281f"],["/butterfly-plugins-faq/index.html","c498c63e6979842149072f572e9f8339"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","86574a6e3f94118bc8d9bdead2627dcb"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","b55b49d745f65c7917a9b772efdc3a56"],["/categories/announcement/index.html","cd1885d2a0490317e3fca2e1754bad60"],["/categories/diary/index.html","662aa6635f3772aba8dfeb944aa0f495"],["/categories/game-dev/game-engine/acg-creator/index.html","2ca19f6cb8c8162a3b0ecd40f64b21a9"],["/categories/game-dev/game-engine/index.html","4b5845e3e79959e7cbfa41d117c6b058"],["/categories/game-dev/game-engine/lightvn/index.html","32df9210d50beb1e152a4ba35e1dff53"],["/categories/game-dev/game-engine/nvl-maker/index.html","738689e85048ca33d6fe019082f2cdf1"],["/categories/game-dev/game-engine/page/2/index.html","cf0010f2398bc48ed84af7230d970146"],["/categories/game-dev/game-engine/page/3/index.html","98874f989a590b1cdf2854d4cbb91fb9"],["/categories/game-dev/game-engine/page/4/index.html","9768ef7088b6eda565fdcf38d883efc0"],["/categories/game-dev/game-engine/page/5/index.html","cc8d48554814d2c6b65de06b1cb9a4b0"],["/categories/game-dev/game-engine/renpy/index.html","917eeb967adf5884551ba8107bb08d3e"],["/categories/game-dev/game-engine/renpy/page/2/index.html","b671851c78c6af5ce8370d9b1324f621"],["/categories/game-dev/game-engine/renpy/page/3/index.html","a640b58801bdb1490ee5f45022f9eda2"],["/categories/game-dev/game-engine/renpy/page/4/index.html","923c60d1dda12e2d043a4fd0eba2b5d6"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","4dc1c41bed684c46b0f6545048f14711"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","3d7e69053c6beec635b49e3fcc0f93dd"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","bd1f44c8bc5cd2b2fb9b2158e6f9ba52"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","b2f849fd7f1d1212f4f6cda2ce3fadc5"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","efe2f25447454da81c5cc8843a556f32"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","ddd831017022954fef4b616ed29b4beb"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","1d174c9ef98c6daabd884b8510e47b66"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","a45dffb3c6883c011bcb03ddcc9b90aa"],["/categories/game-dev/game-engine/rpgmaker/index.html","d8439ee90724167e43b81ea955855f05"],["/categories/game-dev/game-engine/suika2/index.html","04a3412409724d5064f5aed53bc25726"],["/categories/game-dev/game-engine/tyranobuilder/index.html","421d8385f1f1f9bf63d1b36a87ffbc12"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","c89931402e5d1bee2f1707674b3c8142"],["/categories/game-dev/game-engine/webgal/index.html","7460ca3c778e21e2a3e67ca3b82e7717"],["/categories/game-dev/index.html","f5a44dab6bf1ec52af1de826135b5e13"],["/categories/game-dev/page/2/index.html","c69b2fbc7af95f60fcd3bb156951dbbd"],["/categories/game-dev/page/3/index.html","5472d83e0e92babccaf3c360f042dc79"],["/categories/game-dev/page/4/index.html","fc349d89b8d389e09b05682d28fb4a79"],["/categories/game-dev/page/5/index.html","83aedfd5b959492a9bc386829db814ce"],["/categories/hexo/index.html","d3946cd077c8b56c79862cea80cd8a60"],["/categories/index.html","164ed972599c7598c3a71c98a59f99ec"],["/categories/material/index.html","571eb720ceb5ea8c3c600991f0221adb"],["/categories/update/index.html","74efb776582548d49a4e2588aae76fc9"],["/change-according-to-real-time/index.html","b9a29df68c8b3d19fff28e2b46d530f0"],["/change-character-info/index.html","6cac186ce8654450f819689483c9bf51"],["/change-title-after-first-time-viewing/index.html","77afb89d2f410a2582f06f0fb5fee35b"],["/change-title-based-on-event/index.html","c336003e27f959f843dafb76351681bb"],["/character-interaction/index.html","3a08e96589e5c518e8ad0ee06b2f88cc"],["/character-stats/index.html","6cde1d21a3bd05231fda32728e07dbbb"],["/chatbot/index.html","18c1c0e4c51584c412250841ae15f6b7"],["/choice-time/index.html","4e2b8eb75945359b81726479e1001969"],["/comments/index.html","4231aca7661b38a5a8c57af2c5dee040"],["/commission-info/index.html","0fc6b00d7db0d0d269c94ddd51e5b0a0"],["/count-login-number/index.html","d8bca5c83639d4dbcfa9fa5ee03b6cda"],["/create-button-anywhere/index.html","59e4c9b484aeb8ee587846f9fe0416dc"],["/css/eurkon.css","eb3525732e7dfb021c45295e7c3b833c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","6e4a21e741bb0e393b32fb84acf05495"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","d096a506e51a0ed2680a7183e1bc69b2"],["/css/rightmenu.css","275fad6add4c4301640c82e5275cca08"],["/css/siz.css","c83f53525f06976f880b4077473e1a65"],["/css/swiper.css","9824f35b80c730d5cd1df9507ad5c8fe"],["/css/swiperstyle.css","d091b2101b8a3101cebf92daea8e67f9"],["/css/var.css","00054a070daff59ad3894c5e8100ae7a"],["/ctc/index.html","e8902d4e434ec3ee33850d0f7dcbb6fc"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","10bde99637ca4a9119980ddc5ed4e73e"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","4465e31a7fd6cf8ae156965a6d7bd11f"],["/custom-gallery-cg-screen/index.html","d4bdcad12105d47378aeef5e74cac90a"],["/custom-launcher/index.html","2254778e5a9265a817bb6b30364e38de"],["/custom-loading-screen/index.html","50514fa16210c8b08dddf700f5f49110"],["/custom-mouse/index.html","7911fe8c9ce32e445c0b3d0acdffed76"],["/custom-music-room-screen/index.html","bdf5058f5aaba546891d062a564552d2"],["/custom-music-room-screen2/index.html","ca4fc529645617dc9e821c3fd835da82"],["/custom-nvl/index.html","16597187d3860020395a7ec4db575ee3"],["/custom-player/index.html","df9e6045e54fd097d128c08e9378d174"],["/custom-preferences-screen/index.html","6aed7c36913c71b821b93407e41d0d86"],["/custom-say-screen/index.html","2d818429445d21d4c9f27b627f8201e7"],["/custom-style-bar/index.html","5f62eccb45422e2f9cb74aaeb61b0024"],["/custom-style-button/index.html","32b062fb3ea1f068f3e113c3f289f7c6"],["/custom-style-position/index.html","146349657d1a2bca45841d242f93d6c9"],["/custom-style-prefix/index.html","0f21fc9098cc779c02a0f1e7f9f244b2"],["/custom-style-text/index.html","2d60e106cdaa979dd91b1dc2e90803e3"],["/custom-style-window/index.html","88957b142f6344c7a825201a0cde7ca1"],["/custom-title-screen/index.html","ec5961467f2dcaaab094ddb6e7832f05"],["/define-npcs/index.html","13bdabdc33f810cc8938d880bf29d2a7"],["/delete-save/index.html","c3dd797a20707b3deca9e0386da0c6ce"],["/dice-function/index.html","cfcb32e52c1d183b9b0e43f352cce0a8"],["/disclaimer/index.html","798f61f355e11e4efdbd39aa9d9fba94"],["/display-immediately-all-dialogues/index.html","e2361fdfbc391e26a1b51375a72f5ca6"],["/display-real-time/index.html","ff9dd5304f70d4e70a6b7aebfbb9fdea"],["/enter-name-screen/index.html","b2c26c60798cf8a6d62aa5b026508fff"],["/export-game/index.html","26023e0b4d3f9c7acc29ff4dfe7e42f2"],["/faq/index.html","db33d1d9b43540bd31117b8654d0ae75"],["/friends/index.html","4015359f37ada8d14a289f74e4845ed5"],["/gallery-template-assets/index.html","18404ba64893a1cd251032271eae4ece"],["/gallery-template-default-ver/index.html","1ec5885318bd240ddd983eacd3a5318a"],["/gallery/index.html","5396d92324bcf0792dc277935c4286b0"],["/gallery/photo/bg/index.html","cf96035ac32d55c8c2535c26ecee305e"],["/gallery/photo/gui/index.html","01119eb5cc948ef39db2f4bc0a1f8c62"],["/game-only-text/index.html","47b37a0b90e67472e08282fe2b49b3c6"],["/generate-random-name/index.html","5ba39593f83e021d16b3e3b43cfd3617"],["/gui-017/index.html","40c5d0b7305922924a0221cb7e4b3c1d"],["/gui-vertical-002/index.html","83527675b75d12026d74bcd1b8c48ab2"],["/gui012/index.html","5d1f81070d6b00cd9f8593ebd252ff77"],["/gui018/index.html","d12d88b0a8f088b156103adfa48aba1c"],["/gui019/index.html","28ec83cdd68242d32072d785dae51935"],["/gui020/index.html","e3255d5e0c5bf3c58e3678d0ff7bb050"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e25e1835584981cc7ed83ab777dc1747"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","66b72e9935d31b73e04d68009893b887"],["/hide-textbox/index.html","aaed932f21642fa8a497270f32d001e2"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","777ae39ea0051cead8e9b58c7151e606"],["/images-tip-function/index.html","c564d889afa0d9d3903ceb011392c8ea"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","995912dbe8506a44f9a88d432fdca2c9"],["/index.html","4f3edbde615d996f6308c6345eda47e2"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","1e1b328c5552a9ca58d2f2060ba88ba1"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","a3964035fe1a3140139d9f21b849585a"],["/items-sprites-effect/index.html","f13ff5dc80c0d1b2785d8bb6f1e0381b"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","a22c3a0d1f51cb2bf1d27ea65b0d787a"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","a63c29378671e7aa3a7690e3c731e56e"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","53f90587528cbb1c1be9208d10967999"],["/link/index.html","508c057afec66e59e43764f107fa4f57"],["/login-reward/index.html","18889be17f594a1ede831ad650483dcb"],["/main-menu-music/index.html","f560a8cdcdf8619bd0b174f6c5fbb859"],["/make-butterfly-beautiful4/index.html","f9304a4fca07fe81ec772a74aa4272a5"],["/map-puzzle-system/index.html","86c809214acda817a335a328019ba48d"],["/maple-effect/index.html","c742eaa4e0f567b536d76e9aac70bf8b"],["/memberships-2/index.html","b099eb3623853557f5761e336ee91248"],["/memberships/index.html","259d259b79a0378b94e759ca2092b73b"],["/multiple-language/index.html","7af26ee678bb10799c5f2f6e2aa9267d"],["/name-input-assets/index.html","567434ed136e1d44ccfacde95d4f6c43"],["/new-year-event-2023/index.html","252a195be728dd0d764f9c2c12271dce"],["/newsletter/index.html","2782ad8ebd138020d2dde76159febe11"],["/nsfw-limited/index.html","c5dd4206e8d0bd7b380bd1a798070cf2"],["/null/index.html","5d241d2a031a0860a74d246c3c56df67"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","df4aee37720f146f716d5e01ab5be2c1"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","8f8d6e3737fecd16967d0974a5cff4b4"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","9924883fdc0940685ddd4d7a25c5aef9"],["/openchatai-renpy/index.html","45fc3f6cb26c0f9cad057f7b6e5fc3c3"],["/original/index.html","76767d72aabaaee1044c102e5a01600e"],["/page/2/index.html","610ae2b1b1060d81db8d5ae417ea7d2d"],["/page/3/index.html","9f7d77ff7f880eb7d18f30714f567db1"],["/page/4/index.html","b2d237b2d72e55d0ad36eacb2773e2b7"],["/page/5/index.html","27885aa457afc365e471014a67001f97"],["/page/6/index.html","d12f5167e610c5e56f837aeed2162100"],["/page/7/index.html","2ebc0884a79654e8473f8b2a6cf9236a"],["/point-pop-up-assets/index.html","97a57cf8d0b5a8778a27cf30687ffc86"],["/pop-point/index.html","dbfe8edc9c874e7889a26f61111ee099"],["/privacy-policy/index.html","7bf01fec7525f0b9f2493185a302efaf"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","d1efb855a5a7bbde9e99116145d84ae1"],["/random-number/index.html","6b33666f23a3a306fd02cd1008416d12"],["/random.html","da601210e18371f08b5111f00dbcb296"],["/release-017/index.html","45f26ba5ba03970429860c6192e8ef75"],["/remembering-choices/index.html","2dcb3567ade3af8cab6814089dcabcea"],["/renpy-basic/index.html","9f1acc5fa485c22cd95fec12f7cf5cda"],["/renpy-crash-glitch-effect/index.html","721fa1db24678eb249aa73507cf25529"],["/renpy-flip-image/index.html","26bfb9a8644051a1a68f68c2fa8a99c6"],["/renpy-matrixcolor/index.html","e9436740d48834cefe3c752d26226966"],["/renpy-overlay/index.html","2861062cc86716f2f905915c8b71165c"],["/renpy-review/index.html","8ac41feafcbe1b1c6e0d56d324482aed"],["/renpy-typing-effect/index.html","b48d2a6a7f808e56cf4f81c9658ed45b"],["/rpgmaker-assets-menu/index.html","c1c79c4e2e8c6e2788aaed8007a3bf38"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","b7b81c5de70d930beff12b60d9ea7be7"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","d7d1036c6a91d29a09ad3daa0ad64811"],["/sakura-tree-background/index.html","6bad27048088bcb0a12a0489ee9eeb9b"],["/selected-button-style/index.html","b86ad1bcba856fda9f3a6c45fdddbb0e"],["/service-worker.js","a645e7b5fbfd31b7011671e337c7ee51"],["/show-variable/index.html","ada93cb05b4a72f5fe65ad3047520956"],["/side-image/index.html","0df4afccec338365b49181af8f67ed4d"],["/snow-effect/index.html","be1560837a953a439f75f2e0edbc3795"],["/speaking-animation/index.html","fe7285cf0278ecbf1cfe1a163dc4f048"],["/splashscreen/index.html","0005746b492f0cfdcbb22091f69df04c"],["/suika2/index.html","ddcf03c975dc4b6fb50d72dd57dfc486"],["/sw-register.js","a3b6f92f4d30ea2b959bcb6160b6c00c"],["/tags/Hexo-plugins/index.html","52de067a17ca8976ae6df23a6aecc628"],["/tags/Light-VN/index.html","f98882a4089d5f72e104f9b5d8ca3325"],["/tags/acg-creator/index.html","6204d701e9834627f96ee01b92ed0ff9"],["/tags/ai/index.html","4345496d773fdc7aa615ae9823364b0b"],["/tags/butterfly-beauty-diary/index.html","7fb488278875960c9439ef14fc8c310c"],["/tags/custom-hexo-theme-butterfly/index.html","01bbf278058db9f5723b70590bc337bc"],["/tags/custom-renpy-title/index.html","dfce8f92ea4e49a590c440cf94672431"],["/tags/dialogue/index.html","7e9742c87c400a7eb210973ae10560a8"],["/tags/effect/index.html","d2ab9b9206f59fab1703c444d8257189"],["/tags/event/index.html","654be5f8b7ac163bdfd2cb0e977d6400"],["/tags/hosting-own-website/index.html","b74b80f17aa8f83198dd87fcf88bc052"],["/tags/index.html","49d0167af3f1583df5894f81e7d76060"],["/tags/itch-io/index.html","28891c4025bb20fdd7ffeca1c8e4381d"],["/tags/light-vn-update/index.html","e49d581757e7ee6bc3a2c6b6eee70e9e"],["/tags/nvl-maker/index.html","8148b3f981b3020d73ebc7742a6f041d"],["/tags/player-related/index.html","d559c02b6ae5f5629f9c61f4df889243"],["/tags/pro-tutorial/index.html","8520c28eae05681ab550a07397dd558f"],["/tags/pro-tutorial/page/2/index.html","b94043ac9e9fbd608a53126f7e3f02c3"],["/tags/pro-tutorial/page/3/index.html","5562fdc95bddcb91133f4dcbdd006051"],["/tags/pro-tutorial/page/4/index.html","cc65796d81f5e2228bf09173915ed615"],["/tags/renpy/index.html","f313a37708a2e339a474904ccb6a85b1"],["/tags/rpg-maker-custom-map/index.html","841339d6dd43ae9a5259d2dbb2a6b737"],["/tags/screen/index.html","772384f2215021f40b2f192ea2e659cb"],["/tags/special-function/index.html","592dec09274e93a06f3e186c4d0a6ff3"],["/tags/suika2/index.html","002e2b86435d318e4ecfa856c20c1103"],["/tags/tyranobuilder/index.html","f5f298735b4b502076aeafb5f2ad6aed"],["/tags/ui-assets/index.html","cd2623a2f8557be3857a1c9e9cf061c9"],["/tags/update/index.html","8e83a52e35ec5db1f5aa8fefd8680fd2"],["/tags/upload-game/index.html","8799655ac54c99dc10ac59bc569270eb"],["/tags/variable/index.html","d55dbd2bb7af70f8425f9c83e0907f97"],["/tags/visual-novel-maker/index.html","e73de9281d6ea3658780d4aed4a2fe16"],["/tags/webgal/index.html","bf0419f3f86bfd951c46ff89433ba693"],["/tags/封面製作/index.html","49f5c5e77fc647988c4a7098d45562ff"],["/tags/背景素材/index.html","c00c66caeb6c4a8ffecae45be6d15b7c"],["/tags/隨機功能/index.html","6a267540ef0ab03e64f98c7af6f7e46a"],["/test123/index.html","a517a512f1f887086a4bad12855594a2"],["/textbutton/index.html","4a33e78aba8a44a485cc670f3fa5d803"],["/to-do-tutorial/index.html","7cb384a58c41974a4456382faae527d7"],["/tools/index.html","9b878be8e70d7ef5bdb69f22f5f80cf0"],["/tooltip-function/index.html","dfe810650dd345b150eb70c08a445879"],["/transfer-to-hexo/index.html","1f04d22a51b24d0be6535de06d62bf85"],["/tutorial-update-history/index.html","0860fd8fbef631ffc1bf0bcec848c735"],["/tyrano-name/index.html","9819700948018b98bdafa5e421044b86"],["/tyranobuilder/index.html","4390e0f2f3ab7143b50adf72939bf5d2"],["/undefined/index.html","d53ec591db49a85643507c599e693885"],["/unskippable-video/index.html","a1ad9968a8d6c2d39676162dbed2df5b"],["/update-20221211/index.html","e6f46e60f5f6314becf5449a98a0de0d"],["/update-20221218/index.html","47c487da2206879163b3a24ad18f008a"],["/upload-download-save/index.html","f3509353568efbb2084231c2e472d5a9"],["/upload-your-game-itch-io/index.html","481b3e3c3fc40d460db938dd55e75e9e"],["/use-list/index.html","a921807b01d80a28b5137bcb1f629a6a"],["/use-nvl-mode/index.html","b4ff748042d9f825800fe66705b22366"],["/useimage/index.html","2bae0f6be600eb347134f0864c95175d"],["/variable-change-image/index.html","224cf4e2a4f36a4ff87655dd2079209c"],["/variable/index.html","855d86c89322cc358e1c4ff108c0f312"],["/vibration-function/index.html","b3c5785d55d89b569f7ec5007fba5fc8"],["/vnmaker/index.html","e96a09ba9c50eaac96ed1ddee6437265"],["/weather-effect-tutorial/index.html","ce0786a433258e30407501a9260e4e64"],["/webgal/index.html","f502bc230a7a3f943eba1fafedb7cc9e"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
