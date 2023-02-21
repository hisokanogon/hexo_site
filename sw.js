/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","71bbdb7ff40652319962ce454d5406af"],["/2player-battle-system/index.html","a2d1f9ec500f8eb2eac2e77e782bb23a"],["/404.html","3bf0cdbf8a5a01571e4b9d3883af7aaa"],["/about/index.html","23e03553b246e1dde96f4380750427a1"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","69db3463757f67d19ca4c1f66953cb0e"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","eaf1ea7d9d8551ab1d7736df60538e55"],["/animated-title-main-menu/index.html","f0072f0e59d1e01e4d6fc43c19e4c7c2"],["/archives/2022/05/index.html","4437d3e772675b195446b55d6da24e2a"],["/archives/2022/06/index.html","278807dab7f743704300f5f2148e5dcc"],["/archives/2022/08/index.html","06290312c013a4c64246d9c30bf5b403"],["/archives/2022/09/index.html","009d0251c34ec6be29b57da10dea9155"],["/archives/2022/10/index.html","7e27a101af74427b407de8701603f274"],["/archives/2022/11/index.html","94100fd2effe4a85abe445f1e58758f7"],["/archives/2022/12/index.html","17af48270a68a4f6b18b416fc750eaca"],["/archives/2022/12/page/2/index.html","52af73463b770e67354da90dce70492c"],["/archives/2022/index.html","7b665eeeef61f527e77e3ebbf7af42e4"],["/archives/2022/page/2/index.html","db2081cf9ee2e94de1a03ca904bf6867"],["/archives/2022/page/3/index.html","d523c373123e2bb02b1fa5f7485df3fe"],["/archives/2023/01/index.html","d2f9b23d3ab1799806675a0e77773d5a"],["/archives/2023/02/index.html","0f280728f522be1ac45640ba44f3bf8a"],["/archives/2023/index.html","ceadd9a8a97e7cd0a0ebc24823dc340b"],["/archives/index.html","6fe1c3958f418aca0aadccc0bc77f844"],["/archives/page/2/index.html","09561930543dba89b30aa1e10e8270fa"],["/archives/page/3/index.html","5d32b7c5d501014fbf413b1d721442bb"],["/archives/page/4/index.html","ef4d129eddea7530673ccfa149092972"],["/artitalk/index.html","a2bae688dd533ac3e6201a809753388b"],["/butterfly-custom-tag/index.html","989930356a13a6325d353632e774c05a"],["/butterfly-plugins-faq/index.html","16f3faebf43a50a14832b56e46e26da4"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","405e46940fd32e5521ce1c0d10ae66a8"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","c5a7743aa1fa44ae248927420a00ff52"],["/categories/announcement/index.html","4b108161d02be9dbd0098044ddb06d6e"],["/categories/diary/index.html","defd2a6740e58c224ecaafacd35a1152"],["/categories/game-dev/game-engine/index.html","41fac647e25b785b0fcea61abe694f94"],["/categories/game-dev/game-engine/lightvn/index.html","91475f65045110aecda4ab125a511505"],["/categories/game-dev/game-engine/nvl-maker/index.html","b4318046debf66abed248aac01c8d3d4"],["/categories/game-dev/game-engine/page/2/index.html","da8674d3f8f047ce8f5dc774cba5f0c5"],["/categories/game-dev/game-engine/page/3/index.html","8c86fcf9e5e039fb500a50a201b8f189"],["/categories/game-dev/game-engine/renpy/index.html","822e6850e48bf79dd4bda06cb41c3387"],["/categories/game-dev/game-engine/renpy/page/2/index.html","83633ad268e0831da89c511b6920b1ea"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","ec00918ac27739092272a3a47bb2c37f"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","cea9517ec00a2013494463b0209d64f7"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","093cd6b0ea55bedfbeb44e96401aa87f"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","1ba848238a901347365f2898a1da3d15"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","2be1b7a5dbf8f1d49c90dff825db91f2"],["/categories/game-dev/game-engine/rpgmaker/index.html","865dfdc84516236fa95f46a5cc776475"],["/categories/game-dev/game-engine/tyranobuilder/index.html","e770623528c9f9c1ff08a5a8f0e4b074"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","2686c56bb1871360dce1af775df71a86"],["/categories/game-dev/index.html","a695000be19a8df6254ae365381e7c76"],["/categories/game-dev/page/2/index.html","f26900f3ea30ce56cbe9864986101921"],["/categories/game-dev/page/3/index.html","38f44c8d64b79399c8142527ad1ebad7"],["/categories/hexo/index.html","1979fc79316b1cb00d9a35b033ab5582"],["/categories/index.html","60396d168f3954ec858794ed72d7f3a8"],["/categories/material/index.html","b7fa0ad52260d4df98ab59e7b7eb0850"],["/categories/update/index.html","6081b9a9d1fd4b4900104ebf8b96a12f"],["/change-time-according-to-real-time/index.html","45132bd80d636955642ba05445401cee"],["/change-title-based-on-event/index.html","96fdcf45f34007b3d4e2cfd10be3935c"],["/character-stats/index.html","eeda62990bed4b433cf1747db4f1afab"],["/chatbot/index.html","56a1d3f46bcbf4e43d2c1e0e8bfd3fd0"],["/comments/index.html","b06ef04813980f5bbcb7f3b7708afc09"],["/create-button-anywhere/index.html","c4aef6ace20b9a4e1c1f95b29cf64c04"],["/css/eurkon.css","8fe79e0a1bd006209a207a9583383cb1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","a0cfead01e62a407097fcf7c86e003a2"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","d9ff5f0dba283021d5df2389e29e0e52"],["/css/rightmenu.css","486f5edfe3f9ca933eea70d7be8381dc"],["/css/siz.css","18322db191b609a679048a18cce0e610"],["/css/swiper.css","c414e56491e83b80f4cf1d1af8f0b249"],["/css/swiperstyle.css","4c044780c48c4708b947e00abd4a99fe"],["/css/var.css","f4662e251ddc993f4ae45a6c486a3ea0"],["/ctc/index.html","682287aa2091ff540776a7a3258fa85b"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","3773d8460731634b851f899c0ff7f5ae"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","19bd0f0274c03c175b9a7fb0c2330b7c"],["/custom-loading-screen/index.html","9ed4e3f0d520e62a6542bc968c5b61c9"],["/custom-mouse/index.html","5cb2851d9e3975310a5fa47d8c171282"],["/custom-player/index.html","f09d14d6c8e1f0eac52253669d1c6ec9"],["/custom-preferences-screen/index.html","2ad503bcb250dadea18048314f9a295e"],["/custom-say-screen/index.html","801615f3290f78b6c2b37de354edf16c"],["/custom-title-screen/index.html","bed94ab7237cfc84086e276b4cf7f492"],["/dice-function/index.html","96b771cc390db321b9d5cd01b1dacb6d"],["/disclaimer/index.html","ed5514fa39d673e2496ae500176bf302"],["/friends/index.html","73ca2a4c5f04804e6d7be0b3cc6c413c"],["/gallery/index.html","6b1d5e713db017f33f6a679d801f3567"],["/gallery/photo/bg/index.html","0e8a6e70a6cd25561c8c5d8e55742f85"],["/gallery/photo/gui/index.html","591c9388233f4c742c0a6dca44594d2c"],["/game-only-text/index.html","7be6459e6340abd39be0ac40b3fe130c"],["/gui-017/index.html","d55a60af00db40bef6961d562a48653b"],["/gui012/index.html","464157a66a03ac8b1b6fb01283aded67"],["/gui018/index.html","c4f789727a0ce28b737da08c694419c1"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","47da0cdcfb102da69dc7ae989bf20687"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","38b3aed993cf1770dd40417e6fff7571"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","6af075f46dec7caba1b48a29cd7dca72"],["/images-tip-function/index.html","98dff9505008dc2b5c29a3e2680d7923"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","3d59abdf328288ff26cf8ae6fb9a5689"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","14f2c2b0873cc39cf7feef1c376abd26"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","4f3d285dd726fc1541b5b5f4c01d4ca7"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","4973344fd8a73e08998be2dae8ab9c2f"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","9c454c26fa07e601b76f4e3d0810e26d"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","67db7fe4f81598494ad4d5e120d75feb"],["/link/index.html","d46b62319ccc4ffbd5252671003a54f0"],["/make-butterfly-beautiful4/index.html","844795eeeb8b33fb70eb25fd9aba7486"],["/map-puzzle-system/index.html","68d442b09f9545ec299a8d781ec017da"],["/maple-effect/index.html","f3b33e0a0a536839d85e63630eee3435"],["/memberships-2/index.html","c952cb5f1eb0e1a8344b3497631ae503"],["/memberships/index.html","ddd8cb2678ee282bd609d425901fb78f"],["/multiple-language/index.html","f05946d2126d87119bd4a91354bffcde"],["/new-year-event-2023/index.html","5ebbae2287bb63e0c5f052b63db26b0a"],["/newsletter/index.html","edaa7403c2ca7aa14556749970d5e70d"],["/null/index.html","a5889b4bcc0c14b2e15085601779aa7b"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","534c5777eef38ea7a10e2fee4945f4ae"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","cf473775d72a005e9c51317dbb11ca18"],["/original/index.html","a780bc8e62cc363aaef9d3a88feddaa9"],["/page/2/index.html","3f38b986fc1893f4fdc53d0bdf7af6ee"],["/page/3/index.html","5b7f20bfdecaada15e21e79537acca46"],["/page/4/index.html","c62b27f6d4e73ea370e55ca8e4b81285"],["/privacy-policy/index.html","938bf894887d4fa8e04e41500e8ec047"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","dcd6e97f62d434daf20d0c215e9886bf"],["/random-number/index.html","21449d5bc32fb1a27ac80c3eeb1a935d"],["/random.html","1076d04e107abc4adbcc53aca2c8a237"],["/release-017/index.html","a2ec5b26b89e9d745f95c947ec9e0936"],["/renpy-basic/index.html","dcd230f756150486d991bd0315c40079"],["/renpy-matrixcolor/index.html","89a1c343a945bba70c3b7396d4ff3ef6"],["/renpy-overlay/index.html","a3e5f27f02187bef80d3f615121bdb44"],["/renpy-review/index.html","cc12340da6900ee358bc99501583313b"],["/rpgmaker-assets-menu/index.html","748c07db7819788d09f5d19e904f2b40"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","899f118a1fb5a61ce1cd28575cd2aa29"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","fe1cfe2d2ab0501414d833aae6f2f938"],["/sakura-tree-background/index.html","fa4dd00647f1a92b866dcc472f9704e1"],["/service-worker.js","dd8857468a14a86e3e2a327ce8fd27a4"],["/side-image/index.html","5743901b4464546e1c3d556c1c026a9a"],["/snow-effect/index.html","b1a49902b5538dee452137b196999561"],["/speaking-animation/index.html","79474f86ec7942c6249f2a6c4328ac72"],["/splashscreen/index.html","4b7595354b1e5a0743e66cce7884dd95"],["/sw-register.js","9f291af2bdddf50b5f1e3a6f72479672"],["/tags/Hexo-plugins/index.html","04ce1a6f216eea0ce4d9e12453016f8d"],["/tags/Light-VN/index.html","8c57e814704f268193146c74e0bfede5"],["/tags/ai/index.html","e45dfb0d9f62c3c91b78d18b7bd44285"],["/tags/butterfly-beauty-diary/index.html","6afa54e46ec51d74123191ee4e239e44"],["/tags/commision/index.html","1426a2e33facbf77a200adfc8f346d26"],["/tags/custom-hexo-theme-butterfly/index.html","17ae799b03767c525d5e662eb5447136"],["/tags/custom-title/index.html","1a5c45fa8cb8462fa75d6561633c0f18"],["/tags/dialogue/index.html","124488ea64699c3888e1664e8a488776"],["/tags/effect/index.html","f7a48f7080b02b707a709f216b966b2a"],["/tags/event/index.html","20bcdc2ad76cf171d7cc7daf2f2476c2"],["/tags/hosting-own-website/index.html","82796fcd4f23444ddbb9f66f11157f54"],["/tags/index.html","212ed23d4d458c914539952e79aa05c6"],["/tags/itch-io/index.html","3731ce430cdb032434f6b7f61b3f0696"],["/tags/light-vn-update/index.html","57697744800af69c23f80b84e6256a0b"],["/tags/nvl-maker/index.html","f324223cc8113a953c6f8cb696c4f9a0"],["/tags/p-tutorial/index.html","b27ef4ee8751606fae750a269a9328cf"],["/tags/player-related/index.html","7adb1b4327b29c9cf0db6efee47041cf"],["/tags/pro-tutorial/index.html","68d7101d6a7e801db340c314549ab3ac"],["/tags/pro-tutorial/page/2/index.html","262c7c3349da92a44eec5ed72aeeff15"],["/tags/renpy/index.html","2b66e74ad49d51cf748bf871f1caade3"],["/tags/rpg-maker-custom-map/index.html","e27dce3b57b47417d6b4a428ac14a443"],["/tags/screen/index.html","6b64590f7483929697156ded06d51e76"],["/tags/special-function/index.html","f370504707bcc3b0c35bab0e06b6545e"],["/tags/tyranobuilder/index.html","80bd14debfe6b1e35ddb910e51924cde"],["/tags/ui-assets/index.html","d98d4b33bc9c431f43446ec07fe89f49"],["/tags/update/index.html","376b5900155efdedc05e9d6608d289c1"],["/tags/upload-game/index.html","31f81b768c79c389ee5d216736fd5afd"],["/tags/variable/index.html","a0402f6a8483bf791ad9a1df57959c57"],["/tags/visual-novel-maker/index.html","d965ce687160668b120868fb509b13ce"],["/tags/背景素材/index.html","46a52e1dc120264185f43c61bd64b469"],["/tags/隨機功能/index.html","b6570a51d6a0d99fc7d970772a421b30"],["/test123/index.html","5d067096e687b121fb15f774bb41c638"],["/textbutton/index.html","4ef75a14ec9f22453839eae3e078b590"],["/to-do-tutorial/index.html","db6776a929888b2824dc48abf4eb2d01"],["/tools/index.html","7a1598088e4a1c75866dd1e5b39e286b"],["/transfer-to-hexo/index.html","3f62c4f20f8eadf27f2b244f644ded60"],["/tutorial-update-history/index.html","c52665c522ae6094fab69be0aa2af463"],["/tyrano-name/index.html","83c28a18617d7e75e9ee2445cb3d235c"],["/tyranobuilder/index.html","46ad6d2489e7dc7716d6a98109d6f0d7"],["/undefined/index.html","232aa05fd6d037a58c8081aa1d5f3ab8"],["/update-20221211/index.html","5d50385d608ce7b890a04320809147c2"],["/update-20221218/index.html","03154455209ca751a2c5534c5a628b7b"],["/upload-your-game-itch-io/index.html","ced0f4f790d22a5673c2e520b768859f"],["/use-list/index.html","ef2dfa3645918a556190123d3325ef95"],["/use-nvl-mode/index.html","3e4481fa92056232ee63d9e0c38c3897"],["/useimage/index.html","20645d6cb6a17c4ddace2486075a27f8"],["/variable/index.html","a3fef2045eb96085fbfea5132cdadf73"],["/vnmaker/index.html","a55a4505790468da12f95b4ad4601295"],["/weather-effect-tutorial/index.html","074c48e1536fad17cdecb8088bb2b908"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
