/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","77a8b422ed943600719faea53a97748c"],["/2player-battle-system/index.html","3facea98d95c47971644db57ff01ce6b"],["/404.html","41d57d9b6c673dc792e653bf170b511c"],["/about/index.html","51e7db1c16a5c260bed0eae775618e3d"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","1b14576106b31b887456af1e6479586b"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","24e1e8e2f04450cb3616b6637812023e"],["/animated-title-main-menu/index.html","55c87d130149243f722c364b0815293f"],["/archives/2022/05/index.html","251d81c38f3f6898dc5eaaab486a5282"],["/archives/2022/06/index.html","5defa4a5ef0426825047c89db92fc6b9"],["/archives/2022/08/index.html","1f98409eaaed6787d70e3a41be2ec133"],["/archives/2022/09/index.html","a9ae0a2946cf3ab63fbecd58c6dc2f3c"],["/archives/2022/10/index.html","d00e46d025ce2e6efb29faf5973f7799"],["/archives/2022/11/index.html","6669cb8ba245d0d9a8e98636e585f88a"],["/archives/2022/12/index.html","82f5f29c40e8d11f314b5ea3acd238cb"],["/archives/2022/12/page/2/index.html","357f70d9e697deb5acc5090a9569d90c"],["/archives/2022/index.html","0a2b026285b6994b480b82cc3cd785aa"],["/archives/2022/page/2/index.html","206468afbabcbde1764d51bc0f8748a1"],["/archives/2022/page/3/index.html","050f8c68f8390d87b71fdadbb6ea57fb"],["/archives/2023/01/index.html","3d3137128036babfc451b8c34560653c"],["/archives/2023/02/index.html","e6a814e3732b395867aad88b40105641"],["/archives/2023/03/index.html","56b9a8426afe2c6a71c3b61acc0c7149"],["/archives/2023/04/index.html","0db4bee4baabc1ccb357827fb1dfbf2f"],["/archives/2023/index.html","1643fb8529d3478463ca663df35abf5f"],["/archives/2023/page/2/index.html","930372229d6b7b862ccf0eb477e96346"],["/archives/index.html","3b32257cf6cb74eefac81762029bdc8f"],["/archives/page/2/index.html","e2958330f2184756c26f6e4fb35d212f"],["/archives/page/3/index.html","801f4700d23a584ecf45b32f82536832"],["/archives/page/4/index.html","bc0901312ac80e07ade00dfaf9866c34"],["/archives/page/5/index.html","fc6cc20f9d8f89ba142128cf8dd61756"],["/artitalk/index.html","f3ecd48eb304e25dce9e3b9023b46726"],["/battle-beautiful/index.html","5656a5e8934f83b4d1308c1bd8097260"],["/butterfly-custom-tag/index.html","a3f49626695351721aef3cdc43468a8f"],["/butterfly-plugins-faq/index.html","9b33066dc4c6e7a1e6443f0bae199d87"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","39be2a909d71d0a9a42391ec50fe6a6d"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","252567e459fe3a8ae4811b2d9d277714"],["/categories/announcement/index.html","82f96ee5c47b794fa4f3d82d13267f4f"],["/categories/diary/index.html","7128da67cce8b03556c0b656b8111550"],["/categories/game-dev/game-engine/index.html","d51f1b653fbf866eca5b78391eeedbb4"],["/categories/game-dev/game-engine/lightvn/index.html","89fefc8aca2552af3ec4d1678982dffd"],["/categories/game-dev/game-engine/nvl-maker/index.html","d4a92f8996abc49a10ded29c13960ec1"],["/categories/game-dev/game-engine/page/2/index.html","75cf33fe13122b7720df7dd4b6423d98"],["/categories/game-dev/game-engine/page/3/index.html","fd08376d80f0da7012624ac2f2ad54c3"],["/categories/game-dev/game-engine/renpy/index.html","8da3976b11f0c06091e65081d6ab98b2"],["/categories/game-dev/game-engine/renpy/page/2/index.html","709f1975f2bffafe22b939625c9f0081"],["/categories/game-dev/game-engine/renpy/page/3/index.html","7293695b6ffab8d13c3f689a945fc01d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","e6705998a391d90c1ca6036bcb1b0de3"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","193082ad3327906f27d5e81e659ef7a8"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","780caef2746f5d2a6d95ab39e3d06336"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","f01bb0e590d9dd3a3f9928ce50508c43"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","1a941dea566c5ea20553eb238a7a1ebd"],["/categories/game-dev/game-engine/rpgmaker/index.html","a537838f8157564213baca3ba598a1cc"],["/categories/game-dev/game-engine/tyranobuilder/index.html","c7c6e9c5b13914e4892280e8f8052e5f"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","61ddb3e498189f69ec04efe08558a2dd"],["/categories/game-dev/index.html","2e9698bdc3e3138ba2875b1c64899a71"],["/categories/game-dev/page/2/index.html","160a5e35c0b1cfdf1df9332c33e8cc8c"],["/categories/game-dev/page/3/index.html","8feecca7f456154c23d9be5a62049843"],["/categories/hexo/index.html","06f182ca6990b0e1fdd98eac688d10cf"],["/categories/index.html","fee045b7053a8718116b42f4dbae0df8"],["/categories/material/index.html","4a55816d9746d772148bd9de709ed0bf"],["/categories/update/index.html","1de49ee1b5953f7e80dc112661af4291"],["/change-according-to-real-time/index.html","59b385d560095d62437915b347c6ac36"],["/change-title-after-first-time-viewing/index.html","316b3d6f6fd527dd3471bcbc5616cbfd"],["/change-title-based-on-event/index.html","2b4199ac41f8e719bb53a330aaddd33c"],["/character-stats/index.html","85d467c755da6e064b952fada74cc6d3"],["/chatbot/index.html","0497d70bec35668dff79cd517e495414"],["/comments/index.html","4808307f3942c21dd449af0c373574d1"],["/create-button-anywhere/index.html","614e1a4dc6d925bd5175d5dafcb67cd4"],["/css/eurkon.css","5b159c05b9aa1cb17658604af3eee37d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","1df42799d7dad1cac7c888e62780e519"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","8123df359eb4f6b7e40f97c83567f50e"],["/css/rightmenu.css","00769e3084c4511096187bb99434598c"],["/css/siz.css","e047998a72fb52907d2a89edbd921d79"],["/css/swiper.css","b68f0a5505b0b80f9d94e3ba032971a8"],["/css/swiperstyle.css","79d48c0a10dfdc1409cdecb607ba7431"],["/css/var.css","47f9f3f07e65d87573729f570f8e3760"],["/ctc/index.html","25d9fca088942df47333d8af41bc996d"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","b8db1d6b8ef11376db775a9565eacf8f"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","c649a1b8c2a2fb44efc2a5c6b499fcf6"],["/custom-loading-screen/index.html","f51af661af613d21e2942d66940fc0bd"],["/custom-mouse/index.html","5f50d0946dbd75ecc3009bec19a0f956"],["/custom-music-room-screen/index.html","ac0aae20dcbee472b382d65d04a5c539"],["/custom-music-room-screen2/index.html","66c37888931059306b0659e692c9fca9"],["/custom-player/index.html","3a8d4685d43e8ef81923c742c8b0b1eb"],["/custom-preferences-screen/index.html","975790b96f422526e2685d8a95750bfc"],["/custom-say-screen/index.html","58f4c852478fd70a027b96ca691255b0"],["/custom-title-screen/index.html","cbebb900b6c795b791536d782b76a3a0"],["/dice-function/index.html","554b300ba3af9791b19e647651486294"],["/disclaimer/index.html","d18f741b42379edd21d33dc8c76cfecf"],["/friends/index.html","4c89b80c6b7eccf3eafa41082056b1f9"],["/gallery/index.html","1848e3e22fe17f9faa9e9de9fe32ffe2"],["/gallery/photo/bg/index.html","84e63b67fb2c7aeb2b3902dff7c9692d"],["/gallery/photo/gui/index.html","ae80f0808ead097fa5803f2cd47288df"],["/game-only-text/index.html","c8b8f2a28ccbec6e2d3609d379ad962d"],["/gui-017/index.html","df95ba41ee6dc4d9a4c79e479065be15"],["/gui-vertical-002/index.html","4ff0339caa0db7a70847985231bf6b9f"],["/gui012/index.html","e8fa5c46f9796151800a896c009438a8"],["/gui018/index.html","ba231263712c422605edc4e61e585598"],["/gui019/index.html","c889319d3b3823735d641000dda3c438"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","d4beedb84ff5924e030905b0799aeb0b"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","afe47009ccc08a767eba875b43b4baa8"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","d6b1a7cdfe6baf59ed4678a68c73e127"],["/images-tip-function/index.html","32637420645e13d57f66883102ad507c"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","c9927c2667e8a815522da14dcddb25b5"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","68d80fa5bd28f3e8124ea6209bbb8bc7"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","39ea0489d47fe60f096689a89df93e1f"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","c5f38beaa36d07d9d2226f09b1c03791"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","4711767a258ecfe25c4ca8d3b9fcfc3e"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","bea46e2f5d580d985528a9cee88b6b1c"],["/link/index.html","69e7ab0ace198b60cbb3a94385ca8fcb"],["/make-butterfly-beautiful4/index.html","53920635719fb297e161e15dda74f141"],["/map-puzzle-system/index.html","af4d4b0807b8db2c33a19aa7289b24e5"],["/maple-effect/index.html","162d96ae56a02fec1891864f6f8483da"],["/memberships-2/index.html","0f4c622965b0f6a7e478c2b4d2c8b9cf"],["/memberships/index.html","8116fa781838e2d4a7b7da0a9e2bb3b2"],["/multiple-language/index.html","5b47fb79be157a8ddd618a9bb712e5fc"],["/new-year-event-2023/index.html","7ec8e59f621c57d26d8cfe22e4143d96"],["/newsletter/index.html","f1cee25ede8026ae08418baefa0ebd7e"],["/null/index.html","66411b9f7b1468ee2d4ed607109d8280"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","318fc4ddf4e6d1ed263645c811f9bd70"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","d7e0b44cd2a41d122327d9ebd8f943bb"],["/original/index.html","2055cf6c3f821307ba78b5cfd0d70460"],["/page/2/index.html","77fb11e4ad4c3cd26f9337c6bc2d35ea"],["/page/3/index.html","ac2346b926751813fe500261d7c0946f"],["/page/4/index.html","389bafead5b12e3e41569c874b88ad78"],["/page/5/index.html","e9d0c129e20cf6bac80f9817981f3ee8"],["/privacy-policy/index.html","92ed1578821d4b77a5193b3112f1de1e"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","85378abe85e70c1f251ecc966c2e10ff"],["/random-number/index.html","9269835ce30c2fb05f6d35c9d2a36a59"],["/random.html","767d5579559e3905d82efa851e72f8c4"],["/release-017/index.html","085b3057be08577c97415ee99a7b46cc"],["/renpy-basic/index.html","ae4e8691ad3ffadda005e591b1366830"],["/renpy-crash-glitch-effect/index.html","2db52e2fb43ffd6add01f26742debb3c"],["/renpy-matrixcolor/index.html","99d35ae29ef9710b96982fa454ca2762"],["/renpy-overlay/index.html","db7060d308be5f4a43233c66d2a39f17"],["/renpy-review/index.html","8672c2ba6c7bd212ffaab3339ce88642"],["/renpy-typing-effect/index.html","91d0a8c274d4cad25caf6cb9e3ecff7d"],["/rpgmaker-assets-menu/index.html","75d90febc8d1e2125965a7cf5f354a3c"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","979e25d1dcf58dd45a19d700152954c4"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","2f544c64e42b8f0962c5d45600d047b5"],["/sakura-tree-background/index.html","88a25438ec2899aebc0bce63732f900f"],["/service-worker.js","262312bb49d75af126a576f87f080aa0"],["/side-image/index.html","ded4a19d192e1c159033e8a23dde1491"],["/snow-effect/index.html","8d337098cfcd738578da0f0bedc80176"],["/speaking-animation/index.html","ee4d9077000b8eece161d4927c70f32e"],["/splashscreen/index.html","5ac0e3241b7b5b7bd9cd96698fd005f6"],["/sw-register.js","897b5aab800ecee41765415c9dea75b2"],["/tags/Hexo-plugins/index.html","4a545d2dd910ea76a68a09cdbec15309"],["/tags/Light-VN/index.html","765479b72a10bba07d500dc79300a8c9"],["/tags/ai/index.html","ff07f4c855ff4ee1a34bdc4530f70e7b"],["/tags/butterfly-beauty-diary/index.html","77e9498f103696c8a7d088e53eb37a12"],["/tags/commision/index.html","b61ea71b7a13d0c0ef66066f8404c242"],["/tags/custom-hexo-theme-butterfly/index.html","a3b8cff8c9dcd17418884a20770a8d69"],["/tags/custom-renpy-title/index.html","22d17a7a27de6aafa760075afeb0b9b7"],["/tags/dialogue/index.html","91c5b760633244a59f676d251cd8de35"],["/tags/effect/index.html","2c095d977e6f68e36f9cf801ba84214a"],["/tags/event/index.html","4ed3fa02a0799eefbd99f9963a98636e"],["/tags/hosting-own-website/index.html","fa25ad20b8a44c9fda24479c806f8690"],["/tags/index.html","9e93be1138bb4f8538a4d8e402c646cc"],["/tags/itch-io/index.html","171a6d7555f13b2179412c6a5285af37"],["/tags/light-vn-update/index.html","50a65adc4af8c64b8f80f58e2dd931c8"],["/tags/nvl-maker/index.html","651b32a6a14988fe8ee2e5f65a5a1782"],["/tags/player-related/index.html","b15f148afcb81b38ff03150c2c98a5c2"],["/tags/pro-tutorial/index.html","fd2cdbd0768f016cce839e8679ac79be"],["/tags/pro-tutorial/page/2/index.html","831cb1641c5fd2d899aeea54c778d15a"],["/tags/renpy/index.html","2cd61e95c80cd2eae5db7a48ccab2b70"],["/tags/rpg-maker-custom-map/index.html","2fa29ebcbf64b085edde079e255fa11e"],["/tags/screen/index.html","875f5abe620fff3e04f2ca13f61786ff"],["/tags/special-function/index.html","1f93fce1b14a999108c55079a8278ef0"],["/tags/tyranobuilder/index.html","e112c1e551f09046715328f8c7016edf"],["/tags/ui-assets/index.html","3248da6611af96681586fd5606be19fe"],["/tags/update/index.html","fa3216c6deafd7fe77438ff7a7998a16"],["/tags/upload-game/index.html","54ddca4ea7774ffcbeca945dca4413a2"],["/tags/variable/index.html","8250acb3c2e82c306e38e2d2cfeaa12b"],["/tags/visual-novel-maker/index.html","f349476d3409a39b4e87f844f6af61e1"],["/tags/封面製作/index.html","77f28225485089e38b3bf6f7b46d8700"],["/tags/背景素材/index.html","e8d34a8c4512246898efce50ef54d672"],["/tags/隨機功能/index.html","33b95f0518576a6d9c475fea27afb14f"],["/test123/index.html","2421120b1184471821d270b1f901835d"],["/textbutton/index.html","32ac94a29acb0508cd63b225423a4738"],["/to-do-tutorial/index.html","d074aec84f9e4f514a5d3920162e96b1"],["/tools/index.html","43f24d678b53b8a67a56b39837dc9738"],["/transfer-to-hexo/index.html","628d34a6564fd9f5568d7b1fc8116332"],["/tutorial-update-history/index.html","6bca2b6f0e8ef700d725ec1df981505f"],["/tyrano-name/index.html","f4efd12b4625626f70b959bf0c538650"],["/tyranobuilder/index.html","37217610da7c4096c7ddb6e835a5387d"],["/undefined/index.html","763344aae3c90b3b02c3367bf3e8a0c2"],["/update-20221211/index.html","9e1b8148de7907f6c0f16434e6d38900"],["/update-20221218/index.html","afeee6cb74e9eb1fd8e4f6dcf0af1eb7"],["/upload-your-game-itch-io/index.html","f1e127035955d0b37048db3f8cf4f289"],["/use-list/index.html","54073fcad434f1be3e682b88d17341a1"],["/use-nvl-mode/index.html","efdc393b5d9f7d71de6c6225485e0f8f"],["/useimage/index.html","aadf18e6bd0c4b7b942fe4f9828215fe"],["/variable/index.html","0f7c01fca99dfe8b3acbbbaba45cc7ec"],["/vnmaker/index.html","cf2c8027a03c205ef8be45ca5d270696"],["/weather-effect-tutorial/index.html","2cb6d99139ccb2288bdb311ed207d1d5"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
