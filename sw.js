/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","941fdabe3dccb9d5f8a4fa9d37a3ad53"],["/2024-future-plan/index.html","a80fd44db6382aa420964723e3e91c58"],["/2player-battle-system/index.html","002cfb2933b5590a9cda6d074698acc1"],["/404.html","8a0eb2fdb73196d4e231d48ea49bae82"],["/about/index.html","88c9867fa1489931a715786a61169438"],["/acg-creator/index.html","9c7404e54a3fa5ef98a41b476df23302"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","768865678b8d6e456d033435592ab409"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","afa66403bd58192ddf4e84a1247f5f3b"],["/animated-title-main-menu/index.html","e68fbdc9ba9c281a4199f99e27876284"],["/archives/2022/05/index.html","c96d94333167f1bb34f5f0c6a94974fb"],["/archives/2022/06/index.html","9e9e7c71cae72997e67626362d4e98f6"],["/archives/2022/08/index.html","3c09f0ddb6f0c99fb21e118e7e6238b2"],["/archives/2022/09/index.html","e018b1834d5e1a7750f2062424a06e5d"],["/archives/2022/10/index.html","282743963416739cf6c2a4cc7499f7ea"],["/archives/2022/11/index.html","755eae11226fb1f690aacb52e1fa5ca9"],["/archives/2022/12/index.html","890eca7d759e9833f4917660f8cf0c3d"],["/archives/2022/12/page/2/index.html","3967e731eb7a57b334780cb4a20eac5f"],["/archives/2022/index.html","14bbc992ddad3a83a862932427d4e215"],["/archives/2022/page/2/index.html","f9e0e4462e7d9bfeef46ea73e7a2b429"],["/archives/2022/page/3/index.html","ff3f3fd889642991957f90ea8a0ca57a"],["/archives/2023/01/index.html","12b283313983714ee41aa2414502e654"],["/archives/2023/02/index.html","063544ef83d0078f5cc1ef408d6cc946"],["/archives/2023/03/index.html","e632680cceac687750043c4c71bb1770"],["/archives/2023/04/index.html","22c5a031476ecd975c54232f84e79dbd"],["/archives/2023/05/index.html","17e4a8c4726a24fa845d69123d1b30ae"],["/archives/2023/06/index.html","bc009b27a4ebf172b662df9609ae698c"],["/archives/2023/07/index.html","213c886238a0ce0132d6543179c722e9"],["/archives/2023/08/index.html","937440aa84751e0fbfe59dcb104401da"],["/archives/2023/09/index.html","510d6b6e91f6f2dceb7133b0abd0beca"],["/archives/2023/10/index.html","388ba0a18d1d636dfe949c81317ded23"],["/archives/2023/11/index.html","bf32a52ddd20c5c4b6bc0a186c88e380"],["/archives/2023/12/index.html","87cb2f0c33b2aa002cfaa799a51ca95e"],["/archives/2023/index.html","1eb9567132734f2a23d4a1c5b777fac1"],["/archives/2023/page/2/index.html","e46c2fd789d439a696b14f1cd691fe70"],["/archives/2023/page/3/index.html","c32c63bbed8724cd2a034c770e4bb5d3"],["/archives/2024/01/index.html","f96a711e2cb3727fbbf761093f65795c"],["/archives/2024/02/index.html","16731be403aeb7da34da47b395bcbf9b"],["/archives/2024/03/index.html","ecc5cbac3b4049ec98755ddadf7bc26d"],["/archives/2024/04/index.html","a512f5c5ca25aa79ff051e1d8ad63315"],["/archives/2024/05/index.html","fa080bdc7ca924fb7d64ac82df9e7fc8"],["/archives/2024/index.html","40d9700f9733883103a2a815eb995ff2"],["/archives/index.html","d3392c8e696a58d69226cb951e534967"],["/archives/page/2/index.html","03da76ad8deb2d1aeb47138e81c3e1e6"],["/archives/page/3/index.html","cfc28104a0b6e3550b98c8e3ac1cf63d"],["/archives/page/4/index.html","f1c286d78ddd396b1b50a1416dc7474e"],["/archives/page/5/index.html","1de6af856b82eaee6fce133f30fb5226"],["/archives/page/6/index.html","73724326ebd45382e98fd9f657ae06d0"],["/artitalk/index.html","437a6be96b965d60827266da9e5d61b0"],["/battle-beautiful/index.html","516a2ca103d3e9c51e1991dcccdfac04"],["/blur-effect/index.html","fef1cda3c637d0cbdf8288287fdc6bde"],["/butterfly-custom-tag/index.html","3ce5b0c29774d0c27c705e390d7fbd2a"],["/butterfly-plugins-faq/index.html","5e91437764f985ccdfd16b24ad6eef1d"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","d68267a16616f401e7234416e1965597"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","e830552107d42f7a93c2758f4d568fb1"],["/categories/announcement/index.html","2ff43f9d5ad1b88faf40d630c735138e"],["/categories/diary/index.html","005176df11699f857b4733c4dee9ba8d"],["/categories/game-dev/game-engine/acg-creator/index.html","1246cc4f53efb19b68c7aaa5ea850922"],["/categories/game-dev/game-engine/index.html","b4deb4f92c1e93c3e8a41196b757d45c"],["/categories/game-dev/game-engine/lightvn/index.html","0b21d747f9671ded8c42f9606e23b46f"],["/categories/game-dev/game-engine/nvl-maker/index.html","9f1d62c5e12ddc65c261edce7990d72e"],["/categories/game-dev/game-engine/page/2/index.html","080d11870bbfffb04abfbc3c14b60fd4"],["/categories/game-dev/game-engine/page/3/index.html","3bff528b1465be1a8fe95a2239f1fc0a"],["/categories/game-dev/game-engine/page/4/index.html","81c47bb847b5f567cecc549f1062e91c"],["/categories/game-dev/game-engine/page/5/index.html","7a3e9712cdf3bd92f31e370a1ed6076a"],["/categories/game-dev/game-engine/renpy/index.html","5a07af193afa4848287044d607b10e9d"],["/categories/game-dev/game-engine/renpy/page/2/index.html","479441d375ca4765886032d7a3a63984"],["/categories/game-dev/game-engine/renpy/page/3/index.html","25a2568fb79b9965be841dc948783256"],["/categories/game-dev/game-engine/renpy/page/4/index.html","ff636ac58e014f159fb791d9bab6a3b1"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","1b87006dcaf0fba402fa83e34c97d6d8"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","86505d5882b7bb100fef05650335d923"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","2039bc4ea08a2cec665e713de9539003"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","9ae5802dc815a06d3cea814ce02c701b"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","d823d0555925d76a09d0b7c1f98379a2"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","33f885544b91ad649e5ec66d5f52e952"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","09c350be20d09119666ffa87a7671e19"],["/categories/game-dev/game-engine/rpgmaker/index.html","951cb2325441badf22c401362a2b63dc"],["/categories/game-dev/game-engine/suika2/index.html","3916011e18afa20244ecca50e2196293"],["/categories/game-dev/game-engine/tyranobuilder/index.html","e02c36186cc1d64b4437f86f9f1b4758"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","5611c893c48f54561faae39c1d1fc086"],["/categories/game-dev/game-engine/webgal/index.html","6889d5acf3ad434a879f2ca3d10703ef"],["/categories/game-dev/index.html","8ae30dd5111c5ad82bd3965797737d5c"],["/categories/game-dev/page/2/index.html","f78214802b2512b771c949734fef17e7"],["/categories/game-dev/page/3/index.html","3702de015659c1112db7e62838c9e3b9"],["/categories/game-dev/page/4/index.html","83d4d8a40ae271fd550f25eda9cc167d"],["/categories/game-dev/page/5/index.html","2abc8d1e5d650b0f351768e380bd3bf0"],["/categories/hexo/index.html","bb3cdb260aa42719366264abf1976a5e"],["/categories/index.html","6cf73b35cd77b12e0dbb16aed004cbff"],["/categories/material/index.html","6b0b5bcaed5f2a5bf601d67bfd1aab90"],["/categories/update/index.html","b501d96a561251f7a95b484d0925b932"],["/change-according-to-real-time/index.html","00782e46c4cbd56f06494f94ef04f686"],["/change-character-info/index.html","ac8b32434c40ad5d13383e4022cfc1c1"],["/change-title-after-first-time-viewing/index.html","fce1e5991469a479c4c505a710bc3188"],["/change-title-based-on-event/index.html","47614d01b76eceae39c814ac23a5b1c2"],["/character-interaction/index.html","a023741e0c96a0ced0ef4298097b1f10"],["/character-stats/index.html","365feee59ff51072cb9ba8942f5d8062"],["/chatbot/index.html","41a6b0433a6b83606d12d6674ac25b0e"],["/choice-time/index.html","f994d4b4d7bb6f2b85213134066111ca"],["/comments/index.html","3def7eb8bd47af10c4f9dbe99c42ede0"],["/commission-info/index.html","1c3b96b4d282d718ddc57638e2377fb5"],["/count-login-number/index.html","5cad9abc3966bfd602387c1ca10dc3ab"],["/create-button-anywhere/index.html","384920cd09ebe28af0f6283d3d61db6a"],["/css/eurkon.css","dc497a4a6ea22ad7801cd1a7fb60a63e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","67aeb5decbb2dc06525945ea2613457c"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","c6d113e505f077b8a0e9f44a787877ea"],["/css/rightmenu.css","06e4dc09c45d6fa7e2d690605beae2df"],["/css/siz.css","2fe664afc5fcbd42602c10c15b42da35"],["/css/swiper.css","82c83442c4d7a09b2113e36b58d02b61"],["/css/swiperstyle.css","a55ea36f39b6cefc46b37a1aed88ad78"],["/css/var.css","5c507ed623c0ae6992189c9d564cb684"],["/ctc/index.html","782d81de0de0c46a882ea31019a53b93"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","d0bab29cc9191a951858e3f7a24f8271"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","e781bb5b70f73e32ef1601b62d261560"],["/custom-launcher/index.html","50e6cd44900976ce872cfd4af365d1fe"],["/custom-loading-screen/index.html","bd794e8e988278d92f5e68d3465e17b5"],["/custom-mouse/index.html","98119403762b7048079e49ffe6913b87"],["/custom-music-room-screen/index.html","ef790fd48f730f7e8e364d89625c76cc"],["/custom-music-room-screen2/index.html","291451f0aabc11adfa4f6b1555ae9eee"],["/custom-nvl/index.html","4858a653296ef8a6e6c94137ccc18728"],["/custom-player/index.html","a85be68665d18c7ca0f3dc128a07d460"],["/custom-preferences-screen/index.html","5cf2b8f726c5ce2f142ceb412b69684f"],["/custom-say-screen/index.html","fba3f392dfcb256c2e0a6b84abeb698f"],["/custom-title-screen/index.html","e090833b1ea91669eb0454a4e5e4f2e8"],["/define-npcs/index.html","bd0becbc6f98966f20aa9e4a6e1fd028"],["/delete-save/index.html","1671b36aaee1747eef1b6470d4df6091"],["/dice-function/index.html","8e57a034e31e6027b762133146971ab2"],["/disclaimer/index.html","9c8917a759b8d46ce94d3970f089551b"],["/display-immediately-all-dialogues/index.html","9232c925282fa5530dfa5031702c44e1"],["/display-real-time/index.html","500c0d31c40a1245f243f5e58c48f66d"],["/enter-name-screen/index.html","16b65969db2f9d5553787e903ccec8c3"],["/export-game/index.html","7ab41657f2991e3a342e1082a17f4519"],["/faq/index.html","5b12a7d3c7bc5a17858dff00d2083c50"],["/friends/index.html","24c78715edb811cb59e05f3cf0b92356"],["/gallery-template-assets/index.html","201d3545452b7798650d5a6b5337e9d2"],["/gallery-template-default-ver/index.html","ddc61a107334bbe559cbd5ee871bcbf7"],["/gallery/index.html","e0aec0bde2269a693b628c8595d31898"],["/gallery/photo/bg/index.html","3751b72b404e5c82fd476491d325817b"],["/gallery/photo/gui/index.html","3accf2bc1a1de64866c013604e1b042c"],["/game-only-text/index.html","aea808f2e912c63dbee181b762ece4e4"],["/gui-017/index.html","485972d9f197322034911cdfb4cd543a"],["/gui-vertical-002/index.html","63b8829a054031f75100aa3cfa4bbd03"],["/gui012/index.html","3e0295f1a60dfc228a737c311a2d6d4a"],["/gui018/index.html","cce44c25c56f5bfb095096388930717c"],["/gui019/index.html","f81ce9a4b09e56fd399ec2cb8d33a192"],["/gui020/index.html","f078041074a2e89eff208ff52a456921"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","3b89b755e44869ddb6b48b85b95d0385"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","12253454ffa79a64cdb7e6529d550028"],["/hide-textbox/index.html","fb91d197178dfa515bd7760738254ffe"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","b1ff12a1570d84baa63ceb2e720d052a"],["/images-tip-function/index.html","8cdb2553bd873fc082fcaaa7d0a28d79"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","9a0f179c95c45d2628889e9f7e917161"],["/index.html","2090bc11279fb2c79ada6279593ec8a1"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","5149b6298d4a078b9168cd3588f749c6"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","5aafaa6e9104fdf82242abe2437d3ac2"],["/items-sprites-effect/index.html","d51d08cee507a49c09c817dc6ca298a6"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","adc1a5f8077961c6471414252083f2a7"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","5572c20421236456fc2fbd810ac76e05"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","27b7ccbe41ccfbf1000337988a393f2a"],["/link/index.html","2a2457cfacfee83567e29ac9fd34e706"],["/login-reward/index.html","6be86975c39fbc1e603dd241ba3a1968"],["/make-butterfly-beautiful4/index.html","972b6d40db172d2da68ccfbf3dc51aa2"],["/map-puzzle-system/index.html","df1d4ab4f3f26f315f3ed6577b6b3002"],["/maple-effect/index.html","ad0b6e65c20e2edbc43a1d1ef4a2ddb3"],["/memberships-2/index.html","a23417b836a3072aa55aca57ae395951"],["/memberships/index.html","325a05620759df527e148e8ea6eecbb5"],["/multiple-language/index.html","0333a49c52d71f2bd7130f557f9396c5"],["/name-input-assets/index.html","fdd6ddbc77b162d81e022bd13372c7bb"],["/new-year-event-2023/index.html","7a4cb0496f2ddff85985bdcdaac12f18"],["/newsletter/index.html","5675f09b7d7b1ae48d1c6b40ebb626bd"],["/nsfw-limited/index.html","be2eca54e25fe324a0cdb3ea5fb44343"],["/null/index.html","ab2f249d1e06aef62bff816cda8ce1cd"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","9eb002cf84ac693542956495896707d5"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","86759e169255c84b9b98ff1e52dd6f89"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","d02713a3477f76786a51aa693ced4db9"],["/openchatai-renpy/index.html","8447e1e03bd3694e8398ec09ffbd51c9"],["/original/index.html","413ba92748d09d33f6c2e55ae077d97e"],["/page/2/index.html","70395dbe357d6b11b5b64a715d779891"],["/page/3/index.html","4ca16be4c715dea171dd437397c8e784"],["/page/4/index.html","394bfb0f256ac7ed6094c4218bfb514d"],["/page/5/index.html","7a8f4529a197fda4c36a18873b5def43"],["/page/6/index.html","7ddf3b6f091381e2a14d6fd05248375b"],["/point-pop-up-assets/index.html","587317a6593eef5cfe8b1408b065d76b"],["/pop-point/index.html","c9e78606d8d6f1c6426ea8e1f0013d0f"],["/privacy-policy/index.html","1ecf99377762c9588c608b3437c898ed"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","4d21b34627fc423780b4add2d82b8c60"],["/random-number/index.html","a76f0961e957fb0ff326d7702b382803"],["/random.html","0dda87d3e48507d51e119c58d7386522"],["/release-017/index.html","238d42dd90b1836126a09e45938bf3ad"],["/renpy-basic/index.html","b6a183c847fb90b6a6cd17c2dddf1d9f"],["/renpy-crash-glitch-effect/index.html","0fb34facf8e8beb4b05694e4b737e0b3"],["/renpy-flip-image/index.html","ef5f7db4486ab2e8169765d181fd1094"],["/renpy-matrixcolor/index.html","e74b960008169859fbb7909a3c6e4a8c"],["/renpy-overlay/index.html","7ed869cb919323741b79c6ab9c5fb719"],["/renpy-review/index.html","a4bece04a5e610c134e6d4adeac87755"],["/renpy-typing-effect/index.html","73eb929e3cf6608b1b1199abe5084003"],["/rpgmaker-assets-menu/index.html","fe611297dc2075d0fb83a1fd6fc5c6c2"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","17f52297e54af2644134c876082b9f1b"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","72fed493660eccb4e0542c26674b1027"],["/sakura-tree-background/index.html","e77181e7dccf0b98a67cacb75b1b2b11"],["/selected-button-style/index.html","6816c0dd38b0c489bb48933da526b3e6"],["/service-worker.js","935e520dca52779b18810f615003b26b"],["/show-variable/index.html","2d29061f5f52f63e9e43b1c42f4fae53"],["/side-image/index.html","47711d7cae339030f6c427f277be03dc"],["/snow-effect/index.html","31140a631a865cae7ef9f95de3a8c668"],["/speaking-animation/index.html","b64c6643e581a31460dada651d124862"],["/splashscreen/index.html","8a5b84021346c966748cd9840b6d845c"],["/suika2/index.html","0ccc8b661ce6372b8a274c36d68fee1e"],["/sw-register.js","0aba49006af97f5aecf91436709d3342"],["/tags/Hexo-plugins/index.html","63d32b073c5f13061b10ad0786e83675"],["/tags/Light-VN/index.html","73eb78d96b5b83fbb13c6c981787fddc"],["/tags/acg-creator/index.html","823055ada2b704bc7a59d6b2d34f2e28"],["/tags/ai/index.html","89b3796e32300fb2a8f824acf051fa3d"],["/tags/butterfly-beauty-diary/index.html","383e358e741832cff7f976917d446124"],["/tags/custom-hexo-theme-butterfly/index.html","084eeb03c9da2137cee7934f72e3737a"],["/tags/custom-renpy-title/index.html","48ff27dc5f9ba49643d527425751a1a2"],["/tags/dialogue/index.html","74b00c8e2a8bcaa3b710a4e189bdb44f"],["/tags/effect/index.html","c0e91e2e50c72e83948a6e4948751e61"],["/tags/event/index.html","3be5bf14d823d7530e1b2042552cfe91"],["/tags/hosting-own-website/index.html","2b598c2d7a9846e41bba39e1cdde22b2"],["/tags/index.html","eccfb90206de56187510915d616013ff"],["/tags/itch-io/index.html","8100e04b0ec71d1c80d40b2f81ff54e1"],["/tags/light-vn-update/index.html","c8d4d78fec432ff1e5878356f28509f0"],["/tags/nvl-maker/index.html","e992d4bf0cfa5bf690ff903a4e9ea26e"],["/tags/player-related/index.html","fcdd0623082f520de99233cacee64e2c"],["/tags/pro-tutorial/index.html","90f876d80377170096ef18fa795dc896"],["/tags/pro-tutorial/page/2/index.html","899b1713319acdfa17da8eaab92146b6"],["/tags/pro-tutorial/page/3/index.html","6370f42261103365c0b1c3058ecce12d"],["/tags/pro-tutorial/page/4/index.html","f13fca3376b459ce0a322168c3484a5c"],["/tags/renpy/index.html","5299517ea1a5a8210698d741c9e4c60a"],["/tags/rpg-maker-custom-map/index.html","55814c14bf6892347d6d45547dc56c29"],["/tags/screen/index.html","1284b2b036bf8505c2312a93d9bd87a5"],["/tags/special-function/index.html","b7dc444273256fd427724e8f32b80aa1"],["/tags/suika2/index.html","0d7212e822c51bab4a2f28b608fc0023"],["/tags/tyranobuilder/index.html","431b348219b8f84ce3bb7fc321de937e"],["/tags/ui-assets/index.html","26af63318dc4017dbb74abdfc16c0aae"],["/tags/update/index.html","17383998ccc1636dbcbdfcd4ffe7c03e"],["/tags/upload-game/index.html","68cc6249fcc51d4deea5298b7f6bc47e"],["/tags/variable/index.html","f6662ebf9fdf7027a373f94b347fbd98"],["/tags/visual-novel-maker/index.html","501f0f6bb3b86009f0e55e366445911d"],["/tags/webgal/index.html","c5686905b85b09b844cd17373a250dbc"],["/tags/封面製作/index.html","fb5d4094d5072337e39dc0d92e296daf"],["/tags/背景素材/index.html","b7379c1c2f7fd00bb8f791c0e8352947"],["/tags/隨機功能/index.html","4735410ddf5fd858cb32ae52ef1c18af"],["/test123/index.html","879f31f9f54b05c3c53b546b39aee2c8"],["/textbutton/index.html","9cf590daea9a05ebab9cbfdec648c973"],["/to-do-tutorial/index.html","76600b44ae5f706a9081c82040772316"],["/tools/index.html","54b202b3e2572f84dd77abd26a0f0930"],["/tooltip-function/index.html","5a2dcbf8538f6feed2d46f095903098d"],["/transfer-to-hexo/index.html","612826bbe67d11e86b8c29b3e89196ab"],["/tutorial-update-history/index.html","dfe8759388d5f409bda2bdd1f27aea50"],["/tyrano-name/index.html","fcb157887a529b3ee48773575bf311ce"],["/tyranobuilder/index.html","a4c36d810f811ae0665a4f599b9bfae9"],["/undefined/index.html","f58cf5783153f3fe61ba3a3c81587bd9"],["/unskippable-video/index.html","d6be43f5c1f7fc49380ae97cca85c4d2"],["/update-20221211/index.html","635a0f174fb47dcb2a6e61482b22d438"],["/update-20221218/index.html","ec8240fa44528125118da9fb0a57436b"],["/upload-download-save/index.html","13dc3bc87f3abc6ffe581a13fe36339a"],["/upload-your-game-itch-io/index.html","a0a29ef5ac03674800c31e842e7cbf12"],["/use-list/index.html","7ef40cd186352672c646164241ff0830"],["/use-nvl-mode/index.html","2e497ed953121961ff296182315027e4"],["/useimage/index.html","de9157edf262f8519abb39506ba8a22d"],["/variable-change-image/index.html","2266c63e969fc4403b40ea0ef42059b1"],["/variable/index.html","e1242aabe4875693080674af499b703b"],["/vibration-function/index.html","0e7bd5e7fa6247546c21fe92ad8c6eaa"],["/vnmaker/index.html","60a5d4dfa23c7c48f06189967299d228"],["/weather-effect-tutorial/index.html","7b3038f066377a649896520d05cdc170"],["/webgal/index.html","58a9b7a25b4f8d8a37ed4ccc7fc36313"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
