/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","d3c332b10a86ddd093c28896561d67f0"],["/2player-battle-system/index.html","a74b422d68f3c9e847b3cdbf27a09f84"],["/404.html","042db86fecacfdcbc8ce8cb98594038f"],["/about/index.html","14eb26d60a0113f30ae2269c1cc93f82"],["/acg-creator/index.html","94d37912d057ff933a5f358c2cb29d92"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","a2c11044b9d8c157d0f600cd44e3c1e2"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","86cd0d255ea71c0a0eecb5e863b4090b"],["/animated-title-main-menu/index.html","a32d05fbfce36458822fa871264648df"],["/archives/2022/05/index.html","736f343f283ce0928cf543551e81ec9c"],["/archives/2022/06/index.html","98dea4fb8332bab27c4ab061a0d4c579"],["/archives/2022/08/index.html","e2cf4af3666e6fcb53c080ee8e586d03"],["/archives/2022/09/index.html","c609fbfb1921820699ee5c1b8383598c"],["/archives/2022/10/index.html","36ffdf509a0ebe33f23327bbd63d31df"],["/archives/2022/11/index.html","c60e418db0e774b630e9b87cd6221ee4"],["/archives/2022/12/index.html","31baa8872e3cf32119856df407dfd93a"],["/archives/2022/12/page/2/index.html","85ec14d3e07bbad5a7331a3668eb7bf0"],["/archives/2022/index.html","56f805d2631c9cfe0ab9098418c40765"],["/archives/2022/page/2/index.html","fb0e969c16f4033c6efbf23644b96f3e"],["/archives/2022/page/3/index.html","d1e789fc1d9c3c5ea7f5eb886ba3b74c"],["/archives/2023/01/index.html","482328730af18c4979e0f76406451d9e"],["/archives/2023/02/index.html","a355ae2242d8a1e05b67021ce7a959a0"],["/archives/2023/03/index.html","28ee21bf0a09b68793bca641f1e72322"],["/archives/2023/04/index.html","c9c91ab46daa806fc8d114e5f01c0122"],["/archives/2023/05/index.html","53c8cae05a02dd2c55cc07c467537f57"],["/archives/2023/06/index.html","fc65e114c5901b57ab64c663c304b348"],["/archives/2023/07/index.html","59ddd7fcc2dbecdc0acad8d5fd0fbdb9"],["/archives/2023/08/index.html","bb7cd6633859e96a1690c2df2732fa2d"],["/archives/2023/09/index.html","58073fa26b8e33606945c7a5c775a4dc"],["/archives/2023/10/index.html","860e21fcaaccee867c8e94722e3591d0"],["/archives/2023/index.html","c9cc9abecc713eec13a2cfb0555ae419"],["/archives/2023/page/2/index.html","6159e2864ba5f280a6935ebb5c6bb27c"],["/archives/2023/page/3/index.html","9407ac49cb4a55f760751791f2498a1a"],["/archives/index.html","b15213813dbc9a224405fe599592f419"],["/archives/page/2/index.html","8e69b41ae5af9b33107854ae95668ecb"],["/archives/page/3/index.html","c0362bba16be9ece4bc4160a91f1deec"],["/archives/page/4/index.html","22a02ff15836d5ab8cedf668cb7429a9"],["/archives/page/5/index.html","55ae5d159fbaf947a4f69d83a6741b99"],["/archives/page/6/index.html","8456bd85cbe5dbaa2f25c122f69f8e26"],["/artitalk/index.html","df31ada43033f2dbb67bd8e44f916e17"],["/battle-beautiful/index.html","08a41f40ec22bb61585b131542be0e02"],["/blur-effect/index.html","d3a1cbea2c20354722c23ac2be8df085"],["/butterfly-custom-tag/index.html","4f2f14737494630ea37067359199f19a"],["/butterfly-plugins-faq/index.html","e5fd3c28f0a100fbe8a12631ed3c45f7"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","ea83e0cc6270840a4bcf8fe2855fb530"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","3e56b18923cd8f88f9db8555d1d950fd"],["/categories/announcement/index.html","4ab8695588d45524eb99000dc43ef8d7"],["/categories/diary/index.html","f7d34e89413d4cd5ad5d2abef0779055"],["/categories/game-dev/game-engine/acg-creator/index.html","ad3a1fe659354f3f5ec72fc9bf81a118"],["/categories/game-dev/game-engine/index.html","2495c7f4b0cafafdbe580aef02b15224"],["/categories/game-dev/game-engine/lightvn/index.html","5960d2ca3021e3563fb22d7334b20cc7"],["/categories/game-dev/game-engine/nvl-maker/index.html","718098e535cda099471fa1365d255d7f"],["/categories/game-dev/game-engine/page/2/index.html","98f3b2f09d72764b59768dd76486859b"],["/categories/game-dev/game-engine/page/3/index.html","c1f367ca39a1c9ad4983fbbe71beb638"],["/categories/game-dev/game-engine/page/4/index.html","acf7e153f030640064a69a96c4ad04d6"],["/categories/game-dev/game-engine/renpy/index.html","4a9d3c4f723fd4d0e9a243998f1553b8"],["/categories/game-dev/game-engine/renpy/page/2/index.html","96a45a66b9828c7483ab04ae684df1d6"],["/categories/game-dev/game-engine/renpy/page/3/index.html","2b3c28fad0640ef62186696030023a10"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","98a2f4ff56b51419ed8cfffe1bffe3b2"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","ba9e72ebd71ebc13321181cf66d6130a"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","a5fb315a31e8f7e830222b9841c6fb91"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","5fefc9d087faa1da594b7287158b61a9"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","3d3b02f07920a8c98bb1c34eb514f0ca"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","35868d29655ad7f43c815de37dfce8e7"],["/categories/game-dev/game-engine/rpgmaker/index.html","488d62705cc21a448e74fe140f8b9207"],["/categories/game-dev/game-engine/suika2/index.html","a0ca32d034daa0daf5a713da672a991b"],["/categories/game-dev/game-engine/tyranobuilder/index.html","e8b0fc584c3d8eb2d80fbf0e6703551f"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","421156751b7a4e6557fab0ddb7168fb9"],["/categories/game-dev/game-engine/webgal/index.html","e6f747ae5362d3777c119ac756d3c4eb"],["/categories/game-dev/index.html","db34a60092411d0353d40397392d3750"],["/categories/game-dev/page/2/index.html","3430cb7d1861c81458945b9a22a37f05"],["/categories/game-dev/page/3/index.html","3981d3f969e687f8455ec882e47017fc"],["/categories/game-dev/page/4/index.html","afe617f182a378cc13c8add22ef4082a"],["/categories/hexo/index.html","ecbf8db283a0c7109fbc674080e48a70"],["/categories/index.html","d8127c33004c90144a525a2ba4f77738"],["/categories/material/index.html","6de4e349919156b2c9f72ebfac41f24f"],["/categories/update/index.html","5fd30a1aed4a1a4cad1e521e29caa8a8"],["/change-according-to-real-time/index.html","baa0025475cc52d1b2e4d840431301ae"],["/change-character-info/index.html","758c85efd685e4aaf7405e0baeed7455"],["/change-title-after-first-time-viewing/index.html","f83a20c456d9f4241be57b43ec754f87"],["/change-title-based-on-event/index.html","b5e21f58b485f6d0c9165ac9da0a6608"],["/character-interaction/index.html","68023591fd5cbf59912e9b6c4ac64fdd"],["/character-stats/index.html","8439afd755230780dba37bec0f9f1cfe"],["/chatbot/index.html","aded1fb2c699bf3693ac8db1f88d814d"],["/choice-time/index.html","d553ad330c0abfe02b8ddd81b758b1b4"],["/comments/index.html","0ce0c10cee17629a8c9fbd0da7154e54"],["/commission-info/index.html","c87bfbfd0d5d58b14fad8f818483c5d1"],["/create-button-anywhere/index.html","cd3dd71640718dd05153cf92c28a16e9"],["/css/eurkon.css","3af77e4755b14ac728c30dc3d97ac529"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","f0609f48b4747e576f5da6061abd4b5d"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","eb4568c370b48347593b65cf7f79c337"],["/css/rightmenu.css","6ab6a6d6e82c03cc10ba9b07d5d901cc"],["/css/siz.css","d7f60143805073a66fe7d5e8200fd63c"],["/css/swiper.css","b4b812e6a3cbe93b2ce85ef042876962"],["/css/swiperstyle.css","3a0acdc81e5e8f41bd8c07885ff617ab"],["/css/var.css","1a0079bfe2ef204dbdb439d7be0c1776"],["/ctc/index.html","0713a4fb4f8025459cf58a6f33099bd1"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","b4a1579174aade0db5db11d122acd7ad"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","9b1cf7e78d1e1cf396e41ba77b9649cd"],["/custom-launcher/index.html","c24d953ca0e07f0e614fb813fb84d51a"],["/custom-loading-screen/index.html","e2e927cfb46dfcc9295b51281404040d"],["/custom-mouse/index.html","7054ef0a73f319eb4538f9a732ea9b60"],["/custom-music-room-screen/index.html","d6e4aed37c22b979fe8cf05e7bc6a798"],["/custom-music-room-screen2/index.html","f1b36665d8e9a5cb9ffd27d8a6a096d8"],["/custom-nvl/index.html","a997384ba3b9080a99715abdc075dfe9"],["/custom-player/index.html","9e6a7869b12688a3999866b808e2ff70"],["/custom-preferences-screen/index.html","0f91ea518cf788b620fde8b99b0b7815"],["/custom-say-screen/index.html","52d169063672ee64428969208bff652c"],["/custom-title-screen/index.html","049dfaeb2f06b6ef755aae2dc86d8858"],["/define-npcs/index.html","5fb8cfb1de0a8cb17fce065046c45dd3"],["/dice-function/index.html","e737d3918beb858cdf62cac5daefedac"],["/disclaimer/index.html","4a02ab9a4f2062d2beb92b21678fc21c"],["/display-immediately-all-dialogues/index.html","cfd5fca814fbf8de8a18f58c60b55d6f"],["/enter-name-screen/index.html","12b24156ff9aeeb9450657bcf2ff35f7"],["/export-game/index.html","d914d85981d1fa1d04eb844e407fa1b7"],["/faq/index.html","b470ebdc2b620ebd980579466bb07960"],["/friends/index.html","a5cb45f1c3b109afe3eb15219922191a"],["/gallery-template-assets/index.html","39502e0c2822490fda0f662bd8b417e0"],["/gallery/index.html","ad0bf8ad05b2454a9e02f109acc71f6d"],["/gallery/photo/bg/index.html","59fabf36dd0150c1b8d9c9530bddfd2f"],["/gallery/photo/gui/index.html","3ea85b717c87309ba0031c0b2113ec6f"],["/game-only-text/index.html","5f014bb5eb390841f9b8c925ed520308"],["/gui-017/index.html","ff40a98660414ddef98a196d980d13f5"],["/gui-vertical-002/index.html","a73c02eef8aef93a70c36c62b224fb02"],["/gui012/index.html","f435daf4c4f569ff43ac1015f8fc837d"],["/gui018/index.html","330863c85627635492f84335d30a89dc"],["/gui019/index.html","569d747892d5899ce0beb3010bde4c2a"],["/gui020/index.html","ad8f66f31f49a2a18961d5a9e176598e"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","2a5e1dde2e102ca408608106355ad1ff"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","ff78e2a26bc31973857baeea123eda0b"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","5806b1f26a1471452d1d5b5ab68a803a"],["/images-tip-function/index.html","d3fbe64a5a60fa2ebed5c211f43fe16f"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","8c0f0f565aab212c2e3fd957519555ba"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","ed8efca447baa7135634ae8684efb400"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","74e27562e6840eb5e0441967772e960d"],["/items-sprites-effect/index.html","d40a5d5317d8f04cc98ca24cc8137077"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","4208a495af010ab31dcedddfc8989165"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","d37f13bdb783f4d5e7120542426e3629"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","5dd176f7687f645a822e39d7702a2bc8"],["/link/index.html","1166f2e9a4349f6db08801c39c8e33cd"],["/make-butterfly-beautiful4/index.html","7cbbab813aaa1147ea150e2d7683e1bf"],["/map-puzzle-system/index.html","6eabb9b452da457da3553c5bec0e036b"],["/maple-effect/index.html","490cae69bf9ac05005fc41131ecb156f"],["/memberships-2/index.html","c88da344dc6294221d9b15442fec5fbb"],["/memberships/index.html","f44a72ce3dab9a66bc106425c28da112"],["/multiple-language/index.html","d9bb92f13ec5940eba019bf783c5f46f"],["/name-input-assets/index.html","bd54b19aa5ada6f624c2bc0b2933fbb2"],["/new-year-event-2023/index.html","fa2eaa086d808fc8596a06b3c31d830a"],["/newsletter/index.html","d6d2f9b780f2e2a615950ffe2e2ffea5"],["/nsfw-limited/index.html","a3de7f465441a2628c589851a2599171"],["/null/index.html","e27fb3ecfe7b0f1ff758ac116bcfd673"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","9cb57593979da8a57ed9a72dc20a31df"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","309e3021ad2b0bd770a3fc1fae25bee3"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","2866e8b3a5a854d8e292dc3f34f3b128"],["/original/index.html","28089f2ea705164eb61ddf2da0ac8130"],["/page/2/index.html","0b937ce84d6a81b41f9f553d729bf6dc"],["/page/3/index.html","f02621981dc64bdf5b04c6272bd0f2c8"],["/page/4/index.html","7f43d39fdfff18883522bc53ec993cc4"],["/page/5/index.html","30a458697e1c8712648b7ccb44c5aea6"],["/page/6/index.html","364d270470f6ed866a86759975534dd3"],["/point-pop-up-assets/index.html","1e6a901528013e1ff5d364bd2a53afac"],["/pop-point/index.html","1324cdb2093ebb4a69e08c3385769467"],["/privacy-policy/index.html","58579cda7486e2260c0abe1aa3718cfc"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","6299602bf7d94d5e704fab0df06b8e29"],["/random-number/index.html","61764cfde06716fb515166608db2c232"],["/random.html","dda531e83de22358069675f2f8434ec1"],["/release-017/index.html","1ec4bc1b3788b6a9d9588f36e05006cc"],["/renpy-basic/index.html","edfd233e6da277e2dc6c46249fa317d2"],["/renpy-crash-glitch-effect/index.html","c03e456cc5fd608b47e1d44046e89cdc"],["/renpy-matrixcolor/index.html","b9f5204265f70ba94269270f43f0c5cc"],["/renpy-overlay/index.html","144199ef91c50957b82e054d34deab5c"],["/renpy-review/index.html","35d5b4c1e4e72b012c2c940df30d595c"],["/renpy-typing-effect/index.html","87dcd6dab258cd087d9925c898e52847"],["/rpgmaker-assets-menu/index.html","c2ed06cdd3d6cf941a2be6aa428d9aba"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","a0fdd4c2d2882f2ae89c24d3c20f7c3c"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","621adeab4b75c57630e690593364e900"],["/sakura-tree-background/index.html","e6a4fa049aaad15c9c53d60e80361fb1"],["/selected-button-style/index.html","ea295eb15586aba3190182efc5e8a4de"],["/show-variable/index.html","41f2b82e80fb712a6bb80ffc1be23c31"],["/side-image/index.html","72598620c0005ff6170d64b00e2badeb"],["/snow-effect/index.html","e6455afb879c1fa2c8d680669bbedefa"],["/speaking-animation/index.html","777f70ed15791b838dee863d665a0f3f"],["/splashscreen/index.html","a8c3bfa399dd556a3f30efb6eb9d018b"],["/suika2/index.html","e39475e4293a5c51a7698ecedca25aec"],["/sw-register.js","3b3bc8d43cfbce2eee15fc77e08051a1"],["/tags/Hexo-plugins/index.html","4585a3ce570ffe518d316acd8f92bd42"],["/tags/Light-VN/index.html","dcc47506cf1ab76f3b7fc87f63a90116"],["/tags/acg-creator/index.html","849780160ce5bbe12afdebfbbe9466be"],["/tags/ai/index.html","5e52e2b99b90ea2f957e3016dceb3fa9"],["/tags/butterfly-beauty-diary/index.html","9c0ebf25f76ae4ede94f13dc2fb2a975"],["/tags/custom-hexo-theme-butterfly/index.html","ce7a765b236138271a5e510de2963203"],["/tags/custom-renpy-title/index.html","56cc1a383f5027fe8e91fb30ab03b356"],["/tags/dialogue/index.html","b1c1123d28a1497292ce9bbd2abae27c"],["/tags/effect/index.html","a939893efc34763a80111deb3c6200dd"],["/tags/event/index.html","74d319151bc18a72c049b174f66dac4f"],["/tags/hosting-own-website/index.html","839df3103f1a81320b6ce59b7bc6e13b"],["/tags/index.html","a1aaaaa1031ce579c857e920fd73c48e"],["/tags/itch-io/index.html","52ebbbab535aaeb3074e311bdf946991"],["/tags/light-vn-update/index.html","046e699528dba01c950f4b00f63e9fc5"],["/tags/nvl-maker/index.html","793a319b5c5be7dd6d2161cb7483f398"],["/tags/player-related/index.html","d5886f81dfb9aa2ad41d4f8ce466d17d"],["/tags/pro-tutorial/index.html","f2f07af25944f0cd046368e30954a49b"],["/tags/pro-tutorial/page/2/index.html","828f11f219b06ad2f7e09ee3dce66895"],["/tags/pro-tutorial/page/3/index.html","27d56a5dbf70fd3f651a40e6365bdc2e"],["/tags/renpy/index.html","0115816b0f741596edca1ba5345d46de"],["/tags/rpg-maker-custom-map/index.html","df3d1bbf1f026ad727909a05ecab1046"],["/tags/screen/index.html","25af891d0143046a787d4a9db2594be6"],["/tags/special-function/index.html","5bd2569600fefb8775d19c0baae9e1c4"],["/tags/suika2/index.html","091b7aadf711357077cf0dc9fb5bb9e6"],["/tags/tyranobuilder/index.html","82d1254530fa5e9e8225af964328730d"],["/tags/ui-assets/index.html","662fe71296f251ffbd58ac032650e318"],["/tags/update/index.html","1f254264726dda7a96ce511feb02dd58"],["/tags/upload-game/index.html","97b87dde8e28d3cba412182f7e89162f"],["/tags/variable/index.html","285d2a172cc7926131451d2cfc0ed4bc"],["/tags/visual-novel-maker/index.html","aa4758203203436883f19d6d88a0a538"],["/tags/webgal/index.html","e1929b6c7e87f468ec2681164f8277be"],["/tags/封面製作/index.html","db4ed03be17852d67ccc6b1175a49e6e"],["/tags/背景素材/index.html","a79aa40df1cda73971db427330d8e4b5"],["/tags/隨機功能/index.html","f2f9b1464eaa0edce25fa452ac517fd9"],["/test123/index.html","bf3cc303ece30173c5012926ed7b8290"],["/textbutton/index.html","182900df1837dda56e26a3d20e0718b5"],["/to-do-tutorial/index.html","50326a1f447f02e242810b76e882c397"],["/tools/index.html","b5cf94a5622f77a4eaa02b173c4c2126"],["/transfer-to-hexo/index.html","0464ca49cc1c707352fcdea5de99047e"],["/tutorial-update-history/index.html","a6874b8f1a4477f06c8404ce1c6760ec"],["/tyrano-name/index.html","5cf41b71bf0d0af662cc2c29611012fd"],["/tyranobuilder/index.html","9ff853e7e44ee5edf27fe223d51468e8"],["/undefined/index.html","3d65895d1116991906eb90b2a3550d8a"],["/update-20221211/index.html","840cbb7397566d4c05176fc7efcbaa3c"],["/update-20221218/index.html","e5d2e97aa5f4cc637de641fda9b89117"],["/upload-your-game-itch-io/index.html","edbcff4277ba8227e6e92d54f615bd43"],["/use-list/index.html","bfad15466a74d673ffe6dc19c7adbd56"],["/use-nvl-mode/index.html","a8c94d4bf8d63456a4bd8a1fa0f35834"],["/useimage/index.html","a13e302a1dd4eb8252875133694b59ab"],["/variable-change-image/index.html","91efb52b1883dfeafcd8118f29a11123"],["/variable/index.html","0be8a8aa88670153c9e46ed6fb85d8c5"],["/vnmaker/index.html","c69ec7377f98f1debd1dabed91a84bb7"],["/weather-effect-tutorial/index.html","079eb913c7d3c3734779ef5acd379ca8"],["/webgal/index.html","dd568568ddb0e644836ccd59f7e61b77"]];
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
