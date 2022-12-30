/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","262f8c3e3209d7858ac65d031ce7e734"],["/2player-battle-system/index.html","e2d90d516125b7d0acc777427543efc4"],["/404.html","a01e026492433f4a6742197d907046df"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","ad461493bed70207a87bb1076c3d8934"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","8753362e554b8bd5b97f63848ba3aa15"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","982c5a45cdad86621f7b662d77523570"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","dcda36fe87b3c48f7523b3e62dd54182"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/Memberships/index.html","b2d646843ee146cc5a10505d7bbd118f"],["/OpenChatAI-Renpy/index.html","1f23efba5494d2e0932806ccb72ecc5d"],["/Transfer-To-Hexo/index.html","de23c2480073bff606b6fa666584b0bf"],["/TyranoBuilder/index.html","6a734ce91f505950d2687597529a7f42"],["/about/index.html","def7ba8e2fbc5bd01ec85a49ffb47d26"],["/all-discount/index.html","80c8f871068056c6c73607029ca957b3"],["/animated-title-main-menu/index.html","257afd74f0ac87c2bf6f8b08d52fd184"],["/archives/2022/05/index.html","3da1c6eb2b69b3eacd9ab9ed43b0e774"],["/archives/2022/06/index.html","b403b417245378bc2273d756d0c9df87"],["/archives/2022/08/index.html","149fe3689abae2665c7ffed33626eee8"],["/archives/2022/09/index.html","cf1e153568aa01b582cabc409e041680"],["/archives/2022/10/index.html","51d61a7e531ebd17286955e28e95915a"],["/archives/2022/11/index.html","92d0d551039ecf789923bfd52200dcf7"],["/archives/2022/12/index.html","c49c7fd36961000fad8e42d005829ae4"],["/archives/2022/12/page/2/index.html","f6f441d26f90304c8ad3f6115509c9d2"],["/archives/2022/index.html","0bcb599a8e7e54a3ab05f358d320cb8b"],["/archives/2022/page/2/index.html","1901b916737834b5f99920db1a0dff14"],["/archives/2022/page/3/index.html","3b600abc92967041a5a6bd0f3f3c5a56"],["/archives/index.html","b631be74c21948125b90311e8bcf3b79"],["/archives/page/2/index.html","05706a633024b4883d2ecc28af447d18"],["/archives/page/3/index.html","9348a60b142661c32dd7c985824ea015"],["/artitalk/index.html","cae29c1068ccfd0684cb003ecebd0123"],["/butterfly-plugins-faq/index.html","9d6e581e1467e03dacd98a86d123383e"],["/categories/Announcement公告/index.html","ea0a7a56ed67813622aed6088359334c"],["/categories/Hexo/index.html","3fdf907d6810580fb9ae005748f19efd"],["/categories/game-dev遊戲開發/index.html","45c0a38c427f26ce9f0d466accda4fbd"],["/categories/game-dev遊戲開發/page/2/index.html","0ca5fa73b4ddb78fc196cae967b885ec"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","f5968f081d40c2169a5720882921d1f4"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","240ac491a6451d990ec50226d55bd3a2"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","4bc7ca788530cb940837d2a3f59380b0"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","624ec84fcef6269c568b5c796c6f48da"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","a0064a73a2ff5b90b4c38b73ba88bbb9"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","de42112933b0b9eefbed4f2dab6ec4de"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","fef92775b10508d881340ab42bfa61aa"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","4a6c3cd306993ffa67b050b73620ee61"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","6d7642c302c1a196ad3816bd1fc86a30"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","f0b0882343015f6b2111a0fc1e7f11bc"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","3dff63364cd817b1692f6e2285d962f7"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","78a05c72c87aa7105fbedde4819df845"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","ce2e4751b243d66c2785c1cfe63e0db8"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","060e480870f9874c5e69aaa344011e1e"],["/categories/index.html","d46abf240d3579129d0eb0499d8d2755"],["/categories/更新update/index.html","0dad4d6d5cd71b3320a9393bbcb24ff9"],["/categories/資源/index.html","305ffa1f0bf684137ae6c93b7749f00c"],["/change-title-based-on-event/index.html","8887de292dfb6093fc98b9e6569f9ffb"],["/character-stats/index.html","6f40222f9c46c6c150f6e2ea3b58329a"],["/chatbot/index.html","69edd4faefb4a488a11294eb46dcf4e4"],["/comments/index.html","8b944023b7c2c75eec2c780f52b56106"],["/create-button-anywhere/index.html","362fd1eddfefe4f1452f9c2692e7bb6d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","2117e76435ee804161d2421a38e51723"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b840dcba8c20771793bf5a6cbbaab009"],["/css/rightmenu.css","898d475241fcc0256a48170a514cfab2"],["/css/siz.css","255652e3558f54950ce532a147b53ed0"],["/css/swiper.css","c4c962f896899e14a32b2c5d8146c5a0"],["/css/swiperstyle.css","9fe8a097df91133b966e70adef430e56"],["/css/var.css","37bd38af64d22f17aadf44ddb1bd5e10"],["/ctc/index.html","35525a67fb1300843ea73ae57a191583"],["/custom-gallery-cg-screen/index.html","5006acb630a0af5abd6828a00bda9d7c"],["/custom-mouse/index.html","15cf9c476c2ca20698fac10c4b8c6e8d"],["/custom-player/index.html","b5e0ba5a49bfa1ab05a632a97cf52a69"],["/custom-preferences-screen/index.html","8f8d8bc3515d45e29d1b7b0b483a41f9"],["/custom-say-screen/index.html","0225a4dc9a49e9a472f0aaa4eec5bcb7"],["/custom-title-screen/index.html","d2d2c91d2c7acd8e94999f07cac35861"],["/dice-function/index.html","dd76c6584c08043653594862103a5254"],["/friends/index.html","95f3ec24f4afc81c1f195c9a953dd435"],["/gallery/index.html","c0c50ceae5d599832e9ed9462e3439a2"],["/gallery/photo/bg/index.html","c6fc841c6ca69710a9a166b5ea5916f6"],["/gallery/photo/gui/index.html","ea73c89bd0cfe42185f1cd50f6f362e9"],["/gui-017/index.html","fee59abafffdb0f06a25d6b46edd9bc0"],["/gui018/index.html","384210172bd0098909d522f8129b3c05"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","1d4d4c10456d285e99786bc6fccd6e7b"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a52c578d68e56f4475f4081092c61e44"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/images/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/images/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","8748aaa46d6ea8fe108dd4aabb8140a7"],["/inventory-system/index.html","52db4af153fb766e58eb26e9450e8c19"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","5543dfa1a677fcaee472dc1ccb2f80f5"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","23fd3bde59cffebde87838bf244ecec1"],["/link/index.html","30ff533f9d6195954e4c577b1f37acdd"],["/map-puzzle-system/index.html","7f9d56b3e6be583a46ea8594dba9eeeb"],["/maple-effect/index.html","4037136b112841997cbb887ac78fa52b"],["/messageboard/index.html","0e4a588c06c94bea96e64ee509ee1d05"],["/new-year-event-2023/index.html","6427cbcba938f676bf9eb2aa306c224c"],["/newsletter/index.html","48ab725ce5e7302c29ef43181adc47bd"],["/null/index.html","a69bc0db817a206bddee3b61f648ac3c"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","6a217bc2cf90ed6ff54006295895e175"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","329ad1cdeea9f0eb6e14177b7576fce3"],["/othersite/index.html","05cc57d42d0edd69cf7956807609f71d"],["/page/2/index.html","2db496f03f4a6450ab9e7da3a0e5482b"],["/page/3/index.html","2038a85aa593bbcdddb478384fd7e8f0"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","42a3887e532a2b69525d6e76105d6f36"],["/release-017/index.html","7819bd16dcd9241cde29d4130141953c"],["/renpy-MatrixColor/index.html","59e5ed6fa5bc79a5ae3cc423209b5dbe"],["/renpy-basic/index.html","5b5711a6252b1950eaf29b3a5c264e4c"],["/renpy-overlay/index.html","7b7dbdd84f951dfbdeda5d152d7391c9"],["/renpy-review/index.html","da1ab28ac3e4322a15c23cbfbdf197f4"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","414aaec98e178e3e6b8ab1985c50cd08"],["/rpgmaker-assets-menu/index.html","69160f4bcc8627b193097611e5a180ad"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","8273cd219b143a56178dd394d7461fc8"],["/service-worker.js","59c1e890ec314e81e5d19a868d8f651e"],["/side-image/index.html","871803a1d9b51c74eb13e626a9132591"],["/snow-effect/index.html","22f73062eda02a1932fa6e7a24a0917d"],["/speaking-animation/index.html","a23776bd42e35dc0f466d67a626d48f2"],["/sw-register.js","5955f1b4434cb86f5cb5390e2e42dd92"],["/tags/2022-年-12-月/index.html","6b8320d10ad7537e3e50b89d098b00a2"],["/tags/AI/index.html","c22c6511dffa4ad96946b55a732afd5d"],["/tags/Hexo-插件/index.html","ec20da1aed383ac4e21a448c60d48c1f"],["/tags/Itch-io/index.html","aad6d50a53e53a514cf7932332afe4c3"],["/tags/Light-VN-更新update/index.html","c8aa1ac154b3b9f7ceeca530b715e61f"],["/tags/Light-VN/index.html","37f2de295b200d8d3c39f366ec8a9ef7"],["/tags/NVL-Maker/index.html","23d9e747239117d1b308dda45334997e"],["/tags/Premium教學/index.html","0bb791916a77bbd44b4a82351caa63f8"],["/tags/Premium教學/page/2/index.html","e2bc7cd9bc6af0d5d6a1acafbded8ee8"],["/tags/RPG-Maker-地圖製作/index.html","f0c1e06b801105f4723376dd8e464309"],["/tags/Renpy/index.html","8146ab1d94d300e65fce8e7cd748e63e"],["/tags/TyranoBuilder/index.html","ea4ec542f218b87b91dbed1d85aace3d"],["/tags/UI素材/index.html","87930520b85ca4717e1dd7c9c53fc3e3"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","1d3a88200ca3ad070ac902ac540cc329"],["/tags/index.html","f46ae21dfbe20d647a3b31ae5c8194ab"],["/tags/renpy-basic-Code/index.html","2bf4012cc1d961c984533bb791cf1093"],["/tags/委託/index.html","4ecb6427712def593439f8742e1e01c9"],["/tags/封面製作/index.html","80ccf6182cc0097afe626c6a54959ab6"],["/tags/對話/index.html","7ee60b317b85e48049f9d23348c4906c"],["/tags/活動/index.html","8975b21df0d4e151f726ab9bd7855479"],["/tags/特效/index.html","27e6971a36a2b46234cf3f2423c31afb"],["/tags/特殊功能/index.html","9ffb1ed2eb8b1fc31963637a958cc1be"],["/tags/畫面/index.html","857c8883f6423c79ff6f95e3e62bb512"],["/tags/網站發布/index.html","13d6db9be1b710fd21b1afb0d66e5436"],["/tags/自架網站/index.html","63f8fab311b1fff35b67ccdd96a88fdc"],["/tags/自訂-Hexo-主題-Butterfly/index.html","d71fce14ff49c8d3362e83c4d7f6f54b"],["/tags/角色相關/index.html","0ed2f7d550f43112073e192f7d9a3135"],["/tags/變量/index.html","56cb2d4039e8ee5c309a77356f1c8cc5"],["/tags/遊戲上架/index.html","9dada3540945857d8dceefe6253a8f98"],["/test123/index.html","f6c35c3468c1a8e7bf1c2b22f2ccd4c7"],["/textbutton/index.html","1c4f05fd58326a02bc9eb27a4f50e368"],["/to-do-tutorial/index.html","ee2d1ed3354934d8dd4a8030f3202338"],["/tools/index.html","7b370e57df311b315b5b4109f473eb88"],["/tutorial-update-history/index.html","0e4de5fdb51155ffbefcb6c71f3f7424"],["/tyrano-name/index.html","8be4ac2354e0bd1912c9e1ac57fe59ca"],["/undefined/index.html","e05bac25aca43bc803cdec9d6f83586d"],["/update-20221211/index.html","f0d38cd37bd4c98896fb328d71c54539"],["/update-20221218/index.html","19e2adf2851d723f43c553947108e140"],["/update/index.html","7d465a22a20c411baafbd6cae00a6ffb"],["/upload-your-game-itch-io/index.html","b6365de2ae562bf31fa28cc1614cefea"],["/use-list/index.html","bee1fa4f855c9e75d1067648a48a5e79"],["/use-nvl-Mode/index.html","d80f52d56485956f966a455cdfefb06c"],["/useimage/index.html","2e12a503d6853eaeea189b3a536a5462"],["/variable/index.html","d94e557109d075a5cd006ad815d2ac0b"],["/vnmaker/index.html","657aec42d25dc6ab54e655004bc6eb92"],["/weather-effect-tutorial/index.html","2d34a545353e680db9a2ed89ba219f75"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
