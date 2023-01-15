/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","c407f4cc65a720d6c2efd329274595f6"],["/2player-battle-system/index.html","f3a4bed223fa679bbf3aa5f1ef0116a5"],["/404.html","aa3c0a64f04a15a529687d413ba5914f"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","4226d863cb1db2189c8a9a09331ba5d1"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","41b31b69523f161cceeef0b7cfe9f420"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","6461b0ea79d47100dd69c7d6a7a662f0"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","b69b314b6b837ac1dc0f9e0a5577a111"],["/animated-title-main-menu/index.html","691ea135a7576777b8d8e8e0956bb685"],["/archives/2022/05/index.html","319f03ca8c73001d74d0b78596ec8f7e"],["/archives/2022/06/index.html","d11d94232ade6ee1afec1e1df5a35f39"],["/archives/2022/08/index.html","3d063d3f57a0eee3b3c08e218a2916cc"],["/archives/2022/09/index.html","b1f316fe8f0284527b4a0653f0ae52ae"],["/archives/2022/10/index.html","3f889bd879f6e1365ffb91c71d559ea1"],["/archives/2022/11/index.html","444d151f9accc0e2f1ee996305c2a1cf"],["/archives/2022/12/index.html","bd9a9061f31268d2b31d196cd1d0c1d6"],["/archives/2022/12/page/2/index.html","59cacc67669958c6c400bd409a309cf8"],["/archives/2022/index.html","e46ccbb2d26e1a082720cf4a0b8a9b51"],["/archives/2022/page/2/index.html","0db5a64b9219a8c57b1cfa1825efe5c4"],["/archives/2022/page/3/index.html","a8b84881177710258e083569a9dd342d"],["/archives/2023/01/index.html","16a59b08530319ad02353266e361c99c"],["/archives/2023/index.html","a8495c40d187a101f311674811645356"],["/archives/index.html","f9c10e238594d29db188b74006630998"],["/archives/page/2/index.html","a597c0663e6e5d58b12b126c2fa99112"],["/archives/page/3/index.html","6bf131b9e0ce87cde5d964c1a0858e2a"],["/archives/page/4/index.html","2c269b47b941b7117dcc8e17f0cf7283"],["/artitalk/index.html","6b8c85e70ac6c454edccc6f149b87a32"],["/butterfly-custom-tag/index.html","6afefc08cbfc7f9add4b4f9fcfab9a28"],["/butterfly-plugins-faq/index.html","b4d9dc1dfda75391cf0fbd91f6cb2830"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","847d780d89e8aca2fae85c5f54ed94b3"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/announcement/index.html","8ceb7a35e22768332d0e136b1ed331f8"],["/categories/diary/index.html","f8934093b6ab434bd54db081d1665156"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","917ad4594cca561adf5b003cf5c08438"],["/categories/game-dev/game-engine/index.html","a9cc5755b8b5998f70c92348f4c44e1a"],["/categories/game-dev/game-engine/lightVN/index.html","b06e59025add35dec4541fea4509f711"],["/categories/game-dev/game-engine/nvl-maker/index.html","dac7482103652f923e254b807d5bb114"],["/categories/game-dev/game-engine/page/2/index.html","4566281620e53846075e61e6f96bb23e"],["/categories/game-dev/game-engine/page/3/index.html","dfad7737c9826ee86522375ee5cfbf23"],["/categories/game-dev/game-engine/renpy/index.html","368fe8b654bb72b4ff7f29bbbfdc7d35"],["/categories/game-dev/game-engine/renpy/page/2/index.html","1dd592849ed605bfcf4320af93a8ad8d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","f5f9625015f5d15b69bd1d43d7fd6c4e"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","bcdf65d9b4d75422b9f6d3ebaebd58f4"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","349d5f3e46430a0073974746eb09b86d"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","c834a9ab5bbc5fda627634fe067f619e"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","e84a1958ce80fc3ebae6484f9154f1ef"],["/categories/game-dev/game-engine/rpgmaker/index.html","48590f088044cb7b999851ccd3592f8f"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","bc2be1e10b84e6a8b224b9e74f47d586"],["/categories/game-dev/index.html","7fd83162af5498e92dc7f9071bf9cb61"],["/categories/game-dev/page/2/index.html","d41040df21389b74e08a7fefce35f4ab"],["/categories/game-dev/page/3/index.html","f2c05f38330939cdf65524d207998f3e"],["/categories/hexo/index.html","e0d7e2162fc7b04424c9bf6b53410816"],["/categories/index.html","e5b789ec1b772f05e6c5c727bc374190"],["/categories/material/index.html","96095d3b5f1cdf7123b07eb251c9a472"],["/categories/update/index.html","34296e01c840f10314c647914f14a53a"],["/change-time-according-to-real-time/index.html","58b777b48844a15fe65c1fd0cdad5cc4"],["/change-title-based-on-event/index.html","01214acee5e55c882568e32fc363fada"],["/character-stats/index.html","9f361831db08c9045b6704bc51907cc4"],["/chatbot/index.html","a5346cd7ae8b1b17b4ff37d8dbb7f94b"],["/comments/index.html","87066228016e5336062165cbc22f1356"],["/create-button-anywhere/index.html","b8fafecf30ad6452ad04d611eb712360"],["/css/eurkon.css","5b43ff99d8fb56da4b4903afdef049c0"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","66d9eceff76165a38e37e21b2fe8a999"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","5f62054170e51baacb74fa9e86feb43d"],["/css/rightmenu.css","297a40c971c617b09031f10b6de54eff"],["/css/siz.css","d2d60b783d8984dfc44cba71a38c75f5"],["/css/swiper.css","d165a3d23263140fdab07d7906540c5d"],["/css/swiperstyle.css","789ea06160bdd20a0598f690576a5158"],["/css/var.css","66a37bf5f5e5d74e30bbbe34a1cc2c1b"],["/ctc/index.html","161aba40bdbb6f49e237f6bb43251d09"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","d642f07080f76f29ad2cd06dcafd0a1f"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","1086de10db4f6572717605c9447d1c6f"],["/custom-loading-screen/index.html","4d9efc67aaec350a41453e5458b0954c"],["/custom-mouse/index.html","7063a4c9a687aa45bd052e75d36c850f"],["/custom-player/index.html","7d0b9a9768da8614796baa7b79d3b427"],["/custom-preferences-screen/index.html","009bd3533e2da71738ee607856ebe4a3"],["/custom-say-screen/index.html","57e593c324c1270173fab5c97f566f70"],["/custom-title-screen/index.html","e5983d69b124debaef071e0f2a54db3a"],["/dice-function/index.html","ed837c17cbacd23f06d5c5f40e11f734"],["/friends/index.html","66114570b876b715c18d9dff24d86904"],["/gallery/index.html","86cdf3fd2ea1769aa2cb6092c94c3975"],["/gallery/photo/bg/index.html","507f27bd8ae5c7059f06badecfa38ab8"],["/gallery/photo/gui/index.html","00fe70edfac48d8d3eafd9d1256a76ec"],["/gui-017/index.html","e682f67e55ecdae83d3178743e5c90bd"],["/gui018/index.html","a77dc9d5efad3acd2e029b01353652bc"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","123b23b1e04716f852984130763f4b5b"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","4c1fc5a6309785237bea46e311ac6c4f"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","d05e43399e0463c1bf7c59cb2e60acdc"],["/inventory-system/index.html","de811c37a26f6bae64da8acc8396b4a4"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","bc681b8541b5e5d09607979daaa40bac"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","0667a8f02f3a1ba136f5b7bc42b9160c"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","a781ce74795ec8ba0d744e2b1c2ceeb2"],["/link/index.html","8e8bace959de622dfbe7885853993eb7"],["/map-puzzle-system/index.html","37de1ce98efc8532749cae44ddcfb7bf"],["/maple-effect/index.html","9675a48c3feca7f35ad9efcc3ffb8a0d"],["/memberships/index.html","25dbd2855d06ba9a045669fed6b8975f"],["/new-year-event-2023/index.html","e5a1d69706dc94dc9a1a85751f29c57c"],["/newsletter/index.html","e2c949307451ec48387aece42fc577f8"],["/null/index.html","7ee8a40191f4a2d2b2742cadd5099b4b"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","3df3e93f55d0c6338ad30c9896e40f09"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","dbc56d1be45338f65da5c0a8d57b94d9"],["/original/index.html","9254fcb98e89749f13a203ce1611b9fd"],["/page/2/index.html","d51390f563ed5cfa9a2869a93af6417f"],["/page/3/index.html","a748af5ca641b378ebc93bffef4716da"],["/page/4/index.html","6da4f6e741c363471aba4089e743beaa"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","c137b88dbe560af6c1eef40140bbac9e"],["/random.html","f33ccda34277da6013e91d4000b6ba3f"],["/release-017/index.html","db4d6e576580d443441c95962d637ca1"],["/renpy-basic/index.html","1da9e145d9785c480a4a8276b88969b2"],["/renpy-matrixcolor/index.html","a922cb3e7481cb2f6a3b2f6a940b5382"],["/renpy-overlay/index.html","53ae7039662372e80a410e3354636b19"],["/renpy-review/index.html","bd3859d0829aa6dc2a387825a1a29b13"],["/rpgmaker-assets-menu/index.html","d01c92021f6cd382306938f075f010a4"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","04e6e8259e3cef12c4255237c84dba82"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","ec225e2a8d83ed30ea179b75cd57e26c"],["/service-worker.js","2d9ec352e44317ba91d8b556d45d06a1"],["/side-image/index.html","089aeb6996c0af05389ce01c1b9fa544"],["/snow-effect/index.html","c83b158c7b9a0cc5cd1c1ad2d6071cea"],["/speaking-animation/index.html","f0a6942dfde4d094721fd05a568f4d6c"],["/splashscreen/index.html","ea4f3ebfbe4b5ff9060fd85b97dda60e"],["/sw-register.js","796b385962cd367ccc741a6236691e7e"],["/tags/Hexo-plugins/index.html","6374dede84c5979692b93015648d8044"],["/tags/Light-VN/index.html","0cc81b65126026cf36de761b29f9b921"],["/tags/Premium教學/index.html","0eea3d08c35f2420c8023b8894f87c47"],["/tags/Renpy/index.html","2f8cb62dff414f4d1b2b1ea63f9d76ee"],["/tags/ai/index.html","a4cddc963f493a6e3a8532ff647badb1"],["/tags/butterfly-beauty-diary/index.html","d51ea9c88f80a8eb7fb62c995f5d871e"],["/tags/commision/index.html","6521369b572555408a0b6a6feba7d9e0"],["/tags/custom-hexo-theme-butterfly/index.html","69349e925143b46e9193ae5142f7e55a"],["/tags/custom-title/index.html","f27d0d7255c470a31800cd9c9c8744ad"],["/tags/dialogue/index.html","0f063ba82ccb8f9c0f458217b2007cac"],["/tags/effect/index.html","054a90c0546f631cb003f78d133abb34"],["/tags/event/index.html","99d483550dcc8440920df5961cfd3dc0"],["/tags/hosting-own-website/index.html","9318bd2558719e0dc7aaf6d0b6f6a6dc"],["/tags/index.html","f8ba6927e0e6063b30c3682410dd7ec5"],["/tags/itch-io/index.html","3cfb70e79fa1595ab9f23f82d53fa67f"],["/tags/light-vn-update/index.html","93beb4a6967944c2d032ad20257a0871"],["/tags/nvl-maker/index.html","299402a9ef7b681940a11a9490eeeef3"],["/tags/player-related/index.html","e60118905ded4c780be30b743bedad72"],["/tags/pro-tutorial/index.html","9780f19516baee8d6a64f4178901b2b2"],["/tags/pro-tutorial/page/2/index.html","76f129af0cc656f1bfea099e5bf9379d"],["/tags/rpg-maker-custom-map/index.html","1fb6df2182460084373dd55e1a36b906"],["/tags/screen/index.html","5f58986b40f6dec9c50f61cb5cb0a6bd"],["/tags/special-function/index.html","354b4bad5021e685364dba423b20a398"],["/tags/tyranobuilder/index.html","cd92a9ccafe2051acf83b48e89e00a66"],["/tags/ui-assets/index.html","105a91006e8ace122563162a4556ce9b"],["/tags/update/index.html","6cfab750e76564877ce465c2c0d5beaa"],["/tags/upload-game/index.html","667c036f53f6acae45024d78a0d8ae30"],["/tags/variable/index.html","3f770cb50fe1ad03a2f11578ae9616b5"],["/tags/visual-novel-maker/index.html","1f15d62acc6361330c10f494d4ed69c9"],["/test123/index.html","ffb8eb9fb68a459de07a133eb086df7b"],["/textbutton/index.html","fb406d05ef64e48b90bde551ec5312a9"],["/to-do-tutorial/index.html","d0902332ec80bb6d571356a2d228281d"],["/tools/index.html","3db2c726af196157edc1656dde09c87e"],["/transfer-to-hexo/index.html","96648655417d858204050ac78065b8f9"],["/tutorial-update-history/index.html","59a5d97a52d6f6c23e73a6331065cf3b"],["/tyrano-name/index.html","2699fe6604973815043b6ce5ce08d109"],["/tyranobuilder/index.html","a4f921f3a2591125a17e33e9c9e67866"],["/undefined/index.html","5903d1f1357f8055ef764e01b5f1d775"],["/update-20221211/index.html","78cf63cb4776f80ea229061528422bb1"],["/update-20221218/index.html","1f47dc6873100f334078c46b6d9a80c3"],["/upload-your-game-itch-io/index.html","2c9266624694e3b6d2adad0372a76db4"],["/use-list/index.html","44bc0d3ed7b236261721ba7bdbeacd3a"],["/use-nvl-mode/index.html","38be8f3dde8a101cfd2efbbbe87c2c34"],["/useimage/index.html","dab4c684405b45fc5f3c50c0981956cd"],["/variable/index.html","c33c632d3aeb7612bc4d176aee4bb8ce"],["/vnmaker/index.html","1da0d43ab3306895bc5fe49cdab3dbaa"],["/weather-effect-tutorial/index.html","ffedc5b8ee2cccb56062ee89317b9dbb"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
