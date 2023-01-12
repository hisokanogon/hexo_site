/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","db881e99656e960186876a38ab92ec37"],["/2player-battle-system/index.html","ba4f727d2d0765b81ba96e4106745555"],["/404.html","e69a1e12f643e5509ad45c262b1ac838"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","fe7f43d0bc548bb5e49fa2996f43d09d"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","3982fd536674f60be873c04c3a33d524"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","16990bda1fd03700a8dcc4ca6e6a8a5f"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","a67fbf12f29c31ec86115f0a2fa5d5a2"],["/animated-title-main-menu/index.html","c2a593d86d365f8e4e6e644360bdbc4e"],["/archives/2022/05/index.html","f9ec5df8ace98518a7fb9161339c4986"],["/archives/2022/06/index.html","fd7fa8b53d298092f7f1639c62e28e75"],["/archives/2022/08/index.html","1446098e3ff48594ca8cea5c2e715d6e"],["/archives/2022/09/index.html","cca75d227e07c9821029c7c1ba966e5b"],["/archives/2022/10/index.html","ad105bbca01a0d26307c453695fbc016"],["/archives/2022/11/index.html","15a27137b59457859f7f89e866e4342d"],["/archives/2022/12/index.html","1ea19085ce32c961685c580b47b0b59d"],["/archives/2022/12/page/2/index.html","53273fb863ea89fdfdbb7d366407fbf3"],["/archives/2022/index.html","3f8c21d0288ed8ffb1979664bf873e0d"],["/archives/2022/page/2/index.html","f39dad86c117d1095399720fe1dd6625"],["/archives/2022/page/3/index.html","20a769920b1ae7c18bc53ac6fb556675"],["/archives/2023/01/index.html","14d3165d7abddd5d3197f14dbf42d3b6"],["/archives/2023/index.html","26c473c8d45f462acedd14c031953d98"],["/archives/index.html","e1a9f801955bdd8ad2f70b91a807131a"],["/archives/page/2/index.html","67c7b01351c404552f0d11d5aa0d3caf"],["/archives/page/3/index.html","839867fe9cbdd4720b2aff20b234eae2"],["/archives/page/4/index.html","9c91c35bab3cfd6ffa7e10cde0b3d9dc"],["/artitalk/index.html","3885380508fe4e7d44fdfd5ac488f355"],["/butterfly-custom-tag/index.html","a1f61198e383ee36cfe6862d37691131"],["/butterfly-plugins-faq/index.html","9364112e439d77828d61421b3239164a"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","105abbc37b06693488c5ec0f54c373c9"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/diary/index.html","772f970fc39bd6aea86a16d9a317ca24"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","7dee0f47dcaba4235995ec66b9fd1b1f"],["/categories/game-dev/game-engine/index.html","b2198a18c2736720aea275b2282284cf"],["/categories/game-dev/game-engine/lightVN/index.html","0020e099c1c9859e30cc271898c860a7"],["/categories/game-dev/game-engine/nvl-maker/index.html","06c885781de4ff5a124168f3e5c5ab9a"],["/categories/game-dev/game-engine/page/2/index.html","32cb92a01f6ec6c7a7637cc7dcda2acf"],["/categories/game-dev/game-engine/renpy/index.html","f99bb6080b505c293383b576caf5d4bf"],["/categories/game-dev/game-engine/renpy/page/2/index.html","a1cb2a43471d6d4a2c3b8183b9ab7583"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","1b86dc66f7d78094745eb8beb77238ee"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","fb98925ea02c68f34df741d2f8e327de"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","60fa43448fa21c0ea3b652958908954b"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","5a3a4e2505445aab79dbe2d1425e01d3"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","e27393b92c8af240710754f48b4737f0"],["/categories/game-dev/game-engine/rpgmaker/index.html","550ff543a04df7767e2305e02c00308a"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","96a4f5fb6fa889df55ac09fa061e2b57"],["/categories/game-dev/index.html","b79154635a1bfbc9185e09a52cc51340"],["/categories/game-dev/page/2/index.html","3dd217ea6ac78e4c36c9dc71a7b3a7fe"],["/categories/hexo/index.html","1e3e391999a52599b8c376badf427e64"],["/categories/index.html","1e5607d9621290f81914f83810f702c9"],["/categories/material/index.html","a0632b7cf7f482cd81726217f0557c02"],["/categories/公告/index.html","c3ccb8b955de63db330deb222ed6dc3c"],["/categories/更新update/index.html","7ce092271f287f0b1ddd6dc558c6c59a"],["/change-title-based-on-event/index.html","eaa8ee9ddf2901841b82d30b87ae3d1f"],["/character-stats/index.html","73876576ae9b1a3ae9344a5b8551dbcd"],["/chatbot/index.html","52359d7e9c4f49999f65fc6c0c902e4a"],["/comments/index.html","10418da0dda64ae44e0ac6db8d9e50ab"],["/create-button-anywhere/index.html","266d3b52181c13b172fd71ff6f71efcc"],["/css/eurkon.css","aa0c18f350f21d5589caea6aed00bf37"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","d188a073520ebc118b9fe9c42947dc5c"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","7030802008455fbe1378683f85369f1e"],["/css/rightmenu.css","0d5fe41eb58ce5e99bebf471d857e721"],["/css/siz.css","3e796ba318ba8f5a36e0eb31a5ca6c53"],["/css/swiper.css","ae4b9055252b24838ea4f39896fc36b7"],["/css/swiperstyle.css","10fca1977fd4ef903074b4226a38c964"],["/css/var.css","0b7917f5234a944f9c699a3c8d9d8ab2"],["/ctc/index.html","32d08342d10e5e04323e92d6d1a7fbff"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","9d300cd4977f5c5321b58b0e43b47b59"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","51a3a8f0af2e1237ac0abff45482287c"],["/custom-mouse/index.html","db6f0937c93911221c617e844f004cd2"],["/custom-player/index.html","15cbaa6627bbc8d7ebcbd951bdce23e4"],["/custom-preferences-screen/index.html","b8142091befc9ef33fd093bb1ef69a22"],["/custom-say-screen/index.html","9fb3a018d43e41c56a392e821168cd8b"],["/custom-title-screen/index.html","f36d539a4db70c0c0aaf8bd1b5180b21"],["/dice-function/index.html","c376131b93fd49382f7ec18f75d7223e"],["/friends/index.html","9a87e840efc4bb3f330a7626551b6e9d"],["/gallery/index.html","0174c3f6b6fbc15f901ab5ede3b0fc17"],["/gallery/photo/bg/index.html","f415512cb6bcc595c55fe00683f4a654"],["/gallery/photo/gui/index.html","2cc0e170f933f67a6cf2200fdfe0c954"],["/gui-017/index.html","2b456e7ca17f7d641a3118a3d37478a4"],["/gui018/index.html","9fc48b3aa8fddcde92b9576483e4bd6f"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","7926f06b646ea7a62a9d8e5c1ffc2db4"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","0d80beb7786a2efb700207fc7a0a71af"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","05604fd408fd4a769a64e2b659bd8170"],["/inventory-system/index.html","baa4c6cec07289392bb483588a6b6f45"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","05ca1c5fb8bb4b62ceef86da153f64c9"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","43146cf9320d071ef1213930092fc851"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","1a2e7d892b085d772fd70ba515644940"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","d67aabca4281440f0edd776ccd7dd8f4"],["/link/index.html","4c882251f802b2012f8292ddb4f3aa39"],["/map-puzzle-system/index.html","6056e63aa3476915f0b151c5d8e8b2a6"],["/maple-effect/index.html","d8d63dd76032d1c13f321c7a3fc2b25d"],["/memberships/index.html","1b5d349ea3646680f36225176768ff8f"],["/new-year-event-2023/index.html","4bea062708191acef152bf02113bd4ac"],["/newsletter/index.html","2a83e402da738e9102d421e139e22175"],["/null/index.html","8ea94685b5f616b82ea8d9b8fec76ecd"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","08a6796b7de8e013e21180af489bb194"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","95b120256af325578694dbd58b90a1db"],["/original/index.html","5c969f610d64c1a9ff86e7ff612fe51f"],["/page/2/index.html","bd8b640bd576b6f195e8dcdf492ad8f9"],["/page/3/index.html","4c352ce86f05417009e67b0e53685fc7"],["/page/4/index.html","993719bb3066f5d911c6b69bbc7cc8f0"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","4f14a297b90356690ff537447395fce5"],["/random.html","7c0234dbd3f6c2ebb6ef6f027385e761"],["/release-017/index.html","db92fecd8f991afdd96e0384e1407cef"],["/renpy-basic/index.html","29013e8a261bff70413a19351d11479d"],["/renpy-matrixcolor/index.html","15c2b9cfeb50ae0a17f25c98f026fa78"],["/renpy-overlay/index.html","fea2fd69b2b35bd1f62135c559f69590"],["/renpy-review/index.html","f1093d526d7ba643f71f6e9983e247e9"],["/rpgmaker-assets-menu/index.html","893a8ec68a135bc4675ce422a9af5fcc"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","26d4b9e7e2d480cf427df74fe905dc63"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","5df181ae7895bcaeeb9c41d4c662ee5c"],["/service-worker.js","fcd684ecac16c3cc298e130f794fa4dd"],["/side-image/index.html","90eedde425e600d2f0743c559937b90d"],["/snow-effect/index.html","595c1427725ffb13febcf43e33e01955"],["/speaking-animation/index.html","3e00b1cf4a2918b9dbb18ba7a7cd01c5"],["/splashscreen/index.html","b2608aa0107694b18a8b1fe30f4ab572"],["/sw-register.js","181eeb62a53e45cc64264cd23ad05a61"],["/tags/Hexo-plugins/index.html","6ff01a8d20d68f6a8fb223953376c377"],["/tags/Light-VN/index.html","bb25fb5b9a36d873aea02c3269cc9e5c"],["/tags/Renpy/index.html","ddf42516b561f470024ba67f5dd8dec9"],["/tags/ai/index.html","a93316b92b1eeb1ef140adec19985bc6"],["/tags/butterfly-beauty-diary/index.html","27a294aeda17a77eb398e3411bbbe50c"],["/tags/commision/index.html","ab32409a9c9fc3b98639a8d969499b4b"],["/tags/custom-hexo-theme-butterfly/index.html","614f562fad2dbb88a58d3434128b064a"],["/tags/custom-title/index.html","d15daa1f6e153c08eda79282bcd5af6f"],["/tags/dialogue/index.html","dfda246acdbfcf21ab097b7337f14a34"],["/tags/effect/index.html","a6254f4f1a7b0ee9a36b8adbe08bc537"],["/tags/event/index.html","677f918330e30f38b294be652493e653"],["/tags/hosting-own-website/index.html","1d11812e6d3df6a5727fc2a29da92f79"],["/tags/index.html","bb59f3c287a878eea915ad0b1f4d8be9"],["/tags/itch-io/index.html","38e64e388e91629761931e19d0139680"],["/tags/light-vn-update/index.html","8b1ae23becbfa41ca939f64b661304e4"],["/tags/nvl-maker/index.html","0a1bbf4f1aa878c7148ea1440d16616c"],["/tags/player-related/index.html","70866c519ffbf77e6b74f1114fe05b60"],["/tags/pro-tutorial/index.html","ea6a9b0b8633b11e46ad59fec5a95635"],["/tags/pro-tutorial/page/2/index.html","1a5edcb4f60e4f48e228ff204f3b4247"],["/tags/rpg-maker-custom-map/index.html","c3d5ed858f2eeecf85f3c3295859e64f"],["/tags/screen/index.html","b826bbd3bda3742a0e6344a729c4a37b"],["/tags/special-function/index.html","0ca095a9b4716897d1a3c676e97027b5"],["/tags/tyranobuilder/index.html","a7cedad09e71a665ddb03c73b4b47d28"],["/tags/ui-assets/index.html","0c7c9c31637d089cb23215af303ea942"],["/tags/update/index.html","3a2709ecef7aa06885ad7d76a5ef6f13"],["/tags/upload-game/index.html","7f156bc727c52608940f599c5b78e077"],["/tags/variable/index.html","bf18b3a4aab2b8d7309f67af0f8f3cc8"],["/tags/visual-novel-maker/index.html","c4d12f4f16c0ae4271847916494fa64a"],["/test123/index.html","cd1e46d27cb813c41a819da16042d7df"],["/textbutton/index.html","7c4071a8f4739b295544dea3415fbbbe"],["/to-do-tutorial/index.html","53668833bfe8569a87cf065ae228e7da"],["/tools/index.html","d296eea64699def8769012338c7f9ff4"],["/transfer-to-hexo/index.html","c1f72ae1780b7339ba2f1f684329f90b"],["/tutorial-update-history/index.html","74bb1d30b146ce14fc1cf9240e2615c0"],["/tyrano-name/index.html","0bb299f3e4079fd4933e97ff75b012ae"],["/tyranobuilder/index.html","3e0e08c386b3274f1dc1f555319993e0"],["/undefined/index.html","954c6a1230883d6b9bc3c468f9500360"],["/update-20221211/index.html","3b0f915d14688ae3b0527bab897b9840"],["/update-20221218/index.html","93789e2278bfc9986c33cd79d84127aa"],["/upload-your-game-itch-io/index.html","9dd701574e2b17a44df7162f17d394d4"],["/use-list/index.html","8f700a04127b6618331470e91b19acc4"],["/use-nvl-mode/index.html","3fe571a40cc878d07bb27c7e4dfc5f81"],["/useimage/index.html","957a2e0ebfba3b4817feda9b59e97f53"],["/variable/index.html","a349e3b7cc899e7cf6340d214366dcda"],["/vnmaker/index.html","5bf0253e3929d7f9c386414ec9f70001"],["/weather-effect-tutorial/index.html","2b44f0f01e95899b6bc41de854485eec"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
