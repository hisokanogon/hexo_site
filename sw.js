/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","68c94de1ee159c2e80a541c57f59aede"],["/2024-future-plan/index.html","ef7af6e47ef7adfe8cd01ace7956ec75"],["/2player-battle-system/index.html","c1572fb7565fdcaa9227a4800035b0e2"],["/404.html","343e3509545560913b8706ff51c818ba"],["/about/index.html","258742e234cf1afba0151618609a6b0d"],["/acg-creator/index.html","6f7e491ad394f7cf06c64d29bad78ce5"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","9fdea6def567d0a54b4d9f2a186506a0"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","7490fcdb4786f652ef162195830cdad8"],["/animated-title-main-menu/index.html","427d87f0796d8f0da84234f12a158c5c"],["/archives/2022/05/index.html","83dc75075d286d67db46d5d03d10e519"],["/archives/2022/06/index.html","49d08e3e50db75d3d7642ba07e09ab2f"],["/archives/2022/08/index.html","8595182df6165ddc958781dce6640247"],["/archives/2022/09/index.html","9cdeaf39ca5801641a0fcac1e5f0011f"],["/archives/2022/10/index.html","aa9355ef9614e9f0518c09b0506ddd53"],["/archives/2022/11/index.html","0e81d5cbfb38ddb7273591235fcc7232"],["/archives/2022/12/index.html","ee2df1dc63a6378d75ea0ee8aeee077b"],["/archives/2022/12/page/2/index.html","050094d551acc1f6293f389c4cac9ed0"],["/archives/2022/index.html","b72d2bab58a2b78b00ddcea5dcd19d33"],["/archives/2022/page/2/index.html","53ad0b43b8fc078b88542a3601c033e1"],["/archives/2022/page/3/index.html","9ed9ee21eb8aaeffa723a3ccfc2abdf4"],["/archives/2023/01/index.html","6f733dab05772688542ce27299e7fc6a"],["/archives/2023/02/index.html","fe25e26059e3d2ed8ef7716c2d11607c"],["/archives/2023/03/index.html","7aae601a28f102098b22ffb78147ebab"],["/archives/2023/04/index.html","c2b8c0fa5d8a99fe3ba06d1ec23c4fae"],["/archives/2023/05/index.html","e0f73c44c2208a82f57d03f944af183c"],["/archives/2023/06/index.html","e3013a3db8d68a77abb5306827fcbe30"],["/archives/2023/07/index.html","e5f79853f78f9a4687aa4bfefdf7716b"],["/archives/2023/08/index.html","87b136ed87039ad5424957b9d2aad2af"],["/archives/2023/09/index.html","1000301084532aade23622abe6fdca52"],["/archives/2023/10/index.html","6fa5011c55654ca7ed6b685903749745"],["/archives/2023/11/index.html","862e6881fd3143132014576367ec8744"],["/archives/2023/12/index.html","fca028e9fbb943c82195169ec224dc4a"],["/archives/2023/index.html","efd75fb292c3b335ccbe9e150da1d154"],["/archives/2023/page/2/index.html","5b5497c60cf2e285ae23b7b94da97a12"],["/archives/2023/page/3/index.html","438a819e453b8c3cf1427f504b985e2a"],["/archives/2024/01/index.html","409590f13e94f35706e13cbc0cc151cd"],["/archives/2024/index.html","4de293a939db2540c389391478fc0f95"],["/archives/index.html","80e2381d35c8e32983c304da9a84956c"],["/archives/page/2/index.html","1a18bac7b749b7d2c8a34b457e8e9c00"],["/archives/page/3/index.html","8a24bc96b872ead28df3a78e61f8eb6e"],["/archives/page/4/index.html","be02f3360fbe1bec3be1b55ddbee5399"],["/archives/page/5/index.html","cf7e60e7189aedb03c9ad55974f6af77"],["/archives/page/6/index.html","86bb6ef0f790d2aedff5dc5bf7e405d8"],["/artitalk/index.html","1fce3f151050158479bb82f62d7cadd4"],["/battle-beautiful/index.html","41519adc42f8cdcae54faa43ac3e636a"],["/blur-effect/index.html","17d840c3e02ca5f3213facbd313d04f4"],["/butterfly-custom-tag/index.html","a64a3e4f4fc9ff588ce92e3092834c21"],["/butterfly-plugins-faq/index.html","84ccb899b5742d81961fb62805daa219"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","2603756999d68736a7f0d52b7e3b9b88"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","dcb914748a6c6946a2ef699698a32991"],["/categories/announcement/index.html","ff0094889a2e4efb6f99dad34e62265a"],["/categories/diary/index.html","b716280837a75cd7d763190abcbaac1f"],["/categories/game-dev/game-engine/acg-creator/index.html","8e39f73128759c6c32ae084e021e18f3"],["/categories/game-dev/game-engine/index.html","61f71e0da12bf61c264d34be2d45f528"],["/categories/game-dev/game-engine/lightvn/index.html","2dc42ac6e6eeee5b2d725970d5bcf3ed"],["/categories/game-dev/game-engine/nvl-maker/index.html","2b5b8eca27bc17a72745a50276629060"],["/categories/game-dev/game-engine/page/2/index.html","854aa7e3f788bf628b3dfc3f7be876b5"],["/categories/game-dev/game-engine/page/3/index.html","ccef0f965d7652b3b847cd2740160a08"],["/categories/game-dev/game-engine/page/4/index.html","7b093908944e5faaf913b366f6d6a691"],["/categories/game-dev/game-engine/renpy/index.html","e99a9b88047cad3169a30034680eb391"],["/categories/game-dev/game-engine/renpy/page/2/index.html","754aaa71c22e5671f846aca350c44134"],["/categories/game-dev/game-engine/renpy/page/3/index.html","deed64042b9e0216e84c7dcbfdd7d002"],["/categories/game-dev/game-engine/renpy/page/4/index.html","4a63b38b9c55cfe6389aa9cb39611271"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","91bbc2803cfea8f8e1bf8e9d05025865"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","e44d996bcd11d68caa22992545629055"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","dddeff4f1c272af67d606998fb410697"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","34a1aa9c7d4134107e2dd7f990eb1dc4"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","195702622b85e97d74cb22a41e125021"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","6539d9016e01f39e4ad2b235f89be4c7"],["/categories/game-dev/game-engine/rpgmaker/index.html","0377e5971200b05c655674a606e3c0c5"],["/categories/game-dev/game-engine/suika2/index.html","21269e5d9b380b07dbeba165f929d363"],["/categories/game-dev/game-engine/tyranobuilder/index.html","997a811a933c0c3a255e37374ea78559"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","f600f6f0c6e016cb566b8820660d1279"],["/categories/game-dev/game-engine/webgal/index.html","c647499c6cb6e8fec829c893ec2ffd38"],["/categories/game-dev/index.html","c759571740705daddbc367cad62fea65"],["/categories/game-dev/page/2/index.html","0bc3adbba2ae386fc4ffb10f74c97463"],["/categories/game-dev/page/3/index.html","c5da9e2ac89c17fdd8f570231df3253b"],["/categories/game-dev/page/4/index.html","82562c31d37b3be5a7644c9b78ce8ced"],["/categories/hexo/index.html","ec907a60010cfb7e0134bc1e328c1bdc"],["/categories/index.html","b11f9e1a102ffe3892f264c37ebea813"],["/categories/material/index.html","42fc2af17617d8bca1981b62b81cb5ed"],["/categories/update/index.html","32293fb608d622316fa16d3cfead0e9e"],["/change-according-to-real-time/index.html","09a02d8ba9629f70aa53d18243778221"],["/change-character-info/index.html","cf9d2e7b1c1eb23994fc16f24b5b1786"],["/change-title-after-first-time-viewing/index.html","f7138b0067f4610cbd03bc6306b3b356"],["/change-title-based-on-event/index.html","cf58705ec472718d0cc3971bfcf8f56d"],["/character-interaction/index.html","854eddf263b8b464cba452c7e763cb13"],["/character-stats/index.html","38bcf440c7a9d994e2cbf60f3b5d46bb"],["/chatbot/index.html","8710a2cf0e2f8dd530b3e78b3830bb24"],["/choice-time/index.html","c8749aad8a0a1e9a0ab5d1697f9107e1"],["/comments/index.html","7d697529e0ceb75ecaecf77742ab1b97"],["/commission-info/index.html","0b9f36576d69834512ec7e34da7106bf"],["/count-login-number/index.html","8fdb5373ac7077de81431315f4597fe4"],["/create-button-anywhere/index.html","7c70f43df716311862f4a0fee2dd3aba"],["/css/eurkon.css","0171ee7541fff0fc8e3d99fd95709297"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","e5a50d925890b7304b058ecb72acf3a5"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","337d5d659bedb1c8f7db6c3c8544ce19"],["/css/rightmenu.css","1034de4dfe020227ce463f6334a132a8"],["/css/siz.css","0ad16f7d832893f8606e9fd8a7e62dec"],["/css/swiper.css","016e3e41cd8d1e85d13e2e3bfe09134d"],["/css/swiperstyle.css","c618401fc8753ce3fbd3e8b606240706"],["/css/var.css","32a4ca925177b286898222603a575bf5"],["/ctc/index.html","d7848a6e1dcec7bfd72dd01cb83c3183"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","68e61b2eff3f311ce4d096d8c0eef7de"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","510713f756ebb699f79175fcf2bcc540"],["/custom-launcher/index.html","1d8960eeb46e142a3c3657f5514ae86c"],["/custom-loading-screen/index.html","b8a60584bc24e2e3454310249e47aa15"],["/custom-mouse/index.html","850da28e468aaf158e2f7b210f80af63"],["/custom-music-room-screen/index.html","cd60510a31f9bd0152e14076a2729532"],["/custom-music-room-screen2/index.html","40280ddc46695bdea950635a5d169885"],["/custom-nvl/index.html","313515b4b37bb50a649295405de02186"],["/custom-player/index.html","3cca579c0dfd7ca2825db76345b07a5f"],["/custom-preferences-screen/index.html","a7e6d1cec52ecff53edd3af204f68c91"],["/custom-say-screen/index.html","6c0ae4ccc290ba9b9e34ac3a10e6e56e"],["/custom-title-screen/index.html","6dd48cb92646c78621fd480799b3d771"],["/define-npcs/index.html","967c3e2f221ea4dd693757dee79b2973"],["/dice-function/index.html","02c1170050c55620ef34de299f53a5ee"],["/disclaimer/index.html","ca3b67eaba0cd195a74dcc55ec895655"],["/display-immediately-all-dialogues/index.html","f7723aa1ddda1873ab93d15411390d86"],["/display-real-time/index.html","9e1249418e7b06aef5755d791db4bac5"],["/enter-name-screen/index.html","9eadd844523a4c69d85b9efb11705a5c"],["/export-game/index.html","4daf5faed772e9457887a89067b12028"],["/faq/index.html","b5e4b64325f2eba20ec893463f6d549f"],["/friends/index.html","921a6654a3e255a7b4755c4b53bc1de7"],["/gallery-template-assets/index.html","6d872d9c0cd4bdfdadfbfb5e8400b24e"],["/gallery-template-default-ver/index.html","6b22be48254e8c0d092a92200b37918a"],["/gallery/index.html","b68012a8327c879a6ddfad94a10da0af"],["/gallery/photo/bg/index.html","23edd1a68a3e516d6fc10e652a0b9e53"],["/gallery/photo/gui/index.html","c8d051335fbb547141f6b75cce44a4d3"],["/game-only-text/index.html","3e6c18a1dd78844c97e8c77605cee958"],["/gui-017/index.html","fcc25396779448f3b6184229c68103ea"],["/gui-vertical-002/index.html","f3b76c453a97e69295230fb466cd92a7"],["/gui012/index.html","13900ef25476931aa394800362e71338"],["/gui018/index.html","89a9b85854de1e1762385d620f6fc415"],["/gui019/index.html","d0147a1302d0bfecdfb37dfe1fcf1667"],["/gui020/index.html","8deea923477f531eab364fa4dfe8f3c2"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","5f2201ba92f7f5de2ac213eaa99a24a4"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","6c85ac316baf9f591ae0672b0c5b7845"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","8c417f9406e5738681018c8ecd552e1f"],["/images-tip-function/index.html","39ffa13d1edee8d38b0dc3aa7390bc06"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","631e8781f74889b2cdcaa9a3a6d27c4e"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","c38b14374b93f592309bf69cef58c405"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","a69bcd1f53b3067ad2a7680d756a4d15"],["/items-sprites-effect/index.html","13827f710a38b3879266a13480396f8e"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","df19a9c13bc128cce46110ad432dfc7c"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","a1b397b2f579f21a36372d069edff942"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","e8ad0fc5ae6871726be22a81802b67d3"],["/link/index.html","5dd3e6e11025188fa25682d4ba3322ba"],["/login-reward/index.html","012069ae2fcf5b6c98a4af1cd2687cf1"],["/make-butterfly-beautiful4/index.html","43d821fa0c2005a90f1921a32a9f93fb"],["/map-puzzle-system/index.html","cf5370b866fbb7f35003548e8811b6dd"],["/maple-effect/index.html","073fa6c029a678916b37e70a8a0971b8"],["/memberships-2/index.html","0e8bb85458886b7cc1e34b0b674d86d2"],["/memberships/index.html","f55b699e7f7af03d29e05ee72a30a808"],["/multiple-language/index.html","27edce2fd492ae3ef63372d06eea4f11"],["/name-input-assets/index.html","8316d42f8fc7cad6be48e33a42b0ca6f"],["/new-year-event-2023/index.html","31a961b8b70a78339cf376bbcd0f8f22"],["/newsletter/index.html","6f21231412d6782e1e5266b9cafb911e"],["/nsfw-limited/index.html","4ad722021a7707bd22993e44e37e63de"],["/null/index.html","6680f7e35c4e960fa0dcf50523a7e324"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","5e7b5b694503eb04845037c0fd3caba9"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","f52e495e2178442e55cd2febefc2a2a9"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","f5e8eb8effdb21d4040a957902908558"],["/original/index.html","21ed85547cdc20def87d975cdd0c5098"],["/page/2/index.html","11a8c77b07ae01b63d45cb70b0c385e9"],["/page/3/index.html","43e59edb1f2cb8a8845a8e5fe5de195c"],["/page/4/index.html","0aaaff9dd0a1e30dfbfc2cde5e7cb299"],["/page/5/index.html","12176816a89d416850950a31869ad50b"],["/page/6/index.html","ce8ae4ab3eb24a010b8536caebee1595"],["/point-pop-up-assets/index.html","a10f2a0218245e0baa008a52fd37166e"],["/pop-point/index.html","c957fecf2169b3d6b6d8194c503c7561"],["/privacy-policy/index.html","a56d24b35e1cbc258e386d3ef6747f9b"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","e3d6a1d47b9c5c178a539534b4ae5ccb"],["/random-number/index.html","400a1d53392cac259a0f93fa053fbb67"],["/random.html","d28aa47a89b9e17aac86bafcbcf59f4c"],["/release-017/index.html","d2ecffa555b0ef81816443a6a940e370"],["/renpy-basic/index.html","8066919f6bc53ef246b662b9aa14d684"],["/renpy-crash-glitch-effect/index.html","945c65aec7039626ad8681cdec13fd49"],["/renpy-matrixcolor/index.html","f323347edbdc64d850997619648be8ee"],["/renpy-overlay/index.html","0cb8991986f63bd4ed1b18d302128ed6"],["/renpy-review/index.html","9f276bcbb07089485097e1105b579774"],["/renpy-typing-effect/index.html","005a2bb6e16417d68cd2604be1638f22"],["/rpgmaker-assets-menu/index.html","7689161949537afed7413352003fb688"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","bfbd9cf89027148791b2fde216c5e05a"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","bf5ade0ebb2d8efffabef4979a3a4210"],["/sakura-tree-background/index.html","f5eb1a5a782e3e061ba92b7414141730"],["/selected-button-style/index.html","00026e632f2a5e5a0a82dd3c203983a3"],["/show-variable/index.html","ddddccaf3fc283395c6f5a93ba70326b"],["/side-image/index.html","89e5d3a961bfe037a3ef1cf0777cca37"],["/snow-effect/index.html","91fc663b2220d9893b39779ff9b41fdb"],["/speaking-animation/index.html","4d04d5b35905fa861e4efa3d94f1793c"],["/splashscreen/index.html","62c7673eac6fa79517033e255a4d8e87"],["/suika2/index.html","6a844b5391078f262fe8a6402a8afac2"],["/sw-register.js","c6e31dc8dfc78d243d0e0a28e452c55f"],["/tags/Hexo-plugins/index.html","88afd4cba9fb6f7bace9ad1dea9e7f26"],["/tags/Light-VN/index.html","f863215f8ed453a31d67b388041bd88c"],["/tags/acg-creator/index.html","228c6d9402a4979f005f5f3392d5fb0c"],["/tags/ai/index.html","c5aa2e03732c02b72d7303f23c0d500f"],["/tags/butterfly-beauty-diary/index.html","163c84efb0952a001222827eb921df22"],["/tags/custom-hexo-theme-butterfly/index.html","7bad1a628375de9dadf696642fb75cb2"],["/tags/custom-renpy-title/index.html","d5e184babf070231fa35932880dc495c"],["/tags/dialogue/index.html","9549b9ff0648010a2932bb9920206186"],["/tags/effect/index.html","ca502f071367b2c64c94ad3fc2d2f481"],["/tags/event/index.html","d46f135d7741ade4a7efed027f166514"],["/tags/hosting-own-website/index.html","772cabb41d1a5ff408f2c1f0342d0376"],["/tags/index.html","1ac53ffe755eb4fd5403a22808fd5012"],["/tags/itch-io/index.html","724a2de7e5b8bf938c18989c4d44ae45"],["/tags/light-vn-update/index.html","d1ee7ae63f1333460941975ba9a308fe"],["/tags/nvl-maker/index.html","df0b2e2fc1f078d234b33fdc7b4b9a58"],["/tags/player-related/index.html","ba4e96e13aa38d6f516dc7416798ad2f"],["/tags/pro-tutorial/index.html","fb0e6a1423d5d09cb3d3bcb4a8fa1c2b"],["/tags/pro-tutorial/page/2/index.html","4594dc988f2b342ee65fc8e9927483fd"],["/tags/pro-tutorial/page/3/index.html","75752729c5f311f9bdd8e7bf33b0986a"],["/tags/renpy/index.html","a130def015aba02c1d40b7362646baa5"],["/tags/rpg-maker-custom-map/index.html","21798b0644f97e1f33b2b07cb01ce306"],["/tags/screen/index.html","7c99819edbb5aa75d3a4e28ff6f6f3e9"],["/tags/special-function/index.html","9de9f34906e33562c9ca0c843aeebc72"],["/tags/suika2/index.html","1b6af97fff6ff7d2a7a7758a246ac95f"],["/tags/tyranobuilder/index.html","0100f05876abc2cf3e9c9f2e2f0aa30a"],["/tags/ui-assets/index.html","db275d8657f4307c05823260ced3735f"],["/tags/update/index.html","125cb43ed18b42372735b41dbe6a547b"],["/tags/upload-game/index.html","d70450485de2f888a7f24e5ecd3e11e1"],["/tags/variable/index.html","9b4b20caa8f0fa7e2dd9e12713b5efe7"],["/tags/visual-novel-maker/index.html","3cc4b96bb31c1e881cd3658751cbf7ff"],["/tags/webgal/index.html","70bdb47159db8bf799c011c3cbc629a9"],["/tags/封面製作/index.html","5b479cee2eb30945de61ab12122a33b5"],["/tags/背景素材/index.html","c5d1c16ad93ea8235ac2f205ad327d7c"],["/tags/隨機功能/index.html","d9ed79689ad8d7deae64eb9799e6944c"],["/test123/index.html","56903a6058cb4b1911609021bf538169"],["/textbutton/index.html","1e1d8f2186e514a503692a6040c14b96"],["/to-do-tutorial/index.html","72dc73755c83c7bef8775fd9817e7e6d"],["/tools/index.html","597a0b354179a6f8c42a55955a060443"],["/tooltip-function/index.html","2805ec29261bb74cd4afb2360d1eec52"],["/transfer-to-hexo/index.html","bb03a57cc709c0d76be6c19d37028d01"],["/tutorial-update-history/index.html","921e0334dab6d98ccf07712fbb53432b"],["/tyrano-name/index.html","5fd9b7837c6d422d96ac68daa71442b4"],["/tyranobuilder/index.html","91a515d01b50127761ca116f37dbe654"],["/undefined/index.html","c7cd1b52d7eb6e26fcf98c6bfe576d46"],["/update-20221211/index.html","4f391e218b6edfda27d005d0205fee40"],["/update-20221218/index.html","52465c6057fc60c4b16bf54f0699c41c"],["/upload-your-game-itch-io/index.html","79194a7d375a57762100d41ffddb5842"],["/use-list/index.html","a51f730eaa066e9f152261a28b5f89a3"],["/use-nvl-mode/index.html","3a3b8088828f548c5899b5d1a92f82d3"],["/useimage/index.html","0a14a6e6c435cf9714447d7a7561cfc8"],["/variable-change-image/index.html","099e3ae8017ea0be3fcd8dc03a146170"],["/variable/index.html","a6b96d2f6528939d2d6456fa2bded7f5"],["/vibration-function/index.html","8206611741109dd95a855399534da403"],["/vnmaker/index.html","99dae0ed2bd7c6d49fc0ba4fb6286696"],["/weather-effect-tutorial/index.html","e5ae61b213ea693dd51bf07d866cb83a"],["/webgal/index.html","81d11a0e2cd08080c8322674c09d970c"]];
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
