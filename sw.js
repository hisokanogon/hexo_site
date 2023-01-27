/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","d91e2e0c29927953311570ea0167503f"],["/2player-battle-system/index.html","c0a065fc97c1dac70ecec06ec6ddae56"],["/404.html","f84699207ca4346a6f2c0f3d3232ddd0"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","f9a6feaddecc8a240798d7ec14474783"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","e897d25e06eef133669261d61c020de6"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","45af47bcd41d1790bc054b9c51e4ca3d"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","af33e47e6d60e6a8969d16934db9464f"],["/animated-title-main-menu/index.html","ae15d608cc04ebc05a95c27df9935464"],["/archives/2022/05/index.html","5fef58f05fcfc032184a179bb347a92a"],["/archives/2022/06/index.html","c028f04fd93723cc3abfbcbdef7832ab"],["/archives/2022/08/index.html","c02c582972f68336917bd5051f2042bb"],["/archives/2022/09/index.html","ab42e8d6173262f1aabe85d97579f211"],["/archives/2022/10/index.html","3fa367af3daa70a249d2b6280713ea38"],["/archives/2022/11/index.html","d46e357a56efd2ab79f3e0dba1a93fd8"],["/archives/2022/12/index.html","b86a4909d86a3df2d48b0ef66443529b"],["/archives/2022/12/page/2/index.html","a0bf3edd16514401a12bd9894e5e92d9"],["/archives/2022/index.html","62521d4fbc6c21efcd49fa0355d3a9d3"],["/archives/2022/page/2/index.html","85a75185360788e53b171b72878bacfc"],["/archives/2022/page/3/index.html","65f2277ae47b7ff9bf4f2be334ca6cb1"],["/archives/2023/01/index.html","27d274f6be45b7ce002a95ab9b393ff8"],["/archives/2023/index.html","03cc4dc4a3ea08ccee00126c6e74fdc5"],["/archives/index.html","40bab42be6248d204b1f59f255420b1e"],["/archives/page/2/index.html","cf7466cf4ae3318b140c87ea9d9dd10a"],["/archives/page/3/index.html","1695d882324a50e77e03ec0e03043deb"],["/archives/page/4/index.html","1607fea9cff9a3709a95294aca6f8a7c"],["/artitalk/index.html","ddb468e0e725c0b2e84cbac6b9c7ca4d"],["/butterfly-custom-tag/index.html","2fdea33ab7f96f28a8753e8a5d171b5e"],["/butterfly-plugins-faq/index.html","dfd5ed048b6d442cf56a85fbdb46c264"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","696bc416ef027a494a065ac6fb7132e7"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/announcement/index.html","2d65acca9c7d66bc4fca571ac7078fb8"],["/categories/diary/index.html","f10eae002ba701c4809098a6230abe26"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","f8fe8442e836622e86cf9c6f9017043a"],["/categories/game-dev/game-engine/index.html","887e7cc7b37b180101ed16be17c250b1"],["/categories/game-dev/game-engine/lightVN/index.html","c8a53ebf49b3948ddb890ce27fd9a62f"],["/categories/game-dev/game-engine/nvl-maker/index.html","001c67c4ceb637c40fa4567641aa7d4d"],["/categories/game-dev/game-engine/page/2/index.html","1b6f3a8004e44e206b01776f931242d7"],["/categories/game-dev/game-engine/page/3/index.html","81ddec03607e5a7dd6790124dbd99893"],["/categories/game-dev/game-engine/renpy/index.html","dc3943f0be2ef2ab6f9bf6aff29814fe"],["/categories/game-dev/game-engine/renpy/page/2/index.html","0a4ff7b3cf049522685cbbc2c3b61d68"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","c81bd206d3454d6cbfcab8d7ed698edc"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","b5f711550cff30a16cb0135b026937c9"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","82cf6f7ad68c28e15567e4bc1d0571cf"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","3ba1559177a4563f3e303d0844b0c62d"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","3076e8ace3b2ce9a7ac964079f7b1dad"],["/categories/game-dev/game-engine/rpgmaker/index.html","dd0af44e51b2ce526a15a22f43c66da3"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","e90574d8741a95281046d0b9b46fb0a5"],["/categories/game-dev/index.html","2aa98cad0797a8ad8629904b383f14eb"],["/categories/game-dev/page/2/index.html","43b5c854dacc974a578ff43c55dca673"],["/categories/game-dev/page/3/index.html","faf9d5d0d5bb8c960d3f14a7d65a2399"],["/categories/hexo/index.html","261c1d0ae7d4a4e360a3b10b2939b619"],["/categories/index.html","64fbe71400f2f6538628a6504601b844"],["/categories/material/index.html","8691451faaa21d4b2c62b4afe7dc2aa1"],["/categories/update/index.html","c136fabf604177333ff0266b0d346402"],["/change-time-according-to-real-time/index.html","85f571ba70beb5c572e3b6747f3a83d2"],["/change-title-based-on-event/index.html","284e94d375e4f5c55cddcf8d76dd929d"],["/character-stats/index.html","f4e8e447728a4dbcf3e84281030cc0d3"],["/chatbot/index.html","aba021ee37afb1c6656d86eb55babdf5"],["/comments/index.html","937caf7bc340c6438a81adb4e554496d"],["/create-button-anywhere/index.html","e5b56df79294d7e86fa694fe1bb6c618"],["/css/eurkon.css","da4d63d9c011b7c57b1eeea4c5203b02"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","91967d3772b9cff10b3e6953c89225d9"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","03fea686961ebe16a1d77afef64dc0e9"],["/css/rightmenu.css","df8b9698f1ec6bf3231ae4dfc5102d3a"],["/css/siz.css","de6faa6c44a999aca8bb370289472f8f"],["/css/swiper.css","412731d1d74305c6854e46469587af01"],["/css/swiperstyle.css","c3d1abc942861471038e0531045c97aa"],["/css/var.css","6d2dbfde11966af10418614bdd830347"],["/ctc/index.html","39b3ac0762867216b5b2cbe792924a4c"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","9a5afab334adc6118a3a067f0aab914a"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","2621571833cd25c04456976e5f207b94"],["/custom-loading-screen/index.html","7802cd4584c3fbca525ccc440722b8b6"],["/custom-mouse/index.html","4aaeba53f492d8ec64375b7a430ac49b"],["/custom-player/index.html","c8ffa87ff31ce88f9510d9df720a6366"],["/custom-preferences-screen/index.html","c6d8bfaf6a0bbd185d80613c32edcda7"],["/custom-say-screen/index.html","da58c56e3d52dad02c3c778d89192393"],["/custom-title-screen/index.html","f79047a362647fda844e8f2c01db8bf1"],["/dice-function/index.html","1ae4e8efe9adc6fd15ff46b85a4646e2"],["/friends/index.html","3e1949088d8fb56440e8e70302f971af"],["/gallery/index.html","15d176f9e3dcaaa995152b030bc92e97"],["/gallery/photo/bg/index.html","bee244d0de7e35c03a11436bdb6051eb"],["/gallery/photo/gui/index.html","ac58d783290b4f5f33a47d354346e975"],["/gui-017/index.html","e7c15282de09bb1e783712ca255d4893"],["/gui012/index.html","20af1e494d0533449950270402831f8b"],["/gui018/index.html","9a0c461ed51f450002699755ab581295"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","a04fc8f42ca3f96e0e1a6e51e0b1b13b"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","1150c667ab3dcad704200dafe485d76a"],["/images-tip-function/index.html","1fa477a2179ace001eabcc77e27bbafe"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","2c4e49e8b511b7d16d12c79e4be4cbf4"],["/inventory-system/index.html","38a1c95cfbfcf9d7b1d0bf64ed05c1e6"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","b7f43397c6a082880f09fd3155947b59"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","4867fd1e8220985d0b4a52198d040cbc"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","5844c4728be29cbdb38d9fdae1397327"],["/link/index.html","7441c28b4a7aef16439aeea5070bcbc7"],["/map-puzzle-system/index.html","ec86db678a782d2395abdadb6fa48ed3"],["/maple-effect/index.html","c48b23db42a46f1887ae8e1665826433"],["/memberships/index.html","d3659e21b0e71de4fb2327cfe125f91f"],["/new-year-event-2023/index.html","85063605c7ffb7b8dc84b2fa22c1010b"],["/newsletter/index.html","58b4b5d61358f381fee69ecac8694c54"],["/null/index.html","bcc693a3646d0736e849a0e02e1aed92"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","7d2d92b78035c5696a4d5a2a9e30b64d"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","854fecd6af1653e0dbe9fca495ccabc9"],["/original/index.html","cda18e7b27ee8177281995eb748853ae"],["/page/2/index.html","7e1fc1f87a303706ca9ad643acbbea1e"],["/page/3/index.html","edfacfe52a179cc3c37ecffe2b67ddf3"],["/page/4/index.html","c7f83fffde0fe23396a8612f003bb7a5"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","ab7ab77a3bd27f3713ab545144eb307e"],["/random-number/index.html","63c17c0b603d58fd2f2373deeda704bc"],["/random.html","a4683f20936b3a08985d204fe06e16f5"],["/release-017/index.html","67e2515c022825d9b808b913f49380cb"],["/renpy-basic/index.html","ac3f5c3b9830d2615ebbae2491c7c2cc"],["/renpy-matrixcolor/index.html","4b1e23ea03951a554e94e18c749ac6cc"],["/renpy-overlay/index.html","3d792cfd97e2165a317d9b72866a3741"],["/renpy-review/index.html","740d20ae88e6562da2236d7a190d05f1"],["/rpgmaker-assets-menu/index.html","342fc0298f7fe5216e89775e2fc0b9b5"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","29ef10254cda1f9ac8447b34a402619c"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","2daf816395630605272c750fc4d083e8"],["/service-worker.js","466e80a025ce4a4dbb77c9bd11c1ed94"],["/side-image/index.html","65b43f171460a1ba51e6f267ebf4703c"],["/snow-effect/index.html","c4cd15f579621c8c1ac5beedaaa82530"],["/speaking-animation/index.html","2081c0bb35a3fb5c9b624e1a74dfcc6a"],["/splashscreen/index.html","63b6dce04af9eb486cf7fa6709acdb3e"],["/sw-register.js","58688a831dc2476224bf8accad9bc275"],["/tags/Hexo-plugins/index.html","38e0e532611248506da5d4bca4bbc702"],["/tags/Light-VN/index.html","205510564eb31b7b9fedac84a62afb9f"],["/tags/Premium教學/index.html","7917251169da0b72c15ec845f6236029"],["/tags/Renpy/index.html","81350a3e9ae13bb7a83c92c5ea3a0c96"],["/tags/ai/index.html","da377a4f62b68d5ee6c0822ef026290e"],["/tags/butterfly-beauty-diary/index.html","db5a21806f23a1f82f348e25b1bf8382"],["/tags/commision/index.html","6b80b49d2c91a566c3e855b8db0054db"],["/tags/custom-hexo-theme-butterfly/index.html","cb4df3e97fb02419bbc1cf75111a0c5a"],["/tags/custom-title/index.html","d21425c2f47508ef0fa5187b6e81ff5d"],["/tags/dialogue/index.html","b0a905f4c430c142666fa69cf3a0ff28"],["/tags/effect/index.html","659d1bc51c720dc19a8ca017ede119c3"],["/tags/event/index.html","e4c71562b6596a5d2f74c7bab9ec08c7"],["/tags/hosting-own-website/index.html","2ad3e2bfb75309fb387fd6e44d419324"],["/tags/index.html","aa00769695559d0c59d7a4470ade1a47"],["/tags/itch-io/index.html","e831c1db460b5c0c55078559787fd1d7"],["/tags/light-vn-update/index.html","fba84c1c8936a0bfad2cfdfb51638179"],["/tags/nvl-maker/index.html","ea4735488720ff520b3c9b2bafd33f31"],["/tags/player-related/index.html","71ac29de2366307b2ea3b037779c6224"],["/tags/pro-tutorial/index.html","28e069edf8e99091fc2d864cfe108d0f"],["/tags/pro-tutorial/page/2/index.html","ec0fbb41bb91fcd1fc88ab65e9f0068e"],["/tags/rpg-maker-custom-map/index.html","ffe6ea1e42e73deb831c3ade7426a954"],["/tags/screen/index.html","3f36df27d0de020a1c09236f0db6439a"],["/tags/special-function/index.html","85840a04fd9a8bf277521be242a350b0"],["/tags/tyranobuilder/index.html","6a342b05bd9c76434c8625a374b1ed17"],["/tags/ui-assets/index.html","c1d004a78c38c099b547828633a70cb9"],["/tags/update/index.html","ecd358487837b316af18cfe0e5869931"],["/tags/upload-game/index.html","8641c4654e6af66c257fcb30a2dac276"],["/tags/variable/index.html","a6baf7d0d9a58e6bbec4a75eeab9dc61"],["/tags/visual-novel-maker/index.html","efcf6feea3a738ca94a99a8ce0947b47"],["/tags/隨機功能/index.html","0f01ba70ccbf3c9ec5fceccffc377a01"],["/test123/index.html","70322fbd4e05b4f7aa96ea14cf9e81f1"],["/textbutton/index.html","28da6456e622b8e772fae944706d14d9"],["/to-do-tutorial/index.html","226faeb2ef6114a915cd5185176f7396"],["/tools/index.html","9804fb2105a64474af16de357748ebdb"],["/transfer-to-hexo/index.html","51d527ec3c29ec18e47816d1db745600"],["/tutorial-update-history/index.html","a75d210909a2385795e07b10841895ae"],["/tyrano-name/index.html","86dee21221d803342d3b4ca859ff7804"],["/tyranobuilder/index.html","4f452dac30edd3af116b5641d97bd732"],["/undefined/index.html","2fd6a3e35866bed17fd18c9f5d36c9f3"],["/update-20221211/index.html","fdd2322b3372d53853890f4e7acc9f8c"],["/update-20221218/index.html","e8ff75bf751bdc8223a684738fbf21d7"],["/upload-your-game-itch-io/index.html","c6ecb232cf55d7f9f08096dfde9e2c87"],["/use-list/index.html","3d4f2f54e0e373a9e502b00ec68498f8"],["/use-nvl-mode/index.html","82e15afbaeebd3de7ca25a21870b503f"],["/useimage/index.html","82c9cfeac576c87629cb368880e5be58"],["/variable/index.html","11cae4fb3acc59de648584af0ba87f34"],["/vnmaker/index.html","1da12264af005b1e60df91b6c0f8b1bf"],["/weather-effect-tutorial/index.html","bce4b4deb5688d50d4244b5977515c6c"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
