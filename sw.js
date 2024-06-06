/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","975b9ab85510ec5864064b4f99e2fff0"],["/2024-future-plan/index.html","f937d7d9ee82c4cd015f9c5910af381a"],["/2player-battle-system/index.html","bf84cf9fbe835ce7a37fac1ecff33012"],["/404.html","7fb969c93d84f23cca318d9ee8f0ce02"],["/about/index.html","a1ee211e4eb892873813064e7625fb35"],["/acg-creator/index.html","1481ead48c7b2b8552a26acb3dcdb357"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","c41d1c1a65662cf4a260d536b2d71856"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","5b0dd3a8ffa5bb6ab17f3daad9478b75"],["/animated-title-main-menu/index.html","f27395b599ea40d45f75afee86ed5968"],["/archives/2022/05/index.html","5b15d760367f5cef3e5fc1d6030b6ace"],["/archives/2022/06/index.html","79fdb0e8a1e56e10eedeae3a160c438e"],["/archives/2022/08/index.html","82b0405b1ebfd38c5b587fe49432e512"],["/archives/2022/09/index.html","b91d9d09a30bb260abc5f246af5cdd3e"],["/archives/2022/10/index.html","78b5b81d281de3c7c9625dd828d68c85"],["/archives/2022/11/index.html","87abb9ccf2984b5bceb25c73e66956ac"],["/archives/2022/12/index.html","21dcbfece37755751483ab116fb5ec8a"],["/archives/2022/12/page/2/index.html","1b65e99e7ca71aa0468a074a1a48ae8f"],["/archives/2022/index.html","27b2792e5a417f0881da8c26e7535316"],["/archives/2022/page/2/index.html","81a6c03600ca0b29360fb7f7df7fdf3b"],["/archives/2022/page/3/index.html","12d02be02e996a08d2f6d0f174b5c199"],["/archives/2023/01/index.html","233b9857d0b9eb39e06c0be78d8345d6"],["/archives/2023/02/index.html","6b09b98c0ca931c3bd5297ac28946592"],["/archives/2023/03/index.html","7384d34bad5776942450cf18677d36d9"],["/archives/2023/04/index.html","a384145c0f685223a26dd09bc41f33a5"],["/archives/2023/05/index.html","df275c3d43d21c221ef0f0528856374a"],["/archives/2023/06/index.html","cfacf6075d43bcdafe3e83ac4725a07a"],["/archives/2023/07/index.html","33eb448496e47c5fcaa31d5e8251a1d3"],["/archives/2023/08/index.html","c938e3c1ce573584b978a475ab411d71"],["/archives/2023/09/index.html","940a37d718b722e59342a630e5b861ca"],["/archives/2023/10/index.html","a40437b509bd9ebacdec6d869393137b"],["/archives/2023/11/index.html","e18a36d9dd24543b320c9ee823dab00c"],["/archives/2023/12/index.html","4c5ab7402f96f8d112d055e5a43b82ab"],["/archives/2023/index.html","c6de729f59b9dd39fdaf85cb574835fa"],["/archives/2023/page/2/index.html","9344a5f0e1f2e53597a5516bc1edb2be"],["/archives/2023/page/3/index.html","d05873d13eaa2e9516d1ec68c1b606e1"],["/archives/2024/01/index.html","b5dcccd8c46154326757ac70b7db8a42"],["/archives/2024/02/index.html","9ec89e37fc61338f74f2e20e68955e61"],["/archives/2024/03/index.html","b5a7d5192ca7ee2c88506c220620cf51"],["/archives/2024/04/index.html","171b9331b42fda0afb711c6dc2d29e96"],["/archives/2024/05/index.html","aa7d7f3c6e7e28eda969c294eff827ad"],["/archives/2024/06/index.html","3324e6b87d16025dac65b4c32e6cdc0f"],["/archives/2024/index.html","0d5b9b4492acb03f27ff0fcdb985a37a"],["/archives/index.html","bf03cff08fea18317f4e37721d1fd2fd"],["/archives/page/2/index.html","a5d47a1e57fbb7a7099641a7312f19fe"],["/archives/page/3/index.html","b2a61bc1aeecb6d7f9901d25408c2fd1"],["/archives/page/4/index.html","63ade1d5066e49c16f2e1dfca3cb5b6a"],["/archives/page/5/index.html","99f138f6daff8d651e9965360a84de2c"],["/archives/page/6/index.html","d2a6bc750d7c3a8b4a47e42fee39a9af"],["/archives/page/7/index.html","07b41fd6a8afa33ac6f76cebf0dc95bd"],["/artitalk/index.html","ecd92655c4378c9bc57a7662baf5a256"],["/battle-beautiful/index.html","73a15abb16a43cf75ede37a620fc4fc0"],["/blur-effect/index.html","4945eba5cc4dc34bbf76d16359dee41b"],["/butterfly-custom-tag/index.html","aa8094ab453431332a1e3287e4f0fbb2"],["/butterfly-plugins-faq/index.html","1fe0b588aa4544e9f1942a7c6f05bfab"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","bdee71b130cb6139aea147b58d3a15f9"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","1031fed161abde47c4401dbff63b4b31"],["/categories/announcement/index.html","9e178d160c41da2814d569d26c24a668"],["/categories/diary/index.html","415e2ad3ef27b07207e1fed06a84e997"],["/categories/game-dev/game-engine/acg-creator/index.html","2dd33680f10711d65ea0d966e389e8a1"],["/categories/game-dev/game-engine/index.html","3891ba03f78406ad9b0efc16218dafcb"],["/categories/game-dev/game-engine/lightvn/index.html","a985c1c3080ee82adaf89bc7b1a3edd0"],["/categories/game-dev/game-engine/nvl-maker/index.html","528843b9798ebba7cb2998de8701c9f3"],["/categories/game-dev/game-engine/page/2/index.html","90d6c84cee1008e303e31919983ba34f"],["/categories/game-dev/game-engine/page/3/index.html","80daa2c7d07c08c043f833c3896514c6"],["/categories/game-dev/game-engine/page/4/index.html","505585e753517c1df402abb935145b36"],["/categories/game-dev/game-engine/page/5/index.html","47c290e0e1df515d99a82b7e4819193d"],["/categories/game-dev/game-engine/renpy/index.html","029d3e58ec0133a47ede96a181b2d0ca"],["/categories/game-dev/game-engine/renpy/page/2/index.html","784da07d13c53b12c876e6cf25669ee8"],["/categories/game-dev/game-engine/renpy/page/3/index.html","e680e6597d7552468a6c2443d5569b8f"],["/categories/game-dev/game-engine/renpy/page/4/index.html","adc5897217ad49ad910c4d49b47d087c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","8f2e319839d42f09d2ad5e771a77cf22"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","1cdac3113a5e2b9b26637fccae145d38"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","d0d5d5ac90b10aeea14e353db50edfed"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","fabce107d3763c2c722f93a272953d64"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","4755ca958f0f1bbb82c5ad7e42e4fa2b"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","b97bcae97019b1bcf05edfb957cbfb14"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","26b81ba77ab6e554b2043694e9a8e52b"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","b2e5effae033ae17864e524a7c994c84"],["/categories/game-dev/game-engine/rpgmaker/index.html","0a03653d2ed3639ffbd1584c211a08f8"],["/categories/game-dev/game-engine/suika2/index.html","e49e49624b03cb4429df4c5a6a054014"],["/categories/game-dev/game-engine/tyranobuilder/index.html","6d8a4a2f8dbffab956cd3587d0015b2d"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","98b56d9bfee57d40a1e62158d94c3a5f"],["/categories/game-dev/game-engine/webgal/index.html","1072e4715f3315df04c81f02bfe092c6"],["/categories/game-dev/index.html","a276041ed42cb08e2e6a4776c45bb19a"],["/categories/game-dev/page/2/index.html","012a093b9af0db73c3792cb97be1582c"],["/categories/game-dev/page/3/index.html","9e561719bcdb60e6cda480c1728e589a"],["/categories/game-dev/page/4/index.html","a9e3153a7b6c3c770f8cf9ffb312baeb"],["/categories/game-dev/page/5/index.html","6447dd9abfd27f583755415caf334357"],["/categories/hexo/index.html","fc5927dc50fa6b6212a23434167c0c6b"],["/categories/index.html","c97224c278976083accabbcd49a8ffeb"],["/categories/material/index.html","cdce801f99b598fb2a428497d7713a08"],["/categories/update/index.html","2c47ac6e98f567e879c144c3c3719f36"],["/change-according-to-real-time/index.html","25d94cdd7fab3ed2815576f5c66bd292"],["/change-character-info/index.html","a3a82f5109055bfd05dfc9c89ce9cd77"],["/change-title-after-first-time-viewing/index.html","a2093361045602949440d2ef05c55083"],["/change-title-based-on-event/index.html","652f4aa175eb5269daf75fa0648c3f5c"],["/character-interaction/index.html","ee1ef99131bc255ea39f6a9da3b743c9"],["/character-stats/index.html","93bbf36f0e12730315267b05565990d8"],["/chatbot/index.html","8604b31295ed3f1135dbf639ee26bab2"],["/choice-time/index.html","8033a1e9c9abd9e4736909f73abafc94"],["/comments/index.html","1d1bb1e940e3efbb3b04066549b833d1"],["/commission-info/index.html","055700cbeb81abeff2b4b4422d5801bc"],["/count-login-number/index.html","5135d31dd63f682fafd3077590a8e9e4"],["/create-button-anywhere/index.html","a7d7077ab232e6a284bb3ce757f806ab"],["/css/eurkon.css","8a41c5c423a3b733e035d633f7fadd44"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","03339e0289d1c746226c46a83a100d7c"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","cf6b05fe01e3e12e04bce18abd3b2419"],["/css/rightmenu.css","dd124847f380d55717751429ee33621b"],["/css/siz.css","b1ca3038621cfa9a990846ba07a93b8c"],["/css/swiper.css","fda1f60a1b74c2064b1afff37ea7c854"],["/css/swiperstyle.css","c2cc637ee5e826d7ef1c7c69cfe78ba1"],["/css/var.css","d458e56631b4eb0f6fdb7bacd1aa3554"],["/ctc/index.html","4200615203f3ffebd5080343f18dda78"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","674bb370627c5d7cda7b1e8641d9aa5a"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","a9ae48bd4fea07ceddd67d8249ca79b4"],["/custom-gallery-cg-screen/index.html","7369b9b5d2a527f95685aa6471d37e98"],["/custom-launcher/index.html","1f922dbea2ef1d4628d636298482efea"],["/custom-loading-screen/index.html","a514af20cfa112d34814e53050d531fc"],["/custom-mouse/index.html","c9011984f28d9b893a52975a5ded88f2"],["/custom-music-room-screen/index.html","bff149c9d5e6ad2ef266b1834a0df91b"],["/custom-music-room-screen2/index.html","6f60270dca744eaee5236a05b1e9e129"],["/custom-nvl/index.html","fa53738cdd2aca80ba9b12f8536c19ed"],["/custom-player/index.html","b24676cc4fee68bcd6266a5102241021"],["/custom-preferences-screen/index.html","3b5101c377af15e5c38bbf0e895679a0"],["/custom-say-screen/index.html","019d6b35abeb2f1181af04e1fc38c87f"],["/custom-title-screen/index.html","7c012ee186866ea6ae641c7c825ca101"],["/define-npcs/index.html","1d0b461ce1a353cd22dd21e34bc4debc"],["/delete-save/index.html","388c6271474af1b098e1a51e65b0eab6"],["/dice-function/index.html","f22a2c4ac3ca667082883eff5e434691"],["/disclaimer/index.html","6f82b5d22e0f1ba4f9d7a0cd018364dd"],["/display-immediately-all-dialogues/index.html","873b11a3a3f0bc9a61d641e4d46ad205"],["/display-real-time/index.html","19a51b65b232249a39593768ae7d485c"],["/enter-name-screen/index.html","977153a5d88c28ebcf86104f41af3f3b"],["/export-game/index.html","df2a6b3d88601a2dd4e19e651b20835a"],["/faq/index.html","25d45792fadeaa38fccbcb4fb5c5e38d"],["/friends/index.html","960de2c85804be3d8cdb816dfe6d897a"],["/gallery-template-assets/index.html","7721284de548359f00802de6af39881d"],["/gallery-template-default-ver/index.html","f75cf00daeb824df972d7b03fd6e75cc"],["/gallery/index.html","d746543611b96d7c96bd2274e6682240"],["/gallery/photo/bg/index.html","3f84e4e7d7c35d546e28f5b638be2987"],["/gallery/photo/gui/index.html","8c3daca5971c7b3f431452fa92e8d6b6"],["/game-only-text/index.html","80c17f3d52023bd0b4a702081aa38380"],["/generate-random-name/index.html","8aab382f1b6a5d024e325c7c5ce85b05"],["/gui-017/index.html","4d0c76b48eef7f8cb7fab87387f39d25"],["/gui-vertical-002/index.html","b7cb6e1808f25cc1837420b8abacbc5d"],["/gui012/index.html","595ee9f14b2cdb37b3fe0035495392fb"],["/gui018/index.html","62dd9f7097209ecbe58cacbf52d27cef"],["/gui019/index.html","bde4480904014b9da081af3a0e8626c5"],["/gui020/index.html","3debb2386a402fe9ffc3c45c50172bae"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","5d1e1b200bdfdf63ef90c951ef3e2aee"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","b547adce8e20299427117931ba4304f8"],["/hide-textbox/index.html","7863fb8638de7ff3f8a1017091f6c7c2"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","e213e26dba16b041d55e9f0fdcd068b9"],["/images-tip-function/index.html","92ecf59fca4e3dd97ff930981dbbdf4d"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","6713d9be0c99b1c036041e22bbad81cd"],["/index.html","f7a696e06867022618fe50c5a86a6819"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","3c7bbea25430521f4c63127a911be7d9"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","a703f0008ae05b639f22e12e4b1edf03"],["/items-sprites-effect/index.html","c3e0f18a1065421759ffacc8a20b9fd1"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","3c72ea9a03678bedd8226555fa023ebd"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","3b82e6cd622e7205ae1f17c0614a134f"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","38bc249582a04557154e5810efedb1fe"],["/link/index.html","c525323f6d717f7159dba0995d393faf"],["/login-reward/index.html","35ed0ea1bfe2bf334447800ed785468f"],["/main-menu-music/index.html","a9c74fc02644d8f4cb798e5a73ea5a5d"],["/make-butterfly-beautiful4/index.html","9179a6d829dfab9939c6c43b61783321"],["/map-puzzle-system/index.html","2842d31ba6ba0b3f39ba23153bc0a87d"],["/maple-effect/index.html","66d325fa2adc1b5c7272442e8ce21bbc"],["/memberships-2/index.html","75888b7f3fff1bc663f76b80855acb3a"],["/memberships/index.html","527a6f12c6500b6e00f5fb1ead87c282"],["/multiple-language/index.html","c7301b00451005f8c1fde631875081e4"],["/name-input-assets/index.html","e37e4b7f7787b2b6900bfd1e15662018"],["/new-year-event-2023/index.html","1df43403a9e152c74174641225ed0108"],["/newsletter/index.html","27f509c1c869c576a261cd5fddc5fca9"],["/nsfw-limited/index.html","f0e5dd7e70fb134c28520c317cc4d4d0"],["/null/index.html","590227ea6d2aec174fe97584f3d1fabe"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","dfce72d424519580cac2fad806f3b995"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","5ee1b5558acd9c0da3fed840924d65ea"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","fdfbb7f2c47bdd677d68206ea68b9618"],["/openchatai-renpy/index.html","471a67593527b3fa5edca5ada8f44c2e"],["/original/index.html","155db7bd3cea61697f56924804bb293e"],["/page/2/index.html","d4aa2fc6033ce6ada31fc39735ce543f"],["/page/3/index.html","125106f6abd2b8801be32a5d82f19184"],["/page/4/index.html","efdb80c65391bf9c14ceb9b8174fc304"],["/page/5/index.html","ca31c968a43e66f79a481397155d3a8b"],["/page/6/index.html","1aea74f31856db249b215712a33bc843"],["/page/7/index.html","1182dfc8c59f4ad4e9213d241a62af4a"],["/point-pop-up-assets/index.html","cb0ec75e124181f40cd8957f0a3b8d33"],["/pop-point/index.html","908c4970281565d2341a7d26595f3e1a"],["/privacy-policy/index.html","b9a294d3af45aa39da2829c74efb87f3"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","9fbfae8ce23734f8bcebb5bea571aa99"],["/random-number/index.html","0633bd8bc35017969c63823dde59d61f"],["/random.html","b77548e9d89ead67032fb7b287a2e691"],["/release-017/index.html","22faba912ef6f1a88ddee34bf372156e"],["/remembering-choices/index.html","74e7a0d7c0f2faa10f33c5e784caa343"],["/renpy-basic/index.html","3f2beb40000915890a0f4bf86429484a"],["/renpy-crash-glitch-effect/index.html","739019caefe1d8cb9b395ff8263cc960"],["/renpy-flip-image/index.html","fa5700311359a68d876fb0422545db26"],["/renpy-matrixcolor/index.html","59768d8855f7b64a946dbc354aabef97"],["/renpy-overlay/index.html","90f9033dcaa33607a7c40fe29702d79b"],["/renpy-review/index.html","6a77e6ed9e81d5213d1c26e57d2c1148"],["/renpy-typing-effect/index.html","58200442b94504d32a856d2aa5e4db4b"],["/rpgmaker-assets-menu/index.html","b52a97119af1dde03cdea128de5e1bb0"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","3047d534ce27e034ca1d0172d4f27c66"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","4e49e09d7ed3eba3aad4e9452830ed77"],["/sakura-tree-background/index.html","beae18ce3a69cd68cb9d92df8f842873"],["/selected-button-style/index.html","712673fd1eb835b945a6f787d1ab8662"],["/service-worker.js","dc18850b3b92b1017dd28c18b5295111"],["/show-variable/index.html","db48f5d7db7b03dc11291a5156c6686a"],["/side-image/index.html","0927289aa689852ab8827a011399150f"],["/snow-effect/index.html","f345806d62a8878630e1b3a21186b585"],["/speaking-animation/index.html","a7b612a552d96a3ce6c0c39bf753f506"],["/splashscreen/index.html","8e7f2493459b67b4a4271ceb37967dbf"],["/suika2/index.html","12227de3559757a3a464ca91c6a74db1"],["/sw-register.js","4c9a9945b20f5504458e05b14b7741e3"],["/tags/Hexo-plugins/index.html","2fc12c852a1f2df1988bb880ef9fac05"],["/tags/Light-VN/index.html","4a7043e04815bdf7d3766366cb81de40"],["/tags/acg-creator/index.html","870b9e883bad73de929fe789280c85bf"],["/tags/ai/index.html","fe81f9d0a68fc0359ec3b5683e0016b9"],["/tags/butterfly-beauty-diary/index.html","d309ff910e49c9ed461f247dcfe63fe7"],["/tags/custom-hexo-theme-butterfly/index.html","8467cab0827f5b352c9bc84435d61995"],["/tags/custom-renpy-title/index.html","af46a0f5bb9cc1863a426340bf68dd9b"],["/tags/dialogue/index.html","12279ccc50c5b3981d68790e15704cdc"],["/tags/effect/index.html","22d36b78665b34cbbf399e6bb799ff03"],["/tags/event/index.html","6d8eead791541e7c7f9a879bf253a3ea"],["/tags/hosting-own-website/index.html","42c7b2d97012ce7314c2161c0d6c795e"],["/tags/index.html","da5603b7b33b962d6341b662778074e6"],["/tags/itch-io/index.html","cdaa126c1498d08d69ced492d520a3eb"],["/tags/light-vn-update/index.html","231fa2e67fa1b99f408f4b4d7e36afe0"],["/tags/nvl-maker/index.html","f3ca0e4e96eb467b2cccd0403f0b344b"],["/tags/player-related/index.html","643e9dc17701632dbca9d0e2435309e1"],["/tags/pro-tutorial/index.html","c5982c664e3d73b7f51d7a1df9d0ff03"],["/tags/pro-tutorial/page/2/index.html","d0eb1638154c1f2889580c3a21c42b53"],["/tags/pro-tutorial/page/3/index.html","18f108200d4e1e0e24eab1f6ed9925f6"],["/tags/pro-tutorial/page/4/index.html","4197548d566fe9515b87a8619514da43"],["/tags/renpy/index.html","1026dd8e9b137972da3bc0e053732578"],["/tags/rpg-maker-custom-map/index.html","dd378dccb110340eed5d8ab2c6d41695"],["/tags/screen/index.html","3813bb7114925043e4fa67acafed1e78"],["/tags/special-function/index.html","a7894e370b8d1784518155a32cd41597"],["/tags/suika2/index.html","530385f93c1750c0e1b1d63bf2414af4"],["/tags/tyranobuilder/index.html","c8863c281596c66ca6fe4ae540cfcdd4"],["/tags/ui-assets/index.html","49d6efc04ae328a144720683ae37ce98"],["/tags/update/index.html","bedd04c0ca1bc7be27a21a62d374c028"],["/tags/upload-game/index.html","d646f1171948e7b9dc99bdc8540128c2"],["/tags/variable/index.html","aa95fbcb75fed1f2baaa362adf5555bb"],["/tags/visual-novel-maker/index.html","39a8489f56426d6a7a0a24183fdc2eae"],["/tags/webgal/index.html","fe981769ec2ab9254f061f0f73d2ff18"],["/tags/封面製作/index.html","d154aa85a0ab62fe16d83ebde24217ba"],["/tags/背景素材/index.html","af2127fb48d8b103e6085361899af424"],["/tags/隨機功能/index.html","280fdb92f65768e41213b5f6b07dcdf6"],["/test123/index.html","eda8e9e1d2f1cde27e397e9c16904056"],["/textbutton/index.html","cef24ec7c0d314744a48b8cc67b78219"],["/to-do-tutorial/index.html","bfa6447761e86ae8829e41d62aa03ded"],["/tools/index.html","66b6d42c69b1698dce254658c011babf"],["/tooltip-function/index.html","be7eb06aab6b8381ce22e40ea0beeb67"],["/transfer-to-hexo/index.html","36da4b0615041803d829828a54963ce1"],["/tutorial-update-history/index.html","e2b663932b43b7163258791db51f0768"],["/tyrano-name/index.html","3a2dafa590dbd8fe5e8b80c76cf238f9"],["/tyranobuilder/index.html","89b138a9dbb19f45730ab4bf3fc9189e"],["/undefined/index.html","2183088824c6b23deb1eda9a0208fe52"],["/unskippable-video/index.html","cf9a0fdaffed5478dd6108ad156df469"],["/update-20221211/index.html","08a1e4d49b1a16bbe222f6f76164c047"],["/update-20221218/index.html","eb8509eb1d08e602afc1c27016da7061"],["/upload-download-save/index.html","c4acf7a4492afdf68b5f5ee44a73db6b"],["/upload-your-game-itch-io/index.html","5ec6b87d405cd2137a3eb01def32a20a"],["/use-list/index.html","c25699749f75e7bf7ebda783c5e61314"],["/use-nvl-mode/index.html","95e86eca5ee62c02119d9c5363cdda25"],["/useimage/index.html","766cf001cec6a6f63989273ac446a984"],["/variable-change-image/index.html","cf13ef28f79f8e05cd8d1e6da737e726"],["/variable/index.html","c9a9bb6d66ed7f45b027dd52c9d8cd3e"],["/vibration-function/index.html","e823947f0520beabeb078610deed4f64"],["/vnmaker/index.html","4b36c1bbc416e43bcd560f31be873942"],["/weather-effect-tutorial/index.html","2e65dfd8da48664c0c6c768d969a08a8"],["/webgal/index.html","3d27041c2d52d74f178a3cf37581883c"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
