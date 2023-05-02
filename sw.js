/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","b4d782afc02d8fdd11c68da493144439"],["/2player-battle-system/index.html","5e4c606a74ca018c9d5518489bc341d4"],["/404.html","2a811869e0827f17d53d1dff55a6a02d"],["/about/index.html","dd8b53d677c0003fb83157633d56badb"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","f58daf7522817c949e5f6de2ce127c28"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","29a1b4d196a3fb50dd9fbfc2e7d08780"],["/animated-title-main-menu/index.html","ee391a92095f01d4e0e4fc03c246bdf0"],["/archives/2022/05/index.html","e610ac3b6ed716f48fcf062964f6d6e3"],["/archives/2022/06/index.html","d3bcd6da2dad908c33b3dadff47fbcef"],["/archives/2022/08/index.html","a4938dba8d1d54a3a6504d00a791aeee"],["/archives/2022/09/index.html","b8320565f2c6c0f080a9d4f906d310b0"],["/archives/2022/10/index.html","278f702b83f86f48fccd83874079b915"],["/archives/2022/11/index.html","83343244597d48328bab6cf400c37a91"],["/archives/2022/12/index.html","4beeb260b9a5255c7e432baa335a65f5"],["/archives/2022/12/page/2/index.html","9312898d651eb64275b3bb77d125dbd7"],["/archives/2022/index.html","89ec295659a99a8f0fd52c8bf0010697"],["/archives/2022/page/2/index.html","9815d2f5491300e152a8683af4185697"],["/archives/2022/page/3/index.html","12c9d5f0c0f66a60ffeb4b05840f49a7"],["/archives/2023/01/index.html","ea0e629ec3db074aff22b17c2b19c5d2"],["/archives/2023/02/index.html","97e12bed26e7dcd10ff23c613b6f47dd"],["/archives/2023/03/index.html","a7c320596a89b4cab3ca84ef5b997934"],["/archives/2023/04/index.html","7565bfce1ff94ed7cbb8a6f82bcb1bb2"],["/archives/2023/index.html","2df304adcef993c610b0c7d53e7327fe"],["/archives/2023/page/2/index.html","786f86c97d5c7d5d3778321bd81871fc"],["/archives/index.html","9d04481c48cabb802850a5af423abfbe"],["/archives/page/2/index.html","6b9f9166e8cae74b5a00b67ec50f1e73"],["/archives/page/3/index.html","12c017baeaa6bf946a27238ebb216df9"],["/archives/page/4/index.html","052e8bb9e2e6e33b5d2bd765d5e050f5"],["/archives/page/5/index.html","1f0a208ccbf1760ddbd018bee30df16b"],["/artitalk/index.html","f8b6d37028f7d8573b544e55e5c9da8c"],["/battle-beautiful/index.html","d0ca5716d877c445ed096236fb8b4021"],["/blur-effect/index.html","3ccd0081bdbf61d8941df07e4eb8d086"],["/butterfly-custom-tag/index.html","8f0c83444620467fd18967c3678f2692"],["/butterfly-plugins-faq/index.html","4cfa59c2c321eca7909c338f451a64f4"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","c1c4908b4ac5429a1ced4f06aa6013b8"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","3735aa42f4c8f48db59a6207256e9513"],["/categories/announcement/index.html","b001d594f9706de880adf23b51decf8b"],["/categories/diary/index.html","46a0519a85062babe182c3cd5b49d018"],["/categories/game-dev/game-engine/index.html","05e0abd964ebbd219b76cfdff3236d77"],["/categories/game-dev/game-engine/lightvn/index.html","fa7c23fd9ef555ab66863313163577c5"],["/categories/game-dev/game-engine/nvl-maker/index.html","508bc4cdcd7b3e8632a92cf42f7e638c"],["/categories/game-dev/game-engine/page/2/index.html","f5935ee6f79a731b10f76f744c9cc471"],["/categories/game-dev/game-engine/page/3/index.html","b0aab212bbcc0213825479489949a5d7"],["/categories/game-dev/game-engine/renpy/index.html","b95d480311f1f1eacaee71c93293da5b"],["/categories/game-dev/game-engine/renpy/page/2/index.html","75a9849fc024931fe45b33adc0df355f"],["/categories/game-dev/game-engine/renpy/page/3/index.html","5d13e68ab4be1f653d1dd66a825529b5"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","0476ed51570a0b8304c78786c5e3660d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","2f9a5bdd2f9f7c0aefb533a50ce08ff7"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","13c036db0a535b2a5beb9c83bf990af7"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","5cda70d5428e3743d28f937b2058af03"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","e773dc0e3f86ed213dd29308c7dc5f3c"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","0353b13bc3158f9f267a8c8c49f0962b"],["/categories/game-dev/game-engine/rpgmaker/index.html","a57fae39d67690d1439607f87bd5b31a"],["/categories/game-dev/game-engine/tyranobuilder/index.html","c7512cbb088a68a66458f1d3855e2b93"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","3ca953f955523848c325d0f9cf63b3cf"],["/categories/game-dev/index.html","4b4df0af4beb83a6bbc6773b00990e8d"],["/categories/game-dev/page/2/index.html","0aac592d9eba09eba405c61c217f466e"],["/categories/game-dev/page/3/index.html","a779648e8cb319efc61719ed3ba36d58"],["/categories/hexo/index.html","46621c4bd1c25f59ce2d137c65bfe359"],["/categories/index.html","369740ca4dfea77594eb6bcb5ee08168"],["/categories/material/index.html","d53127ee4d2522f250291d0dac7dc22c"],["/categories/update/index.html","414c39aeb07b4da69d755d59e1034ca6"],["/change-according-to-real-time/index.html","8b932d78fe029e71734478da03525309"],["/change-title-after-first-time-viewing/index.html","353371811affbb65a5d259b94cbf92a8"],["/change-title-based-on-event/index.html","e823c7a774d6898754358701358f32e8"],["/character-stats/index.html","19117371999605158a7716935007bb00"],["/chatbot/index.html","5b3c9ea9968f8c31e5d6288c8556eb68"],["/comments/index.html","fcbc7fe012263ebc6b4b00abc7c023ea"],["/create-button-anywhere/index.html","08d17dfdbef91afbb892d9e5b3163d47"],["/css/eurkon.css","4b8ceab6fc30779b85ecaa24c21982d9"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","44b23879ebe695744c374d4bef502a3c"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","63d6377a6a6b2dc41196197d76330aa6"],["/css/rightmenu.css","cd820322651ef1ef085a9e1af6c8b497"],["/css/siz.css","eb95366135b8525fab90721f6a3b9ec7"],["/css/swiper.css","3c850c4f60e915b0c9ec59e868df4fb7"],["/css/swiperstyle.css","09292eed40b1a2967f581463c7abfa45"],["/css/var.css","0147604344a8b20cf53a241c3bc63a90"],["/ctc/index.html","133f6d2b0484b404c5f037e8fd05a26d"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","d2249a2ecf94503c427fd69392d92b6f"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","87239abcecacd2e1b63290b11fa92f2b"],["/custom-loading-screen/index.html","a94f4ec69d8bb267d32c3618f6ee8056"],["/custom-mouse/index.html","5622972b4777e614952725160856b8a7"],["/custom-music-room-screen/index.html","9712764b219c6665900d342b02326289"],["/custom-music-room-screen2/index.html","ef1d41d74fd702a593824d1e3103f16e"],["/custom-nvl/index.html","7cd85968cccd35ed1271528633cbf346"],["/custom-player/index.html","01fefe8e6d77955011713453c1c25b1f"],["/custom-preferences-screen/index.html","e91754b22d60bcc6816e38b5e6ff94d9"],["/custom-say-screen/index.html","08dc0a591acb7919841b98710dcb070c"],["/custom-title-screen/index.html","132307acb4ffe395ea29ce521eba78a6"],["/define-npcs/index.html","7bf8f52a3b17ca609f4952d602fc8ed6"],["/dice-function/index.html","cf7803a052b8349b36f801eb5a3a7c0d"],["/disclaimer/index.html","e9e02567e06a17ed72cbb783b3d79bf4"],["/export-game/index.html","4eb698406e0b39c3676c4125e8b476e3"],["/friends/index.html","3d9713ad7e8c787301d82a9ea209cd8c"],["/gallery/index.html","7b6d6217b9ac9671baa0e9ca243a415f"],["/gallery/photo/bg/index.html","0d7193740d45f0b7906f5b073d893ea5"],["/gallery/photo/gui/index.html","de3a7ed389dcc92eb4cd61ce7b69a524"],["/game-only-text/index.html","03a1829aa1d444b6febcbf2f86105f4c"],["/gui-017/index.html","1d4f8158db16b3fc5582ddcd23ff3d93"],["/gui-vertical-002/index.html","13049ce40c3c4bcb25331ca2aa22d45b"],["/gui012/index.html","9773445434fe8d0cd28256236d364c90"],["/gui018/index.html","f8797c9b2cf840508115e1eec44f278e"],["/gui019/index.html","27351461257c88726af4a229e6d25fcd"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","3c0caa09f70540c1fba357768393c50b"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","4a2d62c1e461988078d6e6edc7c5af01"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a837fb1d2d80fc8281d97ac1e62dc334"],["/images-tip-function/index.html","7e68fbe962086d5b30bb5270d3e4e29d"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","f52c555f6aa8980a2900a6b32e800ce3"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","42b501bfa398e716c3320707ed9e115c"],["/img/n2.png","2c6bfc075533bfdd83c69752b6ece4f4"],["/img/n3.png","17e293b6fb4ddc16f2d25d074551edb5"],["/img/n4.png","588b27e78ca8404971fb853023231756"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","4d36526159d33729fcae1c888e089370"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","3a5378b7b7f5c2077184119d838f7488"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","a1008560abb55d3c9a233a403aa35eb5"],["/items-sprites-effect/index.html","9a99e683c7b7331a974de121a248d735"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","ed8e535fe7f989a7e300c584f30131f1"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","387c9844df959f44ad258d0e36f7a19d"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","c5f5e694a8ac53bdcf993d9cfe16e697"],["/link/index.html","0d1a4ef16d5cf36328930559a65e5edc"],["/make-butterfly-beautiful4/index.html","487892e0f87c9e9f07aaf92509dda58c"],["/map-puzzle-system/index.html","c4c8b75256e3f8927988896f2f7bccf6"],["/maple-effect/index.html","19091890f4ed016054041e63baf209dc"],["/memberships-2/index.html","a9c1a95d472579b25673722c592bfdbc"],["/memberships/index.html","2f46460ce04ebcb83a2d27c7e60e2a15"],["/multiple-language/index.html","7a6b22803becee6cd438b586cd3f9f54"],["/new-year-event-2023/index.html","9c1da08e48ff0c8717dcc55f1e00b6b1"],["/newsletter/index.html","6483bc04482a75fe704d42aa2bfc4f4e"],["/null/index.html","2e8cd723e5456230293f09082780d9bc"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","7a913a641f6aa112dfc5bc165645a552"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","4c5f8db1ccba68daa829a54f4a345933"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","a120f1a325e95473d644f922f544c41f"],["/original/index.html","da77b4823e0a6f5ec9573ca0036f5bc7"],["/page/2/index.html","f375968974249abfc415bf8a02eeaf63"],["/page/3/index.html","7236ca06e155a35f25e56dd7d5147ea9"],["/page/4/index.html","b939a1956d995c9d354e9793765ffd84"],["/page/5/index.html","eab075d4e06c2790804ebbde180ade0a"],["/privacy-policy/index.html","a8e6dc63c80cdadd3072f23bdaca16df"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","11b97ed1266ac1e461517d8b3d4bd9eb"],["/random-number/index.html","da59e738dd805d2f6b1382cbb2a9530f"],["/random.html","b365462e11d5968d2c636845b0996541"],["/release-017/index.html","e05bc2282bfb714e437baa37a114298c"],["/renpy-basic/index.html","0efdac9bed84314e5f3aced0bdeed67c"],["/renpy-crash-glitch-effect/index.html","a508270935e071b967f5fca37160806c"],["/renpy-matrixcolor/index.html","1113d6a3c56b90df6b26ddeacf41d5ac"],["/renpy-overlay/index.html","c0521cefdc92319b4c04cdefbe2a4cda"],["/renpy-review/index.html","511bcd56ec3aebdde59b6dc1a299f3c9"],["/renpy-typing-effect/index.html","f96212b7de441ae4ae809cfaf0bf11d1"],["/rpgmaker-assets-menu/index.html","1ff59f894ce272a5441272d1f999e976"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","288758f25992da5854aaf905f813f84e"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","fa304eae5d9dfbd424e3749e4bf56b43"],["/sakura-tree-background/index.html","9145cd200102a7e97bd9c59080763c0d"],["/service-worker.js","67ef27aa8735fb0af871f8a9269b085c"],["/side-image/index.html","548eea21c836468984360ada85f0c5e7"],["/snow-effect/index.html","d6230b863b1694f9b2b8122edc6fa703"],["/speaking-animation/index.html","d53ad65115ce7050fda36aa46f51ca7e"],["/splashscreen/index.html","28f3d6d81f299b6e8767464f91e1e359"],["/sw-register.js","9ed96a60a2cfbd55fcbabf3ec6c4c872"],["/tags/Hexo-plugins/index.html","eadfb46b8e1698c9b32ea2e63ea03712"],["/tags/Light-VN/index.html","61e90235ff5940f4c9c2ba850052be55"],["/tags/ai/index.html","827a7a0ce482576dd3f53db363c8b9c5"],["/tags/butterfly-beauty-diary/index.html","b32b46793cd45987818a348e06ec4aae"],["/tags/commision/index.html","aaddf360fb5d24694999d29a76ff6537"],["/tags/custom-hexo-theme-butterfly/index.html","1601451427cc3b64954961e203e5ce20"],["/tags/custom-renpy-title/index.html","aec5f7e163feca239b6ae51b67e76b31"],["/tags/dialogue/index.html","3fc2a9111ae759cbdea6a0d08bb8783c"],["/tags/effect/index.html","aa2f7b54c08d1de58bcb0e9b8bf19922"],["/tags/event/index.html","b9ea35eb0ad0276bc1b0e96469313923"],["/tags/hosting-own-website/index.html","fc911e55a8d1249005a849f86536dae6"],["/tags/index.html","fc74bc7f36ac8b62e55a2265893124c3"],["/tags/itch-io/index.html","d7c987e50323f40f00a65125b1e23569"],["/tags/light-vn-update/index.html","c2365aa24a5e8bf1ab90accde9075a9e"],["/tags/nvl-maker/index.html","249caf79048533c0ac0f0dc9ba06f19a"],["/tags/player-related/index.html","34ba9f098094ea29bdbf7f0fe7603562"],["/tags/pro-tutorial/index.html","42c25d0c1e98687a0701fbdadea105cb"],["/tags/pro-tutorial/page/2/index.html","479f7b1a839ea03af484e863ef84af95"],["/tags/pro-tutorial/page/3/index.html","2136a126a3fc984dffe64c66e162f58b"],["/tags/renpy/index.html","1be3d2abe844a35e057024da0f3b544a"],["/tags/rpg-maker-custom-map/index.html","805887a013289f98232e57cdf468645b"],["/tags/screen/index.html","f8fe34ec90f27454da498dc973cb90e4"],["/tags/special-function/index.html","56ba198d946a5ef0c1d8a2b2e11fed55"],["/tags/tyranobuilder/index.html","9f88c2af83c4c945d6992dbca693b379"],["/tags/ui-assets/index.html","a653d881ad144777446c3f034e726066"],["/tags/update/index.html","ddcebd8ea4786b2018d68198ff1a8034"],["/tags/upload-game/index.html","caf769a3fde8b395bd83a0fe5b285284"],["/tags/variable/index.html","721f1a0120004d62dbf47747bba19a05"],["/tags/visual-novel-maker/index.html","203c7acf3db890ac7b1a23f5c20b1e3a"],["/tags/封面製作/index.html","3595544478336c7ddb566cfac6bb5dbe"],["/tags/背景素材/index.html","eae04243655506af5ae0c0ddbdff2887"],["/tags/隨機功能/index.html","74329d5ed61a916a533cea651dbb43ca"],["/test123/index.html","66feb21648169e1bc4208faf8894fcd0"],["/textbutton/index.html","589d65689cd54b94a4ef83f25011d6a9"],["/to-do-tutorial/index.html","d5af3049c5c3b9d7113ac5216c4b35de"],["/tools/index.html","ab25446dd205b085092963baf9f45768"],["/transfer-to-hexo/index.html","44f576f1f312262c90101fa5b38c3d8b"],["/tutorial-update-history/index.html","40efdb11976b356832142acc3aae779f"],["/tyrano-name/index.html","eb3004e380c2521135e8b97b7449608f"],["/tyranobuilder/index.html","bdabaf2706d1f79e0457370ef4b36f33"],["/undefined/index.html","76f05c626f81bdda7da01e6701ef37fe"],["/update-20221211/index.html","c7bfb431e8c07ee714993a32adaf6771"],["/update-20221218/index.html","94edc0d2af1e6fd29635a0343421fc7d"],["/upload-your-game-itch-io/index.html","bbfd0df12238cbc19f9fc4ee8f896858"],["/use-list/index.html","485481564964d613c3c739eb1888104d"],["/use-nvl-mode/index.html","cddf39dda4c4ab34531c871cd97e9f01"],["/useimage/index.html","191c9f547603b1c8144c1f0189874714"],["/variable/index.html","d915795a5bc23ede8a9671340e95c2d6"],["/vnmaker/index.html","5ee8b1bd4526136eddc7732213b7ff18"],["/weather-effect-tutorial/index.html","942699a9e6479da3066d00d812628ad2"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
