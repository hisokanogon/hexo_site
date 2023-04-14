/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","a3fd448b58f3a0f7f263d70e64adce24"],["/2player-battle-system/index.html","e3f106c6775fee2163fd27b462baf392"],["/404.html","96dbbd37787185a5366597d6e577a5f1"],["/about/index.html","ad558dde605eeb4ec51a119206fad7a1"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","ca04b510fb3613116b72d536179b739d"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","e199653fc53558668911f2e492d7c96d"],["/animated-title-main-menu/index.html","3faa75348833285f17dfc998efc6085c"],["/archives/2022/05/index.html","fe5ecf0365a6ef5bd6fba4c5fe1fd16e"],["/archives/2022/06/index.html","735f3f712406680c565868c59fad70bd"],["/archives/2022/08/index.html","0049283c9115bcacb820f55f69162bd0"],["/archives/2022/09/index.html","ff185b1f8982095a2d7f4c484f0996b9"],["/archives/2022/10/index.html","640f7a95cd895ae99279f4cdc9214e0e"],["/archives/2022/11/index.html","8d576bc24213a364a31e3257bfab9692"],["/archives/2022/12/index.html","308ccc334e1deac12f7628cec5c72389"],["/archives/2022/12/page/2/index.html","b7d7174475bd33f2ea74fec35e0c4413"],["/archives/2022/index.html","66daf1f8bb5dd8d472f7470b730e86a2"],["/archives/2022/page/2/index.html","b9aecacafa156dbecfa49c3aa4e1009b"],["/archives/2022/page/3/index.html","c1608470f6563734db9c2aaea1e6a167"],["/archives/2023/01/index.html","436557c8dad239eafc98e9a58690c0e2"],["/archives/2023/02/index.html","46058bc216aded32815684dc53de3fb7"],["/archives/2023/03/index.html","48df30f9c9f600305b4e9ce034ba3ebd"],["/archives/2023/04/index.html","a98dc4cbbf97ab397ab5e32af753f4c4"],["/archives/2023/index.html","964897e36dff95cd197cfa94dace39c1"],["/archives/2023/page/2/index.html","96cad4faae43aa4e1e221b806ee1cf93"],["/archives/index.html","64ad97c3029508a51c4fc3fca8241767"],["/archives/page/2/index.html","4ad26967f808b7b5c67d852192b84f0d"],["/archives/page/3/index.html","b31e477b60e0b35e7de2847a7790af19"],["/archives/page/4/index.html","da61ed96c060d70c94831e717c81ccab"],["/archives/page/5/index.html","b21d51402178d14a254fa4d5d57bea7d"],["/artitalk/index.html","13ed1b6114161cf94b90190131c6a852"],["/battle-beautiful/index.html","9869141da728292df082478eb75c986a"],["/butterfly-custom-tag/index.html","2cdaf250861ed82837eecb8082c0b98d"],["/butterfly-plugins-faq/index.html","2f35f68f653d10f65d9750d1b860c31f"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","124188927fd82298e5dd294c8268e2c9"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","9d3dc398410ae92e34a1fcad0e1e18fa"],["/categories/announcement/index.html","a49b9d34052cd1617d67f6a62a32c81c"],["/categories/diary/index.html","8a3df1196b17147509b5b221b81ddd0e"],["/categories/game-dev/game-engine/index.html","b9e502710b25d703de419f622e9b9ec3"],["/categories/game-dev/game-engine/lightvn/index.html","dab05adcc17ce17b67f08c46786dbcbe"],["/categories/game-dev/game-engine/nvl-maker/index.html","1428e566e0e73b2902359cb9ec4b69ba"],["/categories/game-dev/game-engine/page/2/index.html","c4b59961d034a312477d1846ca3d4934"],["/categories/game-dev/game-engine/page/3/index.html","9f446745b4cda27320a1a3b1161dda9a"],["/categories/game-dev/game-engine/renpy/index.html","661c6c9ff8820d670d2a0c27ebe0115a"],["/categories/game-dev/game-engine/renpy/page/2/index.html","ec0f5be704abe21219c0f9f88034a46f"],["/categories/game-dev/game-engine/renpy/page/3/index.html","8a28627aeb66166696290c7d11ef9858"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","5956593135937af7be593779e2bb23dc"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","6600ce53b3ebd26cbb30b31ae98db93a"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","3fdabda2e5be0c415dc35bc8423093bf"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","4336b182dafbb1397c2bc50947400fae"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","58219e383b57d86bae2f207f15de1c46"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","2616d681ae31a3ee888b4e2ef7ecfc7c"],["/categories/game-dev/game-engine/rpgmaker/index.html","6887e1459d2d26aa78e774ef86c82dc0"],["/categories/game-dev/game-engine/tyranobuilder/index.html","08ab6109204aeb4712f84d8b33d695b2"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","e11fb09a2795f848af1a41a3c942cc9d"],["/categories/game-dev/index.html","c88e97b52154b51a24aa5b46fe4cd9f1"],["/categories/game-dev/page/2/index.html","41aa61241ffea6289d33471771edb8d5"],["/categories/game-dev/page/3/index.html","7ff797dd41d954033767ac2e7cfa0824"],["/categories/hexo/index.html","b7503f44c52c297b0e14b5282b9fc9c2"],["/categories/index.html","4809e8c43a76c4e99d7c8882723d0e75"],["/categories/material/index.html","a98ac2736270efdb632313463e913639"],["/categories/update/index.html","22ce28cc00b521f4e1e205d626cfca3b"],["/change-according-to-real-time/index.html","e9229a6bc4a736e8bf6298510fe423c8"],["/change-title-after-first-time-viewing/index.html","ac0199d30141366d5094c835c5696f1a"],["/change-title-based-on-event/index.html","4b9caf5c439e50c0887d22a36c1b5aa1"],["/character-stats/index.html","37bf4de687e2b84eefd109af5faac65f"],["/chatbot/index.html","b24b01bdc5ccec48055a1012e893c580"],["/comments/index.html","0b12549c217cc6b940c77519aa9a1855"],["/create-button-anywhere/index.html","165c75088b2750eef8dd28b4e9e96bce"],["/css/eurkon.css","49ff7f0bd2a5a686db250b8c104b0baa"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","2b91b12617dd24f726750ccb3950ec5b"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f19363dfc21d935974e74ba96d58b4f2"],["/css/rightmenu.css","8260157561a649bd12273fca8daece0e"],["/css/siz.css","efcd60a36545ec91cffe91b7cd6a779c"],["/css/swiper.css","5ee62d3f08a5df08e1129c409571758a"],["/css/swiperstyle.css","f358b8d186a496711f11c7daff196593"],["/css/var.css","23b7f0420c21c93cf5acacd2431e8562"],["/ctc/index.html","023a462225bf216064c2904e95bd1460"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","badf1cbba180a88a8b401fcf2fcc90de"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","6622d44ad93f87dbb77dd58b42c931cf"],["/custom-loading-screen/index.html","28c1fed228f0ae9349e66b51cbf2deb7"],["/custom-mouse/index.html","d69d538bd004fdcade6a00214421d09a"],["/custom-music-room-screen/index.html","e1c88bd03009e17abe2b85aa2db0b0c1"],["/custom-music-room-screen2/index.html","ac70dab5d3672b6b2a050c2383b9f2e1"],["/custom-player/index.html","cef0497ba1d09003ee21736577a20ac7"],["/custom-preferences-screen/index.html","1c864dc919919578632c4f03915b830f"],["/custom-say-screen/index.html","0adf0751ae5de4a8fc29e4c4fbd9692c"],["/custom-title-screen/index.html","c09e7ac3ae1231383e0b089c7417d214"],["/define-npcs/index.html","8ce29dcfafed49fd9a0d64a904d595e8"],["/dice-function/index.html","5cdd909f2220faf4b161baf22f9953e6"],["/disclaimer/index.html","51b9fed17395f0732ad6afdc202d062d"],["/friends/index.html","7e899926cf728bbe111c8572e3138ff9"],["/gallery/index.html","3b77f739773ffd0f174525847afcd635"],["/gallery/photo/bg/index.html","d8d3dbd32130c90ed3fdbf6dca513038"],["/gallery/photo/gui/index.html","0916187caeff5fad5c72482d4cccc134"],["/game-only-text/index.html","bf1d1ec5f08c9dc9864adf102b40d85b"],["/gui-017/index.html","55f7685cbd0af7ec7e8fe3efb486b327"],["/gui-vertical-002/index.html","076332f069782abacfd1206e082c5c2c"],["/gui012/index.html","e6dfbb40481ae96152b564d5eaaf9482"],["/gui018/index.html","59d6c44e4c064396b87b5518261e07fd"],["/gui019/index.html","a9f8bd607eb2145f93c1cbbef75828e8"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","11cae0b6d003962c4d3ff71f3b731ce0"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","550d5fa84efa06d37408b7ee9658cb65"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","4df8e072d41d800f06c78e2fdcb7dff5"],["/images-tip-function/index.html","60c767ddf46c16c8b404460e9c870670"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","dee829b80a8a7ad5a64b6ac9c8f784be"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","2b8af01d968101b51e0e45b61863895e"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","bff39e87f68932219f135ecc1beb7823"],["/items-sprites-effect/index.html","b5877f1e4493711460a1f2ceb711485b"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","7ff4d30f85f3a9c87ae947a7f62a8c3e"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","af47430e23716fce8d1189a129b3b50f"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","334d2ef1d59cdb6c5f75b15901802cdf"],["/link/index.html","b7a1ec7ceffb26e9d520c2d45197cc72"],["/make-butterfly-beautiful4/index.html","a73b247494c17c3722a40f2236259905"],["/map-puzzle-system/index.html","9ba405a43f9015b7b04050a6ee59b12e"],["/maple-effect/index.html","33edee3c39080cbbb50e343e5706c064"],["/memberships-2/index.html","decf133d77f0ea2bece019cb16aaed92"],["/memberships/index.html","71d066ba5af9e2888c914a9b6453c030"],["/multiple-language/index.html","635f7146480c207d4764e7cf83368e4c"],["/new-year-event-2023/index.html","5184f3b6da8bd8dcd3bdfa2bf6d18d12"],["/newsletter/index.html","dd558472772013a82ad68abde15deeaf"],["/null/index.html","f3a77dbeb6fe219f23d2af003af8c6fe"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","37a98f227a5259cd898d1db84d59e8e4"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","617aa33a2381ff81c136998795077dc1"],["/original/index.html","40b63933072e2c9ce38ef94b601b4469"],["/page/2/index.html","fa3ae29cde53c8d7acc0338f5b631cf5"],["/page/3/index.html","023b7fffb84585838988691096c8bfa8"],["/page/4/index.html","63645d88e69b6cbf117722ea7aa2d7e1"],["/page/5/index.html","4a27b06f484367796c08b2fa90ec4596"],["/privacy-policy/index.html","62c3b815871ff61a6b204397afba6fc1"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","e20e2b4c1f36ee4828c74cedd5abc074"],["/random-number/index.html","39978a34b81f80d0bb6740b8cea87335"],["/random.html","036c6afc7c865b8b645e6d2787494269"],["/release-017/index.html","3f595052362c51ea9ba643fee9bb6c59"],["/renpy-basic/index.html","4518631f8c62d9c841a184a7d8cadc0f"],["/renpy-crash-glitch-effect/index.html","ee9bc7d13fbdeb439aa523f8eda42329"],["/renpy-matrixcolor/index.html","098d0e865b19f95d6237457907ca7fd6"],["/renpy-overlay/index.html","64f3a29aef09259a80ebf607c1ec90ea"],["/renpy-review/index.html","d9a45da01e1157612348343b04c44438"],["/renpy-typing-effect/index.html","dd7fa6f78fbc263e0967493ff32e1fdb"],["/rpgmaker-assets-menu/index.html","146a276177ad80ffb74a0c0e0dcde7af"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","b70ede628f46c6e98e69261b7547b573"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","843028454aefe196ad41acf840741ec2"],["/sakura-tree-background/index.html","4c511ac866391a7d3c460fdeaa7ef39b"],["/service-worker.js","2cf6109485c5a5cf38e85ed0fe4c8623"],["/side-image/index.html","b7d63e7e263c9f5cf468466ede80bdef"],["/snow-effect/index.html","c5aae05a6401eb327b5c413bf683a8dc"],["/speaking-animation/index.html","7c410fbfce6cce2974e4328bbdacb11e"],["/splashscreen/index.html","cb8f2da9c65d4d976886fa8006863d02"],["/sw-register.js","f614daa8217401be1a44e4405e148aa9"],["/tags/Hexo-plugins/index.html","3dc95fd83fa3de51c0d80089d2d923a1"],["/tags/Light-VN/index.html","3386b698bbc6ea6ae3850047d36f6d41"],["/tags/ai/index.html","59f39b06689ac7659a54d899a311a948"],["/tags/butterfly-beauty-diary/index.html","12e8a850691e7e3bc3f6d74395786b01"],["/tags/commision/index.html","f25cc5d6104ed7b357b97aea26c51a00"],["/tags/custom-hexo-theme-butterfly/index.html","710459d990c04a9ab60fd1496a7a5e20"],["/tags/custom-renpy-title/index.html","0f062d3e380f028e7a300dff07c09a29"],["/tags/dialogue/index.html","95a8f3efde91e0d782a0b5ae8b153525"],["/tags/effect/index.html","c9a09a49570ff70e9de5414f94409a1c"],["/tags/event/index.html","5d06b0b118cd2e360a6c9013184a7bef"],["/tags/hosting-own-website/index.html","16c8435cd9d03ff5adec0d8dc2c07bc1"],["/tags/index.html","8b2a0ab7ba164a401c636b1ff872c602"],["/tags/itch-io/index.html","74b8e0900801bfb738f9b0f362f36723"],["/tags/light-vn-update/index.html","e41db23f50b09cc8fd3f6ba72598ce31"],["/tags/nvl-maker/index.html","b33e8d213845db46c2f3476b938fa4ea"],["/tags/player-related/index.html","e13d71db3446de31ed7614ceee16232c"],["/tags/pro-tutorial/index.html","a9b212de4b338107b36ccf105217e740"],["/tags/pro-tutorial/page/2/index.html","99d272a814c725331ebd98d8246b69b5"],["/tags/pro-tutorial/page/3/index.html","3857b28372aa6a79d3ca90c5d7e9899f"],["/tags/renpy/index.html","be454af332632e52044c95a0d8d094de"],["/tags/rpg-maker-custom-map/index.html","02cc21696070634c0a6e19081902f810"],["/tags/screen/index.html","c159461dfe983e8e2c25b4827f4100ee"],["/tags/special-function/index.html","6951d9ded2ddf6abb66b85433a98f56d"],["/tags/tyranobuilder/index.html","e715dad9e936fff64f03eb92d727a1e6"],["/tags/ui-assets/index.html","6621e40e75e7b14c9246d245825caca4"],["/tags/update/index.html","0af084db76ba75e4896cc1cec8400efa"],["/tags/upload-game/index.html","50345023de1722a7e1a8556fe8f2c049"],["/tags/variable/index.html","43c60d7ba52c09210fddb47c3b8093fe"],["/tags/visual-novel-maker/index.html","75581bcce7f4902e696013b7b9c1ed46"],["/tags/封面製作/index.html","f6e0c3c23bf7e3cd3ec72acaad66a007"],["/tags/背景素材/index.html","16c3cbba18091c061083bb42a806d0a1"],["/tags/隨機功能/index.html","fc453cae7d6783000a3ee1522c6ea683"],["/test123/index.html","7cfcfdfd544de0178cd1d3f576eac2d6"],["/textbutton/index.html","e365dd5391ff53badf2f2847d59ba96f"],["/to-do-tutorial/index.html","cc08753eb7df172c89ac6de4158cef4e"],["/tools/index.html","98838f5edafaa4317e0dc5766ed793f0"],["/transfer-to-hexo/index.html","665d0720695c447e8612ce76ec096717"],["/tutorial-update-history/index.html","fb5428f9224ea9820571e3db92597d46"],["/tyrano-name/index.html","6b32b1db1ac0f9c147f3b36a13fc474e"],["/tyranobuilder/index.html","baa3957c59ed045c0783512ee6420824"],["/undefined/index.html","d3e3b12ad3ac74f44df4c09ce967254d"],["/update-20221211/index.html","49a7ed7b4b31d7deac418693980ba152"],["/update-20221218/index.html","e670e3a53d2254f16e9abfecde0f54f9"],["/upload-your-game-itch-io/index.html","2a5c907684b68f195f4b99e2418ccce3"],["/use-list/index.html","eea76272b8b93a1b989a99f3a034fab5"],["/use-nvl-mode/index.html","099a92188109f4a2d6d93f04e6717185"],["/useimage/index.html","6bd9e77ec2337333eeabfd425aad3a7d"],["/variable/index.html","7ce254e9e1d363d5bd2885cb4e3f9bfc"],["/vnmaker/index.html","73af30418dec359bfe09dc295b84951f"],["/weather-effect-tutorial/index.html","bf60113bde5d47808b9440d64c1f92bb"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
