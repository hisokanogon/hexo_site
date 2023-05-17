/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","bf851ee3de7bac8e8aabe4ae4fbd3dc4"],["/2player-battle-system/index.html","c0f16c4dd27372213c7481924532e538"],["/404.html","b633c126e1b6496613bc74fb95e95d96"],["/about/index.html","92a069342913a27555b3ab38e1e1f15b"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","b7cebca1d9c927e58a0fb9c8950a00b8"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","0aceba63cfbed1bd361ed077c6d05d48"],["/animated-title-main-menu/index.html","d380f66a213654747a43f87721f08138"],["/archives/2022/05/index.html","716dd297d6535a202b1073bd94a0cb96"],["/archives/2022/06/index.html","a68ae7d97e322b994b6b8af03bb76adf"],["/archives/2022/08/index.html","adf32d4536f490832fb9af28871f9350"],["/archives/2022/09/index.html","6ad1bf94e310019e3edcf3f808f034f2"],["/archives/2022/10/index.html","419b082a6d1a536f3f4ccca5358709f4"],["/archives/2022/11/index.html","fdd85ff38c3504ea0de149764cb0fb5e"],["/archives/2022/12/index.html","f4ceb702ee21455af11b38572557941e"],["/archives/2022/12/page/2/index.html","b1a4df72fb3cee07b5f8a691a4a92622"],["/archives/2022/index.html","39203361c191468309ff33333d3ed59b"],["/archives/2022/page/2/index.html","e35557fbb4ddc4c4accc67b0f314a794"],["/archives/2022/page/3/index.html","e840ca5f20962820569f9fe2954d1db2"],["/archives/2023/01/index.html","5c24145fa65cc7dd9e28a7a354aadb17"],["/archives/2023/02/index.html","b987e76aa0d543a0d8a497fcc9e31ceb"],["/archives/2023/03/index.html","5e22b885bc09965fc770947366594ddc"],["/archives/2023/04/index.html","4dfeb65b8d667714bb9adee1169c068b"],["/archives/2023/05/index.html","7ccf4f2fd2dfb19824f2f522c1970aef"],["/archives/2023/index.html","ac915440031e3116ab87c26e5ac8eb65"],["/archives/2023/page/2/index.html","d739d0e89dc3331df6b7951f1b6d505d"],["/archives/index.html","8c89b2647771281dc694d3827ab2610f"],["/archives/page/2/index.html","a18cd727c4f89f6034f7edb6464c4809"],["/archives/page/3/index.html","24322e942b656eb6b32b1da84bbe8a3b"],["/archives/page/4/index.html","2b85574508468b60ce9ad0a0e97ea558"],["/archives/page/5/index.html","1fb74c05aee388ff0bd66c2090607144"],["/artitalk/index.html","eac465d2b9eb6c70d49db1cf294fa713"],["/battle-beautiful/index.html","97c713eab1ae442cac4492c411e49348"],["/blur-effect/index.html","9f933eb7cf9ff3f001b094ee0778ad13"],["/butterfly-custom-tag/index.html","2054b052a386da282f85cd1c6f623cc1"],["/butterfly-plugins-faq/index.html","a67237344e1ff50492823fcc31c324df"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","7946184a95471c013e8bca85476ede70"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","08fe7fa1556f1f3788bec8d20378e27a"],["/categories/announcement/index.html","8312978dcb477baf8aed090fe01d13f1"],["/categories/diary/index.html","d6ec9a1d774e32cc586ab77f69bda644"],["/categories/game-dev/game-engine/index.html","670a0cd76530aa949726344244ff2873"],["/categories/game-dev/game-engine/lightvn/index.html","ede9e353c2850d987c610f7a1e5d07b1"],["/categories/game-dev/game-engine/nvl-maker/index.html","50d5d89553dc5da4147c4e8e6f3e8774"],["/categories/game-dev/game-engine/page/2/index.html","a4af7d5d677218433469ab44b671e4f5"],["/categories/game-dev/game-engine/page/3/index.html","5282d99e83e4837c53ebadaa063e6770"],["/categories/game-dev/game-engine/renpy/index.html","28ac6bdfb7d865bff178ded3776abea7"],["/categories/game-dev/game-engine/renpy/page/2/index.html","773575967964cec0323edf3f3e7eb6dd"],["/categories/game-dev/game-engine/renpy/page/3/index.html","4435bcce90a0e198c344b8fe54b8334a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","4d9c799e1d5672ded902fa5b53b7490b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","8736d228ef2d4db295593d0f35548e84"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","c08f4dddd2a24c2a712f57ada9135e25"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","2d1c6c07588845d00a1809a8a2e12b73"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","dd32ae85458012c67611208204d618f1"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","d7e4b8bee7deb8a604a3fa7400489ce3"],["/categories/game-dev/game-engine/rpgmaker/index.html","f502d0713f7ed37606024c1083313464"],["/categories/game-dev/game-engine/tyranobuilder/index.html","f1cf7a0102332dbfdf43076fde5ab8d1"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","f4c51089d5b70d6c370a07f23857b8cc"],["/categories/game-dev/index.html","6e6ac5049cd7d8c91cf889964da832e6"],["/categories/game-dev/page/2/index.html","28ec1f11d34b2591eb6c47b6fbbf5a19"],["/categories/game-dev/page/3/index.html","147d8d8adcb00e77ec2e93ba4a6a2d07"],["/categories/hexo/index.html","b748d5c25d35f235ed5bf328a136cc13"],["/categories/index.html","4073b531c6d97ddff6541decf3cfc90d"],["/categories/material/index.html","13dc2000ceb47c69d215bb88f88099a4"],["/categories/update/index.html","0974a74ad1d1ec652fe3d60c674c458a"],["/change-according-to-real-time/index.html","c6e84475aa0cd6c88a7f8dc1e6e545a0"],["/change-title-after-first-time-viewing/index.html","91c8582bda7cba8157548c75d58b3f87"],["/change-title-based-on-event/index.html","9b280899fd0070103b3d594c4e6613cb"],["/character-stats/index.html","66a7edf39d48e7030568e9b811fb59c0"],["/chatbot/index.html","7950f4f73cab18fadcb33cb6c5468f81"],["/comments/index.html","049f16bf4dd2676812971d04da30e57d"],["/create-button-anywhere/index.html","91ea243aae6dcfc22b5b738f47bb7d06"],["/css/eurkon.css","5c60833eb08afc292075f3e03529481c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","b912e8870169bd03639d5c124e82b791"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","47994676dc42955658dc1a27811feddf"],["/css/rightmenu.css","d6d5441898f2062fff4904b12ca48765"],["/css/siz.css","e6001ad32f295ef04d63c033ec4e2e88"],["/css/swiper.css","bd49c64cbca6e712d390a8081b2736ce"],["/css/swiperstyle.css","eb7945e3207d6de957843ff248b7eed9"],["/css/var.css","8234f1a61d5ec4abc390036f521be30b"],["/ctc/index.html","faaa72760725e86eb7db6ed8012459aa"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","686b5592f36f37db2c99f78b6f7656ae"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","057c1da7f4b2713858ea2d72b8310fa8"],["/custom-loading-screen/index.html","77dd4b618a0c91e6589a02944ef98f45"],["/custom-mouse/index.html","0161e6eb95dd1623c0f79cc4adaa17f9"],["/custom-music-room-screen/index.html","afbee0020ad027c4b73a63f519eb06d5"],["/custom-music-room-screen2/index.html","2a8a24f278987991d3a3bf1d2b436cb9"],["/custom-nvl/index.html","f83f5631c176126bf89c4e0285a702b4"],["/custom-player/index.html","95fa9260ee0dd5ce2470284997778cc7"],["/custom-preferences-screen/index.html","568ffa80f61bc713e505b5dc96b0d6c0"],["/custom-say-screen/index.html","0449ef3ebe562dbc8ba80c138c8ae188"],["/custom-title-screen/index.html","ff20ee5b27b26dccf02b71e6a216bbfa"],["/define-npcs/index.html","204d64c89eb9ad38bbc57823dbf8eb1d"],["/dice-function/index.html","7364d468995227bf7df6cfd9bbd85f4d"],["/disclaimer/index.html","1be0ec2a473cb9ffbdca846c69c92b0d"],["/export-game/index.html","788ee632c4a4bb52ed80d5a9f588e6f5"],["/friends/index.html","f4947c9ca25a8be39f150ac1aab43397"],["/gallery/index.html","da12473d359bff95f818a255ccc90e7e"],["/gallery/photo/bg/index.html","3e1dab6afbf2776b6a8b4a46027c0ee3"],["/gallery/photo/gui/index.html","49e631d1a3410d52bc5245391a166010"],["/game-only-text/index.html","83288b5bb97592c374be9871e9420f46"],["/gui-017/index.html","d7727303668f69fa9d30f9947d1b5156"],["/gui-vertical-002/index.html","358ce6914746e04c56a5d6f356d99880"],["/gui012/index.html","19e27821d21f278b8fb39de730b429ea"],["/gui018/index.html","7bd84914af0dbff7035aacd4d6213670"],["/gui019/index.html","99393dd7526fec6a0cc63b87e4331057"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","747e1fa12a5bc187443d33b89d4b8eac"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","685065389c1b3b645141b9744d6de8a7"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","44164d79424a2c8446ece4da8932cdb5"],["/images-tip-function/index.html","9ca6372252d3963ad0db87bf0f4bef25"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","6d0c4017b8b76d0e416049fc659fc22a"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","7d27e1232a0fe486dd63e65827868368"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","752b470c825aa20ddac60740d964adb3"],["/items-sprites-effect/index.html","f66c7d3c5c71d3897f8bb15e1bd8e711"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","38fe23292a18ce7d7fd406f1a922ea77"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","51873aee0811fb53665ed2affc6c33f8"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","3e709b1d48d805f8ed5e0cd0b834a0b8"],["/link/index.html","93484c44fac449b349c6cbe55c8eae17"],["/make-butterfly-beautiful4/index.html","bae61e56f31ecae8b1b26dbad28eca96"],["/map-puzzle-system/index.html","b8a066784a0c82e3d131ea1914cb2313"],["/maple-effect/index.html","a7583ed56eea376b51cf0b821afdc38d"],["/memberships-2/index.html","f92fd6ac7a2d01de83fae8829d676962"],["/memberships/index.html","e1580ad28a8c728fa62da730f2cbac99"],["/multiple-language/index.html","809940244b26d5e10642cf714a4715d9"],["/new-year-event-2023/index.html","27dc2c296976720a657894a37c3e3579"],["/newsletter/index.html","bc1436de4430dc93750df1d11b88743c"],["/null/index.html","2cda20683a5d0bb50671597e5e80ddc3"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","51be062e45b40e3bc4c9e402a9818bdc"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","00bf1cb3c6bd41f1acf15c8fd62914e9"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","3bd085d5077655addedcdead45f6f524"],["/original/index.html","644e1f763bf67cd6d4166cf13c1251ba"],["/page/2/index.html","4d04f7acb742509e47e3c204469e44ee"],["/page/3/index.html","661d3782ab8e9583e84d535359688c82"],["/page/4/index.html","d77dc5b5be52b6987d79b67811e79ba1"],["/page/5/index.html","a83a141144a4fb236ca858b2d1149372"],["/privacy-policy/index.html","b81098a58aa7ddf568c0bd679a3acb59"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","033082c20a2484fcfbe17a6ef280f13b"],["/random-number/index.html","cea94cdd0f66ab3bc0ec5489399fa54e"],["/random.html","284986cb4659d54463332af8c7713a24"],["/release-017/index.html","562305fb67791401494a1612ec22121f"],["/renpy-basic/index.html","1419b2230e9c4ed43ffdb7af6e5381af"],["/renpy-crash-glitch-effect/index.html","3e210cb344df58768dc04d5c3506bf47"],["/renpy-matrixcolor/index.html","4919aeaa649a6ee4a9012d71584d7153"],["/renpy-overlay/index.html","bd524fae783478b1be03a167ebdd70be"],["/renpy-review/index.html","e41d8ca07b19a35e727ae7eb9234bc9e"],["/renpy-typing-effect/index.html","d075f9293f181f1cfee1754a09cd219a"],["/rpgmaker-assets-menu/index.html","b5c59b15504b8e1d0f896fb019bb0b27"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","5598508754a49141e97867affe6c5820"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","1c8ed28fa4c70a23dcc584d634df0c78"],["/sakura-tree-background/index.html","a3e56cf8cd29c44e5d269d20c093e5ac"],["/service-worker.js","11ffe03cdbb256fd2ec44a30fd2ac419"],["/show-variable/index.html","49c5e2800ac14d0454914e1826a7c69d"],["/side-image/index.html","a0b77a8e643f853f6dfaee63a0bc2a12"],["/snow-effect/index.html","b7e9e6cf3d6d0cb05d9d3b748377aaaa"],["/speaking-animation/index.html","be965beb05b47a6ecec4c00f26ad37c6"],["/splashscreen/index.html","4f77c6806c9f2688a6452045fa4ad928"],["/sw-register.js","2ce14705676424ca6017570697028deb"],["/tags/Hexo-plugins/index.html","fa40c4f6616eaeb7a1c2202c7a1acb9e"],["/tags/Light-VN/index.html","f94018a2d23ff2ff3d59376cac2686ed"],["/tags/ai/index.html","48c0427993e38ea7a02318e73b5c88b5"],["/tags/butterfly-beauty-diary/index.html","3c30c4318c272e7ce1d473cb2aef5e1b"],["/tags/commision/index.html","797a77935327ea123cf4d1330a59583f"],["/tags/custom-hexo-theme-butterfly/index.html","6d550882765d16e3cafc42af5789ee74"],["/tags/custom-renpy-title/index.html","f6ae26c87ce6d0a88ba2975572a7a71a"],["/tags/dialogue/index.html","7f22c537263ce74a44a84008347d871c"],["/tags/effect/index.html","8a18446ef8c071ae988e3c319b8a7174"],["/tags/event/index.html","7ca4a0e8d08f8546fd1f834c81ddc39e"],["/tags/hosting-own-website/index.html","820940b3e547821dc5d22a86343ef0e7"],["/tags/index.html","40b5b6c19fe90b1f82f3a99a4f5ed1f3"],["/tags/itch-io/index.html","9d87a54dfc5ba157de1effc0c4f6de2b"],["/tags/light-vn-update/index.html","61e1715d10e70f1de79b51f1eff97330"],["/tags/nvl-maker/index.html","d72159967335a82dc3164995b4c0337b"],["/tags/player-related/index.html","5b04c464ebb055d2ff58ce2cda473038"],["/tags/pro-tutorial/index.html","23da804fd0caa34e31776ba1a93d2832"],["/tags/pro-tutorial/page/2/index.html","3647b5e0a4199ec0fcc200065ae9b802"],["/tags/pro-tutorial/page/3/index.html","3c42e387b855e9684f49feeb51291533"],["/tags/renpy/index.html","deb76abcb13afe3f144433a00b5a5a34"],["/tags/rpg-maker-custom-map/index.html","0f87de22469e9e719a882184b13b2762"],["/tags/screen/index.html","70415b17cb9bbbd3d2cbb06dcde628a4"],["/tags/special-function/index.html","b76c4c10752761e744c9976bf4ad238a"],["/tags/tyranobuilder/index.html","bcb76797052d904eaa0a72540b5273cc"],["/tags/ui-assets/index.html","1f0cf79d2219d70edc15e261ec8077cd"],["/tags/update/index.html","8ca2fb3c03ae073205dc9a47d045a585"],["/tags/upload-game/index.html","e3059d60787e44eb91a064c44ffe4e50"],["/tags/variable/index.html","5f19b04df0dceba2286f66ef2c605a45"],["/tags/visual-novel-maker/index.html","a76aa6970bf10f5394b734644d155ab0"],["/tags/封面製作/index.html","dac1dee095e9759062efbe7f9749a2c1"],["/tags/背景素材/index.html","5abf381740b23d3b519bb93274d34a14"],["/tags/隨機功能/index.html","ede28a7087e355a9cdf01ecb23dddbe4"],["/test123/index.html","bc4d70e5b926bc49a6446918c1c0c29c"],["/textbutton/index.html","c3dfe84bd23000bcb7f4017d6781ca4a"],["/to-do-tutorial/index.html","6fef666fd99d8f62e90fcbbfedf84775"],["/tools/index.html","6e57b227ccc738cd3c383cc1783bcb5f"],["/transfer-to-hexo/index.html","4bf16f23e6ec9c9f550867f126ffa048"],["/tutorial-update-history/index.html","a4d963bced38f8adbc8c52fe80b63c6b"],["/tyrano-name/index.html","a6e87b82f2e6f15fb4efb2afdca3d8e6"],["/tyranobuilder/index.html","45c964ed8dee78498aa372279236ecd1"],["/undefined/index.html","18d9a39b3c5adbcc422130b720ac5f25"],["/update-20221211/index.html","a3168ccb907d8f2ca82ddda0bf3093e6"],["/update-20221218/index.html","d0902b2ebc9578c1ad0aff6e4e8fdea3"],["/upload-your-game-itch-io/index.html","9fc32ed31b9857bd18dad436dfc43d95"],["/use-list/index.html","8ce72e3ca94aa45d1d6f97d67ce9af8b"],["/use-nvl-mode/index.html","b187c245134417c1175ad86905978feb"],["/useimage/index.html","6859baf1ecac292075e9b96ae6cd9505"],["/variable/index.html","d92822c2d96f0e03bbafa21baaf96a84"],["/vnmaker/index.html","ac4d153ce7285bd0bdfbba54eb0e2ede"],["/weather-effect-tutorial/index.html","ec05b3f6ea5fc2da56ffa9eeb455ac83"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
