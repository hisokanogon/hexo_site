/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","6e47db30199772f60c70031636df2e5c"],["/2player-battle-system/index.html","e9afc82521632ae858026795f251ec5a"],["/404.html","dcf7622f2f7ab53d5930e3c831cd5152"],["/about/index.html","02e1ecd6f529d533b140b22f0efb65cb"],["/acg-creator/index.html","b1c7dbca17a5ca21a8729c53f54626d7"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","8f16d22dcd45737b3d4598512ce504ea"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","86e867ad8035262cd5b269aca98a2762"],["/animated-title-main-menu/index.html","76ab0b1affb0ff18d3fadbef3fcd02e1"],["/archives/2022/05/index.html","e5bd99f46234b6098407ca0267437dc0"],["/archives/2022/06/index.html","423f67d18b9803bdbd7589a16b7ea1db"],["/archives/2022/08/index.html","aa2a2e10406b2edf38ae660babd4ab72"],["/archives/2022/09/index.html","f231998513d6ababcc20dc68214c6a5b"],["/archives/2022/10/index.html","63be364356770bbed98615c8d1756360"],["/archives/2022/11/index.html","e44a77578ac776dcd681203b15b1ce25"],["/archives/2022/12/index.html","6470e09cb380437c9ac164527e2d1654"],["/archives/2022/12/page/2/index.html","2283dad6e9a15d461adbb0855447b93d"],["/archives/2022/index.html","d850e35a21fb85d1c7713365532fc9b8"],["/archives/2022/page/2/index.html","c38744c14254caca7c5248fd217271d8"],["/archives/2022/page/3/index.html","0e20ecc5987073c12574ab6ce55f8f7c"],["/archives/2023/01/index.html","cc00186c5631ae303c3dd5ed2754fe5e"],["/archives/2023/02/index.html","145eda2b722e9a3ad87990b79de58217"],["/archives/2023/03/index.html","687c68429d3662cc635b4b0289b3c730"],["/archives/2023/04/index.html","c879a2d17c9d4c039c25df0476ab689a"],["/archives/2023/05/index.html","d152c1779115131194774c91f838a8e7"],["/archives/2023/06/index.html","7471e82dc736a382c6cc8f2e44d9169d"],["/archives/2023/07/index.html","2a2c83afafefd9328191bad6f196ef18"],["/archives/2023/08/index.html","a49dc94c88f501cb082b675e85ed9a3c"],["/archives/2023/09/index.html","b6ff564bab9cb192316f6fac49db7de0"],["/archives/2023/10/index.html","1ff7b7c61f4268688c46f6fe6ac1c870"],["/archives/2023/index.html","22e899a33a81cc38a48b9dd2daf40788"],["/archives/2023/page/2/index.html","cf627908cb2ab6d3de63bd06553680ee"],["/archives/2023/page/3/index.html","696e8d2960ed4139e4032b276111bdc0"],["/archives/index.html","cc730ab2a2eaf0b3fdc1976275734331"],["/archives/page/2/index.html","64b15f1f4907c7601dc35e09097806f5"],["/archives/page/3/index.html","6a9a2a532da69f72f9c57fd9fca666f8"],["/archives/page/4/index.html","ddf3d24d139159bc951cab68ef99e982"],["/archives/page/5/index.html","b35606ebf01886471da8790f80adb242"],["/archives/page/6/index.html","06f252bc2b9cab0bfdc1243b0e9f26f2"],["/artitalk/index.html","69b00f47fe04f3320d9e8833a0d753d6"],["/battle-beautiful/index.html","758d4e0f932d3d398a102afacd40ee06"],["/blur-effect/index.html","5fbb0371d3d12015dd4ae2ff1bb31992"],["/butterfly-custom-tag/index.html","3fcd6d887fa2f6079d66eb26c55d9013"],["/butterfly-plugins-faq/index.html","7de745f6745e3eeb736c4ef84f83e201"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","04eb5f7f81c2e94c591f09f3a45b77ac"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","186bc61a958a8c87dbf5e14c85d27566"],["/categories/announcement/index.html","db69d36e57586c8ca5328fadba71fec2"],["/categories/diary/index.html","851ec398e82dc7e64bea96470a97e9f7"],["/categories/game-dev/game-engine/acg-creator/index.html","a5560cfb244e580c41de2ac074666c5d"],["/categories/game-dev/game-engine/index.html","da8cf7c82c2877ef827824de7d1d6aa6"],["/categories/game-dev/game-engine/lightvn/index.html","9ed4b26691debaea21f09eb0215c749b"],["/categories/game-dev/game-engine/nvl-maker/index.html","2a0f872f2d98325c15bd64f5e8c218a6"],["/categories/game-dev/game-engine/page/2/index.html","28a9d76f80a105226e0c58d6f0b672c6"],["/categories/game-dev/game-engine/page/3/index.html","8631e2fa1aacbcd8e12342bf84d7e31b"],["/categories/game-dev/game-engine/page/4/index.html","7062654c722fb9edba108788dacb0fa9"],["/categories/game-dev/game-engine/renpy/index.html","8818a0120fe9cd4b42d43db8f9974383"],["/categories/game-dev/game-engine/renpy/page/2/index.html","aa1e1b8d60fbdd1f5d27b0c1bcafbe07"],["/categories/game-dev/game-engine/renpy/page/3/index.html","09ede1989cc586430f4a130aa6acd193"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","efe35bc1e57345cbe0fa63c67685ce6a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","c0e7366673fe9a0422a47afd9debdae6"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","25cd77e98b31a945df06456c378eab1c"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","927b8bcef0cc225b6e13b13e4217a892"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","d34993f7815e59ed88ab1252f4ac4270"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","dfa31546832696d905ac2128831d61eb"],["/categories/game-dev/game-engine/rpgmaker/index.html","376c40d3a99713b447b82a8c71a3b17f"],["/categories/game-dev/game-engine/suika2/index.html","05d35656a2f69c9b29e399da221dfece"],["/categories/game-dev/game-engine/tyranobuilder/index.html","748df140393f004c6e80b756a19f51d4"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","c0304ee8b0387bae10d6e99375c4c424"],["/categories/game-dev/game-engine/webgal/index.html","5d055d03db7db818c555621895698e49"],["/categories/game-dev/index.html","ea12212c6e9b7f25092c663651a7b320"],["/categories/game-dev/page/2/index.html","0a125cc45fa27a586897b229840f5dfa"],["/categories/game-dev/page/3/index.html","1fb2293db0393c1c837e6f0ef9f53b9d"],["/categories/game-dev/page/4/index.html","12b8c35e345034c6ffb6ad5d612dbefe"],["/categories/hexo/index.html","8d1fc6f93b35e8429a1a6a19a1db303b"],["/categories/index.html","df16638cd16eaa7abeac71757435132f"],["/categories/material/index.html","e849754d9bebe4240d72a6fa99cc8e99"],["/categories/update/index.html","2840b101fbfb2d9d26d1880446cd7cc1"],["/change-according-to-real-time/index.html","bc36dc9b304a2aa078506cf76e7f51a4"],["/change-character-info/index.html","35a65a2470d9f1a1c6ddbb36f9bdca51"],["/change-title-after-first-time-viewing/index.html","45c2d45163a4f6389b46d62a44dc779b"],["/change-title-based-on-event/index.html","4ec9482e7954f1db88d7cf91b4151f45"],["/character-interaction/index.html","621785478df54f37e6bfd64eaf7b70c4"],["/character-stats/index.html","7615724d730a79a4147a86afb80407b7"],["/chatbot/index.html","9a8e4dd2e8edb09ea8c2d85d3861c2fd"],["/choice-time/index.html","cc49c1eecd8e2c04ac5bfbf2a6b65c79"],["/comments/index.html","8f12c59019dfd188bb927be2433f2507"],["/commission-info/index.html","a200d49bce0b17ee0118cf84306a7db0"],["/create-button-anywhere/index.html","da90cfcebc7aefc6d4656f51c851ccf3"],["/css/eurkon.css","ed1f91e58e7609d2e76dd2b3f34ee3da"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","174cd92fb373e9de2c125a779db5723e"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","231787c4de3896a9d82ac577fb23f84f"],["/css/rightmenu.css","cd8859b2a7964f02159bc10a48985b38"],["/css/siz.css","f77f9b594e825ae67060fdff65f5438a"],["/css/swiper.css","ff1722902d8381449e158ef1797234e1"],["/css/swiperstyle.css","0ae85bd26b5ba7d6242e85e8e53be246"],["/css/var.css","a14f791a0f0971ba569ca8d3af6e92e6"],["/ctc/index.html","1159f4eb4c257ba296fc6cbfbe4a028a"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","752f5b98a7b99540691fdcd8c88ac9bb"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","41e23674aaad0daebd6e5edf311449f4"],["/custom-launcher/index.html","9776b843297c069e33f62194d6b94a8b"],["/custom-loading-screen/index.html","180ce5b6cbacf95dd6a11f7f504d4560"],["/custom-mouse/index.html","5f5c7b3aadb639b4ee6b478caa2843e2"],["/custom-music-room-screen/index.html","d1c7b2a070dad759e4620e780bf90d13"],["/custom-music-room-screen2/index.html","b491cff97cea62e2f66e770e3f18ebd5"],["/custom-nvl/index.html","4e36810e2dc2df9d95fb14bbfe5caf0d"],["/custom-player/index.html","a496fcb4e62ab42976500bd0f62fb0a9"],["/custom-preferences-screen/index.html","ab5c8fe322e7ad43e30c333fa19015e6"],["/custom-say-screen/index.html","da5d58b772b81efcdca283cfcee1d78d"],["/custom-title-screen/index.html","ffc1d557da5b485d7b8e21f97d010782"],["/define-npcs/index.html","90bfd11ec1c90f7b79cb7cb7d9fb55c9"],["/dice-function/index.html","7b022e54d7aef5a73e95f77b53a11422"],["/disclaimer/index.html","dc4905c7a4f2de4b0e024210deb2fe41"],["/display-immediately-all-dialogues/index.html","867866fa4f3f6b78392caebab491ddf5"],["/enter-name-screen/index.html","848d4857b9941a046c9edd8b27ca40a7"],["/export-game/index.html","08dc5cc327f6c5716e0a588c61da4072"],["/faq/index.html","1a3fd132054010f16370b3e106559e94"],["/friends/index.html","3965598001d310e5eff401f213085bb4"],["/gallery-template-assets/index.html","509ce5c996f5c9428beeb3a2b2676800"],["/gallery/index.html","e36e4b2aecddf04e21553b04a8599203"],["/gallery/photo/bg/index.html","ec9c126510d9869d4f3687b9a5c14795"],["/gallery/photo/gui/index.html","3fe5ceaf8a8258a6880175e274356fe2"],["/game-only-text/index.html","d7b7fd10b8f05eca34158f3d12513a7e"],["/gui-017/index.html","53a7d57ee1fe72d01edc1afb72e69064"],["/gui-vertical-002/index.html","faad2deeb69caebbf1747db3384cad45"],["/gui012/index.html","ff1efea5e9a5a869f551699fb4641e51"],["/gui018/index.html","8f2c74d8ecfed38bcc5c12496bc5e87e"],["/gui019/index.html","6e6e331ea66f3e745df97f3bc27a9e51"],["/gui020/index.html","5a83eb0a91da90f907ec440aea534ac4"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","2e74f6fe038a3c7d3b2448805d5fba8c"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","7304068f183ec894031726864afeb01a"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","ab61f6b6c3575144d2b64d14ee4a0036"],["/images-tip-function/index.html","40b911b16c508d0e7663c6e4d25eee49"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","cf77f7f90206ffa993fba2e7a095a838"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","a4bc1ae5dabbb68f4e7f5d95957d7240"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","8505c6f081d85999a3c668cc31a0bed2"],["/items-sprites-effect/index.html","5695ea809770c0b7f303b05d9fe6d2e5"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","fe30a54cba14447cacd6138025209b8a"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","664f83f8e3a0470c73c3e60da0bd36fd"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","ecd0f501b0171bb70948b9deafe098ec"],["/link/index.html","f11b78c944936eaab984e547bc7f2846"],["/make-butterfly-beautiful4/index.html","99358adf1b8a71f0738c71126e22fc6e"],["/map-puzzle-system/index.html","421fb1f00b474b18d0c22595cae93b2f"],["/maple-effect/index.html","cd565dd58ca94421360980cb4f18c7b8"],["/memberships-2/index.html","3443b32fa1f442c2c36593bbb7d62696"],["/memberships/index.html","e5fc8581ed036415c61861c279b2b06e"],["/multiple-language/index.html","d1fa2987d8693b9bd0e1da78b7815906"],["/name-input-assets/index.html","3299338ad7b76c20a19b5a1d1d26f70a"],["/new-year-event-2023/index.html","e06cd9d257a190356d847410c4e3f08d"],["/newsletter/index.html","d8d0705732ae60ca943d8cf486fa99ac"],["/nsfw-limited/index.html","2ac64090c303e202f3794555ade85622"],["/null/index.html","585f6273b5c6c908c70502d3d5a5b1d3"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","4fdcdd633c56d248173d8814c034b388"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","92b7678c43fc5db0b932f02c99a7e55f"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","c1214ed929f3457dff799373fffbd8f9"],["/original/index.html","70f9edafb7163b76db4428c0c92a037b"],["/page/2/index.html","9907b55357b79b6cf98f803084ad2c08"],["/page/3/index.html","e772d337d8fdca89631fbdc6d24cdda6"],["/page/4/index.html","a85e8c8eff9ba0fdd646b21ea01e9d2d"],["/page/5/index.html","791ab9bfc7c0d6557bbe0ae4a325fdb5"],["/page/6/index.html","9c921ad6632f1910f35aa212e952c307"],["/point-pop-up-assets/index.html","30a73a11ecb8dee8d6d3110df8121019"],["/pop-point/index.html","bc888b6650f595473e57d5d5bee81941"],["/privacy-policy/index.html","cb1628c6ee7b4ea0d592b7b44f0d75cc"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","420ab23639be098adb3095675ae164d1"],["/random-number/index.html","658c13d5761103f0b1daa56b66b191ee"],["/random.html","8f5497226fd51bbd3f77598830bf8f93"],["/release-017/index.html","dbcf15863f94d8c8ae47c2836089ce99"],["/renpy-basic/index.html","c42bd82eaa9d2389472264ecc11d2061"],["/renpy-crash-glitch-effect/index.html","eb11423e4aebbd32df12d3fa6be2ebd2"],["/renpy-matrixcolor/index.html","1d64a761875a94a9dfdd1e8462fb6014"],["/renpy-overlay/index.html","b5d7e82f5404937b89f47db83118331f"],["/renpy-review/index.html","81373907b282719ff9ba703f5227fbac"],["/renpy-typing-effect/index.html","8c9bc34edf4bacaa4c5819c7049951cc"],["/rpgmaker-assets-menu/index.html","12f52335173d3e8eab6da68b45c042ae"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","46e6a2e74b49e4536691e40d0cf7186a"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","b3bde71d30642e15ece9cce949a9152b"],["/sakura-tree-background/index.html","aa62a9841f75e2371bd94beb4bf1d175"],["/selected-button-style/index.html","deb0d617aaa6a672fcaa486aeb98a9c4"],["/service-worker.js","3bf432e221e91316e3911dd1e888e30e"],["/show-variable/index.html","98dbea3941bd374a36b6981c5357339b"],["/side-image/index.html","8aa02e29afdee75148c5006f7dadebdc"],["/snow-effect/index.html","0b4a3d9ffa2d8e2d83f31eed81dafb6d"],["/speaking-animation/index.html","3179ff9971c3a221bf2f25f7c6dcec5d"],["/splashscreen/index.html","8220b35d2a441e78e2a0c55a0b0ab83f"],["/suika2/index.html","1ef04215fc3543306abd5903846eef34"],["/sw-register.js","3cbafc4dde2f1d742bb23ced175a8276"],["/tags/Hexo-plugins/index.html","9b9796608ae0a4e417be1d9bcfb3fa69"],["/tags/Light-VN/index.html","121988331d3230740397f5aa59139a9c"],["/tags/acg-creator/index.html","ca0f21c349f1f5e6ee278c2abf4329a0"],["/tags/ai/index.html","90949b4d1d38e3095e8bb5d6d64964b4"],["/tags/butterfly-beauty-diary/index.html","07f4cda2c1ab24cd316fb0466a42d4fc"],["/tags/custom-hexo-theme-butterfly/index.html","7d39201878989406a6d3bb80ecce0670"],["/tags/custom-renpy-title/index.html","5f2c623c4656a80d5fa9696359e1c88c"],["/tags/dialogue/index.html","a86ab1d5a3cae0fe097ef8a9e83a76ca"],["/tags/effect/index.html","d42520b9f15aa2cba9e6322c776bd0e2"],["/tags/event/index.html","869e924ed9a55460f9c74af35dd3b7bd"],["/tags/hosting-own-website/index.html","169f059430dd87c416f406dd56473f80"],["/tags/index.html","b5e14378c8165d3dcbb23f3569bcb437"],["/tags/itch-io/index.html","74bee77f11f5a02f6ceff6d8f3ff51dd"],["/tags/light-vn-update/index.html","8fa3bb7cef09f8f739851136f3913b5e"],["/tags/nvl-maker/index.html","6586842cab345b4714ef607a01d4dd7a"],["/tags/player-related/index.html","1b1f6bae04007207642c8ca1a41e4313"],["/tags/pro-tutorial/index.html","679bef9d69038625975ef4163de639e9"],["/tags/pro-tutorial/page/2/index.html","4456ca10d12a9a56fc9df4e4c750b249"],["/tags/pro-tutorial/page/3/index.html","89456e0b08b6f407b3adff0cee48007b"],["/tags/renpy/index.html","362aa91a032efa0c24796bf41cd5514d"],["/tags/rpg-maker-custom-map/index.html","8986bc377be5b5cc3e7a595fbe7f8094"],["/tags/screen/index.html","f416370bb4a113db4b3178ea91d72be7"],["/tags/special-function/index.html","05d050fa385c90353ae79644a2be4c10"],["/tags/suika2/index.html","fa9cbe43df572b30b27e973752ab88c7"],["/tags/tyranobuilder/index.html","b48b52e02c01217f5254045980449fd0"],["/tags/ui-assets/index.html","bda78ed236c01a8e0f4ade6ad1eb40db"],["/tags/update/index.html","cd0baf5ccd389df7794d87b61a6cc60e"],["/tags/upload-game/index.html","ca193e74420109cab4a03dfdf12d9c8b"],["/tags/variable/index.html","3f91e32b9cceaca828919e575c2942ac"],["/tags/visual-novel-maker/index.html","14d41c6993167dd5181f64da81ad6629"],["/tags/webgal/index.html","47eb58328174d73f5b4fb3aced632e48"],["/tags/封面製作/index.html","b8dcbd54029bf618253ffc1471b90920"],["/tags/背景素材/index.html","e714669d1070da74527f17493d0775fc"],["/tags/隨機功能/index.html","d7d6e5d6aa929335154174dbe52231c7"],["/test123/index.html","6a6c9ae77ad5d464b5e712774d49556c"],["/textbutton/index.html","dbfb23b227e9202f72845f9af300800f"],["/to-do-tutorial/index.html","fdb870409b36f18a0552bb4e8873161b"],["/tools/index.html","37c5d191424821e3b29b8a0b209c5e3f"],["/transfer-to-hexo/index.html","1b271ba176cb454c8d8b021a2e3fe75f"],["/tutorial-update-history/index.html","20c7dbd10de30ad0968f5bb2ddc3955b"],["/tyrano-name/index.html","8678d01c8d14ba487f1e5762b1a18ba2"],["/tyranobuilder/index.html","d003c5ed33a05ad0b99ba8573c507f5a"],["/undefined/index.html","c19f3ee0070886da3041f8c7a3da742d"],["/update-20221211/index.html","45e517ce82ad94aa286c0dc1bda2dd12"],["/update-20221218/index.html","a6965e7affd868afda05c9c795504813"],["/upload-your-game-itch-io/index.html","1f73b2490b0d47a838be99653dcc45e4"],["/use-list/index.html","64b46ce457ba89f0b3ff2ff98c48f785"],["/use-nvl-mode/index.html","55eb4a260230b9de338ae5453df8c2f5"],["/useimage/index.html","3eec213f03ea95da4d82b61e685757c2"],["/variable-change-image/index.html","2117aa770ae6a7e9de2b0063d8d0e5e6"],["/variable/index.html","573f44b931bb719573d0bfdcc1ca8ff5"],["/vnmaker/index.html","3da815038ba448bf84f8e0b4e7f567a8"],["/weather-effect-tutorial/index.html","52e6d2567bc16da4744e385d071692e9"],["/webgal/index.html","77f9b83a729f9e51d84054090b0e5160"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
