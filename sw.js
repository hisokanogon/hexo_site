/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","0f4d7996386ca3b9cca24d6a167d2b81"],["/2player-battle-system/index.html","f0b7480d6a0663bc7af12cc2081075e2"],["/404.html","d74204864bc4dca2dbd5bf2d296b8bb1"],["/about/index.html","ef6cc49876abc55626e23cdcb163e98f"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","958ff86d11cc39640e531acd62e1c5d4"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","7b716c1eae3af28a75952ff6b54d4b2d"],["/animated-title-main-menu/index.html","13167eeed86d2625a415648dfed67596"],["/archives/2022/05/index.html","0d71a2342c32762e22677f64a9d8f3d1"],["/archives/2022/06/index.html","b3e5d4dd5b307c93c6e18513103b4f8f"],["/archives/2022/08/index.html","1d76c8832f67eb234c86d2b0717ab95b"],["/archives/2022/09/index.html","39d2791c5e0b1cfe98fe7bb60792853b"],["/archives/2022/10/index.html","c076f4fc9fc41757d736c6663176930b"],["/archives/2022/11/index.html","36a8fbef9620dafe976fbedd3ada6981"],["/archives/2022/12/index.html","41ca6183d3cfff7b70e3218f1c54188d"],["/archives/2022/12/page/2/index.html","3aed90af04fab910d85ae243286339f2"],["/archives/2022/index.html","16c94c95ccc9cf528f93264be2c1b521"],["/archives/2022/page/2/index.html","6065b81a4dcc33ebbfa0f84906007fd8"],["/archives/2022/page/3/index.html","3e626d0cff9df70ead3a2b6e4265a76b"],["/archives/2023/01/index.html","e541823f336de2b94d4fd766b7683c1a"],["/archives/2023/02/index.html","9494ec67f6438c82c57eceaa1cd3c902"],["/archives/2023/03/index.html","53634b1f77ecb86cb3a09f9bbd9a355f"],["/archives/2023/index.html","129bf97c31d53d9237f0aec09e3a1ff9"],["/archives/index.html","46b1fe37a4abe78b9d29969fda218d9a"],["/archives/page/2/index.html","3be5ea97a5319d2b64bb5f1731800457"],["/archives/page/3/index.html","dc9a656b859d91ae8c820324a2a7af94"],["/archives/page/4/index.html","9ec9e4a1feb05c1662e60755da9b2cd2"],["/artitalk/index.html","c65ea4249df31917252d2cd3c3db7a13"],["/battle-beautiful/index.html","ab09aef80019471a4806f981b5b8fac3"],["/butterfly-custom-tag/index.html","20f3e85b1591ed68b16693c1ac25cd3e"],["/butterfly-plugins-faq/index.html","3fe1c9166eb84340a25ac1cc58efc124"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","ed20629f2ff84f94e3ce9c99f405aa33"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","c2e082fa879dcd9f5f5bd686cd01772e"],["/categories/announcement/index.html","eb8a6588bcd44753441b704d2ef127f8"],["/categories/diary/index.html","8f846b3bb5d4571cf706277deff59a6f"],["/categories/game-dev/game-engine/index.html","e9abc8d2203e412aaaede8edd810aaca"],["/categories/game-dev/game-engine/lightvn/index.html","8be128be00533641e180741476436bca"],["/categories/game-dev/game-engine/nvl-maker/index.html","b9eeed55a48b1f0f35ce7554f7f75641"],["/categories/game-dev/game-engine/page/2/index.html","9160e74fe22a2ae3743707eb4545f0bb"],["/categories/game-dev/game-engine/page/3/index.html","5c92892e902aec16faf837b3c70a0042"],["/categories/game-dev/game-engine/renpy/index.html","5a224580b707d67aa91052170e14f372"],["/categories/game-dev/game-engine/renpy/page/2/index.html","3fad2c4653d4e784a3a7762b5e079b0e"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","3cb6294d410cf5b971c1692a44383216"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","56888230adb402b96b77c2763d296d9f"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","95d5b5e7f65e98e557ee1fa3f67dc9fc"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","9287d6337dc7ccc50e5595dad03c32ff"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","02d3afb8d80aa96de2f85c87cbb1bd39"],["/categories/game-dev/game-engine/rpgmaker/index.html","0c9569619d71dd57752339e6da91a97e"],["/categories/game-dev/game-engine/tyranobuilder/index.html","f3cae236bfd072a19ce58cb5314e6ba7"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","1ba3a271f1196f220528670433f9163d"],["/categories/game-dev/index.html","57c5f62eb32d272342892351b69c05bf"],["/categories/game-dev/page/2/index.html","9937ff3f96988e627616c8deec3c5099"],["/categories/game-dev/page/3/index.html","9f56b4c8a4cedf52cc72507772a5b19b"],["/categories/hexo/index.html","8625151eb3350b6aee9f7fe1900be425"],["/categories/index.html","e06eeaf4e5e607293c97c00460ecf85c"],["/categories/material/index.html","9f03de10dbdff1c497b248dff66c15c5"],["/categories/update/index.html","cd05bda6400c7ccfc78cd0d77377298f"],["/change-according-to-real-time/index.html","46e1a9612c7cda494aeb63a2f61dd8f2"],["/change-title-after-first-time-viewing/index.html","7f80886df334a77e0da094e63fd122fd"],["/change-title-based-on-event/index.html","8355ede8a535f0c77191e222a9777cb3"],["/character-stats/index.html","89a59fff3b3f96655fe3e7c33debb131"],["/chatbot/index.html","b51379af83cacad7abfff2852bd995a2"],["/comments/index.html","ef9383df1b9634e20c51091989dc0482"],["/create-button-anywhere/index.html","8b782051dd9a5c3e877e71c604f21922"],["/css/eurkon.css","13e55fb6cb5cb52c43229c49c2cf2ea8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","0b8dade876b672c0c65d166cf47b2ac0"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","ea2d5436033033b62a0248588afd1e50"],["/css/rightmenu.css","4db57c773d298f7b042e064c57f522fa"],["/css/siz.css","a0393d144181b57063fdde0492ad4b6b"],["/css/swiper.css","3077eda4d550919ddca642e3b6ae9d75"],["/css/swiperstyle.css","879836fbc945a1fd54dc75a2ed6d1f76"],["/css/var.css","49c455ff2a8355bdae3062b063bdf9f8"],["/ctc/index.html","93f5204893aca6f94e75b88fe62dc59a"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","29b9283fe1acc5bd8c9ca8d03efd50cf"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","668bcf4f94876eab6d01972a80f74570"],["/custom-loading-screen/index.html","858e35f6a6ee2747cae0de8661dc639f"],["/custom-mouse/index.html","5a717295fd295c437a2e54423991342b"],["/custom-player/index.html","c8aa6baf2948df6859a3c9ffe9311e9c"],["/custom-preferences-screen/index.html","5f92848378004b339c70556eead2da0e"],["/custom-say-screen/index.html","c8740199f69e2cd87934cdfceae7bdb2"],["/custom-title-screen/index.html","ded5835cf6e80605deb8a325a4356ebe"],["/dice-function/index.html","d9e712fe702b70d85a6df2b73c8e8e69"],["/disclaimer/index.html","a931a805ba01c3781f438cf309191145"],["/friends/index.html","1aea434330376939685e0097121fa89d"],["/gallery/index.html","6071ceb47fdbdb3268a1e219c983b1b4"],["/gallery/photo/bg/index.html","eb767379e9c73e22e959eb55803c9186"],["/gallery/photo/gui/index.html","86873eb75d303dd945a5fcc6091037de"],["/game-only-text/index.html","70da0ce874fd96733f1beedf30e160a0"],["/gui-017/index.html","a1419abaf6900c1b4c4ee222e9f3e448"],["/gui-vertical-002/index.html","5894a061711dd659ee883b9284f8383d"],["/gui012/index.html","44f32b641be1cb5f5495cd925402369e"],["/gui018/index.html","5ba89da976b848b477f761dd494cd7ad"],["/gui019/index.html","40a99f69ea1ecd1e845497441e9ffe99"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","dc96da0ddf565ca67c3aa6d34d5b1e28"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","51176a70b133db2daa3f58bf0e7945f5"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","614a1469de71e0b6cc49829d64fea9d6"],["/images-tip-function/index.html","4754c10d70a2e8b0cf139b53d7e71263"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","153217f059349f44b5e473af8f067257"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","4f3c67ec10315b3f2b10436a96023d44"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","e46dd3aba56d8da4d6ecd55fde0f93cb"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","bf18b9c56504530f3874b2bda0bb07fc"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","8020849379b536398f879a4e10976d05"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","dd0bd3f7f49e61cc949d372f668e0c58"],["/link/index.html","958b8160a288e276d8fbb231c5398066"],["/make-butterfly-beautiful4/index.html","6d81929a0f8d6672f500976f46c993be"],["/map-puzzle-system/index.html","eda3c9aad61667fe37d1716dc352a40f"],["/maple-effect/index.html","1bad87343823ea324abf0871a0a0d203"],["/memberships-2/index.html","94247e9fb7552ba9726361d18549229e"],["/memberships/index.html","15bb599eb55b134e339303ee144f2e3a"],["/multiple-language/index.html","f80eb3aa18832925a2155e27a03b9162"],["/new-year-event-2023/index.html","ed88100482a98a25dc98cbc19bffbdf1"],["/newsletter/index.html","365d6344fd64a475a558b5ddc25cb468"],["/null/index.html","446d33e6fde8d85b8fdc75ff691c98dc"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b2a11abe2d8f25e78483fa57975669c2"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","72129ec9a55180a8899cc30c8a04fd95"],["/original/index.html","29353ba2a261368f97b24f9acbd71b1b"],["/page/2/index.html","bb05e6c21f5209db17c1f03f89e4b29e"],["/page/3/index.html","2b383689fab3eeceffcee548a9f0590b"],["/page/4/index.html","7396b4931b48c97c4aafd310393456ee"],["/privacy-policy/index.html","4e1e17f00c82aedab746a093550a4f69"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","0231dbc594ac30d064f463145dfb024f"],["/random-number/index.html","0e8db657eb6409f0262e5d7e58216635"],["/random.html","2092b8e54a1f3796b3c5679a90b7390c"],["/release-017/index.html","1ae14a14cfc7d19ab96c7ff10102cb41"],["/renpy-basic/index.html","a652030efba8143ff2821fcf976ea1ef"],["/renpy-crash-glitch-effect/index.html","7207f6651c2fccca91051d2830131ad5"],["/renpy-matrixcolor/index.html","08efde43b3815794948ddb9b3b9018a8"],["/renpy-overlay/index.html","05dc623c2f1b218d713980cff37a7fd4"],["/renpy-review/index.html","260fb5c84eac1eade9356d03b0e5b21a"],["/renpy-typing-effect/index.html","7d073dc4ca4aed0f6e02531e0fdb4392"],["/rpgmaker-assets-menu/index.html","8869b34d57aa3130c66787114748bc31"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","a7dceae534b491daeb178c656e160fe5"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","9e426a37ec059753c11516cc6f649efd"],["/sakura-tree-background/index.html","be2ed6ca0f0c227e574a8921102f9bc7"],["/service-worker.js","785e724a36d3eb5767e66bfb2703e32f"],["/side-image/index.html","c6efa2a93fda85e14dd855bc9af11471"],["/snow-effect/index.html","73f5cdfecf5af262ab1d37f6f166d445"],["/speaking-animation/index.html","e425594119d5dd19f68a6fdc865b6a68"],["/splashscreen/index.html","8aa21d3d699d771e84ca4f315661bf00"],["/sw-register.js","cf3ef70e074edceeee80db97f2e7241c"],["/tags/Hexo-plugins/index.html","2daf4f1abe663271af175d51fc9d3da2"],["/tags/Light-VN/index.html","d1c8d3ae84fbf0ebf8cb587602bc501e"],["/tags/ai/index.html","8647b4b5fe3548443d85eca0df165bfe"],["/tags/butterfly-beauty-diary/index.html","07486ed42ac6ee9180e13a76316e2da6"],["/tags/commision/index.html","6bf1bb853cbccf3415a029a7aecc37a1"],["/tags/custom-hexo-theme-butterfly/index.html","86bfde86b4b0e0596955484e7176ef35"],["/tags/custom-renpy-title/index.html","80b0b89c80aa8814d73cc20ec3ada9be"],["/tags/dialogue/index.html","e84ff12afd86a92f9059e8663f379f7d"],["/tags/effect/index.html","a8e7fe5b7cc44d3acba0758ddd41b56f"],["/tags/event/index.html","aa6d92e5edaacd1852e72d30d40f10e1"],["/tags/hosting-own-website/index.html","b991f7bfea6741597bebfaacaf0164a3"],["/tags/index.html","31ede539bca6d2809cfcf62d33797dac"],["/tags/itch-io/index.html","83184e6df1ed99837ead5dbb2c0dd9bb"],["/tags/light-vn-update/index.html","611c7e28f0b47f0935b0af3710e38feb"],["/tags/nvl-maker/index.html","846a9e23944df7c87c3a37998ecae64a"],["/tags/player-related/index.html","df6404444bbb89becaba895bf1d46d4d"],["/tags/pro-tutorial/index.html","6e82f0a7bd700f5ef36986559826d25f"],["/tags/pro-tutorial/page/2/index.html","4543f074792773ba809ce82f4dafa0f9"],["/tags/renpy/index.html","dcf2994741bfff04fe0818d998bd5a20"],["/tags/rpg-maker-custom-map/index.html","0b24e5efe9e0cd333e5991bbd0d11fcf"],["/tags/screen/index.html","63e9c83d261909c5c417b9e90b12a109"],["/tags/special-function/index.html","c7073546ff58f54e9ef9f4fae02aac54"],["/tags/tyranobuilder/index.html","04d5c685d795589963a7a2c65080d66b"],["/tags/ui-assets/index.html","7c82691f7cb3adc3399ca80c6c7927a8"],["/tags/update/index.html","292e4c45e92af6e1271b802d06e4bdb3"],["/tags/upload-game/index.html","8ca8eed77eb797b8196c0a32999b8f19"],["/tags/variable/index.html","9f12f1dbd6dbd1a82ebc88261ea5d577"],["/tags/visual-novel-maker/index.html","b9728f43346e21fc3528448effd1b4c0"],["/tags/封面製作/index.html","887dbce5c6c60f016239304c75d63625"],["/tags/背景素材/index.html","a2a40a90bbe10c60558416f34b91c718"],["/tags/隨機功能/index.html","a5f56386bd377d404b2c0140d9f252d0"],["/test123/index.html","42fabf7954dbf7af6509e0c7249cb7c4"],["/textbutton/index.html","2d8a871d84b2468252f176ddd16d6870"],["/to-do-tutorial/index.html","fbf30433752570fc40c8e5872d2b079c"],["/tools/index.html","7444abd54b31d7e524ad39e2ffe05559"],["/transfer-to-hexo/index.html","8f3774ab95a6e833294977f844c1f2d1"],["/tutorial-update-history/index.html","aefcc8039485f744390cdbbd3aad1b40"],["/tyrano-name/index.html","17c1c56fa0f49079d762f6bf1f9540cd"],["/tyranobuilder/index.html","ba6336c5362c642c904c43d63a635cf1"],["/undefined/index.html","0c273ba119cd8d3823ecfdc2da86d9f1"],["/update-20221211/index.html","7dd81ae8dcb9fb36d1e688a592d46c7b"],["/update-20221218/index.html","d7cbdbdb7cd08d1418dd01577d115fa4"],["/upload-your-game-itch-io/index.html","9648f860a6ce0b01b4beab06fdbfc4ad"],["/use-list/index.html","2dd0fea15f28f49391d860863075b418"],["/use-nvl-mode/index.html","b407f53093590dc166bf36c83dccea8b"],["/useimage/index.html","2796a4cd39dd1c0473420b1579d8c9c9"],["/variable/index.html","1c21d71e972ebc55eccec8f7949e7467"],["/vnmaker/index.html","7e5af1cd882fd802cbb89cea16ed7eb8"],["/weather-effect-tutorial/index.html","a7b0aeaf792a7b5cd91353aa0c17e2a7"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
