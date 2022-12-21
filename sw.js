/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","e2811aa10e84907b5b312aca11c39442"],["/2player-battle-system/index.html","9d0868a5bdb810f3eb07d7805f46bdbf"],["/404.html","5ce5460c088679305e42812ed8090468"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","164ee67d6703cb6367d3492bf7f77995"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","489a9a2b78e95e97879d4bcb832a603d"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","b0b82093d8fc5dd6a0ec54f44361a6ac"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","cf045bff92ebfca7d9b96fd119c73ba6"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/Transfer-To-Hexo/index.html","88ae20a12044a50aaaad13f4382a8d71"],["/TyranoBuilder/index.html","3f0cde6552ba204d1eb587ea4b43abcc"],["/about/index.html","ae33fa8681c85549a4e8f33dbe982477"],["/all-discount/index.html","3d17c56e0add682a1f5132a2e0500c8f"],["/archives/2022/05/index.html","6aef029ced3eba650b243fdaad5fa567"],["/archives/2022/06/index.html","b8a3cc72e889a451c03d986f4f8d9537"],["/archives/2022/08/index.html","04b6e045451d537cfe455ea3284a1d58"],["/archives/2022/09/index.html","2813bf7e6653c6325c6a255ada35f12c"],["/archives/2022/10/index.html","ea2a40e85822016b3ed2693889c7263f"],["/archives/2022/11/index.html","a5c5e6458b42e826e4671d5d8f436382"],["/archives/2022/12/index.html","99f70df72fb05c4debe3295117443e91"],["/archives/2022/index.html","e4d1e9bbb199a287104ff7a910aa9091"],["/archives/2022/page/2/index.html","2d598b7a6388e0557ef38c6cfc0c269b"],["/archives/2022/page/3/index.html","9da0e7cb2f9fe938e608776165f4704a"],["/archives/index.html","438547725065bbeacf80a62cc38b7487"],["/archives/page/2/index.html","f3f5936470d2e69bff1f685b132fe928"],["/archives/page/3/index.html","60275710cda2b941d844ea030db8a87b"],["/artitalk/index.html","0991d97ffb3816f3ac4a527f6d2ceba0"],["/butterfly-plugins-faq/index.html","9d8b2ee35914034e7f89d54837e12a78"],["/categories/Announcement公告/index.html","4ab7aacf3c435bd90c5da86464ecacc3"],["/categories/Hexo/index.html","714d9e1d7e5f91f74424ba9ddb1616d2"],["/categories/game-dev遊戲開發/index.html","b50e030d14715f38a3702e8660df70de"],["/categories/game-dev遊戲開發/page/2/index.html","2c574517eb3a5bdbe7bb3c7b966eba2d"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","1aa5e6c1174950288c1ff73dfa755140"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","b8052cbffe387172db8ab503accc60fe"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","ddc38dc6d4b1b323e927002b00dc07dd"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","d11f72d12ecd520dfe49b8e05dc76f2b"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","ee5f25b99a83881d9c2fa6d3c0937d42"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","2b86a0c9dc05a3b83a9120cfc373fb2c"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","fb39d28824a58353ef1556ac6db27d01"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","0ffa349321c786da85ca85d2749a060c"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","0ccdbb2b7797da3746771e1bdd06e27e"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","6fded15a0eb3aed271dc5f99635dc928"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","c944acc68a3f0eb11bdac33f6fd46216"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","acb4883791b5b270a335958e00bb8ac5"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","59a256019344d847f87fb7c5e64c179d"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","ad79ddf63ee742bda7c6b1c3a9f863ce"],["/categories/index.html","b75c89cbf1abc72e171094886e0e1bed"],["/categories/更新update/index.html","575daa9bba33ae3767a986bfb34cfcaa"],["/categories/資源/index.html","9a872b81de88530f09773db542e11c9c"],["/change-title-based-on-event/index.html","9b5ec36cc55559241f9b063a25d6691b"],["/character-stats/index.html","5cb567797b1f12032f782f632fbcbcc4"],["/comments/index.html","be9106f59566b94d7c2ae9594ff57941"],["/create-button-anywhere/index.html","26a34942d1b84d7d9146cce0e5387b64"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","2d6bde16622cc202bedf0ce613dd6a03"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","7d39e66c9814f3b1e9479e8bac24234b"],["/css/rightmenu.css","18671b279a8dca585872409cddcf28c7"],["/css/siz.css","b6f0fba521021c8898a6453a86a8e2e3"],["/css/swiper.css","34ebfa3ff2766938f18426f0e938ca9b"],["/css/var.css","fd1a8c24367a77a5f88bcf811d8ad3d3"],["/ctc/index.html","ef98d800af725e8dd9eda59cfb967356"],["/custom-gallery-cg-screen/index.html","5a05091d124312699f53f87e8bc1aa25"],["/custom-mouse/index.html","66084a82933cb81f08dbd8723154a412"],["/custom-player/index.html","4f9d65d8e982d65f011ccf03a0d24b19"],["/custom-preferences-screen/index.html","ad0f3dd33f8ed122f9c722ab04f9ca60"],["/custom-say-screen/index.html","a625e0abe02913d391ec316f206ca5fe"],["/custom-title-screen/index.html","f1ebd78882ecc1d45b38ef9b1c208b36"],["/dice-function/index.html","f4323481415ceda4ec38c5b89631ae4d"],["/friends/index.html","74da598d190ea2fe344516775e9e0197"],["/gallery/index.html","5880bc4749a6cc949529ad9261cf3f93"],["/gallery/photo/bg/index.html","aaca672b6d73b86cde770bfe3813362d"],["/gallery/photo/gui/index.html","06fd7255a32b972adde08929deaede9f"],["/gui-017/index.html","0a51615bca4b44c644e913ee688b4d9c"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","4ebf40f6eb557d7611c0e92146fdb0ef"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","fff398751c93acf4249ce40cf51e3565"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","2a7519da7f0883462b18c5ca62176c1e"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","0c1d697ec0114aceb06c9461d598ee0c"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","ec159b9b25b274ed51293f6d39ab4344"],["/link/index.html","4eba2704e167806e9cccb9bc94c829d1"],["/map-puzzle-system/index.html","62c0585cabd94e4ae4884483b29b17de"],["/maple-effect/index.html","3030132149f4992874892569f0f7b8dc"],["/messageboard/index.html","87220c027ffc26637b6584961406a496"],["/newsletter/index.html","4f33cee56f08ea4047ad2194ff642634"],["/null/index.html","d0d7a7d4ceac23f670d5c661ba0e8b5f"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","8e895a673f3989b7b54faf6e2b575ef4"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","6e337765e96411b6316ab72b1e47f95f"],["/othersite/index.html","b7124c1ec954928bc1091666feeec761"],["/page/2/index.html","a83226208208c3405e9d80df089463e2"],["/page/3/index.html","b38af87deb7bec230e62c4ffc0717fe5"],["/pricing/index.html","0126896aad11e84763ff7aade976d2dd"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","eba566371fdbff32da45c70e988e6927"],["/release-017/index.html","83da30b0b077b11e4881e63893e9555a"],["/renpy-MatrixColor/index.html","89853582a41e5054d52c1c81c8aadc28"],["/renpy-basic/index.html","9d8f3a7067401530f04d232dbc246c2f"],["/renpy-overlay/index.html","9a3ff97904360c8e1134a41f28ec816f"],["/renpy-review/index.html","85d25674f644ce32f39b929f0da2d7be"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","4216e6373567300806891706382e72f3"],["/rpgmaker-assets-menu/index.html","5335e77e1132fd7f4917200bb21b6b96"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","5b1c38a37029f8cb694fb4949ac884be"],["/service-worker.js","b45566134f7ca826cca94c2ab121ccc0"],["/side-image/index.html","48f2f116b8cbd69d2cfbcec0937fdf3c"],["/snow-effect/index.html","33484c4d00b8e1655d455dbb5283ef54"],["/speaking-animation/index.html","25a54f426c7ac33b0c08ba277dc3c22c"],["/sw-register.js","6d45be67b283e16ee3f3d36be22f486e"],["/tags/2022-年-12-月/index.html","4512d186ce3907f231da73bac00c4123"],["/tags/Hexo-插件/index.html","f9afdf26796959c1b2e025bb37a865a4"],["/tags/Hexo-頁面-Page/index.html","d38bfa3f05589f21f7b4709125b84bfb"],["/tags/Itch-io/index.html","2cf3cd141db599b392dd7cab63a496d4"],["/tags/Light-VN-更新update/index.html","1546ecc82257205d5834f59b2415727f"],["/tags/Light-VN/index.html","f00442dc6c0f2b79ce50dd0dabdc1406"],["/tags/NVL-Maker/index.html","b7637e7310fc168222b64b78bd311878"],["/tags/Premium教學/index.html","cd71418684f291520e0a4ea1279a616a"],["/tags/Premium教學/page/2/index.html","2e60a297f34bea523bdad4acd7d3f705"],["/tags/RPG-Maker-地圖製作/index.html","7e32c4e860c28ba4adb32965f1a65964"],["/tags/Renpy-教學/index.html","fd93dfc178d5f419d02b9161e9817fe0"],["/tags/Renpy/index.html","54f036709a2c90964fbd2f75a77c960a"],["/tags/TyranoBuilder/index.html","7cd80f76c0d69f23e7aea0f8a68b942b"],["/tags/UI素材/index.html","22bf162640509240a1aee73d45b7bf84"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","1d03612e6348f8708483243377ceca79"],["/tags/index.html","634d598560b017e1c7e1b432bacf30fb"],["/tags/renpy-basic-Code/index.html","0d7045bf0463f41c37412235ebbefeb5"],["/tags/委託/index.html","42a2091f89e503580064db8b7bafda92"],["/tags/封面製作/index.html","7bed8e69c7bd0b788220491dff4553a8"],["/tags/對話/index.html","203a3eacb5e25474edff83721cb3fffc"],["/tags/特效/index.html","3e3d3f878d0abf20c9ef031bf107f3d7"],["/tags/特殊功能/index.html","5ccb12ea4a6e0f2e321617e611a7d34c"],["/tags/畫面/index.html","49f44ffa79c649093d0e54974c5caf03"],["/tags/網站發布/index.html","95e219be6c9f06aa02f61bc0b3fcdeba"],["/tags/自架網站/index.html","f2de2aae857852198bd1552ac6d95f44"],["/tags/自訂-Hexo-主題-Butterfly/index.html","c1cd21e30906c4d0796b362350b4d104"],["/tags/角色相關/index.html","c6e2594e3fdb77ec127386a4ce54bd48"],["/tags/變量/index.html","934d88bccc8845e439427b5163d703e0"],["/tags/遊戲上架/index.html","34db6201e908b2b53d06e5726cd7f430"],["/test123/index.html","d85d4af53e743847a260bb1a4ca06486"],["/textbutton/index.html","ffbf585a4b111081efdba5e42af2173c"],["/to-do-tutorial/index.html","4b6b3f1819b797180ddd8ce56c480a19"],["/tools/index.html","967598f4a9394446486fe83af414a9a5"],["/tyrano-name/index.html","bd22062db492a0748a725c5eb9f70519"],["/undefined/index.html","abaab238e7a3a4fc6718d85fb77cf6f0"],["/update-20221211/index.html","492c2ad84e93febe35dd1df0b2b2c8c0"],["/update-20221218/index.html","ba210b3876e363f3bdc9860846535999"],["/update/index.html","5294085e82fd2afac5a777bd81084e03"],["/upload-your-game-itch-io/index.html","ac0764ccaa23860209e5bfabef8d433c"],["/use-list/index.html","091ab2190753a32d5549c46ccd90e561"],["/use-nvl-Mode/index.html","97c7561cefde967d71e07fa090a9e66d"],["/useimage/index.html","a0fea92ef4405e194abf482450023a75"],["/variable/index.html","038275271dc576506079909b45286523"],["/vnmaker/index.html","8e077008eac8e4b5dd08d6746513a972"],["/weather-effect-tutorial/index.html","8d8affb77a55278899b6aff117828331"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
