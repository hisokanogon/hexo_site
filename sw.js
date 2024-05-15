/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","9502268a6e44c1f69bc938592a54d264"],["/2024-future-plan/index.html","f4ddadef2ca7a372185d5b77a24ed762"],["/2player-battle-system/index.html","55c34267895da7453b6b62bd07a4834b"],["/404.html","dd22d82e3e025afa2031bd3e844e3351"],["/about/index.html","4525d726f7713b062333215d313c7aa5"],["/acg-creator/index.html","630ed5417ecc166f5ad1c459a4255a21"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","99fa7aff8d912404c0002d6d156abab5"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","3b88971fdaaf691e4a99a562fa55b3cd"],["/animated-title-main-menu/index.html","9c6239b63140de4f53b05fa86891139c"],["/archives/2022/05/index.html","8cff5fb6207b2e2967de29587305feaf"],["/archives/2022/06/index.html","2247a1cb6ee776bca520b65e2ed24cad"],["/archives/2022/08/index.html","55c322e6996777835697c0ca3674f8d6"],["/archives/2022/09/index.html","6149f75d068f950ec0ff626cde1b6937"],["/archives/2022/10/index.html","dc42726d1ffd01b3cc4bf8c0ca5aa134"],["/archives/2022/11/index.html","39aa803b0f80f79f43d4ae7a97898cd3"],["/archives/2022/12/index.html","d3259b41f3b2a55fa13051788d2a803b"],["/archives/2022/12/page/2/index.html","935af1880bc7f1d279ac5e5889de16fe"],["/archives/2022/index.html","4baa311d7fd9d4783595a8419f3d3ba8"],["/archives/2022/page/2/index.html","dee5145e6314ae1ae5e5d2b14d9f50bf"],["/archives/2022/page/3/index.html","0d8d90db7d9a702da15e51f44540895a"],["/archives/2023/01/index.html","5447b9e91947fae2800e8ffd9e6eb5ec"],["/archives/2023/02/index.html","19c380648353a5da86b8aab84c415c3a"],["/archives/2023/03/index.html","df4d4ec4a43ec0896fc918ea51095b2a"],["/archives/2023/04/index.html","82c2363bf7fe6ef859086b81a621cc01"],["/archives/2023/05/index.html","824aaf671f6521e5b780c8fd29d5e8fb"],["/archives/2023/06/index.html","05fb48fd34ede1601f5de984ab65be03"],["/archives/2023/07/index.html","76d9ea66ae1d623cf5d1dc77f6206116"],["/archives/2023/08/index.html","8ddcc17756f2d2a528923f0b0fc3e773"],["/archives/2023/09/index.html","7ac4d03e0c6e40ea13504974003e1e4e"],["/archives/2023/10/index.html","3b0ae7ce3b33612b3007b20db4b66be3"],["/archives/2023/11/index.html","85d2acfbedc6891137fca0c1674c07af"],["/archives/2023/12/index.html","eb3541c9639a38c9d10ee877c00328bb"],["/archives/2023/index.html","1770b823a3c0e4b0d338d7eb198d885c"],["/archives/2023/page/2/index.html","86ae12fdc47544ac93c0b627fdbc2573"],["/archives/2023/page/3/index.html","2fc1d7910b42fc09a4d51648465b9310"],["/archives/2024/01/index.html","099ede748a4e10ad79c00243e2b6921d"],["/archives/2024/02/index.html","7b85f0a3ff5986ccb00d6bbdbc24beb6"],["/archives/2024/03/index.html","90b974082547bcbbd8f409b4a763ca30"],["/archives/2024/04/index.html","4d5ba81dbf671cb0aa9a4b7868c8987a"],["/archives/2024/05/index.html","6869b882a5d23c06421d5071639d95eb"],["/archives/2024/index.html","4c3dbc3f3adeaa09ec2899023c9cf18e"],["/archives/index.html","d64df89aa79c8113a2dfff45f1400d8d"],["/archives/page/2/index.html","b00b13e81c73e8765f522744005b42c3"],["/archives/page/3/index.html","664efb74e048a1a8f928d67c2dd96916"],["/archives/page/4/index.html","7fb2c3dbc4b31586c737bec5b9c792de"],["/archives/page/5/index.html","89a249b93cc4b5419768937b4fd9dd30"],["/archives/page/6/index.html","476e2647b4660c431c3ed4f687aa0d06"],["/artitalk/index.html","6a4cf6a80d8a3fff07ca91d91e8d2ef0"],["/battle-beautiful/index.html","55b8fea77a19ec12d7241853a339329e"],["/blur-effect/index.html","e7b2dfef2ac1dd32fc5c76410f53aa9b"],["/butterfly-custom-tag/index.html","45cec66c48efc3cf7838694e9d59522f"],["/butterfly-plugins-faq/index.html","d9327bf162d9abbd1372b0b937a694d5"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","7143b6924ab546328ff3cf0f9203b022"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","0fe8ba284b0c88a8dfa0d37633e97f39"],["/categories/announcement/index.html","e9e9f994391db0b7d8c4e5a0f536114e"],["/categories/diary/index.html","f3ea7c49c88859b9e8bfe6ae1e7ff132"],["/categories/game-dev/game-engine/acg-creator/index.html","106b7b5dd7193228d5c6e453a0180f05"],["/categories/game-dev/game-engine/index.html","952a862730d156a0650b6412fc292963"],["/categories/game-dev/game-engine/lightvn/index.html","3263f43bd76ab894670fb29da9807951"],["/categories/game-dev/game-engine/nvl-maker/index.html","32c1fe2538c3bc8eef8c2982ad2197cf"],["/categories/game-dev/game-engine/page/2/index.html","325abb3f69f1b4b09deee58ae9b8a249"],["/categories/game-dev/game-engine/page/3/index.html","53fd77015263daeb6256964fdc1e0280"],["/categories/game-dev/game-engine/page/4/index.html","6f632ebc470dfe1a68a7b63dc999e262"],["/categories/game-dev/game-engine/page/5/index.html","9d4bea4e82ba0fbf4f2c3270c81ae191"],["/categories/game-dev/game-engine/renpy/index.html","99e33c9f507f11c93f48812701245a25"],["/categories/game-dev/game-engine/renpy/page/2/index.html","e6913b28ce312f0d3c4799dad2d347e8"],["/categories/game-dev/game-engine/renpy/page/3/index.html","a9c53757b3504a0bcdccc09379b3096f"],["/categories/game-dev/game-engine/renpy/page/4/index.html","eb455f7252579d4db1a0baccab9f926e"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","f54168f9675aa9acad6df50cf9613b8d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","088ec45c5f76efe9e9926520bd0b9238"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","e3fda8ee428c2cbdf4e261e9da37fac2"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","cacc6e906b3465c8aa0960d01c268afb"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","5e17846353c8708e27cc74bd2836c539"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","15b50f3771804c39301bc07e18e9aef2"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","27c0523e68c90830b462f31cd4be402b"],["/categories/game-dev/game-engine/rpgmaker/index.html","86149720464bdd13eac295b58920bfae"],["/categories/game-dev/game-engine/suika2/index.html","0002a0c3fe52dbd65ba87c74bb33297a"],["/categories/game-dev/game-engine/tyranobuilder/index.html","efe38bfc4f61da045ce6f02166ee9ff0"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","9452e35794d90c81183d678e8fc5a56c"],["/categories/game-dev/game-engine/webgal/index.html","e9685bd6f480d0f7caa53ce3381d81ed"],["/categories/game-dev/index.html","f96603287eb2ebf0b072f9d231f98a8b"],["/categories/game-dev/page/2/index.html","b732e401c853524cbb38b96acfcedca5"],["/categories/game-dev/page/3/index.html","41b9ee8618691f1ddf40d8256e9af734"],["/categories/game-dev/page/4/index.html","fb112a19a8200b8cb88660281beeb1f6"],["/categories/game-dev/page/5/index.html","b5f3529a6197bdf5e434f75712ac0cba"],["/categories/hexo/index.html","8feb300a70dcaaf0183e1a0f9a5700ef"],["/categories/index.html","ac2e73774a8cc9a75e69839cea574c51"],["/categories/material/index.html","c44f4f40c8312b275ebe026d03484d3e"],["/categories/update/index.html","e30a8610fe7d8d12bf517f68e583471f"],["/change-according-to-real-time/index.html","acaad87ec05f07c48fabae712b6a3bd8"],["/change-character-info/index.html","ae9c276c69dc66bb96aec11b299bf97d"],["/change-title-after-first-time-viewing/index.html","ed6e2457f574000e35b6e19480ba620b"],["/change-title-based-on-event/index.html","560faf64c1057cd99ab4e652096567f2"],["/character-interaction/index.html","6d074b49f96caa1f7e8976c278879aac"],["/character-stats/index.html","939c65ae61f0139870366d6878cf40c4"],["/chatbot/index.html","270889840a0e1c630f7f4ac53c9497e0"],["/choice-time/index.html","ab462bf025cae7ddb9a021258f182542"],["/comments/index.html","c05a81683500dd3b4fa69c53ccb8c6c0"],["/commission-info/index.html","a49463db472c932112f95f74ddd38668"],["/count-login-number/index.html","49fdd37c3c5a7d3c96aabeda26ee6a2a"],["/create-button-anywhere/index.html","f2b55702a46d27c425a15ddf2e687f61"],["/css/eurkon.css","807448d2a527ac38009b0f5fb83b8ef4"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","9d21e73455a6307fd235f9e10e03ebb0"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","4c987caef9074c2c8e449bdcfff9c5cf"],["/css/rightmenu.css","045a2a98f8c2f3282216ddecdd0e2eda"],["/css/siz.css","a2928aadbd7676b38ff9dd55af444949"],["/css/swiper.css","6643ce1f61ecd888fdb99b194ccb9e48"],["/css/swiperstyle.css","160c3ec41e8d7ae1ccd5c792209b9e29"],["/css/var.css","b155c1dcc4d41eb475bfa8a95629ff4c"],["/ctc/index.html","091f6c2dfc69d65cf2a666bc220976a2"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","d656941d9123bc35c1da4e055a7eaf4d"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","89c8a6f7e84956018dd2e524db4caf42"],["/custom-launcher/index.html","c52d348abe6bc10ffdc22b397af8ce44"],["/custom-loading-screen/index.html","d5fe94770af10a0f37ec84149d20ce8f"],["/custom-mouse/index.html","67fad76f77b26f8716e693d44b4fc3d1"],["/custom-music-room-screen/index.html","7d796ef95a83754d998e622a6928edaf"],["/custom-music-room-screen2/index.html","f40ecc9ca8bf8083ac3593ecd1bb22e3"],["/custom-nvl/index.html","bb4b6ffed00513885e1ddf928e4acfb0"],["/custom-player/index.html","6b075df40c9af7dc41861092c647206b"],["/custom-preferences-screen/index.html","c5d8f92b56f47e75495b286545fd7ace"],["/custom-say-screen/index.html","27b00697c5b99d7c47f86d71370f9a1a"],["/custom-title-screen/index.html","d97e9c8ccbfc02ea4221dfe4ee0d5d9a"],["/define-npcs/index.html","ce5eed229bfe15a964900a60dd0b5290"],["/delete-save/index.html","a2254653293201b8994e2baedf3fc775"],["/dice-function/index.html","449e7072075b7d38037abdaacc077edf"],["/disclaimer/index.html","859df5aaff2ebfa8becffaf5945f3756"],["/display-immediately-all-dialogues/index.html","eca0f218a2677f9ff5cc61c27c4cd18d"],["/display-real-time/index.html","cb416fb8d9f0735505cbcdb105c56cdd"],["/enter-name-screen/index.html","ae0c74652efb848d57030f61c89973ae"],["/export-game/index.html","ddb6bb37ede2819a42894633c1e78a10"],["/faq/index.html","41cf4e65c8f8d0fca065e5179790c437"],["/friends/index.html","b0a098ad6eeba37ed2dfdf9cd1bf3c16"],["/gallery-template-assets/index.html","447a398fddec47e3916a25d066753bbb"],["/gallery-template-default-ver/index.html","f337aa1d291c25825eed4e7acfe5e42a"],["/gallery/index.html","e2c04c164639bc155cbebfc70f93bc42"],["/gallery/photo/bg/index.html","e59438be9d8dbe476062b54ec5e77312"],["/gallery/photo/gui/index.html","7e844217db438a7023fdb15dbff599d9"],["/game-only-text/index.html","5c2fb20661f6501d965cf74d17348a56"],["/gui-017/index.html","101a493f0125912b4730e82c4fc5d51e"],["/gui-vertical-002/index.html","c50030bb0d2aece46157b9a65cefa3f3"],["/gui012/index.html","195212086f179491e28467874e72938f"],["/gui018/index.html","32ba517abf28d1de2d3f7f6512e31e61"],["/gui019/index.html","ebafa39ed44aa44fe082b21ada465b85"],["/gui020/index.html","06ff751ee03fef68494ece1b0f9f6aad"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","07d6462aa75ea0c64f08217a7701289c"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","d04e9dc22bbe19ffbcc656ab56d293be"],["/hide-textbox/index.html","80fc0d74394d580e5a5716d49f7b0081"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","0ef54c61addcc9970b79d58b7ca26e64"],["/images-tip-function/index.html","479008d9f418337928f2780be6a25234"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","7fb024ae1266d08efb317639fda0889b"],["/index.html","82a73916062aa7f757751787360da984"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","3d8141bae2fab97df44f99916a34d2e5"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","0f52d6b1fea7ca6bf731af7bb12d294f"],["/items-sprites-effect/index.html","4962d0a50ea903198ea67541579aaaa8"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","bccae08f010c5ed8b520977424aa163b"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","a5dc9bd7f79f9e8e873b85b961532e92"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","c0ed38df262befb54499faf0eabc29b5"],["/link/index.html","a07533c71ebabee8fd2af79f682fed51"],["/login-reward/index.html","e451c9a96892c3c8aa9a3c61c3ec9498"],["/make-butterfly-beautiful4/index.html","4383138ebc045cd6d72bd3d788b52f2e"],["/map-puzzle-system/index.html","661b302fcd863b07db90d0803dfd63e2"],["/maple-effect/index.html","45f3b21a84366a136904affab4374b9a"],["/memberships-2/index.html","e1e326b6e0153067679bfdac45c7f059"],["/memberships/index.html","5ef0f7d9b837e1a0ccebe57a8523d401"],["/multiple-language/index.html","61ca8b86f959f052f593c2811a21ac09"],["/name-input-assets/index.html","f8adf48d769c0e0cd6ea81bc48622c42"],["/new-year-event-2023/index.html","3ee5f8997a15cb808f18d82f0e02f9e7"],["/newsletter/index.html","542101ab4122da753d37670b903cbe5b"],["/nsfw-limited/index.html","d1f395b90af09cab637f114982c87846"],["/null/index.html","0ed2e8d2d661849c2a7a96bb4f0ae496"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","ca19cdac763a051c2721d781e5e13f7c"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","4d19562a5ab8949670555884eb242826"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","25c1b1628c63b73d8d2a2b99b5179cc4"],["/openchatai-renpy/index.html","6fa9c664c2313b3717d0f7e32e89d9c8"],["/original/index.html","f84902b75c88c935cb3c8d3d92e4fc85"],["/page/2/index.html","418c86d349c262ae66067da718c602d5"],["/page/3/index.html","a68cbead9e8729359a6821c58428a89b"],["/page/4/index.html","9998e76085411ede96afd464cbf1fbd8"],["/page/5/index.html","5e51ae1af0681016a893059e961f3f87"],["/page/6/index.html","351a3e65e86d3c28667fdc1396bed846"],["/point-pop-up-assets/index.html","d7df1cc7b96e331a4478ccdb4d409c5f"],["/pop-point/index.html","3a46adeac1649b824815a208265cddbc"],["/privacy-policy/index.html","bdb16d189986a241ffbd64f66cbfd7ac"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","bb51ef8364962c44b77d5979a50dc632"],["/random-number/index.html","bc7dc0d1f25dc0b4fccf5971d02fd886"],["/random.html","932a0dbb6dee6c50ec50d9e066ba1b9d"],["/release-017/index.html","4e8ce6f9a7bda24bc43f97ba6903e980"],["/remembering-choices/index.html","419a5c8555e5b5532b4b0391f821c731"],["/renpy-basic/index.html","dea6a3639d834601fcd65618dcf3624a"],["/renpy-crash-glitch-effect/index.html","fa97e5f1f8328f6fed21aa28c25e8382"],["/renpy-flip-image/index.html","026d682ec24dce3cf40153fbedec2b7a"],["/renpy-matrixcolor/index.html","c9225601e298d2f3dfc663040cff75c4"],["/renpy-overlay/index.html","64203e8022c600a9718b0a0381175d33"],["/renpy-review/index.html","ddbbbffb4e5a9670366b4a22710f1a2b"],["/renpy-typing-effect/index.html","123a8ad15b6e997dd7a86533a9a172eb"],["/rpgmaker-assets-menu/index.html","f7c9b6b742bfa5db17e59bee3cf97dfb"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","8eb59436817ae6f480241043b0f525af"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","0388e20efa4ae1f71d74d38ef2b7a63d"],["/sakura-tree-background/index.html","9f3b15dcd19a4c338cd6831f2efea237"],["/selected-button-style/index.html","b9469bfe5c93064a243282f1830aed14"],["/service-worker.js","b358aada34079c408d34b338a211a9f4"],["/show-variable/index.html","445383570e99a30a97db7b1bdc85b4e5"],["/side-image/index.html","1dca03a0592c3bf7682047e84582f4d1"],["/snow-effect/index.html","8e6b40faec4297ba867292058b5d77f1"],["/speaking-animation/index.html","d13fccc2cf279865895aaea43d197801"],["/splashscreen/index.html","8e7e6a59375692d01305913a7c0f341d"],["/suika2/index.html","fdf4a949360f6444dfce90641b175480"],["/sw-register.js","e889ff9c6bdba5cda9efffc19177888c"],["/tags/Hexo-plugins/index.html","3a000ba62ef16022b9449a36bffc357f"],["/tags/Light-VN/index.html","0fee12eed65b715776b0ce849de599a4"],["/tags/acg-creator/index.html","323aad7f426c019a7798b5535ff7cc41"],["/tags/ai/index.html","fd3d3d6759ea0e48bc7310a64160638f"],["/tags/butterfly-beauty-diary/index.html","9006efd15b855fef7ec1e463136ab376"],["/tags/custom-hexo-theme-butterfly/index.html","27cd46093e1b6fc19377144d56987c08"],["/tags/custom-renpy-title/index.html","3f8fa3ab6b8aa7cf64ce3be110b8f856"],["/tags/dialogue/index.html","1d57d3e3c36e4209d5cbbf1f201ae786"],["/tags/effect/index.html","b7a53a98120b6ed98b21ee604f0bf11c"],["/tags/event/index.html","2c7a998fb4a4ae402e5b5cfe211451bf"],["/tags/hosting-own-website/index.html","c87969acf94a0c9c17da8e6fa89fa007"],["/tags/index.html","c6299b1c9deac778dea64eea8da5a995"],["/tags/itch-io/index.html","30b65ab920be53d8d75d8feccafd4dd4"],["/tags/light-vn-update/index.html","5712d05fc5b35b487bc05cb7e6cc0c3c"],["/tags/nvl-maker/index.html","257a6408d346adac64379715ea0fbe45"],["/tags/player-related/index.html","08c8109a57502b99ff15c8a2476193f2"],["/tags/pro-tutorial/index.html","6736ac7715ab896eddb0abdfea973ad1"],["/tags/pro-tutorial/page/2/index.html","7dec302a32c37ab3563204cb0bfdcf46"],["/tags/pro-tutorial/page/3/index.html","5133528cbcbc1aebf33285aad88723ae"],["/tags/pro-tutorial/page/4/index.html","804bc069a5b88acfae3b6ef6957e60d9"],["/tags/renpy/index.html","325cef673c0be8ba58f3c4bef0763335"],["/tags/rpg-maker-custom-map/index.html","631d31b32714d61181539d7481654cf2"],["/tags/screen/index.html","61d3e3e8c4f8f47fde39c0ee3f31dd71"],["/tags/special-function/index.html","62e3f28e6dc62d6123cb7e0e262c6eda"],["/tags/suika2/index.html","1188b04eacfdc48aa1a512ca1ae032eb"],["/tags/tyranobuilder/index.html","b736c62a5ebc6808740a83fd5428823c"],["/tags/ui-assets/index.html","47c001e30956110a4ba31397f799ed36"],["/tags/update/index.html","695b1a43c3c950d59ca7824eb86b1cfc"],["/tags/upload-game/index.html","ab500b37c2e88b3d11665a70da3fda05"],["/tags/variable/index.html","a29939020a315bee195410c1534a7bb8"],["/tags/visual-novel-maker/index.html","d18537254f4f87f7c438eb04b863ab4a"],["/tags/webgal/index.html","6047063135428af33d7a78204650ad10"],["/tags/封面製作/index.html","01116e15b7e8ce4fef7824f32b872fd9"],["/tags/背景素材/index.html","c4fa8b83c8982e988f029eb1fe093626"],["/tags/隨機功能/index.html","9f38e60790f80e39dc29cc1a55b09f29"],["/test123/index.html","fef2a14915692dc22c0cceb72d92b262"],["/textbutton/index.html","1762c95796316cc48a1c2f09a18cf13d"],["/to-do-tutorial/index.html","ce7fed72637c5cfae889eaeaea3f180b"],["/tools/index.html","64299a6604ef4ee9b64ce3ec7e167803"],["/tooltip-function/index.html","ef64c6d236eaaa19d14972fa62cda3c2"],["/transfer-to-hexo/index.html","9df58a0522f447ccf2740edfba8dd80a"],["/tutorial-update-history/index.html","6efa556d0875f425e225ee3716b2cdeb"],["/tyrano-name/index.html","62fcff309ea77d72c542418542986c69"],["/tyranobuilder/index.html","8febcf2c1799cca4d5992e30024f4313"],["/undefined/index.html","277b2bb9a24c34824256d84dfac7bedd"],["/unskippable-video/index.html","e0f509ef4f03f1b602fa1ede0f1d17cd"],["/update-20221211/index.html","57ae58100c5bb1eef891f348f90399eb"],["/update-20221218/index.html","195b8311a76d259d5d43c5d4d32ba67f"],["/upload-download-save/index.html","c8210c66b9c1dda6b968821e5b4edb6f"],["/upload-your-game-itch-io/index.html","920770e77455b41eb50e8da11f360de0"],["/use-list/index.html","aa9d14d4c9d33d816c63e4673a6a9908"],["/use-nvl-mode/index.html","141aaab7a2a1c7aec80049ba416c5f91"],["/useimage/index.html","d129637cfe45246b42a2f2ef1b7238f9"],["/variable-change-image/index.html","90fe419f1084093a8ba3932be297ad09"],["/variable/index.html","8ec6a05fbf3f2d944aba0e22f105af49"],["/vibration-function/index.html","d5ea362895785647b55b3132d10291b0"],["/vnmaker/index.html","b48965658717204200f5f379ecbc26e1"],["/weather-effect-tutorial/index.html","133ce486da0df72bb34295cf8520cc0b"],["/webgal/index.html","5a28fbed938e46e14d082e62aa72aa56"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
