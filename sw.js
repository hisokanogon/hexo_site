/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","4718031cf52ca36fceab33dea4d28f13"],["/2player-battle-system/index.html","9f4d80ba090351bbcdd715553ee080b9"],["/404.html","1bade14ea9e14cac01cb6716e746e6f9"],["/about/index.html","93e78b481775966bee719a4b5ee6a865"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","d082f59b102b1aded8b0e58a8241b949"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","e11c024622fb39a6cdc8957cc8751e0a"],["/animated-title-main-menu/index.html","18bb7bc14ff970e53b8d59c353a33205"],["/archives/2022/05/index.html","da2e8b6497d05ac7f698fdbbfb1e8509"],["/archives/2022/06/index.html","9c39a87307c767e9588c5044f498fcbf"],["/archives/2022/08/index.html","6d456530d1c23c7c446fa56f062013be"],["/archives/2022/09/index.html","7530c8e30a37fcd29ac2669c68b33372"],["/archives/2022/10/index.html","d7a8d95046090bb94d1403da27690c05"],["/archives/2022/11/index.html","94d2870a54d8213f231cdff1a3fbef53"],["/archives/2022/12/index.html","887bb18079dac96a0301a35c939d6d34"],["/archives/2022/12/page/2/index.html","ea4aa0d0c60055d404b4699d73f413b0"],["/archives/2022/index.html","e8835942de68bb681b2237d5a3807185"],["/archives/2022/page/2/index.html","6ccd64e99b9acc797f7fc389f0a95767"],["/archives/2022/page/3/index.html","eae3753db7034a00f586a437f3c3235f"],["/archives/2023/01/index.html","521bdabd61d8513ce25b24d367e6d410"],["/archives/2023/02/index.html","10febbdace23dc07697ace6ab6c79fc2"],["/archives/2023/03/index.html","2c5119afaf12684a7f6be5cfc78c9583"],["/archives/2023/index.html","7db4b7ef0e06a678d3c92559a25951d2"],["/archives/index.html","f5893bc5371977937c19408420de5d1f"],["/archives/page/2/index.html","a8c3061186f3c437b449db7f022304c9"],["/archives/page/3/index.html","57df4821c80307da1ae51be4511f1f7a"],["/archives/page/4/index.html","6eabda80f0f2d2a8ad252620aae8e8c8"],["/artitalk/index.html","d378a22a9d0d1d6f1b3b4d34cf5636e4"],["/battle-beautiful/index.html","039300c018e7579790cbc96bb06c24f2"],["/butterfly-custom-tag/index.html","ea77f6f66dd22fdfcbf5cb77f68aeba5"],["/butterfly-plugins-faq/index.html","551ca4dc22c52117ced77f0f069b6d5d"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","698619fe3f04c503f977d9f8f419d979"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","85500817022026b5d702196adb5f8eb3"],["/categories/announcement/index.html","15b32cdf01d5271a22ccded55f8d7133"],["/categories/diary/index.html","110e25ea80307542eb5af95374082046"],["/categories/game-dev/game-engine/index.html","54d514f941f29781105e8988303fe942"],["/categories/game-dev/game-engine/lightvn/index.html","423d4044078e674ff88237204f7417fb"],["/categories/game-dev/game-engine/nvl-maker/index.html","b13b07b28895f3ea620e7fa382dca272"],["/categories/game-dev/game-engine/page/2/index.html","08a48bea0dc14280046b586eb74037c9"],["/categories/game-dev/game-engine/page/3/index.html","838a1e60b62701bba1e01d09a4120ee4"],["/categories/game-dev/game-engine/renpy/index.html","0cb0932651091b4348b1df315c1a2b1e"],["/categories/game-dev/game-engine/renpy/page/2/index.html","f10b59e883336e6ec25a5f857a658ba6"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","3212d86d9d627d6450a325e6d17455e5"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","b74e58362e4ccf868027da0e96e05f4b"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","c2cdffa34c2ab345bfb08dc628477740"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","8ab8527e9e061a416a7d79c7defaf7b5"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","dce50c6c50cd3c7b5702f1a87aed2df7"],["/categories/game-dev/game-engine/rpgmaker/index.html","85ce75e148dadb03b2788ff5b06c4ad1"],["/categories/game-dev/game-engine/tyranobuilder/index.html","628138039f54ef292a96b853e024a6bc"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","fcb32ccd09bb4d7e8ba804e7252e2676"],["/categories/game-dev/index.html","61eb3a6ee0f23e59417dddaee75c42b8"],["/categories/game-dev/page/2/index.html","18b6673280db9db42d4604082b0f67dd"],["/categories/game-dev/page/3/index.html","5ad3e4e694ddc16e76f9461f60b4fa98"],["/categories/hexo/index.html","9b44b9372ee2895763ae9ccd9f7e5bf1"],["/categories/index.html","ba2b90069c22a643587026dc4661dac5"],["/categories/material/index.html","aff3caa7435dbbbe37d3abc6a95a9210"],["/categories/update/index.html","b6e38a5e037c7840fe5e2f05f2275bc8"],["/change-according-to-real-time/index.html","e9294faa9b06188b8e3741393ec9614c"],["/change-title-after-first-time-viewing/index.html","0c47097dbdbd573ca8adb6af695795bb"],["/change-title-based-on-event/index.html","326fde216be68f16c87586d541933d5d"],["/character-stats/index.html","b26dd99e35e0ab694f394530db9d0f3c"],["/chatbot/index.html","08145efb5db74cfcae111702dae32590"],["/comments/index.html","7beed0fb40e3e634ec53d1305d051088"],["/create-button-anywhere/index.html","1e089bcece63f89653ac1703ffb2978f"],["/css/eurkon.css","f225e7dbad0cfdd1dab3ced4ad7cf544"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","173e64842f3f039e80be4287508aa924"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","55ae0b05d91a07a30ed34a63f4530ad0"],["/css/rightmenu.css","7b31a675f1854d3be9cd7694c6ac3ec5"],["/css/siz.css","8b3c958257f9a13024ddc6b800d5e956"],["/css/swiper.css","1c06507b3bde59679d0a7aa7ae408489"],["/css/swiperstyle.css","62177b645b2255b519757315c1ae0853"],["/css/var.css","834553ec75bae5be8ecb9797457215e0"],["/ctc/index.html","1984459b6098b24b688dc2ca1fa4a267"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","53ff68cdc1b2647116d8ce1b9c9bbf70"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","49ff0a7cd6823db31a9a7c3634978c29"],["/custom-loading-screen/index.html","c53e89ff84fbb1815f14e3b855b8e296"],["/custom-mouse/index.html","0e5e4e7b6a32827e2ab09a1dc5e6a60b"],["/custom-player/index.html","9e7a99659902d4217548b1d9e9515b97"],["/custom-preferences-screen/index.html","0a4dbc1fcb6e36a172343b7a90335e5d"],["/custom-say-screen/index.html","c32a3fe89d41c5dcf4bf461ff8c41998"],["/custom-title-screen/index.html","37f491f60d2210b28b5fabf90669dfee"],["/dice-function/index.html","6feb1724cde4755a88d1d1f0a418fbe9"],["/disclaimer/index.html","0d9a5fed9359c75d94aca47b738586dd"],["/friends/index.html","7d780196df1f92ec25a187aba450b45b"],["/gallery/index.html","026f0f5d29e81d8af641656ac44125f6"],["/gallery/photo/bg/index.html","462d456ce3736e49c8b9898c9c498d16"],["/gallery/photo/gui/index.html","d73ade0734cc8f6ebfe3b061373a564c"],["/game-only-text/index.html","320e8ac92e5cf29784d24319c408feef"],["/gui-017/index.html","8fdd94cdcb4979f2e820af14ad9365fa"],["/gui012/index.html","c9f16f2f7057f843e6e3770bdef94eab"],["/gui018/index.html","4c6e42f50ed58a81562ccf8f86122d38"],["/gui019/index.html","bd46d6c793522e5261edfe7317db75d2"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e1b387b5ab12e5fe5b3701a78b4b2fbc"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","5f1a2b63bd0f7fc924db30b85cc55c53"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","0df8321e40a89f8091eff9d7ff9faf2e"],["/images-tip-function/index.html","77ba8e16cff4a8165e0fd07c2a5f0455"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","25bdb837934af77c5246fbe91517e6cb"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","9cfee65bf4a56caa103ca34753ed1e55"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","092293dfdc97e6ca1a8010d48d9fea86"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","b467e1a407c7db27f7189739a2288e86"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","2109f3f8343f8aab88e8d4c28bad17e1"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","9e91d1f0710431497d6f9251cbf0e7f1"],["/link/index.html","df8fbb84851be8c2a8337133bad5feb7"],["/make-butterfly-beautiful4/index.html","5ed9a4c3868c8abf6bf6f1fa763f5174"],["/map-puzzle-system/index.html","659015567a3e41da065a64be5c1c5430"],["/maple-effect/index.html","d766b5ced3788ec8734723331ab45a62"],["/memberships-2/index.html","fb84aa63c6732cb9486eb64fa65be3e9"],["/memberships/index.html","b2a88038b7ea2fbd2489e65538bbf256"],["/multiple-language/index.html","0244be2b8be5385b82e6ba54bca0dcbe"],["/new-year-event-2023/index.html","a4633749163803b3298840fcfca71c28"],["/newsletter/index.html","3e9786bfc2d7c60792737bc0d8911f5b"],["/null/index.html","571645af12ddb581586b8a6577b57b67"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","5db48b573cb6717e4ddb7eba942f862e"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","77fb2a051163ba56c648879499f50bba"],["/original/index.html","ba378afa819bae9e21be196c459c5724"],["/page/2/index.html","19f18fe1c39d901869bfb3e9be164c05"],["/page/3/index.html","2aa1e0a9862c75edc5427c6a710d2981"],["/page/4/index.html","0d4076848efe7613ea842d5c01d6aa1c"],["/privacy-policy/index.html","24234e8b8466912c1e47fb1c4c75a038"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","6b6a3d0b3a4d1dab0b4cb6ea4b46ae08"],["/random-number/index.html","4ed6b582144481ea626cb0e6b4aac1c4"],["/random.html","1f3ab3f1ede947d0538e2877e5fac500"],["/release-017/index.html","644918e87e9759d6204606c4f13c8a31"],["/renpy-basic/index.html","ae4d6f63a0b0a5235239ca6c4c504182"],["/renpy-crash-glitch-effect/index.html","254ff125508404e185ed6a8114cc1539"],["/renpy-matrixcolor/index.html","24c9adb6c9038456620006ef071ff15c"],["/renpy-overlay/index.html","ea3a1ca041c400dab2e58cc86071e7c3"],["/renpy-review/index.html","0e98c4310043e14b2d6361c90206bae9"],["/rpgmaker-assets-menu/index.html","4b5e1632e9089a6e955e82a2add35574"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","580ce5ce5074fb5c88b4c358298e066c"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","7fd94a434446ec3f77516a6dcaf89c2e"],["/sakura-tree-background/index.html","bb66062337279d837e3576f6b0d3de84"],["/service-worker.js","c0cdd84249d29c546d6bede6bfba9d48"],["/side-image/index.html","f5868e7708aed671ea7e9d312409f08b"],["/snow-effect/index.html","413a72b102d8e20ca0267c71ff57134b"],["/speaking-animation/index.html","d17f4d724abbbb3ddba563b1a23bba5f"],["/splashscreen/index.html","92a8faa04cd2be69a31a9db0b41dfd4c"],["/sw-register.js","0beb090f518b19b4f6a9cbcd0bb46515"],["/tags/Hexo-plugins/index.html","40ce9214e9d0d37b315eb51780ed2260"],["/tags/Light-VN/index.html","e7745d811ebcd06c1e8dff99e5b03e79"],["/tags/ai/index.html","83310f3ec079f5f54aef59e9f4f7a1c8"],["/tags/butterfly-beauty-diary/index.html","f900293e509d9ab8ceb4d04415902ac0"],["/tags/commision/index.html","d4df673b56cba9346bddba38fb676cc6"],["/tags/custom-hexo-theme-butterfly/index.html","d15937de86af4340557029c803977abd"],["/tags/custom-renpy-title/index.html","9592fb790e18ace7a680de07f426a43a"],["/tags/dialogue/index.html","db4a97bb65cc40d55f58431a311b223b"],["/tags/effect/index.html","d335f0c08aa0f672e2f302d614455036"],["/tags/event/index.html","bdb5570bc69e3d9faa930df326319503"],["/tags/hosting-own-website/index.html","b2ad6f808d9abef8bbd544c5522cab3a"],["/tags/index.html","e5853afaefe0f593d73865744489761e"],["/tags/itch-io/index.html","cfac849db156382bdf8dd920ed088dc4"],["/tags/light-vn-update/index.html","acbeec0659707382f407b3deecd51b07"],["/tags/nvl-maker/index.html","db0599d7010c9b8ce2ce71e8586339ea"],["/tags/player-related/index.html","6611fa40f86b91a37d4504fac8b19c1e"],["/tags/pro-tutorial/index.html","12a4a2e902b795cef01dada1928664c7"],["/tags/pro-tutorial/page/2/index.html","e0b808e84b3c12b3a7fc84cebff8cad2"],["/tags/renpy/index.html","d91f9dd27bd8736cadc7f826550bec68"],["/tags/rpg-maker-custom-map/index.html","2fa1661d942e0559b74b9a934205bb43"],["/tags/screen/index.html","1c17bd38cd73e6355a6cae717fcdf41e"],["/tags/special-function/index.html","3a08a81ff7b52f7233ea7e1ffb17ac5d"],["/tags/tyranobuilder/index.html","0b541448528aed17ffb6dbff806956c9"],["/tags/ui-assets/index.html","a2d3dbdb9499f89ea3fc1d1a42f2c5a1"],["/tags/update/index.html","d2d49ba57db4d8661349fc5c0df159e1"],["/tags/upload-game/index.html","237ea54423f99badf6200100b3ae6b98"],["/tags/variable/index.html","cf469cd872b09de06bc23826f2eaa4d4"],["/tags/visual-novel-maker/index.html","96e7f10ce9fb21eff9b7184282670a4b"],["/tags/封面製作/index.html","6d77b3238fd4f115b64dd19027cc8564"],["/tags/背景素材/index.html","645d2714848f0ac1d000f34e30f131ad"],["/tags/隨機功能/index.html","8c6db405a70754f9feb5c199cfff8f16"],["/test123/index.html","15da7a44d8cdc05b5ac4ae0a8e6b86f6"],["/textbutton/index.html","61c9e38481c71fde7741c30cd76336b2"],["/to-do-tutorial/index.html","10cda6d8dff99cb20528cff7ea2bde48"],["/tools/index.html","916f6ba1a2551e538f835d52bcbeeedb"],["/transfer-to-hexo/index.html","3d240dc9309d951d9367d3f6fef7eb9e"],["/tutorial-update-history/index.html","46f6d2596340bc08523413ae3489625a"],["/tyrano-name/index.html","5599ef6e4d3a09dc7a43c1482a65f9ff"],["/tyranobuilder/index.html","b2796bac756c87727e4c7c989723898b"],["/undefined/index.html","b6defcd7c6e5ae7c8cd05cdb39848725"],["/update-20221211/index.html","83eeace3fccfe10096909a67d7feff29"],["/update-20221218/index.html","9786bce132bde69c7234aefa7807c683"],["/upload-your-game-itch-io/index.html","eb3e67b8695d99742e55a1b2d5ec61a2"],["/use-list/index.html","31ea12a38f910edb8593f0b33fe03572"],["/use-nvl-mode/index.html","cff5ba30d6ad8a973a4076cbd1a989d2"],["/useimage/index.html","0e7620604ed5922d635c8f04c71c0d31"],["/variable/index.html","4dadbd4ec42d193f7d94544a52433097"],["/vnmaker/index.html","42fa09d370f4e8ac9307de587d1a0a7e"],["/weather-effect-tutorial/index.html","50a8ec8388ea718f52226fc729f3a779"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
