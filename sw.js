/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","5a23b105493ce4b18ef0f1acda74e42c"],["/2player-battle-system/index.html","274cf3461259ae180af4fd5b94cda563"],["/404.html","ebcd9663304e55eb5051c553c58f52cc"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","da988e24ab27b92feeca575749f155fc"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","71cc871a361e1814d699c44fbc8d074d"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","ed304c82e5d869bc5b544ba00c50b3ed"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","0355510442bf70568872ff0763ab3960"],["/animated-title-main-menu/index.html","5be9bbf99e1015553aae16f756b87d98"],["/archives/2022/05/index.html","ececaef8bf1a2518cf185692ca0eafa9"],["/archives/2022/06/index.html","f5ff724dd622f42eebbd23f6e4540b55"],["/archives/2022/08/index.html","f36dbedf9823298bf8c228db5fcd2d9f"],["/archives/2022/09/index.html","4f86e31d0c59d5b75788d8141789bdbd"],["/archives/2022/10/index.html","585310594f5840c48eec21ad9296ec4d"],["/archives/2022/11/index.html","32bde1d753ce44eeff5ef5ea19e16512"],["/archives/2022/12/index.html","8154a632a99877f536c93954229255fa"],["/archives/2022/12/page/2/index.html","1a605b7d3e736e5d835f9dc24e9b412a"],["/archives/2022/index.html","991c4942e5ea542cc3534ca3d532f774"],["/archives/2022/page/2/index.html","f9de5078c0c81815e803b2fe841fe270"],["/archives/2022/page/3/index.html","af567451af637921be74219df2c03d76"],["/archives/2023/01/index.html","c64d05a77646d0267eacce55c767c6be"],["/archives/2023/index.html","4d221c97e4a649006b2013c03721a2b1"],["/archives/index.html","fcbebeb8537cb60b753410a4180c206e"],["/archives/page/2/index.html","1145cc440a77ad5066eb40a93dcf1247"],["/archives/page/3/index.html","b185e2840163c79190b8be09c1f5d8c8"],["/archives/page/4/index.html","37348ea1a2f925353e56b7b836001d25"],["/artitalk/index.html","717382cb62a3f3d81671ff045140c6a3"],["/butterfly-custom-tag/index.html","b970ef31b467fd56ecc98464e4acb6f3"],["/butterfly-plugins-faq/index.html","ff54e4d015c75cc4814464de86c3eab8"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","2de2006e88de425ee9c2dd5a60bf121f"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/announcement/index.html","9e3e02ef87ce6acc0a493df1ae99fc36"],["/categories/diary/index.html","18fb8ad1a9c36a869cb5120a24ce3e91"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","35db66a6faf61bd02f03d425f346f6ea"],["/categories/game-dev/game-engine/index.html","f10012d07623297cd5d512bd304f49fc"],["/categories/game-dev/game-engine/lightVN/index.html","4cba8fc90efea7a31ba4ffd90d16db15"],["/categories/game-dev/game-engine/nvl-maker/index.html","fe3e2203eb6bb6891f237f518be5bbfe"],["/categories/game-dev/game-engine/page/2/index.html","adc2950a51d45b7727587bfe3251493b"],["/categories/game-dev/game-engine/page/3/index.html","75ac184ac40e62999b6bdc1cefd1cf6e"],["/categories/game-dev/game-engine/renpy/index.html","c1cff7c873b2d971d9686cf5a1ed61a6"],["/categories/game-dev/game-engine/renpy/page/2/index.html","0d19d93297302533d61a8877e4bfecb0"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","fa73312abc7fc3d586a25efcb6813e27"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","01fad0b4482ac933566103f5170db8a6"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","ad0657bb69f92d77585c0b3307bb79c2"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","9668c61d22bf43be910dce69e0697b7d"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","2c0b497639a6e7c1ca4d9be5c935c169"],["/categories/game-dev/game-engine/rpgmaker/index.html","a4d2eb1ec68ed135d9c6eedcbb40bbf8"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","22e107c80713f6682ad428e730afe805"],["/categories/game-dev/index.html","f77c71dfee85e9b67e1e434a809698fb"],["/categories/game-dev/page/2/index.html","a8c307609dc258f25f4ed0d98e616346"],["/categories/game-dev/page/3/index.html","a6aafbdf17a3cff38b0d89a3885cbc0d"],["/categories/hexo/index.html","0b788e248215fdee31fd60742649f5d4"],["/categories/index.html","530556e369671773cc9a73f89efb0bbc"],["/categories/material/index.html","a817a8a54e6fe01b371c3a1d427802b1"],["/categories/update/index.html","fdd83fa342b53b379da473690b9e2457"],["/change-time-according-to-real-time/index.html","780cb9718e00a5410dc897d4499dfad2"],["/change-title-based-on-event/index.html","862a753df0e7ee07ca86c6be45e10858"],["/character-stats/index.html","99dd4f7136ef15bec0bab87110eb71f6"],["/chatbot/index.html","2ccf95bdb78abd7a29098b5a7eb20cc1"],["/comments/index.html","5381fdc426608741cb7cc4068dbca59e"],["/create-button-anywhere/index.html","fe114aaedbfd438c01f7e418d6e4d687"],["/css/eurkon.css","2bb2b3a4dcb6e030605e2f92fd20c779"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c4793804bca29981780aad4dc189ff9e"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","866574d0e7083709468d91f27c0985d7"],["/css/rightmenu.css","eb16f57c6bf6e51e17539e1e8b7d3b41"],["/css/siz.css","1a4db2d18982243bcf24c2379f1a513f"],["/css/swiper.css","18d9e67fbe5496ac30a8a58273534ae7"],["/css/swiperstyle.css","bcec4952bf4b7b775a233ab6f5fff65a"],["/css/var.css","ca61a2b90bd91975230ffeef12ca219e"],["/ctc/index.html","72fbd9051e409d458736fdf5ceca9ca0"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","5739d9c026dc84e356ec76f3a821b8df"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","bb0e0a63d23892cf3b6c737300ed2af7"],["/custom-loading-screen/index.html","78aa8d0ee15a351dd9cda2924537c125"],["/custom-mouse/index.html","1e24eca3da73dcd91e7817969fc1a63e"],["/custom-player/index.html","b6adad2e5b589427e8a77391fd76737f"],["/custom-preferences-screen/index.html","766c3fb2a3b79b3900f8ecf95396a935"],["/custom-say-screen/index.html","03f548a21989dc491858dbbbac88945b"],["/custom-title-screen/index.html","9a75bf643ebe80fb7f02670e1ec88bfc"],["/dice-function/index.html","28e613175aae7b6ead1a4001a79808a5"],["/friends/index.html","98e67dd1ca9477e39830b7a17a962a06"],["/gallery/index.html","817cc5ebb0ba2a2b503e13208b4d77d8"],["/gallery/photo/bg/index.html","faded4ff4f6a9b32b6d463e94efc4d82"],["/gallery/photo/gui/index.html","2400ad8aeaf033c30fd843599a09b5a1"],["/gui-017/index.html","5d068e998f1c63e593a707dc28f7caaa"],["/gui012/index.html","f828821659e09afe6be5482871fa0078"],["/gui018/index.html","7823a716928e8f32b43fb038c56b3a7d"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","c6b00d109da5b8c65cd51ff51d75e7e3"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","0842acf7258a9e340085bef301985645"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","e73e5350f5174ac00ce9ada0dd3fa9ef"],["/inventory-system/index.html","b46b76444ad064750026004876d83ebd"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","e67fc6d2886bad30b6d4b5812ca98067"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","4d29c2f4252f4963d9e8693aac54fd6d"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","51fa1c595b2a6b39c29ee36e82ad77aa"],["/link/index.html","0831d2c32958b1a0b6490b7302679e21"],["/map-puzzle-system/index.html","0550c2bd55af1df43ac4d0b4e4817ad7"],["/maple-effect/index.html","48bbc2fb90be276eb3f06c8c4389560f"],["/memberships/index.html","20516e53e548403546e824cbf720c2f8"],["/new-year-event-2023/index.html","c6af34d485c6a6ca2a905dbe62d5d82e"],["/newsletter/index.html","357aa573199100bcf111fc83bc4c7363"],["/null/index.html","b3588605001a08a96daa256399f031a5"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","1e0d70db4f3fd232d68bc85cef192d70"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","f071af6d0601be58de5838d4d8fd26bc"],["/original/index.html","fc2680a2e58d19382d4dc29d12d0bc6e"],["/page/2/index.html","e2415694d6163d8cec65781cceaaeb9e"],["/page/3/index.html","6531766018347f0e0b1b12ee2087c95d"],["/page/4/index.html","ea44c3334e44fc5b9c16efa280c4a798"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","aec263f090f1825533ac2aecc0716908"],["/random-number/index.html","11e003d305353d118102696834685cb9"],["/random.html","ab4ddcf136921f000a5db9a5d703f729"],["/release-017/index.html","c67186c9fdd9ce2034c5c9b31583b398"],["/renpy-basic/index.html","a5f40cf1e9be711d53d09c24aded163a"],["/renpy-matrixcolor/index.html","f17a5101abc336404cd3f72fbb173307"],["/renpy-overlay/index.html","26f6ac7bf02d9247d71cfaa44ec922df"],["/renpy-review/index.html","85a678b1c42910af51b281061c31390e"],["/rpgmaker-assets-menu/index.html","4b49bbc83279282eb03be09f190af124"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","0c44281caef6ce82b71944b6d8537cdc"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","072f1801bf746cdb9fd06f6d1100b053"],["/service-worker.js","9359535e587386f92f9983ab9e8214da"],["/side-image/index.html","e2aa18cfe96070cb6438c972b7470e35"],["/snow-effect/index.html","e90ca0e6d0d5cda37935161e4267d51a"],["/speaking-animation/index.html","f942d5b4f07fd0eea769cfbc9502d788"],["/splashscreen/index.html","4b4887cfd89309e3b460dbc89b0c2a9e"],["/sw-register.js","134ae0f643faf18140cca6a95a75cd2d"],["/tags/Hexo-plugins/index.html","258975cb66b6c34cc567bfb0ee7cd572"],["/tags/Light-VN/index.html","40431957b20cf4a1304f5bc3024364c1"],["/tags/Premium教學/index.html","70925f76ddb81768f1b93c4a5931988a"],["/tags/Renpy/index.html","6060c7832bbeb4b663b3dce733d387b3"],["/tags/ai/index.html","5a1dbc27747f8d54079238ff2102bac9"],["/tags/butterfly-beauty-diary/index.html","d48c17937edd2f8d3db0fa15050126f6"],["/tags/commision/index.html","0f1bbca152b677df23c6f2aaee5fb71b"],["/tags/custom-hexo-theme-butterfly/index.html","02d40a8eca8a2916201c4a23b0498335"],["/tags/custom-title/index.html","d5443e1b71bbb8f08fd5b76b0d599975"],["/tags/dialogue/index.html","5b9e4b12d7b58d4fc831bcc16571f2cd"],["/tags/effect/index.html","5b78ab4f2c85fb227a1b421f1c2eec2e"],["/tags/event/index.html","1cadea3d38d7b4510b45085c2a782cdb"],["/tags/hosting-own-website/index.html","89de1e792eb15d09463703fb47077dfe"],["/tags/index.html","cd0d2a6db70b66880559004b6232e666"],["/tags/itch-io/index.html","4f1de5693a31bcb7a3eafc4cdeb50b7d"],["/tags/light-vn-update/index.html","c476a3c0c108f99a82e01fc588d12af4"],["/tags/nvl-maker/index.html","3e511adcbac5b1b9e6584f26ddd7f232"],["/tags/player-related/index.html","fb4d34f4d8b5c8325e5b94a942c61af9"],["/tags/pro-tutorial/index.html","613b7610a52abfca035d497f30456ea2"],["/tags/pro-tutorial/page/2/index.html","e1030b699aba6c7a01be3f80f091c38b"],["/tags/rpg-maker-custom-map/index.html","9db7b58d666a93936ecb3df1d387d500"],["/tags/screen/index.html","119c2cf3b56f6a27eb27f6263796698c"],["/tags/special-function/index.html","c7f7040398d5af38ccc7751210d5a058"],["/tags/tyranobuilder/index.html","a136c3ba222d946a6a0f8c27b28b0a1d"],["/tags/ui-assets/index.html","a345da4b71b9aecaa8ecfb334c0f121a"],["/tags/update/index.html","32009d05f0d2d4b5213dee56ce55800a"],["/tags/upload-game/index.html","5dd51dcefeec2156083b4b1150eeeeb0"],["/tags/variable/index.html","1ae56cebf4646939b0d9ac94df09760f"],["/tags/visual-novel-maker/index.html","72baad90f36bc1aee17876cc47c125b3"],["/tags/隨機功能/index.html","f8cc9749bb68a6b955901ea629073075"],["/test123/index.html","1a54820baa222665938718ddcfc329ac"],["/textbutton/index.html","c4baf3b2d19b9ba3b78e448bda4c6695"],["/to-do-tutorial/index.html","5d57accc3c69b80611097f12531a5d0c"],["/tools/index.html","6802460feeb361ed94d7a1d4a912cbf4"],["/transfer-to-hexo/index.html","e1d968a1695050031458185a6672efb9"],["/tutorial-update-history/index.html","eba2b0bff601e5aea3f66295987c54fc"],["/tyrano-name/index.html","b3bf6f97d7db96c6f17e152bf6bcb695"],["/tyranobuilder/index.html","038fa6671de9a45115afa575ed46dbcb"],["/undefined/index.html","153759ff11a6bc00560743a01de370be"],["/update-20221211/index.html","b6c6e3bb3b111ca2c0c10118ca7ca180"],["/update-20221218/index.html","f13139bcb2eedbb223db89dfd9fd8bdc"],["/upload-your-game-itch-io/index.html","219c74bbf5949844ae2bded0d318516f"],["/use-list/index.html","865634f9af8ce9d81fd76b64fab57ee1"],["/use-nvl-mode/index.html","edc373c42fc66531448a246c193a3f01"],["/useimage/index.html","735f497dc8a5f53fa897276e76241066"],["/variable/index.html","3f6783706c13908dd31f5c5f803ef25e"],["/vnmaker/index.html","b3157c385e8da967261096caa0bb8b0c"],["/weather-effect-tutorial/index.html","2b6839133d4e9bbbfae20722b1dfb8b4"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
