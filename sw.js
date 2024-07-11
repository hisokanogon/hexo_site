/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","c56ea2b48bd5d2113ae7ad80a0b3f815"],["/2024-future-plan/index.html","88770839d1aef0a4ef50043fd1a2e351"],["/2player-battle-system/index.html","22b52b1c8795c9f5b4fa366192d765b1"],["/404.html","0f674783a05810854364acfbcbe3a707"],["/about/index.html","5aeb1b95797bddc1782bb30712283493"],["/acg-creator/index.html","f40f4619cada29990a18fbe4efb190ad"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","1fab7f600a46f131a7d383bb11d7c7e0"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","26eb1a7af65c30ed8de9423db37ca3f6"],["/animated-title-main-menu/index.html","4b61f7633bf3cba3d5c72fbb6eb16d9d"],["/archives/2022/05/index.html","7a27406de736847c514f28196bc8c75e"],["/archives/2022/06/index.html","53ab882d8467ca7374d45f7275fd3c83"],["/archives/2022/08/index.html","7299706462ef539eb062b76afb7155cf"],["/archives/2022/09/index.html","bfdf5d20d72a29b14b8e523e09057fdb"],["/archives/2022/10/index.html","e8717714598e09c9693119dfcea4b2c8"],["/archives/2022/11/index.html","5d92dd5192e95e1469d9de7d295e4b4c"],["/archives/2022/12/index.html","9fe0006292347e015bda55188fb044a3"],["/archives/2022/12/page/2/index.html","906c1423301efe13109b8090c6fbd06b"],["/archives/2022/index.html","332974ef293a40507627d3bf933134fe"],["/archives/2022/page/2/index.html","071dd073496895e68819cf8928dad540"],["/archives/2022/page/3/index.html","0b5fce4dea4adf7694a9bab06cc056f6"],["/archives/2023/01/index.html","1c26a658678410b612d1430db62c7592"],["/archives/2023/02/index.html","8020448a90d39d1254d09dbb78ab03c5"],["/archives/2023/03/index.html","98df870e22a8134848626efe29c1edeb"],["/archives/2023/04/index.html","3d6cacf42c9cece5d85610388299435a"],["/archives/2023/05/index.html","0518926e599ce83c220602e6fae98f19"],["/archives/2023/06/index.html","817ac1e14d2eec65d98d94c5559e2086"],["/archives/2023/07/index.html","1ca5d856d2125ba066227a2d213f9be4"],["/archives/2023/08/index.html","afa66820adbd8031a883414cbaf9f139"],["/archives/2023/09/index.html","21368df50f8b39082a799e8cb2f9441d"],["/archives/2023/10/index.html","175afee4023de21679e7b8fd0b4d60f8"],["/archives/2023/11/index.html","898749c61846b237684238b386b28390"],["/archives/2023/12/index.html","cb61b56840f63fa706ed3fce0258a493"],["/archives/2023/index.html","15cdb6ea53985395defa9edb34651617"],["/archives/2023/page/2/index.html","a72cc2437fdcd9aa3562bb5db4d7adb2"],["/archives/2023/page/3/index.html","53f3b8bdd2833a2c51719937c8d054a4"],["/archives/2024/01/index.html","8355ad71f66f119ebcd962db4d141ddf"],["/archives/2024/02/index.html","b00c412de949eb5b6b2114da671cf77f"],["/archives/2024/03/index.html","df4b6dd50f96629f7066caaa9b54e186"],["/archives/2024/04/index.html","56f367ce087efc2ce6866148691e2332"],["/archives/2024/05/index.html","539e3818a4853f5c3b509b9ee2dc9455"],["/archives/2024/06/index.html","97afac8934185b7259f2ae1284d806f2"],["/archives/2024/07/index.html","4d4614700b75ec94df1bc536d31d8f5e"],["/archives/2024/index.html","a08b8b769f84c7191a7860bfdf0dd14d"],["/archives/index.html","85d1e59a62cbae69f57f0e922eb131ad"],["/archives/page/2/index.html","7be5c657675fa3150567ce4403c9f7db"],["/archives/page/3/index.html","88919238b506370c89bc32c4f7837ba8"],["/archives/page/4/index.html","2de60bbb5a1c9672ef482b1566869e0c"],["/archives/page/5/index.html","41aeea8dba708d49f90080f946bf5e46"],["/archives/page/6/index.html","1faee8eff77681335052dfbafcf2229a"],["/archives/page/7/index.html","f3e1c0329b331da5fa1c0753974c2017"],["/artitalk/index.html","4432a1d519ecc971fcc220da97090a19"],["/battle-beautiful/index.html","da8d3c3fa03cbd0230f6f03af534eb41"],["/blur-effect/index.html","872f7cf10101eb49154f9f6a544e6077"],["/butterfly-custom-tag/index.html","0e40838c91cc7ec19eeed3b2795a5273"],["/butterfly-plugins-faq/index.html","4df165c0685863831e84de846cefe975"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","134b970df199d56c4c1d8765bea53335"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","8f29af32f090648dc1da84cc06598fc1"],["/categories/announcement/index.html","ddabb77f2f36d4c788c526acc580283b"],["/categories/diary/index.html","ed237c35e91024d8a0760495b8031a44"],["/categories/game-dev/game-engine/acg-creator/index.html","7a489922adf78dd76ac9fd7a4f88f602"],["/categories/game-dev/game-engine/index.html","a03197619bc5d0ab4c88382dd50a2127"],["/categories/game-dev/game-engine/lightvn/index.html","3ace06f85ec2775d994b59777257ae3e"],["/categories/game-dev/game-engine/nvl-maker/index.html","b52867caf06d58989a84745d5e3a2b46"],["/categories/game-dev/game-engine/page/2/index.html","9e91c64f061ffe0e996628c5de5106cf"],["/categories/game-dev/game-engine/page/3/index.html","e355aef6e396c361684e45e4e71139de"],["/categories/game-dev/game-engine/page/4/index.html","49a1666e948c99acbdbfdea8f8a0cb92"],["/categories/game-dev/game-engine/page/5/index.html","8e20eb2e94586e41efdbc180e157250f"],["/categories/game-dev/game-engine/renpy/index.html","302f0cd5c0997f89320ac8484a2d148a"],["/categories/game-dev/game-engine/renpy/page/2/index.html","2ade891df63ef125f7cc3a6e82c975e9"],["/categories/game-dev/game-engine/renpy/page/3/index.html","9ad152cb427c894ff8ecdc80381e3fac"],["/categories/game-dev/game-engine/renpy/page/4/index.html","7a13326d8edeaad6acf1fc8d2078ca24"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","2fb5d4a50e79c0c1602d37767c526ea7"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","271e319a580e417e26ce0bde11d714e6"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","d473d86b1c0c3a82b9c6025606ad8b6f"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","df4c6ba3307d60f69fe2b461c931b502"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","07f89a8293722a19a39d3b8d3b42d0fe"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","ec87b6fc229dbdac5fcd7a870bc6d60b"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","625f67c93b961e9b6e1d64291623291e"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","c0a6c86e154832d2cce35edd92fd97b9"],["/categories/game-dev/game-engine/rpgmaker/index.html","a385694e3c51d1c9bb49ff88a45ed53f"],["/categories/game-dev/game-engine/suika2/index.html","a57cf92932a2afec03a3865140cad957"],["/categories/game-dev/game-engine/tyranobuilder/index.html","b6a7e8d0b31d8e53fc9f8300e6afdbad"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","2f2d861da11891d4f8a85e8d166974e0"],["/categories/game-dev/game-engine/webgal/index.html","ef73b1cda7793dcd48a1e9ebe132f05f"],["/categories/game-dev/index.html","21cd1732f3a9c3ed7c6b11a81b485048"],["/categories/game-dev/page/2/index.html","eebb9228f3c779986ff02f1d80f4c3a9"],["/categories/game-dev/page/3/index.html","949cffa41f00088ac540b22b04ba674f"],["/categories/game-dev/page/4/index.html","ce67ba2cb4bb69336955a70ab4267a83"],["/categories/game-dev/page/5/index.html","267fff7658e7770379dbfe37b4ddde42"],["/categories/hexo/index.html","b63fab7b08e52c5a0dca9c8bca262009"],["/categories/index.html","d9bf2748b8c53d94b668f009babf38fc"],["/categories/material/index.html","3964fc22b8b7f9e4d1c4fac964cf0f73"],["/categories/update/index.html","44b98d438babd0f7220cce27eebcb53a"],["/change-according-to-real-time/index.html","d0325ed42971a83a89ac905a5c44611a"],["/change-character-info/index.html","e8048b37aba99aebc5e68e95715a58bc"],["/change-title-after-first-time-viewing/index.html","93a2f8cf60d2c0937c8e10a5a9f9efb9"],["/change-title-based-on-event/index.html","4d308671bd6cf8e87e562c9f2aade5ad"],["/character-interaction/index.html","978fbfe9647d3a42aa2f2f048520104b"],["/character-stats/index.html","04927bc23ba9f9b900184dfaecfc695d"],["/chatbot/index.html","70c01b350d7c92054b6dae4a2ee735fd"],["/choice-time/index.html","11fd59c39a173523e421c5c876be8d33"],["/comments/index.html","fd452bbd35f524a85772aa1532608e6b"],["/commission-info/index.html","ee5f90c71662e5c54d6d4ed20acd4a24"],["/count-login-number/index.html","d367b05430a198f04c4ba77b26a7d755"],["/create-button-anywhere/index.html","6eba598a9dffd03c80b48f1edb195120"],["/css/eurkon.css","a94f285ecd630b4b909aa8820878c19c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","bc033cde28e7bec105b1e08377c75ae6"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cf196818bdfb50a1c2d810986605fee"],["/css/rightmenu.css","3a0a4b530ed8a4b58b877d091028877b"],["/css/siz.css","43d0bea8a96ef48950b6febd86a314c3"],["/css/swiper.css","e173644fa88ffa3e59ddcdb0d19bdfe1"],["/css/swiperstyle.css","93c5c1c9f3ff59cb3f081cd952ec0627"],["/css/var.css","6f7db5f6e227458c728ed823d1f38364"],["/ctc/index.html","50f182ba5d5c0c614a6497322d014b2e"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","3a546cb6dfa6d08f75d16f06acd8143b"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","b478230930e93c85294a0532153e4a97"],["/custom-gallery-cg-screen/index.html","90a607caff70d147c8462fd23c13021e"],["/custom-launcher/index.html","b732fbda9d4c7151079cdcf70c8ac3e5"],["/custom-loading-screen/index.html","8db29e7bfee93e3a1fe405b5184a3ddf"],["/custom-mouse/index.html","51f23a7ca738f3595d21873bd4b3adc1"],["/custom-music-room-screen/index.html","87d8334d1aa00b1862b0e91924df369c"],["/custom-music-room-screen2/index.html","aae8c02b7186dbe1f00900c52f2e5cce"],["/custom-nvl/index.html","bdeb206bedd52bce94ba282e19e8c3e4"],["/custom-player/index.html","afd6f5d3984ed9328461eb61ba926e1e"],["/custom-preferences-screen/index.html","5911012911d860a895da20093282f512"],["/custom-say-screen/index.html","1b8c4f92b98b74e39b62c5af31587ccd"],["/custom-style-position/index.html","b0519efd03c36393bc4bd51be4ed16f7"],["/custom-style-prefix/index.html","a145a26cc0ea6e57d006dc5f1019c5c7"],["/custom-style-text/index.html","60f65f9621a36726995d1742dc265acd"],["/custom-style-window/index.html","5c4f02dba64ec27255967951d78f8d56"],["/custom-title-screen/index.html","6d82983768243d763be0a74657f42c69"],["/define-npcs/index.html","94c34478c347b6dfafd7e59adb4216c4"],["/delete-save/index.html","ac039e648c46a675ef5ddac22957fde3"],["/dice-function/index.html","f38945775343bb9886d057e454565262"],["/disclaimer/index.html","6f6ff3fc1c3e14364ddc274994428e58"],["/display-immediately-all-dialogues/index.html","4855a437e6abb2579bacd7281e57cece"],["/display-real-time/index.html","ee395fb94f986a83a4ea7a2b46ed99ff"],["/enter-name-screen/index.html","3c22808344a73f34c560277fbac244cf"],["/export-game/index.html","bc8747a50740bad3ae06175f0da2036a"],["/faq/index.html","d1f2c1c8aedfea6924e22cca09a12935"],["/friends/index.html","8b77b50b5d7c028b98e997ecf6123dfa"],["/gallery-template-assets/index.html","1d469b8d569fb03840185e7ee3063325"],["/gallery-template-default-ver/index.html","c4916720768055795cb9cae0ae76c8bd"],["/gallery/index.html","7ccb823b896546be85456e43cce04eb3"],["/gallery/photo/bg/index.html","29002bc7861dd01fc53b3781b71b8dd5"],["/gallery/photo/gui/index.html","67520af5dcc27771f68c4eed3f0cc83b"],["/game-only-text/index.html","792d570b718f731b22e0ea89b22d7354"],["/generate-random-name/index.html","f4d9e404a75721b4026711aee470e6d8"],["/gui-017/index.html","bfbc27e77886b40274369e247c8fa7a3"],["/gui-vertical-002/index.html","ee33305b8900c4989db7cf22b4a840ab"],["/gui012/index.html","592652a3ce299fd0cf5126a9e153be4c"],["/gui018/index.html","6d5aed832a69e25ddc3fef466eac5c92"],["/gui019/index.html","5b6adbf5fcc2c5858aa508e507838d02"],["/gui020/index.html","a8a2798600816edf1b608f264be87e48"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","0d781f7ab689e38a7ef941ed00020cf6"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","e966580667fab6c84119826d9d3f7f70"],["/hide-textbox/index.html","1f4c2283f1d639090c4aad8831233192"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","45cb4c42ae478cb504676328f59928e9"],["/images-tip-function/index.html","3905f745bef06c2ff3d74ccc5b2aad62"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","8c158800a56c07ecce2b4536ab84511b"],["/index.html","8d9b246c9d357fb6b852a95a4de99d35"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","0046a7af68f42b62757de8c574b8d446"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","4c9d58a68a3a427c19bf3957a086b706"],["/items-sprites-effect/index.html","267de1d7c461c357124bf7cfb00aaf52"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","a2e44b5cf69324bdcdb45f35b038e0aa"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","74f2085451b4828529f9182843744587"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","5edccc13c7963d7e99eff5f4d38f9ba2"],["/link/index.html","8292100ca5cde04fb15d70945cb35b36"],["/login-reward/index.html","873fd9cbd307842efa541414307da3f6"],["/main-menu-music/index.html","e05b513103d938417b7517d2ee09ab77"],["/make-butterfly-beautiful4/index.html","90b6370cf224530cdeb73b1b1e3083ae"],["/map-puzzle-system/index.html","161e47bead77d0649f4bc1a74b2eae12"],["/maple-effect/index.html","72252fcef07306aad829388d6e13d2e8"],["/memberships-2/index.html","0e16ca5db48958ae9ff3d266a63c49a8"],["/memberships/index.html","d49e7512725e1aa58e71261c9fba06ff"],["/multiple-language/index.html","08a8ec91459e10fc01bb0091207197e0"],["/name-input-assets/index.html","604244798abe2aca4240e12678eb1ba7"],["/new-year-event-2023/index.html","97a0290dd4d3174d19b16af4e23cbc7f"],["/newsletter/index.html","10c70c4ae2f6631f6b51cf974b0ca30e"],["/nsfw-limited/index.html","2e1beab1e09eaab683dd3e205bd405a9"],["/null/index.html","5704874ef66b26611bc63544c58cad98"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","d0c3710d210476ade7d0ca74c5a18a16"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b122b54142f12d10e17b0a83719edbde"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","0a5edc22be818efacb6e133f5952981c"],["/openchatai-renpy/index.html","835786ce8155661a25f449a7aee96544"],["/original/index.html","63f4dbef6fee1ce44b59ab61a53868cb"],["/page/2/index.html","e4c7b13ee21f9009fe5d49e9b2f8dfbf"],["/page/3/index.html","54986b16c994d16313f716d31b486302"],["/page/4/index.html","d53d821c51ef02410aca40863983fd58"],["/page/5/index.html","e0dc8ce16ee572036e572ee9f668cf9c"],["/page/6/index.html","5540af101c66b7640f5462306f208be8"],["/page/7/index.html","96c3d8a9100883c281f39ecde3c0ccd5"],["/point-pop-up-assets/index.html","9c994da06d04840a10e7032bf76ca77b"],["/pop-point/index.html","00b08a14c0f47352af550035b78da82d"],["/privacy-policy/index.html","c79e91cfecab8d13f337d6f7e4262176"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","e4208f1a19edfaee62d18ecde2c73bab"],["/random-number/index.html","670d823c0d081c22076fa986e012e291"],["/random.html","49ac631bd568db39c0a86b0ccb160a6f"],["/release-017/index.html","e339776d00862a6d36e14c85f14cdd77"],["/remembering-choices/index.html","7b4b1c2b55af5484d2a1f7241faeba14"],["/renpy-basic/index.html","789e6228306204d576e92785563698ac"],["/renpy-crash-glitch-effect/index.html","6df192f11fb4c937d99ee1af9e607377"],["/renpy-flip-image/index.html","bf715d7ce1181d7201f99d57aa9ec808"],["/renpy-matrixcolor/index.html","219eb9832f48d1dccc0bb70e4333fafe"],["/renpy-overlay/index.html","1585aa06e192c84b926735fb0382fb0e"],["/renpy-review/index.html","20bcc9bab94920322019eadf1a7b187e"],["/renpy-typing-effect/index.html","4abff001a80190aeec7933db781d7cdb"],["/rpgmaker-assets-menu/index.html","348bd3581503d856891d1024219e525f"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","7e6ce86f542c738628cbd113d146217f"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","cac8186e0e324ae8b1f7164cf3bc67e5"],["/sakura-tree-background/index.html","393d4d9e03e343c4d252780bc120629f"],["/selected-button-style/index.html","73d99b0f936da81b5cb54ef797bd0356"],["/service-worker.js","a8068276633766b9c4eeef54f77f7c33"],["/show-variable/index.html","b538c55b397a4a2d5b1a336ead9392ae"],["/side-image/index.html","2a8fb15150d1506ea83b5540d719f4f7"],["/snow-effect/index.html","4d8cb1ed95f670986e41c6ba99764864"],["/speaking-animation/index.html","3b5992c990886692dd712c8d9f277fd5"],["/splashscreen/index.html","d313c780eb838f21b8a09cb43959ae1d"],["/suika2/index.html","1427e665d21cd194a7e02f004e538f2c"],["/sw-register.js","8e9bcadfaa867617416d9795fa415194"],["/tags/Hexo-plugins/index.html","314f9787870f6bd48e57743bc6232a7b"],["/tags/Light-VN/index.html","126e185ab884291328fc778f81510dfc"],["/tags/acg-creator/index.html","f327ac6244657042486d8327b3a5cb13"],["/tags/ai/index.html","99d6ffa2863373f115651a9ad4206105"],["/tags/butterfly-beauty-diary/index.html","254a5e2769fedf2b47eb3ee5fcdff5a0"],["/tags/custom-hexo-theme-butterfly/index.html","c7247691ea6747942791d0bdf644c71e"],["/tags/custom-renpy-title/index.html","e3a4c552ee609a96db2506c2ecbff9c0"],["/tags/dialogue/index.html","33a9226f199076cf237595ed66446298"],["/tags/effect/index.html","955e96323cd64ba05842300dcc47387b"],["/tags/event/index.html","5b50517933a7e7bf2baf5a1edd6857b0"],["/tags/hosting-own-website/index.html","8bda5e468558be3fb534fe9d4d3be2c9"],["/tags/index.html","d6bb18419161a1fbaf24865c2e01646f"],["/tags/itch-io/index.html","5e135e9f11a50a1d99438b077f36381a"],["/tags/light-vn-update/index.html","946482031689cfd6fd9478eddcb3315a"],["/tags/nvl-maker/index.html","4a8bb2b1a21d9b478db0b36f9555fe1c"],["/tags/player-related/index.html","2b39cfc76f51aa6dc160e5ec42f35e04"],["/tags/pro-tutorial/index.html","a472b64364fd4360501a38f7b1247673"],["/tags/pro-tutorial/page/2/index.html","e52b196b6cd4b6682262d2069e55d539"],["/tags/pro-tutorial/page/3/index.html","a2942a2f3f0d7d888d3c17a1fa09d042"],["/tags/pro-tutorial/page/4/index.html","0fbc5b3b5e38b831a40a0d72f04b2a13"],["/tags/renpy/index.html","b76fee8c756f334c996fd03ceaab7bdb"],["/tags/rpg-maker-custom-map/index.html","98f37b8c57149ef7f88c088552be562d"],["/tags/screen/index.html","b6fdeba5892c05db5b4d05b15880aff5"],["/tags/special-function/index.html","60549a344bfdee4c12a553e04c6f9955"],["/tags/suika2/index.html","a2dde60bcffc35c017a7b5965b3b3d28"],["/tags/tyranobuilder/index.html","d79e1a3f947cec862032a7e245c3e8b2"],["/tags/ui-assets/index.html","21a791424de97911b6305f32e71a0ddc"],["/tags/update/index.html","9806c4692997ae4456e892d5be18b5ca"],["/tags/upload-game/index.html","621eb01c176de431bab0e0232e1d2d0e"],["/tags/variable/index.html","626b7aa5516a81f52aa78883429976d5"],["/tags/visual-novel-maker/index.html","f6d4fd5c077a5d89713f3c27e64cce3f"],["/tags/webgal/index.html","b14f33a2e9358e76605bcb586ac54b92"],["/tags/封面製作/index.html","5bc848c1810909a320feefafe86fab10"],["/tags/背景素材/index.html","edce0b89e9068dde9959f90d2bef0e71"],["/tags/隨機功能/index.html","4853da991cd68626d7585dad6cb74e6b"],["/test123/index.html","39f5ed25f28001b3cb230314b443b0f6"],["/textbutton/index.html","93a8fb64de67730a8ce4ef7d606b2a25"],["/to-do-tutorial/index.html","9d04d1c15ef91988616d83161dff636d"],["/tools/index.html","89e7e40140c3bddcf831638aa53b6f01"],["/tooltip-function/index.html","af13b1a9d89edd889a9f3e560aeb0d9a"],["/transfer-to-hexo/index.html","f161b2f4938db74f5b5161f0572d67c0"],["/tutorial-update-history/index.html","04ca31b01815f59104337080d896a692"],["/tyrano-name/index.html","5b16739da3119f4303648c89f222c577"],["/tyranobuilder/index.html","985a6a0095fcbe9caa12bfa5dfa90ac9"],["/undefined/index.html","444300bafcb06200230f80c83ae88312"],["/unskippable-video/index.html","14377bfaf33af83d5e13fc947daaef17"],["/update-20221211/index.html","8d612db4edb2fe7492412142b73a8e89"],["/update-20221218/index.html","75fe27ac3066e09ca6157a1b647c4da9"],["/upload-download-save/index.html","3af1fd7621946d34b05c1cc5254522ed"],["/upload-your-game-itch-io/index.html","1b493a76a107b2c751cef3ac0be7e55e"],["/use-list/index.html","2da7dca0fbdf5ddbe587dfb2223669a5"],["/use-nvl-mode/index.html","16ff874aafe4230b4d9e100934e35e0a"],["/useimage/index.html","da5f5bdb0df472a0fb6a84e3f74d8d36"],["/variable-change-image/index.html","74e3b7e90c0504ca7d1204457d611326"],["/variable/index.html","cb2615f5bbea1c276b819cf7e9d28ef0"],["/vibration-function/index.html","c923f872079e77c53eb9dc04a3b2551b"],["/vnmaker/index.html","0325bbc8b7481a41b4adb01711be291f"],["/weather-effect-tutorial/index.html","a9c0c2c5de0ced2c09868d140f16291f"],["/webgal/index.html","36825fc5c82dafd7d2e4aee9393a4f30"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
