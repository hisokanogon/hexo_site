if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const f=e=>a(e,c),b={module:{uri:c},exports:n,require:f};i[c]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"e5c8b50c0dd1bab330f1ca717f6480bc"},{url:"2player-battle-system/index.html",revision:"19e4dd88e4b6a0a6fd5a5dacbf8ecdc3"},{url:"404.html",revision:"b747c3feabe9d9fda1cc0a4950c25770"},{url:"about/index.html",revision:"4f54f86211dd9df96d3916adea5addfb"},{url:"add-artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"add-artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"add-artitalk/index.html",revision:"01a0fed75a3a5d9fc8de6d33e5a28ade"},{url:"add-artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"add-artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"add-artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"add-artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"add-artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"add-artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"add-artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"add-artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"27bfc0bd2a4135e05e0bd34a6ae9e357"},{url:"animated-title-main-menu/index.html",revision:"5454823ad6a267b96254f2b03f999596"},{url:"archives/2022/05/index.html",revision:"950e1d45f2641e00191133d653def90b"},{url:"archives/2022/06/index.html",revision:"b4dc0199dc08763cecce4a58ab2d1445"},{url:"archives/2022/08/index.html",revision:"9bbbb297f306097a1c1937b913678521"},{url:"archives/2022/09/index.html",revision:"31353db9cb130292d1c95aea9d80bc16"},{url:"archives/2022/10/index.html",revision:"755779e7ced497e6bbae37fe4df4e4ed"},{url:"archives/2022/11/index.html",revision:"630f00032443dd704fe641b33a3fe739"},{url:"archives/2022/12/index.html",revision:"088b6f07b59681fbbac413d56e01b676"},{url:"archives/2022/12/page/2/index.html",revision:"29333fb91431771b746e2706d2ff54fe"},{url:"archives/2022/index.html",revision:"f04f673ad0af2521ffc80f31533e44b0"},{url:"archives/2022/page/2/index.html",revision:"826eedf55d71cb61becbbcc17f8326b8"},{url:"archives/2022/page/3/index.html",revision:"b2813c41aea7071baf125625b2757a2d"},{url:"archives/2023/01/index.html",revision:"fb5e2fe6655d96012df83bd1faf3c1de"},{url:"archives/2023/02/index.html",revision:"8b20dc962c1faae8fd34a0577ce1df39"},{url:"archives/2023/03/index.html",revision:"72e29f896870feb5caa61969c6e6fcac"},{url:"archives/2023/04/index.html",revision:"23b7c5b3923a6d1f7e0b77a699629b14"},{url:"archives/2023/05/index.html",revision:"582e3e7def84916718d57c503d7c4982"},{url:"archives/2023/06/index.html",revision:"ac88c96596e389f3ca288fcb7a378a7a"},{url:"archives/2023/index.html",revision:"7d37fdeedf5ea64170d674d2da4973d7"},{url:"archives/2023/page/2/index.html",revision:"917e9515ed50e73ee19d0bbb0feddcaa"},{url:"archives/index.html",revision:"0713b1c96da71a68f53e33e7b8131552"},{url:"archives/page/2/index.html",revision:"5d95775f200d0bd720073685b42aeb5a"},{url:"archives/page/3/index.html",revision:"f96e712274418a14a5c3572f81752df1"},{url:"archives/page/4/index.html",revision:"751a9f2ab36d597db57e8409c673e96f"},{url:"archives/page/5/index.html",revision:"0cc7f67db9f2206132c196fe0913be0c"},{url:"artitalk/index.html",revision:"db2b46da824b865b0d1791cc8a374654"},{url:"battle-beautiful/index.html",revision:"4089e1af6745bb0dac9c41706f85b4d2"},{url:"blur-effect/index.html",revision:"bcea77fdaebfbceb0bd11410daa53c12"},{url:"butterfly-custom-tag/index.html",revision:"4fd2bc746ba32260f26e517f402b2a2f"},{url:"butterfly-plugins-faq/index.html",revision:"db96fc99efe14e426cf7acf6cf4c98d4"},{url:"butterfly-ui-change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"butterfly-ui-change/index.html",revision:"47c130ceea1e0dd67a2be35de25d13ec"},{url:"butterfly-ui-change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"butterfly-ui-change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"butterfly-ui-change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-ui-change2/index.html",revision:"62a8dc668ccf2616a724fea61844b189"},{url:"categories/announcement/index.html",revision:"09bf15a668c971a100f332186a9048e8"},{url:"categories/diary/index.html",revision:"9969cfa704b6d55925cdeebfd3b27c18"},{url:"categories/game-dev/game-engine/index.html",revision:"10864c70642b2c2d6a7e58079b195363"},{url:"categories/game-dev/game-engine/lightvn/index.html",revision:"1ddef2711cf3bc806e8fdb4df1f8f064"},{url:"categories/game-dev/game-engine/nvl-maker/index.html",revision:"880de4ae9d539eb8dcf5b79e0ae08da8"},{url:"categories/game-dev/game-engine/page/2/index.html",revision:"c9963303302fa5edc3b1f03c064dc541"},{url:"categories/game-dev/game-engine/page/3/index.html",revision:"6618f99a4e57d63273c3f4d8a017ad16"},{url:"categories/game-dev/game-engine/renpy/index.html",revision:"f665d47c757d7d0dadd7b17f9d2e6eda"},{url:"categories/game-dev/game-engine/renpy/page/2/index.html",revision:"2115a0ab1be804367243feb9d3dcb535"},{url:"categories/game-dev/game-engine/renpy/page/3/index.html",revision:"e275e292e9ac41acfb612bd864e08a66"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/index.html",revision:"355b07f72d03b9f4cfe083dac3e22584"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html",revision:"85474f058773e1aeb6ef58d0dee34272"},{url:"categories/game-dev/game-engine/renpy/tutorial/index.html",revision:"baebfd64d8d1d8a421e2078627ef859b"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/2/index.html",revision:"8011b9b9fffd3f4b1d6cb62c7172677b"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/3/index.html",revision:"b1a2d1ef3834be40ae63c0b8654895eb"},{url:"categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html",revision:"7abb65ea77ae78a175b8a6fa7d1a5bb0"},{url:"categories/game-dev/game-engine/rpgmaker/index.html",revision:"35cb94761bb6cfb56deedf9458531162"},{url:"categories/game-dev/game-engine/tyranobuilder/index.html",revision:"4049c09f298307301dd84f11d9432fa2"},{url:"categories/game-dev/game-engine/visual-novel-maker/index.html",revision:"a49a33bfe165fca2d901dda3130c6598"},{url:"categories/game-dev/index.html",revision:"ce1d3d103101c6685740933b414f693a"},{url:"categories/game-dev/page/2/index.html",revision:"47aa8ff085439dc84e57d6b739c2b5ae"},{url:"categories/game-dev/page/3/index.html",revision:"bddf4573c0be7d5ace8396c5dc640e2e"},{url:"categories/hexo/index.html",revision:"9d767df1dea33d85d97c90f3b9f773f8"},{url:"categories/index.html",revision:"d0b57e08b5472aceee64b7f949fb4ce6"},{url:"categories/material/index.html",revision:"1dbed39284f20c7b458370275bcadbd6"},{url:"categories/update/index.html",revision:"5fe3bf36c79366885b70890171d72487"},{url:"change-according-to-real-time/index.html",revision:"1ebd5832998909fdd1d26c879119b366"},{url:"change-title-after-first-time-viewing/index.html",revision:"9e4a53f10b838046385013763b93f134"},{url:"change-title-based-on-event/index.html",revision:"b5ea787018358baf7945e5a735a3cc97"},{url:"character-stats/index.html",revision:"a544778736207164919ed9591b925fb2"},{url:"chatbot/index.html",revision:"56443b550d7c244ffa9527f8b4dc54ce"},{url:"comments/index.html",revision:"4f7c14b223bc297ba389d33fd60492cd"},{url:"create-button-anywhere/index.html",revision:"e7a94cc7e34e0522194042db68b068cb"},{url:"css/eurkon.css",revision:"dab414e89ed670789cf5ffae3c7cefc8"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"73379f88ebbf73010c6dd60e6e7e2ce8"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"7ed1111da0adf9910d970a593fe5424a"},{url:"css/rightmenu.css",revision:"7f1d95b30741b056cad675bde326922c"},{url:"css/siz.css",revision:"b150fced878f3ea09e3e523c6f6ce460"},{url:"css/swiper.css",revision:"ffc4dfa896a502ecb1e6a8a30b79e079"},{url:"css/swiperstyle.css",revision:"ac7499dd4f5a6cf4609c8882ddb7f5e8"},{url:"css/var.css",revision:"073f3bf87042199da104a95326e17aab"},{url:"ctc/index.html",revision:"abfd6bc1174adf960c2b4152ab5e7651"},{url:"custom-css/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"custom-css/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"custom-css/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"custom-css/index.html",revision:"9fd6a19bd0979537345e46b0af840352"},{url:"custom-css/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"custom-css/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"custom-css/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"custom-css/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"custom-css/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"custom-css/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"custom-css/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-gallery-cg-screen/index.html",revision:"f87e64d604b4b780265adc6f2fb91a5c"},{url:"custom-loading-screen/index.html",revision:"99ab61a8b327b8faff9d5921be9b8eda"},{url:"custom-mouse/index.html",revision:"5e7d1a2afde9c2ce1cf1e0cfe967129f"},{url:"custom-music-room-screen/index.html",revision:"a124f34d8930d9b80ed9685bdc1e7ed4"},{url:"custom-music-room-screen2/index.html",revision:"c73cc8bce727644997d335dcc024f7af"},{url:"custom-nvl/index.html",revision:"c8bf41e485ad5b83ab979c2124051717"},{url:"custom-player/index.html",revision:"75ea1b85c631036088f1140e70321a65"},{url:"custom-preferences-screen/index.html",revision:"ba54736ca6f2f9427c35c35c94dc6ab3"},{url:"custom-say-screen/index.html",revision:"7b793fcdf5aea7e08b77ec724adbd589"},{url:"custom-title-screen/index.html",revision:"b7e6e798ee13e8ca6b31b38bcc3c6549"},{url:"define-npcs/index.html",revision:"a12598227680e93c78efa553a28d65af"},{url:"dice-function/index.html",revision:"c66efc3d90a36ad6c65bc67b3927d5ad"},{url:"disclaimer/index.html",revision:"f639309968ddded3853be238b11bdac4"},{url:"export-game/index.html",revision:"76bb22bc1ff70f12f623b6f6e9ea6c6b"},{url:"friends/index.html",revision:"fe542eb161672a8bbe1c946ed51a53be"},{url:"gallery/index.html",revision:"3088af6689dbe7c98b8d9e7603704683"},{url:"gallery/photo/bg/index.html",revision:"5c50336a681f5651d007905ad1dfbfc1"},{url:"gallery/photo/gui/index.html",revision:"e7965d778c568d9b50edf14743ed9892"},{url:"game-only-text/index.html",revision:"d0f0456690d06778af7ed2b4d43fdd9f"},{url:"gui-017/1.webp",revision:"aa12c6f819750ab701a4757d4dc305d4"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"2d8e8806bb6f8d6fbc3840d7854c0c93"},{url:"gui-017/index.html",revision:"c071212a237a9848abb12c669312e92e"},{url:"gui-vertical-002/index.html",revision:"db834292182218293cd2b84d80ffbc8f"},{url:"gui012/index.html",revision:"d814080e9590b72d5ac61474624cc1ff"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"04979dbc2e0d53b1a2f67d22a459aacd"},{url:"gui018/load.webp",revision:"ea9228dd37e76ce9f4e2c153fc4e3db0"},{url:"gui019/index.html",revision:"22a507db778b9b3c500cef80ae4c25d8"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"bb32cc2b005b3be914b21c906d3a10fa"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"hexo-custom-mouse-disply/index.html",revision:"d7e350f4a4c3b71b498a125419384a9a"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"12333d7f229c5ff86fe594a203296ee4"},{url:"images-tip-function/index.html",revision:"409d65b06b885f94f305a9fcc8863aaa"},{url:"images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"images/pawicons/32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"images/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"images/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"images/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"images/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"images/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"images/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/favicon_16x16.jpg",revision:"7170a7a0a8983fb2790e28c864648f5b"},{url:"images/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pawicons/favicon_32x32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"images/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"images/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"images/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"images/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/bmc.png",revision:"40b98209d9deb3e69053d4a559cc8a30"},{url:"img/cover/1.webp",revision:"75c4ca0e23ea27798c951e79cf118d88"},{url:"img/cover/2.webp",revision:"37a1fa535df37e8c5cf01def24fc9eeb"},{url:"img/cover/3.webp",revision:"ec6c922dd423211df47e8cd79493aacb"},{url:"img/cover/4.webp",revision:"896796dcf0a2b1f714060e1300972432"},{url:"img/cover/5.webp",revision:"06b21ba7e9d00ca7768252c51b3854af"},{url:"img/cover/6.webp",revision:"7e12d98e2bf9548379c39beba3a222d2"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/gib/1.webp",revision:"5be4619a8cf8b66551dedb272413d09d"},{url:"img/gib/10.webp",revision:"83a37dce9e5cfb132e1f5cc69ce4a758"},{url:"img/gib/11.webp",revision:"e0343acb272483692d9274223987cf19"},{url:"img/gib/12.webp",revision:"b1ca8b649c15f1e462a5b4c0b60f0d9c"},{url:"img/gib/13.webp",revision:"53e919448c1fd302d4ba93cf3adfaf2b"},{url:"img/gib/14.webp",revision:"a02f67a68a66dde2fa9430179dc5a092"},{url:"img/gib/15.webp",revision:"c98583025ce168f380b1a8cedef1f98c"},{url:"img/gib/16.webp",revision:"ae6ad26748f14367e42c298eb896e5e1"},{url:"img/gib/17.webp",revision:"11454179dca9c7538321eb5c7ddb62e5"},{url:"img/gib/2.webp",revision:"ce48b5614d628d9d5bebd2f5805cd038"},{url:"img/gib/3.webp",revision:"dd7dd4b6e72f1261f67cb61f78d40d68"},{url:"img/gib/4.webp",revision:"47498d3dea6081830aee230d468c960f"},{url:"img/gib/5.webp",revision:"0444f75e417e402551f7f2e397c4e6d8"},{url:"img/gib/6.webp",revision:"32eb9f3a488fa490bdc4a97a3b56bc47"},{url:"img/gib/7.webp",revision:"6335bcc03fd830ffff2b5d50bcf27674"},{url:"img/gib/8.webp",revision:"6741566622ae6db01c808f41626127c8"},{url:"img/gib/9.webp",revision:"738676086f5f13fb0b68d51f9db9536f"},{url:"img/gib/mononoke/1.webp",revision:"c1cecf43a07dd38a209755e5b284a97a"},{url:"img/gib/mononoke/10.webp",revision:"ed2e76d87d11c77c6b36c872372b9cbe"},{url:"img/gib/mononoke/11.webp",revision:"9220ccd14d4b5235b7b969587233164e"},{url:"img/gib/mononoke/12.webp",revision:"f059becb15d5c3844512f268564ed2a7"},{url:"img/gib/mononoke/13.webp",revision:"63012d48bf56e366bfb4b97707e62392"},{url:"img/gib/mononoke/14.webp",revision:"8b9025ca54749a1abaf648ae875380cb"},{url:"img/gib/mononoke/2.webp",revision:"fbff6e2629aa09b5129ef92315d9ecfa"},{url:"img/gib/mononoke/3.webp",revision:"34bc5b1ba588eb602f8c5e53eb13724c"},{url:"img/gib/mononoke/4.webp",revision:"ba858a1ff9036d595058b1c71876011c"},{url:"img/gib/mononoke/5.webp",revision:"7e826ccd99e889e61a966bbde6eb9b70"},{url:"img/gib/mononoke/6.webp",revision:"3cf011aabb2bef762e9feab2ca4a2336"},{url:"img/gib/mononoke/7.webp",revision:"775329857ad8cadac595d2e18dee2372"},{url:"img/gib/mononoke/8.webp",revision:"c5395b806757462a313078b6ae6c19de"},{url:"img/gib/mononoke/9.webp",revision:"1fe8c781e3c831a8321d1ef20f737aff"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"img/pawicons/32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"img/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"img/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"img/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"img/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"img/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"img/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pawicons/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"index.html",revision:"8c2309781dc95a1b0c5d98ba892b0641"},{url:"install-use-valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"install-use-valine/index.html",revision:"7e1f161a5af8292c579972fa6f4b84dd"},{url:"install-use-valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"install-use-valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"inventory-system/index.html",revision:"917c2df0989151d39621a545cf6f3b2c"},{url:"items-sprites-effect/index.html",revision:"1a355a501972a2d50bea661968aa52e4"},{url:"js/countup.js",revision:"5f2f77ec867d7f85d3bdbad2bf804fac"},{url:"js/main.js",revision:"80de3021a5d1ba2ecc68d332b284c836"},{url:"js/rightmenu.js",revision:"e4b3044aa999f5c624cb1432ff11d15d"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightvn22-10-03/index.html",revision:"fb16f891789f8243e3d02b8980ad0faf"},{url:"lightvn22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightvn22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightvn22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightvn22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"lightvn22-11-24/index.html",revision:"5bb3ea2c879c56ddff51aaca7a477f85"},{url:"likebutton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likebutton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likebutton/index.html",revision:"98de50a7ea869f2a7ce59e01370b6a55"},{url:"link/index.html",revision:"2a1025d35ac2344dbacf3d37e8f360a6"},{url:"make-butterfly-beautiful4/index.html",revision:"fd4b98d355621b85c14c0eba2a6ce0dc"},{url:"map-puzzle-system/index.html",revision:"ec42060f14d1199c09f336947298d943"},{url:"maple-effect/index.html",revision:"aa6ac2386712405134fe59de3ab75229"},{url:"memberships-2/index.html",revision:"037a05cd45d1a5a6b6ee6b90ade41f0d"},{url:"memberships/index.html",revision:"2397eff73621b732fb31238432d99586"},{url:"multiple-language/index.html",revision:"c057372d3c96bd0fa943328a87414585"},{url:"new-year-event-2023/index.html",revision:"cd8d19016aed9d9948d1f93f0ababef7"},{url:"newsletter/index.html",revision:"02e25b91caa3c57051f5ee0233e68dff"},{url:"null/index.html",revision:"503f5da65873704ebff998e92f501289"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvl-ctc/index.html",revision:"e564e39a04ec8578a2b81aa4d95fe51f"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"b0d02fd8a2dca7ba990fc6df3a6d3d92"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"openchatai-renpy/index.html",revision:"5beb3f5ae08a93d3fd410b6fb0da38a8"},{url:"original/index.html",revision:"8729e209703f4453294810e2b82fee69"},{url:"page/2/index.html",revision:"e47efa1b94b263afa8f165839e417276"},{url:"page/3/index.html",revision:"1166995b21565e91892446642e9251ef"},{url:"page/4/index.html",revision:"911615403c4393dc4bd5b97f082b7c01"},{url:"page/5/index.html",revision:"63651494a6a85cf8f57cc00adb1f03b5"},{url:"pop-point/index.html",revision:"d167c932d74b6ca7669724675846987f"},{url:"privacy-policy/index.html",revision:"b4249df1c7308744e25eda0f27b3a1f6"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-dialogue/index.html",revision:"4e9266fe619683960b118ece618b9f09"},{url:"random-number/index.html",revision:"7bb7c987d4b008c395ad98fe48df9561"},{url:"random.html",revision:"86d50e6b34bb9e1ef51bfcbb092ae1ba"},{url:"release-017/index.html",revision:"7f2b049e57b6378ff995bfcabc285b1e"},{url:"renpy-basic/index.html",revision:"b9f3a7efef336b4b00775431aab49d60"},{url:"renpy-crash-glitch-effect/index.html",revision:"41490e0203fae19fa7f0a0389b844bba"},{url:"renpy-matrixcolor/index.html",revision:"f6858acf40b535bb7176f190b182fd81"},{url:"renpy-overlay/index.html",revision:"11fbe2a2a463612305942506c705746e"},{url:"renpy-review/index.html",revision:"caf587b9d7897facfe83d9b2d4b90b92"},{url:"renpy-typing-effect/index.html",revision:"681dd95e472ab0f345daef3ac3f256c3"},{url:"rpgmaker-assets-menu/index.html",revision:"7804c45b51be17497dca63a8515877f0"},{url:"rpgmaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgmaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgmaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgmaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgmaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgmaker-create-a-new-map/index.html",revision:"bc31e3b1b65b9eba8dfe06f5135fd22d"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"8d36fb94a18f6977795c3700411d369e"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"518bbc80fb90ba1a05c64fc45e893a8e"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"833a7a423e626bbcb846f4e25be68f5c"},{url:"sakura-tree-background/index.html",revision:"8cc2b9504078efcfe2bdc3643cfe6c2a"},{url:"show-variable/index.html",revision:"9c61483c16572d21501590fda1c9ec7d"},{url:"side-image/index.html",revision:"6929ebaea4f26c60b099d3c5f6e1c5e3"},{url:"snow-effect/index.html",revision:"c41e506924d31e62d5df1a61af2bce63"},{url:"speaking-animation/index.html",revision:"cb7cac2b61a11900cfa5be1db66cb8e9"},{url:"splashscreen/index.html",revision:"777984e048f6917eaa2867f3b0cff741"},{url:"sw-register.js",revision:"03a321015a5c0bb214a33fffcc137db2"},{url:"sw.js",revision:"c26cdb78bbe981e50034d94e9bd2897c"},{url:"tags/ai/index.html",revision:"b8110678fd9474f7fbabe44da1505468"},{url:"tags/butterfly-beauty-diary/index.html",revision:"a17bb5f25c62adb450b9b88792113c8a"},{url:"tags/commision/index.html",revision:"cafe3c13f41908e5a2cf9aad9d3e1847"},{url:"tags/custom-hexo-theme-butterfly/index.html",revision:"8e90440f28db689833d992e0d297b4bc"},{url:"tags/custom-renpy-title/index.html",revision:"195c0bde24ccc0aa79edba3745dd7fa3"},{url:"tags/dialogue/index.html",revision:"a935832a6b7d9045ff9a4e3e79c88858"},{url:"tags/effect/index.html",revision:"8389c19c99463230601a7ec430a13938"},{url:"tags/event/index.html",revision:"f20350a2fefeefad3f94aa84d51c3892"},{url:"tags/Hexo-plugins/index.html",revision:"a4d245f8766a0187825bfd9bbc3e58c1"},{url:"tags/hosting-own-website/index.html",revision:"6faac6d493869096915e6ec2c0c6ac1c"},{url:"tags/index.html",revision:"d52665c9757bfeaafb4393fae262dc46"},{url:"tags/itch-io/index.html",revision:"3235aab81970d8668ff176704cec7ddd"},{url:"tags/light-vn-update/index.html",revision:"7ccf971cefed30c9ece2b4d9a49992ba"},{url:"tags/Light-VN/index.html",revision:"493236c60b2f3639eac87826c244ff21"},{url:"tags/nvl-maker/index.html",revision:"aab570f75a2bda0f8f18c6c6e9b72484"},{url:"tags/player-related/index.html",revision:"58e9c54574d44e4b2e62dcb689be57da"},{url:"tags/pro-tutorial/index.html",revision:"0baf1d102c74e48f83520cf3a503b06a"},{url:"tags/pro-tutorial/page/2/index.html",revision:"4d43774b47b9b5e48c38e6af32878648"},{url:"tags/pro-tutorial/page/3/index.html",revision:"4ca115fe5f1d1d80959d50f1f8d0760d"},{url:"tags/renpy/index.html",revision:"1da50d9f4824bf0854e13e3b7257aafd"},{url:"tags/rpg-maker-custom-map/index.html",revision:"11786483b5b52552be039796ff6d5aef"},{url:"tags/screen/index.html",revision:"72fd958f0de374ebccb6931cbfce39c2"},{url:"tags/special-function/index.html",revision:"b799307bb07d0ca30f923b4e7025d334"},{url:"tags/tyranobuilder/index.html",revision:"b09398edd86c3fc121b0fa2f01543057"},{url:"tags/ui-assets/index.html",revision:"4baf52ea267ad041aed9d8b1a24e23ef"},{url:"tags/update/index.html",revision:"dc68a91836bd761c779c2ca50fddfc76"},{url:"tags/upload-game/index.html",revision:"9e2bae20c97196c15a2023a55b684a80"},{url:"tags/variable/index.html",revision:"fe4568ce63eabdb6a3a426bdf836ca57"},{url:"tags/visual-novel-maker/index.html",revision:"044a60a5663a5434611b5f20d984c992"},{url:"tags/封面製作/index.html",revision:"bfed31d30f0714bf837f5a99accbf7ef"},{url:"tags/背景素材/index.html",revision:"665f9680760a2283cbda1acb3c24b36f"},{url:"tags/隨機功能/index.html",revision:"f82b285c11336e9b9ccfca1d3e6ed66d"},{url:"test123/index.html",revision:"b4bfa3490c7ff645c766075e2e7d2a88"},{url:"textbutton/index.html",revision:"1bef5b9e403d46333ed848a01f6393d1"},{url:"to-do-tutorial/index.html",revision:"dfa2a887478d87ab526552481047feb8"},{url:"tools/index.html",revision:"a080fa63d5222ea1c11fa400e9bd3dae"},{url:"transfer-to-hexo/index.html",revision:"e7b4a7497c45751ddafb82eaf0f76752"},{url:"tutorial-update-history/index.html",revision:"e636fd4dc9588ea9802cee568270414a"},{url:"tyrano-name/index.html",revision:"05d672060da751fb0dc2aafa67dce7d5"},{url:"tyranobuilder/index.html",revision:"21bdb703ef13105f9e97a77d7e118080"},{url:"undefined/index.html",revision:"c34a1ed2c4310022bf805cf81c2d2eec"},{url:"update-20221211/index.html",revision:"d1ea6ccf2664e28ad2fd1547de982969"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"36f22f4328ec39126aa53c5e761ca732"},{url:"upload-your-game-itch-io/index.html",revision:"f6fa3005b09a60d4b861e5474db8aaf5"},{url:"use-list/index.html",revision:"32a33ef0740f5ec365fee6d0ca25d7ba"},{url:"use-nvl-mode/index.html",revision:"0898a5027c93ad3ca38ee3ed0d025c7c"},{url:"useimage/index.html",revision:"b1ef4797cbf132b095aec797853c1dab"},{url:"variable-change-image/index.html",revision:"f8d1f32d66cc92b1516211ebea4d7525"},{url:"variable/index.html",revision:"c79b9ec4e0d6f22649f546f0d8cb8880"},{url:"vnmaker/index.html",revision:"5b5c651f7f28b79c16871ce89755698d"},{url:"weather-effect-tutorial/index.html",revision:"ea8f08962014d19cdffe3e1045729012"}],{})}));
//# sourceMappingURL=service-worker.js.map
