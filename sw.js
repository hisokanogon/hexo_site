/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","6682f60c5f3551ee2934d4ab0190523f"],["/2player-battle-system/index.html","cc5d44415f305a3ebb00057c75965297"],["/404.html","8dc0bc3f9c2babaef6212be220ac0073"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","0d14c1a537224f135154b8da290274d5"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","2ad14e8362df42d6af5ff91faf343a93"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","84882d7e24295c7c87176788c8e98a55"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","216a952371a298140a3e2f975d737ca7"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/Transfer-To-Hexo/index.html","b202a00dffb9d6e26d0814432aa39d66"],["/TyranoBuilder/index.html","2fd3249345c5990a71b03a60cbfe6808"],["/about/index.html","bdedb28fe45d837b297f3d1fba18781a"],["/all-discount/index.html","d9bf7dccb1d93ce8f40e91a370f2ca01"],["/archives/2022/05/index.html","242f3f30e121e4c1e1d86f9efb5eb2c8"],["/archives/2022/06/index.html","8ddbdc1ae34054f26deb2cdbab596654"],["/archives/2022/08/index.html","862b18de832378c112bd57a30ec86d55"],["/archives/2022/09/index.html","26995574d8283f0d9555aa78ad28b0c3"],["/archives/2022/10/index.html","e08b3544962f8a05f9174c1f56f0886a"],["/archives/2022/11/index.html","d373a17728448efc25127483faa4c242"],["/archives/2022/12/index.html","fdcd17400856db4c78097d00659399a8"],["/archives/2022/index.html","2aeba7bbacdcb34d831424f906f7d7ad"],["/archives/2022/page/2/index.html","53c1ca7cda420aaa9b97426faa02c60f"],["/archives/2022/page/3/index.html","fd1977624712734bc80b9420ec180e70"],["/archives/index.html","5ba6ca2083a77e271748198f39ab88ce"],["/archives/page/2/index.html","8e4390f0facf521b07eb9240b8b3eaa7"],["/archives/page/3/index.html","0f6e765858a7472f3693b3a782d628ba"],["/artitalk/index.html","48297898633c4712c3b52a71f9ffc410"],["/butterfly-plugins-faq/index.html","68c12166d8186eae99964f684f5cf511"],["/categories/Announcement公告/index.html","9426c187c3543b4561daa02e23917317"],["/categories/Hexo/index.html","39ccb1bb7f99829f1f8f4fbb93d6e7a1"],["/categories/game-dev遊戲開發/index.html","0af1501f8a33d58bef12f35b5085b881"],["/categories/game-dev遊戲開發/page/2/index.html","c5dfc0503034a2bc0c108a4c5798bdfb"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","bfa8cafb2330a73ebf8592472ac71725"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","be1d5133b70ba304f1dc6bb4e73600d3"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","437b72d90e712365b6e8ee938ba20729"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","94e31a61417d248bf8f58a35bcc5dd27"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","436734b6ea2aba7a5f6cf2e3883358e1"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","2260954afb1221d3c116a7fee74a681f"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","f7d8f7ddcd9fb19215c9ef67573da126"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","96a927b6b82ac8980505fb8db5821e1c"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","6d8181aaf5342d8012adb1a651ad4ede"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","ce8493dc6404f19961e89e747c15071c"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","d2d88276ee126be01c6ef093a13caa3d"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","8c4d9405131bf7edeaac3316e45909ba"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","5c95064d05160279fe8259141cd9ebb6"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","3a3f64b7b05fa615d50f72b6967c5313"],["/categories/index.html","d433cfacd981324f5c796f00d92f3c87"],["/categories/更新update/index.html","ad006ecda314eeff445f118b1b4f0522"],["/categories/資源/index.html","76274493b074827ee9b44c2b2344093b"],["/change-title-based-on-event/index.html","476bbec9131f07f5b4de8a00e43a7d98"],["/character-stats/index.html","d9ba665bcf0ef6ac4eb7ecef3a1e8b08"],["/comments/index.html","52772b396e30ecd9bbab6ce8d050c10c"],["/create-button-anywhere/index.html","c57abae956a8a356c51609c81a7fd811"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","1a7411f470bc07a73f1f1432706f47f0"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","d7b015bfb0c5c077fef4d2594dff7515"],["/css/rightmenu.css","ffcbd3c16f7963c4864d2012a0cf6ba4"],["/css/siz.css","354c329c8d761bca753b1830e0f7d8d2"],["/css/swiper.css","b1f354cd630f89a10eec3ddd1208f0d8"],["/css/var.css","a4adcc578caed973323591034b267ebc"],["/ctc/index.html","e87b16bd06effecaa085781441b2ed61"],["/custom-gallery-cg-screen/index.html","a908cdcf6bba626f5c781be86ad206e0"],["/custom-mouse/index.html","294c834ad3fcce2dca8e1facdc00e855"],["/custom-player/index.html","d6615812485fedeb2cf3d3eb07f9ce60"],["/custom-preferences-screen/index.html","1369fdab1283589bcefa6a534ac5dda9"],["/custom-say-screen/index.html","ae7fa0ee0464ae882b6c6b7f3917e1b6"],["/custom-title-screen/index.html","96a7ce1e83c7be959ee5876968e308cc"],["/dice-function/index.html","ae1a3ac19c2f2709ef565c635b502be5"],["/friends/index.html","bbecde1516de1c389d435e4ffde251be"],["/gallery/index.html","8d81632906939042aeab31878749dab4"],["/gallery/photo/bg/index.html","6fcfd9cd359b69740b20a4ea92b1fe37"],["/gallery/photo/gui/index.html","1d0a7ebd3190e3b840cdd7d62ad66c49"],["/gui-017/index.html","ccc75e5b90249a3a16bf8505851bcbed"],["/gui018/index.html","2b6d5a664154b0e3f48a4fd7bd457395"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","5c861d5bcb5b1e7805265fedf844cca9"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","84f0435991f7dc4da943c5c3ccd8c967"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","d7b121af1ee04b4f55094e8361743574"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","52ab438d4841577c5351068691050596"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","49f3c88ae039a4149fd2b5950615c789"],["/link/index.html","850306a5812fadcbc3584fcb0a7f61e1"],["/map-puzzle-system/index.html","8c0bc1cac5a40c71790e7aa5027c77f5"],["/maple-effect/index.html","0f25df99af36d8152a2613d4357d6801"],["/messageboard/index.html","1cdad6cce61ecaa088c2990361b274b5"],["/newsletter/index.html","15e1449857b1013785b79d9f3d68676b"],["/null/index.html","ad931771d0b7f1b0592e2fcd2b42dad4"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","bcfb5a91ce4a1422968624d672143b56"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","89a5d0b9d5afb67bac46b080d697b031"],["/othersite/index.html","a805887e739a7dd3583c9403f4a0fced"],["/page/2/index.html","8e74a701ed3217cccc1ea90d9e1db16d"],["/page/3/index.html","b687cd0a49c4b90f0009d0cb4d31b53c"],["/pricing/index.html","38d34f0a3df0a15df17b9402d9f228ee"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","7836484465fe269fe8d2bf03e82dcb58"],["/release-017/index.html","0d8f6bbd82547aeeb5126f8a5bed3acc"],["/renpy-MatrixColor/index.html","a012e12961086981c8b2e605ca78a150"],["/renpy-basic/index.html","9197791bc3912cb98efd0145628e6618"],["/renpy-overlay/index.html","a1e72058b553db4ae7a4968b85ad836f"],["/renpy-review/index.html","da6de2e7c1b75b980bad47834348225c"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","c15961c54f5e87e24ec49079808915c8"],["/rpgmaker-assets-menu/index.html","435b09e1fb53bfc15867ddfe9ba3b0ef"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","1d9335c2ace1056c8521f5166d5f93b5"],["/service-worker.js","ae9820201ddac5b77a6a52c05839b1b4"],["/side-image/index.html","bdbc62d999214107f1e3addff7dcff0c"],["/snow-effect/index.html","2f33043a60088515544acb913dee511e"],["/speaking-animation/index.html","ed8dced76e4c673a49dbfe02a61d1ad3"],["/sw-register.js","94213fe5d3fe03e4bc1c14815b04ced5"],["/tags/2022-年-12-月/index.html","a2cf5f6e4d320baafcb3706a411632ae"],["/tags/Hexo-插件/index.html","a36e0132d012a74bfb9a79e5a3e9b4ab"],["/tags/Hexo-頁面-Page/index.html","e9b7c02a5bde7ef161cb4ef4a259eac4"],["/tags/Itch-io/index.html","a94f3e96c04bf970167447a1d5daaebf"],["/tags/Light-VN-更新update/index.html","4bb1a16c10449e67c55c795b9fadc49c"],["/tags/Light-VN/index.html","54ac93fde6416c265f25183ec8b7408f"],["/tags/NVL-Maker/index.html","f61bb40d13f53a15d9e9a43c2a71a238"],["/tags/Premium教學/index.html","55353cfe8103be035ffd1d7c84d063b4"],["/tags/Premium教學/page/2/index.html","3e43cf457ddf27106bb93f0223b85b32"],["/tags/RPG-Maker-地圖製作/index.html","d3378ac72087b78c409d518809bbf6a2"],["/tags/Renpy-教學/index.html","76d9dd40b1a974292f9f22c2768b532b"],["/tags/Renpy/index.html","e46667141eb51d6cdee53042c3950fc1"],["/tags/TyranoBuilder/index.html","8d4c5b3665de98d03ebb1891876c5adf"],["/tags/UI素材/index.html","267c9920f61c8227b89b9ae5d7f34fb7"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","b7d3a8c0ccfbd66b797c88cc914ff1cb"],["/tags/index.html","148331581ebcdea1df28940bfa37b51c"],["/tags/renpy-basic-Code/index.html","3fd5760294be99a9c2c2e4bc7c5f4aed"],["/tags/委託/index.html","e26cb3f85ae233d31c7b5837f9a9da9e"],["/tags/封面製作/index.html","8cf4766371151894ee6bc079c07e41c4"],["/tags/對話/index.html","defeaced5dc5492f5a528931bf62e1e1"],["/tags/特效/index.html","3efdb29131e7d465f6a263085bef660c"],["/tags/特殊功能/index.html","bad0537b7fc659ee4ea81732beb71aa9"],["/tags/畫面/index.html","854502f870bf26a5a24f6726db48dffb"],["/tags/網站發布/index.html","bda5a6e8aa8c20895b8a5a613e8e8d5f"],["/tags/自架網站/index.html","b6ee29a7543ae5b39d166c310209795f"],["/tags/自訂-Hexo-主題-Butterfly/index.html","0b21f5c32de41dff83cd379dd3f1dad2"],["/tags/角色相關/index.html","63fb4308404a5cd70e74275703a2aa8d"],["/tags/變量/index.html","602c6c799f668cbd064577fe67757cfe"],["/tags/遊戲上架/index.html","9c014fd4dbd3fb102f51aca32d28c919"],["/test123/index.html","83bea1e7808ebb55da160767e08512a0"],["/textbutton/index.html","518243b251395ee87d196ad92db5f45d"],["/to-do-tutorial/index.html","8d2b514c4f802496ab248103cefdb928"],["/tools/index.html","a2fd5a691615bd7c2a4801cd17570069"],["/tutorial-update-history/index.html","86b6d290b6e6b67e5ae8a10675968f46"],["/tyrano-name/index.html","d0720a067cec5f9da27c5eb83dcbe934"],["/undefined/index.html","f28a51dec56a643b07dada7a24b33f6b"],["/update-20221211/index.html","39fe1a1328ddf235a6442de0c13ceb00"],["/update-20221218/index.html","cb1802308a5a85963fde0c14518daae7"],["/update/index.html","e3854b31a1411ca563e3b3dd788e52a1"],["/upload-your-game-itch-io/index.html","d309d9e152bfea0edeaf31dc92798e8e"],["/use-list/index.html","4542a0853ee053d3365dfda6a5bb8c51"],["/use-nvl-Mode/index.html","9d466e76022301940f6e068c60f1466a"],["/useimage/index.html","645401cde4c3258368b1bc9d091638f8"],["/variable/index.html","374cc098f3c10f71fafa318de07f88bc"],["/vnmaker/index.html","99261306de18083ba5fff958bb4316c9"],["/weather-effect-tutorial/index.html","e53026b49da5138352dcb138347c8f83"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
