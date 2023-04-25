/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","c4806e04572401ab1b845df55cdf110b"],["/2player-battle-system/index.html","118065ed09b1a997a652da9db75b9455"],["/404.html","1e65c2cbbd8466c7c2d82c4112aaf10e"],["/about/index.html","20704bd5e163f8a3d80e41ec557b3b2f"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","b8bcd2ce7fb737b0c4f728fef6ace7f7"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","a9ee8e35faef196c564eb39e7b84f8b0"],["/animated-title-main-menu/index.html","a3f398de7ef5ae7f261dfb2938a10af7"],["/archives/2022/05/index.html","2e356e9342e65734a4f6484d56047831"],["/archives/2022/06/index.html","b7d11cfc2dc3e9a91a239649dabad753"],["/archives/2022/08/index.html","8cfe466f5002cc5246128b41eef1fe9f"],["/archives/2022/09/index.html","11e1502cdd958f58e4f655f7fca379cf"],["/archives/2022/10/index.html","aff0572c32d68c797cfaeb6237a4b26f"],["/archives/2022/11/index.html","9e27f9f5eb6eea83ec7e880e9f90d3af"],["/archives/2022/12/index.html","21de8e61a9bbc094bb2507b1e76932e0"],["/archives/2022/12/page/2/index.html","0cc78e1faba223c72885907f2f6bc7b9"],["/archives/2022/index.html","9b467c455cd4868a8e7151c6cc2cb689"],["/archives/2022/page/2/index.html","eeaed88ed2426189b48a9be70e43b268"],["/archives/2022/page/3/index.html","58a79f5030b6ce584aba860c7c667b65"],["/archives/2023/01/index.html","a7f34e1bc4b8601bcdb21a77f3ade60b"],["/archives/2023/02/index.html","6b03cabd9371326cff74755c6b241eda"],["/archives/2023/03/index.html","45d70eb0cebe4c86994059e0093bbfa3"],["/archives/2023/04/index.html","ce286d4a4c6b6ec5b09bf23262379b4f"],["/archives/2023/index.html","1b6c00b64ac6d13c01ffd77d03a453e9"],["/archives/2023/page/2/index.html","3d7378a366cad0e42a2a54294f7ee23d"],["/archives/index.html","b016dbcb05acdf93098f1a3c9627212e"],["/archives/page/2/index.html","83b063a2c1ee4148cd14f09a7b473dff"],["/archives/page/3/index.html","cd86acc031492f056d6d5ab2ebe5b58a"],["/archives/page/4/index.html","6d572e439299763df6d05566efab037f"],["/archives/page/5/index.html","306e0db58ff3708bba5c22f3ed57deb8"],["/artitalk/index.html","5456bcfdb6d5f6b5a9e845ec4ab3c2d2"],["/battle-beautiful/index.html","f516fea422933682e43340fe148c37d9"],["/blur-effect/index.html","a949fc2f33c7334b15977e237265c6b6"],["/butterfly-custom-tag/index.html","9cd61033abf11293827cb8f0f20660da"],["/butterfly-plugins-faq/index.html","7ab5b64dcc9b104faa0296629bc79b80"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","bdd04785752aa4f89169768d529f8a50"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","331aa4ee3916041201284774a10d48e9"],["/categories/announcement/index.html","7ea6529b60b0e752c0afc5a397fdb9bb"],["/categories/diary/index.html","0d47da4a31cfe5c78fc9ef6c965e1d80"],["/categories/game-dev/game-engine/index.html","2f284d927bff981686f4fa3686eda78e"],["/categories/game-dev/game-engine/lightvn/index.html","24666eb60ed206b5beb0542046b58ca8"],["/categories/game-dev/game-engine/nvl-maker/index.html","7bcb54532093cdfa22bb58441a46f461"],["/categories/game-dev/game-engine/page/2/index.html","37d20796ce897d95ec85a687115a47e1"],["/categories/game-dev/game-engine/page/3/index.html","fab22f6816622076870c8c7e91598e5a"],["/categories/game-dev/game-engine/renpy/index.html","ac18d6d4159a8c577ecc9b3252dd1c9f"],["/categories/game-dev/game-engine/renpy/page/2/index.html","8c30028ef035ed9dd6673ba241c303b1"],["/categories/game-dev/game-engine/renpy/page/3/index.html","6ba45ab3573484dee5d2454e70a75486"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","47a7764f55515a6180499130e929c57f"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","3139f2e05de1a6fefe8ac89451ba154c"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","e9438aa2504e2425720b3cc393ded018"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","f4e8bd481de9b61c8dd2fb2abc8884b7"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","e736799ecbaa00f7fd389be1347a9f96"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","f7cba28408b6974214e3f46d87b05bcd"],["/categories/game-dev/game-engine/rpgmaker/index.html","00c6bcfacaaf58c74a15e7bf963ff688"],["/categories/game-dev/game-engine/tyranobuilder/index.html","6a6b9b38f08135108b6a819646824f33"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","1952cc89c3b6ccaad0be8591cb5c7a4e"],["/categories/game-dev/index.html","f7179ae88bbd5bd1d5188dd75660fbae"],["/categories/game-dev/page/2/index.html","d3aa892f7759f8621fa66741cdf26011"],["/categories/game-dev/page/3/index.html","f42c4b61b0a402071f8fe93f357baa20"],["/categories/hexo/index.html","491bda9f16f1d90a801518f1db64d02f"],["/categories/index.html","33bfbb75f483d0ac6836ea18a272878d"],["/categories/material/index.html","2cec9e57e8800c8ebcc9d0d68b358af9"],["/categories/update/index.html","c6a723af72c98d5cf4dbc9b849185e86"],["/change-according-to-real-time/index.html","44bf9f2414b7ba911e0576b4d37dc43a"],["/change-title-after-first-time-viewing/index.html","ff64a720bf87edb0a38f935e0da5dc3e"],["/change-title-based-on-event/index.html","848d373dc5454e46f4a36a9153336209"],["/character-stats/index.html","602873ef5b8fdf4d45ab112e0e0c4dd1"],["/chatbot/index.html","5f6175f3a35e272386b73ca995f91a1c"],["/comments/index.html","cc030d774d79916935ba9c278d17f75a"],["/create-button-anywhere/index.html","02b1c252d9079b5c1178f874c2d823c7"],["/css/eurkon.css","509153d734e6445e96e3310b3cb418b2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","2ffcf5e0bc5c643e00a233ced7c286e3"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","94a5fc07395e51a4201bfdb1d378181d"],["/css/rightmenu.css","6488ab4ce4534c91740bc66b645ba546"],["/css/siz.css","0cf0d4d2a58cb9cdd2a64c667eb85240"],["/css/swiper.css","254120a5c89b6e22d076ee29472b83d8"],["/css/swiperstyle.css","ac7a4115d9a04eed80bd10493fced114"],["/css/var.css","a1fd1d4b1fb63fafed5d545f73ad56e6"],["/ctc/index.html","ae1c0f7b5b086324ec684bf6b5ccdb67"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","30df05735c89fae5f4cd32a792e406fc"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","b77970dcdf8fc63f22d9dfbca351175f"],["/custom-loading-screen/index.html","65ab6273465ed62d7cc2dc794ab5479b"],["/custom-mouse/index.html","7936bbb88b6c2ca6fd786d11eb9bf876"],["/custom-music-room-screen/index.html","93a3a9c17b2748cf4e8fc4d5923261f7"],["/custom-music-room-screen2/index.html","5706f823f3e07174fe135ca5c09ce156"],["/custom-nvl/index.html","bd5e32d096f61bab3978a011e362321d"],["/custom-player/index.html","1625c800b6fc96129171a910789b215a"],["/custom-preferences-screen/index.html","a4b3c7e5a7c3580b11d333d3ebf7c0ce"],["/custom-say-screen/index.html","17873bf55bfce8f13b048a76e7ce2e7d"],["/custom-title-screen/index.html","a6376a3258903be51457957f43b8a4cd"],["/define-npcs/index.html","d6d776f9f4ffb9880cdec9b78bcdb5c0"],["/dice-function/index.html","7254316fc7e06978b93f7bfff78f52b9"],["/disclaimer/index.html","b59a14c97e11b5fc5b305290e1d1a20c"],["/export-game/index.html","d1a5ceffd1912b82bafde39db5c61a75"],["/friends/index.html","073bee648b0e319ac403cb4dd4386f76"],["/gallery/index.html","bd8186ea42b36f7651072664657d462f"],["/gallery/photo/bg/index.html","9f6ca67eab525366d4e669a3867b2a9c"],["/gallery/photo/gui/index.html","1c6276e1aa17d5eb31cc6df9b22e04af"],["/game-only-text/index.html","eaa3bd021db5ea0d5f8e4de631c90afe"],["/gui-017/index.html","fd43159f55d46d0b129bbdb23684a39b"],["/gui-vertical-002/index.html","73d3d22e5c4b41603d74e3ef10cf0558"],["/gui012/index.html","5f2a1e1b2d8d1c077765e92254d0ebb1"],["/gui018/index.html","d09bea7b0952a06c615c99beb3d251c7"],["/gui019/index.html","663180492c85e19fe7b30d5488bf25c9"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","a321ef3926647e7fecaf3d121ed7237a"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","54ddaefe51c683d7412550e745a0a506"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","6e252a529fd6743fd397aa2c8541623a"],["/images-tip-function/index.html","168952e176b1c6982c50da0b42f8e2ba"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","3c274fe5017d9a2873afc84fd65c9e6e"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","e060609b608fcd83aba8b78f6d4e5846"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","12694c4e688e0249ef00d05c923bfc1b"],["/items-sprites-effect/index.html","5cbadac77c63d990d5bb57000888d6b3"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","cbd81c87f24d896c194ece0b138a4d57"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","b6d295cf6487fd981a3df721a7cdb88a"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","a522890ef1b527aea71e9d5c3995d2cc"],["/link/index.html","0c81ec02b9bb7e763c1dacfdc5b641f3"],["/make-butterfly-beautiful4/index.html","a3d15067cac8edb80ac6567379842bc7"],["/map-puzzle-system/index.html","60f5e2184c7a20187cdac8e1124a7a6c"],["/maple-effect/index.html","512e001d4d1b3f5badaeef537f4d17f3"],["/memberships-2/index.html","4a16a989f6f271d059cf78a52bf83bc9"],["/memberships/index.html","6e17f40417dd024a9e77d57f3a7055b4"],["/multiple-language/index.html","755a9ed58d1842d3458cf29e1a546234"],["/new-year-event-2023/index.html","ed5b4bab816c8cee046f7dae179110ec"],["/newsletter/index.html","9da813613a13ee0a4adcd2aa3c7219dd"],["/null/index.html","9cdedb05a8c9db16fcd6dbf817f2462d"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","57742f5ef46507e2db3bf1cd46c4ce92"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","330edc9ad603d4081deb53fef4f8e3a9"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","a451eefd6d39aaf3e067fa87c9582433"],["/original/index.html","0a3675aa534aa36a9cb8a0feb4e8ae8f"],["/page/2/index.html","676045104633405d4f743f4436bd6af9"],["/page/3/index.html","03dd157165c828f2ae63bd271ab2ab6b"],["/page/4/index.html","9371cd697496ca2d02d7de54d201e43c"],["/page/5/index.html","21ac06585b0d07f4c491167940a9e946"],["/privacy-policy/index.html","0b29517178180ab17268a3b80a35c288"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","620bda0eb6717bc8d53e8c130d39d278"],["/random-number/index.html","67cd4ef0e8091eb87e007bd26b987844"],["/random.html","9176d181227c0bcda630090c56944a73"],["/release-017/index.html","9feeb80b2210f8a69ec72aa1a2fe5473"],["/renpy-basic/index.html","945fa95a07c1651e378758c4071877a2"],["/renpy-crash-glitch-effect/index.html","af3f18e397a0e842c2ca3de75c8fd668"],["/renpy-matrixcolor/index.html","5dc1debb8342f59a0eda1b34ba58426a"],["/renpy-overlay/index.html","1f28851fa88d4329a25853ef1b25b955"],["/renpy-review/index.html","29cf26e4a557ac6a0df0faf99e971281"],["/renpy-typing-effect/index.html","5171beeeb07498b00251f46c734d65a2"],["/rpgmaker-assets-menu/index.html","d90c25a8ff76ebb27a8375b3e016a980"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","469ffe707885f3e331d630d5e38b64d8"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","32f436e40f58f0ea6fdd39c82c8820d7"],["/sakura-tree-background/index.html","5fa8980e3c40cced28e339db73d67f0a"],["/service-worker.js","76bd9c7c33033ced9f6f79445f95bf58"],["/side-image/index.html","e134ef16d7dbf886ea5b1af95c02c96f"],["/snow-effect/index.html","cfc3898a6e6b8aa83ed0bfe77282c403"],["/speaking-animation/index.html","2e5e091e9967feff46425b4f5223e3dd"],["/splashscreen/index.html","08ba54974188e558bf58a2d1c65cf2aa"],["/sw-register.js","3b5182c5c3d107bc6b7dab362ea2a95d"],["/tags/Hexo-plugins/index.html","b0c60c6c734d58e1e27c26b548a88312"],["/tags/Light-VN/index.html","b8b23a355a3f41587ad8f5e3a9da11e1"],["/tags/ai/index.html","dfd8642dcdcc24532fbc05a6506f6513"],["/tags/butterfly-beauty-diary/index.html","800c9c5b1d1fe8434453cc67811d41d7"],["/tags/commision/index.html","51f1a4b0c23bedac850ceac39aecaddc"],["/tags/custom-hexo-theme-butterfly/index.html","fbcbc1f98bf7677c6e27942bbd36c77d"],["/tags/custom-renpy-title/index.html","22157760e93314d60ec3f447897726a5"],["/tags/dialogue/index.html","50afd99116c666908d1d84431614defc"],["/tags/effect/index.html","d32aceebeef61b3c33135626e760efb4"],["/tags/event/index.html","7513c11eab0b7109d0ab28b6a3718e2a"],["/tags/hosting-own-website/index.html","da2fa9eb48c441e31b5ce75c3d156ff6"],["/tags/index.html","3a1505df1992f769e4bcc1c59a4fa900"],["/tags/itch-io/index.html","0f948b28e53c7d92aa7b798dc1e6befe"],["/tags/light-vn-update/index.html","53dee8b009ae3a855bacd5b1b5226ae4"],["/tags/nvl-maker/index.html","4da67845d60aa00e0adb0e1ab6a936ef"],["/tags/player-related/index.html","2031254206a6e4145747cd66bfc23ebb"],["/tags/pro-tutorial/index.html","1e95683758d804e277be42289e7fd61a"],["/tags/pro-tutorial/page/2/index.html","478f6d457977dfe31ab425244718bea9"],["/tags/pro-tutorial/page/3/index.html","61e1b2fe16d4c510725deea23b83a6f0"],["/tags/renpy/index.html","550e668adb01b74435bb604a775ab420"],["/tags/rpg-maker-custom-map/index.html","1bcc5715fd3ac899febcff62296ced0b"],["/tags/screen/index.html","2e16d6df0560fdde4e7130aebbfae523"],["/tags/special-function/index.html","d674edfb2526cfa7ca1eeb5a5070e523"],["/tags/tyranobuilder/index.html","e0dfbac9e05fa59b19131fa8f43f4f07"],["/tags/ui-assets/index.html","58a15a64039923bbb92a7528ab02bd8f"],["/tags/update/index.html","93b5b1b75d1a0bba943fe444b5d407e6"],["/tags/upload-game/index.html","6aba376ee76182444660a8acaa7a1120"],["/tags/variable/index.html","67c5074404c0bb24ddf11d98d45623bd"],["/tags/visual-novel-maker/index.html","db9fa964d6a5e1cda88a5cbeb9e330cc"],["/tags/封面製作/index.html","0873ec4b1cd88a613e4e066323f786b0"],["/tags/背景素材/index.html","31c1effa5b5d085c9531041ea4f5fa46"],["/tags/隨機功能/index.html","c36e2a140bf2c8185f6e19a17e95a14c"],["/test123/index.html","7aa7dc85773445cfe3ef9e6f6a0e5e2f"],["/textbutton/index.html","9646691daf0c40129dbbf5e0324ec16d"],["/to-do-tutorial/index.html","a87cb6ff72ed31822bab6415ad7f9621"],["/tools/index.html","ceb50e42b4da6e0b073518b0c1c5bd6b"],["/transfer-to-hexo/index.html","8e70adca382416eae347d88f8fed2133"],["/tutorial-update-history/index.html","1ead5d522cbe9bc3dcae44e85134089b"],["/tyrano-name/index.html","f0a27c49cdc70ab23c16ced5342b9ac2"],["/tyranobuilder/index.html","b20bb8ba5edb23f10cb74914d345f34e"],["/undefined/index.html","b91782d3bdc646d222bb4735adeaa9f8"],["/update-20221211/index.html","9db83b59fb4ee8f9d9bc408d2c20a1e7"],["/update-20221218/index.html","0cde09a84bb19e35a9ac9701504c3eec"],["/upload-your-game-itch-io/index.html","e737347bade8adebdede5307e7579b85"],["/use-list/index.html","0930631363eb6e06910eb908cd082c88"],["/use-nvl-mode/index.html","955dba4aaa081ac29b2d9f7c3e40169d"],["/useimage/index.html","8d6a4cf59d9428f85477babacc2228fb"],["/variable/index.html","ba03e81d21f5e3c18c4ec132003e734a"],["/vnmaker/index.html","1847b54d00c1605125bc35aca235c7c7"],["/weather-effect-tutorial/index.html","c339e40f1ceacc75aa70c862a4c17072"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
