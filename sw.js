/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","802be8a7dda3a7c8074e40254b35d81a"],["/2024-future-plan/index.html","887c9c33d224f6aed250a8259b70b9f9"],["/2player-battle-system/index.html","68ad79e5ee91ac4b59c98924c385b313"],["/404.html","2fa521dcbb6f4879e7808e39f6eb9bed"],["/about/index.html","3af344ccd43b62ad3b2fccc8b596a6a5"],["/acg-creator/index.html","c19087e346ff6e96a806bfa5714b9199"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","70feee3373f35fbacfb8851fa0eea046"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","6db192c55a9f40cd1740c286160269c7"],["/animated-title-main-menu/index.html","c9ef256bedc68b8722cd1fcc3f200acd"],["/archives/2022/05/index.html","f79734aeebd6d4a4d6a767fe77784aab"],["/archives/2022/06/index.html","9143e0785325ffff9040db9938b929c6"],["/archives/2022/08/index.html","38ef12c5de86fc371d600cc779e499e1"],["/archives/2022/09/index.html","3960f7dbd25f14291eac1d8d0fc18006"],["/archives/2022/10/index.html","ae55e61d4f10d5d9fac97d59a1582a3b"],["/archives/2022/11/index.html","5ad3330cd0fea94878216f73f189980a"],["/archives/2022/12/index.html","1357819f26762a9f186a2b489c4374a5"],["/archives/2022/12/page/2/index.html","fde7e6e40a545c2bd3b78ad9a2050449"],["/archives/2022/index.html","931504e525074ec815f322b55a387ee4"],["/archives/2022/page/2/index.html","9072f510676439d87b713edaac701a5d"],["/archives/2022/page/3/index.html","a28bff832c1d537b2f219ce94bc4b14d"],["/archives/2023/01/index.html","75af46d803b9d1054f44940ee835301a"],["/archives/2023/02/index.html","405cf8a32a2d17efd391448ca86e1385"],["/archives/2023/03/index.html","c7df6dc92498c679b4938fabbb30fc8b"],["/archives/2023/04/index.html","64539dd44882ecf6896961685670d0ed"],["/archives/2023/05/index.html","84083992d5169a0ec7a2a55e6dbeb24b"],["/archives/2023/06/index.html","7399f1db21475e209d788b607d08dde2"],["/archives/2023/07/index.html","0d9982fed23cc2d09aac4e8bee14f88c"],["/archives/2023/08/index.html","c41f8af7409ba6efb141583a0534d7a7"],["/archives/2023/09/index.html","2d1e93e6072be9f67990a61d0d382ed4"],["/archives/2023/10/index.html","47a5b6d75575bc5aed0144189aaf367a"],["/archives/2023/11/index.html","cd0051e88c963521325180f0d654ddc4"],["/archives/2023/12/index.html","d1f5225a1b21a45e1299835c0c224e76"],["/archives/2023/index.html","9000e5304e31730b9cb1966e957cd350"],["/archives/2023/page/2/index.html","85d56a903151f52932ae890e5285b0fb"],["/archives/2023/page/3/index.html","a106eac939893782db28b4a0bce574ad"],["/archives/2024/01/index.html","244e6db7c31d4745a1a883a33143a010"],["/archives/2024/index.html","349c0763ee01f94b27c8a7ff3dc23e76"],["/archives/index.html","94552d0d2c7c9f4429740751472cec36"],["/archives/page/2/index.html","c5f94d570b1f601a1a1c7af1f9585256"],["/archives/page/3/index.html","b63aa43d9b1508933e5229054ea34c39"],["/archives/page/4/index.html","2cc14a84329be6bde4736868a813879a"],["/archives/page/5/index.html","224f22df3d8778693da7827fe694ec91"],["/archives/page/6/index.html","1246206838e0d29ec5ffa76a02a00f43"],["/artitalk/index.html","d4e840954d74641f9d471ef6898a52b1"],["/battle-beautiful/index.html","4d544cb1025f66f4fa51a7698ef6a4cb"],["/blur-effect/index.html","81348ce5041df66d90a98957e78018dc"],["/butterfly-custom-tag/index.html","a25f29aa50d201138c08e90bf32c6cf9"],["/butterfly-plugins-faq/index.html","76a8bfd7c0a374d29f94c1b1eaaf054f"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","c79ef45c7e9e51b5d9d3cfbe0fba2f83"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","cc00d164eddb537760a3a5577d0b7861"],["/categories/announcement/index.html","9dfbc1a2bc7b5c5643d5c567610a62e0"],["/categories/diary/index.html","94c18df27d52dba0c41fd414a0b6b9ec"],["/categories/game-dev/game-engine/acg-creator/index.html","569f318f90527dba068363d2563e47d6"],["/categories/game-dev/game-engine/index.html","df6303ba1fe3526ead6f80ca57bc686f"],["/categories/game-dev/game-engine/lightvn/index.html","90af0c5fcc684b96df56c130e77ea320"],["/categories/game-dev/game-engine/nvl-maker/index.html","70118fffde5b6c1bb255ecb93c73197d"],["/categories/game-dev/game-engine/page/2/index.html","9ff11379e11b5d2c66f9b095284c9f5e"],["/categories/game-dev/game-engine/page/3/index.html","b99176377d35a8fb892f8621f2ebfedf"],["/categories/game-dev/game-engine/page/4/index.html","0b310688a97f29eeccd4cbc4ab8cc0ff"],["/categories/game-dev/game-engine/renpy/index.html","89ee754850bd35514a8979045d13a2ee"],["/categories/game-dev/game-engine/renpy/page/2/index.html","340422e29f16bdb2883eb9246a96ddd4"],["/categories/game-dev/game-engine/renpy/page/3/index.html","5b618ff6642d026a5ade143af73b653a"],["/categories/game-dev/game-engine/renpy/page/4/index.html","bdda32f5eb483433ac12e63260db1721"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","7a06f80f498ea7cdaf288e11be8430c0"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","e8a36c252e041cc57e1274fd90c85742"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","086acab6affe95835e943c62fbafc712"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","e03d34b127905105c340aeb6dd78d46b"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","ba332b56aa1f7d226d9f100262ea8dd0"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","e876d1f2cab905d92190c6d64b1389fd"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","15f5ff11d63629afe1a7fda0c9d4c4ff"],["/categories/game-dev/game-engine/rpgmaker/index.html","e91fa251876722f59d4ddf2a7e3683cd"],["/categories/game-dev/game-engine/suika2/index.html","53ac11bdfeaf9fc8ab4957fc3b8c8703"],["/categories/game-dev/game-engine/tyranobuilder/index.html","76fae9811b203532ced91e5c4731e185"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","daa9d6244df13d5555c2af76c634fa63"],["/categories/game-dev/game-engine/webgal/index.html","273f6e70261c6bf8d10047a075b0ffa2"],["/categories/game-dev/index.html","21591ae9e855d4ff431399d41bdeac99"],["/categories/game-dev/page/2/index.html","26fadaad5abc4a4a079123118cc15d15"],["/categories/game-dev/page/3/index.html","7830db7d7366d2eb40b80840c461f7eb"],["/categories/game-dev/page/4/index.html","b951851790bd7daf201f3ec2d700364b"],["/categories/hexo/index.html","baa6eb0dc3d86262139e7156cd771650"],["/categories/index.html","157c5d1be4e8e0e544f24d7194bc64c8"],["/categories/material/index.html","a59c6f6d5487980b8625439b765758bb"],["/categories/update/index.html","c001344b0e56cb20efeccdfa5dc9c5d4"],["/change-according-to-real-time/index.html","15be2e312f1fb3e8afbc1702a03c1a5e"],["/change-character-info/index.html","94d61390a83e1173755881237e2f2953"],["/change-title-after-first-time-viewing/index.html","abda6cfb5d7140f69fc4e23d92c3f42a"],["/change-title-based-on-event/index.html","170df8d4cba3fb19be1064cf553d6632"],["/character-interaction/index.html","dc2c4ad0467471911d7afce558cc5ce0"],["/character-stats/index.html","825bb7a7138b9215452c6fcddb6217ba"],["/chatbot/index.html","40d814a47dfe221959b6f2d81026315d"],["/choice-time/index.html","1d0d43cd7e5b510feb7461e8ae41f150"],["/comments/index.html","4a7d5c7ca6947b2dd9890d1389d19f47"],["/commission-info/index.html","8516cfda892b180332fd9f7c5553c7ee"],["/count-login-number/index.html","940bf680f09f7a983bb0c75df4119a0d"],["/create-button-anywhere/index.html","4c727d5dc2dbe191b4b7859fc2e9f1a6"],["/css/eurkon.css","78428b286b56597c5eb32be23aca5715"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c055a6a8f2a3215e2a2dd0816724d59d"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","8618267a0484d5adacc49bc2ee18946c"],["/css/rightmenu.css","d84d502a63476f88cc12ffebdf6941d9"],["/css/siz.css","a27fcf63d6aa450716f1447bcdbda65d"],["/css/swiper.css","c8691450a2d343c2c7f4d5a5049bd4fa"],["/css/swiperstyle.css","5cce47667c1ccc14499f3759b3df83b7"],["/css/var.css","1df7cbd64d1352c5712d772ffda6b004"],["/ctc/index.html","a374cd0a6f0af10547b33b01c09b7b21"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","6a1e0fb51c0c71275ae17bb83a19acb2"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","7fd415cda74b2b8e6e79c4498d9785eb"],["/custom-launcher/index.html","f4d62491b9968b6b449722995cdfb50a"],["/custom-loading-screen/index.html","4db5ee08c6f6e2f973d1c8cfe259a97a"],["/custom-mouse/index.html","bba7f1eb8c28ff525bbe629a1026a62b"],["/custom-music-room-screen/index.html","f46db97876b3599f23a78bc384acfe1f"],["/custom-music-room-screen2/index.html","f53b402e196bef1658b792975dd80bd2"],["/custom-nvl/index.html","8cfdefd12e148ad8dbd1a7b49f551dd0"],["/custom-player/index.html","de4265d3cf2ea06699034bb5ae0eb0e4"],["/custom-preferences-screen/index.html","54160f0e1ff9135f7f4c6d01ab24f416"],["/custom-say-screen/index.html","9159de67734da4326e306f7d77128307"],["/custom-title-screen/index.html","ee2fd7b6e06f3d030522a82bf7c10aa4"],["/define-npcs/index.html","4d8f96d66f27a5f182e353c7fc1ec654"],["/delete-save/index.html","4f2c4f625977a42a8fc200a39f59a99b"],["/dice-function/index.html","901ebe302d7acfd0210f6890747b5655"],["/disclaimer/index.html","5aa972abd6046b60069701d4341c3f9b"],["/display-immediately-all-dialogues/index.html","9054b9bdd31cd65120201ca7322b6827"],["/display-real-time/index.html","00f244455a7a411c9d2ea4b931ac501b"],["/enter-name-screen/index.html","b9b0b47414c7861aef65c8ea5f958895"],["/export-game/index.html","a379060402168e9e9628cf572a554008"],["/faq/index.html","a4f4ab5958ac4ec086441f9a81df5a8d"],["/friends/index.html","99e78501b7b2e60b72055d5bb9fb4f64"],["/gallery-template-assets/index.html","640355b45277a1563406c3e5026372f6"],["/gallery-template-default-ver/index.html","9817846c2648bc45d3fc65051a1678a9"],["/gallery/index.html","bd77591266af7237476e633c4a8f8a9d"],["/gallery/photo/bg/index.html","83b99c0729f6b8f1e2c25b7d46d75fb7"],["/gallery/photo/gui/index.html","25622ad8ad11452e0854142114cf6c5f"],["/game-only-text/index.html","9db2fe63a9b3be820cfa7bedff5d5fc8"],["/gui-017/index.html","ae32fe0ba92f6d9f6594b97a3995126f"],["/gui-vertical-002/index.html","8f038f3db44d39098b353324c88ee6c4"],["/gui012/index.html","4728cb0e45a7e05dfb52a1a7a33c1a06"],["/gui018/index.html","1ac62dd7fec1fbe8a64a89a3cb026cb8"],["/gui019/index.html","97b1c735205a67e2a95e1dfef78ffee5"],["/gui020/index.html","6318322ac4d614911fec56999fe4d1ba"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","220a5ede9c78348db148b12a1521856e"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","6e63dfaf389fe491e4472662ac3ba9c3"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","128b16e57c539185105b541ad5bbe9e2"],["/images-tip-function/index.html","eb1e9d76fc7fcb6c310331a770efe0c1"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","bf2f4fcbe92feeeb12bd633b500d69d4"],["/index.html","df903a95c32d80108a00f2c12bb2140b"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","76a4551b0d03833b66b570179d85cc29"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","a6ebc4b551a1c01a927d87269d209d5d"],["/items-sprites-effect/index.html","33df45fce1d4d4dbea83858682910586"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","ddad62d016c8e8ccd2eec75db2021b77"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","dda6a2d8af9a14e053cd71fa50c1d877"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","316c6b75fcb19242c96152e83e8bfe6c"],["/link/index.html","0cb1a425dbd1a7e7172b24285b004f6b"],["/login-reward/index.html","a11d69e9cba000448f0bd9042032d7dd"],["/make-butterfly-beautiful4/index.html","cfa089041bf72d4f876f1a792d76afd2"],["/map-puzzle-system/index.html","41cbdd738e48e2eea2fc4b665049198c"],["/maple-effect/index.html","7e81c25d68afb776e65ce3430d0cb4fa"],["/memberships-2/index.html","e2211c7fcf3780af70e5c53804003db0"],["/memberships/index.html","8e949a08fd378ab77416f84402e42510"],["/multiple-language/index.html","d77353d8e6ca69bd248c9bb40f585397"],["/name-input-assets/index.html","beec8572f88eac8588bb5444e68329e2"],["/new-year-event-2023/index.html","7e416bae2730c65c262731c817ce5846"],["/newsletter/index.html","5de50e4282df8c1442a5cf414e6f0b1c"],["/nsfw-limited/index.html","b6bb89d9c05218b7086bafb4a3d34b11"],["/null/index.html","869fda531a4fddea6a7e9607fd7ce3db"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","fe511affeb606dc56250bd52a0a1a50f"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","d68d409013ed7dbacdfc106448cbedac"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","b6c9fd9a3c4d4a44496ba929aa8bbff4"],["/original/index.html","847323cb45a5e9d9708e659f59324b4d"],["/page/2/index.html","a07b91a669d096784d66827f295e4848"],["/page/3/index.html","dab8de8c81e126337ad5277ff6d056b9"],["/page/4/index.html","acbcc1f9e8fc0d524b2669688f3fdbc3"],["/page/5/index.html","fdd466dd009d7b80919bf795abc49b54"],["/page/6/index.html","d49305d2bada5d5e85054091061fb459"],["/point-pop-up-assets/index.html","f02d3388f6bc8dffc6c49f978cf7d4d7"],["/pop-point/index.html","1360ffe7a1cda64e5df173a08c8e4dc1"],["/privacy-policy/index.html","b47ccaa99a9fc4eb400a2ebd7daf27da"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","34df77a323d1921f62ca9c438b94e33c"],["/random-number/index.html","72eaa4fd85758d023f7e8687cf2cff2a"],["/random.html","9f953a1f91cf1157868067edd0f474df"],["/release-017/index.html","dca4db341ff281e78d64f14ae7df6c5d"],["/renpy-basic/index.html","4687a812668784ad0bf97b0a0f38e89c"],["/renpy-crash-glitch-effect/index.html","13b345381f602a9b2e8c9f3eff71d02e"],["/renpy-matrixcolor/index.html","325ba61f9a409d49748425ab1560de32"],["/renpy-overlay/index.html","27c077e614ff6d9a49c3c82ba4122e26"],["/renpy-review/index.html","a0ab75f7ef67a5c4e9d9110dff70f83e"],["/renpy-typing-effect/index.html","85fd3e0c69a961b441dd685336fa0a9c"],["/rpgmaker-assets-menu/index.html","0758d4bf61bcf306a94cfcaea72333a7"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","cbf1237267bc86a4324171e429f6001f"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","fb9553f31600cc75e783898e63075baf"],["/sakura-tree-background/index.html","a01c429ed4cb5e28ef2052ff6e9f6105"],["/selected-button-style/index.html","d6e3bada18183ece5bd72cc0470ead0b"],["/service-worker.js","efbf6b5811239578ed6fdd8b92de34f2"],["/show-variable/index.html","d94926e6fb6861cc5f19ba135323aeb6"],["/side-image/index.html","624dbbbdd74eb5a0eb04a6538424b366"],["/snow-effect/index.html","ae392972c77910cf3cb4318338cf1094"],["/speaking-animation/index.html","3679377f3eac7d096c31d02773e190b0"],["/splashscreen/index.html","19b8f02ec539787b758b105337f2f45f"],["/suika2/index.html","a98cd2f84f5cf84a23c859c9e3e9ab7c"],["/sw-register.js","521413165f6bb20977e01fcb6491daca"],["/tags/Hexo-plugins/index.html","79ed0cf13f43225e9292502971dc8507"],["/tags/Light-VN/index.html","5be1f3dbc6b1104516d9b37b6b4a95f3"],["/tags/acg-creator/index.html","3956f6325b53326e8b811d935df149f8"],["/tags/ai/index.html","161b5ebbb13412c6493b16e3ab2db5f6"],["/tags/butterfly-beauty-diary/index.html","f07678e26d135bd663450eeade918cbc"],["/tags/custom-hexo-theme-butterfly/index.html","7a04768c53f69315a68475adedc92453"],["/tags/custom-renpy-title/index.html","838eb2d8c43ea5abcb6307793451d4fc"],["/tags/dialogue/index.html","e97db90a75e2f854009711ac339fbe69"],["/tags/effect/index.html","8a2971a45943819c230b624d9fa5383d"],["/tags/event/index.html","bdff9463a0a128d28dd469929286026e"],["/tags/hosting-own-website/index.html","47934a4dcf10509a50f684151a52506c"],["/tags/index.html","ab1a2181135ff679ef0398d1de76dc8d"],["/tags/itch-io/index.html","903aae4f9d85f37e278f3a960b79ccda"],["/tags/light-vn-update/index.html","85fc813b703f69fdc1dff578487037ca"],["/tags/nvl-maker/index.html","f1289fe47351f15beb9bbc7c6171999c"],["/tags/player-related/index.html","d774c40d3797dade419b7f2df4605490"],["/tags/pro-tutorial/index.html","66d69f0ff69b4f938c53632efba4cdbd"],["/tags/pro-tutorial/page/2/index.html","eeb68a47d66325f714072ddbc5d3abb8"],["/tags/pro-tutorial/page/3/index.html","0ea4487909174548a77367ec5ca57479"],["/tags/pro-tutorial/page/4/index.html","7be3d45f69ae36f67fded19a8d28d3ee"],["/tags/renpy/index.html","c4316422b74ea24e957cd73be2e2b23e"],["/tags/rpg-maker-custom-map/index.html","1fd582ff2579cc35da2019ae1168b9f4"],["/tags/screen/index.html","2a4b2d5492a0223f75f06d6ebd56ec25"],["/tags/special-function/index.html","cc6f67553932902aba2b3b211e8552a8"],["/tags/suika2/index.html","be0e73ea5da3a49530ccd059dfa6d111"],["/tags/tyranobuilder/index.html","d8c80622acfb334e8d0bcc26f0f3b8c0"],["/tags/ui-assets/index.html","5bbd60cc940171027e5527e62cc75950"],["/tags/update/index.html","3af8a30164c939b6f0cfe025dc96c297"],["/tags/upload-game/index.html","cd2b9554be72ddc64c5613157bca7665"],["/tags/variable/index.html","75289a04ade26eb8e815d8785bbe284a"],["/tags/visual-novel-maker/index.html","928b22de548a09dfa38815135a50a4e8"],["/tags/webgal/index.html","1ea6b8bd1c63bd43dd2b3363c8b5cfef"],["/tags/封面製作/index.html","8d6579e05f8dee6b74c02665b3b71d7b"],["/tags/背景素材/index.html","90ee591b76d9a5bfd03e898778babfda"],["/tags/隨機功能/index.html","0db45613f5c9b1cf53931eb238d37296"],["/test123/index.html","90f4b7198e915dd1d6c49b39cab66753"],["/textbutton/index.html","021b57ff98f6f3441e0e0862062475b2"],["/to-do-tutorial/index.html","a3eb29799d2e84cbf52f3436b890aba2"],["/tools/index.html","3978ab4e48b7266ddbcb6078e3019b8b"],["/tooltip-function/index.html","22026cb6884d3bb3caaed5e65c0a426c"],["/transfer-to-hexo/index.html","cd7dd38a560fe50bf16aab1443330d2f"],["/tutorial-update-history/index.html","a79b8b3197ea768529d478fb8965ba16"],["/tyrano-name/index.html","77db6fbfe7514d50b32cd732b9ba3f2f"],["/tyranobuilder/index.html","05f8b3ecd79d3d5fbe46a07db3e93d96"],["/undefined/index.html","299762d70285c064c4a37b40b73e7070"],["/update-20221211/index.html","7e6ed8ff8bc00cc886e9b5c8af62817f"],["/update-20221218/index.html","77ad9cb297fd04842727e2a51ccbc813"],["/upload-download-save/index.html","20c6c291b7091e36882a662bfe6087a2"],["/upload-your-game-itch-io/index.html","123b841d563d1067bcf24f43f5a5d9de"],["/use-list/index.html","0b647a7dc4a35903164ceb521771cd57"],["/use-nvl-mode/index.html","fa1bb64906bd9a1a86bec937d3f517ca"],["/useimage/index.html","5097d0bb1eaa962456af2eee2954b11b"],["/variable-change-image/index.html","228569c1f58439995fcbfdf7864ecdc6"],["/variable/index.html","158c5eb7bcd20e6d93e32da0ced8ac08"],["/vibration-function/index.html","47b05908e183841eb5bc2415cbb4e33a"],["/vnmaker/index.html","2f8a3fcfecb2a23c9acd7b11181bc010"],["/weather-effect-tutorial/index.html","39c3dfaa47e5e1b279c9a2d6bfa86000"],["/webgal/index.html","842169ce5e49128d82f64335eff8c21f"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
