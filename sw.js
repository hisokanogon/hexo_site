/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","a5a7484d22c78317af20359228a0f8f1"],["/2player-battle-system/index.html","8ae10c08c7f4fbfdb629e28d8ba26860"],["/404.html","16b6984b3eb34d90a0b66bcfaa533b61"],["/about/index.html","b48fe5efd8871a7186a3c70c17753bbe"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","f1108c0f6ea3a57914b095284bdda890"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","a473fefe0b97fd64d9984ea178bf8efa"],["/animated-title-main-menu/index.html","5805ff44871d43b335845439568e384c"],["/archives/2022/05/index.html","cde900bf4f26375ac8eb928538def1b1"],["/archives/2022/06/index.html","dd72beeff544016b87c9f6bd2ab7b9d8"],["/archives/2022/08/index.html","6db01b08836237bdf67053d16b56a6ab"],["/archives/2022/09/index.html","c68565c7cfcb90f9205fbd68e4d6a48c"],["/archives/2022/10/index.html","a0af0b02e87f99b8f7851e005f0b3dd4"],["/archives/2022/11/index.html","aad25a9345d6fc9833c45e9a726b8b45"],["/archives/2022/12/index.html","433b6829c12d340c9fefdbfcb4f09bbc"],["/archives/2022/12/page/2/index.html","7521052acb8cccc93a5d5fe8d3093a84"],["/archives/2022/index.html","3073fe159c56dc4c55c5b192cebf3715"],["/archives/2022/page/2/index.html","23ace54dce2b9234c482998c54cc8077"],["/archives/2022/page/3/index.html","e2df5c82832388c73fde5766e561bc48"],["/archives/2023/01/index.html","cb63aff56b3de67e92816002472cc517"],["/archives/2023/02/index.html","67f722d25724a8d140443dc7733cc215"],["/archives/2023/index.html","6126ef0dd0259ce56c2884248a662ff9"],["/archives/index.html","9fd3ffdc0c8b88a89d0dfc5bb79dda23"],["/archives/page/2/index.html","658204e6898562ca20667ba678e089ff"],["/archives/page/3/index.html","e89a2dd8742b97a6d7d24b0fa5f26ba2"],["/archives/page/4/index.html","b8cabadf015a78e88e7974e5341da2aa"],["/artitalk/index.html","e293e16cee331a90f72ab0d761499520"],["/butterfly-custom-tag/index.html","2e16616ea596f8d54a6246a293b29a75"],["/butterfly-plugins-faq/index.html","9ae40189f2ee6ec9efc47e22ade249e4"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","00a69d5ee02320fe596868fcf0e1646c"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/announcement/index.html","ba132a987022f9adc8ab8e9b3fa50132"],["/categories/diary/index.html","e8553e0386487c273060f8054781c168"],["/categories/game-dev/game-engine/index.html","10e7b360a58e1aa57a696095d9c33318"],["/categories/game-dev/game-engine/lightvn/index.html","1a35a24a1004c3ed95aacb07fe1baa01"],["/categories/game-dev/game-engine/nvl-maker/index.html","bed714dba6db709fd14b5d088b34b5f0"],["/categories/game-dev/game-engine/page/2/index.html","6baf5c23b159c7d335eba95f130a817a"],["/categories/game-dev/game-engine/page/3/index.html","f23c6b8d1a15087b7306781503165a23"],["/categories/game-dev/game-engine/renpy/index.html","2c5216e09518643bb9c05dac58f80726"],["/categories/game-dev/game-engine/renpy/page/2/index.html","7c9b010adffb3e96395d483abaf4bcb4"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","ef86058d08e2cf6b1526bc425c111db9"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","5617827e5f8cbb7a55fa262668a05ef9"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","e901dd1f3699dd78b0202899b360964a"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","8d39fe5f29038d02676a22a7909ddfeb"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","49a9354d400965bbb52d4f3fd11d4e65"],["/categories/game-dev/game-engine/rpgmaker/index.html","c458b597defe8984e1cbf0b94c4da830"],["/categories/game-dev/game-engine/tyranobuilder/index.html","c1f5d60d3df3ffa63b1c3d2db4473ed1"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","00997f220beb4a043272700ae1331136"],["/categories/game-dev/index.html","1baa3ba43ade94258b119e27e1ba5e88"],["/categories/game-dev/page/2/index.html","8d6eb9980a466c255dc36ad9afdf5399"],["/categories/game-dev/page/3/index.html","c4a923817e24f58e03d63647ec2061fa"],["/categories/hexo/index.html","fc81b5fe6086d453e886bef933ecee3e"],["/categories/index.html","f805f416d13748fa337e747027ef112a"],["/categories/material/index.html","d50fb8b70aa161e741a01a2c1b1838a4"],["/categories/update/index.html","b3104687f5ab1a1cbd855a128b3fcf57"],["/change-time-according-to-real-time/index.html","50b8e8827ced83dc0f615b21aa871760"],["/change-title-based-on-event/index.html","c4c3527466dd06392f328d4eeac05deb"],["/character-stats/index.html","020c9f43e418d0dbc53df87fc92007b4"],["/chatbot/index.html","c312462a45d0a342d26c22bc0839dbfc"],["/comments/index.html","ab7a04eb6115f216896bfc0b831e1000"],["/create-button-anywhere/index.html","1d7a188d93b9406ed39f0444eb77b5bc"],["/css/eurkon.css","bc6ca98abac24fa1bd56256040f39104"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","ab00c5b332550ca618c872a882408651"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","dc37abfb261942d59a35222797b508c3"],["/css/rightmenu.css","dd5541a39c368f1016abe7f84bf4cea7"],["/css/siz.css","0aef18bf245541c2e42f056640ce5646"],["/css/swiper.css","b7f3c811cf57e6086c3079dd540f0dad"],["/css/swiperstyle.css","89333558429577f1e942637083eeeca5"],["/css/var.css","2519a2d4f5d7427a7cfdb19771b3f700"],["/ctc/index.html","9dd560d662223e5d487bf9359d3e4e1f"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","d95e538c93dd38a345de52c09657b714"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","3c0dee622db07b6ee69c4e09d5124abc"],["/custom-loading-screen/index.html","16f42bb0ad8eccc7ff5a226d62560bbd"],["/custom-mouse/index.html","2a46e909c0b6daaac27a918def311b57"],["/custom-player/index.html","f254711c0ad0c70a5ce9148edb416119"],["/custom-preferences-screen/index.html","25c2f46ae6e6a9db0d4f7c927d03c7bd"],["/custom-say-screen/index.html","70fc9ad235f99c6d67192f4d4e6f0f7f"],["/custom-title-screen/index.html","4c9cfc1a5e450d0e80633451ca814dcb"],["/dice-function/index.html","4b8eaf7c428619408ed2b3232b404dd7"],["/friends/index.html","deba93f2bb08078b737db1341456a725"],["/gallery/index.html","425518b585cd3165932055ad84725ff1"],["/gallery/photo/bg/index.html","4c6cf29d1a44be47323730a988fa54ad"],["/gallery/photo/gui/index.html","aa438dbbe054384f08218d1377c59f51"],["/gui-017/index.html","a57a740547c8cc7bee875db464527f26"],["/gui012/index.html","d99dc17dd9caddb80536c2616ce6fe82"],["/gui018/index.html","801683ffc33de374c3c36aa6330743a6"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","c1eaf0dc9695f675cbf6ff12037302b6"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","c48454d327055f1fe53f530ca3748fac"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","d62ec5b0f4db95aa0c46447a76e324ea"],["/images-tip-function/index.html","6ea85b4ffc1d98043865090343275172"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","a6be4338560da64ba8955e24a21a6889"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","db750125b9491449f96e18ede021dd0d"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","8ee2e2b2dbf3931af938e43973b0054c"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","381e7d31bf3778950c72927711288359"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","32373eb17355148d074f540693cabcc1"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","0cb2be396a453c0a9dfbce46d594f6f3"],["/link/index.html","dc745e1f2e5dd94ed5f46e02aa851f32"],["/make-butterfly-beautiful4/index.html","562ddce55cae5bc0d1c6f7246c896d3a"],["/map-puzzle-system/index.html","ab4f155c3be3834e2ec5e8ccb56103d1"],["/maple-effect/index.html","84412c467566efb549bace24600902da"],["/memberships-2/index.html","2dbd27661b6f22b9865091fc4012cad1"],["/memberships/index.html","909af950f744b79aac641cfe09ca0726"],["/multiple-language/index.html","a97160acb8aabfc70231ead6cd1b1b48"],["/new-year-event-2023/index.html","65b78d6db461cfdf4696c5732cb650cc"],["/newsletter/index.html","77fbec16fd60debfc6e48c4b47e8d718"],["/null/index.html","b575648d00743b695e64b087fe3e5df7"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","78b827ddc1ca1313228cc5d4b36b1d30"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","e046e5ca016059da6fc5aad9b650443b"],["/original/index.html","aa56d4c25a06192f88e9e905a65c4f4f"],["/page/2/index.html","82dcda39319cde79c5001e3faa66ffdd"],["/page/3/index.html","dee1658b460d6b13ba568ce10004d1a9"],["/page/4/index.html","77cb03a623580222dbe9150dd6659819"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","6e8bf4eb0200446fa3689df8f2e2515c"],["/random-number/index.html","dc5c3020e053499e919682698adefca1"],["/random.html","9b0a3bbf73749f30bea56a16d431843c"],["/release-017/index.html","1d10e2a6c26c2ae1db2f9d87cc3e45ed"],["/renpy-basic/index.html","ebe2729be9dbfdf1b91031e62e46b43f"],["/renpy-matrixcolor/index.html","a703096917c64c57dd69f9bc973b0490"],["/renpy-overlay/index.html","908ec1b2960650210583ce122de91618"],["/renpy-review/index.html","88c9e014f1083b875ca1ad1a80f50e2c"],["/rpgmaker-assets-menu/index.html","0f3b507e01e62bb8fa27c9eeef642b20"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","03f8f950d07658c1526cdbdddc048f71"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","6191a0431c425d1ae97b7c715e0f9910"],["/service-worker.js","5fad0dc7eba49ea61bed6e7c58c349bb"],["/side-image/index.html","f50277cfdecdb374970cc02c2c4b8791"],["/snow-effect/index.html","4e5a368707cfba78e48c5677237c8e8b"],["/speaking-animation/index.html","3cbb42f92b74dd1cf291f12c4421239e"],["/splashscreen/index.html","2d98c3825acb61820f0723ccfc7600d8"],["/sw-register.js","9c2e605d3aec2237b538458748b220c1"],["/tags/Hexo-plugins/index.html","00a097391910c23baf66d3d2c4ce6790"],["/tags/Light-VN/index.html","dd06f1683e06cabf7b718f99188a5a78"],["/tags/ai/index.html","b4139289dce11c937ce58e713c1c9cc9"],["/tags/butterfly-beauty-diary/index.html","455aff468be5cf9d7edf98f90598b8a3"],["/tags/commision/index.html","5523924b99375a925ea9f1e8a381eaf0"],["/tags/custom-hexo-theme-butterfly/index.html","55ec6508caa5011b1c94e57e13ffccab"],["/tags/custom-title/index.html","2208e93e12e998ec19b7286d27d5f853"],["/tags/dialogue/index.html","77d3bdd20ccb8ccee40f6a11226c4482"],["/tags/effect/index.html","5363ed855139c83479cecbfe36718934"],["/tags/event/index.html","ac8dbd78abd554e4083d69fcab66507e"],["/tags/hosting-own-website/index.html","e0ddffc61c1888d41512f77760c8286f"],["/tags/index.html","5508eb157cc4acc80ca9e415fe3a9f24"],["/tags/itch-io/index.html","dfe84ed748ee0df39d632be0619fbb60"],["/tags/light-vn-update/index.html","1718899af3502c74e0fe4e60fc3604a3"],["/tags/nvl-maker/index.html","f18b9adc29834f8deee6689e7281f1fc"],["/tags/p-tutorial/index.html","5183a01398129a8c39c98507017e5c2e"],["/tags/player-related/index.html","4c4b7ba71eba626d35a9f1a5be0a7939"],["/tags/pro-tutorial/index.html","30903f25bc9bd0fcf978d4677dbc2cff"],["/tags/pro-tutorial/page/2/index.html","3cd06591bdc70b63fe4c4c41632efb12"],["/tags/renpy/index.html","a1c2e1107fd7f1ba02fcbd56b545daf7"],["/tags/rpg-maker-custom-map/index.html","bfa1271ba9b7b370ae592a9d82974f53"],["/tags/screen/index.html","36ff1374821aa90df4bee29f2c0e94b1"],["/tags/special-function/index.html","c2518f53c9e7871c39459b33393a56bc"],["/tags/tyranobuilder/index.html","474565d6c7f6e10231260ead8eb9b9a0"],["/tags/ui-assets/index.html","4f2200627141cac9982830fe2605eca8"],["/tags/update/index.html","ff98e7514af8a1c20e71b81ffca18050"],["/tags/upload-game/index.html","b2ec653eaae1b017aa26bd72906ac659"],["/tags/variable/index.html","9708007a5299f54c3253b8d76e1f35de"],["/tags/visual-novel-maker/index.html","a57590827a27270d8f325244917f93dd"],["/tags/隨機功能/index.html","451d138e43c7212526eb612970db11c7"],["/test123/index.html","a6c921ef79d3e3c8506eb742e9371b40"],["/textbutton/index.html","2c67320758f31884af59deb507c421fd"],["/to-do-tutorial/index.html","ceb5453284253bb2bf05b6b86e3dde7b"],["/tools/index.html","ce8d63e4df47c1ebaabbee47bf1f371a"],["/transfer-to-hexo/index.html","c58989e90c431858fbe1fbb4953d10b6"],["/tutorial-update-history/index.html","8e2ddcb25101f0d74fe42856d5b1beb2"],["/tyrano-name/index.html","da5f0d76027c5c98d2902feea6a39165"],["/tyranobuilder/index.html","c00e4417ac855f62d090ad7d2dfb4c44"],["/undefined/index.html","7babad2c72f1cb9e18fb73895007de1e"],["/update-20221211/index.html","3fff4d600ea82c870f7053a5d31037b0"],["/update-20221218/index.html","cdde3c4a157bd54a41dc6bf8ca54eef5"],["/upload-your-game-itch-io/index.html","e0f9a93fb3dcbbeb57fa3550c1455484"],["/use-list/index.html","4238ed7f42ec34b7fb6eb700fb40e1b4"],["/use-nvl-mode/index.html","3d9693389000a0dbef1125b6d27b9ea1"],["/useimage/index.html","4d42a4de0a61b05f8c8f9186bac0ce2d"],["/variable/index.html","f4db5ac48a7f52c55fe98423c3b066d3"],["/vnmaker/index.html","06ec94210546790e20af7d68eeb9e728"],["/weather-effect-tutorial/index.html","8b4de6939c5085254242de87fd1ebe34"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
