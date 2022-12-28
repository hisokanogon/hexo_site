/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","340efd6dd265b14c9b0fa9390bd12c9a"],["/2player-battle-system/index.html","95ca0218ebaa91f04671734024ee84fe"],["/404.html","dd3bd81a801a89a846afc3a17753fddf"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","f96a84ea99a9b23d3f34155e11bb715a"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","2802a66d48c2a69c31f11b52bd3023fe"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","a086c77a35d370aa5147b65744e8ca52"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","cbe7fa109da223f4378b94d517c41173"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/Transfer-To-Hexo/index.html","5f3ff0a4aa486e6f9d1768fda46a3ba8"],["/TyranoBuilder/index.html","ea27fed0afa3ffbb70606b61fad416b7"],["/about/index.html","715b82bcff98f7859b54f01fbafb5aef"],["/all-discount/index.html","54a7b3ae1d1ad79f67ab0b198a7e6866"],["/animated-title-main-menu/index.html","d57ffea043f9e07b7ec7a7c853b98f41"],["/archives/2022/05/index.html","3f912f11aa121622e0ef7741c4577abe"],["/archives/2022/06/index.html","3ede9a59b2f1962f4fcefbc82ac1372c"],["/archives/2022/08/index.html","c0bb51439ab5db68e4fee96555821940"],["/archives/2022/09/index.html","305184586554dafbea289dcb1c73b0e5"],["/archives/2022/10/index.html","92b897606f3b884b31f2dbefb0e0b2c7"],["/archives/2022/11/index.html","6c32f111f3b390bb0047a0ab68092969"],["/archives/2022/12/index.html","cb94bd9877ae4bc1c5e58ccb177e5f58"],["/archives/2022/index.html","153cc8cc4f19bd35aa16bc55d6e5093b"],["/archives/2022/page/2/index.html","af0ec4df8b709e7b8374156e436ec033"],["/archives/2022/page/3/index.html","60f307712bff91d497d5ebb841ce3f09"],["/archives/index.html","66c9d9d3ab82d4b929d0f075f2f92af3"],["/archives/page/2/index.html","ab5dd77b0c37ee71d658a37dedded924"],["/archives/page/3/index.html","44aef4c6f37dd0800c2f40957b165485"],["/artitalk/index.html","ca161c79f04d295c77e8d8d3d7029b64"],["/butterfly-plugins-faq/index.html","d955bec471c054d88d4bd8bb6681b4c7"],["/categories/Announcement公告/index.html","d728a5778d619253f88832550ea4e4f4"],["/categories/Hexo/index.html","dd0c03ba7e0ec1afd030e1bac769faa2"],["/categories/game-dev遊戲開發/index.html","e083ef45c1e31925dba5ee620e954d8d"],["/categories/game-dev遊戲開發/page/2/index.html","3d903e5437e7aed51cf2e3ff12733791"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","fac15f5f2226c0e5d5059dc55746074d"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","d461a3adac545819fefa3855b3dfd1da"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","a04b6e952b3d82552866639d0230ea1f"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","ae269056185323751a786e5a4134b8d2"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","4d9c65aa411b89ba3938493b9746ea21"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","03af4000d971c4c1f3bf07c89686caa5"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","a51adbd06827ff42366c1a10c95acbd8"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","cef6cb806bb171519b5b5997cdb45b42"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","e25f70e1c41d6d8bc381bdd42e7e0fa8"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","750113034e0dfe770cc78ab762966f98"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","fc0ab651065803458ce5c569f91a8209"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","76c9d2df40ba3c686a6aef4772dc1594"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","26ffbf99e9e8e644966ccdff0c9d61db"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","dd7c420bb9dfdf409324663b344ffd0c"],["/categories/index.html","626544fd64dce18ed5d7f5abd476ca6b"],["/categories/更新update/index.html","8f2f4f7b71ca32aaec4dcf51181796a7"],["/categories/資源/index.html","c7a3d816051c719a545d923de4587c14"],["/change-title-based-on-event/index.html","109855a96b5d3a0357100cfa7077cd5a"],["/character-stats/index.html","9534a1d579fa1d7f3de971754c97d2db"],["/chatbot/index.html","2a9678d289830eeae2b883a2d44755d2"],["/comments/index.html","a09f9f31aba9cc07a71a4aab3e495175"],["/create-button-anywhere/index.html","98407e31c55ea8b424251f66e5d13af6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","1a7411f470bc07a73f1f1432706f47f0"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","d7b015bfb0c5c077fef4d2594dff7515"],["/css/rightmenu.css","ffcbd3c16f7963c4864d2012a0cf6ba4"],["/css/siz.css","354c329c8d761bca753b1830e0f7d8d2"],["/css/swiper.css","b1f354cd630f89a10eec3ddd1208f0d8"],["/css/var.css","a4adcc578caed973323591034b267ebc"],["/ctc/index.html","437ea9566e0e68f1ec7e1bd37e7544a5"],["/custom-gallery-cg-screen/index.html","3e2d91ed2db109c9e99218239471bb4e"],["/custom-mouse/index.html","b00b5af544e0966e970818f3ed72f9c5"],["/custom-player/index.html","6fc25ab2641fffd0851f757cdbff0da9"],["/custom-preferences-screen/index.html","89d31682c907142d8265cd767322069d"],["/custom-say-screen/index.html","652a5b48b4593f5cb8d53f1ed4b0fe9e"],["/custom-title-screen/index.html","b53813f5166b29698b7d16e3134cf949"],["/dice-function/index.html","7e6993f1b82f4764269f368311d70825"],["/friends/index.html","54d014650216cc1826f69ddae3e717ba"],["/gallery/index.html","29bd216d40375dc98d2214d00707fcaf"],["/gallery/photo/bg/index.html","6339d6354d4ed02a8e61f7c33d5f9233"],["/gallery/photo/gui/index.html","cd1885034b4e15c84b14debc11f07ce8"],["/gui-017/index.html","c605d4b55f20f1a3a20af6867cb0e80e"],["/gui018/index.html","bef7d599daa0d45dba0dff1b6ae57d81"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","3c5dd43493d64a7619ac6d328ea62a50"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","94d69a4f19f37b8ed049c76cdd180000"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","cf556b20607399fff243ee059558a420"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","2a4e5bc1cf5200f280f79831a0cf55b4"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","a06155a026d16aca01930cfc8b45b931"],["/link/index.html","dea53867649c9454ee634430dad39845"],["/map-puzzle-system/index.html","071fd82d6b1a0be8ccda67c53d770438"],["/maple-effect/index.html","ff2311bc90dfb119f7bf5aa42b644184"],["/messageboard/index.html","905ef0969910cd76725154088fb2d3fa"],["/new-year-event-2023/index.html","a95c77cedae1e65ac3f0cf00a889b9e6"],["/newsletter/index.html","6c3102f5df05f393fb7209495b57266a"],["/null/index.html","4ce95c44059e8d8a7f0331d078f1e943"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","53967eec1ce32aefb573ebda264b462d"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","59be8c4dfc93901aa848174ef442fb67"],["/othersite/index.html","6f7e32e1e01cee487e20148ec529ec33"],["/page/2/index.html","06341c7d8dbae81746859dbc239d95c2"],["/page/3/index.html","2c2eb7b78de34ab262548e4cca4766b3"],["/pricing/index.html","f2b1d4df58f32069dd0fe8554754b87e"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","0ff3581f661391b45959144d954fa6ae"],["/release-017/index.html","59b53961f4538ae6d93bc21a089df0cd"],["/renpy-MatrixColor/index.html","7e0651f2ca51d87ae703dd6ede1f7cda"],["/renpy-basic/index.html","917b6e3eed68a6b1601f68176fd5e80f"],["/renpy-overlay/index.html","96092b8eed72bf699e0c21f312e62204"],["/renpy-review/index.html","6f7dd551e9c8dc2d612449f1f4a2edac"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","a0430aa5bd0994f6845a9e1e11001790"],["/rpgmaker-assets-menu/index.html","9cada0e5363146f83a4909c398f18669"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","fc84e4cbc6d215bdfb260959680729c0"],["/service-worker.js","dd8287a761e78cc383862a9bb1c3676d"],["/side-image/index.html","cfcf71177d4f4304f264368794c3e673"],["/snow-effect/index.html","28b3e9c79b0f16aba541c7255afe8b48"],["/speaking-animation/index.html","d3d3f978c66866e0a640b2ba455ceff4"],["/sw-register.js","8c45b6e832edb65b90d5c89707e240ca"],["/tags/2022-年-12-月/index.html","7befa3a49e132e3b4da4c91f6acb0f56"],["/tags/Hexo-插件/index.html","e117a755fff9f06dee1b05375332bada"],["/tags/Itch-io/index.html","91490e89c59f002ebde5bf0e5a440817"],["/tags/Light-VN-更新update/index.html","cf6a30967eca49f16aa0564a46bd5a8a"],["/tags/Light-VN/index.html","01124f717440fc30a4ba2f8261ac5124"],["/tags/NVL-Maker/index.html","6a299569140c87de85bc2c39472412f5"],["/tags/Premium教學/index.html","a5f6a37b71fa9c86cd184d27fca9d669"],["/tags/Premium教學/page/2/index.html","23eef48168199790d72de20c6d28d97e"],["/tags/RPG-Maker-地圖製作/index.html","7e700187e30ea015181f44edebbaaa6d"],["/tags/Renpy-教學/index.html","d4df1965afcc24eabe288d5177c1c3d9"],["/tags/Renpy/index.html","38b5343797fdbc070887402acd01e374"],["/tags/TyranoBuilder/index.html","e71a6845f00d2e35f63d3290344ce5d5"],["/tags/UI素材/index.html","d158ef2cded9fca5bc7204e17a4296e2"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","c6477a12e1dcd46764070a0c95e7fed6"],["/tags/index.html","ed110b72334d90ef972fba4f0c85f257"],["/tags/renpy-basic-Code/index.html","5e7a0771f0dc7348538d0d7338180231"],["/tags/委託/index.html","072491c4a13920a25eca9c4e4191b058"],["/tags/封面製作/index.html","d76a160bd7e534bcde162afdf837d0bc"],["/tags/對話/index.html","e6ab2b4cc83bbac0a43e444c2b125213"],["/tags/特效/index.html","5a968135c773becd311b47ec2d729a8e"],["/tags/特殊功能/index.html","7ecb9173f006d5a37dc7084419a41c3c"],["/tags/畫面/index.html","803910e8d00d3c94c4618a9c79cd40b4"],["/tags/網站發布/index.html","c6fdd813f7c8777e6787e5b2ede23c78"],["/tags/自架網站/index.html","fb2f2f09b56b0fc7cee2636c177af0cd"],["/tags/自訂-Hexo-主題-Butterfly/index.html","78e2d859b279a96287afa5b4b6a3ae9f"],["/tags/角色相關/index.html","07d08d0237f4a446c4c80a8674ad3aca"],["/tags/變量/index.html","805ffcfcdc410362bbc0679039c7c9fb"],["/tags/遊戲上架/index.html","6f3869c7f3348500ae348e008845fc80"],["/test123/index.html","0bcbdfab792e8ecf9f7edf1412e78997"],["/textbutton/index.html","897b920777f66132086f08172aa9c5ab"],["/to-do-tutorial/index.html","149307456ab3cce49198829d5df38876"],["/tools/index.html","8408196f300bbff016f7123095c1842d"],["/tutorial-update-history/index.html","bdae460c3391182acae14eb4bd873f80"],["/tyrano-name/index.html","3ce9c0aa5beaf59f163f7da89772d099"],["/undefined/index.html","46c5d2f8151ed8b1b7257b5156b6b45c"],["/update-20221211/index.html","4d3bf57996d6643748d832fc6a31e39f"],["/update-20221218/index.html","f26dc909851882cbf819a1aad402f90a"],["/update/index.html","05e838403b3e4a55f3f5be90256340e0"],["/upload-your-game-itch-io/index.html","2e66cb527f522d5b0ba10634a96fc43b"],["/use-list/index.html","5d4973a1ede08b48be61f57c18f73a4e"],["/use-nvl-Mode/index.html","21632e9d8f5320a74a31f79e7169b7be"],["/useimage/index.html","d2afaecd7e2e183046ec3831139ca417"],["/variable/index.html","6df140a7353d45d515bd9a12d40c3bb3"],["/vnmaker/index.html","ed80c381c33442faa32dcca5ac6b4b1e"],["/weather-effect-tutorial/index.html","d1ff739f83c3dafad39dd41d8380f266"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
