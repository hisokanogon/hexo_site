if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const f=e=>a(e,c),b={module:{uri:c},exports:n,require:f};i[c]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"a285a1a22f22355f2addf9668b6640f9"},{url:"2024-future-plan/index.html",revision:"399ba165e5683e9de4c2e530aab56e04"},{url:"2player-battle-system/index.html",revision:"cb42452572e54870ac4d982400a4185d"},{url:"404.html",revision:"ee9eced26683695848d2f026c70b2d59"},{url:"about/index.html",revision:"9e77222082bacccda7d9fcb6e1841c02"},{url:"acg-creator/index.html",revision:"7f1444732172a4f40cc45f88fd9d2a53"},{url:"add-artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"add-artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"add-artitalk/index.html",revision:"fc15741843a6e0e489d1ef8844e48661"},{url:"add-artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"add-artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"add-artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"add-artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"add-artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"add-artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"add-artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"add-artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"d86a89125615e0e82e014e4e57183695"},{url:"animated-title-main-menu/index.html",revision:"af97310f606ba9020304f5adcb9a2603"},{url:"archives/2022/05/index.html",revision:"5a69b01a78032bc635dea7587a4d6ff3"},{url:"archives/2022/06/index.html",revision:"13b90e4073e4ecc789881e6d9f8769c9"},{url:"archives/2022/08/index.html",revision:"9323502c4ea925de197ee95ba5fe980f"},{url:"archives/2022/09/index.html",revision:"8f26dd0f074854bd188d6977be6f44bf"},{url:"archives/2022/10/index.html",revision:"38bd8682958df0b4c6f90c288c9c0b17"},{url:"archives/2022/11/index.html",revision:"38f1ef1fe887cb0f656fddcc8539236b"},{url:"archives/2022/12/index.html",revision:"4cb0c64f48d11690add71f7b6114d9a7"},{url:"archives/2022/12/page/2/index.html",revision:"d405f5ef1a40d7b469ee7086d38f66ad"},{url:"archives/2022/index.html",revision:"b00db8ce80d3bc76d871f6f5a3ced663"},{url:"archives/2022/page/2/index.html",revision:"ca779d7bd400a9d0bba136cfe5c7fd11"},{url:"archives/2022/page/3/index.html",revision:"ed76e7f5dcd2c77176bc91cc28cd4863"},{url:"archives/2023/01/index.html",revision:"cbe6b8713e321cf0e4e1ed0ab06013b5"},{url:"archives/2023/02/index.html",revision:"4735946f8ff85526f878de08502ddcac"},{url:"archives/2023/03/index.html",revision:"846e71fa95787410a4283100e209590f"},{url:"archives/2023/04/index.html",revision:"927166792fb6892c1a943006e342ef0b"},{url:"archives/2023/05/index.html",revision:"6b1df7a1609633a46519d2f510a56d36"},{url:"archives/2023/06/index.html",revision:"cc6be09f9c49acf37ac88e6496b7b9d1"},{url:"archives/2023/07/index.html",revision:"d059f6b882077ea0bc13f4f28e735da8"},{url:"archives/2023/08/index.html",revision:"e671f1104d9c426a9d46ee6e0197f982"},{url:"archives/2023/09/index.html",revision:"fa805bfcfbc81642f05f571aaa4d0df4"},{url:"archives/2023/10/index.html",revision:"b8e9e05b446580c5c20aa47dfc06fcd4"},{url:"archives/2023/11/index.html",revision:"37a841a9fbf79fff9d26e6e80f4bbb91"},{url:"archives/2023/12/index.html",revision:"83fb4954da013da06c7f9eb234564368"},{url:"archives/2023/index.html",revision:"f7ee840398ecea968da9f2bd8e10b7ed"},{url:"archives/2023/page/2/index.html",revision:"595783d18d1e40f8af9b0ea36b12c005"},{url:"archives/2023/page/3/index.html",revision:"496689dad5fbb21918f600079648e257"},{url:"archives/2024/01/index.html",revision:"7d82bf48b4035526522879e93e4c11b4"},{url:"archives/2024/02/index.html",revision:"09dabb148c08a20aa0c0b77b36cd1937"},{url:"archives/2024/03/index.html",revision:"7445d691062e0d83b4c96ef9324371fa"},{url:"archives/2024/04/index.html",revision:"0da0e4d23ff32bb4d6253684f988ed4a"},{url:"archives/2024/index.html",revision:"254ed9d0ece9f49f58536cd6692f4a76"},{url:"archives/index.html",revision:"335ea608746c11cb21377d355e394551"},{url:"archives/page/2/index.html",revision:"5949b848b16e776e02218bbf413e7450"},{url:"archives/page/3/index.html",revision:"cc2662d59bd098796c93d62d9df5b796"},{url:"archives/page/4/index.html",revision:"b734e1f3ce9b68ccf5921e202f2e5adc"},{url:"archives/page/5/index.html",revision:"f479fa7eeb8ca2e62dbefde1efc788ef"},{url:"archives/page/6/index.html",revision:"8ed6ab56c56a2ce4921bf4071a801f9d"},{url:"artitalk/index.html",revision:"384c7de9be6004620004f1a5d87d589c"},{url:"battle-beautiful/index.html",revision:"aa4f13650daa1b86b400903b93851198"},{url:"blur-effect/index.html",revision:"624e60ff18b36c534fcf9c93825cfd41"},{url:"butterfly-custom-tag/index.html",revision:"cfdc33a68bb22bdbd2e7b3dd5054fc32"},{url:"butterfly-plugins-faq/index.html",revision:"ae601754818098fa92f024a6f8523898"},{url:"butterfly-ui-change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"butterfly-ui-change/index.html",revision:"eaa8741c11db5b2eb08865034b8c6a15"},{url:"butterfly-ui-change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"butterfly-ui-change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"butterfly-ui-change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-ui-change2/index.html",revision:"942c07681597d24fbdb8d73f0856347f"},{url:"categories/announcement/index.html",revision:"265a29ab5c9d4e1dff3b013e3689a546"},{url:"categories/diary/index.html",revision:"baa8f86fd774c0251ae9fbf97eed84c1"},{url:"categories/game-dev/game-engine/acg-creator/index.html",revision:"f5d7fed1a9a7cd6969f8c8e6a0d039ea"},{url:"categories/game-dev/game-engine/index.html",revision:"2f987d809e859926d13ab503cc1831e8"},{url:"categories/game-dev/game-engine/lightvn/index.html",revision:"29ce440c9b7227e3f7b2b63598120e3d"},{url:"categories/game-dev/game-engine/nvl-maker/index.html",revision:"5d1fd81bbd3d1ce2a59c77fa18740cfc"},{url:"categories/game-dev/game-engine/page/2/index.html",revision:"ef30a0807b1f2453d814543bfb92fb7b"},{url:"categories/game-dev/game-engine/page/3/index.html",revision:"360ee882356111ec670b7d94fe54ec59"},{url:"categories/game-dev/game-engine/page/4/index.html",revision:"38c8280825ba6247b4f662653015455d"},{url:"categories/game-dev/game-engine/renpy/index.html",revision:"da8b519420e9e41ba5aa8b867d43c12c"},{url:"categories/game-dev/game-engine/renpy/page/2/index.html",revision:"f7f6945b4c9a533dd8a631206943237f"},{url:"categories/game-dev/game-engine/renpy/page/3/index.html",revision:"a37f3ea4f5509c64faa0e19b4d11d7fc"},{url:"categories/game-dev/game-engine/renpy/page/4/index.html",revision:"6a03da5a50c79a73bc1eda61725bfc3a"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/index.html",revision:"c1a0ad097616f74bf848ee8a1bb09960"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html",revision:"903b12dcf583305992fc4a74a488c4f8"},{url:"categories/game-dev/game-engine/renpy/tutorial/index.html",revision:"1e2e72d0ae66d261f4137cae1616cf0f"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/2/index.html",revision:"4e9090a30f9536d6461e4a288badfd0d"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/3/index.html",revision:"1ca63ecdcd57eb71a4c16c07486522c5"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/4/index.html",revision:"71abc2a06b3b906044a2693e92365d83"},{url:"categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html",revision:"880fe762cef52f3f3fca4d33456d9a37"},{url:"categories/game-dev/game-engine/rpgmaker/index.html",revision:"362702b89b6ad3f9e52ad934a1db10a9"},{url:"categories/game-dev/game-engine/suika2/index.html",revision:"60a6534015abbc99951f40cacc74f41c"},{url:"categories/game-dev/game-engine/tyranobuilder/index.html",revision:"ec704b7a496d407d48e21f7e27070c0e"},{url:"categories/game-dev/game-engine/visual-novel-maker/index.html",revision:"e1bacdf84062d068975d092cdd72b4eb"},{url:"categories/game-dev/game-engine/webgal/index.html",revision:"874e550a320019189747e948a3230fc6"},{url:"categories/game-dev/index.html",revision:"0fde0f1d504cc619c22216fec46ad664"},{url:"categories/game-dev/page/2/index.html",revision:"5107227078f7c59f491f5b8bc7cb0369"},{url:"categories/game-dev/page/3/index.html",revision:"db7b1a16d265e209cdfb215a55e98e72"},{url:"categories/game-dev/page/4/index.html",revision:"de2c1bccf7e091a603560971c13a8815"},{url:"categories/game-dev/page/5/index.html",revision:"5d4ffc2f8beee9995999f7e0dd844e3f"},{url:"categories/hexo/index.html",revision:"7ccd6230afab942ce1328372ff4ec268"},{url:"categories/index.html",revision:"76a4c812a104a5951cd1f4117690ce29"},{url:"categories/material/index.html",revision:"2a4c59cdcf76e20ebbf7f1898329fd7e"},{url:"categories/update/index.html",revision:"21f36ddbde138e80ce72d27636ddc19f"},{url:"change-according-to-real-time/index.html",revision:"9c52d03ad6f0fb4eea6bf0adf0a29234"},{url:"change-character-info/index.html",revision:"9d8b190c751c37be84c984dd382019a5"},{url:"change-title-after-first-time-viewing/index.html",revision:"7ba4fca11444daa3b685fdc0f9e71c8b"},{url:"change-title-based-on-event/index.html",revision:"330199c18f37ab6324db327404423e81"},{url:"character-interaction/index.html",revision:"62a8a106f9e22db84a809480813d0880"},{url:"character-stats/index.html",revision:"2ee97e0ca940751936e5cf1693d4c422"},{url:"chatbot/index.html",revision:"d30c42d53f339928912cf1f28919ba6b"},{url:"choice-time/index.html",revision:"c65e387691cbaefb184c7e250e107f8d"},{url:"comments/index.html",revision:"a6da00952b82d08f7d9a2d872698b0c9"},{url:"commission-info/index.html",revision:"b8dd8c7bd97246bf1abd82ba90d92554"},{url:"count-login-number/index.html",revision:"8accb48ecdfb7a214b1418ed9004483e"},{url:"create-button-anywhere/index.html",revision:"21a044805467193276818b813f06360c"},{url:"css/eurkon.css",revision:"3c87c04a06931967aff60c45161c2d32"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"240a968055084720d83c84baa0bb699f"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"50933fc6970dfe9b991d25589eb8aa21"},{url:"css/rightmenu.css",revision:"920429f30c1c334bc98ac3989229285f"},{url:"css/siz.css",revision:"ba918484782f0a1bb058c710afcd2673"},{url:"css/swiper.css",revision:"5a51ea2c4869c36fbfa0fbc70d1d84ae"},{url:"css/swiperstyle.css",revision:"55e3ac7a66c454b60f7428de07c4acde"},{url:"css/var.css",revision:"3a45c27310cbf2ca1d565f33be32d24e"},{url:"ctc/index.html",revision:"aebb99227fb86e492725e6e5ec1652f8"},{url:"custom-css/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"custom-css/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"custom-css/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"custom-css/index.html",revision:"e78751316f80fb8c3e41c80581b15ba2"},{url:"custom-css/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"custom-css/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"custom-css/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"custom-css/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"custom-css/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"custom-css/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"custom-css/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-gallery-cg-screen/index.html",revision:"8cb59f2968e14910fbea647766fc549d"},{url:"custom-launcher/index.html",revision:"7a336b403e794e7b33cb5cbc842b17eb"},{url:"custom-loading-screen/index.html",revision:"4d6c02a72656c92771733bdbdec10f95"},{url:"custom-mouse/index.html",revision:"f23ff8ba3fd9628c2613da920bac0830"},{url:"custom-music-room-screen/index.html",revision:"7fb5ccf1592b182f60df2d2b6711ff04"},{url:"custom-music-room-screen2/index.html",revision:"d947dbc08720a7b6a0bd877f5a624d89"},{url:"custom-nvl/index.html",revision:"7b5b6e8dc7f03bd078bc9ff48d83a3f2"},{url:"custom-player/index.html",revision:"d23b2051795b02b61ace445f5115a796"},{url:"custom-preferences-screen/index.html",revision:"64e6626a99434de989f37205d07cebee"},{url:"custom-say-screen/index.html",revision:"30905f395061a0d9c05846371c22ec87"},{url:"custom-title-screen/index.html",revision:"923c6b22279157822b11cfa505c5076c"},{url:"define-npcs/index.html",revision:"c65f6cad60f1d4c2006fdc5f0103595b"},{url:"delete-save/index.html",revision:"1506ed99a6a9bb1a4e82e4f80c2ba450"},{url:"dice-function/index.html",revision:"9e1f4419e64bbb5c348381f9a5b363ad"},{url:"disclaimer/index.html",revision:"d17e0e833f2ef596661a6bac4b18066b"},{url:"display-immediately-all-dialogues/index.html",revision:"17684b66721950cb2400a85b76cb1445"},{url:"display-real-time/index.html",revision:"bdebf26b928c2caab137f381ea325dbb"},{url:"enter-name-screen/index.html",revision:"fbff393d08670971dc9eaf1fa94ac63c"},{url:"export-game/index.html",revision:"ad60c8b804b238ab2ce740497d1f413a"},{url:"faq/index.html",revision:"0c475acd9520620025e24129c8cec667"},{url:"friends/index.html",revision:"2f0979b331a6a78f0eeeb0d0a05d9c0e"},{url:"gallery-template-assets/index.html",revision:"192eb535faed285fa9a0e9a82bc08c9b"},{url:"gallery-template-default-ver/index.html",revision:"a9435173c27bf5df90ca7a92a9e166f2"},{url:"gallery/index.html",revision:"5c6e538805a8edbea594c43c3ae71a11"},{url:"gallery/photo/bg/index.html",revision:"f4621bcaa472550db674fccd6f4c3a2b"},{url:"gallery/photo/gui/index.html",revision:"c70a5c40d0612b4199829d43d7d108ca"},{url:"game-only-text/index.html",revision:"eee66cf017190be89e4928a71b9ce61a"},{url:"gui-017/1.webp",revision:"cb164e6304824ee23aa636d5c8bff293"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"3a14857f027fc4a86fc6173b78140ded"},{url:"gui-017/index.html",revision:"053a9fdf39d573b262bba90e8ed6fa51"},{url:"gui-vertical-002/index.html",revision:"7b7a5221edcd25d0cb01b25c9388d759"},{url:"gui012/index.html",revision:"652a5524a156bd962418a13cf2f8018e"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"1cd17bb7fa51e6353da434b9b1111cf3"},{url:"gui018/load.webp",revision:"bc4fd522772a6852fda7af18b3f17b12"},{url:"gui019/index.html",revision:"21f5287e22bce0534cbac892106e6a25"},{url:"gui020/index.html",revision:"73dbc72401efeec33b2486394eeea675"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"bf2646e455e8d855037ecb35b422cddf"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"hexo-custom-mouse-disply/index.html",revision:"339ed441bc3c6f73a7e811177be92996"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"37561527244485295515803b61bb044b"},{url:"images-tip-function/index.html",revision:"081eb22d02c415a61a6a743227c793b3"},{url:"images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"images/pawicons/32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"images/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"images/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"images/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"images/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"images/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"images/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/favicon_16x16.jpg",revision:"7170a7a0a8983fb2790e28c864648f5b"},{url:"images/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pawicons/favicon_32x32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"images/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"images/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"images/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"images/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/bmc.png",revision:"40b98209d9deb3e69053d4a559cc8a30"},{url:"img/cover/1.webp",revision:"75c4ca0e23ea27798c951e79cf118d88"},{url:"img/cover/2.webp",revision:"37a1fa535df37e8c5cf01def24fc9eeb"},{url:"img/cover/3.webp",revision:"ec6c922dd423211df47e8cd79493aacb"},{url:"img/cover/4.webp",revision:"896796dcf0a2b1f714060e1300972432"},{url:"img/cover/5.webp",revision:"06b21ba7e9d00ca7768252c51b3854af"},{url:"img/cover/6.webp",revision:"7e12d98e2bf9548379c39beba3a222d2"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/gib/1.webp",revision:"3a9c61bd832c972161a4c1236e8932fd"},{url:"img/gib/10.webp",revision:"a8bf147229785e8287f71465e8e2184d"},{url:"img/gib/11.webp",revision:"2ee1e23c6795861b209660c3318452c0"},{url:"img/gib/12.webp",revision:"8474e1ace21041b4d23ef81699e80ea5"},{url:"img/gib/13.webp",revision:"b81144a83d8b8bdac63cc2c155adcf7c"},{url:"img/gib/14.webp",revision:"933a480a83f392bffb0d690964248eed"},{url:"img/gib/15.webp",revision:"0fea3990e5ccc0db12506ce55bb85e5f"},{url:"img/gib/16.webp",revision:"396b012a1baa6d7542df1cd4f92aa33b"},{url:"img/gib/17.webp",revision:"327cc150630dd9abb577be1708c7e43d"},{url:"img/gib/2.webp",revision:"71cd303200dbab88eea0c5565f0dfe88"},{url:"img/gib/3.webp",revision:"d6a489bd5309b5e0972e054b95f8e346"},{url:"img/gib/4.webp",revision:"c63440486dac3ae824221ab996f7b5cb"},{url:"img/gib/5.webp",revision:"5e12e70e4ba0a994673fcd091b3cc44d"},{url:"img/gib/6.webp",revision:"699a5ed1daa416539598e302984dc5a7"},{url:"img/gib/7.webp",revision:"b1a6db37ce52de0d50792128da9b9f4c"},{url:"img/gib/8.webp",revision:"7a472f0077feb6f7901446a419012ca0"},{url:"img/gib/9.webp",revision:"1a7e4ae1712bad270688d7346ad2fb00"},{url:"img/gib/mononoke/1.webp",revision:"d8201509fe441fb29173e6ef2878b618"},{url:"img/gib/mononoke/10.webp",revision:"f963257315e72440575413d673baff64"},{url:"img/gib/mononoke/11.webp",revision:"98b4003a98c15f40acfbbcf6c7dd4ea2"},{url:"img/gib/mononoke/12.webp",revision:"a6347a9c0a47dede6ca41722a5a1368b"},{url:"img/gib/mononoke/13.webp",revision:"4ad91e7917dfe78413884a35bf45a3b9"},{url:"img/gib/mononoke/14.webp",revision:"7b59dc953f4333a3941f092aaa39b663"},{url:"img/gib/mononoke/2.webp",revision:"59e74291fb091b32cc4e4291a25f846f"},{url:"img/gib/mononoke/3.webp",revision:"2eff7ee46059be1118891e976e96e98a"},{url:"img/gib/mononoke/4.webp",revision:"6823ddd1e470ed0c6c92c6bf93fcafbb"},{url:"img/gib/mononoke/5.webp",revision:"f873ec8172aef5364543eafc98bb7805"},{url:"img/gib/mononoke/6.webp",revision:"aef6f12f2284f2a7d839206d3a71a0e5"},{url:"img/gib/mononoke/7.webp",revision:"fbfcdadb4b5f6eed1492fe7f109c2bed"},{url:"img/gib/mononoke/8.webp",revision:"4f02248750fd90e1fc6227f42a4135f1"},{url:"img/gib/mononoke/9.webp",revision:"ef22b303f1cce87b3ab226801fba5361"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"img/pawicons/32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"img/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"img/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"img/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"img/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"img/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"img/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pawicons/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"in-game-change-size/index.html",revision:"cac6bf7baf1d7548a1198fe471f35013"},{url:"index.html",revision:"265ecbf925101aafc5f5f7279c46063e"},{url:"install-use-valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"install-use-valine/index.html",revision:"896504597d0f4666c27525e40de1fd74"},{url:"install-use-valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"install-use-valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"inventory-system/index.html",revision:"f4cf47e6f24855e2166837b4d63f37c9"},{url:"items-sprites-effect/index.html",revision:"ceef5b6ed6823b0505aca1c8e21d2557"},{url:"js/countup.js",revision:"04397b967e3ec0c509586356266b3ded"},{url:"js/main.js",revision:"80de3021a5d1ba2ecc68d332b284c836"},{url:"js/rightmenu.js",revision:"e4b3044aa999f5c624cb1432ff11d15d"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightvn22-10-03/index.html",revision:"778675efaeffcb004f91b83baed0ff86"},{url:"lightvn22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightvn22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightvn22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightvn22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"lightvn22-11-24/index.html",revision:"d559aae6e67a9d9699ae6501731ac40f"},{url:"likebutton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likebutton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likebutton/index.html",revision:"ca4d3c2fb195a4b7d35c3473be3ca54d"},{url:"link/index.html",revision:"f8d850b4e26bca65c180d7a691798879"},{url:"login-reward/index.html",revision:"16edc159ca299f008c917e2d3912fcb0"},{url:"make-butterfly-beautiful4/index.html",revision:"b6e634cb9c77be96254023f6d75f0815"},{url:"map-puzzle-system/index.html",revision:"3b6ff0dc0a06c5dbafb3617c7624182c"},{url:"maple-effect/index.html",revision:"9a84a70bd646efc95716980a075d836b"},{url:"memberships-2/index.html",revision:"c1574135415d348373bbacf07ab3d87d"},{url:"memberships/index.html",revision:"4a9fa3c540e0742d5b095004d41afacc"},{url:"multiple-language/index.html",revision:"70a42d863749b7ad358f6d45fe2509c1"},{url:"name-input-assets/index.html",revision:"89f58191fcf6e79ab20048439a69f6c6"},{url:"new-year-event-2023/index.html",revision:"1b66771ef780ff44cfa897b0be34d2d7"},{url:"newsletter/index.html",revision:"f87b97b3f2020a5a05e86fc29416a326"},{url:"nsfw-limited/index.html",revision:"d9b9b350e97bd55946483620dc5be5e9"},{url:"null/index.html",revision:"b8c5d6eed501f8b2d37f43454cb03e6b"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvl-ctc/index.html",revision:"57dd00280eeb1ea5aec7e3f81e1a3aa4"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"a9a9c8e3e0364f08cd816d958d50b7dc"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"open-external-link/index.html",revision:"55118dc3b101dda1aeaffbe52b93d38b"},{url:"openchatai-renpy/index.html",revision:"ff24ba6ebf6b72da157396570158ae33"},{url:"original/index.html",revision:"833ca8f13252aed1cc586f714a19f4b0"},{url:"page/2/index.html",revision:"97efab57c5a707e20a75fd6d10e09f16"},{url:"page/3/index.html",revision:"2afbfb6559fab3dd71f06be8792f00bb"},{url:"page/4/index.html",revision:"343371c1feab65b67d78cbb0a358cfa4"},{url:"page/5/index.html",revision:"44f121ca8f4b64ea0b94763280323e8b"},{url:"page/6/index.html",revision:"60722400421726887aeb3ba9daa36915"},{url:"point-pop-up-assets/index.html",revision:"086322c0e66a9c26382754156cc3b6ad"},{url:"pop-point/index.html",revision:"71cc85935861fb3751be443a8bed81e9"},{url:"privacy-policy/index.html",revision:"a0be2fef57a3c27d2bb83933986fcedb"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-dialogue/index.html",revision:"54a04aa39628cf782bba6cc0fc8f4f2b"},{url:"random-number/index.html",revision:"b5120c4115317fa2cb001cd932e7d59e"},{url:"random.html",revision:"fa9c6ecc266ca121f6436ad2dfe8571c"},{url:"release-017/index.html",revision:"52c48cbfb1d6cea641401305845fdf47"},{url:"renpy-basic/index.html",revision:"3137fe64a83606a302ecc2c468cc6978"},{url:"renpy-crash-glitch-effect/index.html",revision:"4de035ec855e96554a0e7b4f2bd9eb6b"},{url:"renpy-flip-image/index.html",revision:"3871115b38d21e75880f0783735a60a4"},{url:"renpy-matrixcolor/index.html",revision:"4dd1ee72d4541f79178e7396e5b96a86"},{url:"renpy-overlay/index.html",revision:"96c534d299b40273dba5c8de0d0342dc"},{url:"renpy-review/index.html",revision:"ace2d53e47efeca65cc3976d14e4701f"},{url:"renpy-typing-effect/index.html",revision:"00a8ec1d1d20928d493d1faf0623d257"},{url:"rpgmaker-assets-menu/index.html",revision:"dd64aa4899aac4205b79608780b28cb8"},{url:"rpgmaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgmaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgmaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgmaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgmaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgmaker-create-a-new-map/index.html",revision:"777e3744dbb3e207ce0875efc2bd35e8"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"3f7457af595f0f694482e60467fce6d4"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"0bc69e503951f2798de7022de5fd2c7a"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"d784e9bfd7c73862065700ab0cd01fef"},{url:"sakura-tree-background/index.html",revision:"23f068bd5acf2e523c7ceffc5e5e94fc"},{url:"selected-button-style/index.html",revision:"f57b3c348d9571cc39ad868c5fd5dd56"},{url:"show-variable/index.html",revision:"c3df171bb688a2d2d4111c421e745d74"},{url:"side-image/index.html",revision:"c7c0db238930f4a8c2e807e54de88ba4"},{url:"snow-effect/index.html",revision:"52cc90b66a45533affeb94ecfe2d1395"},{url:"speaking-animation/index.html",revision:"c8ec0e697a847adb4f26cfb5884ef250"},{url:"splashscreen/index.html",revision:"4775d3efd506b8fd9013b5d8f636b7b8"},{url:"suika2/index.html",revision:"b8e383cb375672bdf382d7b3bac32737"},{url:"sw-register.js",revision:"c4beb6256ecc2bb942e378ba624ac2fc"},{url:"sw.js",revision:"e3da863be20e1c6bbabc27a628416525"},{url:"tags/acg-creator/index.html",revision:"509385614af0ff1b7cbb1ebb0a9ad75f"},{url:"tags/ai/index.html",revision:"5a09c09e79a4a14fd2c515005185bcb4"},{url:"tags/butterfly-beauty-diary/index.html",revision:"a0460ddfa72732155a07669f618f7a4a"},{url:"tags/custom-hexo-theme-butterfly/index.html",revision:"10c6eee67ad639054fb10bd77232cd07"},{url:"tags/custom-renpy-title/index.html",revision:"ae9793b17ce3c896a1e61abf0ab22965"},{url:"tags/dialogue/index.html",revision:"0ca72911d9cd7af54c77b380107b831c"},{url:"tags/effect/index.html",revision:"a4316094e4108b6a280aaa10e3485fb8"},{url:"tags/event/index.html",revision:"df42d9b7d319296031d09cf46d26a7b1"},{url:"tags/Hexo-plugins/index.html",revision:"6070b6b9000a33e9ff6019246882c257"},{url:"tags/hosting-own-website/index.html",revision:"81b5ea565029806c4235196dfe330bec"},{url:"tags/index.html",revision:"89bdc4ec180fdfd76e94784f14057ddd"},{url:"tags/itch-io/index.html",revision:"bb79d97048e4b115c58888700ece61cd"},{url:"tags/light-vn-update/index.html",revision:"b2baca1ea1d60355f104eea969f741d7"},{url:"tags/Light-VN/index.html",revision:"6ca02822140f17cefb5ac584048ad303"},{url:"tags/nvl-maker/index.html",revision:"6372ec60cbcff518c343bfef8cc39e4f"},{url:"tags/player-related/index.html",revision:"ec393be126d9d8d5342d45e8221a9337"},{url:"tags/pro-tutorial/index.html",revision:"bbcaa59b164d43ee0c4ba0b4c70639cb"},{url:"tags/pro-tutorial/page/2/index.html",revision:"e69e8de5f51f9e29719278dd08a929b5"},{url:"tags/pro-tutorial/page/3/index.html",revision:"1fee3ca052c3a1674424e3847dda71fe"},{url:"tags/pro-tutorial/page/4/index.html",revision:"220afaa2b87b60005f4e00d2d63f7ff5"},{url:"tags/renpy/index.html",revision:"e098cb03fc63922c2099f878fc0c7b2d"},{url:"tags/rpg-maker-custom-map/index.html",revision:"59a2b69afd192a40645f881ef2f5a11d"},{url:"tags/screen/index.html",revision:"f8de2e099168633849041c8eb71c2adb"},{url:"tags/special-function/index.html",revision:"c77427127c4500d82bbcd033aaae589c"},{url:"tags/suika2/index.html",revision:"fb68b415985caf151f94e90075871199"},{url:"tags/tyranobuilder/index.html",revision:"93d92259a5b70093e02ffae769365c45"},{url:"tags/ui-assets/index.html",revision:"75032e49bf7a81d324f903a280b180a5"},{url:"tags/update/index.html",revision:"a0bf5f11ed44aedcdaf7dfcf146d8af5"},{url:"tags/upload-game/index.html",revision:"703741d7fb40c884c508c1a7c2973571"},{url:"tags/variable/index.html",revision:"3df14d8e86ed3c21c9009a84836252a8"},{url:"tags/visual-novel-maker/index.html",revision:"35d43b5a8ad45b50b98b450b3557f76b"},{url:"tags/webgal/index.html",revision:"0ae1f15d484fe0d4ec1262cf48460cb8"},{url:"tags/封面製作/index.html",revision:"61ccd98f17a1f118d8acc7e1753409b0"},{url:"tags/背景素材/index.html",revision:"22b5a5015d3c02b30142f6991f327403"},{url:"tags/隨機功能/index.html",revision:"3d265112d9c2760184977712b5fbdb17"},{url:"test123/index.html",revision:"94f469b312c6d7c992ebc883831801c7"},{url:"textbutton/index.html",revision:"22229fc3b0c6245bd63986b52df3d828"},{url:"to-do-tutorial/index.html",revision:"948641e80ff814721a6fe022a1dea897"},{url:"tools/index.html",revision:"ca23731c19132ff883deeeb5fc659faf"},{url:"tooltip-function/index.html",revision:"d777f61d6d5b716c7fad75970dbe845c"},{url:"transfer-to-hexo/index.html",revision:"1b56ce607cc56569a0604730ebacc35a"},{url:"tutorial-update-history/index.html",revision:"93d960f88e96ed8d8e022c8c64200a61"},{url:"tyrano-name/index.html",revision:"b8cb17e59a36d777c265e124e5c998bf"},{url:"tyranobuilder/index.html",revision:"205f77fae81291126076a9d34239c190"},{url:"undefined/index.html",revision:"b68890e4a8b31f51140bc4121ea632c5"},{url:"unskippable-video/index.html",revision:"e75501a747d9a8b54ed0509279a9c70c"},{url:"update-20221211/index.html",revision:"f377600873dc15b763ba640922d30302"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"8f2097d630b526a10ffea831f029b3ba"},{url:"upload-download-save/index.html",revision:"a7526018cb715373ee7be223209b8bfc"},{url:"upload-your-game-itch-io/index.html",revision:"66e5bafb4ba8ad52420a33a40ba84389"},{url:"use-list/index.html",revision:"6671e1a6ed8cb472ff721d8ad4a65ef9"},{url:"use-nvl-mode/index.html",revision:"62f999c26e1bbd198862eb0bf3508d79"},{url:"useimage/index.html",revision:"e2cb9dd0b872c0855a1f11444dc193e7"},{url:"variable-change-image/index.html",revision:"aeda026032a2b9af30e1a03dd3d315bb"},{url:"variable/index.html",revision:"408cbe9c43c19c9e762e78eb23ec483d"},{url:"vibration-function/index.html",revision:"6bab58d00af218e34a95b41818aa4510"},{url:"vnmaker/index.html",revision:"e1b093cd460c25bc5b6daccd5bc30513"},{url:"weather-effect-tutorial/index.html",revision:"985cd1de691f36f11fec682b9eb0b469"},{url:"webgal/index.html",revision:"702a45a8893ea83a7ef86c617efd72ee"}],{})}));
//# sourceMappingURL=service-worker.js.map
