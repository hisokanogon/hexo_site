if(!self.define){let e,a={};const i=(i,d)=>(i=new URL(i+".js",d).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let c={};const f=e=>i(e,n),l={module:{uri:n},exports:c,require:f};a[n]=Promise.all(d.map((e=>l[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"d8323329eea133c545fb9926894d2dc7"},{url:"2player-battle-system/index.html",revision:"0cf3c4aa5a3f8028b3942cd7e651b656"},{url:"404.html",revision:"33f631460a3d347b12502dd021d15bda"},{url:"about/index.html",revision:"218ea058a948d94908d8610df047a93e"},{url:"Add-Artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"Add-Artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"Add-Artitalk/index.html",revision:"52da05ee46ba5e95e9bcdf9b4ed03a6d"},{url:"Add-Artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"Add-Artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"Add-Artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"Add-Artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"Add-Artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"Add-Artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"Add-Artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"Add-Artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"d8628a153174274b011652e5b1e0aea8"},{url:"animated-title-main-menu/index.html",revision:"23678bc810f21129236e65677d849285"},{url:"archives/2022/05/index.html",revision:"6bbd8505516fce00cd6f6282bd197034"},{url:"archives/2022/06/index.html",revision:"9f0d9be1715d23c9053e5cd8516235b8"},{url:"archives/2022/08/index.html",revision:"2ac69ec408c725d3eff30f0fb9c8c8c0"},{url:"archives/2022/09/index.html",revision:"be7e28403a78032ce794d5f041b517db"},{url:"archives/2022/10/index.html",revision:"33e9a64baf23d2c43a382f86d50dc498"},{url:"archives/2022/11/index.html",revision:"1c1b7ba4d39393aaeac6d055478857f8"},{url:"archives/2022/12/index.html",revision:"db6963df1cad1e1c8a1679e46225fdfa"},{url:"archives/2022/index.html",revision:"c4431145b2b4291042047fe0cc196474"},{url:"archives/2022/page/2/index.html",revision:"a62e3f3e6e51538c0bdb1d8cba37e751"},{url:"archives/2022/page/3/index.html",revision:"5440b80f3301060c3a746f17b05ffafc"},{url:"archives/index.html",revision:"6ef0f29157a2a97b3a2e8e02a522b17e"},{url:"archives/page/2/index.html",revision:"29a787549597bf877948fbdd067ace08"},{url:"archives/page/3/index.html",revision:"033076b93ac1c4ba093656a98d207798"},{url:"artitalk/index.html",revision:"a8126f72da09fd532eb566ecf8843df1"},{url:"Butterfly-Change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"Butterfly-Change/index.html",revision:"8a5275c5625e0937b3f5a61c9fdfa899"},{url:"Butterfly-Change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"Butterfly-Change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"Butterfly-Change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-plugins-faq/index.html",revision:"12fb7b6133af2d6cfd93ddd7290220f5"},{url:"categories/Announcement公告/index.html",revision:"5aa9c0c066ccd341f0c890984ac92863"},{url:"categories/game-dev遊戲開發/index.html",revision:"9b7325e5584e2527544619f361079144"},{url:"categories/game-dev遊戲開發/page/2/index.html",revision:"afc5d6eeedbb51adfb435e7784c92848"},{url:"categories/game-dev遊戲開發/遊戲引擎/index.html",revision:"f52569dc483ba28f2af44550b65c67ff"},{url:"categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html",revision:"603ce18fb5ee5b9e434b19b6a2841cc4"},{url:"categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html",revision:"2824d9ac76a1fa83a5d3bacf22a56999"},{url:"categories/game-dev遊戲開發/遊戲引擎/page/2/index.html",revision:"ed3815028843efa886e3dae5de8691a6"},{url:"categories/game-dev遊戲開發/遊戲引擎/renpy/index.html",revision:"14cd7fdd1e098b965aebbd5cfaf1f2be"},{url:"categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html",revision:"eab42ab01365a0f31734093480b68210"},{url:"categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html",revision:"a712eb077a565f6cdcadd330c026dd0e"},{url:"categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html",revision:"eaf09439e59570507b190528b21d6f20"},{url:"categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html",revision:"6450a30c146325c99084891b4dfd5b6b"},{url:"categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html",revision:"2497b4879f43a9eb1a9646a1728dacae"},{url:"categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html",revision:"9ccd343a88ed5ed14ab51cfe61ac7a6b"},{url:"categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html",revision:"77ece449f7293479cadd997aff3b66fa"},{url:"categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html",revision:"8881c47cfcd22937c4ea4ee6fb62f677"},{url:"categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html",revision:"9ae0b86c142a64d0d16b2fb0f759b213"},{url:"categories/Hexo/index.html",revision:"017acc3ad4a1c4da8688bf27b5d05a1d"},{url:"categories/index.html",revision:"c251c33ce7512e21195bdb5f90fbfe1c"},{url:"categories/更新update/index.html",revision:"bbe36da10f5aa973cadc16f68302eaaa"},{url:"categories/資源/index.html",revision:"c8faffd191c9aa2c90991019b8dcfd88"},{url:"change-title-based-on-event/index.html",revision:"423a5c703be4ba9527e7973fcd7a4d0a"},{url:"character-stats/index.html",revision:"1d576b72f0367b9a54c5ab56e5509991"},{url:"chatbot/index.html",revision:"117b0484e8cd05d362b75074a1efd9d5"},{url:"comments/index.html",revision:"aeeddd946f17b4ccaa15ff2c7ab0d3b2"},{url:"create-button-anywhere/index.html",revision:"094bb478676ff866a97c97f60070c1fb"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"8aadb6d58685535e8fae175ce3ddd4f4"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"e3fe3305677a8950bc7be81f0df9649d"},{url:"css/rightmenu.css",revision:"57db67a95fadc18f093415bf66bee88e"},{url:"css/siz.css",revision:"c35fa71872149cea3348a3c36eefe38e"},{url:"css/swiper.css",revision:"2e7b5286f951a644e8547e06b584ca90"},{url:"css/var.css",revision:"50253bacdf94209590da438dd92373b7"},{url:"ctc/index.html",revision:"c0857d32aff61cb357d97d8543aa04c0"},{url:"Custom-CSS/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"Custom-CSS/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"Custom-CSS/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"Custom-CSS/index.html",revision:"78c75d00ccfa52594fc410d21237a333"},{url:"Custom-CSS/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"Custom-CSS/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"Custom-CSS/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"Custom-CSS/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"Custom-CSS/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"Custom-CSS/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"Custom-CSS/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-gallery-cg-screen/index.html",revision:"0354cec5095d6fe3880a11a9d06715d6"},{url:"custom-mouse/index.html",revision:"ed41d43895ec9b774ad4b75afd013e48"},{url:"custom-player/index.html",revision:"7d0e867623eb0ca6a3345c41351f92fe"},{url:"custom-preferences-screen/index.html",revision:"1940a25db1b71384f6a53386bdc4af8e"},{url:"custom-say-screen/index.html",revision:"875a4b7349cc8688bb602b05f6daf42a"},{url:"custom-title-screen/index.html",revision:"e3f0799835569ac5cd5b6fd1b0370808"},{url:"dice-function/index.html",revision:"8bdc0cab64b32c52e3e2a778bb3c6d86"},{url:"friends/index.html",revision:"c7492b7098485fa838eeedf9af5ba433"},{url:"gallery/index.html",revision:"b5473ba9b1787d1e6954d4d550df4249"},{url:"gallery/photo/bg/index.html",revision:"2717ea19e2a706f944d81058bc9444d9"},{url:"gallery/photo/gui/index.html",revision:"98ab285da5f356cc5bc2fb8b5441ae12"},{url:"gui-017/1.webp",revision:"aa12c6f819750ab701a4757d4dc305d4"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"2d8e8806bb6f8d6fbc3840d7854c0c93"},{url:"gui-017/index.html",revision:"5899f13c4b99ac599aa75e3411136ebf"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"30e5f89e34a7a54278959849d41eb6ba"},{url:"gui018/load.webp",revision:"ea9228dd37e76ce9f4e2c153fc4e3db0"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"e4d301e5f74b2d47f8254483b45ee853"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"a09672e29a0f44f6c57e0cc8c230a9da"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_16x16.jpg",revision:"cd3428135e94f5a83aadb8d5ced778e6"},{url:"img/pwa/favicon_32x32.jpg",revision:"1257041ac1eb102a40768d4bfeff16a2"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"index.html",revision:"1bdedcd1cb79bfc21a042616a101468a"},{url:"Install-Use-Valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"Install-Use-Valine/index.html",revision:"33995d800f10e9007d8e006ba6a77487"},{url:"Install-Use-Valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"Install-Use-Valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"js/main.js",revision:"39e84a3dfe3dc80e6157c06b4b5d4699"},{url:"js/rightmenu.js",revision:"24e5f4581e9f05dccfccee2de875ee62"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightVN22-10-03/index.html",revision:"667e76a1da1f6703ed31759bb12eedf4"},{url:"lightVN22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightVN22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightVN22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightVN22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"likeButton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likeButton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likeButton/index.html",revision:"13797b14cb8597667c8ab2f6aa05ba6f"},{url:"link/index.html",revision:"e56b85c43bd32226ba0af970e77da2ba"},{url:"map-puzzle-system/index.html",revision:"617331b518ed00f86e2edd14d738e904"},{url:"maple-effect/index.html",revision:"cee5545ab1b58eceb90d29e22d65cb39"},{url:"messageboard/index.html",revision:"67b93ce6f1047bf3e3d1bb47d4115518"},{url:"new-year-event-2023/index.html",revision:"4e1ede90a516300dec7459022d1b3154"},{url:"newsletter/index.html",revision:"110ca722ad3460e9fd0d9e9369d12928"},{url:"null/index.html",revision:"4d30433b17ae71e3c89e040e63192ac5"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"399eb70a5089e662d0e343bd4a0e06a7"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"OpenChatAI-Renpy/index.html",revision:"8c7bd02af3822b25d1393b2c76533bc1"},{url:"original/index.html",revision:"6bb3859c6a1abaa6c718d78e6c2799e2"},{url:"othersite/index.html",revision:"9310f2fdc138a8f4113945522050c565"},{url:"page/2/index.html",revision:"92313ac0ae2e056fd72d56120ac6c889"},{url:"page/3/index.html",revision:"4e85445ccdc3916ccad59146cd145237"},{url:"pricing/index.html",revision:"ae13df106ed56e74dcd86d4ceceb59c1"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-number/index.html",revision:"e1134f52275d5197d75b194acf9d3b84"},{url:"release-017/index.html",revision:"bca738a0b0e87b957edeb5e2ccefff36"},{url:"renpy-basic/index.html",revision:"74b96e72855d85200db54a1148983df2"},{url:"renpy-MatrixColor/index.html",revision:"e0586d1410f8e55ea0ac8cf7e12204f7"},{url:"renpy-overlay/index.html",revision:"a8b1848a1c230719fe8c1edb03e86b5d"},{url:"renpy-review/index.html",revision:"61bfff5774004dcf04471befc92a7bfe"},{url:"rpgmaker-assets-menu/index.html",revision:"17c3c6dd8d68e026d35a5082eae31daa"},{url:"rpgMaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgMaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgMaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgMaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgMaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgMaker-create-a-new-map/index.html",revision:"7376aefda96bea5dfae480050aa4245e"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"8d36fb94a18f6977795c3700411d369e"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"518bbc80fb90ba1a05c64fc45e893a8e"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"d69a49dbda0973554fb3070f1cd22629"},{url:"side-image/index.html",revision:"7d691a116a75850aa32a8a0a2733b81d"},{url:"snow-effect/index.html",revision:"7f3051572b8daa0050c09712a401740e"},{url:"speaking-animation/index.html",revision:"cab6b6fc991ccc7f416a8f25f920cdde"},{url:"sw-register.js",revision:"ec8e15af536f27fce78ec37b3aebf771"},{url:"sw.js",revision:"40ac39085653715cf9652ae46420d543"},{url:"tags/2022-年-12-月/index.html",revision:"563438bd40e7e5f0d0b95ce66fd3d2f5"},{url:"tags/Hexo-插件/index.html",revision:"da40751ad41fd6b2d133d6f814282031"},{url:"tags/index.html",revision:"0c45784322d13ee1bb1a5e0bf3213a13"},{url:"tags/Itch-io/index.html",revision:"c3fc0abf2c69dcf169947bd95680c22e"},{url:"tags/Light-VN-更新update/index.html",revision:"a95c12eb31c9f6dcdc6aaef0f817389c"},{url:"tags/Light-VN/index.html",revision:"08e6cf9028abc408960fab198c598648"},{url:"tags/NVL-Maker/index.html",revision:"e2a703dfe725f94a3aa95466227cf4c4"},{url:"tags/Premium教學/index.html",revision:"07f788033ce1f889063724b67f7d6716"},{url:"tags/Premium教學/page/2/index.html",revision:"53a2c48f6160658d5599e0f776f82e39"},{url:"tags/renpy-basic-Code/index.html",revision:"edacfee4c35d8111d72b07382c944867"},{url:"tags/Renpy-教學/index.html",revision:"ae6a3f1358d4fabdc4c956e1ebda83fc"},{url:"tags/Renpy/index.html",revision:"7810c50a676fc8b5b735054477fff011"},{url:"tags/RPG-Maker-地圖製作/index.html",revision:"94f09e4e94f716611193568613e049aa"},{url:"tags/TyranoBuilder/index.html",revision:"e038ef20ab6d977d2c53b98b5ec71a7f"},{url:"tags/UI素材/index.html",revision:"df28741f06026dfe9e25b4fc5438a4d4"},{url:"tags/Visual-Novel-Maker-視覺小說製作大師/index.html",revision:"48b1fdb2a6b6bb76dd9b7819389c4517"},{url:"tags/委託/index.html",revision:"b26728cc598544a9203fa9af074b83b5"},{url:"tags/封面製作/index.html",revision:"8271950838dced57141275ca3de994d6"},{url:"tags/對話/index.html",revision:"9e11d1b39fe855e6e964bc32d4ba589e"},{url:"tags/活動/index.html",revision:"d11beaaac07879a817a6ef6cd20f941d"},{url:"tags/特效/index.html",revision:"d5a13b6e66c5737f55effb173ba2685a"},{url:"tags/特殊功能/index.html",revision:"83acbd94806a03cbb950dccb76ac516d"},{url:"tags/畫面/index.html",revision:"e0183a17111666fde949c2b942fdaa28"},{url:"tags/網站發布/index.html",revision:"dcb5fa06311eab87bd32969c5a11c429"},{url:"tags/自架網站/index.html",revision:"ca6c96dc43063a002ff0d34d99729ede"},{url:"tags/自訂-Hexo-主題-Butterfly/index.html",revision:"e665e43c726bd577de1736bd4a380cb0"},{url:"tags/角色相關/index.html",revision:"cdb80f793939338314c85e6e0e9f1660"},{url:"tags/變量/index.html",revision:"8816be04fe59c9c61b971986fe2ff647"},{url:"tags/遊戲上架/index.html",revision:"df0d794216ea05597bd6e33c83a888e8"},{url:"test123/index.html",revision:"d37311044827ce55ea2b2c7e2fc24323"},{url:"textbutton/index.html",revision:"5b6c140798ceab857aefcc3e55e5879a"},{url:"to-do-tutorial/index.html",revision:"29e995874938f2789756945f75976572"},{url:"tools/index.html",revision:"f8a957b22776d7b805f1cd943b2a6b5e"},{url:"Transfer-To-Hexo/index.html",revision:"f97f90b96b6f9e5dfd15697d433452a8"},{url:"tutorial-update-history/index.html",revision:"117125e255501235ead05fa296cb7433"},{url:"tyrano-name/index.html",revision:"e973597122fcb4dc5c1a947923cd4fb5"},{url:"TyranoBuilder/index.html",revision:"cf54d66d79a60dc23beab9a9f12ee192"},{url:"undefined/index.html",revision:"69ae2d6e31fd3111791aeaa367765f41"},{url:"update-20221211/index.html",revision:"5e371d32c1fd0840c4d18edf786a863e"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"433c60b067ad81c12fdb613fbcab7b3a"},{url:"update/index.html",revision:"8af7a005724e4afb6209cdbf571ec029"},{url:"upload-your-game-itch-io/index.html",revision:"f5e22eb20206aaaa32c2aab677f6adb4"},{url:"use-list/index.html",revision:"bd7d9a2b39d5f0b51278317e5185d03d"},{url:"use-nvl-Mode/index.html",revision:"02df7907906014ce732f553249e7fda6"},{url:"useimage/index.html",revision:"8fbeafefb3da045b15d4379af673ffd4"},{url:"variable/index.html",revision:"13bcc7ccd41a2ebf0f88a87c17f21449"},{url:"vnmaker/index.html",revision:"21ffa1ff8077579a89c5848796cb00e5"},{url:"weather-effect-tutorial/index.html",revision:"323d138ae4feb3c21a496620eae755b2"}],{})}));
//# sourceMappingURL=service-worker.js.map
