/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","1e532cbe9c5526fb45ef756ff972d0b0"],["/2player-battle-system/index.html","52dd2bbc134f35f8188478097500c987"],["/404.html","ef0ec76b37687db4549ffc8c83249b57"],["/about/index.html","20f092a5e0c1e351901e110042a644d6"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","01a3bd1ad8b2d780cb9262332ea5e0aa"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","5e056a3cf178a4866fe8c1372546e79e"],["/animated-title-main-menu/index.html","bae8e11f777a7909b13287d614e67fce"],["/archives/2022/05/index.html","822b178c6620a5728dfaccb72ccc9fca"],["/archives/2022/06/index.html","e9d92f3bede4037675ae530e5f7f32ce"],["/archives/2022/08/index.html","8cd97138885e955533b06f71b1418002"],["/archives/2022/09/index.html","b0ca685365d750f4932159be280b4349"],["/archives/2022/10/index.html","5b2801dc78823b24be8f436e98e4d972"],["/archives/2022/11/index.html","41f20d9b46edb77e322b2e104d521c2b"],["/archives/2022/12/index.html","400b0ffbb29e9f71d04739af2d1d4507"],["/archives/2022/12/page/2/index.html","d769efd69b5f2fd22d019df0d80c9bdc"],["/archives/2022/index.html","96ef7428dd9f90b7d0054d2ab35f67b4"],["/archives/2022/page/2/index.html","61c05933351c54efbe907420eda78302"],["/archives/2022/page/3/index.html","f1b1bc4c0b92a7a308e73b3c435da203"],["/archives/2023/01/index.html","7e7ee379dd9f746a926d37b8065355a6"],["/archives/2023/02/index.html","8c5aa1e3bf8226a27a3e5b264067b698"],["/archives/2023/index.html","c3af032dd15520ced6177a53f6c19cb0"],["/archives/index.html","e51e698a16d08056ef3f5f726682a934"],["/archives/page/2/index.html","7a9fd599b1ab6cf2eb3e71fe79da9270"],["/archives/page/3/index.html","50b2d8b831d083acd3b46e32b7cd616e"],["/archives/page/4/index.html","ae6620599ed770cdb292371db058479c"],["/artitalk/index.html","167dcd179921b23348bdf5a73ae7e558"],["/butterfly-custom-tag/index.html","03637a6e275ce6144eddec9915175e8b"],["/butterfly-plugins-faq/index.html","ca0f333c2c32926397d417c348cc567f"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","cb44bd81a2cbe61633b44f26925e4660"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","1157759981648f7d3659328a5abdc7a5"],["/categories/announcement/index.html","2102040fe76ed49192c0fd445d3c8ca2"],["/categories/diary/index.html","9ae2e435f01f97f04b6c637187c36bdc"],["/categories/game-dev/game-engine/index.html","b471cd92f3f7f57ac3c7188a37deb41c"],["/categories/game-dev/game-engine/lightvn/index.html","5bc172491939f5bec28d6693c086b7a0"],["/categories/game-dev/game-engine/nvl-maker/index.html","f0ffae825c26f1a5e944c5b7c2730654"],["/categories/game-dev/game-engine/page/2/index.html","f41c5156228bcdff0ae3ea983591058b"],["/categories/game-dev/game-engine/page/3/index.html","7bee2aa0bc3786001638d9740fc0788b"],["/categories/game-dev/game-engine/renpy/index.html","a0eb922097761c53b58cbe9b74fe7676"],["/categories/game-dev/game-engine/renpy/page/2/index.html","55b2414263835c9e742066b962fb5022"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","4a3869b8c84687ddc29daddfd789bf66"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","17b7d334091aa67bfe533962c75d246c"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","7389faa743715620748e203cb713be98"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","98c7910fc3fdfa9a8ce6c2c49b5dc097"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","914d8a1ed189e93085c7bfca47581417"],["/categories/game-dev/game-engine/rpgmaker/index.html","f90037360a2187d59cb9432343f1eed8"],["/categories/game-dev/game-engine/tyranobuilder/index.html","3e7ea5b650bbe7c37ad3f27c24bc29c8"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","c6582b9aefee5d4aa5e9fc602177a16b"],["/categories/game-dev/index.html","907dcefc8f6f8b5605f94d55ea113eb0"],["/categories/game-dev/page/2/index.html","b6902f929e1240d72f28b848e6ad728e"],["/categories/game-dev/page/3/index.html","6ba09f672c3b7cb8d71c92d92f09fd36"],["/categories/hexo/index.html","19a2bdd40ed61f1f4b6188e491e9599f"],["/categories/index.html","18dd4de4a9f44e5a4962b909a268370e"],["/categories/material/index.html","9a3575fe7b96f8faba0ada0977a8ad14"],["/categories/update/index.html","f136299715c330810b71de4f00eee0d4"],["/change-time-according-to-real-time/index.html","ed2e6fec6a9a60eba9486e6cb02ff966"],["/change-title-after-first-time-viewing/index.html","f6f5272098c67f206f65bed4dd539470"],["/change-title-based-on-event/index.html","efcaeb25ebc8cf2b9534b788d5996474"],["/character-stats/index.html","c1eb7440c6866239a2eda798f7ae4c55"],["/chatbot/index.html","bba79759bcd6242f700c0389e94d37fe"],["/comments/index.html","1cc71055d022f6aff8a039c0e6b9d65d"],["/create-button-anywhere/index.html","c9cba1016eafe1882cf9258a48380f74"],["/css/eurkon.css","3828aab317e0b7567a5f784e6b81be86"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","eb22ef0c55a14a3db7a2c083cb65550d"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","98840aa4254fbcfd33e61709c8b4da5b"],["/css/rightmenu.css","99bbac8d556e824fa0aedc66b924e6c3"],["/css/siz.css","064c2da915f70c562a59940d16648d85"],["/css/swiper.css","3c13859caa802df20bb65a560423ee71"],["/css/swiperstyle.css","0d3ec1a7b2ae747cd82ef614ebeca819"],["/css/var.css","519a1dcdcaeb074e4eb6f4ca36637673"],["/ctc/index.html","5161086fbacdde68deabadaad044e385"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","0c996c7b7c0b25719e88e5a61c4775e2"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","ba155107f8a8b178250e0d4fb72d9bf8"],["/custom-loading-screen/index.html","7f759b9594058d38c2614beb6b8fdcba"],["/custom-mouse/index.html","16b6349f839f6c26d9dc59ff26398fa5"],["/custom-player/index.html","1cc68ae3f334a6b0a9a70b98dccd22ca"],["/custom-preferences-screen/index.html","d7d1831705fb30a8383327ab1cddebe1"],["/custom-say-screen/index.html","20584c40a30c82f75c854194dcb039b4"],["/custom-title-screen/index.html","8b483f12190f60cc63b38fa1e14eee73"],["/dice-function/index.html","859afce6e9ed88dca8854fd783d56a5f"],["/disclaimer/index.html","a853751b9a47c3e80be5791d3a511e30"],["/friends/index.html","9a5247a715ff09414dc6356a3f742cf4"],["/gallery/index.html","bd0235e77ffa24178712f279fb2925d2"],["/gallery/photo/bg/index.html","0e2f6335f2e6d7733748736abea4fa1d"],["/gallery/photo/gui/index.html","018ee6d02b3052f021afbe4a513a748a"],["/game-only-text/index.html","21a82e7b4ffa87b50a26823c6b51498b"],["/gui-017/index.html","dababfe3d6ae071fb2afa4f76d8b19d2"],["/gui012/index.html","8d6f0ff36809dd1614a00eb535f241e4"],["/gui018/index.html","692156323f6ad2274b26ca22435ee7c0"],["/gui019/index.html","acf56c4337c047130b9bb85ddd27870d"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","bac99b9c6c34954ccfcae0be867d0db3"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","d489463e929b6429e4d28421b1e43c60"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","44da9ff69b35ed9065c3dd8bbb182b3f"],["/images-tip-function/index.html","31a6c98fe571405651b66a128c28fd03"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","c1f99c8d9dd4be169c07d313a41cebde"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","cbb8d8434fcead564098818cadb42c43"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","ce97a11f36264f3d35c4d7f539c584d6"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","2bcc805189acf00d0d5ff363f12c54fc"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","52ae9ddf5fac65adc42539dea6966369"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","dc8b6d491dc78b5d184cf137677b8d63"],["/link/index.html","56c1a6acd2603062f287f3db2f8782f1"],["/make-butterfly-beautiful4/index.html","61a2c688c66717a706facf7d9bfc1237"],["/map-puzzle-system/index.html","992c802a8baddc26b5348a217e649f38"],["/maple-effect/index.html","4970be1c22cb08567a324613289a3d6f"],["/memberships-2/index.html","3755da00aa9638a011ee293bae4cab6c"],["/memberships/index.html","d0e56f23ba8888c7a2e3f9bd6626e0eb"],["/multiple-language/index.html","0ab51a3981ddb5348052d34f2137e54d"],["/new-year-event-2023/index.html","9f1a19a03c2401c3879205bfa94d9ad1"],["/newsletter/index.html","bf482c28caeaebe689e6c47afc6714c9"],["/null/index.html","2f5513b93fdb844d9a4723129625e5c9"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b9a810fea5903289d375b0a7be6d72a8"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","9f08d455042b5213e732f8b14c7fa08d"],["/original/index.html","a3ffbc0d9e6578b62da7dbfccc855558"],["/page/2/index.html","d4bd296b46d5b53158be2550fe05fd52"],["/page/3/index.html","76b1e28d5d8fc16c2d9dc9ad70625c8e"],["/page/4/index.html","49c6aced80faff5cb5612634ea5ee24f"],["/privacy-policy/index.html","b09f3892fd201ce201803d917c34bdec"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","03291bacf9560bd8f6c0d8a3e488f9f1"],["/random-number/index.html","96686d97a31818578834b43cd0938467"],["/random.html","a1cc53f438b60c83435500850447d13c"],["/release-017/index.html","97070144e18796d96a32a04c82d2eb97"],["/renpy-basic/index.html","534e175ac58b3e68c5c20ab27acf8a4c"],["/renpy-matrixcolor/index.html","46b5d1c0ee81c6e1c6bb63b3cff65621"],["/renpy-overlay/index.html","b9891432bb033b3b747cb3bcf0fac619"],["/renpy-review/index.html","83fea4cc32009098832c0b71323b2844"],["/rpgmaker-assets-menu/index.html","e8aacfdf96c28c231481c0bec8726047"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","d3bd75e29156536b9b9d7c89b2d2264a"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","5e7376bb282d01fd190da80c4a5cc279"],["/sakura-tree-background/index.html","92a9922faf869bc5452634f94f306ce7"],["/service-worker.js","9b7f5a4abe29cbb74b99e79d644a4060"],["/side-image/index.html","3296ddde0cd272e20714359734a695db"],["/snow-effect/index.html","6a9e028185889f81529e896b9c5580d4"],["/speaking-animation/index.html","68f5e529f27c4dbdfc3b277e518506fa"],["/splashscreen/index.html","59508b5ad087841a5f804d25bdb17cdd"],["/sw-register.js","2871ea8f540b330c66e87709d5ecd5a2"],["/tags/Hexo-plugins/index.html","0a6609f81cc10cc0849e67eab2cdfd4b"],["/tags/Light-VN/index.html","8211a2cb0f01fc7f7bb14144b820e43d"],["/tags/ai/index.html","8d7301d1b71325e5df050feff6d7f582"],["/tags/butterfly-beauty-diary/index.html","54a9aae65e7364cc6790b8523c57f53b"],["/tags/commision/index.html","63c5fb23bcde4655b0e9b99eb656f8e7"],["/tags/custom-hexo-theme-butterfly/index.html","24eb984fddc8fc68b1f23d77f2b383e8"],["/tags/custom-renpy-title/index.html","2a27cc1367007b7e9360c136ee835ef2"],["/tags/dialogue/index.html","eac7abdfc88536fe3e335b43540a17ee"],["/tags/effect/index.html","b7702aec921fd4f83dbbcf323f03508e"],["/tags/event/index.html","8acb4207a1f033c4ba4971832c701917"],["/tags/hosting-own-website/index.html","b991b7d8d22f2fcc02f96f5ad5806b35"],["/tags/index.html","6b24f651c20baaa3cc6a1ba5512d56c9"],["/tags/itch-io/index.html","d21a844151fa38c0b875b1fd2d79b2d6"],["/tags/light-vn-update/index.html","7e6c95a45a905d40cc6cf6c00c58ed47"],["/tags/nvl-maker/index.html","b094b64e7da1baa5f4bebdf9d6387289"],["/tags/p-tutorial/index.html","f2e071d1ad30292e4fe908045a2ed46a"],["/tags/player-related/index.html","9da4e838206fff51f7b39c437b042e04"],["/tags/pro-tutorial/index.html","13ae38f48b77d8ac723cc8cbc6728048"],["/tags/pro-tutorial/page/2/index.html","1f767b81aa1b58c1fbf143497fdc522a"],["/tags/renpy/index.html","22ca380e0eb78262a763adfacef7b784"],["/tags/rpg-maker-custom-map/index.html","d03cac43243b9ede3ce08945ac51cca1"],["/tags/screen/index.html","939071f30a85a3d0f30159e60dc81a3c"],["/tags/special-function/index.html","903d4a7cd0e6a67d699bec6128eae97e"],["/tags/tyranobuilder/index.html","7f5f3f0e21f03e9fd513bfe38a4600b0"],["/tags/ui-assets/index.html","97e5bafd906b0eb7b0a83d0b1534852d"],["/tags/update/index.html","f20fba63044c59c114623c64d147ffda"],["/tags/upload-game/index.html","1e71b784a424c11f81081928eb4dcfff"],["/tags/variable/index.html","5c90f4e34bd7b92966aeb9abcf23c784"],["/tags/visual-novel-maker/index.html","090db88f9d07e79c80de1f4b3084090f"],["/tags/封面製作/index.html","161afbb05573212cae9b5f7f413ea20d"],["/tags/背景素材/index.html","de51fe0ae19e04b36f6c5483420276f7"],["/tags/隨機功能/index.html","0cb56ae79c937bd8361c2fc267a55d43"],["/test123/index.html","331981350ba6c141b1a63a6b57b5a8e0"],["/textbutton/index.html","204b4577e2b323e7efb9969cf24a374b"],["/to-do-tutorial/index.html","372a4615f6c51a86e0c7085a2a5f6d8d"],["/tools/index.html","846d9712601327ef6962b5e5348e0408"],["/transfer-to-hexo/index.html","f949a317f74951f2aa17a35aa5dcde16"],["/tutorial-update-history/index.html","bd83a11004703c94af279bed8f556d6e"],["/tyrano-name/index.html","aa7bedd3b1242f7e32caaa86720a63dd"],["/tyranobuilder/index.html","50506bb108060b35f8e9dcc985a36745"],["/undefined/index.html","c23d8c575f14f9afd9adc67a515235e2"],["/update-20221211/index.html","37010ce78a233f90df1e1b8ff0545d97"],["/update-20221218/index.html","ccf7cba1ef957790ca2157d26cbb8977"],["/upload-your-game-itch-io/index.html","71c9857dab622917fd71879bd4ba61bf"],["/use-list/index.html","2dba0784aef1ca89f4a655023c750776"],["/use-nvl-mode/index.html","d9961c4373f6e461fe6de06062012c54"],["/useimage/index.html","446cd0d03c56f029229a4133e5f14312"],["/variable/index.html","617b004b02f40ee9a4ce088f6dd948f7"],["/vnmaker/index.html","028966ea1ccbbf70cd109e00a928b5d9"],["/weather-effect-tutorial/index.html","fcdb5f6f2d8595b74b12ffbe5347bfc5"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
