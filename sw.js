/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","8f9cc039e2f92b87d035095c87129f9d"],["/2player-battle-system/index.html","2cedf473f4430642c5284606ea352e94"],["/404.html","1577352d61aa307b08e43461f1372107"],["/about/index.html","3f1781fc1be64d49c6886a2e41f6ab62"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","b1ca804f5617a35ed5705b992445debe"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","ac58527a1fe18f46e7850ba8a2b17c68"],["/animated-title-main-menu/index.html","55fc211f11de0145b9c30fb82a55e6b6"],["/archives/2022/05/index.html","ae02727bb7c9caddd90f104f6d04a7ac"],["/archives/2022/06/index.html","31d4ec815337bb6eabb0342da6882cc2"],["/archives/2022/08/index.html","e47ae505e884cfba1b347a1c94c960bd"],["/archives/2022/09/index.html","2d641680cf7101372a831d3864de6974"],["/archives/2022/10/index.html","583654c978c40d6e85292fd38c469aff"],["/archives/2022/11/index.html","004f670fe2067e7a5427838983216f2e"],["/archives/2022/12/index.html","6f184b504a71d8946a4a81a11d89e512"],["/archives/2022/12/page/2/index.html","20f8d76bdab2808a92a368c4872d72cf"],["/archives/2022/index.html","19d09804eb4409a1fe3f6ec656e053e5"],["/archives/2022/page/2/index.html","88b8d2e51c4bdb88f737f73aa1181ad6"],["/archives/2022/page/3/index.html","8348438f6180e7defd9228de0ac84a8f"],["/archives/2023/01/index.html","67088de22041f2f68a2d5bcfc24ab449"],["/archives/2023/02/index.html","80b8ebfab0a8693c19a58be2c37cb104"],["/archives/2023/03/index.html","2cb84e923ec5d27e0da6883404ae0bd8"],["/archives/2023/04/index.html","75a37b487700cfe8f211e4f6e02d420c"],["/archives/2023/05/index.html","69fc18eb4cb8032d09b38e97c5e9b3fe"],["/archives/2023/06/index.html","a4cd0711572d6de868533b47fe71a621"],["/archives/2023/07/index.html","4f9c01b9739f5de091e31d12a387c8f2"],["/archives/2023/08/index.html","fc3a41575aff0aab1eb3ff6205651308"],["/archives/2023/09/index.html","c61f032528b4755977107d46874082ee"],["/archives/2023/index.html","2287e21a2e028e7e25b602b16cde4411"],["/archives/2023/page/2/index.html","57e5247eb55370e1915c0e5d3b396228"],["/archives/2023/page/3/index.html","3f9e04eb300f3f4558ab9be595a02f87"],["/archives/index.html","6e10c8b7da02ef7e8f71e3fd800584e7"],["/archives/page/2/index.html","cf5ab56e49f2a318fa4f90be3f712759"],["/archives/page/3/index.html","6c7451b2f4923a69fec70c24d0960f1b"],["/archives/page/4/index.html","cb30f329d747c065ac3d6be36aa6cc49"],["/archives/page/5/index.html","4e2d38e297e93d172fc2caa2d56873a0"],["/archives/page/6/index.html","663097abb6fe44c10c798ae37f047d6d"],["/artitalk/index.html","7cb84f8c6e1442525c80193349ecf136"],["/battle-beautiful/index.html","3cc80946aecdcd820d8c3f04817970a5"],["/blur-effect/index.html","19164bbbe8d3b7572f328ca39cc4163a"],["/butterfly-custom-tag/index.html","881cb1509449b743b6e9222e261ab433"],["/butterfly-plugins-faq/index.html","889444c608a71b8dbea17b95ccd08671"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","c2547abccf483180bbd5b103df62f028"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","a9c9ae401b62adfea3ebaf2a9daa9821"],["/categories/announcement/index.html","1383a23059800693d05827e8aa8e546d"],["/categories/diary/index.html","5681d27a6456940c4bd223094bd8256e"],["/categories/game-dev/game-engine/index.html","86b404938fb19e38ecd79f050a058e3d"],["/categories/game-dev/game-engine/lightvn/index.html","b1db921078dca7c4ff4b52d44695c224"],["/categories/game-dev/game-engine/nvl-maker/index.html","1bb6f25acb0b59b423a75394dbaa72ac"],["/categories/game-dev/game-engine/page/2/index.html","5f815772a9ea46342fb17a2c5e0a7b6d"],["/categories/game-dev/game-engine/page/3/index.html","3d81b7dfa81f3df652ec5c80b9954b20"],["/categories/game-dev/game-engine/page/4/index.html","962bbe525110c99c909e71a28806752e"],["/categories/game-dev/game-engine/renpy/index.html","593cfa04ab7cde81d2e8b375f31605fa"],["/categories/game-dev/game-engine/renpy/page/2/index.html","49b52bbfda7f6c854b014d521877c276"],["/categories/game-dev/game-engine/renpy/page/3/index.html","774dd13c2f4315f1bae46c416fecdf5b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","e2e044c7850f3a84b0e0bedfbfb7b52b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","95e62e176b31199ebd1ae7baf2fe9b8e"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","4b9ec11e6783d85dde71c283540db519"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","c0738e9fdf8a0ac986a0b76f351ff35d"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","786d6eaa085906e836436663a64971f1"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","4ea6aa8435e12a24b6f2975a70157d85"],["/categories/game-dev/game-engine/rpgmaker/index.html","e0f806433dd2c7d7a76f5cdeca43abb5"],["/categories/game-dev/game-engine/tyranobuilder/index.html","0804a37f3db781e0e150cfc53707f921"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","24348c9c7f5fa57598d708a86b0d0479"],["/categories/game-dev/index.html","21bc9214f9897cb5015b174ee85bfd70"],["/categories/game-dev/page/2/index.html","b46bd6512eab3445aadb39a24d88582c"],["/categories/game-dev/page/3/index.html","2e7c29b8d1bf3c2ccf5d8acf11416640"],["/categories/game-dev/page/4/index.html","b3579f8d25e54ac9e3748c4f525847c2"],["/categories/hexo/index.html","fa250b183a91ee7d89b8540740f4398c"],["/categories/index.html","551e9298eef814caca4fe58a035fc1d7"],["/categories/material/index.html","ca4ba58ca062cdcdb07a39608087e7d2"],["/categories/update/index.html","e0b61394b6470b3ca28d512db5322fc9"],["/change-according-to-real-time/index.html","d7806c830957aa7124f773c84fc626ea"],["/change-character-info/index.html","a8e0aaeb60fdba6106abdbdbfed8a921"],["/change-title-after-first-time-viewing/index.html","daa56878d2314ec71eee696033cbc9cd"],["/change-title-based-on-event/index.html","a763e7b6382ca64da9077f8fa68e115a"],["/character-interaction/index.html","2657ae6e077462ced25ff892f82f416c"],["/character-stats/index.html","12da17144c4b5a9942f919b5df64fdef"],["/chatbot/index.html","ef2ee39218c8154eefc07f5fb67e7103"],["/choice-time/index.html","b9907e11542048de4b39f14d1246ec1d"],["/comments/index.html","cbef72e72960aef08eb4e40934e2c494"],["/commission-info/index.html","05b1e7ec3054ded62d6d0c1b1da9860f"],["/create-button-anywhere/index.html","3f74c07dac20913444c3e3a92e4ff614"],["/css/eurkon.css","bc540a2961aba39131be5a40cceede81"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","77ba4f04691089a42ba8839915c95e10"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","67cbaedb8077ce1bdf7724ed93a5bbca"],["/css/rightmenu.css","c521223979002dac2d939fc6e66f67b1"],["/css/siz.css","248b02c66fc6ee361ac61d72d2d363ea"],["/css/swiper.css","5aea1088a0a89927ce64d3f5e882a5d1"],["/css/swiperstyle.css","f35fa3cb732195f32ef8b5d68f4af190"],["/css/var.css","05f1572a7bb890425d0ba8cf3d30f0f6"],["/ctc/index.html","f8e258f34e58cb1f998f1dc278456c3a"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","79fd9859b969ad0c86996687b809cb2e"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","eefdcf361576ec0b31aa9f67be503b41"],["/custom-launcher/index.html","c67271bdd3b8935b23ae92ca1cdc214e"],["/custom-loading-screen/index.html","35fcdbc8ef533a6e7053541513bd09bf"],["/custom-mouse/index.html","2b3ee1d56c713523ac970266a2252458"],["/custom-music-room-screen/index.html","1c6129596344809c7908df01c9506c09"],["/custom-music-room-screen2/index.html","79056bd09f3490e69bbaa99aa5e1c350"],["/custom-nvl/index.html","3967ad3f448a9f059a95c6c99ee85d1a"],["/custom-player/index.html","b2c4816932c10319dfb48adb49b491ef"],["/custom-preferences-screen/index.html","8305ce8c3d6d7110f4871de212937363"],["/custom-say-screen/index.html","b8584de47ea24c81a379b919bef85664"],["/custom-title-screen/index.html","02b614fb9007ab7059f7065e458d9688"],["/define-npcs/index.html","672bcc36f558a1ec200386f2d91366de"],["/dice-function/index.html","fb124e43d7ba8b59ab5365c04de8c2f4"],["/disclaimer/index.html","9398c824f5af9e77a65f7716d85db17f"],["/enter-name-screen/index.html","7c83dbefda9d4ef2b32a17a0f1b31447"],["/export-game/index.html","945ba8dffee920f5639dd47a04b13abb"],["/faq/index.html","bc7b21aef74e09ae5f61e0e93764afb0"],["/friends/index.html","38cc6d4d2c645ba7aa154107fd205649"],["/gallery-template-assets/index.html","fd20cc7cec4302017eefdbdcf7c52010"],["/gallery/index.html","4e9255f270f60d2871a87fb1f20abfeb"],["/gallery/photo/bg/index.html","4ec79287392da58e1dcbe15e3644e4c9"],["/gallery/photo/gui/index.html","b2a6faf8bb35603fe6180314ee960bf7"],["/game-only-text/index.html","906dc5abcbd6949338fc71b15bdaf81a"],["/gui-017/index.html","a7714c3de73aa1c37b763e9e7c1cfb33"],["/gui-vertical-002/index.html","1a0f814c8b2a7b4aac6f4de860f85601"],["/gui012/index.html","bf68702d87df971183d7ff8b329297e6"],["/gui018/index.html","2419d33b66a37ea04fe4ccb7351d2b76"],["/gui019/index.html","4d434080c91cf3a3dcae984c86a5c90f"],["/gui020/index.html","c49ccd288aabf8389f2189bcf6bf7e66"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","d0360bf6e3bf32b39b1a6dcc5791ea38"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","80f343640fc104f885a4fb71c07e493e"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","8435a11f5d961d7d3f457c3659793d81"],["/images-tip-function/index.html","69d7a7873e0d872fbd8c5d0667c28bd5"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","d41a546d3cad5eefc992d7bcc8c8b77e"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","cc7806016ddd433a85e8d53a5e8ca601"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","d5654b2c5acb93d443f6fc899eddc832"],["/items-sprites-effect/index.html","c9a8cfa5cc0c5a0b61637ec3ebe566ca"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","9f587d507b757fb51ceb386d05c0f539"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","93431f3b8b524d0512fe6d81a661891a"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","72c1a3bec1a1bdc98803ce4b3d8ea5ae"],["/link/index.html","c5677af3c5550b057b0ae51f3885bb49"],["/make-butterfly-beautiful4/index.html","18850e5a13d6a4fe28cb25f3dee70e78"],["/map-puzzle-system/index.html","054bac03682e0154a9c7881fdf70ccb3"],["/maple-effect/index.html","ab958779cdb9118b5848ce63d0928524"],["/memberships-2/index.html","5f25dea16e0f546551367bea9cfd2181"],["/memberships/index.html","e1164fcee894d59d70d62ba716c93918"],["/multiple-language/index.html","981863e0b107c7d972022eea9ce00e00"],["/name-input-assets/index.html","243286901394cd48f62772a80a6ec025"],["/new-year-event-2023/index.html","2cf8ea2642bf3ba3940a41c3c6a44fc1"],["/newsletter/index.html","5c62cdd04a9662b84adbbfaeaa88d121"],["/nsfw-limited/index.html","a7edd481eb5ce8560b905b3e8d2660bf"],["/null/index.html","c0d107527f8c0f9eaa6af7d321d082f8"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","04fabaa41690d686e27f3be9de36f76a"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","ded473fcf2b441ea2a0ce4e68e32a47f"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","a6cfccd533becca9fd74c82aa44389df"],["/original/index.html","0d29b5662cf110858d2075aa5d4fadf1"],["/page/2/index.html","a97b8203fb2c64781806cf1f7626b3a7"],["/page/3/index.html","f75ec97ef9d1db31bf332d459bba3f44"],["/page/4/index.html","9f72db7a6107860f9b8c075d1e8bd2b6"],["/page/5/index.html","c05d724ccaf6050db97de3bf78074de8"],["/page/6/index.html","30b4e3b3b87a02c08c4d5293c34693eb"],["/point-pop-up-assets/index.html","4db2c2c41ee7fe957a9945edb48db90b"],["/pop-point/index.html","42bc0814df5127c2c09c529ecfc903ef"],["/privacy-policy/index.html","3adc2893ea138dd73a696b708918031a"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","feda6d3bf3116437967394b854aeddf8"],["/random-number/index.html","337f09a04d688d4ab3435a6a9ddf59da"],["/random.html","03c564ca8df087a505aedf4e670e8602"],["/release-017/index.html","fee49859b7604516e2553ef7ea5587c9"],["/renpy-basic/index.html","a23228aeb3b0a3412f1a4c6efd3cdbc2"],["/renpy-crash-glitch-effect/index.html","d68ecd382fbdf7cdbb4a0a9d0e41d3dd"],["/renpy-matrixcolor/index.html","8e23ae3678e5d30e3dfd1b136ed1e033"],["/renpy-overlay/index.html","2c549f9e92d03b2d12441777bfd24cb4"],["/renpy-review/index.html","22895765ef49e7c3f158de21711adef7"],["/renpy-typing-effect/index.html","4f05406126f91c9c84ad41e17c46af86"],["/rpgmaker-assets-menu/index.html","66470df21b1509ad528f1ea45982532f"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","1d7a3fd5b3697d2abc11a9f562f5b548"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","67279eceba9076c9ef4bed9c7a71de42"],["/sakura-tree-background/index.html","1637b76446787f2c1c1fb1f0aa99d191"],["/selected-button-style/index.html","72462ee568da94081ed06969f087c3ae"],["/service-worker.js","fc1d07a71335e358cd1e2048d721d17c"],["/show-variable/index.html","09ea0b92386188c7d91fa33381871ff6"],["/side-image/index.html","466864c9fb411ff16cfa0be5f97e53b4"],["/snow-effect/index.html","79d0c55a45a79c06171859bb5854eb66"],["/speaking-animation/index.html","2c1aca966551ce6dec9358ad4d2076bc"],["/splashscreen/index.html","3142b2349590faf3305e61fc6b72badb"],["/sw-register.js","be9cf80c687156586cd3ef75a4b909db"],["/tags/Hexo-plugins/index.html","c38b4f0825e770dcd4985b25456df32f"],["/tags/Light-VN/index.html","446b512222c90711cd0ff03f611b8430"],["/tags/ai/index.html","dacf0245d306fb419e659308e5513b11"],["/tags/butterfly-beauty-diary/index.html","c8e2a76a1b67acaacadf774aec2d4f26"],["/tags/custom-hexo-theme-butterfly/index.html","736be4d32989b03b1ffe8d4d8779f2de"],["/tags/custom-renpy-title/index.html","e0aebd7d8e114a349c37740c632d7c9a"],["/tags/dialogue/index.html","3edf99fe70962e2f234b0af957198233"],["/tags/effect/index.html","791059827e03abe421c9186725e55c99"],["/tags/event/index.html","5a34fe148db94a71a600619f7f76c907"],["/tags/hosting-own-website/index.html","ad7352957eda314392eb108c81102293"],["/tags/index.html","aebd948eaefda1181e6b9a701fb37d68"],["/tags/itch-io/index.html","ac7ae54c04dc07879795f31624e155db"],["/tags/light-vn-update/index.html","27de98e9eb9b141cfb67f07e2bf55557"],["/tags/nvl-maker/index.html","397852a36ed21722f069a0f2812fdc75"],["/tags/player-related/index.html","ddd8a443a7cf089f5c0b67d304bf36ae"],["/tags/pro-tutorial/index.html","cb2e258e2be42976e35225750e818d55"],["/tags/pro-tutorial/page/2/index.html","d5fa454dfe1aec92307b7aed6b863c90"],["/tags/pro-tutorial/page/3/index.html","5f255d58ca245022209dea2ed4405111"],["/tags/renpy/index.html","34fa55dc26208558f00a50cc5e12da8f"],["/tags/rpg-maker-custom-map/index.html","8f79bbf06ad7d0901dacfae571d5b389"],["/tags/screen/index.html","888ef7b00cd6d331210c0a4a32b4da42"],["/tags/special-function/index.html","7c0610640299d2817743f92ab81efbc5"],["/tags/tyranobuilder/index.html","fff87edf721d25d53baf90a4a9a3478f"],["/tags/ui-assets/index.html","417ee3c725a14cced43af121a930f7b0"],["/tags/update/index.html","226f9d2b8d52830fdac86ec0b34a759f"],["/tags/upload-game/index.html","b6be88bb72b5ff1be9aceb892fa42846"],["/tags/variable/index.html","8fe357c179f079ca52684a68e7772178"],["/tags/visual-novel-maker/index.html","9c52e3b97746e9451ef17616582a7d5f"],["/tags/封面製作/index.html","0dd3f9d1a37e8c69c1a129078701d5f1"],["/tags/背景素材/index.html","4221ed5654f19c7be0a3e7443d65c8cb"],["/tags/隨機功能/index.html","d386d20df5b5094baff4ed7dbe464033"],["/test123/index.html","f70ac24a078a9847b491e7a2f055a59a"],["/textbutton/index.html","195fdd4c343c662ae9727e7df07f8726"],["/to-do-tutorial/index.html","a3f200552a9f97e14309888aea8c1e4d"],["/tools/index.html","730c68df85847e062b410c684bcc5c09"],["/transfer-to-hexo/index.html","ea751fd2e9d99bb3c90bd63536908c61"],["/tutorial-update-history/index.html","08d6df0ab291d0241536bcd763adb2c7"],["/tyrano-name/index.html","cc184b2c3665a769d71b20b00178d03f"],["/tyranobuilder/index.html","7efb5df3818b6f9dbfb135e5476f624b"],["/undefined/index.html","49e7d7718795a274fedae27e31d3f2d8"],["/update-20221211/index.html","16018bc425539c814c62d3f7457ad28f"],["/update-20221218/index.html","633b2ed497809cebfc44914c489e9d57"],["/upload-your-game-itch-io/index.html","d31ee9e7c02effade373e6c0b56ca5f0"],["/use-list/index.html","e5a872f9dcbef456a29f93a45d352ee1"],["/use-nvl-mode/index.html","56d71d5b202fdeb5930fcebf95be632d"],["/useimage/index.html","afd4a45e87128ab55ac5fce8936cd2f2"],["/variable-change-image/index.html","9edf5e0a05a43e7cea69753435960a6e"],["/variable/index.html","1239b669aab8fa19dda2f7d7fdf68a8a"],["/vnmaker/index.html","cd5171060986b81d21e82ec56e34eb88"],["/weather-effect-tutorial/index.html","39d70d425d650b7c1cae3428c0fa1aa0"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
