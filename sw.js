/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","fefa5f747dd534d37bf54dd265fc5887"],["/2024-future-plan/index.html","04eeb56749e98162e2e837481a9d7f3c"],["/2player-battle-system/index.html","66575d1e4d9c16a8a02470054e00ecde"],["/404.html","8d93e71e8968722b4c84917345ed0d78"],["/about/index.html","7b9ab263c0f1d261825fbce50c040ff0"],["/acg-creator/index.html","68836bc6f28e6cc2af40049ee2c067d3"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","c7fbb96719970ed037fcfccc640a18ab"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","1d136559eef9cd1cbdd3c9f494f4a3be"],["/animated-title-main-menu/index.html","a7de9bab3789a71e657482cd2b90b445"],["/archives/2022/05/index.html","f7f59ce25adac282dd46fc11351388bb"],["/archives/2022/06/index.html","132d853699082ff377ae22dd19625b27"],["/archives/2022/08/index.html","e6fc11177c078201488ca7138c75599a"],["/archives/2022/09/index.html","062d63c6b1bfc2994d5178b6331494b8"],["/archives/2022/10/index.html","7216dc32de44030cbf01017bed368189"],["/archives/2022/11/index.html","08390b59aba1709648108c6edecc1e4b"],["/archives/2022/12/index.html","398cbcae9344a31ca84dc2874e70223d"],["/archives/2022/12/page/2/index.html","94bcec0d2c33f64f5c717ede12772ec0"],["/archives/2022/index.html","e16524b9bd6c53f568ce0eae1147499c"],["/archives/2022/page/2/index.html","0f1372b16ff2d5264248a058f4fda74d"],["/archives/2022/page/3/index.html","1e59f142cafafd0cd8ddad19e7d9565c"],["/archives/2023/01/index.html","d848b6533ef3eb3e904a992fc112dc71"],["/archives/2023/02/index.html","f52d23ffaca85d552b1690f58dbdc7e7"],["/archives/2023/03/index.html","e23f7dfc1b0a9ed0670f802c22018465"],["/archives/2023/04/index.html","78f722bf9922c971d7ae9e8d62ef2680"],["/archives/2023/05/index.html","823431c786abe8576b2c105203dc7e7f"],["/archives/2023/06/index.html","23b3ef2a283353e4f4fb23f5d0a2b2ee"],["/archives/2023/07/index.html","da76033941dfa0c8b6837ff9cf55ff24"],["/archives/2023/08/index.html","236b5c5069b30bb8f67261fbb070c8c5"],["/archives/2023/09/index.html","d0fd91469c516da27f6675d2cbacfd67"],["/archives/2023/10/index.html","506436232c19c833e87b855a7f560576"],["/archives/2023/11/index.html","c05c1baa7dc5c94aba7dd8f4cf80f4b3"],["/archives/2023/12/index.html","96bd0f0c9995c7f812c744eabdfbddfe"],["/archives/2023/index.html","e9f8b9a316b139173abac2c08f13d915"],["/archives/2023/page/2/index.html","90d789e70741ceff287bb19a4769c622"],["/archives/2023/page/3/index.html","8309e6520045574a857606618e03f3f7"],["/archives/2024/01/index.html","b2ce57f807129a49dc4309d560f338e2"],["/archives/2024/02/index.html","4ef7535fd8f05a58a061790456eedf75"],["/archives/2024/03/index.html","67a9b454619196e6a29af387c61e9315"],["/archives/2024/04/index.html","fe147e1a7991238049ba27d83f716b3a"],["/archives/2024/05/index.html","dc0787f612d85f8418373a7e2a46cac2"],["/archives/2024/06/index.html","63394e684f466fe01cb7174a0c3c5548"],["/archives/2024/07/index.html","744ea72288196653f1d9d4db94afedfb"],["/archives/2024/index.html","9bf985e65b349edf15bc6508a9cae564"],["/archives/index.html","67b9788a481aeafb375eeaaef6da4393"],["/archives/page/2/index.html","a376980d7788e8a7ceb506448110e6c2"],["/archives/page/3/index.html","57970de39587ac33875eb840b2da4af6"],["/archives/page/4/index.html","1c514a35195e58bda89f078f9080c552"],["/archives/page/5/index.html","63299a768fad6c886a832fd9c0c9aa6f"],["/archives/page/6/index.html","f0da75454345eade6c04a8030aa9082c"],["/archives/page/7/index.html","51feb180c591149c1fc09518113f7041"],["/artitalk/index.html","510242a2e77030ec1990e7c7cbbc21bc"],["/battle-beautiful/index.html","93345661e3140009e49986fcafbaca6d"],["/blur-effect/index.html","de0d51c6270fc866a64e7d57bef06537"],["/butterfly-custom-tag/index.html","8e25855d76f3c39804a12a93d4c2ae92"],["/butterfly-plugins-faq/index.html","b60298cbe61b9f6cc90ef7478ba2ef40"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","59c3d8696ac4373f23fe49018d5079c5"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","bc64a3b8b8a6616e629965aab1f23b65"],["/categories/announcement/index.html","b91224d3c7e4936aef56d95958057308"],["/categories/diary/index.html","42ade83766cba8e25c38fd9df068295a"],["/categories/game-dev/game-engine/acg-creator/index.html","b1200cddea940783f99d3d3d48e1073e"],["/categories/game-dev/game-engine/index.html","d761c5cf4fa2178de9a7fa68c1802679"],["/categories/game-dev/game-engine/lightvn/index.html","c848f3b70de524e5e2cd20d03c8a478e"],["/categories/game-dev/game-engine/nvl-maker/index.html","d4224eabc0d6bfec8787fa1a9935e333"],["/categories/game-dev/game-engine/page/2/index.html","9e0c99459f622cfaf302ac6a8f314d8c"],["/categories/game-dev/game-engine/page/3/index.html","59ed6cfa5dadd6e40acba56189d7b99f"],["/categories/game-dev/game-engine/page/4/index.html","b4e51299fcdaf6f7bd962835b9efe67f"],["/categories/game-dev/game-engine/page/5/index.html","6fea9cea041c922c064fb547348edd01"],["/categories/game-dev/game-engine/renpy/index.html","68032367cba7001339d6be1452900556"],["/categories/game-dev/game-engine/renpy/page/2/index.html","bc151033e0eae641f7e10b599b1fbc5f"],["/categories/game-dev/game-engine/renpy/page/3/index.html","4c76adfc1bb8cc1a137ffe170f22221c"],["/categories/game-dev/game-engine/renpy/page/4/index.html","72d68be4262ce27b98f21187f86db38d"],["/categories/game-dev/game-engine/renpy/page/5/index.html","a34cf88c0d91ad8b10ff25f02378f725"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","c69f927ca353e2844f8980d78bc21b0f"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","619e3ac6695e73911742d240e31e7b96"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","fed943be01b43ce7b3957385e1262d1a"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","852f525fabf5ea64732f0309d108af78"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","ed6a0bd2e0ef008ca93df9aaad9d6199"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","998da392adb3aec89c1566ee6f2a069c"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","3a7f4c7ca454ff3659456d8dd2df1e54"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","d3a0ccf7889d0752c455a461c9c46e31"],["/categories/game-dev/game-engine/rpgmaker/index.html","e33e5f93e030425087eb49cae020d497"],["/categories/game-dev/game-engine/suika2/index.html","b13a9440da09d71d91ff3904115f893d"],["/categories/game-dev/game-engine/tyranobuilder/index.html","568e6bd1734af8a35fe948263c170615"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","196be9a48036e3e5c7f85bd7edccbfba"],["/categories/game-dev/game-engine/webgal/index.html","f1c8229f13c2f3e0d1a4f6aa561649cb"],["/categories/game-dev/index.html","0fb266ca9afc77e3fd9b92b1406321d9"],["/categories/game-dev/page/2/index.html","a01ecb773453d3e3c5457da95032aa3a"],["/categories/game-dev/page/3/index.html","aeb8d7ce26be201e5b2b0ce0833186a4"],["/categories/game-dev/page/4/index.html","9b70dc11daf320fb0e2b453225f7b797"],["/categories/game-dev/page/5/index.html","749254a1b986d5a963bcbaf6c9c80a75"],["/categories/hexo/index.html","b650de793031f5e141fa96b7ed34489d"],["/categories/index.html","a8793c45317f4d8b94dc6b50f98e99f3"],["/categories/material/index.html","c5edb8ddf2724dbbe5b6a9f85d33f2bd"],["/categories/update/index.html","530355a6a924bdc77b0cdff1ba1ea95f"],["/change-according-to-real-time/index.html","4120425b2122f9fe1028b9c7829eb219"],["/change-character-info/index.html","5ad4897427a3e02ae418ea36bd95f8dc"],["/change-title-after-first-time-viewing/index.html","aafc61fcd587fbad48c92cea65218925"],["/change-title-based-on-event/index.html","4675d1519435780fae0dfa11cbd7a715"],["/character-interaction/index.html","23b857aefb4559fd79a49216c2e834cf"],["/character-stats/index.html","e4f9a60fb30aa01b33fa31faa466e465"],["/chatbot/index.html","23abf663947c68c7ce5c644035a9d4a6"],["/choice-time/index.html","b61d4e3947de671f59b91e50dd56289f"],["/comments/index.html","943e62e6a84c962fbd8e0474a6ce1fe2"],["/commission-info/index.html","0c6029e3ba1f28667472f920c2894a38"],["/count-login-number/index.html","8797fe9e36e0dcbdbc5f0cc40fd561b4"],["/create-button-anywhere/index.html","6c10e2dc75fc2a7e7b3d49987c37a413"],["/css/eurkon.css","85f195e862781a9c078cb37a453b0253"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","f81f3efd4118587a5dcae0420b88b6ba"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","49d76a38f6db01c6967bfd7ada20b312"],["/css/rightmenu.css","d1d5ccc8e799e8c084af74fbe047abb4"],["/css/siz.css","c695ffdbd7aee8eb34c04fbf593d8355"],["/css/swiper.css","9b10607846923c8eae779e2dfcbfc13e"],["/css/swiperstyle.css","7951344ef6019baa41c5ef62bfba87a6"],["/css/var.css","2163be9fb4ae137703d53fc9b1d7c26b"],["/ctc/index.html","bdfb19c457c2cb14d076417d4325297a"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","883661c5ab8ef0d986ecab730ad8710e"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","7017f13ce3931dfc3892bfe6b8ba72a6"],["/custom-gallery-cg-screen/index.html","95325583a0b76072deb60f4b6120c49b"],["/custom-launcher/index.html","f4f76362b53a01e1acc8410814010d53"],["/custom-loading-screen/index.html","e2d386b85faa1be3c44996d6b48c8458"],["/custom-mouse/index.html","30fd16897861aa6a30557fa8c3c7cf87"],["/custom-music-room-screen/index.html","1d46938b843ecda5e032455ea068b008"],["/custom-music-room-screen2/index.html","d85c75eed1e8c2954cfd0e575d62bec4"],["/custom-nvl/index.html","6dcd6e122abd2e637034ef5b7e0a5c34"],["/custom-player/index.html","5a8f5d5218b64d4c2008153c9c5f3d0d"],["/custom-preferences-screen/index.html","ba484fb47ddc8dab7652b024c6ccda20"],["/custom-say-screen/index.html","8ded9c6c04405498235b8d97c3034277"],["/custom-style-bar/index.html","45cd82d9e665b3901c629b58be09b9b0"],["/custom-style-box/index.html","7d5470209b11ce92b141e43582daed3a"],["/custom-style-button/index.html","a914f04bc017bc2f3d9f8b00c6ec697f"],["/custom-style-position/index.html","b8c8ab8aab7be9072adfb9cacc925e42"],["/custom-style-prefix/index.html","75a2df5e41a157fd534ec1d69e3445bc"],["/custom-style-text/index.html","5516a6d5ec564a801d6865f7a627af94"],["/custom-style-window/index.html","a7cce0c59e003c4e7dfa0888c093d6eb"],["/custom-title-screen/index.html","c74e687528684eb0fb98395710dc5106"],["/define-npcs/index.html","03901b17727247f51cc5b906c5188e80"],["/delete-save/index.html","7f42f37f1530c85a6c935826ffece33a"],["/dice-function/index.html","28864cb8c1ab0e2afad6739d45ed0251"],["/disclaimer/index.html","771a63246473d16116c4b23e376c53b1"],["/display-immediately-all-dialogues/index.html","3aeb96e012a78dd09d1f1d98f5659bc6"],["/display-real-time/index.html","ec7e611616841a777cc72f68bddc19d8"],["/enter-name-screen/index.html","31ea278bb7e0d5059b5d6552cbb3409b"],["/export-game/index.html","e9a965a3ae8d7eb42b7d5345966e6734"],["/faq/index.html","41873a9734c5530f83878c947d516a42"],["/friends/index.html","2cf210a8835a98114d39b61c884524ec"],["/gallery-template-assets/index.html","f24d676a04b9803cf61d0d8294a457c3"],["/gallery-template-default-ver/index.html","8a0fe0ae3ba7c1df58a629342d3ce92d"],["/gallery/index.html","82f76033d78d0e82fad8e98e0ed862b0"],["/gallery/photo/bg/index.html","39c2ab902468bc0f28ccae7cab99e7bf"],["/gallery/photo/gui/index.html","a67da6fe72972174084fe38c445884ed"],["/game-only-text/index.html","d6e6292289f27509a477af7c67224777"],["/generate-random-name/index.html","95f478594305a28884590dbacfaeb18f"],["/gui-017/index.html","a03db1ef6645543123373bd2e11c6791"],["/gui-vertical-002/index.html","9585cdc324d62b9e6a7428bebe109539"],["/gui012/index.html","5fe46fa6b6c9490b041b2a8acc118562"],["/gui018/index.html","d41754e3290a1f807db8f1c38532f59a"],["/gui019/index.html","6b51dd6e7613242f3333c59080757ffe"],["/gui020/index.html","2cfa38ff9b4a0c38aafb0d66b651f94f"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","aa6e447794d40bd9428770977995b429"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","190ba7f605095a3ca798944af9d77c43"],["/hide-textbox/index.html","db4e773d3f5e31b6fdb6b8e27241d70d"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","9c82e5166e7902cf66dbfebc32044f71"],["/images-tip-function/index.html","b2d18a018841477249d6fccb08426702"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","c5b45b6f638e6234f66e548019e69337"],["/index.html","de277a6661868bcc44c50e69ef353186"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","7d2383c1c20fc00dcb2a3a4515fbc636"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","da628e40fb5fc4fb67e2d6fd8860c1d7"],["/items-sprites-effect/index.html","e7954ddd93825d8c07613bd02c5edb92"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","5d6f60a359e5c1b22f5f10f6f0d5ee05"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","4ef3742b461721adc6a984eaae72d073"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","fea85881734186ada7e0f370b4ddf16d"],["/link/index.html","ed7936d23388cf13eea2356fd48580e7"],["/login-reward/index.html","f2aa1038a5ebfad3ff8e168dde6c2f58"],["/main-menu-music/index.html","977b34231f39ad03d5a55d43d7c19c73"],["/make-butterfly-beautiful4/index.html","212aa1235492dd2e25844270d6626cf4"],["/map-puzzle-system/index.html","4cd297e6210114895a36153ceebce0b8"],["/maple-effect/index.html","6bebe8d6e6749695583065fbb501f8dd"],["/memberships-2/index.html","a7c753ebc8972ba8cdb5aacc4775c79f"],["/memberships/index.html","776aa17e48d42ef38152b99b6b777f47"],["/multiple-language/index.html","ea36255e36d0e6a2408da3cb691f05e5"],["/name-input-assets/index.html","3462cbc54e2112013a48dfcaeb895fa3"],["/new-year-event-2023/index.html","99b9a23cb1e11b07a28c00551289f58d"],["/newsletter/index.html","35e7884497a7f00dfaf6629ac663438f"],["/nsfw-limited/index.html","4a8534b927d71db7518661337000fc09"],["/null/index.html","0df50eadffd5590169358cde9833c1a6"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","7f8f4583d339074cd6f2e14521afd62c"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","359ca36a59c0376c677823164d016544"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","4b5d0d5d15da1eea280da24e1e6b298f"],["/openchatai-renpy/index.html","afede199a30ae6f1134b383e658caeba"],["/original/index.html","5074b8292947bc542216c549d7d819da"],["/page/2/index.html","1f3212357ee313b8da83947745926822"],["/page/3/index.html","19210e32d1efa5503b949190be45c386"],["/page/4/index.html","7de046ccddc3c648634ab9c72134ba18"],["/page/5/index.html","c822b762ea5360b5af051847edaa9a9d"],["/page/6/index.html","6e5d6456e02e6395b6b23a6f8d2d5d4b"],["/page/7/index.html","8079fb0c56f88300c1a51f43d1985688"],["/point-pop-up-assets/index.html","942132712a8997b466e1e4fdd58f339e"],["/pop-point/index.html","0c21e953bab670e3ba575d3f6409b73d"],["/privacy-policy/index.html","71c0ae3ee79dbb67de1ea91be55d9e02"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","e72e3a6806ca2c19f0dd008c8a3e6466"],["/random-number/index.html","2a2afe20d13695ac18e262d111ae20d7"],["/random.html","7e8feacf1bd6768fcd6120408b5c739f"],["/release-017/index.html","f883ea42eec7adf852a016d0f34e5329"],["/remembering-choices/index.html","9c284eb136f19dd6d256410d7e0d6324"],["/renpy-basic/index.html","5b0c5de011c50cbbd69d7164bca6029c"],["/renpy-crash-glitch-effect/index.html","bd1994102136d5ef028afc0b3c78a2a9"],["/renpy-flip-image/index.html","95018bd042b56fd3f3d5d933b459754e"],["/renpy-matrixcolor/index.html","8e7a8630f61c962e6337d53394fb03a8"],["/renpy-overlay/index.html","ddabf02236abfff571a29590eb3837d1"],["/renpy-review/index.html","930a310ad5af5e9a32b1e8c6237eb8ec"],["/renpy-typing-effect/index.html","674a523c6bf7b7cce0a3329ce84a5dca"],["/rpgmaker-assets-menu/index.html","2e1e4aa34fce2d489a2293edeac9e739"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","c678a45d5a63eaa77873999b9af1e5b9"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","6cd28014bc09fa5d64a7fc7d5b29105b"],["/sakura-tree-background/index.html","6ebe4fcb1c13c703f8daa2372887bbb8"],["/selected-button-style/index.html","1fe8780e31c1dae407f252e20e8bb5fc"],["/service-worker.js","001cf781a08ce8dd0241624be8a9eea0"],["/show-variable/index.html","7b6ffc8b75df0d8653b187be21eef863"],["/side-image/index.html","7bca3d4fd0e4d3ba21bd01e2e2b3bd3b"],["/snow-effect/index.html","2129e62b30cc3085d58072a7beeff4f5"],["/speaking-animation/index.html","a8ce1bc95720633b0b0319181b753a7b"],["/splashscreen/index.html","0e85a6e3d18e7db18b19ee41307a42a0"],["/suika2/index.html","76b9b6b73970f763b2690c03091fa406"],["/sw-register.js","ac3fa0952ca5cc4ca3729ab77805c332"],["/tags/Hexo-plugins/index.html","adb260a416301b24156a0ac19820bebb"],["/tags/Light-VN/index.html","da254a5ae291d844e17eac4593600f9b"],["/tags/acg-creator/index.html","54b7b03839aeaadd07733173d0539f38"],["/tags/ai/index.html","5a0d0ae7e6b52247a51bd52bdb1419b1"],["/tags/butterfly-beauty-diary/index.html","ac9b7815aa5c0f6a3a9b2e3a6aff09d6"],["/tags/custom-hexo-theme-butterfly/index.html","9262fa343aaf1785444f98738827ab7f"],["/tags/custom-renpy-title/index.html","80896608ab8d99c548980bbd39b4f3e8"],["/tags/dialogue/index.html","4647141e945334d5983634d5172fb70d"],["/tags/effect/index.html","33a18b62e515ac0f458c13c015b9fc60"],["/tags/event/index.html","398ef11adc1265ff3608ad844da7910b"],["/tags/hosting-own-website/index.html","036023d25d539367e3ec8b85b7db5ffa"],["/tags/index.html","09c8119710901dbec7736fb18f30f450"],["/tags/itch-io/index.html","5e9ea4b47d31cd7703676947f5074f00"],["/tags/light-vn-update/index.html","032783cc3966d15d15b5dc0cc81f4a23"],["/tags/nvl-maker/index.html","91de237baa5d510c73bdcc02597800a0"],["/tags/player-related/index.html","17b23d56902b091365179313566dcbf3"],["/tags/pro-tutorial/index.html","f590c81ae9e6bcdabc7a1b26c0b2e29c"],["/tags/pro-tutorial/page/2/index.html","d6904b27841a50722d38251cf955d827"],["/tags/pro-tutorial/page/3/index.html","820d281599839c92e24bec17e98ecf35"],["/tags/pro-tutorial/page/4/index.html","7963db5dece605d6642cb0eb277e64df"],["/tags/renpy/index.html","3ec25c7912090206988dd68d23caace4"],["/tags/rpg-maker-custom-map/index.html","56246b36b3e7d4dd46a006d8aa9a49cc"],["/tags/screen/index.html","ae2f694f5638e334413a52b70efe915c"],["/tags/special-function/index.html","f518c01de2ae4fffe1f59f168cfa40f4"],["/tags/suika2/index.html","e662cd205afd2847e9733cb831557651"],["/tags/tyranobuilder/index.html","c6d66ca0a05261286b3f4c14b65a8a94"],["/tags/ui-assets/index.html","42acb9469014e6b9ccc91d739b368750"],["/tags/update/index.html","6a985d4853a3f7a17620175fe564a54a"],["/tags/upload-game/index.html","4f44875660e87172f1127b092eaf0cef"],["/tags/variable/index.html","823884c012b2c2ded19d1f987eec34c2"],["/tags/visual-novel-maker/index.html","73229131393e926eaefbcb7b25e10eaf"],["/tags/webgal/index.html","4a9154f3a8201d467c04cef7fd580eb2"],["/tags/封面製作/index.html","d176732489e7b2df5b36056908722e8b"],["/tags/背景素材/index.html","59efeff6a7438024023849c3103d0b8c"],["/tags/隨機功能/index.html","102a32166789608fdb65b7e823fb342c"],["/test123/index.html","ec39ecd68c3516a3b7f90ac3547e4e7e"],["/textbutton/index.html","acd7fd81ae31e58dd7cb0c1a4662b562"],["/to-do-tutorial/index.html","844434a32746eb1fade4b74651749efb"],["/tools/index.html","7c31a68efef70d881352c5d4912d4d9d"],["/tooltip-function/index.html","9b6b8447cfbf0156312533fa1d20aa61"],["/transfer-to-hexo/index.html","6534997d30fa956e9df4376ee731ecd6"],["/tutorial-update-history/index.html","22959c1d66684fbcf83ef5f499d109a9"],["/tyrano-name/index.html","1f25af7bd909b6aa915c8bd5016dafa9"],["/tyranobuilder/index.html","fc7811920156516e26a536c1f0c4b183"],["/undefined/index.html","ed371e5acbac1efa37ee093e74513686"],["/unskippable-video/index.html","894c67ae0040190b7f54414cee98ca02"],["/update-20221211/index.html","8441e0f8752c46ec00c63f385ae9ae51"],["/update-20221218/index.html","76e353188beb668c2b70f28c6321a03f"],["/upload-download-save/index.html","5ef4c4cfe6a705bd19ab75134ffa7c0e"],["/upload-your-game-itch-io/index.html","305bb61ac160dcc4dfe4f3446ad1e63f"],["/use-list/index.html","83fc911be6b75d6b7f603e94bdef287b"],["/use-nvl-mode/index.html","b3de23ef6f1877d804f606c3e423fe3a"],["/useimage/index.html","0ded8995adecee646ae0c35cf9ba6666"],["/variable-change-image/index.html","1dfabc6074e5607376fb1d103b65b513"],["/variable/index.html","2f59ad265b5353b75f3f4c47f51e706a"],["/vibration-function/index.html","c6a7d9c29fc8d5112d57bdb75775fa5c"],["/vnmaker/index.html","e7def87095121ab363c7707a9b03e8f3"],["/weather-effect-tutorial/index.html","2b6cfd4c9a541a7f9233389b492aaf7a"],["/webgal/index.html","62198b59f8c413a4baa479599b0b1de5"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
