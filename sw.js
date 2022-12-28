/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","ce6282ae9f7ae08cccd7092f2f7276d5"],["/2player-battle-system/index.html","eb0378b693327ef1f66ba6428546c1cc"],["/404.html","16a3f8199bef98983614219635c032be"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","9f009a16e9956634107741fcb580b616"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","84e83fbdca63263050e545bfa6defeca"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","c70a339a6d6b9445e03b5085b7036c89"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","9c3d10f996ca6215a04a0ca50b0ae809"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/OpenChatAI-Renpy/index.html","8cebf849af32250177fa32cc93bd4bfa"],["/Transfer-To-Hexo/index.html","d9a8a7e6e6c32b8fec6682796f6f6c78"],["/TyranoBuilder/index.html","9e5ea09c73eba14e71b3eb51681d37ac"],["/about/index.html","cfef4869eec7618ed8b7ba394ca48b9d"],["/all-discount/index.html","ba278dea2a76c91e6f7497640c74a627"],["/animated-title-main-menu/index.html","d8d0928130a90eb1bf97d3b03981fa64"],["/archives/2022/05/index.html","be03342865175b9596263b342df9d7e5"],["/archives/2022/06/index.html","5e1ed0f36be159036fa3bbc5511381ce"],["/archives/2022/08/index.html","d97b6035a99905cd152009b122b13542"],["/archives/2022/09/index.html","3ccc4b29a4eceb7109fce866d1da65ae"],["/archives/2022/10/index.html","f8874dc00d149dc309d55494b5a759e0"],["/archives/2022/11/index.html","353fbaa3eee75601e1ac970f114e42a7"],["/archives/2022/12/index.html","60c4028b82c7c1e30d73d4a442b3edad"],["/archives/2022/index.html","5f9912f19694b49f966c161da4118274"],["/archives/2022/page/2/index.html","19c33b94bf8236b96cd130c96d73b05f"],["/archives/2022/page/3/index.html","c440eb263672d3412659971dc0df04ca"],["/archives/index.html","b3f5dff65075219c8669befeb3ca9769"],["/archives/page/2/index.html","23b0363b8ce5be08ae9212266e9dc2d2"],["/archives/page/3/index.html","a3455b416384f315d058acd51bf35c12"],["/artitalk/index.html","12103681ccae86056c83af14fdcd9ead"],["/butterfly-plugins-faq/index.html","6447081d9cb81902b0f7aa2f749e5a83"],["/categories/Announcement公告/index.html","370c2e0ad127ed02bfeafb7f62f48731"],["/categories/Hexo/index.html","5be7113404aeba5a5e1db2683d81991e"],["/categories/game-dev遊戲開發/index.html","84a236a42f214e5c0c62a41ef8f9c06e"],["/categories/game-dev遊戲開發/page/2/index.html","9023fd6d8790befc472b0ec38324be6f"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","c9d6af4f1dfd7d3df51d37b1c3896fa3"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","bc95b54979f845593112a5114c913a0b"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","a366cfa1c3e595cc0d4aaeae9816205a"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","466db256fe66fac70e65c898abcad246"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","1d3cd44335f77893f8664b873778e2bc"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","0b1687c6ea10483c33e87738db5dffff"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","4edd0d759c71c89ecefe3c26df7d46b5"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","ac6f93e165594c6deaf44ed5f9c1327f"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","2f25bc66fd4df681f2ef126b0d58d8d9"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","e531c646c129cf8e67ba21f66703810b"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","87ad3520de30d03faa276f73795e79be"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","1da8a2163cc2a537bf8c3382be6388ce"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","c1b238144479799f467e007e4cfa7160"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","baf8fbd0d6c556e19c29accc2f0453e6"],["/categories/index.html","2390f2614b45a9a298a21deb759506b1"],["/categories/更新update/index.html","79ffa2dde16e6c87f18d8d58aa239cf9"],["/categories/資源/index.html","44c82bd6c1aaae280973ae7bb6e33c19"],["/change-title-based-on-event/index.html","467af841afa022ec89105cb9aa3bf737"],["/character-stats/index.html","90342a3cc973acc78f60c0b7e8d86a3a"],["/chatbot/index.html","fdcb1092bd45ce3368f6825522283542"],["/comments/index.html","9228b0bc5bba44cd2a2a5d73b9c29ea5"],["/create-button-anywhere/index.html","08d11f97237e2908fb551e56dd227fc0"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","864f35bb1d403ab6e657847c4e8b90a6"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","911d97f320dd421bfb163f4f8ccbf989"],["/css/rightmenu.css","334559d10e5661b8dd3fa384428caff9"],["/css/siz.css","48141816a1afd9027eba94621c197760"],["/css/swiper.css","f8d55a13de79bb36e8d0999c4f81c886"],["/css/swiperstyle.css","ea51b40b44c50b5616db614421a4edc9"],["/css/var.css","30d92a45b36aa1c9810ddc9559b62739"],["/ctc/index.html","155e6c726729597b2f6f8fb9f78a8111"],["/custom-gallery-cg-screen/index.html","b9ca7edea5c924a7dbf08ce1370320b0"],["/custom-mouse/index.html","d413b07613cf84b2aa6cd4947719a319"],["/custom-player/index.html","e7ec3fb74961c12add1cd1515efe5438"],["/custom-preferences-screen/index.html","5f53cb5de980fe2b558f22d0bb60b37f"],["/custom-say-screen/index.html","ea76c1f0dbedcc0b1ec2267ad4a9f13e"],["/custom-title-screen/index.html","305850f167adcc85401f68ab9ef44980"],["/dice-function/index.html","88d0a22f852de048fb3a8bc6758f9027"],["/friends/index.html","2ed1fe4597fb1f0d4ddeaae5f2d798c4"],["/gallery/index.html","e9ce87fe3fcf416d460159472d4aefd1"],["/gallery/photo/bg/index.html","58ccc444059fb7ef555da3fed7c5266b"],["/gallery/photo/gui/index.html","fa0630be103476f15ee4d6c79b867536"],["/gui-017/index.html","44ce8d1c96f620b697ad781a46380b46"],["/gui018/index.html","0f5dc2bc0746dc18eac6d909400fe597"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","dbfc90525d3d64c15fc2ee663e8fa34c"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","2e53734cb1fe1dec7137fde1134f1479"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","d7d3d858f56e90e88ddd23372b9d9e5a"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","3a1183aa7b07006c16abc7a0eb069452"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","ac97bb09e0867255b3e1a4403b2e279d"],["/link/index.html","afe821ad7ba81669ae743d6b47ef5a92"],["/map-puzzle-system/index.html","b26977e5a2ce0ee1be8c999b2fc107dd"],["/maple-effect/index.html","14afdbaeb0ec198574da381773ab4216"],["/messageboard/index.html","7aa2195ac4224dc437ed0874a3262a9c"],["/new-year-event-2023/index.html","a827e331bec5e7970a376e9d5165dd2c"],["/newsletter/index.html","4b08cdbb2dd30850d7bb637ff8c148b9"],["/null/index.html","9cc525d60d519e770d8a89908c42fba1"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","4c73a78d8fae5edb9a2458231b563120"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","32a17e07b3502597b722cbe102de270d"],["/othersite/index.html","02c6797c37f8313fce9dc3fd2b57b149"],["/page/2/index.html","40b681d0623003840e26ccf83563b5db"],["/page/3/index.html","6865f26575e85bc6bab9599f3da891df"],["/pricing/index.html","0c58b979581a2b0244f8438c7547c918"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","0613417b1463f3c475de792c152da044"],["/release-017/index.html","5ca8ce60833113e9693fd0b283f2f659"],["/renpy-MatrixColor/index.html","05de58dfecafa74734a3a2a5252a55e3"],["/renpy-basic/index.html","aa54349ccc0a50652dbe3c455ef01cc9"],["/renpy-overlay/index.html","835159ab53fd128b0ce6e944f11fc764"],["/renpy-review/index.html","937334eb253007ef00c54893da07fa89"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","4db713f80f53764b732a29c580fe01a6"],["/rpgmaker-assets-menu/index.html","bc8eb58fe6eeba4277aa607eb16f836e"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","c954478ac1f8b301f306b7fda5239c29"],["/service-worker.js","997a3e563b8572d98039ac39b56cf467"],["/side-image/index.html","94470e0e58930b57abb327b378ea3760"],["/snow-effect/index.html","15e09731694d7cf6330d79933bf3acd8"],["/speaking-animation/index.html","bb665fbb199eff04e4197e5fac615d6a"],["/sw-register.js","f141aa812db78196eae03129e4c9e5de"],["/tags/2022-年-12-月/index.html","295acd039d8fb790af6d583f1574f9e8"],["/tags/Hexo-插件/index.html","9451bed23644a4dffc5364cf6ddd69fe"],["/tags/Itch-io/index.html","be070c79ec1c2a9d5117de03721947ae"],["/tags/Light-VN-更新update/index.html","e3f121448e2dfcddcc1f97012734809f"],["/tags/Light-VN/index.html","62dab42b0b9a75a8309452a539570286"],["/tags/NVL-Maker/index.html","7c6c301b90ba5458bf512896c1d57122"],["/tags/Premium教學/index.html","6c261313a2ac9e46feffec2ca88f2e40"],["/tags/Premium教學/page/2/index.html","c059e830a80f31a1b0d40465764f89e4"],["/tags/RPG-Maker-地圖製作/index.html","b6322bba21b60733e44d99d4afe4861b"],["/tags/Renpy-教學/index.html","d5dc27dca78d7241e9dd5f98083f1205"],["/tags/Renpy/index.html","22ff28ec505aca8502022c53d8f75c66"],["/tags/TyranoBuilder/index.html","65c746ef73e60008097421bc7fecb564"],["/tags/UI素材/index.html","6faf83f47bee52d3e4c4ef51e26cdac5"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","ff48c9dd1fde65a46da3fc83c2b4d6c3"],["/tags/index.html","ce0f24a49c53b46bb6363b15ba73a426"],["/tags/renpy-basic-Code/index.html","8c7c7e5e1d83541b4dc6b79a1b75fa55"],["/tags/委託/index.html","d0da7048975aac7850974b17717dad6d"],["/tags/封面製作/index.html","5a0aeb44c7d677409ccdecca5f3c1147"],["/tags/對話/index.html","4e355dcb54a68bc681c387001f29ade7"],["/tags/活動/index.html","85cb00df7ff79f5dfd41c5faca624afc"],["/tags/特效/index.html","f7ff1aef3f80fe1d868b013436eaa2fd"],["/tags/特殊功能/index.html","578c92462e8cece4b38a9a65a221e782"],["/tags/畫面/index.html","493e937bd927f237f0749dff4b6962b6"],["/tags/網站發布/index.html","1f8869294ebe1ac5b3ff21cc82867688"],["/tags/自架網站/index.html","2c8e23accdc85457e61e2bc99143c1e5"],["/tags/自訂-Hexo-主題-Butterfly/index.html","60aab8c1f3e68eb2b46556a92de0b13b"],["/tags/角色相關/index.html","2c703924e8a7e6a17e84b10dc29f164e"],["/tags/變量/index.html","7a67299f5ad0231e3ae0819ec221fa40"],["/tags/遊戲上架/index.html","81ef369525fa4a7b1fe449f52e106f7b"],["/test123/index.html","6aacdcf77e6596a6daa933eaa86139bb"],["/textbutton/index.html","d596cff7a00af6c78f2a4ded5f6d00f1"],["/to-do-tutorial/index.html","ee3d78e3f222ef69aac212542e605f8b"],["/tools/index.html","d8d6f04b7e38736bb741013e20ed43cb"],["/tutorial-update-history/index.html","ea5f1664d52526c6a09cf30240e4d104"],["/tyrano-name/index.html","b6c3525b166b2b3ed41a1adccfa7abad"],["/undefined/index.html","c51e6fcfa7e74adfc6cb53fe05f598c1"],["/update-20221211/index.html","aea5d7ddf927494bb801bd635373bb80"],["/update-20221218/index.html","e2c924651d49e9505fc1a8cbc575a629"],["/update/index.html","e79488f5456e3daf10319d1fc6c77f39"],["/upload-your-game-itch-io/index.html","3ddb2982f66e48c882a92cb49282b886"],["/use-list/index.html","aeb13523ce1eb4c1dbb9e82e927309c1"],["/use-nvl-Mode/index.html","b9ed1de42812d7a2ec8d771e0c9a7550"],["/useimage/index.html","2fb7f403ddbf9ebadce71fdce0fb8f81"],["/variable/index.html","194b898c4969989f0627a28c9764ad91"],["/vnmaker/index.html","db63947e4bc47967447730a3877c64aa"],["/weather-effect-tutorial/index.html","3c4f3fe8ee3aa01aac4572c0c4d4156e"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
