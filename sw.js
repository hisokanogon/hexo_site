/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","db3779f46ee4217f374ccb81ad75c68d"],["/2024-future-plan/index.html","40686a556b8b3609dfa5b5793ecb659c"],["/2player-battle-system/index.html","0b9ac42096ae844d0354af7be958f223"],["/404.html","6d162e9968793a0d158f10b292fcba76"],["/about/index.html","d6d4699515f63ddd7ada815885f0f2cb"],["/acg-creator/index.html","529182e56fa70a45a26d8b9b28b4d5d8"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","473203000fd82021fd3c874ffc92f27b"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","e5f96ad4f60f962d4a712c11489e76b4"],["/animated-title-main-menu/index.html","d0ceb44cff15492e4eb4820e2cbb198f"],["/animation-movie-cg-gallery-screen/index.html","6bf0b5e7a67cea502edad3b75903acfc"],["/archives/2022/05/index.html","7492981b4cec5574ce2894d6c04d903a"],["/archives/2022/06/index.html","47a6ba6b2bbb438b393dc92ededad0d8"],["/archives/2022/08/index.html","036ed2b0e5293ae729e5f299e523aa51"],["/archives/2022/09/index.html","43a50710103f639c2881ecf32fb03cb0"],["/archives/2022/10/index.html","9154bb631c6d5bb8fdea6dd8f01dcc04"],["/archives/2022/11/index.html","dce632102ab209239fb6ca716c84e7b0"],["/archives/2022/12/index.html","330a8941f523ae0be9350988c5a17897"],["/archives/2022/12/page/2/index.html","b3ffeacf0b30f1679a57f94fb278be5d"],["/archives/2022/index.html","7bb8e39725a10d36ecafa539e1ac7838"],["/archives/2022/page/2/index.html","a1e5304e264ece389e3a14b9c566ec0e"],["/archives/2022/page/3/index.html","ee07b4d1e93b018a851421e43c8fdb0a"],["/archives/2023/01/index.html","d364e639743eb867d8204f08549234ad"],["/archives/2023/02/index.html","d511802915f63d1babd016640dd133d8"],["/archives/2023/03/index.html","df30f1810536bfa07e686a3f29b7e46f"],["/archives/2023/04/index.html","725ace40d8c5b200ee823cff42f10f9f"],["/archives/2023/05/index.html","842aa2ace6e8721ace0ebfdd23dde8ca"],["/archives/2023/06/index.html","3932ffa83b2815a2f3bbed8dd2f36337"],["/archives/2023/07/index.html","fe26b7d93a01cb0eb2cf79da1f5613b4"],["/archives/2023/08/index.html","6679f16f369b4acba26f8612ee9f4bf7"],["/archives/2023/09/index.html","3d731ccbdad25f960801d5e723e1c47a"],["/archives/2023/10/index.html","37d77e21330647c91d32db6673bf713f"],["/archives/2023/11/index.html","05cc834ad91554b0c5f2a606a78a6304"],["/archives/2023/12/index.html","0fc171d2c3afe1b1b9a5bbd619cbe1a1"],["/archives/2023/index.html","dc14d06826b35f519a84d07961194bf4"],["/archives/2023/page/2/index.html","03780bf25b68f9145c77074f3e0dde19"],["/archives/2023/page/3/index.html","bdc77be100b130492af999e8826e2d73"],["/archives/2024/01/index.html","3c3353272ea7947dfc1d59e43c2ae7d0"],["/archives/2024/02/index.html","16f5f79912227a073eb657cdc0bb0d8f"],["/archives/2024/03/index.html","fc1ed928a8149a895ff7fe4f4d3d8af7"],["/archives/2024/04/index.html","5af4948230de30bcf601235f21d67cc7"],["/archives/2024/05/index.html","4b9b3d4d2d254ac33f25ede80d39d603"],["/archives/2024/06/index.html","80696a2c3eabf3a1c1fba3899cda560e"],["/archives/2024/07/index.html","b6411497e58ecbfe3eeda0109b43418a"],["/archives/2024/08/index.html","2227d1029dc685e092741dd21d478cdf"],["/archives/2024/10/index.html","96bb8e6ed5d05941cc28e03b11298374"],["/archives/2024/11/index.html","743563a28f8936a208db10424f6c1fc8"],["/archives/2024/12/index.html","d92bebdd22c520ecf98414eb4d8567b6"],["/archives/2024/index.html","042585426a4170cfd754934365403221"],["/archives/2024/page/2/index.html","08dbc9f134d4b9c6c383fa7e27775401"],["/archives/index.html","2cb81d05f25bfb01abeb6135f1c0c579"],["/archives/page/2/index.html","54da6deae96c78b56cccbe2125bc1159"],["/archives/page/3/index.html","bb61109be72f94e12f6eb296a4443d1f"],["/archives/page/4/index.html","aec204888ea771273228a44808c31265"],["/archives/page/5/index.html","a25b4f6cf840361e46af1a73b56a834f"],["/archives/page/6/index.html","cfa07468b37c071519f60b848f71d62e"],["/archives/page/7/index.html","c77d63733e0cc2737b5fbcb8025d8667"],["/archives/page/8/index.html","6c208e75812e099efcc255db2ea4e0c3"],["/artitalk/index.html","7db69e7b7d85ccccd70bb6c00f509347"],["/battle-beautiful/index.html","ce7454096c7a1216c8f7f9d68d0e3996"],["/blur-effect/index.html","d8f21b6afda442e6eddca462d24f0457"],["/butterfly-custom-tag/index.html","7fbc929cf8e8f3446d4917ee132f2098"],["/butterfly-plugins-faq/index.html","50b7de04bc2e4189a80b1e25f51b0773"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","4872088915d109142de46b5cc0d3db92"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","3ae104897ac66373c94264be15a00c5b"],["/categories/announcement/index.html","f977d9fcbcb3d3e6f8d58759ce619e14"],["/categories/diary/index.html","8d51b1b1bf3359d0e17dc126a23b3bc9"],["/categories/game-dev/game-engine/acg-creator/index.html","5d31cd6f63b31199e4987713eb8adc00"],["/categories/game-dev/game-engine/index.html","b25d6db078fd2d5a7067d6be219e7da4"],["/categories/game-dev/game-engine/lightvn/index.html","b410922108b241ee693c13c0877bf7a5"],["/categories/game-dev/game-engine/nvl-maker/index.html","f51c43d3c5992b6e26e72007480a267a"],["/categories/game-dev/game-engine/page/2/index.html","aaef4feb71e9192b9cabd5a7b859b614"],["/categories/game-dev/game-engine/page/3/index.html","17a91f65d25229c8ebe5317f7b009ac7"],["/categories/game-dev/game-engine/page/4/index.html","dcdb87b9e795c0a27c526d63d2d5ab19"],["/categories/game-dev/game-engine/page/5/index.html","f1eceb11a422133623e44cbac3c79fd2"],["/categories/game-dev/game-engine/page/6/index.html","c273167440d1d8a13d97e8302865d14f"],["/categories/game-dev/game-engine/renpy/index.html","2fedcb58692ab4472c3faccc89463378"],["/categories/game-dev/game-engine/renpy/page/2/index.html","e18d9929d27532942d9058bf9e9edfb2"],["/categories/game-dev/game-engine/renpy/page/3/index.html","f9ae6ffeee5de41cea60307387c3f371"],["/categories/game-dev/game-engine/renpy/page/4/index.html","ffb8b986633c7ccc26d52c9ef7db780f"],["/categories/game-dev/game-engine/renpy/page/5/index.html","e190c70fbf8558be15c7d412af45a21b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","165653502a32435629e897bbbcad2f91"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","a21e9115ccb888134c2bb46ab087aee6"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","6f623d2dec002f2a32320c449f527aae"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","754b91afe45840b6055cce30c9874fca"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","109b7cad316e346f98eb1f68a8e33933"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","b1d76d7b7cea7212163776777aa2a1da"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","5844a13e0d41769d71480daaf1a782ef"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","f1c8cadd22c56c5e2484f8ef6ccd5347"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","f171262c78e0b5017fa2bc2319cfab07"],["/categories/game-dev/game-engine/rpgmaker/index.html","116899272881f1caebc1db0b034386a7"],["/categories/game-dev/game-engine/suika2/index.html","cb253652ae7cada2b8f67ab6087b9f3e"],["/categories/game-dev/game-engine/tyranobuilder/index.html","a23871ce2ebb5d141bc59cfe752ed185"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","2c91387a22dd0a0ccd90e16d00d90134"],["/categories/game-dev/game-engine/webgal/index.html","92bcdc9a46cb7f48c4f58af753d90bff"],["/categories/game-dev/index.html","c2f730b00c1d4d67faad89b83e97db43"],["/categories/game-dev/page/2/index.html","279df4a7e71c458d1b1dde389f811795"],["/categories/game-dev/page/3/index.html","3647eac26b622d2b874f150fc41a08f6"],["/categories/game-dev/page/4/index.html","91ba7d073db2c1751f2f5a51b38db6e1"],["/categories/game-dev/page/5/index.html","7f9a7bd60942fc259d96935fc72d5a4d"],["/categories/game-dev/page/6/index.html","ec7e07c9b56d4f6ec7c8deb47d9a7bb2"],["/categories/hexo/index.html","776ab544b99ccd3b2cc5c28c3e7b057b"],["/categories/index.html","24aa571ed29f891feee7022ee135f1aa"],["/categories/material/index.html","cc6baa5adeebefe7d6151722847c5420"],["/categories/update/index.html","7dab03f4fa6670e07fd0da7a1468d47f"],["/change-according-to-real-time/index.html","702f592460e5ed5328a8df867fe9a4f4"],["/change-character-info/index.html","0e2be6675191e5ae4f815484fac6bab8"],["/change-title-after-first-time-viewing/index.html","9dcffed34af610bfd81450844aaeffd0"],["/change-title-based-on-event/index.html","cbd6fb04c7718396604a122319d89543"],["/chapter-selection/index.html","c0f4a28072864b5926ded2d22123ba86"],["/character-interaction/index.html","eaf303e2baab44d04cacd93e1a56ccf5"],["/character-stats/index.html","d0341000f0cd30092042e4de39ab118d"],["/chatbot/index.html","857934df7d184c6422b2a9ea43d28ca7"],["/choice-time/index.html","21b416c431583c126589d4bbc7ac2570"],["/comments/index.html","b9248a99c5da40d4e47d813bb769ea73"],["/commission-info/index.html","25110d669f454e5f5db11f732a2cab5d"],["/count-login-number/index.html","317972e1c2ed54820ddf4e3f088aae50"],["/create-button-anywhere/index.html","d31f58fa4a1d8fcc682597f2fe9fc3a7"],["/css/eurkon.css","5fc1380c60a3268d0618b162d27b7809"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","1eb7c0e36bcb086c60149030cb726f94"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","df984e6e285cb702c51d9039ccf95e9d"],["/css/rightmenu.css","78217b4378227b8214d2534b4e383360"],["/css/siz.css","318891eeb487f9042bc84933c58ab933"],["/css/swiper.css","6b4f4e8950224a31379d40791fff15c6"],["/css/swiperstyle.css","9ad389481757e21d9ce050b7f983b939"],["/css/var.css","63264a89fb5f2d0332b0ebee2769383e"],["/ctc/index.html","4b7ab259ba6829b7c0703de9565b19f3"],["/custom-credit-screen/index.html","2cef02c8303d7f03d1d0b640bf4f6e5b"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","a3dad787110ef5a72f544369a43781a0"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","ae691e42dc7504cd3621248d00b4c631"],["/custom-gallery-cg-screen/index.html","443487408f4016e40304394ab047f0a5"],["/custom-launcher/index.html","50b1a149e22cc8d629fc881dc3e45d66"],["/custom-loading-screen/index.html","af9af73f8ab3dc1010ffae832d8575b6"],["/custom-mouse/index.html","4769526e6b829fb4f9cff5a23fe0816b"],["/custom-music-room-screen/index.html","84cc2f14488aff1bba2b122ee418dd1b"],["/custom-music-room-screen2/index.html","1ca75958e91f8c2d71033136dd9bdaff"],["/custom-nvl/index.html","e54e1f72e909f29dd96fc0ffd612303b"],["/custom-player/index.html","25616059041faaed4d54bb829f52f532"],["/custom-preferences-screen/index.html","15e4026858d1649679a17acf295af637"],["/custom-say-screen/index.html","38da8547f6741280fa88528299cc4959"],["/custom-scrollbar/index.html","7803160a22ba6bf850bc265c89bf7827"],["/custom-style-bar/index.html","22a7ae5cbc8b896cae4d2a34885f9e42"],["/custom-style-box/index.html","e68fbeb3a798a5dfdcc93ab9c21a29fd"],["/custom-style-button/index.html","5ae40567a7bdc2da36eb2c725e788918"],["/custom-style-grid/index.html","2d759f7585761994d4abdb20a989e1fd"],["/custom-style-position/index.html","418751822c5167bb58140f4c3508b267"],["/custom-style-prefix/index.html","122ea999f131dea21aafbe6d84f9fba4"],["/custom-style-text/index.html","b1c149b58d39fa517b76c5561f935e9b"],["/custom-style-window/index.html","14835bf1029426851fe77e4e6633ab99"],["/custom-title-screen/index.html","0a6e68db8fafefddd3fec663071401d8"],["/define-npcs/index.html","d24580eed834f51738958a4b7eac5063"],["/delete-save/index.html","242170ebac5e073ab80a8ffd75790802"],["/dice-function/index.html","44cb9b34905a43ccba90ad24043353bb"],["/disclaimer/index.html","2efdf51fb844d2c91e1df1ff11eb80f0"],["/display-immediately-all-dialogues/index.html","bea3d0cfc732f99221f25d66ca4eeef7"],["/display-real-time/index.html","ed6967d1dc84a9304de6363b91c91250"],["/en.refund-policy/index.html","1d994627343c589866159180fb236adf"],["/enter-name-screen/index.html","042f17d9be48dbdb56ce663db6cbcd16"],["/export-game/index.html","f0d2cfe494673125dffe0f749b82b163"],["/faq/index.html","a33bfc1e07070d2229d9e80d8bd214c8"],["/friends/index.html","b6406d3ac50bf7b7ce7462ee7a1a2e0a"],["/gallery-template-assets/index.html","e54ee7c56c035bca96cc495c72ab7498"],["/gallery-template-default-ver/index.html","4fea868fa36e42b17340e61ce88f2e2f"],["/gallery/index.html","08bb2bc0b7b57e86888cc42ea2a3c4f9"],["/gallery/photo/bg/index.html","6d326cefa392988b87ec68d652591181"],["/gallery/photo/gui/index.html","af734120f9225bd71ad63a0366db1190"],["/game-only-text/index.html","db7837e67445d8267ccec523dc896d90"],["/generate-random-name/index.html","f69435c189876839cbfcba5e10b42aa1"],["/gui-017/index.html","7ca139f6ddf7f87ef36e72a329149263"],["/gui-vertical-002/index.html","0c3b111784fd30a112819adafe216987"],["/gui012/index.html","17a4b76756d7691916093f2532299a2f"],["/gui018/index.html","6cb81674dd6d006b08e24ca3b18a45e1"],["/gui019/index.html","365238cee28444296e8862d6b4b3b209"],["/gui020/index.html","7aa46404dc1cfd27de8d843769c82102"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","3815346ddc6f22af24b689853b1b1751"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","83220281236c1f7f03d24a983fdc04ba"],["/hide-quickmenu/index.html","d853e2e5474896c28ba49fe3c4da8336"],["/hide-textbox/index.html","6c4760d428af3a5fac7cb0b8ed652870"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","9384683b132764a12156c8b21daf7297"],["/images-tip-function/index.html","0bc1e5e2d0cb4c3e655bcfb52ca7cf88"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","953751a8919b3eeba589e9b9cf7c3226"],["/index.html","b3b1b8fbc15f03579302385cb417a48f"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","bfde39d7c3c686f6da6fe504f15b2bb2"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","e7ffca8894fdb12add06f0fba50daa81"],["/items-sprites-effect/index.html","dfe70ac771f5ea2c86f008bcafc2d5f6"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","26c32b2aabbccb13c75c82b824f6f684"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","0ea84fd106b33af8f2b779a5cce03edd"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","4d98053483d4128fb3319f53dc00d465"],["/link/index.html","287f27c9beb4cd4e30683187ffbe9b43"],["/login-reward/index.html","23e7bcb794575b6012b916b1ea3b5726"],["/long-press/index.html","d9c1d7dbbf307aa781ae7baa93c79714"],["/main-menu-music/index.html","e86c53cfcbacbf6d59b2139420717158"],["/make-butterfly-beautiful4/index.html","2822578e6a2b2f5c11ea72640b662f88"],["/map-puzzle-system/index.html","981e0649896a712ab121efab4e3bca06"],["/maple-effect/index.html","49891a21273d9d65a6c49a006a34e17f"],["/memberships-2/index.html","5e5d4a47599309f7a0c3cea210c1f39e"],["/memberships/index.html","4cb1d72d2f2de414aa484aa5fb5ab180"],["/multiple-language/index.html","19e62fd17a313abc0aeb57a728a9ead7"],["/name-input-assets/index.html","46874f7fec9fc002c5de81f0fc87117c"],["/new-year-event-2023/index.html","eaeb1edccf31393b79a620460146c76d"],["/newsletter/index.html","c509ea522156ca4c4f361a06b1330b9c"],["/nsfw-limited/index.html","75d50f4c123bab6c63aca060f07cb8ba"],["/null/index.html","d10ff8a276d370e9bcabb2095b81a5d4"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","3c8b34fe4bf50f5872a1faea31a2825f"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","c60abda854dad65906fefa82db98db7f"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","0f6bf69a4892550db1141846aaf4ce83"],["/openchatai-renpy/index.html","f047792f3483ea42acc6047c181a6b8f"],["/original/index.html","273481491acaea883d497654e968ffae"],["/page/2/index.html","8fd38721bb5262ffccc05e49f53b572b"],["/page/3/index.html","94b7621a509ff33f82ec2a364e2927f9"],["/page/4/index.html","dc2d62f17400123594cb6fc3b2979907"],["/page/5/index.html","b867257b9bb7d0f834f947bb437dbf1a"],["/page/6/index.html","193d0a2ca86e99afda0eea1930403371"],["/page/7/index.html","e937a551b73e049f3afa6871d992311f"],["/page/8/index.html","8ececfb25042501177815f4230a5d801"],["/point-pop-up-assets/index.html","b1f2bec8288f81a060d0c4232e64e76e"],["/pop-point/index.html","ba4d708b3f6d046b66292200c4eb63f6"],["/privacy-policy/index.html","7f8297d63d35438e020992427a10005c"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","2b1f2f909b91938f660c5e903574fdab"],["/random-number/index.html","fd1fa4f9e6cd05eca52f7828e7aae84b"],["/random.html","21259891f88c102208a4023e9c5fa5b8"],["/refund-policy/index.html","4693052b9b3fd68dbbdc805bbe19c5d7"],["/release-017/index.html","fbcb53cbdcd25f9eb34b1959181052c4"],["/remembering-choices/index.html","44436654fdeb814c4498fb2124b59774"],["/renpy-basic/index.html","0dccad1f7a0adc74a983038d128eb321"],["/renpy-crash-glitch-effect/index.html","128909b7b9699648059b2565c1d508f9"],["/renpy-flip-image/index.html","e955081e9e971d094379d45c88dd8220"],["/renpy-matrixcolor/index.html","fd2251406080594ded392d3a66fe73ab"],["/renpy-overlay/index.html","0a57ce17e08a8f0da3e87ff17f16d59e"],["/renpy-review/index.html","9046e9a69cef509349003f6cf146d983"],["/renpy-typing-effect/index.html","e555b0ddfb8b771719c017da025ceb65"],["/replay-cg-screen/index.html","2a99ae891bca8c88bd39e6f565d8cc54"],["/rpgmaker-assets-menu/index.html","1d493a5fc5a8670f62345986a4e5de55"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","1f040a598dc8c6d31da272a64564695a"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","874b62e8feb39c3169d4d759a965bd23"],["/sakura-tree-background/index.html","6c630768e6d58378f1fdb19a6b7812d9"],["/selected-button-style/index.html","36b5c5d62bf9ce3cce8afdbfdeb2f465"],["/service-worker.js","84e764a4b91ab19afe6c1966a6382d91"],["/show-variable/index.html","a25b3ddffe32e0de3fe86a81367738e3"],["/side-image/index.html","ad8caf0899039f203ad179c818ccb5b2"],["/snow-effect/index.html","ef33f1dccbb0c3b4764d32054850a181"],["/speaking-animation/index.html","bfc108c07d127f9f6976f68f3eec93d4"],["/splashscreen/index.html","b898c404defd278b1c53cca4c1bf2625"],["/suika2/index.html","d1cd582e521ac474f749d731625a9a10"],["/sw-register.js","69d9b723f0b6aa73ddc0d4e742a546c6"],["/switch-chapter/index.html","ac03673b03b09b9e7507206a37016306"],["/tags/Hexo-plugins/index.html","0686efe41491488917507200f06e4a89"],["/tags/Light-VN/index.html","388d431120eeb608e109fe5aff084145"],["/tags/acg-creator/index.html","8ad46fbc62552542b5afc942f46c4667"],["/tags/ai/index.html","36b1422e4c183bea1459ea36e29b40c6"],["/tags/butterfly-beauty-diary/index.html","d46f9e7e544e82c6f77dd9339242bd58"],["/tags/custom-hexo-theme-butterfly/index.html","0d0cde04bc3be22845f91142242714ef"],["/tags/custom-renpy-title/index.html","4b14c6409af0c7a4386375470144914a"],["/tags/dialogue/index.html","8278bd24b36f9da0edf70662fbc31304"],["/tags/effect/index.html","323b5dda21835d38ea0d6a6875d99bf4"],["/tags/event/index.html","d2b65d97fda6bf5ac9d904e646101127"],["/tags/hosting-own-website/index.html","5fb09e2030c4d4f7199754075996ca70"],["/tags/index.html","8c6080443bbc0ce0467f7860cf30da77"],["/tags/itch-io/index.html","b23a27495dc7bccfa1042cca993e110b"],["/tags/light-vn-update/index.html","82f02b4b8f6ccc599e7cf92550848621"],["/tags/nvl-maker/index.html","cede0beb8baa160a88433a849d9fbbd5"],["/tags/player-related/index.html","ad8373355767c1e05fe151881753538b"],["/tags/pro-tutorial/index.html","c497eef305bdac3101f364be33756a48"],["/tags/pro-tutorial/page/2/index.html","b660188d6af6e6d4006ca35b0a8dfaf3"],["/tags/pro-tutorial/page/3/index.html","22bc23c12d5ace98c4750c73bce29bc4"],["/tags/pro-tutorial/page/4/index.html","718c683112bb852400892ffbf2f43b57"],["/tags/pro-tutorial/page/5/index.html","404a24b2daf721db17ea1ca4907be529"],["/tags/renpy/index.html","9994cced2317b2675df4a237d7cd0ad3"],["/tags/rpg-maker-custom-map/index.html","1dc357032079ab1ff665fd4850a82436"],["/tags/screen/index.html","eb251b5517eee49440d159139ef9b645"],["/tags/special-function/index.html","1fd517a6f9a25e874559482263afeca3"],["/tags/suika2/index.html","f47d4926dd8649fd2bcf329a9924f00f"],["/tags/terms/index.html","4a11908c3c76696085f2e3cb9cdf1599"],["/tags/tyranobuilder/index.html","c1c5fa3e7669b8e0fef84bbe45e61913"],["/tags/ui-assets/index.html","be0353444a09c5e916acc7c43360c670"],["/tags/update/index.html","8ad5665d02f881a76c4b68fb12448fb1"],["/tags/upload-game/index.html","0663cca0c6f234294b046ab977a7c998"],["/tags/variable/index.html","28b68a7bdb72ddcdcecb38e219676eef"],["/tags/visual-novel-maker/index.html","5a97a1d843992f0a8a0c60a5d9088c73"],["/tags/webgal/index.html","bd1e250f14a1b126ca85ed0973434ca2"],["/tags/封面製作/index.html","689be67c2e3e4d545ae64ccf9403cd83"],["/tags/背景素材/index.html","204c2d5fe37d0339d3ed90d33d25b2a3"],["/tags/隨機功能/index.html","c53d1865a287306df870635ed2098968"],["/test123/index.html","0c4b972d4487f2bdd14d0548b74b29c9"],["/textbutton/index.html","3dc355cb16fc49ea9c852f1f1bcecc0a"],["/to-do-tutorial/index.html","bc1300cfaa3b8485d85935bd63531c20"],["/tools/index.html","43e942326f456838e839d23c04e0f84c"],["/tooltip-function/index.html","a223a6b143a58e3f09ef3bbf2cbc59df"],["/transfer-to-hexo/index.html","7fcab3167e76ffeb765b1c3afdf01351"],["/tutorial-update-history/index.html","196cab2763f71980189cdc1f4724a903"],["/tyrano-name/index.html","da159bb729d737431838e9e377c40203"],["/tyranobuilder/index.html","756c2b6b00b6a7f849d33c66749bc24e"],["/undefined/index.html","fff5ccb1c76c42eedf3c2b993200c714"],["/unskippable-video/index.html","6a65423863fd501950f752cbad845f66"],["/update-20221211/index.html","36c38d630d64ea7ca46a1be6be4bccf5"],["/update-20221218/index.html","c39a683df199d5461f1a3bb24fdf314f"],["/upload-download-save/index.html","6a0574c7bb15811c8ce0f2b7334a32fe"],["/upload-your-game-itch-io/index.html","28681c07904e08d747a1b7496d49f1b1"],["/use-list/index.html","8bbcbf3478d51029680d506f4026ccc7"],["/use-nvl-mode/index.html","64a4f48ffa3f0610aadd2b1f7f6d4dde"],["/useimage/index.html","c3ef51291092506f60adf0812756a0b7"],["/variable-change-image/index.html","d0c30a051f36cbe7e415b6084dc7fb4c"],["/variable/index.html","9a3abb1530a124f34ff5148adbbeebdc"],["/vibration-function/index.html","4c12d59b0e83edc4e46696bd5ecea34c"],["/vnmaker/index.html","40f71ea248981546b07c5e000bab2657"],["/weather-effect-tutorial/index.html","3b794ee63fbbb21b2c2594b3d5be27b0"],["/webgal/index.html","7f07fcd3a756f7b7f1b1ae62d8d1df69"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
