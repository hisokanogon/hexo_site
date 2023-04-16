/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","d3ec5e04c6c5b07a1aa9272a61d78389"],["/2player-battle-system/index.html","90a081fd6f96c447874ebb96c966aa7e"],["/404.html","c7f36ff8d171c58057b68dd8a93aa14d"],["/about/index.html","90bd7896efaaa42fafcdb41d341f5bac"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","7665c80e4f26eb1c6371fdd72113a8ae"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","41446c72d84b5eb8ffde633022827d33"],["/animated-title-main-menu/index.html","f603743688630a0d27ca86bad291349a"],["/archives/2022/05/index.html","63236d1e6c04968df994094f09fdd54f"],["/archives/2022/06/index.html","f513f7af6a34df600c238b8712603eb7"],["/archives/2022/08/index.html","7afc3a871f52c53234fab527dceee0a6"],["/archives/2022/09/index.html","d1a13260421974f471b497d50195da88"],["/archives/2022/10/index.html","ba73ea3494343e15b32853f9cdaf28ad"],["/archives/2022/11/index.html","81431ac338cbf08ba622eda86fba0699"],["/archives/2022/12/index.html","87c3f2371381bff5ee6d3a2c6b502f1a"],["/archives/2022/12/page/2/index.html","6f756042c5bf0a2eb75a091adda754fa"],["/archives/2022/index.html","e83120b723b6c0b398c0ba2c8c1f6f72"],["/archives/2022/page/2/index.html","f5bff4208e0836d431cfd0c0a0a75de5"],["/archives/2022/page/3/index.html","1bbff0e38e2f83f75d75adf97314a2a6"],["/archives/2023/01/index.html","5c0c4ea247a07c7cd48530790a31646d"],["/archives/2023/02/index.html","bd54f43853a00267d5f7dd9599e98e70"],["/archives/2023/03/index.html","d2fe9f5b42353b22acae995538d7df71"],["/archives/2023/04/index.html","7017667488ff04321b3b02b711258eb5"],["/archives/2023/index.html","a88a145808d4353a84c00134a46dd9b7"],["/archives/2023/page/2/index.html","9045a291fa1500a6c4720a186d664927"],["/archives/index.html","ab9df14c057c31c93f33415ada563de0"],["/archives/page/2/index.html","1a6fe18549760cbe8fc5f87e5233925b"],["/archives/page/3/index.html","19cba095b863f4cb53af23a3be387ae8"],["/archives/page/4/index.html","b50a665f8e0c4aeda6dde90635b3f4f1"],["/archives/page/5/index.html","7d7dc1bb07e034bf82e1852e3bc77d0b"],["/artitalk/index.html","fa0d27a63d5b5667a25030ab520679ab"],["/battle-beautiful/index.html","edb037c02cb2e3f7c6eefc1c47bc429f"],["/blur-effect/index.html","b31851f038147beb0e697f3df49c1096"],["/butterfly-custom-tag/index.html","6cdfbaf4636b3876f1e0036cd154fd0f"],["/butterfly-plugins-faq/index.html","91f9614f0d66ebd60f8d148967fa71e2"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","e40f43e4129d67c25c4842114b9c7d36"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","814a4a2bbdc34b49df447828f6c8fccc"],["/categories/announcement/index.html","95958b6b00d6026360ebd0b1a43b84f8"],["/categories/diary/index.html","599e0f436eccaee5bebf65395caa54eb"],["/categories/game-dev/game-engine/index.html","fcef4503b0f3d3d2ee3af2d859a8e671"],["/categories/game-dev/game-engine/lightvn/index.html","dfa390de4dbf5ae6593c85f71cac802b"],["/categories/game-dev/game-engine/nvl-maker/index.html","db267ed8c83f486f32bde0d6bd2be320"],["/categories/game-dev/game-engine/page/2/index.html","4f911902f986554e5fe6a167cc4fa6ed"],["/categories/game-dev/game-engine/page/3/index.html","2ca19eab7f9cc9e002e75ad14f6cf303"],["/categories/game-dev/game-engine/renpy/index.html","138729c1de6690f26c1b44047da7f020"],["/categories/game-dev/game-engine/renpy/page/2/index.html","6beb1218a3ab8335d7a2a18c69d6c8c6"],["/categories/game-dev/game-engine/renpy/page/3/index.html","4538f2f8158720c8ffa204c63a7c7bcc"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","fcf3aeb8b341f333405617d30182598d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","6addd61c9a840702cfc0fbd1a385acf3"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","6d3ff20ab603146d7fc8467f841820b7"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","66165c94858766011666216e6b146e95"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","c9c78244b1883fb3c815a53242ab2c7b"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","aa319fa862d067c6e48b93e0ef4b5736"],["/categories/game-dev/game-engine/rpgmaker/index.html","cfb59f7893177db5ece654b334aae9f6"],["/categories/game-dev/game-engine/tyranobuilder/index.html","bb06aeb0a492500950badc4d1acd420e"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","1430b869e357b47addae4acc8a57ca0d"],["/categories/game-dev/index.html","f25177a68bcc13cdf6ff22426b327d47"],["/categories/game-dev/page/2/index.html","6f43dddf19f638b0a227f7c99c1df7f7"],["/categories/game-dev/page/3/index.html","b9ef77500f1da5d1df1c1c70a1029b54"],["/categories/hexo/index.html","ccacee95aca765f1f7901347905a9cab"],["/categories/index.html","02604f49b2b65bb6567b8b08c67c21f0"],["/categories/material/index.html","de3595f2b02f58bf377c62b7272dc019"],["/categories/update/index.html","5fe5f75c6dd4544e7974c792d580a2dc"],["/change-according-to-real-time/index.html","e8a36ec15943c908ae1cf3a209c58785"],["/change-title-after-first-time-viewing/index.html","486d49d8b40e3efb2f82090bee64de3a"],["/change-title-based-on-event/index.html","17c87ef4653f88963e81191ea23af796"],["/character-stats/index.html","42bf3acb548c6ffec16992e01d317303"],["/chatbot/index.html","f2775bacee87e21dc698e2c50e8c444b"],["/comments/index.html","a706288e098c257b0c6b2a8c40ec2620"],["/create-button-anywhere/index.html","242546771c3db4c575564797cefe4a60"],["/css/eurkon.css","07b1323340510d3da8294770138955c5"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","6fe8c53421d7474f1747ac6951ebbaff"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","6fb12e0f43b4faecb89da7623eceb4c4"],["/css/rightmenu.css","ee0441cf63ebe74721e536fb4ab3ba49"],["/css/siz.css","585b557e1b231d05664bab8980470e98"],["/css/swiper.css","f04e27cb700bfb4591777691ca8ac7c5"],["/css/swiperstyle.css","88d44949c0e7aa65bb9fe48e30e8a0f6"],["/css/var.css","cec56765ae31df868f7dbc497df2f7ff"],["/ctc/index.html","66edb3c89ed9b73f3abf538eb7147ffb"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","1f12905d7c0f58f6cb7fbe7e075d2ac7"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","fdd42c898ac839f64a9340faf9de602f"],["/custom-loading-screen/index.html","e2d7bb24ca5da5dad94c4c0ad5b0e874"],["/custom-mouse/index.html","06d7efe638234a2cdbbe3be27813b23d"],["/custom-music-room-screen/index.html","b3590abc67afeb808ae4eb44f19e06cf"],["/custom-music-room-screen2/index.html","07527a958ee98693799acf7e3ba8901f"],["/custom-player/index.html","9eb531ab694ecc119989e91d6b781fda"],["/custom-preferences-screen/index.html","22af9799edb6f266ba6e0050e04bb561"],["/custom-say-screen/index.html","5ac7abcff6889f4db550f2bceb547fba"],["/custom-title-screen/index.html","02d806c44531a23f5da87a2dcf4742c5"],["/define-npcs/index.html","f3dd8044dd885e20b42e10814efd0de9"],["/dice-function/index.html","4c8cc68e40fcfbf6a3ecf4b8ea5f674f"],["/disclaimer/index.html","60302dca6bc6e8bf8502a038147e247d"],["/friends/index.html","e49d217fdba9a03eabb21fa90e6014c4"],["/gallery/index.html","4ea9dbcd8cbfa65c4dee0d2e950190db"],["/gallery/photo/bg/index.html","17ef9fc6979d74bb61ab30c42feef7d1"],["/gallery/photo/gui/index.html","3fcd5a5c33a1b67f4ad4d10cd20d6d58"],["/game-only-text/index.html","0d57d8c4f400e2c689d320aed4539c7b"],["/gui-017/index.html","ba0a915bd1809e1b409a2b0250a5a5de"],["/gui-vertical-002/index.html","2221150b2a50a644815fafb8fa170d66"],["/gui012/index.html","b6e402cf8a331d05cf183339d2e8691b"],["/gui018/index.html","084582ae030f4eec85f6df95a11a4b49"],["/gui019/index.html","6c2107650a114b322b0bb5089ba3ee53"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","4e2df27fd957041bc9934ba41fdd84cc"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","545983cb9b11cb562a1a9727c7d6aee9"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","d37ed9b8fb70b9a7703eb04625d74d52"],["/images-tip-function/index.html","eb8997a40d43f76cb8bc2e5fcc5f68fd"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","1d8c2a73e48c7ecceb1f19bd0a6f0693"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","d48bfbba5e3e36a693bc0f2e3cad6046"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","6674cf53f909520c04bf3e03ad774932"],["/items-sprites-effect/index.html","ae50e8d2cab27b6d63fba182cc568730"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","8fc5b3e7ffdee6d7d17ef9049f1b64fc"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","3c377ea0eba3b73e2c22494d76def075"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","4fe592f2bc54bb7200e2e9a6b84f07ed"],["/link/index.html","3010d61115652abe76aae675749cd7bc"],["/make-butterfly-beautiful4/index.html","e25de38c40660d72a0f68a1b68ef9c6f"],["/map-puzzle-system/index.html","270b3a6507bd9d4c82707f53ef9eee51"],["/maple-effect/index.html","e6adb92a62f2a586af308f169dc357a2"],["/memberships-2/index.html","1b96e3dc64b16722137c01f9728a382e"],["/memberships/index.html","a9218cfa21a33c3d4dd35b0517f95559"],["/multiple-language/index.html","e933c1e4bbf85c9bd903c5820c615886"],["/new-year-event-2023/index.html","9a69f016e7fae57107e6466479e56156"],["/newsletter/index.html","7c16fd5600c3eb61a58d65f94b6874bd"],["/null/index.html","048ff3edec9867646656590f6dd62e2e"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","e47e8ced5bea4dee70c16b9f29a6dfc9"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b9cd62bd70c006d7c0f701fb85537c61"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","35337b389285c4d89be288b8964bd542"],["/original/index.html","40b2c3055be4ad6d592e99a271c411ae"],["/page/2/index.html","8d1d494b5ca32aa2e3c389195b7fc701"],["/page/3/index.html","d3d8ed15d2776329aa1b363b0a28464c"],["/page/4/index.html","ad4285afe4c4969544eb36f61c6874c8"],["/page/5/index.html","e0bd023c1d079be65536f67291e8fd21"],["/privacy-policy/index.html","9195217e99e107d74b86f8d81a411109"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","17f64f600b56897e886f4aed07b8389f"],["/random-number/index.html","e05413d70138924dfb0e422cf7a3c407"],["/random.html","446d15c54f47caa21f7d6780cb78ae69"],["/release-017/index.html","05a7776a13d36525f0e91e81012de408"],["/renpy-basic/index.html","4e427233434891e4c5ef306fa408eac7"],["/renpy-crash-glitch-effect/index.html","dfb1dba3a57efd80ca81ae726a601786"],["/renpy-matrixcolor/index.html","06600995b8d0975042dcbabcc1491b17"],["/renpy-overlay/index.html","fdc33897d108b9e973a3a7ced2e1570e"],["/renpy-review/index.html","e57f44dd4e15330bd54b88cafcefd820"],["/renpy-typing-effect/index.html","6436c44d45d9a454643565df76b6beaf"],["/rpgmaker-assets-menu/index.html","1050fc2c70518dc14d2e349f52acc65e"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","fd84e9a1236d95f2b67307d5410753b3"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","178c3c768446df0d5ad3968da0b24cf3"],["/sakura-tree-background/index.html","69f842d5f22067a96989ed10a93239f6"],["/service-worker.js","c980c60abc2239d6f6340a975e7c76a9"],["/side-image/index.html","c77808e57c3ebfea94a8560bdb6c2f2c"],["/snow-effect/index.html","75c769f6aa1c3bd5e8448df78ee12399"],["/speaking-animation/index.html","55bc8ffe9ef8feeab15216493cdacc8a"],["/splashscreen/index.html","dfe3f646b4646e33bbc6d9a0cbdcd6dc"],["/sw-register.js","08b9cc6ae0bbafc9b7503e127c8bc9df"],["/tags/Hexo-plugins/index.html","6b4c0272bac2a32e3323e3bb74b41502"],["/tags/Light-VN/index.html","b3b917d82904533b29d06f56e5033379"],["/tags/ai/index.html","cba7a9c68af6a2eba22a22f36bedf493"],["/tags/butterfly-beauty-diary/index.html","6902f8281f7a39c0c6a23c636b3f5b97"],["/tags/commision/index.html","5b89e152aeacc7517075eb8a76f70ae3"],["/tags/custom-hexo-theme-butterfly/index.html","cc6a6f080474259a741618fe70d756b6"],["/tags/custom-renpy-title/index.html","16bb2bb2ee2035b68eeddaf4d7cb2148"],["/tags/dialogue/index.html","862fba6c479f726a00e2e6fa80cf871a"],["/tags/effect/index.html","0f5d9f786199dc97cafb896dff47f05d"],["/tags/event/index.html","9251e3109cb70466fa7eada559ecdc02"],["/tags/hosting-own-website/index.html","40bf7b37be4eccaf9555a9a8ca098b84"],["/tags/index.html","5d619c080aeb3aa20d1dd7cba7d0cbe9"],["/tags/itch-io/index.html","6d679045ca036eaef719a6610a305ec3"],["/tags/light-vn-update/index.html","762725230daf6cbe5a7097ab3d44df8c"],["/tags/nvl-maker/index.html","5cf8c853608526b4c82c05ddb6deaa2e"],["/tags/player-related/index.html","62ff0b820e21eb0f6a11faee82a83e6b"],["/tags/pro-tutorial/index.html","15eef22208e058001df7134e4ff272d8"],["/tags/pro-tutorial/page/2/index.html","fa6f0883a820021e0bb81869c881cf29"],["/tags/pro-tutorial/page/3/index.html","c702636e02900b26a396890b10742d37"],["/tags/renpy/index.html","3f1721fe534b94d8e9e6bb78502b48c9"],["/tags/rpg-maker-custom-map/index.html","c7d9422fcef2c214d6333ffa9753a14d"],["/tags/screen/index.html","0da1b5fb4a1b138dfa7dcc5ea74542d1"],["/tags/special-function/index.html","215408ea0cafaa95cb1027a33e3d7e75"],["/tags/tyranobuilder/index.html","dbef197ac7067453901e9e514f61f056"],["/tags/ui-assets/index.html","6fa9fc3626d7b30e6d5ce6ebd4869975"],["/tags/update/index.html","961e33a9671f296ef8038b2bf9e86dd8"],["/tags/upload-game/index.html","d47bc8efed95e19a607ea20494bf91b9"],["/tags/variable/index.html","ec59807f33f83c3a5c05d5f689debd34"],["/tags/visual-novel-maker/index.html","d27a4acb33dd5547507c0c480a877bc1"],["/tags/封面製作/index.html","e516b9db285065877c0d6b2e3b0b7961"],["/tags/背景素材/index.html","d41f24c4b8a78f4d23c99486b18a3877"],["/tags/隨機功能/index.html","ad218b1ad4fa574f56c06a182021a56c"],["/test123/index.html","0ef4d2d9948d69e601a8b32aa6dad7ac"],["/textbutton/index.html","e6f747989f1718d6403a4c938d6cf7ff"],["/to-do-tutorial/index.html","ce40f167780c0d050b316a700d10312d"],["/tools/index.html","bba83d7b7f87dbc8168cf774c7fac2e8"],["/transfer-to-hexo/index.html","6a9601a319925e263eb8c249456a4458"],["/tutorial-update-history/index.html","b81c1cb17b4bfb3cd19b59803158182b"],["/tyrano-name/index.html","728a8df13d78dde61dd8fee9a231239c"],["/tyranobuilder/index.html","dcc7fe7f975b01fe63e12e3e9a9ece75"],["/undefined/index.html","4fd05d30e647be4b38be48f4dd6fbb9d"],["/update-20221211/index.html","313734122d94a118b7cace39e7bf8876"],["/update-20221218/index.html","6f2b7dce553dbe2790a9d4d1a021851b"],["/upload-your-game-itch-io/index.html","9aa6c0614c5d1bdd0290b8878e83aea7"],["/use-list/index.html","3b932e6b555c571319190fd2d9665975"],["/use-nvl-mode/index.html","637e53241b25113457388c8db66550e8"],["/useimage/index.html","be3ac86ec0d95ecf45fb700ac658c623"],["/variable/index.html","4b3045c9c46d53dcd3bb195502ddd025"],["/vnmaker/index.html","219ae56cad8c6d713d3075211da80c7f"],["/weather-effect-tutorial/index.html","a0f3ac569cddc560f5816ea53b88902c"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
