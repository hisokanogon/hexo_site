if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const f=e=>a(e,c),b={module:{uri:c},exports:n,require:f};i[c]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"1723ad7333608fcd66fe538fd78a4127"},{url:"2024-future-plan/index.html",revision:"2be71e3899577d655ec200087b345537"},{url:"2player-battle-system/index.html",revision:"0e478ccb053019e9fcd235123d9cdb1c"},{url:"404.html",revision:"2f259e2bfd361774d3436dcebcbd94f4"},{url:"about/index.html",revision:"6688c49ceb37228cdd3f8fdf0f8ea3e6"},{url:"acg-creator/index.html",revision:"5e90703d0d05f50bdd827aeb98e5a903"},{url:"add-artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"add-artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"add-artitalk/index.html",revision:"63db3512b96b38858825b1795c83961e"},{url:"add-artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"add-artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"add-artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"add-artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"add-artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"add-artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"add-artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"add-artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"3250af62193d683a24812bcb61e4cd8e"},{url:"animated-title-main-menu/index.html",revision:"97840577336dc91bcbc13131680bfd61"},{url:"archives/2022/05/index.html",revision:"051f9a5374b19d7dd06e9d1816bccc9e"},{url:"archives/2022/06/index.html",revision:"4ae2e1f5264215345549c48a46c594ec"},{url:"archives/2022/08/index.html",revision:"a1f16b082bc5363487b1e10a2f40373c"},{url:"archives/2022/09/index.html",revision:"07ff244ccafff3b374033ca258fa0e61"},{url:"archives/2022/10/index.html",revision:"0690c1eeb4682c332b7880ed1924cea4"},{url:"archives/2022/11/index.html",revision:"a647837581c7ebc2221a438a0904d0bb"},{url:"archives/2022/12/index.html",revision:"1d85a19ec0ad3c9a50e810ad99d0c5ff"},{url:"archives/2022/12/page/2/index.html",revision:"129df44bade5592ee5ac6b241a7bde43"},{url:"archives/2022/index.html",revision:"1eb6c6b72c2c23305aca499df66900fc"},{url:"archives/2022/page/2/index.html",revision:"0e91c09605d24f9d6d014faa12e065b1"},{url:"archives/2022/page/3/index.html",revision:"78d51f931cd1ab439fef42bb0b28304c"},{url:"archives/2023/01/index.html",revision:"0675e8f0537550d6c4383dd5bc78f22e"},{url:"archives/2023/02/index.html",revision:"19aa3018204af41cd3a9c4d954acf778"},{url:"archives/2023/03/index.html",revision:"e7fe93a114ac26c52ad5fb6b1f58d6d4"},{url:"archives/2023/04/index.html",revision:"971dbd8d4c6a2113e29e7c857d4b4976"},{url:"archives/2023/05/index.html",revision:"fc7e63c452da6ecaf524827e01ce92b5"},{url:"archives/2023/06/index.html",revision:"380232d795421e3d0e53eadef71124c7"},{url:"archives/2023/07/index.html",revision:"9b22322aacdcfa170c0941fd7c23a251"},{url:"archives/2023/08/index.html",revision:"eeb7dd2e0e52045b7b30701ebb35134e"},{url:"archives/2023/09/index.html",revision:"5a4552ae196dbba84aa154b831f4ee4f"},{url:"archives/2023/10/index.html",revision:"6628694f651e0e3b93041a0669aa4ec3"},{url:"archives/2023/11/index.html",revision:"6222710181c2718d382c7963f4106696"},{url:"archives/2023/12/index.html",revision:"5e6ec6eddd71aa871fbca379d90dcdb9"},{url:"archives/2023/index.html",revision:"01517f8fcb9ef2be17b392ed0be2b899"},{url:"archives/2023/page/2/index.html",revision:"0c4f78aa0849665781825704350801f8"},{url:"archives/2023/page/3/index.html",revision:"474d240da786453b0dca22a650ae0faf"},{url:"archives/2024/01/index.html",revision:"0e5cb8ef06f1378d877ec9cd53ba687b"},{url:"archives/2024/02/index.html",revision:"bd4b1b9c2c45266745cf0800df2a0342"},{url:"archives/2024/03/index.html",revision:"9ddc164f804066234fc4c67deaa2a253"},{url:"archives/2024/04/index.html",revision:"dd7a575ee95af236d463b713226b904d"},{url:"archives/2024/05/index.html",revision:"18d480ddca48cf075efbfa2ff91acb35"},{url:"archives/2024/06/index.html",revision:"d22047de78c42811a203da5e6c8b9ae9"},{url:"archives/2024/07/index.html",revision:"59e968d635c28de28f600f7226af1184"},{url:"archives/2024/index.html",revision:"5ff8f9ffa5a4d4b5d879cac19c6f98ca"},{url:"archives/index.html",revision:"76a57ccfc9212fe5b28589bf56b8e959"},{url:"archives/page/2/index.html",revision:"f761a5654396cdd526d79b35907dc6b8"},{url:"archives/page/3/index.html",revision:"77cb04167958b4ebf291b0681ba22bf2"},{url:"archives/page/4/index.html",revision:"00e4cfafe4a7fbc26aee15ad21550f14"},{url:"archives/page/5/index.html",revision:"1c00fe4d1c16d5949cc5734a13d7ddc1"},{url:"archives/page/6/index.html",revision:"797d9e1def23fb17df34a971c71f07df"},{url:"archives/page/7/index.html",revision:"f7c2faf3332cb4986866141164ae67af"},{url:"artitalk/index.html",revision:"81dad3570405846ccde9a16e2b1be45f"},{url:"battle-beautiful/index.html",revision:"c6d24693da2a1ee08b432f642ea7489f"},{url:"blur-effect/index.html",revision:"a9ec8a3c3a876c57e21c67c5c9f3cef3"},{url:"butterfly-custom-tag/index.html",revision:"f04d09f77e7de32cfa83b91f4fa35b44"},{url:"butterfly-plugins-faq/index.html",revision:"8440d825326d737c86660c911aa4f977"},{url:"butterfly-ui-change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"butterfly-ui-change/index.html",revision:"601ffbc52732d6ce3525784e7320b7c6"},{url:"butterfly-ui-change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"butterfly-ui-change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"butterfly-ui-change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-ui-change2/index.html",revision:"37a6592c6c6e016af34dbabec044376e"},{url:"categories/announcement/index.html",revision:"e02d3f943d8799e03eb4a2d079f5abf7"},{url:"categories/diary/index.html",revision:"1798a7f5f6c6667c619306f76317ef72"},{url:"categories/game-dev/game-engine/acg-creator/index.html",revision:"61f75230bf5aa4fddbacebc488f11cc2"},{url:"categories/game-dev/game-engine/index.html",revision:"e72757f7d5aaed4940754488b308f0c8"},{url:"categories/game-dev/game-engine/lightvn/index.html",revision:"c908d8f39a955a9cc20f16ce0905b23b"},{url:"categories/game-dev/game-engine/nvl-maker/index.html",revision:"eb608c5dbc3d422c8c57a4cd7ef0015c"},{url:"categories/game-dev/game-engine/page/2/index.html",revision:"44deb8c6d0cb16edb355c66fdfb08932"},{url:"categories/game-dev/game-engine/page/3/index.html",revision:"3e1214481d16fa3d222399b5b1ec93bb"},{url:"categories/game-dev/game-engine/page/4/index.html",revision:"d9180f6e55a55a4d501299e82c5048d4"},{url:"categories/game-dev/game-engine/page/5/index.html",revision:"042fe5f2c4a7ae6ea5fb2804a1a3c4b8"},{url:"categories/game-dev/game-engine/renpy/index.html",revision:"633bfcf2d2b1257c2c592e5e5f41c86a"},{url:"categories/game-dev/game-engine/renpy/page/2/index.html",revision:"5bc8802230301a0da3991c0514cb204e"},{url:"categories/game-dev/game-engine/renpy/page/3/index.html",revision:"658256b1acc7f37f9f59acd8f22a59da"},{url:"categories/game-dev/game-engine/renpy/page/4/index.html",revision:"fbd03519c4e17ff7e629c2321587092a"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/index.html",revision:"c5423f54872125f575045e085c31ee9c"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html",revision:"327eeaab1ad5b7fdbbf83a94b0066dd4"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html",revision:"55a904ca4383fd4fb2aaa8691eea9aba"},{url:"categories/game-dev/game-engine/renpy/tutorial/index.html",revision:"1e37fa70a71ecc75d3946d35aefec498"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/2/index.html",revision:"6436668ad4fd6d92c83538415ced5de3"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/3/index.html",revision:"f09ec50cc03d2c2dc73a75fea975efb5"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/4/index.html",revision:"79bb5b942d391de203800c95bb7db95f"},{url:"categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html",revision:"6b796a87e1f5c7ce04fd789553887e10"},{url:"categories/game-dev/game-engine/rpgmaker/index.html",revision:"d9d840d1d47bf4c481bb52a728d8997f"},{url:"categories/game-dev/game-engine/suika2/index.html",revision:"48cb0d4a52dbbbe23f18296890b779f8"},{url:"categories/game-dev/game-engine/tyranobuilder/index.html",revision:"a337a0dc9ce3c76e9bb67cacbab5a293"},{url:"categories/game-dev/game-engine/visual-novel-maker/index.html",revision:"c5892cdd2691024ff3cd6e622bbfdd28"},{url:"categories/game-dev/game-engine/webgal/index.html",revision:"101f70ba925806f611ecb17fe3031b33"},{url:"categories/game-dev/index.html",revision:"039ec295f01d59c1fb2482be424cb7ae"},{url:"categories/game-dev/page/2/index.html",revision:"7ddc1663631a0db25fb836374e54edb2"},{url:"categories/game-dev/page/3/index.html",revision:"1c9f1c3d9272d68fea7cba6451a77811"},{url:"categories/game-dev/page/4/index.html",revision:"3d39c9ef705e72ec1fab65dd95a497c0"},{url:"categories/game-dev/page/5/index.html",revision:"35ad40f9df14d0d37d5a7277a5b5aa15"},{url:"categories/hexo/index.html",revision:"5191458c217be05c6e1b576d7adcd222"},{url:"categories/index.html",revision:"9bfbada718255e803ae7f34be3ba324c"},{url:"categories/material/index.html",revision:"49d750487557064eae7ecc7e328338fc"},{url:"categories/update/index.html",revision:"10ccaa790c87958e6a183bbcff6dfae0"},{url:"change-according-to-real-time/index.html",revision:"cf236e5e559a1d390c2bbd19a81691c0"},{url:"change-character-info/index.html",revision:"5b31aeda76ee565847235986840e11a1"},{url:"change-title-after-first-time-viewing/index.html",revision:"cea9d00678df3b8d78a6824513d9cb02"},{url:"change-title-based-on-event/index.html",revision:"7d30c71dd4be09b21584a5ae5153162f"},{url:"character-interaction/index.html",revision:"3dded8dea840347870d69ac8df15e2b6"},{url:"character-stats/index.html",revision:"4a4162bb02b4ee6ff22a6fb608e9781d"},{url:"chatbot/index.html",revision:"1080db0c0bab7766cb85b0a12efda109"},{url:"choice-time/index.html",revision:"22fd30be3c975c9de00f1295bb90607f"},{url:"comments/index.html",revision:"f233d174bd3763a146415ea70ab57497"},{url:"commission-info/index.html",revision:"d95220a3c38761d790a57598f2c35091"},{url:"count-login-number/index.html",revision:"50eb7e238e57d7d17107d176eedb61d9"},{url:"create-button-anywhere/index.html",revision:"aeec0b13743c64ea67157daccbad8885"},{url:"css/eurkon.css",revision:"1e5323667de24fef57efb15014c0b119"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"0bed14c9097eb116780c357688f180e9"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"11436150d9973c45eada27f0dec2e489"},{url:"css/rightmenu.css",revision:"aca982109f4207621f081b23fe504af3"},{url:"css/siz.css",revision:"5c8fd500ff4957af0a62680ecb5b9249"},{url:"css/swiper.css",revision:"3d822811c064197f4b6073bff78f2388"},{url:"css/swiperstyle.css",revision:"fe40206a3ca2c42fb245616b032a4b52"},{url:"css/var.css",revision:"e07f7b14871032ed8a6c558dba15c70f"},{url:"ctc/index.html",revision:"494079304213f14fec294b8b7af54ab8"},{url:"custom-css/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"custom-css/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"custom-css/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"custom-css/index.html",revision:"96ad243218867580fd2cdf0a09efe827"},{url:"custom-css/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"custom-css/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"custom-css/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"custom-css/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"custom-css/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"custom-css/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"custom-css/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-frame/index.html",revision:"41d5f7da8a4819985e3ff271bbb79efd"},{url:"custom-gallery-cg-screen/index.html",revision:"358d1ff611853c74dc811ff1ce275283"},{url:"custom-launcher/index.html",revision:"0cebf081edbcfbb8c02979acb5f182e1"},{url:"custom-loading-screen/index.html",revision:"fefa0cb76bd970301fa0772a828ad74d"},{url:"custom-mouse/index.html",revision:"3b3fcfb63dda8c26ff244484dea48426"},{url:"custom-music-room-screen/index.html",revision:"f52af3cb877bbdcdb4b987e86bcfcbab"},{url:"custom-music-room-screen2/index.html",revision:"11d9df976009f91db1e3b831efbe8ed6"},{url:"custom-nvl/index.html",revision:"4191e13c41f2694b824c788674135860"},{url:"custom-player/index.html",revision:"c82d47ffecec1cbbb96f13a12c31da31"},{url:"custom-preferences-screen/index.html",revision:"063c0bed1cbb789924235b5da99f2927"},{url:"custom-say-screen/index.html",revision:"18b22bf837e1ef1ceee5c4ea1a8b7469"},{url:"custom-style-button/index.html",revision:"3291721a2bd37b06ea5abd042f5d7f5b"},{url:"custom-style-position/index.html",revision:"9def62204e8bdd70b28c462da42cb667"},{url:"custom-style-prefix/index.html",revision:"34c34ee724445909f8141d7917f060e1"},{url:"custom-style-text/index.html",revision:"5d9a47af63485f3891fe8e9f0a30b51b"},{url:"custom-style-window/index.html",revision:"9aa03e61746313f615e9906434153d11"},{url:"custom-title-screen/index.html",revision:"9fa8e9729235af0bf4c753beb51a6506"},{url:"define-npcs/index.html",revision:"adb086f0b5c9610ddd7aa61fda8acb9c"},{url:"delete-save/index.html",revision:"02418e386c161e10df37ec1047c311cc"},{url:"dice-function/index.html",revision:"4af7a7d2d7864b5520cc8555afc47f2f"},{url:"disclaimer/index.html",revision:"2f82838135dd8f4cd4c3b382cc001e60"},{url:"display-immediately-all-dialogues/index.html",revision:"e36f82045967fa249a266d9912df3083"},{url:"display-real-time/index.html",revision:"8f673f860c6214e37f0ccd52449aefe4"},{url:"enter-name-screen/index.html",revision:"d610867118d147885ce6411d447e46fd"},{url:"export-game/index.html",revision:"24a5aeb96deb6a24be58101c9ccd5c5e"},{url:"faq/index.html",revision:"60ecbd52235ae031ac80503a7be30fce"},{url:"friends/index.html",revision:"d06cd15f5217f3358a5c97587c0da593"},{url:"gallery-template-assets/index.html",revision:"4acabcd86da4d69bb624c9bc84e24b5f"},{url:"gallery-template-default-ver/index.html",revision:"9d1045c7f302d617cb04d80018e96a14"},{url:"gallery/index.html",revision:"9f965a91cc6fddd421c78a45341a5551"},{url:"gallery/photo/bg/index.html",revision:"48278fe9d32051e130cd7a115cc2973a"},{url:"gallery/photo/gui/index.html",revision:"f69c6edf4497e62a74deecbb66026aaf"},{url:"game-only-text/index.html",revision:"1e42f90e352a1c57c54653ee802271b0"},{url:"generate-random-name/index.html",revision:"77d5edc0b6a5224fae19e7dd21c7e952"},{url:"gui-017/1.webp",revision:"cb164e6304824ee23aa636d5c8bff293"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"3a14857f027fc4a86fc6173b78140ded"},{url:"gui-017/index.html",revision:"79542d05dee645236fd4a150f3f21dea"},{url:"gui-vertical-002/index.html",revision:"f0d36986a03c131a5f52765f1a80c327"},{url:"gui012/index.html",revision:"8f247b5f398550bda1878190582982b9"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"18ee067e39565be603c5e2e30fb13004"},{url:"gui018/load.webp",revision:"bc4fd522772a6852fda7af18b3f17b12"},{url:"gui019/index.html",revision:"832e02995cabedd84aa793d90043f9ab"},{url:"gui020/index.html",revision:"9ff5722310eb046407ff8a43e5770d1b"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"f3454d36397d08621f11d8ba1a9a2ab1"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"hexo-custom-mouse-disply/index.html",revision:"2636db80197b174c3fc14c5aacb9a04b"},{url:"hide-textbox/index.html",revision:"fe06d37ad81f4007365fe2cb1fc7eafa"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"1629ac701c6392d2d4ecb98ce5ae6ad5"},{url:"images-tip-function/index.html",revision:"9378110609b466aca537ed48782f588c"},{url:"images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"images/pawicons/32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"images/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"images/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"images/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"images/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"images/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"images/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/favicon_16x16.jpg",revision:"7170a7a0a8983fb2790e28c864648f5b"},{url:"images/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pawicons/favicon_32x32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"images/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"images/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"images/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"images/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/bmc.png",revision:"40b98209d9deb3e69053d4a559cc8a30"},{url:"img/cover/1.webp",revision:"75c4ca0e23ea27798c951e79cf118d88"},{url:"img/cover/2.webp",revision:"37a1fa535df37e8c5cf01def24fc9eeb"},{url:"img/cover/3.webp",revision:"ec6c922dd423211df47e8cd79493aacb"},{url:"img/cover/4.webp",revision:"896796dcf0a2b1f714060e1300972432"},{url:"img/cover/5.webp",revision:"06b21ba7e9d00ca7768252c51b3854af"},{url:"img/cover/6.webp",revision:"7e12d98e2bf9548379c39beba3a222d2"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/gib/1.webp",revision:"3a9c61bd832c972161a4c1236e8932fd"},{url:"img/gib/10.webp",revision:"a8bf147229785e8287f71465e8e2184d"},{url:"img/gib/11.webp",revision:"2ee1e23c6795861b209660c3318452c0"},{url:"img/gib/12.webp",revision:"8474e1ace21041b4d23ef81699e80ea5"},{url:"img/gib/13.webp",revision:"b81144a83d8b8bdac63cc2c155adcf7c"},{url:"img/gib/14.webp",revision:"933a480a83f392bffb0d690964248eed"},{url:"img/gib/15.webp",revision:"0fea3990e5ccc0db12506ce55bb85e5f"},{url:"img/gib/16.webp",revision:"396b012a1baa6d7542df1cd4f92aa33b"},{url:"img/gib/17.webp",revision:"327cc150630dd9abb577be1708c7e43d"},{url:"img/gib/2.webp",revision:"71cd303200dbab88eea0c5565f0dfe88"},{url:"img/gib/3.webp",revision:"d6a489bd5309b5e0972e054b95f8e346"},{url:"img/gib/4.webp",revision:"c63440486dac3ae824221ab996f7b5cb"},{url:"img/gib/5.webp",revision:"5e12e70e4ba0a994673fcd091b3cc44d"},{url:"img/gib/6.webp",revision:"699a5ed1daa416539598e302984dc5a7"},{url:"img/gib/7.webp",revision:"b1a6db37ce52de0d50792128da9b9f4c"},{url:"img/gib/8.webp",revision:"7a472f0077feb6f7901446a419012ca0"},{url:"img/gib/9.webp",revision:"1a7e4ae1712bad270688d7346ad2fb00"},{url:"img/gib/mononoke/1.webp",revision:"d8201509fe441fb29173e6ef2878b618"},{url:"img/gib/mononoke/10.webp",revision:"f963257315e72440575413d673baff64"},{url:"img/gib/mononoke/11.webp",revision:"98b4003a98c15f40acfbbcf6c7dd4ea2"},{url:"img/gib/mononoke/12.webp",revision:"a6347a9c0a47dede6ca41722a5a1368b"},{url:"img/gib/mononoke/13.webp",revision:"4ad91e7917dfe78413884a35bf45a3b9"},{url:"img/gib/mononoke/14.webp",revision:"7b59dc953f4333a3941f092aaa39b663"},{url:"img/gib/mononoke/2.webp",revision:"59e74291fb091b32cc4e4291a25f846f"},{url:"img/gib/mononoke/3.webp",revision:"2eff7ee46059be1118891e976e96e98a"},{url:"img/gib/mononoke/4.webp",revision:"6823ddd1e470ed0c6c92c6bf93fcafbb"},{url:"img/gib/mononoke/5.webp",revision:"f873ec8172aef5364543eafc98bb7805"},{url:"img/gib/mononoke/6.webp",revision:"aef6f12f2284f2a7d839206d3a71a0e5"},{url:"img/gib/mononoke/7.webp",revision:"fbfcdadb4b5f6eed1492fe7f109c2bed"},{url:"img/gib/mononoke/8.webp",revision:"4f02248750fd90e1fc6227f42a4135f1"},{url:"img/gib/mononoke/9.webp",revision:"ef22b303f1cce87b3ab226801fba5361"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"img/pawicons/32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"img/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"img/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"img/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"img/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"img/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"img/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pawicons/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"in-game-change-size/index.html",revision:"e68ded1367b293ab16ebbf5394dbc525"},{url:"index.html",revision:"6b5c8298be39aec541c5ed995f1fc699"},{url:"install-use-valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"install-use-valine/index.html",revision:"66a3eb6884071b9942ca14bcc26bc1d8"},{url:"install-use-valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"install-use-valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"inventory-system/index.html",revision:"fa99cf21fcbdfca85fc3e9d59690633e"},{url:"items-sprites-effect/index.html",revision:"ac00a4a9633a718807231de3a0e0b74b"},{url:"js/countup.js",revision:"04397b967e3ec0c509586356266b3ded"},{url:"js/main.js",revision:"80de3021a5d1ba2ecc68d332b284c836"},{url:"js/rightmenu.js",revision:"e4b3044aa999f5c624cb1432ff11d15d"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightvn22-10-03/index.html",revision:"250bee942c7bd0905c8d30a0a29c052a"},{url:"lightvn22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightvn22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightvn22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightvn22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"lightvn22-11-24/index.html",revision:"3e943e9ea56fdeb75596d1514158c0d4"},{url:"likebutton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likebutton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likebutton/index.html",revision:"99308558b951b44e76c5ca9771501703"},{url:"link/index.html",revision:"b6f72ac97147c45b47415dddd0ef443c"},{url:"login-reward/index.html",revision:"25449d1b2c500a549733538966a0eb6d"},{url:"main-menu-music/index.html",revision:"e77b25a8d92ffe8fc7c052fb0cc0f7a3"},{url:"make-butterfly-beautiful4/index.html",revision:"4de357ecdbfabf50d534ffe51811da79"},{url:"map-puzzle-system/index.html",revision:"29007d7b33a72750665174df126836a8"},{url:"maple-effect/index.html",revision:"46510851f5f7943b1e6929c496ae0064"},{url:"memberships-2/index.html",revision:"4b350cedbd8b5906411f5eb1b771c8a5"},{url:"memberships/index.html",revision:"d14dc54fbb4c8ffa84cba143508d7267"},{url:"multiple-language/index.html",revision:"5216f1cdaea238bbaae22f47f8811c8a"},{url:"name-input-assets/index.html",revision:"4598352c3ac419ede7711a4c67dd6046"},{url:"new-year-event-2023/index.html",revision:"6832bc5b119b326c28a003e64cbbe2d9"},{url:"newsletter/index.html",revision:"7cb934b7f6f76d3b79cb52a2ff281ced"},{url:"nsfw-limited/index.html",revision:"8d3dc05efcff1331a17cc45e650e5748"},{url:"null/index.html",revision:"8c695ba018290bf207d5ecd9fd19a1b8"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvl-ctc/index.html",revision:"6478ea3b1e5e75d3299f7ae164a001ea"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"ef3abb565b87c16cf1d5e77ecd55789c"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"open-external-link/index.html",revision:"ac4e4bdb4c0a4c55a2f38907c61a092b"},{url:"openchatai-renpy/index.html",revision:"140174c93a5c2d4284049d36c0b44229"},{url:"original/index.html",revision:"200e4af4d48d591ecb630294d74b2f1c"},{url:"page/2/index.html",revision:"1f2bc0cf4c316c34049bf91d95be3540"},{url:"page/3/index.html",revision:"10599fbe58b7149568070fa8350c035c"},{url:"page/4/index.html",revision:"9e04dfcebb260c0bf82640005a7af821"},{url:"page/5/index.html",revision:"878085fb60523d7bb988644b08d96a21"},{url:"page/6/index.html",revision:"72119d3edf2a02a52faff56265df4cc0"},{url:"page/7/index.html",revision:"b633fb8b70982952ca3837b2eb1fa6e5"},{url:"point-pop-up-assets/index.html",revision:"fedb9e0d4f3b36a082ab9741112349e5"},{url:"pop-point/index.html",revision:"24035e07f91bb3d20fdbf91ef2c2c840"},{url:"privacy-policy/index.html",revision:"ff1a50153288662c8de2a6047df06540"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-dialogue/index.html",revision:"16e7469db9fa1c113b2d9a8b698f6b68"},{url:"random-number/index.html",revision:"fdd960e4e40bcd0a7c9c416106c56f18"},{url:"random.html",revision:"3a3d29cdbb2caf7374a1b7b12a12929f"},{url:"release-017/index.html",revision:"f308b3d8533e4d982bb25412ea0e2694"},{url:"remembering-choices/index.html",revision:"916e01ac6762756988fa429a94efbe5c"},{url:"renpy-basic/index.html",revision:"25f0d482c2052d168a4e42921309b5a4"},{url:"renpy-crash-glitch-effect/index.html",revision:"64552efb926b9ba235f5398ecf7574f9"},{url:"renpy-flip-image/index.html",revision:"1e56fb337fed5324b2aac66125882d80"},{url:"renpy-matrixcolor/index.html",revision:"191e5fd026d0f4592de91cf45dcdd305"},{url:"renpy-overlay/index.html",revision:"c8b33916c5dea045fe210beb5b078ea3"},{url:"renpy-review/index.html",revision:"682aa4916124963a9c513f0f2b44b883"},{url:"renpy-typing-effect/index.html",revision:"2a0f8f8d7772c1f094724c96e7b24c0a"},{url:"rpgmaker-assets-menu/index.html",revision:"eb13f774838a2d33fb1aee74f76bda89"},{url:"rpgmaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgmaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgmaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgmaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgmaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgmaker-create-a-new-map/index.html",revision:"77195488a41d058217a6dab3a3bc4540"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"3f7457af595f0f694482e60467fce6d4"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"0bc69e503951f2798de7022de5fd2c7a"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"e8618e32bdf7f3a8d51a9ffb9b72a83a"},{url:"sakura-tree-background/index.html",revision:"1e7d2413b715402b1fee6a03aafde53b"},{url:"selected-button-style/index.html",revision:"f03da76963fcf934b15fc78c279145f4"},{url:"show-variable/index.html",revision:"e6fa417a9a987a7a642f9eed5ec970c5"},{url:"side-image/index.html",revision:"21459068ca6bacbb058b18b30893273d"},{url:"snow-effect/index.html",revision:"3a07d94712c276194c49ff8bbf68cb23"},{url:"speaking-animation/index.html",revision:"691efb365c9c3e1ea3a203e6ef55f436"},{url:"splashscreen/index.html",revision:"057fdfb7e508b92271c5491f786303ed"},{url:"suika2/index.html",revision:"45e89db96b4b7ef28bcfa56c0f1cc5b7"},{url:"sw-register.js",revision:"44c681814f71db1af4bdea3f3f497b20"},{url:"sw.js",revision:"dff28fc7d6e3d5cdd91297a2b16c9677"},{url:"tags/acg-creator/index.html",revision:"8c95746ad5a7d32987f877ce593b26e8"},{url:"tags/ai/index.html",revision:"82717417c7dcdd3c12a48c364df22e3e"},{url:"tags/butterfly-beauty-diary/index.html",revision:"2eb4115b77388e4b04bc1efc370f5553"},{url:"tags/custom-hexo-theme-butterfly/index.html",revision:"bdd831f1546309edcddc943eb06a429a"},{url:"tags/custom-renpy-title/index.html",revision:"3ea050f59dd6e7efea6641f11ff9d2e7"},{url:"tags/dialogue/index.html",revision:"0f23be2e08dcff6286edcc9c1a72b2cb"},{url:"tags/effect/index.html",revision:"1fee7393e7b79da694db024d38a83b07"},{url:"tags/event/index.html",revision:"ec81fc7a7ac2ab937338c76ca8a4281a"},{url:"tags/Hexo-plugins/index.html",revision:"0ca64f1b5bc90c9b06ce1984ba7efc99"},{url:"tags/hosting-own-website/index.html",revision:"bc577dcffff119c839a7fed69252b826"},{url:"tags/index.html",revision:"ef4d179669ed8e4d3c21f7ee01af2e1b"},{url:"tags/itch-io/index.html",revision:"a3d34d7ca48799efcf213d3f573871f0"},{url:"tags/light-vn-update/index.html",revision:"5974daba5a2c2ed1d0720f0184a57d6d"},{url:"tags/Light-VN/index.html",revision:"bd31864cc37d0ddc63ea789d35007ac5"},{url:"tags/nvl-maker/index.html",revision:"6dce667afb6bba4843449bd14c93ea4e"},{url:"tags/player-related/index.html",revision:"9d99158351eb0c83001cb1a523c9b85b"},{url:"tags/pro-tutorial/index.html",revision:"172d31cd4aa3d4edfb8d85d6c4dbc39a"},{url:"tags/pro-tutorial/page/2/index.html",revision:"e5d317002441bf81cd9bd6a4babccbcc"},{url:"tags/pro-tutorial/page/3/index.html",revision:"03ed968bbe6847c33cdc8aabb1875e97"},{url:"tags/pro-tutorial/page/4/index.html",revision:"28c57ff58a54fb8ba08b3de9f04223ca"},{url:"tags/renpy/index.html",revision:"3f94b3f4b274f12811cff50db299a4c4"},{url:"tags/rpg-maker-custom-map/index.html",revision:"c203bb32b25fbdb45f819d2a66731d18"},{url:"tags/screen/index.html",revision:"27cffcb043d509b0d0f07d0385896c4b"},{url:"tags/special-function/index.html",revision:"1fe52271ae46b18c7bd6a96cbacf5556"},{url:"tags/suika2/index.html",revision:"d2cdfc8bd78154f8c7af78b76f93ed1d"},{url:"tags/tyranobuilder/index.html",revision:"8149210c78ef4e8423de5cd8bf70a55d"},{url:"tags/ui-assets/index.html",revision:"f7f733f6b71ddf8db5bc7e3e168b703d"},{url:"tags/update/index.html",revision:"38eb1becac727415f3a08ddf17fd0929"},{url:"tags/upload-game/index.html",revision:"6a148a6680ad1a12b9f5194679a95493"},{url:"tags/variable/index.html",revision:"7332a37fd1aa9ed1d3649c5125378c52"},{url:"tags/visual-novel-maker/index.html",revision:"7ba3ca0ca241a3f1eab2b4e80f99740a"},{url:"tags/webgal/index.html",revision:"957cbb1dc051b9a8034e5f2080cc5f39"},{url:"tags/封面製作/index.html",revision:"e03fd37b11ded9a8d2fbbeea91fe1abf"},{url:"tags/背景素材/index.html",revision:"0b2066eef47c667f0bf5d52d05ab5d59"},{url:"tags/隨機功能/index.html",revision:"462465b74556a151a4199cd5e7946e28"},{url:"test123/index.html",revision:"2b6cea6d8603046cbc83b88d61be130f"},{url:"textbutton/index.html",revision:"a5fa594d725d7e8d214857caeda7a8e6"},{url:"to-do-tutorial/index.html",revision:"67dd276ea9b65c6cebdbc487c68a08d9"},{url:"tools/index.html",revision:"5d0b19fd543cb0ad48213a4341e753a0"},{url:"tooltip-function/index.html",revision:"826484518bdf0ac52b88c63a881c0f9e"},{url:"transfer-to-hexo/index.html",revision:"5fb14944e7100f19b9f183aeb3e3c7b1"},{url:"tutorial-update-history/index.html",revision:"87b03f8544903afecddd6b4ca43a2cd8"},{url:"tyrano-name/index.html",revision:"1ab5bd53f7054e13438229910e8f8108"},{url:"tyranobuilder/index.html",revision:"71717df7dcd64db26fc13a7df92940bf"},{url:"undefined/index.html",revision:"e57d182514be69d401dce67ea6fa7508"},{url:"unskippable-video/index.html",revision:"49ba6399759d66a9635f89adb448372f"},{url:"update-20221211/index.html",revision:"083d268be70df8a7eedf69562c0575a6"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"d5d05d443c206421933183f4066fbdf5"},{url:"upload-download-save/index.html",revision:"4c93c5f09b76183f8adda3e395221526"},{url:"upload-your-game-itch-io/index.html",revision:"d960eac8998dd79ff9dfadd92718d477"},{url:"use-list/index.html",revision:"f113d892693a423e0ab49e2464f1ef4c"},{url:"use-nvl-mode/index.html",revision:"58e18194c2e34ef9f9e8cefd38c8a40a"},{url:"useimage/index.html",revision:"077def06a117d036f805ede8810dad28"},{url:"variable-change-image/index.html",revision:"2786b6935033fddfe5b2ca7e5152b74a"},{url:"variable/index.html",revision:"1e6e4e2ec7a376f36aba53a50692710e"},{url:"vibration-function/index.html",revision:"1111259ccb8829cc3e6b21b58de6c568"},{url:"vnmaker/index.html",revision:"98086eff428f262ca2df08d13da4288d"},{url:"weather-effect-tutorial/index.html",revision:"d3f6b37ab8b4d9d64effdee8b406952f"},{url:"webgal/index.html",revision:"e3fbfaaa4ec574ae9f946127267ab36a"}],{})}));
//# sourceMappingURL=service-worker.js.map
