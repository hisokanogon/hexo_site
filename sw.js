/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","f822887239a6ea34bba6a261548c4611"],["/2024-future-plan/index.html","28839c9e70dfac1cefb228ce6e9cc38c"],["/2player-battle-system/index.html","a2b8013e58a76ab783e50a1218dd5c6d"],["/404.html","84547652b8064d6e2329b4310d10d22e"],["/about/index.html","281a3ec024fa0c015784983d2726b691"],["/acg-creator/index.html","16cde152641db2df7d11fa7185b4ab71"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","d21afb4998e8c3cb97841d96ef8a7c26"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","08f055e83616910dd0003f1107ffc4ed"],["/animated-title-main-menu/index.html","a2dc1eead549a8c22e940c345bda368d"],["/archives/2022/05/index.html","23bb72c9e10c625aff6945a9023ea757"],["/archives/2022/06/index.html","4105e955b02fafb78418fca5cee409fc"],["/archives/2022/08/index.html","0854bda3751bf07629d7b0151fce76be"],["/archives/2022/09/index.html","8a07c38cac013c3d084651702b812fa9"],["/archives/2022/10/index.html","f6b96a4c8f786040a78b412d8ed42743"],["/archives/2022/11/index.html","7c3665867b42675931bcb3e7b727776c"],["/archives/2022/12/index.html","359386bb7104f4d1c4dd29366b3b0501"],["/archives/2022/12/page/2/index.html","5b41f4e93512f592571ab2199219502f"],["/archives/2022/index.html","845e839c6d487b89f9de8855a4fe97a3"],["/archives/2022/page/2/index.html","42642b9b9460a5371cadc8d94f14b82f"],["/archives/2022/page/3/index.html","04d9bf43749c9fad5031bd8d6c12f31b"],["/archives/2023/01/index.html","0e541932036abc12bb2ccfe31dbdb14a"],["/archives/2023/02/index.html","c3b1542e4a49d051361268526aad634b"],["/archives/2023/03/index.html","27b406752b85436a0e921be4fc3a22b3"],["/archives/2023/04/index.html","6793b82ec52ce4c90dffd623c26ee55b"],["/archives/2023/05/index.html","436cba2904b17523e246d4840e0ada31"],["/archives/2023/06/index.html","92ed65a43dc22d5a0aec55a2019ce0f7"],["/archives/2023/07/index.html","f09d2451b378ef891949cd98a167f6a3"],["/archives/2023/08/index.html","f0b8f06c38bd548040b79937ab0d6f19"],["/archives/2023/09/index.html","f03da3b496fe46c0f0acebe382ef163b"],["/archives/2023/10/index.html","9f644383da969e4f7d716178835283b6"],["/archives/2023/11/index.html","81842c58065f88e8c8f95bee2eb649a0"],["/archives/2023/12/index.html","b85bd522e5fab74d85f29dbdd6827c9a"],["/archives/2023/index.html","e9347e4514c1876f8bd88084d478af6e"],["/archives/2023/page/2/index.html","e2496f030ad39e1d74db80d6fe2f0f24"],["/archives/2023/page/3/index.html","76fdd89c4bc5adb9d3793be80754e422"],["/archives/2024/01/index.html","6ff22e16288109e04d1372caff1dc479"],["/archives/2024/02/index.html","4c5a78b0abfcd8714c64315b24f27c71"],["/archives/2024/03/index.html","21c980585a46a31d839ba993a9aa8f15"],["/archives/2024/04/index.html","8e77d52b76c8fa962f5dfb8e84b45817"],["/archives/2024/05/index.html","fd874a2f834e7a3cb4b35e6640da732c"],["/archives/2024/06/index.html","5654c93ac3c0ba0dfc06ffe5ef250122"],["/archives/2024/07/index.html","3a4b0e7db189f5e12045eea55fba9105"],["/archives/2024/index.html","00298e4f11ec6d81a68296c41b8fa685"],["/archives/index.html","e1c9238474dfe8ac8e22120a9a9e8db9"],["/archives/page/2/index.html","cb6ae5e38226ef5f0ad50ce15356341f"],["/archives/page/3/index.html","caad75bd6a5ec5d796971fa3ab5a53b0"],["/archives/page/4/index.html","c05401410ed1bd088efb7bb972b7b5da"],["/archives/page/5/index.html","e396daf2add3afe2832ece01bcedf757"],["/archives/page/6/index.html","e073375862b6a5cce22e24593eb6d925"],["/archives/page/7/index.html","4ba9e4acecd7dcaf7f353c2d921358c3"],["/artitalk/index.html","b18ecfaa20de617aec5a4c4b1ae2469b"],["/battle-beautiful/index.html","8d56b0f1e164c1285f1d140b955e2945"],["/blur-effect/index.html","e87dfc1fd888674c168fe98958a97a0c"],["/butterfly-custom-tag/index.html","12e40b556f41f95438f91293c1a7f617"],["/butterfly-plugins-faq/index.html","5c3087b371b237c875630911d8aa5abe"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","136c5e10c27c6b012f986ce5d12673d4"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","a954929996db045abe07753525fba8b8"],["/categories/announcement/index.html","89c51ecc9231fb1345c3d72d245be190"],["/categories/diary/index.html","9defabef946a772a5a00f983e2b439e2"],["/categories/game-dev/game-engine/acg-creator/index.html","5a6b6444a4733ee074113d9e304c9050"],["/categories/game-dev/game-engine/index.html","82f04288f219f0caa1b86b25c92914d9"],["/categories/game-dev/game-engine/lightvn/index.html","ca4a20149d4b365765a86c8654e6861a"],["/categories/game-dev/game-engine/nvl-maker/index.html","7c71894546a072ef322623ca788a3655"],["/categories/game-dev/game-engine/page/2/index.html","64a74317f52e95aa7a5005292d3fd090"],["/categories/game-dev/game-engine/page/3/index.html","b32fd85eb126465bfc56bc057ec79fd6"],["/categories/game-dev/game-engine/page/4/index.html","8035b7aef92968493b81c6381737cb99"],["/categories/game-dev/game-engine/page/5/index.html","552f591d681afa35444857e044bc3f71"],["/categories/game-dev/game-engine/renpy/index.html","7f952aa4abb158184fe016a3e1cc818d"],["/categories/game-dev/game-engine/renpy/page/2/index.html","fc77fc10e98601368cedc94923d54b2b"],["/categories/game-dev/game-engine/renpy/page/3/index.html","0daa0a64d6ffad0c8e17e081bd89a311"],["/categories/game-dev/game-engine/renpy/page/4/index.html","1ccbea845c1f2c6446ff233ac276715a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","199b175b824a8e39f8f7384bdddfe9b2"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","e76c455219f3abdf8f3403166c482aa8"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","f22bb589e22004c74070d07ec878b253"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","f4f790db5f0ba01b57183e5b95ee41cc"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","815ae0b0ce6e31d68aa678e75f1109e6"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","f0004ff8a84fd2839100e673121193ed"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","ad8120dd27a31f1714f724e357a4b590"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","33d04266b1bc3bd385517cff24771272"],["/categories/game-dev/game-engine/rpgmaker/index.html","4c22c434491aa1abbaefb27525f32875"],["/categories/game-dev/game-engine/suika2/index.html","c815b4febc3593041c77ed10d2703e53"],["/categories/game-dev/game-engine/tyranobuilder/index.html","795a24e090748002eefe622370f4e73c"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","3fade287bc39cbc2034a89d4088e2dda"],["/categories/game-dev/game-engine/webgal/index.html","2752fcf6de28eee4ae357007c06cda9a"],["/categories/game-dev/index.html","cd2ad3aa623247dcd98db7badb1eba56"],["/categories/game-dev/page/2/index.html","7610e39cc63d7541368c84ec75c716f5"],["/categories/game-dev/page/3/index.html","fac4063c66cf927c64115d937aa2b5bf"],["/categories/game-dev/page/4/index.html","0d8da51e0be2284272a12471a63e671a"],["/categories/game-dev/page/5/index.html","4195af0034b735dfdc4a28378b54746c"],["/categories/hexo/index.html","448410fb19979e06822fdc6ee5b5076d"],["/categories/index.html","96fb4a1e99f0386c20e7655e1ba87105"],["/categories/material/index.html","2f3fc49f75b18705e5747ebacf4fca48"],["/categories/update/index.html","01edc43352e06073f8bff736ea25b5a7"],["/change-according-to-real-time/index.html","e5a666603503f73f3dc8bb949b218c5e"],["/change-character-info/index.html","41df65d6339e5e40ee2eb242c77bfb0a"],["/change-title-after-first-time-viewing/index.html","1ad6163750b455150db2bcb103fcde07"],["/change-title-based-on-event/index.html","f98a389a5896742ad696c9ee1f7edf9f"],["/character-interaction/index.html","b222874d520f70deed2ee7f0b5b4222a"],["/character-stats/index.html","ae0c1babdd8995409ab7b4d8959dbe6a"],["/chatbot/index.html","3e17b0c5426540c956abca70d4b8006a"],["/choice-time/index.html","cb4f820e4119ef536f9b9b168f37357f"],["/comments/index.html","85bfd497eb2bd5b907ec1bed1029b510"],["/commission-info/index.html","5605b74a11435d35cfb89d3d89beb17b"],["/count-login-number/index.html","2722d0935965d24f792e76ebb18e55fb"],["/create-button-anywhere/index.html","bd628800cc7fd65fd9a59fe0811ccc57"],["/css/eurkon.css","1b370a3c3df7cf688c1f002e57841504"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c9bf2efb4ac757d3ea77673c11b1684e"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","30d8c13f53c319e500d7b9956ea6da01"],["/css/rightmenu.css","562ca279f62bcd0ba82f58a154037d32"],["/css/siz.css","9dac9247668309ab4ebc68d6f6d0c9c2"],["/css/swiper.css","f5051451acb12cc5cf0b0d80f74813c7"],["/css/swiperstyle.css","1a7c77a0af2a8b30c31eb91cbbc93e9f"],["/css/var.css","c26cf0ca5a5c1867edcb2fded0541c01"],["/ctc/index.html","da41ac6598fb859e492d129225587749"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","37e8a3992ecbd18e72bd9ddaaf188579"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","94dbc9df11dbefbe69835cf002216c39"],["/custom-gallery-cg-screen/index.html","ca8661fb3c15d2019d50fe4198c81560"],["/custom-launcher/index.html","998a7a619a25ffae1c03370403f79f40"],["/custom-loading-screen/index.html","d04b3eb940af9dbf50f6333797b612b6"],["/custom-mouse/index.html","8af8394528f1bd05394d3466d4ad6239"],["/custom-music-room-screen/index.html","d5581615b5894ec6482f556a8e2985ce"],["/custom-music-room-screen2/index.html","103adf460033246b71d5a74e004d5436"],["/custom-nvl/index.html","75fa898985063385260682806c22095b"],["/custom-player/index.html","c4ef2253e4ad76f6801374907bec252c"],["/custom-preferences-screen/index.html","ae095480bc9dbb4b9c6a93560b524bfe"],["/custom-say-screen/index.html","53a91617029d626eaa03e116c1a2b445"],["/custom-style-position/index.html","73352cd25921630953156b3d4133f16c"],["/custom-style-prefix/index.html","ec72a7b62b585b2f7716c5a46bb5abcf"],["/custom-style-text/index.html","7051c400ec47339925fba520ae77288e"],["/custom-title-screen/index.html","94de5ca41709d8575ec162da0032d7eb"],["/define-npcs/index.html","10c2e917c564a3a83dea601e996c1de9"],["/delete-save/index.html","349f65c57ec833caf74561f962d62357"],["/dice-function/index.html","9673dcb32644d8544b7a7101903a3e25"],["/disclaimer/index.html","978ae43dfbf4b00b9aa96c6da9981cd0"],["/display-immediately-all-dialogues/index.html","256a622197913bbdce42639ba577cbc3"],["/display-real-time/index.html","b523baa6fd7dd40e9385152077f76a5a"],["/enter-name-screen/index.html","bcae7dd5dc5fee7677f26983a9993f63"],["/export-game/index.html","02b7b21c84ea8432bb83fe7510d2170c"],["/faq/index.html","2d5b5c122e571d7d0c439ee426b7dfca"],["/friends/index.html","330029158fbedb5769fc4c91d3c06db2"],["/gallery-template-assets/index.html","d1ef03e88f4d03161dd387889f40ed48"],["/gallery-template-default-ver/index.html","409e3315a291b531b088081c441f2274"],["/gallery/index.html","de73cc06faa49d77e9e1ddb376990224"],["/gallery/photo/bg/index.html","943e754bb0d421a6f4814d580a47b80c"],["/gallery/photo/gui/index.html","324c098af75f64324133b40792fdbfe2"],["/game-only-text/index.html","599e959241e7b3d7dbf49404db646a6d"],["/generate-random-name/index.html","580ab11f143e7b90031be022b2590638"],["/gui-017/index.html","7c55851378f3b98b185faf2eec1dcfc2"],["/gui-vertical-002/index.html","d221ba467a7f9ea3ef8a89100b9928ad"],["/gui012/index.html","af30b70d085e049291314fb842967b55"],["/gui018/index.html","bb58b5f680f00c7d5623adb76ffbe2a3"],["/gui019/index.html","9b8e4bf58aeddcf9ab0461bc4c1304f9"],["/gui020/index.html","bac836ac3917a60495bea012073ed5a1"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e613b00c69b7ebddb47d0cd356f23f30"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","c14cb3fcbb82cd9448c1af7d73566e77"],["/hide-textbox/index.html","e665416106867c3aba13196039da89d9"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","983497db4aad7376dfe9463dc455c087"],["/images-tip-function/index.html","4fcec075678334e2f96565af5097f815"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","a1e07236873aa5171565271cc24fac06"],["/index.html","57d98303593eac010c6a260e8fc8d3fc"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","a40e8313dc7049f031cc2184e3cdaa96"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","86cd742635531ae639da043aa34e6809"],["/items-sprites-effect/index.html","7ad05f8c18f1bbde64201af46e84bb4d"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","13b76baab6c2bc85868662c336cd24e9"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","b675add1aa8094555b59e1fb7d40432a"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","c397df2ba69f5cd4667047425cf36284"],["/link/index.html","adf98e009f8ee0ecda84f290c2ed0b79"],["/login-reward/index.html","836e13ab2101c58d1888c2bb4c18b021"],["/main-menu-music/index.html","2ac6018f22a540ac22fcbf9b7d7550ad"],["/make-butterfly-beautiful4/index.html","7ed27ff488803529f85f1f7d63abd15f"],["/map-puzzle-system/index.html","bc3a0a3130eb3a4d0cd2eb18988f9556"],["/maple-effect/index.html","73958bc2d2363fe1c1c93418c90bc10b"],["/memberships-2/index.html","27ef4227faaf4a66aa6f4e77a77382c9"],["/memberships/index.html","a35c1d342eadcd5d1b7c7f08c068b486"],["/multiple-language/index.html","e0a65c9e28d9dae65fc22083cd758a4a"],["/name-input-assets/index.html","b53bcb8ebbdce20ff023eeb11f4cc274"],["/new-year-event-2023/index.html","4bc99803ce494165bef214ce54ec88bb"],["/newsletter/index.html","812c88129d9a26b8a394fe6a51aea2fc"],["/nsfw-limited/index.html","87a6dec9fcf35701b37233f423b5d1c5"],["/null/index.html","acc3682234e379f29ec83869ad280a27"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","00128117fad343d466ae4cf692275ee5"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","38ce52fd9709e007cf850384b5c3bf30"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","4861cd23a6c0d9c52d938eea9a6819a5"],["/openchatai-renpy/index.html","8e9cf4cd631a6bf30621d689307f6f2f"],["/original/index.html","2b1a14ff5d962abee86c9d58d3d8b252"],["/page/2/index.html","25c7c5c44ce38893c28b8f395d0e0bfb"],["/page/3/index.html","107b4b07dac0b0b5d7ff94bdd2252d56"],["/page/4/index.html","3105a1931fb5ce8306eb571405eeba4f"],["/page/5/index.html","7ee4ce5b592a3c50a26b540c337b41fe"],["/page/6/index.html","0fe7677bfd5080919c942cb0e8058de9"],["/page/7/index.html","221a25af4898344b99a0d7f45e92cef1"],["/point-pop-up-assets/index.html","6cf158004e6659991b29618c3a99a02c"],["/pop-point/index.html","2edce084f31d3113b2f98ab1517d9587"],["/privacy-policy/index.html","2b4da1a9404294d2620cec7d0f2e9f9f"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","af4c453c638637fc4c52d2c213d342a6"],["/random-number/index.html","8ab4e9d2c13bc1fbf122bdef1a59742a"],["/random.html","81fc1cb4bfaf1ebdb915fa7d09b5206d"],["/release-017/index.html","127267c3be2242df1377db6b78e0b3a5"],["/remembering-choices/index.html","614da765c0837dd5719f4ddeb69a98c2"],["/renpy-basic/index.html","39a8fb37692efe517e6e2b4af692d207"],["/renpy-crash-glitch-effect/index.html","c57d27825409b3504d38bdc4de0a26cb"],["/renpy-flip-image/index.html","8e78b1c4689204a56fe175542dca08e7"],["/renpy-matrixcolor/index.html","ef0f65ea03db0348c0c026439f5b8d24"],["/renpy-overlay/index.html","750b54cf0b7adcbcea685a93ac702cca"],["/renpy-review/index.html","244c1dbdcdd3abac31b492f3eb199e00"],["/renpy-typing-effect/index.html","0c974bf56f252951a5aee4c8c204fa74"],["/rpgmaker-assets-menu/index.html","a9128480f56b9c1dc71ccbd77c4e337a"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","6371fc340a2c5ffb1dd331f1b45adf04"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","bd6208ebf0539ec3d65c6017fab33a4b"],["/sakura-tree-background/index.html","27ac143b6c0422ba7ca0b77f3b13624f"],["/selected-button-style/index.html","477365436b79248a297d4d70dbbbabfa"],["/service-worker.js","a9a0c9b2f4c49cc28d263f8c7941318d"],["/show-variable/index.html","0a25651dc4a7f38714e8c6dad98bd367"],["/side-image/index.html","fb2b3741a505069ed3f8f333ae1a20ee"],["/snow-effect/index.html","f7ef13caf18527736e249000de54eba6"],["/speaking-animation/index.html","45f3891cd8a0d958da3eb27f7fcb075e"],["/splashscreen/index.html","fe80f3c79d804f0d981b248a689f2a03"],["/suika2/index.html","b365415a442025b4cd1e3c7f22aa0c96"],["/sw-register.js","3e2c29cbfa97f3e518bc2ac8b32daa2d"],["/tags/Hexo-plugins/index.html","530495a440acd5927dc33de67aebc4a8"],["/tags/Light-VN/index.html","492a7d43ab82f694d49412958a15de40"],["/tags/acg-creator/index.html","f5fed565bdc7998dfdd0353dfc103965"],["/tags/ai/index.html","303dd66845bfc6e5f57bd1c8cac8d090"],["/tags/butterfly-beauty-diary/index.html","eab8b68230c9d02957e7465f907dee34"],["/tags/custom-hexo-theme-butterfly/index.html","15936752e2315f8d2050eb9fd12722ce"],["/tags/custom-renpy-title/index.html","75b8f6f324501cedd7a8d49bb1e60977"],["/tags/dialogue/index.html","1079cc5ce66547312f48775d6d349a50"],["/tags/effect/index.html","560fd8c2b72bfe073d914e0bcca33279"],["/tags/event/index.html","dc2cc8a295117653a397461fb1bbc9b5"],["/tags/hosting-own-website/index.html","65af864431bfd185b75f1cdfa38b08cc"],["/tags/index.html","7cc24428dfe69dc3d704c68b092fcf52"],["/tags/itch-io/index.html","9413f78ea388b1618fe9cfa7fc161a4a"],["/tags/light-vn-update/index.html","28ced0cd07cac713ae0293b620919858"],["/tags/nvl-maker/index.html","73797bd43a4bfa76ddcc213d7eb51e96"],["/tags/player-related/index.html","c2c6ff8106d3c576902a73ae333cb519"],["/tags/pro-tutorial/index.html","7b27441f8456b713195144d424f9798c"],["/tags/pro-tutorial/page/2/index.html","7d85e8904a25b0a000a475761608b164"],["/tags/pro-tutorial/page/3/index.html","0ef972a20515ff0c2b0dfd41f42a32a3"],["/tags/pro-tutorial/page/4/index.html","61500981584ec0b441ebe1224b4e36e1"],["/tags/renpy/index.html","8ae1cda97ae87f720cfbcbb9d45ccb15"],["/tags/rpg-maker-custom-map/index.html","46522142e985df114f504b820f1813b5"],["/tags/screen/index.html","134bdf082d327f390ddabb88bb4670fc"],["/tags/special-function/index.html","802203527a93b7287686b9aa445fba19"],["/tags/suika2/index.html","efcca8fa53ec67cb0b8453d67928d13d"],["/tags/tyranobuilder/index.html","48d00d2b3588cd1fdd6530325b93eadc"],["/tags/ui-assets/index.html","3a197eb5a83b2cabf63a7b2c7ea9157e"],["/tags/update/index.html","1626fc779a1099fe6105180e4ee0a4dc"],["/tags/upload-game/index.html","4f9a30b1066a644ab09e2bd44e82d5c1"],["/tags/variable/index.html","f4aee51c0ed20814b58730373e911959"],["/tags/visual-novel-maker/index.html","a67f1ed60d40db4411ff058fa5b12590"],["/tags/webgal/index.html","3b51120981f2b8e8bcfaaadd39c25e7b"],["/tags/封面製作/index.html","2967a05ef400ee0e9eda8ffc0b392e60"],["/tags/背景素材/index.html","c33f6dfd3257f338e5819acdce6a3f7b"],["/tags/隨機功能/index.html","5af346bfc6c36b8654fda12e183ba57d"],["/test123/index.html","f8013ba4d274326b19ca98820290ef19"],["/textbutton/index.html","77175a2a75e313457dd48ef66f7f0bda"],["/to-do-tutorial/index.html","aa6cfbee060bcd2322e447cf4e0e169f"],["/tools/index.html","b44f03c38573a7b5fd5549aa7d8fa2fe"],["/tooltip-function/index.html","a0c90db8037b20761ef1ac794e443cc7"],["/transfer-to-hexo/index.html","f10c82d655c88cf3b11e94f397bd9fb5"],["/tutorial-update-history/index.html","a528d0b0d2381194791f31c264a05c3a"],["/tyrano-name/index.html","02ebd7780cf3abdb36d9e72e9f35d602"],["/tyranobuilder/index.html","ee18cde29bf684e3bbae91536a7923d3"],["/undefined/index.html","6d26009392b9a781e27dc9e0a290e09f"],["/unskippable-video/index.html","a62685d2aa684ad58c6b32765b528d1e"],["/update-20221211/index.html","bdfac9a9380634ca50c9132c82f1582f"],["/update-20221218/index.html","39c22dc822a1d93031cb6fb691c0156c"],["/upload-download-save/index.html","9824cffa3ef61d1e7f0bd00f06e402c8"],["/upload-your-game-itch-io/index.html","b3382860ebffd541218df77dcb7d2d49"],["/use-list/index.html","b859d36e1f634f425bae4e97bb66ff99"],["/use-nvl-mode/index.html","fcc6e182524f849370438cb10f70b6a9"],["/useimage/index.html","2f605ca4dccf0913709b0aade47b1b71"],["/variable-change-image/index.html","9c10d183307338daf75128b910c48b96"],["/variable/index.html","4bba49fc391ad391f0ad9559fa5f34b1"],["/vibration-function/index.html","1c0ca780469c50ecd4bdf88176553ac6"],["/vnmaker/index.html","cbde4d30be049af8553e6d04a4c113c0"],["/weather-effect-tutorial/index.html","0a27be1c8baed0d1a9f022cc8c1c58b5"],["/webgal/index.html","972b56288d9014ce11c2d23a73d1f7ae"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
