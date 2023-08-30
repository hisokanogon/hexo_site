/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","bb858a0023ac104215a37643dd0771a0"],["/2player-battle-system/index.html","a7bec873613ae424b4212a41f9e6028a"],["/404.html","d4bda7df16a23a309fb4d767277f10d1"],["/about/index.html","a1051ad0e293b7224caa7dfc7097b59e"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","c8245f0845342f39e324a3aa69b88702"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","b884e65a1b7c1d39efdab33ec93387a1"],["/animated-title-main-menu/index.html","d54ca780cdfe8765fa3b865eeb3d5fa6"],["/archives/2022/05/index.html","a404e6885c6d915519586f84a4af76c1"],["/archives/2022/06/index.html","4ce8c01ff0eaa5299b26b83379fb0a5f"],["/archives/2022/08/index.html","ba590f0030b6334ade30351565f38326"],["/archives/2022/09/index.html","08d0072d9b5774b35f90e6716d99b7e8"],["/archives/2022/10/index.html","618693fa461ebb8e38b69f5022bf9947"],["/archives/2022/11/index.html","196081dad789b8891263d231b423c5fb"],["/archives/2022/12/index.html","9c7033f8c240931370d2600a0a5254c0"],["/archives/2022/12/page/2/index.html","807368c8121eb0cafd924be4aa3286d0"],["/archives/2022/index.html","876ec44a999687574ab25515dc23617e"],["/archives/2022/page/2/index.html","b32c3b2750b00b29cf2a53c5fb606e76"],["/archives/2022/page/3/index.html","6386ab291ae71e0cfa0fa0af4eed0b04"],["/archives/2023/01/index.html","6f83e0acfb14e3be3c554975a1084005"],["/archives/2023/02/index.html","a5ccf91607f985b8dc4abca495ff70a1"],["/archives/2023/03/index.html","c0a77be8c3afae64143fd94d9ff6f99e"],["/archives/2023/04/index.html","42f72a66cfe3ec4912f5b22fec475387"],["/archives/2023/05/index.html","a5f4e82548baecbefa83a428285d76a3"],["/archives/2023/06/index.html","7b047f9c008e4ebb9eb6da7a69d3bfa8"],["/archives/2023/07/index.html","30d5b594080847322c7aae98460e3db5"],["/archives/2023/08/index.html","4fe237123189b7ce0679023268353787"],["/archives/2023/index.html","eb384209e91b7a8bb945529e257bbe08"],["/archives/2023/page/2/index.html","908053ce6b57fbcbb78586de08d78d15"],["/archives/2023/page/3/index.html","01833adfe37d894b0b16bab5725c6bd1"],["/archives/index.html","b2fabc9d5098bfb495ce42fb6beeceda"],["/archives/page/2/index.html","76c31646884d759afa978e40c72068a1"],["/archives/page/3/index.html","9df27996c254f200180847f9a7a15cb5"],["/archives/page/4/index.html","84186ce458f81e7e4644bf418448d458"],["/archives/page/5/index.html","750153135a29ce3598d03424325d56ae"],["/archives/page/6/index.html","1adb625effbd84f917f8c6386ad4955e"],["/artitalk/index.html","18300a4f8f338bdd20955423be728fee"],["/battle-beautiful/index.html","d3bd65450ebcb69d178affa551737d81"],["/blur-effect/index.html","c3797533390a4f01479d0e945eefc080"],["/butterfly-custom-tag/index.html","96934f8f8fcc53c2e6e70b9ecea37623"],["/butterfly-plugins-faq/index.html","5a528d52f1c315a9252b3d89649f8cdc"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","b2960004a586f5f63edc566c4d1b8934"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","743e3aa3d976046fe19a88c3215ab20f"],["/categories/announcement/index.html","18051d28d7c64044a20033dff2c358de"],["/categories/diary/index.html","58be762707ba31e222409045690fd341"],["/categories/game-dev/game-engine/index.html","75ed120cbf003e22634ef892c2d76b76"],["/categories/game-dev/game-engine/lightvn/index.html","bb731e09cbe3e87a679794a902c82f72"],["/categories/game-dev/game-engine/nvl-maker/index.html","276e68bddd6ef7e3cc507db975404f6e"],["/categories/game-dev/game-engine/page/2/index.html","0664575965f84526b8b8ddf46c9ac68f"],["/categories/game-dev/game-engine/page/3/index.html","0367faefc596cf3d6451ffd857817c96"],["/categories/game-dev/game-engine/page/4/index.html","c4f2578b4e0dbc1b447bb463595a4fb9"],["/categories/game-dev/game-engine/renpy/index.html","e19a86242749c20f07ca7f521404b7bd"],["/categories/game-dev/game-engine/renpy/page/2/index.html","01c29e9fecd7d6f32d1a3113e0452af5"],["/categories/game-dev/game-engine/renpy/page/3/index.html","29803311b5801d816ccc2f9da84c7838"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","e4f217b9580fca25fd1f4c9c9e744f16"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","cf4ed2a6f6735a858e3686bd16b426c5"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","3ac32cf2b9b7c15dc4b2a5f512f61df0"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","efe28a870de5ea6dc9d204c78fcbf40c"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","41d137e6fbf0357ac5ef6f73bafd0263"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","e94679f6f765baeb59163373e714f355"],["/categories/game-dev/game-engine/rpgmaker/index.html","66ea21483725345b7ed1556641bb4186"],["/categories/game-dev/game-engine/tyranobuilder/index.html","4048022b7ece6344afc51010c9f19242"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","f905cd0954ea04e75dfc1692c90251ef"],["/categories/game-dev/index.html","fa1b19da006fa3340ec72417f5bf5f9d"],["/categories/game-dev/page/2/index.html","541b95ec723205d66cd968025a0a97aa"],["/categories/game-dev/page/3/index.html","94c0d98109fcc6109a5cd427bb4f6a10"],["/categories/game-dev/page/4/index.html","88b58d4991afbaf9e2017869dd871099"],["/categories/hexo/index.html","408c9d64edae9ad384aacc3944f1aa13"],["/categories/index.html","c6c5e030d2e13c633a0964cbe046c115"],["/categories/material/index.html","012043c3b6790dc1b88f5be0e7b84695"],["/categories/update/index.html","7532cccf05c073dda5082b3e9060ffd1"],["/change-according-to-real-time/index.html","b19a63a5e00cd88e11d98e05997721a5"],["/change-character-info/index.html","840c2c69525de2e81c9305536ea0cb65"],["/change-title-after-first-time-viewing/index.html","3bc0a178c0ed98c7a499fc8e430b4df6"],["/change-title-based-on-event/index.html","86ad9d038bbf0a1f99a5fade677ee52a"],["/character-interaction/index.html","82dac54298f00ad4f506f899cb4ae2bc"],["/character-stats/index.html","50095443549c7a63d51cc4d4a2d093f6"],["/chatbot/index.html","43875f8096ad6705205c1d5c36db9c76"],["/choice-time/index.html","a6649d4fd21632ec8f9d26a13bc82e36"],["/comments/index.html","c75b24ac2c514eb0d490abf73578d34f"],["/commission-info/index.html","9de6d632cae8f440edf0fd74aea4e3b3"],["/create-button-anywhere/index.html","293f6eec43c99433acc384feb55b4c8a"],["/css/eurkon.css","3ecbba8a0ea3a103e0487a97e5da6829"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","e3866006b63c5b9fbad0d4cd17d645f7"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","d030d6bbe995f5300b3b3376d3502637"],["/css/rightmenu.css","ac53e6e50d2b9572b47ff94687c4cd85"],["/css/siz.css","30cd3e9498959ec79931cfe4e7e5c3b5"],["/css/swiper.css","b79387c9fa376dd1cb2058da4600efdb"],["/css/swiperstyle.css","6b8e217ca2bc5f5fbd75d359c2fd1a21"],["/css/var.css","15ce7fbffa54304e322875f32a323d98"],["/ctc/index.html","245173da78f7277859d1862a92b20898"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","fb228121b9af653b9d7af1ab7d3e12c3"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","0995a014f798463b46cd7e36532e6898"],["/custom-launcher/index.html","5f5df41aa0d9dcbe8ea523825688f136"],["/custom-loading-screen/index.html","8108d3fa4ee53426d0ba1247e00a62f0"],["/custom-mouse/index.html","832d9e8c3808e755f9aed2007f2ac2ea"],["/custom-music-room-screen/index.html","57c6c9c2bfc4f9e98a70414252672373"],["/custom-music-room-screen2/index.html","8d0a8f29f08ddd136c7ddbb265da2601"],["/custom-nvl/index.html","73f27341d09f925afddd230c9c503d6f"],["/custom-player/index.html","2f33b378d376fbc644380e472801aa7a"],["/custom-preferences-screen/index.html","6a98a4fa1d98370d7763f065f5a0ca71"],["/custom-say-screen/index.html","db95ebb80f43f6c8e702fa742ccfa400"],["/custom-title-screen/index.html","91e4c03f7f11dbdc4824fa0cefd0b9be"],["/define-npcs/index.html","29d26b6a16e0f040f8f9b769e1309c4c"],["/dice-function/index.html","ef78d1402d0dc3c2d404f682f47d9caa"],["/disclaimer/index.html","48679b345733285401f1c225880fef4a"],["/enter-name-screen/index.html","7a1f6b545b467b678027e1e30de8e8a9"],["/export-game/index.html","2f8c7d15231b7baff0b4ac70ad50560a"],["/faq/index.html","4c08ca135978e44ed4bbaedc12439c69"],["/friends/index.html","139f4cffec8b60b08b58121c3201b15a"],["/gallery-template-assets/index.html","9dc2d11ce925f48c2757a1fb09d67584"],["/gallery/index.html","796d9c63c164fba912b9ef4870f0069b"],["/gallery/photo/bg/index.html","e30dffff869c7c1164fe73c157134846"],["/gallery/photo/gui/index.html","19a89b6a58cabe185bbc6ab39ac801db"],["/game-only-text/index.html","b923231147b107895899028e3de0fe5a"],["/gui-017/index.html","284a5213615a13c40e141f16bb161e7f"],["/gui-vertical-002/index.html","e0669dbce3e88366177acb0dd967bb3a"],["/gui012/index.html","ee0064c2770d745ec8c8e5a8f3153c34"],["/gui018/index.html","f36cda65aef75bb428745992ff664aa0"],["/gui019/index.html","2ef0e63a6997aafcb2a5da31f4bdf692"],["/gui020/index.html","867471bf860a839561fc1620fcfc6d41"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","b6a494bab0f567399b58474d0b5bd762"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","2400230ed1269f40111048c0ed2edafa"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a5dd8811e5878e08cc3cc92e4bbc12ec"],["/images-tip-function/index.html","fce76d96c892d245316905ffbc1552a6"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","6993b6e5f9b3d9b775e70a0307441ade"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","9ff96f92c3307a81275978d64d7be0ae"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","0bd63f5f54227af165bbf02b1c752fc7"],["/items-sprites-effect/index.html","8ae626c411b502dfe231fa166be8f456"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","15367faccfced30ce472f64e5c35bed4"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","eb6b339cc3284d7a1ba0864024eef8ed"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","01716d4c48f80b3924f86ba9563c9cc3"],["/link/index.html","a3a752ad350050ff4e45a3bf5a17d1c8"],["/make-butterfly-beautiful4/index.html","05b9bf6d3eb3d2a243bb2207860aa5b8"],["/map-puzzle-system/index.html","ef9ccce5841659791d932fec94664d97"],["/maple-effect/index.html","0207942635eccf50513f134ad3dcadf8"],["/memberships-2/index.html","d163f7ef4466c796fcb2ea8ccf6aa1e3"],["/memberships/index.html","d6ed98c21736d1a36b074739f476e6c1"],["/multiple-language/index.html","bb6063f9a6ada1fbaf457593221fe10d"],["/name-input-assets/index.html","c15886d43f2003df8ce6cf7008a399b7"],["/new-year-event-2023/index.html","fe1e5fba84a7812fb6bdfb4bb6bcd78c"],["/newsletter/index.html","f0a8c15b80f428ef85b80699dc722258"],["/nsfw-limited/index.html","21b44233b7029f4542bc791d2948c63e"],["/null/index.html","eab3407fc513c89812b33081016c0202"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","49d2382d2dce6e697184b7fe17a84a00"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","352c89795a5a3fb2bd3960dd617a33ad"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","36d60fa1d1d0f1213e921035b8fda4cb"],["/original/index.html","a961fa4807a5b15d0237141af21ea29e"],["/page/2/index.html","d147bfc060126dea6c1a837d667405b4"],["/page/3/index.html","db24048c45604cf5cb22220c01632aad"],["/page/4/index.html","b5f02215ed2e650d6c7dcbd6ec47d18d"],["/page/5/index.html","319a438354a1e21a82b80cf24c5cb3a8"],["/page/6/index.html","c8c39811379f6c65b25e6a004cb7d5ef"],["/point-pop-up-assets/index.html","d8cae43de5e4f9a32120030b08b4c332"],["/pop-point/index.html","69246c7414feac07bb5d59a67c7407c8"],["/privacy-policy/index.html","8c12f1bc5b86ea55c7cd198c73ea4b20"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","6a8f29105ae008ca762092a32a1620ec"],["/random-number/index.html","c024e981068dc928b3e8c7a31a181a66"],["/random.html","78280e26216ad40de72c02e33da599d9"],["/release-017/index.html","5e82e773d6dac203d8369c17e57bd86a"],["/renpy-basic/index.html","cb00471e10043c9aee6e04b54e41e9be"],["/renpy-crash-glitch-effect/index.html","d8574ccb696b47aa82254a16abf2fd49"],["/renpy-matrixcolor/index.html","61d90568bc40ff52c69d25e21d5efca1"],["/renpy-overlay/index.html","23ef7a74b9c42fecc7efca0b9669b23d"],["/renpy-review/index.html","d451432116eeaf9ea81be6043e6287ed"],["/renpy-typing-effect/index.html","279e33ed7a44f41971cd05fd3ad6fa3c"],["/rpgmaker-assets-menu/index.html","d5956fc7cb0395dd0172606db5d48560"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","89e88fcd31260fff09e7f35e9dbb66cd"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","68d1a59931926f2447467e978a9247f6"],["/sakura-tree-background/index.html","7b7e7b9bc8d94eb168d81706637bb2a4"],["/service-worker.js","96c42963dab603dae4a5f31a33055d92"],["/show-variable/index.html","e2f83fdcd040e14dc08f4980fc02ec0e"],["/side-image/index.html","ab36de74485c41d11968a4f98f083cba"],["/snow-effect/index.html","eea21d1581b4c431a4ce459801f5010c"],["/speaking-animation/index.html","f6a9914564e5c9ceadcd3f62e6e4eb1b"],["/splashscreen/index.html","2e5f5ea8c1ff7718eaa17bdceb448e63"],["/sw-register.js","f6409229a8bde2db7a3ed46b78059dbd"],["/tags/Hexo-plugins/index.html","32f43a2ddded713996354b51be153d89"],["/tags/Light-VN/index.html","b8ab09c3907528a466caa2a190f5a45c"],["/tags/ai/index.html","828dbc9f00093be2fce577f5d94864ce"],["/tags/butterfly-beauty-diary/index.html","dfd3bea47151aac2ef3009e4acf4f2ad"],["/tags/custom-hexo-theme-butterfly/index.html","ec47f3eb61ac314d7aa35affaedccd25"],["/tags/custom-renpy-title/index.html","b2182c73d6f3026f97604b3e9197e324"],["/tags/dialogue/index.html","a0a61d1ff1749c315ccc1fcd12d73214"],["/tags/effect/index.html","33f6aad275c0e9411cf13f0020a8f94f"],["/tags/event/index.html","5e302e695d1195e7430f5d9f6fcb30d3"],["/tags/hosting-own-website/index.html","7acf1560aeb47e5cd4f34ac31da0c176"],["/tags/index.html","fdfdbf3287dd9fbb2cff15a1390013b3"],["/tags/itch-io/index.html","79955256c50786da4aa3d8fbc1b9e785"],["/tags/light-vn-update/index.html","a9d1cc3bd4c2bb5bf865de1ec494187c"],["/tags/nvl-maker/index.html","b3b79aedc5631ace55b27ae0c4eba693"],["/tags/player-related/index.html","47d6d1f50e15d8b12aaa8f953a91b762"],["/tags/pro-tutorial/index.html","864f36c177181f35f906cedfcba491ea"],["/tags/pro-tutorial/page/2/index.html","a74bca9042218c3937534550c46054d7"],["/tags/pro-tutorial/page/3/index.html","5057bbc0c8f9777688a43273952e7a62"],["/tags/renpy/index.html","3ec5467647885029b6676528b1604dce"],["/tags/rpg-maker-custom-map/index.html","d98860d79c065e43680190208c2e1272"],["/tags/screen/index.html","8fce0dc57d117112110b9c121887033f"],["/tags/special-function/index.html","c1f114b3e54eb2b9bcf57887f7b4d972"],["/tags/tyranobuilder/index.html","709337fb9f8607b4e576f2faf29a3199"],["/tags/ui-assets/index.html","85509d3090de256679252f344ad14f56"],["/tags/update/index.html","ce1e87af28998520635f50e098e5c029"],["/tags/upload-game/index.html","5a18f230a75b649f027f37e2ca08947c"],["/tags/variable/index.html","e22d6387d4340f9dcd085fc57e08d414"],["/tags/visual-novel-maker/index.html","6b2dd2218f93db2dee73e9e1f4c08322"],["/tags/封面製作/index.html","cfc5d4104f42c98baf585657f84a6104"],["/tags/背景素材/index.html","f80e87cdab700adbeaec41c33ecf8226"],["/tags/隨機功能/index.html","5fb36c1941e6f330754a180ab95cdad2"],["/test123/index.html","da85143b773fb96ae261d9ce6a92a1e4"],["/textbutton/index.html","3503cf9c98e6a54074e7ca88188f40c3"],["/to-do-tutorial/index.html","01d34dfa27185d674672015a7c0751db"],["/tools/index.html","de76bef28bd97b96173cb771be035e2b"],["/transfer-to-hexo/index.html","c337d89f2944e1d4f13b87d1c6e85194"],["/tutorial-update-history/index.html","4a23a17fec5f98fe657223945cfac256"],["/tyrano-name/index.html","01e3b7e93c5127ea4d4f9306dfd724d4"],["/tyranobuilder/index.html","6a342f6edc3fdf4c6279fc77232185fd"],["/undefined/index.html","405e193bdac8c1c29d80795ffefb8a2f"],["/update-20221211/index.html","1d842580f5c768bf018ffbf784af47df"],["/update-20221218/index.html","243a535a04f8fb4050503f650132bc5c"],["/upload-your-game-itch-io/index.html","71804e10ff5daa97340c22b944bbf0be"],["/use-list/index.html","152379b2a8f44e18a5db0182a65d4d35"],["/use-nvl-mode/index.html","7046e21f873842df1d88209d7f34fb65"],["/useimage/index.html","232afcc1137f08fee0cfa13f5ae1c346"],["/variable-change-image/index.html","c923bb6b58400fa87f14b54077a0c249"],["/variable/index.html","6ea9adabfe6f2bc7af9d2087decce371"],["/vnmaker/index.html","e6b4d76d9953f77fa3b53ed2e4a197df"],["/weather-effect-tutorial/index.html","386a7ab5f921d5e23516863557958c10"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
