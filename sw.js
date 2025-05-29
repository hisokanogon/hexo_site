/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","3a20fa2d038fc4aa52d238323a1023b4"],["/2024-future-plan/index.html","0e4fa6c8caf5aef2ef2168cf9ec9ab4d"],["/2player-battle-system/index.html","b4f6ce34d4d875611a90c7bd1049f0c9"],["/404.html","882c5996ee80e36970fe0d47eb1bf6bd"],["/about/index.html","e12f64b2c0545ddb8674bc16f8d05290"],["/acg-creator/index.html","d30c8072c0ac1ea8df8bf1fd70e72c99"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","9b338f760f02a0bb9a2c1b785a5f101c"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","f4ecebd62fd906c1d4e4cffc1ed55a3b"],["/animated-title-main-menu/index.html","645cfa11ec2e0de2ae44bf8da44f22dd"],["/animation-movie-cg-gallery-screen/index.html","8ad05e29ffb59ba07a075f7d4e0a1486"],["/archives/2022/05/index.html","fd5e2cf3a0f7a7cdea222d2a2d5b5c55"],["/archives/2022/06/index.html","11f60f93a2c90809650e756bbb894990"],["/archives/2022/08/index.html","7c2455bbddfb42eba2c88298078c6105"],["/archives/2022/09/index.html","a6511161ae21222856aa36bbbbffac3b"],["/archives/2022/10/index.html","a226c5d69617f263b7ba408a7e1cc565"],["/archives/2022/11/index.html","e0ca97398f5311d231bb25e3679707f6"],["/archives/2022/12/index.html","911e701002f6912757679068f310ad62"],["/archives/2022/12/page/2/index.html","22ff3a3bdfafadebc9888bf11f882f6f"],["/archives/2022/index.html","f339589b0e12e0aebba79654fd4f1c1f"],["/archives/2022/page/2/index.html","f248ac0966c421f0891b0ae31e46d961"],["/archives/2022/page/3/index.html","e6d3a6ce8935e03a8e2c80bf2357c4a9"],["/archives/2023/01/index.html","6535f2696bb1cf408f701cb050d302c0"],["/archives/2023/02/index.html","b65a18b8c9fcb84bf891e5c6a069abad"],["/archives/2023/03/index.html","09edeb745d80253d45c451916f54e9a5"],["/archives/2023/04/index.html","c9742ec9c2d7eaf075caf9da48cc9c6b"],["/archives/2023/05/index.html","a1a61bec56658ab63ad9c5152aebcd09"],["/archives/2023/06/index.html","07630a49ae09cba1bbe76b860c88f2d4"],["/archives/2023/07/index.html","22385bc57f7d10ec0a6ed257ac659d83"],["/archives/2023/08/index.html","2d43ce72bed45fed8cf170ee64649e26"],["/archives/2023/09/index.html","893a0371d713a7a0cf2c3179ea21a9a2"],["/archives/2023/10/index.html","f408fd4aec931df75cc94f9ad304ad73"],["/archives/2023/11/index.html","070e0cf2d4e949534e509c52423eaea5"],["/archives/2023/12/index.html","08d55f0bf54a3dc2414cee7f01469c76"],["/archives/2023/index.html","6cd4bef54e9760970e9fd6c7127645ed"],["/archives/2023/page/2/index.html","1da7d7ec54c88f454cf9af156a6c1c9a"],["/archives/2023/page/3/index.html","f24cbef095a02c43dafdc474f581adc8"],["/archives/2024/01/index.html","a1a5d12dc0d4de5ab0445c6363d68d9d"],["/archives/2024/02/index.html","59ec3d1006a3bd91d24b2728b779e1e6"],["/archives/2024/03/index.html","b31e8cd15e0033e7fd7093e95a516295"],["/archives/2024/04/index.html","4f3f32159de255dd20ca80d0b4c0d661"],["/archives/2024/05/index.html","ffaa1cd06891429afebb873aad0bcf20"],["/archives/2024/06/index.html","b671d4d1b26e58caecc4b4c09ac5944c"],["/archives/2024/07/index.html","773663f9f51f8e99f04bf5c73b800d8d"],["/archives/2024/08/index.html","8f4bca35d30d17da3c54c25579fe4141"],["/archives/2024/10/index.html","8f8004cf18fa50c0281634ada4663469"],["/archives/2024/11/index.html","3ed69075815b8f20bb73297902ba1f93"],["/archives/2024/12/index.html","b35dd2a0250f25382ab3fc7a76436cec"],["/archives/2024/index.html","558946f89ca98a0061dd12fbc4f25645"],["/archives/2024/page/2/index.html","99199c9db1b91f4c80eea42d0a8f75d3"],["/archives/2025/04/index.html","a129e19e9927fd30e5183054e4a3d582"],["/archives/2025/05/index.html","288db70b2a66af6e10a4ac2977b790c6"],["/archives/2025/index.html","dee3e3f5d3ed8d6464817ae161fc4844"],["/archives/index.html","ff672d563c22aa5fd67a2c8b9dd9a60b"],["/archives/page/2/index.html","750cf2678a4ddc040fb85bdaed378a3d"],["/archives/page/3/index.html","84b0ea01cea8a6fbb46c8730c9058cf6"],["/archives/page/4/index.html","f7258154bd70d226f8512163225bb29f"],["/archives/page/5/index.html","ca9c96b166c61004d4bad266649144ec"],["/archives/page/6/index.html","62699a258a0e279c00ad271b9db0c30b"],["/archives/page/7/index.html","800733fddb4bfe73b1ab397f4748f882"],["/archives/page/8/index.html","649f0dfa39de2a6bdce8bf0503948647"],["/artitalk/index.html","b168ed6070dd21903bf34853fcf28947"],["/battle-beautiful/index.html","fdbbbb76d9ee7500ed25b1abe0ce3223"],["/blur-effect/index.html","e495d1c1ef085deb079a0e44ed0730a1"],["/butterfly-custom-tag/index.html","6c91feadfe7733382de8d58fc0555e1d"],["/butterfly-plugins-faq/index.html","0b6075462ba5de1866616e0b8bd32371"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","6126e43c225faa1b3355788cec3d7424"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","f4f2650ce64da72c6161f26360bfa298"],["/categories/announcement/index.html","bb7cf1c06959ea3de3c78d308cbfb413"],["/categories/diary/index.html","2f11f33ac67b9c9b8acfda4a12777fa2"],["/categories/game-dev/game-engine/acg-creator/index.html","ac8ac18194d58bf180170701ca47b5c9"],["/categories/game-dev/game-engine/index.html","af5e4a8aa6c6f46e9d1ab501c1b297e4"],["/categories/game-dev/game-engine/lightvn/index.html","98286fca7ada06f99e205f12c7b52449"],["/categories/game-dev/game-engine/nvl-maker/index.html","94f3f36cb5bff549c5e0bd567b2a51e7"],["/categories/game-dev/game-engine/page/2/index.html","568436684849eb88288928d05b1240cd"],["/categories/game-dev/game-engine/page/3/index.html","89ee29d010fef7ecc8fa2ce9b2a8b6b3"],["/categories/game-dev/game-engine/page/4/index.html","ca6aefdc430ed8f55f8cc2af5a2c30b7"],["/categories/game-dev/game-engine/page/5/index.html","2d5207eb0073873d641018fc3ec0efe4"],["/categories/game-dev/game-engine/page/6/index.html","972f668f88214e5c89396d29bf846133"],["/categories/game-dev/game-engine/renpy/index.html","57b415e0a9af0a60a5051f73a152bc4e"],["/categories/game-dev/game-engine/renpy/page/2/index.html","d921c0ba2f7f54e318ce5d243b3a86b7"],["/categories/game-dev/game-engine/renpy/page/3/index.html","c928d68de4c8faf0aa2408f13c078711"],["/categories/game-dev/game-engine/renpy/page/4/index.html","bb1dd9509085445e7e2c6ef4054c45a2"],["/categories/game-dev/game-engine/renpy/page/5/index.html","6cad94afa1f38f47b2643a4b6967e85c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","8e77673626ec67d52618cf0726635e0b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","77e0805975a141078fdac3ed2fcc2dfa"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","ad900634aefc5f612cec95424edbccb5"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","ff74792073c01544635cc7ec42bb69ed"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","b3b12e30cd8b2919ab4be5ac80f4df2b"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","f4880054ad42b05baea8a686310b4194"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","bcb583fdade6a2ff405da1767e106a8d"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","ba64c992ee3ac59cfe090ef05dc6252e"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","99a21c17e2cb5fe374f2d9e88cc60fd0"],["/categories/game-dev/game-engine/rpgmaker/index.html","6ae1d67ce88ea5a6654361a658ee7fac"],["/categories/game-dev/game-engine/suika2/index.html","6fe92cb1fa3f972a584b911df4fdd48d"],["/categories/game-dev/game-engine/tyranobuilder/index.html","3a650201b222d8722ad40b3b71a0f3b7"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","40a29fc5630a0f1af9b541495d5621aa"],["/categories/game-dev/game-engine/webgal/index.html","e0fc462497f48e0210ab2e8ffe977e9f"],["/categories/game-dev/index.html","ae18e05830fce17f0974ce74e71ff3bd"],["/categories/game-dev/page/2/index.html","4a7202497c77a53a60126b57a4b4c2f6"],["/categories/game-dev/page/3/index.html","023f7adc19ded5081daf8cfef492bb9c"],["/categories/game-dev/page/4/index.html","de754c1cf2a4889274bae2007e89ab9c"],["/categories/game-dev/page/5/index.html","ad53adf681521740e077339de798fdf8"],["/categories/game-dev/page/6/index.html","303c58977217c697db8a95e070f97af2"],["/categories/hexo/index.html","aeca0606433ed461b7ea17562c8c2b4e"],["/categories/index.html","7861751fc28827dc95cf15ee1a035089"],["/categories/material/index.html","ef2381573d120b2836b0d3e542c5b430"],["/categories/update/index.html","1ffea30852b00bd300e088da39db3803"],["/change-according-to-real-time/index.html","47cfc8a4b0319d0dc4001fd67aff12e4"],["/change-character-info/index.html","e1e90306ccc98d9eecd0d8916f13ba4b"],["/change-title-after-first-time-viewing/index.html","0ff861d6e26879b3cb8686196a9400bd"],["/change-title-based-on-event/index.html","625a2aee52218b1a33472fe2224e467b"],["/chapter-selection/index.html","161c3752bbdd6c4c66fec60e4cc95a06"],["/character-base-state/index.html","2d8722402f003592e819fa3c19b671df"],["/character-interaction/index.html","9e23f07b77b5e216bc9df84ba9b97b48"],["/character-start-personality/index.html","67ff7595dacad2309ef04cba6664638f"],["/character-stats/index.html","ba23bf21be272568c5dfd0bd09ac776d"],["/chatbot/index.html","9f4ccd1e6cb1f4d432e5321b4fe1c005"],["/choice-time/index.html","0cbd65c21f3945403dd97bb500ab0466"],["/comments/index.html","037d31dda7db6e999464fc5e64827acc"],["/commission-info/index.html","60424d5797afb23c31013a595d6ef6f4"],["/count-login-number/index.html","78a3d7cacbf3ef9ce2a9e0a85c850573"],["/create-button-anywhere/index.html","fa58b8a1a69b8d6cbbd49fdd5e912883"],["/css/eurkon.css","9845a5ee4aa46c282280ac8387efc12b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","5fb6f57abcd293492f852715ec3f5906"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","eb42175047b10f40088a9437faa18a81"],["/css/rightmenu.css","fbf438df262197cd8f5714732bb23402"],["/css/siz.css","fffe9d3f31f5e42c4f42848560b592a0"],["/css/swiper.css","6491c68d6562e3d250eedcd56bfc97e8"],["/css/swiperstyle.css","7bad85a6a80aca6073c55174595854b3"],["/css/var.css","0c8c9f60a70927da8610250d83ffe623"],["/ctc/index.html","9bdb73c147f0eaa74894f31176f9c279"],["/custom-credit-screen/index.html","021aa115161bb6c556c3870e814aae0a"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","f4090820dd57d1b09b2d28772e341d2b"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","b324574ef966be8e4cfed47bc546fc63"],["/custom-gallery-cg-screen/index.html","1527013a6b3b763babc2d1c6103fe3e1"],["/custom-launcher/index.html","ba4a369f20dc358c1ab8a9d858aa7911"],["/custom-loading-screen/index.html","bad1a849883a47c1653ac81a5cff984b"],["/custom-mouse/index.html","8ceac9aaee34e4e733d8630cd5159c7f"],["/custom-music-room-screen/index.html","9888ec1aff830342ae6677552185f220"],["/custom-music-room-screen2/index.html","630e17a101b69fcea734086439831a35"],["/custom-nvl/index.html","0ea637a6a9ed4c8c75856b8eba8fb5a6"],["/custom-player/index.html","c5f482035128e85aca7b8943be21a110"],["/custom-preferences-screen/index.html","7e9464b39f4fd5422b352813d9b25e3b"],["/custom-say-screen/index.html","50c6d79a43d94ce86312b6c1f35d4921"],["/custom-scrollbar/index.html","faacb95accca074832b4480101913d4f"],["/custom-style-bar/index.html","2c57c644c1502996414346a40d16a703"],["/custom-style-box/index.html","8869c35367ce4508a817a79d895216ae"],["/custom-style-button/index.html","dc1491f1e0692ade378d6935714b2cd7"],["/custom-style-grid/index.html","6d9ba4718d4629a468e17120c5957551"],["/custom-style-position/index.html","3cb1946825e7120f5c4cd9114b110e70"],["/custom-style-prefix/index.html","9adf1f2e5cab359459c4b20e28eb7325"],["/custom-style-text/index.html","ee7b6ed4fa6243f6010e8c36ff9ae37c"],["/custom-style-window/index.html","3a540e04ad613c7f2f0038a05b92132c"],["/custom-title-screen/index.html","a44fdaf4d63a0ce87a04531dae235ac2"],["/define-npcs/index.html","f933b867f3529b8ce87dc649fcec3ee4"],["/delete-save/index.html","29e36b0c40eaae4ebade73e62a2ae8fa"],["/dice-function/index.html","cfc1ec84c33334c830d0f8f324d01075"],["/disclaimer/index.html","85db15f494d76b31b1a2910eeb0d6ecc"],["/display-immediately-all-dialogues/index.html","ae6eb26fad17a9f6efbbea583eb4b018"],["/display-real-time/index.html","766756bf2f64bfffaf1769ea6fa0c426"],["/en.refund-policy/index.html","8598f36e693ae1552553fd5b74b9cd78"],["/enter-name-screen/index.html","48bd489fc4e149600e85825c7c7d3415"],["/export-game/index.html","b318f113706c605e6c4e61f62c27c1e9"],["/faq/index.html","de6c4ae0707a637790c2a4fc092d821e"],["/friends/index.html","12e7819b03819c93b2f41ef57fc69432"],["/gallery-template-assets/index.html","132413638ded569ee47192812949942c"],["/gallery-template-default-ver/index.html","4e90dae686c85d58680d156e5f6cabd9"],["/gallery/index.html","2096172958b5deb3cfd25f6a90ca1a4a"],["/gallery/photo/bg/index.html","14f950027e894d13897d793071cae9ed"],["/gallery/photo/gui/index.html","958a2a03e9125367280ee059d7bad711"],["/game-only-text/index.html","cd3010a2633d9384432e9d2074df81fe"],["/generate-random-name/index.html","23e0d528a5ee04340cae6ec373825173"],["/gui-017/index.html","30b614ec807b0f04eeca4e39a24caec4"],["/gui-vertical-002/index.html","0cb7cb73c19dfe5e2af3563e757df87f"],["/gui012/index.html","242235d33c86a905477cbe4a60ef3d52"],["/gui018/index.html","34e4bd60a123faea2c9e2489424edadc"],["/gui019/index.html","e643535bb6f5e2848e09b5529820fa68"],["/gui020/index.html","59a2cee5c7acbb4e4652e97328e87a5a"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","3bd78ce78b8fe5cbdbc2d3469dad88df"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","d4f7c125b6b55d3eddc64079b97a4bac"],["/hide-quickmenu/index.html","082e010237b84833fdbe01fbc2e297ba"],["/hide-textbox/index.html","98b022e3f4ab2e189209a3b6e64ac7ea"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","9879e467e45ac0bc21e7a699a01cc4b8"],["/images-tip-function/index.html","2e3315452bb4d2dccfad013e07ec7145"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","56b2f1900a0f996edf75a33d4af87f9e"],["/index.html","c4f1479b8813eff43ec743b234e9f3c7"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","8555c243d4d5aeeaf5a216cf17a8423f"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","96d21ca08fc7e7e009184953ae10757d"],["/items-sprites-effect/index.html","56902343ea2c29b9976a4fb42e00f466"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","9fc339c951ff56de92010b67f8df1b8d"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","fc8bb0c6c1c018243f0ba8eb246f0222"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","8d775e043c82109dc88e572581eda049"],["/link/index.html","19b40a2c6ce97b202c8365f7fa1aec09"],["/login-reward/index.html","ce6891511eedb0a675ac2a3231d18a36"],["/long-press/index.html","583a00d3f247923c8c139836e612a576"],["/main-menu-music/index.html","dc76464ef54b907843f8301b24f5e0d0"],["/make-butterfly-beautiful4/index.html","1630eb9c2bce866f910ee4cbcee22b4a"],["/map-puzzle-system/index.html","8e43394c7608bbabfbf4ddea92d58726"],["/maple-effect/index.html","856f5a5610928ce1fb41427a7fff3178"],["/memberships-2/index.html","9c03abc1a7c86954551e2f5439e84919"],["/memberships/index.html","292665529d244db1298ffa7afe1e71a3"],["/multiple-language/index.html","5ccb9e7d481bacb9552f283e085ad2a2"],["/name-input-assets/index.html","d142a23b46becc7bbd95a29e572edba5"],["/new-year-event-2023/index.html","439bbfaf1e34ea821c98bb2d4769ab10"],["/newsletter/index.html","18c7f4baa6746572095b589dbdf78fe6"],["/nsfw-limited/index.html","5a6340c4cbc032cc244b9aa3da2bf816"],["/null/index.html","e02f3df71a49fabb804cabc9558c08ef"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","e275006d786ff80e1cf54ffc0b4ad665"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","695dfcd1290d8dc1e9f2832bcb18c505"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","1536f3a4f826e87dc44f388d318082f6"],["/openchatai-renpy/index.html","5e1e1cd7049eee24799f6b2a55adc146"],["/original/index.html","f5c3df0d51c0387f58ab6d22b372d298"],["/page/2/index.html","01375855584546edd5b50a2633c72021"],["/page/3/index.html","f5ce9f623f571d9a6741e6d37d6ebd90"],["/page/4/index.html","97549671736b3603265191179572fe45"],["/page/5/index.html","7a45857a844a656feeb9a531f92393bd"],["/page/6/index.html","46435cd6f05812e4a955f5da62da872c"],["/page/7/index.html","099e7ea31727aca263c30970bec8e864"],["/page/8/index.html","ddb89aee57ba80f289212e4955583b54"],["/point-pop-up-assets/index.html","1384a9c10a3cf0048a4c6a1d8052299e"],["/pop-point/index.html","26f084135c516c225c54ad3d67fc6a9c"],["/privacy-policy/index.html","60fce917dc3819dbab5c0a6c4b614a1d"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","46226e97fe2a438e3a1b192b270c1a12"],["/random-number/index.html","015958fcf0e05793e233b151cdb28a08"],["/random.html","cd18ec18547fbf7d95808f776b988326"],["/refund-policy/index.html","1dd3ab2c2861b3f0987767300d2aca19"],["/release-017/index.html","8b8709a6333722aea90b72d35569d415"],["/remembering-choices/index.html","6e14b4196277f38fafeeaba0e3b83191"],["/renpy-basic/index.html","15e4812f3137f2dd679d199af6516016"],["/renpy-crash-glitch-effect/index.html","f1b79013f26d83b47ff446f6eb588749"],["/renpy-flip-image/index.html","0b1bd0864434b1711e761d841e61136f"],["/renpy-matrixcolor/index.html","93204844400bfb5a29d6208f64e458eb"],["/renpy-overlay/index.html","d6ec2c3cdf26ddedb9728682cb6d5b96"],["/renpy-review/index.html","9adb9cd37a7a0145eff1aadbd0734072"],["/renpy-typing-effect/index.html","40f687405bdf4600bbeca84f91ef6f18"],["/replay-cg-screen/index.html","e93dbb1ac4aaeb9fc67449261634806c"],["/rpgmaker-assets-menu/index.html","808014f5ec557466eaf12b12265ce832"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","f04f1eca7d12552c402f0b808d5d0fda"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","992703fe7fb9d7b6594fd65a0f650775"],["/sakura-tree-background/index.html","2c9d4072ec84d753ea8e1b4678fdaa41"],["/selected-button-style/index.html","c97cb5481bb5086bf0f3cc9dceca41aa"],["/service-worker.js","87eee5d59154a5e82e4312dc1b182061"],["/show-variable/index.html","65f67e534c5779baa13f3990022aec6d"],["/side-image/index.html","ec703fb6ebffec7f5e9796050a60a646"],["/snow-effect/index.html","3e3e459bcf07c4be03b4a4962c58b79c"],["/speaking-animation/index.html","0db855753e1829cee1d7a05889a89a77"],["/splashscreen/index.html","bdf38d3412116ca66cc924b00f138a52"],["/suika2/index.html","483435c62fb68cd5bc8b311038612317"],["/sw-register.js","2b7f4542fc42d66a284680cc06ef1d9c"],["/switch-chapter/index.html","cab386fa55aae36d4bd42bc1e77a75e2"],["/tags/Hexo-plugins/index.html","ba23b29331cdb2475887a7afb90856b8"],["/tags/Light-VN/index.html","16ccbe0abba1090ab90924684c9bf0b7"],["/tags/acg-creator/index.html","1b73b052f4529966d448c499e2812d0e"],["/tags/ai/index.html","8cbec15efcd1b2c475abcfa0ecbe8174"],["/tags/butterfly-beauty-diary/index.html","352d7e0ffc43a4ccea2315df797934e6"],["/tags/custom-hexo-theme-butterfly/index.html","6a830435d5ff6421cd2a12c2a2f09857"],["/tags/custom-renpy-title/index.html","feecc5a0396b7a3257424d8479d2612d"],["/tags/dialogue/index.html","dd0b7189598f304207fa92a017b35537"],["/tags/effect/index.html","ad0566b4ec7859c7b12e62ee54ee4635"],["/tags/event/index.html","fac677dd5ec6d17b19f822fe6681761b"],["/tags/hosting-own-website/index.html","49cde6b02507bd0baade7e41abcd653a"],["/tags/index.html","2bb885068718602c16369381025f641c"],["/tags/itch-io/index.html","83d5c92bb9501cfeef8e5f31f125f2f8"],["/tags/light-vn-update/index.html","04906a744d2936857111fced3884d5e9"],["/tags/nvl-maker/index.html","b66651aa00b6c8f53557217b55a20cf3"],["/tags/player-related/index.html","09d1354cd349c5eb2a98903f4010efa2"],["/tags/pro-tutorial/index.html","e171b1934bdfc838bc59a4dd33696c31"],["/tags/pro-tutorial/page/2/index.html","63018be66d9f2cd8c0eac917afaeee84"],["/tags/pro-tutorial/page/3/index.html","6fe83ce4b8ec5bc2f19140aee8a90809"],["/tags/pro-tutorial/page/4/index.html","b01cacda51df19122154d1c6216fd63f"],["/tags/pro-tutorial/page/5/index.html","f1536389dabdcc40ec9ea3b8df4fa416"],["/tags/renpy/index.html","fb7cc7290cae7357f474aad63f5343b0"],["/tags/rpg-maker-custom-map/index.html","e0e6c417378441d65bf4ce8adc69efb3"],["/tags/screen/index.html","e6e579b79f39af42da8710f927eda30a"],["/tags/special-function/index.html","c4a04b42afbbf28f63ef8e8ca5cb33f8"],["/tags/suika2/index.html","70cdd228429a2f0f13771e06d94f75ff"],["/tags/terms/index.html","574a1a42d4c21dc237b4047ded3bd36a"],["/tags/tyranobuilder/index.html","c7f1c15d07ccc597e8b56e62b9d45200"],["/tags/ui-assets/index.html","f5fca060ee6af62f6f58d046209e1493"],["/tags/update/index.html","ed1cc8a7cd955ef07c7b03559c0d272c"],["/tags/upload-game/index.html","e69079dcc6e39bb4bbccb7b692bfbd29"],["/tags/variable/index.html","894a1797f968f66e0a11f55084520340"],["/tags/visual-novel-maker/index.html","d2ec25475e4550c9168904b380acc6d7"],["/tags/webgal/index.html","783fe51e94850bb9da6f2c42d984485d"],["/tags/封面製作/index.html","50fb9f253baa852a2c1c994a9fb1d91c"],["/tags/背景素材/index.html","b6e3668c46c3f2e2a8b9396b16df8dae"],["/tags/隨機功能/index.html","114213a5729b49b38ff16981b4aec423"],["/test123/index.html","8e8cd477c1c772ce4a357889f26e6310"],["/textbutton/index.html","4d9e84d31b85733d90ff6aadfaff6f3e"],["/to-do-tutorial/index.html","384bcc70f4134f6993da08d8a029fdf1"],["/tools/index.html","2ad1f4812dc4c3f998b99d71c07a8d24"],["/tooltip-function/index.html","3759ba0ddaab1adf9b60093e2de1237f"],["/transfer-to-hexo/index.html","ba5f5ceda3387cddc24a5cdd6f7adebd"],["/tutorial-update-history/index.html","f25ac3084f43d784c118a47cb20e3e73"],["/tyrano-name/index.html","94d6deed33ab6d892027f56e3779790a"],["/tyranobuilder/index.html","c7a0a3c7d172a720ac668386237dd2e2"],["/undefined/index.html","1ebfbb0b62f429e0fd2134b11124054c"],["/unskippable-video/index.html","53d35816d6f04aaaa72444233676dea4"],["/update-20221211/index.html","8d4ec5ddb11bef4f3ffb456e4f2f89be"],["/update-20221218/index.html","ee46e06baf49831f3ef33af874601d81"],["/upload-download-save/index.html","1de57ade955ade77abbaa9e95f380357"],["/upload-your-game-itch-io/index.html","0f3109e9484cdf89f852ff34058276b2"],["/use-list/index.html","e1e23076ecbba259006ed61f00ba06f2"],["/use-nvl-mode/index.html","1a6db0150232805a7ea9aed8e93799a6"],["/useimage/index.html","97f7c896fef33e9331cfdb7747acdd79"],["/variable-change-image/index.html","3abd80fff030faf75a326fff5593cf42"],["/variable/index.html","1546202571e37c4773e6bc3fae9df734"],["/vibration-function/index.html","41ef7609fa2b5b20a4224c7164406d2d"],["/vnmaker/index.html","791b547eed1008bfd1b9281da35a0b9b"],["/weather-effect-tutorial/index.html","07fbf0c208a28014853d2d8ac9b5b5f5"],["/webgal/index.html","a6b09762e22bee718361cad8633ae136"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
