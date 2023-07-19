/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","74205b02038b6afa96f814e121f69f11"],["/2player-battle-system/index.html","37a81a71be00e473ec56fcb60022eed0"],["/404.html","7f537d872f2bbb7b40b45d4fb3fdcc0f"],["/about/index.html","f598c30ccb13cad005070702c82cb761"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","64d192b8360c78d45bb4b3190e1d19d3"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","e1a39737e7e56a954c128f6d90301d99"],["/animated-title-main-menu/index.html","bc552ea493bed9dde585b865fde258a6"],["/archives/2022/05/index.html","9fb1ed70021c4cac7cfaa4a67aa32e19"],["/archives/2022/06/index.html","3cd5634b949f641afb5c3aea4b669db3"],["/archives/2022/08/index.html","add1a391384f1a8baf3e895601a71d1b"],["/archives/2022/09/index.html","5305d372ce60bc8140087120d835ea69"],["/archives/2022/10/index.html","39e6e4bb3b6526df84efe3f9b21317c4"],["/archives/2022/11/index.html","50b262d006978c0ea42d72ef64752087"],["/archives/2022/12/index.html","0910f66c18759185eb3ec07539e6e6ac"],["/archives/2022/12/page/2/index.html","9eee8e435c77ab6467ae3df84e7bd42f"],["/archives/2022/index.html","eed069e41f8015d20e6caaafab24049b"],["/archives/2022/page/2/index.html","5474e52bc3e7131974f7ce095de2c8ed"],["/archives/2022/page/3/index.html","f3d7291afb5cf09d5483596bb8872961"],["/archives/2023/01/index.html","2995319c49a842827f2e91f71bcd13b1"],["/archives/2023/02/index.html","cbc46a1cd0e7d5adaa77798354ff5531"],["/archives/2023/03/index.html","6cae21954d4d6b6e70676f761878e398"],["/archives/2023/04/index.html","0cfa99079b3416ebf9e2c698fac14cf1"],["/archives/2023/05/index.html","5d0097e1aad7c3d58b8f021d1435f246"],["/archives/2023/06/index.html","ede2be0b2a3db2f985894265ff2306b3"],["/archives/2023/07/index.html","46a5a9cf2f86c5a297dc5b51495633c0"],["/archives/2023/index.html","24bb39b970e226aa4695909c6b5c3b1a"],["/archives/2023/page/2/index.html","18bfa56c873ffa1768fe8759e16cd5bb"],["/archives/index.html","2dcde9596554dc8fc5ee9dcae1a44ae8"],["/archives/page/2/index.html","9bb18a72c033c1529bcb5248428837eb"],["/archives/page/3/index.html","094b674518986b059f04e374c4602cd6"],["/archives/page/4/index.html","ee20881864acd01d9e056a13788e39a5"],["/archives/page/5/index.html","a653eff7cf40472f137acbc40be0a2ca"],["/artitalk/index.html","f05bd54ac404c7fbb166071d68a7f1b9"],["/battle-beautiful/index.html","675e29861dab6d12981dec39ab88638b"],["/blur-effect/index.html","1f2c20d4469a21569308ca7185079c87"],["/butterfly-custom-tag/index.html","55f2abc719d35e5dc51bc227f67a3dd1"],["/butterfly-plugins-faq/index.html","991994b0089df31d8f98d131a87d65de"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","a79a9dd8858d261f6f44419ce2423dd7"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","79f79691baeec87bb5537be15c40a6e5"],["/categories/announcement/index.html","fbe2313ab2df1ce977fbe2d3029ab610"],["/categories/diary/index.html","0c767198ee630a013106a6f4a86082a3"],["/categories/game-dev/game-engine/index.html","6ee345f39debed19fbf497d54104e36e"],["/categories/game-dev/game-engine/lightvn/index.html","a1847dbfa80ca417fe5be3156efc2c2c"],["/categories/game-dev/game-engine/nvl-maker/index.html","872d6ee86da4924675a7e4946a40237d"],["/categories/game-dev/game-engine/page/2/index.html","943f01ed8bd348a60921df8670f76159"],["/categories/game-dev/game-engine/page/3/index.html","f8a701cad4b43812e0d917a8176bb9d9"],["/categories/game-dev/game-engine/page/4/index.html","9d940e0e23f0666241371ad8d5848113"],["/categories/game-dev/game-engine/renpy/index.html","bf4bb88ffe86498f7bc52cc0cc3dc652"],["/categories/game-dev/game-engine/renpy/page/2/index.html","34d383ba81005f3db7c25f1804c840d6"],["/categories/game-dev/game-engine/renpy/page/3/index.html","cef2e0ec28221b35559512813c52f66b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","ecd06ffd3798f556a9b94e3b52fbb597"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","3624d3cbcdfd788df03430f5ab8c0b79"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","17356bca293f87d2a020d7e0a8f3a2b6"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","811fc6bdeed2247e48d863964a9498d1"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","1fe66ad39c6bd08b9676566bc834ac8c"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","460efca2f6f9433e117b4be043c48212"],["/categories/game-dev/game-engine/rpgmaker/index.html","4b765df46eeafc2770caf07fb42be961"],["/categories/game-dev/game-engine/tyranobuilder/index.html","d0705b3daed9edab035801875e4a886b"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","e6d57a86d4de7a4a17311d0efb2cdb91"],["/categories/game-dev/index.html","91cbfdca5d91a4cc7719e8358da072e8"],["/categories/game-dev/page/2/index.html","f3fcfa800a3ee7628b66dc27336ef20b"],["/categories/game-dev/page/3/index.html","2bcf2855f3575ca8f2bea03fd17286e2"],["/categories/game-dev/page/4/index.html","8b6e03645560abbf105e66c6cd0afca6"],["/categories/hexo/index.html","b5a5da74d172f13da8e1c674dea79940"],["/categories/index.html","afc37771ced89eb092276b56ea4b6031"],["/categories/material/index.html","f39a4b6f5c644abb60ae1d4632ccbf1c"],["/categories/update/index.html","bc7ea166f03aaf82ca70c0072df45ee6"],["/change-according-to-real-time/index.html","cc9df882ce917f605ab806975a176123"],["/change-title-after-first-time-viewing/index.html","5b70824e7a15539528092bdb21253da3"],["/change-title-based-on-event/index.html","3457f6f31dc16bfc8d8be18a735ead31"],["/character-interaction/index.html","d58802f4a43d5921ef1b30fc23083f27"],["/character-stats/index.html","88332b72661bd3c5225c89bce0146269"],["/chatbot/index.html","04a4fc67baa3b4ff26928067e6d1e0d0"],["/choice-time/index.html","a1aedfb452a8136af1d3748a2fbb5de0"],["/comments/index.html","917346b299d3488c534401df21763a11"],["/commission-info/index.html","bee41a7313e1b8f2e723287352f2dda3"],["/create-button-anywhere/index.html","a37e6a4c9e724615e1a46222ff13e14c"],["/css/eurkon.css","f9390ba1198d630c896434ff23fe56ec"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","01feb62ca7b4032d0863910c34374768"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","e1b3a8db3a60d4a3f7c57c535ccaf963"],["/css/rightmenu.css","5300eac700a49694c09fc6b287ae1b09"],["/css/siz.css","ceded51cc1aefa344536d6eb28468c72"],["/css/swiper.css","3f4d070a58884502272a4067c00727bc"],["/css/swiperstyle.css","c72197784c309295139eeca331946e4d"],["/css/var.css","803a41d9437acad1eeb7cd7710ea43a9"],["/ctc/index.html","ebe454cd97901cfb30afe90d943947cd"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","eda26e562da3fa8a89fb4004cd869d4b"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","5251966f7cae64aa1c158ae45517fa3d"],["/custom-launcher/index.html","663cf1a9cca92dbfe91a9a70a96df309"],["/custom-loading-screen/index.html","233f58fdba57ecc2336178285accb812"],["/custom-mouse/index.html","2ed79cb9a439186f9b7af4ad7d395b8e"],["/custom-music-room-screen/index.html","fc21f09071e8bb6ba2ba08847afb296c"],["/custom-music-room-screen2/index.html","f65720b2a49f1ed0322bf3e4a4d1157f"],["/custom-nvl/index.html","f42deac78d7d1dbb28bec526d4fa68eb"],["/custom-player/index.html","38645b0bfef73c4113f816e511a99fa9"],["/custom-preferences-screen/index.html","438b224d080ce668f16992d8b459a284"],["/custom-say-screen/index.html","31f35c9d5899adf2680e9925476a2019"],["/custom-title-screen/index.html","6fc9644fc25f94217913706acb48d9db"],["/define-npcs/index.html","671e558fcc4700d9fb2dbaf73fabb0c2"],["/dice-function/index.html","93d7e5573c171a4467ab298d324b9c83"],["/disclaimer/index.html","565f051e46c01b809060d04b332cd2e6"],["/enter-name-screen/index.html","28873fe679720af4d61727bb6e25a08c"],["/export-game/index.html","ef2452b4a9266a1e3143d784b3face4c"],["/friends/index.html","c18cfd0336ec415394ca817024f12c58"],["/gallery/index.html","e1cb2972333cd7915411fd8a044094eb"],["/gallery/photo/bg/index.html","a5f5f2f5b550fc2b02dd76636cd98631"],["/gallery/photo/gui/index.html","54404c9d40c8ced4c26eb865f6f91e9b"],["/game-only-text/index.html","81dcdb7a38e49d07575916d94a86b00f"],["/gui-017/index.html","372e133d5d7e5868eb014a38430f7689"],["/gui-vertical-002/index.html","e3a32f1266f8e33a89f615c1d00cd258"],["/gui012/index.html","6e162a1985b8c3cf672f8a16ff6bc0b6"],["/gui018/index.html","30b6862b1cbe510f04eefb87d6a53356"],["/gui019/index.html","767e4a73fcff840bbb7d4a645d7687ed"],["/gui020/index.html","41e2a08c60873cd92f0706664368194a"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","96b49be8c72be0604efb4a322ba90644"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","e4eb8a62c59a6ec269e2015a67512ed7"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","01ee5340c9c44de1a9e30d4cfa9b5c65"],["/images-tip-function/index.html","7c963f5bb5d66cec08379752fefaf025"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","4103ed26a55a1f4afe83b628e81d1bb9"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","3e47387913e97a4ece56fe4f1c793380"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","5c4d0db06899cefab4c0a5dcb45dd594"],["/items-sprites-effect/index.html","63bd95aa2dec732517fe73fad23b9c08"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","0e7a317355fe1470c0d1bc1688beebdf"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","7e97c012272fb938e6fa4aa3cbb4f30a"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","045684b1933582218ff6bdaeeb77b5a9"],["/link/index.html","bc99241a154bf8ab7b814b23c17e2c73"],["/make-butterfly-beautiful4/index.html","5ad4415269970e772b00beeffb69573e"],["/map-puzzle-system/index.html","3e75011c1b09e9b2a6aac7f5778e329c"],["/maple-effect/index.html","4a7f1156c38a207ac4a498bb61ff9b72"],["/memberships-2/index.html","fb89a43eaf4d388446c74a3d2cdf09ce"],["/memberships/index.html","df6a2ce5cf9e748521a9c3035d2093c0"],["/multiple-language/index.html","72b1cac83e0c3db905469477039a012e"],["/name-input-assets/index.html","2cfef810913631049c2a68172e5d245f"],["/new-year-event-2023/index.html","34b52ef9e06a577cc31405ae95296d23"],["/newsletter/index.html","379b3cb52d7c1c39f6e9c67cea578e59"],["/nsfw-limited/index.html","62561548e9c751aba2f4abde86ac0247"],["/null/index.html","a54b41772ca08b42dfbf7bec86a40879"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","051f6b37abb19c541f648cd67ba26af7"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","9e4e355f49a159b1eecb88865cedc537"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","53278c44c305c2da57962fcc8e6b3df8"],["/original/index.html","ab6c61de047cf6acd909ec54dd5bef9a"],["/page/2/index.html","9a2f55602fab0ad6b3f3735bda25f4aa"],["/page/3/index.html","790c00652e4430d249d4e5483af7a496"],["/page/4/index.html","2d6c6a0c0961288921b7df54711dbe75"],["/page/5/index.html","b19fabc7fea24c84bc8b5f2931c31ec5"],["/pop-point/index.html","1f7187955099edaf725b7a4f7a334eea"],["/privacy-policy/index.html","e26be1786a8d7c12a14520811d5c3f1f"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","06a42e9cb5ba5ae9343c4065b1621850"],["/random-number/index.html","9c3144c47387a69afba635c39e9e8162"],["/random.html","340e69837f7c74a76cbb8bad6e07d40d"],["/release-017/index.html","6e0dc2111a988fd9fb850ff8f7c23b5e"],["/renpy-basic/index.html","1bda0463593f1dd3f77f3ea9fbbc93e8"],["/renpy-crash-glitch-effect/index.html","ff635bf7684dab38c7397bdbe33395e7"],["/renpy-matrixcolor/index.html","c2b8c14454b856376478838793aa7243"],["/renpy-overlay/index.html","3bea935f1a0fc1c9866f01810b08d43a"],["/renpy-review/index.html","accef5b3c41e353f870b92f1aef3b7b4"],["/renpy-typing-effect/index.html","9bafdf48389352b854c838d682072868"],["/rpgmaker-assets-menu/index.html","af923ee0a0b4fd44f98935852ee12011"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","55760ad30dc7f4fbba8f3b2ec41fcc3f"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","f7890c4bb0652e84eea6614ff81e62fd"],["/sakura-tree-background/index.html","0d204e98bd53c171be0173f07a3fb770"],["/service-worker.js","fabaca961b2009a5064374532acd791a"],["/show-variable/index.html","966620b23f4a1a65e423146060b952d0"],["/side-image/index.html","b8a1469034e7e7c53f6ac6c74f11e7ef"],["/snow-effect/index.html","8c3c31d2386fe27b2f5e35122d368a96"],["/speaking-animation/index.html","1a744bea3038bbed5c75d7dc9aa1eca6"],["/splashscreen/index.html","d45336d1d34d8849ba0d39f5d5fb0fdc"],["/sw-register.js","e63eb3003affdb2f6a1db119b9c4483f"],["/tags/Hexo-plugins/index.html","e365a5edf9847cad12bc55939ae1fb2a"],["/tags/Light-VN/index.html","83b162833ec483fad1cc30e908398eba"],["/tags/ai/index.html","e280bb4fdb47e9418f4b005f5cf98427"],["/tags/butterfly-beauty-diary/index.html","4f600ad2ace400fc10bee5347debdb68"],["/tags/commision/index.html","56c77cecae29bf29819fa6a2de5b2dd9"],["/tags/custom-hexo-theme-butterfly/index.html","4904f0dd41bb4f56547fdc57bfcca293"],["/tags/custom-renpy-title/index.html","add9e3827c28c2e6e1440cc564b59a09"],["/tags/dialogue/index.html","866ff2e71e99ba62c2d649a52fe5dcf3"],["/tags/effect/index.html","0450706e55133479546e7ba12299e7bb"],["/tags/event/index.html","157b248684305a4d226d0543554da6be"],["/tags/hosting-own-website/index.html","aa58a8ae2fa8b9c3d14e41de109da2c5"],["/tags/index.html","c09665d0cf71e0fd94187a65b54c5e0d"],["/tags/itch-io/index.html","f40efbffb3678e0315675e7121601314"],["/tags/light-vn-update/index.html","39aa447eac561ff4340fa22aff628c70"],["/tags/nvl-maker/index.html","aae9dab17dc85e8da90759630203f957"],["/tags/player-related/index.html","841b062b09e66f08ff75afab6309b816"],["/tags/pro-tutorial/index.html","cd87e34b7a8430b7e7860005f6a8fee7"],["/tags/pro-tutorial/page/2/index.html","72f40b306c5b7665810ede62ceb426bd"],["/tags/pro-tutorial/page/3/index.html","f40ddd8148f47f814af01a7a01d7ea57"],["/tags/renpy/index.html","435e0818c903406916b3dfeaabaed0de"],["/tags/rpg-maker-custom-map/index.html","43e1f2930ae2dbf5bab93de7b2f2f884"],["/tags/screen/index.html","9962b23c3370c13753beaad8e6de80a9"],["/tags/special-function/index.html","4d63e1631e47da310c387e629a30f06e"],["/tags/tyranobuilder/index.html","9c4aa835745d8e7a9a350382870b08f0"],["/tags/ui-assets/index.html","0258217c58a54f76934016031f0e4b2a"],["/tags/update/index.html","748559a82f506d68bdb2352428ac6541"],["/tags/upload-game/index.html","90e02acf703ec763a47c61b0ee03e932"],["/tags/variable/index.html","69e8c87eb3d6a6d5269d7872a1a6e463"],["/tags/visual-novel-maker/index.html","be4a3dc61845d031b28718386fd15471"],["/tags/封面製作/index.html","2d7f79bd3c5498b56c00439b6d1af6ce"],["/tags/背景素材/index.html","a8174cc597463146a668587e352b5456"],["/tags/隨機功能/index.html","2cfac4328b6c370fd79a244db6beab3f"],["/test123/index.html","7f5e23d738525fd9712e869e28f24d80"],["/textbutton/index.html","dbcd52ea9666bd4521e446a66e94d735"],["/to-do-tutorial/index.html","25877c2bd103e55d9451ba2b44f280a2"],["/tools/index.html","2908aeeb48d804212544053dee2f5e82"],["/transfer-to-hexo/index.html","07b3e87a4ebafef1f66e2c5112620a63"],["/tutorial-update-history/index.html","86642ba9ebe215a97258c4457ff357d0"],["/tyrano-name/index.html","804b5c271b9bb3ebeeeb8361092b343d"],["/tyranobuilder/index.html","58cb6147f1a7d999616c91b42bac7786"],["/undefined/index.html","00a237b8d33373c8ba5109dfd3131a3e"],["/update-20221211/index.html","9c6858d9da15b597cd1d7c33977a2e39"],["/update-20221218/index.html","27dc53d5251c324beb64c462b260e336"],["/upload-your-game-itch-io/index.html","1331cede23ba1c6f14e6c71cb21cff82"],["/use-list/index.html","39edade31a59aeb42a33dac150baa959"],["/use-nvl-mode/index.html","8036eb469e70ba6de679db462e99930d"],["/useimage/index.html","5f2138a3444003bd17bcb41487f56092"],["/variable-change-image/index.html","843db673b0703e957d1c2294d0b727ee"],["/variable/index.html","8079dfc6faad6a27b53813ef6fca9259"],["/vnmaker/index.html","b289b41176ae0c12049557a688b6dd8f"],["/weather-effect-tutorial/index.html","0231e756f237a5a7ee36b9cbaa8e5343"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
