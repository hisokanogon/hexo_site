/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","c76e6fc103d92d72b6f2bff32b9d9a2e"],["/2player-battle-system/index.html","5cedf0b3efde7adcad50df9002fa1fc7"],["/404.html","a2f9dfbbeb8a9325161f676e53e21450"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","b98a3cd217d0207c41018fba58e8f9b1"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","87989c805d0d10516f89697f9487e7e7"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","23a8e3b978c5a7dc08066ea6824afb32"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","e01a4a78a9b65e758df0e02f7512a6d6"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/Transfer-To-Hexo/index.html","60adf76ed44c80eabaa50b63d8dd7485"],["/TyranoBuilder/index.html","9d4b882e02b4d62235b305d2bad79012"],["/about/index.html","d62c97d0fe647f423d5a64ccb217fdf3"],["/all-discount/index.html","f6e5976583cb3700f4ea9ad25f280174"],["/archives/2022/05/index.html","5f8049a77b257fe8115c38966fe4434b"],["/archives/2022/06/index.html","92c5c8487a09a9750555c98b055ea13b"],["/archives/2022/08/index.html","9fea5f5f2b2cc5b4c2dbf357ae1d6b04"],["/archives/2022/09/index.html","dbd7fcdbc2eb1c8a123e6408aa5410b1"],["/archives/2022/10/index.html","e1a63dcbca3ccb43ec568c06b26e75a4"],["/archives/2022/11/index.html","f67cbdc15624fe50c50e154bd035efa9"],["/archives/2022/12/index.html","d06758245e571d33ed43a28fc0325395"],["/archives/2022/index.html","b4cbdad880e09c5c1d0e5f0e55687549"],["/archives/2022/page/2/index.html","80e3f713e30af6c69136ea436539732e"],["/archives/2022/page/3/index.html","22c72a979f6898d2f4149416397143d7"],["/archives/index.html","ec3a59b3184c3e69f5b1db06f1229e2a"],["/archives/page/2/index.html","f7d046f264ce8cda8153166a33dacb4d"],["/archives/page/3/index.html","f1ce1f4c49532908904eea14fb386b68"],["/artitalk/index.html","f42458cfd031655f56e159fc205a102e"],["/butterfly-plugins-faq/index.html","4a44cc444cf2a13ba1b869472557bc70"],["/categories/Announcement公告/index.html","a2739e752a10a2922d6504b349341bcc"],["/categories/Hexo/index.html","e7512b15dc9d642a553252d7cc4f7c6e"],["/categories/game-dev遊戲開發/index.html","7576c8cfc3222ee5ebc9f1a921ca0f73"],["/categories/game-dev遊戲開發/page/2/index.html","f4e89c678f8823f730def3e614f445da"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","913e736323b540c4555090fb0345e072"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","396a8d01b3326a20402eebe32967cc97"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","88d96dcd30f2bd4c4ca03a80ddab2a43"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","483e2b7bc9bda8a01260c239c92604a4"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","d3800355eeaeb1dfde04222aef381605"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","5d11c455946e189ad90edb7ac35f6c2f"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","6105f786a54893f6d040d57b2655507f"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","b9503719041597227f0b79901d81283d"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","68718a82dd827ce84bf5799be0870a90"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","1cb0b473921eb15e717692526ed6c846"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","c0cc7dcd826e77e3fd1d1dfbfe51f331"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","0397f4446eae381378784537a87a85fc"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","25884b33330e8bf8ac7fcb361edc8d14"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","083cac981135e897f4d691dc75a4adb0"],["/categories/index.html","36b4ed328d7c45ababbac2085cdbcdd3"],["/categories/更新update/index.html","3ad93201ab3f722daea194a9a1891395"],["/categories/資源/index.html","6d469480ada880967bf88e2dbf3ddc5a"],["/change-title-based-on-event/index.html","951a53b00bf2ab9d21301dfe03300338"],["/character-stats/index.html","043dd4e8743225134d4d8628c59926a0"],["/chatbot/index.html","56b87a1f16fb8f41d1cdb319c5364b6e"],["/comments/index.html","d7873b48ed0c2dfbb4eb6ee61b566a1d"],["/create-button-anywhere/index.html","c6db82e9c2a1c2eb252b42bcab546475"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","1a7411f470bc07a73f1f1432706f47f0"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","d7b015bfb0c5c077fef4d2594dff7515"],["/css/rightmenu.css","ffcbd3c16f7963c4864d2012a0cf6ba4"],["/css/siz.css","354c329c8d761bca753b1830e0f7d8d2"],["/css/swiper.css","b1f354cd630f89a10eec3ddd1208f0d8"],["/css/var.css","a4adcc578caed973323591034b267ebc"],["/ctc/index.html","f9a066203c2e21ca56acc498530a8833"],["/custom-gallery-cg-screen/index.html","a79669cd3a80cd3dfae812b107a61263"],["/custom-mouse/index.html","18a178aa8efe659fbbb59cd6ccd4c2c8"],["/custom-player/index.html","2ba132a715d71c1bc707a592b3de26d7"],["/custom-preferences-screen/index.html","7719622c4c4498626e44961c9d581bb3"],["/custom-say-screen/index.html","dd8439d1af92316244d2dca2b2283728"],["/custom-title-screen/index.html","c6bbef2f7553ae43a8b673166d793ee9"],["/dice-function/index.html","22a1ddae59b47ba18f33a2144d9c2104"],["/friends/index.html","df642685323a931f72a1719a46742b32"],["/gallery/index.html","3c5d5fc0a7e1f009e2850d9661f08b59"],["/gallery/photo/bg/index.html","fd09f4490ff75daa01a75e5cc0905f99"],["/gallery/photo/gui/index.html","e31c1f63fff5971f2af2fcaed89a7fe4"],["/gui-017/index.html","f623081ea1a4be5a93a8ea11b8944757"],["/gui018/index.html","ec39d2b86f51eaafda6e1f597f31656d"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","a8967f61bbb439c8a6e0df233d0cf37a"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","bce3263d76ce421c28d3a9e13ab6185c"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","e7d9fb97777d2dc0ee94ff93090d7fd7"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","033dc0fc5d1c10cdc5764788a3e516e3"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","66e744e14e151d58e0a6d2b90ed1365b"],["/link/index.html","9ede5a706ec342e94620ba8bb4ab839b"],["/map-puzzle-system/index.html","ae28e70d8d4f4ed4d095378ced101287"],["/maple-effect/index.html","33819deac39c89077131a11e337218b5"],["/messageboard/index.html","9c3ec2af68cb262d4220ec110524d810"],["/newsletter/index.html","7c83537b8f201e8203ef2ee616e129af"],["/null/index.html","bc33cd1e71dcd54a3a6d213dcb0eb9e3"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","5beb7973fae91ca52adc26ec42cd1a6b"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","bd477925aec92bda03657cbe4b3b03a0"],["/othersite/index.html","4f0297b9752946a81d303214e24f0f3e"],["/page/2/index.html","78e428dd5c541c318fe4ee2afd9a829b"],["/page/3/index.html","dd8c173bd8c78b84bfebba946ebd7c4c"],["/pricing/index.html","70d1fea853d1f4a44b50d0a5c9a0451e"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","142552ea1f1a5a94742fbec3a3a44666"],["/release-017/index.html","45d2af7757afcc726f65d6c18ccaf708"],["/renpy-MatrixColor/index.html","f089ab6bca3609152ede83f04cf52fd2"],["/renpy-basic/index.html","e5d0db661ff224e9bdee60762ad6a6fa"],["/renpy-overlay/index.html","f9aed594590eb60d503ff8805dcab410"],["/renpy-review/index.html","f1ad83824b8080a6ccf3a8a596470f81"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","942def8def05003751aa0ae960c5cdbb"],["/rpgmaker-assets-menu/index.html","cdc4e1a4f612eb9c61ca23265dc8502f"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","ee5130a25dfc9a0ea12b5961fc7a5b0c"],["/service-worker.js","137db29301343160c00ef1518bef4a54"],["/side-image/index.html","d7e22872d9656d15c05f36dd7c8cdcc4"],["/snow-effect/index.html","708b7f0f8fe827612c34c6561f49478b"],["/speaking-animation/index.html","1323b6027cb74211c5baa1221da14b0f"],["/sw-register.js","d964d259a6d7ccc190601e7604c0e134"],["/tags/2022-年-12-月/index.html","0e66e68bb15f7e4ee04143636075e3b8"],["/tags/Hexo-插件/index.html","6fabcba422d08a72b94461c44bd6ecba"],["/tags/Hexo-頁面-Page/index.html","13184c6517cb6b2b03dd64fc7a8b6e8b"],["/tags/Itch-io/index.html","5efcbd160b98e5e3476a04c93c7bff97"],["/tags/Light-VN-更新update/index.html","d095035d821547333fb7a6930ba33256"],["/tags/Light-VN/index.html","c2af0aed81e510f1cb78b42d36ffe24e"],["/tags/NVL-Maker/index.html","915c0f9f9db2fea28334c5e86854a5d5"],["/tags/Premium教學/index.html","23223c9c072485d6b6f399b7fec1798e"],["/tags/Premium教學/page/2/index.html","3bfcc17e5097a01ce13fb1bfca6c0ec9"],["/tags/RPG-Maker-地圖製作/index.html","92b07e6203048d839a2c0d78f4d8f427"],["/tags/Renpy-教學/index.html","df56854e43973475cd16f23b3302f88f"],["/tags/Renpy/index.html","5da10e220c2a768982cbb996291cf270"],["/tags/TyranoBuilder/index.html","317767f8c626378ec371336127e672f0"],["/tags/UI素材/index.html","c9779392e10d000087d3482c98c023cf"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","37144371c244b0d2976aad19e19acc12"],["/tags/index.html","f0859253d2346c423436424abacc9afb"],["/tags/renpy-basic-Code/index.html","72d2011aaebb774f9ccd621026a31300"],["/tags/委託/index.html","ce29b9ed28db037c0b15c520e6224f1e"],["/tags/封面製作/index.html","f4a1ae6561886e910485eb79078c918f"],["/tags/對話/index.html","3e2b592d294743e35d7e50b9d3c5a9ce"],["/tags/特效/index.html","b2fb4867fcfbfbb9d3294bf94aa302d1"],["/tags/特殊功能/index.html","8dd8c6db3cd46e8edbfd077851b094e9"],["/tags/畫面/index.html","0f3364b6771144cc87f269204eecf546"],["/tags/網站發布/index.html","52efc098ae486b1c963e3a8b1a69b95b"],["/tags/自架網站/index.html","090da3c22cc708ba8d965284460ce623"],["/tags/自訂-Hexo-主題-Butterfly/index.html","8e8d640b93273473343dbb646d43dc32"],["/tags/角色相關/index.html","3f268f79b4f6d551edddce65a0cc3174"],["/tags/變量/index.html","e43a7dcdbb47c603ac1f17d905b66dc6"],["/tags/遊戲上架/index.html","10649e70f4cb6be5af2d8d79525ee108"],["/test123/index.html","8058b4fe5da2ca4fd326b0f692d6cebd"],["/textbutton/index.html","aabe849a8f71fb4a80e09d364c847424"],["/to-do-tutorial/index.html","637288ee31cc0d6b769bdb16ac91af3b"],["/tools/index.html","004e617189926fa9b7edbf9fc6554ac6"],["/tutorial-update-history/index.html","7e0c282635e74b1e7ff21fed0e66daae"],["/tyrano-name/index.html","e976f5954bab2facd54b5aa88626e757"],["/undefined/index.html","19c6d3b34077bce92ed3bc59985e97b2"],["/update-20221211/index.html","3d15fe29919b275ccfaefbfa9538493f"],["/update-20221218/index.html","6098a7b21e45b9514d2023f0e9a0b3d3"],["/update/index.html","699930d2bf7dabc9da12f5d2b69e254e"],["/upload-your-game-itch-io/index.html","42cf2d68b9334cd1056b5bb72ccb6ed5"],["/use-list/index.html","c382fd6b121a345314702d28c267410a"],["/use-nvl-Mode/index.html","6b68451c672f874c16c5113bc7e91c42"],["/useimage/index.html","bdb5a78b69c44d36d9dc24df69878005"],["/variable/index.html","a0a5d2beaee4368ad0b382a092437115"],["/vnmaker/index.html","15db388b1d0397cadfdabc37a2ca2061"],["/weather-effect-tutorial/index.html","4b0cc3a35068c81f3c668ff8361aacbb"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
