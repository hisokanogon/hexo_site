/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","ab6e4d69dbf4e6fd0e06ca7820d69149"],["/2player-battle-system/index.html","b5144b8240e63ad2a896ac16329505db"],["/404.html","b215717fa09750e1c8f5d484766beeef"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","e141a3ff5b3cfb65d55910150a64ec4b"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","0914010af37d79d4e47e3e9dc15a0ce9"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","7e498df893d6d5686381d468c52a33c2"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","2d8c6d6ff6d19770dd35d0168f7a5aca"],["/animated-title-main-menu/index.html","f01a6eb904b1867783cfa4638bde9d35"],["/archives/2022/05/index.html","a6b332ec6789ce7dfdbafab1ce8ff004"],["/archives/2022/06/index.html","54d9844890a0f24c3a80d9ffb01a8c16"],["/archives/2022/08/index.html","8990e919b4d4d0802fe0cabb75798894"],["/archives/2022/09/index.html","479f69d249a094c6b86bab4ad547c83d"],["/archives/2022/10/index.html","21aaedf21a9c0d5914c70ead5e4c6f6a"],["/archives/2022/11/index.html","50d4eafcd103ab11600a9d119fd8e62b"],["/archives/2022/12/index.html","61d5ebc6356c2dde52022ba37a097190"],["/archives/2022/12/page/2/index.html","fe801780443a69dbeafd28058e636ff8"],["/archives/2022/index.html","48dc5af19cc89d2e7f25b72b5227b22f"],["/archives/2022/page/2/index.html","d25a582e7bd3e4d1564db5a852859f3b"],["/archives/2022/page/3/index.html","573f2e9342488fc40717de646f867283"],["/archives/2023/01/index.html","9488949c869f663615167e6db8d13266"],["/archives/2023/index.html","1709e35ec93cc37689ae655ae93c3f47"],["/archives/index.html","7817d280479aecd3144180315427e5f6"],["/archives/page/2/index.html","65203f4ec5dc0ad1469b78eb6a616105"],["/archives/page/3/index.html","dd41811821c9212864debec7f8b83265"],["/archives/page/4/index.html","fdf72d4546e5587a3ea81d984fad7aa1"],["/artitalk/index.html","761be9cacf7ccd27f6e2b33623a79086"],["/butterfly-custom-tag/index.html","b4d3ee98fe2cbd05c04e82aaedc6583a"],["/butterfly-plugins-faq/index.html","4488c09bdf023ceaa26575b0701c15ef"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","d256fab375eb55165e0270b1d1b80615"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/announcement/index.html","3c6b42feba28316a3cbaf23510aa3c3e"],["/categories/diary/index.html","7e2ff5c4328346720f2c5fedb332835a"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","686902afbb828eae7b20b6b9f7a3461a"],["/categories/game-dev/game-engine/index.html","8c558f80d126fe2ecaa74b1f66e20c69"],["/categories/game-dev/game-engine/lightVN/index.html","a87fb90b63fd710a9006b7eaf21a7634"],["/categories/game-dev/game-engine/nvl-maker/index.html","d8b5839eca8a7c1581bb9cb9f83653a0"],["/categories/game-dev/game-engine/page/2/index.html","51d6360613cd5dda7d56eaba0820398f"],["/categories/game-dev/game-engine/renpy/index.html","d8319b2d23113baad81d2127d693d616"],["/categories/game-dev/game-engine/renpy/page/2/index.html","00edd44e30c6394182c6017b97a6dcfa"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","c1748ccd704aa73d73c7cd1b49580f81"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","c6b2636621e9069aa7dde58bb8852dc1"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","66cd1a962cd2a52a4a52dfe303083143"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","386110727fad10ce9d1a1916628a2d4a"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","1d6fee66781bc31ce75007051b882548"],["/categories/game-dev/game-engine/rpgmaker/index.html","f75e04f3e3b68fc68301d7b9aca96a2c"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","5ab0e3b2fd1f25447c4d6144c1a51266"],["/categories/game-dev/index.html","ec5c15add19c3561eb2534680206884b"],["/categories/game-dev/page/2/index.html","7db142220789c61cde3468dfd233da54"],["/categories/game-dev/page/3/index.html","275ec1814a023235199d27113e6dda49"],["/categories/hexo/index.html","2672c67c141a41107d81c35ccc31cc4b"],["/categories/index.html","3bf999d2ebf839e359d3ab5679c05d8f"],["/categories/material/index.html","e116285ef49edf956cecce53faa6900c"],["/categories/update/index.html","328c75de84798c2a5109f9e72a927f1f"],["/change-title-based-on-event/index.html","ac9447081ebf077fa2390712fca885f1"],["/character-stats/index.html","53b0b17efa1bd8817f2e2040845cb3b3"],["/chatbot/index.html","855cf55842bbb4042c1f1990313a5eb4"],["/comments/index.html","d9e724955ff16a4041be229714e8e087"],["/create-button-anywhere/index.html","a909fd918963d10eabbfc906af295383"],["/css/eurkon.css","0cf693697887cdef4f81b765ff15e9c5"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c8f629f2fb051bc1349e5da9a6cf08b2"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","09ed36e570a84f2305a0e843c32e4ec3"],["/css/rightmenu.css","9976ed5c1fa3f018aa61aad2ec0c5c08"],["/css/siz.css","9770e00c2a86109e37f2abab1a62c542"],["/css/swiper.css","ff60f485e4eb7808a622f22f5d640dd3"],["/css/swiperstyle.css","17e966f6bdc95d56e23468e8b70041a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ctc/index.html","87a4720da827f6fa9e6abb848af9d1ad"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","58531734b380ef7a4db63743fba4bc6c"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","7eb657508a7f7f4376c8a072afae1f58"],["/custom-loading-screen/index.html","b71fe46cc98bdb3130f663a833bad09b"],["/custom-mouse/index.html","92775fbe0f83c55a4ec9d794a999bbd4"],["/custom-player/index.html","dce7811330b2072ba1bdc53e85f21c22"],["/custom-preferences-screen/index.html","dc3bfcf5d60a24fb96c199ce703659e0"],["/custom-say-screen/index.html","77df999b08a7689b1a31d1da1a455423"],["/custom-title-screen/index.html","1a66011075833b8c72eda1a9bf2bbf96"],["/dice-function/index.html","04fe02bba5dbea3863e1e2471aca867f"],["/friends/index.html","6ee1dfdeaf289dd6ae8ac713f9941e1e"],["/gallery/index.html","9583f795a126f7b741aa8c2eb85b35f7"],["/gallery/photo/bg/index.html","148579d50d1bbaed8aeb4db00451afc0"],["/gallery/photo/gui/index.html","8ce29c2fde65187d2837c5b0dcf50f72"],["/gui-017/index.html","0e85d878a116345b5e55d9c13bf79c00"],["/gui018/index.html","8085fe779ec030c4846155efffbcdeca"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","0cc5b96a4430f99bd81a46ae59ac8a08"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","9c282711e2e6d2c759a4d2ad48a39b26"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","6d5ae33ebbb03a2e046afec4bf1f1e9a"],["/inventory-system/index.html","d104f613d256ac1f6f29f9bc11efa323"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","8bf5bcd92af4a73aeedca16e01c05c6e"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","16e6decfa91e6d914d329da0a9bc635c"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","bc890033979355d7fc437e45a2388c43"],["/link/index.html","82bde1ea3458022d1f720ffcceb01edf"],["/map-puzzle-system/index.html","88cef0d1ebf52fbb407bb9268ab88668"],["/maple-effect/index.html","43013158018e0a5bb95ccbca82f3d92e"],["/memberships/index.html","e1bbf0f71cc598a0164955d283b80f6a"],["/new-year-event-2023/index.html","1b7d19a39c42650cfc1784a648aa49fc"],["/newsletter/index.html","0e5b8a87f51585b870b51a24262b6ab3"],["/null/index.html","2de521b79fa02ad092c09a5596824ec4"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","cd22f2268ba333a656031d1becbfb16d"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","fe7facfeacb67b2b9ae9905a99f56a84"],["/original/index.html","45af24a28ff9b6123ea4f52dc6e2e175"],["/page/2/index.html","af9b2afa2dbf11c998a5b13a7dc994d5"],["/page/3/index.html","734a5e99ebb4f01008a23050af369932"],["/page/4/index.html","4ad198a2d1014e997a40ba3b02e157f2"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","b135a38cf6f92fe33afe1325f7be69e4"],["/random.html","47eb428305417ab0d9546d0a8fd7bf3f"],["/release-017/index.html","1aaeeb98842a2b45953e8bca16af4c16"],["/renpy-basic/index.html","66828a50397c0778a88f43a6b0b7a9cf"],["/renpy-matrixcolor/index.html","ab2daabe549166a103db32ae791c309f"],["/renpy-overlay/index.html","24e2f4c7c7cfdc391ded14d2fcebd0cb"],["/renpy-review/index.html","14fde9b875c4bae6414625e7b2fcdd24"],["/rpgmaker-assets-menu/index.html","7ef17c7dca556b535622398d09b72dd9"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","2145785ff0c388e20bcc6d98b24484ea"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","7ac29cc224d19e95359c3587b3872936"],["/service-worker.js","3bc5fcae09a5da0aa7b3b00f56af0182"],["/side-image/index.html","094585e7c0a6e68ef1a540a299547498"],["/snow-effect/index.html","ee4c6ea6a91c5179605c6b9e0ea5188b"],["/speaking-animation/index.html","d16d1bedc72c12c06023692b5ea98217"],["/splashscreen/index.html","d423fb933d7085ddc52809dc1cfd6718"],["/sw-register.js","144d87e631bdd51c480d8f893da12d8d"],["/tags/Hexo-plugins/index.html","d7d82f320db6f20c233f6929b7b278cc"],["/tags/Light-VN/index.html","3cac616f5d3ed916f75e2130062ac76a"],["/tags/Renpy/index.html","bdc91aecdcfa71f11735dcd923148fe8"],["/tags/ai/index.html","851f2c5a363966f5832f99cc33666874"],["/tags/butterfly-beauty-diary/index.html","85285f9ca97dd09f094fdc063935dc97"],["/tags/commision/index.html","b095b0f13c0650b3385127d73936d98c"],["/tags/custom-hexo-theme-butterfly/index.html","c45f5ce5e6002e0fcdd13d641e5bcebc"],["/tags/custom-title/index.html","69b6ef7477d7ab04efdf63a0efad68e2"],["/tags/dialogue/index.html","97cd91f676aa40967a468058d77f2159"],["/tags/effect/index.html","79d96739e89e38b67b83ef77a1419171"],["/tags/event/index.html","6ba6dc40b6ccb9f68e2315edf6fe963f"],["/tags/hosting-own-website/index.html","ea6a34e08e0ec651c5fc01ed4b672a64"],["/tags/index.html","d27739d8efbe7ee210882e4b97e5a9b9"],["/tags/itch-io/index.html","c24df267ea6ae4b918c7467cfc86bfcf"],["/tags/light-vn-update/index.html","bc91b8488b8c5f7d61a758ad8e1a37e0"],["/tags/nvl-maker/index.html","a286b6e688b08aeee73852af808f1fd6"],["/tags/player-related/index.html","b5095daabd9ac086ce61b9740c5b443b"],["/tags/pro-tutorial/index.html","3904c95b58fee8af9e3f7994ecab2dbb"],["/tags/pro-tutorial/page/2/index.html","c7aa03c564615fc54c596072819380cd"],["/tags/rpg-maker-custom-map/index.html","1ba08360c03e91092b7fc2002f5a377b"],["/tags/screen/index.html","755d72de5de8d970705221f76a1a16e6"],["/tags/special-function/index.html","fbc4fb70f44cc70f9c05d487a4fa71d5"],["/tags/tyranobuilder/index.html","e7aec8b581d75322b9ff2346529df28f"],["/tags/ui-assets/index.html","80560bebd9303d42efb7b484149a9d79"],["/tags/update/index.html","471a5f589d4288c9dcf323ad7c83e370"],["/tags/upload-game/index.html","fa0a519aa4e3c3d325c233920ad92762"],["/tags/variable/index.html","a773095bd09674b8224461d1c5284819"],["/tags/visual-novel-maker/index.html","90e1e2eafb45ad5b0a7b877149b12062"],["/test123/index.html","b8a35f3b7caf39a4dea2a2992c106891"],["/textbutton/index.html","0ae37087d118880747f10cb130abc513"],["/to-do-tutorial/index.html","a4767a1f7f91bfcd42bcc16f30e6d7f0"],["/tools/index.html","8c793f7cd81f72c8d8a469e895e6f139"],["/transfer-to-hexo/index.html","39d355a2209857be3b1856ad5bedbb35"],["/tutorial-update-history/index.html","071945dac61e3544edc95eba68f2e028"],["/tyrano-name/index.html","ae2d3058969eb9a03ceed9664635cf81"],["/tyranobuilder/index.html","3cefdb9fc0f4322dfe9a6a4ea72fbacd"],["/undefined/index.html","43ac63c203900903a0f7b069057a0d6c"],["/update-20221211/index.html","1a939a5abee3120314fbfe06dd88d5ce"],["/update-20221218/index.html","33b911805f5f0d8f5028f4201c773450"],["/upload-your-game-itch-io/index.html","692acbfc1b60102e04073db2df1d5e2b"],["/use-list/index.html","2b019cdda832312a6482ae39917ba060"],["/use-nvl-mode/index.html","5155e638f9f4406f010a190240465277"],["/useimage/index.html","c79083497722c611e92262bd59107335"],["/variable/index.html","d063d43d5d491707c999653cd8738450"],["/vnmaker/index.html","de06334d8602e9822c40cb0f314d7b0d"],["/weather-effect-tutorial/index.html","8b7896afedb1f926766e269f041af718"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
