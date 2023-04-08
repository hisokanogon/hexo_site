/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","12a7c56d63e9a58f67658cfacd8ac8fe"],["/2player-battle-system/index.html","3dd4601712f15cc95182e6808398fe2f"],["/404.html","a7eadbead89b774ff109fa3c5601023f"],["/about/index.html","2e786227a49cc0d004f59050c4a5a198"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","242b71eb456f5b4ba846f31c36730c31"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","cb164769122517705132978b9eb50348"],["/animated-title-main-menu/index.html","22247a6b40877578afbc5d9ff3ada1ff"],["/archives/2022/05/index.html","26ba85b6d8b7318b2ced8492f4852056"],["/archives/2022/06/index.html","db15fea19c958af50d63505a3ac78620"],["/archives/2022/08/index.html","c7d9cff9ebbdc10fd3e98f8d70da67b7"],["/archives/2022/09/index.html","50f61032b839fa86a40f06f91db75cf4"],["/archives/2022/10/index.html","f0e16ee45f2497d1bf33d2b454ccabf3"],["/archives/2022/11/index.html","57d5bf369354dbee2fc67acb70808f27"],["/archives/2022/12/index.html","948bc6869d3e20579e2a05724018c83f"],["/archives/2022/12/page/2/index.html","11e9b7f674a113df1bac3242573ad5dc"],["/archives/2022/index.html","aec2b712bc8878f941df1017f29efcb4"],["/archives/2022/page/2/index.html","1be82fa8f54b0edad81c9b8c018c9cf0"],["/archives/2022/page/3/index.html","e724c6b806ee8144e2a181ccadd41d58"],["/archives/2023/01/index.html","7b3f704c9cbcc12669995be31d0500eb"],["/archives/2023/02/index.html","ab0aa8021a2c04e6d3c422961af76ead"],["/archives/2023/03/index.html","b98d8fbfb2ddd8a6344c7090eb0adbcb"],["/archives/2023/04/index.html","0529b3e56ac6f45840e136d2d0dd760b"],["/archives/2023/index.html","20f67ca17651600ec9a7b57e66e1cf2e"],["/archives/2023/page/2/index.html","fc7910b4d437fc4259bb96ac3c9bdcd9"],["/archives/index.html","d63c26ae5b9b77501223bd8d8acf7e1d"],["/archives/page/2/index.html","aba56697bd2b9b4459e8dc8466c3cb0a"],["/archives/page/3/index.html","e040f17cdb928dea8c79e1561043ccba"],["/archives/page/4/index.html","b6b3d99add4b03036880bdf29bef7b39"],["/archives/page/5/index.html","e76224b38b1819de06976a3f841dbbda"],["/artitalk/index.html","9744127a3b2f914985d808085998ad25"],["/battle-beautiful/index.html","423516cb812a0af31676ebb51678dacc"],["/butterfly-custom-tag/index.html","e53fc5243ff888c80df95f3c9a04c30f"],["/butterfly-plugins-faq/index.html","156d75e51f26e0c6d33f27ae0543c69b"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","632bd3db3fb751ac76fa22a4928249e3"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","e6c2e01c0e2ff17927f3d591b58310da"],["/categories/announcement/index.html","2b7340daa4b46c23d53a2fd9486dbf00"],["/categories/diary/index.html","3ca69fb9886810fdc92e6b3f5e98dfe7"],["/categories/game-dev/game-engine/index.html","66bc30489017994663d142f3f6179b6e"],["/categories/game-dev/game-engine/lightvn/index.html","918e4ada323e478d44f698d313636890"],["/categories/game-dev/game-engine/nvl-maker/index.html","693863f823c6692b7cfb68c038d43235"],["/categories/game-dev/game-engine/page/2/index.html","b868fb275356f0e028429ee1c3d7448a"],["/categories/game-dev/game-engine/page/3/index.html","1057a0bcfe501b53cea2e8fcc308da56"],["/categories/game-dev/game-engine/renpy/index.html","4784d0b69521cc5940d27a918e2dd5f9"],["/categories/game-dev/game-engine/renpy/page/2/index.html","f1a4d0c30b6e83982d4e6789556fd3f6"],["/categories/game-dev/game-engine/renpy/page/3/index.html","6fee031dc1c20818c99b3c8e4177a02e"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","00ceceaa85729bf7769bb1e7ef980e32"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","fca77c61430fdcfb079c2c1280bcc450"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","79c2fa75076af1812999ebe0a7782c4c"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","0c118e0f8d5bd8a3fc40547baa042601"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","a5fc99f9614cbb666a746123032aa15a"],["/categories/game-dev/game-engine/rpgmaker/index.html","dc10537c06258054a08c294fffb41dc2"],["/categories/game-dev/game-engine/tyranobuilder/index.html","3dee76bde8247e1743d2c093ddd96ad2"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","93eb38e24d83190d5baecd63da5664a4"],["/categories/game-dev/index.html","7166979df25ebe1f852d45fade626f6b"],["/categories/game-dev/page/2/index.html","3f2e5dab287e107be38de4e7039b85c8"],["/categories/game-dev/page/3/index.html","914a8af6f5c3274218d1990a32bfa27e"],["/categories/hexo/index.html","aeede5de413f586a4f85bdb40ff5578e"],["/categories/index.html","e82c49579dcf871635abedaaf2680f05"],["/categories/material/index.html","9fc6ad8272fc8cb78c2d8adfb27eee0b"],["/categories/update/index.html","0acfe94528d16bcb009505601818861f"],["/change-according-to-real-time/index.html","62453cdee7534c96c0dd5eb001a6cb80"],["/change-title-after-first-time-viewing/index.html","009aaaba8d1827de8fb198c3e2816eca"],["/change-title-based-on-event/index.html","36ff75056a9a3305dbe80a6163b84ae7"],["/character-stats/index.html","f5ae0b417c5dbf094fdab07617d9fad3"],["/chatbot/index.html","128e55e38d76f0929421f67d225c97f6"],["/comments/index.html","2c99bc1aad111af0b15995f91caf1c2b"],["/create-button-anywhere/index.html","d79f98a2d5368f613972f0d4aa52818e"],["/css/eurkon.css","f3bbccd3a7b1b919b4848d209533b0e1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","37565cd29ace54eb1ffda5512432ba8a"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","c029cddad5c019cab6a26497a6a7885e"],["/css/rightmenu.css","2136567d2069ddd4c927e8330a358fcb"],["/css/siz.css","05946ebbcadc45182e1a43a7ad48af57"],["/css/swiper.css","3a3fa54a31d2b594eee54b2ffd10b388"],["/css/swiperstyle.css","ad3175762d32caaea385b351b3a6c345"],["/css/var.css","942cdbe26ae164821a5ed66a54d27a0c"],["/ctc/index.html","b1e19668897fc07bfe8b54e5b8dca1a5"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","35d36de11e8166b54e1d971d8e3381e3"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","b153342cd4e83aba026683010f68ec8c"],["/custom-loading-screen/index.html","50de6dd9459953e63cb222997c541590"],["/custom-mouse/index.html","41732c42fc7f2532f68d31486d7f133c"],["/custom-music-room-screen/index.html","537afa7cd197eb9563c77d8ebcacead6"],["/custom-music-room-screen2/index.html","c2938feb2d74ee20cd39fd206e978661"],["/custom-player/index.html","927fac4eca0a4bfc3f5dec5ca7bbd59c"],["/custom-preferences-screen/index.html","1b8bc23873afa8cd9e89102eeb7c439f"],["/custom-say-screen/index.html","bc9b2a4f58781f56f2b89b59ba37d5b8"],["/custom-title-screen/index.html","209595e9c1d58072f0be870ee5b265d7"],["/dice-function/index.html","5438104f87917233b8196f65f3bbae47"],["/disclaimer/index.html","0c865ba489a97541777adba994f34c6c"],["/friends/index.html","e538f5f41e960ad5bf2b07279a8a6498"],["/gallery/index.html","a4264554ea026cadc71c915ee5c5e94b"],["/gallery/photo/bg/index.html","b7aea80f593e5926aeb854185c12bfe8"],["/gallery/photo/gui/index.html","073d6d550989b28d37725dd0f077ef5a"],["/game-only-text/index.html","09ccaa77085d49ddb9881d99ebda0c40"],["/gui-017/index.html","99acfde2ed156f35ca1d2397401ae1be"],["/gui-vertical-002/index.html","c8cad7dab56b186fc764575ba50b0332"],["/gui012/index.html","e5628b7523632576fc75665bf220480e"],["/gui018/index.html","5b9f7c082ad0df8000dd064a14e2525f"],["/gui019/index.html","5cc0e6ea519f4d146ee901132b053ac2"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","beb19344751d74dddb0752cf8b656447"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","fe2a13e73cd9eeeed3cc229ab94be5d3"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","17662fb72ac5d4a80ea37a452d26953d"],["/images-tip-function/index.html","b7e1acc3ffd291dfec14885ba7a61f39"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","c0e224a22e98ee7358edf5f18701761b"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","bedc54756a2efc30ecca604fd25bfc03"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","550526ea67871f16fc3df8a3a2fbdc1d"],["/items-sprites-effect/index.html","89618c2e164ed6e5900fe152dfc22ced"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","99d509c9f833e7bb0cf0ae785bac3a0f"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","62aa6b47d6102176c18984913960d7ba"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","44035978783692ffa0486b11bd75afb2"],["/link/index.html","07b52ce0569c2fea8fa215b67041218a"],["/make-butterfly-beautiful4/index.html","7fdfe493e315d12ab1393b6b87b912c6"],["/map-puzzle-system/index.html","8568666d11ddaa3cfee36955d5a597e4"],["/maple-effect/index.html","441a163c5fe748da582d78fb56749f01"],["/memberships-2/index.html","8e373ca1d415a54b0138b0a2316608eb"],["/memberships/index.html","94c33ccd1370e02c014616e9c95f13f6"],["/multiple-language/index.html","cf319ab4cf9d5a5e7b6bc25afd7f2d97"],["/new-year-event-2023/index.html","40702b5c93b6f91916b3b74353f6371a"],["/newsletter/index.html","9cd8c78da830eb4599e7d0c33a3f1357"],["/null/index.html","162d60ca36501bdd3710516c07d533dc"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","54ce4c6a50dd153443899ae10e8baa29"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","b403703b415c3c15e30419587c36a5fc"],["/original/index.html","e3d6064d46185eddb8779e7e5701542d"],["/page/2/index.html","cf2d912d11d02dd09d1948a281a1630a"],["/page/3/index.html","7baafe902961bf22074ccc37d91d8f7d"],["/page/4/index.html","a46a2fbaf00ca1dd158877a38298b27d"],["/page/5/index.html","28b47c44ef4d06b43fa1cb241e530587"],["/privacy-policy/index.html","eec117feffe4a7b36566485dc803553d"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","489870f4375efb50bd7c7344cae5c858"],["/random-number/index.html","7e0f48e47a96d72ca0462e07a3010d28"],["/random.html","567126cefc370444c629cb8440f95482"],["/release-017/index.html","d2eefce3d6ad7399b8f9a13e771854a0"],["/renpy-basic/index.html","a6ce6775884d6ea43abae59807383dff"],["/renpy-crash-glitch-effect/index.html","ebb17837f0a257c617f1007499251ed0"],["/renpy-matrixcolor/index.html","414c4b4d7faaa7dd35df4e3b2313cdb2"],["/renpy-overlay/index.html","de261dfe5e232d369b1912c18c364dff"],["/renpy-review/index.html","585c2e837c291d2c6fee82c1ee87772e"],["/renpy-typing-effect/index.html","86f411398e41d7550031849efc8f9889"],["/rpgmaker-assets-menu/index.html","053f383e21fa0d72ddfd3406a822f06a"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","f25f8dce24f9f9cc0591323bed430459"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","93e3b4f83c8962ad9def7eb01a56a596"],["/sakura-tree-background/index.html","709fa02bfb1b6aa737c6274556de267d"],["/service-worker.js","2440ae8b1cc5a82fea3d9a65f924bbdc"],["/side-image/index.html","2c8e0cec87fc6206a78b9460d66323c8"],["/snow-effect/index.html","19fbc423642373cbd2690ed808d9e017"],["/speaking-animation/index.html","08a2daeddc4a2a8c40033f872d61c4a3"],["/splashscreen/index.html","72045548d3b2e7c2c0cf7823ce77cf97"],["/sw-register.js","33de07c8e03614951f4ced4e73febded"],["/tags/Hexo-plugins/index.html","5827b45da1c67d37616926dddf203f9d"],["/tags/Light-VN/index.html","456e49b66c86e87b3f202bab492b7ae0"],["/tags/ai/index.html","77f5af436a0117183dcab60b4baf0e3d"],["/tags/butterfly-beauty-diary/index.html","d25a39b5a753c69752d883988d547ce4"],["/tags/commision/index.html","f01217eccce8076f19e911adb15dd569"],["/tags/custom-hexo-theme-butterfly/index.html","545a7c9e9de680505f5c4dc79232c5f0"],["/tags/custom-renpy-title/index.html","ce2ff50cde1dd09cab6efb4c78393a27"],["/tags/dialogue/index.html","a41e5247c6eed12c6168f4fc3cfe0175"],["/tags/effect/index.html","e59e67fb6f5969cce4374aa4cb50cdc1"],["/tags/event/index.html","ac8931f7825c75892803d50d5d76359d"],["/tags/hosting-own-website/index.html","1f5298c9589ea375087895c879a90e2c"],["/tags/index.html","d329cb4899f3414d0bc91938a0f79b37"],["/tags/itch-io/index.html","5dd50c946c68b6c2bab72fcdb17e8d50"],["/tags/light-vn-update/index.html","e19a4b4ed0f52fb2f770450d42e4e2b0"],["/tags/nvl-maker/index.html","707aa452a2dd1fe565e6edf3f768fde6"],["/tags/player-related/index.html","87f04e6e6a0c7093f7127203369a9014"],["/tags/pro-tutorial/index.html","fba978dd0942eeb3169672e39b9f9c1e"],["/tags/pro-tutorial/page/2/index.html","923e96c691bab93a7b21170db4fc42cb"],["/tags/renpy/index.html","38ce1a7e5692cb4c2f9493a3563b979e"],["/tags/rpg-maker-custom-map/index.html","02f07cc64138d3a0d095e255aa4768ad"],["/tags/screen/index.html","e4f954a0f31371547bdff487a670aa0f"],["/tags/special-function/index.html","8b5a92951ba1e49814a2d90dd71cb3dc"],["/tags/tyranobuilder/index.html","a16726c3f310264a992e8c32e96140aa"],["/tags/ui-assets/index.html","44249f18b59ee531cdd45364ce466bce"],["/tags/update/index.html","d718f5ca12e975beb87ac61cc1df1eb3"],["/tags/upload-game/index.html","d5f8eb1c3b5ee8ff51761bb3864afa47"],["/tags/variable/index.html","49188bd6daf13d3780d91003e65d7818"],["/tags/visual-novel-maker/index.html","ed0bfcf7a1acb667a52a6623ac218c49"],["/tags/封面製作/index.html","21603c469c767db551e4a9d3c1fdb747"],["/tags/背景素材/index.html","b98eaaa235c8127fbae4728a3aaf28e9"],["/tags/隨機功能/index.html","ac147c690aa45e89b8bac7a50cf6cf72"],["/test123/index.html","037da925ffbcc83157b8a12345802850"],["/textbutton/index.html","99b9ad044f46a5c887087464c3306405"],["/to-do-tutorial/index.html","f0419fd3c44ad0110e42b78ee9994bcd"],["/tools/index.html","e2289fb4eb21992b4fa214f07565cd77"],["/transfer-to-hexo/index.html","3d1dac2f8189974f0afce8af0f7ea011"],["/tutorial-update-history/index.html","9a6d510a77bd18f9428bacdcc05551ee"],["/tyrano-name/index.html","a2ea1f24c7bf74b4642c544a498d574d"],["/tyranobuilder/index.html","6e759be3d36d608f10a10cb92e98cd91"],["/undefined/index.html","2cf02e8d6d43d19158dc86801e1b2be8"],["/update-20221211/index.html","2090d89b06b1cd1f20e5e979084789a5"],["/update-20221218/index.html","13e4c5c202a3fc4a736c317ec8daf044"],["/upload-your-game-itch-io/index.html","173c58cb3ecefc4cf5fe1719ca205011"],["/use-list/index.html","997d5d9fefd9fc115142f7bdd4298f63"],["/use-nvl-mode/index.html","f40c3b7db03944668648d64636d0133f"],["/useimage/index.html","a2831b7184756fa2e2bc055564ee553e"],["/variable/index.html","910495cccedc2685ffd83dad3fa28afc"],["/vnmaker/index.html","14d5db27ba546e5b55eee716cd44e0be"],["/weather-effect-tutorial/index.html","39285cdccd67ddbec7575d665534196c"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
