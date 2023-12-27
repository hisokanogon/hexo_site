/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","7c16b74d036660150040a6ecb9bd329a"],["/2024-future-plan/index.html","58e84bb2d7f718b05f41c199a5031e37"],["/2player-battle-system/index.html","0d51468b2f9756b46c9717a98e43b5a5"],["/404.html","e792f6fc4cb810bbffee615bc5607bb8"],["/about/index.html","08c8592dc2116c2cec4698fb012bd8cf"],["/acg-creator/index.html","2eec1a88477fbb6d0f22cbd112bba1aa"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","944080c196321006102e5b07f22863c7"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","86f898df8dfbc6f634b8dc100511b6e6"],["/animated-title-main-menu/index.html","4fd49eb3d234ce96f61522b1c3d578d1"],["/archives/2022/05/index.html","0e127dbd2523bad3caac731720900ff0"],["/archives/2022/06/index.html","da622a030eb1a6b84a4aef6763d0ebf9"],["/archives/2022/08/index.html","0a7d6b6a37bad178621fb6cdd300c4eb"],["/archives/2022/09/index.html","36f71ec79c838cfc1b2cbb6c14d9de37"],["/archives/2022/10/index.html","cb2e2e4f6b6602a6959e01d8b2bbb440"],["/archives/2022/11/index.html","be667d5b65881fd96882c89ee1990fa1"],["/archives/2022/12/index.html","c392c71f5b1ecea4bac79eaa1473f241"],["/archives/2022/12/page/2/index.html","722c44a859179fc24f6ed175194d25b8"],["/archives/2022/index.html","aaf9fde9ad3fdd8561d1407fe10a4275"],["/archives/2022/page/2/index.html","f56f3612ef00c432a71b9895f687e9c6"],["/archives/2022/page/3/index.html","ea007ef94a10f50cb1d4ad4a9f26fb1d"],["/archives/2023/01/index.html","5447e8c4712c533c06f36f4ac9d66574"],["/archives/2023/02/index.html","760f1ddc450b10cb75c3bdba0ee37018"],["/archives/2023/03/index.html","6540083fdec0765a7717d1f786c825ef"],["/archives/2023/04/index.html","2d5f8d48c7e35ce6f17b2228ec7464a1"],["/archives/2023/05/index.html","d62437e8d0cd55ffdc003cfd1db7fbb3"],["/archives/2023/06/index.html","3132c412fb1aee8f227278d88c02aca0"],["/archives/2023/07/index.html","7953c4653286ae6cf9a1fa41ea53af15"],["/archives/2023/08/index.html","eb244d6b495e5caf81722b7a92a59e50"],["/archives/2023/09/index.html","e3e791449775f229937aee8e71d749dc"],["/archives/2023/10/index.html","cb46fe9b39958f3b94f7b825b92526a5"],["/archives/2023/11/index.html","7b9c60f64c3e7b67458bb8f2f4fe9f18"],["/archives/2023/12/index.html","1a87cae766078b6caf3dab65b27ff9b0"],["/archives/2023/index.html","4828e260f172cf4630e28c12bc8038af"],["/archives/2023/page/2/index.html","e1186c954ad1e3a8c0f06fb11a9f35ce"],["/archives/2023/page/3/index.html","21966cc5ce29d74d8e4ddefd4f09625e"],["/archives/index.html","9260591e6473d44b3d537d2cf9eac7d5"],["/archives/page/2/index.html","258284a77ae0ae3884e6f5c05993247b"],["/archives/page/3/index.html","c84a8f24fc0c06f186db74aed43a0d09"],["/archives/page/4/index.html","cba92735aae0c7bf5ba204347d06ebd0"],["/archives/page/5/index.html","acdd023284a26e0ad3fac1bbb7468ee8"],["/archives/page/6/index.html","32b64c37d2e598bd0bb9810f9d0927af"],["/artitalk/index.html","4fec44355d71735fc8d82438a55af3be"],["/battle-beautiful/index.html","8936eced111b6e6630f6234af56f046a"],["/blur-effect/index.html","f27009cab66cdbb795c7d5d4a6dbf41a"],["/butterfly-custom-tag/index.html","7a615c20a449c0a6662169c7cb03e604"],["/butterfly-plugins-faq/index.html","7c40f7554037db090541f16e51d22bf5"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","a8cedc87bc4887f7d3c4eeea8a81da85"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","ce159ed8f7e02203b796842c138e6adf"],["/categories/announcement/index.html","6a1007e1aebf5e2a3e6a9155b798ee89"],["/categories/diary/index.html","e327a4f01b7821f15acc0ab3b8f4f54d"],["/categories/game-dev/game-engine/acg-creator/index.html","1a3e367d10f3dc622929eb2b17cfc6fb"],["/categories/game-dev/game-engine/index.html","5cb4d3d9511e71797c5b539fd1daaaac"],["/categories/game-dev/game-engine/lightvn/index.html","0b4a03d3c9fd0632f047514f5d68e23b"],["/categories/game-dev/game-engine/nvl-maker/index.html","64027baef526681c759c61db2b75376e"],["/categories/game-dev/game-engine/page/2/index.html","e490cd0e2c90b0035ef3061c15c57592"],["/categories/game-dev/game-engine/page/3/index.html","07f7ab8c3505ef2e866b0661ee8ab4e9"],["/categories/game-dev/game-engine/page/4/index.html","abd818e2b6f55e646f5124c43c380b80"],["/categories/game-dev/game-engine/renpy/index.html","aae7e88d209c9159dc82403df97c02af"],["/categories/game-dev/game-engine/renpy/page/2/index.html","a93a0e323202a5fb9248fe70bd95e0b5"],["/categories/game-dev/game-engine/renpy/page/3/index.html","52790fae5eba800bde6f50693fa7656c"],["/categories/game-dev/game-engine/renpy/page/4/index.html","11b2fe2e4bcb67a6929ca4d6e3e571d7"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","11d2de7e32577be15ba07ef7c6c04ec5"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","88baeb69d7ce86bca9133a70142639a2"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","bb6cba2df5b4837fb7f8c01a69e5325d"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","14b1ab39a9161a72644d4e91da95cb4c"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","732a444c6a552ffc2ce0d8bb7d0fe60a"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","d26147f8f385cb341bcaeb672a4e68ea"],["/categories/game-dev/game-engine/rpgmaker/index.html","9d2b6b72da51c5bcad9fe9e00f0a8847"],["/categories/game-dev/game-engine/suika2/index.html","67e02d43878bd5696565905b96445117"],["/categories/game-dev/game-engine/tyranobuilder/index.html","4c1eabd46ef4e240ff491820064ab180"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","a92336e314cfa2a81f91cb12486b1b9b"],["/categories/game-dev/game-engine/webgal/index.html","2a47594f3218cc55eddcccf538c2fcf8"],["/categories/game-dev/index.html","a03b7893412b6c368694b9b72ff3abc5"],["/categories/game-dev/page/2/index.html","cf80d23d1d085ad7f1555823ad87e77d"],["/categories/game-dev/page/3/index.html","a6e984419db55c5a80a264108401a1a2"],["/categories/game-dev/page/4/index.html","d66049b11faefcda2e5b4c3d4049d779"],["/categories/hexo/index.html","97975dc8fe41a5292419386dc127309a"],["/categories/index.html","934b67e57dab80ae4bd7bf97a0191ad6"],["/categories/material/index.html","cb33c48ae2af2e9799275b8ef306b860"],["/categories/update/index.html","531ab2b87d588ee78cbec0f3a90dae5c"],["/change-according-to-real-time/index.html","4af87ceeaae4ad9dab60f6b3926ebc1f"],["/change-character-info/index.html","72a56b99cc3946920fbdefc8c54cc7dd"],["/change-title-after-first-time-viewing/index.html","fefbac12697150675726e8fe17e8786b"],["/change-title-based-on-event/index.html","9cf7614e79e2c9bc3f4475a6b2abec1b"],["/character-interaction/index.html","f258a2a4947b18a1a4e3537b2d9695e8"],["/character-stats/index.html","791c06f9808a14c9da117034f2ae39b1"],["/chatbot/index.html","75e2da334530b8e7e0a3cafc13bd3c3e"],["/choice-time/index.html","c634634b1fc589989d2492770f333bb3"],["/comments/index.html","f8a564b47279e374bb4eeae2bd2f4352"],["/commission-info/index.html","ba2c6534b8cd461b32d02c69f9db8d57"],["/create-button-anywhere/index.html","658af10329d1fd91c580fce152c3d5a2"],["/css/eurkon.css","c3c918a49ec717f7367877e7e996854a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","e75a10324d118d61523198d2d85ec01b"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","6875958255e05b2400ba0895f09ddd65"],["/css/rightmenu.css","64ed4741ad96d553646766448ccb050d"],["/css/siz.css","cd0fda31e450a649ed91f93d2699dd0e"],["/css/swiper.css","776145c78f21369910f7e3bc440a449a"],["/css/swiperstyle.css","fdda66635a2a868ae9c41713a7180988"],["/css/var.css","73990bdf9cf5c48b1f588daef615d69d"],["/ctc/index.html","a79bf5930dbd7cabad051319718ad3ed"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","158c198dc15a7d999ca191b7588ac350"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","7b40f7e8b49e47a85b126da91684b83c"],["/custom-launcher/index.html","99e5dac60b9632a39e93c62660385796"],["/custom-loading-screen/index.html","febbd1c11a7df7e76b8c5c6cfd8d770f"],["/custom-mouse/index.html","70631887b3fc30c0ef7f7f936a278042"],["/custom-music-room-screen/index.html","d7ceba5550b26ba1251fb69012943d61"],["/custom-music-room-screen2/index.html","3bf35d57f5ac228c5db911bdc6973f4d"],["/custom-nvl/index.html","80ced1136f1a8a82aa8bba01c38e875b"],["/custom-player/index.html","b9fa16faacba658f7f1cac28e75a7920"],["/custom-preferences-screen/index.html","9a8559fc3616579ce3be4d3158257f7f"],["/custom-say-screen/index.html","9c5a3df95244269e08fd7cb62f1b1d10"],["/custom-title-screen/index.html","7d89e5d5a6459953f90d9b094091add3"],["/define-npcs/index.html","ffbe0bc7261e515b9840ce7cbb754ccf"],["/dice-function/index.html","aae8cf067ce96d80c03c42bb8f48c8fb"],["/disclaimer/index.html","3d78073a466689f628f28612962114b8"],["/display-immediately-all-dialogues/index.html","717c15e225877c3c279d22bd64cf1c42"],["/display-real-time/index.html","3a73d8dd53430193f76386c7855c583a"],["/enter-name-screen/index.html","1d18f8f79227d20d774aab41483456a5"],["/export-game/index.html","7ae1fc840aab36a1d329af281393de04"],["/faq/index.html","ebd2f8eeff3a4345e552f91b31dd410c"],["/friends/index.html","19b746663536fbdf4a701443408fc550"],["/gallery-template-assets/index.html","825e27c74f81a7c300341251df9c6499"],["/gallery-template-default-ver/index.html","1eb4b4d8ef583885b7d45910a73a350a"],["/gallery/index.html","aa253f2d0f0eb64c669b9786be12c55e"],["/gallery/photo/bg/index.html","40bc8c5399d8c17298f143248f3a493a"],["/gallery/photo/gui/index.html","e316a789779db4c3e805c1078ee29673"],["/game-only-text/index.html","9d071bdf8c7533507112a1d9b296fe9c"],["/gui-017/index.html","08d2ba9c0c0b4e57f3f50c3670ce47ca"],["/gui-vertical-002/index.html","9d62ff3b008140231e821da4f24c54b1"],["/gui012/index.html","d9b71434044bf512dbefcbb781f18267"],["/gui018/index.html","06f3ed771538b96e16377e963a3350d8"],["/gui019/index.html","eca2603abd7c8239239a699c1de91556"],["/gui020/index.html","277b4d5f96ae5d4f79b6cd7021d336f5"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","41e1c77080e79bfdae20c6e33710b4d1"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","77ab659ec3b59e43467d0c89c486bed5"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","3d6d148378e55bdef2176e9b91590977"],["/images-tip-function/index.html","9787a6934049a858142ccbf6fa3ef60c"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","4829e8cdeb1dfafb5e43f97f102624e8"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","834cb18382b278ebc619694a7c45dad0"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","dd1f1a36a351b49879f65372aa653b45"],["/items-sprites-effect/index.html","4549ec2899d6dbc990d4ef7cc13e230c"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","b6dc4e1afaaa1e46ff778373678960fc"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","769270d66e92dc84aa1597d0729811b0"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","218f2b98f3fcf3ad9d822d6786c4173d"],["/link/index.html","62ef0d9854d71e44b2013ce83438b1c5"],["/make-butterfly-beautiful4/index.html","f1db2eee7ec5e7ec38adf1c16f946b38"],["/map-puzzle-system/index.html","3d8cfd38c7d0b3eb02e9406a56685af4"],["/maple-effect/index.html","775e58a9f7df90650a9fee98b284db91"],["/memberships-2/index.html","2df175ead0005a2a84d38158ddff3366"],["/memberships/index.html","af4480c075bc934bacbf75b8e40b5ffc"],["/multiple-language/index.html","1adafeef780b03dae60075d894152e47"],["/name-input-assets/index.html","39df4e267621b3c4bcf95e3954209e5b"],["/new-year-event-2023/index.html","f08f09fe7303a2267517128459db36a1"],["/newsletter/index.html","212de5f4ab1b78282bf549016032b0ee"],["/nsfw-limited/index.html","d5ca29b6c6a5f504a63a22ed229037b7"],["/null/index.html","0d0b09cc75479127581d967bfc64887b"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","970e0122dd4f1b6f9c60e139dbb7da55"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","1c36560cc00d14ac96cbf827e0fcda44"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","f83842e199eb3157b909c1947e12e8a5"],["/original/index.html","eb9b8793447f05d2690c877daab829e1"],["/page/2/index.html","fd34568b28a9f1f8aedb296ec9f388b3"],["/page/3/index.html","3d32b30f9f41196a1152c02787561123"],["/page/4/index.html","5a4023c63bf35e4dae2bfa33dcf67d62"],["/page/5/index.html","99bca6808bf00c482c5f1bfa76ae61f6"],["/page/6/index.html","938366db49113e18349338c7e014b778"],["/point-pop-up-assets/index.html","a75e4f69ce4d78cbc6e8a9a2c41e2be3"],["/pop-point/index.html","ec1d47e87f8326ac0a8fc4b1207cb2b2"],["/privacy-policy/index.html","8443169bf11327b40953888ffbb84b00"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","51c35f0cdeb976f8ee0d048dc01eb566"],["/random-number/index.html","2e0b63ae2c19f6efdc5953f5b7303a7e"],["/random.html","4149b4843f947f13c959cbaa348e9c87"],["/release-017/index.html","b3f0d5a4560482407e883fdfa7a65b1e"],["/renpy-basic/index.html","04943fc0ba2f1f906f6e9d0edb765d48"],["/renpy-crash-glitch-effect/index.html","f17b9f0994e7246035b7391228fa66fe"],["/renpy-matrixcolor/index.html","4e3c5f5d7cad054dfa56a7cad9daa128"],["/renpy-overlay/index.html","032ece4bb45920c72bdc118a522b08b7"],["/renpy-review/index.html","f1e99fc428615987b3750a42b5508005"],["/renpy-typing-effect/index.html","69aa8729b8a9aad4fea35605e574bf21"],["/rpgmaker-assets-menu/index.html","71f78fef64cd5af1e82f87d99c2a0c43"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","648a31262c780ba38b998c0d0ba01daf"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","7694d438d9fcc0ecb091a50363e41e4e"],["/sakura-tree-background/index.html","3caafa8d3beaf714b53ad45d894c271f"],["/selected-button-style/index.html","e129675750bd0aaeb7df7ef3167826c3"],["/service-worker.js","823427c68de7cff69e472ab5f07807fd"],["/show-variable/index.html","a8ae3b4dc49d732f530fbf9a165f82d5"],["/side-image/index.html","5309d47b592c64313401dadb8ce03568"],["/snow-effect/index.html","0b170ae5b82d94c9ac31cab80e4dba15"],["/speaking-animation/index.html","ed21dc88f20f98ab851832d1fb985243"],["/splashscreen/index.html","8e83fd0fcdfe4012e9133cb2ae951b6e"],["/suika2/index.html","678d7368a9267d00ab6147e8d4f554f6"],["/sw-register.js","b6ef33ee64d8ddbad19669f4ff82042a"],["/tags/Hexo-plugins/index.html","4cd8714cfec012c047ed69ec11cda4da"],["/tags/Light-VN/index.html","77c1512cf07d732bd5e141720b94e2ca"],["/tags/acg-creator/index.html","84d42f04ee428485f8a993858a6b5d30"],["/tags/ai/index.html","39e6c15061bdfed1481beed7fda18732"],["/tags/butterfly-beauty-diary/index.html","fac20024e7e4c66cabf35f6a791a8dbe"],["/tags/custom-hexo-theme-butterfly/index.html","553e1b507121473cdc6cb88c59cc8502"],["/tags/custom-renpy-title/index.html","aef9f4640871dc762b3533a39b98752a"],["/tags/dialogue/index.html","6484d611237c2a8296393e9a461b2ff6"],["/tags/effect/index.html","f9b5c2b4c82585fcf87dd90940b3fc51"],["/tags/event/index.html","da87f2a29665f15b135d9f8fe5e5769d"],["/tags/hosting-own-website/index.html","4e23e71924f3c9707e8ab14755a2d127"],["/tags/index.html","09c831d9a04788d48950a48410d32df6"],["/tags/itch-io/index.html","e8b7d465a0de53e0ebf13c835543664f"],["/tags/light-vn-update/index.html","68f4bd7b9fbb9e67e5abbc6b2ad904ac"],["/tags/nvl-maker/index.html","eee396b1315b4b20a03812b979447481"],["/tags/player-related/index.html","4a1051a087f7b8c23f8b75a59680f584"],["/tags/pro-tutorial/index.html","2106ff76ad3fcdf8b4b0458c26486340"],["/tags/pro-tutorial/page/2/index.html","7a1ed26a0526704886eb0d781f31abe6"],["/tags/pro-tutorial/page/3/index.html","0b296afa79315b0be8f71ed2ad69c9bd"],["/tags/renpy/index.html","cc782c8ee0b783ec9700c1c10222fc44"],["/tags/rpg-maker-custom-map/index.html","ea3c74ad215f02f1e58dc5737fc72515"],["/tags/screen/index.html","98919e65570544de563e35e0a45c630e"],["/tags/special-function/index.html","0cde157f1cf897d18822b0ba2949ffdd"],["/tags/suika2/index.html","09faf730f31a6c1e59f56130fa144d27"],["/tags/tyranobuilder/index.html","19a1b750aa7853474cdfb89e93eaf357"],["/tags/ui-assets/index.html","3568c94384ed1e062477dafa511b305a"],["/tags/update/index.html","14cab643e49bd80d13daf3b42282a5a0"],["/tags/upload-game/index.html","30aa590e3ac4bd825521db5667fb15a1"],["/tags/variable/index.html","64205b1a5831ef68d2dedd31965cd951"],["/tags/visual-novel-maker/index.html","65f9c22c58c0a7695d1181857809a077"],["/tags/webgal/index.html","5a03986b56c10bc5aa325af855bfbc9e"],["/tags/封面製作/index.html","893ba8609429864b5572739d3580ce65"],["/tags/背景素材/index.html","1a7d7e6a3c6e06dc0101b75483797352"],["/tags/隨機功能/index.html","080c37f2637375cd7d898a0b97aaef50"],["/test123/index.html","4ab2bc657c8b8ddcce0b1400f37d7a9c"],["/textbutton/index.html","458e5c9dbf7082809ad9f8dbb86d217d"],["/to-do-tutorial/index.html","acddeae7eca1ca931360cf80b3402002"],["/tools/index.html","f7dae4d449acf604066b912cba0ebcfa"],["/tooltip-function/index.html","c237fafd9ff8b1c68fd398e0ab076786"],["/transfer-to-hexo/index.html","e5f3f9a3a69bcbcdf6fb1915e582f9ce"],["/tutorial-update-history/index.html","eacdd0f98d6f7e307fa038c280b90a87"],["/tyrano-name/index.html","192974706a60fff5e93f7d95ecd3c202"],["/tyranobuilder/index.html","ec6695e8c4ceb3351d1a8ae544963bff"],["/undefined/index.html","ab5127b62732d179ca4bd249c3868935"],["/update-20221211/index.html","f8a91292680b4edbf502815734d55449"],["/update-20221218/index.html","f33ab48b3f4b18a5b29d12e29f351ba7"],["/upload-your-game-itch-io/index.html","5134d6fd63aa49e7fa2311a169c6e6a4"],["/use-list/index.html","f366e531b470f4731b2945c15708fa9d"],["/use-nvl-mode/index.html","950cc601912cf0e8f067899a830414ef"],["/useimage/index.html","ecb8de4fd88041c5acdee6273b8cfeaa"],["/variable-change-image/index.html","0fd69051f883d1d5d309460f32ac7c7d"],["/variable/index.html","3f41474f0e2a1ca1741dc576c461b507"],["/vibration-function/index.html","8e07b322783e7799631f1c183c78e292"],["/vnmaker/index.html","71ccde015f608bb31a3a117dca7887af"],["/weather-effect-tutorial/index.html","1b8cb22ed151371b6e630de2fe6604b5"],["/webgal/index.html","56168006d20d0373509870ecab8e4ba8"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
