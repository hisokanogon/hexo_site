/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","8232e3aaf158047a4fa47d782b98326e"],["/2024-future-plan/index.html","e0bdf9459c2db5beb83b600f6b6392d2"],["/2player-battle-system/index.html","1ca38a50d60ad51078c7c1664b63cd33"],["/404.html","fa032a0a3c8b6ad162ab4f75326b3603"],["/about/index.html","8c18a0d66ed6b4a7f680ea89d14fd602"],["/acg-creator/index.html","b77e8b2b7062a58a279c104622b66629"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","2972fc57a889eaa4ed95a5cdb016bab9"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","cbfabe8b171ebac623789d4ab31c4f80"],["/animated-title-main-menu/index.html","a8de929d3f22335ec83fea2ee44713f9"],["/archives/2022/05/index.html","9d8f5af11b539b86765ce932f59ae091"],["/archives/2022/06/index.html","10d2c0efbf33458cd7d15588564859af"],["/archives/2022/08/index.html","2cb1c44c06b39df0fe7c044b48b30558"],["/archives/2022/09/index.html","10ab855ba56c48d5d3217a3d1776d424"],["/archives/2022/10/index.html","b3eaf4ad31764d3e5449c995d3b9b092"],["/archives/2022/11/index.html","3ad467a39a2582fe10b20a3d99fc2f53"],["/archives/2022/12/index.html","5309950530772d67055096825ae31480"],["/archives/2022/12/page/2/index.html","cff74a85da242d4a6765efe33e1e0d13"],["/archives/2022/index.html","17052963bf4fb4490868d4bd6d50f128"],["/archives/2022/page/2/index.html","173f1a2cb1556b204cfda70004fe7298"],["/archives/2022/page/3/index.html","c30bf5ca497d7285e5ea01bed66b991e"],["/archives/2023/01/index.html","5ace0d03d60d365eb56271175cfc36c3"],["/archives/2023/02/index.html","b1847eb13dec5e309f400a22bb535ecd"],["/archives/2023/03/index.html","7b15a47655bea911743ff3013f9f2603"],["/archives/2023/04/index.html","16c187483009ad20c37deadff0eed1da"],["/archives/2023/05/index.html","421e0b12bece13b4c59af4949a25e617"],["/archives/2023/06/index.html","5691324e845be83c11af5f2e4a30669a"],["/archives/2023/07/index.html","5d44352f83466393a67cf62936a62c5e"],["/archives/2023/08/index.html","1be96c180771ae7c20ec9c269b62c10f"],["/archives/2023/09/index.html","d5bd3c53a20af5b95028b7b6dc8097bc"],["/archives/2023/10/index.html","9a68aaabc8e9717cf9467144a376b375"],["/archives/2023/11/index.html","ddafdd6a61240926d34536a49ca9b038"],["/archives/2023/12/index.html","7e2593e9259ffa14351a9422b55a717e"],["/archives/2023/index.html","111e4d86eb48a5d7f1ccea60df74d711"],["/archives/2023/page/2/index.html","1ef8abefe28c5a5bfef4102cfefed9f4"],["/archives/2023/page/3/index.html","f5d8a8dd92b7c8bd87984ab6283e283a"],["/archives/2024/01/index.html","69050d6081df1cc00e32715b6f515ccd"],["/archives/2024/02/index.html","4dfd6ec6529bc498b3c4ee71b724a50d"],["/archives/2024/index.html","6985c7f712f30a98fd43d894ce37b212"],["/archives/index.html","b6ae2347fc0c855af9bc499824bc3f95"],["/archives/page/2/index.html","d01a4b733acf0fe09192f3e5a30d605c"],["/archives/page/3/index.html","659478b707f4c013f989c6b52de32c6f"],["/archives/page/4/index.html","947765af6972aaac0c24fe2d5911dbc3"],["/archives/page/5/index.html","70521b263a38bf931915576097293e99"],["/archives/page/6/index.html","d0a954da7d83dd1d5e7e0d4e9e9058b4"],["/artitalk/index.html","d774a0c2ff402a3fc9dd977f9616d5ec"],["/battle-beautiful/index.html","252660ddc3eaebe1dca04aba1fc43626"],["/blur-effect/index.html","3036283d6baac3fd58be12014e94a369"],["/butterfly-custom-tag/index.html","c8457680b5e7f81b64e63dffe9ac01b7"],["/butterfly-plugins-faq/index.html","ecdcec4527e22bddc79de78b4718cd35"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","417bcefbaf47f8d701731bb54967b318"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","e1a493b07bab7124e1be7bd2217dc650"],["/categories/announcement/index.html","8daa2bc1a9d890d9c7d6b8d26b47da58"],["/categories/diary/index.html","02bbc32b27f29afb91d22fbab030568f"],["/categories/game-dev/game-engine/acg-creator/index.html","a78cb6aa0825696c50f5d80250e584cd"],["/categories/game-dev/game-engine/index.html","5430ac9296205009342f5620720e45b2"],["/categories/game-dev/game-engine/lightvn/index.html","c851fa220a72dc5a80e3ce5896cf8d1e"],["/categories/game-dev/game-engine/nvl-maker/index.html","ecc8df5b3b55d837f88ac8ca631b3cd9"],["/categories/game-dev/game-engine/page/2/index.html","e8c459664d37009a32fbf52b39089086"],["/categories/game-dev/game-engine/page/3/index.html","e7f553b41b139f5453cfaaa19ce13923"],["/categories/game-dev/game-engine/page/4/index.html","7ad90ff89d3f08d7eb6e94138511314b"],["/categories/game-dev/game-engine/renpy/index.html","7a145ae3b2839660429b225fd3729b3e"],["/categories/game-dev/game-engine/renpy/page/2/index.html","1e7a41e87cd9dd386206307d55d43d85"],["/categories/game-dev/game-engine/renpy/page/3/index.html","a3b66968f5386ec5f3c6f6f994cce640"],["/categories/game-dev/game-engine/renpy/page/4/index.html","0091c6f08bd2270f6194f24f03fb5849"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","0f21dedb256a1d89289452f1aa4f2b71"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","3f9a24561a3c2a3bc046781297c21d33"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","4b17a1540bbd0d401cbcab4498a7d71f"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","bf7aad9ca15af6dbf1ce9592a5a01e8e"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","bb148feb7727e9577574eb341459fa5b"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","95cb602b0f677b61a5712c125ecf9321"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","fde81a9e0baeccdbb2cd890b1c09f3b1"],["/categories/game-dev/game-engine/rpgmaker/index.html","1be50fa460903a6baaeb67eb52a20885"],["/categories/game-dev/game-engine/suika2/index.html","9f1812839a2ed16ad7c976527cc25b9c"],["/categories/game-dev/game-engine/tyranobuilder/index.html","4d29a64389afd4fbd62c0a98176ea789"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","ad908676da0298941746943655d89045"],["/categories/game-dev/game-engine/webgal/index.html","6e70abba3351a38aedb767eb47dbf028"],["/categories/game-dev/index.html","a513262e3735c953a4e4999677db294d"],["/categories/game-dev/page/2/index.html","e2aab48075d76dadf758261537a56783"],["/categories/game-dev/page/3/index.html","6a1a6103776d46192ad485e8338db2fb"],["/categories/game-dev/page/4/index.html","15cf50c36f1c399366379b34889db8f4"],["/categories/hexo/index.html","49f8b4b38cc938e51db05a2e3c783b7b"],["/categories/index.html","ab016a55d50e386cf2b0af6fc4ae2e53"],["/categories/material/index.html","408110a70b7a85781b88dea57cef92a0"],["/categories/update/index.html","93470ac0c47581be1203e7cbfe30915f"],["/change-according-to-real-time/index.html","a0d2ad9c6f3413ac198ced0e01f24bec"],["/change-character-info/index.html","7c73bc398fa15243519908e7d2566d37"],["/change-title-after-first-time-viewing/index.html","a383deffb62b224875d25164a92cdae0"],["/change-title-based-on-event/index.html","edcaa34c9e116919c3c4dad72763b197"],["/character-interaction/index.html","9e537e5970684df6df245cd6171d762c"],["/character-stats/index.html","b41b0c23525b1e31563851d8a7d6b801"],["/chatbot/index.html","8e773e33a576a9f55e09ea5fc7b5ef7a"],["/choice-time/index.html","7a9ed55ac1c4edff60584a090af99a76"],["/comments/index.html","92ddc1e77426c10a926d8f799124275d"],["/commission-info/index.html","2bf9389e99bc3a29cc3d06a4f79287d0"],["/count-login-number/index.html","7f31043c2611d1a9e60910f6045d1d5a"],["/create-button-anywhere/index.html","8e8734016e62f5f32e66df031db2270c"],["/css/eurkon.css","47214cec1811a7345ca085ac11beba2e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","15bafe15f411bbd3f5a9ffce5de7a134"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","50c7bbd5fa5abf0d524052d7435c15f3"],["/css/rightmenu.css","f73ad164c0ce2064140d752b32ed53df"],["/css/siz.css","6bc86f2ef859fd3516cd8129de99a81b"],["/css/swiper.css","0bfb76dad70e2d45dcada6aa8e4fee6b"],["/css/swiperstyle.css","173fd273bd48cb6652f4fdb084182ff4"],["/css/var.css","c1c4dcae27961dfcc20b4d43f37d96c8"],["/ctc/index.html","a5926b1d2d83668f0f3699742f6b23f2"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","89f7b7d4689b41edeab21e101375976e"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","c36972fc7a1c74867d14ee66d5c7e3f8"],["/custom-launcher/index.html","ba7a7708c902a7f3a5a11f343d0277bd"],["/custom-loading-screen/index.html","d46fa612d672cd97456d2da77f892ba1"],["/custom-mouse/index.html","8c086a0490c80d09bba3804b454b687b"],["/custom-music-room-screen/index.html","fcdc895b7393c41a84e77fd07ded3504"],["/custom-music-room-screen2/index.html","94e031ea6e1f820e8b9b8519ec5bb4b2"],["/custom-nvl/index.html","750ae70c3396ef6fb28b33b546009cf0"],["/custom-player/index.html","cd61d8a8d86344b6a8e65646d4991b9f"],["/custom-preferences-screen/index.html","5e33acf067c33c60d335e10692d95848"],["/custom-say-screen/index.html","8bd3938fb5acf723f37b961789f8e273"],["/custom-title-screen/index.html","8800f9406b73a8a2498c7c1e9a370bff"],["/define-npcs/index.html","788a0fba5bfaea60e6c97bee3f764381"],["/delete-save/index.html","18667a152b014f1ab0ebdf3c7e17ed92"],["/dice-function/index.html","54d98f4ab5d473626da2be5aeee397c0"],["/disclaimer/index.html","b604ee4b3a3aef6b3c39532b8d13d8bb"],["/display-immediately-all-dialogues/index.html","452c0fd70a7909604ed2e50f8d91865b"],["/display-real-time/index.html","972cd089d0b85fa8cea78636d0625cc3"],["/enter-name-screen/index.html","e525c1b1d639d64e1867f4e24f152ef1"],["/export-game/index.html","44faf34f5a522eb3eede8ca7c32e5642"],["/faq/index.html","97c3a7e8246d8a5aa0c0c70478420a9b"],["/friends/index.html","91c0a92970cb8d674a7e5ad9af3b70e6"],["/gallery-template-assets/index.html","439073147f1a9b3077d6a94851d7955f"],["/gallery-template-default-ver/index.html","310f7cc2cd4b9638653fc49addf6ec13"],["/gallery/index.html","75c71a83f9f0c08e40a39c375b8cd9f0"],["/gallery/photo/bg/index.html","8fe1ac1c8c89098cdf8a53cdedbdb78d"],["/gallery/photo/gui/index.html","6cdf647b011d95643da69399c77a9461"],["/game-only-text/index.html","fff2f0b4b128f82839e451501805a206"],["/gui-017/index.html","8a939568b0f4bd61614d2a38fe30e8df"],["/gui-vertical-002/index.html","e7c22c4d18dd2c5fca767bd2a9289a00"],["/gui012/index.html","163d9db6b0699a660e474ad53511c45f"],["/gui018/index.html","1cf8a66714cb1a8989089bc3bd73b47f"],["/gui019/index.html","dcb0730bf3108d67c4333726d7f0ddd5"],["/gui020/index.html","9bb55ec725a97f391457dd39c1ad181e"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","47a2543a423db58bc9ae150e78f54104"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","ca71332c771974d4d9b8727d49ff950f"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","c85d42e86cc89a96ceb09b51e90a0f10"],["/images-tip-function/index.html","b3a3ed61e2a773db7cee4a0d42ac38f1"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","d8c64f8b27a905087d8c5ca4f552077d"],["/index.html","af4d3aee5a2bd38e40750903fd8e6e18"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","94d3c592a07970dbe05821bad7fd3ec8"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","0fefd0eefc797925e49779ec98b05103"],["/items-sprites-effect/index.html","4f3b724279c6a85e8d80c85f3bf312db"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","3e955e1a1ce8624c8461a0824b0b122e"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","53f3ecb16ca2c340aa75347646744b6e"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","c3e2fb7d53d573a5390fe31e93d9c729"],["/link/index.html","12f189764c744bfe3db313d17cceb645"],["/login-reward/index.html","c2fd505288d735b7f6a12b1701bdda41"],["/make-butterfly-beautiful4/index.html","39b13aa6bf2a10882d2f0f429b6af3ca"],["/map-puzzle-system/index.html","d47abfd5ee2f6a8823d6b2012466d020"],["/maple-effect/index.html","31184137b61bbf44b3a8050363ae5e7d"],["/memberships-2/index.html","8593e61e06adfd5098ef935c695a025e"],["/memberships/index.html","7f2535ebb5af2b3cafde8f3455d10d1a"],["/multiple-language/index.html","19b7c73250d7a84ea8cc7981b189338f"],["/name-input-assets/index.html","45e2673fb4310f32b0b7975e81769de1"],["/new-year-event-2023/index.html","9b007650c2e844ed003a9fe98d1006f8"],["/newsletter/index.html","3053f730940794bfd360e7ce013a0613"],["/nsfw-limited/index.html","9a22cc7837a3e98765207710ba4e946a"],["/null/index.html","0e3214bb72e569d66e691f07332146dd"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","d5efaf64fbeac60037a35a7be6e2bf3a"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","caed37fb86e0473f840a92f8576c82fc"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","017b5e91c8dbd4b8bc6d15bfa5290ead"],["/original/index.html","d09cfe1e0e257bb7bd69c593c483b35c"],["/page/2/index.html","7ef5b643ba6fe0e19f5eb60f7f7c4944"],["/page/3/index.html","2f4f68c65ad53592b80d1c27549540dd"],["/page/4/index.html","a55f2309f9a2a2adbbfeb286826f48c1"],["/page/5/index.html","52c9182224f0d79a882704e2ce2476b0"],["/page/6/index.html","605e8262756488dae5848754f6445658"],["/point-pop-up-assets/index.html","baf9fbdfc476c3138b3ce7b121a5af38"],["/pop-point/index.html","1e4e9052edb2cf29f12c6298c839aef5"],["/privacy-policy/index.html","a5d7a13a6f9bd5b342cfc9726d460fa8"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","6207e4f3a9436fff8b3a4e5796796a12"],["/random-number/index.html","51ef88a6af95a2f33b4c19542ea6c1fe"],["/random.html","575659efa9c42d3ced353b027d24d754"],["/release-017/index.html","d818044b443bbfd1ab274eb2b1e33697"],["/renpy-basic/index.html","1a70155d709799ba87fa31025c39f161"],["/renpy-crash-glitch-effect/index.html","1caf4ff74d94c27504e0978a4ed861b0"],["/renpy-matrixcolor/index.html","cfe1acd9b56177f69abf2f003beefaff"],["/renpy-overlay/index.html","ce7e7a744cbf9713eb70cd3755a5c3df"],["/renpy-review/index.html","7f9a8509ea8abb7e159373a7e091a9c2"],["/renpy-typing-effect/index.html","bd06be181c57110c758fd7edca7a1490"],["/rpgmaker-assets-menu/index.html","65462ca63a0d869e9f9f9e8c537aa553"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","89200b2d7372fa1f004792d852845582"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","9f8526712e15560b14b86e335beda6d5"],["/sakura-tree-background/index.html","4b0de309a8b402bf6b6d7ffd404e9198"],["/selected-button-style/index.html","41d090a4ea4714c55b2c602fac8c4925"],["/service-worker.js","3c2229f529e6e21f4ec60d1277c7baf7"],["/show-variable/index.html","ad93fd81bf3d53c939a7f9341cc3d9b3"],["/side-image/index.html","11110b15926092227b46c3eaf326a95e"],["/snow-effect/index.html","859778818e7aa638420c9a61b49d1564"],["/speaking-animation/index.html","12470f820a5a521af88a6708250d6e4c"],["/splashscreen/index.html","77f9d125a7ca1648a2f09e5a35c8f859"],["/suika2/index.html","d32490209bfbc81897f5ff484fc851bc"],["/sw-register.js","154db3fa48451a0d51da0c8cbe30aa17"],["/tags/Hexo-plugins/index.html","7bfb3e01999dbcadf0bcb10ec6cb0e59"],["/tags/Light-VN/index.html","e99d4826113e4f21e547a5b0ebcea465"],["/tags/acg-creator/index.html","32d1b6c32e3e90facbd1342c838781ea"],["/tags/ai/index.html","a4d83cc19c4fb944b13ca4e36f5e3ab3"],["/tags/butterfly-beauty-diary/index.html","53e62a9e960e08e4b46a9db095772df4"],["/tags/custom-hexo-theme-butterfly/index.html","2c8d825a6488b787126cdc098509b28e"],["/tags/custom-renpy-title/index.html","e588ce13c7b41c015b1608aad2b291b2"],["/tags/dialogue/index.html","10c77bc5c6f1558885e7dab71f2363a9"],["/tags/effect/index.html","59bf89ad074e8981c3dca1f667836cd9"],["/tags/event/index.html","456f5c4b9f55a74d9baed20f5e41dee9"],["/tags/hosting-own-website/index.html","301fa6075304c215f01e71bf236b086c"],["/tags/index.html","7f183d4bcbc8e1b68e19f9fca0736411"],["/tags/itch-io/index.html","b195ec487fb2431f9bf534db18fd73f0"],["/tags/light-vn-update/index.html","f9eed7ad56a928d18263d8175ed87988"],["/tags/nvl-maker/index.html","834b7e230ba4afcfaee0753162a05660"],["/tags/player-related/index.html","eacbafd5b424223f3bc7a786ee28fbc6"],["/tags/pro-tutorial/index.html","1ae520f7b226c7fc6bc01dfb42a885fa"],["/tags/pro-tutorial/page/2/index.html","1d9b66d25fcff7d3d8ad27d7b8406c53"],["/tags/pro-tutorial/page/3/index.html","fc0e5592a6a23d4ab1a0c0d06a062370"],["/tags/pro-tutorial/page/4/index.html","a0808c7b1de0c1750ae64685c875d605"],["/tags/renpy/index.html","cc8ad067f85a0f45f18caa888735f568"],["/tags/rpg-maker-custom-map/index.html","a7a71ad95b7dce4aadac48ecbedcb376"],["/tags/screen/index.html","3ac77f741718daff284f091497a98732"],["/tags/special-function/index.html","f16452f8f69fc27f88fc0b610501bce0"],["/tags/suika2/index.html","7cde726e37e86b26a9f8a7eb3efbf571"],["/tags/tyranobuilder/index.html","0c1c4e3317a8dcc570f9eab9c3602fc3"],["/tags/ui-assets/index.html","6fda6427fb7252852a067c9eea805f4c"],["/tags/update/index.html","ed2898514c77d4646788b76d3e1761a7"],["/tags/upload-game/index.html","37dd4426320de794a3971567dcd7867f"],["/tags/variable/index.html","0794eabf7744f2b543cf39fd13f56120"],["/tags/visual-novel-maker/index.html","9867b0f7b613f1d79ffca5f4f9a18d1b"],["/tags/webgal/index.html","7968082ec5feea4041a5619c02c7b604"],["/tags/封面製作/index.html","3c1b65f63f5107d7d45dcecfe1ff5068"],["/tags/背景素材/index.html","01f32feb96883875d7c2acca643af5e5"],["/tags/隨機功能/index.html","45c0689d6eef685a23f70201c2b7e370"],["/test123/index.html","ba363b802779489e1c442b4bc592075e"],["/textbutton/index.html","e224dbfaf536eda4ca8010076737479b"],["/to-do-tutorial/index.html","69c05495223d79ddfc4cf23076e2199e"],["/tools/index.html","a278acc872137db42c60ce14294e76c5"],["/tooltip-function/index.html","0aa3f641b626d1165a642e9a8577c1dc"],["/transfer-to-hexo/index.html","26a74557278312e9dc8154f21a7d191d"],["/tutorial-update-history/index.html","7cc71e2c13c68a03e21c3cad5fd259db"],["/tyrano-name/index.html","bc616f64f3b33e2dcbdaafa0b3edc247"],["/tyranobuilder/index.html","0e723c6496fcb1b814a7ec08b4898345"],["/undefined/index.html","65720bfeb4ec80a46419946d1d51370a"],["/unskippable-video/index.html","f72886853a4c8350f0950b6711ba9dcd"],["/update-20221211/index.html","aec92ec1b67e92f61697526fc82bb4d1"],["/update-20221218/index.html","62e1b84371cd73a6738185baacb9ab2e"],["/upload-download-save/index.html","979bea22c60b2d84d10005c529798a10"],["/upload-your-game-itch-io/index.html","de20380e71f59bb24369d6c09f9a5275"],["/use-list/index.html","c8ec15dad60e18c0c650347917afa89f"],["/use-nvl-mode/index.html","b49bb02a09f01e9f0682501f652b4119"],["/useimage/index.html","d0c466a0a5358e70d71b60dfa6b9cc26"],["/variable-change-image/index.html","40348e5dbf2aad9db48ec6755cd975d3"],["/variable/index.html","2f0cc98530bf45d6a9040ea8b771fd89"],["/vibration-function/index.html","5765c1c47699c7ea803cb95ec8d08b0b"],["/vnmaker/index.html","7635d714b8281b1dc664b2128467f27d"],["/weather-effect-tutorial/index.html","52225305e95c0aad23fe104aa0c4196b"],["/webgal/index.html","a4d6ae113f421687cfe7a78df3c29cba"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
