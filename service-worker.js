if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const f=e=>a(e,c),b={module:{uri:c},exports:n,require:f};i[c]=Promise.all(r.map((e=>b[e]||f(e)))).then((e=>(d(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022-last-event/index.html",revision:"1ad91a8a96619f8ae24bddeb57691af8"},{url:"2024-future-plan/index.html",revision:"320b4f5df665fefc9bdd21e5b7c3f787"},{url:"2player-battle-system/index.html",revision:"163bb255a1dbf5bf8fcb8316c27055ff"},{url:"404.html",revision:"85710916b793f408901c9eb3a0c67a91"},{url:"about/index.html",revision:"80131ada3aa5e0b47ddf57ea00a8b738"},{url:"acg-creator/index.html",revision:"4a8a34e807b58247cd7a87c9486d6988"},{url:"add-artitalk/aimg.png",revision:"4d9458a063d9dea1cff322eec89ddf6c"},{url:"add-artitalk/class.png",revision:"8f665d6e4b6bc80dd8fef0d35091aab2"},{url:"add-artitalk/index.html",revision:"ce11e55c121e947e9809e7b4ae41d05e"},{url:"add-artitalk/learn.png",revision:"122c16dbe8da6a9d93cdc37e60acd81b"},{url:"add-artitalk/nin.png",revision:"004fef4510be9de746ecf2a123da4591"},{url:"add-artitalk/per.png",revision:"2408b33d606a12d970164f759a65f202"},{url:"add-artitalk/per2.png",revision:"6d9865d1325b571bdb01656821b33dcd"},{url:"add-artitalk/per3.png",revision:"3d3f08aba0d01ac0a1a41efe01eb7aae"},{url:"add-artitalk/sett.png",revision:"7597dc9af61149ade691ce2a4d533872"},{url:"add-artitalk/sho.png",revision:"c0811e0aba0bc821a67db8068fef764f"},{url:"add-artitalk/user.png",revision:"0d0ac6ad35faa33922a2867bc13d9fa6"},{url:"all-discount/index.html",revision:"730bcb4f01522260b050aefb08dfdf29"},{url:"animated-title-main-menu/index.html",revision:"903f0f489f962909e560d75bf070e71f"},{url:"archives/2022/05/index.html",revision:"933804580a89ea90fbe09f11c9d7d7a1"},{url:"archives/2022/06/index.html",revision:"af67ff3deca20f07bfe3474ae7cd5cbf"},{url:"archives/2022/08/index.html",revision:"b23d03611a27b55a88aa0dbb4cff8f68"},{url:"archives/2022/09/index.html",revision:"a30a9c6ff19017dfec96d444c366e6c9"},{url:"archives/2022/10/index.html",revision:"76ba00beeeee2a1bb849a46f769a739b"},{url:"archives/2022/11/index.html",revision:"0892aa8c30858fa91ea7f41a7bc3a6bc"},{url:"archives/2022/12/index.html",revision:"8bcdb8ee759cf2c8660d8f2e8ee43478"},{url:"archives/2022/12/page/2/index.html",revision:"603aef221892f607828f62badb3af029"},{url:"archives/2022/index.html",revision:"ad74cb35959e385152c1b91140980e22"},{url:"archives/2022/page/2/index.html",revision:"48790f0149462717cfebdbd25b0367a8"},{url:"archives/2022/page/3/index.html",revision:"89b5dd58d54910865c1f6fe6cc6f28ff"},{url:"archives/2023/01/index.html",revision:"57e1c8d0e5a4cfd5fd3207e0ab62f1d0"},{url:"archives/2023/02/index.html",revision:"7a6f72de785ca79268df3f8d8fd165af"},{url:"archives/2023/03/index.html",revision:"6a1da53dfce4c7a2c214943ee772ed00"},{url:"archives/2023/04/index.html",revision:"810141941eb46b3799054fc570a44d53"},{url:"archives/2023/05/index.html",revision:"fb67b683b26aaf4e50550bae52bc9bd6"},{url:"archives/2023/06/index.html",revision:"97fb7bd1db7cf914151915ca55835987"},{url:"archives/2023/07/index.html",revision:"adc76ddd0a6fdc3fddc57aec080e5261"},{url:"archives/2023/08/index.html",revision:"3fdbcec3941567a75b99713aa6d8b065"},{url:"archives/2023/09/index.html",revision:"e929971f184f7cb8b21e034e1596cf58"},{url:"archives/2023/10/index.html",revision:"c83f357ff40fbb099d1248939dc95111"},{url:"archives/2023/11/index.html",revision:"1e1004da0a6158016653a60ac5675728"},{url:"archives/2023/12/index.html",revision:"62b876eac9d1aeb5949383c5f7f8b703"},{url:"archives/2023/index.html",revision:"82f8bcc35ef7f4eee1d3828218e1bbf0"},{url:"archives/2023/page/2/index.html",revision:"13d71f3921452e39218cb81ee2ce3c24"},{url:"archives/2023/page/3/index.html",revision:"3a05685284ec0b825c974a032a730709"},{url:"archives/2024/01/index.html",revision:"b5798b5e6529631b773231c07f081a4a"},{url:"archives/2024/02/index.html",revision:"76f2fe7cc52e7d634b035f17f38d934a"},{url:"archives/2024/03/index.html",revision:"900c1f391c0b6c8e1b775eb5f8628040"},{url:"archives/2024/04/index.html",revision:"b9280ec047529af47d6333084f74f11e"},{url:"archives/2024/05/index.html",revision:"79b21bbc056b962cda9925ab1fa69de2"},{url:"archives/2024/06/index.html",revision:"8679c94795605ca38c299fb5e0d1d272"},{url:"archives/2024/07/index.html",revision:"9eb6cc6fe80eaa51ef5577bf7882ae45"},{url:"archives/2024/08/index.html",revision:"b14560078cfdacf06b35c48102b7da57"},{url:"archives/2024/10/index.html",revision:"9c6d10ae224ebfc0819494e5cf57146a"},{url:"archives/2024/index.html",revision:"7bfb90609030c6cf64604850892f8c17"},{url:"archives/2024/page/2/index.html",revision:"434ceb66855b1b4e0ebcc738c957da88"},{url:"archives/index.html",revision:"0c6ab8dae7f10a097486eddce7cc872d"},{url:"archives/page/2/index.html",revision:"42f0ec19214f6acc61483d2452d3dd7f"},{url:"archives/page/3/index.html",revision:"4f8721a75755afaaab3758c892fed003"},{url:"archives/page/4/index.html",revision:"fcb5df9940a5c17307ca440feea8260d"},{url:"archives/page/5/index.html",revision:"44124f815b33d8fd7a561dd988b6f95c"},{url:"archives/page/6/index.html",revision:"62a9e98791d77ba25460480683a1178d"},{url:"archives/page/7/index.html",revision:"a91c7a9faa36333defc303c940de3cad"},{url:"artitalk/index.html",revision:"b03f0f2200dd7c085efa1c1dadb46b48"},{url:"battle-beautiful/index.html",revision:"cc500d5bb64bdb4e912f3377e6055ceb"},{url:"blur-effect/index.html",revision:"6258a6b532639e544b7b71920bcf5aa3"},{url:"butterfly-custom-tag/index.html",revision:"2c601b59184d81f6917c682a64f16b4f"},{url:"butterfly-plugins-faq/index.html",revision:"283136c50568b3bfe4e224732170fe75"},{url:"butterfly-ui-change/icon.png",revision:"7d8c313b097e8a022a89c43153e1f988"},{url:"butterfly-ui-change/index.html",revision:"45ec46dab0b86356ba08d79d954b8761"},{url:"butterfly-ui-change/nu.png",revision:"8a28ac1e9d1f22613dcb944c313eab3c"},{url:"butterfly-ui-change/people.png",revision:"ab47e097d71b6e1ba331d37f6561d2e2"},{url:"butterfly-ui-change/qrcode.png",revision:"4f19273a21fa3b27503cdd1cf9a97136"},{url:"butterfly-ui-change2/index.html",revision:"1b960077754f1105d22449f78c0e3075"},{url:"categories/announcement/index.html",revision:"1ea4a764a7dbf73168ebe0b32ea10f22"},{url:"categories/diary/index.html",revision:"fc69783f117994e29d2c67b34bdf56c4"},{url:"categories/game-dev/game-engine/acg-creator/index.html",revision:"77c27e580ab53afb44090e7caa1cd049"},{url:"categories/game-dev/game-engine/index.html",revision:"e62a6644f36bc8141075eea54c74aef1"},{url:"categories/game-dev/game-engine/lightvn/index.html",revision:"e0f85abc1b1a7e424cb7c03ab86054c5"},{url:"categories/game-dev/game-engine/nvl-maker/index.html",revision:"93ca75638902078dba24d21ef1488f76"},{url:"categories/game-dev/game-engine/page/2/index.html",revision:"e43c9995a16c2dc08f391f53c49d1727"},{url:"categories/game-dev/game-engine/page/3/index.html",revision:"4d949a3235d2edb78956c018eec91ab4"},{url:"categories/game-dev/game-engine/page/4/index.html",revision:"34c79d7c1c8587e9cf01b45baeef4ca4"},{url:"categories/game-dev/game-engine/page/5/index.html",revision:"6c21188168e53243779234c850f2f3f9"},{url:"categories/game-dev/game-engine/renpy/index.html",revision:"6bb4feb66b76f25b9f5e2bc321e09e57"},{url:"categories/game-dev/game-engine/renpy/page/2/index.html",revision:"66c65254cd12f2acba2007380cbc267b"},{url:"categories/game-dev/game-engine/renpy/page/3/index.html",revision:"edd4d796f5f260a79c7e7c9c318ec356"},{url:"categories/game-dev/game-engine/renpy/page/4/index.html",revision:"ba22d8de392333f0e705d9e341e955f9"},{url:"categories/game-dev/game-engine/renpy/page/5/index.html",revision:"e86d30b465ecc1c8d61494b0c7e415d2"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/index.html",revision:"cb20bc7856dbc27080ea04de070aa3f3"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html",revision:"8a8428aa1dc23a19763cddc10ee614f3"},{url:"categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html",revision:"f985335845286e84a460f73c973da3a3"},{url:"categories/game-dev/game-engine/renpy/tutorial/index.html",revision:"6510fe485c67d257e8973e41520457c7"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/2/index.html",revision:"57c5134d42141a78f3a57a751ee85529"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/3/index.html",revision:"d9abd49a4462d0e21ddc21fd4bbf7700"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/4/index.html",revision:"f45cbabed04448be89da2cde8c3b5669"},{url:"categories/game-dev/game-engine/renpy/tutorial/page/5/index.html",revision:"50e0e2b952745c1fe502e436b0d5b7a7"},{url:"categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html",revision:"d9ba9cadebb3618c2618e76db98e6c04"},{url:"categories/game-dev/game-engine/rpgmaker/index.html",revision:"74714769a44e5936c90e0966968c6041"},{url:"categories/game-dev/game-engine/suika2/index.html",revision:"f27b0590b3cc8326c2b39ddb1e67fed3"},{url:"categories/game-dev/game-engine/tyranobuilder/index.html",revision:"1fa12ec39b9b4d9c9ee6f858a39e25af"},{url:"categories/game-dev/game-engine/visual-novel-maker/index.html",revision:"69aaaec6a2e033dd5a96c1e00faa3554"},{url:"categories/game-dev/game-engine/webgal/index.html",revision:"2d821360cf1d99c79a2e23023c4dec79"},{url:"categories/game-dev/index.html",revision:"7df3503f2e1b6ee305362f9d9fc8a441"},{url:"categories/game-dev/page/2/index.html",revision:"364839844bcec7ee675a0c5ecf383169"},{url:"categories/game-dev/page/3/index.html",revision:"99e75e6ea1fb3d64c9ece2bd7aa8f426"},{url:"categories/game-dev/page/4/index.html",revision:"d6b208cc9be3055d32581a3a6823b312"},{url:"categories/game-dev/page/5/index.html",revision:"0bb44640329cbed7788620007291972d"},{url:"categories/hexo/index.html",revision:"250803a59fbf7b667e30b9e1d4e4214e"},{url:"categories/index.html",revision:"43c7a7e4fb3755a876eb7e4fdfb6daf3"},{url:"categories/material/index.html",revision:"ba963572eeefc70313fd1c7a13dcae6b"},{url:"categories/update/index.html",revision:"b34274fffc265f685f557d419e68a07b"},{url:"change-according-to-real-time/index.html",revision:"8c3017903027c21b952e71c9644ca4f9"},{url:"change-character-info/index.html",revision:"cfb0659d343150fe70b9990575d4f497"},{url:"change-title-after-first-time-viewing/index.html",revision:"82013d2b1acd37a3f693be42b971f192"},{url:"change-title-based-on-event/index.html",revision:"b4370690bd3b0172c15b24c70ef97200"},{url:"chapter-selection/index.html",revision:"7d20f1f1bf9009815a09aa9e41c5a80c"},{url:"character-interaction/index.html",revision:"44af1d9d903976124e6dfa180d2d61bb"},{url:"character-stats/index.html",revision:"d4e998a5088b342f7bd2a677787735a7"},{url:"chatbot/index.html",revision:"deeaf24b63be664933be5e7445e08d5b"},{url:"choice-time/index.html",revision:"eb81efecbcdec314a713ee9b0224f552"},{url:"comments/index.html",revision:"1791ea4b4797cca8f4aabebe54351916"},{url:"commission-info/index.html",revision:"7d69d2a77467e4e51e824676015e8a81"},{url:"count-login-number/index.html",revision:"92e18239840e69d2c512085be656d0ed"},{url:"create-button-anywhere/index.html",revision:"f3da8482b02f2cf86a1fbb62ea6e9cc6"},{url:"css/eurkon.css",revision:"cbb7e8d6edde62b3cc4c82be6668efbe"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/iconfont.css",revision:"96d3819ebdfe638740702034b8d827a5"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"9bae534f1901fc774f94a193ab37b851"},{url:"css/rightmenu.css",revision:"fa3ff8f2588a60d4820902a775e975eb"},{url:"css/siz.css",revision:"d0ab92aaf665e2691c30336f1780062c"},{url:"css/swiper.css",revision:"b57c502b658df3b4172719e64fe21e5c"},{url:"css/swiperstyle.css",revision:"bfcc27050c6bf935a0328dc94a9b7aa1"},{url:"css/var.css",revision:"acbfaff48418b6603a3c6daa0bf076fc"},{url:"ctc/index.html",revision:"7ba23abf628ee873c18f839dbd91ebc8"},{url:"custom-credit-screen/index.html",revision:"21ece46932b0f43ab8354fa28863e9fd"},{url:"custom-css/add.png",revision:"82570852240e3cf9a8cf375a0d344cb7"},{url:"custom-css/css.png",revision:"f4566571f2026a7ddfd804f4deb82a0d"},{url:"custom-css/footer.png",revision:"1af94f86b23a84399f265d8fbf2879c0"},{url:"custom-css/index.html",revision:"8dd8b2189e8344ca52c1c00c5ef48614"},{url:"custom-css/name.png",revision:"99cebf2b1499e7cb224dd47f1ac49980"},{url:"custom-css/ori.png",revision:"90f905a0a8b9cfa1a1af5e17310090df"},{url:"custom-css/pa2.png",revision:"507eb5b7fa94fb1800e12bd725fd15fe"},{url:"custom-css/pa3-2.png",revision:"99e82c78f332988f7a79e8f64cf9fce0"},{url:"custom-css/pa3.png",revision:"feaeadf67b73ef4a88678e97411a501d"},{url:"custom-css/pad.png",revision:"3ff20632cab5874cea70198e9d051266"},{url:"custom-css/screen.png",revision:"dde94c2b5211b483dbcda07c7eccb48b"},{url:"custom-frame/index.html",revision:"241efc4ba2da735d1e8a5b9f47c23fa4"},{url:"custom-gallery-cg-screen/index.html",revision:"295273f173d23a585cfa9cab485f5f1a"},{url:"custom-launcher/index.html",revision:"ebcaa24342202b94eee5b5e12ef08dae"},{url:"custom-loading-screen/index.html",revision:"3382433ee643716159d5805eb71c5f8b"},{url:"custom-mouse/index.html",revision:"4bae5f01b63263af19195559d54cad70"},{url:"custom-music-room-screen/index.html",revision:"9fb4b01d6a938523579a4cf993deabc7"},{url:"custom-music-room-screen2/index.html",revision:"84b8f38ce7261ddc389e35b507b2a180"},{url:"custom-nvl/index.html",revision:"ea682e42633d86b96d4d3f44862bb2eb"},{url:"custom-player/index.html",revision:"64c294cd65539e263b94b9961a2ddc99"},{url:"custom-preferences-screen/index.html",revision:"2f6e350cc6ad0ba8ef2056f3843c7fb3"},{url:"custom-say-screen/index.html",revision:"fc49aa129d75019896ab2943b00920f5"},{url:"custom-style-bar/index.html",revision:"ec6842f7b0f939f01468e5455c1eec4e"},{url:"custom-style-box/index.html",revision:"0ec35e7b1895eba2dc42f0e9a903cc9a"},{url:"custom-style-button/index.html",revision:"b48c54cef400cd85c2e5fdd74358ce00"},{url:"custom-style-grid/index.html",revision:"5736ffacfe010f2bb13e837ae87b5b6a"},{url:"custom-style-position/index.html",revision:"4899870dd98e35d686bb601bd2322a25"},{url:"custom-style-prefix/index.html",revision:"ff01c69f9aa79eb5710cde844a8e82db"},{url:"custom-style-text/index.html",revision:"7e48637fe404c0dbb3dd69ac98a5dd75"},{url:"custom-style-window/index.html",revision:"ee5e559ee403ba19fecbb6a1df205d80"},{url:"custom-title-screen/index.html",revision:"60b0392691c83bff92550c4fcc62c7b9"},{url:"define-npcs/index.html",revision:"0f8cd54427a0e3f21be6fb00eafea5bc"},{url:"delete-save/index.html",revision:"22752f8c719390800e86b734ef7aa847"},{url:"dice-function/index.html",revision:"a6687a8f23bfbfdc1ff9ce9fc52ea011"},{url:"disclaimer/index.html",revision:"04716b3f1a72709f12fac1bc0356943e"},{url:"display-immediately-all-dialogues/index.html",revision:"53e9e672fbded7ee21a398ff67f71db6"},{url:"display-real-time/index.html",revision:"e7487d432657a95eaf11cbc1543664a2"},{url:"en.refund-policy/index.html",revision:"fae7256b4f7782a146a930d7d7f3697b"},{url:"enter-name-screen/index.html",revision:"35ec2c523a2374fcb363e0003c8e0272"},{url:"export-game/index.html",revision:"6cbaea2ada390519c5a7771f2bbf510e"},{url:"faq/index.html",revision:"529243f5d0d07b76b167cffb10fddf1e"},{url:"friends/index.html",revision:"bf87ac6ede785e7f8111eb4714ab1abf"},{url:"gallery-template-assets/index.html",revision:"e4f4975e8f263e12a76a30a2949e6b42"},{url:"gallery-template-default-ver/index.html",revision:"a7fd75ff7ccd40f36f1694e9b6c3960c"},{url:"gallery/index.html",revision:"e6510e1e095cee874b9a3530388fd2b3"},{url:"gallery/photo/bg/index.html",revision:"2bb5f846996e0f87e8541a2a71477d16"},{url:"gallery/photo/gui/index.html",revision:"bb3e5e379926c397363d28a9a15748e8"},{url:"game-only-text/index.html",revision:"7c94b7436746e941e82032f21d66f20e"},{url:"generate-random-name/index.html",revision:"00e1e9808b967b3962a31b7fcd414b71"},{url:"gui-017/1.webp",revision:"cb164e6304824ee23aa636d5c8bff293"},{url:"gui-017/2.webp",revision:"d89ed4abf1f652ed435d7cf5250cd3c6"},{url:"gui-017/3.webp",revision:"749b56afdf8bb44e6a83328b0b4db497"},{url:"gui-017/4.webp",revision:"3a14857f027fc4a86fc6173b78140ded"},{url:"gui-017/index.html",revision:"b8ff260b751ea577f82be61134a0a8e2"},{url:"gui-vertical-002/index.html",revision:"95a4c843b1077844507c82da363f920e"},{url:"gui012/index.html",revision:"3bfbc037357f6a2650d991ab35e6c91d"},{url:"gui018/config.webp",revision:"edee932cc0ee4db116f5cb763871f1ac"},{url:"gui018/index.html",revision:"3f5de862357ac7d1cf88862745712d99"},{url:"gui018/load.webp",revision:"bc4fd522772a6852fda7af18b3f17b12"},{url:"gui019/index.html",revision:"e78a831e36a235c7b352707e08e7efdc"},{url:"gui020/index.html",revision:"d844816899f6541f533697e95cc274d9"},{url:"hexo-basic/cmd.png",revision:"45ef5bba503f7ec8b0da05ca5dcb4912"},{url:"hexo-basic/cmd2.png",revision:"52eda27f7b027cfb72ff6a67f02ca9d7"},{url:"hexo-basic/cmd3.png",revision:"e4b077eac5d465a0b6add06ecded1f39"},{url:"hexo-basic/git.png",revision:"b2d22e15a054b592da8db9a889abd97f"},{url:"hexo-basic/index.html",revision:"f55991798fcc6ab05bb402543eff9a0f"},{url:"hexo-basic/node.png",revision:"fc0a7226a716bb933b892e3690149a09"},{url:"hexo-custom-mouse-disply/index.html",revision:"19daf5eae137b8abd928b234fcbf0eef"},{url:"hide-quickmenu/index.html",revision:"9e1f2d1c0588fd126aefdbf9a12c4e21"},{url:"hide-textbox/index.html",revision:"fd9913991fd7560cbaab635e1504a21e"},{url:"how-to-choose-vn-engine/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"how-to-choose-vn-engine/index.html",revision:"347fae84a663af642470c94f9b21d009"},{url:"images-tip-function/index.html",revision:"5c3a789990525ea0a22bff323dc0a09b"},{url:"images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"images/pawicons/32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"images/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"images/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"images/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"images/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"images/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"images/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pawicons/favicon_16x16.jpg",revision:"7170a7a0a8983fb2790e28c864648f5b"},{url:"images/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pawicons/favicon_32x32.jpg",revision:"b7c8a8f8bc324df4758a5c611c623837"},{url:"images/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"images/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"images/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"images/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"images/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"images/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"images/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/1.png",revision:"d7a6c5078031778a916476a099dea4e3"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/about/infj.png",revision:"ca9602d3250d40b9621b89884a405140"},{url:"img/about/infp.png",revision:"b579b5acf80e6970b34504df98f20f25"},{url:"img/avatar.png",revision:"23d3630eaefa5276d9229ad840fe715a"},{url:"img/bg.jpg",revision:"42be14e79e6a48df2f0ff0f42908383d"},{url:"img/bg2.jpg",revision:"bbf70c6075b8f37faf4f38c0937c0b73"},{url:"img/bmc.png",revision:"40b98209d9deb3e69053d4a559cc8a30"},{url:"img/cover/1.webp",revision:"75c4ca0e23ea27798c951e79cf118d88"},{url:"img/cover/2.webp",revision:"37a1fa535df37e8c5cf01def24fc9eeb"},{url:"img/cover/3.webp",revision:"ec6c922dd423211df47e8cd79493aacb"},{url:"img/cover/4.webp",revision:"896796dcf0a2b1f714060e1300972432"},{url:"img/cover/5.webp",revision:"06b21ba7e9d00ca7768252c51b3854af"},{url:"img/cover/6.webp",revision:"7e12d98e2bf9548379c39beba3a222d2"},{url:"img/favicon.png",revision:"4ed0320564232b69ec8a28f66cb18115"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/gib/1.webp",revision:"3a9c61bd832c972161a4c1236e8932fd"},{url:"img/gib/10.webp",revision:"a8bf147229785e8287f71465e8e2184d"},{url:"img/gib/11.webp",revision:"2ee1e23c6795861b209660c3318452c0"},{url:"img/gib/12.webp",revision:"8474e1ace21041b4d23ef81699e80ea5"},{url:"img/gib/13.webp",revision:"b81144a83d8b8bdac63cc2c155adcf7c"},{url:"img/gib/14.webp",revision:"933a480a83f392bffb0d690964248eed"},{url:"img/gib/15.webp",revision:"0fea3990e5ccc0db12506ce55bb85e5f"},{url:"img/gib/16.webp",revision:"396b012a1baa6d7542df1cd4f92aa33b"},{url:"img/gib/17.webp",revision:"327cc150630dd9abb577be1708c7e43d"},{url:"img/gib/2.webp",revision:"71cd303200dbab88eea0c5565f0dfe88"},{url:"img/gib/3.webp",revision:"d6a489bd5309b5e0972e054b95f8e346"},{url:"img/gib/4.webp",revision:"c63440486dac3ae824221ab996f7b5cb"},{url:"img/gib/5.webp",revision:"5e12e70e4ba0a994673fcd091b3cc44d"},{url:"img/gib/6.webp",revision:"699a5ed1daa416539598e302984dc5a7"},{url:"img/gib/7.webp",revision:"b1a6db37ce52de0d50792128da9b9f4c"},{url:"img/gib/8.webp",revision:"7a472f0077feb6f7901446a419012ca0"},{url:"img/gib/9.webp",revision:"1a7e4ae1712bad270688d7346ad2fb00"},{url:"img/gib/mononoke/1.webp",revision:"d8201509fe441fb29173e6ef2878b618"},{url:"img/gib/mononoke/10.webp",revision:"f963257315e72440575413d673baff64"},{url:"img/gib/mononoke/11.webp",revision:"98b4003a98c15f40acfbbcf6c7dd4ea2"},{url:"img/gib/mononoke/12.webp",revision:"a6347a9c0a47dede6ca41722a5a1368b"},{url:"img/gib/mononoke/13.webp",revision:"4ad91e7917dfe78413884a35bf45a3b9"},{url:"img/gib/mononoke/14.webp",revision:"7b59dc953f4333a3941f092aaa39b663"},{url:"img/gib/mononoke/2.webp",revision:"59e74291fb091b32cc4e4291a25f846f"},{url:"img/gib/mononoke/3.webp",revision:"2eff7ee46059be1118891e976e96e98a"},{url:"img/gib/mononoke/4.webp",revision:"6823ddd1e470ed0c6c92c6bf93fcafbb"},{url:"img/gib/mononoke/5.webp",revision:"f873ec8172aef5364543eafc98bb7805"},{url:"img/gib/mononoke/6.webp",revision:"aef6f12f2284f2a7d839206d3a71a0e5"},{url:"img/gib/mononoke/7.webp",revision:"fbfcdadb4b5f6eed1492fe7f109c2bed"},{url:"img/gib/mononoke/8.webp",revision:"4f02248750fd90e1fc6227f42a4135f1"},{url:"img/gib/mononoke/9.webp",revision:"ef22b303f1cce87b3ab226801fba5361"},{url:"img/kofi.png",revision:"164e2a1727fc90ff7cc45834e794f915"},{url:"img/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"img/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"img/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"img/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"img/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/192.png",revision:"854c9024d2235b09714ad264590aa61d"},{url:"img/pawicons/32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/36.png",revision:"a034a149093988bfbbe6a63d8bd9eb59"},{url:"img/pawicons/48.png",revision:"bf59c3d6452c607b83902df11de2f1c9"},{url:"img/pawicons/512.png",revision:"4c01addfddca35335050e6aa8e958f80"},{url:"img/pawicons/72.png",revision:"e4f5a3f8d7f86bea9d072d1837ee1d76"},{url:"img/pawicons/96.png",revision:"2bd2af18ac87be4bd4ed9ec9eec72c61"},{url:"img/pawicons/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"img/pawicons/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pawicons/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pawicons/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pawicons/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pawicons/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pawicons/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/paypal.png",revision:"80bff034d3f4f5c10287535e67f74d6e"},{url:"img/pwa/apple-touch-icon.png",revision:"4baf4ed8f0ca9617ebd2d2e1ac0ec159"},{url:"img/pwa/favicon_144x144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"img/pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"img/pwa/favicon_16x16.png",revision:"8cb58ed708c756f9bcc25b23aea5fc1d"},{url:"img/pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"img/pwa/favicon_32x32.png",revision:"37029cdf7589ff8a6ddd4426ad9cd43d"},{url:"img/pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"img/renpy1.png",revision:"28e219b7d1e5cda04c84a92716f4df8f"},{url:"in-game-change-size/index.html",revision:"e6eb81a88f4f9006615c244286117c3c"},{url:"index.html",revision:"539b16e4667917c8a6f49b63ebda1b8e"},{url:"install-use-valine/config.png",revision:"a1c4f20e0d2d31cb87f435d6c8f12d6e"},{url:"install-use-valine/index.html",revision:"37898f32f69ff6ec30a507ff9c3004f2"},{url:"install-use-valine/learn.png",revision:"9f5cab271ae5770186567993839e6acb"},{url:"install-use-valine/sett.png",revision:"000afcbbf1632280b86074e3ebd5a057"},{url:"inventory-system/index.html",revision:"b4de19a78cc1a6926677a7cc59e2f9cd"},{url:"items-sprites-effect/index.html",revision:"2b78e7ef337e8dd842fc87b25375af6b"},{url:"js/countup.js",revision:"04397b967e3ec0c509586356266b3ded"},{url:"js/main.js",revision:"80de3021a5d1ba2ecc68d332b284c836"},{url:"js/rightmenu.js",revision:"e4b3044aa999f5c624cb1432ff11d15d"},{url:"js/search/algolia.js",revision:"93ffd0a34bdc6ae3371140da18142343"},{url:"js/search/local-search.js",revision:"979ec59da4b1a01e6b1a9d344c972dd0"},{url:"js/tw_cn.js",revision:"44dc15cfe343a2507e75c2a9b90a3e74"},{url:"js/user.js",revision:"2de95d9d8f34f27ab47eab36534271c1"},{url:"js/utils.js",revision:"8e49a06cd405efabb8958ec2dad30c94"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"lightvn22-10-03/index.html",revision:"6b557a263cda910eb596e123afe77674"},{url:"lightvn22-10-03/n1.png",revision:"46102d8b356c543063af22b91125de66"},{url:"lightvn22-10-03/n2.png",revision:"328d44546d0aceb42f8c1b1185b93e33"},{url:"lightvn22-10-03/n3.png",revision:"6e5658c09602eada3635092bb303a734"},{url:"lightvn22-10-03/n4.png",revision:"f950f04d1aca5af2dc5639bcfac93ae7"},{url:"lightvn22-11-24/index.html",revision:"7a4ea7ae1a7e1ee384b6976703f74348"},{url:"likebutton/b2.png",revision:"2ba76e233d358389260c0a04e0021a69"},{url:"likebutton/button.png",revision:"a3b1dc71d3f7ce8a3e1eb23db394ee93"},{url:"likebutton/index.html",revision:"0af64f3b9fc035a774dc3bca00767925"},{url:"link/index.html",revision:"ba87a7b22515181e34b0302b4ac2ff29"},{url:"login-reward/index.html",revision:"ae092887c47823663f146c7389c5dd6f"},{url:"main-menu-music/index.html",revision:"eb4153014fcb0fee3de0ef3a41a78866"},{url:"make-butterfly-beautiful4/index.html",revision:"76f8d2cc7bcd4d029103312869b9110a"},{url:"map-puzzle-system/index.html",revision:"ef3990cb61ea0e4aa5decf2f5e06d91f"},{url:"maple-effect/index.html",revision:"c98c6ae7b1d83d3a41f421b77732fbbb"},{url:"memberships-2/index.html",revision:"7a499f7d62bb9397139c18984528a783"},{url:"memberships/index.html",revision:"e45463f3202201ad16b9e0dffa507ede"},{url:"multiple-language/index.html",revision:"273762c335a6555fc9f11b78a7c78cac"},{url:"name-input-assets/index.html",revision:"91cb62dc60925d8d07eab6f7b4355db8"},{url:"new-year-event-2023/index.html",revision:"f2b10077bcc73e1ccaf43a79bb9d3957"},{url:"newsletter/index.html",revision:"c376737c0187c9fbb441fe5114d67c5a"},{url:"nsfw-limited/index.html",revision:"57abae726a9468198bd88c503e961b1b"},{url:"null/index.html",revision:"8c6d220da020b2c947e181248dd50b95"},{url:"null/s1.png",revision:"1176983004870afc4f08e0d2be9a8bb6"},{url:"null/s2.png",revision:"46f15dedf94714c15101b0ac6c64e324"},{url:"nvl-ctc/index.html",revision:"7961ddf91bc4a45b48dfd66cb4c67b35"},{url:"nvlmaker/command.png",revision:"6e0f649bf1751b3b11c76269c3d37b24"},{url:"nvlmaker/direkt.png",revision:"09e2e2151bca608bb495008ba50daa6f"},{url:"nvlmaker/ed.png",revision:"d91ac2357ccca993ad183f8a39cd7be2"},{url:"nvlmaker/index.html",revision:"7dfe3d9ee6e14f8571e141b54657cfb0"},{url:"nvlmaker/new.png",revision:"420b39c1987d7c58e1c18a85e1be7a79"},{url:"nvlmaker/scri.png",revision:"887b182fd9cd5f23a6a0765967d8b5b6"},{url:"nvlmaker/time.png",revision:"46b645a2c6a52ec40a3677e701bafcf8"},{url:"nvlmaker/time2.png",revision:"a5486ac563fe6dde70282348a703c375"},{url:"open-external-link/index.html",revision:"a8c2ba039d6ec2c692b76d8ac748e5f2"},{url:"openchatai-renpy/index.html",revision:"2ca4787da639c853cb9f39df8c193213"},{url:"original/index.html",revision:"00f2488e3ec31062b0178763928bd3e5"},{url:"page/2/index.html",revision:"40053ecc71889667ef5985501c603f66"},{url:"page/3/index.html",revision:"450d9ef23442a811aef95cb3fd21c32a"},{url:"page/4/index.html",revision:"9164225ca317de4587a880beb5c4b715"},{url:"page/5/index.html",revision:"fab8a4a54946ab277deaa1bee61d7c6a"},{url:"page/6/index.html",revision:"512efa845ef3affbd61b6b0db87630ab"},{url:"page/7/index.html",revision:"a6c68f63563c8034001c9f14a4d81013"},{url:"point-pop-up-assets/index.html",revision:"2bd7734d4d9820970c937a0759c552cd"},{url:"pop-point/index.html",revision:"649b6bac650daf10563d603e657664c1"},{url:"privacy-policy/index.html",revision:"e335a82bd6c6b1b977af9f38394efe77"},{url:"pwa/apple-touch-icon.png",revision:"7af86bc2a2d91f2b6959543e9a941215"},{url:"pwa/favicon_16x16.jpg",revision:"171c36385b27a85539df87f8729317ec"},{url:"pwa/favicon_32x32.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.jpg",revision:"46e57f9fcc55a0242745fc27d3fef46b"},{url:"pwa/images/pawicons/144.png",revision:"ecd3156214cdb6a4f1d124a79337fd6a"},{url:"pwa/safari-pinned-tab.svg",revision:"07f07de3fdbc4f8dfda96df3b8c652d5"},{url:"random-dialogue/index.html",revision:"32fb0b05e0438b223cac52b1b24dff42"},{url:"random-number/index.html",revision:"ceb2cf112e4a4fe0c79b29607b6a4455"},{url:"random.html",revision:"6f59e6c13aaf9d91832be75d133c7447"},{url:"refund-policy/index.html",revision:"1d8b91fe2ba37cb3777dcdc857d3215a"},{url:"release-017/index.html",revision:"c240e6208bc305014f7826e373397967"},{url:"remembering-choices/index.html",revision:"172926c9ddbe27b483601c5fcee86784"},{url:"renpy-basic/index.html",revision:"505f383a176462c45a6cf7ec6847e6c5"},{url:"renpy-crash-glitch-effect/index.html",revision:"ca0dfdd4ea1138a84aa6129ea5217d5d"},{url:"renpy-flip-image/index.html",revision:"c34e13170daeb90c2a3a54991e7f1fe2"},{url:"renpy-matrixcolor/index.html",revision:"49812c7497b9ce86a38bbc4fdfaae655"},{url:"renpy-overlay/index.html",revision:"fa8b5923fdec079a9c1fe75171510a5e"},{url:"renpy-review/index.html",revision:"93b984313c68a65f53b4e6718c877509"},{url:"renpy-typing-effect/index.html",revision:"6d2e82391a49d0329d9f739c93cbda3e"},{url:"replay-cg-screen/index.html",revision:"1deac954eac3a0054010e8221db0e495"},{url:"rpgmaker-assets-menu/index.html",revision:"b53e5a7107e0a6596ba351b637385d00"},{url:"rpgmaker-create-a-new-map/1.png",revision:"a81910172c8e1e275e04c7674e15105a"},{url:"rpgmaker-create-a-new-map/2.png",revision:"af38fdfd4701227edf452d27d6755f92"},{url:"rpgmaker-create-a-new-map/3.png",revision:"a25b61ac9cefcd2e0e52554c93378ee0"},{url:"rpgmaker-create-a-new-map/4.png",revision:"96b86467bcaaf99a64436126d9b14f3e"},{url:"rpgmaker-create-a-new-map/5.png",revision:"9f7132517b5b8eb9a61e4b26162109f5"},{url:"rpgmaker-create-a-new-map/index.html",revision:"02d2e046340c1f58eae4a2a86c9c21e5"},{url:"rpgmaker-walking/1.webp",revision:"2d1512376df2f1927087382b3fce6374"},{url:"rpgmaker-walking/11.webp",revision:"647977538bcec4e2750f991a970877e3"},{url:"rpgmaker-walking/2.webp",revision:"f3c85c4cc6ef2b36261113e0ba63e7b0"},{url:"rpgmaker-walking/22.webp",revision:"3f7457af595f0f694482e60467fce6d4"},{url:"rpgmaker-walking/3.png",revision:"0fe4ff1345bf469de63e5015dfa45ec5"},{url:"rpgmaker-walking/33.webp",revision:"9d072d3b440b570040230e98460c9b18"},{url:"rpgmaker-walking/4.png",revision:"64bf69239d5d26e45c6600084e47d521"},{url:"rpgmaker-walking/44.webp",revision:"bef5e29bf9ce9acd178fe4c8e21a1020"},{url:"rpgmaker-walking/5.png",revision:"d0c78222ec92038ef2343af31e4f229f"},{url:"rpgmaker-walking/55.webp",revision:"0bc69e503951f2798de7022de5fd2c7a"},{url:"rpgmaker-walking/6.webp",revision:"02ecf7cab875d0a23e5270fc576f08ac"},{url:"rpgmaker-walking/66.webp",revision:"b4a2d376ba19c4077ecf8041a130b0df"},{url:"rpgmaker-walking/7.webp",revision:"0d3d02a2274f377cf3c19b1e95ff565e"},{url:"rpgmaker-walking/77.webp",revision:"f63fb4eb8baf476f042f0bf5205a46fc"},{url:"rpgmaker-walking/8.webp",revision:"93a23afc39b0cb33a2779f3bc297fcc5"},{url:"rpgmaker-walking/9.webp",revision:"967c0521ca39fe4d8a304595076b2478"},{url:"rpgmaker-walking/index.html",revision:"1418296a461d25a539ccbbbe4598d77a"},{url:"sakura-tree-background/index.html",revision:"353aa9fc183ca0098d49211b406a8025"},{url:"selected-button-style/index.html",revision:"a4a3fad69cc0e2da3f7619dfb284a741"},{url:"show-variable/index.html",revision:"c9ec98d4af9904a0ba5f4847fb4bee10"},{url:"side-image/index.html",revision:"50968e410d20766df821d4e067fcb6c7"},{url:"snow-effect/index.html",revision:"034f4def2be8c45a3b81f5107955e024"},{url:"speaking-animation/index.html",revision:"1a2f4025c127f3429b092cccda9107f2"},{url:"splashscreen/index.html",revision:"4f59993fab0b7c034a92d8b7b0537377"},{url:"suika2/index.html",revision:"6b22ec1e2db8a4d6533c1e1b28674927"},{url:"sw-register.js",revision:"2760aabe42613347463fd0989e64e23b"},{url:"sw.js",revision:"95a467f8327c535e83caf59f5d84c06a"},{url:"switch-chapter/index.html",revision:"7f884d1a38a14808824de3073e3f2620"},{url:"tags/acg-creator/index.html",revision:"61bd915c3479ea24a05835e09ed64366"},{url:"tags/ai/index.html",revision:"9cb49c20639eb9681c212fb2bc797375"},{url:"tags/butterfly-beauty-diary/index.html",revision:"334c9fc509ba3f2f7bfe5afdb5189604"},{url:"tags/custom-hexo-theme-butterfly/index.html",revision:"109454f9ccac06aee4c7df09f5e3df3f"},{url:"tags/custom-renpy-title/index.html",revision:"d9f462cb46f9bd630da37f2c15df9bdc"},{url:"tags/dialogue/index.html",revision:"9c0085f839ba16d139ad5dfd033d627b"},{url:"tags/effect/index.html",revision:"0767a8c8aff34d6d12473324f973ee08"},{url:"tags/event/index.html",revision:"b165eeff49f25017c70b7e912f1b3600"},{url:"tags/Hexo-plugins/index.html",revision:"cadce964831f25c2004f881a21aca74b"},{url:"tags/hosting-own-website/index.html",revision:"6b94dd215df26c0e076893ac0da119f3"},{url:"tags/index.html",revision:"fe98716d0a882283b8068adcbda0b1dc"},{url:"tags/itch-io/index.html",revision:"80b8ca3c5ac1d9d8dab12afcdc94a71c"},{url:"tags/light-vn-update/index.html",revision:"ff556b8b586a9087c2c1eb40d53c63d0"},{url:"tags/Light-VN/index.html",revision:"e136f062c681b37565d5ebd41eedbe21"},{url:"tags/nvl-maker/index.html",revision:"f1fa4c676b3200710b69f3f967c8ee1b"},{url:"tags/player-related/index.html",revision:"8cc21f8dd3e8f896b40a9a7b85238ee3"},{url:"tags/pro-tutorial/index.html",revision:"50193073e22d0bac5e5315d46c72431d"},{url:"tags/pro-tutorial/page/2/index.html",revision:"491c22b2340f00f452754064faa7e883"},{url:"tags/pro-tutorial/page/3/index.html",revision:"f56be5cde88ef6cc89939c668a09aa96"},{url:"tags/pro-tutorial/page/4/index.html",revision:"6074c400935f3a346389c15e8004da75"},{url:"tags/pro-tutorial/page/5/index.html",revision:"4ecd6b1f0e84fae4721c48c4e31fc100"},{url:"tags/renpy/index.html",revision:"e3a6a0116c649e2ec5b4571f5e579fa4"},{url:"tags/rpg-maker-custom-map/index.html",revision:"d27b04a3a43e46a3d4dbf0207645242a"},{url:"tags/screen/index.html",revision:"c082ff76ee55854f700f83de088ed6da"},{url:"tags/special-function/index.html",revision:"19ef750bcadbebeb35f73093031df61b"},{url:"tags/suika2/index.html",revision:"6991a7a2dc6eaebc8394d397d3f35966"},{url:"tags/terms/index.html",revision:"7f4cd0e1f7ebc226f965f837cc84b0e2"},{url:"tags/tyranobuilder/index.html",revision:"3af7b483fe59153841bd6e55f512f1e8"},{url:"tags/ui-assets/index.html",revision:"ef47090e3356e515cd51d2276adcfe18"},{url:"tags/update/index.html",revision:"0b644d83f24a3ca23b30ed39d2b5366a"},{url:"tags/upload-game/index.html",revision:"d761a15c358ca9aa433fa866b4ff2182"},{url:"tags/variable/index.html",revision:"7e0b51d3ecd29c610c0bc27470371105"},{url:"tags/visual-novel-maker/index.html",revision:"9c89ef9644381c6bd67d382cd91d5bfe"},{url:"tags/webgal/index.html",revision:"05d6cdcad443dbea52f0a6329f9924f1"},{url:"tags/封面製作/index.html",revision:"3162b677f45451c54cf039873e5a9c74"},{url:"tags/背景素材/index.html",revision:"392ad87baa58cd97804b4abc8bd42401"},{url:"tags/隨機功能/index.html",revision:"18369cbcebc9bad7b5e8b756a97cd2cf"},{url:"test123/index.html",revision:"2d7407f3a8ade1f24b629508fe0b4dff"},{url:"textbutton/index.html",revision:"ca4d2f1dc2a8c2ea031250854dc7eea9"},{url:"to-do-tutorial/index.html",revision:"74455cab0430c681497b6753b81775b9"},{url:"tools/index.html",revision:"55c4b7ae9bc22f9e04893343542249ec"},{url:"tooltip-function/index.html",revision:"9aa78c3222dc3f23b8d50485c320afa2"},{url:"transfer-to-hexo/index.html",revision:"001c1e84a1ad58bbfa1eb6b7d179dbf9"},{url:"tutorial-update-history/index.html",revision:"9e18b83c22ad2458263b627c09ef95cf"},{url:"tyrano-name/index.html",revision:"1bbd5a45e6c2c234d399de7c07241427"},{url:"tyranobuilder/index.html",revision:"f5a6196bbf06c07517fba90f6b72ef2e"},{url:"undefined/index.html",revision:"a47e09d723cceb42145509a69b20ba61"},{url:"unskippable-video/index.html",revision:"faff25973ca3fd403dbe2fc79abf3236"},{url:"update-20221211/index.html",revision:"9aeac313a3eb446fae7924f424d2342e"},{url:"update-20221211/magnet.webp",revision:"d4a50a8623c2d05b832f9ed343e013e8"},{url:"update-20221211/swiper.webp",revision:"80586ca0517d1663d140e2ea3d50c0ad"},{url:"update-20221218/index.html",revision:"7e08a3256fba59125a91659a95e556d6"},{url:"upload-download-save/index.html",revision:"0e1b4894efd270f46457cf5fbc46b72e"},{url:"upload-your-game-itch-io/index.html",revision:"3677a809e0d94fb598a3f7d0d05463c0"},{url:"use-list/index.html",revision:"f09bdf20f1182432f624fdbbc7df0c48"},{url:"use-nvl-mode/index.html",revision:"ad2850228f2dabf68eed8e626fce09a8"},{url:"useimage/index.html",revision:"f09f8dc8d1bb3bda8ee0bdffe501db45"},{url:"variable-change-image/index.html",revision:"b3608990fd22e83b42b7b63d6830006c"},{url:"variable/index.html",revision:"b927764403abf60009628b891a3e649c"},{url:"vibration-function/index.html",revision:"aec4531871bd8798104e0a48593eadca"},{url:"vnmaker/index.html",revision:"470a759fdea79c60f0dccd90f2d24f82"},{url:"weather-effect-tutorial/index.html",revision:"8eda0674882e2f6de051b1fb65e23964"},{url:"webgal/index.html",revision:"61685bf892f9da01804236c3e4a55058"}],{})}));
//# sourceMappingURL=service-worker.js.map
