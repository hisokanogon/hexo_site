/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","632140880457b8fec2b381b007e46a72"],["/2024-future-plan/index.html","4513359d01fd220a682291e8a1479464"],["/2player-battle-system/index.html","78077260d448cbf1bd05e74a8c6c07b4"],["/404.html","da5a932b8f5d4f186fd5fc6a82aa2816"],["/about/index.html","2c48e9f69effce0f25a5ecce550fd359"],["/acg-creator/index.html","e42942543e1c2acf88bf05765cf5b8f6"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","a7b9b277296f0ae7d3e65b1f8971c4b5"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","b1b7d5cd683a8b86dd9dfd1e67c5ab7f"],["/animated-title-main-menu/index.html","0c7a401c0a1395335ecd4126d96fd41f"],["/archives/2022/05/index.html","aca65c5827f7a6aa2a7d4996c7655b66"],["/archives/2022/06/index.html","47200b1c381c1cd732e55148463838e7"],["/archives/2022/08/index.html","bf1ab79845e2a248d12233553c4b9e83"],["/archives/2022/09/index.html","f4c563fceb4e8828b77597bc7a303abe"],["/archives/2022/10/index.html","f30fb61b6a84d29937b48097b4752f4e"],["/archives/2022/11/index.html","86a5686f64f59bb807888e86bc4b8c8c"],["/archives/2022/12/index.html","8d3047a861149c7ccd68f11afa50d685"],["/archives/2022/12/page/2/index.html","0521631bdde5452efe31977f6159cea5"],["/archives/2022/index.html","26d10a30d67c54ee6392e1a50aaf164c"],["/archives/2022/page/2/index.html","749fba93ad0efee6903274060d3bb36c"],["/archives/2022/page/3/index.html","448ad3a3a99f8e251ae958a7cb11eaa3"],["/archives/2023/01/index.html","0019af278df05b18bb181b269d90de8f"],["/archives/2023/02/index.html","906513f2591287aaf45dcbf2c420dfaa"],["/archives/2023/03/index.html","e392d3557e6adaf38ab54cd525f1afac"],["/archives/2023/04/index.html","0c6bcab49ae3046d253d921099322cea"],["/archives/2023/05/index.html","45bb409d2f22e97d713e5437b5d081a7"],["/archives/2023/06/index.html","189403de4ed0b36ed9f7ca9dd294400f"],["/archives/2023/07/index.html","42a4edc9e93b2f65e901f4d474cf6f81"],["/archives/2023/08/index.html","5366551ab6536563ad313efe6a7864d9"],["/archives/2023/09/index.html","686dca811490df67ad9f66eb8af03924"],["/archives/2023/10/index.html","6966fcb5fb067418f227297aa252436c"],["/archives/2023/11/index.html","2ab3fa8bda54fed04d0309376e2b5484"],["/archives/2023/12/index.html","0c22c0bdb97cd3746e20b51bf3d9a84d"],["/archives/2023/index.html","47402c725a27764453a36884b4fde280"],["/archives/2023/page/2/index.html","09571654f489cd04eb88862b28da4ce3"],["/archives/2023/page/3/index.html","1ba08783de5315fad3aee368e83f6dc1"],["/archives/2024/01/index.html","4a53d15898b237bc4d5592125d8cc2ab"],["/archives/2024/index.html","9366501064946d4bf226bfbd11a51d55"],["/archives/index.html","96f818528986d2c6af1d588987672e36"],["/archives/page/2/index.html","9b3eae2624f26f55abd9e5d49c69e99c"],["/archives/page/3/index.html","b1ac75222c78b0ef81a056d1978f984d"],["/archives/page/4/index.html","516f83cabd402855c9b190784ec824b2"],["/archives/page/5/index.html","bbb41a0a7ab25ce40a15061e164a1796"],["/archives/page/6/index.html","cc8e7d5911478684de3834fac81633b9"],["/artitalk/index.html","064236a4a66da56b88b22c6b91dfdba6"],["/battle-beautiful/index.html","80469719ed669b8af0fd455c9841deae"],["/blur-effect/index.html","dddeeaf3f48a13024106ba647d4dbb7a"],["/butterfly-custom-tag/index.html","303e1d00a2ee9142218c93e90a0bbf7a"],["/butterfly-plugins-faq/index.html","d2738541fb497732f8fa6c8bd822c92c"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","a113e291be507cb3a8d77d84b9dc6a44"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","e80ba71395697fc3624874598ff3632c"],["/categories/announcement/index.html","bfddef572647f847a52a14d0f06334da"],["/categories/diary/index.html","0f9f56a712774d972f02db5a50244ddf"],["/categories/game-dev/game-engine/acg-creator/index.html","bf04823dcfa70094089faa07e7966a3c"],["/categories/game-dev/game-engine/index.html","46347119d85697c0b837685bf68600b9"],["/categories/game-dev/game-engine/lightvn/index.html","053d83975d3f71ce5a629959de3f6360"],["/categories/game-dev/game-engine/nvl-maker/index.html","4d6fea803b6c84810709cf4fdf45c6e6"],["/categories/game-dev/game-engine/page/2/index.html","821e66a9d502cde052d5c6787918e5e0"],["/categories/game-dev/game-engine/page/3/index.html","f351819122c6343af28b4bd694d97244"],["/categories/game-dev/game-engine/page/4/index.html","21fe5bf87e584ad5a7e9b9f40fe0bf17"],["/categories/game-dev/game-engine/renpy/index.html","849303007540b7ec43adc46705305232"],["/categories/game-dev/game-engine/renpy/page/2/index.html","4620b0bddc1ccafac5cd3acde8d306f1"],["/categories/game-dev/game-engine/renpy/page/3/index.html","1efca49570f66da2a9d3c7c977aa85b1"],["/categories/game-dev/game-engine/renpy/page/4/index.html","404638b7d1127531adaf411be4dff9ab"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","7438c9ef98f6501db3ea0db4a1361147"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","70f25282f5bc491a8f7246802bdafab1"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","9d67cd4c371a2e1cebf0703178a0899e"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","c65698a55793b40ab6cae43d9e751817"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","2d1f820038d1f315219e4ff488988f76"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","b0672b35bb23bc9e0e4320271e4f069a"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","b02dc29d99435c37a7c027d75a990686"],["/categories/game-dev/game-engine/rpgmaker/index.html","9c44882bdd3180635de460e8e83b17ed"],["/categories/game-dev/game-engine/suika2/index.html","cc38b5bb6f57f5798a098402554f3d22"],["/categories/game-dev/game-engine/tyranobuilder/index.html","aed612abee4107e93592beba873f193a"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","28dbf68cf6f632ab66b1dd43a83f2078"],["/categories/game-dev/game-engine/webgal/index.html","321a8e0f39b2b13fa6c857414be4425f"],["/categories/game-dev/index.html","57209c7831ef6a5900219e4d7575ea78"],["/categories/game-dev/page/2/index.html","7bf37cb375b935e40411c476d4fc112e"],["/categories/game-dev/page/3/index.html","ece8de5972c99dc351bc9c1c316a7c4f"],["/categories/game-dev/page/4/index.html","a6f002b8da55ec6545252b496842d025"],["/categories/hexo/index.html","29c189a1cab7fa023c805b3e9b1bf706"],["/categories/index.html","a3c64fdc1ea1da2524525f04c13233ce"],["/categories/material/index.html","5aaa37a01cb9cc9980b55d9ed96c9a74"],["/categories/update/index.html","8b0cc5b11505690a6b765d50c2606906"],["/change-according-to-real-time/index.html","9d33b11d1e7b56733aa32f7a7eb43872"],["/change-character-info/index.html","d7874b35c1456d2c13343462fafc505f"],["/change-title-after-first-time-viewing/index.html","6af23a43e323ff5dd2ab67fd4fd82685"],["/change-title-based-on-event/index.html","a4cbebed588b9f69afe8ff1f071a306d"],["/character-interaction/index.html","169457ec3fed0d26af7a5bd78621291a"],["/character-stats/index.html","0c6a28714313e2d0adcb42986c021aa5"],["/chatbot/index.html","1c7ca48f2afb1c191ad6bb8292cda046"],["/choice-time/index.html","5eee199b711842f00eba12287ce9dbaf"],["/comments/index.html","c04d8fae24d9b18cb17ec0124eff6e6a"],["/commission-info/index.html","f35eda550119b99dcbc766cf8eefb4e6"],["/count-login-number/index.html","ff749650a8c0c02490ea1a55662146f8"],["/create-button-anywhere/index.html","b49698751070dd9f431633bd1d63ddd7"],["/css/eurkon.css","f2490deda0324bf51c47bb7decf63b31"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","46f002a354c8c9f8d9b3393a9a25a737"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","50c716467acc081b107e4ffffd708180"],["/css/rightmenu.css","6574d38f33b51dfacd2ba212f93e9566"],["/css/siz.css","01ea16565fd1d83398d480625c2ae1f7"],["/css/swiper.css","87cddd95d399692712cb7b1fc0e4f1c8"],["/css/swiperstyle.css","872a90897f0379995cb23ad3b884c09e"],["/css/var.css","73f8aa2d0f08d2636536b1141f48be64"],["/ctc/index.html","820ef671e109c6d9e3ce0db409e3f3da"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","4f545d4c28afdd552df6f474ca79a2ca"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","ebf440db0dbc0b2b184023838c3e56c9"],["/custom-launcher/index.html","e74c68656e1887e6880db161a8f0ecae"],["/custom-loading-screen/index.html","b96981a161ec72bdb000933dffb12448"],["/custom-mouse/index.html","e630088dbd80a8333c3b47b9a92dba6b"],["/custom-music-room-screen/index.html","07dd7eead5331c3dae89a35329fbb891"],["/custom-music-room-screen2/index.html","4c6a7f23ecec35030f9be31d64a03a2c"],["/custom-nvl/index.html","486aab858615e4fa51d1d9bf0368918c"],["/custom-player/index.html","3be9fa6f6b4645809f730be8ae9008f9"],["/custom-preferences-screen/index.html","bc826a0de08da2ef0b3bc3b490f0eb41"],["/custom-say-screen/index.html","7f54012489a4fd0ca96573f9854e6859"],["/custom-title-screen/index.html","c183afc30609b417ae8aed3a9d132c9c"],["/define-npcs/index.html","1970d40dbd07979259f34fa46ba64005"],["/delete-save/index.html","977bc97d65616d258fc4e0b64bd2ba44"],["/dice-function/index.html","66ed7526dc3167c1e1206c10b44a2647"],["/disclaimer/index.html","2003305f7a15070fdd586d5b5820cb4c"],["/display-immediately-all-dialogues/index.html","d4c2302852611a773ca18832e5a17fa6"],["/display-real-time/index.html","fccf2e8d5e431390a264e0dc5511b7a2"],["/enter-name-screen/index.html","281ba2e6841f4113cbf5541ac600ff93"],["/export-game/index.html","4c77fcb3458b798ffb76ca4da961f6f1"],["/faq/index.html","db87950cbc906480d1749f8973a79c67"],["/friends/index.html","fbdb47a6fd4dfaa73e60d78c5265d258"],["/gallery-template-assets/index.html","ca211fceabf8b24568bd176b90cf52ee"],["/gallery-template-default-ver/index.html","6da7b5ccbe4fc5e55b0311a1954cb057"],["/gallery/index.html","890147d187f2bc79258db3bf3e5f5e04"],["/gallery/photo/bg/index.html","c09c76a799938ab2efdc0d733bd6791a"],["/gallery/photo/gui/index.html","c433bfb990c68c250743fd1b240a9704"],["/game-only-text/index.html","31a174120330bfb787a25545a59a5e32"],["/gui-017/index.html","3eebc665b956cdeece7dff962ebef106"],["/gui-vertical-002/index.html","801debc27b40ef5aaa5583f80f1b9dc7"],["/gui012/index.html","d318ff7b5cfff98dd3d7b61c326a4c20"],["/gui018/index.html","ff4de39e7392dcad6794bbcc47d5651d"],["/gui019/index.html","5f111124ce4cf16e440a295e6350408d"],["/gui020/index.html","31a06faa998a6f950b37d74c28e289d3"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","b4a0918c6616aa3630cc562ffd26c7ec"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","006b47b189f453b2e9b4a9e6f61ceeae"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","0f5defac7ad786569b5d037d70f587b2"],["/images-tip-function/index.html","ebcfa11569966ae736c1b9a87b84ecdf"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","a803a7afe721c0485529d230d29c881b"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","62408859006ae7d799f8f5d2451194b0"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","45ef1e9733a1e1deb5b01dfe06097574"],["/items-sprites-effect/index.html","7d95e59d738cc300b11417790408764d"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","b3571fd4225a4248e5a2f5501c92da46"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","e6866bd3d721dad870885aa8217a516f"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","68baf332df3bd318716061d2ae3a71b0"],["/link/index.html","9996760a6c2d4a8e656976f8575a25d0"],["/login-reward/index.html","86475d97d36ce27d500ac0df1cc55929"],["/make-butterfly-beautiful4/index.html","69229606cd926bc6284764376c5172b1"],["/map-puzzle-system/index.html","204777decd1e7edd71adba5204179c25"],["/maple-effect/index.html","3bea4c19d9c54df006d46c0a9c2b5de7"],["/memberships-2/index.html","a20746e1e33e613fe80a6c6c64bf63ed"],["/memberships/index.html","f2b996a953dd0cde74420edc3e813f7a"],["/multiple-language/index.html","e33056d106d12ea9d5fd63993f041037"],["/name-input-assets/index.html","86db4f713a5567a59eb5053b928f0902"],["/new-year-event-2023/index.html","5ca444d38a0e5d6a4e053510d9685396"],["/newsletter/index.html","bca5e7e67d7ff39d913810ddda810880"],["/nsfw-limited/index.html","4dcf465b9830631952aa426adc8ee126"],["/null/index.html","258dcb118101134c69f78f6f03b60c4f"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","e82bca715c6aa10316147be1f9b1630d"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","57e5a693f2a47e794b439ecaf1bfeee4"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","644e11e759f90130903f2fe927414f8d"],["/original/index.html","261801a16ef7be87a54d0cf0b139fbf8"],["/page/2/index.html","d1213c572316cf030b04dc02ade38e60"],["/page/3/index.html","e9b38128eaeeef567eb7f8fa0f3b7590"],["/page/4/index.html","90bcab246ed7082ec2bd8c7dc5dd898e"],["/page/5/index.html","bc0a0b03f77888f33bb7edf9208a46da"],["/page/6/index.html","41f9280a250152c58e5a8736d5b49b45"],["/point-pop-up-assets/index.html","cb6a0072182d797c5a437c5cbf577457"],["/pop-point/index.html","81fb150e4dd95c278f5ce916b4471ee5"],["/privacy-policy/index.html","397e33be854698c33372eb59522c2d8b"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","ca05d94e516838b0fa1d3a02a007b623"],["/random-number/index.html","534c51797b719a09735913442ebbb87f"],["/random.html","7deea3f2f45b75cc6005fcc31d56d937"],["/release-017/index.html","99b32f156d00d04ef351f0d4bd3172a1"],["/renpy-basic/index.html","a23959faf13fe5918ee3e0132bf872eb"],["/renpy-crash-glitch-effect/index.html","ed2ad2efd37b0e99b980f4df147f633e"],["/renpy-matrixcolor/index.html","fa4575c80e330a3b5ce9c7cf935a188a"],["/renpy-overlay/index.html","e4b4e0470fa73ce838631d833f6f940a"],["/renpy-review/index.html","ce2bf7cfffc22ae887a7d517ec58484c"],["/renpy-typing-effect/index.html","a9ae800c4e0d059ff90e65190121d35d"],["/rpgmaker-assets-menu/index.html","f734fbc517f59c8b284893ab37875dfa"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","3ea05def23018525bf846d0d4c9c29fa"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","ea7595710f613936baea6b35e2b5927d"],["/sakura-tree-background/index.html","608d2c1e540c39fe70ba8d2beac5577c"],["/selected-button-style/index.html","deb2c0f690585269b6847225c1cda276"],["/service-worker.js","5a0c8a3c620f9eb5b46a172294299045"],["/show-variable/index.html","78f87741e7aedebaa511af58314cc90e"],["/side-image/index.html","852290348504438f02ed7ac4f1acde4e"],["/snow-effect/index.html","f860dac53f4ecc147a9c49e15b2f201f"],["/speaking-animation/index.html","85cbf7ed4cc0784561af079d5fa9ddc2"],["/splashscreen/index.html","3ec9b5b443f65bf351a7499e9b2020bc"],["/suika2/index.html","754c4ae69f63d1229b4324f5fbbdbcc4"],["/sw-register.js","ec4849c0a3b79e524d853467abacdf66"],["/tags/Hexo-plugins/index.html","869fe914632852c6f78a43021a430fc8"],["/tags/Light-VN/index.html","18dd0f65abcfa8b8374f41f91135ae1e"],["/tags/acg-creator/index.html","ff07dd076e024ee4dee1bf84df2a9c56"],["/tags/ai/index.html","28d64464c33139dca50cf8955de6035f"],["/tags/butterfly-beauty-diary/index.html","b762437526cb44879f040e2c5d8dae60"],["/tags/custom-hexo-theme-butterfly/index.html","7fd5ec2ea2ff49bfc1fd1b53a1cf2e88"],["/tags/custom-renpy-title/index.html","04da71161f5b2fc8f5208436f80dc596"],["/tags/dialogue/index.html","afd82c4f699e4c704dd6089e42c1d8d4"],["/tags/effect/index.html","1691d9e477b970f3d0a8345a660a24d5"],["/tags/event/index.html","4dba39faa8d7af1a55eb60f4db45ddc6"],["/tags/hosting-own-website/index.html","aedaf56a565e1114e5360d0cf9f01326"],["/tags/index.html","dfe96b9c9278238d6426760550fcb7f9"],["/tags/itch-io/index.html","7ebe5b71b9f99efe4174a8ad78709b77"],["/tags/light-vn-update/index.html","eb3ccfcd5ab92fcdff7850685173d8e9"],["/tags/nvl-maker/index.html","43903ca4df04a2043d378c20edc8a785"],["/tags/player-related/index.html","64f89bfc5e0c275ee94ef4c01b4ec787"],["/tags/pro-tutorial/index.html","319189d1e781867c483a75e05f3cb64a"],["/tags/pro-tutorial/page/2/index.html","581d0f0d85c924c55b5786ab0f573f82"],["/tags/pro-tutorial/page/3/index.html","ff2425c164b9fc1387d3c6c5f4e40350"],["/tags/pro-tutorial/page/4/index.html","d0cb5986e8d79e6e1e4737d50262fa82"],["/tags/renpy/index.html","60654b8a097da861cef0ba953d6402ad"],["/tags/rpg-maker-custom-map/index.html","b2ab3970232c165f0adc6b1e5caab740"],["/tags/screen/index.html","fa6feb0075d10378a493f950b46153eb"],["/tags/special-function/index.html","2091c46f42bd55db1c2e54c88e8eafe0"],["/tags/suika2/index.html","81863ad84eff5e1a6e2addb776592f35"],["/tags/tyranobuilder/index.html","9610f927591d74205fc92865d878dbeb"],["/tags/ui-assets/index.html","0ff89c8c9ee108f02a84c78c1ad0863e"],["/tags/update/index.html","a9917e4d5eda06fd7592c84b2953f8db"],["/tags/upload-game/index.html","5014751c16f594ab61afe65b24a7e0e6"],["/tags/variable/index.html","ba5fdfea047f70c32ecebebeb932564e"],["/tags/visual-novel-maker/index.html","1f0a05cb3fb0f292e7d243a81fff2a8c"],["/tags/webgal/index.html","b203eb96c8510968dff41c60f4bcecef"],["/tags/封面製作/index.html","2e8c14516c9d57d27898926b74110a5e"],["/tags/背景素材/index.html","97d6f9fcae6d05c4601fd6c974b095c9"],["/tags/隨機功能/index.html","6c31d70ea4a7cc19ae504c614bd4d91d"],["/test123/index.html","ed509afbc571131f0f92d6ba27c3ca7b"],["/textbutton/index.html","27ed8e93f201fbeab503c3a3ea9ad4e7"],["/to-do-tutorial/index.html","964d8dc5135ced1da9553a5a6f23ba36"],["/tools/index.html","e281e328732c6b4eb2fd46d50737dc80"],["/tooltip-function/index.html","c160c2bc568347f9c2624f86ff0e21bf"],["/transfer-to-hexo/index.html","8201852103c4f91d84bb2b177c85d664"],["/tutorial-update-history/index.html","7a3f0c28740186f7f98bfe3ffe7a4c89"],["/tyrano-name/index.html","6ee7d15afa503b308dfa9bbb980839f6"],["/tyranobuilder/index.html","d8b83c5fd2ad582538ad348dcd8c436b"],["/undefined/index.html","a343cf9bf2d21e6964f9a0c11a6182d2"],["/update-20221211/index.html","07bfd90658d6b47326fe0176a992c81b"],["/update-20221218/index.html","667de30159cab165250939843ec65684"],["/upload-download-save/index.html","6432464a1cbba149bce6fbed5a396394"],["/upload-your-game-itch-io/index.html","fe917bf2b0e57ed259a36ec1ca1319cd"],["/use-list/index.html","bdecc9f38ca40f5a3e00913eeeda8550"],["/use-nvl-mode/index.html","42eb14bdfc52fd99b310a472a30fa763"],["/useimage/index.html","dc9cf449452afb8cbea8594ef69e4a82"],["/variable-change-image/index.html","931e9a47ed3c6f6e89587727b956248d"],["/variable/index.html","4065a784d97f6709c923b0f5eb1b49bc"],["/vibration-function/index.html","3b53be78ba635a98bf9a137686b743e2"],["/vnmaker/index.html","55130ffa39fb6aad02302e8d3f784d2d"],["/weather-effect-tutorial/index.html","ace4a05c87fc92aaa06ec1612567fc9e"],["/webgal/index.html","75c32dc456731a9fc0e22b0f6ee3a6bf"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
