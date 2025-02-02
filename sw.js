/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","4a02f020cf2d2233198da6fc42f8733a"],["/2024-future-plan/index.html","e7858e65aa879a8b84871111a6cde861"],["/2player-battle-system/index.html","19dd42eebdebb271f8e3bf8ed4805f0f"],["/404.html","f9d06802201de528025ef44f61f92e8c"],["/about/index.html","e70e3f85cdb545250006a8f4554f8b2a"],["/acg-creator/index.html","e376e9bebbd2c4d59b77d367bec24933"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","46b9d7c3abfe28913e24eec076a93e67"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","b567146db95bd048e13ee102c08c047c"],["/animated-title-main-menu/index.html","6d6640027e393ee9a86bd7a4ee7b649f"],["/animation-movie-cg-gallery-screen/index.html","95bedd0feb0c232713529bcf9a95c49f"],["/archives/2022/05/index.html","a33904a13a25894bab2999306ecad1f1"],["/archives/2022/06/index.html","f11667554f97712335ac1b8ba9908c05"],["/archives/2022/08/index.html","ece4fdc07f5488e65f94df20d49c24e2"],["/archives/2022/09/index.html","1a7764b2892d204d90728be56de8cec7"],["/archives/2022/10/index.html","4a4c96f84db64f48a8a925012c9be4c3"],["/archives/2022/11/index.html","433d8878cafaf6bc5189cdc189bca20e"],["/archives/2022/12/index.html","29bac24a2a1b1784a4640327eefaaf04"],["/archives/2022/12/page/2/index.html","e40feb8c8014d14a2c7cd414931018d4"],["/archives/2022/index.html","7754bf8eca01accdd8cd25e6ae42bb3d"],["/archives/2022/page/2/index.html","3a7d5f04fb33b7c7b84de65a54ac1cc5"],["/archives/2022/page/3/index.html","cae93aaff59de4dbbd3417ce9cbe700e"],["/archives/2023/01/index.html","e52f68888480cb50a99983003269df08"],["/archives/2023/02/index.html","e4ed39667945f09996cc6b21db27ae81"],["/archives/2023/03/index.html","e5cd9248e40390520905870f74515e1d"],["/archives/2023/04/index.html","890f67e493716ffaa8157dd72f80a0bf"],["/archives/2023/05/index.html","c9b72cef880705bb9fc381a549dcb77f"],["/archives/2023/06/index.html","c19fecc25593bd5f512035c4569d78f7"],["/archives/2023/07/index.html","1b47fbde898501560f0e2e3aeb519fdd"],["/archives/2023/08/index.html","9a90a1b000e47ea6e61502a39af5250d"],["/archives/2023/09/index.html","58fed330a2fefbb00bd044b021008bc9"],["/archives/2023/10/index.html","a6c949d857de6222ff6c64b28d9756e6"],["/archives/2023/11/index.html","22ec456276efcfb45e89d99c1153d887"],["/archives/2023/12/index.html","ec61e2933fa2d1a305e78d0cf790b8c5"],["/archives/2023/index.html","9ea04ea752e5c47abcad45254da412ac"],["/archives/2023/page/2/index.html","5e41fc939ba6e30c25b038ecba4cd6aa"],["/archives/2023/page/3/index.html","7855eb963067476ca8718b1e8e073bd8"],["/archives/2024/01/index.html","8a68a7f3ad77e4893d46cb80f7db9f4b"],["/archives/2024/02/index.html","98d685fa3e71db1f06ed54129d2ab863"],["/archives/2024/03/index.html","82cac564b60f37271be1dc9977ca9f28"],["/archives/2024/04/index.html","155751879178ffecee8bb45ce2ee3802"],["/archives/2024/05/index.html","755604d55415aaa0747f51e0d9e6e51c"],["/archives/2024/06/index.html","d3f2c309931da14d93ed15a369322c40"],["/archives/2024/07/index.html","86ef930cd164d9a0c62337984b4ef29e"],["/archives/2024/08/index.html","74c689228baaf2234002ab8654f7113d"],["/archives/2024/10/index.html","f23f9bd45220277d0599e3d491e7b67b"],["/archives/2024/11/index.html","6ea2e59c2a3703afad414de1cf549c7d"],["/archives/2024/12/index.html","5598e0cc99abd43b0df80f8ac6324d07"],["/archives/2024/index.html","b7d95705b7bfbc946b5b7ba4e2fb6bb7"],["/archives/2024/page/2/index.html","d4b1fc7b6341e0651c877d0263057af3"],["/archives/index.html","ed04243cd8ededd0456191ad89e45d8d"],["/archives/page/2/index.html","7396ad7bd14a8701a6a30ab73f735adb"],["/archives/page/3/index.html","73fa4368eaf5e8e98ea46cf560aba95c"],["/archives/page/4/index.html","9915bff2f0cda669967d652cf430a0fb"],["/archives/page/5/index.html","4b567fba61f6fe2986da07091ac8d92d"],["/archives/page/6/index.html","4b22b7e1f6a8a939b9c06a06dcea0183"],["/archives/page/7/index.html","e8ae984ed0ffbb8aeb090493d24aae28"],["/archives/page/8/index.html","17111498317b2223fb2610692673f0bd"],["/artitalk/index.html","c97f62fb90f7d9cffd263f8f11c63975"],["/battle-beautiful/index.html","2955b44e05908aca2badc113804d32f9"],["/blur-effect/index.html","59e9e0964491710ca9d87f506053f9cf"],["/butterfly-custom-tag/index.html","3992412006418dfe7ad33c1b384d5c66"],["/butterfly-plugins-faq/index.html","5faaaa23d98a26d7b1e3bda764dee3ce"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","bf7c1b1df50ed695ad2826756edcc51b"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","1a8295ae5b1fb4422bfdf00268c6a17f"],["/categories/announcement/index.html","d0c5accb6ad26ec6aa9f26a7eb93c04b"],["/categories/diary/index.html","52dfe684ee4e13d1b5b8409bc0490397"],["/categories/game-dev/game-engine/acg-creator/index.html","3cb391be1fe7769db7a290d224e93dd8"],["/categories/game-dev/game-engine/index.html","760aa76e5686d6974099c1b9498d64c7"],["/categories/game-dev/game-engine/lightvn/index.html","0cf710c7d5813202bc0f0bcc6fb65c0a"],["/categories/game-dev/game-engine/nvl-maker/index.html","92acef8613058ae7d5ea5433f088554a"],["/categories/game-dev/game-engine/page/2/index.html","b1eabe30f0b064d998283f02660a86a7"],["/categories/game-dev/game-engine/page/3/index.html","45896ba8a618f548a2cca15029b85016"],["/categories/game-dev/game-engine/page/4/index.html","08047157b7727bbbc59ea3717097d43a"],["/categories/game-dev/game-engine/page/5/index.html","5d9e38197e26c5920e85ab488602da45"],["/categories/game-dev/game-engine/page/6/index.html","05c145161db41d44e3e2ad2bf9e1b668"],["/categories/game-dev/game-engine/renpy/index.html","4dee5caab1a8dc4982b6b4a04edb1256"],["/categories/game-dev/game-engine/renpy/page/2/index.html","7bb473799294607008398986eab129fc"],["/categories/game-dev/game-engine/renpy/page/3/index.html","31706b5696201d8d2965615db8fedd3d"],["/categories/game-dev/game-engine/renpy/page/4/index.html","7cc1eabd0d775b07c2216ea2d81afa57"],["/categories/game-dev/game-engine/renpy/page/5/index.html","9c8dc34329d1fcdcd833f5eeec181fbe"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","5f326f21235707194e55b1d903ff416f"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","d683beadf230f8e0e6f471340497c451"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","a47a582927022ecb30177691a10baa3a"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","c04352560b469476a70ae2cf96bf2eb1"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","895e79b9d9bea7f8f53a315d72b0f06c"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","7317db914ba6c22c558192da9ac40643"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","c7d261dcea8034d53be7955b3cc179c7"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","46ee765424cde77f96027529aff15243"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","faad7aac0f602a546adecd04c18c5f33"],["/categories/game-dev/game-engine/rpgmaker/index.html","eef5f52385026b62f9de77189032f751"],["/categories/game-dev/game-engine/suika2/index.html","a8638c0eb51782c714bd928df525a083"],["/categories/game-dev/game-engine/tyranobuilder/index.html","0e1b43f8d7cece1e84460422cc0fc7f0"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","e8125298acf476be2e1ee657ba9c8e95"],["/categories/game-dev/game-engine/webgal/index.html","6a6e90a37e9bed564e3a5296c72f3c58"],["/categories/game-dev/index.html","b3e500e02a6220eccaa1056d04657977"],["/categories/game-dev/page/2/index.html","6f2ac68f0e57747337c4f59040adbfa5"],["/categories/game-dev/page/3/index.html","66ca5bebc9e323af7cb81cc8536cf96d"],["/categories/game-dev/page/4/index.html","b97f6ccaf5ac810e009aee4cc6f54370"],["/categories/game-dev/page/5/index.html","c97bdff726f1b0c9389c20576fea6871"],["/categories/game-dev/page/6/index.html","30be172d8936546d48243c350d99ae4a"],["/categories/hexo/index.html","7f00caf9c768c53f3b077b965ca0931b"],["/categories/index.html","acff3f3ece851c6c6812af92cb1bfaa5"],["/categories/material/index.html","bee70580e0f0a5413638bf930aa87dd9"],["/categories/update/index.html","6c7f2d488d48e5690d659d8314b03a68"],["/change-according-to-real-time/index.html","aef9cf453d9dc9aa600a25a35ee8c035"],["/change-character-info/index.html","c4e5950a2065b136a82aee2444238593"],["/change-title-after-first-time-viewing/index.html","6acf9439affcf99f8bd43dd30fc0c2d7"],["/change-title-based-on-event/index.html","102611a36c680e2189fb7d0981160694"],["/chapter-selection/index.html","d2d003e6789b9195b870a2be74e939b2"],["/character-interaction/index.html","bc2c435e6d7aa11d42dc3137f84a8224"],["/character-stats/index.html","59beae635ffcb7af0244ffa1fe60fc24"],["/chatbot/index.html","82f05bbcca1129cb021289b4d5e36cff"],["/choice-time/index.html","00618c728de209d5fff5b6dbf7561e33"],["/comments/index.html","eaa0d9f83e68978f2995a86c4d0579d4"],["/commission-info/index.html","ea730c30428653f4f4dd79c9212dcb81"],["/count-login-number/index.html","5aaf5239eb0aaf901d7e367808201ae9"],["/create-button-anywhere/index.html","ad041ba64a5cda66b51115a325d4b15d"],["/css/eurkon.css","9a4d14a16d6901983024c67e0f9a5d8d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","3998b3c3de67d2892e351fd46f65406e"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","0e95a642508da99f400ab9027ff177f9"],["/css/rightmenu.css","edb5a2638dbcb365f51d43b3e4313072"],["/css/siz.css","464bb8e00c7e6e4407af3e4ceb853103"],["/css/swiper.css","ee8eed6acbc9897dc8533042b96cb8fd"],["/css/swiperstyle.css","35e09cde757268eaa426d71ebb419360"],["/css/var.css","e139255d3fcda9bca64a365d9bed198a"],["/ctc/index.html","1e3ae4f9a588b0783f84cac4e546573b"],["/custom-credit-screen/index.html","4df1db4e487512a5fa70a5363ed7bf2a"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","e312f9a406d2f0d7ddaee3b48178da57"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","62eae3e58f80cc5d327779311e18f65a"],["/custom-gallery-cg-screen/index.html","8e664012ae8e2fdc735b56d17ca96d53"],["/custom-launcher/index.html","ca737141dcc36f38d40567e40ba24188"],["/custom-loading-screen/index.html","6406c76367fe59b0c9b4d62b425c149b"],["/custom-mouse/index.html","a2a40a281ca961f738c5ec0ab62f1867"],["/custom-music-room-screen/index.html","3dfeaca0229e58b934f1bdeaaf69f956"],["/custom-music-room-screen2/index.html","49d92ff2dc46680742f982f4a790d55e"],["/custom-nvl/index.html","64844368ba0dd04bb7ee3badb0659795"],["/custom-player/index.html","479916971ca1cc95d6004f80cc9a92bb"],["/custom-preferences-screen/index.html","142c58d96927ffb7766924a0399cbd70"],["/custom-say-screen/index.html","dd2983ca72f084742c3ef8035b35f239"],["/custom-scrollbar/index.html","dd9ae31e710c2c6a3413d0b4a61aaf61"],["/custom-style-bar/index.html","8322d4e814d7f00626e149846229552c"],["/custom-style-box/index.html","1a775c1b0793e66442a0a5df02fba1fa"],["/custom-style-button/index.html","577d291c546d80b0f79db7bf76c9b137"],["/custom-style-grid/index.html","4dae4cfbe26be18659c76d65e48939ea"],["/custom-style-position/index.html","ccf8ada4c711e9f6ad73d7882eb89d33"],["/custom-style-prefix/index.html","d854440b53fb3f82e7ed4b9a5bd44b6e"],["/custom-style-text/index.html","d41c5ebc37ba6eabbdc56c530adc9449"],["/custom-style-window/index.html","2edfb259f1e5293eeb45e47f75abe2a4"],["/custom-title-screen/index.html","0fc837b984f867a6ec956353ced43462"],["/define-npcs/index.html","e66b444c172d99baef7e27982b57665f"],["/delete-save/index.html","b444093e34053d075258d044ef17ee99"],["/dice-function/index.html","08b95cebd395fa5de8d632521a7dc943"],["/disclaimer/index.html","fb8b2da11c923e88625473b3db90823b"],["/display-immediately-all-dialogues/index.html","3bb3e70836ee8e8fbc0bb3f0fe1e21b4"],["/display-real-time/index.html","e541f92b39727403c61379c84fa23fe4"],["/en.refund-policy/index.html","979548d0b66026c451a53af4bd8e3953"],["/enter-name-screen/index.html","f63a5a746c954633b2560930cb6b9438"],["/export-game/index.html","829af16c759a31e8562f87cd8c362e3b"],["/faq/index.html","2fd24a839df70f6bf9bd05d0f0f933fb"],["/friends/index.html","59d61924468409c0a93e6531ae76717a"],["/gallery-template-assets/index.html","6de99c5f6acc9633e2cb36dfa132f5cb"],["/gallery-template-default-ver/index.html","31447243ce30210abf50ccdd7f7d4081"],["/gallery/index.html","4cea5124bb71f740064c744c1f57f278"],["/gallery/photo/bg/index.html","5627a40e6d9be50af9e27f2cc69b62b7"],["/gallery/photo/gui/index.html","ec99ff325b1bcf5108d728b45813ea69"],["/game-only-text/index.html","671ea93c8c070473f8bab1f29da78669"],["/generate-random-name/index.html","c41e4e30ea70335fe9a88e2c21e2aa05"],["/gui-017/index.html","05d01ad5dff6c2f46e768291a9c3273d"],["/gui-vertical-002/index.html","3eff98670479bfda1ec425c52782a4a9"],["/gui012/index.html","1c402742c74ecf98b4a45064b6e2e8af"],["/gui018/index.html","b988f37c2daa790bdc30b86f1504b62e"],["/gui019/index.html","4f98b1270195d569e422c44868eb1a20"],["/gui020/index.html","36881bab4f91e934b47776d58f5282c6"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","27eb77bdab473d2b7f81f2dc162bdb2a"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","dacd32dcba7090b078b342c6a4acc8af"],["/hide-quickmenu/index.html","b2b73b3d1ad9353f127a10845e497918"],["/hide-textbox/index.html","d3e723fb11ad83cfa202e8b5a8318a42"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","019e227fe308e85817fe5c79458db28f"],["/images-tip-function/index.html","fc7a926e83c5cccee21d0e4f343d1f92"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","87ab8325c62cf9c6cd7e383a68d90d99"],["/index.html","295d1d28d12044e014613d1c810b069b"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","649db8e033230d26448439b0ef6217e4"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","e24e30021326e05fe149b7b64a896d91"],["/items-sprites-effect/index.html","042dfe62bc7f397909bad5274a865b9f"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","9bdeb5e3bd81709d8d7189b75a06cfb5"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","258a9f1ea867c4e3bf1712c78a6d5f43"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","5dd08dd243b4a5d52d2a5db839f99a49"],["/link/index.html","050df0966c308ec1b790382aa9b04984"],["/login-reward/index.html","cd19808a1967abd0c4cf3fbfbc2a1e62"],["/long-press/index.html","980e7ff1cd5a6ff66a0b5f795a071b1b"],["/main-menu-music/index.html","8fad7a3fbb35ec356354a57e64db1cf2"],["/make-butterfly-beautiful4/index.html","e4372e3765aa60c785efc91f2aa6d2c7"],["/map-puzzle-system/index.html","a34b9e6c12d4e815cb29b889eb4038aa"],["/maple-effect/index.html","9a9e25250bdcffe6b9785625f991c94d"],["/memberships-2/index.html","590a734370b75436565a074e80fce758"],["/memberships/index.html","c2ceb79e583673e1650ea3641f87062a"],["/multiple-language/index.html","1f2cd2e2703379ce53964f73617c4bb6"],["/name-input-assets/index.html","8a04ecd441e7003d31d56d757afe4750"],["/new-year-event-2023/index.html","1cffd3dec8d93eb26c43afc15b932bda"],["/newsletter/index.html","c504ae5ddc690627e7d8b975eeab51e8"],["/nsfw-limited/index.html","ac245e12875ac1fcb78316091986645e"],["/null/index.html","a21d9726854f4584812f845db16cea08"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","4727a582a4edf80eb971fcfb096cfdae"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","df0074bb4fcaf036a92212d5f47e1d41"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","9d4f2e133f2be5a1f181d08aaa615e60"],["/openchatai-renpy/index.html","c2ab6bd77a8a7417c80bab86caee34c3"],["/original/index.html","2311205ec73ba2b827712d84cee84c20"],["/page/2/index.html","f8285de4ed606ee8024802b4aa158e50"],["/page/3/index.html","16f6d1a4d2788ade1165e62efb76350d"],["/page/4/index.html","c18f53f1f65f8148be61674e46c89a2b"],["/page/5/index.html","179287833e062d2ebda05359db73e1dc"],["/page/6/index.html","52cc0f022ff036244f4e6d32050671fe"],["/page/7/index.html","3a40806ee4961f9715357ba1ac2ec7b5"],["/page/8/index.html","06cdac31afe192655180cb3b540a8b19"],["/point-pop-up-assets/index.html","75b4322f105fd049902167bf7d6a9feb"],["/pop-point/index.html","40df17b0edf9fbc7878b91cfba449aca"],["/privacy-policy/index.html","adb613abb078dc604e4fa6c0121790db"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","50227eca301d8b8d24441022dda4266e"],["/random-number/index.html","1c2fff956d9f727fedea30fe7b8119e2"],["/random.html","0c517d23c941035c911f311ea21c42b8"],["/refund-policy/index.html","d535155d2d543782c975c64381cf6b9f"],["/release-017/index.html","00045c7cb107c9823c6107bc401c28f1"],["/remembering-choices/index.html","4b275c1803053d572803d99aaf9feaa1"],["/renpy-basic/index.html","0c6f7f909a6dd8750881ae14c7da4c59"],["/renpy-crash-glitch-effect/index.html","666c917f0a4987690be662b1ee011796"],["/renpy-flip-image/index.html","b5c1561abcca6354795c95cfd3117314"],["/renpy-matrixcolor/index.html","8af68f739e7b265b1528090084f78f29"],["/renpy-overlay/index.html","b3c54204dc1199bac19e33fbd2b21337"],["/renpy-review/index.html","157ea89caba6cc42370ebb6ec0b26ee9"],["/renpy-typing-effect/index.html","64b49b6766273290727223c312910976"],["/replay-cg-screen/index.html","e66695d5d546bbcd20f9f304b62aa405"],["/rpgmaker-assets-menu/index.html","ca1e86c46a32ab77e239d83a33b04c0c"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","8986a129db40cb4c5d290e3163a7ee10"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","d66f8f499d14520486a69a626707ed7d"],["/sakura-tree-background/index.html","91766224ba0a88d2ca11e400a9296742"],["/selected-button-style/index.html","8c3402c4d55bdeb4c02cc5483b5f1041"],["/service-worker.js","52901ecce0d562e1683efb9627e69f04"],["/show-variable/index.html","88a2a715347c3b2bd1987f6d15f51e64"],["/side-image/index.html","1f3a5b099658a1d41077c8b4f3cc61d4"],["/snow-effect/index.html","4fa030facb406915993f28bb198bce54"],["/speaking-animation/index.html","2a87d066c5caf14b61ca14dd9a924a2a"],["/splashscreen/index.html","382be47c5de4d9e18156f07d84847413"],["/suika2/index.html","83cacc8bfcb1da9ebe6e0e0a1608599a"],["/sw-register.js","1bd8b8ad66e82704c9838b805e4e1782"],["/switch-chapter/index.html","35bfb4eadbedb2efc4d7db12d0b82244"],["/tags/Hexo-plugins/index.html","677815c3bffbef18b51a1f76f9ad2b21"],["/tags/Light-VN/index.html","64aeb73b8fd1af0a1680d95d3927ba2e"],["/tags/acg-creator/index.html","8a7bff53bac5c71be814525a31068361"],["/tags/ai/index.html","7e92e66ec71cb7d97f856a5dfb7936d3"],["/tags/butterfly-beauty-diary/index.html","48b187e52b4b777e74e9a88b09457fbe"],["/tags/custom-hexo-theme-butterfly/index.html","637a95b60ae22173f2c1a1f28c45b681"],["/tags/custom-renpy-title/index.html","3ade5540df3afd7b4fee7de561fd3148"],["/tags/dialogue/index.html","95fff602489984d4c6c56fd8f254741f"],["/tags/effect/index.html","7dd0fbdd35cf225d187b076cbbf2a415"],["/tags/event/index.html","03d4eef8c35d7759e4d409268e5fad50"],["/tags/hosting-own-website/index.html","ed2bb2781c02823d65d9f67e91d5f6b7"],["/tags/index.html","b60fe13f25089abdc206f45910e47afb"],["/tags/itch-io/index.html","efcef25141048b06abe046c05e7c4cff"],["/tags/light-vn-update/index.html","48cbefb2729a522ae35c524b589ddcd0"],["/tags/nvl-maker/index.html","407c9ccbc9678cc9e116e1689ba90d86"],["/tags/player-related/index.html","2e1ef5bd45ea87539a0c96a9ed34afd6"],["/tags/pro-tutorial/index.html","d0c847af027dcb9aab55dec0e099f8d1"],["/tags/pro-tutorial/page/2/index.html","5a897803f7de992b123af6ad21ac9c1b"],["/tags/pro-tutorial/page/3/index.html","ec57c52b256f35ac1b5d237333be358b"],["/tags/pro-tutorial/page/4/index.html","020c3d6da5be5eddb6d915c6a88fe67b"],["/tags/pro-tutorial/page/5/index.html","40c0c3b2e8d37b5b5ac3074f48f4799f"],["/tags/renpy/index.html","3e66c462acb744243d31b5b79f3f747c"],["/tags/rpg-maker-custom-map/index.html","f4be5a7731c7e6479ff5e5a51748b6c2"],["/tags/screen/index.html","a9f893be52fb8648decf01c65c0ae13b"],["/tags/special-function/index.html","22af64d4cd0d3db8b5a63249ff93ac63"],["/tags/suika2/index.html","17a77ca7567fa87a6ecbc523a010e000"],["/tags/terms/index.html","9abe1dbb1716982a0627d81563c40818"],["/tags/tyranobuilder/index.html","042784f55c653807e35ebe67aa5cd068"],["/tags/ui-assets/index.html","0e0819094b91591b82adc672879db938"],["/tags/update/index.html","304679b390aa40713bc09d89440b7f09"],["/tags/upload-game/index.html","d5ac79a1c2ccc997558af8eef9d2f0ed"],["/tags/variable/index.html","5e073865d41dffc8e9bfa8c6760bf4a6"],["/tags/visual-novel-maker/index.html","ba3e1b06dc486aa08c72bc5959fcb8c6"],["/tags/webgal/index.html","571b35d45cdf6fdb192d32975b7afd4e"],["/tags/封面製作/index.html","3ae05190ed08aeec954132f2053f4170"],["/tags/背景素材/index.html","2c4d1345d019c2122a50205a0d659174"],["/tags/隨機功能/index.html","86c2ff91b43e926238a702b9262549a9"],["/test123/index.html","a528bd760d6f93abc9b01170a8bd4e0f"],["/textbutton/index.html","cf5bda5996484c6a60c853b8329853fb"],["/to-do-tutorial/index.html","c7be6c3e2a94863630d25e0d5b7d58fd"],["/tools/index.html","dc61d4b701fb690677584327f57778fc"],["/tooltip-function/index.html","e5e5a718879c3a019ce05e46d6478cf6"],["/transfer-to-hexo/index.html","c237ef0112f38621f5ec2167cadd450d"],["/tutorial-update-history/index.html","713e2c028802bfdade76399237923830"],["/tyrano-name/index.html","bd9edd9cf437fba715d10dd844369ae5"],["/tyranobuilder/index.html","fd102f0750385bfecb14ab31a4b553e4"],["/undefined/index.html","a1cb0a6d1de127b5281b392bc38e1e6d"],["/unskippable-video/index.html","8418522fa5b63856ba5f7fdd263afdd4"],["/update-20221211/index.html","a61a32aa60ac83ad6a6a91f08eced68b"],["/update-20221218/index.html","fc25690c58905af800dc03e0e0d5f715"],["/upload-download-save/index.html","db44ed36d9b1048aabdb227bc4c41045"],["/upload-your-game-itch-io/index.html","3e7f04d5bd3cdf0d1c913eea0598506b"],["/use-list/index.html","4460d7875b9362fa146b22b65a243e5e"],["/use-nvl-mode/index.html","3169323582a4657652a50e3e0329953f"],["/useimage/index.html","5ca037dc3e57996bfefa4f8628b5a82a"],["/variable-change-image/index.html","753bc7f109929cf26e4f674c381642f3"],["/variable/index.html","3d40893b6f311838829aae6f156a1911"],["/vibration-function/index.html","cd28f54d556bfa5ec80019a8feaba0e9"],["/vnmaker/index.html","375f1dc4b2f1c0c7ec4d5b419779b9eb"],["/weather-effect-tutorial/index.html","b2cc8cae139aaaf4b6c6211b10a4a2db"],["/webgal/index.html","499a2a8a4ce0e2616c156fa31ce69c9a"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
