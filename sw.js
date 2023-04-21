/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","da77b6f5fe7560beea99b9c77be2bdaf"],["/2player-battle-system/index.html","0a9e01de8c14f06bcb24308b353b3fad"],["/404.html","68de3e34a1d03127a18aeba035810bf2"],["/about/index.html","5601a61d9520543818c7c8bfae6b6e63"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","f79ad8d476d50fa51416477c7c81662e"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","fd5c7d2d27129305a823938a5c7308c5"],["/animated-title-main-menu/index.html","2fb5833aa1687dd6b35158c251c37ab2"],["/archives/2022/05/index.html","38a88a4283240ee29dd0983980f8fe8e"],["/archives/2022/06/index.html","16aafff9fd942d71e85eab44fc06e2b4"],["/archives/2022/08/index.html","12a5d433364e662fc4ae3d1af0635a11"],["/archives/2022/09/index.html","a8b5c52b4604abca950b94c095249403"],["/archives/2022/10/index.html","ca635d78f748b0fe9191cc591e0ba529"],["/archives/2022/11/index.html","2907e551c2314970b022f5128260eda7"],["/archives/2022/12/index.html","c0788a5f6ff75484c096fe913e4db07f"],["/archives/2022/12/page/2/index.html","6bffffffec0b76a0c2f8203b45a70dcd"],["/archives/2022/index.html","fe236837d2a90e0c9ec9c0e429a2c4d9"],["/archives/2022/page/2/index.html","93002b7ea7245a084594a4642a3fe9cb"],["/archives/2022/page/3/index.html","810053836b4d25b0a60e143c8f8658cd"],["/archives/2023/01/index.html","37f37aca6d863ea6106adae8ff7b9d6f"],["/archives/2023/02/index.html","8c5975e3a15d0afc3ea7b19a4bc22a27"],["/archives/2023/03/index.html","441fd2879d2d3ee2dc96408373cddbc7"],["/archives/2023/04/index.html","5920e1eb2868d64f255a4f8fa24cf378"],["/archives/2023/index.html","7b7cc50eb410228e2e78f908d4eea329"],["/archives/2023/page/2/index.html","65fbacb2c19101981f2841acaa33441f"],["/archives/index.html","b4d950a95c9d86d37377a1e32fbd93f7"],["/archives/page/2/index.html","bb4cc1e6fa7dbe20694817a00bc5c981"],["/archives/page/3/index.html","6c2f594fe77a9a3dc3e294a2bc4c9b13"],["/archives/page/4/index.html","4fc0daa3aa28f7b5c4463673c69c5b71"],["/archives/page/5/index.html","aba4f710c6f4fe35de1782db92d451f4"],["/artitalk/index.html","670be083eeb02278992a80735d09bfc6"],["/battle-beautiful/index.html","0883fb8588f47caf0d51a65be9395460"],["/blur-effect/index.html","8a41a596b8070d0283cf250e75749439"],["/butterfly-custom-tag/index.html","d8374a6dadf442e0754077b21ea6755a"],["/butterfly-plugins-faq/index.html","70525869579d483d282459d81a851a37"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","e7d73edb16ff13e737bd30cafb9d7d4c"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","acc3ac403311e3eb73f7f46c7bd6e07d"],["/categories/announcement/index.html","68b7967f64f41c9a99f79f9d74a59e9f"],["/categories/diary/index.html","b941931f2b0817eb1a2cddb95cc0284b"],["/categories/game-dev/game-engine/index.html","7d0d6caee7b56c46252496b92616fc2d"],["/categories/game-dev/game-engine/lightvn/index.html","0678dc42369377962819829d83c21dea"],["/categories/game-dev/game-engine/nvl-maker/index.html","c6165ebb71876a92143ad092b5a8424e"],["/categories/game-dev/game-engine/page/2/index.html","e90917b58046a5c8bbb058be64c1fd21"],["/categories/game-dev/game-engine/page/3/index.html","f9ae3740149c4192e0e02c60fd6fa307"],["/categories/game-dev/game-engine/renpy/index.html","1882c56d18d5ea1b5b96839a951ae46f"],["/categories/game-dev/game-engine/renpy/page/2/index.html","9697aade6c3f365be49df8a3d627be8c"],["/categories/game-dev/game-engine/renpy/page/3/index.html","c72bf136da648b0e88df2f8cfbbea08d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","d243a12610f8ccc10e181302dd22121b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","8b2d1bfbf29f49dfbcb3b664a925dc84"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","fb3867cd6dccad592da307744ca5ae7a"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","5f3a1192c5542018a0a56a8504c4c0aa"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","95be573d9b3997a60dbc419166809376"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","873c08d555959da774cedc3370d0033f"],["/categories/game-dev/game-engine/rpgmaker/index.html","14d91a30c122676c2c9828fdc3357ab8"],["/categories/game-dev/game-engine/tyranobuilder/index.html","ff0477ed6ba49d96afc36dd49ba15de2"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","a321a1163a8e7fbfb7496df6e928cd41"],["/categories/game-dev/index.html","0d0289395a443f4e384684f1de7cd870"],["/categories/game-dev/page/2/index.html","2361228323b141c1d3be1f776c7c4c7f"],["/categories/game-dev/page/3/index.html","581450e443105d03e5fd3cfcd595381c"],["/categories/hexo/index.html","0a44beb3ae533fa4224100a74b72f163"],["/categories/index.html","3335ddf9c837519b58a50521f200b356"],["/categories/material/index.html","10b1f5fde87e45edee5374bba0002197"],["/categories/update/index.html","fe9ccb650ce6c995e699cc292adf2eb4"],["/change-according-to-real-time/index.html","2f44111fe72227bbcbae3938b1f8ac69"],["/change-title-after-first-time-viewing/index.html","eb545df35c1f9e21dee91328afb31fa3"],["/change-title-based-on-event/index.html","2be118480f6863b4808af6c056115c4c"],["/character-stats/index.html","f56e8548161e5cb6ccf5210de3f82e60"],["/chatbot/index.html","e40a003fea5debcbce1946cf39fc781f"],["/comments/index.html","283dfe6fe7261e6097a96d9fa9a06b5c"],["/create-button-anywhere/index.html","89019e116ad3bb5f32181f85cf60ae13"],["/css/eurkon.css","2816ad9a42e1d2d348079ea2c8dffab7"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","0b855a2a1bf78de124cee4cf896132f4"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","c2fad10108ff7868ed4ebae312488686"],["/css/rightmenu.css","c08ddb3ce374268d84d010052b00b5d7"],["/css/siz.css","a9b595483a9c969c93da5e2280a65abe"],["/css/swiper.css","72dc4a96be6f4cb98c4b5e494bfa5d85"],["/css/swiperstyle.css","e5adf1974798670f48bbd7a80dcf2636"],["/css/var.css","ba61c61c45fe50f31d756146e039ffb1"],["/ctc/index.html","4b71fcbf93a42a1a55051dd63621f36b"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","18a67ffdd5abefaa37103d85ec6d5d18"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","f75a7400e241d8ee521d081548f50c30"],["/custom-loading-screen/index.html","aefb45f37eca50833005b95a220da118"],["/custom-mouse/index.html","0934805ac3a84196895c559f6336952a"],["/custom-music-room-screen/index.html","21c46db37a13addf73550f4c2c19e775"],["/custom-music-room-screen2/index.html","c4c607d1462d5aa20ba293be1dc82838"],["/custom-player/index.html","0acff59a11d13fce15f011caceb4b3d4"],["/custom-preferences-screen/index.html","aed8aaa88d8c6025be7c8d0391275506"],["/custom-say-screen/index.html","6a5237830a5ce20bf1b95395b48b89d2"],["/custom-title-screen/index.html","e46f4d2ac7072fee0a1f96e8e52e80cd"],["/define-npcs/index.html","8c128077d437d914e2e26242bc85a14f"],["/dice-function/index.html","a7ca0fa109cb12c4f963d69a75b540e8"],["/disclaimer/index.html","95eec7ad7ba1fc8f7f6305ed71370b7b"],["/export-game/index.html","85334075d7189e2c04f01287d028d69d"],["/friends/index.html","3a069cc3023cf757589ea56e33235c3c"],["/gallery/index.html","39d42215af42a49a7f35c3d418e1739b"],["/gallery/photo/bg/index.html","7b2ab23757108d70fff38eddfcc7d299"],["/gallery/photo/gui/index.html","8039a1496217efcee0727a137d0579a2"],["/game-only-text/index.html","c94e42f7344a58f99bd43faf1549ccc5"],["/gui-017/index.html","27c9b64d5037878c71606d76950d665a"],["/gui-vertical-002/index.html","d952965b6b96c55be10c36864f71d80f"],["/gui012/index.html","26ff94f511a175c0ba04b846987b16f0"],["/gui018/index.html","c22704c321354b1e339ff7cc24cb8c73"],["/gui019/index.html","5ddda8a63995c2a0f8f2f9ac22c3699e"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","7dd5317ab949f3da67edf67163e27d5b"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","2eab878a76bf33ece6fcd274c2e2c9f9"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","d1e0192edbf6144c3f25ede99e20bcc0"],["/images-tip-function/index.html","77d8862483534ade2e54d08f52e12041"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","f702625cc139463c34fcdc4bf52b57d3"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","7fcb22dc4ce782f4c8430bd2214fc15e"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","c6b1ae9a5bb8f0debdb52b40435d7358"],["/items-sprites-effect/index.html","4dc4743362b756eb1d7f8a8286b9c033"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","a7d0cbeb10bbe86f1d870cbd38af03f0"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","7f030bdef63183045385e349fa8b1a4d"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","0b641188b85f1f0576a461504fbaccca"],["/link/index.html","eeac921d3f4f6c3a1765a0ce2fa9dcad"],["/make-butterfly-beautiful4/index.html","8d1776f238910329531c6bab05fd8e41"],["/map-puzzle-system/index.html","715a3891556f323d4faee67f32b0e69f"],["/maple-effect/index.html","a59542ec5fd309f2d3cab165d3459bd2"],["/memberships-2/index.html","ed4dee3e70c82e044ba96a7ddab52307"],["/memberships/index.html","fe6f63ecdb20bae91038d1dad393b102"],["/multiple-language/index.html","17d78e01eabc515841577db893ae487c"],["/new-year-event-2023/index.html","88e96b3454bd0fe6d8e37696d99837ca"],["/newsletter/index.html","96960a4e685e0463bc88f7de98431c98"],["/null/index.html","c7b422b5984b1dbf965b8184ca4d5ea3"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","419494bd561a8f2f9231d744e58ee277"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","1fcbd89a107d46d213d4d0ec406c6e43"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","abac391481b9ddcc4ddf85f9413da4ff"],["/original/index.html","18b58b13010eaf2206041e7389172034"],["/page/2/index.html","282c05bbf94df54a32d0dc9e4f118b70"],["/page/3/index.html","a873fbfe57d04456a49d1b4267b9d5ad"],["/page/4/index.html","bc85b0606087b53a057a455e554c39e0"],["/page/5/index.html","2eee8a653a5c33fe43e3b2a1c0bd417c"],["/privacy-policy/index.html","b067958c5c87e94f722cf24945156208"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","85911a696582fff15468219d4a4afa33"],["/random-number/index.html","1d7cbd86e748a422902fd35386221525"],["/random.html","0c1c9206cc54031b1ad33a510d7841a4"],["/release-017/index.html","8bcc404300b15f0feba189268fb6b4b3"],["/renpy-basic/index.html","b4b83c1c8819dfd83466eef03828809a"],["/renpy-crash-glitch-effect/index.html","581ebd94a088b0b38cc6cba0efe28a4c"],["/renpy-matrixcolor/index.html","fee5e38b3dad7ef4da37389eb8a18c64"],["/renpy-overlay/index.html","49c24a25acfdeaa01a6ea913b15807e8"],["/renpy-review/index.html","f66b8ccabcb2950398126d7cbbf54e5e"],["/renpy-typing-effect/index.html","8db3d4c9fcee65568cb851a3912590cd"],["/rpgmaker-assets-menu/index.html","ff0eac415f916454c4da5802872452d5"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","c361056eb6884f24f8eb012bd4d7fd72"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","a2cd9bdc93a173884618d34c30d47551"],["/sakura-tree-background/index.html","13fa434fa5f767e6cdc266dda6730ff3"],["/service-worker.js","6a0a7052fc0b36f0ecb7d5d386691726"],["/side-image/index.html","e48765f0ad635fc757c21d3ca6958db5"],["/snow-effect/index.html","bf60531166f25dc90e25c8d456488aa2"],["/speaking-animation/index.html","829053217929a66c974c27405a882628"],["/splashscreen/index.html","99e68a701be3aea19d10314740f6c05f"],["/sw-register.js","52ed6d0e1fe732c05b520675d1cd27e0"],["/tags/Hexo-plugins/index.html","ed402e9b5964fe9b338bcfa96b549ab0"],["/tags/Light-VN/index.html","67056b6fae54775b71da8acd8cc5a5f9"],["/tags/ai/index.html","6096a379000ea8706b14889dd6b72f0c"],["/tags/butterfly-beauty-diary/index.html","319f71ac1a5141a0f6934092b8e5a0af"],["/tags/commision/index.html","3d02474e04c9cb7a58a560cc92620aaf"],["/tags/custom-hexo-theme-butterfly/index.html","5552eb328843206a7d4334aec48a11d3"],["/tags/custom-renpy-title/index.html","7db8a65eb87283dc283af0c2d62e166a"],["/tags/dialogue/index.html","dd81c1af659c012876a5e1d520ab611e"],["/tags/effect/index.html","cda0c5b53f3350bfad1d60454429a53f"],["/tags/event/index.html","2c919017588431828c78ba2e1483ce09"],["/tags/hosting-own-website/index.html","86929088f04e09b71a1ece4b0463afd5"],["/tags/index.html","8b413cef8cb5d090cd80b550630aee7f"],["/tags/itch-io/index.html","1a3194e54c2c137535e239e1b7bcafa1"],["/tags/light-vn-update/index.html","753d0254afa523cf1b107e324ab5fba2"],["/tags/nvl-maker/index.html","ea7fbbc7e3f81f4f4a997ed83f7f9c49"],["/tags/player-related/index.html","7491421634cd8f8b934835690940aedb"],["/tags/pro-tutorial/index.html","5019af5304307024d3da2c962a2f6c2a"],["/tags/pro-tutorial/page/2/index.html","8e98072cb3d68f0a14bc00b211bec47e"],["/tags/pro-tutorial/page/3/index.html","02e89bd3ec541ab982e3c83bbf37d542"],["/tags/renpy/index.html","e5ca50de2934600d25d19bcb1135b703"],["/tags/rpg-maker-custom-map/index.html","a5613183ffc695ded9e418eefae507d1"],["/tags/screen/index.html","254084430c8936d549315d61cc124b74"],["/tags/special-function/index.html","90f6db4fde96f6496a2ab1d11413db70"],["/tags/tyranobuilder/index.html","3443fed1c6a9ddc1de009ad90c5dfe04"],["/tags/ui-assets/index.html","a73c2a0a6dd87380972c8c91e9229065"],["/tags/update/index.html","4f564ba124cfafc0a68efd9ff0d54912"],["/tags/upload-game/index.html","9f515dd907597291ea4effab5d5e9d0a"],["/tags/variable/index.html","8dbf4aedde592f8754118e798ef0552d"],["/tags/visual-novel-maker/index.html","45042a3ed2d6a53359768c875b0e2dc2"],["/tags/封面製作/index.html","b1aa1c600431a18c897a1fe7ad61d940"],["/tags/背景素材/index.html","a8697c707b199b4b842299b1f7b875d1"],["/tags/隨機功能/index.html","11145fe01be2835aa0f2c396d5b048d3"],["/test123/index.html","c71a9d43eb2b96b358bb2e114908aa99"],["/textbutton/index.html","ffaf642a9b9d4360fb0ab93999b92427"],["/to-do-tutorial/index.html","b8b66fb9f29e64b06bc324fcc8d49fd1"],["/tools/index.html","dcea23a53b13d62882491ca7e54c543f"],["/transfer-to-hexo/index.html","c96d3fc6f14537680f6d7e08e568bea5"],["/tutorial-update-history/index.html","bb4c42d7a318f887c3b3aa822b5fe610"],["/tyrano-name/index.html","501f5c57d655a7acd8a93467b9e4ea32"],["/tyranobuilder/index.html","532bf35f2861a35be7feea09b45a2988"],["/undefined/index.html","34ed2309d2bd97e13361acfe5c0c79f5"],["/update-20221211/index.html","d64de184bfb9f43636fbee287f609fda"],["/update-20221218/index.html","d005338f185e09cdcb3ad225cf36d7ca"],["/upload-your-game-itch-io/index.html","af7821d4945e8eb7babbb1c23203533a"],["/use-list/index.html","8445121de87ea22dd4b70d824280a252"],["/use-nvl-mode/index.html","9144ae50b21fa7a814c5f78d1e6cf1b4"],["/useimage/index.html","2c4e06e033b7bb4a234b8638ea48d329"],["/variable/index.html","df5f94794e3e4c95ac477df5ab781e92"],["/vnmaker/index.html","c4e31346091e8fca66546635e6eefd3d"],["/weather-effect-tutorial/index.html","37ad4f7c472a0618f7394db513b2a5f9"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
