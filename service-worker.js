if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const b=e=>a(e,c),f={module:{uri:c},exports:n,require:b};i[c]=Promise.all(d.map((e=>f[e]||b(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"4718031cf52ca36fceab33dea4d28f13"},{url:"2player-battle-system/index.html",revision:"9f4d80ba090351bbcdd715553ee080b9"},{url:"404.html",revision:"1bade14ea9e14cac01cb6716e746e6f9"},{url:"about/index.html",revision:"93e78b481775966bee719a4b5ee6a865"},{url:"add-artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"add-artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"add-artitalk/index.html",revision:"d082f59b102b1aded8b0e58a8241b949"},{url:"add-artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"add-artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"add-artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"add-artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"add-artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"add-artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"add-artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"add-artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"e11c024622fb39a6cdc8957cc8751e0a"},{url:"animated-title-main-menu/index.html",revision:"18bb7bc14ff970e53b8d59c353a33205"},{url:"archives/2022/05/index.html",revision:"da2e8b6497d05ac7f698fdbbfb1e8509"},{url:"archives/2022/06/index.html",revision:"9c39a87307c767e9588c5044f498fcbf"},{url:"archives/2022/08/index.html",revision:"6d456530d1c23c7c446fa56f062013be"},{url:"archives/2022/09/index.html",revision:"7530c8e30a37fcd29ac2669c68b33372"},{url:"archives/2022/10/index.html",revision:"d7a8d95046090bb94d1403da27690c05"},{url:"archives/2022/11/index.html",revision:"94d2870a54d8213f231cdff1a3fbef53"},{url:"archives/2022/12/index.html",revision:"887bb18079dac96a0301a35c939d6d34"},{url:"archives/2022/12/page/2/index.html",revision:"ea4aa0d0c60055d404b4699d73f413b0"},{url:"archives/2022/index.html",revision:"e8835942de68bb681b2237d5a3807185"},{url:"archives/2022/page/2/index.html",revision:"6ccd64e99b9acc797f7fc389f0a95767"},{url:"archives/2022/page/3/index.html",revision:"eae3753db7034a00f586a437f3c3235f"},{url:"archives/2023/01/index.html",revision:"521bdabd61d8513ce25b24d367e6d410"},{url:"archives/2023/02/index.html",revision:"10febbdace23dc07697ace6ab6c79fc2"},{url:"archives/2023/03/index.html",revision:"2c5119afaf12684a7f6be5cfc78c9583"},{url:"archives/2023/index.html",revision:"7db4b7ef0e06a678d3c92559a25951d2"},{url:"archives/index.html",revision:"f5893bc5371977937c19408420de5d1f"},{url:"archives/page/2/index.html",revision:"a8c3061186f3c437b449db7f022304c9"},{url:"archives/page/3/index.html",revision:"57df4821c80307da1ae51be4511f1f7a"},{url:"archives/page/4/index.html",revision:"6eabda80f0f2d2a8ad252620aae8e8c8"},{url:"artitalk/index.html",revision:"d378a22a9d0d1d6f1b3b4d34cf5636e4"},{url:"battle-beautiful/index.html",revision:"039300c018e7579790cbc96bb06c24f2"},{url:"butterfly-custom-tag/index.html",revision:"ea77f6f66dd22fdfcbf5cb77f68aeba5"},{url:"butterfly-plugins-faq/index.html",revision:"551ca4dc22c52117ced77f0f069b6d5d"},{url:"butterfly-ui-change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"butterfly-ui-change/index.html",revision:"698619fe3f04c503f977d9f8f419d979"},{url:"butterfly-ui-change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"butterfly-ui-change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"butterfly-ui-change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-ui-change2/index.html",revision:"85500817022026b5d702196adb5f8eb3"},{url:"categories/announcement/index.html",revision:"15b32cdf01d5271a22ccded55f8d7133"},{url:"categories/diary/index.html",revision:"110e25ea80307542eb5af95374082046"},{url:"categories/game-dev/game-engine/index.html",revision:"54d514f941f29781105e8988303fe942"},{url:"categories/game-dev/game-engine/lightvn/index.html",revision:"423d4044078e674ff88237204f7417fb"},{url:"categories/game-dev/game-engine/nvl-maker/index.html",revision:"b13b07b28895f3ea620e7fa382dca272"},{url:"categories/game-dev/game-engine/page/2/index.html",revision:"08a48bea0dc14280046b586eb74037c9"},{url:"categories/game-dev/game-engine/page/3/index.html",revision:"838a1e60b62701bba1e01d09a4120ee4"},{url:"categories/game-dev/game-engine/renpy/index.html",revision:"0cb0932651091b4348b1df315c1a2b1e"},{url:"categories/game-dev/game-engine/renpy/page/2/index.html",revision:"f10b59e883336e6ec25a5f857a658ba6"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/index.html",revision:"3212d86d9d627d6450a325e6d17455e5"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html",revision:"b74e58362e4ccf868027da0e96e05f4b"},{url:"categories/game-dev/game-engine/renpy/tutorial/index.html",revision:"c2cdffa34c2ab345bfb08dc628477740"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/2/index.html",revision:"8ab8527e9e061a416a7d79c7defaf7b5"},{url:"categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html",revision:"dce50c6c50cd3c7b5702f1a87aed2df7"},{url:"categories/game-dev/game-engine/rpgmaker/index.html",revision:"85ce75e148dadb03b2788ff5b06c4ad1"},{url:"categories/game-dev/game-engine/tyranobuilder/index.html",revision:"628138039f54ef292a96b853e024a6bc"},{url:"categories/game-dev/game-engine/visual-novel-maker/index.html",revision:"fcb32ccd09bb4d7e8ba804e7252e2676"},{url:"categories/game-dev/index.html",revision:"61eb3a6ee0f23e59417dddaee75c42b8"},{url:"categories/game-dev/page/2/index.html",revision:"18b6673280db9db42d4604082b0f67dd"},{url:"categories/game-dev/page/3/index.html",revision:"5ad3e4e694ddc16e76f9461f60b4fa98"},{url:"categories/hexo/index.html",revision:"9b44b9372ee2895763ae9ccd9f7e5bf1"},{url:"categories/index.html",revision:"ba2b90069c22a643587026dc4661dac5"},{url:"categories/material/index.html",revision:"aff3caa7435dbbbe37d3abc6a95a9210"},{url:"categories/update/index.html",revision:"b6e38a5e037c7840fe5e2f05f2275bc8"},{url:"change-according-to-real-time/index.html",revision:"e9294faa9b06188b8e3741393ec9614c"},{url:"change-title-after-first-time-viewing/index.html",revision:"0c47097dbdbd573ca8adb6af695795bb"},{url:"change-title-based-on-event/index.html",revision:"326fde216be68f16c87586d541933d5d"},{url:"character-stats/index.html",revision:"b26dd99e35e0ab694f394530db9d0f3c"},{url:"chatbot/index.html",revision:"08145efb5db74cfcae111702dae32590"},{url:"comments/index.html",revision:"7beed0fb40e3e634ec53d1305d051088"},{url:"create-button-anywhere/index.html",revision:"1e089bcece63f89653ac1703ffb2978f"},{url:"css/eurkon.css",revision:"f225e7dbad0cfdd1dab3ced4ad7cf544"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"173e64842f3f039e80be4287508aa924"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"55ae0b05d91a07a30ed34a63f4530ad0"},{url:"css/rightmenu.css",revision:"7b31a675f1854d3be9cd7694c6ac3ec5"},{url:"css/siz.css",revision:"8b3c958257f9a13024ddc6b800d5e956"},{url:"css/swiper.css",revision:"1c06507b3bde59679d0a7aa7ae408489"},{url:"css/swiperstyle.css",revision:"62177b645b2255b519757315c1ae0853"},{url:"css/var.css",revision:"834553ec75bae5be8ecb9797457215e0"},{url:"ctc/index.html",revision:"1984459b6098b24b688dc2ca1fa4a267"},{url:"custom-css/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"custom-css/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"custom-css/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"custom-css/index.html",revision:"53ff68cdc1b2647116d8ce1b9c9bbf70"},{url:"custom-css/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"custom-css/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"custom-css/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"custom-css/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"custom-css/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"custom-css/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"custom-css/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-gallery-cg-screen/index.html",revision:"49ff0a7cd6823db31a9a7c3634978c29"},{url:"custom-loading-screen/index.html",revision:"c53e89ff84fbb1815f14e3b855b8e296"},{url:"custom-mouse/index.html",revision:"0e5e4e7b6a32827e2ab09a1dc5e6a60b"},{url:"custom-player/index.html",revision:"9e7a99659902d4217548b1d9e9515b97"},{url:"custom-preferences-screen/index.html",revision:"0a4dbc1fcb6e36a172343b7a90335e5d"},{url:"custom-say-screen/index.html",revision:"c32a3fe89d41c5dcf4bf461ff8c41998"},{url:"custom-title-screen/index.html",revision:"37f491f60d2210b28b5fabf90669dfee"},{url:"dice-function/index.html",revision:"6feb1724cde4755a88d1d1f0a418fbe9"},{url:"disclaimer/index.html",revision:"0d9a5fed9359c75d94aca47b738586dd"},{url:"friends/index.html",revision:"7d780196df1f92ec25a187aba450b45b"},{url:"gallery/index.html",revision:"026f0f5d29e81d8af641656ac44125f6"},{url:"gallery/photo/bg/index.html",revision:"462d456ce3736e49c8b9898c9c498d16"},{url:"gallery/photo/gui/index.html",revision:"d73ade0734cc8f6ebfe3b061373a564c"},{url:"game-only-text/index.html",revision:"320e8ac92e5cf29784d24319c408feef"},{url:"gui-017/1.webp",revision:"aa12c6f819750ab701a4757d4dc305d4"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"2d8e8806bb6f8d6fbc3840d7854c0c93"},{url:"gui-017/index.html",revision:"8fdd94cdcb4979f2e820af14ad9365fa"},{url:"gui012/index.html",revision:"c9f16f2f7057f843e6e3770bdef94eab"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"4c6e42f50ed58a81562ccf8f86122d38"},{url:"gui018/load.webp",revision:"ea9228dd37e76ce9f4e2c153fc4e3db0"},{url:"gui019/index.html",revision:"bd46d6c793522e5261edfe7317db75d2"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"e1b387b5ab12e5fe5b3701a78b4b2fbc"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"hexo-custom-mouse-disply/index.html",revision:"5f1a2b63bd0f7fc924db30b85cc55c53"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"0df8321e40a89f8091eff9d7ff9faf2e"},{url:"images-tip-function/index.html",revision:"77ba8e16cff4a8165e0fd07c2a5f0455"},{url:"images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"images/pawicons/32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"images/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"images/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"images/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"images/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"images/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"images/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/favicon_16x16.jpg",revision:"7170a7a0a8983fb2790e28c864648f5b"},{url:"images/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pawicons/favicon_32x32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"images/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/bmc.png",revision:"40b98209d9deb3e69053d4a559cc8a30"},{url:"img/cover/1.webp",revision:"75c4ca0e23ea27798c951e79cf118d88"},{url:"img/cover/2.webp",revision:"37a1fa535df37e8c5cf01def24fc9eeb"},{url:"img/cover/3.webp",revision:"ec6c922dd423211df47e8cd79493aacb"},{url:"img/cover/4.webp",revision:"896796dcf0a2b1f714060e1300972432"},{url:"img/cover/5.webp",revision:"06b21ba7e9d00ca7768252c51b3854af"},{url:"img/cover/6.webp",revision:"7e12d98e2bf9548379c39beba3a222d2"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/gib/1.webp",revision:"5be4619a8cf8b66551dedb272413d09d"},{url:"img/gib/10.webp",revision:"83a37dce9e5cfb132e1f5cc69ce4a758"},{url:"img/gib/11.webp",revision:"e0343acb272483692d9274223987cf19"},{url:"img/gib/12.webp",revision:"b1ca8b649c15f1e462a5b4c0b60f0d9c"},{url:"img/gib/13.webp",revision:"53e919448c1fd302d4ba93cf3adfaf2b"},{url:"img/gib/14.webp",revision:"a02f67a68a66dde2fa9430179dc5a092"},{url:"img/gib/15.webp",revision:"c98583025ce168f380b1a8cedef1f98c"},{url:"img/gib/16.webp",revision:"ae6ad26748f14367e42c298eb896e5e1"},{url:"img/gib/17.webp",revision:"11454179dca9c7538321eb5c7ddb62e5"},{url:"img/gib/2.webp",revision:"ce48b5614d628d9d5bebd2f5805cd038"},{url:"img/gib/3.webp",revision:"dd7dd4b6e72f1261f67cb61f78d40d68"},{url:"img/gib/4.webp",revision:"47498d3dea6081830aee230d468c960f"},{url:"img/gib/5.webp",revision:"0444f75e417e402551f7f2e397c4e6d8"},{url:"img/gib/6.webp",revision:"32eb9f3a488fa490bdc4a97a3b56bc47"},{url:"img/gib/7.webp",revision:"6335bcc03fd830ffff2b5d50bcf27674"},{url:"img/gib/8.webp",revision:"6741566622ae6db01c808f41626127c8"},{url:"img/gib/9.webp",revision:"738676086f5f13fb0b68d51f9db9536f"},{url:"img/gib/mononoke/1.webp",revision:"c1cecf43a07dd38a209755e5b284a97a"},{url:"img/gib/mononoke/10.webp",revision:"ed2e76d87d11c77c6b36c872372b9cbe"},{url:"img/gib/mononoke/11.webp",revision:"9220ccd14d4b5235b7b969587233164e"},{url:"img/gib/mononoke/12.webp",revision:"f059becb15d5c3844512f268564ed2a7"},{url:"img/gib/mononoke/13.webp",revision:"63012d48bf56e366bfb4b97707e62392"},{url:"img/gib/mononoke/14.webp",revision:"8b9025ca54749a1abaf648ae875380cb"},{url:"img/gib/mononoke/2.webp",revision:"fbff6e2629aa09b5129ef92315d9ecfa"},{url:"img/gib/mononoke/3.webp",revision:"34bc5b1ba588eb602f8c5e53eb13724c"},{url:"img/gib/mononoke/4.webp",revision:"ba858a1ff9036d595058b1c71876011c"},{url:"img/gib/mononoke/5.webp",revision:"7e826ccd99e889e61a966bbde6eb9b70"},{url:"img/gib/mononoke/6.webp",revision:"3cf011aabb2bef762e9feab2ca4a2336"},{url:"img/gib/mononoke/7.webp",revision:"775329857ad8cadac595d2e18dee2372"},{url:"img/gib/mononoke/8.webp",revision:"c5395b806757462a313078b6ae6c19de"},{url:"img/gib/mononoke/9.webp",revision:"1fe8c781e3c831a8321d1ef20f737aff"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"img/pawicons/32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"img/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"img/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"img/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"img/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"img/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"img/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pawicons/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_16x16.jpg",revision:"cd3428135e94f5a83aadb8d5ced778e6"},{url:"img/pwa/favicon_32x32.jpg",revision:"1257041ac1eb102a40768d4bfeff16a2"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"index.html",revision:"25bdb837934af77c5246fbe91517e6cb"},{url:"install-use-valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"install-use-valine/index.html",revision:"9cfee65bf4a56caa103ca34753ed1e55"},{url:"install-use-valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"install-use-valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"inventory-system/index.html",revision:"092293dfdc97e6ca1a8010d48d9fea86"},{url:"js/countup.js",revision:"5f2f77ec867d7f85d3bdbad2bf804fac"},{url:"js/main.js",revision:"80de3021a5d1ba2ecc68d332b284c836"},{url:"js/rightmenu.js",revision:"e4b3044aa999f5c624cb1432ff11d15d"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightvn22-10-03/index.html",revision:"b467e1a407c7db27f7189739a2288e86"},{url:"lightvn22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightvn22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightvn22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightvn22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"lightvn22-11-24/index.html",revision:"2109f3f8343f8aab88e8d4c28bad17e1"},{url:"likebutton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likebutton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likebutton/index.html",revision:"9e91d1f0710431497d6f9251cbf0e7f1"},{url:"link/index.html",revision:"df8fbb84851be8c2a8337133bad5feb7"},{url:"make-butterfly-beautiful4/index.html",revision:"5ed9a4c3868c8abf6bf6f1fa763f5174"},{url:"map-puzzle-system/index.html",revision:"659015567a3e41da065a64be5c1c5430"},{url:"maple-effect/index.html",revision:"d766b5ced3788ec8734723331ab45a62"},{url:"memberships-2/index.html",revision:"fb84aa63c6732cb9486eb64fa65be3e9"},{url:"memberships/index.html",revision:"b2a88038b7ea2fbd2489e65538bbf256"},{url:"multiple-language/index.html",revision:"0244be2b8be5385b82e6ba54bca0dcbe"},{url:"new-year-event-2023/index.html",revision:"a4633749163803b3298840fcfca71c28"},{url:"newsletter/index.html",revision:"3e9786bfc2d7c60792737bc0d8911f5b"},{url:"null/index.html",revision:"571645af12ddb581586b8a6577b57b67"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"5db48b573cb6717e4ddb7eba942f862e"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"openchatai-renpy/index.html",revision:"77fb2a051163ba56c648879499f50bba"},{url:"original/index.html",revision:"ba378afa819bae9e21be196c459c5724"},{url:"page/2/index.html",revision:"19f18fe1c39d901869bfb3e9be164c05"},{url:"page/3/index.html",revision:"2aa1e0a9862c75edc5427c6a710d2981"},{url:"page/4/index.html",revision:"0d4076848efe7613ea842d5c01d6aa1c"},{url:"privacy-policy/index.html",revision:"24234e8b8466912c1e47fb1c4c75a038"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-dialogue/index.html",revision:"6b6a3d0b3a4d1dab0b4cb6ea4b46ae08"},{url:"random-number/index.html",revision:"4ed6b582144481ea626cb0e6b4aac1c4"},{url:"random.html",revision:"1f3ab3f1ede947d0538e2877e5fac500"},{url:"release-017/index.html",revision:"644918e87e9759d6204606c4f13c8a31"},{url:"renpy-basic/index.html",revision:"ae4d6f63a0b0a5235239ca6c4c504182"},{url:"renpy-crash-glitch-effect/index.html",revision:"254ff125508404e185ed6a8114cc1539"},{url:"renpy-matrixcolor/index.html",revision:"24c9adb6c9038456620006ef071ff15c"},{url:"renpy-overlay/index.html",revision:"ea3a1ca041c400dab2e58cc86071e7c3"},{url:"renpy-review/index.html",revision:"0e98c4310043e14b2d6361c90206bae9"},{url:"rpgmaker-assets-menu/index.html",revision:"4b5e1632e9089a6e955e82a2add35574"},{url:"rpgmaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgmaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgmaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgmaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgmaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgmaker-create-a-new-map/index.html",revision:"580ce5ce5074fb5c88b4c358298e066c"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"8d36fb94a18f6977795c3700411d369e"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"518bbc80fb90ba1a05c64fc45e893a8e"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"7fd94a434446ec3f77516a6dcaf89c2e"},{url:"sakura-tree-background/index.html",revision:"bb66062337279d837e3576f6b0d3de84"},{url:"side-image/index.html",revision:"f5868e7708aed671ea7e9d312409f08b"},{url:"snow-effect/index.html",revision:"413a72b102d8e20ca0267c71ff57134b"},{url:"speaking-animation/index.html",revision:"d17f4d724abbbb3ddba563b1a23bba5f"},{url:"splashscreen/index.html",revision:"92a8faa04cd2be69a31a9db0b41dfd4c"},{url:"sw-register.js",revision:"0beb090f518b19b4f6a9cbcd0bb46515"},{url:"sw.js",revision:"41b18dba0089726c785432a24b673c16"},{url:"tags/ai/index.html",revision:"83310f3ec079f5f54aef59e9f4f7a1c8"},{url:"tags/butterfly-beauty-diary/index.html",revision:"f900293e509d9ab8ceb4d04415902ac0"},{url:"tags/commision/index.html",revision:"d4df673b56cba9346bddba38fb676cc6"},{url:"tags/custom-hexo-theme-butterfly/index.html",revision:"d15937de86af4340557029c803977abd"},{url:"tags/custom-renpy-title/index.html",revision:"9592fb790e18ace7a680de07f426a43a"},{url:"tags/dialogue/index.html",revision:"db4a97bb65cc40d55f58431a311b223b"},{url:"tags/effect/index.html",revision:"d335f0c08aa0f672e2f302d614455036"},{url:"tags/event/index.html",revision:"bdb5570bc69e3d9faa930df326319503"},{url:"tags/Hexo-plugins/index.html",revision:"40ce9214e9d0d37b315eb51780ed2260"},{url:"tags/hosting-own-website/index.html",revision:"b2ad6f808d9abef8bbd544c5522cab3a"},{url:"tags/index.html",revision:"e5853afaefe0f593d73865744489761e"},{url:"tags/itch-io/index.html",revision:"cfac849db156382bdf8dd920ed088dc4"},{url:"tags/light-vn-update/index.html",revision:"acbeec0659707382f407b3deecd51b07"},{url:"tags/Light-VN/index.html",revision:"e7745d811ebcd06c1e8dff99e5b03e79"},{url:"tags/nvl-maker/index.html",revision:"db0599d7010c9b8ce2ce71e8586339ea"},{url:"tags/player-related/index.html",revision:"6611fa40f86b91a37d4504fac8b19c1e"},{url:"tags/pro-tutorial/index.html",revision:"12a4a2e902b795cef01dada1928664c7"},{url:"tags/pro-tutorial/page/2/index.html",revision:"e0b808e84b3c12b3a7fc84cebff8cad2"},{url:"tags/renpy/index.html",revision:"d91f9dd27bd8736cadc7f826550bec68"},{url:"tags/rpg-maker-custom-map/index.html",revision:"2fa1661d942e0559b74b9a934205bb43"},{url:"tags/screen/index.html",revision:"1c17bd38cd73e6355a6cae717fcdf41e"},{url:"tags/special-function/index.html",revision:"3a08a81ff7b52f7233ea7e1ffb17ac5d"},{url:"tags/tyranobuilder/index.html",revision:"0b541448528aed17ffb6dbff806956c9"},{url:"tags/ui-assets/index.html",revision:"a2d3dbdb9499f89ea3fc1d1a42f2c5a1"},{url:"tags/update/index.html",revision:"d2d49ba57db4d8661349fc5c0df159e1"},{url:"tags/upload-game/index.html",revision:"237ea54423f99badf6200100b3ae6b98"},{url:"tags/variable/index.html",revision:"cf469cd872b09de06bc23826f2eaa4d4"},{url:"tags/visual-novel-maker/index.html",revision:"96e7f10ce9fb21eff9b7184282670a4b"},{url:"tags/封面製作/index.html",revision:"6d77b3238fd4f115b64dd19027cc8564"},{url:"tags/背景素材/index.html",revision:"645d2714848f0ac1d000f34e30f131ad"},{url:"tags/隨機功能/index.html",revision:"8c6db405a70754f9feb5c199cfff8f16"},{url:"test123/index.html",revision:"15da7a44d8cdc05b5ac4ae0a8e6b86f6"},{url:"textbutton/index.html",revision:"61c9e38481c71fde7741c30cd76336b2"},{url:"to-do-tutorial/index.html",revision:"10cda6d8dff99cb20528cff7ea2bde48"},{url:"tools/index.html",revision:"916f6ba1a2551e538f835d52bcbeeedb"},{url:"transfer-to-hexo/index.html",revision:"3d240dc9309d951d9367d3f6fef7eb9e"},{url:"tutorial-update-history/index.html",revision:"46f6d2596340bc08523413ae3489625a"},{url:"tyrano-name/index.html",revision:"5599ef6e4d3a09dc7a43c1482a65f9ff"},{url:"tyranobuilder/index.html",revision:"b2796bac756c87727e4c7c989723898b"},{url:"undefined/index.html",revision:"b6defcd7c6e5ae7c8cd05cdb39848725"},{url:"update-20221211/index.html",revision:"83eeace3fccfe10096909a67d7feff29"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"9786bce132bde69c7234aefa7807c683"},{url:"upload-your-game-itch-io/index.html",revision:"eb3e67b8695d99742e55a1b2d5ec61a2"},{url:"use-list/index.html",revision:"31ea12a38f910edb8593f0b33fe03572"},{url:"use-nvl-mode/index.html",revision:"cff5ba30d6ad8a973a4076cbd1a989d2"},{url:"useimage/index.html",revision:"0e7620604ed5922d635c8f04c71c0d31"},{url:"variable/index.html",revision:"4dadbd4ec42d193f7d94544a52433097"},{url:"vnmaker/index.html",revision:"42fa09d370f4e8ac9307de587d1a0a7e"},{url:"weather-effect-tutorial/index.html",revision:"50a8ec8388ea718f52226fc729f3a779"}],{})}));
//# sourceMappingURL=service-worker.js.map
