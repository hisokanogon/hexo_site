if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const f=e=>a(e,r),b={module:{uri:r},exports:n,require:f};i[r]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(c(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"380c5a3f4cecef256a81b778eba05ca2"},{url:"2024-future-plan/index.html",revision:"87c658cf629c721edad103a356bdacd1"},{url:"2player-battle-system/index.html",revision:"384251ebaae362986a5280e385f48731"},{url:"404.html",revision:"96fa70dceb066d55f80e6d0a84589f40"},{url:"about/index.html",revision:"632d4ae69969a5c11ef1969c0db24252"},{url:"acg-creator/index.html",revision:"3d3ab3f1126211705003a198335ea4bf"},{url:"add-artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"add-artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"add-artitalk/index.html",revision:"78f57e67cb6fefc2545effd0f2851414"},{url:"add-artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"add-artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"add-artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"add-artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"add-artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"add-artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"add-artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"add-artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"3015807ec6087e59742fcec16dfe109f"},{url:"animated-title-main-menu/index.html",revision:"783ba7a2d705470a17bf4b12bbcfe566"},{url:"archives/2022/05/index.html",revision:"15f9ac0eb0245ef4f1e411ec41726ee5"},{url:"archives/2022/06/index.html",revision:"ec8b8dacfe36883d564f7655f21f6049"},{url:"archives/2022/08/index.html",revision:"c6a55ba9be2a51d0e928b9e21dcf8a86"},{url:"archives/2022/09/index.html",revision:"66e6f425bdc444fe156db23ad313be2f"},{url:"archives/2022/10/index.html",revision:"8e469e676e8a28ccbe904b61ab02a643"},{url:"archives/2022/11/index.html",revision:"88f8d45738e101ad162e5196bfe6323e"},{url:"archives/2022/12/index.html",revision:"a109fbbefadf7ffc77f34bbfdf5a6925"},{url:"archives/2022/12/page/2/index.html",revision:"035bb075979a3902f7d2b86b4f1cd4fe"},{url:"archives/2022/index.html",revision:"db57041da82050b3f84cbc79b714145e"},{url:"archives/2022/page/2/index.html",revision:"a75313ed552c45c1fbf05ff91efc5192"},{url:"archives/2022/page/3/index.html",revision:"22e6362a7cd0f2ef0baf1cfe3456ddbd"},{url:"archives/2023/01/index.html",revision:"c6e044462752aa7413b1b78fcdbb456f"},{url:"archives/2023/02/index.html",revision:"2d21b12397a5919645611932e0183b13"},{url:"archives/2023/03/index.html",revision:"3f50aeee61399d0ac36a17d8eaf6f728"},{url:"archives/2023/04/index.html",revision:"68fb9bac3cb288365183234674da7686"},{url:"archives/2023/05/index.html",revision:"f94c1c88c59a2fb38e25e25781c6e21b"},{url:"archives/2023/06/index.html",revision:"7702b61dd09cf5211e17bb3153522517"},{url:"archives/2023/07/index.html",revision:"ce70a006eaf25368f72381159a7b27f9"},{url:"archives/2023/08/index.html",revision:"11bacb4a4d73ca291ff03bccc9470470"},{url:"archives/2023/09/index.html",revision:"71d831cbf8d6a5225d19a6c509225ba9"},{url:"archives/2023/10/index.html",revision:"2ab687fcdd11b7fd9f913d1b86f08bf6"},{url:"archives/2023/11/index.html",revision:"de9f401a3df70188a8bcdd697fc902c3"},{url:"archives/2023/12/index.html",revision:"c93200429f0cdcdc25fa84330f766dc0"},{url:"archives/2023/index.html",revision:"0b9c9067ec4121ce09341ff85b795e7d"},{url:"archives/2023/page/2/index.html",revision:"751afbcacc0c400f73885554f1fcbcfe"},{url:"archives/2023/page/3/index.html",revision:"01abdb92bcf1422dcbcb7e00aff439c2"},{url:"archives/2024/01/index.html",revision:"56c71ccc06de2b72b56f519d151db1b6"},{url:"archives/2024/02/index.html",revision:"541c2cd16b4737bc6b19613284b96043"},{url:"archives/2024/03/index.html",revision:"3c57a9d24fcb89890e585fa3bb250515"},{url:"archives/2024/index.html",revision:"e2ee7426a3f68949069b6341c8800fdc"},{url:"archives/index.html",revision:"4a30153a1531b63173c999a23fc81797"},{url:"archives/page/2/index.html",revision:"38c267f95d45982b594ed7ff6fa808ef"},{url:"archives/page/3/index.html",revision:"a7dd49ef49b5579a43b8adea520c7374"},{url:"archives/page/4/index.html",revision:"3f078c4c4949796367053a501d9bb0ae"},{url:"archives/page/5/index.html",revision:"224881f35c7c693a0b0caff15c427ea8"},{url:"archives/page/6/index.html",revision:"37eb3ab3fff0629f4ec39ee57e7a3391"},{url:"artitalk/index.html",revision:"a09f2fcef62269153ecb62b9d5ad96d3"},{url:"battle-beautiful/index.html",revision:"850cdc71621abfcfa117edc064c73003"},{url:"blur-effect/index.html",revision:"45063cd6a17f846960d159b3d5fdfc90"},{url:"butterfly-custom-tag/index.html",revision:"848dc037befaa4fa4bc5a30f3e3460f4"},{url:"butterfly-plugins-faq/index.html",revision:"14495968ce91ebdda3fa30a75a784725"},{url:"butterfly-ui-change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"butterfly-ui-change/index.html",revision:"b12e4e856a02e095fb37f475d6e1acf4"},{url:"butterfly-ui-change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"butterfly-ui-change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"butterfly-ui-change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-ui-change2/index.html",revision:"b8aff429b4c1a7d6339ab3b65ccf06b4"},{url:"categories/announcement/index.html",revision:"60bd19c4f18a90b0909a432197b10079"},{url:"categories/diary/index.html",revision:"ebd3732f5a62cdd7f29bf81b26f76a9e"},{url:"categories/game-dev/game-engine/acg-creator/index.html",revision:"4bd1c804ec6947817b6428c56bd8ec3d"},{url:"categories/game-dev/game-engine/index.html",revision:"16c77c1d3d6d531d7f264ee277f35fca"},{url:"categories/game-dev/game-engine/lightvn/index.html",revision:"345cfd29e3f5e25da464b5c2639a75e6"},{url:"categories/game-dev/game-engine/nvl-maker/index.html",revision:"f21250079962f8b1150761e6028c22c8"},{url:"categories/game-dev/game-engine/page/2/index.html",revision:"17c325fa7a3d0eb2cb0d1dcbe66c9c36"},{url:"categories/game-dev/game-engine/page/3/index.html",revision:"8f63688fa8a843860dbbb668659158e8"},{url:"categories/game-dev/game-engine/page/4/index.html",revision:"3dcdebe93a2577658e5921ca64a3e0b1"},{url:"categories/game-dev/game-engine/renpy/index.html",revision:"246bdd67d94c4c754771bff3a6116a1c"},{url:"categories/game-dev/game-engine/renpy/page/2/index.html",revision:"bdbdfcf68860d0f04504a55e16de43a6"},{url:"categories/game-dev/game-engine/renpy/page/3/index.html",revision:"c52a6f07d3507cc77914125b1f6a1b2d"},{url:"categories/game-dev/game-engine/renpy/page/4/index.html",revision:"3e5acc8542978bffc8dfc62c22d6755b"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/index.html",revision:"916253a87984ed54113d6130b7d14632"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html",revision:"efefe4dbae21bd940244f6dfb1bfd4ba"},{url:"categories/game-dev/game-engine/renpy/tutorial/index.html",revision:"3248eab10cec735c8a40aca2d9168912"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/2/index.html",revision:"e4b0e05b35caa22437d036d62f848fe6"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/3/index.html",revision:"0402953775c4bad49dcb26331cce0004"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/4/index.html",revision:"aaf29c2d591ab90f8df986c2e4231f11"},{url:"categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html",revision:"0f8a71e34abe99f570c42dcd0af45979"},{url:"categories/game-dev/game-engine/rpgmaker/index.html",revision:"0744001658768d0e8ad112e8fca10542"},{url:"categories/game-dev/game-engine/suika2/index.html",revision:"ee6ba3b5ce4c6ae0b2cebbe65a06177c"},{url:"categories/game-dev/game-engine/tyranobuilder/index.html",revision:"96ea716529bdc3d2a16dbc2337967eee"},{url:"categories/game-dev/game-engine/visual-novel-maker/index.html",revision:"53c8c181b3af3c255f84af271fc0049f"},{url:"categories/game-dev/game-engine/webgal/index.html",revision:"3031acaa7cb58a9694c3738cc5a8af72"},{url:"categories/game-dev/index.html",revision:"472585a52cd6577a1b8d3713e2affe0f"},{url:"categories/game-dev/page/2/index.html",revision:"fa9a1e77395593053d43d1ae6c456205"},{url:"categories/game-dev/page/3/index.html",revision:"7dc3c863914429227b50d8619980dc28"},{url:"categories/game-dev/page/4/index.html",revision:"810fcfffa645698aae03f7b591474efd"},{url:"categories/hexo/index.html",revision:"954edacb1caacadcb78bf56a738765cd"},{url:"categories/index.html",revision:"f4ec27795394c57e18101662275e2358"},{url:"categories/material/index.html",revision:"eff98f474783f204d183bd3e7886dfbc"},{url:"categories/update/index.html",revision:"e06bed7e9c2ea1368205410690a2ceaa"},{url:"change-according-to-real-time/index.html",revision:"ab0b92ffebf4d57f1483f16f1c8ac559"},{url:"change-character-info/index.html",revision:"32a575f1c3b5aec6da7e2a40c71ecaac"},{url:"change-title-after-first-time-viewing/index.html",revision:"ac78c67535cbd9ca50864d910fff7bd3"},{url:"change-title-based-on-event/index.html",revision:"f7be1227010c65aba436ab4be63af85d"},{url:"character-interaction/index.html",revision:"a5f7501f0a43cc3c4744cb72a85f5a2c"},{url:"character-stats/index.html",revision:"5706ae2c70af5983d11b39b0fcf2982f"},{url:"chatbot/index.html",revision:"e72aa622aaba6f1e1a366358b5b088d5"},{url:"choice-time/index.html",revision:"c145fa2265f6eea3f6a03a36ce3c0a77"},{url:"comments/index.html",revision:"7efffd12cf0d238e77e1355edc21ac2e"},{url:"commission-info/index.html",revision:"226ec5518280f928bdb75d0274b62986"},{url:"count-login-number/index.html",revision:"93215bdc755bca126acb044cebfcc37e"},{url:"create-button-anywhere/index.html",revision:"35456ec90f8b6111a7fbf9b04191300e"},{url:"css/eurkon.css",revision:"848cf75063958c46f1a48026b8ab57be"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"b215a8be9c6fa3608bbdda28d404f995"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"c83b03aaf30e9406a41649ecd98d92c1"},{url:"css/rightmenu.css",revision:"e37d1994afa3d9a4e26286f4053c7b7a"},{url:"css/siz.css",revision:"81ee77a70214f15a2d7bce987461c150"},{url:"css/swiper.css",revision:"271e3164d70a0881e925731cb11fb949"},{url:"css/swiperstyle.css",revision:"09266dfd1b29b4e3e0d1a5b6f9f6f3da"},{url:"css/var.css",revision:"64575d31ebf27864079e9966697c5e5d"},{url:"ctc/index.html",revision:"5c0d3ac4d17935187fe7658266128947"},{url:"custom-css/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"custom-css/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"custom-css/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"custom-css/index.html",revision:"35d067a63ef6fea4ec32ff1824fc5c6a"},{url:"custom-css/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"custom-css/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"custom-css/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"custom-css/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"custom-css/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"custom-css/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"custom-css/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-gallery-cg-screen/index.html",revision:"033e1bd534fc5e7b7db506236dddc5c2"},{url:"custom-launcher/index.html",revision:"cb2c4680928f3149f248eae97ab966c2"},{url:"custom-loading-screen/index.html",revision:"f8749c5cbc1c757adcdf92c457565889"},{url:"custom-mouse/index.html",revision:"4ea68d30b4cf44d2c9c9c670347da4c8"},{url:"custom-music-room-screen/index.html",revision:"2c0911b8a659a79719513f8886b8730f"},{url:"custom-music-room-screen2/index.html",revision:"63747281e332db10ff44aa9a43f3f567"},{url:"custom-nvl/index.html",revision:"50e51f24da46bbf6c9052713dd193660"},{url:"custom-player/index.html",revision:"71ac45401f26964fb54340697e4f4e9d"},{url:"custom-preferences-screen/index.html",revision:"c0bba306f46d81888e353362c713b408"},{url:"custom-say-screen/index.html",revision:"fd12e0398abb2c6aaef19363efdaa9ba"},{url:"custom-title-screen/index.html",revision:"82da7f42542870792be66e4c09a3b48c"},{url:"define-npcs/index.html",revision:"13bf2bd77a72e2b2d56871354bb89e02"},{url:"delete-save/index.html",revision:"9ff7ca9b991432a4becae034af73e75d"},{url:"dice-function/index.html",revision:"e9ce1b325b8f50253e481c2d45c83616"},{url:"disclaimer/index.html",revision:"ca06e29318b942c49a84c1fb34586a63"},{url:"display-immediately-all-dialogues/index.html",revision:"473d838de566636091ba6bc46b016a37"},{url:"display-real-time/index.html",revision:"4ea0b6bb79450bbb589031e59c07e33c"},{url:"enter-name-screen/index.html",revision:"111a021e54a13e39a7e09c840b68f7f2"},{url:"export-game/index.html",revision:"f3071d1d99144964fdf62bb81dc9bebc"},{url:"faq/index.html",revision:"88af173523680c050961f653de034d33"},{url:"friends/index.html",revision:"e380c5fb6ecee86806b13b001e2a1af7"},{url:"gallery-template-assets/index.html",revision:"b11f7cb92be3c88bf933cb6f65d9b6a9"},{url:"gallery-template-default-ver/index.html",revision:"be1678f3a58841e07368209a1494468b"},{url:"gallery/index.html",revision:"245cc3c1eea73299c5247bc774e1a8d6"},{url:"gallery/photo/bg/index.html",revision:"e2cec4e41f16d3b12ac90e82df279453"},{url:"gallery/photo/gui/index.html",revision:"763c8fcc97949b04f0764b446087a754"},{url:"game-only-text/index.html",revision:"fd4358bb8a03d70d679fb4929f17b11d"},{url:"gui-017/1.webp",revision:"cb164e6304824ee23aa636d5c8bff293"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"3a14857f027fc4a86fc6173b78140ded"},{url:"gui-017/index.html",revision:"fbc2fdcd762d67015ca8e136d9fee86b"},{url:"gui-vertical-002/index.html",revision:"b43cfd2c80edf032bed6dec3f4f60b8b"},{url:"gui012/index.html",revision:"f17e9357366e95f7d2047827d9595b13"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"027aa96dffd86ff7e48b2e519bb83d4c"},{url:"gui018/load.webp",revision:"bc4fd522772a6852fda7af18b3f17b12"},{url:"gui019/index.html",revision:"bc85c9a389bb38d8162857b03015c6cd"},{url:"gui020/index.html",revision:"e82885b7b7b076a99e99587e14e8ff1e"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"6b48564164e3d040a42c17f0506c972d"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"hexo-custom-mouse-disply/index.html",revision:"4245b5f205ba9f47fade3376d02c7471"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"37c0e193f512bdfff6e8103b351b8fb0"},{url:"images-tip-function/index.html",revision:"9ce8b4d87f6e64382ecb6d29816a4e76"},{url:"images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"images/pawicons/32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"images/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"images/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"images/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"images/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"images/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"images/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/favicon_16x16.jpg",revision:"7170a7a0a8983fb2790e28c864648f5b"},{url:"images/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pawicons/favicon_32x32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"images/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"images/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"images/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"images/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/bmc.png",revision:"40b98209d9deb3e69053d4a559cc8a30"},{url:"img/cover/1.webp",revision:"75c4ca0e23ea27798c951e79cf118d88"},{url:"img/cover/2.webp",revision:"37a1fa535df37e8c5cf01def24fc9eeb"},{url:"img/cover/3.webp",revision:"ec6c922dd423211df47e8cd79493aacb"},{url:"img/cover/4.webp",revision:"896796dcf0a2b1f714060e1300972432"},{url:"img/cover/5.webp",revision:"06b21ba7e9d00ca7768252c51b3854af"},{url:"img/cover/6.webp",revision:"7e12d98e2bf9548379c39beba3a222d2"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/gib/1.webp",revision:"3a9c61bd832c972161a4c1236e8932fd"},{url:"img/gib/10.webp",revision:"a8bf147229785e8287f71465e8e2184d"},{url:"img/gib/11.webp",revision:"2ee1e23c6795861b209660c3318452c0"},{url:"img/gib/12.webp",revision:"8474e1ace21041b4d23ef81699e80ea5"},{url:"img/gib/13.webp",revision:"b81144a83d8b8bdac63cc2c155adcf7c"},{url:"img/gib/14.webp",revision:"933a480a83f392bffb0d690964248eed"},{url:"img/gib/15.webp",revision:"0fea3990e5ccc0db12506ce55bb85e5f"},{url:"img/gib/16.webp",revision:"396b012a1baa6d7542df1cd4f92aa33b"},{url:"img/gib/17.webp",revision:"327cc150630dd9abb577be1708c7e43d"},{url:"img/gib/2.webp",revision:"71cd303200dbab88eea0c5565f0dfe88"},{url:"img/gib/3.webp",revision:"d6a489bd5309b5e0972e054b95f8e346"},{url:"img/gib/4.webp",revision:"c63440486dac3ae824221ab996f7b5cb"},{url:"img/gib/5.webp",revision:"5e12e70e4ba0a994673fcd091b3cc44d"},{url:"img/gib/6.webp",revision:"699a5ed1daa416539598e302984dc5a7"},{url:"img/gib/7.webp",revision:"b1a6db37ce52de0d50792128da9b9f4c"},{url:"img/gib/8.webp",revision:"7a472f0077feb6f7901446a419012ca0"},{url:"img/gib/9.webp",revision:"1a7e4ae1712bad270688d7346ad2fb00"},{url:"img/gib/mononoke/1.webp",revision:"d8201509fe441fb29173e6ef2878b618"},{url:"img/gib/mononoke/10.webp",revision:"f963257315e72440575413d673baff64"},{url:"img/gib/mononoke/11.webp",revision:"98b4003a98c15f40acfbbcf6c7dd4ea2"},{url:"img/gib/mononoke/12.webp",revision:"a6347a9c0a47dede6ca41722a5a1368b"},{url:"img/gib/mononoke/13.webp",revision:"4ad91e7917dfe78413884a35bf45a3b9"},{url:"img/gib/mononoke/14.webp",revision:"7b59dc953f4333a3941f092aaa39b663"},{url:"img/gib/mononoke/2.webp",revision:"59e74291fb091b32cc4e4291a25f846f"},{url:"img/gib/mononoke/3.webp",revision:"2eff7ee46059be1118891e976e96e98a"},{url:"img/gib/mononoke/4.webp",revision:"6823ddd1e470ed0c6c92c6bf93fcafbb"},{url:"img/gib/mononoke/5.webp",revision:"f873ec8172aef5364543eafc98bb7805"},{url:"img/gib/mononoke/6.webp",revision:"aef6f12f2284f2a7d839206d3a71a0e5"},{url:"img/gib/mononoke/7.webp",revision:"fbfcdadb4b5f6eed1492fe7f109c2bed"},{url:"img/gib/mononoke/8.webp",revision:"4f02248750fd90e1fc6227f42a4135f1"},{url:"img/gib/mononoke/9.webp",revision:"ef22b303f1cce87b3ab226801fba5361"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"img/pawicons/32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"img/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"img/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"img/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"img/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"img/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"img/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pawicons/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"in-game-change-size/index.html",revision:"3f44c2a0445d229af4d4b95ee4ae5aba"},{url:"index.html",revision:"57b894157d6e39f65ab15efee16bde73"},{url:"install-use-valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"install-use-valine/index.html",revision:"be26dd84bf6f24a9412df3c0054d28a5"},{url:"install-use-valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"install-use-valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"inventory-system/index.html",revision:"4dd42479497a6adebc9c3221fcd52fc4"},{url:"items-sprites-effect/index.html",revision:"a36d2f91806fbd79a643f86608a9a922"},{url:"js/countup.js",revision:"04397b967e3ec0c509586356266b3ded"},{url:"js/main.js",revision:"80de3021a5d1ba2ecc68d332b284c836"},{url:"js/rightmenu.js",revision:"e4b3044aa999f5c624cb1432ff11d15d"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightvn22-10-03/index.html",revision:"b9363acbffccb1360b4ca7d03ddf5e31"},{url:"lightvn22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightvn22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightvn22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightvn22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"lightvn22-11-24/index.html",revision:"63c26c78680ccac2c4c1bf2642b7b8de"},{url:"likebutton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likebutton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likebutton/index.html",revision:"4de703ee9cfe42c71ba9d1138f01f7c7"},{url:"link/index.html",revision:"239983beb187c3d2de4a8507b371383c"},{url:"login-reward/index.html",revision:"f136d8cf58832fdf39ff86e728707df8"},{url:"make-butterfly-beautiful4/index.html",revision:"386bde506a37870a6b775cad53932608"},{url:"map-puzzle-system/index.html",revision:"621b9e795d604a1dc6d2cd334e688285"},{url:"maple-effect/index.html",revision:"ece437cb144cc7101a4cca79bee51f00"},{url:"memberships-2/index.html",revision:"cae40160bfb0195361f6b30614818a6f"},{url:"memberships/index.html",revision:"1b19dd10d406ea0b32ed29d29a5aa97e"},{url:"multiple-language/index.html",revision:"72a9e03919c2e5b39b0b79c85ecd16e9"},{url:"name-input-assets/index.html",revision:"f0808db4fd2663e5d7911b43b701144e"},{url:"new-year-event-2023/index.html",revision:"e8a5a659d49a131eba70f6621e4c1f16"},{url:"newsletter/index.html",revision:"6f1b212f7c7070d128356b7388a815a3"},{url:"nsfw-limited/index.html",revision:"3eac820ce710a1aa123789619a34e66a"},{url:"null/index.html",revision:"031ce55a14eefc8dbb124b43c51548e5"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvl-ctc/index.html",revision:"40ee0706cd2eb102357f238ff952b255"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"75d0a6380b15b26eec22740417762769"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"open-external-link/index.html",revision:"4a836d5be8d9b973792c71f9f494a216"},{url:"openchatai-renpy/index.html",revision:"2d0dc82da381851b85b7953c1c595ae6"},{url:"original/index.html",revision:"37ad8c068a041164364b4a1f62f33b48"},{url:"page/2/index.html",revision:"7dd97d5c2ef82ac5bbb5196286aad19f"},{url:"page/3/index.html",revision:"18e46a70d534a8a5c82004e39fc52ce6"},{url:"page/4/index.html",revision:"0d25b017c3946e2ca678a78df0c65a6e"},{url:"page/5/index.html",revision:"8742084cc2c921d463a7f9246ded5ff5"},{url:"page/6/index.html",revision:"84b81de74100329daa41908b97895f12"},{url:"point-pop-up-assets/index.html",revision:"ad9bc25030a109e9fec82676673f9d58"},{url:"pop-point/index.html",revision:"187d925ca0497bb5d01ddbb26665a00f"},{url:"privacy-policy/index.html",revision:"e9de3405b21ef0988c492ccf898a37ca"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-dialogue/index.html",revision:"412bd287a606d889c4dc214783da2c23"},{url:"random-number/index.html",revision:"6387ad71bfac3e4ba05f8f92267d5a15"},{url:"random.html",revision:"987c336b744cfb78cf075f7f77b9e882"},{url:"release-017/index.html",revision:"87fd234e1758bd8230e3360be78d7f0b"},{url:"renpy-basic/index.html",revision:"5dfcc4ee263e4b6e0c6a001a82872b85"},{url:"renpy-crash-glitch-effect/index.html",revision:"96ef03038b1454a92f850b249e4b8d69"},{url:"renpy-matrixcolor/index.html",revision:"1e75dc7d8c800a9c79a2e2300ca3b355"},{url:"renpy-overlay/index.html",revision:"3d9771c362aa656d354517ffd49f1945"},{url:"renpy-review/index.html",revision:"8dd98936295cb9008e99f7a0f64aed47"},{url:"renpy-typing-effect/index.html",revision:"9adad12911cc2dd7b028cd1f327b67a9"},{url:"rpgmaker-assets-menu/index.html",revision:"86bd56a156c778d4d1d88936aca65d86"},{url:"rpgmaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgmaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgmaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgmaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgmaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgmaker-create-a-new-map/index.html",revision:"24e6a110aedb0c5b8c04251146f975bf"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"3f7457af595f0f694482e60467fce6d4"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"0bc69e503951f2798de7022de5fd2c7a"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"5d2bd79d57b6f143da796e8f5d42f291"},{url:"sakura-tree-background/index.html",revision:"922b6b791106262c70f1e804f7ed249e"},{url:"selected-button-style/index.html",revision:"ec310f05899824568eed6940dcb68ec5"},{url:"show-variable/index.html",revision:"6b0943d1bd3df98b5238a9dce9152d19"},{url:"side-image/index.html",revision:"a0e37194e6e642a0042ca2db85c9cdfd"},{url:"snow-effect/index.html",revision:"517678ccc9bbd213dd24ca92010ba729"},{url:"speaking-animation/index.html",revision:"9f594a1f24141792c6675d0a04b1b614"},{url:"splashscreen/index.html",revision:"438969a8006c6e16616de73cd1da9394"},{url:"suika2/index.html",revision:"32d58d354d80b37489f05c4b7eea5ac6"},{url:"sw-register.js",revision:"d68a04b59b48a1de9eb0a910d01790b7"},{url:"sw.js",revision:"3e32116930bc23e4ef363be7558beed5"},{url:"tags/acg-creator/index.html",revision:"e06d653468eab1295b4a83d54ee23810"},{url:"tags/ai/index.html",revision:"20adb87f7fb5dee46e4ee57f4b383202"},{url:"tags/butterfly-beauty-diary/index.html",revision:"6222227bb38bef3f9fdd1eca70575373"},{url:"tags/custom-hexo-theme-butterfly/index.html",revision:"04084b06ab7fc6df3fe5eb589994ad18"},{url:"tags/custom-renpy-title/index.html",revision:"3fcbd701f28527189387fda78481486a"},{url:"tags/dialogue/index.html",revision:"3d9a190ab5ab46641c6b05e22778056e"},{url:"tags/effect/index.html",revision:"69a48d091aed80a72de23bc87d699807"},{url:"tags/event/index.html",revision:"0a1f34a2f207bd82f971dbe80512e885"},{url:"tags/Hexo-plugins/index.html",revision:"7f20ba4568589450420fd4ca94f407c6"},{url:"tags/hosting-own-website/index.html",revision:"69b6af20967f6040112882b067e7db43"},{url:"tags/index.html",revision:"e62c0bca6f16b7ba9573c69e00175cc0"},{url:"tags/itch-io/index.html",revision:"2692f47d8d09c68b528ef646b20c40d3"},{url:"tags/light-vn-update/index.html",revision:"0dbc7bee5e3e52dec39e15e4e2711ef7"},{url:"tags/Light-VN/index.html",revision:"c23526f7915fbe1a28fb47dff39bcb41"},{url:"tags/nvl-maker/index.html",revision:"8650fbe0aebe0f38b0f59aedb6cb3a38"},{url:"tags/player-related/index.html",revision:"88db089c3e89483e4250def568415c97"},{url:"tags/pro-tutorial/index.html",revision:"a65111cc83d992265ae45063fab71672"},{url:"tags/pro-tutorial/page/2/index.html",revision:"d496afcaa691135fd1e39c5f300065f1"},{url:"tags/pro-tutorial/page/3/index.html",revision:"3ceebc84f287e8e38b14be73744ef76b"},{url:"tags/pro-tutorial/page/4/index.html",revision:"13a4d5802b978ab222da26e00c19b930"},{url:"tags/renpy/index.html",revision:"0e1336cc738cf2c35f3b4139f45b635b"},{url:"tags/rpg-maker-custom-map/index.html",revision:"bcb8742ae31b84b0874f7a047383f5d0"},{url:"tags/screen/index.html",revision:"343a13ee2b2925a2e54d2bcbc80cd562"},{url:"tags/special-function/index.html",revision:"56ca47324e094e1c194a2f9e1942d059"},{url:"tags/suika2/index.html",revision:"bd9bac8aebe64e4ed891bc54acbc49f0"},{url:"tags/tyranobuilder/index.html",revision:"f9078390626168ffa9abb33177febd69"},{url:"tags/ui-assets/index.html",revision:"125309b851b77fc156738a7413b28308"},{url:"tags/update/index.html",revision:"8f4d3eaebc5cc5e0285bf1fdc045e5f3"},{url:"tags/upload-game/index.html",revision:"96a64fabd75dbee4df93640cf643797f"},{url:"tags/variable/index.html",revision:"8b7386d245d2136cd09894efb1a78d71"},{url:"tags/visual-novel-maker/index.html",revision:"63da55dbb1b44b28e1048690692950c7"},{url:"tags/webgal/index.html",revision:"4506cc5facedbb7cc602a3bcdf04a129"},{url:"tags/封面製作/index.html",revision:"caeb4cb332575e4043c46a72ca82b00a"},{url:"tags/背景素材/index.html",revision:"c5d993dec86cee496afdaf4936dc2797"},{url:"tags/隨機功能/index.html",revision:"65c844ad9e25dd2042fef055ae325ace"},{url:"test123/index.html",revision:"9cfc6dfd0477059e6eebf137d4590c9b"},{url:"textbutton/index.html",revision:"c659f7908efb3c4a2691bcecc39fdbfc"},{url:"to-do-tutorial/index.html",revision:"f5f8475c066c98983865a9304a58ea7c"},{url:"tools/index.html",revision:"ec168b14b30f650475ce02cb868e8535"},{url:"tooltip-function/index.html",revision:"ce98b8e3430243d36dac31fded2e2ee1"},{url:"transfer-to-hexo/index.html",revision:"916c87b63c2bd65bb50c9525d4d981bf"},{url:"tutorial-update-history/index.html",revision:"7f76ccb4d4ec7665078194e5db9bfb00"},{url:"tyrano-name/index.html",revision:"d07c9ee60a94089b80295edaccde6f24"},{url:"tyranobuilder/index.html",revision:"e8ec1758e716bf66e66575f626e74f47"},{url:"undefined/index.html",revision:"46499ff1f94a505cd18392eb78d18081"},{url:"unskippable-video/index.html",revision:"d02e45aed34221831108170d8b8dadef"},{url:"update-20221211/index.html",revision:"90edcdbd2d3dc4b3da9f79a9ee17fe95"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"1d73e2c0c7999a92393f2d4a67ae455b"},{url:"upload-download-save/index.html",revision:"5883fc0bc5c000a27363f932bb655fa4"},{url:"upload-your-game-itch-io/index.html",revision:"61431a74e57098036f15aa76c2eb96d3"},{url:"use-list/index.html",revision:"14050c44a52c644fd4f51c3c3f34a216"},{url:"use-nvl-mode/index.html",revision:"c699308f6628f0470aaa754a14ba689b"},{url:"useimage/index.html",revision:"900379dd219973ab48e8d373851ac6e3"},{url:"variable-change-image/index.html",revision:"86b78f2767999a460051d63292d52923"},{url:"variable/index.html",revision:"43395f6a9c555c6bb0aeacacfdf07a28"},{url:"vibration-function/index.html",revision:"b9e8d3140c041da0c6c83eb78d73d4aa"},{url:"vnmaker/index.html",revision:"b6ed1c9c941c7d28dfcab344b9f163ce"},{url:"weather-effect-tutorial/index.html",revision:"deeb9ed671a3c17b488e638ebe74f9df"},{url:"webgal/index.html",revision:"bbb87352033168c4292c6ae0d512430f"}],{})}));
//# sourceMappingURL=service-worker.js.map
