/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","0ea186c963fc684218f08682298bc5aa"],["/2player-battle-system/index.html","e96ac4a4a748fb2939c9d433a0706fd5"],["/404.html","37c95435f8091d60041232564acfacab"],["/about/index.html","f8dcd9f87791d414bd89e5a14ee0a053"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","c7d0ccb3a2a5a4e961541646bb25de1f"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","5ea2998dee27abc342b3089d33d0a85a"],["/animated-title-main-menu/index.html","7f0e64233972e30efaec6dbc858bfcc9"],["/archives/2022/05/index.html","3985e90f265f507546004bdac7d3b302"],["/archives/2022/06/index.html","bf4a486d406c21b9191c2277a46224ee"],["/archives/2022/08/index.html","33953aa1f6e927079120a4594a48e745"],["/archives/2022/09/index.html","afe26263edf0994ff69dc2cbbe01ddae"],["/archives/2022/10/index.html","dc1a15316d2ec52bbe053956c76dffde"],["/archives/2022/11/index.html","b60e9e83b15e1b1604134fbaec07e9e7"],["/archives/2022/12/index.html","8e68bb559ea0dc5e0a44412743326207"],["/archives/2022/12/page/2/index.html","1d1615710165c1d3f69215e0672a19b2"],["/archives/2022/index.html","890c7721ee25bee8b494a30b817d7e66"],["/archives/2022/page/2/index.html","3c02c5b6301ec73bb007be3be262fd7e"],["/archives/2022/page/3/index.html","72b0ede37d3558e16f157212183974f4"],["/archives/2023/01/index.html","f8909064ee91fd66973cea351ddb0a4d"],["/archives/2023/02/index.html","9943216a55c2ee280f6c2576c1d092fc"],["/archives/2023/03/index.html","5e3a252a29fe48f6cb8639ade9e7f1ce"],["/archives/2023/04/index.html","2aa86a58df95fbb8945cbe9be53d44a0"],["/archives/2023/05/index.html","70353d7fa8524611497604256ac5942f"],["/archives/2023/06/index.html","96d4560dd841785f0748e55f8c1a7bd4"],["/archives/2023/07/index.html","3d62d9c9eff8d498fb7c9a72e2ef2d99"],["/archives/2023/index.html","43590cdd43cf46cf792bf9acb6931b0f"],["/archives/2023/page/2/index.html","37684ef29c457a08d316c981a0cc6180"],["/archives/index.html","d98e0f25283f83afa0c0845dbe580900"],["/archives/page/2/index.html","2a70ae2268228ec9c0dfc9f2b4937995"],["/archives/page/3/index.html","5466f93bb89a48acf2badca6a5b44bf7"],["/archives/page/4/index.html","797021adb797c852b9701c33f4b0639b"],["/archives/page/5/index.html","b67f670d724ef131887c78e7a1366d02"],["/artitalk/index.html","e16142696641a776138a1139d200551e"],["/battle-beautiful/index.html","ce42c2501f89dad4c4a38cc3d791cac6"],["/blur-effect/index.html","6541bd8610a19394fc1563fb9b58cec7"],["/butterfly-custom-tag/index.html","ef26fb75b3c6831a5bf9a155962562ed"],["/butterfly-plugins-faq/index.html","ccd131ad83ac71de5375e38f80238b78"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","27aeb22a651daa86e36059231006214b"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","c55c2d68ea5c237612aecec9af6360c9"],["/categories/announcement/index.html","48c26c0a9fabd7ee95e9e2d2c1275761"],["/categories/diary/index.html","ae7b4b8ce99f262e4e184291cf55bd0c"],["/categories/game-dev/game-engine/index.html","d2844f1bb513fa04e4a2eab9aea89cdb"],["/categories/game-dev/game-engine/lightvn/index.html","256b613dd0b17da8bd367564ae135996"],["/categories/game-dev/game-engine/nvl-maker/index.html","fdf1943f3acfe0b5f122768182814fec"],["/categories/game-dev/game-engine/page/2/index.html","cf47475718b8894759c02989ff074d43"],["/categories/game-dev/game-engine/page/3/index.html","acfdfcaa0ba32cec2e83d5935c93a5ed"],["/categories/game-dev/game-engine/page/4/index.html","eb9a5f57a7111d692124e449b4ae9e67"],["/categories/game-dev/game-engine/renpy/index.html","eb448f0413c973d5f5197b58a9776230"],["/categories/game-dev/game-engine/renpy/page/2/index.html","b13b961fa98c4c446cb981f237f06261"],["/categories/game-dev/game-engine/renpy/page/3/index.html","21cca6594ca7355f5111f3fa22dfe9ab"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","c14e8f482f74b2956dd518ebfbf402a6"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","d7dd6f5054d8498df64e50f62a4c217e"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","b57db4bc2fb476532a3a1333f42fa947"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","075bc3aa192325e535cb51e956bb994f"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","dca4b4868f3196230012ff897ca16545"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","3817ea4f59ab2b51c5c31bad092bfbd8"],["/categories/game-dev/game-engine/rpgmaker/index.html","284ab59581a8adee3af350ba1b6d57d9"],["/categories/game-dev/game-engine/tyranobuilder/index.html","1238289adb31dab64de0c2789e85967e"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","eaabc0599e06107f3ff7f0472a4b1f79"],["/categories/game-dev/index.html","6b27a3b1b248264f1e4bbde58713cf59"],["/categories/game-dev/page/2/index.html","d960983d1ee11295ac3fbe53736d7cd0"],["/categories/game-dev/page/3/index.html","31279d6d34a8bbe42b998063a11eba03"],["/categories/game-dev/page/4/index.html","54e3558e5c59c270f8cb57c82be24289"],["/categories/hexo/index.html","dd6f1e7d4fd490653576d660dd9a32b6"],["/categories/index.html","7f8147ad3472f0d1e62d712335dfc378"],["/categories/material/index.html","039f53a4a6e341c0f6b5b698beeceb75"],["/categories/update/index.html","b8c0e450127bbda2d2c66296c604ea80"],["/change-according-to-real-time/index.html","59cd5cac6b5922382b49dd5f5c27b0b9"],["/change-title-after-first-time-viewing/index.html","724f74e13a4077d243adde27a27fae7d"],["/change-title-based-on-event/index.html","a40bbb290785c53fe2a06db596d6e38c"],["/character-interaction/index.html","37e047ed546108c9d51eb32de0f21830"],["/character-stats/index.html","0ca867c112fec932baccc85a6c8c428a"],["/chatbot/index.html","063673e066522a12939b85ce83344184"],["/choice-time/index.html","b0597b89566b4e3ab773aa6565fe2cbd"],["/comments/index.html","64d119943e52cc431646243f845badc4"],["/commission-info/index.html","0b892a18c9597fe588950c03761d15fb"],["/create-button-anywhere/index.html","bf02ec311d1f7e0601aaf90dc9923b8a"],["/css/eurkon.css","a756ddb411a9cdcbc11fa78dd0c8d45f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","8b9b3b388109a99e41e3c8b77f1df793"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","953d000c44b1480bb86fc584d96e1280"],["/css/rightmenu.css","6b4e5b056321f5e087131f258a174b05"],["/css/siz.css","92842e106550e07749e255085fe594cf"],["/css/swiper.css","e1d69346313236c4eb8a28732b422f57"],["/css/swiperstyle.css","851c36ef28ec43dc463a4205a4451f86"],["/css/var.css","98ef306f6f7ba72003c7ba39e0b5b33e"],["/ctc/index.html","9be187cc5b8889330cd33ff0ab21245b"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","34e6b3f9ce4f1f203aeed90690354b48"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","e8f386d1869332a0691d32b7235d9219"],["/custom-launcher/index.html","f3d7aa1fa930b03ec0adbc2b65b2f77a"],["/custom-loading-screen/index.html","ee5e2bc793991555481dfff4248a3312"],["/custom-mouse/index.html","c46340dc9956d25fb090d5e299b8d6ac"],["/custom-music-room-screen/index.html","be7364a192567dd77d2c7966f1a17332"],["/custom-music-room-screen2/index.html","b9d1a62b0b791701c75fe1072c66adf7"],["/custom-nvl/index.html","0dc5ae063f9bf1e87b3f98f58198382a"],["/custom-player/index.html","385be493982511a57151f6c874daab5f"],["/custom-preferences-screen/index.html","768fcb7fb185e1f34dd7abdb104ff97c"],["/custom-say-screen/index.html","8e5b37835993168379c78f3f26ad9e60"],["/custom-title-screen/index.html","b007b6e0001aa1f0970c481064553201"],["/define-npcs/index.html","6be5fb92f8b7cac5c0fb0d761b77535f"],["/dice-function/index.html","462745883c7576e00493698bb234244a"],["/disclaimer/index.html","ccdf55cab97f2f09d38bf1d4f2105ffb"],["/enter-name-screen/index.html","8b80e3f0305a399d85982cc0e1b6cb81"],["/export-game/index.html","f1c77db09165c86e6b9fef9b6bbd2492"],["/friends/index.html","03a5f10b845f12d311693f869cef536a"],["/gallery/index.html","1adfb52a349c9bc29a625ebd83af87c8"],["/gallery/photo/bg/index.html","e46f60121d48c0a00f1fddbc19e8c109"],["/gallery/photo/gui/index.html","37373363b55cc8fa65616e73a9b6b94c"],["/game-only-text/index.html","f823d8ee3ceb96d6c2c81c3e429b50e6"],["/gui-017/index.html","0b6b156c206e178ff06eeebaeeac8120"],["/gui-vertical-002/index.html","b5d6d3be06e69fc4cdabee80031898a5"],["/gui012/index.html","3e3f226aa33dd74f56b48545ed8e809f"],["/gui018/index.html","be05140bb513b7c40edf83b235a6a5b8"],["/gui019/index.html","61bf73d5d873aca34bae89a6cc34cb80"],["/gui020/index.html","b25321a518ffd74f78eef3bd52394ef3"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","a9f758075f66ebc4e1a37fbe0ec0a010"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","1518372e0472c1c9d7f1a49c7f84799d"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","c41ec29d342d18f9b1b1e5884b525a2b"],["/images-tip-function/index.html","01b6803738dcc1bb09695fb9302f3c31"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","262973e523d90e3642ef89e38ee2c4ff"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","bd46eafcbe9c9b745210524bc0bfa410"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","aacdeeffd41eaf4df01a2739f585aa0c"],["/items-sprites-effect/index.html","596362cfa74e56454cfbe7fddbd1104e"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","442f218b8f33ee1725cfbc55660f5d04"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","949bc9a273b92d11432a9b4563c6b2dd"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","244565b87120caa50fe16fae2a6ebbc2"],["/link/index.html","899abcdf40f66f9fc27e173dabd8f4e4"],["/make-butterfly-beautiful4/index.html","98dfba7a1fd87556b531464fb78477a7"],["/map-puzzle-system/index.html","3fb30ce608119e4c86071787d54bbfb7"],["/maple-effect/index.html","b741e4c7827936383dcbfeac5501b2fd"],["/memberships-2/index.html","5065fdd5f44fdede18af7e153311cff4"],["/memberships/index.html","912d9bc45aa3a7234e5b304e7691c0c1"],["/multiple-language/index.html","4c55657a4023be102c8988c2365afc83"],["/name-input-assets/index.html","5f12296ae6c300465a674894b0e0c9e2"],["/new-year-event-2023/index.html","77fe9f9f0fe307f9a0c871135ab79790"],["/newsletter/index.html","126bf91ba40a0aff7137c2940962acdb"],["/nsfw-limited/index.html","a825798d825154cbfc2106cce836f73b"],["/null/index.html","b781d545b6529c95e9c6b063b54d1167"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","7886883fca2adfbade4ec99eb5f7ab90"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","97f87200738bc832154ec250d0e8f7dd"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","8fe98e74b902ee0231d8748573a98ca4"],["/original/index.html","b5376a62baebe9d0ac79fde06f38b046"],["/page/2/index.html","a92d16a83d2faa303dcf5a6d4b467bd9"],["/page/3/index.html","e9ec97476d9526ebf72d75aa0c39f5f7"],["/page/4/index.html","2b909677a123625770bb5a3a5bd8ad0f"],["/page/5/index.html","0ead7144a275e06673b1ae4352ad1ba0"],["/pop-point/index.html","fd44af73ce695ffef295c375703b9813"],["/privacy-policy/index.html","a27ee955a6077e6e411925a3b96b6933"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","e62600bae2b5030e1dc8b30a0890e1c6"],["/random-number/index.html","75ca5c1f9ee35178b722c51f5fdabc24"],["/random.html","351259bdcbe17b555814120494b1d34e"],["/release-017/index.html","3e092fbc18e68e2e1a00bebd2ff65d8c"],["/renpy-basic/index.html","02ebb286a701ef4a8687296c0fdfcf1a"],["/renpy-crash-glitch-effect/index.html","9c0db5ccacee3c2b85e73f30126e4119"],["/renpy-matrixcolor/index.html","99279a7a12706c29ab70d703c9d834b5"],["/renpy-overlay/index.html","8ecdf3071dafdcaaae1147a5e779b5a2"],["/renpy-review/index.html","e52035680543524549f16b5f9192cbdb"],["/renpy-typing-effect/index.html","13cf2bef8190c2f018fd5d25aab8c006"],["/rpgmaker-assets-menu/index.html","31eeee568299cf718812ff83539c07e5"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","8d2ff4c0e0ba3031a147e1d5d49e5120"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","0439005a4b8004f29bf0397bd146bb3f"],["/sakura-tree-background/index.html","4c89faa6ecccd468f2a79ff1f7e46c91"],["/service-worker.js","86de67eea130224e637793deeafa37d0"],["/show-variable/index.html","9013174cffd03949eac4adbd28483955"],["/side-image/index.html","c97d70c342cb81d598658f38b9a436bf"],["/snow-effect/index.html","885ef04cbee4508b5c0400edfdaaf9b2"],["/speaking-animation/index.html","6591efa4ec65ccbc7c58edb495d653b3"],["/splashscreen/index.html","98c5a6478cd04b976eb7ee6bd89ade44"],["/sw-register.js","015f4d42b0c8e239764b5a15f18315bc"],["/tags/Hexo-plugins/index.html","105dd87fd9d78dd14e5b9f866d41ad09"],["/tags/Light-VN/index.html","5238f122b1f981c8d50bf89cbe4494bb"],["/tags/ai/index.html","048153898bfcffa22889a70ba3f257b6"],["/tags/butterfly-beauty-diary/index.html","00f282022cfd25450c56ee40d03de2c4"],["/tags/commision/index.html","4ce15dda07bdabc310250c6dbd08e394"],["/tags/custom-hexo-theme-butterfly/index.html","90dec8a8bd5ee02cf9f26f6305e2830e"],["/tags/custom-renpy-title/index.html","19ac8577b81a2417c82191c3ba39c927"],["/tags/dialogue/index.html","74e98fe3356d5408fb4459eabff3ead9"],["/tags/effect/index.html","cb0a59d960c5ae38c1098a56fa89981c"],["/tags/event/index.html","7a34cbe2fec08552fe414ca9ca9e95b8"],["/tags/hosting-own-website/index.html","fde4f63d0f2df9b23ab93babb97485aa"],["/tags/index.html","3d068122c676e2b5d3260b0880906b3f"],["/tags/itch-io/index.html","5561f6c6dce7db7f0e334d1d3ffbe289"],["/tags/light-vn-update/index.html","957d3ef377e4f4403cce814ad68ad7b7"],["/tags/nvl-maker/index.html","160759a8446f4b71066af8105d5c7c3e"],["/tags/player-related/index.html","8dad48027c300d443074802c8ccbb444"],["/tags/pro-tutorial/index.html","4f29c7414869fbb0f87e78f71dc8df4c"],["/tags/pro-tutorial/page/2/index.html","ef00949adb108f9d71027a402a8bc180"],["/tags/pro-tutorial/page/3/index.html","01508a367c256b3e389016d85429e8f9"],["/tags/renpy/index.html","58eab4398d80c2e9513eb46858561a44"],["/tags/rpg-maker-custom-map/index.html","8e1654ee9243a48732126edfb173160a"],["/tags/screen/index.html","2a0e14a2a2cfb4e39577803f08c7afe6"],["/tags/special-function/index.html","ae0ba1595c8e909445d5e2f2550abf73"],["/tags/tyranobuilder/index.html","009702eb326a7dff7652fd6150473f41"],["/tags/ui-assets/index.html","c5ca2bf6069f2997126a03d3a3b5b8ef"],["/tags/update/index.html","38e6e40915dbe571611f9fe09c36c450"],["/tags/upload-game/index.html","ec1ffe1b6a71c013d2055e298f6e5e06"],["/tags/variable/index.html","f59a2990f80032131ed0ebcb0c50a422"],["/tags/visual-novel-maker/index.html","33c3151d2a65975917dd2c91e9d4ed6b"],["/tags/封面製作/index.html","3e0ec51ff1ba8eaf088265b193ace1b2"],["/tags/背景素材/index.html","be7dbaf757448b175b2ce27fa9927eb8"],["/tags/隨機功能/index.html","e061bf2a5e5110cf3ddbcb51134d90c3"],["/test123/index.html","47254636f9f3e65ab240490dbe77e7dc"],["/textbutton/index.html","2f1452d760271c76cfa6d76bb082ec81"],["/to-do-tutorial/index.html","c6c9a2c66394a654952c2671a61386fb"],["/tools/index.html","45795a9c18fc1376c560684e037b7365"],["/transfer-to-hexo/index.html","b62b744444f5266453b6a576e0bb5774"],["/tutorial-update-history/index.html","e03c552cf5648a333016da64e158bc9a"],["/tyrano-name/index.html","2d585ec4a32a6a4f8b7359ea7c605957"],["/tyranobuilder/index.html","269e33e63605744b58849bb908cc3e61"],["/undefined/index.html","c60c129f3bed42df406d94ac957b0b65"],["/update-20221211/index.html","66239b2c98e20afb3f239a31cea05e3d"],["/update-20221218/index.html","8232e165034347e253db5afa5a74ab27"],["/upload-your-game-itch-io/index.html","d528546d674d10c42395684a9b73c25b"],["/use-list/index.html","146dc37f0189727145095e7ff0f54aee"],["/use-nvl-mode/index.html","aafec98680fd1ec74cc96539cc8b99ba"],["/useimage/index.html","da1bbd280a98ecaf92889524deccc6f6"],["/variable-change-image/index.html","e8ab4c89211c56b07c89ba3f00183bb0"],["/variable/index.html","fc21b74fcfe1a7f39caa8a4705f0d247"],["/vnmaker/index.html","7d79d73a294828dfcf4afed8f02d1580"],["/weather-effect-tutorial/index.html","909e96e484387dcf6a1eee83538e5821"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
