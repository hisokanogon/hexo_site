/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","10e4e1d89d6d0f7ddbd23270b088e0c4"],["/2player-battle-system/index.html","d1eb322c0a411ee4d23123684762d7ee"],["/404.html","4ec23a7f08d39631187ab6b5a8092439"],["/about/index.html","5cf0b02659b9dd64ebeeff7adc3aad34"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","e63a8ba4fa0c5ed091778cc2ffd3797b"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","e2a5d4f1011647b2cb34f8d7121ebd56"],["/animated-title-main-menu/index.html","72e816884758a2172f26cefe9838de76"],["/archives/2022/05/index.html","bebf752237f3ae7201bda55fd07c3a67"],["/archives/2022/06/index.html","d28d1e06d78b582edae0f3701dc76933"],["/archives/2022/08/index.html","5ec9dfc5f79497a0b13b5c61c2c052f7"],["/archives/2022/09/index.html","470e18ca9994b2c247fd9ebedaf53c35"],["/archives/2022/10/index.html","ea611effe3c1c9a746b6ff3bd6db2d2c"],["/archives/2022/11/index.html","508c673547b87e79bd3d603cad5fd42e"],["/archives/2022/12/index.html","875ac21be6d03767df02d38f9e064fff"],["/archives/2022/12/page/2/index.html","d38156bd15eedd6bdb20111ebc2a91e2"],["/archives/2022/index.html","6a085dbe00a0c6505c75ac01e4ea9c10"],["/archives/2022/page/2/index.html","1bbde8141bf2cc61b9bbb15b42295bdb"],["/archives/2022/page/3/index.html","9de99065779817f02ae411a59936e886"],["/archives/2023/01/index.html","19ddf366c9f3c002dc4b4b45809afa10"],["/archives/2023/02/index.html","43297631b2ad8bee4068a9980a3ded44"],["/archives/2023/03/index.html","200a3dd2cd727475188d365c52c01bfb"],["/archives/2023/04/index.html","76aebef36fb9923dabc98024327d6ea2"],["/archives/2023/05/index.html","7fdd6c4141b03be9f41553087f6c9f24"],["/archives/2023/index.html","fd3ac78196bebf98e38435d08a92a46b"],["/archives/2023/page/2/index.html","38f5fcafe62ed618742f286fa078d05a"],["/archives/index.html","ac27289d1878e336acac2da54bb2564e"],["/archives/page/2/index.html","3d5b0930288a637c6af7868798d45f57"],["/archives/page/3/index.html","446a6e0a284c6ede99b9143fc6f67aaf"],["/archives/page/4/index.html","3466a15526c51d05bbe873138b81a0f5"],["/archives/page/5/index.html","822a7b5aba984dcf070928fd47eca714"],["/artitalk/index.html","5019670838098580d012253b92a00380"],["/battle-beautiful/index.html","72910adb18f3423b1f40052d3b5b0415"],["/blur-effect/index.html","5b5935ea3e48a4aa2152534365d5d383"],["/butterfly-custom-tag/index.html","be24cdbe4d3c8dfe952020b61392d26b"],["/butterfly-plugins-faq/index.html","fca91a5e0144c17c3146418191276ce2"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","17a0b6f591f5f370942a84a66a46d550"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","024a8d21b4bc9ea3794158bd3579444e"],["/categories/announcement/index.html","0032e9754a126c049833532b4b2f6c22"],["/categories/diary/index.html","3046da5515d6cd1035df5d40047d9a7c"],["/categories/game-dev/game-engine/index.html","d402d13585bd774877d15406fe3552b5"],["/categories/game-dev/game-engine/lightvn/index.html","5d9bb8f50c0f1fe8272e2e0c007e6201"],["/categories/game-dev/game-engine/nvl-maker/index.html","290288cf86df0b4190e70ce832790402"],["/categories/game-dev/game-engine/page/2/index.html","d05eef1ed355b45f1ba6a0758a692f89"],["/categories/game-dev/game-engine/page/3/index.html","9c3d11d234526cca48aee5a25777a5eb"],["/categories/game-dev/game-engine/renpy/index.html","94f626c39f06f4b373aa7699028a83a1"],["/categories/game-dev/game-engine/renpy/page/2/index.html","23b1bd272f0dc0f1ae0368c032b2cfbc"],["/categories/game-dev/game-engine/renpy/page/3/index.html","cd2e18e0e75025f455728e9e0185118d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","990b9e2ac565a2ee6acd87fdc4946bae"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","28584c0bd1e86a0395d4fe2f9c4bcb7c"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","578a33c867346836ef8e35c943bf7a0c"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","6f7c13e542c1f4cfc3dca23e16cbb29d"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","a79207cea5fdb6b39a1c7dbc44900848"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","6200e3a1373467d7718db4cc4e6d5e73"],["/categories/game-dev/game-engine/rpgmaker/index.html","c816d2375ae093cf5c9da823e0ea7123"],["/categories/game-dev/game-engine/tyranobuilder/index.html","7597fafe09d92bed7cdfd5786a4f9e9e"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","20b3c1710832c9a7e21f1474b0f8b230"],["/categories/game-dev/index.html","cd64adf4d15545738b26db6087adea7f"],["/categories/game-dev/page/2/index.html","d4f54b4dc67a766d39f69b41fa8be18a"],["/categories/game-dev/page/3/index.html","ed204e209d14fe0e43c215fa01ca9598"],["/categories/hexo/index.html","3ba52b62d1e32c29ed355a09f033a1c3"],["/categories/index.html","0e885690769bef76e47c8b2dc077fbf7"],["/categories/material/index.html","9efcc5aa66048419638a3e8fd9e70672"],["/categories/update/index.html","f7350001b3b95a30ad689081291faaff"],["/change-according-to-real-time/index.html","46210aa028a25ddccc259153da9547ab"],["/change-title-after-first-time-viewing/index.html","79d61b3dee3e88b76df7537964d3023a"],["/change-title-based-on-event/index.html","891231b64698275481c4c8a19aa1930e"],["/character-stats/index.html","61c197a533ea9f04ca1086b34918374d"],["/chatbot/index.html","7532088cc69b84eaf0822824f859edd2"],["/comments/index.html","00517c4784766c62491b201b15bfbd2c"],["/create-button-anywhere/index.html","74dfc03c7f0918e5b6f7aa19e2d5ebe3"],["/css/eurkon.css","03418191f7835e02217b11683f075757"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","6fcbdd6679214bd483442706dbf91444"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","2d53cb75d287832173539666a856cc27"],["/css/rightmenu.css","3239c3a08e94f33cf6ae86ff3976e4ed"],["/css/siz.css","556e6e8e96ef611c6fb12a3b521c0433"],["/css/swiper.css","9aa34ec8d23f04d170d8d0593a0b775a"],["/css/swiperstyle.css","8828c40d9ffaa3a9d195464fe0b78ee4"],["/css/var.css","2cc98e5e5a9b6007a7fc8b9f1c3ae62d"],["/ctc/index.html","6de24ed70a0e009276f823b019008510"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","0b696cce34c0ced979ebb334975259b5"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","1c6b38bac1e5674f10ac670906f352cf"],["/custom-loading-screen/index.html","05e876b9ac7b5362b3d9ddb09fb31c0e"],["/custom-mouse/index.html","1fe94c8b65429a529ec3134b9c12e841"],["/custom-music-room-screen/index.html","f0fefe512f568af4f0af2caec95464c6"],["/custom-music-room-screen2/index.html","e7f842ceda66350140132b4c413ae28e"],["/custom-nvl/index.html","1f4d6c83a58d2554bc6145991c1c210f"],["/custom-player/index.html","0dd357faab53ae8b0788d9eee28611e8"],["/custom-preferences-screen/index.html","cdc4def5b5fa78b0921c08f08b95490a"],["/custom-say-screen/index.html","ae790155893f316a7a1e586f732be9fb"],["/custom-title-screen/index.html","0d0086ae86432f0b9efaee218521c089"],["/define-npcs/index.html","ae14419ded95455af66b8fb59c7951b6"],["/dice-function/index.html","855b314fb82a5b5bfd8d7072168c3738"],["/disclaimer/index.html","47dc5b9d4fb69ca102f1f704fc4b0cbf"],["/export-game/index.html","3c7c06c01ea04aafc210778c39cdcf47"],["/friends/index.html","6c734187b541f7441826679bd6a36859"],["/gallery/index.html","afca278cd40e336a38311b8f16732245"],["/gallery/photo/bg/index.html","4e7690be652b132e11bbcd93688d0af2"],["/gallery/photo/gui/index.html","299e16098db412775ba2be41a6cca478"],["/game-only-text/index.html","6329ddcae9cadf6841938e9fc80364c0"],["/gui-017/index.html","3a49afcc18792d46cc849223902a337f"],["/gui-vertical-002/index.html","e294113acf6a78851d1302752c1e34e0"],["/gui012/index.html","736dd36d47f330678e271672320104a1"],["/gui018/index.html","ef9dec94fc5c1dc57c9ca3a9044c814a"],["/gui019/index.html","20845ef9d912cf11b1ef93bdede75a1a"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","433e32a1a2e44774088d21ede35639bd"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","0efe42462a9c93845ff7636bad4497a5"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","4ff2f9a0e7ef899116a6e96d2203670b"],["/images-tip-function/index.html","7d5e5ed9a44de31e88a927dde8889d08"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","79808c6def672f67f1440b802f5395ac"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","99a03f1fecb0c7021f8178edf3c4baa7"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","43cc1d04f5b6d4302838fbb76bdade97"],["/items-sprites-effect/index.html","208ea95a5299ed458be088e6469116d8"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","f7c0508b1e11c03567d369fe6ac62e16"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","304427dc94e68866d7b8f51225d8ed6e"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","94793dec0cc00b9c1ae6dac3a79349d3"],["/link/index.html","6e8a8ebeaa0cbb3accf0def0bd09c2ba"],["/make-butterfly-beautiful4/index.html","e242c8d5d64f4c6ef6182e5694ff1213"],["/map-puzzle-system/index.html","a81796a2bb283709bb512f78ef93e975"],["/maple-effect/index.html","86c58180dd8342e3c8fdcf237ba6dba4"],["/memberships-2/index.html","799c34836fb2c35cfacae2443e76c31b"],["/memberships/index.html","6736e91d63e6e283ca83ea27a3adb25d"],["/multiple-language/index.html","c51bbf3bc10691172214c6ed5b048c0a"],["/new-year-event-2023/index.html","6c504ec62ea442464864b422fd94e9f3"],["/newsletter/index.html","8dc71db743a48cccb17608914faa6663"],["/null/index.html","08b2f06d6dadf64dfb3fb406fdd199fc"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","a3406155e81e06491b0ae2232431f5a1"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","d0527f1c6528975a20325b46daa5bd89"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","844657eb40ef428849c0dae9779be0e7"],["/original/index.html","5831b253154d3229f8ff7b19cd45792a"],["/page/2/index.html","de4e8e1a97d335addc22f400f0e7d53c"],["/page/3/index.html","3e3a8ca8a09804b65637fb73668e5d06"],["/page/4/index.html","d18b89df3852d2935d230d191a82e737"],["/page/5/index.html","8b7bc590baf84f91254072c4f814ea1f"],["/pop-point/index.html","1f65a0a3aabb5d16275705b05688116e"],["/privacy-policy/index.html","6952f7302b14bb43284f89712b1a27d4"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","780e4cf6229280bf4dd79b41f6f9ee15"],["/random-number/index.html","9925a30ec992216b60d11b99979e02ff"],["/random.html","ead90584863b9ae1c6d12f492b0c21d8"],["/release-017/index.html","f9908e886a2aa84ad54dcd05949fbd3e"],["/renpy-basic/index.html","a9c74cafec8e7ec24b45ab8236e0d80c"],["/renpy-crash-glitch-effect/index.html","f78af23bf014e131146d56afc46f999d"],["/renpy-matrixcolor/index.html","b5b38ddd6a1b0342ad26cec190d503ae"],["/renpy-overlay/index.html","69478005761ab2aaca40929c10f8d64c"],["/renpy-review/index.html","9288d295e5e2a1e0a0afd7e3aaf49840"],["/renpy-typing-effect/index.html","0d2ab2e7c34d0f2b30045d5fc9668ef0"],["/rpgmaker-assets-menu/index.html","882c0adf16eb721d06de7ce9feade0de"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","5782a57d634a64ede7560f720a20eda9"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","a1f8e0cac8b05270a74c68804a3cdc9c"],["/sakura-tree-background/index.html","08770fe1eef5a67e7cb1c36b9bd1d85f"],["/service-worker.js","c82281e30077f97a67582f2e286471f2"],["/show-variable/index.html","470743369cbbafc4526cfe3acd423c46"],["/side-image/index.html","0ce5efa5b9e5d0008974e04ce9a24533"],["/snow-effect/index.html","d36d927b87d48ece56dc58e82b2ae220"],["/speaking-animation/index.html","b7db8b42a91fe3fcee2bd0a6245e1fec"],["/splashscreen/index.html","727ef0314f23d2d9cda50d42727f5f72"],["/sw-register.js","d2bc45cdb2205de22e0d8b7ebeb02a14"],["/tags/Hexo-plugins/index.html","cf4882217d3d10da1df0ac4ef693f95b"],["/tags/Light-VN/index.html","f5c10ac273d7d235622d881e6bc0954e"],["/tags/ai/index.html","0cb32c51d4450f87b0e3969dcc71a540"],["/tags/butterfly-beauty-diary/index.html","e56bc3d6efdfa266c0a98f4d6b93346d"],["/tags/commision/index.html","712d4779d07532201b96a80d0e605340"],["/tags/custom-hexo-theme-butterfly/index.html","11ae397184f5c90afea75f8b13e4d027"],["/tags/custom-renpy-title/index.html","fb4e4f07c499ed3d169d599084799d41"],["/tags/dialogue/index.html","67da09c1dcb39ae74a980a858d9bf945"],["/tags/effect/index.html","7b2ed86be3c0412eb9c8a2357425fc36"],["/tags/event/index.html","abde082786ee84055b575b59318de07f"],["/tags/hosting-own-website/index.html","ac8750e4107a8deea0449e045db4b851"],["/tags/index.html","1b509eb62a566c270e79818ebca24ffa"],["/tags/itch-io/index.html","b9e2868622ade7c9eb028beabd74cca7"],["/tags/light-vn-update/index.html","c1d75328d6aa883b47795eb2b18c90d7"],["/tags/nvl-maker/index.html","4c6469827057d12760109842f6061927"],["/tags/player-related/index.html","edfefc6778a44a76b4df28cf93579b8f"],["/tags/pro-tutorial/index.html","58a72fc61d105d9853a2b171a10d1ef7"],["/tags/pro-tutorial/page/2/index.html","8ea35df103addbdb93ed77bc7bc6763d"],["/tags/pro-tutorial/page/3/index.html","2ac28f74bfb1e29c20c7074bb0e3777a"],["/tags/renpy/index.html","dc94a2287dee6fd01601b7df776cf24a"],["/tags/rpg-maker-custom-map/index.html","b7c426533ff1c9eb11a38ad3e53c5d8a"],["/tags/screen/index.html","90dd36bb5e596d5e75ea3477fdbca5b4"],["/tags/special-function/index.html","b4d3d51f1e229f608ba0682d7f9fe143"],["/tags/tyranobuilder/index.html","cd28540890416dac463829e082582803"],["/tags/ui-assets/index.html","8ec04fdb7ed071b4baee04977f1fcec8"],["/tags/update/index.html","95e318ee8c1cab0c63b36aba7f336029"],["/tags/upload-game/index.html","00f18f1265425b41202b0eaa15398e1a"],["/tags/variable/index.html","8b6c23f077c308707147a4fcc3781149"],["/tags/visual-novel-maker/index.html","9ff2a3a9749296b60ad83189b906984b"],["/tags/封面製作/index.html","2b28aa37428ade0a86e1335c4bfa20aa"],["/tags/背景素材/index.html","a8b3ec02f6e0a322bc1fb335323c142b"],["/tags/隨機功能/index.html","e57c95f66d05c077ef0ce0032b7cd486"],["/test123/index.html","4c6db0a13a78f47445a524bf6c4e4226"],["/textbutton/index.html","621d100a19e7302258ff07a6fef7d537"],["/to-do-tutorial/index.html","a3e085cb5cc53d06375f510b51acd883"],["/tools/index.html","d7174fa144e608b7bd227f8f3e842615"],["/transfer-to-hexo/index.html","61a72dcb33fa332566e0b4409654c20a"],["/tutorial-update-history/index.html","51a8d57e6b2048b4cf1a5370ce493731"],["/tyrano-name/index.html","195d0e0a5b014300749d995878f1ac90"],["/tyranobuilder/index.html","6019309df6ef2e097fcc0cced787d740"],["/undefined/index.html","b1f8c304bf13d16f0c012fa7ddb92d80"],["/update-20221211/index.html","795195a415c83d5788c710e795f96914"],["/update-20221218/index.html","c17d42f64dc4f6f2cdbea53f82db46b4"],["/upload-your-game-itch-io/index.html","7480f1eb2dd92388a268642d70d1b699"],["/use-list/index.html","0a15c7e88e710c0f404dfacd9be750b5"],["/use-nvl-mode/index.html","00a7855915d724b59547216ffb1882c1"],["/useimage/index.html","7d4262e061fbefcb04871a9bf8ce964a"],["/variable/index.html","b5cd7b2c43c665e2e2fa93c455c3dc44"],["/vnmaker/index.html","85efd4026aca5942fb2f56dfa429ce7e"],["/weather-effect-tutorial/index.html","e602047aa993e49b899ad67e5e8cb855"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
