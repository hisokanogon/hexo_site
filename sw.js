/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","37ab7b7dd3f439d5a3c330d0600b9c19"],["/2024-future-plan/index.html","0f91e153aa3f30d6a5d2f5c3b3e3effc"],["/2player-battle-system/index.html","cd8964f546f33ca3bf787c947e134099"],["/404.html","ef5ae1b2956a47c6bc8da4d76c5ba2dc"],["/about/index.html","7ea2204a5880477d915b1039ad0508c6"],["/acg-creator/index.html","b63377e80febcf98232e921f7f6d7f8b"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","e4cc30ab8fff40260a83cc002173d652"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","63e1e3d90a6bd911c70906077532e935"],["/animated-title-main-menu/index.html","df27e4666678752660e887675db86854"],["/animation-movie-cg-gallery-screen/index.html","4f243696d0f02d1330f157d9a1397bbd"],["/archives/2022/05/index.html","23645c8c2f35249dbf2a90085b68c2ce"],["/archives/2022/06/index.html","b1fdf6fe40c3b85b3cd06fb780219048"],["/archives/2022/08/index.html","f9f5ede34acd5c37a6ae241ccfcd1846"],["/archives/2022/09/index.html","8531f10a5c7a1330d6a84f9067023df9"],["/archives/2022/10/index.html","7200347a9bad9c91355b11e3449a6a29"],["/archives/2022/11/index.html","a35ce87d0890a25e35603f6323fc46b3"],["/archives/2022/12/index.html","0cdb5369b858a638602d3eae7df30c07"],["/archives/2022/12/page/2/index.html","5cf652d7ee057bf969d80c22b3966ae4"],["/archives/2022/index.html","66dd2bd84e1fde8924b35830acc7c7d2"],["/archives/2022/page/2/index.html","ed8fb87ac897bcb91a47646d159b0e3f"],["/archives/2022/page/3/index.html","00f4f90505229effb6ea0d5f38da1e5d"],["/archives/2023/01/index.html","f18945e3f52a026ee5e682f83d9899e1"],["/archives/2023/02/index.html","1100efb5472c67763818d5734a2bedc4"],["/archives/2023/03/index.html","f7c3783062d4097cc9d1c77945e54d30"],["/archives/2023/04/index.html","be75c44d45c1759ea380a1a4aa373526"],["/archives/2023/05/index.html","4d01ff658bb4b41ff4dea629a2269704"],["/archives/2023/06/index.html","e357adad16e8f8b41e33dca3bde2a4e1"],["/archives/2023/07/index.html","2f15a4c9502fbc0bd4f195533e92d4ae"],["/archives/2023/08/index.html","02eaad24ac973b7eb9c4b714a8039431"],["/archives/2023/09/index.html","7908882848645d7839f913bf7e1ba674"],["/archives/2023/10/index.html","45620a71c52fe2b0f72848f8b0c5f208"],["/archives/2023/11/index.html","4632fd1c4bca1dba5cecc7451d611a17"],["/archives/2023/12/index.html","17c0f53fdc80db80c69cec74c38186bf"],["/archives/2023/index.html","81834429e781eb45e9967aaffb8e3637"],["/archives/2023/page/2/index.html","f063dd4e70eca6972ec709df5efdc2b0"],["/archives/2023/page/3/index.html","8804d23de466ec70b155826aac02d2d2"],["/archives/2024/01/index.html","17b105bc7b94c91b2f9535c65c6ae542"],["/archives/2024/02/index.html","025f8b6ffd6d6188734fc99ccfee21fb"],["/archives/2024/03/index.html","2da845661438f798fd228de178b28be9"],["/archives/2024/04/index.html","a6dfdb9448e40e3a53dbc1cfa6f6e264"],["/archives/2024/05/index.html","e78322bf9cb58945fba08cf1b16b3a94"],["/archives/2024/06/index.html","678eab604dd9853b59abb2d539d0897c"],["/archives/2024/07/index.html","db39ba994e894394c04081b3dbda1209"],["/archives/2024/08/index.html","d21414ea7915fb68554971c24c60a731"],["/archives/2024/10/index.html","96ef7beabbaa599d4b6d19f0172be6e7"],["/archives/2024/11/index.html","b73799e44a017a01764ac8c603152feb"],["/archives/2024/12/index.html","c2523844a547cb0cc207c4538cdf9d04"],["/archives/2024/index.html","112bececb8c12c401214ae1505d7984b"],["/archives/2024/page/2/index.html","8700afce4d86735b8db87743b07412df"],["/archives/2025/05/index.html","114cebf23ac15b8c7a2bb1af60635071"],["/archives/2025/06/index.html","1afb24fd864531e908032a471ead2e13"],["/archives/2025/index.html","0cd6a7407320d98405f516a40929ef6e"],["/archives/2026/01/index.html","44b9ce9a6e8b5e8401cc36afb9f46709"],["/archives/2026/index.html","8f61eb87b1f453901c1e4f53238ef0d1"],["/archives/index.html","08461c5b9a8c39b8155106219c7463ff"],["/archives/page/2/index.html","962b9988a650bff14fdb13c8ad31995c"],["/archives/page/3/index.html","23c0bae6a5d07d58b3f28d8b89268b34"],["/archives/page/4/index.html","b5298153ea33ef925eba0731ac31b76f"],["/archives/page/5/index.html","13a52c026fb923cb7624098b75c02819"],["/archives/page/6/index.html","fce828632809a361aeccc3de1a51199f"],["/archives/page/7/index.html","e08266b60e9480ffd338d687d1c98fbd"],["/archives/page/8/index.html","c496cdc9ae69dbeb95c7393542bd2250"],["/artitalk/index.html","cc5653ae499eb8bfbab115e6a1e8a69c"],["/battle-beautiful/index.html","b251185cd9950157904b3ec63f480952"],["/blur-effect/index.html","4fdf4d3c746de61456e5e9b09013e269"],["/butterfly-custom-tag/index.html","caa95cefb71e0c6bb6c770c5cd719d47"],["/butterfly-plugins-faq/index.html","07748bf20e4561522973fed591c20362"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","a360153e36794d2062493fa15f8779bd"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","6689255672887d507e54bb0f028588fc"],["/categories/announcement/index.html","f80920ede28a33897d026383bfb62491"],["/categories/diary/index.html","0569123d84d4cccb39eabb5485798a22"],["/categories/game-dev/game-engine/acg-creator/index.html","a9b7af6d168e10d4b7109d0a1464908f"],["/categories/game-dev/game-engine/index.html","60ad53c80cb64d1c8275a78c8e739ab0"],["/categories/game-dev/game-engine/lightvn/index.html","44ff1fa63bc9168350b2bc8589f9cf94"],["/categories/game-dev/game-engine/nvl-maker/index.html","7e312f2f76397ce9f6e9b6ae972c9a3b"],["/categories/game-dev/game-engine/page/2/index.html","514711dbb35a645e4e3b0a4057c80ac0"],["/categories/game-dev/game-engine/page/3/index.html","12738b244835bdb4e72c637698849f48"],["/categories/game-dev/game-engine/page/4/index.html","cd5e664880a2c013a2eddf0c591b3272"],["/categories/game-dev/game-engine/page/5/index.html","1cf6fd549e1150030c03997a518e49f1"],["/categories/game-dev/game-engine/page/6/index.html","0080a7c4828784d09a3753324ff2fb7c"],["/categories/game-dev/game-engine/renpy/index.html","f4c441b4bb9c4ed477cf2de31d46ae9f"],["/categories/game-dev/game-engine/renpy/page/2/index.html","d77a2cb19b2a0175b045370d68bc8c04"],["/categories/game-dev/game-engine/renpy/page/3/index.html","08c3fb29ed7345f9c2b443260c05cfa2"],["/categories/game-dev/game-engine/renpy/page/4/index.html","9d8c73af79845394fc373387fefd063b"],["/categories/game-dev/game-engine/renpy/page/5/index.html","6fa2c7d2a42befad4856bb0795f60c93"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","0f900c0aee29a848d6471f0075793897"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","a05240986da100f053f6aeae7db0efb7"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","cb26dd8404cf10376d654fd73973f838"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","60aaaae0215cff76ae6868a0beeb7c4a"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","94275171c6cca5afdc5caa20a63b204e"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","619985885a4610d4edee3619def572ec"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","6757af2b5ddff46eb47d01a2a4736805"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","fadd05e9029603c3b3f4f135ef70321c"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","a957e6f5552046064549ebf0411fb3ec"],["/categories/game-dev/game-engine/rpgmaker/index.html","cf187a5cd6bbccceba7a93861e4d076f"],["/categories/game-dev/game-engine/suika2/index.html","371569d9e284d3119efe0f9535219f77"],["/categories/game-dev/game-engine/tyranobuilder/index.html","48b63cf9f631388b860332cafe782ae6"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","1b8baecdf97278b21e89442a4cf296c2"],["/categories/game-dev/game-engine/webgal/index.html","1e6e0034dd5ea45b691348b6e6c8ce5b"],["/categories/game-dev/index.html","da069dcfca1b2594bcf0238581923ace"],["/categories/game-dev/page/2/index.html","2a97319f86f08b79ebd549f0258fd1e0"],["/categories/game-dev/page/3/index.html","55758fbd6b729bdf555fe9d0ac8361d9"],["/categories/game-dev/page/4/index.html","d5e9982d3ef8633a08798a5ab97323b6"],["/categories/game-dev/page/5/index.html","d257e6899fd8339dd02579cc44bd24c2"],["/categories/game-dev/page/6/index.html","727c92bc05cee780f123d35a3be57f23"],["/categories/hexo/index.html","cdbe16e7be3c5dc328d01c4906f1345c"],["/categories/index.html","0dfc2e985fb0f7f368844aaed1fa9da9"],["/categories/material/index.html","2c1ab015bd505bc9bc5150cacd4e1db9"],["/categories/update/index.html","b5876f12266822911991debdbeb9ea10"],["/change-according-to-real-time/index.html","e388a941a6003ca053b919166dee3fd0"],["/change-character-info/index.html","835ed030a0ba0a8f3bda88d3fdb4b702"],["/change-title-after-first-time-viewing/index.html","19c4dc9f584103588e1910f0ab626e57"],["/change-title-based-on-event/index.html","c7423d4655604ce12df9c020f826f6ab"],["/chapter-selection/index.html","91e0ba65b658a6a7dce7a2a90065470e"],["/character-customizer/index.html","b806a52b399a39925623b5b9c38f53ac"],["/character-interaction/index.html","e88e38bda7910536ea0a8d43706cb518"],["/character-start-personality/index.html","27103d94403be1c81bddb05b9be45709"],["/character-stats/index.html","b0de1b72f1d12b792466a83f8a52276c"],["/chatbot/index.html","d958df1985e87fbd6581b80855e55d67"],["/choice-time/index.html","26f802629689bc31f921a1be267a5253"],["/comments/index.html","89feebe11e95e65e3982094aafd71739"],["/commission-info/index.html","c981abd33862e352fde439b219f38c49"],["/count-login-number/index.html","64bd9682f30cf38120b32a09a4633276"],["/create-button-anywhere/index.html","95359832e8a0a91b385f888bda262e48"],["/css/eurkon.css","24f96af3ddd1cbf855486b24ff6cc7aa"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c9f900312106f470606a2d440d016c94"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","88df00ed74a8742e0c431e9ef6bf8d88"],["/css/rightmenu.css","f2fe44102c37cddc26db7772388fd2ad"],["/css/siz.css","68fd7edd64a321f9aac6382dfc233bca"],["/css/swiper.css","5c18e7edddba5e1014de71f5583fa7c7"],["/css/swiperstyle.css","1dc361648d6b4a096f55e87fb2f91fe6"],["/css/var.css","6d36ff8584ae040ddd4e24e69c6c8258"],["/ctc/index.html","f8fa3bd559a176a46844fa562e43ec16"],["/custom-credit-screen/index.html","01ab215c6776fb166dd97942d29d7c3c"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","3038ac7bab2d1850b0a875c5a5f3e61a"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","ae1da5700777ea7b195c2e3d4753c196"],["/custom-gallery-cg-screen/index.html","02c20dfbe61b19a56f2de33ae8bdd58d"],["/custom-launcher/index.html","d8d553791ed0eb3185b52da31f9d1e11"],["/custom-loading-screen/index.html","1ac50a34c7d7385aa4632f13bcaa7c96"],["/custom-mouse/index.html","8034ae5db1bd0497336e008e2b55a3e3"],["/custom-music-room-screen/index.html","1857cb95b69412736f6047c1e6988b81"],["/custom-music-room-screen2/index.html","19a842bf234fb6d0b8e302e5b74d2e74"],["/custom-nvl/index.html","3150867f19972ab25ae73e554775134b"],["/custom-player/index.html","8a981533720dd2199d6aa0d40affa37d"],["/custom-preferences-screen/index.html","0645592c2631bc14a91adaeda8798e55"],["/custom-say-screen/index.html","88528734ece4e7ca830069953f400ac5"],["/custom-scrollbar/index.html","3752d7e9be73b5c015cd434b4a265a95"],["/custom-style-bar/index.html","108e570a167d8539c6bf9b4e79e166c5"],["/custom-style-box/index.html","4085cbc686f469a73decb8916553a3b4"],["/custom-style-button/index.html","2177eae30667d7c344df1718a8559b6a"],["/custom-style-grid/index.html","6b7ac00e66415d0559322b08afab197e"],["/custom-style-position/index.html","9c25dfa93e92cb214daa9d354a5c5d75"],["/custom-style-prefix/index.html","a92b71744d52ae8486d5b6cd0133a089"],["/custom-style-text/index.html","4bd9609418063a2696313696a23be5d5"],["/custom-style-window/index.html","e973f2c52ecd1eb828560a765bce1553"],["/custom-title-screen/index.html","5a99bcfc7a7ea4437e34513dae9596e6"],["/define-npcs/index.html","f491275f904c579e003497155ac9a299"],["/delete-save/index.html","a9d5f8281ece60777cb51515ff384e26"],["/dice-function/index.html","ce0b2cb3ddc42eba5bf415079c6e320b"],["/disclaimer/index.html","18d054f4abd829ad89ea6845c8a7ad8b"],["/display-immediately-all-dialogues/index.html","d71b8842b14e903313be9a8a161e4884"],["/display-real-time/index.html","d6e22ec04468e41116ea47c1d374eeba"],["/en.refund-policy/index.html","af3b2264cfc9c98edc83bb7342c320f2"],["/enter-name-screen/index.html","e0b65cc3471bc8e088b90be44c52d908"],["/export-game/index.html","d51c15a66bef5a4f71270ec4cef32c7f"],["/faq/index.html","42c32308bff0fbc9f556ff46c5581f3b"],["/friends/index.html","8c5bae8ddd655b5bb2a1a7933dc788e4"],["/gallery-template-assets/index.html","1ac2de80172b36c1b18892bc91464412"],["/gallery-template-default-ver/index.html","d923108b39e054b232e591a8eb2cc410"],["/gallery/index.html","11c7d1f8aec28ff5fe3c14e91018b931"],["/gallery/photo/bg/index.html","ff22afa5da4ecb38985ee5e271c5e7ff"],["/gallery/photo/gui/index.html","598ff186df1fad1b93c0996cfb0af556"],["/game-only-text/index.html","6ae1a4a7cfc95fd3b4892d391d5ca641"],["/generate-random-name/index.html","35b7be85ccbb77034a443ac232d67685"],["/gui-017/index.html","1fb7667dc7d29eb67f31fa034e63ea3a"],["/gui-vertical-002/index.html","3d210e1c03cda15f783b36d240562618"],["/gui012/index.html","2bb47f4f57b549f60f9028b816908fad"],["/gui018/index.html","3e13c5a6fc24ade2fa4014a8bf264d6d"],["/gui019/index.html","4309cb0e169973b1f3328542730c6068"],["/gui020/index.html","990811f09aae95a21db71b2554fd7937"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","682d7186c6e50803574625a20492b1a3"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","feeaef5d0168ffced110c537c7addb90"],["/hide-quickmenu/index.html","83c32b6a4ae3f16a4bcdc176b7c58281"],["/hide-textbox/index.html","0fad7950255310d6fc774489ca26b32a"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","4285c4d30849dcc55798da7f4689db6a"],["/hp-bar/index.html","be8c9eccce056ce54f04d1988d4fe609"],["/images-tip-function/index.html","f8e73cbc9bc74a562640ac78d8241af2"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","bed4d303595ddd27ebe1ea33ad9e22ac"],["/index.html","0ba493b5c0667a505156afb48197d682"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","4c4a55a53fd208c03eff6d8e40d99274"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","ed5ee82377c063f9a998d0d21b9bab0b"],["/items-sprites-effect/index.html","a22be069a4f28916fc3ab77ddb08330f"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","790305685f239401edbe22bdb0e0912f"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","3d8d11cbc9c4222ceb6b66226103de62"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","5479c7ef50922965e695b073d5fce76f"],["/link/index.html","3bd1eba9803369be10ae16276fa19ee1"],["/login-reward/index.html","fb0110d9147f1a7ad68bcd11ec96be0b"],["/long-press/index.html","6da4b9177d6ff707cea5d5e1a24edd97"],["/main-menu-music/index.html","730fcfc8f890823c25f85dbeef213931"],["/make-butterfly-beautiful4/index.html","79066a1e278829a21f0f6562dd454d00"],["/map-puzzle-system/index.html","5175b18dc3f486ade59e8f7d6705b7b1"],["/maple-effect/index.html","a9840ca5975e87e2bf45c6ff0ae919f0"],["/memberships-2/index.html","4c2bb8f9aede1d893fea23d3b4a6c461"],["/memberships/index.html","59bb4396993293d59ed73d2188d27bfc"],["/multiple-language/index.html","121b7046d572527b4b340eeb96df863b"],["/name-input-assets/index.html","6cd4e18868d967d6c84a4d5316457969"],["/new-year-event-2023/index.html","e5b54b618a286cb367676d74521a0616"],["/newsletter/index.html","6afaadf2a6dbea84ad56acb79abf6e79"],["/nsfw-limited/index.html","85979402a3588d9294a3b7779e3a8aff"],["/null/index.html","877970774d78e89cea7fa3b33aa253d6"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","67cf01007c5736704c22b39575d4c89b"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","f5204f1267dcd5e1a915b8b91d0e4858"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","d5e9174e5bded80da47a52ba10570783"],["/openchatai-renpy/index.html","a388a838758e2efa82ea715dc8d9b5dd"],["/original/index.html","bc98f9a2e2a8a13cea1e87b0cb21bdc7"],["/page/2/index.html","9e0615f0cb1cb7ddc9b8917ccf942dc2"],["/page/3/index.html","20f1b2b178167811f47c54d087d46c60"],["/page/4/index.html","361cd4afe626ffbff0d740def45b4f21"],["/page/5/index.html","02c45e5ccffba3fda9455d4ce559acb4"],["/page/6/index.html","eaa9c54847ae7cdf21d6afae78140e37"],["/page/7/index.html","6ed73c5b0de9493ed5cc12076adb97cd"],["/page/8/index.html","5ee0d1939afbb8c154c486bf7f19615c"],["/point-pop-up-assets/index.html","a0ff83ae7b00e59dfadc5d058ca95549"],["/pop-point/index.html","18937bf1ab7c0748af7965f3d1c63f0a"],["/privacy-policy/index.html","b203a2ee64044e00836480f854499733"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","95f58950e4caa9949374c88fccf24856"],["/random-number/index.html","505e7acfdb54c8752546bef7daca83d2"],["/random.html","abacaed5c71df7cba1885ed76b6eb280"],["/refund-policy/index.html","895424f1dfcb2f6cafb4521ba30aaa75"],["/release-017/index.html","5fecf51e6d6b523b02eb12dea17987dd"],["/remembering-choices/index.html","877563e75ea5ad604512aad5252cc589"],["/renpy-basic/index.html","436c1ce7f06d06f577d428085ea490e8"],["/renpy-crash-glitch-effect/index.html","1403ed82d14393fcfe495918454885ae"],["/renpy-flip-image/index.html","74c7fc104823054a555a33ff4f1d3445"],["/renpy-matrixcolor/index.html","fe525aa6ebee081135941e340fac06ed"],["/renpy-overlay/index.html","0383908e478c7fe3c1efa0f6079c02f4"],["/renpy-review/index.html","d86817c722d7764ce4aafa991cf5a707"],["/renpy-typing-effect/index.html","613436be26c701486f1e1376bdce718e"],["/replay-cg-screen/index.html","54f4ca84f84049eb0f04631921a40143"],["/rpgmaker-assets-menu/index.html","166f8ede88c67bf5f7f0f8be36da4214"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","71fc235e9580d774626f0720470ffd17"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","a68382cc20b16874cdb3687ff2d0c170"],["/sakura-tree-background/index.html","23d889d43f2078006f7e0da3e69d1d6b"],["/selected-button-style/index.html","96252ce55ded8abc2ee7dc08b3bbd954"],["/service-worker.js","3c006d601a7d3e653004bbc17957bf7f"],["/show-variable/index.html","c9d170609eaa79cb27b7cdca09f86169"],["/side-image/index.html","28c5f4b31db9f2b17b62171ffc33e636"],["/snow-effect/index.html","6783a95e047ecb379193cbb6d7ff18c1"],["/speaking-animation/index.html","228622ab022c0eec3fcbcd79fee21ac8"],["/splashscreen/index.html","0c1d04cb46e99d78e2a891810096a937"],["/suika2/index.html","792abb9585d332d318dd3400be909ce9"],["/sw-register.js","f707be38b42470791f1dae96f8fb2a6c"],["/switch-chapter/index.html","8f0ae93d149b73dd72d409e174df3f9b"],["/tags/Hexo-plugins/index.html","3ee93399c320bdf929ce4d199b294c86"],["/tags/Light-VN/index.html","3c78638282fe49e511eecd5263411a0f"],["/tags/acg-creator/index.html","ef6ac41667f11df36d97826f333f1eb0"],["/tags/ai/index.html","1a9fd2b3063b46b31a0d26b4d58b60a0"],["/tags/butterfly-beauty-diary/index.html","77927dd2d83f069a07e300c50d71850a"],["/tags/custom-hexo-theme-butterfly/index.html","90460a1ddea02df34b6009cc2f45f3f1"],["/tags/custom-renpy-title/index.html","dc54e8f772e78a22c1f856954cf87cc1"],["/tags/dialogue/index.html","4930adaa150ae38e18f4ccfd5e57c5a3"],["/tags/effect/index.html","104713c00d15861cc3f42f54def8489b"],["/tags/event/index.html","a4e5686e04f49ca6f48bbdf9674014bc"],["/tags/hosting-own-website/index.html","fc43811fdb4a3adfbd508589c9dad4a4"],["/tags/index.html","76066e95396f11c1a5b1889d4ec2eed1"],["/tags/itch-io/index.html","369a0fe38bd42a9788cf903aab284bc9"],["/tags/light-vn-update/index.html","682493f25bddf6e3d6547cc97f4da698"],["/tags/nvl-maker/index.html","94a84f97c7e93ed3fe680b503495973d"],["/tags/player-related/index.html","f1991c8d67472a352a5a2b25b7afd254"],["/tags/pro-tutorial/index.html","98604afe200049d70500f9b91f3bc30f"],["/tags/pro-tutorial/page/2/index.html","e95a13857503585b5c4f18ddb27755c3"],["/tags/pro-tutorial/page/3/index.html","97ed17509ea4af7f18762bd6f4a763bc"],["/tags/pro-tutorial/page/4/index.html","7ac3cd4e57819b34b6d0e04fcde08a8d"],["/tags/pro-tutorial/page/5/index.html","b750f470f7ab408bd8c3db8b42195a0b"],["/tags/renpy/index.html","d332de17db7f995e1df413ad74236364"],["/tags/rpg-maker-custom-map/index.html","cfbbb530dddb256b95ad6094b1d27e97"],["/tags/screen/index.html","6f0a7124c069c91fcca5d6b56a18da3d"],["/tags/special-function/index.html","ff282342e4db4802146dd1c299e0e850"],["/tags/suika2/index.html","991064416c3a786e444a45147c7dadbc"],["/tags/terms/index.html","302cb32eb6bbe5a2a6cdcc0c4fb80492"],["/tags/tyranobuilder/index.html","d734318293f84c425e554351b6eb0722"],["/tags/ui-assets/index.html","74b5dee61622493d0e59f4c10a949437"],["/tags/update/index.html","fb212fe19d0075249500fb6b5ebeb78d"],["/tags/upload-game/index.html","744325127718403b97272ebadbe94374"],["/tags/variable/index.html","4e70ca2d108c5f01f8ade3e637ee96f5"],["/tags/visual-novel-maker/index.html","fb51a3969bb82084e27d98ed2c96b62a"],["/tags/webgal/index.html","79bd2dca7a1ca5f315001b193f6e3a8d"],["/tags/封面製作/index.html","d4497c59159f665fa83b2c6d18b77567"],["/tags/教學/index.html","8068e3dd0fb83002213de8a3a3322743"],["/tags/背景素材/index.html","d240f71ad1b426af11fd0ffa51064482"],["/tags/遊戲開發/index.html","60b281e504c621efcebd8002475bec09"],["/tags/隨機功能/index.html","7027b1ea3262803a27ed136ecc60aeb5"],["/test123/index.html","f58aeadbec7c086743ca50ecf3591fc7"],["/textbutton/index.html","52445230e5e1b424f85a3c7e8cb0563b"],["/to-do-tutorial/index.html","51882f4a84fc8def0db86c72ee0c18fd"],["/tools/index.html","96dae632b3d435262edd6986731cb296"],["/tooltip-function/index.html","8acccf0597014de4090feebb97e37583"],["/transfer-to-hexo/index.html","0e8b89db465f8d9c578b1b110635b36b"],["/tutorial-update-history/index.html","5c92541d56951e06a8101ca2ca4ccd4b"],["/tyrano-name/index.html","5d52a49bff25400f22f0bb67dfcf3e00"],["/tyranobuilder/index.html","f3b6e356aeded003d7d1e29300977639"],["/undefined/index.html","c8f8a1caf858a057081a03572e355687"],["/unskippable-video/index.html","93be071bcde95eda1227596bf3cee7f2"],["/update-20221211/index.html","fe68e3f665e5b1217064a445062fa670"],["/update-20221218/index.html","7957f558b2790d1cb718ee38657b0742"],["/upload-download-save/index.html","13f54886d92813b5e45f145f1ac92065"],["/upload-your-game-itch-io/index.html","c275ba0d04c270c891facfaa7d335d63"],["/use-list/index.html","89d07406d7fd0acc396add97dcad9853"],["/use-nvl-mode/index.html","a72df07ba22b8481140bfd22821a46c7"],["/useimage/index.html","f7f695e0f564b6819337deb1dc65e406"],["/variable-change-image/index.html","d80bdf0b307854b3f801132d9abf8caf"],["/variable/index.html","9a2d5c212279ca4c8cfb8845dbf4f1b7"],["/vibration-function/index.html","2c87172c8b976eee13ac9e5136730165"],["/vnmaker/index.html","694297645730bd59352767676bf42859"],["/weather-effect-tutorial/index.html","bdfb1b653e3db44f1152f9057a5f7169"],["/webgal/index.html","226692c7442e04c6d5e219a954c70eac"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
