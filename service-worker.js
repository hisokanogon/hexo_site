if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const b=e=>a(e,c),f={module:{uri:c},exports:n,require:b};i[c]=Promise.all(d.map((e=>f[e]||b(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"10d3e9b84b4b3dd63834ce14bec5c586"},{url:"2player-battle-system/index.html",revision:"2c514182e2f6dc7874e3e08f230cadc2"},{url:"404.html",revision:"37dfff37353ed29878f83c57a07bf51e"},{url:"about/index.html",revision:"4c89035516961275e8885f43dd1fe349"},{url:"add-artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"add-artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"add-artitalk/index.html",revision:"b7aa9bb0fdafc155de3bf7d423f8ffbd"},{url:"add-artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"add-artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"add-artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"add-artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"add-artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"add-artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"add-artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"add-artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"216661b1963164fc5aa4103bee229c46"},{url:"animated-title-main-menu/index.html",revision:"0551aa2f5df13c2f9c41c840b1345c83"},{url:"archives/2022/05/index.html",revision:"b0c60e63c36a2ac9a48b997b5a3d3699"},{url:"archives/2022/06/index.html",revision:"938bf225c9d395d133ec07a4507810c5"},{url:"archives/2022/08/index.html",revision:"05a4e2f85ba622e2ed0c384d4a37f1ff"},{url:"archives/2022/09/index.html",revision:"bca08d2987a3b7c4c0321fc0617d503f"},{url:"archives/2022/10/index.html",revision:"c1d4cb771a1aca8439889843a323b1ac"},{url:"archives/2022/11/index.html",revision:"5c21af1474b3c75328ad3dd9d4ba7e96"},{url:"archives/2022/12/index.html",revision:"82ecb53db3aa4de0aa82d6855f5f00e8"},{url:"archives/2022/12/page/2/index.html",revision:"5e0ec183b557d0e946b83c3197193e2a"},{url:"archives/2022/index.html",revision:"e0e96e1c53ab7d01b7246be21612ccac"},{url:"archives/2022/page/2/index.html",revision:"a2cf49c2596592c65c552bfc19f2d237"},{url:"archives/2022/page/3/index.html",revision:"71210e700332cdd84d15e5665a2a4ed6"},{url:"archives/2023/01/index.html",revision:"5f04d83ca6ea5e4bbbd7ea29b7768129"},{url:"archives/2023/02/index.html",revision:"b3853e8761de2a4a04c0119d2865f9ef"},{url:"archives/2023/index.html",revision:"275473807004b9f63be8513384d75dba"},{url:"archives/index.html",revision:"a00ec1305864528ed36670b61c3dcc3f"},{url:"archives/page/2/index.html",revision:"41bd60d92bc73daec10488cbdbb2f2f1"},{url:"archives/page/3/index.html",revision:"0153895e5bcb408d4158d4c80e0631c4"},{url:"archives/page/4/index.html",revision:"cb86cecf297839577d8438df709e15bc"},{url:"artitalk/index.html",revision:"5fcc82ea84707e259b41b74ff7a0d866"},{url:"butterfly-custom-tag/index.html",revision:"63ce020a1834ef4663fd246d66ae847f"},{url:"butterfly-plugins-faq/index.html",revision:"ea43a9e703f99da1b108cbcda196f3c1"},{url:"butterfly-ui-change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"butterfly-ui-change/index.html",revision:"43a28de128be3f8ffd0a14bcf1317c5e"},{url:"butterfly-ui-change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"butterfly-ui-change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"butterfly-ui-change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-ui-change2/index.html",revision:"d1f07ab4aefff09d7c6f336bf1057b20"},{url:"categories/announcement/index.html",revision:"ea2b6b715184620782adf8b9cd2c2a84"},{url:"categories/diary/index.html",revision:"093f746bfd48a615e3c9d10b5fed4d91"},{url:"categories/game-dev/game-engine/index.html",revision:"5431425e0ccdb9339534f04f941cefc0"},{url:"categories/game-dev/game-engine/lightvn/index.html",revision:"514e29e9bb892e8107625ff02c7a02ff"},{url:"categories/game-dev/game-engine/nvl-maker/index.html",revision:"dbd583ad1511bb9f17d9fe3d7f2ca232"},{url:"categories/game-dev/game-engine/page/2/index.html",revision:"a20eb840ec17942a689ee7446dea0eb6"},{url:"categories/game-dev/game-engine/page/3/index.html",revision:"56f9fa4863d9d46dad417769f26a2f37"},{url:"categories/game-dev/game-engine/renpy/index.html",revision:"24d8afcd4a207674f59158154fb804d0"},{url:"categories/game-dev/game-engine/renpy/page/2/index.html",revision:"195a949e482b72d99a9c46269a1c60c4"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/index.html",revision:"cc83e0ae3a988c62f83d83161a2197f0"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html",revision:"0fb3776ee985406ab345145e2716a092"},{url:"categories/game-dev/game-engine/renpy/tutorial/index.html",revision:"174a5b041c1606a05a5968b082ec82d9"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/2/index.html",revision:"bc761026c78edbecba3b562ccd350122"},{url:"categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html",revision:"55f3f4414350842d9eb243c2f41dfcdc"},{url:"categories/game-dev/game-engine/rpgmaker/index.html",revision:"aa7769a2c08322b449fdb989deef5393"},{url:"categories/game-dev/game-engine/tyranobuilder/index.html",revision:"e7915ab4f9e65f6782fd23e1411e0b2e"},{url:"categories/game-dev/game-engine/visual-novel-maker/index.html",revision:"4ae4eb21ac662e8fe4e80a47fee463a4"},{url:"categories/game-dev/index.html",revision:"254c4abc33c8139e520af06fe1a2a00c"},{url:"categories/game-dev/page/2/index.html",revision:"94a55330b7ee957c2cf52ee8b4e0e8a8"},{url:"categories/game-dev/page/3/index.html",revision:"d0a94225472038688b2f8a1f0adf952a"},{url:"categories/hexo/index.html",revision:"cec21f660ed031b9eaaf4ab0fd209b92"},{url:"categories/index.html",revision:"f530ea77a357a203dff07d0ff038c68a"},{url:"categories/material/index.html",revision:"13b62916f2247616e263633781522b2c"},{url:"categories/update/index.html",revision:"afeaedcd86386cb4be2f36673058120a"},{url:"change-time-according-to-real-time/index.html",revision:"ecfccc4733b93cb3334e721658c55e4a"},{url:"change-title-based-on-event/index.html",revision:"6d743d20d9d97ebab7c2bb2b79c4b74e"},{url:"character-stats/index.html",revision:"b95ce4eba1698204dee913dba2a3a5ba"},{url:"chatbot/index.html",revision:"ce0bf2dfaff03c9ab170d21c41b2e701"},{url:"comments/index.html",revision:"5a2cbfad0435935ac817b75f8e2032ff"},{url:"create-button-anywhere/index.html",revision:"9742ada62b21357a5360db19adfbe41f"},{url:"css/eurkon.css",revision:"b285766069a0a357c32029fe824b7209"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"9c6e8e599880d7a218bdd7b43147c774"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"a5ba8824aac16606dc9224fcac6b02ba"},{url:"css/rightmenu.css",revision:"96f78ab006685dc0de0f7c82314aa6d1"},{url:"css/siz.css",revision:"ccd5359595890069e91ec5b74a7dc300"},{url:"css/swiper.css",revision:"52e9f27437492becc96677d704fa75cd"},{url:"css/swiperstyle.css",revision:"4aa2a4d7ea0dd1da8ce1fa1ff654eda5"},{url:"css/var.css",revision:"2ba168662c6af7c24915d409638517e6"},{url:"ctc/index.html",revision:"5754bbe167274aed2b0af4c7ab98990c"},{url:"custom-css/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"custom-css/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"custom-css/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"custom-css/index.html",revision:"40d5a88923388fecab67d1d70fad8ce7"},{url:"custom-css/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"custom-css/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"custom-css/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"custom-css/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"custom-css/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"custom-css/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"custom-css/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-gallery-cg-screen/index.html",revision:"ba38310df5b23d1441d3ac3ed770e660"},{url:"custom-loading-screen/index.html",revision:"10c28133ebc93f94d032b89d20f22cd0"},{url:"custom-mouse/index.html",revision:"5da0a571a8c786d5b68b210d4fedeea5"},{url:"custom-player/index.html",revision:"aabaaa4157c8fc13918d1c0422bad69f"},{url:"custom-preferences-screen/index.html",revision:"7343d86234749757ba8253ce79be42b7"},{url:"custom-say-screen/index.html",revision:"fe544020c133ea4011aec4fadba6dc24"},{url:"custom-title-screen/index.html",revision:"19e55f075c3855fedeb2e1c47bfaf74d"},{url:"dice-function/index.html",revision:"df4d846de44fb0e3e20bb77d8d110adc"},{url:"disclaimer/index.html",revision:"f5b155cbad8ab21d64633e3c15ba70a4"},{url:"friends/index.html",revision:"c1578ed99e6cbbc60071a7898751e40c"},{url:"gallery/index.html",revision:"c04d14815796c8444e53687a3fc4da9b"},{url:"gallery/photo/bg/index.html",revision:"92ea96fe31503bf41992d5b7c16a63c7"},{url:"gallery/photo/gui/index.html",revision:"f7787e9f88a1ad17fb395a2213ab821a"},{url:"game-only-text/index.html",revision:"b14b09b45836a4cfc58d164573060a7a"},{url:"gui-017/1.webp",revision:"aa12c6f819750ab701a4757d4dc305d4"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"2d8e8806bb6f8d6fbc3840d7854c0c93"},{url:"gui-017/index.html",revision:"a9ed240bd268d6efc33e0b209f96be4a"},{url:"gui012/index.html",revision:"ed0bde77e604a925f206f667e9378a8b"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"fc7c99e8a42bb7dfd3c5cd5bd5ab35b5"},{url:"gui018/load.webp",revision:"ea9228dd37e76ce9f4e2c153fc4e3db0"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"3625a5cc4d27ef91dc321f3de2003f67"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"hexo-custom-mouse-disply/index.html",revision:"5aa53eca34f4cb086704b34a00e3214d"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"c0b4f33103fc5f2840a383070ddc05e2"},{url:"images-tip-function/index.html",revision:"bf4e995580dab2df43833112bcdc8179"},{url:"images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"images/pawicons/32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"images/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"images/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"images/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"images/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"images/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"images/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/favicon_16x16.jpg",revision:"7170a7a0a8983fb2790e28c864648f5b"},{url:"images/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pawicons/favicon_32x32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"images/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/bmc.png",revision:"40b98209d9deb3e69053d4a559cc8a30"},{url:"img/cover/1.webp",revision:"75c4ca0e23ea27798c951e79cf118d88"},{url:"img/cover/2.webp",revision:"37a1fa535df37e8c5cf01def24fc9eeb"},{url:"img/cover/3.webp",revision:"ec6c922dd423211df47e8cd79493aacb"},{url:"img/cover/4.webp",revision:"896796dcf0a2b1f714060e1300972432"},{url:"img/cover/5.webp",revision:"06b21ba7e9d00ca7768252c51b3854af"},{url:"img/cover/6.webp",revision:"7e12d98e2bf9548379c39beba3a222d2"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/gib/1.webp",revision:"5be4619a8cf8b66551dedb272413d09d"},{url:"img/gib/10.webp",revision:"83a37dce9e5cfb132e1f5cc69ce4a758"},{url:"img/gib/11.webp",revision:"e0343acb272483692d9274223987cf19"},{url:"img/gib/12.webp",revision:"b1ca8b649c15f1e462a5b4c0b60f0d9c"},{url:"img/gib/13.webp",revision:"53e919448c1fd302d4ba93cf3adfaf2b"},{url:"img/gib/14.webp",revision:"a02f67a68a66dde2fa9430179dc5a092"},{url:"img/gib/15.webp",revision:"c98583025ce168f380b1a8cedef1f98c"},{url:"img/gib/16.webp",revision:"ae6ad26748f14367e42c298eb896e5e1"},{url:"img/gib/17.webp",revision:"11454179dca9c7538321eb5c7ddb62e5"},{url:"img/gib/2.webp",revision:"ce48b5614d628d9d5bebd2f5805cd038"},{url:"img/gib/3.webp",revision:"dd7dd4b6e72f1261f67cb61f78d40d68"},{url:"img/gib/4.webp",revision:"47498d3dea6081830aee230d468c960f"},{url:"img/gib/5.webp",revision:"0444f75e417e402551f7f2e397c4e6d8"},{url:"img/gib/6.webp",revision:"32eb9f3a488fa490bdc4a97a3b56bc47"},{url:"img/gib/7.webp",revision:"6335bcc03fd830ffff2b5d50bcf27674"},{url:"img/gib/8.webp",revision:"6741566622ae6db01c808f41626127c8"},{url:"img/gib/9.webp",revision:"738676086f5f13fb0b68d51f9db9536f"},{url:"img/gib/mononoke/1.webp",revision:"c1cecf43a07dd38a209755e5b284a97a"},{url:"img/gib/mononoke/10.webp",revision:"ed2e76d87d11c77c6b36c872372b9cbe"},{url:"img/gib/mononoke/11.webp",revision:"9220ccd14d4b5235b7b969587233164e"},{url:"img/gib/mononoke/12.webp",revision:"f059becb15d5c3844512f268564ed2a7"},{url:"img/gib/mononoke/13.webp",revision:"63012d48bf56e366bfb4b97707e62392"},{url:"img/gib/mononoke/14.webp",revision:"8b9025ca54749a1abaf648ae875380cb"},{url:"img/gib/mononoke/2.webp",revision:"fbff6e2629aa09b5129ef92315d9ecfa"},{url:"img/gib/mononoke/3.webp",revision:"34bc5b1ba588eb602f8c5e53eb13724c"},{url:"img/gib/mononoke/4.webp",revision:"ba858a1ff9036d595058b1c71876011c"},{url:"img/gib/mononoke/5.webp",revision:"7e826ccd99e889e61a966bbde6eb9b70"},{url:"img/gib/mononoke/6.webp",revision:"3cf011aabb2bef762e9feab2ca4a2336"},{url:"img/gib/mononoke/7.webp",revision:"775329857ad8cadac595d2e18dee2372"},{url:"img/gib/mononoke/8.webp",revision:"c5395b806757462a313078b6ae6c19de"},{url:"img/gib/mononoke/9.webp",revision:"1fe8c781e3c831a8321d1ef20f737aff"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"img/pawicons/32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"img/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"img/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"img/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"img/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"img/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"img/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pawicons/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_16x16.jpg",revision:"cd3428135e94f5a83aadb8d5ced778e6"},{url:"img/pwa/favicon_32x32.jpg",revision:"1257041ac1eb102a40768d4bfeff16a2"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"index.html",revision:"ebd57be868e0d6537fd9d698afae84f6"},{url:"install-use-valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"install-use-valine/index.html",revision:"918f69b588b643a8b3e96a6cc030ec43"},{url:"install-use-valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"install-use-valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"inventory-system/index.html",revision:"20bd7dbfeeff5d3bddd549456186b014"},{url:"js/countup.js",revision:"5f2f77ec867d7f85d3bdbad2bf804fac"},{url:"js/main.js",revision:"80de3021a5d1ba2ecc68d332b284c836"},{url:"js/rightmenu.js",revision:"e4b3044aa999f5c624cb1432ff11d15d"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightvn22-10-03/index.html",revision:"7c1b930d9c3568085f94745653ed7dfa"},{url:"lightvn22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightvn22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightvn22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightvn22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"lightvn22-11-24/index.html",revision:"93ce8f3702123de1811ba32c65a928ca"},{url:"likebutton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likebutton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likebutton/index.html",revision:"5daabe733748a525757ae3a5cdb05a97"},{url:"link/index.html",revision:"9a4bb0e146ebe3933d17b4314d2d8078"},{url:"make-butterfly-beautiful4/index.html",revision:"51cd45b02f5822d45d230980229d576c"},{url:"map-puzzle-system/index.html",revision:"9bf673df1cdd14f183a3f621ff9c36ac"},{url:"maple-effect/index.html",revision:"ddcb7acf97190131fb649b9b0d6acfc7"},{url:"memberships-2/index.html",revision:"095beb479aadd207ddd719c7790eddea"},{url:"memberships/index.html",revision:"13050097b300fe0b8eb314d65b5af7ac"},{url:"multiple-language/index.html",revision:"c2d89f9bd6c35ef5ceef04073f75d24a"},{url:"new-year-event-2023/index.html",revision:"52cdf882bdccc434689982d9494cf084"},{url:"newsletter/index.html",revision:"849e0e88e9d0caaebc4ba3c7e82118c2"},{url:"null/index.html",revision:"afb954dac6e897265ca764df543c3113"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"75b4cab5b7310015888d12faa95c6879"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"openchatai-renpy/index.html",revision:"5f8927ebae5ad4bed333098129e7dac5"},{url:"original/index.html",revision:"04e24a1324cdc562e5d46c9ee4119c20"},{url:"page/2/index.html",revision:"6f6d7cf31c4ca9cd2ff66437fb85c688"},{url:"page/3/index.html",revision:"655d9414ccce0e227f8f89f773f24dc2"},{url:"page/4/index.html",revision:"47b209c7d19b44b61e9d0aabfb894338"},{url:"privacy-policy/index.html",revision:"841550a2401102c14125f7ae352f1483"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-dialogue/index.html",revision:"cd6f5fba19959ede8e9c041f26862438"},{url:"random-number/index.html",revision:"ade682421e0f2f6968f94dc64051e806"},{url:"random.html",revision:"2ae584d9d09640f5ea492f769583217a"},{url:"release-017/index.html",revision:"9a4ca73803cc6e55665a539106e9b4f7"},{url:"renpy-basic/index.html",revision:"26b6fe28a8cef091c30751321f227245"},{url:"renpy-matrixcolor/index.html",revision:"c2d6faa69e171b3125f4e8536a3ebae6"},{url:"renpy-overlay/index.html",revision:"10a8ead8dd4cf1cc97e7902f489bf3b0"},{url:"renpy-review/index.html",revision:"b2df222595b746a704070a44c7278740"},{url:"rpgmaker-assets-menu/index.html",revision:"ddbbb757e3b11631c5fb1f581d4805a9"},{url:"rpgmaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgmaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgmaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgmaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgmaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgmaker-create-a-new-map/index.html",revision:"99536f1b9ebdde07d874be36b091fc17"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"8d36fb94a18f6977795c3700411d369e"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"518bbc80fb90ba1a05c64fc45e893a8e"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"c657dd15cba4604fb7c5f426664af2b9"},{url:"side-image/index.html",revision:"fcd1d25d3f6cd9dcdf9925a8a146d0ba"},{url:"snow-effect/index.html",revision:"64297eca51e67714029c83a4039187a7"},{url:"speaking-animation/index.html",revision:"aefa7b9236d5781e2388e9128f87c225"},{url:"splashscreen/index.html",revision:"d917c474c527b07ee13e6fc9e9a99bfa"},{url:"sw-register.js",revision:"9ad664227af9ef6cd330bf115d960a0b"},{url:"sw.js",revision:"24ccc13d4460a439fa61ad272894ca7b"},{url:"tags/ai/index.html",revision:"7b0025e0e9ac43126f6fe093a10066af"},{url:"tags/butterfly-beauty-diary/index.html",revision:"3ee19d2989fef4961ef742354d1b0d60"},{url:"tags/commision/index.html",revision:"895455a7d7ab154e35a05cd4fe68eea7"},{url:"tags/custom-hexo-theme-butterfly/index.html",revision:"1c1857b153f9dfb48238735f4761345f"},{url:"tags/custom-title/index.html",revision:"c8d4affacbb3b80221e11b80ae39458f"},{url:"tags/dialogue/index.html",revision:"98fd1b81fe9063c8b296fdb6ce008bad"},{url:"tags/effect/index.html",revision:"1366dd585aef1216b58ddfa3d89e5b89"},{url:"tags/event/index.html",revision:"6db3e3d118082ab691b3b51c3bab1d1b"},{url:"tags/Hexo-plugins/index.html",revision:"11bac33315bcb366e3ed8c0bb2b6f7d6"},{url:"tags/hosting-own-website/index.html",revision:"cf4b55a6741933f50f1c2c0828967dc4"},{url:"tags/index.html",revision:"67461b0f0acaf9e044c39c5146ae49a2"},{url:"tags/itch-io/index.html",revision:"a38836801fead40c732a5d05723d6b1a"},{url:"tags/light-vn-update/index.html",revision:"0cf262a912e133b736251d6d26e4b74f"},{url:"tags/Light-VN/index.html",revision:"ffe24939d7c50ffaba1ceb294b116c8e"},{url:"tags/nvl-maker/index.html",revision:"e93b194e3b34914e7a00c0ce00883fff"},{url:"tags/p-tutorial/index.html",revision:"f8bf835a92a59194ac3d9e427ef8ee74"},{url:"tags/player-related/index.html",revision:"c76a9630314f086fdf51a48283cfdae8"},{url:"tags/pro-tutorial/index.html",revision:"6476a0d451ff37e1deb6479ec8bd4d49"},{url:"tags/pro-tutorial/page/2/index.html",revision:"b01cd522fa6434b6b23c15bbe7e4f37c"},{url:"tags/renpy/index.html",revision:"fcfe7b0fb8afdaf0d0a06f9d7aa9ed2b"},{url:"tags/rpg-maker-custom-map/index.html",revision:"bb5005c9d6996849e6df0a84f63b95dd"},{url:"tags/screen/index.html",revision:"d2e71f3a2504158bd0a2850ca9b5ae2a"},{url:"tags/special-function/index.html",revision:"339919b0ab8c0876f4298eb525455092"},{url:"tags/tyranobuilder/index.html",revision:"046485cd8ff94a7b00a275c7a6d56031"},{url:"tags/ui-assets/index.html",revision:"8dcac0736782658e174442b1d70b1856"},{url:"tags/update/index.html",revision:"a51ba300c2a28d18dfdff1feae175619"},{url:"tags/upload-game/index.html",revision:"db476fc507a002054e1a8fd6daee8f82"},{url:"tags/variable/index.html",revision:"54cdf330dcd124805351264e74466d0c"},{url:"tags/visual-novel-maker/index.html",revision:"03b09012ebb83339c7c6f54c36a3821e"},{url:"tags/隨機功能/index.html",revision:"0c23ab3be91874003b9111c6d63c4558"},{url:"test123/index.html",revision:"caa779f9d383c62120404c3c60dde825"},{url:"textbutton/index.html",revision:"6180fd5919af9cd624762365d739845c"},{url:"to-do-tutorial/index.html",revision:"37b3ca9023295f1125b01d17beee6735"},{url:"tools/index.html",revision:"135ec91732b2a913da2f3e9d73585320"},{url:"transfer-to-hexo/index.html",revision:"b5acd8db16b1e52045d6f1d9150091e4"},{url:"tutorial-update-history/index.html",revision:"dd4a9f90c4611821c8b294f667f6c891"},{url:"tyrano-name/index.html",revision:"a0944be174cc821b0a5cfad09aa8107c"},{url:"tyranobuilder/index.html",revision:"19f9ede40f39f8b8c386fdfd093ec3d5"},{url:"undefined/index.html",revision:"264b6b792b07dd42863099df623269de"},{url:"update-20221211/index.html",revision:"f5a085efa5a1a56b477e2ba69d61ee08"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"4701be369413a52012514b77b95ff569"},{url:"upload-your-game-itch-io/index.html",revision:"5381c2d8bc8a5d313766014c834d9bb5"},{url:"use-list/index.html",revision:"558ae4b7cdff552d8c54a3736b9300fd"},{url:"use-nvl-mode/index.html",revision:"61f5a7a3b1fdcc091a3e2ff44e4a9809"},{url:"useimage/index.html",revision:"a5b0d6effd8ad80db3a3a7a8eca380cf"},{url:"variable/index.html",revision:"d2fa0051a01977fb873943a61f0cfd67"},{url:"vnmaker/index.html",revision:"10f6d01b23311315e7558addf0486220"},{url:"weather-effect-tutorial/index.html",revision:"4924bf0fe5d44a7cc94d5650552ffeb9"}],{})}));
//# sourceMappingURL=service-worker.js.map
