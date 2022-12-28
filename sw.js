/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","c6a54281cbce7073b919677da523cfa6"],["/2player-battle-system/index.html","faf354f67e766fc98361e35860875173"],["/404.html","1131688b703bbe1c73f4e042e300c50e"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","44c2ba128b0564737ad08a44a864787b"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","01f5a0ae8219fca8f13bd74ca0ae248a"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","f1d2f9f06334e3b4f089186b6341ad57"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","6df70eecf6129ebdf4d9304b89509f0e"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/OpenChatAI-Renpy/index.html","9c47386e56e20aa8f0b528c6a50e18bf"],["/Transfer-To-Hexo/index.html","77cdbcaee99dd5a4976821a0dfedc71e"],["/TyranoBuilder/index.html","a97db5c0b696b469acff5814282063a1"],["/about/index.html","6228eed9f27662f92bdd40bd7a155037"],["/all-discount/index.html","466fd1a641ac5e056530a19e2aa15161"],["/animated-title-main-menu/index.html","6fcf255f9ee2a13fb5382d951db8a709"],["/archives/2022/05/index.html","c5fdfc08775c2c626f7964d1066101ff"],["/archives/2022/06/index.html","82ebf14f2767f461c4cefcd4fb0b3c6f"],["/archives/2022/08/index.html","7c6daf137d22831de569870be6db0891"],["/archives/2022/09/index.html","2c54a63a61ce8c8d891a19454df13053"],["/archives/2022/10/index.html","bf51923732bcda8c30c204d47f1cb794"],["/archives/2022/11/index.html","63168f2d2a9d61fac6e0a66337946783"],["/archives/2022/12/index.html","15ebcdfcebbd3246905393307107a4ca"],["/archives/2022/index.html","e3bd21f93ec49410802a73325fb6a271"],["/archives/2022/page/2/index.html","4ac24b83ea81c82c72b5534596d4f0c1"],["/archives/2022/page/3/index.html","de94dd28595489c7a0f30ef66b761805"],["/archives/index.html","aa7b34863178efb5b20a4a92d6a2085f"],["/archives/page/2/index.html","b1898604c4814fce8a136feef9c8e4e0"],["/archives/page/3/index.html","79af3cbbb9deae0a473b2e66a8a5ce8a"],["/artitalk/index.html","57476bb0a691399b010daf4c540d90c8"],["/butterfly-plugins-faq/index.html","dde10af3efcbbd5d05fd38f03c3a684b"],["/categories/Announcement公告/index.html","f2622bb62cbc727206bee7c0c4837a0c"],["/categories/Hexo/index.html","01c5105b968a4af1f09eed7681c75129"],["/categories/game-dev遊戲開發/index.html","7a345425fe5e2338a318fe6bfea75fb3"],["/categories/game-dev遊戲開發/page/2/index.html","29e968b130bbd3349b7eef13c884d7e2"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","7516ae7a4e624961a1433d2600b63d06"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","2c7e9188969a3ed15807ad266673fdfd"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","5e15a4efa8a257afe9959b22ef82cb4d"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","2d76c286bbe4bc42b6fcd55c59cb59c0"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","326513d64568620fc556faf1319b0db5"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","b64cc1c9fe2893f2e3c6b65ca05bf341"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","a3c3d389a360414f038688fa815bad6e"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","baded285403d24cae1f1057d693e17b8"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","d81bd3e353cbf9392f4eabca3d7e3dd7"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","f24ad232aeb8d9d8be2d1dc2df7a6302"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","7b1b08cbdd2fbdcc90dc7c47e7889eab"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","7b5c5ac402b698e67d29fb8d3345ee68"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","7d9137f3fff5224252e3f951c2c91ab2"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","96dd36495451bfef9da35f4dd969b6d9"],["/categories/index.html","5e88c9c6a729b1866bb4a527f300fff7"],["/categories/更新update/index.html","cc54ab45b2e940d39b3f8a4fed4f1f3e"],["/categories/資源/index.html","3e60e124faf548c2859985deff095782"],["/change-title-based-on-event/index.html","92f2910fedf2a46762dc93056da42e96"],["/character-stats/index.html","05a163e996b40ad0e633e6741d1a6be1"],["/chatbot/index.html","6d3e5519665a0ac0db4b40186272ae51"],["/comments/index.html","51d599a82fec6108220c6b0274f90371"],["/create-button-anywhere/index.html","6f4d17cb7ce842ec1ebeea1dfe3ba45d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","4c50218f08b83c6bfe780f54a62e97f7"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","00a048f6a0161716604f27bda020c056"],["/css/rightmenu.css","65e960a520ef9ab2dadfede53691dc75"],["/css/siz.css","b2e1b8dfc3f158867e6965adf577bfd4"],["/css/swiper.css","6f4a0c5b65c5752122fae6522d1c5cdb"],["/css/swiperstyle.css","78e7e61f75aa8ee559d398f459513fb6"],["/css/var.css","a10110ff4a37361d4d487f7e7500abf4"],["/ctc/index.html","21b78274bd2c650148c3ea75cfb937df"],["/custom-gallery-cg-screen/index.html","dce3990ef6146f3df2d8a9fad92ae8fb"],["/custom-mouse/index.html","3c0678daecc39c8ba6f772bb98786652"],["/custom-player/index.html","6b2afaa3ae372e220050d8da9ce55c93"],["/custom-preferences-screen/index.html","30cb4c621f50b71e9b18fa6a09b4bdc2"],["/custom-say-screen/index.html","e38807340572e59db2b3670ec8a8edda"],["/custom-title-screen/index.html","0f0083f16360b679a9eb5fa98b376105"],["/dice-function/index.html","3736bad6fab328dd59bcd3233ef96d9a"],["/friends/index.html","935baa0a5f8e50ef9e718f7da2fa4d00"],["/gallery/index.html","828e4a57785dd4f1dffb8ab4b5f3316d"],["/gallery/photo/bg/index.html","f6afcb3a3e196bc1e2192538dca8b643"],["/gallery/photo/gui/index.html","66de691eac78cbf40c617579b0d49b73"],["/gui-017/index.html","0923ca7aefbf5d59241e5ba03ed59d88"],["/gui018/index.html","b2da09dc96db6d43a02eddc8b6d64492"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","073ad43d9b1f35452b45b4d06caca865"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","16d14e5fadbaeb3bb404628c74a1f16a"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","1606a759f9429501016592e0b7490347"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","78a8b9376ff67259d900fdd0b1b01020"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","bcb0d8be51f5227962f5db178d4501f3"],["/link/index.html","f947e52c0f357ab394785c70aca4f181"],["/map-puzzle-system/index.html","b22452587244ff8780ae710c5567ac34"],["/maple-effect/index.html","c827e2caf3746c49f59a7de1bba312df"],["/messageboard/index.html","f303e14cabb6448774a1d607a26f6829"],["/new-year-event-2023/index.html","dce11b20028e16eaffbcec373bfcba8e"],["/newsletter/index.html","95ae35097c9b1f84535995555bfc86e3"],["/null/index.html","7101fc7ce041d517e1f09d505a39ec01"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","361f14c22e96b684816c2c42ce9fdf93"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","cc5496208db495b81d8213faa66b60da"],["/othersite/index.html","eab25cf49523f04281d2adec737758e3"],["/page/2/index.html","dbc03a0b32b6b47e76d88ff63d7c1ae6"],["/page/3/index.html","636c98a49ebcc68a625a225cced6876a"],["/pricing/index.html","36fda8efbff4c4232531fa458f4272d9"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","2fad953e0385df3ba41540af9b38cd02"],["/release-017/index.html","fcfe4751db2351f4316153f622f37bc2"],["/renpy-MatrixColor/index.html","eecda909b56c6a715646261d29414e98"],["/renpy-basic/index.html","9dc8bd75919665b5efc69828b6f13cd9"],["/renpy-overlay/index.html","e3671b10f79c549dc76e429d2967303a"],["/renpy-review/index.html","3cf047e16a2984af9967c59b2210e140"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","e0c716e2eabb0a546c30d7682502d3c3"],["/rpgmaker-assets-menu/index.html","214027c7fafa669d3b1464bfbcf8231f"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","3d640f74baa0ed3454f4efc120ef13c5"],["/side-image/index.html","b96b6096d47b325773fbbff3bd272770"],["/snow-effect/index.html","0963911a701435caf00d6f2bd6e2313c"],["/speaking-animation/index.html","483bdf9f8cfb77774ad976d04af1c7a3"],["/sw-register.js","b0bf10dd34d7393c699a8a0871342e84"],["/tags/2022-年-12-月/index.html","96e9c3dc62b881a8c13dd20d7d0a0323"],["/tags/Hexo-插件/index.html","b7976d66c60c26e3f97b2ab935f32b16"],["/tags/Itch-io/index.html","3e0321d4ab5e98ee0f22706fa17da677"],["/tags/Light-VN-更新update/index.html","84a76f2ca685cf1125d2c214d24175e3"],["/tags/Light-VN/index.html","fb19976cef625d0c2c12421afca493a5"],["/tags/NVL-Maker/index.html","f2a1d82c54b9e3059acd60c6642d573e"],["/tags/Premium教學/index.html","c3c3a741fce37e640887ef995d4cd973"],["/tags/Premium教學/page/2/index.html","0b8aa1225df17c5c0cac493da1f49ac3"],["/tags/RPG-Maker-地圖製作/index.html","82467e77183fe12a4f4030202c97f451"],["/tags/Renpy-教學/index.html","75bf1b0c25b3ee3a44d561dcc1536c49"],["/tags/Renpy/index.html","901a8e3e28119d93f97e3fd64811c199"],["/tags/TyranoBuilder/index.html","5afd1ce32ad51944dddac24d49f30a6f"],["/tags/UI素材/index.html","4d9893bd66a96f0a473a9683425e059e"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","cf40d2e938c01fa6c524cbaf25aedd29"],["/tags/index.html","4bc203d6e0a06c4ffa15ad53ff38a396"],["/tags/renpy-basic-Code/index.html","10a722c98594039dbf0c036fcd408fbc"],["/tags/委託/index.html","4376999f7f286d5c4f55140d424eacca"],["/tags/封面製作/index.html","87f2cb2b396e8f9b4e5ecc4c7354c40e"],["/tags/對話/index.html","7884b9acd1a84b1af4390f142ce1bd9c"],["/tags/活動/index.html","dc3d18eccabe7d0416a74e7af72dfc0f"],["/tags/特效/index.html","8ea335403861c6c53e20cbf3a5db7ec6"],["/tags/特殊功能/index.html","0a8869f32799656d9a80d8f529106ede"],["/tags/畫面/index.html","8caac9c8dece2349b2645de69ec5b201"],["/tags/網站發布/index.html","83fed961b704865cc5104048a34c0ebc"],["/tags/自架網站/index.html","872d7191044cceb9dbeea030ec27b203"],["/tags/自訂-Hexo-主題-Butterfly/index.html","969109a49c004d73bf3f93223eac7f52"],["/tags/角色相關/index.html","a600b4a5b4bf28c4c2349816e6f1395e"],["/tags/變量/index.html","a77a2b16237d643f13f5c18745549409"],["/tags/遊戲上架/index.html","edea3cde2f659665e955e9b293992b60"],["/test123/index.html","ec32c50fd6933a31e4e853242f217d1d"],["/textbutton/index.html","4f9362ca15eb9f1bc52db9122f121d59"],["/to-do-tutorial/index.html","394102383ec056b3df1296a06731a86d"],["/tools/index.html","b622dec837d4ebdf30511c10bdd8e410"],["/tutorial-update-history/index.html","56cec287e4f2982454c5165862938e42"],["/tyrano-name/index.html","efbd4786bf972cf5b6cf4155bb065f8c"],["/undefined/index.html","3f5d47ce6ea8c74f72097c6dd1f773a7"],["/update-20221211/index.html","a349798669a05eabd4b88a3baee666fb"],["/update-20221218/index.html","5c57a4b027ffbbd4c74a0365cdb209aa"],["/update/index.html","0163a0a77615f0ffa4ce54df2b5d21b8"],["/upload-your-game-itch-io/index.html","300ea9b154e8c4c442d9cf2b603b6c60"],["/use-list/index.html","2d0cbc2d79469be665c17f99730ed7b0"],["/use-nvl-Mode/index.html","c40c000686423edbb1e5a3fe692a728c"],["/useimage/index.html","f4c3dd2ccc24e2a3cb3bd76a8907e141"],["/variable/index.html","419b4167008e3a0a8d4b01ed0938adb2"],["/vnmaker/index.html","4eab372f95161347f965fe05fce763b2"],["/weather-effect-tutorial/index.html","cae64b63504ceaba0d30660a8334bb84"]];
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
