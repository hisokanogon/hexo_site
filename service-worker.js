if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const f=e=>a(e,c),b={module:{uri:c},exports:n,require:f};i[c]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"0f4d7996386ca3b9cca24d6a167d2b81"},{url:"2player-battle-system/index.html",revision:"f0b7480d6a0663bc7af12cc2081075e2"},{url:"404.html",revision:"d74204864bc4dca2dbd5bf2d296b8bb1"},{url:"about/index.html",revision:"ef6cc49876abc55626e23cdcb163e98f"},{url:"add-artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"add-artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"add-artitalk/index.html",revision:"958ff86d11cc39640e531acd62e1c5d4"},{url:"add-artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"add-artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"add-artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"add-artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"add-artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"add-artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"add-artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"add-artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"7b716c1eae3af28a75952ff6b54d4b2d"},{url:"animated-title-main-menu/index.html",revision:"13167eeed86d2625a415648dfed67596"},{url:"archives/2022/05/index.html",revision:"0d71a2342c32762e22677f64a9d8f3d1"},{url:"archives/2022/06/index.html",revision:"b3e5d4dd5b307c93c6e18513103b4f8f"},{url:"archives/2022/08/index.html",revision:"1d76c8832f67eb234c86d2b0717ab95b"},{url:"archives/2022/09/index.html",revision:"39d2791c5e0b1cfe98fe7bb60792853b"},{url:"archives/2022/10/index.html",revision:"c076f4fc9fc41757d736c6663176930b"},{url:"archives/2022/11/index.html",revision:"36a8fbef9620dafe976fbedd3ada6981"},{url:"archives/2022/12/index.html",revision:"41ca6183d3cfff7b70e3218f1c54188d"},{url:"archives/2022/12/page/2/index.html",revision:"3aed90af04fab910d85ae243286339f2"},{url:"archives/2022/index.html",revision:"16c94c95ccc9cf528f93264be2c1b521"},{url:"archives/2022/page/2/index.html",revision:"6065b81a4dcc33ebbfa0f84906007fd8"},{url:"archives/2022/page/3/index.html",revision:"3e626d0cff9df70ead3a2b6e4265a76b"},{url:"archives/2023/01/index.html",revision:"e541823f336de2b94d4fd766b7683c1a"},{url:"archives/2023/02/index.html",revision:"9494ec67f6438c82c57eceaa1cd3c902"},{url:"archives/2023/03/index.html",revision:"53634b1f77ecb86cb3a09f9bbd9a355f"},{url:"archives/2023/index.html",revision:"129bf97c31d53d9237f0aec09e3a1ff9"},{url:"archives/index.html",revision:"46b1fe37a4abe78b9d29969fda218d9a"},{url:"archives/page/2/index.html",revision:"3be5ea97a5319d2b64bb5f1731800457"},{url:"archives/page/3/index.html",revision:"dc9a656b859d91ae8c820324a2a7af94"},{url:"archives/page/4/index.html",revision:"9ec9e4a1feb05c1662e60755da9b2cd2"},{url:"artitalk/index.html",revision:"c65ea4249df31917252d2cd3c3db7a13"},{url:"battle-beautiful/index.html",revision:"ab09aef80019471a4806f981b5b8fac3"},{url:"butterfly-custom-tag/index.html",revision:"20f3e85b1591ed68b16693c1ac25cd3e"},{url:"butterfly-plugins-faq/index.html",revision:"3fe1c9166eb84340a25ac1cc58efc124"},{url:"butterfly-ui-change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"butterfly-ui-change/index.html",revision:"ed20629f2ff84f94e3ce9c99f405aa33"},{url:"butterfly-ui-change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"butterfly-ui-change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"butterfly-ui-change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-ui-change2/index.html",revision:"c2e082fa879dcd9f5f5bd686cd01772e"},{url:"categories/announcement/index.html",revision:"eb8a6588bcd44753441b704d2ef127f8"},{url:"categories/diary/index.html",revision:"8f846b3bb5d4571cf706277deff59a6f"},{url:"categories/game-dev/game-engine/index.html",revision:"e9abc8d2203e412aaaede8edd810aaca"},{url:"categories/game-dev/game-engine/lightvn/index.html",revision:"8be128be00533641e180741476436bca"},{url:"categories/game-dev/game-engine/nvl-maker/index.html",revision:"b9eeed55a48b1f0f35ce7554f7f75641"},{url:"categories/game-dev/game-engine/page/2/index.html",revision:"9160e74fe22a2ae3743707eb4545f0bb"},{url:"categories/game-dev/game-engine/page/3/index.html",revision:"5c92892e902aec16faf837b3c70a0042"},{url:"categories/game-dev/game-engine/renpy/index.html",revision:"5a224580b707d67aa91052170e14f372"},{url:"categories/game-dev/game-engine/renpy/page/2/index.html",revision:"3fad2c4653d4e784a3a7762b5e079b0e"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/index.html",revision:"3cb6294d410cf5b971c1692a44383216"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html",revision:"56888230adb402b96b77c2763d296d9f"},{url:"categories/game-dev/game-engine/renpy/tutorial/index.html",revision:"95d5b5e7f65e98e557ee1fa3f67dc9fc"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/2/index.html",revision:"9287d6337dc7ccc50e5595dad03c32ff"},{url:"categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html",revision:"02d3afb8d80aa96de2f85c87cbb1bd39"},{url:"categories/game-dev/game-engine/rpgmaker/index.html",revision:"0c9569619d71dd57752339e6da91a97e"},{url:"categories/game-dev/game-engine/tyranobuilder/index.html",revision:"f3cae236bfd072a19ce58cb5314e6ba7"},{url:"categories/game-dev/game-engine/visual-novel-maker/index.html",revision:"1ba3a271f1196f220528670433f9163d"},{url:"categories/game-dev/index.html",revision:"57c5f62eb32d272342892351b69c05bf"},{url:"categories/game-dev/page/2/index.html",revision:"9937ff3f96988e627616c8deec3c5099"},{url:"categories/game-dev/page/3/index.html",revision:"9f56b4c8a4cedf52cc72507772a5b19b"},{url:"categories/hexo/index.html",revision:"8625151eb3350b6aee9f7fe1900be425"},{url:"categories/index.html",revision:"e06eeaf4e5e607293c97c00460ecf85c"},{url:"categories/material/index.html",revision:"9f03de10dbdff1c497b248dff66c15c5"},{url:"categories/update/index.html",revision:"cd05bda6400c7ccfc78cd0d77377298f"},{url:"change-according-to-real-time/index.html",revision:"46e1a9612c7cda494aeb63a2f61dd8f2"},{url:"change-title-after-first-time-viewing/index.html",revision:"7f80886df334a77e0da094e63fd122fd"},{url:"change-title-based-on-event/index.html",revision:"8355ede8a535f0c77191e222a9777cb3"},{url:"character-stats/index.html",revision:"89a59fff3b3f96655fe3e7c33debb131"},{url:"chatbot/index.html",revision:"b51379af83cacad7abfff2852bd995a2"},{url:"comments/index.html",revision:"ef9383df1b9634e20c51091989dc0482"},{url:"create-button-anywhere/index.html",revision:"8b782051dd9a5c3e877e71c604f21922"},{url:"css/eurkon.css",revision:"13e55fb6cb5cb52c43229c49c2cf2ea8"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"0b8dade876b672c0c65d166cf47b2ac0"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"ea2d5436033033b62a0248588afd1e50"},{url:"css/rightmenu.css",revision:"4db57c773d298f7b042e064c57f522fa"},{url:"css/siz.css",revision:"a0393d144181b57063fdde0492ad4b6b"},{url:"css/swiper.css",revision:"3077eda4d550919ddca642e3b6ae9d75"},{url:"css/swiperstyle.css",revision:"879836fbc945a1fd54dc75a2ed6d1f76"},{url:"css/var.css",revision:"49c455ff2a8355bdae3062b063bdf9f8"},{url:"ctc/index.html",revision:"93f5204893aca6f94e75b88fe62dc59a"},{url:"custom-css/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"custom-css/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"custom-css/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"custom-css/index.html",revision:"29b9283fe1acc5bd8c9ca8d03efd50cf"},{url:"custom-css/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"custom-css/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"custom-css/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"custom-css/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"custom-css/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"custom-css/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"custom-css/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-gallery-cg-screen/index.html",revision:"668bcf4f94876eab6d01972a80f74570"},{url:"custom-loading-screen/index.html",revision:"858e35f6a6ee2747cae0de8661dc639f"},{url:"custom-mouse/index.html",revision:"5a717295fd295c437a2e54423991342b"},{url:"custom-player/index.html",revision:"c8aa6baf2948df6859a3c9ffe9311e9c"},{url:"custom-preferences-screen/index.html",revision:"5f92848378004b339c70556eead2da0e"},{url:"custom-say-screen/index.html",revision:"c8740199f69e2cd87934cdfceae7bdb2"},{url:"custom-title-screen/index.html",revision:"ded5835cf6e80605deb8a325a4356ebe"},{url:"dice-function/index.html",revision:"d9e712fe702b70d85a6df2b73c8e8e69"},{url:"disclaimer/index.html",revision:"a931a805ba01c3781f438cf309191145"},{url:"friends/index.html",revision:"1aea434330376939685e0097121fa89d"},{url:"gallery/index.html",revision:"6071ceb47fdbdb3268a1e219c983b1b4"},{url:"gallery/photo/bg/index.html",revision:"eb767379e9c73e22e959eb55803c9186"},{url:"gallery/photo/gui/index.html",revision:"86873eb75d303dd945a5fcc6091037de"},{url:"game-only-text/index.html",revision:"70da0ce874fd96733f1beedf30e160a0"},{url:"gui-017/1.webp",revision:"aa12c6f819750ab701a4757d4dc305d4"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"2d8e8806bb6f8d6fbc3840d7854c0c93"},{url:"gui-017/index.html",revision:"a1419abaf6900c1b4c4ee222e9f3e448"},{url:"gui-vertical-002/index.html",revision:"5894a061711dd659ee883b9284f8383d"},{url:"gui012/index.html",revision:"44f32b641be1cb5f5495cd925402369e"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"5ba89da976b848b477f761dd494cd7ad"},{url:"gui018/load.webp",revision:"ea9228dd37e76ce9f4e2c153fc4e3db0"},{url:"gui019/index.html",revision:"40a99f69ea1ecd1e845497441e9ffe99"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"dc96da0ddf565ca67c3aa6d34d5b1e28"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"hexo-custom-mouse-disply/index.html",revision:"51176a70b133db2daa3f58bf0e7945f5"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"614a1469de71e0b6cc49829d64fea9d6"},{url:"images-tip-function/index.html",revision:"4754c10d70a2e8b0cf139b53d7e71263"},{url:"images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"images/pawicons/32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"images/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"images/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"images/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"images/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"images/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"images/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/favicon_16x16.jpg",revision:"7170a7a0a8983fb2790e28c864648f5b"},{url:"images/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pawicons/favicon_32x32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"images/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/bmc.png",revision:"40b98209d9deb3e69053d4a559cc8a30"},{url:"img/cover/1.webp",revision:"75c4ca0e23ea27798c951e79cf118d88"},{url:"img/cover/2.webp",revision:"37a1fa535df37e8c5cf01def24fc9eeb"},{url:"img/cover/3.webp",revision:"ec6c922dd423211df47e8cd79493aacb"},{url:"img/cover/4.webp",revision:"896796dcf0a2b1f714060e1300972432"},{url:"img/cover/5.webp",revision:"06b21ba7e9d00ca7768252c51b3854af"},{url:"img/cover/6.webp",revision:"7e12d98e2bf9548379c39beba3a222d2"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/gib/1.webp",revision:"5be4619a8cf8b66551dedb272413d09d"},{url:"img/gib/10.webp",revision:"83a37dce9e5cfb132e1f5cc69ce4a758"},{url:"img/gib/11.webp",revision:"e0343acb272483692d9274223987cf19"},{url:"img/gib/12.webp",revision:"b1ca8b649c15f1e462a5b4c0b60f0d9c"},{url:"img/gib/13.webp",revision:"53e919448c1fd302d4ba93cf3adfaf2b"},{url:"img/gib/14.webp",revision:"a02f67a68a66dde2fa9430179dc5a092"},{url:"img/gib/15.webp",revision:"c98583025ce168f380b1a8cedef1f98c"},{url:"img/gib/16.webp",revision:"ae6ad26748f14367e42c298eb896e5e1"},{url:"img/gib/17.webp",revision:"11454179dca9c7538321eb5c7ddb62e5"},{url:"img/gib/2.webp",revision:"ce48b5614d628d9d5bebd2f5805cd038"},{url:"img/gib/3.webp",revision:"dd7dd4b6e72f1261f67cb61f78d40d68"},{url:"img/gib/4.webp",revision:"47498d3dea6081830aee230d468c960f"},{url:"img/gib/5.webp",revision:"0444f75e417e402551f7f2e397c4e6d8"},{url:"img/gib/6.webp",revision:"32eb9f3a488fa490bdc4a97a3b56bc47"},{url:"img/gib/7.webp",revision:"6335bcc03fd830ffff2b5d50bcf27674"},{url:"img/gib/8.webp",revision:"6741566622ae6db01c808f41626127c8"},{url:"img/gib/9.webp",revision:"738676086f5f13fb0b68d51f9db9536f"},{url:"img/gib/mononoke/1.webp",revision:"c1cecf43a07dd38a209755e5b284a97a"},{url:"img/gib/mononoke/10.webp",revision:"ed2e76d87d11c77c6b36c872372b9cbe"},{url:"img/gib/mononoke/11.webp",revision:"9220ccd14d4b5235b7b969587233164e"},{url:"img/gib/mononoke/12.webp",revision:"f059becb15d5c3844512f268564ed2a7"},{url:"img/gib/mononoke/13.webp",revision:"63012d48bf56e366bfb4b97707e62392"},{url:"img/gib/mononoke/14.webp",revision:"8b9025ca54749a1abaf648ae875380cb"},{url:"img/gib/mononoke/2.webp",revision:"fbff6e2629aa09b5129ef92315d9ecfa"},{url:"img/gib/mononoke/3.webp",revision:"34bc5b1ba588eb602f8c5e53eb13724c"},{url:"img/gib/mononoke/4.webp",revision:"ba858a1ff9036d595058b1c71876011c"},{url:"img/gib/mononoke/5.webp",revision:"7e826ccd99e889e61a966bbde6eb9b70"},{url:"img/gib/mononoke/6.webp",revision:"3cf011aabb2bef762e9feab2ca4a2336"},{url:"img/gib/mononoke/7.webp",revision:"775329857ad8cadac595d2e18dee2372"},{url:"img/gib/mononoke/8.webp",revision:"c5395b806757462a313078b6ae6c19de"},{url:"img/gib/mononoke/9.webp",revision:"1fe8c781e3c831a8321d1ef20f737aff"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"img/pawicons/32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"img/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"img/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"img/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"img/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"img/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"img/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pawicons/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_16x16.jpg",revision:"cd3428135e94f5a83aadb8d5ced778e6"},{url:"img/pwa/favicon_32x32.jpg",revision:"1257041ac1eb102a40768d4bfeff16a2"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"index.html",revision:"153217f059349f44b5e473af8f067257"},{url:"install-use-valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"install-use-valine/index.html",revision:"4f3c67ec10315b3f2b10436a96023d44"},{url:"install-use-valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"install-use-valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"inventory-system/index.html",revision:"e46dd3aba56d8da4d6ecd55fde0f93cb"},{url:"js/countup.js",revision:"5f2f77ec867d7f85d3bdbad2bf804fac"},{url:"js/main.js",revision:"80de3021a5d1ba2ecc68d332b284c836"},{url:"js/rightmenu.js",revision:"e4b3044aa999f5c624cb1432ff11d15d"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightvn22-10-03/index.html",revision:"bf18b9c56504530f3874b2bda0bb07fc"},{url:"lightvn22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightvn22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightvn22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightvn22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"lightvn22-11-24/index.html",revision:"8020849379b536398f879a4e10976d05"},{url:"likebutton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likebutton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likebutton/index.html",revision:"dd0bd3f7f49e61cc949d372f668e0c58"},{url:"link/index.html",revision:"958b8160a288e276d8fbb231c5398066"},{url:"make-butterfly-beautiful4/index.html",revision:"6d81929a0f8d6672f500976f46c993be"},{url:"map-puzzle-system/index.html",revision:"eda3c9aad61667fe37d1716dc352a40f"},{url:"maple-effect/index.html",revision:"1bad87343823ea324abf0871a0a0d203"},{url:"memberships-2/index.html",revision:"94247e9fb7552ba9726361d18549229e"},{url:"memberships/index.html",revision:"15bb599eb55b134e339303ee144f2e3a"},{url:"multiple-language/index.html",revision:"f80eb3aa18832925a2155e27a03b9162"},{url:"new-year-event-2023/index.html",revision:"ed88100482a98a25dc98cbc19bffbdf1"},{url:"newsletter/index.html",revision:"365d6344fd64a475a558b5ddc25cb468"},{url:"null/index.html",revision:"446d33e6fde8d85b8fdc75ff691c98dc"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"b2a11abe2d8f25e78483fa57975669c2"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"openchatai-renpy/index.html",revision:"72129ec9a55180a8899cc30c8a04fd95"},{url:"original/index.html",revision:"29353ba2a261368f97b24f9acbd71b1b"},{url:"page/2/index.html",revision:"bb05e6c21f5209db17c1f03f89e4b29e"},{url:"page/3/index.html",revision:"2b383689fab3eeceffcee548a9f0590b"},{url:"page/4/index.html",revision:"7396b4931b48c97c4aafd310393456ee"},{url:"privacy-policy/index.html",revision:"4e1e17f00c82aedab746a093550a4f69"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-dialogue/index.html",revision:"0231dbc594ac30d064f463145dfb024f"},{url:"random-number/index.html",revision:"0e8db657eb6409f0262e5d7e58216635"},{url:"random.html",revision:"2092b8e54a1f3796b3c5679a90b7390c"},{url:"release-017/index.html",revision:"1ae14a14cfc7d19ab96c7ff10102cb41"},{url:"renpy-basic/index.html",revision:"a652030efba8143ff2821fcf976ea1ef"},{url:"renpy-crash-glitch-effect/index.html",revision:"7207f6651c2fccca91051d2830131ad5"},{url:"renpy-matrixcolor/index.html",revision:"08efde43b3815794948ddb9b3b9018a8"},{url:"renpy-overlay/index.html",revision:"05dc623c2f1b218d713980cff37a7fd4"},{url:"renpy-review/index.html",revision:"260fb5c84eac1eade9356d03b0e5b21a"},{url:"renpy-typing-effect/index.html",revision:"7d073dc4ca4aed0f6e02531e0fdb4392"},{url:"rpgmaker-assets-menu/index.html",revision:"8869b34d57aa3130c66787114748bc31"},{url:"rpgmaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgmaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgmaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgmaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgmaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgmaker-create-a-new-map/index.html",revision:"a7dceae534b491daeb178c656e160fe5"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"8d36fb94a18f6977795c3700411d369e"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"518bbc80fb90ba1a05c64fc45e893a8e"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"9e426a37ec059753c11516cc6f649efd"},{url:"sakura-tree-background/index.html",revision:"be2ed6ca0f0c227e574a8921102f9bc7"},{url:"side-image/index.html",revision:"c6efa2a93fda85e14dd855bc9af11471"},{url:"snow-effect/index.html",revision:"73f5cdfecf5af262ab1d37f6f166d445"},{url:"speaking-animation/index.html",revision:"e425594119d5dd19f68a6fdc865b6a68"},{url:"splashscreen/index.html",revision:"8aa21d3d699d771e84ca4f315661bf00"},{url:"sw-register.js",revision:"cf3ef70e074edceeee80db97f2e7241c"},{url:"sw.js",revision:"24ccc13d4460a439fa61ad272894ca7b"},{url:"tags/ai/index.html",revision:"8647b4b5fe3548443d85eca0df165bfe"},{url:"tags/butterfly-beauty-diary/index.html",revision:"07486ed42ac6ee9180e13a76316e2da6"},{url:"tags/commision/index.html",revision:"6bf1bb853cbccf3415a029a7aecc37a1"},{url:"tags/custom-hexo-theme-butterfly/index.html",revision:"86bfde86b4b0e0596955484e7176ef35"},{url:"tags/custom-renpy-title/index.html",revision:"80b0b89c80aa8814d73cc20ec3ada9be"},{url:"tags/dialogue/index.html",revision:"e84ff12afd86a92f9059e8663f379f7d"},{url:"tags/effect/index.html",revision:"a8e7fe5b7cc44d3acba0758ddd41b56f"},{url:"tags/event/index.html",revision:"aa6d92e5edaacd1852e72d30d40f10e1"},{url:"tags/Hexo-plugins/index.html",revision:"2daf4f1abe663271af175d51fc9d3da2"},{url:"tags/hosting-own-website/index.html",revision:"b991f7bfea6741597bebfaacaf0164a3"},{url:"tags/index.html",revision:"31ede539bca6d2809cfcf62d33797dac"},{url:"tags/itch-io/index.html",revision:"83184e6df1ed99837ead5dbb2c0dd9bb"},{url:"tags/light-vn-update/index.html",revision:"611c7e28f0b47f0935b0af3710e38feb"},{url:"tags/Light-VN/index.html",revision:"d1c8d3ae84fbf0ebf8cb587602bc501e"},{url:"tags/nvl-maker/index.html",revision:"846a9e23944df7c87c3a37998ecae64a"},{url:"tags/player-related/index.html",revision:"df6404444bbb89becaba895bf1d46d4d"},{url:"tags/pro-tutorial/index.html",revision:"6e82f0a7bd700f5ef36986559826d25f"},{url:"tags/pro-tutorial/page/2/index.html",revision:"4543f074792773ba809ce82f4dafa0f9"},{url:"tags/renpy/index.html",revision:"dcf2994741bfff04fe0818d998bd5a20"},{url:"tags/rpg-maker-custom-map/index.html",revision:"0b24e5efe9e0cd333e5991bbd0d11fcf"},{url:"tags/screen/index.html",revision:"63e9c83d261909c5c417b9e90b12a109"},{url:"tags/special-function/index.html",revision:"c7073546ff58f54e9ef9f4fae02aac54"},{url:"tags/tyranobuilder/index.html",revision:"04d5c685d795589963a7a2c65080d66b"},{url:"tags/ui-assets/index.html",revision:"7c82691f7cb3adc3399ca80c6c7927a8"},{url:"tags/update/index.html",revision:"292e4c45e92af6e1271b802d06e4bdb3"},{url:"tags/upload-game/index.html",revision:"8ca8eed77eb797b8196c0a32999b8f19"},{url:"tags/variable/index.html",revision:"9f12f1dbd6dbd1a82ebc88261ea5d577"},{url:"tags/visual-novel-maker/index.html",revision:"b9728f43346e21fc3528448effd1b4c0"},{url:"tags/封面製作/index.html",revision:"887dbce5c6c60f016239304c75d63625"},{url:"tags/背景素材/index.html",revision:"a2a40a90bbe10c60558416f34b91c718"},{url:"tags/隨機功能/index.html",revision:"a5f56386bd377d404b2c0140d9f252d0"},{url:"test123/index.html",revision:"42fabf7954dbf7af6509e0c7249cb7c4"},{url:"textbutton/index.html",revision:"2d8a871d84b2468252f176ddd16d6870"},{url:"to-do-tutorial/index.html",revision:"fbf30433752570fc40c8e5872d2b079c"},{url:"tools/index.html",revision:"7444abd54b31d7e524ad39e2ffe05559"},{url:"transfer-to-hexo/index.html",revision:"8f3774ab95a6e833294977f844c1f2d1"},{url:"tutorial-update-history/index.html",revision:"aefcc8039485f744390cdbbd3aad1b40"},{url:"tyrano-name/index.html",revision:"17c1c56fa0f49079d762f6bf1f9540cd"},{url:"tyranobuilder/index.html",revision:"ba6336c5362c642c904c43d63a635cf1"},{url:"undefined/index.html",revision:"0c273ba119cd8d3823ecfdc2da86d9f1"},{url:"update-20221211/index.html",revision:"7dd81ae8dcb9fb36d1e688a592d46c7b"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"d7cbdbdb7cd08d1418dd01577d115fa4"},{url:"upload-your-game-itch-io/index.html",revision:"9648f860a6ce0b01b4beab06fdbfc4ad"},{url:"use-list/index.html",revision:"2dd0fea15f28f49391d860863075b418"},{url:"use-nvl-mode/index.html",revision:"b407f53093590dc166bf36c83dccea8b"},{url:"useimage/index.html",revision:"2796a4cd39dd1c0473420b1579d8c9c9"},{url:"variable/index.html",revision:"1c21d71e972ebc55eccec8f7949e7467"},{url:"vnmaker/index.html",revision:"7e5af1cd882fd802cbb89cea16ed7eb8"},{url:"weather-effect-tutorial/index.html",revision:"a7b0aeaf792a7b5cd91353aa0c17e2a7"}],{})}));
//# sourceMappingURL=service-worker.js.map
