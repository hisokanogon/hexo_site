/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","254dd8d5d0b0531f81403c8a24c2139f"],["/2player-battle-system/index.html","f53c2e3ebc21a59c666af2de3943e691"],["/404.html","cd58bc1c9268ade67541413a7607d283"],["/about/index.html","df7db8550dc06baa53f601f4e4356eb1"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","7ffc4c4ff2ed08d995e5bbfd9e02894f"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","8c99703dc68ffce93dbf88c9eb2b3340"],["/animated-title-main-menu/index.html","b8b101a4277e25ecd4518a8822d4be26"],["/archives/2022/05/index.html","cd0f0fc452dc73fad00cbb1bda4b205e"],["/archives/2022/06/index.html","d871c887b844d95ff23ae5b487001401"],["/archives/2022/08/index.html","3591079b1bf3b967a5c5eb68fed26fb5"],["/archives/2022/09/index.html","bed4f7cf053f35c1281b54b06ead3766"],["/archives/2022/10/index.html","5c542563ea5ba87a383e660a6acc4ce5"],["/archives/2022/11/index.html","aaaed8aad1ac174af25065290f687850"],["/archives/2022/12/index.html","05087f4c3caa6d4f827c8aa5c35e1674"],["/archives/2022/12/page/2/index.html","d75b4377fd5d0a728e071d83cba08f7a"],["/archives/2022/index.html","ae0787db37aaaa0eaf09ece6f9a454f6"],["/archives/2022/page/2/index.html","c0a4d31d4d9d874651e1752761794381"],["/archives/2022/page/3/index.html","12241e4844c8db12475fc1991072bee6"],["/archives/2023/01/index.html","e5e8822aecedce0f2ca0ee6ca77213eb"],["/archives/2023/02/index.html","3c88b2e21999eeb516cc1e4a919ebec2"],["/archives/2023/03/index.html","213808d92251d13bce6281fee518a50d"],["/archives/2023/04/index.html","d40555e77bce0960a61eb45ed9b1c7ea"],["/archives/2023/index.html","20b72f583033e1c81c01ef3dc86050d7"],["/archives/2023/page/2/index.html","dc4a3cd83cdb790588d4ac18ef082eda"],["/archives/index.html","fb9f0e1d3707f2af9726e644627d150d"],["/archives/page/2/index.html","35e52e59e946312bedeef352020d531d"],["/archives/page/3/index.html","5e017467c96ff8c95580eb7dbd162bd8"],["/archives/page/4/index.html","5bb1b257edc935eb7f2452c70bd6385c"],["/archives/page/5/index.html","d7af16941f0b68df789924ca5394053a"],["/artitalk/index.html","54fdf6f29895c9c072fdb5516d97c70c"],["/battle-beautiful/index.html","0eb752a97aab7580563aabfd6a6dadd6"],["/butterfly-custom-tag/index.html","dc3ca8048357f9499c0da5d07bb154ce"],["/butterfly-plugins-faq/index.html","cdc9ec35e6db40509e5bb46a8be38e8f"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","0b48e8a96a57df9f3a85fc66f950eefe"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","479585257888c91ec6695b1f9067a1c0"],["/categories/announcement/index.html","589891f8f7f4057fc8f7f2713acc08e9"],["/categories/diary/index.html","7cdc8251c79228f79d136c768c6f1938"],["/categories/game-dev/game-engine/index.html","82b1f96fb192f50fe26a5cacdf8bce87"],["/categories/game-dev/game-engine/lightvn/index.html","7565d2bdb7e0987f81fd1b59b22bddfe"],["/categories/game-dev/game-engine/nvl-maker/index.html","42642fc57d196177ef9bc676ab201388"],["/categories/game-dev/game-engine/page/2/index.html","bc313470870d71003b6c8dadf08b3bd4"],["/categories/game-dev/game-engine/page/3/index.html","807e0853384803b4528d97cf9c4dd373"],["/categories/game-dev/game-engine/renpy/index.html","e79b7f12b8c882dd735775e0c2c91301"],["/categories/game-dev/game-engine/renpy/page/2/index.html","1df39792adefe76c963bb311c5887293"],["/categories/game-dev/game-engine/renpy/page/3/index.html","ea2772e8064c87c406e2bd8bc33b9c58"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","23e0f7d3f6a2392db9c9d03d43619f3c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","de4866fa4f2a389859eb10e4e27c5be2"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","b7967c2913891b797f83142418f96db3"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","e109bd333f8b1d460e64a5551538e742"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","f1843be8e00d4dfacc3c99e150d49745"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","0807a522ecd344aeaa78a0bcc644fd7d"],["/categories/game-dev/game-engine/rpgmaker/index.html","f910c663379a1e5552665356c548a6af"],["/categories/game-dev/game-engine/tyranobuilder/index.html","0fee86028ec766565beabe5a818ba5d6"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","92068f6785930c5c85934710011b01d1"],["/categories/game-dev/index.html","eca30e82b55201feb74b05d3c1476b73"],["/categories/game-dev/page/2/index.html","55621a844818bc2166ab79adce93a1fc"],["/categories/game-dev/page/3/index.html","9c04c85e2f92b3f3108216542ad2ee30"],["/categories/hexo/index.html","4dac11fb71309f562432de19bbe41eba"],["/categories/index.html","fc6e965f0d01b396de0a07a335681373"],["/categories/material/index.html","e86c9044aaa6361fe86c8d605b974ed0"],["/categories/update/index.html","ca92a2799ef49eaea07b0049bfc66c37"],["/change-according-to-real-time/index.html","ababda730c416eada21396940add3888"],["/change-title-after-first-time-viewing/index.html","608706d49e85d7302fa5a64b5c762808"],["/change-title-based-on-event/index.html","8f9c32fa4475b421416ce42620cbad68"],["/character-stats/index.html","2c12af7e0a5d46b0fd74d73caead5da8"],["/chatbot/index.html","1d112e47a5dbff50dfcdbdd9384db780"],["/comments/index.html","aba8d6557a730000afcf3a414516d5ce"],["/create-button-anywhere/index.html","773d148abbb19fb7540439408ccfa9d3"],["/css/eurkon.css","b1f7616b4e3603862acd92cc62810f14"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","56b2d6dff3ca4c6a73f3ed3eab17c4dc"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","1de7f7b2fca19c68ede64ff8b28c2db2"],["/css/rightmenu.css","e99e6af8e4e0bf6628c53f6a5cbe18fd"],["/css/siz.css","0d5cd27183230ab33f1ad9b623d1244e"],["/css/swiper.css","43e7777a5549afe56d5977785c3fd795"],["/css/swiperstyle.css","664da086fe660282f8f7c29fc404e154"],["/css/var.css","d6d888900642767898fd4a40a19bd365"],["/ctc/index.html","d09fdbae77b83a39e21eba732e96f0a9"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","58f26393e2c6fea60a0586997ed900e9"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","319bb6f34583856f5d0987bf4e22ac3e"],["/custom-loading-screen/index.html","a3df92836d1b1e76ffd9335ce7705f48"],["/custom-mouse/index.html","3acdddbec5e23fbd1cbb63e8bfdf72da"],["/custom-music-room-screen/index.html","b7677f407bd6bfbe6ca728ef6adf9bfc"],["/custom-music-room-screen2/index.html","ee3c4f2ba61a24c73327669b92ef8221"],["/custom-player/index.html","d031f14132c768301cc66e5e6b78b737"],["/custom-preferences-screen/index.html","1b25077ade347434e32a46d474c39167"],["/custom-say-screen/index.html","ffeca321f1bb7d5f4e9d289aeb6cc63d"],["/custom-title-screen/index.html","9b689695baa7199e7b136bdf35ed9e6d"],["/define-npcs/index.html","49952fd4ae8459adf7d9bfe6f7876ae4"],["/dice-function/index.html","669349bc42d4b77bab15f82d3d48ddcb"],["/disclaimer/index.html","e4f744d14cdaf2d69a0fe98551c74167"],["/friends/index.html","8333d3e0461c3ad2f5859bd6b750493a"],["/gallery/index.html","3634d22e8ca15c11cdb5f54c87c15e05"],["/gallery/photo/bg/index.html","25100373a9b444bc07afc1be95f468f7"],["/gallery/photo/gui/index.html","83dce8d5c04178b93ef1a838f4cfa1ad"],["/game-only-text/index.html","16732d8fc74d6e27328937d1984a9de2"],["/gui-017/index.html","64c0e0be91736ac843263a38ba7f2c56"],["/gui-vertical-002/index.html","6f585e052fab00d88d15901d045e1e12"],["/gui012/index.html","2c46ed98d95c558b352afa75f77e34fe"],["/gui018/index.html","a9132f96a0c003afbbfecf19ba82e954"],["/gui019/index.html","ebf3ea7f7f03cc8e5b0dde5291ef0241"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","f2258ad47b1c84bfc84c3ea6646d829b"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","13c77a460567f24e892d1f236add5d29"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","839ee50512648d1abda79395356ee1ce"],["/images-tip-function/index.html","6db7436056b873c7528698f1c9909239"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","3b624e8a38d220a1832a062b9dc2a3a0"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","9991cf97f93a303642d910c4a53ace3d"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","4f25ae81f79531fe88a51f653cb40c3f"],["/items-sprites-effect/index.html","07bccad9a1356c45a0d9d49d6c97bbeb"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","c38a5de236340486b71ace421d98c439"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","dd3b236f88f2d2f318591305fadc3058"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","6abd4b0d8b1cc05242589d0b5169e6b2"],["/link/index.html","13e0c8434763fe066c479a4efbd0b1d5"],["/make-butterfly-beautiful4/index.html","00fe9b6f6908ca2bd6bf7c56fd44c021"],["/map-puzzle-system/index.html","4898738d28f771292cb48dced550af2c"],["/maple-effect/index.html","e3bc34ded6a5dc0518f2022c4b2501dc"],["/memberships-2/index.html","8b53b4a0ae119a9be2a3bd3cba47ee87"],["/memberships/index.html","84d6f4e84ad33bcd244c46536c7f1c67"],["/multiple-language/index.html","56fab81f35471b22bfc2598fab9d4640"],["/new-year-event-2023/index.html","ebe194998ca9830a2c291a4c105d4a33"],["/newsletter/index.html","74637bf83dd0d55f0b3ca18972fc0035"],["/null/index.html","5ade41f46fec6f5791b881a1f832c01c"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","ab5f4d5d7ee27183d1c10e2f883a3ae7"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","bf13aa9bad9aa04d0d0e2cc606c3ea5e"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","e6857433af208f19728a9d4051d1b15c"],["/original/index.html","ec6f0f2f53f675fcfa8597f6ff4ee3c9"],["/page/2/index.html","cedbfdef479b346ebe9dbb6f329323fe"],["/page/3/index.html","b9447c8373c8e180b6c09122cc3b0048"],["/page/4/index.html","4b7071ec214c7674b141b022f7cf71ea"],["/page/5/index.html","1a818286869588af0ee010a0ea63d13b"],["/privacy-policy/index.html","d0828847c0b76e077baaa357d7ebae73"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","95a5b1a9f4bd2d8fbdcca1206ffa851b"],["/random-number/index.html","4844e5b9bea861a25f123905fbd5440b"],["/random.html","0bb3f6a81af7270d32113e74574acdc6"],["/release-017/index.html","abaa1f38c2bca6b39229c00b361fb9d8"],["/renpy-basic/index.html","418d1f3dd67ff6c5fe426db3cbe0daff"],["/renpy-crash-glitch-effect/index.html","341f050b07b0230bee0f7f9bf020bd2a"],["/renpy-matrixcolor/index.html","568245d09e898ceae3b7d147d762e6eb"],["/renpy-overlay/index.html","d55586085b23aaa6d5addb5c766a2413"],["/renpy-review/index.html","e883c86f9bd7b45cdbb452e3036d1b3d"],["/renpy-typing-effect/index.html","e7daf24291ca2c316051e32f629d35b4"],["/rpgmaker-assets-menu/index.html","ed05e5143b3330c99ce06df410ebce5d"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","16b178e91aae02544cf236f021862958"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","73108b8c5d44b58fe7814ddbddab15f9"],["/sakura-tree-background/index.html","e7df5eb1a1c48497476c57f5566b429b"],["/service-worker.js","938382f85250affda63477ad3aca03f2"],["/side-image/index.html","a13359bf8e0f84d24ae7071fd96b6860"],["/snow-effect/index.html","bb42180c0af3a70485c7750690a54983"],["/speaking-animation/index.html","b33ed514590d0544f820977d45dc1a83"],["/splashscreen/index.html","1f5d2b3b73839bf385640fcc99d3fd24"],["/sw-register.js","2f89251735fb6dd3fb1763d55565c5e4"],["/tags/Hexo-plugins/index.html","94855befa9c894b05882002216df6c2f"],["/tags/Light-VN/index.html","7c2104e8c436647f1ffb3d4f3073e8d2"],["/tags/ai/index.html","42eb936b34500e11713ac186a9e4bfbc"],["/tags/butterfly-beauty-diary/index.html","c68be9dbbb14d3d3c718fb322d4e1dd0"],["/tags/commision/index.html","b40ce5033feaf657f0a84a271d138a1d"],["/tags/custom-hexo-theme-butterfly/index.html","c8e44dcc9681e4ad413447fb1c9e7fdf"],["/tags/custom-renpy-title/index.html","a77522b509b5e868bc96e41612b42ea6"],["/tags/dialogue/index.html","869d09df46733b17f6cf7bc6c5d36312"],["/tags/effect/index.html","874616df8759301aaec8bcd83f12958d"],["/tags/event/index.html","5cba2dc3001fceb8fe0cef3af14ddaea"],["/tags/hosting-own-website/index.html","105025251ee77159eb121fa8bb9a591b"],["/tags/index.html","2e76d357bf6d5a8ca3d2bdbbecada7ca"],["/tags/itch-io/index.html","b2ec3cb3be624e0503cc67ea36230aec"],["/tags/light-vn-update/index.html","c38e70976a07b4c851437b05fd72c141"],["/tags/nvl-maker/index.html","0d763a3ce027e1d08911c53189871efc"],["/tags/player-related/index.html","4b151f0fae92c4b8e95d7b5039de3260"],["/tags/pro-tutorial/index.html","5c2e087814e83ecff0ee7811a2df93f6"],["/tags/pro-tutorial/page/2/index.html","e5e393bddbf3de1bddbc5fb970fcd95a"],["/tags/pro-tutorial/page/3/index.html","f7109a9b4839bdcc4961386c98721bbe"],["/tags/renpy/index.html","bd0c6c4593a2a530c6899409e48d4975"],["/tags/rpg-maker-custom-map/index.html","baf9ea6dad661b0504e138ee4c94e91b"],["/tags/screen/index.html","31d9bb686a0c826e3066295715ca3cd7"],["/tags/special-function/index.html","25cc0e1dfd9f483b416dd0fceba5b252"],["/tags/tyranobuilder/index.html","70f0879c5a365abf8c5c44b9100bdcc2"],["/tags/ui-assets/index.html","2bd521dddb94d0d1e1b9607a9ef3a1be"],["/tags/update/index.html","8588e2b96de7413afc3015bf424f1a0e"],["/tags/upload-game/index.html","90483fea92893865a97d4820b1382b0d"],["/tags/variable/index.html","393c56cd9993aaa82d4d2c2fcb13f3c8"],["/tags/visual-novel-maker/index.html","76a4825ba9111fb685ef72b11055cd39"],["/tags/封面製作/index.html","3762e238a3506d921f20016494dfab00"],["/tags/背景素材/index.html","b65c0f92e2e568fdb2dc502e6fd3aeaf"],["/tags/隨機功能/index.html","e9a582cadaac5b94bb6580f5f1e1ebbe"],["/test123/index.html","49b16656d8933510809416c9b30018b8"],["/textbutton/index.html","5ef971de7410045a122f7d4eb02e4b7d"],["/to-do-tutorial/index.html","9b8941abb0f7f0de7edeba0bf16af2ee"],["/tools/index.html","d65912709b09ef3ecc3db5b4148d9a63"],["/transfer-to-hexo/index.html","7c15a81768b7dcc3f20b6f5193a7eb6a"],["/tutorial-update-history/index.html","2c504d845043d4913f8e773887aaef2a"],["/tyrano-name/index.html","839e20270909746b35fd0f7bb0c36672"],["/tyranobuilder/index.html","c158af5d641d5836a0d866e3a043d891"],["/undefined/index.html","49a84d0360522810f2a0cfb6d743e4a4"],["/update-20221211/index.html","885379e4e1fe74848f45ad839f6f43a7"],["/update-20221218/index.html","fb1a503f43a8080fd5708d58a963169b"],["/upload-your-game-itch-io/index.html","0d90ebe020ca8fb7a3981542ba52a39d"],["/use-list/index.html","acac9ab33765b49d233f5c967dfa0eb3"],["/use-nvl-mode/index.html","a6ad7308d7355440de6b2397ff9b70e7"],["/useimage/index.html","522cbbf4e218ad05719cd46bd96854b1"],["/variable/index.html","cc6449f7c35e28c6ef0fdb415e973874"],["/vnmaker/index.html","bed59dcb0162ad729783ba46061343bf"],["/weather-effect-tutorial/index.html","1f9ae7f3fce2d0c5aa0a818f09c9c7d8"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
