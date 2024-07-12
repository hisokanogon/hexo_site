/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","1723ad7333608fcd66fe538fd78a4127"],["/2024-future-plan/index.html","2be71e3899577d655ec200087b345537"],["/2player-battle-system/index.html","0e478ccb053019e9fcd235123d9cdb1c"],["/404.html","2f259e2bfd361774d3436dcebcbd94f4"],["/about/index.html","6688c49ceb37228cdd3f8fdf0f8ea3e6"],["/acg-creator/index.html","5e90703d0d05f50bdd827aeb98e5a903"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","63db3512b96b38858825b1795c83961e"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","3250af62193d683a24812bcb61e4cd8e"],["/animated-title-main-menu/index.html","97840577336dc91bcbc13131680bfd61"],["/archives/2022/05/index.html","051f9a5374b19d7dd06e9d1816bccc9e"],["/archives/2022/06/index.html","4ae2e1f5264215345549c48a46c594ec"],["/archives/2022/08/index.html","a1f16b082bc5363487b1e10a2f40373c"],["/archives/2022/09/index.html","07ff244ccafff3b374033ca258fa0e61"],["/archives/2022/10/index.html","0690c1eeb4682c332b7880ed1924cea4"],["/archives/2022/11/index.html","a647837581c7ebc2221a438a0904d0bb"],["/archives/2022/12/index.html","1d85a19ec0ad3c9a50e810ad99d0c5ff"],["/archives/2022/12/page/2/index.html","129df44bade5592ee5ac6b241a7bde43"],["/archives/2022/index.html","1eb6c6b72c2c23305aca499df66900fc"],["/archives/2022/page/2/index.html","0e91c09605d24f9d6d014faa12e065b1"],["/archives/2022/page/3/index.html","78d51f931cd1ab439fef42bb0b28304c"],["/archives/2023/01/index.html","0675e8f0537550d6c4383dd5bc78f22e"],["/archives/2023/02/index.html","19aa3018204af41cd3a9c4d954acf778"],["/archives/2023/03/index.html","e7fe93a114ac26c52ad5fb6b1f58d6d4"],["/archives/2023/04/index.html","971dbd8d4c6a2113e29e7c857d4b4976"],["/archives/2023/05/index.html","fc7e63c452da6ecaf524827e01ce92b5"],["/archives/2023/06/index.html","380232d795421e3d0e53eadef71124c7"],["/archives/2023/07/index.html","9b22322aacdcfa170c0941fd7c23a251"],["/archives/2023/08/index.html","eeb7dd2e0e52045b7b30701ebb35134e"],["/archives/2023/09/index.html","5a4552ae196dbba84aa154b831f4ee4f"],["/archives/2023/10/index.html","6628694f651e0e3b93041a0669aa4ec3"],["/archives/2023/11/index.html","6222710181c2718d382c7963f4106696"],["/archives/2023/12/index.html","5e6ec6eddd71aa871fbca379d90dcdb9"],["/archives/2023/index.html","01517f8fcb9ef2be17b392ed0be2b899"],["/archives/2023/page/2/index.html","0c4f78aa0849665781825704350801f8"],["/archives/2023/page/3/index.html","474d240da786453b0dca22a650ae0faf"],["/archives/2024/01/index.html","0e5cb8ef06f1378d877ec9cd53ba687b"],["/archives/2024/02/index.html","bd4b1b9c2c45266745cf0800df2a0342"],["/archives/2024/03/index.html","9ddc164f804066234fc4c67deaa2a253"],["/archives/2024/04/index.html","dd7a575ee95af236d463b713226b904d"],["/archives/2024/05/index.html","18d480ddca48cf075efbfa2ff91acb35"],["/archives/2024/06/index.html","d22047de78c42811a203da5e6c8b9ae9"],["/archives/2024/07/index.html","59e968d635c28de28f600f7226af1184"],["/archives/2024/index.html","5ff8f9ffa5a4d4b5d879cac19c6f98ca"],["/archives/index.html","76a57ccfc9212fe5b28589bf56b8e959"],["/archives/page/2/index.html","f761a5654396cdd526d79b35907dc6b8"],["/archives/page/3/index.html","77cb04167958b4ebf291b0681ba22bf2"],["/archives/page/4/index.html","00e4cfafe4a7fbc26aee15ad21550f14"],["/archives/page/5/index.html","1c00fe4d1c16d5949cc5734a13d7ddc1"],["/archives/page/6/index.html","797d9e1def23fb17df34a971c71f07df"],["/archives/page/7/index.html","f7c2faf3332cb4986866141164ae67af"],["/artitalk/index.html","81dad3570405846ccde9a16e2b1be45f"],["/battle-beautiful/index.html","c6d24693da2a1ee08b432f642ea7489f"],["/blur-effect/index.html","a9ec8a3c3a876c57e21c67c5c9f3cef3"],["/butterfly-custom-tag/index.html","f04d09f77e7de32cfa83b91f4fa35b44"],["/butterfly-plugins-faq/index.html","8440d825326d737c86660c911aa4f977"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","601ffbc52732d6ce3525784e7320b7c6"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","37a6592c6c6e016af34dbabec044376e"],["/categories/announcement/index.html","e02d3f943d8799e03eb4a2d079f5abf7"],["/categories/diary/index.html","1798a7f5f6c6667c619306f76317ef72"],["/categories/game-dev/game-engine/acg-creator/index.html","61f75230bf5aa4fddbacebc488f11cc2"],["/categories/game-dev/game-engine/index.html","e72757f7d5aaed4940754488b308f0c8"],["/categories/game-dev/game-engine/lightvn/index.html","c908d8f39a955a9cc20f16ce0905b23b"],["/categories/game-dev/game-engine/nvl-maker/index.html","eb608c5dbc3d422c8c57a4cd7ef0015c"],["/categories/game-dev/game-engine/page/2/index.html","44deb8c6d0cb16edb355c66fdfb08932"],["/categories/game-dev/game-engine/page/3/index.html","3e1214481d16fa3d222399b5b1ec93bb"],["/categories/game-dev/game-engine/page/4/index.html","d9180f6e55a55a4d501299e82c5048d4"],["/categories/game-dev/game-engine/page/5/index.html","042fe5f2c4a7ae6ea5fb2804a1a3c4b8"],["/categories/game-dev/game-engine/renpy/index.html","633bfcf2d2b1257c2c592e5e5f41c86a"],["/categories/game-dev/game-engine/renpy/page/2/index.html","5bc8802230301a0da3991c0514cb204e"],["/categories/game-dev/game-engine/renpy/page/3/index.html","658256b1acc7f37f9f59acd8f22a59da"],["/categories/game-dev/game-engine/renpy/page/4/index.html","fbd03519c4e17ff7e629c2321587092a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","c5423f54872125f575045e085c31ee9c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","327eeaab1ad5b7fdbbf83a94b0066dd4"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","55a904ca4383fd4fb2aaa8691eea9aba"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","1e37fa70a71ecc75d3946d35aefec498"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","6436668ad4fd6d92c83538415ced5de3"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","f09ec50cc03d2c2dc73a75fea975efb5"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","79bb5b942d391de203800c95bb7db95f"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","6b796a87e1f5c7ce04fd789553887e10"],["/categories/game-dev/game-engine/rpgmaker/index.html","d9d840d1d47bf4c481bb52a728d8997f"],["/categories/game-dev/game-engine/suika2/index.html","48cb0d4a52dbbbe23f18296890b779f8"],["/categories/game-dev/game-engine/tyranobuilder/index.html","a337a0dc9ce3c76e9bb67cacbab5a293"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","c5892cdd2691024ff3cd6e622bbfdd28"],["/categories/game-dev/game-engine/webgal/index.html","101f70ba925806f611ecb17fe3031b33"],["/categories/game-dev/index.html","039ec295f01d59c1fb2482be424cb7ae"],["/categories/game-dev/page/2/index.html","7ddc1663631a0db25fb836374e54edb2"],["/categories/game-dev/page/3/index.html","1c9f1c3d9272d68fea7cba6451a77811"],["/categories/game-dev/page/4/index.html","3d39c9ef705e72ec1fab65dd95a497c0"],["/categories/game-dev/page/5/index.html","35ad40f9df14d0d37d5a7277a5b5aa15"],["/categories/hexo/index.html","5191458c217be05c6e1b576d7adcd222"],["/categories/index.html","9bfbada718255e803ae7f34be3ba324c"],["/categories/material/index.html","49d750487557064eae7ecc7e328338fc"],["/categories/update/index.html","10ccaa790c87958e6a183bbcff6dfae0"],["/change-according-to-real-time/index.html","cf236e5e559a1d390c2bbd19a81691c0"],["/change-character-info/index.html","5b31aeda76ee565847235986840e11a1"],["/change-title-after-first-time-viewing/index.html","cea9d00678df3b8d78a6824513d9cb02"],["/change-title-based-on-event/index.html","7d30c71dd4be09b21584a5ae5153162f"],["/character-interaction/index.html","3dded8dea840347870d69ac8df15e2b6"],["/character-stats/index.html","4a4162bb02b4ee6ff22a6fb608e9781d"],["/chatbot/index.html","1080db0c0bab7766cb85b0a12efda109"],["/choice-time/index.html","22fd30be3c975c9de00f1295bb90607f"],["/comments/index.html","f233d174bd3763a146415ea70ab57497"],["/commission-info/index.html","d95220a3c38761d790a57598f2c35091"],["/count-login-number/index.html","50eb7e238e57d7d17107d176eedb61d9"],["/create-button-anywhere/index.html","aeec0b13743c64ea67157daccbad8885"],["/css/eurkon.css","1e5323667de24fef57efb15014c0b119"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","0bed14c9097eb116780c357688f180e9"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","11436150d9973c45eada27f0dec2e489"],["/css/rightmenu.css","aca982109f4207621f081b23fe504af3"],["/css/siz.css","5c8fd500ff4957af0a62680ecb5b9249"],["/css/swiper.css","3d822811c064197f4b6073bff78f2388"],["/css/swiperstyle.css","fe40206a3ca2c42fb245616b032a4b52"],["/css/var.css","e07f7b14871032ed8a6c558dba15c70f"],["/ctc/index.html","494079304213f14fec294b8b7af54ab8"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","96ad243218867580fd2cdf0a09efe827"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","41d5f7da8a4819985e3ff271bbb79efd"],["/custom-gallery-cg-screen/index.html","358d1ff611853c74dc811ff1ce275283"],["/custom-launcher/index.html","0cebf081edbcfbb8c02979acb5f182e1"],["/custom-loading-screen/index.html","fefa0cb76bd970301fa0772a828ad74d"],["/custom-mouse/index.html","3b3fcfb63dda8c26ff244484dea48426"],["/custom-music-room-screen/index.html","f52af3cb877bbdcdb4b987e86bcfcbab"],["/custom-music-room-screen2/index.html","11d9df976009f91db1e3b831efbe8ed6"],["/custom-nvl/index.html","4191e13c41f2694b824c788674135860"],["/custom-player/index.html","c82d47ffecec1cbbb96f13a12c31da31"],["/custom-preferences-screen/index.html","063c0bed1cbb789924235b5da99f2927"],["/custom-say-screen/index.html","18b22bf837e1ef1ceee5c4ea1a8b7469"],["/custom-style-button/index.html","3291721a2bd37b06ea5abd042f5d7f5b"],["/custom-style-position/index.html","9def62204e8bdd70b28c462da42cb667"],["/custom-style-prefix/index.html","34c34ee724445909f8141d7917f060e1"],["/custom-style-text/index.html","5d9a47af63485f3891fe8e9f0a30b51b"],["/custom-style-window/index.html","9aa03e61746313f615e9906434153d11"],["/custom-title-screen/index.html","9fa8e9729235af0bf4c753beb51a6506"],["/define-npcs/index.html","adb086f0b5c9610ddd7aa61fda8acb9c"],["/delete-save/index.html","02418e386c161e10df37ec1047c311cc"],["/dice-function/index.html","4af7a7d2d7864b5520cc8555afc47f2f"],["/disclaimer/index.html","2f82838135dd8f4cd4c3b382cc001e60"],["/display-immediately-all-dialogues/index.html","e36f82045967fa249a266d9912df3083"],["/display-real-time/index.html","8f673f860c6214e37f0ccd52449aefe4"],["/enter-name-screen/index.html","d610867118d147885ce6411d447e46fd"],["/export-game/index.html","24a5aeb96deb6a24be58101c9ccd5c5e"],["/faq/index.html","60ecbd52235ae031ac80503a7be30fce"],["/friends/index.html","d06cd15f5217f3358a5c97587c0da593"],["/gallery-template-assets/index.html","4acabcd86da4d69bb624c9bc84e24b5f"],["/gallery-template-default-ver/index.html","9d1045c7f302d617cb04d80018e96a14"],["/gallery/index.html","9f965a91cc6fddd421c78a45341a5551"],["/gallery/photo/bg/index.html","48278fe9d32051e130cd7a115cc2973a"],["/gallery/photo/gui/index.html","f69c6edf4497e62a74deecbb66026aaf"],["/game-only-text/index.html","1e42f90e352a1c57c54653ee802271b0"],["/generate-random-name/index.html","77d5edc0b6a5224fae19e7dd21c7e952"],["/gui-017/index.html","79542d05dee645236fd4a150f3f21dea"],["/gui-vertical-002/index.html","f0d36986a03c131a5f52765f1a80c327"],["/gui012/index.html","8f247b5f398550bda1878190582982b9"],["/gui018/index.html","18ee067e39565be603c5e2e30fb13004"],["/gui019/index.html","832e02995cabedd84aa793d90043f9ab"],["/gui020/index.html","9ff5722310eb046407ff8a43e5770d1b"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","f3454d36397d08621f11d8ba1a9a2ab1"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","2636db80197b174c3fc14c5aacb9a04b"],["/hide-textbox/index.html","fe06d37ad81f4007365fe2cb1fc7eafa"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","1629ac701c6392d2d4ecb98ce5ae6ad5"],["/images-tip-function/index.html","9378110609b466aca537ed48782f588c"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","e68ded1367b293ab16ebbf5394dbc525"],["/index.html","6b5c8298be39aec541c5ed995f1fc699"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","66a3eb6884071b9942ca14bcc26bc1d8"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","fa99cf21fcbdfca85fc3e9d59690633e"],["/items-sprites-effect/index.html","ac00a4a9633a718807231de3a0e0b74b"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","250bee942c7bd0905c8d30a0a29c052a"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","3e943e9ea56fdeb75596d1514158c0d4"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","99308558b951b44e76c5ca9771501703"],["/link/index.html","b6f72ac97147c45b47415dddd0ef443c"],["/login-reward/index.html","25449d1b2c500a549733538966a0eb6d"],["/main-menu-music/index.html","e77b25a8d92ffe8fc7c052fb0cc0f7a3"],["/make-butterfly-beautiful4/index.html","4de357ecdbfabf50d534ffe51811da79"],["/map-puzzle-system/index.html","29007d7b33a72750665174df126836a8"],["/maple-effect/index.html","46510851f5f7943b1e6929c496ae0064"],["/memberships-2/index.html","4b350cedbd8b5906411f5eb1b771c8a5"],["/memberships/index.html","d14dc54fbb4c8ffa84cba143508d7267"],["/multiple-language/index.html","5216f1cdaea238bbaae22f47f8811c8a"],["/name-input-assets/index.html","4598352c3ac419ede7711a4c67dd6046"],["/new-year-event-2023/index.html","6832bc5b119b326c28a003e64cbbe2d9"],["/newsletter/index.html","7cb934b7f6f76d3b79cb52a2ff281ced"],["/nsfw-limited/index.html","8d3dc05efcff1331a17cc45e650e5748"],["/null/index.html","8c695ba018290bf207d5ecd9fd19a1b8"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","6478ea3b1e5e75d3299f7ae164a001ea"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","ef3abb565b87c16cf1d5e77ecd55789c"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","ac4e4bdb4c0a4c55a2f38907c61a092b"],["/openchatai-renpy/index.html","140174c93a5c2d4284049d36c0b44229"],["/original/index.html","200e4af4d48d591ecb630294d74b2f1c"],["/page/2/index.html","1f2bc0cf4c316c34049bf91d95be3540"],["/page/3/index.html","10599fbe58b7149568070fa8350c035c"],["/page/4/index.html","9e04dfcebb260c0bf82640005a7af821"],["/page/5/index.html","878085fb60523d7bb988644b08d96a21"],["/page/6/index.html","72119d3edf2a02a52faff56265df4cc0"],["/page/7/index.html","b633fb8b70982952ca3837b2eb1fa6e5"],["/point-pop-up-assets/index.html","fedb9e0d4f3b36a082ab9741112349e5"],["/pop-point/index.html","24035e07f91bb3d20fdbf91ef2c2c840"],["/privacy-policy/index.html","ff1a50153288662c8de2a6047df06540"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","16e7469db9fa1c113b2d9a8b698f6b68"],["/random-number/index.html","fdd960e4e40bcd0a7c9c416106c56f18"],["/random.html","3a3d29cdbb2caf7374a1b7b12a12929f"],["/release-017/index.html","f308b3d8533e4d982bb25412ea0e2694"],["/remembering-choices/index.html","916e01ac6762756988fa429a94efbe5c"],["/renpy-basic/index.html","25f0d482c2052d168a4e42921309b5a4"],["/renpy-crash-glitch-effect/index.html","64552efb926b9ba235f5398ecf7574f9"],["/renpy-flip-image/index.html","1e56fb337fed5324b2aac66125882d80"],["/renpy-matrixcolor/index.html","191e5fd026d0f4592de91cf45dcdd305"],["/renpy-overlay/index.html","c8b33916c5dea045fe210beb5b078ea3"],["/renpy-review/index.html","682aa4916124963a9c513f0f2b44b883"],["/renpy-typing-effect/index.html","2a0f8f8d7772c1f094724c96e7b24c0a"],["/rpgmaker-assets-menu/index.html","eb13f774838a2d33fb1aee74f76bda89"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","77195488a41d058217a6dab3a3bc4540"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","e8618e32bdf7f3a8d51a9ffb9b72a83a"],["/sakura-tree-background/index.html","1e7d2413b715402b1fee6a03aafde53b"],["/selected-button-style/index.html","f03da76963fcf934b15fc78c279145f4"],["/service-worker.js","85c1b57c5122f7e77035e263d00eb3d1"],["/show-variable/index.html","e6fa417a9a987a7a642f9eed5ec970c5"],["/side-image/index.html","21459068ca6bacbb058b18b30893273d"],["/snow-effect/index.html","3a07d94712c276194c49ff8bbf68cb23"],["/speaking-animation/index.html","691efb365c9c3e1ea3a203e6ef55f436"],["/splashscreen/index.html","057fdfb7e508b92271c5491f786303ed"],["/suika2/index.html","45e89db96b4b7ef28bcfa56c0f1cc5b7"],["/sw-register.js","44c681814f71db1af4bdea3f3f497b20"],["/tags/Hexo-plugins/index.html","0ca64f1b5bc90c9b06ce1984ba7efc99"],["/tags/Light-VN/index.html","bd31864cc37d0ddc63ea789d35007ac5"],["/tags/acg-creator/index.html","8c95746ad5a7d32987f877ce593b26e8"],["/tags/ai/index.html","82717417c7dcdd3c12a48c364df22e3e"],["/tags/butterfly-beauty-diary/index.html","2eb4115b77388e4b04bc1efc370f5553"],["/tags/custom-hexo-theme-butterfly/index.html","bdd831f1546309edcddc943eb06a429a"],["/tags/custom-renpy-title/index.html","3ea050f59dd6e7efea6641f11ff9d2e7"],["/tags/dialogue/index.html","0f23be2e08dcff6286edcc9c1a72b2cb"],["/tags/effect/index.html","1fee7393e7b79da694db024d38a83b07"],["/tags/event/index.html","ec81fc7a7ac2ab937338c76ca8a4281a"],["/tags/hosting-own-website/index.html","bc577dcffff119c839a7fed69252b826"],["/tags/index.html","ef4d179669ed8e4d3c21f7ee01af2e1b"],["/tags/itch-io/index.html","a3d34d7ca48799efcf213d3f573871f0"],["/tags/light-vn-update/index.html","5974daba5a2c2ed1d0720f0184a57d6d"],["/tags/nvl-maker/index.html","6dce667afb6bba4843449bd14c93ea4e"],["/tags/player-related/index.html","9d99158351eb0c83001cb1a523c9b85b"],["/tags/pro-tutorial/index.html","172d31cd4aa3d4edfb8d85d6c4dbc39a"],["/tags/pro-tutorial/page/2/index.html","e5d317002441bf81cd9bd6a4babccbcc"],["/tags/pro-tutorial/page/3/index.html","03ed968bbe6847c33cdc8aabb1875e97"],["/tags/pro-tutorial/page/4/index.html","28c57ff58a54fb8ba08b3de9f04223ca"],["/tags/renpy/index.html","3f94b3f4b274f12811cff50db299a4c4"],["/tags/rpg-maker-custom-map/index.html","c203bb32b25fbdb45f819d2a66731d18"],["/tags/screen/index.html","27cffcb043d509b0d0f07d0385896c4b"],["/tags/special-function/index.html","1fe52271ae46b18c7bd6a96cbacf5556"],["/tags/suika2/index.html","d2cdfc8bd78154f8c7af78b76f93ed1d"],["/tags/tyranobuilder/index.html","8149210c78ef4e8423de5cd8bf70a55d"],["/tags/ui-assets/index.html","f7f733f6b71ddf8db5bc7e3e168b703d"],["/tags/update/index.html","38eb1becac727415f3a08ddf17fd0929"],["/tags/upload-game/index.html","6a148a6680ad1a12b9f5194679a95493"],["/tags/variable/index.html","7332a37fd1aa9ed1d3649c5125378c52"],["/tags/visual-novel-maker/index.html","7ba3ca0ca241a3f1eab2b4e80f99740a"],["/tags/webgal/index.html","957cbb1dc051b9a8034e5f2080cc5f39"],["/tags/封面製作/index.html","e03fd37b11ded9a8d2fbbeea91fe1abf"],["/tags/背景素材/index.html","0b2066eef47c667f0bf5d52d05ab5d59"],["/tags/隨機功能/index.html","462465b74556a151a4199cd5e7946e28"],["/test123/index.html","2b6cea6d8603046cbc83b88d61be130f"],["/textbutton/index.html","a5fa594d725d7e8d214857caeda7a8e6"],["/to-do-tutorial/index.html","67dd276ea9b65c6cebdbc487c68a08d9"],["/tools/index.html","5d0b19fd543cb0ad48213a4341e753a0"],["/tooltip-function/index.html","826484518bdf0ac52b88c63a881c0f9e"],["/transfer-to-hexo/index.html","5fb14944e7100f19b9f183aeb3e3c7b1"],["/tutorial-update-history/index.html","87b03f8544903afecddd6b4ca43a2cd8"],["/tyrano-name/index.html","1ab5bd53f7054e13438229910e8f8108"],["/tyranobuilder/index.html","71717df7dcd64db26fc13a7df92940bf"],["/undefined/index.html","e57d182514be69d401dce67ea6fa7508"],["/unskippable-video/index.html","49ba6399759d66a9635f89adb448372f"],["/update-20221211/index.html","083d268be70df8a7eedf69562c0575a6"],["/update-20221218/index.html","d5d05d443c206421933183f4066fbdf5"],["/upload-download-save/index.html","4c93c5f09b76183f8adda3e395221526"],["/upload-your-game-itch-io/index.html","d960eac8998dd79ff9dfadd92718d477"],["/use-list/index.html","f113d892693a423e0ab49e2464f1ef4c"],["/use-nvl-mode/index.html","58e18194c2e34ef9f9e8cefd38c8a40a"],["/useimage/index.html","077def06a117d036f805ede8810dad28"],["/variable-change-image/index.html","2786b6935033fddfe5b2ca7e5152b74a"],["/variable/index.html","1e6e4e2ec7a376f36aba53a50692710e"],["/vibration-function/index.html","1111259ccb8829cc3e6b21b58de6c568"],["/vnmaker/index.html","98086eff428f262ca2df08d13da4288d"],["/weather-effect-tutorial/index.html","d3f6b37ab8b4d9d64effdee8b406952f"],["/webgal/index.html","e3fbfaaa4ec574ae9f946127267ab36a"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
