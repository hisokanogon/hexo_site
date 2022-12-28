/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","a760f31e7ed0e6d8d9b8ad64539bc434"],["/2player-battle-system/index.html","1db9adf10959d9373c4573dd437b502a"],["/404.html","1f26544239a9f379b76438e21760700f"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","4e08e8aaa18b1692c4b85f38be1969da"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","aedbc804c5f4e00806dddaaf364fac10"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","453b715b0c250bb14e7c6253dab2c835"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","6f4c3638c9030dbc583bc4f72155eaba"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/Transfer-To-Hexo/index.html","c39384f80b2b240989f90ed5e2fc2fcc"],["/TyranoBuilder/index.html","806b5fcc4a86fb73a95f0711fe227c36"],["/about/index.html","d69e5c25313c9d7ef69a68514b8187c9"],["/all-discount/index.html","b8576a3829ac6dc120f134d30dcbb333"],["/animated-title-main-menu/index.html","59e9ae289f651311d725dd6c03da8df1"],["/archives/2022/05/index.html","5ab265e8c0bfe2844c269017b195492a"],["/archives/2022/06/index.html","fe12ad665658d7063c2540f1902fc090"],["/archives/2022/08/index.html","95bcde28718b2b52b0c93131a70fde2e"],["/archives/2022/09/index.html","fbe4a8d7e7d98e4524026af9bfe7618c"],["/archives/2022/10/index.html","dd1891123384ddf41d2d1d9387005ffe"],["/archives/2022/11/index.html","9db7c9fc83498046eb75be01a885b68f"],["/archives/2022/12/index.html","84aee16d69291c3e40f17c5d7d0ededf"],["/archives/2022/index.html","ac2ad90c345d5d7da81fe3587cdce47e"],["/archives/2022/page/2/index.html","c1aa934500870dfc7c7a64b2ee25c9f5"],["/archives/2022/page/3/index.html","a78d446761ec4721f543c912f72b5d10"],["/archives/index.html","3eb9cedbf0f372e2dab5f3816243d736"],["/archives/page/2/index.html","c74432d52333958093e5c7e5a0e47d44"],["/archives/page/3/index.html","cceb117177657ecdda310c6fdfd51c1c"],["/artitalk/index.html","635ff7db4a513a980cbe35bbbc698a8a"],["/butterfly-plugins-faq/index.html","0d1cc90167b391c9b975b582f3320c94"],["/categories/Announcement公告/index.html","5cc1b08db07e4a66e7719ebe3e89d210"],["/categories/Hexo/index.html","8a02307bf3b1858b56f20d07fccbb8d9"],["/categories/game-dev遊戲開發/index.html","96b3a813394e576cf4abb42da5c05305"],["/categories/game-dev遊戲開發/page/2/index.html","d2e41d9bdf5992bec77498c8364323ab"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","5fc5dcedac4adfcb77fbbbd6be3346ab"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","f74f3823f1f9c289cbe765dcda429189"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","900e47546c529424ed0038a47e6e4c05"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","80a5abf047230dec4554709b2c4bcfee"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","c1f4836450c8b48f9d1e666a793e1148"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","a337d24f8b82e6d8ff8a34fe7d7be76c"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","99d6d765bd98a5c1271b4fd9d84656a9"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","f95ce38b8c8fc84ecc368bb6255f09d4"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","1d7e0593b55966c192d9150a0f78fc33"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","d07462299d1408337eb82e7e104d26c8"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","e32a3a95d7365f7c64cdda630c52e2a3"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","8c722026f98ee54a2ea0f8cad0e731b0"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","6a82c9a7e0aa052f82be6748fa1a6fae"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","58badcd1ef080b4b3513c71a328bd4fd"],["/categories/index.html","38dc43bab4ef438750fc44349debec97"],["/categories/更新update/index.html","6b8adc1a0c2692f729f4fd398e957ff4"],["/categories/資源/index.html","0f65f737e873c0514e0bda4345a8c133"],["/change-title-based-on-event/index.html","4007b01bd4a6a35aafdd62ef24e64951"],["/character-stats/index.html","280cbc6d09bc398c0f6cf384b6d9e600"],["/chatbot/index.html","a6d18e6869e9d42486ba95739c659c1c"],["/comments/index.html","e498250bfefdbd1435f467f14d38ff69"],["/create-button-anywhere/index.html","324df0a80d5eee420dd12c27efb59293"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","ffdf79e28e21a5e02446a9ad441527e4"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","0271876910e9c1e914cede0d857de264"],["/css/rightmenu.css","5a11116af74db11f1e5a9098bf1eef83"],["/css/siz.css","c5f51dadd16d1eeacafe89ce413ed284"],["/css/swiper.css","207f536669f52b63ff254f011819b904"],["/css/var.css","e05139920275d4ad030f3946712b5595"],["/ctc/index.html","015436b117e76eff1c39f357fc6b2bb4"],["/custom-gallery-cg-screen/index.html","de297c027acaf81cd4c7e37669192cbb"],["/custom-mouse/index.html","1d2a91fadce2b47c8d22e72c486128d2"],["/custom-player/index.html","511d3ef91acd4e1849b02b5f2c65182c"],["/custom-preferences-screen/index.html","13a80324130a96c500a6723b10d40a93"],["/custom-say-screen/index.html","52cf681d106c6d8ff47ae6dec41e2d34"],["/custom-title-screen/index.html","f3c57fafc50486aed28a59ff3571ce09"],["/dice-function/index.html","7c7529541cf9cb344e4c9d18a4911f26"],["/friends/index.html","f8f1aa2a742abfcfcd5af335ecb1b29f"],["/gallery/index.html","a09875959dcc0c0e1e9612d4dd8c0b4c"],["/gallery/photo/bg/index.html","2d10306fac6ff23716f4dac9ac0afa3f"],["/gallery/photo/gui/index.html","2626990e81ad0a5d76afed76c1e1b4bb"],["/gui-017/index.html","ac8f8c24f9e54868e68330c21ece985e"],["/gui018/index.html","abb24e8b955f76bd0e322a2f2f0d09eb"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","6809814e70c0d3f03e7c76c7c9a9bceb"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","91167e31ea8ec60dde10464daf8ec859"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","0643e734b6d9d26f97c1d1cb7f8eab2f"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","3d2631d61f39834f7465af37160acea6"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","2743b52b3a957f66b0687942c5d71548"],["/link/index.html","ebbd85125a46c838a2d8db93a2bfbf92"],["/map-puzzle-system/index.html","22768c2434e3a4c7413ea0eb37ddec7c"],["/maple-effect/index.html","522df713361576ff53e66a55a5caabf8"],["/messageboard/index.html","a0364633f413a01f7a6144d1d8c87418"],["/new-year-event-2023/index.html","e1410b63244c6195e3948ba201c9959f"],["/newsletter/index.html","2d1f8aa7544c157e21d7bed48e3d96e4"],["/null/index.html","bf63d357d9dd7ed074e93309416c55bf"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b4579988b373f88790f8ffdde8ad9152"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","4e0656771248eb3940e39e30eb80b86f"],["/othersite/index.html","46cbd292c64ad6f5848b3c8530057294"],["/page/2/index.html","0ddf91977015ba38325affa76f085200"],["/page/3/index.html","023161f247e946be122c64e54e9c4a42"],["/pricing/index.html","f9498b295bf8f5b33b0b4d212a977db0"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","5c2ce13f94694d8ce0b61f1dc0fbb3b7"],["/release-017/index.html","9b9137e0a226ec5e5c8f81024bf0119a"],["/renpy-MatrixColor/index.html","a891a19c2546400dfc4747d27e6319bd"],["/renpy-basic/index.html","5b9cc143bafb97253edd64f546dcced6"],["/renpy-overlay/index.html","c0a9609780233b556b1f9a0f70bd8319"],["/renpy-review/index.html","1ceeb2d15609ab916c253ef4806870d1"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","0b63230fa48fadfb7e4a98ab92fd19fb"],["/rpgmaker-assets-menu/index.html","3613216ec5bc4b5ae502c6e841b2f969"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","3a2fc93f609d0499aa02e99086a5074d"],["/service-worker.js","b9e4818319d4adb5dccbbd7bef2b5e8b"],["/side-image/index.html","63f6aaa70302a93824d968078537b9a4"],["/snow-effect/index.html","894fdcb4158233bbed4f83cb73f12987"],["/speaking-animation/index.html","c73f09fb5722389724ce1cf7efe6171a"],["/sw-register.js","e5679711310e6afa714e763ea65768e5"],["/tags/2022-年-12-月/index.html","c7c6f9bf172d5ab4b3427ffc2afb1d5b"],["/tags/Hexo-插件/index.html","0413fb10019667de09013e0d539f622d"],["/tags/Itch-io/index.html","0be077e1f7ba7cb97db91c89baeb7644"],["/tags/Light-VN-更新update/index.html","1acd6d94472618ef335e7e124d8cf08f"],["/tags/Light-VN/index.html","c7c19ff73d3881bd9a8477c68411e0c2"],["/tags/NVL-Maker/index.html","d6a1af25be828a29f3147b0f3801f7aa"],["/tags/Premium教學/index.html","224c200a65e69d0c2f9baf33eb8eccac"],["/tags/Premium教學/page/2/index.html","a705aa1804d4ae6e73d6a61596d36ec8"],["/tags/RPG-Maker-地圖製作/index.html","4fa49be79c2abccbd3141dcb05195adc"],["/tags/Renpy-教學/index.html","e45c7f7f414e77c794815adede7e0352"],["/tags/Renpy/index.html","2c0111e0401b8b7fcaa80d66d54943da"],["/tags/TyranoBuilder/index.html","1a8d1fabdb3784c1bfd988f3d2e3e00e"],["/tags/UI素材/index.html","c409cca355769d74c8a9500c99aef27d"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","e065bd7e915cd726bc9f549d8b5bd69e"],["/tags/index.html","fa43f27b3dfa24a707368847392ba419"],["/tags/renpy-basic-Code/index.html","c25620dee776b13eb068eb8634c6ba2c"],["/tags/委託/index.html","dc42da90bd23052a30ce4c406f66bbc8"],["/tags/封面製作/index.html","3e8c5b8c0b3c3ae84ddf6a9eeb6276a3"],["/tags/對話/index.html","aba6b86ad54739602e8c198a9ca805e8"],["/tags/活動/index.html","154871b9320e59eba3c3c8d6eebb57ed"],["/tags/特效/index.html","072ea925e74dcd64c2c4518dc2aeeadf"],["/tags/特殊功能/index.html","ddc4c2f2a789b96dcfb8a513fe86af43"],["/tags/畫面/index.html","985b7139cf836370536febe72a87d230"],["/tags/網站發布/index.html","eb8cd051abbd51c0eb805b1abe4317fe"],["/tags/自架網站/index.html","c4336305d852687eea9e7c2cf5847588"],["/tags/自訂-Hexo-主題-Butterfly/index.html","e9c49bb45353c72a3ec1163e7e0f9fae"],["/tags/角色相關/index.html","777e24ff82d8bd21486979c3612f09cf"],["/tags/變量/index.html","220c4ff1f42cc6368e9bf839525889f2"],["/tags/遊戲上架/index.html","eb8bbad18078bf4b4f1d07814ef1fc9f"],["/test123/index.html","f6f1becd3c83012cc2424d9a9bc8129d"],["/textbutton/index.html","17ad72c9d11aea6842326f16738c4c80"],["/to-do-tutorial/index.html","7e3efff77edd03544bb0f06f50e66555"],["/tools/index.html","6bc4bce72c80ce7ec8a5c71fcf3fddc9"],["/tutorial-update-history/index.html","a89afa57efcaf726d112d030a4329c06"],["/tyrano-name/index.html","def0db1de8123d31b4f84e4f39f91a19"],["/undefined/index.html","91772ec9fff2d662c2587d14fad2e446"],["/update-20221211/index.html","500d5e4505ff8838d0fa387b9666bb54"],["/update-20221218/index.html","bbe6125ac0a1ae4df1b264acd554df9d"],["/update/index.html","2b63e3ac7700aecb3a153af5a4e76093"],["/upload-your-game-itch-io/index.html","0b2a67e231c6f07a7bfaf1f116642323"],["/use-list/index.html","20f884d78ccf66e38cf55904ce8434dc"],["/use-nvl-Mode/index.html","b55cdad3c92e56b889fadfc15cddb93b"],["/useimage/index.html","f26eb42776f39ce86145d780d5cbc3b2"],["/variable/index.html","a56ebdf520ee388d23a555172e9f0b61"],["/vnmaker/index.html","6ab999ac17daf9b88d79e4c51760e3ce"],["/weather-effect-tutorial/index.html","05aad808a5ba652b6f10339977f53eea"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
