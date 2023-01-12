/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","82628f879bb9b17f2ea6afa2a106d824"],["/2player-battle-system/index.html","62cd2f379dbfe092f0b7609b0784262a"],["/404.html","e847385a4456bd462deef7c73f609628"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","0a36500f6a0f7e443a392376d67f5215"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","9524c24af9680e22a3c6aca1a65f5187"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","3842e5d697ad6e6be079613c9bbdc646"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","01b59c3fe44d0944f5a4283ef2d1c914"],["/animated-title-main-menu/index.html","a75bd2272e7424e0ed9ec20a4e6ca9cc"],["/archives/2022/05/index.html","849d771ff47246ccadb51efe156844b9"],["/archives/2022/06/index.html","fa774f5bace54887179a8538d296e9f6"],["/archives/2022/08/index.html","b4c8810d07eaadf3fcfc9458714d5651"],["/archives/2022/09/index.html","22891496cada575a968ce48b7b3638fd"],["/archives/2022/10/index.html","4598d4e33c4ce9673ae416e349ae15f5"],["/archives/2022/11/index.html","ba1dd7cc1869b7881ea028cc514a8af6"],["/archives/2022/12/index.html","6003a8ed476e5c11ca814f93f32492e7"],["/archives/2022/12/page/2/index.html","0ccafe420a608a941e7ab341a72f4d2a"],["/archives/2022/index.html","333f178c3009517eabe95faa061ecafe"],["/archives/2022/page/2/index.html","1da9b2763d73502bb9d8e9726fd5d38c"],["/archives/2022/page/3/index.html","4eeb2e701fc1f337c476c23992305403"],["/archives/2023/01/index.html","75bed75154264c866cc94fa4a624fc34"],["/archives/2023/index.html","8a8d7bbf61e31a841c4b7611bd28ff04"],["/archives/index.html","3964cb32e15598bd15fce90f13aa5472"],["/archives/page/2/index.html","74154dc8b89c762d01786ba003be66e8"],["/archives/page/3/index.html","2290463ff449ca90d80705795fccf558"],["/archives/page/4/index.html","f5b74a9117dbc5fe615ab4b021e62144"],["/artitalk/index.html","b593883be261363312f05fdd0dde1ac5"],["/butterfly-custom-tag/index.html","eded3b29bf6bf53559bae477ad7687d8"],["/butterfly-plugins-faq/index.html","f017b8df84fcf14846b8b4a98497de66"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","2cf7d9b87157334bb1d8fc5712b42f86"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/diary/index.html","0c1e30216474065c6017b894cad71f25"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","3c9f4275620390a55cdadb6e27f5d2d5"],["/categories/game-dev/game-engine/index.html","ca607d29a8c1251b94b52a44a3538bc0"],["/categories/game-dev/game-engine/lightVN/index.html","5cdfff521963413c2b106914c0a30ef6"],["/categories/game-dev/game-engine/nvl-maker/index.html","9bf1d96c0a596d3a09246de13dda19f1"],["/categories/game-dev/game-engine/page/2/index.html","cee9e99a3bfd84ba60f10a8690f680c4"],["/categories/game-dev/game-engine/renpy/index.html","8251b8097c23e43825250f8001415ca1"],["/categories/game-dev/game-engine/renpy/page/2/index.html","246330911354c6f1b5122086c03c7533"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","98a336950861ecc8c88d9912d054cc74"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","20af8ec83084088574772f4018fd7b40"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","852e5d5f5964ba8987dcd65dd5a17afe"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","ebfbff2043a7af978b0a5fed9cc01421"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","a738c0d65a15010d13dd12c0b35d8fdf"],["/categories/game-dev/game-engine/rpgmaker/index.html","216960779eaa501a9bd594af20ba614b"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","5f0550fcb68eb0d26e7e68725ea50b9f"],["/categories/game-dev/index.html","a43a887855cdbf0186c7be137e463186"],["/categories/game-dev/page/2/index.html","df28c38155b0c74312d4be27fdfdde3a"],["/categories/game-dev/page/3/index.html","1ad3316a91a263cfbc4fdc1d0c3380fa"],["/categories/hexo/index.html","3799af0d9020bc20fe67c476fdad1de0"],["/categories/index.html","b9d50e4f76e13165b71841e19dd5ed6b"],["/categories/material/index.html","8322ea695587385a4fd55b01d446681d"],["/categories/公告/index.html","938300e311baa3724350d2783cbd1dbb"],["/categories/更新update/index.html","50bb2bae856f5501791ff3b2b2f499ca"],["/change-title-based-on-event/index.html","8b4e99d4640d6698cac703b81aec5d27"],["/character-stats/index.html","c050d6b93d94282550e5b97064f21afe"],["/chatbot/index.html","a09e25ef28833d3057f364757e2241b4"],["/comments/index.html","cbb3c6954a3dd8ec61a55eede3937eb5"],["/create-button-anywhere/index.html","24abf4a4ca8e1a8c34b23bbfd87751b8"],["/css/eurkon.css","27626e4e091a75a1f5145355a872b59f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","2b94c05aa58f70d960cc93ba14b465b2"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","ea5f012ea1e1adbe25886a6d8e5f1497"],["/css/rightmenu.css","7796f78bb62c3c5739e37dba2d270f00"],["/css/siz.css","b93678dbb52338b603900323b674d5c0"],["/css/swiper.css","a9fb58164493afa1a38063497b7a5976"],["/css/swiperstyle.css","9984a8dc7dbb994f88ec8071ffbc3388"],["/css/var.css","6ad51000b52ba4bbaa430912d5e0608c"],["/ctc/index.html","654b166ed25321614ed0ec676460db5c"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","fc732666f39bae34cbe2371bbcf4cff9"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","6077ef3068df018ff752208aa40b65e2"],["/custom-loading-screen/index.html","f1b5ff118aa85eab5e64d572da2c4150"],["/custom-mouse/index.html","a521bb75969c6d9c3fdc6d9a1cd59011"],["/custom-player/index.html","0bd972fc30b4e12f8b35aa8d997e4351"],["/custom-preferences-screen/index.html","4118470d9a9933dfda139fe9fb212686"],["/custom-say-screen/index.html","e7443bc4b14fbcba9254eb9d1250d0eb"],["/custom-title-screen/index.html","0165bd36a58caa20d2c31595b7c38179"],["/dice-function/index.html","fa9438d49406873b4d75edf9bb8a989c"],["/friends/index.html","dcc7b80621be8ad8dee5bfb3a9707cde"],["/gallery/index.html","22d990959b963678d4b3976dff60dc92"],["/gallery/photo/bg/index.html","7452a9ccc1dc3dbbdd1b62a93d24ea80"],["/gallery/photo/gui/index.html","086c9a249494b2f022a5271de28cf5e5"],["/gui-017/index.html","703e215bd923d645b0972a12543221dc"],["/gui018/index.html","57f096c87729c2daac3d3ee623eb8877"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","82516cf41b4a2a4c5e75204c30536bb9"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","1a0dbba4fb5591f5eac097a4d99222a5"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","ffe24e3351f3da564107f56d62ff966c"],["/inventory-system/index.html","28312527706de26c9ec12d0487534770"],["/js/countup.js","ce77a85d3d23967882d40f47774601e7"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","05ca1c5fb8bb4b62ceef86da153f64c9"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","cf47cd1d52d29d071d3c2a2578ed30ed"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","1bd340c40176031133ec60b4484b61d3"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","272c7121e4c7519584cf6e9e091cddf2"],["/link/index.html","8caf71e462eba223274a052abbb6fef9"],["/map-puzzle-system/index.html","befd2fd10e2c935557ca6586d318923a"],["/maple-effect/index.html","83388d1bcd97e3f41bee256095103b82"],["/memberships/index.html","f934e26a997cbfaf2bbfcdca4004a1f9"],["/new-year-event-2023/index.html","b6c860be2070687468d53df9f503e0a1"],["/newsletter/index.html","bacb035797eca5271156d852da6b7ba6"],["/null/index.html","00ba534b7ca7fa80ca0c5c401de0c60f"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","26f95caf8bb95a1eac90674a573e8f24"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","a803952f0870c039fc564ac9e1e0feb5"],["/original/index.html","10f46305afeaf4a55c7f040dbec2157f"],["/page/2/index.html","29ab5906158ae499de7b93a8ac6489dd"],["/page/3/index.html","80fe6ceb9c82857f263008b7a2bbc7a9"],["/page/4/index.html","f6472ee895dfda7cde8557c5c6b1a509"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","7ffdfd8e67f41a0463b6ddd59c545071"],["/random.html","fa43b9c12941fd39736b389f1db0579d"],["/release-017/index.html","a14009086e53a9aa51a96d0ac72c3fc7"],["/renpy-basic/index.html","d4a6431a9dbe63865ea9ed3f0357f45d"],["/renpy-matrixcolor/index.html","26f66766daf68e3839d0e92320afa09f"],["/renpy-overlay/index.html","dae85714900e388ce6781608dc1df8b7"],["/renpy-review/index.html","be7db1808353c84d6c7389e816aeb662"],["/rpgmaker-assets-menu/index.html","5117798dabeb877e3a67de6e27dd7ed9"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","eb34c9253ca74956d60b94d00d67f709"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","8e3c9120f3bc85dd44fe4a9c3d072632"],["/service-worker.js","bdd32cf3c197413eee63443063f4799b"],["/side-image/index.html","7bd1bbb1bc608c57588b4864c1b85207"],["/snow-effect/index.html","6f591b9fc990e03509e24fd71d36c361"],["/speaking-animation/index.html","5988db24524a8b5561e501cf8f8ddedf"],["/splashscreen/index.html","c83f3d46bccefb88f73555455eba79fd"],["/sw-register.js","40f013ecf08993b4deb9be9fefc9625b"],["/tags/Hexo-plugins/index.html","33757ea33bca0459e095d7bf2d057d86"],["/tags/Light-VN/index.html","a715754fb342f862c3f46e62f8fa6c6a"],["/tags/Renpy/index.html","f0424538ca12ec7f039e4bacee757865"],["/tags/ai/index.html","a928a851cf9df9bb5cbb9b1818a3d07f"],["/tags/butterfly-beauty-diary/index.html","8ba800acfbc8a2efc60f36359b8b4882"],["/tags/commision/index.html","d72529498f382971662dc929bc2ccea3"],["/tags/custom-hexo-theme-butterfly/index.html","2b13da75714526bea66681fe69cbd6a8"],["/tags/custom-title/index.html","c76c6a9a733e108a7f6ba65b38a8d476"],["/tags/dialogue/index.html","2b00b186ceeae1d82dbb59d295e6a57a"],["/tags/effect/index.html","ffd293c375abb301361c500f14fc7279"],["/tags/event/index.html","a4e60bb1b8df7fa5dbfb4122f8941cec"],["/tags/hosting-own-website/index.html","6d4ed992bfae2be7c3bda275350f05e5"],["/tags/index.html","51f3a6b8b933dd4d2dec64439892f354"],["/tags/itch-io/index.html","f094a6ca00046ab6d96957eff1670b2e"],["/tags/light-vn-update/index.html","c2cf75ba90e83f39fe161cd37e5ccdb4"],["/tags/nvl-maker/index.html","53df384cfd35de7311921029df59f075"],["/tags/player-related/index.html","a21835f830a5a49bf46fbd33a47fc133"],["/tags/pro-tutorial/index.html","eed7ad9783e4a71645a0b4e3b8944843"],["/tags/pro-tutorial/page/2/index.html","10a9af44822c3d0573bbfd85b14e5430"],["/tags/rpg-maker-custom-map/index.html","26a2251ed73c3b257417c0ee9ca2cf2d"],["/tags/screen/index.html","36ec6a603d791c3d2a3402b7d7c15f2f"],["/tags/special-function/index.html","33d5d2c80d44bc94b80d40b3a94131e7"],["/tags/tyranobuilder/index.html","fb5981229d211d9cb3d94e0b5cb25988"],["/tags/ui-assets/index.html","e5425790403415295a0e4a8fd295f059"],["/tags/update/index.html","f5c33307e615fd53206ef82d8bf32905"],["/tags/upload-game/index.html","73724a82246620d0e1c0d0e8f6e21db5"],["/tags/variable/index.html","44effd21e69c709441361fa7b810ca0d"],["/tags/visual-novel-maker/index.html","dbc07c978fa02a7a37b0f89c1618f3fa"],["/test123/index.html","a36548148aa24456aba356eb737d1bda"],["/textbutton/index.html","8df05660218c36eff139bb36d6410aba"],["/to-do-tutorial/index.html","a54694b0dd5b73dbeb340aacc199e865"],["/tools/index.html","623a93a9b858ad318b92014ffa7dcce8"],["/transfer-to-hexo/index.html","c8305fee81a02661263690f1b6630805"],["/tutorial-update-history/index.html","45b7bd58e5241faa538414990c1a8456"],["/tyrano-name/index.html","24167065dd97513af81d673c4f4e9c4f"],["/tyranobuilder/index.html","f83fade7abeb8d2db6ac562a70781f9f"],["/undefined/index.html","6dee2aa54a1a9bd28da2ce7396fc6536"],["/update-20221211/index.html","c20fff3e3ed547694f65b93f72718fa9"],["/update-20221218/index.html","0e7e028e2830f07b6c5e3b3e5b46b7ce"],["/upload-your-game-itch-io/index.html","504fea83277f7b4a06e47d9b2eb0475f"],["/use-list/index.html","563e03b53f2a33590dbf071a28d3e7d5"],["/use-nvl-mode/index.html","2f1c6049078cbb8b3c0e63640ae45ba2"],["/useimage/index.html","6dca653e78e27d83a6b95a721ffb0848"],["/variable/index.html","6f6b81265b9e95a05a1170e40f56933f"],["/vnmaker/index.html","95ebd7ba3bbdfbbd604abed448fb5486"],["/weather-effect-tutorial/index.html","7ffb74b6aaba90c9cab1fb9e1cf2e377"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
