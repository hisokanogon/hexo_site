if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const b=e=>a(e,c),f={module:{uri:c},exports:n,require:b};i[c]=Promise.all(d.map((e=>f[e]||b(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"d3ec5e04c6c5b07a1aa9272a61d78389"},{url:"2player-battle-system/index.html",revision:"90a081fd6f96c447874ebb96c966aa7e"},{url:"404.html",revision:"c7f36ff8d171c58057b68dd8a93aa14d"},{url:"about/index.html",revision:"90bd7896efaaa42fafcdb41d341f5bac"},{url:"add-artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"add-artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"add-artitalk/index.html",revision:"7665c80e4f26eb1c6371fdd72113a8ae"},{url:"add-artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"add-artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"add-artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"add-artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"add-artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"add-artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"add-artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"add-artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"41446c72d84b5eb8ffde633022827d33"},{url:"animated-title-main-menu/index.html",revision:"f603743688630a0d27ca86bad291349a"},{url:"archives/2022/05/index.html",revision:"63236d1e6c04968df994094f09fdd54f"},{url:"archives/2022/06/index.html",revision:"f513f7af6a34df600c238b8712603eb7"},{url:"archives/2022/08/index.html",revision:"7afc3a871f52c53234fab527dceee0a6"},{url:"archives/2022/09/index.html",revision:"d1a13260421974f471b497d50195da88"},{url:"archives/2022/10/index.html",revision:"ba73ea3494343e15b32853f9cdaf28ad"},{url:"archives/2022/11/index.html",revision:"81431ac338cbf08ba622eda86fba0699"},{url:"archives/2022/12/index.html",revision:"87c3f2371381bff5ee6d3a2c6b502f1a"},{url:"archives/2022/12/page/2/index.html",revision:"6f756042c5bf0a2eb75a091adda754fa"},{url:"archives/2022/index.html",revision:"e83120b723b6c0b398c0ba2c8c1f6f72"},{url:"archives/2022/page/2/index.html",revision:"f5bff4208e0836d431cfd0c0a0a75de5"},{url:"archives/2022/page/3/index.html",revision:"1bbff0e38e2f83f75d75adf97314a2a6"},{url:"archives/2023/01/index.html",revision:"5c0c4ea247a07c7cd48530790a31646d"},{url:"archives/2023/02/index.html",revision:"bd54f43853a00267d5f7dd9599e98e70"},{url:"archives/2023/03/index.html",revision:"d2fe9f5b42353b22acae995538d7df71"},{url:"archives/2023/04/index.html",revision:"7017667488ff04321b3b02b711258eb5"},{url:"archives/2023/index.html",revision:"a88a145808d4353a84c00134a46dd9b7"},{url:"archives/2023/page/2/index.html",revision:"9045a291fa1500a6c4720a186d664927"},{url:"archives/index.html",revision:"ab9df14c057c31c93f33415ada563de0"},{url:"archives/page/2/index.html",revision:"1a6fe18549760cbe8fc5f87e5233925b"},{url:"archives/page/3/index.html",revision:"19cba095b863f4cb53af23a3be387ae8"},{url:"archives/page/4/index.html",revision:"b50a665f8e0c4aeda6dde90635b3f4f1"},{url:"archives/page/5/index.html",revision:"7d7dc1bb07e034bf82e1852e3bc77d0b"},{url:"artitalk/index.html",revision:"fa0d27a63d5b5667a25030ab520679ab"},{url:"battle-beautiful/index.html",revision:"edb037c02cb2e3f7c6eefc1c47bc429f"},{url:"blur-effect/index.html",revision:"b31851f038147beb0e697f3df49c1096"},{url:"butterfly-custom-tag/index.html",revision:"6cdfbaf4636b3876f1e0036cd154fd0f"},{url:"butterfly-plugins-faq/index.html",revision:"91f9614f0d66ebd60f8d148967fa71e2"},{url:"butterfly-ui-change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"butterfly-ui-change/index.html",revision:"e40f43e4129d67c25c4842114b9c7d36"},{url:"butterfly-ui-change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"butterfly-ui-change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"butterfly-ui-change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-ui-change2/index.html",revision:"814a4a2bbdc34b49df447828f6c8fccc"},{url:"categories/announcement/index.html",revision:"95958b6b00d6026360ebd0b1a43b84f8"},{url:"categories/diary/index.html",revision:"599e0f436eccaee5bebf65395caa54eb"},{url:"categories/game-dev/game-engine/index.html",revision:"fcef4503b0f3d3d2ee3af2d859a8e671"},{url:"categories/game-dev/game-engine/lightvn/index.html",revision:"dfa390de4dbf5ae6593c85f71cac802b"},{url:"categories/game-dev/game-engine/nvl-maker/index.html",revision:"db267ed8c83f486f32bde0d6bd2be320"},{url:"categories/game-dev/game-engine/page/2/index.html",revision:"4f911902f986554e5fe6a167cc4fa6ed"},{url:"categories/game-dev/game-engine/page/3/index.html",revision:"2ca19eab7f9cc9e002e75ad14f6cf303"},{url:"categories/game-dev/game-engine/renpy/index.html",revision:"138729c1de6690f26c1b44047da7f020"},{url:"categories/game-dev/game-engine/renpy/page/2/index.html",revision:"6beb1218a3ab8335d7a2a18c69d6c8c6"},{url:"categories/game-dev/game-engine/renpy/page/3/index.html",revision:"4538f2f8158720c8ffa204c63a7c7bcc"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/index.html",revision:"fcf3aeb8b341f333405617d30182598d"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html",revision:"6addd61c9a840702cfc0fbd1a385acf3"},{url:"categories/game-dev/game-engine/renpy/tutorial/index.html",revision:"6d3ff20ab603146d7fc8467f841820b7"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/2/index.html",revision:"66165c94858766011666216e6b146e95"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/3/index.html",revision:"c9c78244b1883fb3c815a53242ab2c7b"},{url:"categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html",revision:"aa319fa862d067c6e48b93e0ef4b5736"},{url:"categories/game-dev/game-engine/rpgmaker/index.html",revision:"cfb59f7893177db5ece654b334aae9f6"},{url:"categories/game-dev/game-engine/tyranobuilder/index.html",revision:"bb06aeb0a492500950badc4d1acd420e"},{url:"categories/game-dev/game-engine/visual-novel-maker/index.html",revision:"1430b869e357b47addae4acc8a57ca0d"},{url:"categories/game-dev/index.html",revision:"f25177a68bcc13cdf6ff22426b327d47"},{url:"categories/game-dev/page/2/index.html",revision:"6f43dddf19f638b0a227f7c99c1df7f7"},{url:"categories/game-dev/page/3/index.html",revision:"b9ef77500f1da5d1df1c1c70a1029b54"},{url:"categories/hexo/index.html",revision:"ccacee95aca765f1f7901347905a9cab"},{url:"categories/index.html",revision:"02604f49b2b65bb6567b8b08c67c21f0"},{url:"categories/material/index.html",revision:"de3595f2b02f58bf377c62b7272dc019"},{url:"categories/update/index.html",revision:"5fe5f75c6dd4544e7974c792d580a2dc"},{url:"change-according-to-real-time/index.html",revision:"e8a36ec15943c908ae1cf3a209c58785"},{url:"change-title-after-first-time-viewing/index.html",revision:"486d49d8b40e3efb2f82090bee64de3a"},{url:"change-title-based-on-event/index.html",revision:"17c87ef4653f88963e81191ea23af796"},{url:"character-stats/index.html",revision:"42bf3acb548c6ffec16992e01d317303"},{url:"chatbot/index.html",revision:"f2775bacee87e21dc698e2c50e8c444b"},{url:"comments/index.html",revision:"a706288e098c257b0c6b2a8c40ec2620"},{url:"create-button-anywhere/index.html",revision:"242546771c3db4c575564797cefe4a60"},{url:"css/eurkon.css",revision:"07b1323340510d3da8294770138955c5"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"6fe8c53421d7474f1747ac6951ebbaff"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"6fb12e0f43b4faecb89da7623eceb4c4"},{url:"css/rightmenu.css",revision:"ee0441cf63ebe74721e536fb4ab3ba49"},{url:"css/siz.css",revision:"585b557e1b231d05664bab8980470e98"},{url:"css/swiper.css",revision:"f04e27cb700bfb4591777691ca8ac7c5"},{url:"css/swiperstyle.css",revision:"88d44949c0e7aa65bb9fe48e30e8a0f6"},{url:"css/var.css",revision:"cec56765ae31df868f7dbc497df2f7ff"},{url:"ctc/index.html",revision:"66edb3c89ed9b73f3abf538eb7147ffb"},{url:"custom-css/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"custom-css/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"custom-css/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"custom-css/index.html",revision:"1f12905d7c0f58f6cb7fbe7e075d2ac7"},{url:"custom-css/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"custom-css/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"custom-css/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"custom-css/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"custom-css/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"custom-css/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"custom-css/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-gallery-cg-screen/index.html",revision:"fdd42c898ac839f64a9340faf9de602f"},{url:"custom-loading-screen/index.html",revision:"e2d7bb24ca5da5dad94c4c0ad5b0e874"},{url:"custom-mouse/index.html",revision:"06d7efe638234a2cdbbe3be27813b23d"},{url:"custom-music-room-screen/index.html",revision:"b3590abc67afeb808ae4eb44f19e06cf"},{url:"custom-music-room-screen2/index.html",revision:"07527a958ee98693799acf7e3ba8901f"},{url:"custom-player/index.html",revision:"9eb531ab694ecc119989e91d6b781fda"},{url:"custom-preferences-screen/index.html",revision:"22af9799edb6f266ba6e0050e04bb561"},{url:"custom-say-screen/index.html",revision:"5ac7abcff6889f4db550f2bceb547fba"},{url:"custom-title-screen/index.html",revision:"02d806c44531a23f5da87a2dcf4742c5"},{url:"define-npcs/index.html",revision:"f3dd8044dd885e20b42e10814efd0de9"},{url:"dice-function/index.html",revision:"4c8cc68e40fcfbf6a3ecf4b8ea5f674f"},{url:"disclaimer/index.html",revision:"60302dca6bc6e8bf8502a038147e247d"},{url:"friends/index.html",revision:"e49d217fdba9a03eabb21fa90e6014c4"},{url:"gallery/index.html",revision:"4ea9dbcd8cbfa65c4dee0d2e950190db"},{url:"gallery/photo/bg/index.html",revision:"17ef9fc6979d74bb61ab30c42feef7d1"},{url:"gallery/photo/gui/index.html",revision:"3fcd5a5c33a1b67f4ad4d10cd20d6d58"},{url:"game-only-text/index.html",revision:"0d57d8c4f400e2c689d320aed4539c7b"},{url:"gui-017/1.webp",revision:"aa12c6f819750ab701a4757d4dc305d4"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"2d8e8806bb6f8d6fbc3840d7854c0c93"},{url:"gui-017/index.html",revision:"ba0a915bd1809e1b409a2b0250a5a5de"},{url:"gui-vertical-002/index.html",revision:"2221150b2a50a644815fafb8fa170d66"},{url:"gui012/index.html",revision:"b6e402cf8a331d05cf183339d2e8691b"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"084582ae030f4eec85f6df95a11a4b49"},{url:"gui018/load.webp",revision:"ea9228dd37e76ce9f4e2c153fc4e3db0"},{url:"gui019/index.html",revision:"6c2107650a114b322b0bb5089ba3ee53"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"4e2df27fd957041bc9934ba41fdd84cc"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"hexo-custom-mouse-disply/index.html",revision:"545983cb9b11cb562a1a9727c7d6aee9"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"d37ed9b8fb70b9a7703eb04625d74d52"},{url:"images-tip-function/index.html",revision:"eb8997a40d43f76cb8bc2e5fcc5f68fd"},{url:"images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"images/pawicons/32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"images/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"images/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"images/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"images/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"images/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"images/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/favicon_16x16.jpg",revision:"7170a7a0a8983fb2790e28c864648f5b"},{url:"images/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pawicons/favicon_32x32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"images/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/bmc.png",revision:"40b98209d9deb3e69053d4a559cc8a30"},{url:"img/cover/1.webp",revision:"75c4ca0e23ea27798c951e79cf118d88"},{url:"img/cover/2.webp",revision:"37a1fa535df37e8c5cf01def24fc9eeb"},{url:"img/cover/3.webp",revision:"ec6c922dd423211df47e8cd79493aacb"},{url:"img/cover/4.webp",revision:"896796dcf0a2b1f714060e1300972432"},{url:"img/cover/5.webp",revision:"06b21ba7e9d00ca7768252c51b3854af"},{url:"img/cover/6.webp",revision:"7e12d98e2bf9548379c39beba3a222d2"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/gib/1.webp",revision:"5be4619a8cf8b66551dedb272413d09d"},{url:"img/gib/10.webp",revision:"83a37dce9e5cfb132e1f5cc69ce4a758"},{url:"img/gib/11.webp",revision:"e0343acb272483692d9274223987cf19"},{url:"img/gib/12.webp",revision:"b1ca8b649c15f1e462a5b4c0b60f0d9c"},{url:"img/gib/13.webp",revision:"53e919448c1fd302d4ba93cf3adfaf2b"},{url:"img/gib/14.webp",revision:"a02f67a68a66dde2fa9430179dc5a092"},{url:"img/gib/15.webp",revision:"c98583025ce168f380b1a8cedef1f98c"},{url:"img/gib/16.webp",revision:"ae6ad26748f14367e42c298eb896e5e1"},{url:"img/gib/17.webp",revision:"11454179dca9c7538321eb5c7ddb62e5"},{url:"img/gib/2.webp",revision:"ce48b5614d628d9d5bebd2f5805cd038"},{url:"img/gib/3.webp",revision:"dd7dd4b6e72f1261f67cb61f78d40d68"},{url:"img/gib/4.webp",revision:"47498d3dea6081830aee230d468c960f"},{url:"img/gib/5.webp",revision:"0444f75e417e402551f7f2e397c4e6d8"},{url:"img/gib/6.webp",revision:"32eb9f3a488fa490bdc4a97a3b56bc47"},{url:"img/gib/7.webp",revision:"6335bcc03fd830ffff2b5d50bcf27674"},{url:"img/gib/8.webp",revision:"6741566622ae6db01c808f41626127c8"},{url:"img/gib/9.webp",revision:"738676086f5f13fb0b68d51f9db9536f"},{url:"img/gib/mononoke/1.webp",revision:"c1cecf43a07dd38a209755e5b284a97a"},{url:"img/gib/mononoke/10.webp",revision:"ed2e76d87d11c77c6b36c872372b9cbe"},{url:"img/gib/mononoke/11.webp",revision:"9220ccd14d4b5235b7b969587233164e"},{url:"img/gib/mononoke/12.webp",revision:"f059becb15d5c3844512f268564ed2a7"},{url:"img/gib/mononoke/13.webp",revision:"63012d48bf56e366bfb4b97707e62392"},{url:"img/gib/mononoke/14.webp",revision:"8b9025ca54749a1abaf648ae875380cb"},{url:"img/gib/mononoke/2.webp",revision:"fbff6e2629aa09b5129ef92315d9ecfa"},{url:"img/gib/mononoke/3.webp",revision:"34bc5b1ba588eb602f8c5e53eb13724c"},{url:"img/gib/mononoke/4.webp",revision:"ba858a1ff9036d595058b1c71876011c"},{url:"img/gib/mononoke/5.webp",revision:"7e826ccd99e889e61a966bbde6eb9b70"},{url:"img/gib/mononoke/6.webp",revision:"3cf011aabb2bef762e9feab2ca4a2336"},{url:"img/gib/mononoke/7.webp",revision:"775329857ad8cadac595d2e18dee2372"},{url:"img/gib/mononoke/8.webp",revision:"c5395b806757462a313078b6ae6c19de"},{url:"img/gib/mononoke/9.webp",revision:"1fe8c781e3c831a8321d1ef20f737aff"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"img/pawicons/32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"img/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"img/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"img/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"img/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"img/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"img/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pawicons/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_16x16.jpg",revision:"cd3428135e94f5a83aadb8d5ced778e6"},{url:"img/pwa/favicon_32x32.jpg",revision:"1257041ac1eb102a40768d4bfeff16a2"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"index.html",revision:"1d8c2a73e48c7ecceb1f19bd0a6f0693"},{url:"install-use-valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"install-use-valine/index.html",revision:"d48bfbba5e3e36a693bc0f2e3cad6046"},{url:"install-use-valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"install-use-valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"inventory-system/index.html",revision:"6674cf53f909520c04bf3e03ad774932"},{url:"items-sprites-effect/index.html",revision:"ae50e8d2cab27b6d63fba182cc568730"},{url:"js/countup.js",revision:"5f2f77ec867d7f85d3bdbad2bf804fac"},{url:"js/main.js",revision:"80de3021a5d1ba2ecc68d332b284c836"},{url:"js/rightmenu.js",revision:"e4b3044aa999f5c624cb1432ff11d15d"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightvn22-10-03/index.html",revision:"8fc5b3e7ffdee6d7d17ef9049f1b64fc"},{url:"lightvn22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightvn22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightvn22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightvn22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"lightvn22-11-24/index.html",revision:"3c377ea0eba3b73e2c22494d76def075"},{url:"likebutton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likebutton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likebutton/index.html",revision:"4fe592f2bc54bb7200e2e9a6b84f07ed"},{url:"link/index.html",revision:"3010d61115652abe76aae675749cd7bc"},{url:"make-butterfly-beautiful4/index.html",revision:"e25de38c40660d72a0f68a1b68ef9c6f"},{url:"map-puzzle-system/index.html",revision:"270b3a6507bd9d4c82707f53ef9eee51"},{url:"maple-effect/index.html",revision:"e6adb92a62f2a586af308f169dc357a2"},{url:"memberships-2/index.html",revision:"1b96e3dc64b16722137c01f9728a382e"},{url:"memberships/index.html",revision:"a9218cfa21a33c3d4dd35b0517f95559"},{url:"multiple-language/index.html",revision:"e933c1e4bbf85c9bd903c5820c615886"},{url:"new-year-event-2023/index.html",revision:"9a69f016e7fae57107e6466479e56156"},{url:"newsletter/index.html",revision:"7c16fd5600c3eb61a58d65f94b6874bd"},{url:"null/index.html",revision:"048ff3edec9867646656590f6dd62e2e"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvl-ctc/index.html",revision:"e47e8ced5bea4dee70c16b9f29a6dfc9"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"b9cd62bd70c006d7c0f701fb85537c61"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"openchatai-renpy/index.html",revision:"35337b389285c4d89be288b8964bd542"},{url:"original/index.html",revision:"40b2c3055be4ad6d592e99a271c411ae"},{url:"page/2/index.html",revision:"8d1d494b5ca32aa2e3c389195b7fc701"},{url:"page/3/index.html",revision:"d3d8ed15d2776329aa1b363b0a28464c"},{url:"page/4/index.html",revision:"ad4285afe4c4969544eb36f61c6874c8"},{url:"page/5/index.html",revision:"e0bd023c1d079be65536f67291e8fd21"},{url:"privacy-policy/index.html",revision:"9195217e99e107d74b86f8d81a411109"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-dialogue/index.html",revision:"17f64f600b56897e886f4aed07b8389f"},{url:"random-number/index.html",revision:"e05413d70138924dfb0e422cf7a3c407"},{url:"random.html",revision:"446d15c54f47caa21f7d6780cb78ae69"},{url:"release-017/index.html",revision:"05a7776a13d36525f0e91e81012de408"},{url:"renpy-basic/index.html",revision:"4e427233434891e4c5ef306fa408eac7"},{url:"renpy-crash-glitch-effect/index.html",revision:"dfb1dba3a57efd80ca81ae726a601786"},{url:"renpy-matrixcolor/index.html",revision:"06600995b8d0975042dcbabcc1491b17"},{url:"renpy-overlay/index.html",revision:"fdc33897d108b9e973a3a7ced2e1570e"},{url:"renpy-review/index.html",revision:"e57f44dd4e15330bd54b88cafcefd820"},{url:"renpy-typing-effect/index.html",revision:"6436c44d45d9a454643565df76b6beaf"},{url:"rpgmaker-assets-menu/index.html",revision:"1050fc2c70518dc14d2e349f52acc65e"},{url:"rpgmaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgmaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgmaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgmaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgmaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgmaker-create-a-new-map/index.html",revision:"fd84e9a1236d95f2b67307d5410753b3"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"8d36fb94a18f6977795c3700411d369e"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"518bbc80fb90ba1a05c64fc45e893a8e"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"178c3c768446df0d5ad3968da0b24cf3"},{url:"sakura-tree-background/index.html",revision:"69f842d5f22067a96989ed10a93239f6"},{url:"side-image/index.html",revision:"c77808e57c3ebfea94a8560bdb6c2f2c"},{url:"snow-effect/index.html",revision:"75c769f6aa1c3bd5e8448df78ee12399"},{url:"speaking-animation/index.html",revision:"55bc8ffe9ef8feeab15216493cdacc8a"},{url:"splashscreen/index.html",revision:"dfe3f646b4646e33bbc6d9a0cbdcd6dc"},{url:"sw-register.js",revision:"08b9cc6ae0bbafc9b7503e127c8bc9df"},{url:"sw.js",revision:"24ccc13d4460a439fa61ad272894ca7b"},{url:"tags/ai/index.html",revision:"cba7a9c68af6a2eba22a22f36bedf493"},{url:"tags/butterfly-beauty-diary/index.html",revision:"6902f8281f7a39c0c6a23c636b3f5b97"},{url:"tags/commision/index.html",revision:"5b89e152aeacc7517075eb8a76f70ae3"},{url:"tags/custom-hexo-theme-butterfly/index.html",revision:"cc6a6f080474259a741618fe70d756b6"},{url:"tags/custom-renpy-title/index.html",revision:"16bb2bb2ee2035b68eeddaf4d7cb2148"},{url:"tags/dialogue/index.html",revision:"862fba6c479f726a00e2e6fa80cf871a"},{url:"tags/effect/index.html",revision:"0f5d9f786199dc97cafb896dff47f05d"},{url:"tags/event/index.html",revision:"9251e3109cb70466fa7eada559ecdc02"},{url:"tags/Hexo-plugins/index.html",revision:"6b4c0272bac2a32e3323e3bb74b41502"},{url:"tags/hosting-own-website/index.html",revision:"40bf7b37be4eccaf9555a9a8ca098b84"},{url:"tags/index.html",revision:"5d619c080aeb3aa20d1dd7cba7d0cbe9"},{url:"tags/itch-io/index.html",revision:"6d679045ca036eaef719a6610a305ec3"},{url:"tags/light-vn-update/index.html",revision:"762725230daf6cbe5a7097ab3d44df8c"},{url:"tags/Light-VN/index.html",revision:"b3b917d82904533b29d06f56e5033379"},{url:"tags/nvl-maker/index.html",revision:"5cf8c853608526b4c82c05ddb6deaa2e"},{url:"tags/player-related/index.html",revision:"62ff0b820e21eb0f6a11faee82a83e6b"},{url:"tags/pro-tutorial/index.html",revision:"15eef22208e058001df7134e4ff272d8"},{url:"tags/pro-tutorial/page/2/index.html",revision:"fa6f0883a820021e0bb81869c881cf29"},{url:"tags/pro-tutorial/page/3/index.html",revision:"c702636e02900b26a396890b10742d37"},{url:"tags/renpy/index.html",revision:"3f1721fe534b94d8e9e6bb78502b48c9"},{url:"tags/rpg-maker-custom-map/index.html",revision:"c7d9422fcef2c214d6333ffa9753a14d"},{url:"tags/screen/index.html",revision:"0da1b5fb4a1b138dfa7dcc5ea74542d1"},{url:"tags/special-function/index.html",revision:"215408ea0cafaa95cb1027a33e3d7e75"},{url:"tags/tyranobuilder/index.html",revision:"dbef197ac7067453901e9e514f61f056"},{url:"tags/ui-assets/index.html",revision:"6fa9fc3626d7b30e6d5ce6ebd4869975"},{url:"tags/update/index.html",revision:"961e33a9671f296ef8038b2bf9e86dd8"},{url:"tags/upload-game/index.html",revision:"d47bc8efed95e19a607ea20494bf91b9"},{url:"tags/variable/index.html",revision:"ec59807f33f83c3a5c05d5f689debd34"},{url:"tags/visual-novel-maker/index.html",revision:"d27a4acb33dd5547507c0c480a877bc1"},{url:"tags/封面製作/index.html",revision:"e516b9db285065877c0d6b2e3b0b7961"},{url:"tags/背景素材/index.html",revision:"d41f24c4b8a78f4d23c99486b18a3877"},{url:"tags/隨機功能/index.html",revision:"ad218b1ad4fa574f56c06a182021a56c"},{url:"test123/index.html",revision:"0ef4d2d9948d69e601a8b32aa6dad7ac"},{url:"textbutton/index.html",revision:"e6f747989f1718d6403a4c938d6cf7ff"},{url:"to-do-tutorial/index.html",revision:"ce40f167780c0d050b316a700d10312d"},{url:"tools/index.html",revision:"bba83d7b7f87dbc8168cf774c7fac2e8"},{url:"transfer-to-hexo/index.html",revision:"6a9601a319925e263eb8c249456a4458"},{url:"tutorial-update-history/index.html",revision:"b81c1cb17b4bfb3cd19b59803158182b"},{url:"tyrano-name/index.html",revision:"728a8df13d78dde61dd8fee9a231239c"},{url:"tyranobuilder/index.html",revision:"dcc7fe7f975b01fe63e12e3e9a9ece75"},{url:"undefined/index.html",revision:"4fd05d30e647be4b38be48f4dd6fbb9d"},{url:"update-20221211/index.html",revision:"313734122d94a118b7cace39e7bf8876"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"6f2b7dce553dbe2790a9d4d1a021851b"},{url:"upload-your-game-itch-io/index.html",revision:"9aa6c0614c5d1bdd0290b8878e83aea7"},{url:"use-list/index.html",revision:"3b932e6b555c571319190fd2d9665975"},{url:"use-nvl-mode/index.html",revision:"637e53241b25113457388c8db66550e8"},{url:"useimage/index.html",revision:"be3ac86ec0d95ecf45fb700ac658c623"},{url:"variable/index.html",revision:"4b3045c9c46d53dcd3bb195502ddd025"},{url:"vnmaker/index.html",revision:"219ae56cad8c6d713d3075211da80c7f"},{url:"weather-effect-tutorial/index.html",revision:"a0f3ac569cddc560f5816ea53b88902c"}],{})}));
//# sourceMappingURL=service-worker.js.map
