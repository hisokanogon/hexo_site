/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","f26a54786215a84eb246804c8ac45fca"],["/2player-battle-system/index.html","2b393666464864dcb687ed23cecc5f07"],["/404.html","d6ed9269f728349f4800ec3e9871b4ae"],["/about/index.html","89de1f1819f452e1fc225a0e6e93fe91"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","790c39ee0726df0f3822f0ea58aeced8"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","dd8338f359f044cc2cf4169cd80c7bb0"],["/animated-title-main-menu/index.html","29577d1c66a073cfddf78f7411933e85"],["/archives/2022/05/index.html","24f53f9813515fd0fd65e5bd65ebe136"],["/archives/2022/06/index.html","49222e118a4cf58e24dd385fc54d6188"],["/archives/2022/08/index.html","1325335b3c2add5f17c35208fece4396"],["/archives/2022/09/index.html","1c7e90c8eb69c63e0f58f78b8a2776c8"],["/archives/2022/10/index.html","e9916f92b1f6fcb359daf2fbedf387f1"],["/archives/2022/11/index.html","65b8b884192f612184553e9cf06a5b71"],["/archives/2022/12/index.html","4ef92ae3da41d409b6331b145e0d1533"],["/archives/2022/12/page/2/index.html","f9da9fec583ba19d9e8a525bda744197"],["/archives/2022/index.html","a9b9e51f66ee5b39bdff8834b169688e"],["/archives/2022/page/2/index.html","91bf26262fbc7ba72828c8b162ff403e"],["/archives/2022/page/3/index.html","60d2fb4ac331d390a96cc62188db4333"],["/archives/2022/page/4/index.html","76236e87f79788d0e6f4597e0fe68d08"],["/archives/2023/01/index.html","f74fa4bedb179f13b5c6ab9328e51860"],["/archives/2023/02/index.html","6c3e91da4a74e7001d43b4b08638b02d"],["/archives/2023/index.html","1df6a41e11173d0c569ad56b92ce58fa"],["/archives/index.html","f4dd45df53d12fa336644d2f3069ac06"],["/archives/page/2/index.html","782883ec511f38bba20bbad33efd01e4"],["/archives/page/3/index.html","b794c6895ac7609b16b21b8f7c55b971"],["/archives/page/4/index.html","6c85adfe6a09eaa0319cbb61cae57b69"],["/artitalk/index.html","3a2313c8f51f17ae58098ca98ec085da"],["/battle-beautiful/index.html","11cbec5defbf8a81ba110119d6e750c9"],["/butterfly-custom-tag/index.html","78875becb90f86bfba8e0f5741428168"],["/butterfly-plugins-faq/index.html","0717fcc07db2c57d788a50eac1252aea"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","31f44834b1de3f59c215f93a9d36960c"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","7bf9e2966b26df47fed5620a8125bad9"],["/categories/announcement/index.html","b15a7ca2f548bb5918cb33df86ae0ce6"],["/categories/diary/index.html","3941cd7ec9ece19c1363cec3f220199e"],["/categories/game-dev/game-engine/index.html","8c627ceab15542f95ee1fe80590a58e7"],["/categories/game-dev/game-engine/lightvn/index.html","6b7535e3b9932b39263fa1a4ae5ec7dd"],["/categories/game-dev/game-engine/nvl-maker/index.html","4de017ee5815fb55968df5078ccc50bf"],["/categories/game-dev/game-engine/page/2/index.html","1585f78be8736040cdf496ffa46cb22a"],["/categories/game-dev/game-engine/page/3/index.html","98366ae43944e8a7923e61d5581edd42"],["/categories/game-dev/game-engine/renpy/index.html","078409b3739f11299dbd9cafb0789155"],["/categories/game-dev/game-engine/renpy/page/2/index.html","a08cb0a98d3eb54c006f4cf61c80842c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","310c23c530583b732677309f0ef4483c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","2e8e20fb658307460bccf7d76970bef3"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","7b5e68512640ecd20a039899e008995c"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","22c4640a310046c91c08883cb51076d7"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","cadfdbe138b588936ad2dbb3a4205c51"],["/categories/game-dev/game-engine/rpgmaker/index.html","288e1ece059685cf049e63c98c0ef688"],["/categories/game-dev/game-engine/tyranobuilder/index.html","12af36eef05efae83400b75e7ac3519f"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","3445a4b5442d06d7237457782b7f64fd"],["/categories/game-dev/index.html","e671c4cc1b353921c0562f8b338cca57"],["/categories/game-dev/page/2/index.html","a22505df563929acd58ab4091ae14c47"],["/categories/game-dev/page/3/index.html","2d831c49769b588449adb3eb91aa5955"],["/categories/hexo/index.html","b583fb87fee88ac34be2432e11f2f8cc"],["/categories/index.html","1c10c9eea383a29fa3c0644c7acd83b0"],["/categories/material/index.html","7fb0eb7bf0d3bc4453aa25ffb7638278"],["/categories/update/index.html","3f5066ef3670e388bd09f2ad186799a8"],["/change-according-to-real-time/index.html","a3d94288510920d21af885ec638a9ec6"],["/change-title-after-first-time-viewing/index.html","edc8a5170b0c44e592c1b946826bcefa"],["/change-title-based-on-event/index.html","322335020747b041e8f6fb2debaa9d3e"],["/character-stats/index.html","fb9ccfe3a75e46ed9c0e4c5aeae25a17"],["/chatbot/index.html","54c15f1bf9733cf4076812b4ea389626"],["/comments/index.html","47038750ee9f835fa3af2a76ba384af6"],["/create-button-anywhere/index.html","fe7f1c73790b8d21738dcf0da9e1ca96"],["/css/eurkon.css","319c24266336bc8c92e2d1ead9bf6714"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c8dc1d93a3ebc8f27003a231977c3663"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","8da7d2dc33f68b4c6072687fc73ad22b"],["/css/rightmenu.css","11d8bbc3c694c1ac0516839fd4480491"],["/css/siz.css","37ae1c6cd7f6a06687c9d48224bdfa18"],["/css/swiper.css","b2434529cfc7dac352c15d1a294f582e"],["/css/swiperstyle.css","510b9e8f8a76db6ca49376ac2c4c17be"],["/css/var.css","e7dff9ef53c9f372f85ccbaaa66ce0ba"],["/ctc/index.html","bf36c879c2da77ee2959679b07b439da"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","910fe957915f40b605f9912cf294fba4"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","2628cedc4a507c9dfe771bb880ef3cdc"],["/custom-loading-screen/index.html","a3e949fa8883807bc2a76d16412d33f6"],["/custom-mouse/index.html","8625390e1eb25454c8c8a0140dcd1a7e"],["/custom-player/index.html","e894c566032cfcd849c714439f73d8fd"],["/custom-preferences-screen/index.html","2f9790e19cb7a64607d6ef57069b5427"],["/custom-say-screen/index.html","8d5671e906a50b6ee0a172d73b8beb0a"],["/custom-title-screen/index.html","b67358fc3f3677047ac0a76ad4fbc56d"],["/dice-function/index.html","e2934e0fe925c819c9b7fb45e5fd3af2"],["/disclaimer/index.html","0b24fbf7ded61fe5d05f45188da97c39"],["/friends/index.html","c83f4b545044996ca0178285251e3a52"],["/gallery/index.html","74ab302bd1c353aae187663690300397"],["/gallery/photo/bg/index.html","6b9337141846bae88c86ebcd905980b3"],["/gallery/photo/gui/index.html","3a7820c4d5a5f5797167067e0d09c0bf"],["/game-only-text/index.html","1987e576e79c648ce3a80e140a35211d"],["/gui-017/index.html","8706abfe66d3a7153718800605de1cfb"],["/gui012/index.html","15865530c7d1cda22818ade5c0e85774"],["/gui018/index.html","b443abc08d2a97c60a31792eb52ac067"],["/gui019/index.html","6f346b8036f0991d734acba8d118d0d9"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","80c8b621872702a71b12e1c020f0efe5"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","8d798e61d71e7287bf56f18f6e91ecfa"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","de133c75528fad88f4e392d6d18f8e5f"],["/images-tip-function/index.html","b644bec7522dc3721c40cb814c889857"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","437d1e6c62ce034739d57697e0f203d3"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","008ab1f216f07e18c6f0080f8254220d"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","3fe09fb831cca84eb531be02e9239b97"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","acd7639f966d3bc961bda1c79f44fd80"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","17850bd10ba9b4ed78ae79ad49c8248d"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","513f94551d804367af345cce97ceea37"],["/link/index.html","3b4f72569780e3d8e5b8af6971772c23"],["/make-butterfly-beautiful4/index.html","2a8141a32f4563e0265c8fdf03c6a657"],["/map-puzzle-system/index.html","70f3bdf89f05940a00d4ac6b3ab9facc"],["/maple-effect/index.html","23c020cc83d8429df23d33fccffbcfbc"],["/memberships-2/index.html","129395a8a3ca44b52dc01f2d783c3962"],["/memberships/index.html","ae520cf427cc876b883aab3ad46fd375"],["/multiple-language/index.html","e3643a1c67969c95f445dd883e903257"],["/new-year-event-2023/index.html","8b077053fe9ac9b9bf6a7c497a3a79fc"],["/newsletter/index.html","dd6ff28746bec821bd47a0965870f975"],["/null/index.html","ab63aaa5cd798d462a410ae69b35bf25"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","7a1ffd58491eede8db787f43e50e8212"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","9c62212b373192010b94fe57c17819e6"],["/original/index.html","05e1f81a384c78a1e9618b866c1bef23"],["/page/2/index.html","6935923862fb8415d897648b905663d3"],["/page/3/index.html","76bca36675f6116866bf4c4841f6a4db"],["/page/4/index.html","d3236715eec774ed92f1d473dd31ae9a"],["/privacy-policy/index.html","031f770d12467d865a8a86077f3aa146"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","9de9c5356cf018c087fd4a0767919358"],["/random-number/index.html","e0c738a6235af0f949ab0d029f0aae9e"],["/random.html","de7897895fe6c21f9616dc97b6fbc4a2"],["/release-017/index.html","a351f2990aef5356f5d406941572b9c4"],["/renpy-basic/index.html","06afdeb2459bb2e95055d73840a88975"],["/renpy-matrixcolor/index.html","8ee7e004555e29eeab3520d327cbc62f"],["/renpy-overlay/index.html","54d739171cbd8d33244a8d28335285bc"],["/renpy-review/index.html","ad71e2f46305b8d7733c27a5210cb940"],["/rpgmaker-assets-menu/index.html","f2704b9d1d8508bd8803d10d29d08603"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","af97ab5e91583e8fb94c943cd7a5ce27"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","db00bcaf09c5add1a55802d0eb4f9fd9"],["/sakura-tree-background/index.html","6078e18e9f1c22260b6861257c7abd47"],["/service-worker.js","7847818a89ba600e3b5052dcf64e3239"],["/side-image/index.html","d795a5612eb3ce124506ba0b6cd33911"],["/snow-effect/index.html","3bf39b6922da4e1c6af71e7fbd1e2924"],["/speaking-animation/index.html","d11f0e9fe31839d90efb23093f99623b"],["/splashscreen/index.html","d9bfe2b06bb3f40c7043d841c4b50779"],["/sw-register.js","675573a4b10d02d10040d2e10f7e7187"],["/tags/Hexo-plugins/index.html","ed3e8ffc80038203db0a9a55aa7c01e9"],["/tags/Light-VN/index.html","2510460ffde574e0120b887c7d187a04"],["/tags/ai/index.html","426d9951a0732341290c55871cdef8ba"],["/tags/butterfly-beauty-diary/index.html","e5a247294ea63f712533ee8e2ea947b5"],["/tags/commision/index.html","57b110d7fbc1e79eac493f6543dc63d3"],["/tags/custom-hexo-theme-butterfly/index.html","478a6caea59965774fcf9dc3aa878a5d"],["/tags/custom-renpy-title/index.html","6c273c971953ddb75cf2a10e03c1aa3a"],["/tags/dialogue/index.html","ce93a6337e826bdbc5537133c38db80f"],["/tags/effect/index.html","9d4282d1ea5320a1ef34033e7c772fe4"],["/tags/event/index.html","cfc8ff7ac654fd7d6c0ac146d24c2414"],["/tags/hosting-own-website/index.html","9c48f7d4322f9c304896eb585d55d5ce"],["/tags/index.html","d6fc3e89c77af9729bccdfeb66c2148d"],["/tags/itch-io/index.html","4fa7df0e7d7530de50785f63c770a8af"],["/tags/light-vn-update/index.html","e490c043c3836595a4d5410606d3670c"],["/tags/nvl-maker/index.html","0d046dc279fe2a610490e4438701da51"],["/tags/p-tutorial/index.html","2d6f8daa9da57ab1b55363b56584819e"],["/tags/player-related/index.html","3d044625af622c25035228c72bf0f77d"],["/tags/pro-tutorial/index.html","56eb1b71a9659d7f65ef8486d1ce1b08"],["/tags/pro-tutorial/page/2/index.html","aa19d38c192184590c4a358170bb0c53"],["/tags/renpy/index.html","772a3a423e96bb3622c70d524d19a810"],["/tags/rpg-maker-custom-map/index.html","caff879fbc193abbaf6b5dfefe6dc4f4"],["/tags/screen/index.html","a80d118fd46b0071454b7159ddca7534"],["/tags/special-function/index.html","3e218ab30075c395b747aa74d9b5fe96"],["/tags/tyranobuilder/index.html","73eb5a83972ee52460bfdb94928520cd"],["/tags/ui-assets/index.html","edcf6156b0913d4eebbce1abac24a8ae"],["/tags/update/index.html","794404904b72d9fa86feb0b35a5572ca"],["/tags/upload-game/index.html","3d5df392ddf6ae05d6a0ab043dd4f813"],["/tags/variable/index.html","5367b1e7e926720d6a98452583f398d7"],["/tags/visual-novel-maker/index.html","9799437aef5e45e78f7859867f5c4674"],["/tags/封面製作/index.html","d6f4f42b8d609ff8b2ffecf5bfc0a4e3"],["/tags/背景素材/index.html","77ddd11593fd9a73a65ce65abc14c90c"],["/tags/隨機功能/index.html","30cb7f604d38da0b24a3ab28a40b0987"],["/test123/index.html","03a7d46fb562b69e2e87a25e83b29547"],["/textbutton/index.html","6e3910e3f0bf2631882f7d28149bcbb6"],["/to-do-tutorial/index.html","4629fbd2c8ff794e68b9ad3f296d834c"],["/tools/index.html","5ef7e98842cb828fd6224ce921545b3c"],["/transfer-to-hexo/index.html","ce982875d04c0812d2a3c0c978213b84"],["/tutorial-update-history/index.html","525187f87f262443f885ad33b08296f9"],["/tyrano-name/index.html","7cc3a5264d1ee4dfa5d00f24308939cd"],["/tyranobuilder/index.html","c4f74d743da404c00081b3209868c1fe"],["/undefined/index.html","e83d32e958fff3b4a346dc7e68879e3c"],["/update-20221211/index.html","d2ba885d2256fc5f1785d8e372c2b34e"],["/update-20221218/index.html","c50ccba242f191319e064d7d5d104083"],["/upload-your-game-itch-io/index.html","eddabde6ba1167295c53577379da203a"],["/use-list/index.html","54dffb304cd034359e0e23149620968c"],["/use-nvl-mode/index.html","b71970a5a765fca2e1e587a3c2a706dc"],["/useimage/index.html","b3d4123741b6ca5e818381671297e2e2"],["/variable/index.html","c88b1ef0a4d2fbabd37bbe6772e9ec2b"],["/vnmaker/index.html","57d984269f57043ebf345c13e8f811a7"],["/weather-effect-tutorial/index.html","39cddffe529eec547584943055a4c6e3"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
