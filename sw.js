/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","2e04bf736a073f774db2248617449069"],["/2player-battle-system/index.html","89e69c0d95b50a67778f9a421fd8cc55"],["/404.html","a7f40ac44046402a12fdc364f6ade826"],["/about/index.html","86b1abcb43e8e2c9dc159b2f88b4dfae"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","ab1d3f0129416098c33903cd637804a5"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","bc02b4be7a6203e74722ebb54e91984b"],["/animated-title-main-menu/index.html","164c7b193e870c3e062642c1ba7d5b12"],["/archives/2022/05/index.html","acfcd237e3452ed0f07b300546ead510"],["/archives/2022/06/index.html","8fb58d9056c7b2553daae51ac695eb8d"],["/archives/2022/08/index.html","5230454be33a455d3e272c689d279cde"],["/archives/2022/09/index.html","01d4b903c89a71bd758f2430b7148cb0"],["/archives/2022/10/index.html","aad3de98ae26f64f4ae809fb5b4bd60f"],["/archives/2022/11/index.html","4e612a979a38f97559b2af41e742de56"],["/archives/2022/12/index.html","b480bb5d93d6cd252c6a594fff589f5e"],["/archives/2022/12/page/2/index.html","b0f8f418c4ba0bdf173d61dde463c4f9"],["/archives/2022/index.html","8607b95816baac1a2011a726891f6852"],["/archives/2022/page/2/index.html","7772c5dfd0893e00286511e0ff9601c2"],["/archives/2022/page/3/index.html","7b534f0cd46579a600a2f932bfb6c5f6"],["/archives/2023/01/index.html","38da1a013089bc2cbb9afda7c7dcb877"],["/archives/2023/02/index.html","7b7b1b1417a5dbfd95406718c680986a"],["/archives/2023/03/index.html","7c6e713488f9241e1fd9bb68df30d3cf"],["/archives/2023/04/index.html","ae4931f4c33a39d982c7e526cd1228d4"],["/archives/2023/index.html","adc33d4c564cc728c5b50aba07169746"],["/archives/2023/page/2/index.html","78c458780c1217c80bfaf750022ab051"],["/archives/index.html","347fe744d43dd51f33ece8a9662633ab"],["/archives/page/2/index.html","ddbc80dd1ec8d42a7a4a4c6d6faeaf41"],["/archives/page/3/index.html","27e86f08858f9407a0055543b2a9d31c"],["/archives/page/4/index.html","58b0b936ddbbe4fa930a3f54b675675c"],["/archives/page/5/index.html","13b9326cb72745ad72bd3352b38f15ed"],["/artitalk/index.html","6d19d1d4465c817dfcb248d4160f607b"],["/battle-beautiful/index.html","00878d423da0b9a547bbeca345757ed9"],["/butterfly-custom-tag/index.html","6dd697bd31c338405c857719792d85d3"],["/butterfly-plugins-faq/index.html","0ec988547fded9fe73af9f31172f2135"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","68423ed3325175956166bfdfffcb8303"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","ce095648de70f21895b5a59e7ad98320"],["/categories/announcement/index.html","7037b5d80e8f8ad1a3be88e05724aa39"],["/categories/diary/index.html","d97b13fe08ab9ae6d453b6641e90c4e8"],["/categories/game-dev/game-engine/index.html","328c9edf42c3460c689a6f9e05d65139"],["/categories/game-dev/game-engine/lightvn/index.html","0bdaa694c25b4d48825fc27154185cf0"],["/categories/game-dev/game-engine/nvl-maker/index.html","4f5960397cf58d8bdbae69ae67f33a49"],["/categories/game-dev/game-engine/page/2/index.html","bfb13e79a567eee361a019a80f332968"],["/categories/game-dev/game-engine/page/3/index.html","4ee5c46afc3b65113e32d7decea52ff3"],["/categories/game-dev/game-engine/renpy/index.html","ab1e019fecc19b808f2583e20a169ffb"],["/categories/game-dev/game-engine/renpy/page/2/index.html","4d5d9abb96574025739b5b1a697a9ac9"],["/categories/game-dev/game-engine/renpy/page/3/index.html","6696e091325c4109d3b84a9ee0ef738c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","524be9587d4a60d8c5aad5ab2fa284b4"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","1daf92c0f731820b7f7cc7795331db74"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","133235298f70bec68c9681733403420d"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","6f2cae3089b50bf0e38f1b833192f54c"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","1ec5bce0a722520d9eccb39580e83b51"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","7050df60db94194da17ec75f3fc71f14"],["/categories/game-dev/game-engine/rpgmaker/index.html","f138d297e852e426abe58cc9036749d9"],["/categories/game-dev/game-engine/tyranobuilder/index.html","527c926f60c4e28a1b9101271d1205c5"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","234fa8c9c6cf4d13be3a8dc13a59b1b3"],["/categories/game-dev/index.html","2b1b340da7cf8fb5150f9f82f62d89c7"],["/categories/game-dev/page/2/index.html","e0949ea166c434e42550b4e8dbfd3dd6"],["/categories/game-dev/page/3/index.html","4e237e0c33afe547001608e5fb5ac76c"],["/categories/hexo/index.html","30445a0fbfb68bc4374fc09f124c3782"],["/categories/index.html","1c11f8ffbf0f58ed65e69991fca9a3d9"],["/categories/material/index.html","935a4cb0639d41a450b11863b6391c9f"],["/categories/update/index.html","c5771558ac9fbb66c025485174418813"],["/change-according-to-real-time/index.html","cadde5a130cc262902e52c89ab9b0dc2"],["/change-title-after-first-time-viewing/index.html","9c6cea0e01c39533ad9e7b9898ace78d"],["/change-title-based-on-event/index.html","4d900fdee357bec2c6d7b26dcdd2c281"],["/character-stats/index.html","d77eb9e38668ad93e12b5c4149b474a4"],["/chatbot/index.html","7dade25c35b6337073dc811c204ded17"],["/comments/index.html","1c29075510f583cfcc72d16ab50869bc"],["/create-button-anywhere/index.html","64c7523db5acade166e62d2c24112feb"],["/css/eurkon.css","c8212cce211f6e9393e0bb0cf7cd339d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","df1e5a678f7a6352d6a8ebd32b2aec07"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","831cc761c15ef00f66d819d1fb85eb22"],["/css/rightmenu.css","c2e2daf5343052e04d35df9d1cdc66c4"],["/css/siz.css","a084cc15536e64f455752fc21f1340c3"],["/css/swiper.css","7f7978a9cbb6b2b454497c87f9fc2f95"],["/css/swiperstyle.css","9d6c290ce29e14c0fedc3a2b9b4755a8"],["/css/var.css","18caf90bff944a622eb26502b9d2b306"],["/ctc/index.html","668a512bb24922a19d2a0d1f3f831835"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","e1a46c6abe23f8f55f5f1a7c6e9c1478"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","1b88b1af0d64579f0c6a2e3d50be1e6c"],["/custom-loading-screen/index.html","4b5dc43d128764c551ceff598e67c0bd"],["/custom-mouse/index.html","3bb4cd2931bc1a32ae2d24c050241e6b"],["/custom-music-room-screen/index.html","78899dede44a3712cde160d0815c6bcb"],["/custom-music-room-screen2/index.html","676dc4f6af375df6018c750241fa9be8"],["/custom-player/index.html","14deca13bba7d4be294692d25d2d6880"],["/custom-preferences-screen/index.html","f01731a29fee8a4b0662a23eb1585d4e"],["/custom-say-screen/index.html","261c6e07342735dc476d8b25f80cb4f6"],["/custom-title-screen/index.html","f97389c70b40d9d30f63007849833be9"],["/define-npcs/index.html","7ff955b89e4223cc6374a33320275757"],["/dice-function/index.html","d2196dd424de78f8e7933d151b481fd5"],["/disclaimer/index.html","32e9fc4e47392191f6fc5a6ab289a84b"],["/friends/index.html","edc419a570de8f6f36fe134b50c884bd"],["/gallery/index.html","5536aa1ffb60ff334672ec41fa81c267"],["/gallery/photo/bg/index.html","a969c1cc1aa4095af56315799f726f65"],["/gallery/photo/gui/index.html","3b1df5df3d4d8d718c9a5faa24a744f7"],["/game-only-text/index.html","ccf930768f40602c78272fd7ed7ae062"],["/gui-017/index.html","1a1d172904f209c871a6512c8d2529bb"],["/gui-vertical-002/index.html","5894bb48170eb28fea3827f97dc4aa55"],["/gui012/index.html","0ffda4014629cd362d3177cf26bd1253"],["/gui018/index.html","3b7a0db041e12f1c9314d93c23339283"],["/gui019/index.html","078008a7ee782c621d549c439ec001fb"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","457a125d352cb66107e13c5a129301b7"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","865aa7aec2b25e2cc3a8e52a8fa30286"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","3eea5fd4310a586339e6dddbce280cbe"],["/images-tip-function/index.html","162a04b4fd32ba3447096d34fb3d39f0"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","185a9aadea1e1edfc72efc906177f3cc"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","4825af966206f16d0a641f9bfd88438d"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","0b1819abbbe362035847a29bfd68f392"],["/items-sprites-effect/index.html","aaed0d08291993b70d67fbaca21567a2"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","878812b466ab80343ffa9ce5dc3c5559"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","fe57bfcdaf4078e85f55fa8f7b6eb8db"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","a523091961a3d30e0971decce3012054"],["/link/index.html","1175208c7b774951fa20b632e64357b0"],["/make-butterfly-beautiful4/index.html","e853b1fb85aa8007bfcb00f419233354"],["/map-puzzle-system/index.html","4f73ea1bcb82cc02c709bb7fa6088a0b"],["/maple-effect/index.html","6d4f796b41e22630ec102fcf46d0c150"],["/memberships-2/index.html","56508938e706bb1998d62e0d0ccd45da"],["/memberships/index.html","3b6fd341ad339a259093b12958cf15bf"],["/multiple-language/index.html","5707051124ddfb60da7fbeea96887df9"],["/new-year-event-2023/index.html","d751c2aea6b21516b94462bb023fdb4d"],["/newsletter/index.html","44506a9a06309c0401a24b5e028a75ad"],["/null/index.html","089d836cd47b608a6c4f9b1e1d239f02"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","23a37a3a12ca22dd34b07f0c056bdbf4"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","6f95601cdf325c534714aadfda8d0833"],["/original/index.html","e6100b39d04cbf78680a320c894b3ceb"],["/page/2/index.html","32715452de9f0c6d5b46ab2871c34d92"],["/page/3/index.html","6e42f37568975b09ffe27d1b3b6f1679"],["/page/4/index.html","685c9fa4f2373730e05c38255e71e0d0"],["/page/5/index.html","536d28702095d9d1c4c35ddb1df134aa"],["/privacy-policy/index.html","bc5ffb1c9b6218fb47f6950b3791a04c"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","6a3d3cb4857bf11d903c957ad76de63a"],["/random-number/index.html","db6fdebc1825936c63e3f104ffb04f91"],["/random.html","c141994057a1a247a7f74f16e2929787"],["/release-017/index.html","97345b0f6990a4fdb07b33a79ad80ca3"],["/renpy-basic/index.html","763e4d6cfff3d1401929d699aebb4266"],["/renpy-crash-glitch-effect/index.html","5c485fd43d25a541330b93fcc51a11c0"],["/renpy-matrixcolor/index.html","3cfb4f29c300a26b654e75e54a7c9ebb"],["/renpy-overlay/index.html","a7986591217aa53fa1d7e4eaf20a80df"],["/renpy-review/index.html","50f2fd75964f0d9841d92ea258202cfe"],["/renpy-typing-effect/index.html","82f10d4f45e72500a4e11031f117b630"],["/rpgmaker-assets-menu/index.html","e48df544c9c7d0bb3187d84343fe1836"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","2db9dce130fb65afde8b63b665bcf7f9"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","fd6e073dd7501655c107fa8b22eb1f8e"],["/sakura-tree-background/index.html","155eff57d854b0e3e7cc8682793b057d"],["/service-worker.js","21122232faed818dfb8562f9284e3f1a"],["/side-image/index.html","23d4300ce64ed2d7d85663e19c55f778"],["/snow-effect/index.html","22100185aa7ba08d0d4b1e19afef66be"],["/speaking-animation/index.html","0a8c14feb4e99682f2cb01c92afa790d"],["/splashscreen/index.html","8fd3bda649c4ba82d2139de10acdceaf"],["/sw-register.js","ce898c174fb460a5e6bf273826da7224"],["/tags/Hexo-plugins/index.html","5231de09d65d12aad50f7bcd223741df"],["/tags/Light-VN/index.html","7a71b5261bc150823068ea88f742f211"],["/tags/ai/index.html","ad2b7fbc79d00c5dd7b54fbf170c1ec1"],["/tags/butterfly-beauty-diary/index.html","72444847a45acba2a8cb84585daa41ce"],["/tags/commision/index.html","bb6c9434531cb24d99a5dad8e121ee42"],["/tags/custom-hexo-theme-butterfly/index.html","07f817e6043a6ec10228f4fb09be61f6"],["/tags/custom-renpy-title/index.html","eeebe0e4e42d0fd13d2e8186b7392cec"],["/tags/dialogue/index.html","8e24db68f041e976bd5afb083a45f1aa"],["/tags/effect/index.html","4ab2bb4c16053634726f43f29b795b4d"],["/tags/event/index.html","2154259c39accfd9cc56136e2e81bee5"],["/tags/hosting-own-website/index.html","446d95616d55a2940fb9f945187173f5"],["/tags/index.html","952019e418a6309558f15a60eb2d0d4b"],["/tags/itch-io/index.html","e2901dc52b9e2e31caf800bba3353e7d"],["/tags/light-vn-update/index.html","1bc90249bdc525b4d087bf336cf49e7c"],["/tags/nvl-maker/index.html","ee15b19923254ac9f10c49c5a8599268"],["/tags/player-related/index.html","c19cb3f2c35f4422405ac4e5c34392af"],["/tags/pro-tutorial/index.html","3fae46f55ac40901a0deade22baa3e70"],["/tags/pro-tutorial/page/2/index.html","2f0d75f30e133d6ff4e07b4e222735d9"],["/tags/pro-tutorial/page/3/index.html","c86b643e4d16a3d8613dc6d15b2e0e16"],["/tags/renpy/index.html","6bec631970078f8380bbd198793ee161"],["/tags/rpg-maker-custom-map/index.html","f69b731f88757cbeeeb65b42902b3268"],["/tags/screen/index.html","6accd08e50f98790a7014a08ddbc5ecd"],["/tags/special-function/index.html","660e3cf870de6d75ce4f38586cca6b87"],["/tags/tyranobuilder/index.html","797b33fa6413ab157f817a4e1b6d97ba"],["/tags/ui-assets/index.html","cd583b9aaddbf20f420435348f28e43a"],["/tags/update/index.html","b598f2ac84aa186b07a30612d7d16264"],["/tags/upload-game/index.html","3f7104ae5bc3bb818581feecd91fd076"],["/tags/variable/index.html","765536d5733be08d4978e6d60f2c0330"],["/tags/visual-novel-maker/index.html","0a5add0e950e4c8ecedea214d4bae3cd"],["/tags/封面製作/index.html","2e56b0e68be6a30dba7cc89d047ea26b"],["/tags/背景素材/index.html","97b2795fbaa8c6a06b07d456ecd90261"],["/tags/隨機功能/index.html","7c649bb3e35b8e295719a6ec47701524"],["/test123/index.html","fea45ea32f565da863b5d5faa0eefe8c"],["/textbutton/index.html","d01dc8a558994ab20de59193e07d61b0"],["/to-do-tutorial/index.html","98d0674e45ea56367412a79c162d8423"],["/tools/index.html","238d91f96cf0383cd13ba58d85261ddd"],["/transfer-to-hexo/index.html","bd73ad64c626d6c09134787a5aabbdad"],["/tutorial-update-history/index.html","a97efc3d476f0bd2cff09dd8210b71d2"],["/tyrano-name/index.html","a2f2b9c1eb9ef6dbd8f02b059dad23c9"],["/tyranobuilder/index.html","b17ca9b027eef95f25d3b1e0fe166930"],["/undefined/index.html","0f77926c711744130f8e088369d154bb"],["/update-20221211/index.html","86a5c04bd2b3b0496bf7521cf938849d"],["/update-20221218/index.html","6e6be2c1a21b6bdec7909cb4ec7ca50b"],["/upload-your-game-itch-io/index.html","b603ae0830a0b1e92387e3be1d248d86"],["/use-list/index.html","bed488b1209c008710dec577f0b95127"],["/use-nvl-mode/index.html","86a138ca96b0f280022264598f23d5ce"],["/useimage/index.html","1e7d245fa28245d8c833277422c732d1"],["/variable/index.html","f583c9829928f5beb878f8d816dfa8de"],["/vnmaker/index.html","e3a1c6775d25263408b539b34aa48a62"],["/weather-effect-tutorial/index.html","05a2aac865196b3a1355b58913d7f9a6"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
