/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","570d595de016b9f6d1336ab894d77496"],["/2player-battle-system/index.html","fb7f0d8016d3c3dca00485870bf4ae2c"],["/404.html","a504216eea94e605fa8ba49030099371"],["/about/index.html","92ddef126b5f4c13995c1eff7be54d19"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","fc59c399cae29fd2f5bd08deeeb26cba"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","2f2924bad10530c44f0c8fd2755d2bd7"],["/animated-title-main-menu/index.html","daee3ed7216b48929764b911bfee4ba4"],["/archives/2022/05/index.html","4a06dada979ee2654bc8d420bcfe203a"],["/archives/2022/06/index.html","adcca21b785eb05bcc7ff93c21ed109e"],["/archives/2022/08/index.html","8be25cca711a0767b6593e233b277ab1"],["/archives/2022/09/index.html","fdeed77d714e069ffa9f101db97e8604"],["/archives/2022/10/index.html","2adb947cc9ed0de1a5eb20c7970c8798"],["/archives/2022/11/index.html","bae36e917d8d2d90dea787ff877a68fc"],["/archives/2022/12/index.html","41eeecd021d338646e1c719b68b42197"],["/archives/2022/12/page/2/index.html","82762c602980546e4f29f5382dda176d"],["/archives/2022/index.html","7a8c18508774cd3490a8d2f2dcbbd2c4"],["/archives/2022/page/2/index.html","93f6777bb0c638e94aaba5fcaacb304a"],["/archives/2022/page/3/index.html","71e33cb139faa086389506bcfcc94840"],["/archives/2023/01/index.html","6b007e1b96e2773655a69f92016bf6a6"],["/archives/2023/02/index.html","e941a72efed3260cbe6fcc95a0a9719a"],["/archives/2023/03/index.html","efb93646084d8c99acf7db56bad78776"],["/archives/2023/04/index.html","f00f7819035db000bf08f46af59a1245"],["/archives/2023/index.html","7e7fd236764d60000bd8eab8a63ebf23"],["/archives/2023/page/2/index.html","e389ebc6ff7012dbe1d384b1320d5aaf"],["/archives/index.html","97c6415bf764691ec156917c7079870a"],["/archives/page/2/index.html","9d8a0815b68f18e6349b2a26e0bf12a5"],["/archives/page/3/index.html","626422068dc051f977cb0a07b80850fa"],["/archives/page/4/index.html","7c3174e8eeb6d36c8539c914de7ae770"],["/archives/page/5/index.html","af25629224b435ce211344b017c801e9"],["/artitalk/index.html","0c4fd49b82b14bfc2161b0f1d84fe25b"],["/battle-beautiful/index.html","38068b0851c3a4046cc520de372a8e61"],["/blur-effect/index.html","27aae167eddfadb6a5097df157c2d8eb"],["/butterfly-custom-tag/index.html","98ba4e1bb701bc2d4c58ce744b3ceaa8"],["/butterfly-plugins-faq/index.html","f756bbbb4eedd79b59ad684bd561339a"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","8f3f38e01c9cdc3bfe157c1ef4497c31"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","9aa9f1fc3021859527a5b05a79a20559"],["/categories/announcement/index.html","cfa3e6559ae9c884483fa8f57b368846"],["/categories/diary/index.html","f08eff6911be6389fef687bfb0aa8758"],["/categories/game-dev/game-engine/index.html","58a560b997f6793c0e86601fe2e5ed42"],["/categories/game-dev/game-engine/lightvn/index.html","2c76061864200066901ba625d4688b4b"],["/categories/game-dev/game-engine/nvl-maker/index.html","234eab7061bfd914d30c89d58dcd074e"],["/categories/game-dev/game-engine/page/2/index.html","400cdd8e7060cc49f79da3c7551a2a76"],["/categories/game-dev/game-engine/page/3/index.html","d6717db3ebcc8dc1ba3ee1cc1d7bc7c8"],["/categories/game-dev/game-engine/renpy/index.html","821e669db54498b0cb099b317a450cc0"],["/categories/game-dev/game-engine/renpy/page/2/index.html","7b522143496f32d0eb676ba78d622229"],["/categories/game-dev/game-engine/renpy/page/3/index.html","2a473f778443b142040b95b6414c1a97"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","7e3455d1972d5a11dc8be22fcd94a6df"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","e8a394224dfe9414f0fb6eb3918002eb"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","5c46137a431a0ddbf5fb499f61c931dc"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","2206ea9bfa493033ce87e7c2fff4904a"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","e7d6f2a85ee6a3e10b4baef132e07fae"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","d014fb7160c045f979343fd0c0309393"],["/categories/game-dev/game-engine/rpgmaker/index.html","040d8e80b4f2e78ce7d8de372f0ee15d"],["/categories/game-dev/game-engine/tyranobuilder/index.html","e54d5ff001cc86a0e488fd48b08c4582"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","5429b19fa2591f8109b84c0665f4c718"],["/categories/game-dev/index.html","f7ddaaf7072d2274939e98e6ec83eb6e"],["/categories/game-dev/page/2/index.html","74f6aeabcf812decc8a8bf4a32b60253"],["/categories/game-dev/page/3/index.html","0e9ea067ac9d1bd7651feb4171cf436e"],["/categories/hexo/index.html","bfc37bb71ef04cf9933f62ec2dd8e868"],["/categories/index.html","bedff4db8a5912a5ff65bdd4191e62c2"],["/categories/material/index.html","59cd0ca924adcdd57b9f6b7568c054d5"],["/categories/update/index.html","95f32ec958844ea31939223d3deb6188"],["/change-according-to-real-time/index.html","d2aa561be3f1497e33c90938510bee96"],["/change-title-after-first-time-viewing/index.html","23fd9cca3226fc7698e28bc432263124"],["/change-title-based-on-event/index.html","95b7797905ab3b18104ceb1668f1a8f9"],["/character-stats/index.html","be74a02ce6e59cf3eb8799849f1054ce"],["/chatbot/index.html","2f11813a19049edf4c782395766c02fa"],["/comments/index.html","2b67b5cea92bc9772a8ec81a2af12ab5"],["/create-button-anywhere/index.html","3a9d7ae4748cc53242872f7758d86d07"],["/css/eurkon.css","7ffb8d1bafe00cd8ec9327bc1c8fbf46"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","fd459e75d61c811c53e507698c4a3755"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b0a4670cbe71e4e8753ba32c9b91d14a"],["/css/rightmenu.css","744bc24a029377d312caae13f08485c1"],["/css/siz.css","f16728db05d0407bb7006c651f2eb763"],["/css/swiper.css","880f7ce07f0e71c3f20c662d176f9410"],["/css/swiperstyle.css","166389cc4799d94d83e039d4a2a2ee8e"],["/css/var.css","9f2488db9041695425255872a724e698"],["/ctc/index.html","66c70b11d443d97fd21094e0c4a3f411"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","dffc4a6e42dd2060d64123d1c33b0820"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","5edebf613095812190c0ee95f1d37b74"],["/custom-loading-screen/index.html","296997c86b2c1187ee0d7f7240279032"],["/custom-mouse/index.html","ab7bb839af365ac4502f87f52146adf9"],["/custom-music-room-screen/index.html","3e5e6bbbdc71dfe240708935a286f84c"],["/custom-music-room-screen2/index.html","2bec3b86eb54abcf96a563617949e931"],["/custom-nvl/index.html","00728d1d2f9c3e9e75fec34e8e539929"],["/custom-player/index.html","2fd61ffe5ad8ca1f4f7407525ebbf55b"],["/custom-preferences-screen/index.html","9058ebe76b3adb315eeeea939c1842c6"],["/custom-say-screen/index.html","7d32eea42499ec378643b6f3ec28f12d"],["/custom-title-screen/index.html","3c7b52adecfd635d5b02c66235c66621"],["/define-npcs/index.html","e0632e9334391a4a4bb69703f46bdcff"],["/dice-function/index.html","abdc3ee086b779e8416b572df16925ba"],["/disclaimer/index.html","f90c036f5f4ab7c72537d5ce7acfd0d0"],["/export-game/index.html","797810bf8491e8cea872c6ff91de2aa4"],["/friends/index.html","1d21ac90303e79510d2f947d2c2741f4"],["/gallery/index.html","8b224ac3f45aeab56f74e4f15351969e"],["/gallery/photo/bg/index.html","05d76f4af7af7d2e6edef59d1b540bb8"],["/gallery/photo/gui/index.html","41eb85846505fba79f4d95129112b4c9"],["/game-only-text/index.html","1d1f926d1c3773a21a6a2f57cd6450a9"],["/gui-017/index.html","e5bd40f82b38dcba72889619205889d1"],["/gui-vertical-002/index.html","27df97086c70300c8293a0bdbc255c51"],["/gui012/index.html","cade638cdf26587a0ec5e2845f19baaa"],["/gui018/index.html","e05e2b3f6b6186b8c9c3db12616fdaff"],["/gui019/index.html","39df8f49226f159de7aac4b5a71ddf24"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","3ac661863fc5407b02ab6928b5b29bf5"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","a3befad6b6944c982ceabbd11780ca91"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a287a4da6e58dd4878efda7447402b38"],["/images-tip-function/index.html","80000a11db79838906d6631fe53f886b"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","2c40b4a4fb4cf6260b25716f23de5be6"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","118854d8dff006b832892d5f5f6d5196"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","a6a060d63d29bd26c6b84e5a686dec98"],["/items-sprites-effect/index.html","543f4549135893f82ca00aa294e0b5b1"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","c46050a865691962bf08ffe3e0c9a3f2"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","b2a3200cf8ea8d34440389954ec1245f"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","be9f03c14be19a5aef8d36289fde676b"],["/link/index.html","37b7223cd730ea8882fd1053d576ae10"],["/make-butterfly-beautiful4/index.html","0be3bcdf47a79e6b0971cab1d1ea48ef"],["/map-puzzle-system/index.html","f008355a43f114c33db80dfc9e727f98"],["/maple-effect/index.html","f1229655e4d47eda6f2d6152f5aab515"],["/memberships-2/index.html","2723ad10f71895c105e652545f322253"],["/memberships/index.html","ed0f0bd40e96ddebe1517db8e2d90aad"],["/multiple-language/index.html","0e239ec2df194bb940ecc29620c2af14"],["/new-year-event-2023/index.html","e7c02e52f70beb09daa858e5dd1d536c"],["/newsletter/index.html","9a7df2c2b37029760f85cf324caf4e4a"],["/null/index.html","af24d410f4f1e224940571039152ac9a"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","e305938dc6a1cfb7803825d2294e8bfb"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","c3e4f990b9ba69fd7e3a0050336e9cd2"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","4abe147ecc98fda8a22086405ece59f5"],["/original/index.html","93ecfd0c5f6968776890017f7500a618"],["/page/2/index.html","bc61bce68272c3651515fa115dc8ab74"],["/page/3/index.html","2dcb77d633a0bc9481e8674c8128fdab"],["/page/4/index.html","e28a542c60a437f05d34a18361d8a5bc"],["/page/5/index.html","05ed6bfa92ce3322a396c4a29122dc6e"],["/privacy-policy/index.html","a44e483910ee55838385c85d691dc692"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","2e12cc621438ce87ccd9fab649b2b8a7"],["/random-number/index.html","af1ccf2a98664d91f3428379149c3a0a"],["/random.html","1decf6168201d42714e498d4b0048bec"],["/release-017/index.html","0852ffbb0ecfd3af8dfd9776ebe357fe"],["/renpy-basic/index.html","6c74ca5e3063f590c08c1fc69e22c5ce"],["/renpy-crash-glitch-effect/index.html","e2895ae4384124bf53852daaae297911"],["/renpy-matrixcolor/index.html","e4dabdcd9ae09ff8f82e2cf8c1af6101"],["/renpy-overlay/index.html","2ff79b4a3e1728694bab623b9ef5f181"],["/renpy-review/index.html","3ab98551829331647d2d674c80dcf389"],["/renpy-typing-effect/index.html","ec67cbd94a8e5b9a3a1fcbd6bee87b54"],["/rpgmaker-assets-menu/index.html","414b620a0cb4a109472d34f449159c3e"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","03d636b7abc1c268e4ededbaa87d28ae"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","0ff200a4a55541fc098220f224589796"],["/sakura-tree-background/index.html","ce58d223649007a1ce5c264805c1cd20"],["/side-image/index.html","d1ffef61cf691bac7037e04ddf6f81e2"],["/snow-effect/index.html","f682b3b04a6add4a980440c07919b7af"],["/speaking-animation/index.html","49a7a1b165c60c93a0bf7807aba1abb8"],["/splashscreen/index.html","889d178c8cea73aa30123c38f5f854ca"],["/sw-register.js","48b6361bb757d9d6290ad5062ca61cdd"],["/tags/Hexo-plugins/index.html","3e82d0d910bd3d20ac5a18796c3ed41b"],["/tags/Light-VN/index.html","d1d6f5cb3bd9fd919f67d01f20e81943"],["/tags/ai/index.html","01a739c1e0960b6a0015efe6f351ee10"],["/tags/butterfly-beauty-diary/index.html","709c232748dfbec3bfc0cb23a6d3a8ad"],["/tags/commision/index.html","ba6a1bba1cc3712b1435613df218a50f"],["/tags/custom-hexo-theme-butterfly/index.html","e45964d341c16fce288ddea67fa886c4"],["/tags/custom-renpy-title/index.html","808148390528c7802bb02c39536a8d87"],["/tags/dialogue/index.html","991d00360c8a93b77d46ff29a2ab25a0"],["/tags/effect/index.html","c3ba68acabcbeda4fe7245ab09e4cc15"],["/tags/event/index.html","1cc9e13ac7f78860a7d03f0d5556fe8f"],["/tags/hosting-own-website/index.html","3a6ce25090013396a18129ad87438c10"],["/tags/index.html","fe6aeee46a17d11736ca5e734cd36a02"],["/tags/itch-io/index.html","cbbeef16b771785405c3bb52646820b4"],["/tags/light-vn-update/index.html","02715b643f5725e6eb11968acb61a414"],["/tags/nvl-maker/index.html","d42f544d85f7c4c52f0d2a2b6c8ab942"],["/tags/player-related/index.html","4446c2dc5d01802db8273bc0dbfbc686"],["/tags/pro-tutorial/index.html","9aef02ef5bbcaaedf7cdeb23fe8cec9a"],["/tags/pro-tutorial/page/2/index.html","13c8314c9d2d4c9474146449cccca4e6"],["/tags/pro-tutorial/page/3/index.html","8e9e69ee910878a0f8a96e0b2f44a8dc"],["/tags/renpy/index.html","53bb8f8a3fee17eb60640d48f23b9657"],["/tags/rpg-maker-custom-map/index.html","d683dff5bbef92cbfe524d7226aac046"],["/tags/screen/index.html","8244ad7fc319a23c4156a020aab4022e"],["/tags/special-function/index.html","35fd4e9abe77842a1191eaa879c71738"],["/tags/tyranobuilder/index.html","19f6d15b650566b293d91187b90b436d"],["/tags/ui-assets/index.html","22032c4a0dbe0275938903fbfd58fd00"],["/tags/update/index.html","d20e755d3879ec023de697242b4d90ab"],["/tags/upload-game/index.html","0483c3c0a54f4a7a0c1f184d7496667e"],["/tags/variable/index.html","d423c6e133f61e40780d8521312802a5"],["/tags/visual-novel-maker/index.html","dcf19d6308f2e14111640d06ffee70f3"],["/tags/封面製作/index.html","51eacdac51bf87b2b23e5308813618ff"],["/tags/背景素材/index.html","4fc5f9a4afe20bbd336553f1a13d2bb3"],["/tags/隨機功能/index.html","6c735349986ab2ab77abb2fba856691e"],["/test123/index.html","03ebf2482150cd42fb74b91d20ebf303"],["/textbutton/index.html","85cc8ccbc3a95dc746b12ada013d241f"],["/to-do-tutorial/index.html","7138f5e0988e4a6ca0bf4200f9b5d45f"],["/tools/index.html","1229db42aed0d0b5fd11e571dad3f1ca"],["/transfer-to-hexo/index.html","d9cc65eb4d3e4d9debb36bd33721c4e3"],["/tutorial-update-history/index.html","4e3c97e076b88163b84d453d43750f9b"],["/tyrano-name/index.html","40c52bf7980506994c83153f6280c281"],["/tyranobuilder/index.html","c5096c1dcd24dfd3637a7532673dcb19"],["/undefined/index.html","202efeb23d187749ed4e8ae2aac375d6"],["/update-20221211/index.html","8a70325a23c497d1ef7ab47b57c4b4f1"],["/update-20221218/index.html","a7aab567ac9d065280a55a155dee6900"],["/upload-your-game-itch-io/index.html","c631af4f6e36c7f1be2689846dfb12fa"],["/use-list/index.html","b7fbc9f3341bbcfdb2357b71a591e2d1"],["/use-nvl-mode/index.html","0bc0266e13b368af35964f4c22cc4cdd"],["/useimage/index.html","979a951738ca9cffd3cb15fa307454a2"],["/variable/index.html","e8cc3fc7671959d143046322acaee4a9"],["/vnmaker/index.html","d00cd1838ede6e6fabd212eb72e5c7a8"],["/weather-effect-tutorial/index.html","6b1387196a840f64493536e4d2a70f67"]];
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
