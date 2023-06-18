/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","e5c8b50c0dd1bab330f1ca717f6480bc"],["/2player-battle-system/index.html","19e4dd88e4b6a0a6fd5a5dacbf8ecdc3"],["/404.html","b747c3feabe9d9fda1cc0a4950c25770"],["/about/index.html","4f54f86211dd9df96d3916adea5addfb"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","01a0fed75a3a5d9fc8de6d33e5a28ade"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","27bfc0bd2a4135e05e0bd34a6ae9e357"],["/animated-title-main-menu/index.html","5454823ad6a267b96254f2b03f999596"],["/archives/2022/05/index.html","950e1d45f2641e00191133d653def90b"],["/archives/2022/06/index.html","b4dc0199dc08763cecce4a58ab2d1445"],["/archives/2022/08/index.html","9bbbb297f306097a1c1937b913678521"],["/archives/2022/09/index.html","31353db9cb130292d1c95aea9d80bc16"],["/archives/2022/10/index.html","755779e7ced497e6bbae37fe4df4e4ed"],["/archives/2022/11/index.html","630f00032443dd704fe641b33a3fe739"],["/archives/2022/12/index.html","088b6f07b59681fbbac413d56e01b676"],["/archives/2022/12/page/2/index.html","29333fb91431771b746e2706d2ff54fe"],["/archives/2022/index.html","f04f673ad0af2521ffc80f31533e44b0"],["/archives/2022/page/2/index.html","826eedf55d71cb61becbbcc17f8326b8"],["/archives/2022/page/3/index.html","b2813c41aea7071baf125625b2757a2d"],["/archives/2023/01/index.html","fb5e2fe6655d96012df83bd1faf3c1de"],["/archives/2023/02/index.html","8b20dc962c1faae8fd34a0577ce1df39"],["/archives/2023/03/index.html","72e29f896870feb5caa61969c6e6fcac"],["/archives/2023/04/index.html","23b7c5b3923a6d1f7e0b77a699629b14"],["/archives/2023/05/index.html","582e3e7def84916718d57c503d7c4982"],["/archives/2023/06/index.html","ac88c96596e389f3ca288fcb7a378a7a"],["/archives/2023/index.html","7d37fdeedf5ea64170d674d2da4973d7"],["/archives/2023/page/2/index.html","917e9515ed50e73ee19d0bbb0feddcaa"],["/archives/index.html","0713b1c96da71a68f53e33e7b8131552"],["/archives/page/2/index.html","5d95775f200d0bd720073685b42aeb5a"],["/archives/page/3/index.html","f96e712274418a14a5c3572f81752df1"],["/archives/page/4/index.html","751a9f2ab36d597db57e8409c673e96f"],["/archives/page/5/index.html","0cc7f67db9f2206132c196fe0913be0c"],["/artitalk/index.html","db2b46da824b865b0d1791cc8a374654"],["/battle-beautiful/index.html","4089e1af6745bb0dac9c41706f85b4d2"],["/blur-effect/index.html","bcea77fdaebfbceb0bd11410daa53c12"],["/butterfly-custom-tag/index.html","4fd2bc746ba32260f26e517f402b2a2f"],["/butterfly-plugins-faq/index.html","db96fc99efe14e426cf7acf6cf4c98d4"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","47c130ceea1e0dd67a2be35de25d13ec"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","62a8dc668ccf2616a724fea61844b189"],["/categories/announcement/index.html","09bf15a668c971a100f332186a9048e8"],["/categories/diary/index.html","9969cfa704b6d55925cdeebfd3b27c18"],["/categories/game-dev/game-engine/index.html","10864c70642b2c2d6a7e58079b195363"],["/categories/game-dev/game-engine/lightvn/index.html","1ddef2711cf3bc806e8fdb4df1f8f064"],["/categories/game-dev/game-engine/nvl-maker/index.html","880de4ae9d539eb8dcf5b79e0ae08da8"],["/categories/game-dev/game-engine/page/2/index.html","c9963303302fa5edc3b1f03c064dc541"],["/categories/game-dev/game-engine/page/3/index.html","6618f99a4e57d63273c3f4d8a017ad16"],["/categories/game-dev/game-engine/renpy/index.html","f665d47c757d7d0dadd7b17f9d2e6eda"],["/categories/game-dev/game-engine/renpy/page/2/index.html","2115a0ab1be804367243feb9d3dcb535"],["/categories/game-dev/game-engine/renpy/page/3/index.html","e275e292e9ac41acfb612bd864e08a66"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","355b07f72d03b9f4cfe083dac3e22584"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","85474f058773e1aeb6ef58d0dee34272"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","baebfd64d8d1d8a421e2078627ef859b"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","8011b9b9fffd3f4b1d6cb62c7172677b"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","b1a2d1ef3834be40ae63c0b8654895eb"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","7abb65ea77ae78a175b8a6fa7d1a5bb0"],["/categories/game-dev/game-engine/rpgmaker/index.html","35cb94761bb6cfb56deedf9458531162"],["/categories/game-dev/game-engine/tyranobuilder/index.html","4049c09f298307301dd84f11d9432fa2"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","a49a33bfe165fca2d901dda3130c6598"],["/categories/game-dev/index.html","ce1d3d103101c6685740933b414f693a"],["/categories/game-dev/page/2/index.html","47aa8ff085439dc84e57d6b739c2b5ae"],["/categories/game-dev/page/3/index.html","bddf4573c0be7d5ace8396c5dc640e2e"],["/categories/hexo/index.html","9d767df1dea33d85d97c90f3b9f773f8"],["/categories/index.html","d0b57e08b5472aceee64b7f949fb4ce6"],["/categories/material/index.html","1dbed39284f20c7b458370275bcadbd6"],["/categories/update/index.html","5fe3bf36c79366885b70890171d72487"],["/change-according-to-real-time/index.html","1ebd5832998909fdd1d26c879119b366"],["/change-title-after-first-time-viewing/index.html","9e4a53f10b838046385013763b93f134"],["/change-title-based-on-event/index.html","b5ea787018358baf7945e5a735a3cc97"],["/character-stats/index.html","a544778736207164919ed9591b925fb2"],["/chatbot/index.html","56443b550d7c244ffa9527f8b4dc54ce"],["/comments/index.html","4f7c14b223bc297ba389d33fd60492cd"],["/create-button-anywhere/index.html","e7a94cc7e34e0522194042db68b068cb"],["/css/eurkon.css","dab414e89ed670789cf5ffae3c7cefc8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","73379f88ebbf73010c6dd60e6e7e2ce8"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","7ed1111da0adf9910d970a593fe5424a"],["/css/rightmenu.css","7f1d95b30741b056cad675bde326922c"],["/css/siz.css","b150fced878f3ea09e3e523c6f6ce460"],["/css/swiper.css","ffc4dfa896a502ecb1e6a8a30b79e079"],["/css/swiperstyle.css","ac7499dd4f5a6cf4609c8882ddb7f5e8"],["/css/var.css","073f3bf87042199da104a95326e17aab"],["/ctc/index.html","abfd6bc1174adf960c2b4152ab5e7651"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","9fd6a19bd0979537345e46b0af840352"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","f87e64d604b4b780265adc6f2fb91a5c"],["/custom-loading-screen/index.html","99ab61a8b327b8faff9d5921be9b8eda"],["/custom-mouse/index.html","5e7d1a2afde9c2ce1cf1e0cfe967129f"],["/custom-music-room-screen/index.html","a124f34d8930d9b80ed9685bdc1e7ed4"],["/custom-music-room-screen2/index.html","c73cc8bce727644997d335dcc024f7af"],["/custom-nvl/index.html","c8bf41e485ad5b83ab979c2124051717"],["/custom-player/index.html","75ea1b85c631036088f1140e70321a65"],["/custom-preferences-screen/index.html","ba54736ca6f2f9427c35c35c94dc6ab3"],["/custom-say-screen/index.html","7b793fcdf5aea7e08b77ec724adbd589"],["/custom-title-screen/index.html","b7e6e798ee13e8ca6b31b38bcc3c6549"],["/define-npcs/index.html","a12598227680e93c78efa553a28d65af"],["/dice-function/index.html","c66efc3d90a36ad6c65bc67b3927d5ad"],["/disclaimer/index.html","f639309968ddded3853be238b11bdac4"],["/export-game/index.html","76bb22bc1ff70f12f623b6f6e9ea6c6b"],["/friends/index.html","fe542eb161672a8bbe1c946ed51a53be"],["/gallery/index.html","3088af6689dbe7c98b8d9e7603704683"],["/gallery/photo/bg/index.html","5c50336a681f5651d007905ad1dfbfc1"],["/gallery/photo/gui/index.html","e7965d778c568d9b50edf14743ed9892"],["/game-only-text/index.html","d0f0456690d06778af7ed2b4d43fdd9f"],["/gui-017/index.html","c071212a237a9848abb12c669312e92e"],["/gui-vertical-002/index.html","db834292182218293cd2b84d80ffbc8f"],["/gui012/index.html","d814080e9590b72d5ac61474624cc1ff"],["/gui018/index.html","04979dbc2e0d53b1a2f67d22a459aacd"],["/gui019/index.html","22a507db778b9b3c500cef80ae4c25d8"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","bb32cc2b005b3be914b21c906d3a10fa"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","d7e350f4a4c3b71b498a125419384a9a"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","12333d7f229c5ff86fe594a203296ee4"],["/images-tip-function/index.html","409d65b06b885f94f305a9fcc8863aaa"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","8c2309781dc95a1b0c5d98ba892b0641"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","7e1f161a5af8292c579972fa6f4b84dd"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","917c2df0989151d39621a545cf6f3b2c"],["/items-sprites-effect/index.html","1a355a501972a2d50bea661968aa52e4"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","fb16f891789f8243e3d02b8980ad0faf"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","5bb3ea2c879c56ddff51aaca7a477f85"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","98de50a7ea869f2a7ce59e01370b6a55"],["/link/index.html","2a1025d35ac2344dbacf3d37e8f360a6"],["/make-butterfly-beautiful4/index.html","fd4b98d355621b85c14c0eba2a6ce0dc"],["/map-puzzle-system/index.html","ec42060f14d1199c09f336947298d943"],["/maple-effect/index.html","aa6ac2386712405134fe59de3ab75229"],["/memberships-2/index.html","037a05cd45d1a5a6b6ee6b90ade41f0d"],["/memberships/index.html","2397eff73621b732fb31238432d99586"],["/multiple-language/index.html","c057372d3c96bd0fa943328a87414585"],["/new-year-event-2023/index.html","cd8d19016aed9d9948d1f93f0ababef7"],["/newsletter/index.html","02e25b91caa3c57051f5ee0233e68dff"],["/null/index.html","503f5da65873704ebff998e92f501289"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","e564e39a04ec8578a2b81aa4d95fe51f"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b0d02fd8a2dca7ba990fc6df3a6d3d92"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","5beb3f5ae08a93d3fd410b6fb0da38a8"],["/original/index.html","8729e209703f4453294810e2b82fee69"],["/page/2/index.html","e47efa1b94b263afa8f165839e417276"],["/page/3/index.html","1166995b21565e91892446642e9251ef"],["/page/4/index.html","911615403c4393dc4bd5b97f082b7c01"],["/page/5/index.html","63651494a6a85cf8f57cc00adb1f03b5"],["/pop-point/index.html","d167c932d74b6ca7669724675846987f"],["/privacy-policy/index.html","b4249df1c7308744e25eda0f27b3a1f6"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","4e9266fe619683960b118ece618b9f09"],["/random-number/index.html","7bb7c987d4b008c395ad98fe48df9561"],["/random.html","86d50e6b34bb9e1ef51bfcbb092ae1ba"],["/release-017/index.html","7f2b049e57b6378ff995bfcabc285b1e"],["/renpy-basic/index.html","b9f3a7efef336b4b00775431aab49d60"],["/renpy-crash-glitch-effect/index.html","41490e0203fae19fa7f0a0389b844bba"],["/renpy-matrixcolor/index.html","f6858acf40b535bb7176f190b182fd81"],["/renpy-overlay/index.html","11fbe2a2a463612305942506c705746e"],["/renpy-review/index.html","caf587b9d7897facfe83d9b2d4b90b92"],["/renpy-typing-effect/index.html","681dd95e472ab0f345daef3ac3f256c3"],["/rpgmaker-assets-menu/index.html","7804c45b51be17497dca63a8515877f0"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","bc31e3b1b65b9eba8dfe06f5135fd22d"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","833a7a423e626bbcb846f4e25be68f5c"],["/sakura-tree-background/index.html","8cc2b9504078efcfe2bdc3643cfe6c2a"],["/service-worker.js","da667787924db4a01e5e4f5eefcab8be"],["/show-variable/index.html","9c61483c16572d21501590fda1c9ec7d"],["/side-image/index.html","6929ebaea4f26c60b099d3c5f6e1c5e3"],["/snow-effect/index.html","c41e506924d31e62d5df1a61af2bce63"],["/speaking-animation/index.html","cb7cac2b61a11900cfa5be1db66cb8e9"],["/splashscreen/index.html","777984e048f6917eaa2867f3b0cff741"],["/sw-register.js","03a321015a5c0bb214a33fffcc137db2"],["/tags/Hexo-plugins/index.html","a4d245f8766a0187825bfd9bbc3e58c1"],["/tags/Light-VN/index.html","493236c60b2f3639eac87826c244ff21"],["/tags/ai/index.html","b8110678fd9474f7fbabe44da1505468"],["/tags/butterfly-beauty-diary/index.html","a17bb5f25c62adb450b9b88792113c8a"],["/tags/commision/index.html","cafe3c13f41908e5a2cf9aad9d3e1847"],["/tags/custom-hexo-theme-butterfly/index.html","8e90440f28db689833d992e0d297b4bc"],["/tags/custom-renpy-title/index.html","195c0bde24ccc0aa79edba3745dd7fa3"],["/tags/dialogue/index.html","a935832a6b7d9045ff9a4e3e79c88858"],["/tags/effect/index.html","8389c19c99463230601a7ec430a13938"],["/tags/event/index.html","f20350a2fefeefad3f94aa84d51c3892"],["/tags/hosting-own-website/index.html","6faac6d493869096915e6ec2c0c6ac1c"],["/tags/index.html","d52665c9757bfeaafb4393fae262dc46"],["/tags/itch-io/index.html","3235aab81970d8668ff176704cec7ddd"],["/tags/light-vn-update/index.html","7ccf971cefed30c9ece2b4d9a49992ba"],["/tags/nvl-maker/index.html","aab570f75a2bda0f8f18c6c6e9b72484"],["/tags/player-related/index.html","58e9c54574d44e4b2e62dcb689be57da"],["/tags/pro-tutorial/index.html","0baf1d102c74e48f83520cf3a503b06a"],["/tags/pro-tutorial/page/2/index.html","4d43774b47b9b5e48c38e6af32878648"],["/tags/pro-tutorial/page/3/index.html","4ca115fe5f1d1d80959d50f1f8d0760d"],["/tags/renpy/index.html","1da50d9f4824bf0854e13e3b7257aafd"],["/tags/rpg-maker-custom-map/index.html","11786483b5b52552be039796ff6d5aef"],["/tags/screen/index.html","72fd958f0de374ebccb6931cbfce39c2"],["/tags/special-function/index.html","b799307bb07d0ca30f923b4e7025d334"],["/tags/tyranobuilder/index.html","b09398edd86c3fc121b0fa2f01543057"],["/tags/ui-assets/index.html","4baf52ea267ad041aed9d8b1a24e23ef"],["/tags/update/index.html","dc68a91836bd761c779c2ca50fddfc76"],["/tags/upload-game/index.html","9e2bae20c97196c15a2023a55b684a80"],["/tags/variable/index.html","fe4568ce63eabdb6a3a426bdf836ca57"],["/tags/visual-novel-maker/index.html","044a60a5663a5434611b5f20d984c992"],["/tags/封面製作/index.html","bfed31d30f0714bf837f5a99accbf7ef"],["/tags/背景素材/index.html","665f9680760a2283cbda1acb3c24b36f"],["/tags/隨機功能/index.html","f82b285c11336e9b9ccfca1d3e6ed66d"],["/test123/index.html","b4bfa3490c7ff645c766075e2e7d2a88"],["/textbutton/index.html","1bef5b9e403d46333ed848a01f6393d1"],["/to-do-tutorial/index.html","dfa2a887478d87ab526552481047feb8"],["/tools/index.html","a080fa63d5222ea1c11fa400e9bd3dae"],["/transfer-to-hexo/index.html","e7b4a7497c45751ddafb82eaf0f76752"],["/tutorial-update-history/index.html","e636fd4dc9588ea9802cee568270414a"],["/tyrano-name/index.html","05d672060da751fb0dc2aafa67dce7d5"],["/tyranobuilder/index.html","21bdb703ef13105f9e97a77d7e118080"],["/undefined/index.html","c34a1ed2c4310022bf805cf81c2d2eec"],["/update-20221211/index.html","d1ea6ccf2664e28ad2fd1547de982969"],["/update-20221218/index.html","36f22f4328ec39126aa53c5e761ca732"],["/upload-your-game-itch-io/index.html","f6fa3005b09a60d4b861e5474db8aaf5"],["/use-list/index.html","32a33ef0740f5ec365fee6d0ca25d7ba"],["/use-nvl-mode/index.html","0898a5027c93ad3ca38ee3ed0d025c7c"],["/useimage/index.html","b1ef4797cbf132b095aec797853c1dab"],["/variable-change-image/index.html","f8d1f32d66cc92b1516211ebea4d7525"],["/variable/index.html","c79b9ec4e0d6f22649f546f0d8cb8880"],["/vnmaker/index.html","5b5c651f7f28b79c16871ce89755698d"],["/weather-effect-tutorial/index.html","ea8f08962014d19cdffe3e1045729012"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
