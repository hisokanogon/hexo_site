if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const f=e=>a(e,r),b={module:{uri:r},exports:n,require:f};i[r]=Promise.all(c.map((e=>b[e]||f(e)))).then((e=>(d(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"c2abc8ec320ec8b3f5585a069badfe2c"},{url:"2player-battle-system/index.html",revision:"169ebea0496c378046003da9458ff145"},{url:"404.html",revision:"9f38613364b1c11598734c16c44c8551"},{url:"about/index.html",revision:"9b83a343bea7c5bcf095b952ceb90ee7"},{url:"add-artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"add-artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"add-artitalk/index.html",revision:"e574a4fcf63e1786457548d092040c2b"},{url:"add-artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"add-artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"add-artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"add-artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"add-artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"add-artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"add-artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"add-artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"2c606e5e4ca1ad9c47889965ff3ded52"},{url:"animated-title-main-menu/index.html",revision:"b16003970678912947e962bb784a2ed4"},{url:"archives/2022/05/index.html",revision:"5c52759d6dbe875e1c4899a9d93741c2"},{url:"archives/2022/06/index.html",revision:"6105801647c06ffdb28a971799d22bde"},{url:"archives/2022/08/index.html",revision:"c0326221b8f7a7f2b2e56791bad0cb3c"},{url:"archives/2022/09/index.html",revision:"47df7259961bfa6c0d16f34d8f638953"},{url:"archives/2022/10/index.html",revision:"8d797d151ea82b9a5a2e1265ca0066f1"},{url:"archives/2022/11/index.html",revision:"5a3e90f1eb28c41ce1a50b53568c2802"},{url:"archives/2022/12/index.html",revision:"24e1b7d0ef37ec3989b9ff89669fa34c"},{url:"archives/2022/12/page/2/index.html",revision:"f4c1140f15c5998a66ca207b6478e332"},{url:"archives/2022/index.html",revision:"1d38e2dab08ea0354d37e3db9ff50c0e"},{url:"archives/2022/page/2/index.html",revision:"21570ef3c88bd1255a975c8ca6155ab1"},{url:"archives/2022/page/3/index.html",revision:"68a1f697164c28f65c277fd4a200056f"},{url:"archives/2023/01/index.html",revision:"9e1c36e129d3ead3338f43520be4130c"},{url:"archives/2023/02/index.html",revision:"f3bb9a8a551847f9984e20180bb5c0c5"},{url:"archives/2023/03/index.html",revision:"6e2381edec938fa0eb8509d1f4ac9e10"},{url:"archives/2023/04/index.html",revision:"ee3dce3f8bd592d074ec5e04c501214e"},{url:"archives/2023/05/index.html",revision:"589c810e10b503eb25b0ebc02fa21fcc"},{url:"archives/2023/06/index.html",revision:"48bce02b3bc888c8348c9ab90dccb263"},{url:"archives/2023/07/index.html",revision:"0ec9a4cc768dd2de82f7158b298fb18c"},{url:"archives/2023/index.html",revision:"40c0aaa52f1a9a79b1026bccbe9faef2"},{url:"archives/2023/page/2/index.html",revision:"3aa416bcd149e84332c30173dd9c5c44"},{url:"archives/index.html",revision:"bc1d1b406c9b3f2d25d19470015f0cff"},{url:"archives/page/2/index.html",revision:"b984fb9747fa1a8fa38838384faeed73"},{url:"archives/page/3/index.html",revision:"42043e0b2fe3785df3564e3e21ff8a48"},{url:"archives/page/4/index.html",revision:"11c1550ae55895347c9eb013ce19f42e"},{url:"archives/page/5/index.html",revision:"665d15c80ac271880f0c6a612955ad29"},{url:"artitalk/index.html",revision:"40cc15e21d7788ecb9ef197a8381c8a4"},{url:"battle-beautiful/index.html",revision:"3c402651d9adc7daa9a657a73e23157c"},{url:"blur-effect/index.html",revision:"43606f53b1afe3a56286f4606d04d3d1"},{url:"butterfly-custom-tag/index.html",revision:"1e761be3c04139f3152d1cd16dbd393f"},{url:"butterfly-plugins-faq/index.html",revision:"862f6b05d660d68207817bf86b80dd02"},{url:"butterfly-ui-change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"butterfly-ui-change/index.html",revision:"912abb35d4438ec3a1d4101c18efaddb"},{url:"butterfly-ui-change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"butterfly-ui-change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"butterfly-ui-change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-ui-change2/index.html",revision:"0f5690471fd2893be9f11456689c8eac"},{url:"categories/announcement/index.html",revision:"012130dc03a202f9c5798ec4e9527ee8"},{url:"categories/diary/index.html",revision:"fe2f279850d60af06b4e5699c0434f4e"},{url:"categories/game-dev/game-engine/index.html",revision:"c9c4f999c3b179d2e6b0090d50bf4c1f"},{url:"categories/game-dev/game-engine/lightvn/index.html",revision:"4be131a46a9b082fc843fb186ae2bfc6"},{url:"categories/game-dev/game-engine/nvl-maker/index.html",revision:"0a7782ee82467fa6ad0f7cb7b7e34a12"},{url:"categories/game-dev/game-engine/page/2/index.html",revision:"67a25f3173d343165fa8dba1e5bcb62a"},{url:"categories/game-dev/game-engine/page/3/index.html",revision:"525fdea1be28956e901e61b261fdb58b"},{url:"categories/game-dev/game-engine/page/4/index.html",revision:"b6255ca95826d16e262a6b50199c604e"},{url:"categories/game-dev/game-engine/renpy/index.html",revision:"fe64b8d32919441f1e5d6637b92d7f5e"},{url:"categories/game-dev/game-engine/renpy/page/2/index.html",revision:"25622fc4c8d89efc7fa239d59bacd803"},{url:"categories/game-dev/game-engine/renpy/page/3/index.html",revision:"d835afe099ddf43d89513cadafcd45e0"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/index.html",revision:"bf61c4e47386706cc5f5a51321ad3772"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html",revision:"c205a0478282767d4ed68879458ce421"},{url:"categories/game-dev/game-engine/renpy/tutorial/index.html",revision:"af30ab3d952314992b36ac6445602529"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/2/index.html",revision:"650d1016b28d2722d6248d95e323218c"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/3/index.html",revision:"b37a09478ae46eacd68eb523a5dfdba7"},{url:"categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html",revision:"7121c27f34b48e8c6bbc4106ae376869"},{url:"categories/game-dev/game-engine/rpgmaker/index.html",revision:"a01a89886c92f968d3070bd1f8bee7fd"},{url:"categories/game-dev/game-engine/tyranobuilder/index.html",revision:"43d14234b4ad8bc5351fa853bcea66dc"},{url:"categories/game-dev/game-engine/visual-novel-maker/index.html",revision:"d4cbbb6da20dac045d7073d165e7d8d8"},{url:"categories/game-dev/index.html",revision:"38fe258d1dbfb1a45df85567d8683d52"},{url:"categories/game-dev/page/2/index.html",revision:"e2720eebf474a8163dc9ba830174bbd3"},{url:"categories/game-dev/page/3/index.html",revision:"6c56fc6edae1a493cf7a09a320f68fed"},{url:"categories/game-dev/page/4/index.html",revision:"6ba7e479574faa8900e268aaec8ee95e"},{url:"categories/hexo/index.html",revision:"5c1013cf2091ecb9221048757ea36032"},{url:"categories/index.html",revision:"f2ae87af3e6fcd74e0b94be1c737fa30"},{url:"categories/material/index.html",revision:"e0447f42e33e474bce305a22a017c50a"},{url:"categories/update/index.html",revision:"9d35664b8a5e6a365875b27e0a2b1a17"},{url:"change-according-to-real-time/index.html",revision:"bd5cba7eec697cedb8f1963252197469"},{url:"change-title-after-first-time-viewing/index.html",revision:"6a4da38be682b45ac03277664b02b580"},{url:"change-title-based-on-event/index.html",revision:"1bec903ba86a520e76b508ab99cb02c9"},{url:"character-interaction/index.html",revision:"52ffbe3cdd7c8bc659aaf8a38d17c90c"},{url:"character-stats/index.html",revision:"e074d20b93404c15c66c71a9d1720427"},{url:"chatbot/index.html",revision:"02553b5ccc89b7a24ec98d0e336c1dcf"},{url:"choice-time/index.html",revision:"c9141bf17d3190f8c8530e7818eb153b"},{url:"comments/index.html",revision:"aafccdf6f0f7c16ad841a63a25974999"},{url:"commission-info/index.html",revision:"867752fe95f237872fe0f911006275b8"},{url:"create-button-anywhere/index.html",revision:"e6706d582f324f80f9beecdf0df0d568"},{url:"css/eurkon.css",revision:"8e0a7f872d8ddbc39a0a8c331a8da0f1"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"06d52acbf4e2d460d5c76e4693ca3b3e"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"217b586659799f849cc65edcfa3e986c"},{url:"css/rightmenu.css",revision:"786cb223f96db5fba0aae2ef5ad391d8"},{url:"css/siz.css",revision:"7daffba23b32c5e8d71e2bcf703fe5cb"},{url:"css/swiper.css",revision:"567b04b05a80ac664e85cd427d41f2c5"},{url:"css/swiperstyle.css",revision:"6a1ecb58435a8256da5bda07cdca334c"},{url:"css/var.css",revision:"70a92c1cb20c7945a54e044222c5fe59"},{url:"ctc/index.html",revision:"e6a07c55d12e0ae7ceb6275cd0dabcdb"},{url:"custom-css/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"custom-css/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"custom-css/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"custom-css/index.html",revision:"95bee109ec0362a78c310ec2690bc278"},{url:"custom-css/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"custom-css/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"custom-css/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"custom-css/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"custom-css/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"custom-css/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"custom-css/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-gallery-cg-screen/index.html",revision:"ef7e1f6a5fe0a6073bd9ff7acb90d41f"},{url:"custom-launcher/index.html",revision:"888a1c73c2d9c449a67a566796fb46a2"},{url:"custom-loading-screen/index.html",revision:"65d3b81ad5197f872e46f367737f2786"},{url:"custom-mouse/index.html",revision:"00d9863ec6095000e41fe2f77b4600c0"},{url:"custom-music-room-screen/index.html",revision:"c151dae59b9f6efad9f543eb88b380b7"},{url:"custom-music-room-screen2/index.html",revision:"3ff0315462286a19e06bc5c36eecf325"},{url:"custom-nvl/index.html",revision:"143a40a5328475e4ed954efc1b1a10bc"},{url:"custom-player/index.html",revision:"1d62c4a453ecf4bb5033030b795bb74c"},{url:"custom-preferences-screen/index.html",revision:"312875d458e15a7c63e869a65fa4c1cc"},{url:"custom-say-screen/index.html",revision:"c462d5d74c6dca7ed40d810537819568"},{url:"custom-title-screen/index.html",revision:"84a72ba49688a03c202644f489051041"},{url:"define-npcs/index.html",revision:"e08c8aec18b83c0120212bfee4aababc"},{url:"dice-function/index.html",revision:"a9b8bf1f5f1801b4d70062b98c6070e0"},{url:"disclaimer/index.html",revision:"b8cfff5c8555449ce871fe4f8489eef5"},{url:"enter-name-screen/index.html",revision:"994fe9970e389499f96c9f9485154c87"},{url:"export-game/index.html",revision:"7d63760dd1eb0254c91342f18b0cc397"},{url:"friends/index.html",revision:"616c1266156157a34eae667a91b3562c"},{url:"gallery/index.html",revision:"76c2cade9c4077e96ab6f628f10e745d"},{url:"gallery/photo/bg/index.html",revision:"eb9dd3a033f0e38907f68cab1f2c17a8"},{url:"gallery/photo/gui/index.html",revision:"99a4358c23fad9e991b5252803d3e208"},{url:"game-only-text/index.html",revision:"763d7d31415df4059ba95a755a338092"},{url:"gui-017/1.webp",revision:"aa12c6f819750ab701a4757d4dc305d4"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"2d8e8806bb6f8d6fbc3840d7854c0c93"},{url:"gui-017/index.html",revision:"d41c538062e594b51bc652774ebbc975"},{url:"gui-vertical-002/index.html",revision:"1bb834f095d77ba1319d546ab90cead4"},{url:"gui012/index.html",revision:"da52edf35d279230455e0460af3530e2"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"6904b36b6e24c7c9aa5c14d5c4ee5033"},{url:"gui018/load.webp",revision:"ea9228dd37e76ce9f4e2c153fc4e3db0"},{url:"gui019/index.html",revision:"ae320a759a7205940c6a06d1cf63772c"},{url:"gui020/index.html",revision:"50706d6c65935410501c4d4803cbe480"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"53813d5f889556da221db0e20792c0ce"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"hexo-custom-mouse-disply/index.html",revision:"3adaf26148699eb5126e5ae7efecc16d"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"5b9407af83d3f2d368d28601ce63c7a5"},{url:"images-tip-function/index.html",revision:"6d44bb50840c11dd745d9e283597bc4d"},{url:"images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"images/pawicons/32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"images/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"images/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"images/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"images/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"images/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"images/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/favicon_16x16.jpg",revision:"7170a7a0a8983fb2790e28c864648f5b"},{url:"images/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pawicons/favicon_32x32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"images/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"images/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"images/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"images/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/bmc.png",revision:"40b98209d9deb3e69053d4a559cc8a30"},{url:"img/cover/1.webp",revision:"75c4ca0e23ea27798c951e79cf118d88"},{url:"img/cover/2.webp",revision:"37a1fa535df37e8c5cf01def24fc9eeb"},{url:"img/cover/3.webp",revision:"ec6c922dd423211df47e8cd79493aacb"},{url:"img/cover/4.webp",revision:"896796dcf0a2b1f714060e1300972432"},{url:"img/cover/5.webp",revision:"06b21ba7e9d00ca7768252c51b3854af"},{url:"img/cover/6.webp",revision:"7e12d98e2bf9548379c39beba3a222d2"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/gib/1.webp",revision:"5be4619a8cf8b66551dedb272413d09d"},{url:"img/gib/10.webp",revision:"83a37dce9e5cfb132e1f5cc69ce4a758"},{url:"img/gib/11.webp",revision:"e0343acb272483692d9274223987cf19"},{url:"img/gib/12.webp",revision:"b1ca8b649c15f1e462a5b4c0b60f0d9c"},{url:"img/gib/13.webp",revision:"53e919448c1fd302d4ba93cf3adfaf2b"},{url:"img/gib/14.webp",revision:"a02f67a68a66dde2fa9430179dc5a092"},{url:"img/gib/15.webp",revision:"c98583025ce168f380b1a8cedef1f98c"},{url:"img/gib/16.webp",revision:"ae6ad26748f14367e42c298eb896e5e1"},{url:"img/gib/17.webp",revision:"11454179dca9c7538321eb5c7ddb62e5"},{url:"img/gib/2.webp",revision:"ce48b5614d628d9d5bebd2f5805cd038"},{url:"img/gib/3.webp",revision:"dd7dd4b6e72f1261f67cb61f78d40d68"},{url:"img/gib/4.webp",revision:"47498d3dea6081830aee230d468c960f"},{url:"img/gib/5.webp",revision:"0444f75e417e402551f7f2e397c4e6d8"},{url:"img/gib/6.webp",revision:"32eb9f3a488fa490bdc4a97a3b56bc47"},{url:"img/gib/7.webp",revision:"6335bcc03fd830ffff2b5d50bcf27674"},{url:"img/gib/8.webp",revision:"6741566622ae6db01c808f41626127c8"},{url:"img/gib/9.webp",revision:"738676086f5f13fb0b68d51f9db9536f"},{url:"img/gib/mononoke/1.webp",revision:"c1cecf43a07dd38a209755e5b284a97a"},{url:"img/gib/mononoke/10.webp",revision:"ed2e76d87d11c77c6b36c872372b9cbe"},{url:"img/gib/mononoke/11.webp",revision:"9220ccd14d4b5235b7b969587233164e"},{url:"img/gib/mononoke/12.webp",revision:"f059becb15d5c3844512f268564ed2a7"},{url:"img/gib/mononoke/13.webp",revision:"63012d48bf56e366bfb4b97707e62392"},{url:"img/gib/mononoke/14.webp",revision:"8b9025ca54749a1abaf648ae875380cb"},{url:"img/gib/mononoke/2.webp",revision:"fbff6e2629aa09b5129ef92315d9ecfa"},{url:"img/gib/mononoke/3.webp",revision:"34bc5b1ba588eb602f8c5e53eb13724c"},{url:"img/gib/mononoke/4.webp",revision:"ba858a1ff9036d595058b1c71876011c"},{url:"img/gib/mononoke/5.webp",revision:"7e826ccd99e889e61a966bbde6eb9b70"},{url:"img/gib/mononoke/6.webp",revision:"3cf011aabb2bef762e9feab2ca4a2336"},{url:"img/gib/mononoke/7.webp",revision:"775329857ad8cadac595d2e18dee2372"},{url:"img/gib/mononoke/8.webp",revision:"c5395b806757462a313078b6ae6c19de"},{url:"img/gib/mononoke/9.webp",revision:"1fe8c781e3c831a8321d1ef20f737aff"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"img/pawicons/32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"img/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"img/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"img/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"img/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"img/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"img/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pawicons/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"index.html",revision:"87bc8fb2358c55eb0848ec093501f54f"},{url:"install-use-valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"install-use-valine/index.html",revision:"7142e58f95abf6008f714ec573a51c09"},{url:"install-use-valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"install-use-valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"inventory-system/index.html",revision:"5ea86a4d3b94667dd9a6194fbcf0d8b1"},{url:"items-sprites-effect/index.html",revision:"b907afa2152a6f8d7d40f39b487b3bd5"},{url:"js/countup.js",revision:"5f2f77ec867d7f85d3bdbad2bf804fac"},{url:"js/main.js",revision:"80de3021a5d1ba2ecc68d332b284c836"},{url:"js/rightmenu.js",revision:"e4b3044aa999f5c624cb1432ff11d15d"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightvn22-10-03/index.html",revision:"1c4831b89fe839fa0d76f5458e1ff9c2"},{url:"lightvn22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightvn22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightvn22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightvn22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"lightvn22-11-24/index.html",revision:"f1a7dc422a5c731ec52a743d53a8c20c"},{url:"likebutton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likebutton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likebutton/index.html",revision:"739e54b0175c7041af3329c74625722a"},{url:"link/index.html",revision:"43ef4c4f08a93a2b0562539549884318"},{url:"make-butterfly-beautiful4/index.html",revision:"561f840ccf1b6514430ed55235645707"},{url:"map-puzzle-system/index.html",revision:"5c6fc29271bf57b0ae1b69f28be12a8c"},{url:"maple-effect/index.html",revision:"c289aea3d45f8fda185b4c95c554a2c1"},{url:"memberships-2/index.html",revision:"ed96592098ad70cbccdc03196b0002d2"},{url:"memberships/index.html",revision:"bae5d932e683f8bf51857cea9068971a"},{url:"multiple-language/index.html",revision:"04059a0087a7228c82455620c1abd54c"},{url:"name-input-assets/index.html",revision:"76ea0deccef441d1a79f93ef6090f02a"},{url:"new-year-event-2023/index.html",revision:"4f29afb15706319584102feedf928f46"},{url:"newsletter/index.html",revision:"6d45efbf9d4dbdea63f44009f82e8193"},{url:"nsfw-limited/index.html",revision:"7a464e947cd7f6283379c02d0ffc2c84"},{url:"null/index.html",revision:"a65b29732738e5f9f52fd989f2ea1209"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvl-ctc/index.html",revision:"2dabac8ab688a8df4a3685fecabcff5a"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"e7f67bf9d9d73789399d7eeab0b5c47c"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"openchatai-renpy/index.html",revision:"62f641e63528ddf2fbbdc0c6fe268e57"},{url:"original/index.html",revision:"20fe15467f281eb885579a47495bac4a"},{url:"page/2/index.html",revision:"8d208b6d930ddd0c04b7e4fd6aeba9c6"},{url:"page/3/index.html",revision:"a8bc8188edb313b9e16010edc4911030"},{url:"page/4/index.html",revision:"8b50074380f98b9c2a18e987ea7e3faf"},{url:"page/5/index.html",revision:"5b09f016e4289c5e81dd071d6b67924b"},{url:"pop-point/index.html",revision:"47d0e7cfda0e79d310d3d0ab277fefab"},{url:"privacy-policy/index.html",revision:"5b096ad963a97200d5646a6e0fc23c97"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-dialogue/index.html",revision:"6104ed802e9c752948dd041faad516fe"},{url:"random-number/index.html",revision:"a6eab4fd204475746e5b8047abb97f09"},{url:"random.html",revision:"be9bcf67bc1798c5a2ee3ef4003a3349"},{url:"release-017/index.html",revision:"96d3fa03aa35c6f4a87d0cea86e502cf"},{url:"renpy-basic/index.html",revision:"7f5c4f8915077c3da3bfa093763c6582"},{url:"renpy-crash-glitch-effect/index.html",revision:"9758d830fe8fcb294c775a57de51b9d5"},{url:"renpy-matrixcolor/index.html",revision:"735969c83d3085d88abdeb7a96f35fab"},{url:"renpy-overlay/index.html",revision:"3d772833a1efd39ed57607ccda0f9df8"},{url:"renpy-review/index.html",revision:"ebc48f760f7ca744359062255c6985ff"},{url:"renpy-typing-effect/index.html",revision:"0392371531d107876fac26d80d6e8690"},{url:"rpgmaker-assets-menu/index.html",revision:"6404e8e6d710c9a409474513e8ddbb13"},{url:"rpgmaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgmaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgmaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgmaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgmaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgmaker-create-a-new-map/index.html",revision:"69524acf3aee8b3c8b298da7384d77c4"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"8d36fb94a18f6977795c3700411d369e"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"518bbc80fb90ba1a05c64fc45e893a8e"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"3147c7a7050d8d1b23e424e363b2981c"},{url:"sakura-tree-background/index.html",revision:"bae423435da90b298fe4f5491d2d7146"},{url:"show-variable/index.html",revision:"74cc9a605b93d67ddca9517ae1a79790"},{url:"side-image/index.html",revision:"2ec11b6a8094d524e5456e8b6738b937"},{url:"snow-effect/index.html",revision:"d4be88c4d2cafdf957e74ede3dd21162"},{url:"speaking-animation/index.html",revision:"a08b63bebc5200a0b54fef2125d277b6"},{url:"splashscreen/index.html",revision:"d4b0505de1a5abba5dac8e64d600d03f"},{url:"sw-register.js",revision:"7b954b8142ccec9be26eada8c5891cac"},{url:"sw.js",revision:"e52e8d1f2dcbad39864b1efaa75ff834"},{url:"tags/ai/index.html",revision:"abd2daa2820754d47d47e608fcc9feb3"},{url:"tags/butterfly-beauty-diary/index.html",revision:"0e4aebf74a3b2f813b88736f6379d88d"},{url:"tags/commision/index.html",revision:"c2c4084fbc440b80094e380f61ddb0b1"},{url:"tags/custom-hexo-theme-butterfly/index.html",revision:"9d9a29189a6de44f158e7933695106f5"},{url:"tags/custom-renpy-title/index.html",revision:"c6666b3ff9bb1104d4fbc31cfe65ab7b"},{url:"tags/dialogue/index.html",revision:"35a64e6344e084fdd1151c81e8a85b0b"},{url:"tags/effect/index.html",revision:"748cd07e07736bc5a5d95cf30916632a"},{url:"tags/event/index.html",revision:"128bc48dfdd005f47de91bbd6fd0c076"},{url:"tags/Hexo-plugins/index.html",revision:"ce42daa41e6d00778b574fe563d8a6f3"},{url:"tags/hosting-own-website/index.html",revision:"21c26bf1905b1aa24a22ae072e7a2c9a"},{url:"tags/index.html",revision:"733f7e08cf0ae83783493f328db943bf"},{url:"tags/itch-io/index.html",revision:"cae5519f9f1bf28df0281704ab14e33f"},{url:"tags/light-vn-update/index.html",revision:"f28a139ccc4dcb23d38ed119566829a0"},{url:"tags/Light-VN/index.html",revision:"4f835948735063c5723ab288f3933c7d"},{url:"tags/nvl-maker/index.html",revision:"d6027a56e4ddea1396a7b0813c8710e6"},{url:"tags/player-related/index.html",revision:"42e42e1bf9e80d77e658d594c1fccd3b"},{url:"tags/pro-tutorial/index.html",revision:"5fb1ea5ce313e56b19314d0adae4df5a"},{url:"tags/pro-tutorial/page/2/index.html",revision:"b357a1d2f89a91778fdfec27f5467d17"},{url:"tags/pro-tutorial/page/3/index.html",revision:"e12ed45871cac4b64caa3f44ebc6b03d"},{url:"tags/renpy/index.html",revision:"c1fd787ab0ee3793c6b5b86b43d69b77"},{url:"tags/rpg-maker-custom-map/index.html",revision:"6c41fe9b96eacbeefff41624ac710fb4"},{url:"tags/screen/index.html",revision:"b0d69c43f6ee81f3ec3bc0121b0835f9"},{url:"tags/special-function/index.html",revision:"f544b2aace5e789651285f634aa706d9"},{url:"tags/tyranobuilder/index.html",revision:"232bcef3bd448e03294401130faf2e82"},{url:"tags/ui-assets/index.html",revision:"28d5b35dba0fa4d4cf0ecdcdce576a4c"},{url:"tags/update/index.html",revision:"2aea271c08edaaf0fa46f68e7c693760"},{url:"tags/upload-game/index.html",revision:"c20ac0f34bf9dbb6fed3131f2000db4b"},{url:"tags/variable/index.html",revision:"e48581847cbfafc0ba9740bee20d0657"},{url:"tags/visual-novel-maker/index.html",revision:"ce2f4f9a23381eed540843e11cc53fc0"},{url:"tags/封面製作/index.html",revision:"f7c20a34203575f225e25a9d8c1d4eb9"},{url:"tags/背景素材/index.html",revision:"2c0b1dc332d271a1dc16aa5cc60d70bd"},{url:"tags/隨機功能/index.html",revision:"e40e53e6a2a955132e0539f290a25535"},{url:"test123/index.html",revision:"794cc08c6f12a1f24879044ee95399b4"},{url:"textbutton/index.html",revision:"8fae6cb25f942a3634d538bdf7010682"},{url:"to-do-tutorial/index.html",revision:"022af471a0a7ad1d74c2a11ab54c0d1d"},{url:"tools/index.html",revision:"9d63840d36e3290164236ab6861dff3b"},{url:"transfer-to-hexo/index.html",revision:"46ef9f2415cd587062c85ec43c24c886"},{url:"tutorial-update-history/index.html",revision:"3538905fdb6e03304cda4eaf8cb26c81"},{url:"tyrano-name/index.html",revision:"cae58bb3705221468d0c72bdbd372f61"},{url:"tyranobuilder/index.html",revision:"858665db393123cc046c989f783159ee"},{url:"undefined/index.html",revision:"7c7e02c23f924bfd220cf05c14417368"},{url:"update-20221211/index.html",revision:"3ad53f037dec4faa26a4b219b5ff0aef"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"f1eca3c908498b6b1814012f71797a52"},{url:"upload-your-game-itch-io/index.html",revision:"62782fe1e1cdd7a4b3c989c96552e0c6"},{url:"use-list/index.html",revision:"a29f143c343bf56946cfd5ad563f7645"},{url:"use-nvl-mode/index.html",revision:"fcd7aae55d042492fa0160fba1a56cf0"},{url:"useimage/index.html",revision:"282efb2a05eb533a5927462c0aa64046"},{url:"variable-change-image/index.html",revision:"32ab61caf0c79561aa2928d72af366ea"},{url:"variable/index.html",revision:"75d88514a03d61c57e9d12f4b9f0b2a7"},{url:"vnmaker/index.html",revision:"b464d53af65f72098351b572c7ca722e"},{url:"weather-effect-tutorial/index.html",revision:"edbaf242038b84e97692fe57e9e41403"}],{})}));
//# sourceMappingURL=service-worker.js.map
