/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","ec856e52af804471be5224645f59c1b0"],["/2player-battle-system/index.html","62d3e2de133446aea1d68b576a76dbb1"],["/404.html","4fbc32edddb9f52dfdd55d58c4cdb40c"],["/about/index.html","c71cfad88a452d94767afc7e1142ccc5"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","bdde3a101fb50c9875dfdec610a50cee"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","7114c20c9132d086a362a28a15e5b2e8"],["/animated-title-main-menu/index.html","1beeb13c683386fa16bb58958f64f356"],["/archives/2022/05/index.html","c41c8c148d8584b70b9da3a51c6cc2c9"],["/archives/2022/06/index.html","c08e09fad5236de1faa9a22a4e249bc8"],["/archives/2022/08/index.html","c6f1e46fdc6094af1ed1c0d00d2b2439"],["/archives/2022/09/index.html","03a05bb4a30336f2250ed1875f8d6280"],["/archives/2022/10/index.html","c5398d5314e2b4672deb71fa83f56cb9"],["/archives/2022/11/index.html","be392a4ad51d64bc02d7b8a86fc6b525"],["/archives/2022/12/index.html","80b87bccb0eaf8639deca0ec0ea03dd4"],["/archives/2022/12/page/2/index.html","b81bbd8ed537ea19408430eaa26fa3e8"],["/archives/2022/index.html","5ad31bc9e3caec787df87f646902ba51"],["/archives/2022/page/2/index.html","2051bc620d4694d2cb636106c5cb6b6c"],["/archives/2022/page/3/index.html","ec89e820a95bff40923c26379ee2a662"],["/archives/2023/01/index.html","3c2bbdc6e7b6c1ed95e9fdf1e4dc2b0e"],["/archives/2023/02/index.html","df746732bcff8a81f0a01d75b310b9cf"],["/archives/2023/03/index.html","5c4bff36bbd389d8542d8d83e1b029aa"],["/archives/2023/04/index.html","8b6759017957daada08fe9dcf883ac9e"],["/archives/2023/05/index.html","58b92c72da5658581b9aba21c3acdadf"],["/archives/2023/06/index.html","a9fdeaf811642556e601824c1d3471c8"],["/archives/2023/07/index.html","52cd4e8741199ee415ba9a97f0b98068"],["/archives/2023/index.html","16be14392f29adf29fde9f2acf0b3578"],["/archives/2023/page/2/index.html","0f7ff308bbb43cbdae670f6c91384065"],["/archives/index.html","d3410fef0749509ba0f30f3dcad6739b"],["/archives/page/2/index.html","5e1d6b3feb3e17a5fef47669fa6b5f7f"],["/archives/page/3/index.html","100b780d6dc6ded7dab3d49328a789d1"],["/archives/page/4/index.html","da9d209507729fe549d971c9d93bd0fa"],["/archives/page/5/index.html","d50068fab4786d8586b1c1c32b898374"],["/artitalk/index.html","5e3c8b0a4107d070b6ef608f5c7ce619"],["/battle-beautiful/index.html","71b9dfe5c0ce5f47c2fd308ca2ea9067"],["/blur-effect/index.html","76ad6a56c6c772173939f537f8a49133"],["/butterfly-custom-tag/index.html","eb338799af1672ef6f9eaebe291c89f5"],["/butterfly-plugins-faq/index.html","05b95628a18dea807f659985157963c7"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","cef8a0b55912badedb799d5886165420"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","a378cddadc7eb99a3f1e7f82ea2780fc"],["/categories/announcement/index.html","524dc6d39258b833b475db91bc85c973"],["/categories/diary/index.html","52eb668a8d8a3751aba28f4f008f60bc"],["/categories/game-dev/game-engine/index.html","759918e81b7abe1929581ca142906dd0"],["/categories/game-dev/game-engine/lightvn/index.html","e4b81adf8f5641851ed853dc5417b33b"],["/categories/game-dev/game-engine/nvl-maker/index.html","b155e9e7c428d6437f79063dae90009a"],["/categories/game-dev/game-engine/page/2/index.html","a28f57fddb1154fe0a49950aef2944eb"],["/categories/game-dev/game-engine/page/3/index.html","e8f427f21a84f4fe96d9e36771db458d"],["/categories/game-dev/game-engine/page/4/index.html","adff8e6927df3f0bbcdfea6bcbc48b3b"],["/categories/game-dev/game-engine/renpy/index.html","52767d46906ba6b8629f96235b7dba00"],["/categories/game-dev/game-engine/renpy/page/2/index.html","2382cbcce0c545d92530f037c3962fd1"],["/categories/game-dev/game-engine/renpy/page/3/index.html","babdf0d01a7da3093226c7e1b0b2e3ec"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","a255f97776a143a66e5e08eea2cec774"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","8754ef239a20718b6931b2b5d475d38f"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","715c565ba99ea123877f68a74a3451d5"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","a1d29c1dae002cd16db7c8a03f29c47f"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","3f30ab8b04b6b91eea71b5a06176e239"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","c9ec3cf8e1d757b560397a22f21e8245"],["/categories/game-dev/game-engine/rpgmaker/index.html","7117406de6bac0eae1d123f31237c732"],["/categories/game-dev/game-engine/tyranobuilder/index.html","7197dcfe1fe0fcbe17fabdc88e11aedf"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","d4b395309fcdf6b6930e442cbcb1f56c"],["/categories/game-dev/index.html","cf126b853824132acf08fd655f5cc7b4"],["/categories/game-dev/page/2/index.html","c3a82a0e965970581a9761e2fbbe2aab"],["/categories/game-dev/page/3/index.html","2ab5483bbd16cea400a8decac9734a81"],["/categories/game-dev/page/4/index.html","f2caf2609192ee8c28a64f9f0cd466b3"],["/categories/hexo/index.html","f55bf6d9fee15c15cca5fbf4f94b5722"],["/categories/index.html","01fa3e953d91e703c5239e666a51002b"],["/categories/material/index.html","ecc25abe16f50edfbd01393261bb5119"],["/categories/update/index.html","d332dff31b129a436d9dd842fa67cc09"],["/change-according-to-real-time/index.html","63385879e25b5290f877873ddbb853ef"],["/change-title-after-first-time-viewing/index.html","786fef53783c45912e27154925732ac4"],["/change-title-based-on-event/index.html","717f6bb581dec907c37008e0d66e5d4a"],["/character-interaction/index.html","e09e8ffc01a0d8680d27ab284645f2c6"],["/character-stats/index.html","51acf644acd9d42ca17aa4a06366285b"],["/chatbot/index.html","cd4c7928006f28bf3b06eb5b1ee6cf1a"],["/choice-time/index.html","a2699143f7f9deefbd1ff616515ab26d"],["/comments/index.html","4ee4900f186dfe4b4bdbd61bfee2a544"],["/commission-info/index.html","bcfb0390afa63e9f4725bb016ccc7dd7"],["/create-button-anywhere/index.html","9d6d142f094e5789770e867e33768c08"],["/css/eurkon.css","9ec27157b417865b2cb0c1201a2baf24"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","f6c8c8ca9fb38032ff37b3dcc7d000b4"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","15fb2eb45b6b7c9f4a032c6934cb6845"],["/css/rightmenu.css","f611b7a244d8148e4aabb3828a92c237"],["/css/siz.css","03876b03e9b0b9da2280dff56a68bfa4"],["/css/swiper.css","96aec23981daa444f394618968b3d320"],["/css/swiperstyle.css","4941ec9980f5bc5a77cd41e603210784"],["/css/var.css","93bbcaae93fad10623a0a0f7eaa0dec6"],["/ctc/index.html","255896f22a1ceb59a56ab2a9ebbb18ff"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","de11d1f12ba934e95d5aa665aa927b92"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","ddcc6ca764a35103bbf4b9d072b2d4e0"],["/custom-launcher/index.html","ca297f91e7b0e36cf9e552b22a227c05"],["/custom-loading-screen/index.html","1a7929383e19e9818ab2982dda376d61"],["/custom-mouse/index.html","489289d859b59b8460f923b1083b5d50"],["/custom-music-room-screen/index.html","9aac71443df9ff663185cc5dd2a2bea0"],["/custom-music-room-screen2/index.html","bcd696a58d8588fd556afe5ff2da7781"],["/custom-nvl/index.html","53dbca238500e5330e940afc1765fa8d"],["/custom-player/index.html","a5cc5c0223c4f5b8a6372ffdaf73d99c"],["/custom-preferences-screen/index.html","bd04a68a38beca622536d88321861357"],["/custom-say-screen/index.html","0dcb4416c3f5185fb312a9bba64819f3"],["/custom-title-screen/index.html","9cf2e5ac726bbe14029e40970d02f5bd"],["/define-npcs/index.html","82b24ee5f55e77c71624195642cbd6a0"],["/dice-function/index.html","d577ae8c75b71039d3c3d8dcaf1ef6b6"],["/disclaimer/index.html","51d82c7b7b48857d57d939d74560001a"],["/enter-name-screen/index.html","e5c8c3c5e80d8a432cd8fcca03727907"],["/export-game/index.html","ee4d7b558fb2b63acad077b195d1184c"],["/friends/index.html","0736bc94ef70881a456e81066fde1ddd"],["/gallery/index.html","733d3a28e97a92d8d6f77dab70ab958e"],["/gallery/photo/bg/index.html","5b5ca137bdd9dfb28dcf1f3cb09aecbc"],["/gallery/photo/gui/index.html","437f58fcd4e618a9dbbdef7cd81a8df1"],["/game-only-text/index.html","6083ca35bbbfa09418606c4781e0a442"],["/gui-017/index.html","9e8c881d3256573dbbe0d3d817001a23"],["/gui-vertical-002/index.html","7b642ebccc2e0c7853b45bba043b0ecf"],["/gui012/index.html","c8a02d65d1b92b9d0ad693e8fff319ee"],["/gui018/index.html","e2da5a68d41aa6db387df4b834101e7e"],["/gui019/index.html","2ca9685e4488600369ca3594c11e1a65"],["/gui020/index.html","f21d56e5e861af5c514b8ac1d5135b7a"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","8e716c8ee8835187c0008a68bfc65fe6"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","8e03aa7203fe8117b2fc6bda6017eadf"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","4ef710eb847e73655718e3ff39833f17"],["/images-tip-function/index.html","92b427cff3578d508c57fd2c6ee7df68"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","725718a71b8f801e14727ce245c7b674"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","5f58801db4e347b54abb7312560558e8"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","6027c2181f1604e82155b15e27f88942"],["/items-sprites-effect/index.html","01d9ae53c444f66f72e79390f8a01a13"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","d06d60f317dc794bf490740628088327"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","54532152773b2031a075a1f040199187"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","2aaa5eef0420766211e45de7cf723c24"],["/link/index.html","d25228f6b29b44c8dd48548f2d1d1d4e"],["/make-butterfly-beautiful4/index.html","0a08b16808b37e0830a3142279a334c6"],["/map-puzzle-system/index.html","c7456168bb32d010fbf7304182c4664b"],["/maple-effect/index.html","4383f56f3ec887f7b00317e6569ffa54"],["/memberships-2/index.html","c57e3a5b52ec95c4652f7b834f841b1e"],["/memberships/index.html","8aab5a34a8b8f5d440c8a1c2877f7cc4"],["/multiple-language/index.html","2935df7ed00ce7d9f204e1bfc8a73c13"],["/new-year-event-2023/index.html","ee4c39b2730c5941bfe8bc4d9a949b80"],["/newsletter/index.html","599a5879826436e4ad3df9be5b7fc8f5"],["/nsfw-limited/index.html","0a9690d17aa64c17e05bbf2b7175ff1e"],["/null/index.html","cb836916afb640074f88ed7b86f4fb8f"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","799372a691b67401940e39f514aa50cd"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","029eb87bbd14330d7de4ab48716b4fc9"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","bfaa2f0ba1e72e3b31da1c3e9dd6a837"],["/original/index.html","fdd69d856f0cb43762d03836b0987a46"],["/page/2/index.html","9d2c063198cfbd28b3585b20352b6f56"],["/page/3/index.html","8701bf628a4f705229f986b6d2727e33"],["/page/4/index.html","9a68bb5b7077659ab9ba1f6e6b136c3c"],["/page/5/index.html","2f71dba84fffe8c86f2e8efaa46d7d0a"],["/pop-point/index.html","9408feda5affa844324ee9e8af6274a4"],["/privacy-policy/index.html","20d84a6321484e984ffab29a0e998c9b"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","31bb828ffc3e1775e1c04e47ded55212"],["/random-number/index.html","702dda92c9350088a598d80dbca93399"],["/random.html","7c61414f342d95cf47d8a2dc41a49921"],["/release-017/index.html","60c4cb02b97b9e87f0ebbfbfb3b6b62c"],["/renpy-basic/index.html","d5c4006b382a8ac5b2cbd1169bfed8d8"],["/renpy-crash-glitch-effect/index.html","86328222bc9591d7bc74e510375a9dcf"],["/renpy-matrixcolor/index.html","f428407c8d2d8b2c976ee2e2ffb0e11f"],["/renpy-overlay/index.html","a75922c9465cd7c2e6ca93b782ce4156"],["/renpy-review/index.html","a798ae1d2f316632676398dc6bc1a4c8"],["/renpy-typing-effect/index.html","397234c718969310bece28305353ad8e"],["/rpgmaker-assets-menu/index.html","5be84fc6f25951f0c70ac32e4c50ba31"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","733486fd6e91616a466fb649d29c0132"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","eedeb07c4f3bb6663c0ead0c120437db"],["/sakura-tree-background/index.html","8a8780d6b4287cfe44421df4e9692474"],["/service-worker.js","d463e1ec57d463667d36a3efd82b343a"],["/show-variable/index.html","a40e5b621e7e06ee035f74c5ae28843e"],["/side-image/index.html","5549809164509053cd67604b821feb57"],["/snow-effect/index.html","e2ddde53d5292f5b2f30321a35506757"],["/speaking-animation/index.html","73af9f380132dfea5b4123888c9d3cbf"],["/splashscreen/index.html","791c9abbe9eda41023528564eda49426"],["/sw-register.js","839d4b16b267adcd8a86f4d6ad1183e1"],["/tags/Hexo-plugins/index.html","03239d9529fbe2866c86015e5a4463e2"],["/tags/Light-VN/index.html","106131e13349cdffdca1b1025bb572c0"],["/tags/ai/index.html","08c6b139fe3fa4363eb0e241ab63d1a9"],["/tags/butterfly-beauty-diary/index.html","6c0ef90cef7e4f969c6b61c1b6c98aca"],["/tags/commision/index.html","2f03fd3e692d0b2c8611a4c83b210e1a"],["/tags/custom-hexo-theme-butterfly/index.html","4a77465832019efeff6c2262dec9ec54"],["/tags/custom-renpy-title/index.html","db4f89d834688f022aca8b100d1ef32c"],["/tags/dialogue/index.html","bc9dacc35fa935a2036bbef3702e19ca"],["/tags/effect/index.html","a3131c74c3e589218456f10d6c804084"],["/tags/event/index.html","bdacf808305406f1ddb241c5274e51ec"],["/tags/hosting-own-website/index.html","e715c6670f9988f26a4198b32284c467"],["/tags/index.html","7c9b0d609ff1557157f4eb6938b9136e"],["/tags/itch-io/index.html","cddcc12d0efcf9442d3a3fae61b283ec"],["/tags/light-vn-update/index.html","a05c79fbe62b84bf5d821c02d34d268e"],["/tags/nvl-maker/index.html","1ff8a8e81663a71e498f17cbaac6a445"],["/tags/player-related/index.html","0dc0276cedd5c264b1985967b08f6e8a"],["/tags/pro-tutorial/index.html","f99f8be55e2f9b07cedb6e688efcdbbe"],["/tags/pro-tutorial/page/2/index.html","f8f95dde3403757578e7e9e534a54b74"],["/tags/pro-tutorial/page/3/index.html","3ba2c4674859539964c9f4f0e1254936"],["/tags/renpy/index.html","1349bfaf141eb55d7833346248205815"],["/tags/rpg-maker-custom-map/index.html","1ac958d2bcb03d763e999fc48cf57ddb"],["/tags/screen/index.html","c68e222406e267451dfb91217a3d186a"],["/tags/special-function/index.html","c8071940de7bdd11a248ab31264fc385"],["/tags/tyranobuilder/index.html","85fed74640eeb48d05d9da03aee621b7"],["/tags/ui-assets/index.html","8b0114d7371ac8149d6638c916f99437"],["/tags/update/index.html","a234e4df4e5fae982002969c0bc7008a"],["/tags/upload-game/index.html","d252079b7308402fc2687e405bb9ce3e"],["/tags/variable/index.html","338981c10754f07dad0cb18c16a7d8a2"],["/tags/visual-novel-maker/index.html","fa6d6a0eb42648fcff5d9c30c3f3eaf4"],["/tags/封面製作/index.html","bd5a318afcfbea4f43ed9350833b6ca0"],["/tags/背景素材/index.html","97403be19d8fdfed0d16221b40102f8d"],["/tags/隨機功能/index.html","0d81b905e19c2b1f86762ac853d21240"],["/test123/index.html","2e95de9829c29ec9c20cfb7ec24c92a2"],["/textbutton/index.html","69ad741d02d1c886e9d699107972d514"],["/to-do-tutorial/index.html","bca7f2a2c23e1c0f797c6631212eee88"],["/tools/index.html","93013cf5912f0d9e12181ecf71209b59"],["/transfer-to-hexo/index.html","24a3324f32232a4aae3a485045b789ed"],["/tutorial-update-history/index.html","7d5926177139e3246cf2fe854630e524"],["/tyrano-name/index.html","35d23e88d72be86f3eadf1bcb4bc038c"],["/tyranobuilder/index.html","9caaf9bad47b9f6e4dd83af1b8cbb7e1"],["/undefined/index.html","605bada7b5f705fa1c531e2e10f3b5d3"],["/update-20221211/index.html","2037b9bc3cd8191a6859955cbda6c70f"],["/update-20221218/index.html","422a12b643e4affb1eedc897648d3919"],["/upload-your-game-itch-io/index.html","692e03b19eb5b7a6123be5803eaf9350"],["/use-list/index.html","e66712aa4da55b6dc0d05e9c839671b6"],["/use-nvl-mode/index.html","b299508e6ad74551ac3ff1a7d13f4585"],["/useimage/index.html","197c41f8966aeb0e092652cb794e9fbe"],["/variable-change-image/index.html","169b16ac4711c1cff93165024949395d"],["/variable/index.html","4ef28f0c2f1a15c13514c5cf6db4a01b"],["/vnmaker/index.html","05181d2cf7badd3f92dc1568de51f713"],["/weather-effect-tutorial/index.html","ddfea9c40c9d73ca76cb5121135ccece"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
