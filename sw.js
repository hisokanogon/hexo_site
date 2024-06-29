/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","56b7c4182bd253944a8bf3a0410aa2e8"],["/2024-future-plan/index.html","cb1c1ec29bafd1ba16ba0d5be4ec553d"],["/2player-battle-system/index.html","1191dd52ed17f11e230b14775b8fd3ed"],["/404.html","62a0bb8c02f50c57ce5aaeeda472f6f7"],["/about/index.html","2c5c116f370eb02171453ec25d5cdaa6"],["/acg-creator/index.html","6d63b1a74e06293e10bd927995a4dae6"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","81e25883ed22e03db6c5bcef85649253"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","319ae2a897e6b541e9386b7b34049448"],["/animated-title-main-menu/index.html","76a09ac959b3ef0b1c2e3e98ce761971"],["/archives/2022/05/index.html","3c5e10c1b52b3056d9474c3e0bfb01e4"],["/archives/2022/06/index.html","603110c859a8d9c9959e8eb1f026fdf7"],["/archives/2022/08/index.html","25bf4d8cb581a4f93fb5e53a544bbb2e"],["/archives/2022/09/index.html","53643621a442fbeb4d40fe59c3cfc7d9"],["/archives/2022/10/index.html","de75e7f4643cef72ee0346717b76e16f"],["/archives/2022/11/index.html","1c01f61403bf358107132817dad0a08b"],["/archives/2022/12/index.html","ebed596615ef19c96c33a8b631bef6ec"],["/archives/2022/12/page/2/index.html","830cdad907d5b00b7009474d5043a75b"],["/archives/2022/index.html","b369713db543e8e9bf0de80ffe2b5572"],["/archives/2022/page/2/index.html","13637edd0617dc121d63bc7ee52e59f8"],["/archives/2022/page/3/index.html","07dd0c438d37c9abe4d3d09bfb490cd0"],["/archives/2023/01/index.html","6072da993e5041b2f1a22452371aa3da"],["/archives/2023/02/index.html","cf66d6ae63c40444775e2f2b2640ad45"],["/archives/2023/03/index.html","3b8ec262709d48353ea46941ef2b195d"],["/archives/2023/04/index.html","72b54320b3c8343badcdbbe63537a6ae"],["/archives/2023/05/index.html","e0f10c0f915b1627adab9af5c31843f4"],["/archives/2023/06/index.html","27ea992e053e44861aa209be18247423"],["/archives/2023/07/index.html","e08dc7f8f3adaf2444cb0aecdf75189d"],["/archives/2023/08/index.html","2b6fbc022c6dd9dcafbaf37244cd99eb"],["/archives/2023/09/index.html","e6b3a96fb316b7b407cdab8f36bdfc80"],["/archives/2023/10/index.html","131c86aee9d57f7a8e14b25d3cfa2cd6"],["/archives/2023/11/index.html","855037b376efd6377c8b6569e7933c02"],["/archives/2023/12/index.html","50c9a25a09fad2d46b6014c86050e5fb"],["/archives/2023/index.html","51c42d74d515aa9393ca9115d848ad62"],["/archives/2023/page/2/index.html","3ad23818e52e5dd69b4e1fc5db3116f0"],["/archives/2023/page/3/index.html","ae2ac297e5139320d5ae0ee8193c34e8"],["/archives/2024/01/index.html","59bb1f05bb0aae1592a29af8079f2ce8"],["/archives/2024/02/index.html","695d24286a5e579e2ba2a55eb6e2e437"],["/archives/2024/03/index.html","6e3cc62246f9975b9ad3821ef4979fbe"],["/archives/2024/04/index.html","543ace418182c5ed67f72b58cbe5e047"],["/archives/2024/05/index.html","5a5b82081ba66db773a2239896532119"],["/archives/2024/06/index.html","347c960f4927c2f1f81918fda82574d9"],["/archives/2024/index.html","e1ff65db020731f5875cd2966b5dda07"],["/archives/index.html","71f8e06af6ffa3027252eda19eab6a6c"],["/archives/page/2/index.html","53c98c7cf9a17731b362c83b0d504e57"],["/archives/page/3/index.html","52b7be2203cec61fc2229e66b416602b"],["/archives/page/4/index.html","0fa5c0224accfa464bc952671451c4f6"],["/archives/page/5/index.html","58c062b9bf7b78373630bf71f17d7971"],["/archives/page/6/index.html","56aebd5a9f0cdc5e51e96a6e9b39a137"],["/archives/page/7/index.html","6a8bd5da0ba66ff36709b6607b03b298"],["/artitalk/index.html","8f72159589efe02c6603bc8afb6a6dd3"],["/battle-beautiful/index.html","16aa18a4212c93fc66c92c21bc7ba713"],["/blur-effect/index.html","696a01b532dfbf2c71adc81020bc7f41"],["/butterfly-custom-tag/index.html","c69733cd12ff6f1884add4272bea846c"],["/butterfly-plugins-faq/index.html","6132f4475ebfcbef1fc4011eee08e124"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","203ef760ddcef7fca77a86dc27dc6a3f"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","ce32e5cf0b5b68d968b3232285fc29eb"],["/categories/announcement/index.html","20b545bf6c338e831c5e813a4e07d43e"],["/categories/diary/index.html","6b9e96e14fc1277d9e284f55722f30fe"],["/categories/game-dev/game-engine/acg-creator/index.html","b74b4863e5763dbe4a182e204adb9c46"],["/categories/game-dev/game-engine/index.html","4fea6bcbace0b599673b97e844dd62d2"],["/categories/game-dev/game-engine/lightvn/index.html","df49f6b73b7e814247d59eb5060fd115"],["/categories/game-dev/game-engine/nvl-maker/index.html","ad3405e9ce486e6334b76a939a6c20b9"],["/categories/game-dev/game-engine/page/2/index.html","c019c0a6dd3a76268970d6c46ca7fa85"],["/categories/game-dev/game-engine/page/3/index.html","1cfb1178c736401fee9d7ebf2f0262e3"],["/categories/game-dev/game-engine/page/4/index.html","09a135f39de1671c0754a57529aeaa42"],["/categories/game-dev/game-engine/page/5/index.html","c8bd04740caa39aca9543af712db9dcc"],["/categories/game-dev/game-engine/renpy/index.html","cbdaeb10b1896bab2cbdb2d4b3377a35"],["/categories/game-dev/game-engine/renpy/page/2/index.html","32b33d2f96e8b7470d274684481dad25"],["/categories/game-dev/game-engine/renpy/page/3/index.html","daef4cfc6cabb4cfd1c7552d8a3c769a"],["/categories/game-dev/game-engine/renpy/page/4/index.html","cd023d2537922755ec64fd492b1e1cda"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","ce4707d98b75d136537b5c27143acd2c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","f7d8166f3eaded58fb2ef60e3ecb113b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","04efb26388e738aaa57be158cefc8337"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","1f25524d889ab2845c06a6a36564c90b"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","d62447500451da764ce4d0ea7a3e9ddf"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","a096cbda793b000cf1c54948087a6fb8"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","3040fd7346b0669847e4307806701ea2"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","68516a4be0ca08143a2be83d2135d79c"],["/categories/game-dev/game-engine/rpgmaker/index.html","9b35ec60cff6fb8d13bac66bb435b759"],["/categories/game-dev/game-engine/suika2/index.html","36f1e98b62a0a5380d6ad67680e28f6c"],["/categories/game-dev/game-engine/tyranobuilder/index.html","a0c43b0dbaf1bd88d910f8a078e12a9e"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","03a87ab44273421a55db639b148ff15e"],["/categories/game-dev/game-engine/webgal/index.html","e9a3b7865c30f74cbb37b47e391e4613"],["/categories/game-dev/index.html","e19a590a74fcd39dd7ba082b089c31c1"],["/categories/game-dev/page/2/index.html","33a2fd4f2b335771bc863c39c4694039"],["/categories/game-dev/page/3/index.html","27ab00484a65e16897edb13370aaf6d7"],["/categories/game-dev/page/4/index.html","852d9095979a564112613ff528923dd4"],["/categories/game-dev/page/5/index.html","3d8fb88ea507911f9833de4f9ba40ab5"],["/categories/hexo/index.html","4121d8d567b547665fbfd0ca43d42057"],["/categories/index.html","894e8f783c36914f938be6dcf3de855e"],["/categories/material/index.html","dd37fde16f7e1d78f75514f194779639"],["/categories/update/index.html","0699d984406c3a85086254eb47c5a6b0"],["/change-according-to-real-time/index.html","3c32875735a7c22c8f1542457e029038"],["/change-character-info/index.html","54f880a4b1fe1cfe57e88a3816424006"],["/change-title-after-first-time-viewing/index.html","89ceb71a519f99417abd2ed9c42e1fe8"],["/change-title-based-on-event/index.html","9ca76beba78df1f636d009976edd10e7"],["/character-interaction/index.html","8c18349e3b83b455f9dc44148b940ed9"],["/character-stats/index.html","8eb76f778f483ceaafcae7785dbb91fe"],["/chatbot/index.html","655ac0669be1a90c4c33ba8003b44e28"],["/choice-time/index.html","91086c8df33bd08aebc006e8ab933a1f"],["/comments/index.html","7c92d2d18866aea9e079a507bfd8e5c1"],["/commission-info/index.html","2f845fb9c2ce5184d6ad180655bf406f"],["/count-login-number/index.html","7c17a74ff28d6ebaca8adcea723930d0"],["/create-button-anywhere/index.html","298d868ce3f0c715c3adcc7a16478dd6"],["/css/eurkon.css","d132d62b70c1dea99d0457cfc4396c5c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","4e2aae551769715919d11976cfc212f8"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","5205f47442f8f365f5979c0a694f8725"],["/css/rightmenu.css","2b696a0b23b2f4d6dea44d4609d33da3"],["/css/siz.css","836ea39e1ab30b6a1e70c7e3a546d7e6"],["/css/swiper.css","df87a44bec6a93d27c281aa358951c74"],["/css/swiperstyle.css","f26c5c2e8a24be57c6aa6e5597028b53"],["/css/var.css","d8c27e44904d551b9dfc6a4e912490e3"],["/ctc/index.html","97a3807f7123da1c54b23222b86c4c8c"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","4b67ce89a91f0f32ba7fa5ac55249de5"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","97cddda1de3ad1e3cab28c49c0bc7f78"],["/custom-gallery-cg-screen/index.html","6eab9e47e271c39d494ccc93e3ceba6d"],["/custom-launcher/index.html","ff71e387f6122c119567f17f8bd38b7e"],["/custom-loading-screen/index.html","c4331becfc6cba6c3c740db1cc489351"],["/custom-mouse/index.html","7f305777739ed1f85d206ad1ec216562"],["/custom-music-room-screen/index.html","0133775e159d2f48dd683ac10f3ffd66"],["/custom-music-room-screen2/index.html","27c53d1820062a8a160fb8c4dfdad738"],["/custom-nvl/index.html","1a9a27e61140e38f5bb941fc8d548e80"],["/custom-player/index.html","29f2e8ac3e5429b8a4e5561d7d71a9dc"],["/custom-preferences-screen/index.html","8fd7da67d5fcebd7decc58b86bac2a1b"],["/custom-say-screen/index.html","837d9e91375205604c61721eb975d606"],["/custom-style-position/index.html","78b720f50fdb8c1d55fb69f1bc6e538a"],["/custom-style-prefix/index.html","5a778fa449a05616deb2ad9e01757553"],["/custom-title-screen/index.html","b92d31288fb3ac814dd06b7092db52f9"],["/define-npcs/index.html","f518777206e9668082ee1172adb8f7a1"],["/delete-save/index.html","e9d076084da626d917cd26af6d3f6520"],["/dice-function/index.html","7170b69b1b47f73a0e21e70f335f71ca"],["/disclaimer/index.html","f0158f2752926c6e044a64ae525af4bc"],["/display-immediately-all-dialogues/index.html","e3c34faad16983765938a604dc3414d7"],["/display-real-time/index.html","240e10dd9806cbae410c13d09d1f4c45"],["/enter-name-screen/index.html","387e3b320baee06d5b0aad9a4b11e1d8"],["/export-game/index.html","a01ece5653e3828bbe86437d7725699f"],["/faq/index.html","cd072868fc81f52468e5147eac0caf6b"],["/friends/index.html","849f9d93a224c083a9b548d7834d4c75"],["/gallery-template-assets/index.html","58d8453393312657bced3c3bb6508c37"],["/gallery-template-default-ver/index.html","8c21a87720f3a41eb5d7bbfa95e9f893"],["/gallery/index.html","3faa179ebe826b55ca92b1d33b591952"],["/gallery/photo/bg/index.html","b5611c84cd6606c4746abe6325963233"],["/gallery/photo/gui/index.html","7be4780816ffee21b451c5180425bd3f"],["/game-only-text/index.html","a311251fd664e3624c57c33b500fbb71"],["/generate-random-name/index.html","e37085114383c00f3b6f1dd00316182e"],["/gui-017/index.html","ac397afda42d06421e22014fe593bf06"],["/gui-vertical-002/index.html","7f42693c341b284f76142769c4f865c5"],["/gui012/index.html","cc4a1986a1dded98aab41ffc7cf4eca2"],["/gui018/index.html","d7abcb148c890b5b792e7b7fc05380fc"],["/gui019/index.html","4e1d257531d2dd7d38733b9ab576af82"],["/gui020/index.html","03dd9c5e259f9485857177373b0d0bd2"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e924157b0ddb9428d7bb2dddf66f8f8f"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","27d15c2aa70cf2d098ad290137f7961e"],["/hide-textbox/index.html","f5d463b9e5fbcd6c5d37c82ca8f1ca63"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","9abb315536228fef2853fc1cb4693d3c"],["/images-tip-function/index.html","3f8058763d3be104ee1b4bb7910ba413"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","eecefd0abf0c7f4fdfb7670bec6c3b7a"],["/index.html","0025dd62efc50d6050e3630a33f28400"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","0d65373a8c6cae38fe1550a746d0f0b5"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","46f76a2988ddb5ef054abc9eab327730"],["/items-sprites-effect/index.html","d9b00dd82a2396d59a06d59d30d03b70"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","821580de78995fcc530369f3645cf746"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","9f54d9b6151a5bf63aa997b7eac8b48b"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","74b97f1d8d405c1666ff5c5ad0aca0cd"],["/link/index.html","89435af22278a26826122872ca0aca95"],["/login-reward/index.html","a29c0b372247e91b1c2656f6cf15d870"],["/main-menu-music/index.html","de546fad506449600bf8e5fe63732224"],["/make-butterfly-beautiful4/index.html","e0c213d303ca5734fb81f1360c3261dc"],["/map-puzzle-system/index.html","d7b4f56157a002f836f4dc52377e6203"],["/maple-effect/index.html","8a2bc1329b0dcd70fee51e5267faaae4"],["/memberships-2/index.html","0570e3a4ec5e49540d2e4e31b258e492"],["/memberships/index.html","e01b3095c1f41d77fc9233a8a3da8467"],["/multiple-language/index.html","522b87f22eda1de79bce65d16a9f6d4d"],["/name-input-assets/index.html","1fc02e3c85d4e96d069730b101456e6f"],["/new-year-event-2023/index.html","466beecc1f1d0b4c500d737f7af1af61"],["/newsletter/index.html","c9d6dc07d73c194a3c05dacfb91b754b"],["/nsfw-limited/index.html","3c9162f1e5a4cb2a5de6d332d3f2fe1e"],["/null/index.html","55e6e7b2ad77076c2154e0d8d05d3f13"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","08f261eafcfe100e428c5d30bd46f9cb"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","e79199ab761f2ff8d2ad8ff7ec7c98ca"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","115f7cc010fa7641ab75795d7e172438"],["/openchatai-renpy/index.html","8558f0935c50152075c87f75bfc76a9f"],["/original/index.html","98a660ab0ed23861c9a38530b5b041e5"],["/page/2/index.html","4b72eb5e6ed1e5e5a872d78c705329aa"],["/page/3/index.html","15cd197037072f37f9044715d6d5e696"],["/page/4/index.html","afea5ad1712d85c755241a6cca14e98e"],["/page/5/index.html","705423484c230b4f23a0436c972f6fac"],["/page/6/index.html","2064ce6e4f3fdc08f204fbbb19ce49ae"],["/page/7/index.html","0d95b4d2c32c734c9a7674400214bff4"],["/point-pop-up-assets/index.html","1fba9ce06ff51fb8962fd8a0c9e998e2"],["/pop-point/index.html","21c3a6e8177b5ece1aaa7e4e74f99f38"],["/privacy-policy/index.html","313184efd639dd25aeeea1fb48e27a51"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","d8cc2da729296878d683a96d39a2d43a"],["/random-number/index.html","e9158a9aa08d7ea1481f3f1dcf87271e"],["/random.html","0b88a8746ac9fda935b94ebe1719b5f5"],["/release-017/index.html","98a3f70314aa306e29a0cd18a194005b"],["/remembering-choices/index.html","8200efd2195d646735d99a0af8e16602"],["/renpy-basic/index.html","b2e5476e25e32d46f11d4422fd5af5fe"],["/renpy-crash-glitch-effect/index.html","b02108c9d75afbdb5e2edb956f12cb92"],["/renpy-flip-image/index.html","72fcc7af20eee43414a5e5354054356d"],["/renpy-matrixcolor/index.html","40c2eab061957b7dcbb248c5a9aca34a"],["/renpy-overlay/index.html","7d5dfc2d0eaff088ae5af2d7bfa7e574"],["/renpy-review/index.html","4ad0b8471b0809eff73fc1dffa1cf885"],["/renpy-typing-effect/index.html","ecdb5bcbc7b0f6066ca6ffb9e03970bb"],["/rpgmaker-assets-menu/index.html","1e2c11b8c77d176e6dc8ea1c22a5393c"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","436505522f469bf1013ff2803f6c70f8"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","531ed749d408a7bd03e5567df1f6f250"],["/sakura-tree-background/index.html","d0bb248f3f6823d45cc963258f04971d"],["/selected-button-style/index.html","54d845fedcb161e154540b06db85dedb"],["/service-worker.js","6813306c331c97eb639324d6f4ad3f5d"],["/show-variable/index.html","b2a9dc3eb629764738ca5eabbe53b997"],["/side-image/index.html","234173392b7427e9a6150f01dcd2cc90"],["/snow-effect/index.html","3fce0a5bc77d62048e4f6766664ef024"],["/speaking-animation/index.html","c339baaffa28c09381cd1350c10cf37e"],["/splashscreen/index.html","877f68d0120220264da0a25c91fd9e93"],["/suika2/index.html","9cca6d517bfa90e6c63300c23dc69d80"],["/sw-register.js","6ae498f94e4969c323250b0209d86c3e"],["/tags/Hexo-plugins/index.html","584dffae8a9bbbb71192c10461ad3142"],["/tags/Light-VN/index.html","6361aba77377d484bae9103e4e27e6b0"],["/tags/acg-creator/index.html","f51437a0cbf12bd581a30a6588f2d62f"],["/tags/ai/index.html","4cb56b5ba241ede43593ef38aa04c57d"],["/tags/butterfly-beauty-diary/index.html","eac796fbee2ebbbf15a8573f565aaf04"],["/tags/custom-hexo-theme-butterfly/index.html","a127c2b03b5cc44749bd965494d874e6"],["/tags/custom-renpy-title/index.html","239f9999c80f89d1252d0e29e37b846f"],["/tags/dialogue/index.html","2f1e324987d849904da7d7d114e47b8a"],["/tags/effect/index.html","d5e6de61abf5e1a5ed8b63e025f0cc81"],["/tags/event/index.html","d9b1abecf3d09859969976c06ae36635"],["/tags/hosting-own-website/index.html","c3282592e28717893d21c7c9c6f678f8"],["/tags/index.html","c83827afdfd9364719e099d76e490ba6"],["/tags/itch-io/index.html","bc0a5a9199378e331beaf016c1a4f34a"],["/tags/light-vn-update/index.html","d2821c153cc08cd60b2b44ed48da41bb"],["/tags/nvl-maker/index.html","9b37b9c933cdc71a0c0a469335755e3a"],["/tags/player-related/index.html","340baced81924afc259374e138bc7c2b"],["/tags/pro-tutorial/index.html","03a24e992910b7081e89d1de7f9b64a2"],["/tags/pro-tutorial/page/2/index.html","e10a1298a0d2c95d0923c48a9ffc0643"],["/tags/pro-tutorial/page/3/index.html","ff044af4b8daa9e538ee9b6e8a7f1d90"],["/tags/pro-tutorial/page/4/index.html","218f80fb0b2f0ec1dbf2173a860cf66d"],["/tags/renpy/index.html","aa81a00ff98c5aad82debd8e595af8a4"],["/tags/rpg-maker-custom-map/index.html","fa20ad5612cea6570cb40f0da40f0eeb"],["/tags/screen/index.html","112872d63b9e73a98cd75977b89dd2db"],["/tags/special-function/index.html","24f01e8cc4731e546d3a1f6bca672fc9"],["/tags/suika2/index.html","aa4dce73b4734a4317817b015c129c0b"],["/tags/tyranobuilder/index.html","d380e81dd2073143ea72fcff90c6433e"],["/tags/ui-assets/index.html","2065a83c205ca0bcfbc7156d42facc34"],["/tags/update/index.html","b9d33bd6c497f884fc73a01b20516298"],["/tags/upload-game/index.html","efea0ee4a6cf7c07968fac523316a915"],["/tags/variable/index.html","bd380c5d6bfb9cb842526422b8065305"],["/tags/visual-novel-maker/index.html","f771f8abecb4d278a18bfbafc9c03f64"],["/tags/webgal/index.html","e540a0d561c2ed953c03d503e64fd11e"],["/tags/封面製作/index.html","86283a3b79efcea46b6d17bea8ba5afa"],["/tags/背景素材/index.html","49f9448bdf9473e9e32588001dda5a6b"],["/tags/隨機功能/index.html","0ba1aecdbd47eceda9c6afe2e053dae6"],["/test123/index.html","8dda60de2eb80ab53cfc442035e9d16c"],["/textbutton/index.html","7166c1bfd925e5fd78602c02b3d7ea1a"],["/to-do-tutorial/index.html","6e1f2d4dea647195b00758efc41dbd07"],["/tools/index.html","913f3b53f7fb3b4d1ba65d22bfde049f"],["/tooltip-function/index.html","d86b0f348a968f338528d56999b63ca3"],["/transfer-to-hexo/index.html","d2c111e39cf3fd0a6e7bf4b00c30fe62"],["/tutorial-update-history/index.html","56efe3309c9658dcfc977614d9fbaecc"],["/tyrano-name/index.html","cbe58a185a3667e34a7d352db47bfb73"],["/tyranobuilder/index.html","5b6c67b6e939a1bf42c7cb29e9d3ee03"],["/undefined/index.html","23092a1b7d25f9229521495cb6937497"],["/unskippable-video/index.html","e87c92864b170d90aa78c788b136dc26"],["/update-20221211/index.html","87fac96f279bd6f5e56024089e3abece"],["/update-20221218/index.html","e3bf87f2e73bb5dd37258390e1eba57a"],["/upload-download-save/index.html","a212f0fc07acfd177e33775506e6311c"],["/upload-your-game-itch-io/index.html","8e63ee206dd25c41fd4aeef694089580"],["/use-list/index.html","eaa1567c7bcbda44de0bde15a34b9989"],["/use-nvl-mode/index.html","94ebc2a73f57b7bff29b5c4f17fe21c9"],["/useimage/index.html","87d0c5ff058fc3b0c01eee0725d990f6"],["/variable-change-image/index.html","5cd51c195a4016891a98fa2a2d340a4d"],["/variable/index.html","eeaaa5efc143180267fb25d30210995b"],["/vibration-function/index.html","36d443c3b579a896d74273b0dd580cb5"],["/vnmaker/index.html","a508b9c3cb662a0d5b7c5854866d7133"],["/weather-effect-tutorial/index.html","f18a936cc3b86f08726eaf3f935f8620"],["/webgal/index.html","952b3ac70418a59dd96c0cac102458b1"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
