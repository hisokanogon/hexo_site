/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","a68b9f0e28cf1d85f9f8cb7ef5ec5e92"],["/2player-battle-system/index.html","4c776bd17605c8cb76fe77d9add4c617"],["/404.html","5e7e03f3c36679584851946dbf539857"],["/about/index.html","d6277b68d8911ec6d274aa8d9c2b6b77"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","c097627e5574617cfcefca134a6f4939"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","1a840dbf22aa8a6f5faf536a3541ac4f"],["/animated-title-main-menu/index.html","bdae9bed472b08a567509f8b88f70dc4"],["/archives/2022/05/index.html","a8086cdffbc98cdcbee73ec18f4131b5"],["/archives/2022/06/index.html","fa7a934b608ba2ef54cdb34b7f365d53"],["/archives/2022/08/index.html","1b91f230dd762158677b671d68d6c6ff"],["/archives/2022/09/index.html","2fef3d229dfdb8b2144a6f1897af92b8"],["/archives/2022/10/index.html","285e487639849670aef6d15e3d391648"],["/archives/2022/11/index.html","89a6a8368cd763058f96eff3f5092d88"],["/archives/2022/12/index.html","17bd80207d325d5a57789540da671c74"],["/archives/2022/12/page/2/index.html","3d0dfa9652c175cdf50780151ce0a1a4"],["/archives/2022/index.html","573b159c66134040d67ced28df39321e"],["/archives/2022/page/2/index.html","a86cfefa86dede06632144bceba61e47"],["/archives/2022/page/3/index.html","d131c3b8ea0b302ecb208134ac85c346"],["/archives/2023/01/index.html","d82afe5ebba9b82ac6397a573ea30ab2"],["/archives/2023/02/index.html","72303e631b92ec00d5d82fe4af4a6697"],["/archives/2023/index.html","242295b9b9b0ac40fc572290a13425a4"],["/archives/index.html","4a26a1c67136b5be7e567da00543f512"],["/archives/page/2/index.html","6d2110514e54bc84b510fcd04e2ed641"],["/archives/page/3/index.html","0371ee6970b1771191396529d043c859"],["/archives/page/4/index.html","889b44659f1c17bf438e3bb0c06ac8e0"],["/artitalk/index.html","da28e28ff04b6bb0a468c376e5894a42"],["/butterfly-custom-tag/index.html","a4b26e720bda0debd2bd330768104bd1"],["/butterfly-plugins-faq/index.html","99fd23cde0c4b38fdbe26dafdb30a7de"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","5492169d3196b1240ed1023eade19abb"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/announcement/index.html","352c76d3cb4796e2709b84cb4ec5ef40"],["/categories/diary/index.html","42ab0d7c4dd6c7ff46a5608f6e7efa45"],["/categories/game-dev/game-engine/index.html","51e685f17b0dd5b65811a9bb8d4e6352"],["/categories/game-dev/game-engine/lightvn/index.html","ea9c1b99d0852b41f1e01ea7f24b454c"],["/categories/game-dev/game-engine/nvl-maker/index.html","0a8e7fdbd4a14c6eb8eddaf650f1bfea"],["/categories/game-dev/game-engine/page/2/index.html","86fc5155de1bc3decf77bf6c66804cda"],["/categories/game-dev/game-engine/page/3/index.html","8b2ad18e1d6f9e1a9d43de2c15fed855"],["/categories/game-dev/game-engine/renpy/index.html","4ede44ba10cc82f90e00a15e7e610c49"],["/categories/game-dev/game-engine/renpy/page/2/index.html","6550b432727c8086f46e40c6ed5fccfc"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","1a72197c7bef6a1f00998b45d42bda0b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","7863c142f5f43c10fe6ada96cf89b6b0"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","78cf4af4f9165fe7afbc87676db71595"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","10ef004365cf778f1ad2d09f3f2f6fa1"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","643e2bab049b8a8df56a467d93195c2e"],["/categories/game-dev/game-engine/rpgmaker/index.html","8e845b8989a993c1aa8078a7ee2d777f"],["/categories/game-dev/game-engine/tyranobuilder/index.html","896beab0f8f5d148801d9f4add9983d4"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","c2ef905ddef8e1c14970316527919880"],["/categories/game-dev/index.html","41881580566c3822ebbe252b6bdde4c3"],["/categories/game-dev/page/2/index.html","883af8e37a426012fd97748569ec8efc"],["/categories/game-dev/page/3/index.html","53eab023c140d8c90a495f41c29d881a"],["/categories/hexo/index.html","d43ea966fdf21cde6b823bf414a252ed"],["/categories/index.html","eb806a7b3c9e01ebefd114b387c2a6f3"],["/categories/material/index.html","cdd36f65e71ba3baeded1bd4a177ee72"],["/categories/update/index.html","bf4ad19b8eeeaa6072574ebcc2617e7a"],["/change-time-according-to-real-time/index.html","6be860f663b961e759f48bdb38dbb343"],["/change-title-based-on-event/index.html","b3a9435977bd2525a6ab43615b4b7376"],["/character-stats/index.html","e64fbb3a490d5f53df1e36d9f6fdb095"],["/chatbot/index.html","a243c1aff2cab8ad981412af3e71681f"],["/comments/index.html","a5e605d11a6d1039d9222a44cf513b0b"],["/create-button-anywhere/index.html","65166091d6fb6cdf0841931c62e1f18f"],["/css/eurkon.css","282836e4b5a332122e37de8ee1d85666"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","f70b4435e722ccb0b43b480386f5c906"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","a2fea249144793830bb848513294021d"],["/css/rightmenu.css","eeb1332586775734d9f7b36076b1fef4"],["/css/siz.css","2036b750c37127c868e7605ded0c2cfc"],["/css/swiper.css","40fa0c94cc99f0e422c935e81385d44d"],["/css/swiperstyle.css","a457aee8bb79e74a44a4020987d80ac5"],["/css/var.css","f561fcb23d43c073b083bd4ad99644c1"],["/ctc/index.html","af56b0b329a90d3ef267175364d781a7"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","2171d7474914b0d49f19e30a6073ce18"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","a170bd815b8326c9b5a0038cd3c4be0d"],["/custom-loading-screen/index.html","ad796b590e6f1dd7331c15acd78f4e82"],["/custom-mouse/index.html","4bebce626b79d1c537bfdd78b4c385db"],["/custom-player/index.html","950b25e77f9d5200141e53a8ded766f1"],["/custom-preferences-screen/index.html","03e6563adca48c8c33f989ebe106a376"],["/custom-say-screen/index.html","9ba583a2aaa2cc7c7be3e5899517147d"],["/custom-title-screen/index.html","c21a35473fbd64114f7c7c2c2e9b910b"],["/dice-function/index.html","716ef39ce468c73855c618d105f9f7bb"],["/friends/index.html","407803314da44c5c56be6a7aeab2a9ee"],["/gallery/index.html","b34b164e0dc61d83f1660cbb26830d53"],["/gallery/photo/bg/index.html","ce773f47b2c7a19d8bd73014ec8faf7b"],["/gallery/photo/gui/index.html","10f1f7134f2ff0d50869f88e05c6ecd3"],["/game-only-text/index.html","9232b03d99ab781c2920bc426b2fb56d"],["/gui-017/index.html","fc875271dc32cc1193699f6f5f948261"],["/gui012/index.html","08eefaf8390f993f5eb9adabe4663c8d"],["/gui018/index.html","f56afc35ae75fa860a5f8d48185ac619"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","251974b480cd5b098f2019c8c87c62a3"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","6f129a7794dd070248f76c52e9ea6700"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","08f285f4982f0e99c4651bc614563a95"],["/images-tip-function/index.html","9664b59524654515b2eaeb2415c11773"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","cfa3b777320d4a2ceebbbe513ce4e0c8"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","aa3bfadbeb6940d60be69ba9c6256ed3"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","9d8351d64563184066c4c5ebecd86d34"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","456194ecf4864b3db4952b608427caaf"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","9cb2d6f25c3f284d5c295144a42fd388"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","eceacd620792975117f1f09ee6022b9f"],["/link/index.html","91f1b08d108963e8734aa864aea66899"],["/make-butterfly-beautiful4/index.html","a065e7af2ab3db6b74418c5db46a77c3"],["/map-puzzle-system/index.html","8593400840a2726a3fdb41276b5fff07"],["/maple-effect/index.html","2e19d47607102d95a8a816da0e51d5e3"],["/memberships-2/index.html","aca16a2a0f70c0f88c2f9ce5ee371008"],["/memberships/index.html","b5a0ada9e261c0ac2b3b35463374f797"],["/multiple-language/index.html","474e9e3464fa0ea31f2aa218e8d50756"],["/new-year-event-2023/index.html","6c249011467eec31e255c83af293ed03"],["/newsletter/index.html","cec1ade23763152f33656a2473000d9e"],["/null/index.html","f3a9f58bfd96fb616055a48b28531e5f"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b1cdfe35422559c7e1fbfece9cbcb478"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","b4ae103fbeea2ddf2aa4994813289efc"],["/original/index.html","bb9f61618a0304b2eec31c568c9d6175"],["/page/2/index.html","b91149b568bb842d3867ad34df9d7d9e"],["/page/3/index.html","41d39c5fe1cf4d984a4c44c819d4df8d"],["/page/4/index.html","7447d51178c9b90bb3226df88e5ae016"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","61256e38387c31ce599b91d394ed466d"],["/random-number/index.html","bb84aa5764908309a2bf67ab77ee3505"],["/random.html","4f39de0501ff992dd9bc60583934bb9f"],["/release-017/index.html","53b82f29d8915c6a5efe4fd4539a1815"],["/renpy-basic/index.html","7c146c991eba407c555a72ef55346347"],["/renpy-matrixcolor/index.html","3664375ef22e5c6bd1795b0feed5e36c"],["/renpy-overlay/index.html","a98eefcce6354bb2a45c47ebd7e0014f"],["/renpy-review/index.html","7b96ca59d46ad6f4a0e3c5c40810fda8"],["/rpgmaker-assets-menu/index.html","959b24e66fff88caf0c352c120d42175"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","1d7d7592f1d2cffda14b52ee27e51e58"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","f76ec2e7676591c33361efeff9192b4a"],["/service-worker.js","1aa7045f0a5052ec1566671dc2034295"],["/side-image/index.html","eb86b99ca0c18873655983b351b65e88"],["/snow-effect/index.html","3712d659486f68587b10e2b39c665e9a"],["/speaking-animation/index.html","a37fdab69a02294c918e9f7e9d982dc4"],["/splashscreen/index.html","4c99f3aabb087a609ddb3525b598b300"],["/sw-register.js","eba4af3e2273c4878f84f1a53f8a56e2"],["/tags/Hexo-plugins/index.html","d8ab80539cab82675c2e939938da5e6c"],["/tags/Light-VN/index.html","8eec487575604025e3935839fdb31c3a"],["/tags/ai/index.html","8b3fdd2409fe2570ef7a0b5d438bba08"],["/tags/butterfly-beauty-diary/index.html","07a03d25a5e23725c0140a78084d1dc3"],["/tags/commision/index.html","ac258716c944cd2ebc6de93351eff13d"],["/tags/custom-hexo-theme-butterfly/index.html","4e1b735afbc78fc0869cf311d4ed905d"],["/tags/custom-title/index.html","b47cd115e691b30a75be7996cf57eb98"],["/tags/dialogue/index.html","fb86a3cb0e1ee16a2ef79813ec9df4a8"],["/tags/effect/index.html","9c4f546729c14a9caf2aa40947996f08"],["/tags/event/index.html","5c58dd44b3df38670ae924c4696ab78e"],["/tags/hosting-own-website/index.html","1ebc10cb26c9a1a4ad5669be4d056f3a"],["/tags/index.html","fddada08b7c6aa54505adfebd2e80510"],["/tags/itch-io/index.html","0bf04583f108428b3001485223281fb1"],["/tags/light-vn-update/index.html","510b2297753f12abc2ad0f0431119655"],["/tags/nvl-maker/index.html","94e22ade4ecd555c321a600bb6545f24"],["/tags/p-tutorial/index.html","b424672bd3bb9d5dc20fa1029b08bcf7"],["/tags/player-related/index.html","2271041e24aba17b57396c983ee85fce"],["/tags/pro-tutorial/index.html","1049bf6f55eccbca04a090547f0dc149"],["/tags/pro-tutorial/page/2/index.html","860e1446674e426797b92a1ddca498be"],["/tags/renpy/index.html","fcf7aabe14bb8dc9784371f12b2bf414"],["/tags/rpg-maker-custom-map/index.html","6def8dbbdd476350f8d11ab64b9c77dc"],["/tags/screen/index.html","26217c87894b228ec9245696c3c2d9ca"],["/tags/special-function/index.html","a4c153e54360ece101c7282d7def13f8"],["/tags/tyranobuilder/index.html","0599d0be05f24c736346022b795f11c8"],["/tags/ui-assets/index.html","59bd904ac89488f09c0601b8eeb214f9"],["/tags/update/index.html","fa599e69a546da420e744b11fc3ebdc0"],["/tags/upload-game/index.html","829b9f0191b6bc1a6e1e0ee0f4892eae"],["/tags/variable/index.html","6e25ee4e1ca8fb6bc980ab835aeecf24"],["/tags/visual-novel-maker/index.html","78d30ab0de03ae03fce7471b7eb1cfe6"],["/tags/隨機功能/index.html","299884198fc7f48bafab81450852ab4a"],["/test123/index.html","3372c1080e80beeed9fb460357c6bde9"],["/textbutton/index.html","5c88bad1c35232ca1baa3f3519f9a51f"],["/to-do-tutorial/index.html","1f61c71aa0935710b2141ede1baa669c"],["/tools/index.html","0c9a9d2456cb9b05c915a9e5fa3f7fdd"],["/transfer-to-hexo/index.html","afe5f0e52c320db221f5b44a91031a55"],["/tutorial-update-history/index.html","83686f95973bd6465203f6bb01b841fa"],["/tyrano-name/index.html","159ae08d42dc88e39a3b86558e96c536"],["/tyranobuilder/index.html","2dcb1742883620dcd6fa372d60dba736"],["/undefined/index.html","0bfb9112f793f5b7eaaf0b051a969e91"],["/update-20221211/index.html","204f0a2285604042841febe3f9b16245"],["/update-20221218/index.html","382a6c17d2095acc4be7d2bd85dc4a8e"],["/upload-your-game-itch-io/index.html","f7f2b9fcb5e0d0939e066dde5ee0b7eb"],["/use-list/index.html","1414ae9f62a78570da3fb7d295582f5c"],["/use-nvl-mode/index.html","b90a3808d859bb028401a14645a1f4db"],["/useimage/index.html","f6a85c9534aaeb96b3c7f5a7d3539f5d"],["/variable/index.html","9e52a818a540322ead7c8c700bdef99e"],["/vnmaker/index.html","2f529f991aa8e67f939e21c4a78255e4"],["/weather-effect-tutorial/index.html","60a8a4995bca859ed96c9bd221c7a446"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
