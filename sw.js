/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","02ba7de19cabb693ad91a51e2b0d2400"],["/2player-battle-system/index.html","5ba95480a4259b6057cf7eb938c1fbee"],["/404.html","b56e3fca44ece331587c9f5aaf8d8882"],["/about/index.html","b4d52d133f3be5bf644ddefd98a24157"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","9392bbbf2b512051b6880806a373d18b"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","335e79b006e7f06922a1fcb2003e3f80"],["/animated-title-main-menu/index.html","1665fdd4cc4deced19b5b30f32e9cd70"],["/archives/2022/05/index.html","c7ba9156dcff5e6e52d2b024a5f3b9c1"],["/archives/2022/06/index.html","4518ca41b9a069f231d3962cecab92fb"],["/archives/2022/08/index.html","63428bb61d3cf2eabb8d9ed0e8c8818c"],["/archives/2022/09/index.html","686315ee8b27ea699dc3ef5dc7e26f23"],["/archives/2022/10/index.html","c5cd68cdca26f7f38051e4d14237cd8d"],["/archives/2022/11/index.html","78fb6f65c1cc3216b735a481c9d6f775"],["/archives/2022/12/index.html","cfd2d54679dfd843ec0b06175debf9cb"],["/archives/2022/12/page/2/index.html","b86af60b7851f0ef01f1af7bb6e89f2f"],["/archives/2022/index.html","3d4606887b11e0221f88dfe714c939f1"],["/archives/2022/page/2/index.html","1622a3b954df0b9b1b627bcf8a5cea23"],["/archives/2022/page/3/index.html","91c3033a6e5e1f03a29b96f00c4a8c2a"],["/archives/2023/01/index.html","2f17192e884293661739fafee172c6bf"],["/archives/2023/02/index.html","adee85aed564d6fc238b71ac40b3755e"],["/archives/2023/03/index.html","692a2f49b1abe65f2aec2d4c3b426931"],["/archives/2023/04/index.html","f845ed2fb396801fa5969f26581b99f9"],["/archives/2023/05/index.html","1475c40e96899e8753403c7e5cc8311f"],["/archives/2023/06/index.html","43dab32f6a6b8d5cece47ae95521a8f4"],["/archives/2023/07/index.html","370dd69c6f0969b59cfc6b50c3ef05ba"],["/archives/2023/index.html","7e445090325c53812cc20c0f9143ddc8"],["/archives/2023/page/2/index.html","fbcc8d191cd722576eee6f5569c7b4b8"],["/archives/index.html","3a125818a007cd247a90b6fc4a73b22f"],["/archives/page/2/index.html","c8bb8ca88a9707df5691aaf8d0b16781"],["/archives/page/3/index.html","034c1b4a420edfd39f6bd4ceea8f8f5a"],["/archives/page/4/index.html","7e0d87967fa9dd3f0b0497d2cff2b1af"],["/archives/page/5/index.html","07de3036ddfe4aa1accc65b215610b81"],["/artitalk/index.html","281e84c1e7044aabf62583841725c276"],["/battle-beautiful/index.html","0f045ba8131f7cd0fe2382a575d86261"],["/blur-effect/index.html","4fceff3f2c607055bc16c41b4e093959"],["/butterfly-custom-tag/index.html","38975155e8dbfecd6a19a5d4143d9ce9"],["/butterfly-plugins-faq/index.html","6545e781887367978c5c05e3569f5dea"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","a51e5f53b9cdaa41f7ec8ffc0821c187"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","ce2cc6bbf2d4548ff8c9abdc8e72be26"],["/categories/announcement/index.html","55126cba7fd724f1a2ce94c4dae1ca38"],["/categories/diary/index.html","ee33dccd950247a7f87771028c3476ff"],["/categories/game-dev/game-engine/index.html","34ce93e8a9d19732452271d65b0989af"],["/categories/game-dev/game-engine/lightvn/index.html","d280b1c02a8038562313ca58954cd26e"],["/categories/game-dev/game-engine/nvl-maker/index.html","341a568abe9e4b40d6bdc9dcc389960c"],["/categories/game-dev/game-engine/page/2/index.html","cba942716f175840823b6902c35c120f"],["/categories/game-dev/game-engine/page/3/index.html","60ac8232f7e8ec50c963eae5391b8305"],["/categories/game-dev/game-engine/page/4/index.html","280330b0acc5b79ed6bd2d4d3d13f36b"],["/categories/game-dev/game-engine/renpy/index.html","a09a39de74db5e4af6766c4a4d8895b7"],["/categories/game-dev/game-engine/renpy/page/2/index.html","e5ea807ff052ea0a3f9825acbbc9b59f"],["/categories/game-dev/game-engine/renpy/page/3/index.html","a066408da76c3f678201bbb217f22468"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","5d817bdc43ae36cf4cec6a6310b2817b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","26c38bde44b825cd0bb2296ad985bee4"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","a0bccc141fc8a9c743c1c31c64588c41"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","1ca6f2d0233abef91a6dc870e91c9f77"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","a2d9032c96819590c1fc8485d02fa3da"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","23584a7286246cb9a5f17056a3c47b34"],["/categories/game-dev/game-engine/rpgmaker/index.html","5c45b9b743d35e7120e7064dc7a50f9e"],["/categories/game-dev/game-engine/tyranobuilder/index.html","4db19dd081c5023ec2da8a76244e1d96"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","33b6b71282ce61cbb390c87eaedc8bc7"],["/categories/game-dev/index.html","628fcb2d070a38c15d27b3d8b50b85c8"],["/categories/game-dev/page/2/index.html","0cbd926cf8bf64c687365bc4c64049d8"],["/categories/game-dev/page/3/index.html","667bd47f92a17b7c1a5928f34dc811b3"],["/categories/game-dev/page/4/index.html","f2fb865657f334fb956863c244f7c2eb"],["/categories/hexo/index.html","deb2f8418aa3d6c7d3c97185d8f81b5a"],["/categories/index.html","8468473c663ba8d0e68474b58dee7915"],["/categories/material/index.html","6ffd79b2dccc9916ac3fd461775b54c7"],["/categories/update/index.html","997079da1031406d954a76c53e74b937"],["/change-according-to-real-time/index.html","fb019009a8a83ce30b19761276974285"],["/change-title-after-first-time-viewing/index.html","5e891b13f55fd2484029ec1f20e6f20c"],["/change-title-based-on-event/index.html","d398f8f2d58e055bac69a1076a06ff00"],["/character-interaction/index.html","1fdb22c76eaa7b7d8c9ec7d49908ba3c"],["/character-stats/index.html","466a3f0961d0ed1a0740701f11ecb2b5"],["/chatbot/index.html","40599d936066dd31defca235140a7400"],["/choice-time/index.html","f95c4a42c7f8c7d4ee90342cb40b761d"],["/comments/index.html","d733df8033a0f540bb17f18fea415185"],["/commission-info/index.html","83f9ad333c85702ce9644a9a433669fa"],["/create-button-anywhere/index.html","4631ffd3901f9780cef3a39333be9bcb"],["/css/eurkon.css","91baee92255cb7475dfb8cc166ce4e61"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c8f629f2fb051bc1349e5da9a6cf08b2"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","09ed36e570a84f2305a0e843c32e4ec3"],["/css/rightmenu.css","9976ed5c1fa3f018aa61aad2ec0c5c08"],["/css/siz.css","6d35376f376cce79bfbe368923643717"],["/css/swiper.css","ff60f485e4eb7808a622f22f5d640dd3"],["/css/swiperstyle.css","17e966f6bdc95d56e23468e8b70041a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ctc/index.html","23c82e7c7d1173c0fc08fa351bc552f9"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","e22364768365285ae2ca3ce349924654"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","491b78c8214838d2be736f99057fbe07"],["/custom-launcher/index.html","66bf324b21570658765e679d8802d6a9"],["/custom-loading-screen/index.html","a812942c436bd3e030908fe863ae4dc8"],["/custom-mouse/index.html","f0383d024578dc17d9747fcef6d389f3"],["/custom-music-room-screen/index.html","938a6f309a50731a18aa4be87e2067b3"],["/custom-music-room-screen2/index.html","b68432a4a7ecac434bc4dc48a8b441ae"],["/custom-nvl/index.html","71c33a0a7e26bd55ff8b4e882917e839"],["/custom-player/index.html","878cb56f6130b72c7ac2ea96a4c75c78"],["/custom-preferences-screen/index.html","faec4080d408551e855b566b2da77064"],["/custom-say-screen/index.html","76f366be9317208ef9a082a8692efed5"],["/custom-title-screen/index.html","8c69c7566b3db65ebb64b37c8fe387eb"],["/define-npcs/index.html","eca4e63b150064177c15451027e7c559"],["/dice-function/index.html","05d1daaa7d98bb40484ac871b0bd3bde"],["/disclaimer/index.html","f089b74e628c2bda5a3c01f49cf45427"],["/enter-name-screen/index.html","9c0b56a4cd8c5d9a93f067904c86d879"],["/export-game/index.html","178f61a8c655b6fd06b0d2c46a396876"],["/friends/index.html","6ade148ab0c3f9ee995e0577b4c38f3f"],["/gallery/index.html","40b3b455561ded4ef0a90f9a41b5c149"],["/gallery/photo/bg/index.html","e78f56d0e6f866507be14f2c80e2806a"],["/gallery/photo/gui/index.html","ac6255aed63550b0f790cc58a73e155c"],["/game-only-text/index.html","7d9b5092e6bb32fd6be8e8f85172d890"],["/gui-017/index.html","4b52065a1650a1c98a19cc67f645eadd"],["/gui-vertical-002/index.html","0d7c189220d76a908cae546d90185ff2"],["/gui012/index.html","cf230ac4ae5b60278566616bd77080e3"],["/gui018/index.html","714a4e34d98148cefbb2ec8e2d992ce4"],["/gui019/index.html","1073140cd2deb68df1f238b18e26a538"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","017b13df08ae790a2770db475aaa6c09"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","91528046ecd631a3c30e972d984b1851"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","ca4dcbc1e2412a66b293775d9ed1f511"],["/images-tip-function/index.html","be9ca023ed93e770ac9bd9c825572010"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","7b02e780234bb1389ebfc6ee388f0787"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","90ab9e0928da20691915231138f9e4fa"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","86abfe880d1c973ca6869b674577c4f4"],["/items-sprites-effect/index.html","d070e83bf2ebc7dbc414f45a470224dc"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","b1988be755a358366d041ca6169d3c0c"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","6db308513fee6cae84ad2dc54dd6c8cf"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","d5aca086a94f4b3d0b40f64da7edf7ca"],["/link/index.html","54795448f5e84c0f707288b80163fc01"],["/make-butterfly-beautiful4/index.html","e201b170b12d0d025d317dc8d82aaf1b"],["/map-puzzle-system/index.html","49e699a07a55d39d2eb092c119906078"],["/maple-effect/index.html","f37f9bbed2fb127529f9a51a4cbb2910"],["/memberships-2/index.html","d7e381b541f54e546731b362e4928a00"],["/memberships/index.html","4e6075633b3a394e467a96c16e39f9b7"],["/multiple-language/index.html","d134054f2d075b93c8dccdb9e4c51283"],["/new-year-event-2023/index.html","962b5ea140bf8c4eef4972c12eb78350"],["/newsletter/index.html","653ebdd1af1ae9a433ec70d3e5286506"],["/nsfw-limited/index.html","ca1ded718f2c6578f3c44b58ed9dd214"],["/null/index.html","889d4c635ec86fcfdc69dcc8ae6c55ad"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","7c86c2a62994a35fce765a09ee48e367"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","01b57a53293bc9919b2e0e309911f64a"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","e73db8d7edc49f51c28689c7a90d7a5b"],["/original/index.html","d93f47155c719f413ec31797183d79ac"],["/page/2/index.html","8e6c702d085cd700ca07767aa084050f"],["/page/3/index.html","cdc56383a3b8ac25259843a3d9900623"],["/page/4/index.html","fe130001094ee90b5a9a7449f44ddc9e"],["/page/5/index.html","10601b28ec5858b4728735e60b2215c6"],["/pop-point/index.html","9ed28969b34cff8d64f05f3de64ae377"],["/privacy-policy/index.html","2b804041f717a5f7cffe94ea36a9f3a5"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","4eb8d88fd970894e02689f13d477403c"],["/random-number/index.html","31cf0719d1bc4934a5faa691ce433f91"],["/random.html","878520a225a54ca0a22d1724f68f2f8a"],["/release-017/index.html","ba4cd48bae985c02412021c16ff7aeb7"],["/renpy-basic/index.html","ae9719b0ed5afa46ea83e99a7959aebe"],["/renpy-crash-glitch-effect/index.html","bf6adaa1667f70c4175e3feeff77d4ab"],["/renpy-matrixcolor/index.html","200f9541325273c7662398bdd19b1a4d"],["/renpy-overlay/index.html","801f4cda9d2d1bc9ae78a04b2bbfb4b0"],["/renpy-review/index.html","05f7556954d0ebd3119e8bebc66a250d"],["/renpy-typing-effect/index.html","d22d556ba42287e74c76ab8e8e6608b4"],["/rpgmaker-assets-menu/index.html","664e1b8e470df31926d52cac4cdd473b"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","73289ba4626e479056cb5c756ef3e4cd"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","4cfd6ad1a20d582e7054dd55f735294b"],["/sakura-tree-background/index.html","091a91143322cc434c2fe405d97b0983"],["/service-worker.js","19e84b3f5e86bcb6622950c58296d691"],["/show-variable/index.html","38934ee2c78871e130ecde712984ee1a"],["/side-image/index.html","4482498b92ca85f7f3d4c2ffabeebbf4"],["/snow-effect/index.html","87a0c33b4ddaea6e1dee9e086b741240"],["/speaking-animation/index.html","2363756d47f8ec9e29919db585ca09b7"],["/splashscreen/index.html","8c9591564f06d84daf5fd8b58b200bf1"],["/sw-register.js","5fc39bed674c99df1a4e92c7e6d163b7"],["/tags/Hexo-plugins/index.html","9cd86527b968b6735f6e7d7539f5b6eb"],["/tags/Light-VN/index.html","a38d25b46c87fc0e90d4a73ea5c83a8e"],["/tags/ai/index.html","90bd60a4399d009dbb86312ce7f90d71"],["/tags/butterfly-beauty-diary/index.html","193591a1f6cec17195ae2beea7194bda"],["/tags/commision/index.html","0799a1a93631b4d5d396640957803b00"],["/tags/custom-hexo-theme-butterfly/index.html","60dfc24bfcb2e611fe3c2744104ad8f5"],["/tags/custom-renpy-title/index.html","d24b602e3711972e5703a71e7216b51a"],["/tags/dialogue/index.html","e500f796833d03b582acd322f40f6455"],["/tags/effect/index.html","8c5897538412019b6ca58f1f51a5d21b"],["/tags/event/index.html","13408e9277fce34c8573a98b4f3527ee"],["/tags/hosting-own-website/index.html","07d30244bc924e5e638a8cba4d6dd5b0"],["/tags/index.html","a94f666df49bfc349c364cbbfe38a8ff"],["/tags/itch-io/index.html","b52b88a1b8737cb35f131f00a5bc3ee3"],["/tags/light-vn-update/index.html","b5e5b5e889ef75fa9ab14c84fc122a6f"],["/tags/nvl-maker/index.html","618ff5b2cd49def92b8936874999ad0d"],["/tags/player-related/index.html","8c8481fbb317a3fe8997d2ca59692d7a"],["/tags/pro-tutorial/index.html","0973e5500aa2e90be133f3d80054c9e9"],["/tags/pro-tutorial/page/2/index.html","28f10d74d78b5c047fdc297a15aa2ce4"],["/tags/pro-tutorial/page/3/index.html","52ecde91615cc4692558eb2af413707d"],["/tags/renpy/index.html","296dbd7a603f5599a91eb293a4b0fb60"],["/tags/rpg-maker-custom-map/index.html","dbf5ac5b2348cf3d04ddc5586b141fad"],["/tags/screen/index.html","42fce86ef50eda53ebb13d428a664bf0"],["/tags/special-function/index.html","61c4ccc3edaa44639bb1f47f69d362e0"],["/tags/tyranobuilder/index.html","7a2e312c8777e8bfe827b38d2dfaec9b"],["/tags/ui-assets/index.html","a685ead8f2e1425c27ecf723e9926070"],["/tags/update/index.html","8e687b44423f27bcfa06f71126250d4a"],["/tags/upload-game/index.html","e2b49ea657f5b183dec56b23fbe93356"],["/tags/variable/index.html","393d5634edf66cd4129b334de6b81702"],["/tags/visual-novel-maker/index.html","1d1e678f836f4ea8d39734ecf037dfb4"],["/tags/封面製作/index.html","06b67ee5cadae1d7b8b6580e6e319af5"],["/tags/背景素材/index.html","0920e81438acc20f428cba991f9e8217"],["/tags/隨機功能/index.html","5dd746212ddada857ab594895d71e64f"],["/test123/index.html","861e51fe0a319cac8ea3652b363a8f23"],["/textbutton/index.html","dbb3ff1b375a5e77f67d62a3fc73eeeb"],["/to-do-tutorial/index.html","504eebd00d6365c494eb30d7d674566b"],["/tools/index.html","f71c118fdf919a5c455f121e2fe41564"],["/transfer-to-hexo/index.html","5d2e728e87c195760ea2f3f028da06ff"],["/tutorial-update-history/index.html","e4fe042a0b65d96138ac5ca418826bea"],["/tyrano-name/index.html","7e718fd12a23ce105ff2b928e98c3fbb"],["/tyranobuilder/index.html","b552257e4d3d7467ade328b3b7835c96"],["/undefined/index.html","3eb3fe3609a82282b34bcbffaaea22d1"],["/update-20221211/index.html","01c2774cd46adbd3ef060eb86f69d876"],["/update-20221218/index.html","8620016f72e21b1b1b479f3cc94af406"],["/upload-your-game-itch-io/index.html","c4d8a246c1b3fc51e3862ba19473cad1"],["/use-list/index.html","dd8b54bcf1840cf042d4c661b4afd836"],["/use-nvl-mode/index.html","8c2e0a9c023fee7ec5508323beda61e1"],["/useimage/index.html","72ec49d12ac694904e76d2c098423a79"],["/variable-change-image/index.html","be4879befae72e6e99355c3bc217ce3c"],["/variable/index.html","2ff7ae9a39aa86fc6fa03bfbef656cb8"],["/vnmaker/index.html","efa71e6a267a120f2b218b1d8415500b"],["/weather-effect-tutorial/index.html","2e2d5bae9a40549d954daf76628cc71c"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
