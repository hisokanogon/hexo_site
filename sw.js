/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","38d189d87c4e4ca19167c36e3a0b1aec"],["/2player-battle-system/index.html","1dce4cd5dbc7e86f368707954326e586"],["/404.html","3886ba36240fa23f5961eb23439c17b3"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","bf55a59c3bc029b1bf07e97112edf698"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","74d50dbbb835828cba76312a34e6122a"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","170c64dbefb9a3f93ee82e26caa8c2ae"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","525cf9f913b2b10c9625097a1825dcae"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/Transfer-To-Hexo/index.html","daa1dad45bf5d2335fb0b08007e62ea1"],["/TyranoBuilder/index.html","a5d30c4b7d6b5bac70c770eed7fc9e62"],["/about/index.html","a916150fec911c85e3cf557977477064"],["/all-discount/index.html","b4f9752c271c3b6f07d8606adec938f6"],["/archives/2022/05/index.html","004812302014013175277516badb96ba"],["/archives/2022/06/index.html","ff189cffc5cb9d14bf82099bc20eb20c"],["/archives/2022/08/index.html","983dfd109d80197c43a5aadb7e82cd5a"],["/archives/2022/09/index.html","5495bcb22a04c5ba684565a9ebface97"],["/archives/2022/10/index.html","2cf2ebcda7b3239052b6eac97694e6ee"],["/archives/2022/11/index.html","437599dfdc7196a55da2514e756fdda2"],["/archives/2022/12/index.html","b4409cd032f8ec6bbafe8cec14e543e2"],["/archives/2022/index.html","c1ac49ce3538f30db738d59bce8c81f6"],["/archives/2022/page/2/index.html","57a8a41cadfe0269210ebaac38238db5"],["/archives/2022/page/3/index.html","34d4d4961a60810d3fa7f27550e71a7a"],["/archives/index.html","be07db90307c59534dbb12e2de077fba"],["/archives/page/2/index.html","96a1588b49680375b58f9cc5b2632b0a"],["/archives/page/3/index.html","a1dbb9a89a73df131731d52d19346863"],["/artitalk/index.html","c47f99f7630ce20dd561318a172693d5"],["/butterfly-plugins-faq/index.html","24ddef0cae293015ee8b906e60b9409b"],["/categories/Announcement公告/index.html","801883234905444f3cca5d31c0166831"],["/categories/Hexo/index.html","57925306f4b189d4403fab10e3cc8975"],["/categories/game-dev遊戲開發/index.html","bfe32b6025b6f1642d6f4679553465bc"],["/categories/game-dev遊戲開發/page/2/index.html","e7ff7c4941ef99b6e02e72c4e5696a15"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","d4eb41c6c4340d7e6801a7e30b299fd6"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","32254bf53921aa66598a8e50a209eb2b"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","830db091021852a546374ba9fcb572ed"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","870b8a80970b6567c0512ff506318487"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","900ce8e6385bb48d9ae831aa87fe0c8d"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","637ad13aa6f637a1dc81e7baa698adcc"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","8b552bb1fd2ce7d2ed440a237fe824b0"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","b4d487936c468241401e71da38ad6041"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","6dc12396196c0739cacbeed7e9d23a8f"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","4030f47e54cd274a37cec3352b260338"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","a7a1a6185fbe46e76311469bb8c11365"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","3af7dac20fdd2322fa495eca0734a601"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","3ef3b35e0d4649908e45c60543df1ffd"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","2b2277fa4a7811aa65f99521ac42227c"],["/categories/index.html","b516d625504a942c4197403911e8befe"],["/categories/更新update/index.html","524b6e1c1a009f2834738ef34130640d"],["/categories/資源/index.html","dbd003b543c15486e6e012427594b5ad"],["/change-title-based-on-event/index.html","76461f03667f75757b053c9c656106fb"],["/character-stats/index.html","ac8e525bab37f9fbf6a361ffe6f12c52"],["/comments/index.html","2a8df97d15fedf6718c2edf6025790d9"],["/create-button-anywhere/index.html","47e57ec9ac346062c0aba093be3197bf"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","75ca29a649b57a3129ebd53218677037"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","59650a71be11cf87610905131ac130cb"],["/css/rightmenu.css","962835c084d860a0c2a6a481efa40b48"],["/css/siz.css","baa3b600ae85c7e00a5b2705b0747534"],["/css/swiper.css","2ac8b9ec1cabd3fe91c5a1b7a74d75c1"],["/css/var.css","52e739d082ce7b9df31b4b4687781cfd"],["/ctc/index.html","0bffa29273fa5931be822eace4671e8c"],["/custom-gallery-cg-screen/index.html","fb26e9d0b95e7613468f6706a0a3b74c"],["/custom-mouse/index.html","d4a9df6c24ce048845c1f07d1846c060"],["/custom-player/index.html","a409a2fc495e4724b94bbc0ce00ef0df"],["/custom-preferences-screen/index.html","108afb108309aa0f1cbb9cc65c4dd19c"],["/custom-say-screen/index.html","6792784cd68ae47fc3994fd83d59f31b"],["/custom-title-screen/index.html","69c5471aae44d69b336b1bc460b076cd"],["/dice-function/index.html","4981ffa756fca4b2db60f666af60933c"],["/friends/index.html","df129f16f01f47edb4403e3549ed87e1"],["/gallery/index.html","5ac2881ac613f2778a510ef77d6d021d"],["/gallery/photo/bg/index.html","afe8c2b22898ef456455788e97c22336"],["/gallery/photo/gui/index.html","aef02d52518c1638eabc9840f6f0a3e4"],["/gui-017/index.html","c9a94a01710dcd89659f915cf986631e"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","ab599799a3cbca7ca66e2bdb5c97fc4e"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","8272497d17846235b88ec5137ec7a7a0"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","41560919a6908ceed252a044e4735133"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","b512ff9ecef05b2020d4085de19653e8"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","6ef62ac237f11e58da3d802210fa9375"],["/link/index.html","b1d6c3d877f07a1e708c89ead331c4b6"],["/map-puzzle-system/index.html","f5dc8f1ed5ead7b1193a847a471e71e7"],["/maple-effect/index.html","243120acbbb33b4005e900ac810091a6"],["/messageboard/index.html","279cea209ab093c946f8656e5cd4f98b"],["/newsletter/index.html","4605b99ff74ee8285769561ff8d7c93d"],["/null/index.html","a566b3281973442e62438f7a7c7208aa"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","12c0727e606840b117de9da422f5a2ca"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","5d318559e684d6bf3884e66545cd8553"],["/othersite/index.html","f1ed49388b32986aabf44188267aa1cf"],["/page/2/index.html","60880a8fc87dba007f8d070cb5444d72"],["/page/3/index.html","1c62e196de24e0ae5bbf97693490ac09"],["/pricing/index.html","3d877817bf0060dacede88833f0bf5f1"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","0da4a09cc9fa17a7c34a1a4f0d8a8c7f"],["/release-017/index.html","fddbc7d66c12505c63be674371024e87"],["/renpy-MatrixColor/index.html","de47f1c7773db9f642880f7bad752c24"],["/renpy-basic/index.html","7100e2c5b9553a3dd02d91eb6a995cc5"],["/renpy-overlay/index.html","bd3f81eb94e49f79e5b67a1965817cc6"],["/renpy-review/index.html","97f386a36d5d8b44df54d33d22131341"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","6486cd02a42612d08c97d56f056b5936"],["/rpgmaker-assets-menu/index.html","cde536464f0c2716ed673bfedc6b94af"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","270042b698c92dca96051235daf52dcb"],["/service-worker.js","9c1a6e0edd420cd7d09aaad33cc7eb21"],["/side-image/index.html","38367d0d3d0258e58bd009da16330c77"],["/snow-effect/index.html","31b7540047ffac6daff1c24e421bdd16"],["/speaking-animation/index.html","d3c5d670bfa15eef271b5fae9ad5c1ff"],["/sw-register.js","69aa8f4a29fff878be4ffe5c424ab4f2"],["/tags/2022-年-12-月/index.html","b4bbfa574d3ce1a508bb4a2d38650ab5"],["/tags/Hexo-插件/index.html","2be66cc865d9f442e416d3c479955671"],["/tags/Hexo-頁面-Page/index.html","ff434dc83d47839f0c6b72f303dbfd10"],["/tags/Itch-io/index.html","15f52b50aa7067d0da5a7bedc95e0c84"],["/tags/Light-VN-更新update/index.html","4bec28c6f77623f4c2684e42d8b95c0d"],["/tags/Light-VN/index.html","50dbd43df8e9cca12960c03f5db9d5fe"],["/tags/NVL-Maker/index.html","1bf4fb7bd92344413ed1683a2112d89b"],["/tags/Premium教學/index.html","6941a6bb84c638f2ef110303a2f5a9b3"],["/tags/Premium教學/page/2/index.html","1e02639b50df8b203456b87d9684ae7f"],["/tags/RPG-Maker-地圖製作/index.html","deaf1f9c1ec03775aa89790347fbc622"],["/tags/Renpy-教學/index.html","e7820a9f21f57007ecd2677da5a9d482"],["/tags/Renpy/index.html","82717c62c45755f0a14e883e974f21d7"],["/tags/TyranoBuilder/index.html","ab31cb0f245c5276d1183ca6b7c81277"],["/tags/UI素材/index.html","cd2b0eb64aa63bd5f956375a2cd2c8b2"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","d37922ef1a963e6ca94bc2dd23a429fc"],["/tags/index.html","e107973638ec1cc273d0ff95022627f1"],["/tags/renpy-basic-Code/index.html","0002af3ed27e4f5ba0db500834582b6f"],["/tags/委託/index.html","04bc7df17d20b9d96cd83d5c7e901c38"],["/tags/封面製作/index.html","5f03adb2936328cf0f869257bda03732"],["/tags/對話/index.html","2d386ad9491058b58aaf904c6fd29563"],["/tags/特效/index.html","63e84e6268ea89f612f08f0d19060904"],["/tags/特殊功能/index.html","9ad7b6306e3db8b0effae0d66b0cc776"],["/tags/畫面/index.html","8957b596622dd2ad319f9e98879ed925"],["/tags/網站發布/index.html","86780e3ed6fe17e39fc9541fa820599a"],["/tags/自架網站/index.html","260822a500a8db111b5183161a9b4a7a"],["/tags/自訂-Hexo-主題-Butterfly/index.html","106ba0b644d13274c9e1cb62da03ba30"],["/tags/角色相關/index.html","324eb6980eb236ce2f1f9b613f4f0dab"],["/tags/變量/index.html","02592450170faca3caa75aa9b03b15e8"],["/tags/遊戲上架/index.html","f559b38daebeb1e1af6a1350f4cdac88"],["/test123/index.html","5b6af07ac1cd0fcebc1f2beb94a462a6"],["/textbutton/index.html","e81302ba1cc3a21e58ea19fdf31b0a44"],["/to-do-tutorial/index.html","613e654741a93cc51db40db1601c5dc6"],["/tools/index.html","c7fca2f77924023baeac658055c44c47"],["/tyrano-name/index.html","8f2f1ee743a2119ff6a9d4245a7fc68d"],["/undefined/index.html","65cb5bb334939eb50bcedce9a7a49189"],["/update-20221211/index.html","3f43ce61fedfa4c7992652d0de1f9ea5"],["/update-20221218/index.html","9978a1ef1b3daa1bf6fa496c4d84d0fd"],["/update/index.html","f47c408237808f5ecea3365f1edd18f4"],["/upload-your-game-itch-io/index.html","e623c5fcf55b175e450897cf28547ac3"],["/use-list/index.html","59c2542ee97a93dcbd0b5f8d962dbc25"],["/use-nvl-Mode/index.html","6e7191ae2a198eceb013dd77f7dfc132"],["/useimage/index.html","d0fe6cfc17bcc80a2c96c7a9049035af"],["/variable/index.html","10a611a5e286d92803973f9b76cfeb5f"],["/vnmaker/index.html","5e7db82bf1c2e232085e33c25bc3cb61"],["/weather-effect-tutorial/index.html","f69385ff354ef2b1e6c245419e109fdc"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
