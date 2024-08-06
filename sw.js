/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","56a0666c80674258fe962cee2a290de4"],["/2024-future-plan/index.html","c0435d16165dc50acb559d57590e48fd"],["/2player-battle-system/index.html","3699227342d428fca3a6389ffb27c28c"],["/404.html","b2f603c290d16663f727b3585f7aa94c"],["/about/index.html","0204acc8af27f1b2d1d87e16e819fceb"],["/acg-creator/index.html","20d46623a81ee5ead515428a2582b246"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","c1ec7a860720244b7652b261a98d5249"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","fb075a884c2ba4677b32d0fd3f6d020a"],["/animated-title-main-menu/index.html","758261e06b02c27ae0be02d122c1452b"],["/archives/2022/05/index.html","604686044a567df0c3e5d09c2ca7b579"],["/archives/2022/06/index.html","55c44872e93d96446f13771c4acdebcb"],["/archives/2022/08/index.html","d3664e0538325df55faa70c498f6e767"],["/archives/2022/09/index.html","b009a88d8c254d2deb4c2edce5dcbe0d"],["/archives/2022/10/index.html","ae385329bbdeb33a28fe374af54e55fe"],["/archives/2022/11/index.html","dc3a7bf15bdb3bd0838c8d2092d262c8"],["/archives/2022/12/index.html","6a93039e663f94eb5db4a7116070270f"],["/archives/2022/12/page/2/index.html","088c6d2ca6d4a9ce0d999cc83264d5dd"],["/archives/2022/index.html","5cea1dd5f61b32c1bd6db3826aa526e8"],["/archives/2022/page/2/index.html","8bc7b8733fb12b43ea8a5521840efd2d"],["/archives/2022/page/3/index.html","4c40cf5725a5c3ccc87493ac41b11d66"],["/archives/2023/01/index.html","144448eca45b6ecee9879ab2958c0740"],["/archives/2023/02/index.html","e30eb30b54c1d332ddd5667b21abf54d"],["/archives/2023/03/index.html","442faa9359f7db9a6c397e30f85de055"],["/archives/2023/04/index.html","1e7cec2bdcb3824009f6f5b763a3a1aa"],["/archives/2023/05/index.html","235cd02896b7062cb69fade47ee04229"],["/archives/2023/06/index.html","f658456675bd3f4c0c74cca377cead2f"],["/archives/2023/07/index.html","1968a607a8759a31eb21a2db6220aaa2"],["/archives/2023/08/index.html","5393334185b63ef96e9aa99e375f445c"],["/archives/2023/09/index.html","db88e46c4495b32ee0da3488df68dc79"],["/archives/2023/10/index.html","f4703c92fefb78c6a9cdaab523d9c0db"],["/archives/2023/11/index.html","b6a8b46bf3bc2d7873f617b7da922ef0"],["/archives/2023/12/index.html","9571fefe24cf9052f74c7c44934b526b"],["/archives/2023/index.html","4e05168276209645eaeeaa5a55107ef9"],["/archives/2023/page/2/index.html","7dd3ef856ac0f192fd37f82da449aa20"],["/archives/2023/page/3/index.html","5d38cfd6068b557030fc28c29e090ca2"],["/archives/2024/01/index.html","a5a59012fd5e52e429c6b934f58b4ba9"],["/archives/2024/02/index.html","a7209acd2bb91635ce74e2535bb123de"],["/archives/2024/03/index.html","40b44256812180d4897435bbb9714674"],["/archives/2024/04/index.html","b6920ba45f2bf08119970cd2ac032409"],["/archives/2024/05/index.html","d5e199bf473ef087b9ff4334c9b02dd7"],["/archives/2024/06/index.html","39b1061a01efb77ffe66b6c14e1baf9c"],["/archives/2024/07/index.html","4c2f52fb686de7a80bb07ba992afa3db"],["/archives/2024/08/index.html","ad750cbb818e309d9713b998e0a0fce6"],["/archives/2024/index.html","59d0c8dff27813c5961e268e146b9426"],["/archives/2024/page/2/index.html","0f865084be0d0992c4b59a2b3a1ae694"],["/archives/index.html","a8479d0ba78cd25e3e74e8834572d2cf"],["/archives/page/2/index.html","f3fd91048e0a985b27429633ec05b2bf"],["/archives/page/3/index.html","82cd5e3b506df6f604914118e11b9a4a"],["/archives/page/4/index.html","caf7d0f7cf67baa285462fd48a97393e"],["/archives/page/5/index.html","6b971fd6d850371b6c02f59e723f147c"],["/archives/page/6/index.html","18e5df0ef49c23ac2dfc367e596481ca"],["/archives/page/7/index.html","d42f6b1c96f326708c2cdd560e46dc78"],["/artitalk/index.html","78473272e548e0db80ce668816e4f269"],["/battle-beautiful/index.html","4854da561f065c560d4ce964e932ddbc"],["/blur-effect/index.html","90993bf91afd547b03e9493c2fa4ba79"],["/butterfly-custom-tag/index.html","b365feafa87bcc0fddcbec496aaeb4c7"],["/butterfly-plugins-faq/index.html","5bc7d3cb1d4e3988096c7f9e20602f1d"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","c58e990fb7c3f83e7a0db095943e9f38"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","6612597c3dfd56621552e28157fc8fc7"],["/categories/announcement/index.html","9b7841e174d5c27dc6fdfa69a7e58c8a"],["/categories/diary/index.html","6133ef32d5380a5f01d09b1e2f85de65"],["/categories/game-dev/game-engine/acg-creator/index.html","9e6585d38bbe040d4f1d101bf0838978"],["/categories/game-dev/game-engine/index.html","5c428d98c420c53f69a00fd35d4bbed0"],["/categories/game-dev/game-engine/lightvn/index.html","39d939b5ebd4e8ab71cb86a3e5b92d94"],["/categories/game-dev/game-engine/nvl-maker/index.html","8785f63ec7b77a725fb7443724a490ee"],["/categories/game-dev/game-engine/page/2/index.html","312ebcfa099884a53fbda48f4490098d"],["/categories/game-dev/game-engine/page/3/index.html","a94abad17054a4d3f0a5747bd14f0a34"],["/categories/game-dev/game-engine/page/4/index.html","485f285d32f51f3feaf269599e144750"],["/categories/game-dev/game-engine/page/5/index.html","ab39e41a449fb30d9b02d007bbb9bc5a"],["/categories/game-dev/game-engine/renpy/index.html","47a93f21f945a5b53e4e45f4bc9e9b1b"],["/categories/game-dev/game-engine/renpy/page/2/index.html","28389c3be2208f28c9bb1eded4977ba9"],["/categories/game-dev/game-engine/renpy/page/3/index.html","93ff192e087b8bc27d741214c41a438e"],["/categories/game-dev/game-engine/renpy/page/4/index.html","93da8da9878b2f8655d6aac7a603cd09"],["/categories/game-dev/game-engine/renpy/page/5/index.html","e3412438c081703e99808b866e0915d0"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","0ca2b6197b5dab9119c7aba1915f646d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","f8adbed4383fe978e02a1120a0c2f855"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","df3cec6c65b47e4fbdf9b7b19c9d2bd3"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","8548b035cda121ddd44c9b32849e7d3a"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","1c8741e9f5c5911fa026cddc11ad9eb1"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","a4bdc594c2e442c821c8d4e3c2bf3d9b"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","e1b543963762524b96716d7708b166ae"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","47eb8adaf9455afe0e99542c29257221"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","deb5941a14f15257509329d819657545"],["/categories/game-dev/game-engine/rpgmaker/index.html","66a64ae67d072e9513353f0473c97340"],["/categories/game-dev/game-engine/suika2/index.html","ec16465cd6aa3f027c9a44fd02e7b0f9"],["/categories/game-dev/game-engine/tyranobuilder/index.html","e3f999f78426a868db47544025ec6ed3"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","aa0c193d14b28a20fa5d21b7a9b97def"],["/categories/game-dev/game-engine/webgal/index.html","ef70ac4baefd6d8034bd5070143f2da4"],["/categories/game-dev/index.html","1e72218d0aba598879077e4b20f417ed"],["/categories/game-dev/page/2/index.html","e0af4ac52561ea8200c28728d11cf536"],["/categories/game-dev/page/3/index.html","bcff8a7389a88ce41dfb3929fc35ae5d"],["/categories/game-dev/page/4/index.html","a3d34c1556ad33d59704ec4a0101124e"],["/categories/game-dev/page/5/index.html","eca729556f743dc723dcd9238db0bf5e"],["/categories/hexo/index.html","919788fe230403640ddb4876a37a87cf"],["/categories/index.html","4453c5226041cdfedd10685b8050d48a"],["/categories/material/index.html","f005d68a521ff4b8efd97661e8646452"],["/categories/update/index.html","ce461549c40a6c9f9985a1b7570fc095"],["/change-according-to-real-time/index.html","d5454ab9921245d2a661b92473effdaa"],["/change-character-info/index.html","e7109d7e576e1f43151713a9498cbe29"],["/change-title-after-first-time-viewing/index.html","61f8768e84da7e9645a8acad25bdcdaf"],["/change-title-based-on-event/index.html","57200ceb9da24f4667247101d004b7d4"],["/chapter-selection/index.html","66ecb3579f16170babe3d1796e7b1691"],["/character-interaction/index.html","0b6a2335601dba74fcf508b0501765f9"],["/character-stats/index.html","d282af6547f09a1acfb6824a3ff18495"],["/chatbot/index.html","be35931b91b2ecd2b712f21bebec70bf"],["/choice-time/index.html","a29cab2e98ce641e62922271ceb934e3"],["/comments/index.html","c2841704b52c6da5ec7116ec5e833cf7"],["/commission-info/index.html","289e1fb7b7356213c8c8c24dd70fc44c"],["/count-login-number/index.html","082874599a6689c02f81f1fd5b6623d9"],["/create-button-anywhere/index.html","c800fbf708be774d780744d6e4e28d59"],["/css/eurkon.css","98dc82fb5be2d295920970e15d8cd3da"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","ccc91c0346b4317c54558a1afba63918"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","2f6ac46982e969b0c5601b9c4c5bd4ff"],["/css/rightmenu.css","5831803000ba95bdc653aeb9534998b5"],["/css/siz.css","96307a4965b1cd8005350992d89f6377"],["/css/swiper.css","cc7a5385bf834872ed722c18b845d1a4"],["/css/swiperstyle.css","1208bc70d18bb08329c3f56cb61a5c94"],["/css/var.css","7bbb351d710d7987766e50525d5b7e40"],["/ctc/index.html","ee557fba5b62d058092d206cffc2b96f"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","adc3331b37aca03be017a02655ac63c2"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","9c7019f93361723578b9b64aa61c7807"],["/custom-gallery-cg-screen/index.html","703fcfca57d5de2feb9592d342bc0f37"],["/custom-launcher/index.html","dddf333d38e050347d5f10e9f93eccee"],["/custom-loading-screen/index.html","90798d4fb898de8d3f5df34613690b5d"],["/custom-mouse/index.html","746dbd0016ec211adc23a2a9dcc1b2fb"],["/custom-music-room-screen/index.html","676b9c2a68f92ad2320996006a3687b6"],["/custom-music-room-screen2/index.html","66379cd13f6a517317e51e09eacb1358"],["/custom-nvl/index.html","06555d0c7f5c0150ec5036cdc1b94bea"],["/custom-player/index.html","6ed5f75c348c863b894b4c1897089462"],["/custom-preferences-screen/index.html","3ceff00eb8b92162c82f6418fe32392d"],["/custom-say-screen/index.html","f56fbddbdddc9feef692c4255329d4c0"],["/custom-style-bar/index.html","fcccc0549c77ff45e20e8eeb724bea7c"],["/custom-style-box/index.html","2ee80de3d469f99effa283b5015c7160"],["/custom-style-button/index.html","987b521154ff3a009c86ca5e775b743b"],["/custom-style-grid/index.html","757d31399736b5320fd330a4809c5126"],["/custom-style-position/index.html","25546b9a2c7387516b9a654d4cf4a22b"],["/custom-style-prefix/index.html","2dead443e36e51441435e7cb33f99496"],["/custom-style-text/index.html","692962f7d2bb9778b6fbdbab232f2638"],["/custom-style-window/index.html","d6bde0db247a364cfdd77d1c442b9cd1"],["/custom-title-screen/index.html","35e6571e269c01a328783a8751768123"],["/define-npcs/index.html","8d01f3463c4f43cc845030fe2f6434d1"],["/delete-save/index.html","e8ff648552be9ca8d12ed5355a39c1ca"],["/dice-function/index.html","8d2daf9ec6fd739a63bb9269786af417"],["/disclaimer/index.html","a49488cab37204597bfc35a67830fd67"],["/display-immediately-all-dialogues/index.html","e4491166573a18ea5d5762fb815da37d"],["/display-real-time/index.html","5c1e94793db6a0d1eab97e7ad9925747"],["/en.refund-policy/index.html","89b82ef2c499be95fda792532c4dde1e"],["/enter-name-screen/index.html","8aa3ba57c7c14cefd9cff76836ba86ac"],["/export-game/index.html","0ad6a0574dbe1953774f09112e63b246"],["/faq/index.html","9f2a50142428f2c3cf50e7d66f46c4e1"],["/friends/index.html","0b060fa0a29b2bcff4d8c0635c4a0f72"],["/gallery-template-assets/index.html","f66aee379d69d1d4604e5bb4a2396527"],["/gallery-template-default-ver/index.html","f2f41c25c60f7c0a3dc34e4359a3c7bd"],["/gallery/index.html","6410b2fb9daf7f1eea0603551403cfc8"],["/gallery/photo/bg/index.html","5fe63e796f0e4377fe223c91c50da177"],["/gallery/photo/gui/index.html","98f882e22b742828041b69494c62230c"],["/game-only-text/index.html","636ba6da6c6d1c3fa2d5a91102c12697"],["/generate-random-name/index.html","0a030199450785b3edb2dd1ff93ff269"],["/gui-017/index.html","3312fc7677d338d32dbdb161d049ebdf"],["/gui-vertical-002/index.html","4a335a19cb07ebb3caecbfa21710a838"],["/gui012/index.html","e09dcf515793b4903f0bb825efb2a8c6"],["/gui018/index.html","ffe90f17b1f66fe125014d44b66d5b89"],["/gui019/index.html","706e0e1f2f21ef345d37e76b72f4e2f3"],["/gui020/index.html","4b5c36590e7527b85ea31514ade125f1"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","69cafcf39d54f534639a3430a1e5e423"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","39dfa247c194c91ed7d3f98ebb586151"],["/hide-textbox/index.html","18a43bc8e66f36e57dc3acb9dcd21fba"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","ec804e37757156778c517386ceb43d4c"],["/images-tip-function/index.html","a910a4bbce9b6c7389892a908144fa73"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","4356142e71e2a1cb5896735942c06188"],["/index.html","d85675df3ad3f26921db68f47cdc6db1"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","6b2e7086f8180196fca092f982220cd8"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","3c37a70084f593a8749c991918abd0f9"],["/items-sprites-effect/index.html","046f351894eda707946923ac48921fe4"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","c826ec304429610ddfc2c5908f3932d5"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","880c86bef3a0c9ce3e7e214b97d5750c"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","0f817c08ce87d6bf38d439497dfab498"],["/link/index.html","c8a7ccd788f1b380e014e3d2b1db9686"],["/login-reward/index.html","7d5146c6983c5c9ae8871b555c3137c7"],["/main-menu-music/index.html","2f1ca9e05e6dbc3704b0424557183b04"],["/make-butterfly-beautiful4/index.html","738c4b10949965f3fde79565345e470a"],["/map-puzzle-system/index.html","10bfe15253349710259cff618a847b0d"],["/maple-effect/index.html","70ebff9e04d63c335679c6b75ddffb07"],["/memberships-2/index.html","978557fef264ed9ebda70300cc9bed9b"],["/memberships/index.html","fda67ddbd70a19c3718195f537fcc210"],["/multiple-language/index.html","63ff12b1f0e60685ae06941b6c3b5fe4"],["/name-input-assets/index.html","4816aac4bd288c78711ce6336d42e7f6"],["/new-year-event-2023/index.html","99019238d8a695fce869849c89ce7da6"],["/newsletter/index.html","c90937627f07ad7f6b9dbdc705a13d6e"],["/nsfw-limited/index.html","59b9f1c67f8dad3ae2d304b8416643fb"],["/null/index.html","2afe9f3e87375c1e533efc2ed5491c21"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","0b5592fabd7e4a93aa8f02d5abfc91ab"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","71e466ca6e9b8db6982cf63bdd12e772"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","d5b285071c8adf6600654d209f0998b5"],["/openchatai-renpy/index.html","bfa07c49ae3c7818a0d0250721f9cae2"],["/original/index.html","de79c73a493e0c8f60f83c76f389e44f"],["/page/2/index.html","ccd46167cef42f57b56b561ea1c07b52"],["/page/3/index.html","c666fb9692cadc61ab9354f7b6ddb08c"],["/page/4/index.html","335b2309dddc6de07d11476f2a4b551a"],["/page/5/index.html","4375de3f096c9bfcdaec4d9b7cf62373"],["/page/6/index.html","1d4d3b632ee2599b7157b3c6291c4e58"],["/page/7/index.html","f87db1c875ee8266f783141fa0482b35"],["/point-pop-up-assets/index.html","f22d67ed01ebb5554f8b7823acb44a76"],["/pop-point/index.html","d8631834fff303f764bee9e1ca17652d"],["/privacy-policy/index.html","fef4223775360d6826f7fde32d53bf35"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","054b2f1d34ffd850f43884dd1a434c3f"],["/random-number/index.html","e5b35c4d3e1f3393d4f9509f074db105"],["/random.html","b444b49bab1227fa60b6254c870ddce9"],["/refund-policy/index.html","30c536d52f3ae2acce13530c9118d2df"],["/release-017/index.html","f6cda62aa76e266c789e617e00ebb1c8"],["/remembering-choices/index.html","2f1e2466e92b80da23d07f86f91d4e15"],["/renpy-basic/index.html","5a12f92b23777b5da53fd4b7c383ba79"],["/renpy-crash-glitch-effect/index.html","fa563c34a12f01c786dc89b80e9b608c"],["/renpy-flip-image/index.html","eada5ab9fb4bb618c6e73ed711b99b51"],["/renpy-matrixcolor/index.html","0df434235c04f5779f0cd7bf4b12feec"],["/renpy-overlay/index.html","1efa015389b58fc4e94fbcf284f390d0"],["/renpy-review/index.html","a0643c99b457c48788c9befb0dc4b46f"],["/renpy-typing-effect/index.html","b6d723d4f4992e2c26a0f5eb5431b5db"],["/rpgmaker-assets-menu/index.html","033b90f34c7d45a46da71e7a085cc63f"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","1e8ed46d925ebac98b6aff9a4ec286af"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","a25967cd9d243766ab9d568b94fa9ae3"],["/sakura-tree-background/index.html","7183bd0ddcfcd2c98a7e90b4ef43c6cd"],["/selected-button-style/index.html","da24aa2087e3981cc91d8a3142f45a23"],["/service-worker.js","e7871bfd98e46bd30a201f6e04da795f"],["/show-variable/index.html","693e25bda2fb5582c1bd1eaefd12100c"],["/side-image/index.html","a8f2c23b217fd56cfe0c58ac8db12cde"],["/snow-effect/index.html","93b2d7f4fba1a82ac6220de04f76d0bb"],["/speaking-animation/index.html","94a4ce6256ecc7419699479e790f0c73"],["/splashscreen/index.html","257b798cd4f5a56fe3eb10e66073dec1"],["/suika2/index.html","4ade10d69af24ba1419d7df9b47ae0bd"],["/sw-register.js","b6f12bea9d30bcfe9707edec9a392e46"],["/switch-chapter/index.html","8939e13b73cc45b08ee76b22af292b4f"],["/tags/Hexo-plugins/index.html","7553b9e2f2b22842a6171bea28fee221"],["/tags/Light-VN/index.html","a5855ee18a8c75b3d93504524ba85f89"],["/tags/acg-creator/index.html","0beb2c496e2faa96d012aecfd0baf34a"],["/tags/ai/index.html","615013fbb26711059afb05174966db54"],["/tags/butterfly-beauty-diary/index.html","c5954f622f6e8f906d27d4fad9147f85"],["/tags/custom-hexo-theme-butterfly/index.html","b6ea1580c3bb963b15a24d30f3a83961"],["/tags/custom-renpy-title/index.html","68fa0246cd3410af9c5d26308681a782"],["/tags/dialogue/index.html","f2aba2c1f90a299009fcad73d4f894cc"],["/tags/effect/index.html","633e93bda5d0633f4f3d2f82a1aa43fc"],["/tags/event/index.html","28106578112038bff08d1dac63822447"],["/tags/hosting-own-website/index.html","5afe4e38755e29ae1a2e0e945c1eb1f2"],["/tags/index.html","21f52c61527c749f620042edbbc83a04"],["/tags/itch-io/index.html","23bcea4da88fcd2b0a3a0eed45aa1ae3"],["/tags/light-vn-update/index.html","debb220eda06ed178eb6d264646412b3"],["/tags/nvl-maker/index.html","0204599e3d8966205a554d500f9cc8bd"],["/tags/player-related/index.html","4bbba1e9af457f6b3240009fdabb010e"],["/tags/pro-tutorial/index.html","f43ecf0d4c32f80be66d0ca67d1cbe5d"],["/tags/pro-tutorial/page/2/index.html","80d966c4424d224a72ba8f84b097c63e"],["/tags/pro-tutorial/page/3/index.html","f91e7c77cb08e6fab4d53da872165e0f"],["/tags/pro-tutorial/page/4/index.html","d4b1c54cd44d7b4cf159652e9ee6b600"],["/tags/pro-tutorial/page/5/index.html","813e85bcc643f5e66d3e116f2ef3a8a9"],["/tags/renpy/index.html","677aea0a785074da1676a269cc2ced02"],["/tags/rpg-maker-custom-map/index.html","2f3b3e7eb3965381eb2dfc5ff3e11af5"],["/tags/screen/index.html","dc76ab136bfe7127aca48b527fda349a"],["/tags/special-function/index.html","44c049eb8a63722870c64a3a3c8da21c"],["/tags/suika2/index.html","0e3a27b12dbee1c05ae3d077263c3364"],["/tags/terms/index.html","ab29c6ebf97921550dde73631e908fd5"],["/tags/tyranobuilder/index.html","6b8ff36b2c1d9fd106d7f1533fe6e631"],["/tags/ui-assets/index.html","c5a8faf563efaf7474fd82c1423f910d"],["/tags/update/index.html","e9a1ce5ab38e686f2c6aed9f1337d70e"],["/tags/upload-game/index.html","1995179ea44b33bfab75ceb38fdebcc5"],["/tags/variable/index.html","087d3c4b9ba265ae677723cec8502230"],["/tags/visual-novel-maker/index.html","50c4c7060ae4ab7f82a3c0f8680adf6f"],["/tags/webgal/index.html","9ded4373568adce9d7e811746b73a1dd"],["/tags/封面製作/index.html","392f38357d08ee4560e3cee25796f376"],["/tags/背景素材/index.html","6cf5c1111fa1a8e3518e86e7e11715b4"],["/tags/隨機功能/index.html","93aa293ab09d7b1ae40c9680996f5dd4"],["/test123/index.html","e8190df6cc8436dbbaa55358a69e50e5"],["/textbutton/index.html","5cc1ee3588de5d67dd920be7b0e63117"],["/to-do-tutorial/index.html","aa2a8154d331430b4e5afa190366a473"],["/tools/index.html","8b61bdb51c79a123729b507e93ecfe90"],["/tooltip-function/index.html","a3a97f04ca0477c00a25f9c23960be78"],["/transfer-to-hexo/index.html","7e37469677ba2ccf7588b3c316ee7784"],["/tutorial-update-history/index.html","2ae0796428707b099dd84d5e375af178"],["/tyrano-name/index.html","1d586d4de42b95dd85a49e291232e0cb"],["/tyranobuilder/index.html","2baab7b9d19f78ed5dc7638e71555cf8"],["/undefined/index.html","5b6c3a0692b393f504a251798c141760"],["/unskippable-video/index.html","33bbafae4e1d146c023c2ab95a80005d"],["/update-20221211/index.html","b4da38a25c51b527bfbb2f3d7d871071"],["/update-20221218/index.html","4a9db321f15409e9b6081f64e6b34c2f"],["/upload-download-save/index.html","021d5ef215f4b6fff72241d7eed4c7de"],["/upload-your-game-itch-io/index.html","7e4e88d412ecfff2d44da6ea3cd2573f"],["/use-list/index.html","44951c43c1ae0b67fd0b5903538936d5"],["/use-nvl-mode/index.html","d07ef4a716404d752af103cb74ee487c"],["/useimage/index.html","9c3142122bbc52ed38ac080426821340"],["/variable-change-image/index.html","e0555dd92af03920a778f5eeb37fd4ce"],["/variable/index.html","bc9e8f82cacab9e87c726b9d7c92a42c"],["/vibration-function/index.html","028943ef996d90b7f520ac7c50c8b258"],["/vnmaker/index.html","b1edca9baf32e85690fb4917c4e2072c"],["/weather-effect-tutorial/index.html","0b717f1617ce2c61c5d7aaa55b45cb9f"],["/webgal/index.html","6094af4072e2de08ee540c703b222921"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
