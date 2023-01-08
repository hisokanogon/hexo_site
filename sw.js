/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","4034b9c45134c654b75806c7e20095b9"],["/2player-battle-system/index.html","6ed1a110996695dcec4cbef2edbf5dfd"],["/404.html","019b6df8c90a6f94cd8779aee29b0ff5"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","50eaebbacc01ba295338f244fbc398f6"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","02715095a229ae1d789c585667feaa32"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","b600e0d1e1b0c8fd5c12812db45ae18e"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","ed9f00f88071051b6c355dc798513f98"],["/animated-title-main-menu/index.html","b0b4b475306fdce50da3e56421727c18"],["/archives/2022/05/index.html","c38bebf35759074bfbffab97f1b25ba9"],["/archives/2022/06/index.html","5a0827714c907a7b801ef65233b8bc57"],["/archives/2022/08/index.html","c27dfd177a7fc32c7fd2fcf5476f905a"],["/archives/2022/09/index.html","2d6799cbdcd4483c45a9b4453345734e"],["/archives/2022/10/index.html","07685453e5ebdf21c680d78730377866"],["/archives/2022/11/index.html","f030665038c86110dd06bb263458b42a"],["/archives/2022/12/index.html","2b2d0e6716167bd06235a1642ddd3be0"],["/archives/2022/12/page/2/index.html","b7ff981efd78a62a67abeb599ce31bda"],["/archives/2022/index.html","fc97c29a89b9f5ab4f77bb9ba2a9871c"],["/archives/2022/page/2/index.html","1e292b758415acbe5767882261b569c8"],["/archives/2022/page/3/index.html","0d25115ea57fecaae13d82e2ddca57c4"],["/archives/2023/01/index.html","ec94ac7d67b58598c63b31dcc965da29"],["/archives/2023/index.html","20ce232d4b11ae68ed0ab02aeaeb9698"],["/archives/index.html","94fddf1b2021ac9161d998e96076e6e0"],["/archives/page/2/index.html","869b57eb40190612838eb2190140781f"],["/archives/page/3/index.html","68b416641344ccfabea5e55fa17b6f09"],["/archives/page/4/index.html","ed8091d6b76e5fd0eaca5e9d9d8dcbc4"],["/artitalk/index.html","2d211b4758ce95c61e4101956fef24c3"],["/butterfly-custom-tag/index.html","64d5e63a4cab619f5b1b1062c8933a38"],["/butterfly-plugins-faq/index.html","0d845e5bb87b6b5e7e7ecda5ee942330"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","368968b725be82bb5cc6bb2fa20f42f3"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/diary/index.html","671341783d4667c9e5b18d941819caa4"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","3fd8dc05da57d054b9fbe3f711af4384"],["/categories/game-dev/game-engine/index.html","291146dd7ed9cdaa974575f1e05b0d15"],["/categories/game-dev/game-engine/lightVN/index.html","c1c23f67546fcfaae0d638f5d041438f"],["/categories/game-dev/game-engine/nvl-maker/index.html","3685bf3fde3ca2ad48f5fa2c33a23ee1"],["/categories/game-dev/game-engine/page/2/index.html","b141f8dfa7b570977b9f3b20e1484ad7"],["/categories/game-dev/game-engine/renpy/index.html","daabb59896f37ccd9742b93cda3437c3"],["/categories/game-dev/game-engine/renpy/page/2/index.html","08878dd71681e2ad2310dff849b8d298"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","3043c80cc8634e8224e35604f81f0d04"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","1e572404111aba81a5c9a934f84290bb"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","77eb4daa1531075e054050174be90d45"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","1f3885df6ce7eb42218fc19fddca23cb"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","42b3670dc731d1387048353d14e53c83"],["/categories/game-dev/game-engine/rpgmaker/index.html","fd0d8d890f27f254a28b4847cd19c745"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","28f1d7be6b44f0fd54a5f6ab9462c1b8"],["/categories/game-dev/index.html","4bdcaf6c3449eee1d13c0bda52963e4c"],["/categories/game-dev/page/2/index.html","7324064d61ee0fd62a89e3a4bdea5040"],["/categories/hexo/index.html","18f5abc433f09db9fa9b2f98c3c79499"],["/categories/index.html","da7267bee5401d3cb1399e840fcd6735"],["/categories/material/index.html","8c079dffd1cd2bb99fea3a372f951d1e"],["/categories/公告/index.html","537ab753f6b1541c5ed56168f6bc2705"],["/categories/更新update/index.html","fab39d10094c9c29dae5cce33b9d3c4d"],["/change-title-based-on-event/index.html","e3c3d8b723772e5324eb3f88abc4201a"],["/character-stats/index.html","aa9257153931644dc12cadc388fa6ba2"],["/chatbot/index.html","bb113cbe15d3bc09e4ef21c898d00da3"],["/comments/index.html","82309ad8b6db619193ff504357fcc615"],["/create-button-anywhere/index.html","f88db8457df3f6bdbbb6054c810330f2"],["/css/eurkon.css","9b13d78deccccd8960f4e46e5d1b6c58"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","3de7ea0b6f721ff241ea2cbc9f222e17"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","42c6616bfd51f5941fb4503d38a32cba"],["/css/rightmenu.css","1c0842e97291fc61154c2a0995605dc2"],["/css/siz.css","d269b361916b361659a1e051c540a549"],["/css/swiper.css","600033667c67cbdfca1cac5e0bdbbf8e"],["/css/swiperstyle.css","d79d1d0fb94fa114f6f4db0db7d4607a"],["/css/var.css","0c9a33774890f7d1d98c4419dd8cc492"],["/ctc/index.html","5583f01e89cab99a25cfc2252caf6527"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","5cb343ded1590afb71650d638eeb0255"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","c75bf5535879420b08b950adf086431b"],["/custom-mouse/index.html","d2ba2508c158c00d1017520ff18f4530"],["/custom-player/index.html","ec91d91d5440457683414e684ca894f5"],["/custom-preferences-screen/index.html","4c4de27eb4646f15a37293753059ecd7"],["/custom-say-screen/index.html","9cef462470449618856cdf29eb4bdd12"],["/custom-title-screen/index.html","f4734edbc630ea5553c6c01c2b7a9c13"],["/dice-function/index.html","ac2356ab419828d8d41c67c14e88d3ff"],["/friends/index.html","b4fa47593dadfe8eafdd2d8a6a0c6c48"],["/gallery/index.html","fdd84fc8ec7e2b14158cacc65349d115"],["/gallery/photo/bg/index.html","45af967f080eaed01221b134943c995b"],["/gallery/photo/gui/index.html","a0e63f1eaad67f9538559ac34f985bd7"],["/gui-017/index.html","22281ef6c676f1e4612cce14381278f0"],["/gui018/index.html","96fcab1cd85d139443265b23b9d375a0"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","f218ca4f618e8511622f0ecadbeb5b58"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","95ff789e36ccc2a15b44e1202fde7282"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","eda2ed25967a985280d471c09a738fd6"],["/inventory-system/index.html","d494d27ecfaf1b6d81d630dce5dfa583"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","05ca1c5fb8bb4b62ceef86da153f64c9"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","2687b2c3188a374e4bd32ca0b24088dc"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","371c54205b2f7ed0a38858fa56d6c58d"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","568cf0439b3c2ad4f84eb477c3488c00"],["/link/index.html","de02ffbc37e00d6350700b3468b6e28e"],["/map-puzzle-system/index.html","9e2eb9c97e940467bb689321e9310805"],["/maple-effect/index.html","54d5537e8b0d365e22faf477d7f30322"],["/memberships/index.html","c3b75b68a83fd92c89c51bcd9538d98d"],["/new-year-event-2023/index.html","b5a48740ecd5ca679a46127b34addb69"],["/newsletter/index.html","0d164d625a62294d630e1001a7f1c580"],["/null/index.html","768cf9d56c98f99cefede44e69b92ca6"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","1fdfb6006f58a1870ea0c6c6f41b9803"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","4ee6be085ce1e88515e0945982f9039a"],["/original/index.html","e547c51d85338df225691c6dc547b393"],["/page/2/index.html","b32ee1c9410cb61bb54f9fa62666c240"],["/page/3/index.html","c41b647670bf6ce16f0cf1924f6bf911"],["/page/4/index.html","697399c7b191ea36a01ef5afef9c9396"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","27490f511ec77c3bca3904dc12484405"],["/random.html","4a0ae06111f8868e883779e78d4cfc1c"],["/release-017/index.html","9bcd86024ed42c6c6436f4fa5a7070b7"],["/renpy-basic/index.html","93034d16a8a754eb51fb1422c9406fe5"],["/renpy-matrixcolor/index.html","3b1f40b2c072d8f4d577903b3dbf4303"],["/renpy-overlay/index.html","6134fdd48b8f3b4298c8f25a5c0d8205"],["/renpy-review/index.html","25157792683039dc4e52b1c1883656d1"],["/rpgmaker-assets-menu/index.html","146fd7b0d0bdb613956406d9fd662a9d"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","4379f3ef111d73a0c8dc4f11c5ab126d"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","acb2bb8b54feefebc8231f6a70432a80"],["/service-worker.js","b66e3a9a4bca41468b700d99cc38d3f4"],["/side-image/index.html","c6c70310b791203cea4f4ef83d521bbd"],["/snow-effect/index.html","22181a41a4335f6bd38525f2d5f43e4e"],["/speaking-animation/index.html","28a4186b4039e374c177d7616272cd16"],["/splashscreen/index.html","90da940fe8407a866ea6899c82aff776"],["/sw-register.js","ca4586f0f55459fdc1315fa8941fc445"],["/tags/Hexo-plugins/index.html","751c7736bbeac26167d82e1920dd4301"],["/tags/Light-VN/index.html","d3a79179314fdd9ed5b0b6cd24cf05c7"],["/tags/Renpy/index.html","ceea10b4802708f41f87761ba5d2461e"],["/tags/ai/index.html","df8c74e85b75fc28bd56667c2d67983f"],["/tags/butterfly-beauty-diary/index.html","0b97a63472e782987b87ac29306d30d1"],["/tags/commision/index.html","3103620a8e32c33a75c5a24de50172ed"],["/tags/custom-hexo-theme-butterfly/index.html","5a0a75febe51a685862a5ee14a7cc7f1"],["/tags/custom-title/index.html","59435ed41606b01240ff176b28915236"],["/tags/dialogue/index.html","cdaa3674d06b6cbd6ddf1791be96c986"],["/tags/effect/index.html","96ee2ef999b7a61cc425b54c85dae359"],["/tags/event/index.html","8eae5688dc2ea65e6f70e36e74d7a168"],["/tags/hosting-own-website/index.html","fc800836ece72b4ee8fc893863d70031"],["/tags/index.html","721d19a986305cf6c529b17c53bfe4e9"],["/tags/itch-io/index.html","77a045a38cb68dee89fb5ae9b5eab770"],["/tags/light-vn-update/index.html","6a8634aa23b726583e45aa4c033a7c59"],["/tags/nvl-maker/index.html","c425d6eee381f9267629a3eb7310e0dc"],["/tags/player-related/index.html","7593c465f31c23a24a3a4c7f5f018d87"],["/tags/pro-tutorial/index.html","0c928addd87a2b0d5b6d43954bbcc10b"],["/tags/pro-tutorial/page/2/index.html","f6fed650bead71fbc010931502771aff"],["/tags/rpg-maker-custom-map/index.html","2ef2a9ffea7727004a55aff92af054f8"],["/tags/screen/index.html","99cb32bf54227d7ab1bf3012e9356a1e"],["/tags/special-function/index.html","5b92c7aebde5bdbf1f77d6d5e2836722"],["/tags/tyranobuilder/index.html","a7502f1d0b01900b0292dc274b4a39e0"],["/tags/ui-assets/index.html","0dc33cc914d3f7b4501adcfd6bfb5a28"],["/tags/update/index.html","4886314275a4ec9402d9df6e82bda5e4"],["/tags/upload-game/index.html","5565fc8e8a62318422bb3cbe6728ba3a"],["/tags/variable/index.html","65ef15d9904b104c296dbc2bcc0aa6a0"],["/tags/visual-novel-maker/index.html","dffeffaa8521b2cbac8ae66caf5eba0c"],["/test123/index.html","36848d8650745c3c7ad0fdb775b4701d"],["/textbutton/index.html","f4620e40b6aadfb3a163c91cab916fbc"],["/to-do-tutorial/index.html","68044df1d461e0b420473ad256cdb333"],["/tools/index.html","b4bae22bbb87b13c71f83fd157c67bbd"],["/transfer-to-hexo/index.html","9c4b947e98ddbb6a20aeaa51437d6d8a"],["/tutorial-update-history/index.html","dee2fa010ab7489a9041e124208c5d41"],["/tyrano-name/index.html","55c7894cef260833750f8a547258dcea"],["/tyranobuilder/index.html","83d93047b1db5585a8d222437b964dd1"],["/undefined/index.html","6518cce36a00d606d0bb9fe612294e1f"],["/update-20221211/index.html","de220ba8009a088fa8da4149824d874b"],["/update-20221218/index.html","5997768b6086ddd7dc9febf489ed843e"],["/upload-your-game-itch-io/index.html","f3a914a31661007674d611f92180ea3b"],["/use-list/index.html","72416d52e0ded8968b8f17815e4b9857"],["/use-nvl-mode/index.html","f2b7b2b8d01705008d51e331a9206b04"],["/useimage/index.html","0d24d4f01e5f0969985f25278bf6cf07"],["/variable/index.html","a070ca9dfc3dd8b5db19b926ea50e65f"],["/vnmaker/index.html","4733b5d42f7a5587a9502ff4165341f8"],["/weather-effect-tutorial/index.html","d1d9e45c309f73708cc2c769da97babb"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
