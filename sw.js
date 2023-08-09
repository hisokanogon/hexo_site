/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","2b8cddab09d5039144de15e763023704"],["/2player-battle-system/index.html","620057dcf8e1dcdcb1a41a331bfaf769"],["/404.html","7ea00f83e5416347e6c950b172d4c360"],["/about/index.html","61555e075c3c536dffbd27270a3accb6"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","730643ab107d2268c3f068f83ddcfb03"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","3f5a98cb26a65704e682374fe6b3e692"],["/animated-title-main-menu/index.html","64706b230303bd498694855809a5403b"],["/archives/2022/05/index.html","69ac7ea8ad4d5ff19a62a0fc7127aa35"],["/archives/2022/06/index.html","7078bf68ecb52962aee7922cd10d75d0"],["/archives/2022/08/index.html","c8cd4a1c60cec73db55e07a9e777e1c6"],["/archives/2022/09/index.html","736b7637fab65084150aa5edbbfb59c1"],["/archives/2022/10/index.html","b6d2aa972770d9f8eab1f09b8176b197"],["/archives/2022/11/index.html","5af1a64d5000d455984a2717ba8ab5b7"],["/archives/2022/12/index.html","2e231f03e215e520c6382481ade5b9f0"],["/archives/2022/12/page/2/index.html","173f86473c812c68a15e1047eec1b739"],["/archives/2022/index.html","2a8284c1f91e109f2998b890a4d1a8d6"],["/archives/2022/page/2/index.html","0d014d66ed7a4543a13afa29765f1690"],["/archives/2022/page/3/index.html","0867dbfaf6fde68c837494e23cf27f93"],["/archives/2023/01/index.html","570ecdb52fc5617d7ccae926da8062a1"],["/archives/2023/02/index.html","6161c52bc7a0aee841e8b1844bf07fbb"],["/archives/2023/03/index.html","077bd4d2cca870e0832e48ead7671509"],["/archives/2023/04/index.html","a23dd1485616bf1b35cf3abda43f7a88"],["/archives/2023/05/index.html","bf7a6be72e79108c1428739a63a87570"],["/archives/2023/06/index.html","40bd14c5e9657d0313a8ecc41b6c378c"],["/archives/2023/07/index.html","08c1fa94a4c7975d2c66a94473d57179"],["/archives/2023/08/index.html","8297a84e732da8d7810e252e870ee59a"],["/archives/2023/index.html","00a7c04bfdb63a0f688edc1d449b1873"],["/archives/2023/page/2/index.html","af5901c31d5be66a9bc1e6be4deaf1d5"],["/archives/2023/page/3/index.html","1baa78f2782928e01cfce55c39e46dc0"],["/archives/index.html","5061e5f0afed780560bb5e15d45cc98c"],["/archives/page/2/index.html","4573923a6d82ddc7963011ac127d7f4b"],["/archives/page/3/index.html","f139b95ee81ac9fc0174844f92d767c5"],["/archives/page/4/index.html","f387d115ef976fcc211e61ff18420bb0"],["/archives/page/5/index.html","39b1fd4b1638156ac477497909d03bf7"],["/artitalk/index.html","a50ee7253d81e2ccf83fde1415c5f24f"],["/battle-beautiful/index.html","8c74adbca46db0f8be98f8e499928f92"],["/blur-effect/index.html","895a412f8cfa8907b845b358f99c36f3"],["/butterfly-custom-tag/index.html","cce235333c5f45985bb44d9440ab8656"],["/butterfly-plugins-faq/index.html","0269f1bbec59d082ace6c29baa30cac2"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","52c918f1f68046a7e02b09a96403cf3a"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","3df70bb0b70721c797cecccdd7ef49f5"],["/categories/announcement/index.html","9202001cf4c1e8b5e9527cfb3b22983a"],["/categories/diary/index.html","f5edadccd1a922e9f3b3fbd25f244e25"],["/categories/game-dev/game-engine/index.html","349e982aa428e8b3eae2de0fccce5ec2"],["/categories/game-dev/game-engine/lightvn/index.html","8afe2ab31fbeca8ff4f2c98957d7b004"],["/categories/game-dev/game-engine/nvl-maker/index.html","947e83f34548315a4f603ca3b3b0d906"],["/categories/game-dev/game-engine/page/2/index.html","bfecb6a3036f706f6007623645433d27"],["/categories/game-dev/game-engine/page/3/index.html","f6b9991641c36cc2a496aa0af913891f"],["/categories/game-dev/game-engine/page/4/index.html","2435c253c7ff473eedcc1292c0645b36"],["/categories/game-dev/game-engine/renpy/index.html","3be115fea46b990059dd14bcedb25d22"],["/categories/game-dev/game-engine/renpy/page/2/index.html","66abc20b5b715eb12eacc93905d513ea"],["/categories/game-dev/game-engine/renpy/page/3/index.html","7984049c88ba941b46a798667d2b5c69"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","a1bfcb35d818da3abb721919e02f184f"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","cf4f56059b21805512b37ab9358d8909"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","0b85c70a8021d259d7823d1b70040abf"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","5aa1a01e3f6c3230c09f3bc0ef59cf66"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","7c704461b7557e627d7da9e2724944e3"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","c61b4ef9e132c02327963415688f584f"],["/categories/game-dev/game-engine/rpgmaker/index.html","a0cd3efa7db82aea133e080ba305d8c3"],["/categories/game-dev/game-engine/tyranobuilder/index.html","fe35f6e3f24571656bafeb718768b40d"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","0a168ec54438a5b154d3676e219000a6"],["/categories/game-dev/index.html","ad4ec3995f1d351211af0da947731713"],["/categories/game-dev/page/2/index.html","50f6862ad65f875ad85affd5e79aaf2d"],["/categories/game-dev/page/3/index.html","10148561897c88a44694d3125e55cddf"],["/categories/game-dev/page/4/index.html","9ac3e2c02ca422a627d0614b15d8d0ae"],["/categories/hexo/index.html","387fd86552a4cfd78d2a48fc8151eee4"],["/categories/index.html","0ee3dba369cd1bd519b5253f33d2b9c7"],["/categories/material/index.html","760f47d68333f9022f9af9544440ea6f"],["/categories/update/index.html","b859dfc8dc38ac73912c20a3da7f8b4b"],["/change-according-to-real-time/index.html","f9351bba52661c1a144e5ffb2c116b87"],["/change-character-info/index.html","7cf3cc3bafd8be186a9a5771d8f7c019"],["/change-title-after-first-time-viewing/index.html","754121d63fd16795359ac6fdc61e43a3"],["/change-title-based-on-event/index.html","73add5dc2a4da5107803b6c97d71ff8a"],["/character-interaction/index.html","fdb42ebc5920932ab733152b27a51826"],["/character-stats/index.html","c2abfa554f521bf6bec7abb07597acbe"],["/chatbot/index.html","4f6be3dc37aea5b455d45eccf84c5902"],["/choice-time/index.html","62c1322ba26e2e56bc0a18f46d8303cf"],["/comments/index.html","40120cee2ed51b6d5b78c4565c99c48e"],["/commission-info/index.html","0f4b250164d0bc47fc33dbf1de3ea298"],["/create-button-anywhere/index.html","32fc606f5f9f1e7381cecc2304b2bfd2"],["/css/eurkon.css","5fc8bd40bf718c94d8828422b233938d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","b47e2af5d06d111c8f8ded1126108381"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","3407995fdf69b0b21db8b18ca870b430"],["/css/rightmenu.css","cd725d87cf345ec4d38022a9f148d95d"],["/css/siz.css","184f7981a36ac60225b03e3711e309d9"],["/css/swiper.css","5c1b31aeae5a8a56c9be420cca350914"],["/css/swiperstyle.css","22370a75d5634ba3cf412665200c8ab3"],["/css/var.css","711cd6e75ae741cfaf72c086ee663d02"],["/ctc/index.html","eab44d8b9adee037cef2fb3ba1ea82a5"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","db32d04bbe52921ba2186fb80b13d362"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","6ab22100e5a104d3f179b42eb0aedc31"],["/custom-launcher/index.html","8ffbe799ff96d4b7864bc3e976f9e929"],["/custom-loading-screen/index.html","c155251ca4fee15e0c577ec3c705538b"],["/custom-mouse/index.html","ec59ca925fa9db97fcfff7a3003ef694"],["/custom-music-room-screen/index.html","ab3951d4efc81db136c01983e3043eb8"],["/custom-music-room-screen2/index.html","0ba1d7ca0e93685fd32796977061edbb"],["/custom-nvl/index.html","a49f4ed012e1c0d6add23bd3f153b2ce"],["/custom-player/index.html","1f954fcb7e51516a964be4eee50e6355"],["/custom-preferences-screen/index.html","544f2e494254c842d1f4b9d8ff6d2454"],["/custom-say-screen/index.html","560782ad3bb679f63c08370d60b4a96a"],["/custom-title-screen/index.html","c6af653982bb9ff1d8d3df1deb276653"],["/define-npcs/index.html","4744bcda1ae8e810c854681df394dd0f"],["/dice-function/index.html","d605d64ff1276be21b9a5f09b3ae94c3"],["/disclaimer/index.html","ea787191864a7c81e1e644f9e25414c5"],["/enter-name-screen/index.html","319296a5ce852cf2e42b0e440f0cc16f"],["/export-game/index.html","2ef1c392c0434df37d364ee894c3741a"],["/faq/index.html","82c2fc09e8a8d68237d003794db29d2b"],["/friends/index.html","0e64583266caa8a97be4e3f5f43cfcd5"],["/gallery/index.html","6c8f06f45058f6069e7e45f497f74d01"],["/gallery/photo/bg/index.html","ed9886656cc37507cb31ef94e632d8ab"],["/gallery/photo/gui/index.html","408b93c9446e1ca614de9157b48b1c70"],["/game-only-text/index.html","119bd2a75aeac895863ec629e90f996c"],["/gui-017/index.html","492a46d56cfbcdae19a4b6f0addcb0ea"],["/gui-vertical-002/index.html","156ea5e8b101d0882986d5a2aed02a9d"],["/gui012/index.html","ccd86b2280d458f24797ce09a2c58d02"],["/gui018/index.html","41e130dd641353be1d73ca809bd50239"],["/gui019/index.html","e4ed3428d9ad120117df5242dee1ec09"],["/gui020/index.html","e0adf952fd56e739371a23cdc475d7b6"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","37955f4d8712c0360330b2252fbb672f"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","b785bc398b1a020f609d3de24b1e497f"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","44bad065a0e8f6be3be0a154682fd40e"],["/images-tip-function/index.html","8cfd8a04a0e89a4a527e3d4111597203"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","396c078e55a0b2c0f63e5fdaf23ee59b"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","3c7fbe08ca4a98f2c2d538123529f6c3"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","d8e9f586ca972061f40832080ff1d9aa"],["/items-sprites-effect/index.html","bacaa1a4f86e6d070698b466f29f8ff3"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","f5dab7f9b89ba3f6d5b41ae5c7263b94"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","de4518b40e27a84a02e180da08069c36"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","45bb146d037a82e70e5683b53aa749f5"],["/link/index.html","19218766c52e1eb21d4ed8e5f2db7093"],["/make-butterfly-beautiful4/index.html","3befa49a229cce0c7986cb5295cd7f2d"],["/map-puzzle-system/index.html","98494f5445fbcece96f8654eb855e01a"],["/maple-effect/index.html","9f07b2936a17b3714ac6cf3420db6ae9"],["/memberships-2/index.html","019d0e8eed51cb6016ea05861fa8fdf0"],["/memberships/index.html","74621e72cde0c1a1196ca1e2d9e6a153"],["/multiple-language/index.html","ab98069829a90b15164390df95fb3335"],["/name-input-assets/index.html","af817dce5fc0858c6e1616ae58ec6fc1"],["/new-year-event-2023/index.html","4456a5df80ab96b106c7381cbb2dfd16"],["/newsletter/index.html","30d7dcc17cc68d035f0b10aab080d260"],["/nsfw-limited/index.html","55ba1a2386b90cfbca8d254700233595"],["/null/index.html","3618a8ed6d310f57e4e61892c94b373d"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","c91a92144107115b17a0de06c7ab899a"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","14b34c052ae24a1a3911c3f61e6bc639"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","dcfc1ff41cf7e58b651621352f36d243"],["/original/index.html","86a5f20d063ee775d794e0ee42287c46"],["/page/2/index.html","43923d1b1cdbe6d3081fb64b71971ebb"],["/page/3/index.html","012004748ed3911f1c5c3faaebefbcd6"],["/page/4/index.html","327be63ad23762a5eb11e1e5903fcf52"],["/page/5/index.html","c01609d0e2cace91a3211a1a921cb313"],["/point-pop-up-assets/index.html","69a81a27c0664555e17b86caa2a7fc81"],["/pop-point/index.html","ce4bfe4086331f9942c080c7ed2c1eea"],["/privacy-policy/index.html","af6ecf7a14797a9da128617eda0f39c0"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","87566f7529225096804525ed19680adf"],["/random-number/index.html","f8d3c75b7827810eb6a0cdafd7f2782e"],["/random.html","1dd6d1d1ca0568cfade342bdcecbaa1e"],["/release-017/index.html","2e13ac3f3160e8767ca9e82cc7fb64d6"],["/renpy-basic/index.html","795b37ea2787b5214c1538cadda16f7f"],["/renpy-crash-glitch-effect/index.html","f9933946ba723898b8d0665503fc0de2"],["/renpy-matrixcolor/index.html","15fa67471f9903b3bd0283de4b0add08"],["/renpy-overlay/index.html","315eac0087be06f5d347b6a85c8b7abc"],["/renpy-review/index.html","8322ac5b739608c89b04be53c769249e"],["/renpy-typing-effect/index.html","02396c0d4d186d5b280548ff2f0b382c"],["/rpgmaker-assets-menu/index.html","9d1ca52d724d4a4c005e5fe02d059d6d"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","c3274ac45a280de0a4fa570cfab8ec7e"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","1d6201025f7b6eb6ad468a8cae49b0b1"],["/sakura-tree-background/index.html","c7ddcc7779212a1c2a63106649a01b98"],["/service-worker.js","1c9b4ae965bdadf53a62068324b8fc5c"],["/show-variable/index.html","b3db69ebf7c402e08830cae59a2bb313"],["/side-image/index.html","0c096692048019fcb47551a26136518c"],["/snow-effect/index.html","2992d3f99e1bf87ba24d829f3137e657"],["/speaking-animation/index.html","430689380cd9e51dc9507f0a62352b83"],["/splashscreen/index.html","2e6d881c4f642c86840b5936363a42ff"],["/sw-register.js","b40b01a8a7f6517aeb565e93e05298c5"],["/tags/Hexo-plugins/index.html","5b94d1076e62ebf3cf54253877926e16"],["/tags/Light-VN/index.html","f725468cdbfdc15a408c504e7b6effad"],["/tags/ai/index.html","8ec60a019625263d0b3e29ee21eb4869"],["/tags/butterfly-beauty-diary/index.html","e4d2d18c80764db711a8825aacd95011"],["/tags/custom-hexo-theme-butterfly/index.html","42815c6a115ff7d9e0adaa7c7432dbd0"],["/tags/custom-renpy-title/index.html","222f8520b69d0bbbfd55a190c375de3d"],["/tags/dialogue/index.html","f07bc2c42461aa33c1ea0835963a31f0"],["/tags/effect/index.html","5f4a00516370121ab4c33f410b17a938"],["/tags/event/index.html","8c295b4715d338df4f91e332d4f40328"],["/tags/hosting-own-website/index.html","07df777d1e53918e15d1532105a95cf3"],["/tags/index.html","cd094919261363c1bfa89e3ee46dcc15"],["/tags/itch-io/index.html","b3c9306e5a7d554c5a29c5ccaabe76bf"],["/tags/light-vn-update/index.html","7ce4da2639dce3d1315fa7769fab2660"],["/tags/nvl-maker/index.html","800423e7591278b00d8122b56ced015d"],["/tags/player-related/index.html","0b796d4bfc08d1f10c8af995850cb1d7"],["/tags/pro-tutorial/index.html","b21a0718679edebe5ee7d88024dc9923"],["/tags/pro-tutorial/page/2/index.html","5bf701f09ffa07546fd898f756a3b536"],["/tags/pro-tutorial/page/3/index.html","cb2e32f6a7279d50b9b25ea9df2d54e4"],["/tags/renpy/index.html","92882f742884b0a22aee013476072544"],["/tags/rpg-maker-custom-map/index.html","ad6066c8528ef28f20bbf137a9a66223"],["/tags/screen/index.html","01a9c31c01ce7165d9fc0106a166e1c1"],["/tags/special-function/index.html","1f7f0983f5429d5ffab772240cf71ca4"],["/tags/tyranobuilder/index.html","477b6d5a91da3ed12f020276ad595262"],["/tags/ui-assets/index.html","ef21729ded89917e13cbf9011b8415ca"],["/tags/update/index.html","283acd6adbba0966aaee5ddbc351c980"],["/tags/upload-game/index.html","5fc99f96ee1b2fce8a2a246ecea9c76b"],["/tags/variable/index.html","e826a4c21cb8a6f55904216b6829d785"],["/tags/visual-novel-maker/index.html","19bd3fc7c2ecbb76dd44b88a445180ea"],["/tags/封面製作/index.html","af9799089a8c8a43101f7584b3661b53"],["/tags/背景素材/index.html","a2b4370fd3c155f56783443d560715e3"],["/tags/隨機功能/index.html","0e781dca70356cdd2d4d45ad97af98b3"],["/test123/index.html","35edb38f35587a0727afb4810500723b"],["/textbutton/index.html","f018ff9b3384da3d5d9f044fbb7bccc6"],["/to-do-tutorial/index.html","d1b3d949881db48b462ca8f5d7304966"],["/tools/index.html","c891f2460deb3f359ad3d1ece9a73f25"],["/transfer-to-hexo/index.html","4d9305e9609e080372bab087f4baac23"],["/tutorial-update-history/index.html","0933b9319d27e40b8f0b25e8911c496f"],["/tyrano-name/index.html","19121f108b0de78c72bea8bca059b8c1"],["/tyranobuilder/index.html","39e08248de55e36f40a803d605b2a1f7"],["/undefined/index.html","4a928edcea1abcee33df251bd038e8dd"],["/update-20221211/index.html","14247814d8deb4f7bce89855e7be24c2"],["/update-20221218/index.html","deebbfb248ac0327233c024cccbae0d8"],["/upload-your-game-itch-io/index.html","98383c34bf04ae9fc99d85a252c6aa08"],["/use-list/index.html","4d33d3ed974de5849353c808120babb7"],["/use-nvl-mode/index.html","e3a89d3878f7bf99e9988e53d6987b51"],["/useimage/index.html","5a08d6f3186e5a0295fb8dd3e2eb3d18"],["/variable-change-image/index.html","757f0af318ce84c6b09d572d05d933d4"],["/variable/index.html","6a3529e375fa217ea81306a133cfa2f1"],["/vnmaker/index.html","e8988f4be2ea5d3bc92fba8131580400"],["/weather-effect-tutorial/index.html","bf56843136681ca348c244e54db90a03"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
