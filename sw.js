/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","17c6d7d354cdefd996923aee49eba13e"],["/2player-battle-system/index.html","7da81d24be20bd3cf2a1d47095f0d0c3"],["/404.html","abff836bded7b6b26a17362dab4fac8d"],["/about/index.html","bef9e8ffd15a735d35294f8cbef7f5d3"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","d4fb548553e7d4992487afa58a8b4c2e"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","78a574e94b2160f4c3bf976a7cb85c52"],["/animated-title-main-menu/index.html","692cb287d7a3983962e0b67649c7546f"],["/archives/2022/05/index.html","c1e0a2ae5d7b0884d90dc1923a152e25"],["/archives/2022/06/index.html","665264d86c95b1368a6ca2849c094dab"],["/archives/2022/08/index.html","df79aefabf32491fd00f38a2eeb1fa3c"],["/archives/2022/09/index.html","7c39614f07cb9bf236bcadad06fde06a"],["/archives/2022/10/index.html","8e73dd0fc7c3b591f46e938f1b227dbf"],["/archives/2022/11/index.html","712228fa2fd416411eacf805885b31b2"],["/archives/2022/12/index.html","2298c3749ed6a6de08a50ae65671e38f"],["/archives/2022/12/page/2/index.html","3ce462f213c54b4536a565b8a19939fc"],["/archives/2022/index.html","9dc191b5dd6c5e601289b9f310a10459"],["/archives/2022/page/2/index.html","98b9886ab4c9ae7dcda8ea50b74b169e"],["/archives/2022/page/3/index.html","3817da17850e72eb3d9d5e872291222a"],["/archives/2023/01/index.html","28211089d47d4f5a0dbc22784a40a904"],["/archives/2023/02/index.html","2b27e2d555c760fc94310290d32ea718"],["/archives/2023/03/index.html","e995e7b3048926623d84c48c66e526b4"],["/archives/2023/04/index.html","d515b61c7c524b31c90f604bd14c88d1"],["/archives/2023/05/index.html","2ef1309e059b664aff5f7944e1f6833d"],["/archives/2023/06/index.html","17690fd4244691c4e9cffb2669b1d0b0"],["/archives/2023/index.html","85d5081ceffd0c5c69d94e2a8a626624"],["/archives/2023/page/2/index.html","f5218b5afae9c43c4084484586ee9b1a"],["/archives/index.html","0b3a5524cba1e3858faa4c40dc744dbf"],["/archives/page/2/index.html","4d2acabe3b1d5facb6ebe1dc89c0b916"],["/archives/page/3/index.html","592551a433cf42b3b38a64e2600dfddf"],["/archives/page/4/index.html","95e9ecd19933ad6d980b505797b865ed"],["/archives/page/5/index.html","c9574b3d93212696a393204a333c2b9d"],["/artitalk/index.html","9496932acc9b3bef21f62d6894b984b5"],["/battle-beautiful/index.html","234afbdc8c0c3af53eca1b0d67868484"],["/blur-effect/index.html","df04222a200e0876926b8c9fce98ea02"],["/butterfly-custom-tag/index.html","ce6fb003ad98af4dfb83060f1328d6dc"],["/butterfly-plugins-faq/index.html","84e44a2f657740853c38a8381cc7d91c"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","2bed9ea2668005080f15110d0cabc361"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","1fc15c77e524a94c70a36e35bf98f8c3"],["/categories/announcement/index.html","f227036fd8f85b645f3cf4c85d1a6e24"],["/categories/diary/index.html","500a6ffb5edf16c1385fc619e9aacb6c"],["/categories/game-dev/game-engine/index.html","564b9b42389c6dbef44a6c538e09ffe5"],["/categories/game-dev/game-engine/lightvn/index.html","c53aea968fd177dd767718f21ebf6faa"],["/categories/game-dev/game-engine/nvl-maker/index.html","206f4b2b2ffadf5de34c7f745281a69e"],["/categories/game-dev/game-engine/page/2/index.html","1c0f08acd0dcd0d8bda505b07269b795"],["/categories/game-dev/game-engine/page/3/index.html","93711332418c4706936195ff3332ecdc"],["/categories/game-dev/game-engine/renpy/index.html","654676aea03cef8c612bfc74d64b3df3"],["/categories/game-dev/game-engine/renpy/page/2/index.html","d13ad521e9aceed724e0b6eeeecc5a0f"],["/categories/game-dev/game-engine/renpy/page/3/index.html","2fc03ab9d4d0cbf8945f12c43a579347"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","86d6c53197d29fda11c008207554401f"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","532c6e6428d0c2bf73a06f1c1343d643"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","cf6e9d3f1715aa7597804e094175e42d"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","4812ae50bf05f585191c2b56d496de32"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","452154acb1f480bdb5f274b17d492e48"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","1f433aae4697809b10d6be5e47a18310"],["/categories/game-dev/game-engine/rpgmaker/index.html","019acefc648c2555c8156d7eec4ae6f6"],["/categories/game-dev/game-engine/tyranobuilder/index.html","75e0df06fe1a4cbd2f4e2f2ea7747c82"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","90eb37439b58c69ea8112f38a918de71"],["/categories/game-dev/index.html","f250d8fecda9cb61af057e0e3ea99c28"],["/categories/game-dev/page/2/index.html","75de241835a4b20e5f0ac13509561973"],["/categories/game-dev/page/3/index.html","b2042a5f6c98b6b3af34e135e002de9c"],["/categories/hexo/index.html","4a450bdd03cefd8f7cb5724c104dbfa6"],["/categories/index.html","3e21b5ad8a6db46c00403783cc084304"],["/categories/material/index.html","37c3ddc52782d4e7512baa6ea56ab013"],["/categories/update/index.html","0fcccce7527ca909bec8afc1f38d58b4"],["/change-according-to-real-time/index.html","19046228b5b88fad3e4157b56a0ed96a"],["/change-title-after-first-time-viewing/index.html","0a9264830e87f8511a93d82cded6c75a"],["/change-title-based-on-event/index.html","3c3175a0335216f192ae2256bf8a9320"],["/character-stats/index.html","84c2b631ac531cbd9fa5405cb1856314"],["/chatbot/index.html","5bd47cf6d516fb69baecaae48ca17b38"],["/comments/index.html","1ee83ffc583ea3666c4621e188360627"],["/create-button-anywhere/index.html","368dd1d6629a2a277708202dfe5c8914"],["/css/eurkon.css","cfa6df2d80b6de932a228f2feac04f2d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","4b8a0f552f7d1eeced9cdba68b794414"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","c05f2e5f4c693eebde43501261a38927"],["/css/rightmenu.css","eb8b3dc1e5143eb8739eeca09896d04a"],["/css/siz.css","717b7822a46a17ec514ceaf59b4b7217"],["/css/swiper.css","a143b1540f1c4aa739a60da6a4a51d50"],["/css/swiperstyle.css","4ac1a2ec2fd71cefab5399e4f049f433"],["/css/var.css","a1995e65444c60f8fc1d987ac8415924"],["/ctc/index.html","fe0c7ea4506a8f8f0e51445b210fb2bc"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","6de4e57bcb155488eb1d96373f4eb003"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","2515448453c911ae86e469d088140d77"],["/custom-loading-screen/index.html","242bfe923e146afe91f02650c9b55c76"],["/custom-mouse/index.html","ea757d62f6a5dc537cd2b49fe9ba9aaf"],["/custom-music-room-screen/index.html","37320e704f965ac0d98d2f9774463d0e"],["/custom-music-room-screen2/index.html","c5b35b68138b1306c9e8e2dd78be476a"],["/custom-nvl/index.html","28edc797cbbe55145d8df66557ef3eb8"],["/custom-player/index.html","08bb6987abdaff864d4e9007b9b716b1"],["/custom-preferences-screen/index.html","3503a84fe4f0fce9a436dd6fdaade0d5"],["/custom-say-screen/index.html","0f2b70cdd22882ac9cc921eda9570b75"],["/custom-title-screen/index.html","81df15f3768e0f564f7cab0cb00d39a4"],["/define-npcs/index.html","6f2532d89f3ebe090bb0e258865cb8bb"],["/dice-function/index.html","9bc56747fd59a93e8990d122b34999ed"],["/disclaimer/index.html","3ae73f145b2260d332fb0f3eae65aa12"],["/export-game/index.html","71ff55d72e2d96b37098c8576a0abf85"],["/friends/index.html","901770d2f6b169eef3492bc5aedcc879"],["/gallery/index.html","8fe8ad7290b214ebe6f1a81253399eeb"],["/gallery/photo/bg/index.html","df3248295823def3251cdcaa2fdbd038"],["/gallery/photo/gui/index.html","6768a80006bbe43db4086cbe021b5050"],["/game-only-text/index.html","1dfe76c577919a75e3063ae3c3cd64ca"],["/gui-017/index.html","c52433c3615ada3da25732c662a1372f"],["/gui-vertical-002/index.html","893a3960a6c2a9a4362713c7b97fd265"],["/gui012/index.html","6e10ec9a0234486afe5a1c8c54008eae"],["/gui018/index.html","eba740a15f92ca18f5eeae69a2eb6e3f"],["/gui019/index.html","4b0031f95d607ab3e24538859efa2a17"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","0adbd391faec031974fdec8bb77d9b1a"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","64ff3bd226df086451655acf5ea385c8"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a4078b00a9c9f318e05e085172d76c50"],["/images-tip-function/index.html","a09e62f232f888fe1f20a8b9293dc1eb"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","370d664c9b7a89e99b66a999ddb91598"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","dd30c190a0833ddb8e20c1095a8500e9"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","c3661009764fa786481b54e3d85cf57a"],["/items-sprites-effect/index.html","f80ed65c36568696a63ed338916b2ccf"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","ff3652067b7e3ae61f85908ec0701df8"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","95dbcaff32128da8942abd60a989769c"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","90221382c354b79831e77621a5f326e1"],["/link/index.html","25ac7442172f5ed7f4b3f5649463c41d"],["/make-butterfly-beautiful4/index.html","c8bc40a98371ee0001c4a9bcce367a76"],["/map-puzzle-system/index.html","0ed52b0de1c2ac849391a09861cd18e1"],["/maple-effect/index.html","addd2f9397553b9ead1c2a8acfaa4ae5"],["/memberships-2/index.html","ebe1e8e36df4b63c93b171cf6e1f7867"],["/memberships/index.html","af186ffd6b0224f5ab47e7b39902c16c"],["/multiple-language/index.html","86b597a91daf9a212dac3ad4003ed68c"],["/new-year-event-2023/index.html","4d017bd4a877eb49f9937f55111c967f"],["/newsletter/index.html","f3e3ef15ee217ac0f5dc74661218edd6"],["/null/index.html","d8e7bd2be0b6a974c73ef04187491bea"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","d235f91cc446ba74192b73824910b6b5"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","a821503559a1de180388370c27b071e0"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","b96db7d7758169c80f2c102c37e0dc6a"],["/original/index.html","3a81de246a07a1d9da919d777802f6fd"],["/page/2/index.html","62cfed3e9a9190a61868c7ca4724191d"],["/page/3/index.html","5cb0fb1ba33d58e159f4ad94800c517b"],["/page/4/index.html","74448766729caf19af5dd577f3db15c9"],["/page/5/index.html","61e51b67553eeb3e47abbd421c3adde2"],["/pop-point/index.html","5b2248a5ce79f3bb0b141a3c50935a23"],["/privacy-policy/index.html","984687d3f99136618d0cf6782f684a27"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","b3f8b3f44305a3ef00066b9407ece9e9"],["/random-number/index.html","de5f5c2e18cc75904b492b1a437e5196"],["/random.html","e66bee721102863de9da5a30b9b55a91"],["/release-017/index.html","4a02c1d608130c572671524f0eb1c1f9"],["/renpy-basic/index.html","c56a9882eaf624495e9b0995cde82593"],["/renpy-crash-glitch-effect/index.html","7b02d892adae8e1966667ee3d002af2d"],["/renpy-matrixcolor/index.html","b5547e8ac935a7876a4cc11667e72e68"],["/renpy-overlay/index.html","a8c846239d781a96608c681d904aae8b"],["/renpy-review/index.html","fef6539e66ae4de3684bfaa77a604004"],["/renpy-typing-effect/index.html","87ef202d173a3dd0904ddee78c372af3"],["/rpgmaker-assets-menu/index.html","85ffe3dab8d822ecc7933ce7cc70a04a"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","50b530f6272e508c8c8f33aa170099b3"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","089daa79600cb2c4a376be1c6ef3b855"],["/sakura-tree-background/index.html","0a330defd6fa7883ee8468a87fa2e761"],["/service-worker.js","23f0fe2f7b111ab2e0371e22ba58a645"],["/show-variable/index.html","ba57719e42fe14d717e2bc51c1747348"],["/side-image/index.html","7ea5c5304d695b9e694be568511540da"],["/snow-effect/index.html","7818dfbe5be3f6eba6318a45872ec6eb"],["/speaking-animation/index.html","efb3362f102d0401760b520e727d31d7"],["/splashscreen/index.html","f5e105045997ee83ca6b69e72ece3042"],["/sw-register.js","268f84d6931492606518e09c8f8fb9e3"],["/tags/Hexo-plugins/index.html","027c856fbd75c20964c8a8e4ec155a12"],["/tags/Light-VN/index.html","2d8a1641d8b3321e36ace46a7203d0b9"],["/tags/ai/index.html","a693ea3b4543ac6c89b604a4bbd3bb3c"],["/tags/butterfly-beauty-diary/index.html","74f8e50b787664a8dea5bc378ce94c2e"],["/tags/commision/index.html","2290796b6af9778146c80144d1dff5a7"],["/tags/custom-hexo-theme-butterfly/index.html","d74990e76488fdc50cc825d8c3c99c15"],["/tags/custom-renpy-title/index.html","71003714267cc7d911a895e87293bc31"],["/tags/dialogue/index.html","ef755c6a080be2131b04cc0303ee9e13"],["/tags/effect/index.html","33d22a4744d67d8391dd24dc7603b47c"],["/tags/event/index.html","14cd38b472b0ba9b567f606b8aa7da8d"],["/tags/hosting-own-website/index.html","cd14f0b589bc38f06cc77db398972bdd"],["/tags/index.html","a7f6f277e1d3ac86739f8c26202ce15a"],["/tags/itch-io/index.html","a5b23fd6ce955a3e8de0c6b34ec24320"],["/tags/light-vn-update/index.html","1306b6c53068022a320fa1c404930d80"],["/tags/nvl-maker/index.html","440fae1711c2b22df07ad688ea4cb639"],["/tags/player-related/index.html","a8f2930e0f4772ba2bc956e863fe5d23"],["/tags/pro-tutorial/index.html","f91fc81ff78503c3cbeb9ed1766946e5"],["/tags/pro-tutorial/page/2/index.html","1ca493e8358437f378107800eaf6c9d1"],["/tags/pro-tutorial/page/3/index.html","97a94236b88d0ed8c73f50c0062b1ce7"],["/tags/renpy/index.html","f1900fb1f92adf8cd321086bc4c870a1"],["/tags/rpg-maker-custom-map/index.html","d97a2b5087366b8bb25d8fa24e8ebacc"],["/tags/screen/index.html","deea668ff381cefd04c70d8368d07966"],["/tags/special-function/index.html","2858dbc3b8382d23f29dbcb73086db16"],["/tags/tyranobuilder/index.html","a2a23f9b1429f81772505423397ec0d4"],["/tags/ui-assets/index.html","e4e035887506ed83c7e4d06048a47546"],["/tags/update/index.html","03a5e2ad0ca76cf354708f773c782a92"],["/tags/upload-game/index.html","8974d64bc8b6dd01f09249459a802b4c"],["/tags/variable/index.html","2c67ad0d0491a1ec279f9847b88f44db"],["/tags/visual-novel-maker/index.html","1e6984671f6d7445e1361672806d6162"],["/tags/封面製作/index.html","51640c2c6faca23bb054b189da5e6b7e"],["/tags/背景素材/index.html","1f272e7bf9243e58a362637cc6e77816"],["/tags/隨機功能/index.html","09ede3f74e6feee1f41d31f801d9264a"],["/test123/index.html","764c41dc7f53d56c7481054a2a898d60"],["/textbutton/index.html","e0b74c6932f75ea04b0be498f7f6eba4"],["/to-do-tutorial/index.html","85623837f3faa514e9be2f8655684d8d"],["/tools/index.html","1e5bc4367f3134f7227b1272eea7d8bf"],["/transfer-to-hexo/index.html","cb631c01551b01ad7badea02427aed91"],["/tutorial-update-history/index.html","b9e306e2dd9a99844b1e151226ad147f"],["/tyrano-name/index.html","554a92427070d9ad19e8e993551cf54c"],["/tyranobuilder/index.html","de579db0fb2a2753a52a5c0c9b1b5957"],["/undefined/index.html","1cdfd399300974da93660d74268c9664"],["/update-20221211/index.html","995a084e1ed71c92fbee72c243cec93c"],["/update-20221218/index.html","61f52951ae4eb15d3c73e2fd19af0376"],["/upload-your-game-itch-io/index.html","9a1d67960494dec424bafee338a5a3ad"],["/use-list/index.html","7c18005043a498296dd234712af1816f"],["/use-nvl-mode/index.html","c3a9b908c05d9d924703cd885b2e0c6b"],["/useimage/index.html","260d96eb9435c767635adba8316aace4"],["/variable-change-image/index.html","9026da77ff6739b34005367134b5a533"],["/variable/index.html","d0f2ad42ca183e2e5db4631c26bb3c9a"],["/vnmaker/index.html","ee1b04451750e974859f4332988d9197"],["/weather-effect-tutorial/index.html","d6d3083f4af618edd604022b0a743ec0"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
