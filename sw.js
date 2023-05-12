/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","82df6dbb24fe2301248e6e78586e3964"],["/2player-battle-system/index.html","b7610aee25b285e572704de9d57d0964"],["/404.html","8c6edf90f81c012a16e0f19cb82c9c24"],["/about/index.html","a3a5cebe4885a6e00bf1875ce50941ce"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","4052916b8a093b016808b02e56688d0f"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","fcf4ad7810a359e3dd0baa1d21375583"],["/animated-title-main-menu/index.html","9d284e7f960ada9f4d76e340526588b2"],["/archives/2022/05/index.html","ca673f2b3f8930dffcab958f609dc69a"],["/archives/2022/06/index.html","ecdbfd0593ab65de0930cb8c5277b6f4"],["/archives/2022/08/index.html","42a277d6baec5be960e5300a926b84a7"],["/archives/2022/09/index.html","68cdb7eb5efe619ce05fd066a86c2420"],["/archives/2022/10/index.html","f65827858575c35bc0b391891e461e20"],["/archives/2022/11/index.html","84f1b0afd02499709996a0941ca6a573"],["/archives/2022/12/index.html","6fce0dc08421276941105ff59d767cd2"],["/archives/2022/12/page/2/index.html","ccff89327f94a293fbc86832976fd1da"],["/archives/2022/index.html","e17d3c282cc9a12fc9cde97c6ddfb7e4"],["/archives/2022/page/2/index.html","90cfd72dc5e6bca5f7d2dc76e4301d8e"],["/archives/2022/page/3/index.html","df71038f4dc75dcd60220677c67fbfac"],["/archives/2023/01/index.html","ac8cc5e8a28226c0e85a869ef208385a"],["/archives/2023/02/index.html","05f91a37b81400dea54007c28d0abe16"],["/archives/2023/03/index.html","6d6100bd0767c6ff64dd65cacfd6fc96"],["/archives/2023/04/index.html","36ba8a7cff0937e2e8a9b8c4978c2d2c"],["/archives/2023/index.html","84907a502c41a56f4a09898693eee401"],["/archives/2023/page/2/index.html","154323156906965829338685602d776d"],["/archives/index.html","1442dc4c3c0e337867293aea7178ae4e"],["/archives/page/2/index.html","9e899f5cda52c97ebb568dd7599e6912"],["/archives/page/3/index.html","81e65832565e3b6244cc37004ee271e7"],["/archives/page/4/index.html","6b6461caa8304785f027ed609025ca53"],["/archives/page/5/index.html","61864e27c91a3d3ab6e5516ad4f975b5"],["/artitalk/index.html","cee30ea06e398e6fd1d78845d2186b02"],["/battle-beautiful/index.html","342170edfc19531db0f32e872253e80e"],["/blur-effect/index.html","84cb7e8e40c7282f64bb762bc41ab32e"],["/butterfly-custom-tag/index.html","e1b5a039fe52f5476504065a7bf79e3b"],["/butterfly-plugins-faq/index.html","c549b8210cc8de8f598ecb5ff263ad6e"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","e6305f5594726c503a75d9e9afef6999"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","4b9ddc696eefb09779e8a666034f667d"],["/categories/announcement/index.html","a93734b8234ca7c71653c36bcdb98df3"],["/categories/diary/index.html","b43fc6ea312b46cfeeaa072946b12085"],["/categories/game-dev/game-engine/index.html","8e2fc27e27923a8d4432901cf6765c46"],["/categories/game-dev/game-engine/lightvn/index.html","672e2b1d24a50abd2c827329851903b2"],["/categories/game-dev/game-engine/nvl-maker/index.html","058ddbf1a1c919f4b4393f7a7e1fbdcf"],["/categories/game-dev/game-engine/page/2/index.html","d3994d5ed8dbfd2d3ac8c4745bf3bb1e"],["/categories/game-dev/game-engine/page/3/index.html","e6700d13c67254b56d3a5671f6951e7d"],["/categories/game-dev/game-engine/renpy/index.html","167aa7022a61daa65ff2a97561695e27"],["/categories/game-dev/game-engine/renpy/page/2/index.html","596b50464c6cdf92761535a0cb3d856d"],["/categories/game-dev/game-engine/renpy/page/3/index.html","a7ab625c8f7adf55d31c76cb5d8f6657"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","257a5f3842e99707ed64fb24ac7288e6"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","bbcc938f4fecb464f77f6a5bf1e50e65"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","687364de6d40340f1b3ec89a61364b61"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","b4c5005147c5a09b023e25fb5a84096c"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","b235490e8e05d37d3dc50fc7bb7b73b5"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","d585a427daec29a4c5d958d321ce8599"],["/categories/game-dev/game-engine/rpgmaker/index.html","33ec8174cc346ab687a7bafd7f2704cd"],["/categories/game-dev/game-engine/tyranobuilder/index.html","51499ebeb91ed56598929c15b7eabb35"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","4983a0cbb97d5864279dbd9c994bd022"],["/categories/game-dev/index.html","587f362629966ffacb281ca25f704365"],["/categories/game-dev/page/2/index.html","17bf3d7851d674d1e8d87a3a4061b864"],["/categories/game-dev/page/3/index.html","541302e45c2ff0b59c6a556b374aa821"],["/categories/hexo/index.html","a0762a6fb2b8404adce1f4df7ee4c94b"],["/categories/index.html","7e775a01a9429d28bc946ab2dfcfc5ed"],["/categories/material/index.html","0e668697ff605cbcfa779f587042cd4f"],["/categories/update/index.html","59e9c4d74e27b9291ecce8173a4b040d"],["/change-according-to-real-time/index.html","195c9ab056bfce2fd42b1194ddb96a64"],["/change-title-after-first-time-viewing/index.html","03b99fb3381422a467613f8fe6d5d482"],["/change-title-based-on-event/index.html","b49523a452ec625783ac25bb99de0848"],["/character-stats/index.html","7d4782725c1be0e5cb3a99770afadcf6"],["/chatbot/index.html","92ccf4818e6a14db723a689e99a191f1"],["/comments/index.html","d603c35d579545fe2a1576927840bf8c"],["/create-button-anywhere/index.html","862cecc719b62d70427e72aaec08b165"],["/css/eurkon.css","03f3e911853ff78cbf3c4953401c4fe2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","2647810401f155301ec97716f3e1344e"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","8c01d21029358f36782809cad574b7d3"],["/css/rightmenu.css","132dfc6fcd2e63f7fe5dc8cde8aef40f"],["/css/siz.css","bcb4c948a2722083986f3dab15cf5b2b"],["/css/swiper.css","e71d53820d7cf75ab5b32c6364e7e8d8"],["/css/swiperstyle.css","8552020b5d541a6eaa1498a6cfc1ac38"],["/css/var.css","425d45853c9b8ff79a36d2810ebda4a6"],["/ctc/index.html","566f4cc055a2458e593d8b70eae78e4b"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","d1b4cc0ec347f81735066d93f661e99d"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","68ed5691df74e419379cb96d5eaa67a1"],["/custom-loading-screen/index.html","a8d0cc68f521c3ffdfd34ad32c19a00b"],["/custom-mouse/index.html","7174d73b28f3f2d3531edc476e035bd6"],["/custom-music-room-screen/index.html","9b03c722cd11fdc4ebb96f6c5eb63162"],["/custom-music-room-screen2/index.html","c64a57a5d8d52ea8bec17b3f97284c67"],["/custom-nvl/index.html","cc956f14b559891495d87c45ae70b44e"],["/custom-player/index.html","c83d3c4d0ac8d965749a643cf8cfbc20"],["/custom-preferences-screen/index.html","552d385a6c60f44ec89f47f4177a164e"],["/custom-say-screen/index.html","5a442fe2daebbbf3381f758e3ee021ae"],["/custom-title-screen/index.html","c19d2617ba2d8e0a12d44073f8ef8ca5"],["/define-npcs/index.html","0c17025122cae013dec67566541ab1fc"],["/dice-function/index.html","054ab42aad702283e51e8d931b5d1f74"],["/disclaimer/index.html","5346300bc2a20ffc218c2fafc461a5ac"],["/export-game/index.html","f1e95902320a72b849c83eca9db69d43"],["/friends/index.html","1bda05c915fab3eda860e7106fa6a435"],["/gallery/index.html","a45ebd4e45cf46408574277609721d77"],["/gallery/photo/bg/index.html","885f3ea265f1b26fa5f3202df6778fef"],["/gallery/photo/gui/index.html","23731ec44473cdac5631625dc9e74202"],["/game-only-text/index.html","c8c52c7634a6f1884084d7f2896eec15"],["/gui-017/index.html","aaef494db4f5ddb09b2963fdb11bb215"],["/gui-vertical-002/index.html","e57601546742e745bb405a30bc180d3e"],["/gui012/index.html","a491d6817bf8496a19530223e74ba6db"],["/gui018/index.html","05225ec941d670a739187a9626720651"],["/gui019/index.html","e1d2f5321f7b96af4787a9a15c554aa3"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","1b9e5a40f7670b22bfc996e39a78cb44"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","669b4ff4456994e42f6cedb4f17492d9"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","351479992ed4ec073fa570a54f780575"],["/images-tip-function/index.html","09a5cc895f6565bc4233d771186cc91b"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","fd8f489d2aefed81340555c007e5daf5"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","170fc353b22230d18100511149ddf59e"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","97ce84d36a9005538993ec9a45fcb962"],["/items-sprites-effect/index.html","7007a7776827d1a06dcb34fac1b22688"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","4695d1d8597cd7820bf19103410115c2"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","de54f4ac1f4b03f366fba9a24271e3ab"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","86f9dbd82db0bcd160e5d5e41ad417b0"],["/link/index.html","4c6c393dd4bb97f9b4a7d185f7145cbd"],["/make-butterfly-beautiful4/index.html","af5cd40e1db953212a8054ae00231720"],["/map-puzzle-system/index.html","6b04bb59d3a9890dbbbcf939c4217b65"],["/maple-effect/index.html","b9a63a5b9e6cc917a7d6a3f049fd9782"],["/memberships-2/index.html","018d6bd11d5443509dea982e55574ddd"],["/memberships/index.html","10ecc172d165d9f662d0b86126be9a36"],["/multiple-language/index.html","7099c0941adeefb57045007cdd01d5ee"],["/new-year-event-2023/index.html","7168f0bbcfaa8067a2ab1032b6b0b323"],["/newsletter/index.html","423f238d4f07d06d445f26ad43a0d7af"],["/null/index.html","ddec2ee5ec92b7749ffabcc22676b088"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","023ee1ebca6427e0200626422a877f42"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","2e89111933610fb67ab02039709f6c13"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","e983e0c539f2c4dbcabb0cf0806e3348"],["/original/index.html","8b071235fcb04e13f19de954b46aa006"],["/page/2/index.html","882112f49f35dd5e2c69471d994b1d88"],["/page/3/index.html","57612126f8fe229b32dd393e2d7016a8"],["/page/4/index.html","273b5a243c67400f4687872db81875a6"],["/page/5/index.html","e43fc10843027ecf94914e585500e10f"],["/privacy-policy/index.html","f89cbf07aa711be2ae458c4f3d53dcde"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","67cbe5d3980f86d472a96fb7ae5a10cb"],["/random-number/index.html","be078752e0c6e0c93ee4476c7dd85fa6"],["/random.html","ea01e31088d176c2c9461265ea4acccb"],["/release-017/index.html","ccd883f1e4630b0d4a10db818e2b059f"],["/renpy-basic/index.html","80d46131b7155c13cd307675f0217fd6"],["/renpy-crash-glitch-effect/index.html","de1a29c2aa5069c7dd055071f91f9b83"],["/renpy-matrixcolor/index.html","06fa1db58cb3d4328e69a9a0c17400a7"],["/renpy-overlay/index.html","ba34b42428c9efadc19ec8927c304444"],["/renpy-review/index.html","d7f11352b096ab213a1db8724d0ee371"],["/renpy-typing-effect/index.html","1977a7e98c145b25674b359def31eab1"],["/rpgmaker-assets-menu/index.html","c9432ec5e88e2a97e80006a483137bdd"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","25eb55992399bfe026567fee24b70fcd"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","80930a48df72d4214d17f29e7d5f8088"],["/sakura-tree-background/index.html","ee752f8f58eadcc767a329e41d7266de"],["/service-worker.js","d923e7bac9c13c14b97691789ab98cb5"],["/side-image/index.html","e6c7b482ea2ab81a874c6c7ede553fcd"],["/snow-effect/index.html","adc336efdfce8c19845f3244e32cae2d"],["/speaking-animation/index.html","0c3d585420d3f46d36df52adb2ea862a"],["/splashscreen/index.html","b3c9774f7d99df8908e452f742896d1b"],["/sw-register.js","23db0a3237aedaa8667f02f072c38224"],["/tags/Hexo-plugins/index.html","4507a1e503181946f7e067ad3fd7c373"],["/tags/Light-VN/index.html","7f24c50c669f94961c159db6c8da5b8f"],["/tags/ai/index.html","be9a41de68380cdb8575e724c7a12422"],["/tags/butterfly-beauty-diary/index.html","d8855eb33aa9ceb5624479873a5042aa"],["/tags/commision/index.html","1acdb528224da722ff0cf57d5fcadd29"],["/tags/custom-hexo-theme-butterfly/index.html","b289a39793432e783efeac505560776d"],["/tags/custom-renpy-title/index.html","aee555ab96c443545411efff37509963"],["/tags/dialogue/index.html","02620ae6a944084e0d0da504c27cf1a9"],["/tags/effect/index.html","6421cfb4ab32605078187cedd65df110"],["/tags/event/index.html","414ada325f7be6f1fc52dd111d9e58bb"],["/tags/hosting-own-website/index.html","dbf4aea3fbe88dc442d2dda1324cf7c9"],["/tags/index.html","c08483159066b1a3a94ee6bd509cd570"],["/tags/itch-io/index.html","c3465488a275dc7bc1d07ddae101036e"],["/tags/light-vn-update/index.html","84e190afd3d5d796a09fb35a886b74e8"],["/tags/nvl-maker/index.html","f32bda90d23b841310595227135d003c"],["/tags/player-related/index.html","93fdf11291d7de77734c1484976e0f64"],["/tags/pro-tutorial/index.html","0893f6019cba88b259762cdba4be6d47"],["/tags/pro-tutorial/page/2/index.html","d5b5922dac394e5c25b00770d184e1dd"],["/tags/pro-tutorial/page/3/index.html","4b21ba2e5a17857e5d3a030da45d9a7f"],["/tags/renpy/index.html","c40d19fa9ccb5548d7bd0f292fd1aa6b"],["/tags/rpg-maker-custom-map/index.html","fa300726833d6dfd25f358be2c259fe9"],["/tags/screen/index.html","08d7766dd4426f9785a42bfe97de1fbc"],["/tags/special-function/index.html","982bb57ec585b7d1e8ba6edfaa0d1b09"],["/tags/tyranobuilder/index.html","fdb8bec49bb5c9b34ff7d40fd354baa7"],["/tags/ui-assets/index.html","f8c6efa89b5774cfb48be2053b495f3b"],["/tags/update/index.html","9944b448cd71e545577146e2eee63830"],["/tags/upload-game/index.html","207fb4e423c6d52129d963537d48f95e"],["/tags/variable/index.html","df60317e03131f776b896c7f59930f7a"],["/tags/visual-novel-maker/index.html","04307f70df8c4e8b8ef37fe2e44475f3"],["/tags/封面製作/index.html","8f1ce8f536f34de4ed798db36babcb1e"],["/tags/背景素材/index.html","a75b8398365d5e0c76d2558c4434dddd"],["/tags/隨機功能/index.html","631224f0400f0afa0b72744f6bbbd465"],["/test123/index.html","a8905d5dceedba45e2572f9cabb670c3"],["/textbutton/index.html","cf484cbb6ee485ebbf1a3714fb76a231"],["/to-do-tutorial/index.html","71a90eadc626e53d5fa6f6ceb864b714"],["/tools/index.html","3fa6e04526925cb2823841fb73ecae9f"],["/transfer-to-hexo/index.html","4f2a5cfe53947aaa2203e92f6c16e536"],["/tutorial-update-history/index.html","878e51c11378e581c1a88f8b57baa291"],["/tyrano-name/index.html","94540982f0bf6be7c0e5ccffe17e030e"],["/tyranobuilder/index.html","7d1ea715a3324f416018e1a8841359c0"],["/undefined/index.html","53a7668acc708a61244973b4ed0b44c1"],["/update-20221211/index.html","dfd14e04c939e481b57b01a935309ecd"],["/update-20221218/index.html","889e0b0553d7a71923f8965777d58d76"],["/upload-your-game-itch-io/index.html","dcf2ef3b9c2c3ea6d5e2c0c91ea3029d"],["/use-list/index.html","8cc04c5e98d0bd65bf9d5726737596ca"],["/use-nvl-mode/index.html","5e0964a05ac4ba1b0a194bcde5afdb6f"],["/useimage/index.html","f800029b92a43b24c722ecee98785ff7"],["/variable/index.html","3c8416fff1041ba365ea45a9638e05a5"],["/vnmaker/index.html","33aac4c191f9bf9d2916d3d928a545e0"],["/weather-effect-tutorial/index.html","9b368de09003e39c967e8a75a844dc6e"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
