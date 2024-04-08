/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","380c5a3f4cecef256a81b778eba05ca2"],["/2024-future-plan/index.html","87c658cf629c721edad103a356bdacd1"],["/2player-battle-system/index.html","384251ebaae362986a5280e385f48731"],["/404.html","96fa70dceb066d55f80e6d0a84589f40"],["/about/index.html","632d4ae69969a5c11ef1969c0db24252"],["/acg-creator/index.html","3d3ab3f1126211705003a198335ea4bf"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","78f57e67cb6fefc2545effd0f2851414"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","3015807ec6087e59742fcec16dfe109f"],["/animated-title-main-menu/index.html","783ba7a2d705470a17bf4b12bbcfe566"],["/archives/2022/05/index.html","15f9ac0eb0245ef4f1e411ec41726ee5"],["/archives/2022/06/index.html","ec8b8dacfe36883d564f7655f21f6049"],["/archives/2022/08/index.html","c6a55ba9be2a51d0e928b9e21dcf8a86"],["/archives/2022/09/index.html","66e6f425bdc444fe156db23ad313be2f"],["/archives/2022/10/index.html","8e469e676e8a28ccbe904b61ab02a643"],["/archives/2022/11/index.html","88f8d45738e101ad162e5196bfe6323e"],["/archives/2022/12/index.html","a109fbbefadf7ffc77f34bbfdf5a6925"],["/archives/2022/12/page/2/index.html","035bb075979a3902f7d2b86b4f1cd4fe"],["/archives/2022/index.html","db57041da82050b3f84cbc79b714145e"],["/archives/2022/page/2/index.html","a75313ed552c45c1fbf05ff91efc5192"],["/archives/2022/page/3/index.html","22e6362a7cd0f2ef0baf1cfe3456ddbd"],["/archives/2023/01/index.html","c6e044462752aa7413b1b78fcdbb456f"],["/archives/2023/02/index.html","2d21b12397a5919645611932e0183b13"],["/archives/2023/03/index.html","3f50aeee61399d0ac36a17d8eaf6f728"],["/archives/2023/04/index.html","68fb9bac3cb288365183234674da7686"],["/archives/2023/05/index.html","f94c1c88c59a2fb38e25e25781c6e21b"],["/archives/2023/06/index.html","7702b61dd09cf5211e17bb3153522517"],["/archives/2023/07/index.html","ce70a006eaf25368f72381159a7b27f9"],["/archives/2023/08/index.html","11bacb4a4d73ca291ff03bccc9470470"],["/archives/2023/09/index.html","71d831cbf8d6a5225d19a6c509225ba9"],["/archives/2023/10/index.html","2ab687fcdd11b7fd9f913d1b86f08bf6"],["/archives/2023/11/index.html","de9f401a3df70188a8bcdd697fc902c3"],["/archives/2023/12/index.html","c93200429f0cdcdc25fa84330f766dc0"],["/archives/2023/index.html","0b9c9067ec4121ce09341ff85b795e7d"],["/archives/2023/page/2/index.html","751afbcacc0c400f73885554f1fcbcfe"],["/archives/2023/page/3/index.html","01abdb92bcf1422dcbcb7e00aff439c2"],["/archives/2024/01/index.html","56c71ccc06de2b72b56f519d151db1b6"],["/archives/2024/02/index.html","541c2cd16b4737bc6b19613284b96043"],["/archives/2024/03/index.html","3c57a9d24fcb89890e585fa3bb250515"],["/archives/2024/index.html","e2ee7426a3f68949069b6341c8800fdc"],["/archives/index.html","4a30153a1531b63173c999a23fc81797"],["/archives/page/2/index.html","38c267f95d45982b594ed7ff6fa808ef"],["/archives/page/3/index.html","a7dd49ef49b5579a43b8adea520c7374"],["/archives/page/4/index.html","3f078c4c4949796367053a501d9bb0ae"],["/archives/page/5/index.html","224881f35c7c693a0b0caff15c427ea8"],["/archives/page/6/index.html","37eb3ab3fff0629f4ec39ee57e7a3391"],["/artitalk/index.html","a09f2fcef62269153ecb62b9d5ad96d3"],["/battle-beautiful/index.html","850cdc71621abfcfa117edc064c73003"],["/blur-effect/index.html","45063cd6a17f846960d159b3d5fdfc90"],["/butterfly-custom-tag/index.html","848dc037befaa4fa4bc5a30f3e3460f4"],["/butterfly-plugins-faq/index.html","14495968ce91ebdda3fa30a75a784725"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","b12e4e856a02e095fb37f475d6e1acf4"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","b8aff429b4c1a7d6339ab3b65ccf06b4"],["/categories/announcement/index.html","60bd19c4f18a90b0909a432197b10079"],["/categories/diary/index.html","ebd3732f5a62cdd7f29bf81b26f76a9e"],["/categories/game-dev/game-engine/acg-creator/index.html","4bd1c804ec6947817b6428c56bd8ec3d"],["/categories/game-dev/game-engine/index.html","16c77c1d3d6d531d7f264ee277f35fca"],["/categories/game-dev/game-engine/lightvn/index.html","345cfd29e3f5e25da464b5c2639a75e6"],["/categories/game-dev/game-engine/nvl-maker/index.html","f21250079962f8b1150761e6028c22c8"],["/categories/game-dev/game-engine/page/2/index.html","17c325fa7a3d0eb2cb0d1dcbe66c9c36"],["/categories/game-dev/game-engine/page/3/index.html","8f63688fa8a843860dbbb668659158e8"],["/categories/game-dev/game-engine/page/4/index.html","3dcdebe93a2577658e5921ca64a3e0b1"],["/categories/game-dev/game-engine/renpy/index.html","246bdd67d94c4c754771bff3a6116a1c"],["/categories/game-dev/game-engine/renpy/page/2/index.html","bdbdfcf68860d0f04504a55e16de43a6"],["/categories/game-dev/game-engine/renpy/page/3/index.html","c52a6f07d3507cc77914125b1f6a1b2d"],["/categories/game-dev/game-engine/renpy/page/4/index.html","3e5acc8542978bffc8dfc62c22d6755b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","916253a87984ed54113d6130b7d14632"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","efefe4dbae21bd940244f6dfb1bfd4ba"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","3248eab10cec735c8a40aca2d9168912"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","e4b0e05b35caa22437d036d62f848fe6"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","0402953775c4bad49dcb26331cce0004"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","aaf29c2d591ab90f8df986c2e4231f11"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","0f8a71e34abe99f570c42dcd0af45979"],["/categories/game-dev/game-engine/rpgmaker/index.html","0744001658768d0e8ad112e8fca10542"],["/categories/game-dev/game-engine/suika2/index.html","ee6ba3b5ce4c6ae0b2cebbe65a06177c"],["/categories/game-dev/game-engine/tyranobuilder/index.html","96ea716529bdc3d2a16dbc2337967eee"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","53c8c181b3af3c255f84af271fc0049f"],["/categories/game-dev/game-engine/webgal/index.html","3031acaa7cb58a9694c3738cc5a8af72"],["/categories/game-dev/index.html","472585a52cd6577a1b8d3713e2affe0f"],["/categories/game-dev/page/2/index.html","fa9a1e77395593053d43d1ae6c456205"],["/categories/game-dev/page/3/index.html","7dc3c863914429227b50d8619980dc28"],["/categories/game-dev/page/4/index.html","810fcfffa645698aae03f7b591474efd"],["/categories/hexo/index.html","954edacb1caacadcb78bf56a738765cd"],["/categories/index.html","f4ec27795394c57e18101662275e2358"],["/categories/material/index.html","eff98f474783f204d183bd3e7886dfbc"],["/categories/update/index.html","e06bed7e9c2ea1368205410690a2ceaa"],["/change-according-to-real-time/index.html","ab0b92ffebf4d57f1483f16f1c8ac559"],["/change-character-info/index.html","32a575f1c3b5aec6da7e2a40c71ecaac"],["/change-title-after-first-time-viewing/index.html","ac78c67535cbd9ca50864d910fff7bd3"],["/change-title-based-on-event/index.html","f7be1227010c65aba436ab4be63af85d"],["/character-interaction/index.html","a5f7501f0a43cc3c4744cb72a85f5a2c"],["/character-stats/index.html","5706ae2c70af5983d11b39b0fcf2982f"],["/chatbot/index.html","e72aa622aaba6f1e1a366358b5b088d5"],["/choice-time/index.html","c145fa2265f6eea3f6a03a36ce3c0a77"],["/comments/index.html","7efffd12cf0d238e77e1355edc21ac2e"],["/commission-info/index.html","226ec5518280f928bdb75d0274b62986"],["/count-login-number/index.html","93215bdc755bca126acb044cebfcc37e"],["/create-button-anywhere/index.html","35456ec90f8b6111a7fbf9b04191300e"],["/css/eurkon.css","848cf75063958c46f1a48026b8ab57be"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","b215a8be9c6fa3608bbdda28d404f995"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","c83b03aaf30e9406a41649ecd98d92c1"],["/css/rightmenu.css","e37d1994afa3d9a4e26286f4053c7b7a"],["/css/siz.css","81ee77a70214f15a2d7bce987461c150"],["/css/swiper.css","271e3164d70a0881e925731cb11fb949"],["/css/swiperstyle.css","09266dfd1b29b4e3e0d1a5b6f9f6f3da"],["/css/var.css","64575d31ebf27864079e9966697c5e5d"],["/ctc/index.html","5c0d3ac4d17935187fe7658266128947"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","35d067a63ef6fea4ec32ff1824fc5c6a"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","033e1bd534fc5e7b7db506236dddc5c2"],["/custom-launcher/index.html","cb2c4680928f3149f248eae97ab966c2"],["/custom-loading-screen/index.html","f8749c5cbc1c757adcdf92c457565889"],["/custom-mouse/index.html","4ea68d30b4cf44d2c9c9c670347da4c8"],["/custom-music-room-screen/index.html","2c0911b8a659a79719513f8886b8730f"],["/custom-music-room-screen2/index.html","63747281e332db10ff44aa9a43f3f567"],["/custom-nvl/index.html","50e51f24da46bbf6c9052713dd193660"],["/custom-player/index.html","71ac45401f26964fb54340697e4f4e9d"],["/custom-preferences-screen/index.html","c0bba306f46d81888e353362c713b408"],["/custom-say-screen/index.html","fd12e0398abb2c6aaef19363efdaa9ba"],["/custom-title-screen/index.html","82da7f42542870792be66e4c09a3b48c"],["/define-npcs/index.html","13bf2bd77a72e2b2d56871354bb89e02"],["/delete-save/index.html","9ff7ca9b991432a4becae034af73e75d"],["/dice-function/index.html","e9ce1b325b8f50253e481c2d45c83616"],["/disclaimer/index.html","ca06e29318b942c49a84c1fb34586a63"],["/display-immediately-all-dialogues/index.html","473d838de566636091ba6bc46b016a37"],["/display-real-time/index.html","4ea0b6bb79450bbb589031e59c07e33c"],["/enter-name-screen/index.html","111a021e54a13e39a7e09c840b68f7f2"],["/export-game/index.html","f3071d1d99144964fdf62bb81dc9bebc"],["/faq/index.html","88af173523680c050961f653de034d33"],["/friends/index.html","e380c5fb6ecee86806b13b001e2a1af7"],["/gallery-template-assets/index.html","b11f7cb92be3c88bf933cb6f65d9b6a9"],["/gallery-template-default-ver/index.html","be1678f3a58841e07368209a1494468b"],["/gallery/index.html","245cc3c1eea73299c5247bc774e1a8d6"],["/gallery/photo/bg/index.html","e2cec4e41f16d3b12ac90e82df279453"],["/gallery/photo/gui/index.html","763c8fcc97949b04f0764b446087a754"],["/game-only-text/index.html","fd4358bb8a03d70d679fb4929f17b11d"],["/gui-017/index.html","fbc2fdcd762d67015ca8e136d9fee86b"],["/gui-vertical-002/index.html","b43cfd2c80edf032bed6dec3f4f60b8b"],["/gui012/index.html","f17e9357366e95f7d2047827d9595b13"],["/gui018/index.html","027aa96dffd86ff7e48b2e519bb83d4c"],["/gui019/index.html","bc85c9a389bb38d8162857b03015c6cd"],["/gui020/index.html","e82885b7b7b076a99e99587e14e8ff1e"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","6b48564164e3d040a42c17f0506c972d"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","4245b5f205ba9f47fade3376d02c7471"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","37c0e193f512bdfff6e8103b351b8fb0"],["/images-tip-function/index.html","9ce8b4d87f6e64382ecb6d29816a4e76"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","3f44c2a0445d229af4d4b95ee4ae5aba"],["/index.html","57b894157d6e39f65ab15efee16bde73"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","be26dd84bf6f24a9412df3c0054d28a5"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","4dd42479497a6adebc9c3221fcd52fc4"],["/items-sprites-effect/index.html","a36d2f91806fbd79a643f86608a9a922"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","b9363acbffccb1360b4ca7d03ddf5e31"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","63c26c78680ccac2c4c1bf2642b7b8de"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","4de703ee9cfe42c71ba9d1138f01f7c7"],["/link/index.html","239983beb187c3d2de4a8507b371383c"],["/login-reward/index.html","f136d8cf58832fdf39ff86e728707df8"],["/make-butterfly-beautiful4/index.html","386bde506a37870a6b775cad53932608"],["/map-puzzle-system/index.html","621b9e795d604a1dc6d2cd334e688285"],["/maple-effect/index.html","ece437cb144cc7101a4cca79bee51f00"],["/memberships-2/index.html","cae40160bfb0195361f6b30614818a6f"],["/memberships/index.html","1b19dd10d406ea0b32ed29d29a5aa97e"],["/multiple-language/index.html","72a9e03919c2e5b39b0b79c85ecd16e9"],["/name-input-assets/index.html","f0808db4fd2663e5d7911b43b701144e"],["/new-year-event-2023/index.html","e8a5a659d49a131eba70f6621e4c1f16"],["/newsletter/index.html","6f1b212f7c7070d128356b7388a815a3"],["/nsfw-limited/index.html","3eac820ce710a1aa123789619a34e66a"],["/null/index.html","031ce55a14eefc8dbb124b43c51548e5"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","40ee0706cd2eb102357f238ff952b255"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","75d0a6380b15b26eec22740417762769"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","4a836d5be8d9b973792c71f9f494a216"],["/openchatai-renpy/index.html","2d0dc82da381851b85b7953c1c595ae6"],["/original/index.html","37ad8c068a041164364b4a1f62f33b48"],["/page/2/index.html","7dd97d5c2ef82ac5bbb5196286aad19f"],["/page/3/index.html","18e46a70d534a8a5c82004e39fc52ce6"],["/page/4/index.html","0d25b017c3946e2ca678a78df0c65a6e"],["/page/5/index.html","8742084cc2c921d463a7f9246ded5ff5"],["/page/6/index.html","84b81de74100329daa41908b97895f12"],["/point-pop-up-assets/index.html","ad9bc25030a109e9fec82676673f9d58"],["/pop-point/index.html","187d925ca0497bb5d01ddbb26665a00f"],["/privacy-policy/index.html","e9de3405b21ef0988c492ccf898a37ca"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","412bd287a606d889c4dc214783da2c23"],["/random-number/index.html","6387ad71bfac3e4ba05f8f92267d5a15"],["/random.html","987c336b744cfb78cf075f7f77b9e882"],["/release-017/index.html","87fd234e1758bd8230e3360be78d7f0b"],["/renpy-basic/index.html","5dfcc4ee263e4b6e0c6a001a82872b85"],["/renpy-crash-glitch-effect/index.html","96ef03038b1454a92f850b249e4b8d69"],["/renpy-matrixcolor/index.html","1e75dc7d8c800a9c79a2e2300ca3b355"],["/renpy-overlay/index.html","3d9771c362aa656d354517ffd49f1945"],["/renpy-review/index.html","8dd98936295cb9008e99f7a0f64aed47"],["/renpy-typing-effect/index.html","9adad12911cc2dd7b028cd1f327b67a9"],["/rpgmaker-assets-menu/index.html","86bd56a156c778d4d1d88936aca65d86"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","24e6a110aedb0c5b8c04251146f975bf"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","5d2bd79d57b6f143da796e8f5d42f291"],["/sakura-tree-background/index.html","922b6b791106262c70f1e804f7ed249e"],["/selected-button-style/index.html","ec310f05899824568eed6940dcb68ec5"],["/service-worker.js","1cb0f5bb64d7594b9bedd1f7abf61d0d"],["/show-variable/index.html","6b0943d1bd3df98b5238a9dce9152d19"],["/side-image/index.html","a0e37194e6e642a0042ca2db85c9cdfd"],["/snow-effect/index.html","517678ccc9bbd213dd24ca92010ba729"],["/speaking-animation/index.html","9f594a1f24141792c6675d0a04b1b614"],["/splashscreen/index.html","438969a8006c6e16616de73cd1da9394"],["/suika2/index.html","32d58d354d80b37489f05c4b7eea5ac6"],["/sw-register.js","d68a04b59b48a1de9eb0a910d01790b7"],["/tags/Hexo-plugins/index.html","7f20ba4568589450420fd4ca94f407c6"],["/tags/Light-VN/index.html","c23526f7915fbe1a28fb47dff39bcb41"],["/tags/acg-creator/index.html","e06d653468eab1295b4a83d54ee23810"],["/tags/ai/index.html","20adb87f7fb5dee46e4ee57f4b383202"],["/tags/butterfly-beauty-diary/index.html","6222227bb38bef3f9fdd1eca70575373"],["/tags/custom-hexo-theme-butterfly/index.html","04084b06ab7fc6df3fe5eb589994ad18"],["/tags/custom-renpy-title/index.html","3fcbd701f28527189387fda78481486a"],["/tags/dialogue/index.html","3d9a190ab5ab46641c6b05e22778056e"],["/tags/effect/index.html","69a48d091aed80a72de23bc87d699807"],["/tags/event/index.html","0a1f34a2f207bd82f971dbe80512e885"],["/tags/hosting-own-website/index.html","69b6af20967f6040112882b067e7db43"],["/tags/index.html","e62c0bca6f16b7ba9573c69e00175cc0"],["/tags/itch-io/index.html","2692f47d8d09c68b528ef646b20c40d3"],["/tags/light-vn-update/index.html","0dbc7bee5e3e52dec39e15e4e2711ef7"],["/tags/nvl-maker/index.html","8650fbe0aebe0f38b0f59aedb6cb3a38"],["/tags/player-related/index.html","88db089c3e89483e4250def568415c97"],["/tags/pro-tutorial/index.html","a65111cc83d992265ae45063fab71672"],["/tags/pro-tutorial/page/2/index.html","d496afcaa691135fd1e39c5f300065f1"],["/tags/pro-tutorial/page/3/index.html","3ceebc84f287e8e38b14be73744ef76b"],["/tags/pro-tutorial/page/4/index.html","13a4d5802b978ab222da26e00c19b930"],["/tags/renpy/index.html","0e1336cc738cf2c35f3b4139f45b635b"],["/tags/rpg-maker-custom-map/index.html","bcb8742ae31b84b0874f7a047383f5d0"],["/tags/screen/index.html","343a13ee2b2925a2e54d2bcbc80cd562"],["/tags/special-function/index.html","56ca47324e094e1c194a2f9e1942d059"],["/tags/suika2/index.html","bd9bac8aebe64e4ed891bc54acbc49f0"],["/tags/tyranobuilder/index.html","f9078390626168ffa9abb33177febd69"],["/tags/ui-assets/index.html","125309b851b77fc156738a7413b28308"],["/tags/update/index.html","8f4d3eaebc5cc5e0285bf1fdc045e5f3"],["/tags/upload-game/index.html","96a64fabd75dbee4df93640cf643797f"],["/tags/variable/index.html","8b7386d245d2136cd09894efb1a78d71"],["/tags/visual-novel-maker/index.html","63da55dbb1b44b28e1048690692950c7"],["/tags/webgal/index.html","4506cc5facedbb7cc602a3bcdf04a129"],["/tags/封面製作/index.html","caeb4cb332575e4043c46a72ca82b00a"],["/tags/背景素材/index.html","c5d993dec86cee496afdaf4936dc2797"],["/tags/隨機功能/index.html","65c844ad9e25dd2042fef055ae325ace"],["/test123/index.html","9cfc6dfd0477059e6eebf137d4590c9b"],["/textbutton/index.html","c659f7908efb3c4a2691bcecc39fdbfc"],["/to-do-tutorial/index.html","f5f8475c066c98983865a9304a58ea7c"],["/tools/index.html","ec168b14b30f650475ce02cb868e8535"],["/tooltip-function/index.html","ce98b8e3430243d36dac31fded2e2ee1"],["/transfer-to-hexo/index.html","916c87b63c2bd65bb50c9525d4d981bf"],["/tutorial-update-history/index.html","7f76ccb4d4ec7665078194e5db9bfb00"],["/tyrano-name/index.html","d07c9ee60a94089b80295edaccde6f24"],["/tyranobuilder/index.html","e8ec1758e716bf66e66575f626e74f47"],["/undefined/index.html","46499ff1f94a505cd18392eb78d18081"],["/unskippable-video/index.html","d02e45aed34221831108170d8b8dadef"],["/update-20221211/index.html","90edcdbd2d3dc4b3da9f79a9ee17fe95"],["/update-20221218/index.html","1d73e2c0c7999a92393f2d4a67ae455b"],["/upload-download-save/index.html","5883fc0bc5c000a27363f932bb655fa4"],["/upload-your-game-itch-io/index.html","61431a74e57098036f15aa76c2eb96d3"],["/use-list/index.html","14050c44a52c644fd4f51c3c3f34a216"],["/use-nvl-mode/index.html","c699308f6628f0470aaa754a14ba689b"],["/useimage/index.html","900379dd219973ab48e8d373851ac6e3"],["/variable-change-image/index.html","86b78f2767999a460051d63292d52923"],["/variable/index.html","43395f6a9c555c6bb0aeacacfdf07a28"],["/vibration-function/index.html","b9e8d3140c041da0c6c83eb78d73d4aa"],["/vnmaker/index.html","b6ed1c9c941c7d28dfcab344b9f163ce"],["/weather-effect-tutorial/index.html","deeb9ed671a3c17b488e638ebe74f9df"],["/webgal/index.html","bbb87352033168c4292c6ae0d512430f"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
