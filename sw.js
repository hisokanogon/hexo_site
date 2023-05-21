/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","40bf4ee76fe8f86670020a1118e7ca75"],["/2player-battle-system/index.html","9da4dbfbb98a81e09a090b628bccd4f5"],["/404.html","7770a868012a68f8121d635406e49058"],["/about/index.html","d4c9bef588f78dccbc857ac85f123213"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","b45395e1fc8a6a5712c55ee55a2b2ae4"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","b059482bd3ba3d0e60ffdd3e7a59884f"],["/animated-title-main-menu/index.html","3b330ca066992495116f352bea4406a9"],["/archives/2022/05/index.html","5e8b899f80b097daba33f846092d94e8"],["/archives/2022/06/index.html","37dfb413dfc457dbdb78670e4abea9b7"],["/archives/2022/08/index.html","78f4c1a401ae69e7e1266f0b0745f832"],["/archives/2022/09/index.html","ab4bae18eca2c677a004b67e448f6cad"],["/archives/2022/10/index.html","0bdaa9ac7fe34ebec58fdcfb2e7df2fd"],["/archives/2022/11/index.html","f4e29372791054ed74c085f40ea4ed4c"],["/archives/2022/12/index.html","b243fd15f45549b168f9d90e4b84bc45"],["/archives/2022/12/page/2/index.html","5ef8faf807f2f476c268a501523b3434"],["/archives/2022/index.html","602e7dafdf184d091e647196a47df77b"],["/archives/2022/page/2/index.html","bd9a8adcf4db679f928d4b9c871ad871"],["/archives/2022/page/3/index.html","e01123c1aa58b2dc3ebe7654e99eaa55"],["/archives/2023/01/index.html","7da6060e398115ea39b61a2eb989ea51"],["/archives/2023/02/index.html","f3922248da3faf428510912933f51544"],["/archives/2023/03/index.html","10e11ccaf7ca2b57687c91c91d873b2a"],["/archives/2023/04/index.html","067465c916ee44698a45255e2a695cfb"],["/archives/2023/05/index.html","8c9eb2e59bfeeb3275d730c3ba1166cc"],["/archives/2023/index.html","71c41d3edcffc81fd35079891afcdb29"],["/archives/2023/page/2/index.html","de9e5a36168f41790ea410ef7022b88c"],["/archives/index.html","ccd38d2442fa97a0d8cb5095b4841d38"],["/archives/page/2/index.html","b82e658186c18cca4d9788b7943779b1"],["/archives/page/3/index.html","8f19f0b157fba369c302d1cd55500752"],["/archives/page/4/index.html","accae2cd0fb1ab63621206ec3031ba9f"],["/archives/page/5/index.html","0626e386b7e29bc46624e5424814b354"],["/artitalk/index.html","4e8504fc5aa77ffa7cf2880e91d1ef55"],["/battle-beautiful/index.html","a22118af605a197eaa0c22f58bf204b7"],["/blur-effect/index.html","d974d06ace7f64595d24ce22fa69d7da"],["/butterfly-custom-tag/index.html","c96ee2b5350ff87c0e30c6459c382823"],["/butterfly-plugins-faq/index.html","ff949fc2e8220c76eab4220cbef77b22"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","00e62ac043851e66161ba9c75178f3b6"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","05aff0d393f3db288c3128c97ebd5bc1"],["/categories/announcement/index.html","6822378b08411cc84c3170a6f2869e61"],["/categories/diary/index.html","e3e935fd057a874babe9408edc5cdb55"],["/categories/game-dev/game-engine/index.html","2f2c80b3fbc1e6694c8e2f081e966918"],["/categories/game-dev/game-engine/lightvn/index.html","eef306d905b7abe4746bd802b774ba54"],["/categories/game-dev/game-engine/nvl-maker/index.html","21ca9edef728cff2a2bca5e34d550d6e"],["/categories/game-dev/game-engine/page/2/index.html","03c2728b190c1707502e92885929538e"],["/categories/game-dev/game-engine/page/3/index.html","1aa2c79fa3339bd07d69efd3d0b40ad5"],["/categories/game-dev/game-engine/renpy/index.html","f76bf90877be2c5a80b1b9fecdd9ffe2"],["/categories/game-dev/game-engine/renpy/page/2/index.html","9ac8b7a3d573c6a3e989ba55de7254c9"],["/categories/game-dev/game-engine/renpy/page/3/index.html","69cb88bc7a834eb9198e3bceeb985c5d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","e5d4fcd0a74735818b377544e6612fd7"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","8c90f50a232c86b3d1f0f8df583ab203"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","ff8279579e48fdabc4901100eff44810"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","299bc3190531dea6d206670dbfbba350"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","34e51b467c973543d8de9f33048ceb8f"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","1a465a8da16c704dc29f3408ebcd5d26"],["/categories/game-dev/game-engine/rpgmaker/index.html","2525342370fb21640d848e1920fc06bf"],["/categories/game-dev/game-engine/tyranobuilder/index.html","f471daca908d2f27f5efc78e2e197b0c"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","f9985f3ecab3fbc542cb8b42fb1ca1af"],["/categories/game-dev/index.html","56bfabccffdb9d3044cee95f0c9672b7"],["/categories/game-dev/page/2/index.html","423c1b14e6059c2b0c18558e2a35fc7d"],["/categories/game-dev/page/3/index.html","53f075eed79002d4ea71852333681b45"],["/categories/hexo/index.html","abf67d06c65e1109f628ce176fc04d57"],["/categories/index.html","905be76c4f90e3fa6c69ef313817c50a"],["/categories/material/index.html","87cbd66a444f904f40bb48eb935fe066"],["/categories/update/index.html","db7e7e5a7960d259d527646dbcbeac27"],["/change-according-to-real-time/index.html","b5e5ae6b10396208949cc016b60429d7"],["/change-title-after-first-time-viewing/index.html","29d55a8d10697af3bd1590e44617dc03"],["/change-title-based-on-event/index.html","6455b80d55720b46ecd16a66175bb048"],["/character-stats/index.html","8d157e52cd347d36723f1104bd705ac1"],["/chatbot/index.html","e9c657294a848c4cc88b30be82b8a42f"],["/comments/index.html","4071b76420263a11d09bf61ba27f8da7"],["/create-button-anywhere/index.html","abbfd8854adcc6ccdea85f6d8f410d57"],["/css/eurkon.css","c42bf7c5ba722eb6d02f0b3205cfe132"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","84e28ef3cf965603f2e89628d442f490"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f1c3cfc1aae1d351cfc2ca0fba577685"],["/css/rightmenu.css","b7c4d1cbfb7ec35c055bec27aacc6429"],["/css/siz.css","cc8729c4790d3c018fdaf64830bb3321"],["/css/swiper.css","bdd72df24850777b0a06c996bd05af53"],["/css/swiperstyle.css","2b93234fd9fda8ed682c2f22ac7e5d27"],["/css/var.css","9c0ba5458976e1bacf34610444421be7"],["/ctc/index.html","35cba08e2d7a7c7dc466c1fd6ac76171"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","7ea41bbb34cbf8816245c4b7c8abb45e"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","1c1c4fb0237208570e3636021df6eade"],["/custom-loading-screen/index.html","514f5756c1196ce8534a10efc43f73f1"],["/custom-mouse/index.html","aa91bef38bfdbf0b08948348c7d634d3"],["/custom-music-room-screen/index.html","0b5d044d0d33305ff78a6fa7544a9c48"],["/custom-music-room-screen2/index.html","51f37d80876bb53433d33909d74ac654"],["/custom-nvl/index.html","c9cc3c97d3f7fbba63625f8b3692ef70"],["/custom-player/index.html","c67fec69df06893fc31c26b0b5b62c67"],["/custom-preferences-screen/index.html","4853082dff9404a070a359ae54cd35e1"],["/custom-say-screen/index.html","33ffdc836f640f9cac3de8cca98ee906"],["/custom-title-screen/index.html","d819b717a860afcdbcbcef74ec83f8a4"],["/define-npcs/index.html","a43c33e5556149841c51317223b8da5f"],["/dice-function/index.html","76bae76373fefe6ee06ad3d589fc5857"],["/disclaimer/index.html","db132462b127e45d8c0c04490b80d76b"],["/export-game/index.html","212edb11cf83a8b36c213b0962bbc7c6"],["/friends/index.html","b1b301241a9dfdb6ce3398484cf7c7b3"],["/gallery/index.html","46a5ef579bee0362f884be1c9353f016"],["/gallery/photo/bg/index.html","aaec73b093fe179284ff9a7dd2970812"],["/gallery/photo/gui/index.html","436c083a23cdce69c36be864785b4788"],["/game-only-text/index.html","b13e778df456715af4bca45d54145d13"],["/gui-017/index.html","f685a482cbebbb639858e8d11544a152"],["/gui-vertical-002/index.html","8da86a04b5a54db024d73ae641d66c1a"],["/gui012/index.html","a6bd9e0bcd8ed80600e57f603f4a3bec"],["/gui018/index.html","5d5ec546655e0fb073f7e3f8de2a69ad"],["/gui019/index.html","6545d4081085d692fa180001f33e379a"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","acd80ce7c85e1333eaa87f222a9df7c8"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","b210c6cc7a0e0e33dac99749987d4551"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","76abbf453864a14f9e656be550a6d149"],["/images-tip-function/index.html","3abb48e47ccef838c9c647e3b497a174"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","83f4e416da21af7a7f2a7624b6bedc79"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","6d784790a7c91c081dcf736ea3e854cb"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","10bdd53df75cc138dd9366851de04329"],["/items-sprites-effect/index.html","191dabd6e843c476fab5452481a811c7"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","8adb3e549dece8f640cc1053dae8c25a"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","6af80a3ec1e257593222bb47ec7ce2f8"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","ac04813e13bd70f94a27f2e26c459264"],["/link/index.html","284d6a107e52764698e552b0127668ba"],["/make-butterfly-beautiful4/index.html","83b3ae801ecd46c2b554a95bf55647c4"],["/map-puzzle-system/index.html","dbf6fc2364a601d6a8fb55d7a4a1ed58"],["/maple-effect/index.html","2c7c552ff21ddeb530d03ed45abba569"],["/memberships-2/index.html","05873daef9637f33eaa5fd570778f698"],["/memberships/index.html","dee3408cb9984d234ad07e60a29e62b7"],["/multiple-language/index.html","166bebed6b9d0a40e39dc8de3cd51c69"],["/new-year-event-2023/index.html","39e1e156bcd8f36ffe896868393e4c15"],["/newsletter/index.html","ab99bd91f07e5f725af9a34cee1cc7ae"],["/null/index.html","6c33d21f4df71be43281652e0f325c07"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","dc05f6a4e05678e1f0eaf3df3d7c7adb"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","1d7f5363c51790d31effb0104f91f399"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","7574f17ca879cbe9956106284b18a718"],["/original/index.html","fcbdd73c4efa1ad2690b63cde7b38090"],["/page/2/index.html","ba2dd97358bbfdad360f3a504f2f0ae4"],["/page/3/index.html","7e54677f13865c4ecbda4b414d29e647"],["/page/4/index.html","f8232b09c8e8e741f30ca69a9ea8a22e"],["/page/5/index.html","4b0e52e7b06ae4ce34d6719854969e24"],["/pop-point/index.html","7f6037fec3221d71d7016972ae76eff3"],["/privacy-policy/index.html","6bced095db0e8661e826bb66aff21f71"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","03cde3bd455ccd0c4f0589598ae43c87"],["/random-number/index.html","0ec85bc04fdf461386b4ea41b269854d"],["/random.html","7ac36ca880e196c6bbfd11a1cae75312"],["/release-017/index.html","b328cbfff6e7060fc9f0cc8ae844388f"],["/renpy-basic/index.html","2a9157e8c18bf6b654d26fdfa5269a5f"],["/renpy-crash-glitch-effect/index.html","fccb5890631cb0093cbfaf7e1031cc75"],["/renpy-matrixcolor/index.html","8ccb14b81e9adacad2c8a34a1877474d"],["/renpy-overlay/index.html","0c6b3883cab8c86dba6c3b4def894fbe"],["/renpy-review/index.html","e5552ded1621ac472e09ebf3922dfaa2"],["/renpy-typing-effect/index.html","ad72d0327f27518e717af87f0fc33f39"],["/rpgmaker-assets-menu/index.html","fb2e0c90d81ff19bad80eedf76d5f88f"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","8590840dd6eb85a78d31c576cdd8d68c"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","d348b82752cabdbf988fa8d3e6052c8e"],["/sakura-tree-background/index.html","4208ab323952338437ece1668a671256"],["/show-variable/index.html","3da8df6e5b0e7beb4f620a289ae10da5"],["/side-image/index.html","3c0c99d6e17f674ea8aee0414d302771"],["/snow-effect/index.html","e884ab33f6a7797fba9beafc8a22ed63"],["/speaking-animation/index.html","fd04f9a7b6efa4ccd82cac8aebdb9b28"],["/splashscreen/index.html","64554f08ed8c539051d8e2adae0d2524"],["/sw-register.js","6728ffe1809e67a2837cb488619c78c1"],["/tags/Hexo-plugins/index.html","61d4f2eda90a460e4a7c11ae60b8183b"],["/tags/Light-VN/index.html","7cfec0eed1b9a19e4f6eb04ca512ac8c"],["/tags/ai/index.html","8f057748bc000ec4dee8bf6b210e3870"],["/tags/butterfly-beauty-diary/index.html","2040a44f6dc52284139cc56b0c75345b"],["/tags/commision/index.html","e242b5d9f2f7cc717f29bc529288b8e3"],["/tags/custom-hexo-theme-butterfly/index.html","d248fb8f827d67d3a48a00c19d22c61a"],["/tags/custom-renpy-title/index.html","0d8c759da12c65d7aba4f3b953c4615c"],["/tags/dialogue/index.html","8e3cb37fc1359131d080e8dfc174de64"],["/tags/effect/index.html","54aa34fa19e649762e530c48b7e2745b"],["/tags/event/index.html","440ea9259a88174130a640349770d548"],["/tags/hosting-own-website/index.html","584534ee1af6c25d700fcde704ba6d8b"],["/tags/index.html","37ed76e978901f16e4ec519d5fdfe526"],["/tags/itch-io/index.html","7669c45d727c6a3cfb552bba34ba41b7"],["/tags/light-vn-update/index.html","06663fa553f0c92750006875eb879ea9"],["/tags/nvl-maker/index.html","19ef20fbe523c02a56f18d5025f3ee4c"],["/tags/player-related/index.html","2cad2d8e5b42c3e5408a05705405b6d2"],["/tags/pro-tutorial/index.html","0312424028cca556ee8a2bd7b44df3b1"],["/tags/pro-tutorial/page/2/index.html","d8af9bbc331674781eabc80fdde14d8a"],["/tags/pro-tutorial/page/3/index.html","c672bd174c96fb130a362e62f7706017"],["/tags/renpy/index.html","889b52c5ccd0c7e6e27370c6e07c281b"],["/tags/rpg-maker-custom-map/index.html","2b522a06dc8d1ed6884a1a429b6bf258"],["/tags/screen/index.html","bb916d9536d63ea5f6794d2f7ce49176"],["/tags/special-function/index.html","f9239db96889d637685e945deb67d232"],["/tags/tyranobuilder/index.html","baf4242f2afd298d3a35859f85042890"],["/tags/ui-assets/index.html","416124554b3d4b87a727acc05fb457fe"],["/tags/update/index.html","2b1685bc5ce69802e6f650ae574e89e6"],["/tags/upload-game/index.html","ce7e9016589b234f6415bc212faf9d0d"],["/tags/variable/index.html","76da3bb967b9aff0944a4dd6de325619"],["/tags/visual-novel-maker/index.html","79b33b2b8da1c9826a9ecb6203431b7d"],["/tags/封面製作/index.html","00e7db7b5059c3a9b3106fcc40cbeae3"],["/tags/背景素材/index.html","4b74aa4b4362bca7b26786d545fb1b79"],["/tags/隨機功能/index.html","e2e8616113d002f88bbaa0c906161443"],["/test123/index.html","463ca9aee0caff279a39a6dec845d3b2"],["/textbutton/index.html","704da22008a39fc329352ab6ea823f51"],["/to-do-tutorial/index.html","9923485082e6f4b6917b22fc5817f0ce"],["/tools/index.html","dd86e9e24416af72322d5c00e591ef13"],["/transfer-to-hexo/index.html","54aaf03bb8ce681502e4c4f0f292ca79"],["/tutorial-update-history/index.html","3bc4facddb7690276ef5e907046f2cc4"],["/tyrano-name/index.html","ad7114e79c875a3d8b72370a425b0943"],["/tyranobuilder/index.html","e09a29988a4356fca73a650fbc3f17ec"],["/undefined/index.html","0fa32b222b11f18db398499bcb288ad5"],["/update-20221211/index.html","3b506efefbf9248d1ca676e94252107a"],["/update-20221218/index.html","926e6f567d9e7583d1956b1513023b57"],["/upload-your-game-itch-io/index.html","e170da6157848fc4167e539b17f0bed9"],["/use-list/index.html","eb82d5fede71e24166ab8768162e9ed7"],["/use-nvl-mode/index.html","3949013c2be7a988a3ba9e8bdcca9f36"],["/useimage/index.html","3e09f42fab2b648406a762a0bc818252"],["/variable/index.html","406a258e84df320612d3fb1a613b690c"],["/vnmaker/index.html","99407dc8effd65fd00b36d85b3c0f3da"],["/weather-effect-tutorial/index.html","905d68acaafb57b1b34c1990f2859008"]];
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
