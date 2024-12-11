/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","f79234730adeef4b9ea8fbfd485c18f3"],["/2024-future-plan/index.html","b18641034006044b002e4803e85ab238"],["/2player-battle-system/index.html","788945296902d9cece324a16f53612ac"],["/404.html","57e9739580ef1ca0a867f491cbb9e67a"],["/about/index.html","8e0f14796bd0f13b2425c61114a67aa6"],["/acg-creator/index.html","e018359e4b32165c0216d66bc46de8c5"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","8469f733214b484d69746e661820e593"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","268652071c8a2177a6b665af880c3b95"],["/animated-title-main-menu/index.html","ff08d377e255eddfa7eb1938894067de"],["/animation-movie-cg-gallery-screen/index.html","0c192e1ed1fd7159795f13f6dcb4bc01"],["/archives/2022/05/index.html","5aa7cf65bc305dbdefb79b6edd8aeaf9"],["/archives/2022/06/index.html","75f955f178eef2b3bac292e434974ef8"],["/archives/2022/08/index.html","729e6432ddeefc4ddf82157142468d76"],["/archives/2022/09/index.html","fce3bf68da03795dde5541cda8b2b42f"],["/archives/2022/10/index.html","9c9c5bc79428971edc41931b374cb5e0"],["/archives/2022/11/index.html","f114de3484875435812ace3604fb8832"],["/archives/2022/12/index.html","e7fc60a66feb7db2c8641379a4c8450f"],["/archives/2022/12/page/2/index.html","893db633c01378bce31239afb3224c05"],["/archives/2022/index.html","efc666d7b8c3c35d4cd0f62de3cec99d"],["/archives/2022/page/2/index.html","73e3a316f49c2a32021f33b8a8699ba6"],["/archives/2022/page/3/index.html","686ddeddf8410263bfd82dc199f9d258"],["/archives/2023/01/index.html","67658ebcf2a6b1c4c3acf38a8df8e123"],["/archives/2023/02/index.html","2b6db5ddc873871076ca7aa6875a2f75"],["/archives/2023/03/index.html","1f4c7ff9d88cf422cfbe108d46678492"],["/archives/2023/04/index.html","0c084b03286060d8b44711ab1b26cc14"],["/archives/2023/05/index.html","eb3bd5932bfaf946373c74031765f5d6"],["/archives/2023/06/index.html","9010d17ee1c59edb7cee27c91ec39c19"],["/archives/2023/07/index.html","66503ca0dc24d3d0be751497ac7baa09"],["/archives/2023/08/index.html","c9e493ec15ec82e3c3b9cd4b2e07b008"],["/archives/2023/09/index.html","7f58139c585317a68ccdcec1016983e1"],["/archives/2023/10/index.html","4e7a7d77a70941a2e8b6f76874db2b02"],["/archives/2023/11/index.html","854f86284565a2a96e29ecb7da86b208"],["/archives/2023/12/index.html","44189b0c8ec68a9b54406dcb4199ce6e"],["/archives/2023/index.html","cf3a36d512b184912ae1cee6f5d7fd4a"],["/archives/2023/page/2/index.html","184b61d1c47b450ce7d5709bda7f974d"],["/archives/2023/page/3/index.html","3b3201ab6d3fbd8061968e61b0fa6f5f"],["/archives/2024/01/index.html","287d2028e946e260dfe4554bdf3f7c03"],["/archives/2024/02/index.html","6dd7a57114ee003a1296b7386b8b3dc2"],["/archives/2024/03/index.html","ee8241a576be0b92f1ebc16af57eeec3"],["/archives/2024/04/index.html","6a4792f9e1cd562df126b7679d1bf4db"],["/archives/2024/05/index.html","002884dc0af9c9828428bfa8a3b8157a"],["/archives/2024/06/index.html","ad2ab3d70831cc83181619a1f5e0c764"],["/archives/2024/07/index.html","34f77a3e18002d6b935699bfa9985c78"],["/archives/2024/08/index.html","582efd203143ecd46d625249e975c7b5"],["/archives/2024/10/index.html","311b22757e36434b8a0ed1fb29d39a16"],["/archives/2024/11/index.html","5e2371cd1085cfbe20bda59f279ff5d9"],["/archives/2024/12/index.html","94f5fb7a7f6ef2261c7c5f745f8f1280"],["/archives/2024/index.html","543c405a8fa9ba594d248177835ca7eb"],["/archives/2024/page/2/index.html","ed48afecff4c93e57e1df07398f78cff"],["/archives/index.html","eb803a266cd3fc678aa15b8123e4593c"],["/archives/page/2/index.html","aafce72f35126740dddd150589b1ce5e"],["/archives/page/3/index.html","6a9969385c58ee7463e2024a9bfa1ca1"],["/archives/page/4/index.html","d4435a40ebea696338cd75f4c8896aca"],["/archives/page/5/index.html","e04870c18569b283c0454a9e81883bea"],["/archives/page/6/index.html","a527fd9a00fa9e86e1bd6e3d9bb1a930"],["/archives/page/7/index.html","7ce782e100497410dbed3474069dcde7"],["/artitalk/index.html","2c6fddf96d3126e6169fb9d81facf6e2"],["/battle-beautiful/index.html","2b0d3c600a3ea99af32b111ccbff05fa"],["/blur-effect/index.html","c3cdbcf0c3ae3fc16fdf874dbbce73e8"],["/butterfly-custom-tag/index.html","0d2a774ecf0c7b8bec0c8b4f5f22e3e5"],["/butterfly-plugins-faq/index.html","92b8cb49dc73ca2490466f686a16b930"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","4cfacf438ecc3d6d2c66d88e256b4165"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","8c196b4daf0ba9d437a1649e41a33995"],["/categories/announcement/index.html","cb9005476d22552fdb90caaa777bb649"],["/categories/diary/index.html","6944a486fffa9add737913d374bfef3f"],["/categories/game-dev/game-engine/acg-creator/index.html","ce4ce18b69595f44658b6df7a381e711"],["/categories/game-dev/game-engine/index.html","54d87c30d779603eb088b4323de30dfa"],["/categories/game-dev/game-engine/lightvn/index.html","8da234f8b072c43e84755183654a1e64"],["/categories/game-dev/game-engine/nvl-maker/index.html","7de3c619c6fb1e717987c23b1dd6b881"],["/categories/game-dev/game-engine/page/2/index.html","416dc60e6cf0f8ef83fb5471c600a553"],["/categories/game-dev/game-engine/page/3/index.html","4145c0cd920a50fd41ea0f6fac48e04a"],["/categories/game-dev/game-engine/page/4/index.html","c81e4b0057346d28ff4c241a90a6ceb0"],["/categories/game-dev/game-engine/page/5/index.html","a8a40053f48565312605753f3aa6151b"],["/categories/game-dev/game-engine/renpy/index.html","7d9b45d8f4cbc91e305f3943aa9dc7a7"],["/categories/game-dev/game-engine/renpy/page/2/index.html","b03c4d73428eaaca9a7cf8ba14575e5a"],["/categories/game-dev/game-engine/renpy/page/3/index.html","443a7c4778dafdd080004af3f93bc6a9"],["/categories/game-dev/game-engine/renpy/page/4/index.html","6ecce6dd336b1f2883ba573fd488f259"],["/categories/game-dev/game-engine/renpy/page/5/index.html","ea42dab6ef61104a82c8aaf71bedb515"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","f376f7b132cfe3216446b2cf232b2d6a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","230a8676634bb4e1334b131c7a79c9e3"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","bdd4dbde78fd198f7d2156cc82605e92"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","1ad9fe9708024bfb468e838d71fea5f7"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","86f4e47e45fe2e7c359ea161ab488b30"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","8f5018836732b66a4f585289e3b09fea"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","b64ada94004910dbbb50416258ad5435"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","f0d2803a92577f23c4ebbdb259c8fb02"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","d9cf1b2cfe62c19f2c5321d06462ecec"],["/categories/game-dev/game-engine/rpgmaker/index.html","5ace197fbaa51df9a7195d784093318f"],["/categories/game-dev/game-engine/suika2/index.html","a662f468105d74ee68f160920f09c314"],["/categories/game-dev/game-engine/tyranobuilder/index.html","89dbf17dca5b66f21bed5f8314e40a48"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","30131c84cc7e24ce0685e679d5b7574f"],["/categories/game-dev/game-engine/webgal/index.html","5d782b32c20625e22c62f9e9ead00444"],["/categories/game-dev/index.html","97860782027f03d1661e7aa9ac124db2"],["/categories/game-dev/page/2/index.html","0c2c9808ca8de2bce01df1ad94a11e59"],["/categories/game-dev/page/3/index.html","d77089d14ebe623fab5c6a468f99a02c"],["/categories/game-dev/page/4/index.html","bf48be8b1a1ae153935de9f3c5a0478d"],["/categories/game-dev/page/5/index.html","afbd609094a30e20110bab3e16cf062f"],["/categories/game-dev/page/6/index.html","7b6d9bec0ab752f2e7fb6800dbb7b3c2"],["/categories/hexo/index.html","143b43b653ed1dc1957c68118cc5f91b"],["/categories/index.html","7450a0dffa0f471096065c2cb081b189"],["/categories/material/index.html","25f45485d6a73271208a05afdcb9ea85"],["/categories/update/index.html","8531f984334a775e755ed00d9846f6ff"],["/change-according-to-real-time/index.html","d6fd8b06088b205364a7e053b85c298d"],["/change-character-info/index.html","1622c30c837fb7348d0122e81799a1ec"],["/change-title-after-first-time-viewing/index.html","f22639a1a0c837d7844a2e996982b754"],["/change-title-based-on-event/index.html","ae89785e26295f84f64682da28acf64f"],["/chapter-selection/index.html","059973617557f561f110fd17ab15e16d"],["/character-interaction/index.html","5dd4b5baf6dabca505dfccb8adf65de9"],["/character-stats/index.html","a879686e07d4d05b627fc37c2929690f"],["/chatbot/index.html","4a1a664349f4a16cb2520e942138b1e1"],["/choice-time/index.html","be986ead00cd86881860c094b59ae08b"],["/comments/index.html","f1d78e9b029c7560090045fee791dac8"],["/commission-info/index.html","5709d30ed6a757237c0597ac95f8044c"],["/count-login-number/index.html","f14b3fb272ce05d7a05ad6d39c65ac47"],["/create-button-anywhere/index.html","ddb2f995ee5bdf5f170dc50f58b46978"],["/css/eurkon.css","9672c4799c27fae81560601d2dd32402"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","7b8112b9336b06f467b62e61bb6506c9"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","24c302b09ef7ca61fc5a3ca9af40f65a"],["/css/rightmenu.css","157839c49417c761684e3ae76086099d"],["/css/siz.css","036244d74e4699bc8f75e5a13818a0dd"],["/css/swiper.css","c218d7ca18c36b5be80f0f432342cf65"],["/css/swiperstyle.css","ba7abfde7b86b4223b64ed65929dd8af"],["/css/var.css","1d0699abbed7af669cc246879b56ea88"],["/ctc/index.html","863c14617fefe86369dc5ea451a23425"],["/custom-credit-screen/index.html","dc437a9ccfe8c71b88d2f833a4a4ad00"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","896bcf0d9d7a66099ccaa965691d153e"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","e25a0b4306c0f85606041474c0162c04"],["/custom-gallery-cg-screen/index.html","7858e89bc742bef4d980a0bdf0fff1f5"],["/custom-launcher/index.html","4f91d095c8ffba175d08e85797ecb369"],["/custom-loading-screen/index.html","57d1f7ffd5cb058da52d189e3f6a6fb9"],["/custom-mouse/index.html","f671a2078765bb62a49778e9cf75bac8"],["/custom-music-room-screen/index.html","61bd0e0f2925857fe818e496f8f49cbd"],["/custom-music-room-screen2/index.html","9dcd6d874e02e66152f5b82bc258610e"],["/custom-nvl/index.html","968e8934cbd0e3c0eaccec500579fe03"],["/custom-player/index.html","3507a8527ee3bc01269df40541f13f12"],["/custom-preferences-screen/index.html","931f4cc670c143e53584999e44ae6ec4"],["/custom-say-screen/index.html","9c042a218a801dc9ce8d7a8fccd67baf"],["/custom-scrollbar/index.html","4f1e1e44a19b3f9846a4ba99954c8c95"],["/custom-style-bar/index.html","61c31c6318f15ef7037269cd3722e321"],["/custom-style-box/index.html","ce201d3fa6e41eb1f48c5cc8438f724a"],["/custom-style-button/index.html","c744659a256c705b712a4591c9b1c067"],["/custom-style-grid/index.html","a66062da81de8a7c6c9fb77c5e767afb"],["/custom-style-position/index.html","8fce5254c272e82aa7927712517615da"],["/custom-style-prefix/index.html","6b8c8efbdb0f67984588c60ff7955d85"],["/custom-style-text/index.html","c273ac8f8cdec7373a9804a17ef8bc5a"],["/custom-style-window/index.html","326923b44230f7c25c16d9779430cab5"],["/custom-title-screen/index.html","fd46622f463bbd9d63cb98b9b292ca8c"],["/define-npcs/index.html","6506edb949d1a9bc5d4d3228cf363a28"],["/delete-save/index.html","411bf7a10ae81ab4757d4e6d2224fc29"],["/dice-function/index.html","6983e43688916b1f6f05c182ff846233"],["/disclaimer/index.html","eec2cd144a9a5f70034d5fc9006a692e"],["/display-immediately-all-dialogues/index.html","092ca1e1470d41fe8811a705b4eb52c3"],["/display-real-time/index.html","99064cb37c93804b0496f64309323ee5"],["/en.refund-policy/index.html","5fdf6c2d550af28afd48c0408290ee8b"],["/enter-name-screen/index.html","f0315eec5b4d67007fc628fe563b9c48"],["/export-game/index.html","27daea40e151e4ff8c421d5521aaf3a7"],["/faq/index.html","4291a5b27546174cf814fa1a40dddb95"],["/friends/index.html","9ec758e0f1c777979e8ec12c4e98a316"],["/gallery-template-assets/index.html","882ce3803bb64f1345e34199f97947cb"],["/gallery-template-default-ver/index.html","044677cf5889569e32a7293a4797baac"],["/gallery/index.html","8e65bc51885caf9f80bb0856d05bdff4"],["/gallery/photo/bg/index.html","ddabc5ba9811209777dcdebce91c4b5f"],["/gallery/photo/gui/index.html","d6267cc5520ac3c82e66896211ba38f5"],["/game-only-text/index.html","ba23e8c2124a19640866223aaa37c589"],["/generate-random-name/index.html","bdcdac6fe38b7064851073044a6b83be"],["/gui-017/index.html","3f2ec189762d36c20a9a3bb4287f853e"],["/gui-vertical-002/index.html","99cff1c65283e5c253f62ef7e9f8f484"],["/gui012/index.html","a9991fbf352031aa99b85a07f706a0f7"],["/gui018/index.html","884f53a0938bae7cb62c58d1b487e40f"],["/gui019/index.html","08b63bff3fc9687eb10aa25193486a55"],["/gui020/index.html","dbbb81358156e3be619e79f454b8b241"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","67e4f72b78048af0026b99071f3f5c88"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","036a5e878894dbbd3f7d4b9ce3475c95"],["/hide-quickmenu/index.html","781351cfce5ed3d024ee0106c0bac033"],["/hide-textbox/index.html","1bfb1ae058a45e4c23278b3056bef26e"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a73d8c3cdb4709f4788b9215b6041e76"],["/images-tip-function/index.html","7904b562f82c87f649c7d4cf642898e9"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","f1939e511d552569ccee7af65df1d61a"],["/index.html","e25f3fba9b90aa386b6717e00a6548f1"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","5300598851252612b4e68ca38fba0ccf"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","d2116674e0a0ebed24c59b79e1e3b5d8"],["/items-sprites-effect/index.html","925efb3950c993f49db86f143566dc5d"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","3f45fed478e8fc88280417bb71641ed9"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","839b99fe0c9066ef2b91a6a3c4d84b43"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","8aa745ed39ea607d801bd950c8eef1c0"],["/link/index.html","94974ec7059d7829d96049a43ca76fbd"],["/login-reward/index.html","f9f8a6b84eeaf87a5f925a6f601f7e95"],["/main-menu-music/index.html","3e1f2fab8bb8543c3376e84b83cf11a6"],["/make-butterfly-beautiful4/index.html","118082a3b510a88413c87bc884dc5502"],["/map-puzzle-system/index.html","c99e9acdcea4a7e7081866263c409179"],["/maple-effect/index.html","923d744b68e95f91093f96451ba787fc"],["/memberships-2/index.html","d1f15dbf2fc332ec4630f7df087bfce1"],["/memberships/index.html","9c8e4b8533081879ffa6688e2bea3964"],["/multiple-language/index.html","5e87eb3d2931c3cea959020749b1e670"],["/name-input-assets/index.html","617a5c62a62d9e45d1b10fa0707805d1"],["/new-year-event-2023/index.html","be0f4ab1df24465cde9532c3581b7c5c"],["/newsletter/index.html","701d5f935ef7ef7dddd1fddf4836ab8d"],["/nsfw-limited/index.html","63fe2d5806b5b7e72f0f995f1918f4ee"],["/null/index.html","7f5eec8a71514be77bbd2b07e9cd5e2a"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","1d13329290db8b514fb45eb2a20c0d3a"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","f891936d1a8acfb740946ba8dcc47556"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","2426ec593d2a9ad92017af048f980583"],["/openchatai-renpy/index.html","ffd34e7aca7a13387fbd1fda6141677d"],["/original/index.html","3062738e3ad05c0c6c0760dc9a63faf5"],["/page/2/index.html","4b3a51f3a93792393e6e5cd626565595"],["/page/3/index.html","49e0cfe49f49cc69cfde0110a4add510"],["/page/4/index.html","e5cd7c020e17d5d8641504d53787f250"],["/page/5/index.html","4597a6c0dc03c3251a0c57160483834a"],["/page/6/index.html","a42f66c249b3e02b17df8cbd8e4efc1b"],["/page/7/index.html","753e6bdee68235e63c752e9227fb1457"],["/point-pop-up-assets/index.html","de10bfa0517cd63a27986046a5e933ad"],["/pop-point/index.html","b55645b876c8ed12d889d5070457561b"],["/privacy-policy/index.html","7239d2b267ddeff65a135e272f5383d6"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","8c427bf835be8d601dfc854ca8a11210"],["/random-number/index.html","f6d8a6ca29680db564570bc8178e6869"],["/random.html","2d8a070b926778a8b72543495405c5ab"],["/refund-policy/index.html","83b5572b8a93841913cea996956107ce"],["/release-017/index.html","5f6fe5277496c07cd1e7a6df2bdd5546"],["/remembering-choices/index.html","ff71384dd93709cb07fc419721451139"],["/renpy-basic/index.html","2eb52b34915ebb4621ed51a0b776ae04"],["/renpy-crash-glitch-effect/index.html","0ed8fb1080f19ccd4baa35fc2a0c65d0"],["/renpy-flip-image/index.html","ddd07b89a7328df774c7340ab14d07ae"],["/renpy-matrixcolor/index.html","d2f21b523ff109cda5d2298817f76270"],["/renpy-overlay/index.html","1fc78cfbddbf386d18386da8ff79afcc"],["/renpy-review/index.html","6652781a585a72168e3c1b69ab3b9687"],["/renpy-typing-effect/index.html","948070234e2d970842874e8ceb0d3b60"],["/replay-cg-screen/index.html","1625c3878be6b192574385785c8efdd9"],["/rpgmaker-assets-menu/index.html","abe4d1fc7eaaa22d7e1aa64bd0197a1f"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","e527bb92caba50c6f83ecd09afd80061"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","768cf5127fc24ec87bdeee1c823d13a0"],["/sakura-tree-background/index.html","3d87276a955d0d2c7c3f6c670b0aeb26"],["/selected-button-style/index.html","17a4d669cbf2396bf6e0dc71173b0573"],["/service-worker.js","28dd1df290e88140ec49b42c1d582891"],["/show-variable/index.html","525450cfa74615f64c86299de23f333e"],["/side-image/index.html","c730602ff8be16ceec0d5e0109316838"],["/snow-effect/index.html","b1bf4819ce8a9d74f4a886ebd5104d3a"],["/speaking-animation/index.html","e18021b4b5eaa43242da1109384e6b2f"],["/splashscreen/index.html","e177180fc015014d793793df1cd4ca0a"],["/suika2/index.html","503e0d5a6083b379d47230d60db1ba60"],["/sw-register.js","dde53d59bdd2f4ad2f203fdd93e80804"],["/switch-chapter/index.html","add8689df4cb7bf5228db39ca253d4e5"],["/tags/Hexo-plugins/index.html","04cf579da4edb6af913ba284c4a72ddd"],["/tags/Light-VN/index.html","a01484c6470ecdfc90c403a128931925"],["/tags/acg-creator/index.html","b49b798db1b294f3c83887990cc14c8a"],["/tags/ai/index.html","f8d38b6c5751558e7cde578a791f88a1"],["/tags/butterfly-beauty-diary/index.html","5c698a58849928b79e79bd139efe0c53"],["/tags/custom-hexo-theme-butterfly/index.html","97f7343032054795b12ebbe3a3321124"],["/tags/custom-renpy-title/index.html","8b776fef134478bdc56a5f401a6e3969"],["/tags/dialogue/index.html","e0fe394012443dd2f77d3d0fec29de96"],["/tags/effect/index.html","1e25489760a09e933068812aafa6f00b"],["/tags/event/index.html","a36959b8ff72ba01a0514822e5a02af4"],["/tags/hosting-own-website/index.html","345696bde11aa5f54eb2892e8be3e4f2"],["/tags/index.html","33239436f43cd3427c022733e7f8c431"],["/tags/itch-io/index.html","eafd8f4b71122bb8c54dbb998c1ef281"],["/tags/light-vn-update/index.html","00d99569b840bde6daa3cababfcd7637"],["/tags/nvl-maker/index.html","f84253c427d033b70000794130ccbd83"],["/tags/player-related/index.html","4c9a6c08eb731629ba639643f88363af"],["/tags/pro-tutorial/index.html","bf0a97920839c6e0b90bfe915cf45432"],["/tags/pro-tutorial/page/2/index.html","cfbcfb5dfff576a94223b89dc09f7139"],["/tags/pro-tutorial/page/3/index.html","c66c60765233cb68dac1f4f7add6d9e1"],["/tags/pro-tutorial/page/4/index.html","14af5342626d3cc34f8d18c351c3a707"],["/tags/pro-tutorial/page/5/index.html","54f187689ccad06ea930758ce9f4a16a"],["/tags/renpy/index.html","b49b418d69421af9248b2c1afd415936"],["/tags/rpg-maker-custom-map/index.html","e741032490bcbd89d90c5c1d645fab15"],["/tags/screen/index.html","da1600ae959c3a773d70b28d11f126da"],["/tags/special-function/index.html","2da1e59b46b7da91ff6d1c818b84aa27"],["/tags/suika2/index.html","03e4fc6ba651691f6f0d452dd4074bc9"],["/tags/terms/index.html","19ef610d3c1bf127de8939b64f23109f"],["/tags/tyranobuilder/index.html","446da2eb36b9e3e8ac658ee2f0e582ad"],["/tags/ui-assets/index.html","67afd4dfa31598bf0190ea6d1ed63ff7"],["/tags/update/index.html","15b49e0cf951a9a3d169d722e465fd5e"],["/tags/upload-game/index.html","23fb90a41187132654e7db097a31ae12"],["/tags/variable/index.html","372a86880a895d89cec6910b76857f6c"],["/tags/visual-novel-maker/index.html","0fc065005026fc36e03532d489b79242"],["/tags/webgal/index.html","a0f3234bcbbb23e54d0f31d9a4f31384"],["/tags/封面製作/index.html","22dfe192311198fed1a468daa963195e"],["/tags/背景素材/index.html","4dc8caff010cae02684afc1d3092408a"],["/tags/隨機功能/index.html","26525273fa12dfc84095ebacffcef563"],["/test123/index.html","5fac67100cb2391cc108c26f4e7e5de1"],["/textbutton/index.html","2d9992a8aa41ff17b6a6763af214c83b"],["/to-do-tutorial/index.html","c0e7af000c8f88f67efdf10f27ff5773"],["/tools/index.html","e486f78747fcf77fe570244d79bb9f3b"],["/tooltip-function/index.html","15cd86b2e4021dfce037841963326965"],["/transfer-to-hexo/index.html","78f19c607ae86ca3368d841ecf25bb27"],["/tutorial-update-history/index.html","36f3b6d69c418d4040b378cab4793d20"],["/tyrano-name/index.html","58fe4baed580ff24181b27d5204575a4"],["/tyranobuilder/index.html","322094d355643a6b11d6dabe6928aed3"],["/undefined/index.html","e042a01f94b6418ec1306608108a6286"],["/unskippable-video/index.html","c445690c824a9b20c69eb85cd9020224"],["/update-20221211/index.html","69828417e81716908b8af425ee28db78"],["/update-20221218/index.html","f0099d36b8fdc4ba606ba1bc641a5677"],["/upload-download-save/index.html","3ebf0931256bc0ec0f15aedd7243ade3"],["/upload-your-game-itch-io/index.html","c33509fe0fe9f990514dca145d4b9b3c"],["/use-list/index.html","94cbf14a25ca3bfc34cc657a5680c4ba"],["/use-nvl-mode/index.html","199452a268de8ca27c42066a4de7424f"],["/useimage/index.html","e2b3f1c8631d1ee71998aad24d5c8019"],["/variable-change-image/index.html","e86fb5b9b6b38b8200934287c3f25af9"],["/variable/index.html","1e21d7cc7451caedd7536f2b622b56aa"],["/vibration-function/index.html","7d4ca58a7043cc4a0eb4b8c851d375fe"],["/vnmaker/index.html","ef52f17f30af7f12615c8f244d30203b"],["/weather-effect-tutorial/index.html","7f42af4cee3f5baf16b9eaa429dd2f0d"],["/webgal/index.html","d1f7f19bdc8f90ea03a7697b12895907"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
