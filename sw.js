/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","c6f9ee1d897b3b075ec5c35fd350f323"],["/2024-future-plan/index.html","032dce3e520bc2aade6f2a62c9dbb153"],["/2player-battle-system/index.html","cc6b98cdc2e2fb3122b502ec6a837f4f"],["/404.html","ed191e1566e617e2c76caecaa778e4a7"],["/about/index.html","17bbf4f7f3e04693f2bbe84d4c46767d"],["/acg-creator/index.html","3a9e3a13ad1e612cffd9c74cf8dfaf42"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","ae3590e55d555d7898089860ef1a4c89"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","19e460f6d3f88e517eb270e9717e1976"],["/animated-title-main-menu/index.html","eeaa3baabf1e8987c473de27488a1632"],["/animation-movie-cg-gallery-screen/index.html","1538bfb49ac38a17653aaefd301f5dba"],["/archives/2022/05/index.html","f9d2852650bc18d906e36cb1664cea66"],["/archives/2022/06/index.html","a44be21634120c23d63ea233ed4a8a07"],["/archives/2022/08/index.html","6afd6cb8555bd8cbad440908e76c5440"],["/archives/2022/09/index.html","61bf2e2c732d707ec7935e625283845c"],["/archives/2022/10/index.html","cc9e3466aff9bfcecd8f3c52ecbac6f6"],["/archives/2022/11/index.html","81c677b2654dd6a91fd2f6a2fa7e12f2"],["/archives/2022/12/index.html","a3b90ff70d0adf28b13614e021bd491b"],["/archives/2022/12/page/2/index.html","1474598a0dcc46909954a2f67df078a8"],["/archives/2022/index.html","10f8543e1ddf90b9c972ad77af7944eb"],["/archives/2022/page/2/index.html","7adef2663be7ade3d3217ba56ba23652"],["/archives/2022/page/3/index.html","4a46c1c138b665e6ccf5e160d5e1c508"],["/archives/2023/01/index.html","03c0b16ef370d7de0a70a20b3c0d7462"],["/archives/2023/02/index.html","6ffd98c96c8c7d267853713dc9e26a21"],["/archives/2023/03/index.html","e8e388c5d4da461e034ae3f9ca5db48a"],["/archives/2023/04/index.html","f88b85567b78342c3c32aaad2b1c61a2"],["/archives/2023/05/index.html","498f76df65e182f36133886627a3955a"],["/archives/2023/06/index.html","9ae7b372f219090e3d4bbd38b9b6fb31"],["/archives/2023/07/index.html","fc0755a075cf2f15e285948319f35aa4"],["/archives/2023/08/index.html","46bd4603610599a5041013c78ac8a29b"],["/archives/2023/09/index.html","57fb617cd885008f3f46fb3641234571"],["/archives/2023/10/index.html","1c23232be606bff64fd7f253d57a94b4"],["/archives/2023/11/index.html","cbe048a73a52ece717aa256a5dc61c96"],["/archives/2023/12/index.html","8855c29966e10a1b85b5a711bd364304"],["/archives/2023/index.html","f19d061721910a522ca62938640a7192"],["/archives/2023/page/2/index.html","1385881b6798373813e9cee7a7dffcbe"],["/archives/2023/page/3/index.html","afb8bacc59b7c1b18351f4f378b96511"],["/archives/2024/01/index.html","e995236b76e042f2c7eaf39933d113ef"],["/archives/2024/02/index.html","a841acfa8d070b119220fc361ea75710"],["/archives/2024/03/index.html","99f17cc9675f3238118e92a18f83c0d3"],["/archives/2024/04/index.html","32d0d4688ed4d574eac2fc36b391a610"],["/archives/2024/05/index.html","43491c51656bd5a080319607fb0f2738"],["/archives/2024/06/index.html","d9ceb9445da8ca736e0df04389a82656"],["/archives/2024/07/index.html","44515dadf1267ec413af4f3f69b62060"],["/archives/2024/08/index.html","2744ed55707c0fb8f8afc1293fc7c143"],["/archives/2024/10/index.html","5d0c2ea806185d1230bd05812ce8f629"],["/archives/2024/11/index.html","0f9ebe658fa2bae9f69e8230ea89b71d"],["/archives/2024/12/index.html","61d9ff4ceac40e7b70c5be478e84c1b9"],["/archives/2024/index.html","181764bce3f41737755ea4995ef5e630"],["/archives/2024/page/2/index.html","967dde315505dd32ff4f7d1543f99c20"],["/archives/2025/05/index.html","512013d7c80c39b700d8b555abe5be9f"],["/archives/2025/06/index.html","b514a49b5d7452e29cf57a4b628ffd6b"],["/archives/2025/index.html","ba50308616dbdd0555ca4844d4d42261"],["/archives/index.html","6fdd27dc6e7d56d881beb72a68608bc5"],["/archives/page/2/index.html","70bad56cd44f9d4554a77a7c8b59240b"],["/archives/page/3/index.html","98503dbe79c61427c28abd8032ccda2e"],["/archives/page/4/index.html","ca8a2c5873ba464f44e7948f62b20ede"],["/archives/page/5/index.html","e50afb09579ee663d1dd90bcf7251ce8"],["/archives/page/6/index.html","0945ea3f7a173ba2057c16b0c59df18e"],["/archives/page/7/index.html","e187473e161b1c766e5158ef11aefc6c"],["/archives/page/8/index.html","2569578461c83c82c6d378bd3b7ed20b"],["/artitalk/index.html","9b83c65173d79e97fa39a4667c3bb634"],["/battle-beautiful/index.html","e0771aaf1bba8a1a6704dd6631625117"],["/blur-effect/index.html","fb51fa222fffe64d5a17104f096960c8"],["/butterfly-custom-tag/index.html","a12c2448fa3455321fdfc3743017a5d5"],["/butterfly-plugins-faq/index.html","199d375fd4d1a11d997fce527a3779fa"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","8e1bdfb63d3ab227be237adeb4d05608"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","73db4ef58a2905a6a19a42f2d7fa530d"],["/categories/announcement/index.html","3a3403179af8af430c6833b7ad92aef7"],["/categories/diary/index.html","813568a5ac4a94aed82dc4b7ae03326b"],["/categories/game-dev/game-engine/acg-creator/index.html","3bd5305eb68fee997366ad394650362d"],["/categories/game-dev/game-engine/index.html","6e27652ffa21e5658a82ff2a3c3f711c"],["/categories/game-dev/game-engine/lightvn/index.html","6bd3b86d1c67d69f66cc8b8b3fd72119"],["/categories/game-dev/game-engine/nvl-maker/index.html","7ce829d5287a57f3d120ff9ae3ebb084"],["/categories/game-dev/game-engine/page/2/index.html","4d0afb10a890e0d6287ec0482c79d764"],["/categories/game-dev/game-engine/page/3/index.html","f7bd908a01e5db82f2f5bf8cb7d195e6"],["/categories/game-dev/game-engine/page/4/index.html","2c8742a3f5360fec8de3f34f706e4954"],["/categories/game-dev/game-engine/page/5/index.html","6ec3e8bb13c91493261e5e686401f94a"],["/categories/game-dev/game-engine/page/6/index.html","3f0b783071a58f78cd7d4ab20e5353fd"],["/categories/game-dev/game-engine/renpy/index.html","4283da62b2fa0bc969f49227f7b99583"],["/categories/game-dev/game-engine/renpy/page/2/index.html","3bfd2256fe1175e31b32a736a111778c"],["/categories/game-dev/game-engine/renpy/page/3/index.html","8b8f4a2a141eecc3b69c39cdb266bf64"],["/categories/game-dev/game-engine/renpy/page/4/index.html","ca5095fdcbdd4ca2a4aed42fb202d5f6"],["/categories/game-dev/game-engine/renpy/page/5/index.html","3189253c02d69dea5c56bfb3557c4c52"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","b0dddfac4c600d8179552e1242fc6ef9"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","a3ef2ad2a85fb4bfcaaac662ed6deb9c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","ea9d5c24fcc3546fc5bcde5d68dede52"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","a8a6d6f6bda6698a2f4dc5b656dc3ffa"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","f1af485eaf8ed07cadc52c5942ba56b4"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","1fa54649629bb41e16f7cab322a778e3"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","badae052078c38c3f4edaf1a58b4e60e"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","14ca1b7d3dc0d4ea3f8b0e1f02dbcacb"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","d78f0f5055a9177086f4a17df9675327"],["/categories/game-dev/game-engine/rpgmaker/index.html","8764654fe78894fa04b8311218ce7c4f"],["/categories/game-dev/game-engine/suika2/index.html","6f5efe7ab8eb911407adf53744dda919"],["/categories/game-dev/game-engine/tyranobuilder/index.html","ec5a3cdb5f1f868ab317c3a8cd2e15dd"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","b1529d3c7fbe83579127279b2fa722b9"],["/categories/game-dev/game-engine/webgal/index.html","34943aadea901a52ae7d164ab6b4a329"],["/categories/game-dev/index.html","62eff5094745550dc52fe509317470cf"],["/categories/game-dev/page/2/index.html","e4801d52e6368b5d7c1a52554e914a45"],["/categories/game-dev/page/3/index.html","369be2a694d8d788aa67c497fca34283"],["/categories/game-dev/page/4/index.html","be637da1f72200b6e5606a58af38aea3"],["/categories/game-dev/page/5/index.html","8ae89497c0d269bce9bc7aef4ee9087f"],["/categories/game-dev/page/6/index.html","360a4f210ef6e6b649e53048aec02903"],["/categories/hexo/index.html","a566473df465959c6f3e34c042b7931b"],["/categories/index.html","17dfb0edbee1c6b55804d850469b8ddf"],["/categories/material/index.html","f3ee7e601d539f3a258c3a6fde89cbe1"],["/categories/update/index.html","45b7cc289ad0a2bcbc31bbcb51156b9e"],["/change-according-to-real-time/index.html","938c9b239cfc1a752af0ce761c5f1d0d"],["/change-character-info/index.html","179ae1456e49298d246930094bf6aff0"],["/change-title-after-first-time-viewing/index.html","0ad285bd3106c1e8b2427f541f0b778a"],["/change-title-based-on-event/index.html","b790529b48a455c38dcc10b453c402b8"],["/chapter-selection/index.html","d40fe4d2d080b619bcce548e5ed2c2df"],["/character-interaction/index.html","39e4dd3f8d8d1e7e98c2f14ea80784a0"],["/character-start-personality/index.html","00cf639754ace30346d9f5946904f6cf"],["/character-stats/index.html","51629d38c5611a175fe64adc928a8741"],["/chatbot/index.html","c3e16a60d33e0760c5b32f513877cf55"],["/choice-time/index.html","c8f3f5afdf28771152fab6a0401a9732"],["/comments/index.html","73421cd54dbd6391af62a30d505b281b"],["/commission-info/index.html","0af10a6e52453d149495ea9c0e304128"],["/count-login-number/index.html","4cc829dbcfaee4912f7dd71c9924f31a"],["/create-button-anywhere/index.html","faa078b0480e5b0f053775cba73bc49d"],["/css/eurkon.css","6a15cbc047aa4a05ede9df4e9db205c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","94a31999ef0b084f920543decc6f091a"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","4ef23b6fc2712bafe96e6b8a3b6863a7"],["/css/rightmenu.css","abaf8de3df50ce16355af1c45cf5ed90"],["/css/siz.css","0c1569900fdcb3e1114a93b254450c02"],["/css/swiper.css","c59a3d43ab6fbe902df55d973a9fc10f"],["/css/swiperstyle.css","b172536d2972020850dce6ff8cb3e1cc"],["/css/var.css","3f19f3070fa17d3894b577ec697ce769"],["/ctc/index.html","0d4a3c9aa7aedc0b0b30102bb4916112"],["/custom-credit-screen/index.html","4f372c9ab44fdd1254d7befabae6c4e7"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","b8879a76c4e3d8155e776fc6680e6991"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","c844a320e64a02ef95e3f047a6512bb8"],["/custom-gallery-cg-screen/index.html","9ca41b2d15a271d8596711fce5ac72bd"],["/custom-launcher/index.html","bb765f3fad05026309905d36615d9ce3"],["/custom-loading-screen/index.html","a540094711ffaef4969174b3168dc886"],["/custom-mouse/index.html","59410a7860e8ea1f220dc2765a13b4f3"],["/custom-music-room-screen/index.html","107a2ecef486a0f21ee3feddf0ff1fee"],["/custom-music-room-screen2/index.html","c0c65ee73c154f6d7beca5613bcee0bf"],["/custom-nvl/index.html","f397ab9ae95735daaacdd848ffec75b8"],["/custom-player/index.html","a663b6472f13867d51fc43717a34b7dd"],["/custom-preferences-screen/index.html","4ea813969a43f67de8c797b28c7de596"],["/custom-say-screen/index.html","723f453ad36bc6a350b2993cfd7fea22"],["/custom-scrollbar/index.html","b9164eac6ae5162dd8e6686575b5016f"],["/custom-style-bar/index.html","7da80a5685f8e999823c95051bc62be3"],["/custom-style-box/index.html","e91678cc48ce6ca0fc794e351f1788ed"],["/custom-style-button/index.html","747210c9c69c3be53cc165c90e3829cb"],["/custom-style-grid/index.html","a266487a2aa02da2ef9ba9997b728b1f"],["/custom-style-position/index.html","5a27b50b795dc252add63e251f192ceb"],["/custom-style-prefix/index.html","af5be32cbd9ccbc5841155fa2035076b"],["/custom-style-text/index.html","c29c040ab2b6f7e12f9b2ed325cbeefc"],["/custom-style-window/index.html","805ab63c5a65bf3f9345383c8eaf441c"],["/custom-title-screen/index.html","7a80c782bb96f47aa0fb61aa91e7742a"],["/define-npcs/index.html","256c21151e4dd76186dd4e11da5daa9f"],["/delete-save/index.html","206a44e722a61ef4bae4623157bf9b5e"],["/dice-function/index.html","6827b967eeb7054ba150fdc292ce6325"],["/disclaimer/index.html","fde994653aef09e224cbdfc7d5f56dd4"],["/display-immediately-all-dialogues/index.html","223e4758010d0cf7643ab7df809e535c"],["/display-real-time/index.html","99e677ea266404e1a97a951fe9860397"],["/en.refund-policy/index.html","9fdf21e90fcca87beb387cb449d381be"],["/enter-name-screen/index.html","73cab1ea945a16f44094f198001da534"],["/export-game/index.html","78a06238338334758acfe1c8165eba65"],["/faq/index.html","ec057ae9becee3cec964b684ce225bff"],["/friends/index.html","964bafd795df0efdccc67d8e55389eba"],["/gallery-template-assets/index.html","b0a4202bdf93bcc3d1102e450446444c"],["/gallery-template-default-ver/index.html","917a9b59aebb0e863d8192ccca4dec75"],["/gallery/index.html","7b6f4f26ee1d0499cdf2b20188e3e5a3"],["/gallery/photo/bg/index.html","3577777a8976650f5424a98dbfd55949"],["/gallery/photo/gui/index.html","b81d0756d1a6268049d7713b39156e4b"],["/game-only-text/index.html","fff179a1cf816dbbac49720ae6092e3a"],["/generate-random-name/index.html","0041b4d56732424ffb00904d96a350ff"],["/gui-017/index.html","bfca8cedeee9c45501a50ab357d13674"],["/gui-vertical-002/index.html","68e7d32e260e074ec8dd4bf458a06247"],["/gui012/index.html","e958d103f9271b2fa7610fec129f372b"],["/gui018/index.html","9a478d71feffe4429d25b9c1dd0042fe"],["/gui019/index.html","ac18cd039b16dba353ad91556fd484e6"],["/gui020/index.html","8b064406de069d39e8d7e9d191e17165"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","70993dd1a685fd360f49ff7d433bdcc3"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","430e704b00c8959c4bd28b836056aa80"],["/hide-quickmenu/index.html","f5fd2f68befe198476eac0ddb7e2eabd"],["/hide-textbox/index.html","df91b4c4113edfc709b29090174fe1ee"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a15c7875966885cb6c44f95481c1e287"],["/hp-bar/index.html","eb0508fd99014aa71e93a431a2e1568f"],["/images-tip-function/index.html","2bbe6a236337fbc952221e868afc2ba6"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","a412db461ac77b1feb3e094cd603f1f8"],["/index.html","98e9bbe197acee676bb4fe1abd215556"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","e5111042274ca7d7b094e1e14d39d3d9"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","61ded0dc7b608655975e2dc6a707f8eb"],["/items-sprites-effect/index.html","96ffc6ba79e6cc40e2b17ea4c1dcd602"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","d7493e10bad1378223ea2a40c5651ef8"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","532ae913d4f2d5883964dad3637e911d"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","8eb21bb662c6e6ac07b11eef7b18f998"],["/link/index.html","a23370276603c4b3f5811cfd19754232"],["/login-reward/index.html","5a9a8e7fcb612845bfb5432437af58ce"],["/long-press/index.html","d239653524a309235281111571778107"],["/main-menu-music/index.html","2e27bc46cb1657c00a6eb6ce03c072f0"],["/make-butterfly-beautiful4/index.html","bec7d211bd677796462873313eccf6e3"],["/map-puzzle-system/index.html","14da37f4af87c27918fcafe54059716e"],["/maple-effect/index.html","5f59e677b17ba5a8731cd7bef32cb3fb"],["/memberships-2/index.html","3e0adbc9997796dac33829a42d293995"],["/memberships/index.html","a5eec02234201ac5f82dd00ad27583b0"],["/multiple-language/index.html","305e7dba4c9b3e38fe2d2ac614a93bf7"],["/name-input-assets/index.html","f2d61b9fceba787e75e2d282c0c743f9"],["/new-year-event-2023/index.html","ac1ef663a76f5c9d72b274952605d67c"],["/newsletter/index.html","7f06bce04b53dd10379d6c82d507e8c2"],["/nsfw-limited/index.html","0c50c01a9ec9652af4a0b4c24a0d4f48"],["/null/index.html","0b0737e1ce95821d02d7cd6530cf1983"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","b42f2ae1864c142d00388211a66e09c4"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","4b6305f33febf656f02f82ad6f2e2995"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","fc2dd1db8114cf7f13d4ed7cd931a381"],["/openchatai-renpy/index.html","cf36cb297cbe56bc6807b5dc47bff759"],["/original/index.html","60fcc967fde0f62773fa7b8dad4a3663"],["/page/2/index.html","6de367da87382d2bf6f7881cb81c2691"],["/page/3/index.html","7d029d815234d076acba254675e24a51"],["/page/4/index.html","eaf472d719ad9dbd084194b253934b32"],["/page/5/index.html","284236408a9c0695f6eba92277b1bfc1"],["/page/6/index.html","71153800a137ad409af60f4a24585a1a"],["/page/7/index.html","f2ed54f4c77942286daf0c3841b8213c"],["/page/8/index.html","cc8d58a87e471de41117a21f79b9bf49"],["/point-pop-up-assets/index.html","d0dd60fc558f283c72d1ed115d6ac54b"],["/pop-point/index.html","01b0b9dab66715e1d2ebedf992379343"],["/privacy-policy/index.html","0ea8ba6e9115c9e48a68750107fd5acc"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","213e9f6d708f7ceaa63deec90d313f99"],["/random-number/index.html","e89845e9377eadb01b8a7a8781579bd6"],["/random.html","a364f4ee1c929aaba22edf6152c2613c"],["/refund-policy/index.html","320b70419d68caaf19417fd853a1820b"],["/release-017/index.html","da58db9e54db7c636f69bb509a3bc643"],["/remembering-choices/index.html","5d41bce4559c50f020f002cc0d31fa95"],["/renpy-basic/index.html","4cc1e4e4f49553823ceec28e4ac30cd5"],["/renpy-crash-glitch-effect/index.html","31b1357661e13a74e92b32e4424baee7"],["/renpy-flip-image/index.html","c932894c13fe64a7856a787432224251"],["/renpy-matrixcolor/index.html","accf26052135bf91f66249b2b2e8c014"],["/renpy-overlay/index.html","04b9e25d542ae1328a6d219967e7df0b"],["/renpy-review/index.html","755f016155784321c31727b6b2f771ea"],["/renpy-typing-effect/index.html","37d3101a9cafa75ad896c39341eec188"],["/replay-cg-screen/index.html","ae251a307f715500a02714fddc7085a6"],["/rpgmaker-assets-menu/index.html","c62c8061a49bcbfaf6c81c01ecd38a5a"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","921275f8fa181ebfc2753042ddd14051"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","a8975c333a7f9bb3c309fddfa5bbde07"],["/sakura-tree-background/index.html","a93452a4e8010c14de75a6c8d069e632"],["/selected-button-style/index.html","6fd11697befc05711dcc25c7a60fe033"],["/service-worker.js","975c7ce65be6ce61ad396eead17e4306"],["/show-variable/index.html","79a3ffac392294c1a8670f510a79a4ba"],["/side-image/index.html","e75f63dc6ed800e413d560dd2531ff6c"],["/snow-effect/index.html","58ca913e311f0c052a5c1e921d2b71f5"],["/speaking-animation/index.html","31416a8513491a46b0a0bd70d7b24d06"],["/splashscreen/index.html","84fc8248c68ac3b33402e9acc021062f"],["/suika2/index.html","465841b3bba0d57514a055623252bf70"],["/sw-register.js","21c9f8e356392076491573a4a5ef2fb2"],["/switch-chapter/index.html","c9628a630ddc4bc3ff01ed2c40703045"],["/tags/Hexo-plugins/index.html","1f14c0b7ee03c8eb49b377f906aedda3"],["/tags/Light-VN/index.html","16b364479471b27a307a5a0d97550eb8"],["/tags/acg-creator/index.html","af4dfe4c46bfc1ba81061445fd056481"],["/tags/ai/index.html","39e40961e98202f20acf53ff3d85c27a"],["/tags/butterfly-beauty-diary/index.html","a46258d325bc7ada4d227a29da914242"],["/tags/custom-hexo-theme-butterfly/index.html","7f44793cd868660419e579f95e351e88"],["/tags/custom-renpy-title/index.html","0f12a1570f558e0e4d1ac8a469e49cd7"],["/tags/dialogue/index.html","d570b932e03e37842e5ab9c9b56e4819"],["/tags/effect/index.html","8dcd11d715a9b7d6679869b90302ff4d"],["/tags/event/index.html","78fa738cfc0ec3d353e84859f01d5028"],["/tags/hosting-own-website/index.html","3719a2700aeebb0e10bf96d192c37762"],["/tags/index.html","9709f6ea310a31792e29c6f55b5fb514"],["/tags/itch-io/index.html","6345aa8f65b18802b6c9e646aa25efe2"],["/tags/light-vn-update/index.html","218a5d7e37a85800d1e209bf79fab4e5"],["/tags/nvl-maker/index.html","94581477139420e97ea729b93399f478"],["/tags/player-related/index.html","558b513ad47af31cb7faeea54ce0b17b"],["/tags/pro-tutorial/index.html","ac18ce6534c4eca409a06e9476ebafdc"],["/tags/pro-tutorial/page/2/index.html","7cecfe07fe7018ee425d67840be16daf"],["/tags/pro-tutorial/page/3/index.html","9bc422c5a3de0c4caeecbb3ed23bf576"],["/tags/pro-tutorial/page/4/index.html","ba14c2d71d5d0a0b6aa379526f6d4435"],["/tags/pro-tutorial/page/5/index.html","0b74bef74e815d1e9872ff03d8368c1d"],["/tags/renpy/index.html","96ca2397d66754174e44bd1a71ce09f5"],["/tags/rpg-maker-custom-map/index.html","ebf0ea4dc34a03755c0df5e2741e2b88"],["/tags/screen/index.html","cde0067007f9b24e1ef7909cbe485ef0"],["/tags/special-function/index.html","3f7e3da94c507ed78420b019fd78afbd"],["/tags/suika2/index.html","a759f265401353b81c622ef8006ac9ae"],["/tags/terms/index.html","b97470ef57a2e933262b7c76f0962075"],["/tags/tyranobuilder/index.html","cacdc73530316b51e3251f4c28f12a02"],["/tags/ui-assets/index.html","e947b3c24cde31d9125c70136583fc88"],["/tags/update/index.html","f57d9d3d7019858115cc5abff096d5d4"],["/tags/upload-game/index.html","7471ded9874a00bbd04820bb1f9b35fd"],["/tags/variable/index.html","972fb8065710b61eaf031afe459c2f8b"],["/tags/visual-novel-maker/index.html","3969d2d9a1f4c9479902d64126c013ae"],["/tags/webgal/index.html","3fc0b92917c3d8a17cd3ec3a7fcb6e24"],["/tags/封面製作/index.html","b9b9a6eafecedaa0a76521f3fd6eae40"],["/tags/背景素材/index.html","433667349d52a85bfb87323d8f962fca"],["/tags/隨機功能/index.html","6f4f00effb76178c9f585a73223479aa"],["/test123/index.html","20c4c609d9a9a99f7c39b6e22de9877e"],["/textbutton/index.html","d639804b3d5ff5641dd66a158c7e1fda"],["/to-do-tutorial/index.html","1530a98f598fe9c324043b0f79578516"],["/tools/index.html","ba85170f9b0939f033a72fc2757b3870"],["/tooltip-function/index.html","3948d00ddac5a057b1926c15d943f0d6"],["/transfer-to-hexo/index.html","e4a4cc6dbeed6f55fb4357f485849fec"],["/tutorial-update-history/index.html","69d1b7a6a54064dee4396eabb67a55be"],["/tyrano-name/index.html","7eb5448f59e2dcf284dea223a79df0c6"],["/tyranobuilder/index.html","2b8540d33a57b29c38dcbdfb86b80b42"],["/undefined/index.html","d7209d29cddc37a068ecdf899af5ee93"],["/unskippable-video/index.html","3f03147025a3e380ef8ab6c36a25a792"],["/update-20221211/index.html","64f88a3a99bfecc4bd1a33753ff81459"],["/update-20221218/index.html","9a695b60737fdd8bd6a2fc4aeabffb82"],["/upload-download-save/index.html","7b3bfad248c17d7a71b1a2d8b5904ef0"],["/upload-your-game-itch-io/index.html","4aea5416799205298be4ae5de6b2f56f"],["/use-list/index.html","fc2d3ffa8307fbe30aadd8a412667497"],["/use-nvl-mode/index.html","402ca778bc2c85900adecc886f7092e2"],["/useimage/index.html","02deccc50b863d0c96215daeb56f6e20"],["/variable-change-image/index.html","e8f4bd6f1c42ed053b303cfe909fde22"],["/variable/index.html","f4266fd6888cf195632850f9490c6f0c"],["/vibration-function/index.html","8ae54a6dbd11db4e2b9d6fb8449dcf11"],["/vnmaker/index.html","af33282379c4d722334a741bfe483883"],["/weather-effect-tutorial/index.html","4db38e92bd9b503ed893f67e4318597d"],["/webgal/index.html","dc61b0dd31f8d8bb4aa11f8b1c79c9cb"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
