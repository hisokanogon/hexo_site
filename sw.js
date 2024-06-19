/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","0e6fab277ae150496172a43a19df8cd8"],["/2024-future-plan/index.html","3785da69beb7476b3039a6736fae013a"],["/2player-battle-system/index.html","3f088f5df6406a3746b1b9a5ca5868f5"],["/404.html","fea02007ef1e6a845a74dde927675354"],["/about/index.html","4ed06fff15d71ad2f9805d5cf4982b5d"],["/acg-creator/index.html","92083967df0313c792a2833ef4858e8e"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","4e44d795e921696dcbde71684cc02152"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","534a04382976a6b7c25396f644f1e06f"],["/animated-title-main-menu/index.html","a755a8d7a20181c34994528fbfd0c20b"],["/archives/2022/05/index.html","e89ad671f7be31ba1724fcd6be005dd8"],["/archives/2022/06/index.html","fb3d15746f16cbb3cfdac22c481b9131"],["/archives/2022/08/index.html","b9dc5869e8d099a78fb68a439b12cb51"],["/archives/2022/09/index.html","350a161301f58b6774e6ecfbfae5fccf"],["/archives/2022/10/index.html","4f9da8cf88f148c5a1ab7476439d6ec4"],["/archives/2022/11/index.html","986f098d00dcf5a9ffa58daa386b64f7"],["/archives/2022/12/index.html","6a8854eb98b71c2ecd83cef9cfee8e19"],["/archives/2022/12/page/2/index.html","9b4896ebcdb2de43a17d3a2435d0aa3e"],["/archives/2022/index.html","c4f1300031072b72b4bbf45234406dd6"],["/archives/2022/page/2/index.html","4bb1665a70a8361385ce41e7e62f7c92"],["/archives/2022/page/3/index.html","4ed72e84dd4b7e99273013c16064a94c"],["/archives/2023/01/index.html","1a7f9132ca9ba01d71c6daef9de7ad47"],["/archives/2023/02/index.html","9e02bd98857311c45341042c28eb2542"],["/archives/2023/03/index.html","f5ff2a154c885dce25077e9d522b4c17"],["/archives/2023/04/index.html","b2fd95c50fbab876e17435066a94f074"],["/archives/2023/05/index.html","b1653c4f97b76036e9f944ff8d7ed2c3"],["/archives/2023/06/index.html","33b8114c18e5de0fc1570ec68fd699b7"],["/archives/2023/07/index.html","2d6cbf5efa9717aab50564c195d39ddb"],["/archives/2023/08/index.html","b3f99f8ac336575d88fa2220a1cc4879"],["/archives/2023/09/index.html","635764b8170b336543077b149abf0f71"],["/archives/2023/10/index.html","f06c953227b9b7a92e9c36b83afe7793"],["/archives/2023/11/index.html","831556e5497f916d9b4b86ce9d93b142"],["/archives/2023/12/index.html","b5d19208fa7634a63096959891c021d4"],["/archives/2023/index.html","beac5e1de55161047e552c4b5986e3df"],["/archives/2023/page/2/index.html","4560f85ff805c84dab2ddd78c32af97e"],["/archives/2023/page/3/index.html","83fdfa5a0aeb92969da731bfc9473002"],["/archives/2024/01/index.html","0957d0e220ba4299fb69fbb9a2f39779"],["/archives/2024/02/index.html","62e197761334d1bef3e9af628d3bf4bc"],["/archives/2024/03/index.html","4ac97d0a3a5030a438c3e5399451ba2f"],["/archives/2024/04/index.html","d006b9eaf2f651832791c281dc90227a"],["/archives/2024/05/index.html","70d21d89cae33a9d46a604b2ff484b30"],["/archives/2024/06/index.html","55d82e6719b4b297a3f9a498aa09ef52"],["/archives/2024/index.html","ced24b989deaeb4e5f88431235ced7b3"],["/archives/index.html","52f473d1f2e4589c31dee41ca3f19771"],["/archives/page/2/index.html","f74d15a9d27d06592bd60b63ee77f6a7"],["/archives/page/3/index.html","9175274959f7ae91255d57bcac015206"],["/archives/page/4/index.html","b589d93abdb5e4b07838ad4da544b2fd"],["/archives/page/5/index.html","b3bf4dbb527d745b4b64a87d7946e176"],["/archives/page/6/index.html","38d3802f26a33e50d4b12ee3b7544424"],["/archives/page/7/index.html","c55762f34876925979e36838c85f03f3"],["/artitalk/index.html","fd976c4d349a999a63ac81fccc329914"],["/battle-beautiful/index.html","b8c4599a7a6896043f6dc08d8a8ab704"],["/blur-effect/index.html","8a96e2629728255f9b33b439db60de24"],["/butterfly-custom-tag/index.html","a89db86de8056b326d28303ca3c989b5"],["/butterfly-plugins-faq/index.html","d50a9ffbd88e6205fc707f8b2d9aa8ed"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","fe10e02460fcae3cf616fa436054f8ec"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","ee07917c34b93dfc28cafdb2688fc69f"],["/categories/announcement/index.html","4ae3d45498d5d28b72fd5beae01e07ee"],["/categories/diary/index.html","ce2ab4b9bd1b1f97a3487b930323198c"],["/categories/game-dev/game-engine/acg-creator/index.html","ef8e30d1a1389e3b97cf887193a254ed"],["/categories/game-dev/game-engine/index.html","4ca48a03c40c701e3a264d6fef249c92"],["/categories/game-dev/game-engine/lightvn/index.html","0fe680ef3e195f9dda259715a99398c1"],["/categories/game-dev/game-engine/nvl-maker/index.html","ed0b67515d299b6ea4f06109e3c7736c"],["/categories/game-dev/game-engine/page/2/index.html","99cc5980e9a74ab3c55536164e09e2ff"],["/categories/game-dev/game-engine/page/3/index.html","7bf5fd0441e9464bd5065a688639dca2"],["/categories/game-dev/game-engine/page/4/index.html","c2983f61590e9884f80d0539b0e8e2e5"],["/categories/game-dev/game-engine/page/5/index.html","5c643300b1c22d30f7512b9b136c86b7"],["/categories/game-dev/game-engine/renpy/index.html","2ce660d33fe072e170b804a5baa5fd0c"],["/categories/game-dev/game-engine/renpy/page/2/index.html","b270928e9fe89935b680453f99b2a26d"],["/categories/game-dev/game-engine/renpy/page/3/index.html","b4c4de4f504720bb1e1b56e4010edce3"],["/categories/game-dev/game-engine/renpy/page/4/index.html","b54a74d410ad274dbe4580a0f11479d4"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","011e1f8169d545c71a2db7ee9ebd035f"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","306486fd512e56984b4e3bdf33d2eb51"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","da514a674a8c6a89fd49e1aaab96d7ec"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","f998f4553e9c11d6ba95e9ac3a686fe3"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","36de6d21814752febe44e6046a6af88e"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","99d101171008cbdb157a1c5f9ee8807f"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","017abfaf7fecb13b8ed1eb0b76d333f3"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","e66e176575e9186cad4d7f01f03ae646"],["/categories/game-dev/game-engine/rpgmaker/index.html","635f6403b1937a003a972096cc3fdacd"],["/categories/game-dev/game-engine/suika2/index.html","00268822b1fc1439609f0964bc2f47f2"],["/categories/game-dev/game-engine/tyranobuilder/index.html","7815a27a39232a119d8145e094b03224"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","e4d13ea59c60516a33a33e3efc6545b9"],["/categories/game-dev/game-engine/webgal/index.html","fd84fb1a975af39a987c2be5a71f298c"],["/categories/game-dev/index.html","3228c47ea007d49e6986ac2cf50f3154"],["/categories/game-dev/page/2/index.html","30e1b7835613b17355269141dc535cfb"],["/categories/game-dev/page/3/index.html","647c52ee5493bb0eccc28fe0230f4e81"],["/categories/game-dev/page/4/index.html","650e5039dd19e9208d59216cc59b4176"],["/categories/game-dev/page/5/index.html","02c6e9badaf48b619c7b3c212c6811f2"],["/categories/hexo/index.html","9853f9eef28e07f289ac1f068ce951d3"],["/categories/index.html","3465495904c4b96de00c7a7175d4daed"],["/categories/material/index.html","f7238ee87714fa802501e35fd407f67d"],["/categories/update/index.html","b88e7ab160bd00bc2b717dc67172609b"],["/change-according-to-real-time/index.html","d3f639ff1a905c89376bc742df23da51"],["/change-character-info/index.html","2d0736054de4ecd59851231a5fa76bf5"],["/change-title-after-first-time-viewing/index.html","71015198c120b3f0466d2f1ef35a5803"],["/change-title-based-on-event/index.html","4e32d48830c99549fedbf722bda275b7"],["/character-interaction/index.html","47cfeb206e1e7c56774394e7a2e8b31e"],["/character-stats/index.html","bc136d8135dd28e8f625a500925eca98"],["/chatbot/index.html","d3fe5be00f5bcc845ac545c6483730fb"],["/choice-time/index.html","c92f1c9d130810d98b3a5756d5349590"],["/comments/index.html","975db44fd0773a82bc3556c6db36e015"],["/commission-info/index.html","3fa4603c8a4e303112ef0cb6d02bdc67"],["/count-login-number/index.html","e49d469bf488dc82e159a58c1c830439"],["/create-button-anywhere/index.html","f949c2086d275f824ee347ceba7eaf48"],["/css/eurkon.css","2641d2533378b225b507b79ea5b610b8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","46484116512bce13ee04cfce30977c80"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","ba77318556eb36ae8ca64da289b01973"],["/css/rightmenu.css","aed48a490ad80926496bf896b448a3d4"],["/css/siz.css","f0cb1b1182bfa4b8c6c7f77195589b83"],["/css/swiper.css","984ef0fc4e490b4c9ddde9a2d8242353"],["/css/swiperstyle.css","1fa2331761b353be5224a2c450cc8073"],["/css/var.css","6de4d31a3985d566559d3fa7d01efa5a"],["/ctc/index.html","582d1a79efa84eff3f9c6f3061fdfc94"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","73860a4cedca3fbf419060c0762d6bf9"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","e92a6fdb18d8f2106ef8229796e718e8"],["/custom-gallery-cg-screen/index.html","c81d576ec5a07bf07f21d693a66538f9"],["/custom-launcher/index.html","ba1d2a513eefc7d1f4b03db307466b40"],["/custom-loading-screen/index.html","d185f1e1bc13fed49d3c641de09301cd"],["/custom-mouse/index.html","8699b3be4812ab8143ab2b9cb808152e"],["/custom-music-room-screen/index.html","18e96f3884f783580766ca41242ecd5c"],["/custom-music-room-screen2/index.html","9ad8c8f956078f7d734cd591b0474293"],["/custom-nvl/index.html","188b12b76501b0307d04f8536749f927"],["/custom-player/index.html","efcdd47a5973d3d8f5ad95f7a7195b47"],["/custom-preferences-screen/index.html","c63bb4a4c75c7808b2c75bf6336aa241"],["/custom-say-screen/index.html","4fd1cecaf41b7a3a9457e09a2b4f4952"],["/custom-title-screen/index.html","231232747bcf54e3eebf8ba3f594361a"],["/define-npcs/index.html","ca743294b6395f18c021faf4b01f662d"],["/delete-save/index.html","034293785e279cc21d434f258ced5713"],["/dice-function/index.html","82b9bfd2cad16e5d07a30c18701c567e"],["/disclaimer/index.html","11780d89a6071c3492573ff411d53333"],["/display-immediately-all-dialogues/index.html","d201a3f37eca54effdc3192c28f2ef93"],["/display-real-time/index.html","0a7eb5042791117634f696681326fc8f"],["/enter-name-screen/index.html","eeaa4dd65293bd73a8c426dcb792eaca"],["/export-game/index.html","44fb7d05856822d7005cf220e32997ee"],["/faq/index.html","4dab1ca94d77ad5d7919d4dc13d5eb16"],["/friends/index.html","ddd66959f9f9652b4fcd23642a1e83ee"],["/gallery-template-assets/index.html","0fb62fa9e32e59b8d64305b172fa90f5"],["/gallery-template-default-ver/index.html","392481fe58702a7f33b81c2badbef344"],["/gallery/index.html","be7ba388a5d9f6d58aeae09d75395f94"],["/gallery/photo/bg/index.html","1cecdadc39d2ac29944cec99d606e948"],["/gallery/photo/gui/index.html","4e672d83d2049ea4eaf629d7e06d3af8"],["/game-only-text/index.html","2be8ec6cb65ad81341f9255133e097f9"],["/generate-random-name/index.html","4b11de450901bd8b5f1075d6c533130f"],["/gui-017/index.html","0275d8ba81cb3322220cadfe897ffb51"],["/gui-vertical-002/index.html","3d4a627916db2a1bd3b7f0fa3daf4d5b"],["/gui012/index.html","d200db16bfe663030f44adbefcf2942c"],["/gui018/index.html","b5d17d25fe791f1882ae776f37a6ab5e"],["/gui019/index.html","7aee648d74ab2ec9aba80e5b8db5a028"],["/gui020/index.html","2a54db062ee223995be21e8bda88c3c2"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","7813bcc01bec526205323cbbffd0dca7"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","d31518c3659cbb2f3a87c2c8f1f53e2d"],["/hide-textbox/index.html","0d62a5b9b47cb42d02ef76a18497e8a2"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a4102c54436418ebd1b17f808fa04b43"],["/images-tip-function/index.html","c337930d240eb3024954cc9dc603507b"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","ab2268af58c4bc0f3dbe3d33f7c850d9"],["/index.html","80cbf37761a486c514d9d4e86bde148e"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","adaa93529297da1d40352709e1940e5d"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","d07f83d538abbfb969e4bc7b79323c68"],["/items-sprites-effect/index.html","412e7d99357daf45fc99dc371f57f9bc"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","6d6abdd0ed3bc372fc8dbe73a9a5cf19"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","beb6c5275616228ad5ae2a34bbaab78a"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","a0a7e1c20545a01c9372ccb6841d7e4a"],["/link/index.html","f2b4a638ef324448b7bbc43e582e4a87"],["/login-reward/index.html","8a10a4f8dc4eafebe575f848d8dc6307"],["/main-menu-music/index.html","d2ffb42f0901188e1236a24faecebac2"],["/make-butterfly-beautiful4/index.html","d01d30f38aa4e940718935cb65d02150"],["/map-puzzle-system/index.html","622d5290563f05175dbc2dfc14651be7"],["/maple-effect/index.html","7ecaaefc1f8ed80498218d883be2b0de"],["/memberships-2/index.html","6c14163f4f7b4fa39c8730ca16b407af"],["/memberships/index.html","faa3ecad7a9c1a137533ca783e7afdba"],["/multiple-language/index.html","2e892d810270ffc57861faadfc80b85c"],["/name-input-assets/index.html","19d7786743d87a1c8728aaecb29af9ad"],["/new-year-event-2023/index.html","ebe992fd98709ffe0069031a30a65b91"],["/newsletter/index.html","6d0af9a6c70784853b19020f139a083c"],["/nsfw-limited/index.html","1c3088f009305704c21068cd568c066a"],["/null/index.html","6d81847a158de1947694a40f7788875b"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","5aff18f6e9bd0d65e64c6058ff298a00"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","16e7a6367de2a02b3ae0114b381debd1"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","b200e6ebbeab316b259d7e15987555d9"],["/openchatai-renpy/index.html","bcfa82698c0f995e7c355362367375ad"],["/original/index.html","1a491f0cf2d437b758bcb7204f0d9f09"],["/page/2/index.html","7ccf646cc072847affc62d40cc5ad944"],["/page/3/index.html","09a68ef8ccd09b32d4e860faa0b0befe"],["/page/4/index.html","e104de90c7398b683483dfd83513f662"],["/page/5/index.html","a1961cf3ec8217f88e77454288404586"],["/page/6/index.html","e5973d432ba0fa01b271244d9f8138a7"],["/page/7/index.html","b21a5c3cdd8e3e90ec3694e8f6ae3cc9"],["/point-pop-up-assets/index.html","2a9a00c0c3f710e9d14a0992cb68ab64"],["/pop-point/index.html","40fc10d3c79db8812e62a219dbd65604"],["/privacy-policy/index.html","dfc50985e0ae4b03f550915154bbd520"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","84a292c4f46666d7a172d483c5fc1efa"],["/random-number/index.html","09f6534d33015884404968f30bdfdd77"],["/random.html","fad43ba00984ea1a12af47e60772fb43"],["/release-017/index.html","b2290a960dd0716c7e799ade4a3f6cb7"],["/remembering-choices/index.html","e4ed3e88c4bc54264a8569dd250ce0b7"],["/renpy-basic/index.html","c0dc80aecae147c554e7353e6554d10e"],["/renpy-crash-glitch-effect/index.html","a15e46f9b26439fe1017be235d1d7d2b"],["/renpy-flip-image/index.html","6955153e240dea020f722eb7552f63aa"],["/renpy-matrixcolor/index.html","6ac129316c1512ed392075eabf11f7ba"],["/renpy-overlay/index.html","51637031a2cef49a7cd47c4831970137"],["/renpy-review/index.html","4afdd60e4e926c0b04224d55cfa7881f"],["/renpy-typing-effect/index.html","60dd3807a12a41bfa00ea3ccdd997598"],["/rpgmaker-assets-menu/index.html","5b6d31feb5d0343215713cc81845be48"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","d37a45063240709fc34c86012bafb96c"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","b49c9ae23b190a35aac50c331ebe7b4b"],["/sakura-tree-background/index.html","36e631b9adc912ed7f1f655b3072d25b"],["/selected-button-style/index.html","93e03ccc474e698cc452ee06e7026136"],["/service-worker.js","0c9496114b34475e448d736db1ffcc81"],["/show-variable/index.html","92c9e82d588f94452333dd321ff549ea"],["/side-image/index.html","c7faf4bdec84f0afe5d64b35f22f8d85"],["/snow-effect/index.html","09915c5277114dfc4834e8b503422d6a"],["/speaking-animation/index.html","0b153875ade3d349b44908c0ff8ff9d1"],["/splashscreen/index.html","39c727fb72a079aad68d6f469e2eadf5"],["/suika2/index.html","12ac36d995e9f4c83c91796e8281a404"],["/sw-register.js","f563cdcb3e234b48be1defd392660813"],["/tags/Hexo-plugins/index.html","ffaf73e63595e90babbcd4192ff4575d"],["/tags/Light-VN/index.html","a5ce136b586aa3d489a2536f3242eb6d"],["/tags/acg-creator/index.html","f408cb632361ab4a01e8fbcacae0ac03"],["/tags/ai/index.html","32f4ad777d38e7214e9542c472264616"],["/tags/butterfly-beauty-diary/index.html","1ef24d4a01e9a9681640a09bb5a50ccc"],["/tags/custom-hexo-theme-butterfly/index.html","4068cd2974b22cdcd6411944a77cedaa"],["/tags/custom-renpy-title/index.html","252557349f6d5d186e28f17a5732f16b"],["/tags/dialogue/index.html","758909601e7672b50db598abe1db687b"],["/tags/effect/index.html","38e71ddd6f41538b343acd2d8fd99874"],["/tags/event/index.html","7fa2a7ce7c336ab8392b373382fda113"],["/tags/hosting-own-website/index.html","f29d15bff2f6a8eee9fa0f89254908ef"],["/tags/index.html","946bc3703539bb1b07836489827fdd9f"],["/tags/itch-io/index.html","73f7d4181072d056d35ca3375d87e6db"],["/tags/light-vn-update/index.html","2df54878d5ea46de2c16a710c53014f7"],["/tags/nvl-maker/index.html","d4e464aa9f02da5c81db6bd0f6ef2b39"],["/tags/player-related/index.html","0312d9e901622ecf5915b0fb2a77999e"],["/tags/pro-tutorial/index.html","c0493f6b777ef59275a23ff0b6133b51"],["/tags/pro-tutorial/page/2/index.html","53396bdf49ff7fcd637c4c7813a86dbc"],["/tags/pro-tutorial/page/3/index.html","7f7ccadc547ee360c263516dfa9aa280"],["/tags/pro-tutorial/page/4/index.html","e0a43338edf6089025aeb6be7c83c442"],["/tags/renpy/index.html","d2701e9b894de28d4050677c8d39e3f2"],["/tags/rpg-maker-custom-map/index.html","5085f9c00869ccfe9c469d6b5f8b4b69"],["/tags/screen/index.html","a2e9165921596dd9994eb323445ce592"],["/tags/special-function/index.html","0c996a517bdffe97a8d7f2088145f817"],["/tags/suika2/index.html","c9f900e0926eb7d8d88b3c75699b579d"],["/tags/tyranobuilder/index.html","ee3299785c34b3b9c254607ac88f0266"],["/tags/ui-assets/index.html","7e65859e7c5554bfeb77b543d98da57f"],["/tags/update/index.html","6c07d4038eb07d5d50a47fbe117cde8e"],["/tags/upload-game/index.html","66e022af184f22e65caeeefeff500f54"],["/tags/variable/index.html","53b4ba9c0f5bbccf4d36a044725f2183"],["/tags/visual-novel-maker/index.html","5d36c92368e3c8d25588bb9c427cee3a"],["/tags/webgal/index.html","53719440666dd39fd324dfcbbc93cfda"],["/tags/封面製作/index.html","83ca88a3ace3f19109fdb03eec609fa7"],["/tags/背景素材/index.html","22c7032ad567e0f218eebad094e6868d"],["/tags/隨機功能/index.html","d4ab41e0c73c7589284ea2be23a5bc3b"],["/test123/index.html","8b504347ecaa5880646916ef481d46d5"],["/textbutton/index.html","75f9ef870c32a79e2ba3babaea8a8752"],["/to-do-tutorial/index.html","5a221b5abf43a67d5dbf87ea94271c2f"],["/tools/index.html","059b23cfefcd917af41fe5dbe0a889f0"],["/tooltip-function/index.html","4db9587e4ec24894844eae3c1470cc1a"],["/transfer-to-hexo/index.html","8e87fe53cfea18fd4b4be92fda4624a5"],["/tutorial-update-history/index.html","47bba7279d72857275a17808073c450d"],["/tyrano-name/index.html","ec2be6b92608af1a5cbe22b563885768"],["/tyranobuilder/index.html","1f9e99e1f75937968bfd152ef5c40215"],["/undefined/index.html","80c1907461c65555ce7297eac27399ae"],["/unskippable-video/index.html","d74be3c93a946fa4b69d2744879df59b"],["/update-20221211/index.html","f8d2f576169c5da530839270d75ec37f"],["/update-20221218/index.html","81eda857416b01b278037a6048d279ec"],["/upload-download-save/index.html","b07766f44fb1496b0878159067a225ba"],["/upload-your-game-itch-io/index.html","fa777f9ff1669603a9a737efad22e6d3"],["/use-list/index.html","83a03a076eeeeed6c869a2993a34842e"],["/use-nvl-mode/index.html","4b67d86e539861dd4152f72caf46e166"],["/useimage/index.html","58d70cf836fcffcc7d57372218e42f55"],["/variable-change-image/index.html","52e3dd05e9b1a20476ba357cc3579764"],["/variable/index.html","43f6c0b861ada6ea28b7beed7e847a8b"],["/vibration-function/index.html","fcdcc395347835d6b5a3cc1fce31d773"],["/vnmaker/index.html","39276600fc3f222e03770a16fec860a2"],["/weather-effect-tutorial/index.html","e37f4bf39ac45491d7d706d5eb1d98f4"],["/webgal/index.html","7c74143961224515102b9c04f145dfe9"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
