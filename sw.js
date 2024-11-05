/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","1ad91a8a96619f8ae24bddeb57691af8"],["/2024-future-plan/index.html","320b4f5df665fefc9bdd21e5b7c3f787"],["/2player-battle-system/index.html","163bb255a1dbf5bf8fcb8316c27055ff"],["/404.html","85710916b793f408901c9eb3a0c67a91"],["/about/index.html","80131ada3aa5e0b47ddf57ea00a8b738"],["/acg-creator/index.html","4a8a34e807b58247cd7a87c9486d6988"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","ce11e55c121e947e9809e7b4ae41d05e"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","730bcb4f01522260b050aefb08dfdf29"],["/animated-title-main-menu/index.html","903f0f489f962909e560d75bf070e71f"],["/archives/2022/05/index.html","933804580a89ea90fbe09f11c9d7d7a1"],["/archives/2022/06/index.html","af67ff3deca20f07bfe3474ae7cd5cbf"],["/archives/2022/08/index.html","b23d03611a27b55a88aa0dbb4cff8f68"],["/archives/2022/09/index.html","a30a9c6ff19017dfec96d444c366e6c9"],["/archives/2022/10/index.html","76ba00beeeee2a1bb849a46f769a739b"],["/archives/2022/11/index.html","0892aa8c30858fa91ea7f41a7bc3a6bc"],["/archives/2022/12/index.html","8bcdb8ee759cf2c8660d8f2e8ee43478"],["/archives/2022/12/page/2/index.html","603aef221892f607828f62badb3af029"],["/archives/2022/index.html","ad74cb35959e385152c1b91140980e22"],["/archives/2022/page/2/index.html","48790f0149462717cfebdbd25b0367a8"],["/archives/2022/page/3/index.html","89b5dd58d54910865c1f6fe6cc6f28ff"],["/archives/2023/01/index.html","57e1c8d0e5a4cfd5fd3207e0ab62f1d0"],["/archives/2023/02/index.html","7a6f72de785ca79268df3f8d8fd165af"],["/archives/2023/03/index.html","6a1da53dfce4c7a2c214943ee772ed00"],["/archives/2023/04/index.html","810141941eb46b3799054fc570a44d53"],["/archives/2023/05/index.html","fb67b683b26aaf4e50550bae52bc9bd6"],["/archives/2023/06/index.html","97fb7bd1db7cf914151915ca55835987"],["/archives/2023/07/index.html","adc76ddd0a6fdc3fddc57aec080e5261"],["/archives/2023/08/index.html","3fdbcec3941567a75b99713aa6d8b065"],["/archives/2023/09/index.html","e929971f184f7cb8b21e034e1596cf58"],["/archives/2023/10/index.html","c83f357ff40fbb099d1248939dc95111"],["/archives/2023/11/index.html","1e1004da0a6158016653a60ac5675728"],["/archives/2023/12/index.html","62b876eac9d1aeb5949383c5f7f8b703"],["/archives/2023/index.html","82f8bcc35ef7f4eee1d3828218e1bbf0"],["/archives/2023/page/2/index.html","13d71f3921452e39218cb81ee2ce3c24"],["/archives/2023/page/3/index.html","3a05685284ec0b825c974a032a730709"],["/archives/2024/01/index.html","b5798b5e6529631b773231c07f081a4a"],["/archives/2024/02/index.html","76f2fe7cc52e7d634b035f17f38d934a"],["/archives/2024/03/index.html","900c1f391c0b6c8e1b775eb5f8628040"],["/archives/2024/04/index.html","b9280ec047529af47d6333084f74f11e"],["/archives/2024/05/index.html","79b21bbc056b962cda9925ab1fa69de2"],["/archives/2024/06/index.html","8679c94795605ca38c299fb5e0d1d272"],["/archives/2024/07/index.html","9eb6cc6fe80eaa51ef5577bf7882ae45"],["/archives/2024/08/index.html","b14560078cfdacf06b35c48102b7da57"],["/archives/2024/10/index.html","9c6d10ae224ebfc0819494e5cf57146a"],["/archives/2024/index.html","7bfb90609030c6cf64604850892f8c17"],["/archives/2024/page/2/index.html","434ceb66855b1b4e0ebcc738c957da88"],["/archives/index.html","0c6ab8dae7f10a097486eddce7cc872d"],["/archives/page/2/index.html","42f0ec19214f6acc61483d2452d3dd7f"],["/archives/page/3/index.html","4f8721a75755afaaab3758c892fed003"],["/archives/page/4/index.html","fcb5df9940a5c17307ca440feea8260d"],["/archives/page/5/index.html","44124f815b33d8fd7a561dd988b6f95c"],["/archives/page/6/index.html","62a9e98791d77ba25460480683a1178d"],["/archives/page/7/index.html","a91c7a9faa36333defc303c940de3cad"],["/artitalk/index.html","b03f0f2200dd7c085efa1c1dadb46b48"],["/battle-beautiful/index.html","cc500d5bb64bdb4e912f3377e6055ceb"],["/blur-effect/index.html","6258a6b532639e544b7b71920bcf5aa3"],["/butterfly-custom-tag/index.html","2c601b59184d81f6917c682a64f16b4f"],["/butterfly-plugins-faq/index.html","283136c50568b3bfe4e224732170fe75"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","45ec46dab0b86356ba08d79d954b8761"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","1b960077754f1105d22449f78c0e3075"],["/categories/announcement/index.html","1ea4a764a7dbf73168ebe0b32ea10f22"],["/categories/diary/index.html","fc69783f117994e29d2c67b34bdf56c4"],["/categories/game-dev/game-engine/acg-creator/index.html","77c27e580ab53afb44090e7caa1cd049"],["/categories/game-dev/game-engine/index.html","e62a6644f36bc8141075eea54c74aef1"],["/categories/game-dev/game-engine/lightvn/index.html","e0f85abc1b1a7e424cb7c03ab86054c5"],["/categories/game-dev/game-engine/nvl-maker/index.html","93ca75638902078dba24d21ef1488f76"],["/categories/game-dev/game-engine/page/2/index.html","e43c9995a16c2dc08f391f53c49d1727"],["/categories/game-dev/game-engine/page/3/index.html","4d949a3235d2edb78956c018eec91ab4"],["/categories/game-dev/game-engine/page/4/index.html","34c79d7c1c8587e9cf01b45baeef4ca4"],["/categories/game-dev/game-engine/page/5/index.html","6c21188168e53243779234c850f2f3f9"],["/categories/game-dev/game-engine/renpy/index.html","6bb4feb66b76f25b9f5e2bc321e09e57"],["/categories/game-dev/game-engine/renpy/page/2/index.html","66c65254cd12f2acba2007380cbc267b"],["/categories/game-dev/game-engine/renpy/page/3/index.html","edd4d796f5f260a79c7e7c9c318ec356"],["/categories/game-dev/game-engine/renpy/page/4/index.html","ba22d8de392333f0e705d9e341e955f9"],["/categories/game-dev/game-engine/renpy/page/5/index.html","e86d30b465ecc1c8d61494b0c7e415d2"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","cb20bc7856dbc27080ea04de070aa3f3"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","8a8428aa1dc23a19763cddc10ee614f3"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","f985335845286e84a460f73c973da3a3"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","6510fe485c67d257e8973e41520457c7"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","57c5134d42141a78f3a57a751ee85529"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","d9abd49a4462d0e21ddc21fd4bbf7700"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","f45cbabed04448be89da2cde8c3b5669"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","50e0e2b952745c1fe502e436b0d5b7a7"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","d9ba9cadebb3618c2618e76db98e6c04"],["/categories/game-dev/game-engine/rpgmaker/index.html","74714769a44e5936c90e0966968c6041"],["/categories/game-dev/game-engine/suika2/index.html","f27b0590b3cc8326c2b39ddb1e67fed3"],["/categories/game-dev/game-engine/tyranobuilder/index.html","1fa12ec39b9b4d9c9ee6f858a39e25af"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","69aaaec6a2e033dd5a96c1e00faa3554"],["/categories/game-dev/game-engine/webgal/index.html","2d821360cf1d99c79a2e23023c4dec79"],["/categories/game-dev/index.html","7df3503f2e1b6ee305362f9d9fc8a441"],["/categories/game-dev/page/2/index.html","364839844bcec7ee675a0c5ecf383169"],["/categories/game-dev/page/3/index.html","99e75e6ea1fb3d64c9ece2bd7aa8f426"],["/categories/game-dev/page/4/index.html","d6b208cc9be3055d32581a3a6823b312"],["/categories/game-dev/page/5/index.html","0bb44640329cbed7788620007291972d"],["/categories/hexo/index.html","250803a59fbf7b667e30b9e1d4e4214e"],["/categories/index.html","43c7a7e4fb3755a876eb7e4fdfb6daf3"],["/categories/material/index.html","ba963572eeefc70313fd1c7a13dcae6b"],["/categories/update/index.html","b34274fffc265f685f557d419e68a07b"],["/change-according-to-real-time/index.html","8c3017903027c21b952e71c9644ca4f9"],["/change-character-info/index.html","cfb0659d343150fe70b9990575d4f497"],["/change-title-after-first-time-viewing/index.html","82013d2b1acd37a3f693be42b971f192"],["/change-title-based-on-event/index.html","b4370690bd3b0172c15b24c70ef97200"],["/chapter-selection/index.html","7d20f1f1bf9009815a09aa9e41c5a80c"],["/character-interaction/index.html","44af1d9d903976124e6dfa180d2d61bb"],["/character-stats/index.html","d4e998a5088b342f7bd2a677787735a7"],["/chatbot/index.html","deeaf24b63be664933be5e7445e08d5b"],["/choice-time/index.html","eb81efecbcdec314a713ee9b0224f552"],["/comments/index.html","1791ea4b4797cca8f4aabebe54351916"],["/commission-info/index.html","7d69d2a77467e4e51e824676015e8a81"],["/count-login-number/index.html","92e18239840e69d2c512085be656d0ed"],["/create-button-anywhere/index.html","f3da8482b02f2cf86a1fbb62ea6e9cc6"],["/css/eurkon.css","cbb7e8d6edde62b3cc4c82be6668efbe"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","96d3819ebdfe638740702034b8d827a5"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9bae534f1901fc774f94a193ab37b851"],["/css/rightmenu.css","fa3ff8f2588a60d4820902a775e975eb"],["/css/siz.css","d0ab92aaf665e2691c30336f1780062c"],["/css/swiper.css","b57c502b658df3b4172719e64fe21e5c"],["/css/swiperstyle.css","bfcc27050c6bf935a0328dc94a9b7aa1"],["/css/var.css","acbfaff48418b6603a3c6daa0bf076fc"],["/ctc/index.html","7ba23abf628ee873c18f839dbd91ebc8"],["/custom-credit-screen/index.html","21ece46932b0f43ab8354fa28863e9fd"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","8dd8b2189e8344ca52c1c00c5ef48614"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","241efc4ba2da735d1e8a5b9f47c23fa4"],["/custom-gallery-cg-screen/index.html","295273f173d23a585cfa9cab485f5f1a"],["/custom-launcher/index.html","ebcaa24342202b94eee5b5e12ef08dae"],["/custom-loading-screen/index.html","3382433ee643716159d5805eb71c5f8b"],["/custom-mouse/index.html","4bae5f01b63263af19195559d54cad70"],["/custom-music-room-screen/index.html","9fb4b01d6a938523579a4cf993deabc7"],["/custom-music-room-screen2/index.html","84b8f38ce7261ddc389e35b507b2a180"],["/custom-nvl/index.html","ea682e42633d86b96d4d3f44862bb2eb"],["/custom-player/index.html","64c294cd65539e263b94b9961a2ddc99"],["/custom-preferences-screen/index.html","2f6e350cc6ad0ba8ef2056f3843c7fb3"],["/custom-say-screen/index.html","fc49aa129d75019896ab2943b00920f5"],["/custom-style-bar/index.html","ec6842f7b0f939f01468e5455c1eec4e"],["/custom-style-box/index.html","0ec35e7b1895eba2dc42f0e9a903cc9a"],["/custom-style-button/index.html","b48c54cef400cd85c2e5fdd74358ce00"],["/custom-style-grid/index.html","5736ffacfe010f2bb13e837ae87b5b6a"],["/custom-style-position/index.html","4899870dd98e35d686bb601bd2322a25"],["/custom-style-prefix/index.html","ff01c69f9aa79eb5710cde844a8e82db"],["/custom-style-text/index.html","7e48637fe404c0dbb3dd69ac98a5dd75"],["/custom-style-window/index.html","ee5e559ee403ba19fecbb6a1df205d80"],["/custom-title-screen/index.html","60b0392691c83bff92550c4fcc62c7b9"],["/define-npcs/index.html","0f8cd54427a0e3f21be6fb00eafea5bc"],["/delete-save/index.html","22752f8c719390800e86b734ef7aa847"],["/dice-function/index.html","a6687a8f23bfbfdc1ff9ce9fc52ea011"],["/disclaimer/index.html","04716b3f1a72709f12fac1bc0356943e"],["/display-immediately-all-dialogues/index.html","53e9e672fbded7ee21a398ff67f71db6"],["/display-real-time/index.html","e7487d432657a95eaf11cbc1543664a2"],["/en.refund-policy/index.html","fae7256b4f7782a146a930d7d7f3697b"],["/enter-name-screen/index.html","35ec2c523a2374fcb363e0003c8e0272"],["/export-game/index.html","6cbaea2ada390519c5a7771f2bbf510e"],["/faq/index.html","529243f5d0d07b76b167cffb10fddf1e"],["/friends/index.html","bf87ac6ede785e7f8111eb4714ab1abf"],["/gallery-template-assets/index.html","e4f4975e8f263e12a76a30a2949e6b42"],["/gallery-template-default-ver/index.html","a7fd75ff7ccd40f36f1694e9b6c3960c"],["/gallery/index.html","e6510e1e095cee874b9a3530388fd2b3"],["/gallery/photo/bg/index.html","2bb5f846996e0f87e8541a2a71477d16"],["/gallery/photo/gui/index.html","bb3e5e379926c397363d28a9a15748e8"],["/game-only-text/index.html","7c94b7436746e941e82032f21d66f20e"],["/generate-random-name/index.html","00e1e9808b967b3962a31b7fcd414b71"],["/gui-017/index.html","b8ff260b751ea577f82be61134a0a8e2"],["/gui-vertical-002/index.html","95a4c843b1077844507c82da363f920e"],["/gui012/index.html","3bfbc037357f6a2650d991ab35e6c91d"],["/gui018/index.html","3f5de862357ac7d1cf88862745712d99"],["/gui019/index.html","e78a831e36a235c7b352707e08e7efdc"],["/gui020/index.html","d844816899f6541f533697e95cc274d9"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","f55991798fcc6ab05bb402543eff9a0f"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","19daf5eae137b8abd928b234fcbf0eef"],["/hide-quickmenu/index.html","9e1f2d1c0588fd126aefdbf9a12c4e21"],["/hide-textbox/index.html","fd9913991fd7560cbaab635e1504a21e"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","347fae84a663af642470c94f9b21d009"],["/images-tip-function/index.html","5c3a789990525ea0a22bff323dc0a09b"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","e6eb81a88f4f9006615c244286117c3c"],["/index.html","539b16e4667917c8a6f49b63ebda1b8e"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","37898f32f69ff6ec30a507ff9c3004f2"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","b4de19a78cc1a6926677a7cc59e2f9cd"],["/items-sprites-effect/index.html","2b78e7ef337e8dd842fc87b25375af6b"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","6b557a263cda910eb596e123afe77674"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","7a4ea7ae1a7e1ee384b6976703f74348"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","0af64f3b9fc035a774dc3bca00767925"],["/link/index.html","ba87a7b22515181e34b0302b4ac2ff29"],["/login-reward/index.html","ae092887c47823663f146c7389c5dd6f"],["/main-menu-music/index.html","eb4153014fcb0fee3de0ef3a41a78866"],["/make-butterfly-beautiful4/index.html","76f8d2cc7bcd4d029103312869b9110a"],["/map-puzzle-system/index.html","ef3990cb61ea0e4aa5decf2f5e06d91f"],["/maple-effect/index.html","c98c6ae7b1d83d3a41f421b77732fbbb"],["/memberships-2/index.html","7a499f7d62bb9397139c18984528a783"],["/memberships/index.html","e45463f3202201ad16b9e0dffa507ede"],["/multiple-language/index.html","273762c335a6555fc9f11b78a7c78cac"],["/name-input-assets/index.html","91cb62dc60925d8d07eab6f7b4355db8"],["/new-year-event-2023/index.html","f2b10077bcc73e1ccaf43a79bb9d3957"],["/newsletter/index.html","c376737c0187c9fbb441fe5114d67c5a"],["/nsfw-limited/index.html","57abae726a9468198bd88c503e961b1b"],["/null/index.html","8c6d220da020b2c947e181248dd50b95"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","7961ddf91bc4a45b48dfd66cb4c67b35"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","7dfe3d9ee6e14f8571e141b54657cfb0"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","a8c2ba039d6ec2c692b76d8ac748e5f2"],["/openchatai-renpy/index.html","2ca4787da639c853cb9f39df8c193213"],["/original/index.html","00f2488e3ec31062b0178763928bd3e5"],["/page/2/index.html","40053ecc71889667ef5985501c603f66"],["/page/3/index.html","450d9ef23442a811aef95cb3fd21c32a"],["/page/4/index.html","9164225ca317de4587a880beb5c4b715"],["/page/5/index.html","fab8a4a54946ab277deaa1bee61d7c6a"],["/page/6/index.html","512efa845ef3affbd61b6b0db87630ab"],["/page/7/index.html","a6c68f63563c8034001c9f14a4d81013"],["/point-pop-up-assets/index.html","2bd7734d4d9820970c937a0759c552cd"],["/pop-point/index.html","649b6bac650daf10563d603e657664c1"],["/privacy-policy/index.html","e335a82bd6c6b1b977af9f38394efe77"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","32fb0b05e0438b223cac52b1b24dff42"],["/random-number/index.html","ceb2cf112e4a4fe0c79b29607b6a4455"],["/random.html","6f59e6c13aaf9d91832be75d133c7447"],["/refund-policy/index.html","1d8b91fe2ba37cb3777dcdc857d3215a"],["/release-017/index.html","c240e6208bc305014f7826e373397967"],["/remembering-choices/index.html","172926c9ddbe27b483601c5fcee86784"],["/renpy-basic/index.html","505f383a176462c45a6cf7ec6847e6c5"],["/renpy-crash-glitch-effect/index.html","ca0dfdd4ea1138a84aa6129ea5217d5d"],["/renpy-flip-image/index.html","c34e13170daeb90c2a3a54991e7f1fe2"],["/renpy-matrixcolor/index.html","49812c7497b9ce86a38bbc4fdfaae655"],["/renpy-overlay/index.html","fa8b5923fdec079a9c1fe75171510a5e"],["/renpy-review/index.html","93b984313c68a65f53b4e6718c877509"],["/renpy-typing-effect/index.html","6d2e82391a49d0329d9f739c93cbda3e"],["/replay-cg-screen/index.html","1deac954eac3a0054010e8221db0e495"],["/rpgmaker-assets-menu/index.html","b53e5a7107e0a6596ba351b637385d00"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","02d2e046340c1f58eae4a2a86c9c21e5"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","1418296a461d25a539ccbbbe4598d77a"],["/sakura-tree-background/index.html","353aa9fc183ca0098d49211b406a8025"],["/selected-button-style/index.html","a4a3fad69cc0e2da3f7619dfb284a741"],["/service-worker.js","3df02f783147f65028cde55e2f8d5d7b"],["/show-variable/index.html","c9ec98d4af9904a0ba5f4847fb4bee10"],["/side-image/index.html","50968e410d20766df821d4e067fcb6c7"],["/snow-effect/index.html","034f4def2be8c45a3b81f5107955e024"],["/speaking-animation/index.html","1a2f4025c127f3429b092cccda9107f2"],["/splashscreen/index.html","4f59993fab0b7c034a92d8b7b0537377"],["/suika2/index.html","6b22ec1e2db8a4d6533c1e1b28674927"],["/sw-register.js","2760aabe42613347463fd0989e64e23b"],["/switch-chapter/index.html","7f884d1a38a14808824de3073e3f2620"],["/tags/Hexo-plugins/index.html","cadce964831f25c2004f881a21aca74b"],["/tags/Light-VN/index.html","e136f062c681b37565d5ebd41eedbe21"],["/tags/acg-creator/index.html","61bd915c3479ea24a05835e09ed64366"],["/tags/ai/index.html","9cb49c20639eb9681c212fb2bc797375"],["/tags/butterfly-beauty-diary/index.html","334c9fc509ba3f2f7bfe5afdb5189604"],["/tags/custom-hexo-theme-butterfly/index.html","109454f9ccac06aee4c7df09f5e3df3f"],["/tags/custom-renpy-title/index.html","d9f462cb46f9bd630da37f2c15df9bdc"],["/tags/dialogue/index.html","9c0085f839ba16d139ad5dfd033d627b"],["/tags/effect/index.html","0767a8c8aff34d6d12473324f973ee08"],["/tags/event/index.html","b165eeff49f25017c70b7e912f1b3600"],["/tags/hosting-own-website/index.html","6b94dd215df26c0e076893ac0da119f3"],["/tags/index.html","fe98716d0a882283b8068adcbda0b1dc"],["/tags/itch-io/index.html","80b8ca3c5ac1d9d8dab12afcdc94a71c"],["/tags/light-vn-update/index.html","ff556b8b586a9087c2c1eb40d53c63d0"],["/tags/nvl-maker/index.html","f1fa4c676b3200710b69f3f967c8ee1b"],["/tags/player-related/index.html","8cc21f8dd3e8f896b40a9a7b85238ee3"],["/tags/pro-tutorial/index.html","50193073e22d0bac5e5315d46c72431d"],["/tags/pro-tutorial/page/2/index.html","491c22b2340f00f452754064faa7e883"],["/tags/pro-tutorial/page/3/index.html","f56be5cde88ef6cc89939c668a09aa96"],["/tags/pro-tutorial/page/4/index.html","6074c400935f3a346389c15e8004da75"],["/tags/pro-tutorial/page/5/index.html","4ecd6b1f0e84fae4721c48c4e31fc100"],["/tags/renpy/index.html","e3a6a0116c649e2ec5b4571f5e579fa4"],["/tags/rpg-maker-custom-map/index.html","d27b04a3a43e46a3d4dbf0207645242a"],["/tags/screen/index.html","c082ff76ee55854f700f83de088ed6da"],["/tags/special-function/index.html","19ef750bcadbebeb35f73093031df61b"],["/tags/suika2/index.html","6991a7a2dc6eaebc8394d397d3f35966"],["/tags/terms/index.html","7f4cd0e1f7ebc226f965f837cc84b0e2"],["/tags/tyranobuilder/index.html","3af7b483fe59153841bd6e55f512f1e8"],["/tags/ui-assets/index.html","ef47090e3356e515cd51d2276adcfe18"],["/tags/update/index.html","0b644d83f24a3ca23b30ed39d2b5366a"],["/tags/upload-game/index.html","d761a15c358ca9aa433fa866b4ff2182"],["/tags/variable/index.html","7e0b51d3ecd29c610c0bc27470371105"],["/tags/visual-novel-maker/index.html","9c89ef9644381c6bd67d382cd91d5bfe"],["/tags/webgal/index.html","05d6cdcad443dbea52f0a6329f9924f1"],["/tags/封面製作/index.html","3162b677f45451c54cf039873e5a9c74"],["/tags/背景素材/index.html","392ad87baa58cd97804b4abc8bd42401"],["/tags/隨機功能/index.html","18369cbcebc9bad7b5e8b756a97cd2cf"],["/test123/index.html","2d7407f3a8ade1f24b629508fe0b4dff"],["/textbutton/index.html","ca4d2f1dc2a8c2ea031250854dc7eea9"],["/to-do-tutorial/index.html","74455cab0430c681497b6753b81775b9"],["/tools/index.html","55c4b7ae9bc22f9e04893343542249ec"],["/tooltip-function/index.html","9aa78c3222dc3f23b8d50485c320afa2"],["/transfer-to-hexo/index.html","001c1e84a1ad58bbfa1eb6b7d179dbf9"],["/tutorial-update-history/index.html","9e18b83c22ad2458263b627c09ef95cf"],["/tyrano-name/index.html","1bbd5a45e6c2c234d399de7c07241427"],["/tyranobuilder/index.html","f5a6196bbf06c07517fba90f6b72ef2e"],["/undefined/index.html","a47e09d723cceb42145509a69b20ba61"],["/unskippable-video/index.html","faff25973ca3fd403dbe2fc79abf3236"],["/update-20221211/index.html","9aeac313a3eb446fae7924f424d2342e"],["/update-20221218/index.html","7e08a3256fba59125a91659a95e556d6"],["/upload-download-save/index.html","0e1b4894efd270f46457cf5fbc46b72e"],["/upload-your-game-itch-io/index.html","3677a809e0d94fb598a3f7d0d05463c0"],["/use-list/index.html","f09bdf20f1182432f624fdbbc7df0c48"],["/use-nvl-mode/index.html","ad2850228f2dabf68eed8e626fce09a8"],["/useimage/index.html","f09f8dc8d1bb3bda8ee0bdffe501db45"],["/variable-change-image/index.html","b3608990fd22e83b42b7b63d6830006c"],["/variable/index.html","b927764403abf60009628b891a3e649c"],["/vibration-function/index.html","aec4531871bd8798104e0a48593eadca"],["/vnmaker/index.html","470a759fdea79c60f0dccd90f2d24f82"],["/weather-effect-tutorial/index.html","8eda0674882e2f6de051b1fb65e23964"],["/webgal/index.html","61685bf892f9da01804236c3e4a55058"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
