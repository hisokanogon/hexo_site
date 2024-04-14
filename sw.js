/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","dd98742ae5c28a7944367b49601f3b56"],["/2024-future-plan/index.html","e5cf3a7166e2acddb8c74126d2aceb78"],["/2player-battle-system/index.html","83c38ba98060ec8c12a41799dd948d7c"],["/404.html","911708ad9c94aa9e48ed3db85487fa87"],["/about/index.html","2d1a89eca3ce539468025e7e3caac0b9"],["/acg-creator/index.html","578de04fee6650dd456828e028b158ca"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","1390366a19a099f25b92514950509a56"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","184a0bcf2e13349242de1aa97f7ae891"],["/animated-title-main-menu/index.html","62fbc1c4a4fd50748fa94622e7352544"],["/archives/2022/05/index.html","1d0175dbe365ab2274b8c7d6d101f53b"],["/archives/2022/06/index.html","56d5ddf2df2a263e39a89278dd05ceac"],["/archives/2022/08/index.html","5b668d9845fad315b15e27839f3589d6"],["/archives/2022/09/index.html","6e7d795efc79fddea4a49911af7ed0cb"],["/archives/2022/10/index.html","09e048642149859305d57d44ec878292"],["/archives/2022/11/index.html","355407cfa46e234a470d36f31ae8b7ed"],["/archives/2022/12/index.html","b8f16b98a3dbfe67ba1cb96b25c8a234"],["/archives/2022/12/page/2/index.html","dbdac578f9b4399506f9d769189597d5"],["/archives/2022/index.html","dc38f45429ec23487b29b6731f261c88"],["/archives/2022/page/2/index.html","e41fd727b433933b82b9679512bd4af4"],["/archives/2022/page/3/index.html","9dfef4f7ccaa6011705454d22978070c"],["/archives/2023/01/index.html","d58183ba516435e00cf9afee4c1890c7"],["/archives/2023/02/index.html","73113f878795d69d7fba76380584a98c"],["/archives/2023/03/index.html","c2c39f88691baed9f0f844945bf71402"],["/archives/2023/04/index.html","d1868b819e688a641c38b12d330d7519"],["/archives/2023/05/index.html","3ea1834b322e053c4878eed8282dd534"],["/archives/2023/06/index.html","beb997486246ef83396629c921808346"],["/archives/2023/07/index.html","11d70ff66cd27c1ed0ad2d8a8013ddb8"],["/archives/2023/08/index.html","123b583641fbe2b42ffc4aa68f35f9f4"],["/archives/2023/09/index.html","831fb31450cd023534f80e2a7233cf09"],["/archives/2023/10/index.html","8662d272ce8f8f5204fd4aa483859bae"],["/archives/2023/11/index.html","a52cc5477f7860378ec126f3412b15df"],["/archives/2023/12/index.html","2ba329340800a6325cccaa14a88e8deb"],["/archives/2023/index.html","3c2cc1184725f87021ee0685552df624"],["/archives/2023/page/2/index.html","4e718bdaa51d7c8308fbb3dbc7b58c7a"],["/archives/2023/page/3/index.html","d21e21c2601907089c1c93cd5e092a45"],["/archives/2024/01/index.html","edaa3ec78da7a78004b94d1447953a3e"],["/archives/2024/02/index.html","e8e25f69efee7cbbc6574db9f0a59b8b"],["/archives/2024/03/index.html","319af8d9b07012613646d3b202649fd6"],["/archives/2024/index.html","1cc3e041b7e519d96673c8848e460bc7"],["/archives/index.html","26fde46b17e4f2b6169039ec6e3f8e65"],["/archives/page/2/index.html","62cc129bbb6ca8b5a94307f7bdd09179"],["/archives/page/3/index.html","2804f2c0e4d42790e8e9ec3eafab48d7"],["/archives/page/4/index.html","8745bca4ea0e1bb5a5dd78d1cfb079bd"],["/archives/page/5/index.html","fd85fed8588701adda73a25d7ecc74d2"],["/archives/page/6/index.html","e22f5004633ead45995b40dcf63b40d9"],["/artitalk/index.html","ab9766f16c1628982c49d99e36966bb8"],["/battle-beautiful/index.html","5d0df60ba321758e499fb031bf0bddfa"],["/blur-effect/index.html","4d38468e5ff406679d0676628aceedcb"],["/butterfly-custom-tag/index.html","3ae583034b075303265d768323c83c23"],["/butterfly-plugins-faq/index.html","dd2f754b16ab96c532bdd548575cda78"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","9c384bb7116479e4a32803f5b9d98eb4"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","2bb7ffaca179fedce2ab9e5a3eb5103e"],["/categories/announcement/index.html","20ebf74a388f3c39bfc16e373b9185ac"],["/categories/diary/index.html","20740fbb82be1c96e35fec535bc09c56"],["/categories/game-dev/game-engine/acg-creator/index.html","3a246dff634bbb2769c3691df49c9b5a"],["/categories/game-dev/game-engine/index.html","8bd140f598acefa2438ec311a7898634"],["/categories/game-dev/game-engine/lightvn/index.html","97035b40305cafa8c257e584fadf0807"],["/categories/game-dev/game-engine/nvl-maker/index.html","52208cd929816c3f29a082d31e086547"],["/categories/game-dev/game-engine/page/2/index.html","caf9139c1064e471930aff7059b26411"],["/categories/game-dev/game-engine/page/3/index.html","52855c3037d150ace0a485b9a48544a2"],["/categories/game-dev/game-engine/page/4/index.html","8361f21112d0c3f270079c6eb8875909"],["/categories/game-dev/game-engine/renpy/index.html","354a25a711306b810112ae0f854a4b69"],["/categories/game-dev/game-engine/renpy/page/2/index.html","199105a8d685763f6d08cc4fd1d1bb35"],["/categories/game-dev/game-engine/renpy/page/3/index.html","2b877f514c3d31069b24e9be5912504f"],["/categories/game-dev/game-engine/renpy/page/4/index.html","725845a0191bc49b8016b69c20deea15"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","cb98fa2dfa2581c2d6e8452ccd2182da"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","da8548f93aba91d5d4ae89e38a5bf0f3"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","b8a04bac6f81dd58fbe50f44a3ca07fc"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","5e712d2356ad86d5b0786de78456ea13"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","4f82271f913499d8d780133eab1f34a0"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","762d8acbad52454c894d7894b0f535f2"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","02b4362e44cb250bff45edc14723efa8"],["/categories/game-dev/game-engine/rpgmaker/index.html","e5983ee335bbe08b0ebf410bcfe649d9"],["/categories/game-dev/game-engine/suika2/index.html","b15fe87068707246d2c25b2ab619d4d0"],["/categories/game-dev/game-engine/tyranobuilder/index.html","d18b05d88bfc126a21736117f19d73e5"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","54ba22de7c37f253c736afb6636bd178"],["/categories/game-dev/game-engine/webgal/index.html","350ae253faef8e949708b89b4f52b584"],["/categories/game-dev/index.html","fe15631f9fa26f63137b78f910f7b3f7"],["/categories/game-dev/page/2/index.html","5f586ea7d34137be64404299856bedae"],["/categories/game-dev/page/3/index.html","4a0fe4dacc1b4dc3af089ff7e57e11c4"],["/categories/game-dev/page/4/index.html","6551e97d9fa111936af7a2571d96fe43"],["/categories/hexo/index.html","e7412a76729435d9c6170a7186621384"],["/categories/index.html","7d7d04334a39977c608cb8063898c8fc"],["/categories/material/index.html","e5bcb04a390b181d313b5d5526ca2f6b"],["/categories/update/index.html","1eb07c43571ec7850a1d56111eae98fa"],["/change-according-to-real-time/index.html","d715448ef57ef9357eb273e65b501262"],["/change-character-info/index.html","43914d9dde97efb9f34dc629f944c976"],["/change-title-after-first-time-viewing/index.html","41b77a52f9547bc91e9833930674e580"],["/change-title-based-on-event/index.html","1d0533f718c174244b9c95ce929ae3fb"],["/character-interaction/index.html","19eae3fb31eea74458c76fb53b059a72"],["/character-stats/index.html","c1067c05c8475ca30b440c04136ba38f"],["/chatbot/index.html","27424639d3182135ef2dfb95eeb82460"],["/choice-time/index.html","64cd6987428637833063eb3bb9b29961"],["/comments/index.html","7fe96b1585173aaa1f438a96293d8862"],["/commission-info/index.html","83c2d81fb87087499659d06b5bf4c07c"],["/count-login-number/index.html","9fa1513fae99aeaf759d3f6d8c229607"],["/create-button-anywhere/index.html","c76b8ddc9d614c34e2264a6926578d26"],["/css/eurkon.css","79ba65131d49619a07ba6acfc4d210c3"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","41583291b7b77131d565bf89b8de4080"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","015e4fb9c3eaafaf72de047ea2b144a5"],["/css/rightmenu.css","35ba6de10aaa04f5a4c3fb50d617bb26"],["/css/siz.css","596210a1a0c097433dbc5da2efd78139"],["/css/swiper.css","4b44939bcad7c6516d57d78bdd3d13ec"],["/css/swiperstyle.css","cfe433982744660ed9f1a178e2b13e38"],["/css/var.css","2de0e5914a864ffbb24c941e677bbc05"],["/ctc/index.html","ca07b7be976515833b86cbb8b1301987"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","22ed899f237a701eb11d5e660d744c09"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","ce046a1dacae70eea77f96a25cc22795"],["/custom-launcher/index.html","0e64fd4670398cf61256a3e81a0211a2"],["/custom-loading-screen/index.html","304d26d2887e04c5f52f420e4ce1524f"],["/custom-mouse/index.html","b14b77e6fcff351a4117f0f6f05e3f39"],["/custom-music-room-screen/index.html","a1338f37482c6a5d2623cb8945b74127"],["/custom-music-room-screen2/index.html","da22820a0a19fd40e9ada1f8dc6de5aa"],["/custom-nvl/index.html","47829eddba17fe8a0f70267c8cae6700"],["/custom-player/index.html","b9a52517414b39fb20aa5ec35087f77d"],["/custom-preferences-screen/index.html","fcd5068bd55e488bbcb6e82281c8154e"],["/custom-say-screen/index.html","54046bb7acec93c6ff7ec580298dcd84"],["/custom-title-screen/index.html","7faa3607718e024ff125f7104914b437"],["/define-npcs/index.html","5a0fe9cefae12ee9b033e56658feb067"],["/delete-save/index.html","b9c926579725f3ef8cecced5dde2531d"],["/dice-function/index.html","6713f9836fc2196eff39b4d92ee876cf"],["/disclaimer/index.html","c61a1c0e35c0862d71a4d48d89b042aa"],["/display-immediately-all-dialogues/index.html","c119df758e5424662a766a6cbca76b4b"],["/display-real-time/index.html","bce8bd41a55bc7191163053b3557a1ff"],["/enter-name-screen/index.html","ffaceaa0876cdb001ffdec6db86381b2"],["/export-game/index.html","0628c6547c54ee2ed8b633dd853bf5cc"],["/faq/index.html","089d62949f1e7b310f0ee6428c60f0c1"],["/friends/index.html","b3d7da38104c4c42985c5a22bbc42aba"],["/gallery-template-assets/index.html","b570429f1b70bd6bbcc10a2b9fcde7b3"],["/gallery-template-default-ver/index.html","124c00a79fcdf77b56bf1363d37cce6c"],["/gallery/index.html","3482ef4bf8e6e0661715e53cc0b829be"],["/gallery/photo/bg/index.html","40925e6497829c4ad3845f7688db712b"],["/gallery/photo/gui/index.html","0581880427c2d3d9bfe51d286b58b378"],["/game-only-text/index.html","536358152ded02472662aab8a42d8855"],["/gui-017/index.html","d70bffa4d4009f0b6a43ea6e950bada9"],["/gui-vertical-002/index.html","2300fe77de376f1755b20fdbf4fc0714"],["/gui012/index.html","7310ffddcf70d262bb196691cea0d659"],["/gui018/index.html","ee62a7c8aa2297fe418834ff9874632b"],["/gui019/index.html","55eea4f240416de95c96a4fb3394ab42"],["/gui020/index.html","8ffe55916922bd31855b2eb2336e8a49"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","0b52022e8d1a3a1b29f9700db6970cc9"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","0119452a00a02df287d26a8de44814db"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","1a04dfc0733fdc930b112b155cd8fa39"],["/images-tip-function/index.html","d0e3c3e0f983be7d964a4f34a02a8b89"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","9abb19ea4e6f2c1f5efd777e88fb8d82"],["/index.html","9b05c9567abc389baa99f470c3d36e47"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","805726f12241293087772b848d90811d"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","dc74d2e6ecb89593c6f39a36eb048db3"],["/items-sprites-effect/index.html","e5143b0628b706392ae6ccd8077edb93"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","befc1a764ebf99c4e0cdf4259bd75390"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","2f23732a46f9861dc89bac748ec8c930"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","4334c03316b5a8723271a14588f5c4bc"],["/link/index.html","c935712116417ebfaba21d0f255a4853"],["/login-reward/index.html","56be23feb418e5dee8448d40c61aa1d0"],["/make-butterfly-beautiful4/index.html","5bfe6db29f507808ac6746753c36dbdc"],["/map-puzzle-system/index.html","a8f96bda391070986579f3be844aba54"],["/maple-effect/index.html","418d0519e3489466867a555a2077e0a6"],["/memberships-2/index.html","8af37a6eb39d6905593c432da92b8e61"],["/memberships/index.html","e44d67a784d864059432b0e112ccc300"],["/multiple-language/index.html","ef3ce69db6abcfda5e9066d3eaecdb8c"],["/name-input-assets/index.html","c907e0246e55882905e320d1d30d6edb"],["/new-year-event-2023/index.html","aeeee569734c091a8988b7722c238875"],["/newsletter/index.html","38e60e393947852144787f255729a164"],["/nsfw-limited/index.html","41fcf476c8f4dc4117c281ea26cdf280"],["/null/index.html","1c2d5e9716aa2064af7aafebe4c11a1e"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","761ab4cf785b073c97ceab0b8946e47a"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","d7f1a5b73d9936d745bce53c86e6c086"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","6b65f021f7f2c869dcdad11f2eaa131a"],["/openchatai-renpy/index.html","ec1c525c07a70a61370bcd678432a1ae"],["/original/index.html","0394861c50bcd19e5a8d2930fd5fd551"],["/page/2/index.html","88de070b9783757bfbe63d92f82fdc34"],["/page/3/index.html","5654cb1f48e60501dc6583ed94e89099"],["/page/4/index.html","1ff941180f6f3c61e2cb5057081bcab3"],["/page/5/index.html","f867c63710c33a09dfe2e4795dd153c4"],["/page/6/index.html","c158cfc182479b36e3a3937ec9e999ab"],["/point-pop-up-assets/index.html","00bfef4ae25bd8ae81fb3e363638d5d0"],["/pop-point/index.html","111ce9de3457a8a228507f9ac884cc31"],["/privacy-policy/index.html","3c20b86835120060afb8cb5410b6e7df"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","bc793799df3e3c46f54640bdc389ad59"],["/random-number/index.html","a014899ff1fce0570f9898bdd112b6e5"],["/random.html","19f94f867982fce5097739b3285a152e"],["/release-017/index.html","8d6d972686642d02dca16902c79ab7d0"],["/renpy-basic/index.html","01311c44abce52bb8c51de04d4dac041"],["/renpy-crash-glitch-effect/index.html","b054c462c51078909ff963be365e79a5"],["/renpy-matrixcolor/index.html","0216e5f381804c604ddd9172ea20a1e7"],["/renpy-overlay/index.html","44cfb51ee5bb9de38108c8a512e5861a"],["/renpy-review/index.html","291a8d93d28a0dd1da2b08a1e5944e60"],["/renpy-typing-effect/index.html","94c8eee263153c34d3b308f0f945ea58"],["/rpgmaker-assets-menu/index.html","2d7b6ba721a8d016b299c76713588abb"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","3c930491fa6152874cd83bb840c53cba"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","4357c37768aee31252b785353fa2ee83"],["/sakura-tree-background/index.html","6f039336456ba277cc22857a03b9f411"],["/selected-button-style/index.html","b3ad2e5a271c0b4950eaa0d67c44d589"],["/service-worker.js","2a437865ed103c1ba507a7a74152f970"],["/show-variable/index.html","a1166d7b354e0c164bd109fa3be6be62"],["/side-image/index.html","b191144404e36a3f785f5836f5074dfa"],["/snow-effect/index.html","5e91dc093b3bdeeb0f1cff5a48ee9fd8"],["/speaking-animation/index.html","b7c49abdd30e9f5f2617e3fac9d57ecf"],["/splashscreen/index.html","00cf1dcb0f643badbd08c9f8465e29a3"],["/suika2/index.html","84517831c2aa4382b1883ccc2a3dab47"],["/sw-register.js","6cf038adf03a5877ff26525eeb08e24f"],["/tags/Hexo-plugins/index.html","dc65617275fd40e166a57f5431cf483e"],["/tags/Light-VN/index.html","bbf5a05b243f543b54e07931d82f1cae"],["/tags/acg-creator/index.html","45c8ea433d009a16ad2541e8fc462126"],["/tags/ai/index.html","2ced00106ed29e27952e089b1aa93c23"],["/tags/butterfly-beauty-diary/index.html","6a88447ca4ccdca331c4a6be1822ee7c"],["/tags/custom-hexo-theme-butterfly/index.html","0f9cf1fad008a629a8f829eab5b55fad"],["/tags/custom-renpy-title/index.html","811c4acb20bc9b5e19537d1e77379140"],["/tags/dialogue/index.html","127b0b8242f7ccb9867bbba28e9c6504"],["/tags/effect/index.html","64a5b36bd7375c8758042b505f177e79"],["/tags/event/index.html","e97265d9c9952b5de239ffd036aad5d9"],["/tags/hosting-own-website/index.html","4dafb80a29cfc0d89f99c1c712d842fb"],["/tags/index.html","20701078d1e580d85c26706a98c60f48"],["/tags/itch-io/index.html","c688717c7ed8b4f5d2b1b3d1c86f9ea9"],["/tags/light-vn-update/index.html","8ac1ba7cbe0022db9ec40d3b347a1fa2"],["/tags/nvl-maker/index.html","93b2c9cbaf51d98773827c46a04d0a4b"],["/tags/player-related/index.html","8d6f40c76a82a11f0da3c9138628586b"],["/tags/pro-tutorial/index.html","21fd58b45b749458e00195f7bdc73287"],["/tags/pro-tutorial/page/2/index.html","1b9748fc39297855d86cd3936e10df44"],["/tags/pro-tutorial/page/3/index.html","7ab5f9d24a64856d83b014955f37d97a"],["/tags/pro-tutorial/page/4/index.html","45c8625865d620e552339cf43d9d4356"],["/tags/renpy/index.html","e1ee1121c8eb000f541ac727ced4f232"],["/tags/rpg-maker-custom-map/index.html","f2c8f48b0631f9c77e6d15557096abe8"],["/tags/screen/index.html","cc9d6059f1a6e1f4f22c556def0b97fe"],["/tags/special-function/index.html","202294df3da3d1a7e1b871c68e6c33c4"],["/tags/suika2/index.html","578b1489c53a3337377f495445ed1de2"],["/tags/tyranobuilder/index.html","5c5a00eb834d59885b04f09e01401d03"],["/tags/ui-assets/index.html","c35ccb50f7006f403f9f8c9625703e09"],["/tags/update/index.html","9c9e365b0d4b0d1a9403815aa9ec5335"],["/tags/upload-game/index.html","7f8147940ec9db9b5fed22db3d49da3e"],["/tags/variable/index.html","c59521642900beca0a9a6c5357961c8b"],["/tags/visual-novel-maker/index.html","3487824787685ba147f6caa6b68e59d5"],["/tags/webgal/index.html","afc22ce0d931c43e558a2f8610e1e5ef"],["/tags/封面製作/index.html","c5c276892fead335424bbed47f481063"],["/tags/背景素材/index.html","22449a04662c26a74e24ec18999ebd93"],["/tags/隨機功能/index.html","68ffc571cecf0586f13be3129844fcf5"],["/test123/index.html","13a8462dbbde3dbde35390bc917a501a"],["/textbutton/index.html","e55972d55777a8dbeeb77b83837de96f"],["/to-do-tutorial/index.html","dd6c559109bdb89d5abad803e4fd3dea"],["/tools/index.html","15206da7554f5856b925fc5f5c3bd461"],["/tooltip-function/index.html","02f1803985bdca2298753c82603266b5"],["/transfer-to-hexo/index.html","c05a9382ee7d7e825935d2bb451f5ff5"],["/tutorial-update-history/index.html","457a6afa2d30f0278b4ecba35fcc449f"],["/tyrano-name/index.html","63e7662aae437c96fd9886cbc813e05e"],["/tyranobuilder/index.html","9a2a7d27d0cd4bef65990e48e2befbd9"],["/undefined/index.html","e125f8ac943dd15f6a42def016c0b405"],["/unskippable-video/index.html","d0c536f09f8089b9e5c6511e930a76ae"],["/update-20221211/index.html","41b9e6d2c9c8dcc533975c02333cd499"],["/update-20221218/index.html","a53a894a0a83656c8caac00dcf059ceb"],["/upload-download-save/index.html","5a520d74f86d4175c41bb11c22ac380e"],["/upload-your-game-itch-io/index.html","224284a59df5c8b9ede3dcb08ac1339d"],["/use-list/index.html","16dd5dcc860292e5be8d34e26a12d0f4"],["/use-nvl-mode/index.html","07ace8b177a18b55e0f6075714fd2b37"],["/useimage/index.html","d8e4d5155a2973bf36e2da4aac978edc"],["/variable-change-image/index.html","d559fed1f5c00f60850ea1d286a8d689"],["/variable/index.html","be7cca0676a70d04855de529ce3b052a"],["/vibration-function/index.html","dc1fa29ddfd5a2497195b4e343667fd5"],["/vnmaker/index.html","6ddc3dcabdb55c4868e51db74427ba6d"],["/weather-effect-tutorial/index.html","3f66c78582f4ba6ff02fad239297d069"],["/webgal/index.html","41e0f5757027d6e665c390e1138258a3"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
