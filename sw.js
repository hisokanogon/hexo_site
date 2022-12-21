/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","32155abcb8e46a1f447918246858023a"],["/2player-battle-system/index.html","c8bb441c39fa115e2c46d820dab7d912"],["/404.html","5081286f0ed5b7125744bacac3243913"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","074f10cba69866183b00087989ce7f42"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","a1210939cc3d875c17cbe5b9c65535a2"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","bb3e2947a6b2262e04a20512b89e3f68"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","c3e06bbdcb93be282ba00af4ae7318d3"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/Transfer-To-Hexo/index.html","49b9fdd7e287b1cf940aeb07cfc7534f"],["/TyranoBuilder/index.html","e435b6a5cf891f14dd83b1422ee83be2"],["/about/index.html","2c1a062c53fe7192fa5e0c7e16f37f53"],["/all-discount/index.html","59bca6792fc2bc89d0b7b4465a11363b"],["/archives/2022/05/index.html","0d2dbc67645364d3e01c1aa8ec2e9761"],["/archives/2022/06/index.html","ad8a373f94207e8ba5fd9a9248cf02e4"],["/archives/2022/08/index.html","5ca908f83a22fa093a4cf56a9cde38d3"],["/archives/2022/09/index.html","d037e8e5c9d1dd9055c1f40143b46725"],["/archives/2022/10/index.html","4b5c06a34eda037f65f602bb33e3e36e"],["/archives/2022/11/index.html","c5a580783312ade852220544c90d0759"],["/archives/2022/12/index.html","de6a5526c41d9994327c9bf93c38e44d"],["/archives/2022/index.html","119eb52bcaa4117c2b6c07b906e44516"],["/archives/2022/page/2/index.html","38160b97463f6a7c72f8ea74990e1827"],["/archives/2022/page/3/index.html","e2a4bbc21ae1a741a669552f057cecda"],["/archives/index.html","f3d331c3fec0f92e02e2ef49842f4bdf"],["/archives/page/2/index.html","8e90fee0bc3550b4791650db9f4940d9"],["/archives/page/3/index.html","e4b66f59721c7165e6952de8f35d8842"],["/artitalk/index.html","030b33fbbc235f2c7f3d205242627ee8"],["/butterfly-plugins-faq/index.html","246a21b5150f17104ffadf8580d73f87"],["/categories/Announcement公告/index.html","f51c702da50646fc77c5b86e2f3ba873"],["/categories/Hexo/index.html","f68733c0bdd8fc766f8430826598834e"],["/categories/game-dev遊戲開發/index.html","3f61b20c11b2338ade60600457758ae8"],["/categories/game-dev遊戲開發/page/2/index.html","fa0533a5ef60eb54b429b6199f42500a"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","0d8b911c0fe428377f4b0c38312612e5"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","9ff3d7444f148b19642b484792d29700"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","681a0afb3229f8c0518cfed5ce44db40"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","6f385d73dc7e925b1c2d18e67c170afc"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","deb992a0e3dd402b97fd20a06850f0e8"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","762e17cdcaadff2d05d4e9a5ed1b5378"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","88691ba49714c8416263c42cfda39a4b"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","3c8e6031ec27d2db71502b4f156d5dad"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","1cb783b7dd7aa78197f2ba7fb84adc7d"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","dd7577ac994992483ac2c7dbd53e6115"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","6b4d65a1401ed80486297e3831f564a6"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","2fc131435d7bf3a55660cdd4e557996a"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","2edebd548b334f106881fffe6eb5f256"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","dec40e8d6672f61e60b35068d78f73b6"],["/categories/index.html","970c2b7d5edf93f40b40d659670b6643"],["/categories/更新update/index.html","8f427549b8a7a33ddf3f83bf71260431"],["/categories/資源/index.html","83c09a26d317e222f1b197ef29d73021"],["/change-title-based-on-event/index.html","ea0cd94d315fbf36c3e3c1a6227f12bf"],["/character-stats/index.html","62632a675c8119f7015d346b66720f66"],["/comments/index.html","ab4d7ce0904f2108a13867adf8831308"],["/create-button-anywhere/index.html","78c9b2b26ec1cedcf4700cdcd076aadd"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","2d6bde16622cc202bedf0ce613dd6a03"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","7d39e66c9814f3b1e9479e8bac24234b"],["/css/rightmenu.css","18671b279a8dca585872409cddcf28c7"],["/css/siz.css","b6f0fba521021c8898a6453a86a8e2e3"],["/css/swiper.css","34ebfa3ff2766938f18426f0e938ca9b"],["/css/var.css","fd1a8c24367a77a5f88bcf811d8ad3d3"],["/ctc/index.html","87d398f129d048904303fa80add920fc"],["/custom-gallery-cg-screen/index.html","d2b1cc3185be00b8a1a42f49f3c91cb4"],["/custom-mouse/index.html","da7e295ed0026f33e1a8dcfa1007e28d"],["/custom-player/index.html","b82fc461d4f284368874bfe7120245d6"],["/custom-preferences-screen/index.html","9a767d66ee996cc661151d779fe3a886"],["/custom-say-screen/index.html","08f46577dc94b987756de5a50681d7c0"],["/custom-title-screen/index.html","99db74c941ef2cf74cce6a46a1c9e231"],["/dice-function/index.html","bfd55b321b9d1b162b363ca35b1ada46"],["/friends/index.html","ff1bf567d175991b4cd7272024d1b71e"],["/gallery/index.html","43fc30e2eb3edb5965c6a572bb7d83a3"],["/gallery/photo/bg/index.html","725b5e5c0f3efc54f8e042365cf1a478"],["/gallery/photo/gui/index.html","8dcdcc5711edcc80f7e009ce51c9758d"],["/gui-017/index.html","3f86ba5fb8fe428377f4ed10030e70ec"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","03986639330a4742b975ba02a46e6938"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","e3a0321c1e40cf2b334fa277bf4ddb7b"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","3ba4cba483a563d0ade788e5d2a72b4b"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","34efa7db8f8ce0ccd0f842d5d18c5b0c"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","eb8f0eb4259311e3478dd6d5ae23ef6d"],["/link/index.html","bbc83133acc496b02b53b72bca8d3b7d"],["/map-puzzle-system/index.html","17f254f4b25b74d276d4396df78ac1bc"],["/maple-effect/index.html","f73999dd0f77d33cc15cf543d78f4ff2"],["/messageboard/index.html","faf92f93056e7882d1da426b1eb0d39d"],["/newsletter/index.html","bd9d6dfd0e938cae74273ddabca73d79"],["/null/index.html","f398db0cfc40de69689b2fa8003b523e"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b011f5cda54ebd0eb46380b71b36becb"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","dd5dbbd867336a903d724809cccd1fb3"],["/othersite/index.html","6a9d0a282e2fb4b6ff9104bb5991ebc8"],["/page/2/index.html","00a99872361eea94f1b05d9da3b01f74"],["/page/3/index.html","c3318dd1cb5b7fc36e0e570a20e30c55"],["/pricing/index.html","6690b5f0bafe2b5d7bfa271d1614821a"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","d599cdff3a603c5e1713545198db1403"],["/release-017/index.html","975cf6b53c654f58cdfa5d02060b928b"],["/renpy-MatrixColor/index.html","5c29fa8893f9ccf17c898c2323400c77"],["/renpy-basic/index.html","fbc77fbfe3c6a6e56c4de11a47163c2f"],["/renpy-overlay/index.html","a8f430991f0ba493300aca098e650947"],["/renpy-review/index.html","4a734d5e79c3ce7d94d4aaba219fe28d"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","6522be595e7ada7e13430a22d0d0f6e6"],["/rpgmaker-assets-menu/index.html","622629e53d89699a65ba84b269dcfaa7"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","e8923a6635719dec3c74d5afab30c43a"],["/service-worker.js","b45566134f7ca826cca94c2ab121ccc0"],["/side-image/index.html","8d1ee8db044c480b83a837f152c770d1"],["/snow-effect/index.html","49f90dfa731658d5037d2fbf306fa7c9"],["/speaking-animation/index.html","724151cb275a029727975853edb6c79d"],["/sw-register.js","cf417658b293168d8c2b18b2f392d826"],["/tags/2022-年-12-月/index.html","ecf3c18b1c4b206d13d5086523121e6e"],["/tags/Hexo-插件/index.html","4b9e9672f74e96625eeeeadb2067a43b"],["/tags/Hexo-頁面-Page/index.html","72fcd2c744bdb30232bc653526eaef99"],["/tags/Itch-io/index.html","f22d82651ddc525d2a0b53875c9603a4"],["/tags/Light-VN-更新update/index.html","b7718994ea403dd7884e3ecb8f5d694f"],["/tags/Light-VN/index.html","65aad12f87978ffd331415d2de518f5c"],["/tags/NVL-Maker/index.html","126f170fc2de12ada0da28e9f785de07"],["/tags/Premium教學/index.html","df757e88120ce46df63da282d5a44c70"],["/tags/Premium教學/page/2/index.html","f1e7aca43505971326a17431ca4d58f2"],["/tags/RPG-Maker-地圖製作/index.html","cd4fe7cbfa16ebdec7d7e1f8b3d6a02d"],["/tags/Renpy-教學/index.html","959261ec19120a0eb058245d428810d1"],["/tags/Renpy/index.html","08689171510877f48d52a2088fbfbe56"],["/tags/TyranoBuilder/index.html","43f9086c48a3e2f32d3fb5034bced796"],["/tags/UI素材/index.html","80dcbddd00763125e3438bf770a82cfa"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","18a557b758ac50aa6114d99063d74833"],["/tags/index.html","920b0a6650ad748a4fba601f06a86f2a"],["/tags/renpy-basic-Code/index.html","0e87950bb38253ae855e381aca87955f"],["/tags/委託/index.html","ec70b9d365b0f3c394323dbb7a2e5a72"],["/tags/封面製作/index.html","2eed6c35099b48c3702c7adc0705e114"],["/tags/對話/index.html","734a67a37c89095e4bd1dea3dba31b28"],["/tags/特效/index.html","41391508980795072ba0765d163390d0"],["/tags/特殊功能/index.html","2176cf2bf7b75efd06a925739b9f4258"],["/tags/畫面/index.html","50cdc49fead951144fd682a6f13cd6e8"],["/tags/網站發布/index.html","0860c22ef46983926a78e494ad2bbde6"],["/tags/自架網站/index.html","46981232b6c2b3b04389e93cf32366b7"],["/tags/自訂-Hexo-主題-Butterfly/index.html","5abee24dafdc6e5ec9c18587060dbfb6"],["/tags/角色相關/index.html","02cb8d211c02ea0b63954385c66bf93f"],["/tags/變量/index.html","96f247867dd709796cfd5b5ee87c9a35"],["/tags/遊戲上架/index.html","1ee68c1902c92e12a280ce7bc107f709"],["/test123/index.html","46ac50db4e6ae9bb19b4be68e15fa2c2"],["/textbutton/index.html","a28b041864a60dc96b50610814facefa"],["/to-do-tutorial/index.html","97814d65a90093e3f7eea40932ff1f62"],["/tools/index.html","22148579d34245dcdea4a909e5180d2b"],["/tyrano-name/index.html","678cb14dc655d0f3427b2dfbfe8daa85"],["/undefined/index.html","b4f8c5e149338d7ae9175ae240788e8b"],["/update-20221211/index.html","63c60f23ccd5597888d378af55c050a1"],["/update-20221218/index.html","d28598df0584adac5baac687bef0aa94"],["/update/index.html","2beb87e9e01ff6b39b7f7adca260733c"],["/upload-your-game-itch-io/index.html","3923a1be56ec6af15cabdb1491a3abb3"],["/use-list/index.html","8521c1151bc173443ad47e431058e26a"],["/use-nvl-Mode/index.html","9870e78cf53979c1bcf55d60da64691f"],["/useimage/index.html","730b5b552f7c4854fdceb9558060993f"],["/variable/index.html","5515115605208bbd818eb9e931cffc03"],["/vnmaker/index.html","8b7528c00d869563fe65fd53e9b29f5e"],["/weather-effect-tutorial/index.html","3babf529721d45b474c11d155aed3ea4"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
