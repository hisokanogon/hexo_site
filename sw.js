/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","fa06c8ec2ce3a87b0c7ea9d37d36f40b"],["/2024-future-plan/index.html","76cfad5643f28a7ed850040a848ecda2"],["/2player-battle-system/index.html","0feb16d9e574fb6211ed579b4b148d61"],["/404.html","b56e02b4be71a23dd6c3739d528f5a26"],["/about/index.html","a7ec217f54e2f6ed5a7b9260e02918a3"],["/acg-creator/index.html","d3f7dbee407ed338a8e1203c7d33c583"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","bc350b2185833cb99388920cf80d3816"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","cf36fefe76978071e03e4a79aa483833"],["/animated-title-main-menu/index.html","89d6b031a31d1ecde6ece7ec1f2081da"],["/animation-movie-cg-gallery-screen/index.html","bb1794a75f5c0cc06c545d41c1bc1ad4"],["/archives/2022/05/index.html","e8a71a57295f30acb1d7eab0c40f0fe8"],["/archives/2022/06/index.html","d72de1ca64326dca614e66d576d1204a"],["/archives/2022/08/index.html","1e9aeef79c806f6f0fd45bda3e8dd750"],["/archives/2022/09/index.html","7446ab60583976d42d07ebdeb1d1975e"],["/archives/2022/10/index.html","92bb9835dbeb187e0b7e0e724cbd1178"],["/archives/2022/11/index.html","5ff5663ac663216e8560758f48fb2a2e"],["/archives/2022/12/index.html","36c9129204c2e685ad820220199affc4"],["/archives/2022/12/page/2/index.html","5496498b234e3d4cc764c7951944c3d8"],["/archives/2022/index.html","02f3124d5a387b347aaadc2669f48ecc"],["/archives/2022/page/2/index.html","07fae80570fbed64ed0c66e3e19e5a83"],["/archives/2022/page/3/index.html","a57bad37dde2a69797a94fc06c05af84"],["/archives/2023/01/index.html","da7d6613cfe915c8e8b93d73f5b414db"],["/archives/2023/02/index.html","a18758c27342f23e8ea61c6d135b941a"],["/archives/2023/03/index.html","3ce48766dc58d9ec91b9a70bfe72c70a"],["/archives/2023/04/index.html","5042049c3724a3d21707102345b7ce7e"],["/archives/2023/05/index.html","df350ef2240cfae89c42e13447343200"],["/archives/2023/06/index.html","8b24fe3c7c22641274e9d61bc5028031"],["/archives/2023/07/index.html","b1f59b13a4c2746f599bc50c7779d7c7"],["/archives/2023/08/index.html","a2438c76c7037cf06bef4743e005453f"],["/archives/2023/09/index.html","8c54a8d3bd6e20da1afff2d448153be4"],["/archives/2023/10/index.html","b5aa364330d7231787f263be5d953567"],["/archives/2023/11/index.html","52ce60d0f8e63c893e0b3299adc1fbd5"],["/archives/2023/12/index.html","6191f16ab77ccecb6c8265ead34a6dab"],["/archives/2023/index.html","551161c1bcb0db5ad87259657c5be9f7"],["/archives/2023/page/2/index.html","e2a79af27b821a12d444f22dfb52ff68"],["/archives/2023/page/3/index.html","5c8b6bbd7025eaaffe8125a078ffa4ab"],["/archives/2024/01/index.html","04565b3e0ed262bb47bf867580ccf91c"],["/archives/2024/02/index.html","470d0c1b5a09802c17972eb618332b2e"],["/archives/2024/03/index.html","0a3ba97d36f3527d6281fe7326e4ba73"],["/archives/2024/04/index.html","0b966e36de6dadcb099e5c6cf89141e6"],["/archives/2024/05/index.html","2a83ebb76c75060905c96efb04a27564"],["/archives/2024/06/index.html","dacff00dd9a070f18cbf4c38caae80ad"],["/archives/2024/07/index.html","453ac7409011f23a502539f458b83aa8"],["/archives/2024/08/index.html","46637135435a5a434da00066a734d517"],["/archives/2024/10/index.html","879b7e716b374ba5353c165b44a84b46"],["/archives/2024/11/index.html","26da05c36958eb046aaf502b43b71ed2"],["/archives/2024/12/index.html","6d5cdc272f2c43af7a9480e1ec8b7034"],["/archives/2024/index.html","c20e08c5c3b52eedc31e45aa5d239d16"],["/archives/2024/page/2/index.html","a7b7241f3f4b0c714510d9aa8fc631a9"],["/archives/2025/04/index.html","11aee48e2ba83f38431a682261a62df9"],["/archives/2025/05/index.html","fb20af581c74eb2454fa8f7f9e9310a9"],["/archives/2025/index.html","9b4063b36e136c9cf4aac72b7b341c00"],["/archives/index.html","b887afa3411170faf645f9531d69799d"],["/archives/page/2/index.html","ad42b196dd9d10a851a519ccb2e7e141"],["/archives/page/3/index.html","893c9328ec90b15fc9e824fa0f8c0f5c"],["/archives/page/4/index.html","9809d620b7799683a22529e016e5f74f"],["/archives/page/5/index.html","02899e4e45bc117a07aae546d5f9f50d"],["/archives/page/6/index.html","0a2289bd86bb75c23ff5f5e0ee86726f"],["/archives/page/7/index.html","433458e14343ae8664f0d1bbcaa1b413"],["/archives/page/8/index.html","763d92ce57c4307c73ce669097766b7a"],["/artitalk/index.html","c91def545805fc18d1dd986369e22589"],["/battle-beautiful/index.html","894dd414fb5d362b89f3597d012bff2a"],["/blur-effect/index.html","c9e45eb3a4e18f6519e7bf13860f6d7d"],["/butterfly-custom-tag/index.html","dce70b9286b9ff54e4c6b3de3e5b0b2a"],["/butterfly-plugins-faq/index.html","dd13436795b03e06e01c2a112119f478"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","8fc3ec9a7d9f6850f0aa20e9c1787ced"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","2980d7bfafe96ce0087f054eb10743a3"],["/categories/announcement/index.html","012d43234cf322a0751bfef5c0f24e40"],["/categories/diary/index.html","2351a7b03ff5b2a9b0e71978d1c7b662"],["/categories/game-dev/game-engine/acg-creator/index.html","8343ed8ce4c373eefa48450a8772b2e2"],["/categories/game-dev/game-engine/index.html","dcfc3d3f6158d437bb37f8304e316971"],["/categories/game-dev/game-engine/lightvn/index.html","d3ff094853098e89a2188b2c59e92279"],["/categories/game-dev/game-engine/nvl-maker/index.html","e22f6c5b1f3ffa09db4d4dd3df691a2c"],["/categories/game-dev/game-engine/page/2/index.html","f8f8b483ee4984ef73b87223909f5a8c"],["/categories/game-dev/game-engine/page/3/index.html","290de188cf59be4cc2e441035caf6f7c"],["/categories/game-dev/game-engine/page/4/index.html","36ebe0ee6de43d867d315bfd4fbbd97e"],["/categories/game-dev/game-engine/page/5/index.html","40a192014df788208582245da00614b8"],["/categories/game-dev/game-engine/page/6/index.html","145e72b836743fea21485a53364d2f7e"],["/categories/game-dev/game-engine/renpy/index.html","d9298232e4b76f081f7281c45b4d8597"],["/categories/game-dev/game-engine/renpy/page/2/index.html","8333e76af186f90e3d0db8dfcd159032"],["/categories/game-dev/game-engine/renpy/page/3/index.html","63e94eedb34894ad8d8bd412f14587d1"],["/categories/game-dev/game-engine/renpy/page/4/index.html","52463d9bb0dcbd3f2a6ea4136e7f6268"],["/categories/game-dev/game-engine/renpy/page/5/index.html","b6f6d82b4cb08ed27ccc3e31865fde7a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","f54846b81e15cd907e0ff876443cf388"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","5eb1ac4d3caee56919f3bcfcf69557f8"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","36563eb40f65216752da76c93529a693"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","ebaf4177bad2a0727c687220148c1da5"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","879856ec95117c0c6441bdd170475c2f"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","2ebb558cf1621ac43f38cc5d69adb8de"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","65f8188b84576329416fa0f9de714e5d"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","774560936d7db5f6d972cac8d9bcdf6c"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","f4ea45c2569aeb72e12d7e7ee8d063c6"],["/categories/game-dev/game-engine/rpgmaker/index.html","a07567fc585785231688d667299193de"],["/categories/game-dev/game-engine/suika2/index.html","b34cca3ff62fb2c31ed57e3f9e58e794"],["/categories/game-dev/game-engine/tyranobuilder/index.html","ef8583730bb06e97224c1e42599e659f"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","48ee66c8ce4973e31e56cf4471ae2569"],["/categories/game-dev/game-engine/webgal/index.html","459584016f27a085ed75e5a91ce04334"],["/categories/game-dev/index.html","f8d785036c1cbff4b4ac57a05ef17d32"],["/categories/game-dev/page/2/index.html","905b4445cc71985fda9594077706c94a"],["/categories/game-dev/page/3/index.html","bbf6108c8f1efaa5004c7f1d7ba43e51"],["/categories/game-dev/page/4/index.html","77a8bbc9c2f209105caac73dfdf835e6"],["/categories/game-dev/page/5/index.html","81cb84c26e7176d393a0b01af9a651aa"],["/categories/game-dev/page/6/index.html","95d592e74550b20d6292fd8d4a508445"],["/categories/hexo/index.html","f8135cc43c9a8e16290a0cfbfc3b04b9"],["/categories/index.html","fcbfa938f2246eeddcc6c0cc8b5d06a2"],["/categories/material/index.html","cf361d38f71c934bd572f799e5f4545c"],["/categories/update/index.html","a8c8705449ac4205c3532750efb007e1"],["/change-according-to-real-time/index.html","e6c6cf2b2cdb58e462b701a3d8b974ae"],["/change-character-info/index.html","711ed847a536d5f546bae6a116407a28"],["/change-title-after-first-time-viewing/index.html","831ab265fc76632db659becf8d030492"],["/change-title-based-on-event/index.html","fafbfcb146aa1d30cc44c6e6b3259cc9"],["/chapter-selection/index.html","cd2e96a19a58af471414275bf9c341f2"],["/character-base-state/index.html","43750f51364901f95e2071642aa69535"],["/character-interaction/index.html","8a4a18c78c83082f71cd03e16d1c25a1"],["/character-start-personality/index.html","cd52b03fba6e96baf0fa4efed92f4120"],["/character-stats/index.html","00b14d59d505498da4b3632362485017"],["/chatbot/index.html","79651c1f1d2b74b989122d9ea504cb52"],["/choice-time/index.html","afa547f6631d8250f8432a58a4727086"],["/comments/index.html","bb59e5306735858be4af109f277b9bc8"],["/commission-info/index.html","3aa12ced6f65b14831260b7ac278084f"],["/count-login-number/index.html","48ff735e82460fe6e91021d8d84a94e0"],["/create-button-anywhere/index.html","68919b479c59abcace5fe8993992dfc0"],["/css/eurkon.css","a25eb87b38d8a480780429805ea3ead8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","71d2d2cdf5f7e8f9aaa10f7b50939155"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","1afaacebf7e0b7c338bca5a2e167fb0e"],["/css/rightmenu.css","e0a71b9362d9d4e98f3891090afcf70c"],["/css/siz.css","bbc03cec5de3cbffc80195f559d9ad2a"],["/css/swiper.css","b72e9c17857b81e2e0b427f87c877465"],["/css/swiperstyle.css","8c26e05a3e62fa3a8b3aa46ca450c26b"],["/css/var.css","134ba812bc1a1897593e4fd62f7aa632"],["/ctc/index.html","0aca0a6da4c710247e0964513f9cb6a2"],["/custom-credit-screen/index.html","b46a76188780e64b4e35f1d36c6dcef5"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","8bfd4461a442547f13b3e74fa1ab06a7"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","da552e524d9eb92ffedba26c4c0cb775"],["/custom-gallery-cg-screen/index.html","8d1bfa50b2acee70deeb355a5ab66fbe"],["/custom-launcher/index.html","eb33dd6cc9fb82553480eaf38a34dbf7"],["/custom-loading-screen/index.html","f73d7d189f93ef830bc599ade781cba1"],["/custom-mouse/index.html","4c13440f6f8bbe0cbb5d40a4eedf069d"],["/custom-music-room-screen/index.html","7e96f81bf27370ec829808f33715ebd2"],["/custom-music-room-screen2/index.html","eb7b8281ef24c702b8ae93f6430d25e4"],["/custom-nvl/index.html","7a978d7900f0b317eb515d7b9a4103dc"],["/custom-player/index.html","8ef2b5d105a944b414d5cdc34dc53f19"],["/custom-preferences-screen/index.html","04cf50ce3546f65b86ae863f728d1df3"],["/custom-say-screen/index.html","b71e76186f52d83928c2bda8ebc59993"],["/custom-scrollbar/index.html","3e2b44924f46d0e145a1eed848d16ec2"],["/custom-style-bar/index.html","95ba9aa9c17e82e838a73abb65fa5f5a"],["/custom-style-box/index.html","b237f11b4b7e0b48b6699a2a449fdc65"],["/custom-style-button/index.html","46a6de6d210870aeb31a9cce3e349efe"],["/custom-style-grid/index.html","b59b98849b50819215f2ec9f326d5552"],["/custom-style-position/index.html","d50a428359b501e7f23218167b06e202"],["/custom-style-prefix/index.html","6a6fc2ea46039dcbf4aa3cda4839bd57"],["/custom-style-text/index.html","657fd47746ffaa761007fe782e65e236"],["/custom-style-window/index.html","a30210518865f952210b5f282496e5d7"],["/custom-title-screen/index.html","56f85fae9b092bcbc131c836e57c0b0d"],["/define-npcs/index.html","ace9d9063898cefa37b0a949aadfced8"],["/delete-save/index.html","f194ffbe77f97acc7473802f3b146146"],["/dice-function/index.html","6f0c136a4947661cb83e72a93bcd5bda"],["/disclaimer/index.html","e62ead518fd2e5e7a6e3c91ebf4ea32f"],["/display-immediately-all-dialogues/index.html","32b9d714fbd4d1463f36a3790f7803a1"],["/display-real-time/index.html","c87145752c9f07cb3bed81d7ab068ecb"],["/en.refund-policy/index.html","6dd3e4ce3bf16feb66dadfe856391bf4"],["/enter-name-screen/index.html","c689822eb51046c83077002dd9eac2c9"],["/export-game/index.html","0e04df2bcd85f1b20a2550309226c3bc"],["/faq/index.html","71042bf798001490ddb5b5db45ae8f74"],["/friends/index.html","f459a29dd0c30f4227b8a24c25fb9cb8"],["/gallery-template-assets/index.html","099bae486f000b3242b8aa97cc90d9f0"],["/gallery-template-default-ver/index.html","0d971c1d64332c5125eecd190d549680"],["/gallery/index.html","938fdb4596eb702a6c83f41a46caa8bf"],["/gallery/photo/bg/index.html","5196412a24d7a7332817d76f2e26f74a"],["/gallery/photo/gui/index.html","d6907defd5c8ae32c50c987b719f7e67"],["/game-only-text/index.html","8542ae83cf72b370f83a23a2934e8703"],["/generate-random-name/index.html","fed02ea2e9d2074db55a30c7e37b1ac3"],["/gui-017/index.html","d63739f33faafb260a2387c5601980b1"],["/gui-vertical-002/index.html","530f66c1b00f55e3d1c22606180a3ea7"],["/gui012/index.html","81d84ae7ebb54eccd642e5c9ee321e1c"],["/gui018/index.html","87a079997fdf91e67ba0ccb3d9ceb0f6"],["/gui019/index.html","50247ef39a7201978d8e4ff34968a1dd"],["/gui020/index.html","33afeff2ae15e10f401276ba96259e43"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e458c2976fe833d7e9567e2c6cff58f2"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","285b7382cb8839f088b9de9fe20fecc4"],["/hide-quickmenu/index.html","fe5db541da6ada499de73164b824fb47"],["/hide-textbox/index.html","d09584f25d060148048502369c4c253c"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","61ccb0fc3c17f0e571e44c5a93d2c17a"],["/images-tip-function/index.html","b0e73b98b8fad286605558aec2be22bf"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","108102498bc027e8a4ffe98641d12db5"],["/index.html","bfb67f53f2e81505c7e71a5fcf617d35"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","829681da920592efb90f644d79542415"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","3395de7d119fde72292c35d2dfc8e767"],["/items-sprites-effect/index.html","80970852d093b8fcaea97c294f044263"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","4ff657c706887a3fa6ac2f812b0512ce"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","74799fc7cea30c5fef9d5fbf3d3424c6"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","d2b7d644c8a4abe91b3bf07db3b2e99a"],["/link/index.html","fd777dbba528470738cb82699f965dfd"],["/login-reward/index.html","80a63fefbf095ea3411ac853fbe6d33c"],["/long-press/index.html","c021e61388db06451abfeb7a2bda23da"],["/main-menu-music/index.html","032f57fa9487a1789b05af169b7a2d85"],["/make-butterfly-beautiful4/index.html","3a1eaf05a6f2dc42118fee5d9d3adc0d"],["/map-puzzle-system/index.html","8826aae2402f4b534f08730fdbe1292f"],["/maple-effect/index.html","ecaf85c46b3a6e8ca18b1f0e74cac1ab"],["/memberships-2/index.html","439831b3c4926263374ffecce9aac7eb"],["/memberships/index.html","35a9543e4ac7f4b7eceb0fee88d32de1"],["/multiple-language/index.html","cb2d5173184c3a43c8bf184a83739ef0"],["/name-input-assets/index.html","6ad8977749d3d1eb7c924bcd971f9a6b"],["/new-year-event-2023/index.html","a716ec13dce8de0c7826133d2b343ca6"],["/newsletter/index.html","ea13c5729398f8889540b4930316c34c"],["/nsfw-limited/index.html","42f347486d1577609bf2b15e7eee41ea"],["/null/index.html","2b3cfd35293031040d64fc7f44a78bf3"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","cd662b8cf5a06105240cb8a5fc9a9754"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","26888b887edb33c8cb79026060215aeb"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","97d2bb8b268d7468e535d1bc5478512f"],["/openchatai-renpy/index.html","5a9ac9a12634c865e521e1c90a13f011"],["/original/index.html","b03497592b1c8001dd5b836fcc3f63a8"],["/page/2/index.html","a76fe1bec7da4253127b465646b9bc52"],["/page/3/index.html","dcca0101b0d20d765b57f35c1539ad6d"],["/page/4/index.html","482026dcb07434a6113f9971fdc36634"],["/page/5/index.html","93e56c950ad4e73e178523f9dd281ff6"],["/page/6/index.html","9672f9ad8659df505f388e9e91325d2b"],["/page/7/index.html","6606274ebb2406159e3cbb360b8c0b6b"],["/page/8/index.html","d134b3bfe276f6c81fe296b16aa8355f"],["/point-pop-up-assets/index.html","100e62f8273efa6351dc5a21218945ef"],["/pop-point/index.html","24e90c93c3e67dc5789e254d284cce50"],["/privacy-policy/index.html","4faad890e0499f60aec19dc61a196e36"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","ea6762c07cf75b386783ca66d897f592"],["/random-number/index.html","802c4847c8515cca643c4ac1108a1020"],["/random.html","f07b08c2baf5aa5171c063a62bf78b01"],["/refund-policy/index.html","20ed7d8b5d3c575ac893893920de3045"],["/release-017/index.html","c5eaa5d44653cad0e5200a1fb93f5c36"],["/remembering-choices/index.html","c9161e46ba5e8621b2893ae508a05825"],["/renpy-basic/index.html","d5e09c91e9e6e1dc6bb3503a872a3647"],["/renpy-crash-glitch-effect/index.html","463ddc1610f11abc93fb87149d3858c5"],["/renpy-flip-image/index.html","c047eb45713fb7c00f3679752fb2cec1"],["/renpy-matrixcolor/index.html","d530a83c92c9ee13195a90c085312732"],["/renpy-overlay/index.html","b884baa789ce80a2042f1ddddc14f6d5"],["/renpy-review/index.html","a5fe8abafa78899b84394613f4ef027c"],["/renpy-typing-effect/index.html","67e074a81be223712147e2ca596f5ecb"],["/replay-cg-screen/index.html","70bf4e8cc69cb9aeba74a72ae8cb0ac8"],["/rpgmaker-assets-menu/index.html","a52b901169219ead0f6bdade41726f00"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","64a8cb4b0288b2deadddd85d700976ea"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","84afeb64d39eed44828fbf75e0b6f83e"],["/sakura-tree-background/index.html","4a299bf14e94ef8de7bfb0d98322ad36"],["/selected-button-style/index.html","c0391c6ef9024e89ccecbfc3ed59f988"],["/service-worker.js","aa8d71f15c58678d81f6a88299364a1a"],["/show-variable/index.html","b6d75b23b761648d76e92bac666acea2"],["/side-image/index.html","3be946706060369d2966a54b977bf7a8"],["/snow-effect/index.html","c5048f013da9fd7ef64a5e7fa4848132"],["/speaking-animation/index.html","554fa38880d460a90ba7c0f0bb89b0df"],["/splashscreen/index.html","0c4bb6e8406fdedb2824e886f077fd33"],["/suika2/index.html","84f8ca24720d83b6bace3ead1d1ab690"],["/sw-register.js","a3f61d5298966b387cb49726f4ea2545"],["/switch-chapter/index.html","db3a0d419b7b95951ce1ba41c41aa170"],["/tags/Hexo-plugins/index.html","d49f5f4e2f7fc79c6850b31c72e793cb"],["/tags/Light-VN/index.html","af166b4c09376a51600a1779a7c7192f"],["/tags/acg-creator/index.html","a966a0975b1c59aa61aa7b1b5779af07"],["/tags/ai/index.html","be0aec7fe5c339230254c32eddef19b7"],["/tags/butterfly-beauty-diary/index.html","f63efe1c48b24085a43e7e09cba0345e"],["/tags/custom-hexo-theme-butterfly/index.html","cd8a3796fb845c1c3cbca8b275eb638e"],["/tags/custom-renpy-title/index.html","1ba55409f2c6a322e413592fc2062270"],["/tags/dialogue/index.html","05bd2a5aa56c354911ab46da9a5fdd75"],["/tags/effect/index.html","b88f2e700050f135638ded1c83488089"],["/tags/event/index.html","2ec3d56a6d33f1fba7692f7971f563ef"],["/tags/hosting-own-website/index.html","00497c69e24a26a48f4a29644c727f66"],["/tags/index.html","82c530df412565a8c6aa1eae7a17de68"],["/tags/itch-io/index.html","c55e9f41cb78e1327c332283c099193e"],["/tags/light-vn-update/index.html","57c4f0221ffeb870662f5db47d7e7d7e"],["/tags/nvl-maker/index.html","37e44f82f03e63b009509523dbee1833"],["/tags/player-related/index.html","d841e3a246051ea03183d02a2bdded63"],["/tags/pro-tutorial/index.html","15e470b97c4cc30ce9a77b56eeb97483"],["/tags/pro-tutorial/page/2/index.html","c5998124beb4955052774e0c81402d2c"],["/tags/pro-tutorial/page/3/index.html","b94bb06b635ef8cd864158de4b4ba188"],["/tags/pro-tutorial/page/4/index.html","98898accc430593f753c230256e655a5"],["/tags/pro-tutorial/page/5/index.html","9dcbd36f7763c86366517ff0e178df67"],["/tags/renpy/index.html","5a2a6be0b8bfaf2a598fc5f3d47e8719"],["/tags/rpg-maker-custom-map/index.html","f49c434ad3e86d1a390094ba6c6090d9"],["/tags/screen/index.html","0d80209690c3fd3812c434038cc11805"],["/tags/special-function/index.html","ff46cc68db44c4125ce1ec6b8acecbbd"],["/tags/suika2/index.html","abfea584d22cbaf273664bb514af36a1"],["/tags/terms/index.html","580423ca2c064294c4c737c604a9281b"],["/tags/tyranobuilder/index.html","d2e268ea50463c53bfe458a8aff3296a"],["/tags/ui-assets/index.html","f14d20075d2991f8fe83b13c4a4af76c"],["/tags/update/index.html","4602b2c9e1dd5add9f5ba907fce46c02"],["/tags/upload-game/index.html","a6312bea879b6259a0562824748f5f35"],["/tags/variable/index.html","9921eb7656ff3ab2df71e1da7ae2a0a9"],["/tags/visual-novel-maker/index.html","f90b179170dec124896c3bb1174c447e"],["/tags/webgal/index.html","8c2aeaec0d8d81408bc621450ee06453"],["/tags/封面製作/index.html","405fa0c879913967f60219dab4d3d7d8"],["/tags/背景素材/index.html","f36d65d8d68970e320c448c0cbab4f91"],["/tags/隨機功能/index.html","d12a61bb7a0bacb99e69f7fadd2825d1"],["/test123/index.html","a32fc3ace549f443b2920abc25422895"],["/textbutton/index.html","5fb21b32bc23ba2fea546081a3a2b186"],["/to-do-tutorial/index.html","7f7f8ba0a417e1a9cb2c0d73e08a370a"],["/tools/index.html","d57f17d423c7e13ba9cb38e29185f507"],["/tooltip-function/index.html","33943b49099709e740cc9f1d47ceba93"],["/transfer-to-hexo/index.html","5e856176ca5b32d391e7e310b8b91f11"],["/tutorial-update-history/index.html","3bfc3ad74ad8e423556676238d584530"],["/tyrano-name/index.html","660216bf5f17e95ad48144f03532a18f"],["/tyranobuilder/index.html","723a8036680db5d1d065bc78492a2939"],["/undefined/index.html","caba550308832f748e6816293ab69d81"],["/unskippable-video/index.html","be9463f9e8b561f8b1fe938eb338b1e5"],["/update-20221211/index.html","b0efac9cebbbec5124810f74b0984244"],["/update-20221218/index.html","cd60602e3a890f3375e84dfd4379c8b9"],["/upload-download-save/index.html","5501223896e10229462781980bdca39a"],["/upload-your-game-itch-io/index.html","31752602125490b1ee851639639ce232"],["/use-list/index.html","d1014e6e43638a7edc974c4c18e41f9a"],["/use-nvl-mode/index.html","1ca65d2914cb397e918f4f994a31655f"],["/useimage/index.html","02847340bc3036f23609878262f62311"],["/variable-change-image/index.html","9e8402952a86726d283d1e46736b3fab"],["/variable/index.html","8383520762d7cbdeee4aa7eaaa191505"],["/vibration-function/index.html","634b47e347866b244564a8d4588f05b3"],["/vnmaker/index.html","b9454f7a12b493d6b3c772a1201dfef8"],["/weather-effect-tutorial/index.html","09dca691116ea9ec03a8d03ec4463af7"],["/webgal/index.html","b4474aefcc1def5655a5ad39ef9a2071"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
