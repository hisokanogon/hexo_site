/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","0c46c08e0bd9c6aa41a9884c52428f70"],["/2player-battle-system/index.html","6bdb16275151d8e362d4f3819ebce064"],["/404.html","49c93ec4b1116393d1c47d94789d0db6"],["/about/index.html","6add27e9afb47084df77b00af87f9fef"],["/acg-creator/index.html","d2a70eb72314e7e9af921321cd4dcb68"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","9c03a3b0af371c6003a4f6fbc4126853"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","60d03a248db933758a4882ea55f35c4b"],["/animated-title-main-menu/index.html","8f1171a2fe1c250a03f9e1264112a9a2"],["/archives/2022/05/index.html","996d1ef9e8358fe475deeaf7116d26df"],["/archives/2022/06/index.html","2618cdd32997be5186420e721e06c9a8"],["/archives/2022/08/index.html","57a23d5c0aa99152b0ae1cf6a09eac32"],["/archives/2022/09/index.html","5bdc1545fe63a50e0d6dd23126bd1b76"],["/archives/2022/10/index.html","0a740462ca21778a05990d75d83fe306"],["/archives/2022/11/index.html","8ac5357c88f5adcf1bccb8e60af9405e"],["/archives/2022/12/index.html","c9e89985fe44d71d1344e1fdf755ba73"],["/archives/2022/12/page/2/index.html","ce4430a986965e1eb8eac02c722ef5de"],["/archives/2022/index.html","35cf9e396b4448317e1e436943240fb3"],["/archives/2022/page/2/index.html","f153d56401ba11f7e5cbbbdc7f921e01"],["/archives/2022/page/3/index.html","a28753238b6c3e1e436ee3cdb76f0a40"],["/archives/2023/01/index.html","d70921ddfda3d69b2472aec40b376605"],["/archives/2023/02/index.html","470c32fd245eef687275b858d40e65ff"],["/archives/2023/03/index.html","2f106438b6b2efa940e40ed2bedcbd48"],["/archives/2023/04/index.html","f165a42d77eeecd8b04dbd1fc92e3f29"],["/archives/2023/05/index.html","f1036e6e69fd16af1a283fd1dd07f810"],["/archives/2023/06/index.html","b80ffe1bded17ecb9801a989d24313ef"],["/archives/2023/07/index.html","ac4bf806e008a2dfea60f7910232a5a8"],["/archives/2023/08/index.html","9cd2d700313f2b01b4d0308c7891c82a"],["/archives/2023/09/index.html","10307b8eec9fc04a2146c01b0e0ba916"],["/archives/2023/10/index.html","18a128c4f3befa7b9ba1b472692594f8"],["/archives/2023/11/index.html","f3fa5f7228020855a3c758bad269c56f"],["/archives/2023/index.html","f3b2ae7bd476c7f68f0f2fb6aaf2b6cf"],["/archives/2023/page/2/index.html","8e243436da72d59723d5a1a4c35a67e7"],["/archives/2023/page/3/index.html","b1a301b3dcc235a4b4f8b8170bb5f8c1"],["/archives/index.html","348f090ce9c1e45378622ec4f968f3a9"],["/archives/page/2/index.html","93d93504dccdea74b7eda44a6021416f"],["/archives/page/3/index.html","67063877592ee0a9e4aefb7b5e2f5c5a"],["/archives/page/4/index.html","a3d82144c9e6535e14c5c430ad0bfc68"],["/archives/page/5/index.html","b02ebf84ef3c40a82d9333b91219feae"],["/archives/page/6/index.html","4a3571a592b0d0d852836cbc31b39030"],["/artitalk/index.html","537259c46df59562caed0a8735c305eb"],["/battle-beautiful/index.html","3765130bf94286405ba5e467d1457133"],["/blur-effect/index.html","20cd2543ecddc456e99db57c24a08c61"],["/butterfly-custom-tag/index.html","cd608c4475b36bfecdfd193d2775ca18"],["/butterfly-plugins-faq/index.html","5a43448c0501fee4f36a9c6f9ef7c09c"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","8e8ad1ff5917c301700d4fb30df4dd99"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","6dc8d0f88b53ecece66610e3ab1b8657"],["/categories/announcement/index.html","7869a581dd8963888e04e0016114f826"],["/categories/diary/index.html","e4d00c3aea50b08a1a82f69639406d6e"],["/categories/game-dev/game-engine/acg-creator/index.html","f264fbf6615b98a2998b1c2ebc606934"],["/categories/game-dev/game-engine/index.html","d4a10a03265a8dca0612a26f454b5147"],["/categories/game-dev/game-engine/lightvn/index.html","69f1e54f7d4a22ef6fff73387d856523"],["/categories/game-dev/game-engine/nvl-maker/index.html","051f3e595acfd28756a556f9261fa2f5"],["/categories/game-dev/game-engine/page/2/index.html","a65b943a653d5f49a45ea50e2a1c5e02"],["/categories/game-dev/game-engine/page/3/index.html","a7f8f5ccb4391b333edd99e54edc7d10"],["/categories/game-dev/game-engine/page/4/index.html","334150ca9753197615eb316b51fc9f92"],["/categories/game-dev/game-engine/renpy/index.html","f5f00c03f7d6bf49c13d231881cb3787"],["/categories/game-dev/game-engine/renpy/page/2/index.html","9dfed55f3c2dfc82d4a75c9818a3d163"],["/categories/game-dev/game-engine/renpy/page/3/index.html","8f3424bf36d6bf64a075c79475443080"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","7f39e11172a8d946e8ec368cfcfed4a3"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","2b102329875c59e3a9a03c174100e4a0"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","5a8ede9b1fc668672a02dd79f1ad7946"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","a5475c007b748d7c1f2b951bc19fce2b"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","bd453927dd1983a4f51b6e3bd90e33fb"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","6044a2a1f154e751b279d7cce88467cf"],["/categories/game-dev/game-engine/rpgmaker/index.html","da7183fa445665eccbea1af13f962fbd"],["/categories/game-dev/game-engine/suika2/index.html","3c621eab359809fa2a087c6021c4fa46"],["/categories/game-dev/game-engine/tyranobuilder/index.html","33b6cee3c145f6dfb785084a23a61d4e"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","c8fdce047e8d04c851fd50b55d7f45fc"],["/categories/game-dev/game-engine/webgal/index.html","3b14ffdfdbdb95c2b97525254b5039c3"],["/categories/game-dev/index.html","f74dc73cf8771d12913db409c83bd432"],["/categories/game-dev/page/2/index.html","d0d438b94504753d9f671c300a7d37cf"],["/categories/game-dev/page/3/index.html","0564a22d79a9f7b0222ba2d30655f6ba"],["/categories/game-dev/page/4/index.html","9bbfa4e77150c192324edc80b1efc827"],["/categories/hexo/index.html","20000117ef6ec34997a53432a0695b3b"],["/categories/index.html","5632ba4c70f8c6a3a8cfae7d44f659bd"],["/categories/material/index.html","251746538a4f34c024e3edb5b1b67d32"],["/categories/update/index.html","f976a4e5332243883124bf659fb2f812"],["/change-according-to-real-time/index.html","95a02523a8f637f2886723d14691143a"],["/change-character-info/index.html","d1670dbc0cb494f3dbce4d7907049034"],["/change-title-after-first-time-viewing/index.html","be94bfb40310b29b866920fcc63c5da7"],["/change-title-based-on-event/index.html","e4a50f20140450475e31b08323281b87"],["/character-interaction/index.html","5a999c35872e299d0726d9bd58a3f078"],["/character-stats/index.html","74c7454cc206dbfb91d11803f6ceecb6"],["/chatbot/index.html","eb37730f712b8c38f016f5dd1d2d0235"],["/choice-time/index.html","23759c8b30858558c3991566ce89ab04"],["/comments/index.html","c4afa18c141fbbe1673f13bb11c6f279"],["/commission-info/index.html","24f04041d423ab3147d2bfaca1e36393"],["/create-button-anywhere/index.html","30e92c23a639f7865d9410a44c8388e1"],["/css/eurkon.css","f283070f232a706dbc28acf88d28af40"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","cb5623e2c52dc74c6e5ac9b4b85d56d3"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","50867441268c1525968c837e716c14b6"],["/css/rightmenu.css","10429fe916799f747d9cd3e66d6edc20"],["/css/siz.css","0018b43deed55434af4c4e53485c7f3b"],["/css/swiper.css","7a5211b07262144b840e8d808f0f029e"],["/css/swiperstyle.css","9d68b78f904920cfc543a3f5356ebdd7"],["/css/var.css","e70e647c7f2dc5a95ede6cdcaa369a84"],["/ctc/index.html","8698a8d96f5d27a979463ec0f51acfc3"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","de54e9ce734ab45e8360e1a85760ca55"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","cdf780a26bd084a18473283bd9355caa"],["/custom-launcher/index.html","380035a27efff7613cbccff79984be0c"],["/custom-loading-screen/index.html","73a49d59f7e19ae758ea36536f41da87"],["/custom-mouse/index.html","370a7b54ffa49c05e4c140d0697de551"],["/custom-music-room-screen/index.html","7f78ca851507c91b43ca820eefbeec60"],["/custom-music-room-screen2/index.html","77f1cd30bc7b759d13c222f0d137df05"],["/custom-nvl/index.html","348e513d187c761a3b88bbaf9a245802"],["/custom-player/index.html","160488af9cd7bf90e3a8f66116071cf2"],["/custom-preferences-screen/index.html","9a268a92ae7e7cc10821e6499cbf4b4d"],["/custom-say-screen/index.html","43c7c6a20e37f064b90c355db9dc5032"],["/custom-title-screen/index.html","d0c0aada3ea05ba93dae02e6cb7769fd"],["/define-npcs/index.html","857c9f501ddca467795f576e7390943a"],["/dice-function/index.html","c23aadf36451838dc04a3f6e1607e014"],["/disclaimer/index.html","9e2508f249c3c2680cc975ed10693b5a"],["/display-immediately-all-dialogues/index.html","0835f48a38f09033bada452dc56857a6"],["/display-real-time/index.html","f76a818865163ccc8d1513caf44563ce"],["/enter-name-screen/index.html","85f5b7fc19102aec4c89f4b96bfda9bc"],["/export-game/index.html","f71bab35a9b28d32db4e927fb4005e85"],["/faq/index.html","b1f9d3df36affea7a01633b7259843a8"],["/friends/index.html","8202503797a1789af92001f073af2a92"],["/gallery-template-assets/index.html","73aa9955dc6ce46ffdd20405d09e9e0f"],["/gallery/index.html","fbbbbe2f56b72b1b287270c9a444edc3"],["/gallery/photo/bg/index.html","7d0ca6e35a470ed31c90d5c8167570ef"],["/gallery/photo/gui/index.html","d8d4b32233ac2ae5c79ad31b9283eb57"],["/game-only-text/index.html","41398c7052dc46b5bfdee553d41d7c3f"],["/gui-017/index.html","7cf9fcc61a900b160fba7f7c8abeea4f"],["/gui-vertical-002/index.html","69be0301f3e0ec5ebf67eba5c1a283a2"],["/gui012/index.html","5c05634010b657edd381c43ca31e0fa3"],["/gui018/index.html","d8f3021b098a3218329b475d2b819d5b"],["/gui019/index.html","cb142e260b43ce92368f5f3e63dcd34c"],["/gui020/index.html","33628c6b05d1356f3bc3a26c6575f666"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","fd8176fcd5d1afc37d9967806280c70e"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","7bb44549ff5c8e7cd1d050fb97747b2e"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","11bf2832b7428ee77aaa4ed536f94f5d"],["/images-tip-function/index.html","511e65c681cf5f9217b4e077f58e648a"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","63a08f9dc1369e4900b9d4a3e855404a"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","44b55b51fa79e33ff0a7711be2369fd0"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","3fe23ef6d7aae82942057851cb2fb28b"],["/items-sprites-effect/index.html","9deba7b64916ec650320be8e45808852"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","0e76d8010aa78e4b37752a0fbbd36f3c"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","1886ee31692e874972137be36bb46f9c"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","1fccabb8c1f6e1f5f9e565e8a15b2324"],["/link/index.html","1680a3964c640eed39d7712a1cab96bc"],["/make-butterfly-beautiful4/index.html","9dd87f16dd93f2db8652bc4d12f3c8b7"],["/map-puzzle-system/index.html","0aebc95c09187bbcc63fbbe2dbd15b72"],["/maple-effect/index.html","0dd13c33ce0c4c77813f3bd765bdc984"],["/memberships-2/index.html","0b090202f094065c6c64e05da427f134"],["/memberships/index.html","877f58af3af252f5762c0f3badda834a"],["/multiple-language/index.html","d0beda2f8ffbcd11e93cab1a5173f6d1"],["/name-input-assets/index.html","b2bc9a04ad036f54606211fca0c440ca"],["/new-year-event-2023/index.html","a0ae3edb6e4cb9dd4cf1a1c8adad074a"],["/newsletter/index.html","0fac83e57ad6c05298a5a8b99d24d111"],["/nsfw-limited/index.html","63974df4145836a6b2e2f028a69088ca"],["/null/index.html","a264e901433ddc28d8258b2affc319c8"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","99a5df15d6d07e771e438d166010e589"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","a8f5939e06f9bdc4d3c6680893697b15"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","7ba378abef06dd33def3a3107bdfbc57"],["/original/index.html","1c3a4a062e4d7466a628d20fd52e0769"],["/page/2/index.html","39d9e050e66e695af6b4965f6940bdbf"],["/page/3/index.html","651f503390a0fa55f038c56625082f88"],["/page/4/index.html","ca868c5d1423afe01acb338cfd0f5f20"],["/page/5/index.html","677702a7f2593398df4ad7171f6f07b3"],["/page/6/index.html","945a180c99f52598a37938f729be3a5a"],["/point-pop-up-assets/index.html","286c8edd7b2da218633ff22bd1d25e3a"],["/pop-point/index.html","188db7916fe121fefd43c5aa50b9c1cb"],["/privacy-policy/index.html","b80cce711c11adeb42d8b26f314503c4"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","9c7e1ac2e687c179be2937f7ecb4d4e9"],["/random-number/index.html","277f41db3c9aa7d7717d703c572f814d"],["/random.html","762e4cba2c47ea389729b87f788f73ce"],["/release-017/index.html","ba371db3a8db7ccb93d1988a72b1a27e"],["/renpy-basic/index.html","0a0cb65140631734060b502349c014a2"],["/renpy-crash-glitch-effect/index.html","053f599c9b47d26d08160b1d770c46b0"],["/renpy-matrixcolor/index.html","12d764944fa30fbd11ef223a5437aa3f"],["/renpy-overlay/index.html","ed7d3439d6dad59fccc819cadb4a17fa"],["/renpy-review/index.html","12ed5403ab6653f997d9cba42f191b24"],["/renpy-typing-effect/index.html","eb3d2d038ac9c9ebbef1ab968dbcfe21"],["/rpgmaker-assets-menu/index.html","595deb796520e774e1c4da414d62333e"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","2bf872c3742328fddb8c12a92940850e"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","a612b5b62846121493966b586fc23998"],["/sakura-tree-background/index.html","bdd891beecccbc52f464f073dc9cb66c"],["/selected-button-style/index.html","159c58011f5aa77a697eeced5f6b31ef"],["/service-worker.js","2403470000d7e2e5c3108f4d61799b85"],["/show-variable/index.html","2d6907942b3e4c4ce6a6b8e7d4e8ebe2"],["/side-image/index.html","6e8f5390a72764ea996896578d2ff87f"],["/snow-effect/index.html","1179c0863462987b6dcd8e5739b373cc"],["/speaking-animation/index.html","a0b00c87bf43caf696295c70b0c2c2e2"],["/splashscreen/index.html","524ad415c4c2d7411b0b41ac9d4da811"],["/suika2/index.html","29d130a867a5e4c888b3ab1d4796e1ca"],["/sw-register.js","9abf56ab54501f404a3b753e26429b0b"],["/tags/Hexo-plugins/index.html","4f2cd9e258cc288ea939f8ac6d937bfc"],["/tags/Light-VN/index.html","77250974d5e66581820e240ab03b3f95"],["/tags/acg-creator/index.html","fd6826ba261cda602bcae61d8a3257cd"],["/tags/ai/index.html","6ecdda878d2a7b27ae525cdade7b24c7"],["/tags/butterfly-beauty-diary/index.html","f50422b83bda4f0b6d7b59906d673c75"],["/tags/custom-hexo-theme-butterfly/index.html","8cf95183d1faac46687033d8c6a92b85"],["/tags/custom-renpy-title/index.html","97092e7336ba83a8c4f20e493d175c3c"],["/tags/dialogue/index.html","34a375a762440a007d63e9fdc2bc7c3c"],["/tags/effect/index.html","2b15ac6f96124904d79813b840d7e321"],["/tags/event/index.html","bfd4c8f84947c2b9db907b70e3704ea1"],["/tags/hosting-own-website/index.html","485c58a990e0afd99304967118320867"],["/tags/index.html","c84dbe05869d7ae2be0858b2914a8c37"],["/tags/itch-io/index.html","fc73c48e674775bc578f4f9722e8a9c0"],["/tags/light-vn-update/index.html","f24195591f984f4a22d267058aafd3f9"],["/tags/nvl-maker/index.html","2ceff64822594a53634520dd9b1db4d0"],["/tags/player-related/index.html","69dc739022e3b67b80f26ecc52ff3b70"],["/tags/pro-tutorial/index.html","d3f9d08a7d40de16843b67f1f6f2e20d"],["/tags/pro-tutorial/page/2/index.html","8333366756088f54d60dbd676ee83226"],["/tags/pro-tutorial/page/3/index.html","9df97accc7363cd2dbc0e24567f2e2fa"],["/tags/renpy/index.html","1fee02445054adc2c83b15bd3fe7b889"],["/tags/rpg-maker-custom-map/index.html","7bccbfec04b257a7ec7e2cb4e75c1cc1"],["/tags/screen/index.html","4777ccf08c1f78618d908dba0f6284ac"],["/tags/special-function/index.html","9ea4c0f4b19a6ae5021a078ed27bdd96"],["/tags/suika2/index.html","be4ac882c50fb50d8aaaf5389e785811"],["/tags/tyranobuilder/index.html","d0f6a7d2d2cd270a0238f38b283d3c16"],["/tags/ui-assets/index.html","8e9f1fae5eba1a6618f3e4707202a166"],["/tags/update/index.html","68efc355bf22d3d12ee1ca0d91adbcbc"],["/tags/upload-game/index.html","163d1828e532b1b3bc43b6f859a2c2be"],["/tags/variable/index.html","833d824a1b4ee5cbb32efb3056a94ed8"],["/tags/visual-novel-maker/index.html","a5b22f4fbc576a1bd6180ad002a3f928"],["/tags/webgal/index.html","7f5927e829612705055f8c4683f0a217"],["/tags/封面製作/index.html","814f508bf6b3ec04a5cf0102b8e5c900"],["/tags/背景素材/index.html","3ce0eb7450e7e012d7f60b02307ba12c"],["/tags/隨機功能/index.html","0c46f5a1a83823caa8791c3b304cb4f0"],["/test123/index.html","4c933fc94aac27b5d96bb149a82ae527"],["/textbutton/index.html","81808667482cb4ef4b91382b6a536609"],["/to-do-tutorial/index.html","541b2ad162eec64ca3f987da18de093a"],["/tools/index.html","b32b58552b833d3c86dd0f48f1617aac"],["/tooltip-function/index.html","93285d73f0aac74870abcba048fae945"],["/transfer-to-hexo/index.html","8515c0d80cbdffe131022a8506b3c5e8"],["/tutorial-update-history/index.html","b59c5b5977bcfb938e55ea88de999b79"],["/tyrano-name/index.html","6798b7a83730a87dcc3572b692b5afe4"],["/tyranobuilder/index.html","1d202499322be30a9777d65eaf7b7d05"],["/undefined/index.html","42439e6a76a0ec4d439f290a329ed6fd"],["/update-20221211/index.html","42d305e516df844cc955042313b28229"],["/update-20221218/index.html","8f1de7dce170580fc352d48e01ecd8ad"],["/upload-your-game-itch-io/index.html","e4fa01b67f431b9971d5b87070a426e7"],["/use-list/index.html","39f073bff79ccd611230d352d6c9b437"],["/use-nvl-mode/index.html","ed3906859cc4b26c489b2f971ef1b43e"],["/useimage/index.html","d177fb475d870ba4dc3b297d44fa8468"],["/variable-change-image/index.html","b92215a4c01ad75d09eef82f0b371f4b"],["/variable/index.html","e629ebbf61811ea8b46d0dbc582f166e"],["/vnmaker/index.html","08ad757131be7e9f609d588fa78ab6d1"],["/weather-effect-tutorial/index.html","cbafc5ad43b321e1050dbc07403c292a"],["/webgal/index.html","8278f50bc168495a5f109ed6ea173547"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
