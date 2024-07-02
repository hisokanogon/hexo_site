/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","e1c5120ae09b490807a0b34f400c9e04"],["/2024-future-plan/index.html","73de186ce5259273a9807f37d16574af"],["/2player-battle-system/index.html","9f38f1649add5f58f4640b18938659b5"],["/404.html","429a43e65e49403c7573b94b58fa8125"],["/about/index.html","01840274a1d5636442473716d4d5839a"],["/acg-creator/index.html","ffb9114ec9cbfbbb1a5a4db5f866f5cf"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","a90f26b55481a96ff14e1570c0577ea1"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","fb46372d52c33ac972a775898f426fb8"],["/animated-title-main-menu/index.html","16f67f063818a3d066ae8b177d211cd6"],["/archives/2022/05/index.html","24fd0c34d8646a0bb4627dc1365ee678"],["/archives/2022/06/index.html","b22b3a62d627a7a2925de01651b8d4a6"],["/archives/2022/08/index.html","961de52c4965b7951f1e4c54f6bff4e1"],["/archives/2022/09/index.html","ec8be5e63bfb8159385e7ba597e822c8"],["/archives/2022/10/index.html","927ebaa67b98175216550ac64f4d8f75"],["/archives/2022/11/index.html","0c238e61015660565480e2fcb34061d0"],["/archives/2022/12/index.html","2e1591fe6afd201a5e9b2209136e0641"],["/archives/2022/12/page/2/index.html","3ae89bf5cfd076be522c2151aecaf69b"],["/archives/2022/index.html","791b7e59b92aaee4d881df66303c976a"],["/archives/2022/page/2/index.html","2d786fb563334e2e19e3ce267a51c6f7"],["/archives/2022/page/3/index.html","7a1f2cfccd61b76038b2bb75d6b2e15c"],["/archives/2023/01/index.html","1c8af41c46f217a1499124c82d863030"],["/archives/2023/02/index.html","cfd8a15c1c95e9423cb7d8e0d83e1ecb"],["/archives/2023/03/index.html","b744d641ed8075bd8e743ff7c6268074"],["/archives/2023/04/index.html","4dd33dd6e361c1d427733656bfdc2e07"],["/archives/2023/05/index.html","54ae915f7cb0a551a9bb01f54332807d"],["/archives/2023/06/index.html","8b229770a6368f589612efbee153bf12"],["/archives/2023/07/index.html","b0939ef0622051eec0ea37e669bf1a3b"],["/archives/2023/08/index.html","531a6ce04c54532d2b6124c1bf4b0fe3"],["/archives/2023/09/index.html","8281280abe2cc2b0ecdf1280013d4a2a"],["/archives/2023/10/index.html","9077f4ba4f129caaba91820927dfec82"],["/archives/2023/11/index.html","4e5bdcddbcb237d0079a6ac6e733ee64"],["/archives/2023/12/index.html","1a78bc4cb0cdc79f88e6d9b2308ff8fe"],["/archives/2023/index.html","7970227daa408f3f6c7cf1f39310e682"],["/archives/2023/page/2/index.html","e5bcac42451be54c3ee8e3c4f65718ff"],["/archives/2023/page/3/index.html","30cb684c1ff9306fef59d00362fe3e04"],["/archives/2024/01/index.html","c8501c7d551263aea58493d70eeb7aea"],["/archives/2024/02/index.html","9d0cab73c1be432e719f29e7185843a8"],["/archives/2024/03/index.html","2da5034b6487bde11ee222464cbed9dd"],["/archives/2024/04/index.html","ac786cf4139b806d0d421614e31bfef8"],["/archives/2024/05/index.html","f9bb56a524bfdb509d760161440fa5cc"],["/archives/2024/06/index.html","81cc20c4b703362beb0e80818fa384b3"],["/archives/2024/index.html","d202525986f7c166b12b4d1da53137b3"],["/archives/index.html","d17059bdc1fab506e07a67b08af54d55"],["/archives/page/2/index.html","2f3c53cf89f67182fdd09422fa004e05"],["/archives/page/3/index.html","f0195fd9c1b623dd3b1a9c1462c2a839"],["/archives/page/4/index.html","28f18c958b5e8f1b51e4c4958472eccd"],["/archives/page/5/index.html","8ca8bc63b10d523ce8b854f1d4285006"],["/archives/page/6/index.html","1ed76fbecfa95f20b71044c7a572c819"],["/archives/page/7/index.html","b6b53035711dd6d9657ec1eecee4bc3f"],["/artitalk/index.html","86d1a451f0f572605fd1fdf1388a19c4"],["/battle-beautiful/index.html","4b582f1119f9a4ade5679bf3fdec59d7"],["/blur-effect/index.html","189e58869f2324eebe02a6e642d9e4fe"],["/butterfly-custom-tag/index.html","4532ef0309e830582d10ce69b3599ee3"],["/butterfly-plugins-faq/index.html","75b259cc41d1da17a8277068db9e939b"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","7a4b4e635963239b367c1c4a2f229a98"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","40911fccf3aa428a27c02c057d12a9f1"],["/categories/announcement/index.html","7d28cbb9ea0169acb3e40780326351eb"],["/categories/diary/index.html","7bd27e13da3afacb23d8c7f7710a8de9"],["/categories/game-dev/game-engine/acg-creator/index.html","c97a85e720eea44c8558d0c70c9a321f"],["/categories/game-dev/game-engine/index.html","ca4f5fa78737d9b5111a889b1d231234"],["/categories/game-dev/game-engine/lightvn/index.html","bc39c3c936339afb10af2ab545d965db"],["/categories/game-dev/game-engine/nvl-maker/index.html","39165a5a88515f8cc5be35c0626adabf"],["/categories/game-dev/game-engine/page/2/index.html","5d52c20b6486365333246bbc74761b52"],["/categories/game-dev/game-engine/page/3/index.html","2001de190cb5786ac61610760fdcf72c"],["/categories/game-dev/game-engine/page/4/index.html","0647ff50510e7aa618a9c0cff51a7538"],["/categories/game-dev/game-engine/page/5/index.html","eae61f9d94c7cd93200478155774b3a9"],["/categories/game-dev/game-engine/renpy/index.html","d686ca75b8859bb21d6162ecfd1dde94"],["/categories/game-dev/game-engine/renpy/page/2/index.html","6ac4df74b77bb5295d8459323d52bf22"],["/categories/game-dev/game-engine/renpy/page/3/index.html","845bd670d00e58ce9ea8482356d4fed9"],["/categories/game-dev/game-engine/renpy/page/4/index.html","b8fe220f4d34e9725f7921c6b2e017d9"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","8980d33d20ee5c44026cbb23a4afa53f"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","028a59d7be7c5e15d03713f04b5900d4"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","4209517d9201ab30e4d70db74e87b6d0"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","52dcd96dfeeba8954bd2aa9280334e93"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","d91d0f49ef5b7df12c9f471c2b7b8296"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","c2a787e5614f2dab947c90d639a7c773"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","dfb2634481f0a5559ce0e3e4cbb23e37"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","0dd6f82473ac9cd7d221e2eac25705d8"],["/categories/game-dev/game-engine/rpgmaker/index.html","9e3bdb5f3885cebe28d20b10919fec9d"],["/categories/game-dev/game-engine/suika2/index.html","d8af7ce08b61226a0f082c653adee959"],["/categories/game-dev/game-engine/tyranobuilder/index.html","4cf3aeedc15060765f8de4ed9f8a7fd1"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","9f0582c00ec72320e466137a4d4f37f0"],["/categories/game-dev/game-engine/webgal/index.html","19fed5db0770b94bd6e8a6fbdf0f22ac"],["/categories/game-dev/index.html","7f8482934612f7a0960d5744411b8b54"],["/categories/game-dev/page/2/index.html","afb73424923af1e9a9f37b63f1e25a1d"],["/categories/game-dev/page/3/index.html","06293ec7d1d56ac447f0912498c1a5fb"],["/categories/game-dev/page/4/index.html","c0693192ce9bbd6d2151fa93769e22e6"],["/categories/game-dev/page/5/index.html","b68c6083050247c5835c3a58d253ad09"],["/categories/hexo/index.html","728d43b792d01cad6cbf7afb09655140"],["/categories/index.html","c0252802515965453a7f9ffe8a33aa91"],["/categories/material/index.html","67d1183dd64a61416f4e0f4953894fab"],["/categories/update/index.html","6b7ce91530b385305745bb234c062add"],["/change-according-to-real-time/index.html","f65b2a88863695b939f17738b8f89877"],["/change-character-info/index.html","e577c0af9e1d174fee3993e9ecd45530"],["/change-title-after-first-time-viewing/index.html","7c62a7e2f3fc089ccaebeaba0a4739e9"],["/change-title-based-on-event/index.html","0885a8a24182689fa83fbeb95c95740a"],["/character-interaction/index.html","4edbc89bb7156455a2d6a9ea21f88e03"],["/character-stats/index.html","8aaf5f39b6012fd1383425d7cec8924b"],["/chatbot/index.html","c330b8ee9fe2f98afc9cb7e31a5f6bb6"],["/choice-time/index.html","d99572a992658fc71f1ee1987c146681"],["/comments/index.html","735b54e65470496cddbafbc30e7b5e15"],["/commission-info/index.html","393ff36f0790997d470c080fde02ce06"],["/count-login-number/index.html","0d793332e0be56d836ded6734fce74e6"],["/create-button-anywhere/index.html","8671c59ea0cef1aef70e51d9ea210637"],["/css/eurkon.css","bb052dd5b3d505808680d97fe7bf9bc0"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","0e5e072e182643ad9b82791c74b7c0e3"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","e59d6303a090d2fce7d0ea23451ea28b"],["/css/rightmenu.css","924043b80897195d42d862077f9ff5b5"],["/css/siz.css","6f114b4a54d6dc466edd232d2d91ea4e"],["/css/swiper.css","fd5d0a01b71311866052396592038e9d"],["/css/swiperstyle.css","3287dce9864bb64a20f0cab0ea06a990"],["/css/var.css","a62e1f556f5d251f6ca541b217d62f4a"],["/ctc/index.html","5e4551290d23b94f665491533014120c"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","4c4243a99450323a90ee66e514c36ff1"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","3ddd615a669b2b315f46d9a3c72a6253"],["/custom-gallery-cg-screen/index.html","70a6bf792a6d242aa464d7f00676709b"],["/custom-launcher/index.html","76b3056ff589600a41f0826d5f3746ac"],["/custom-loading-screen/index.html","9dac72bf5a9c62144391f62043dea3d8"],["/custom-mouse/index.html","8de833a634e8741853ad267dd993c996"],["/custom-music-room-screen/index.html","fa8ff12973709635f252eec6388cc42a"],["/custom-music-room-screen2/index.html","6150552d6f0e6edb5dc01a086a7fd5d9"],["/custom-nvl/index.html","6b4b00f9df4b4299e44e82468522ec0a"],["/custom-player/index.html","e045cae7f834c2eb27c7201288311e29"],["/custom-preferences-screen/index.html","5bb1f5707dea2392572f834a1d8089fb"],["/custom-say-screen/index.html","85d0ac4ae03f7c1fa48fa5ff241d9f70"],["/custom-style-position/index.html","59cb7760200ef3e4443de2d7adf87529"],["/custom-style-prefix/index.html","fbb996cd8c223f25e10b7bac59ef18a2"],["/custom-title-screen/index.html","6429c4c31256d6ed6495389be89f1ca7"],["/define-npcs/index.html","4d0d3a608e69c9826ced0223cee9055d"],["/delete-save/index.html","af08bdd563329f5aa6de83debcad6d8f"],["/dice-function/index.html","14925baa4a41eacd6df9f9f032ee6795"],["/disclaimer/index.html","b40a727505083ad31c5faff5415f7ef7"],["/display-immediately-all-dialogues/index.html","836357dbb4e010621cd932e316a0f3bb"],["/display-real-time/index.html","7f8717f5da71478cbb9909c51e02ec6a"],["/enter-name-screen/index.html","e7e328caaf67954b6ee1c3411d993db5"],["/export-game/index.html","4927c8e2986bccb765b0969941448eb1"],["/faq/index.html","5f4e864eeb9d268f5e23098a6437ac9b"],["/friends/index.html","c856d8aa81fa828a23c9c85e8c8e0c59"],["/gallery-template-assets/index.html","67c53e69d83e2d920e3a384790224d37"],["/gallery-template-default-ver/index.html","28c5586abfd5c45d24a18ffb93955b87"],["/gallery/index.html","88f81ee953670e8a7f6097660eff9926"],["/gallery/photo/bg/index.html","7dee67bf9b73312f4777b757e5a30edf"],["/gallery/photo/gui/index.html","81c10c17ffc03fb502bcd236b560879a"],["/game-only-text/index.html","449bc20cf8fca9b2e5394db6783b82d3"],["/generate-random-name/index.html","a687e8f65efd7ade52c90764dc5263bc"],["/gui-017/index.html","0499ef334c1254a1b5cdf1ceaa1280ef"],["/gui-vertical-002/index.html","8ec4b8889bd0b77495ff025215027d32"],["/gui012/index.html","d3b24978b77f71f497d9bea89e50a790"],["/gui018/index.html","d06d9c7c1b2e6dd7fced0a906c6505b5"],["/gui019/index.html","fe5a2b0eb75fcd2d1ce9b2ea42ab6f6d"],["/gui020/index.html","c7ada489dd7d4d8ca40e958c11eed1dd"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","ef9d7e00218b060b98928b69fa79bc27"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","515744148469b9839c57237b0208dcc1"],["/hide-textbox/index.html","632dbe6300e68720b4527052d929124f"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","db6c9e4d2a1845752c1364ab4eb54789"],["/images-tip-function/index.html","cbb3bde9c8a5fd843a89f299f0535679"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","e3d50b7c482190e6f4e55041fecb0c8e"],["/index.html","b7211655ef7fb1f3b07ca00e05c33ed4"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","c9e1ff292fc73ce397c6e3042b05c996"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","3ada9df77e10f0bc7a5058710367280c"],["/items-sprites-effect/index.html","7c0734bd222132cd3ced6a90d421cb34"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","3f0eac40de8c150c523880c7591260e6"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","fe006817f3474513d0718033c5417040"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","fe749d0d3cb8ca63bebdfa106bd02fef"],["/link/index.html","0ea566dad6ca08c2b1d1ee49482906cb"],["/login-reward/index.html","a5c86e786e4f8bee2e7e235c944974ef"],["/main-menu-music/index.html","81d86c04d9213412e7350f764a9a4c55"],["/make-butterfly-beautiful4/index.html","a9d9c3a8a2884b87fb4784bc8502cd87"],["/map-puzzle-system/index.html","47d39efe5b1e5a785706b08e2d4eadd4"],["/maple-effect/index.html","0d2b9b780694cea386ec97e7114b3822"],["/memberships-2/index.html","a205399e0a57cce60a82a15218ee090f"],["/memberships/index.html","ded66f89ecb9b0d23642b277ba7f9e24"],["/multiple-language/index.html","26aa162c066876da73ad3c95741b9d99"],["/name-input-assets/index.html","76dc5e141b9e4442f605b62cf4e4f168"],["/new-year-event-2023/index.html","60dc20052428e83a10f62e7fcd77f2db"],["/newsletter/index.html","7338dd187b5611f4c1da2076ff255ec1"],["/nsfw-limited/index.html","4d51ce57919958f9c5d0d42921dacb63"],["/null/index.html","77eb65ad47f222a36635862c1a185cb1"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","8759976e8a94e8b30c18924f95af4c45"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","ab0b140d6389858154f16811f3f1d322"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","11484c051caa8a43beb112d695c3acca"],["/openchatai-renpy/index.html","2d497d1429892f96f99808d1694e3db6"],["/original/index.html","d36523a4c2328488174483d17901c61e"],["/page/2/index.html","f5788be32fb57a1bed195439efa6e633"],["/page/3/index.html","3c6cb94f520c30562234a408af80b538"],["/page/4/index.html","0e44f64a49403a8355fb2bbc2a8b7d63"],["/page/5/index.html","61763028e6715fb76c00fa8f5d9d5c55"],["/page/6/index.html","c1f9a1878e08ae31569799083f68beeb"],["/page/7/index.html","bc8ccc7a9bec2bccc331544b9c767c39"],["/point-pop-up-assets/index.html","98b35e07c9854a509801343fe6ff54f3"],["/pop-point/index.html","efa29b4d304d93692466d3f7a2c7f940"],["/privacy-policy/index.html","f84f84c461ff45925543ec3499d84200"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","d290fb14170d62380ad5883e22c1c431"],["/random-number/index.html","ae7f183968b1abf5a1e5743e6d5f31d8"],["/random.html","67cdbec22812051388bf630a71811d39"],["/release-017/index.html","4de18fb08b7ca5afcc6901d3806d8257"],["/remembering-choices/index.html","c3cb539c1d213188161fd2a787b503bf"],["/renpy-basic/index.html","59e03f3b84fc194c3bb7b05bd91e195e"],["/renpy-crash-glitch-effect/index.html","dc3e6abaf6988e1e97655fd98c4ac57c"],["/renpy-flip-image/index.html","2ecd5aa1685202a2d53c8190493b4936"],["/renpy-matrixcolor/index.html","bb917df58f8e9ada3de6b7e744f2c1fa"],["/renpy-overlay/index.html","988168f96a845ff48edc70148b156e2e"],["/renpy-review/index.html","26156a150b6625d91525ff6ac6f77e16"],["/renpy-typing-effect/index.html","c1173c8206353cca061e291efe1c4e0b"],["/rpgmaker-assets-menu/index.html","8d03592dd94d0aa1d1202990ec455904"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","86424aeb6b80263317799686383e6006"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","306279ce846b848acfe9f130283710e4"],["/sakura-tree-background/index.html","d09d94236d7392f40e480a0c7eeaef60"],["/selected-button-style/index.html","0f1837442fbbbf999f0b2069eb700786"],["/service-worker.js","72591225cc1538113cb308d6934c1d71"],["/show-variable/index.html","4ffba222a7aedd02f434a45d0e61d2a1"],["/side-image/index.html","f10588a5e2b6a0d609f24e64df5e4202"],["/snow-effect/index.html","7f19e3723e6fc3a6b49ca5482ab8d03c"],["/speaking-animation/index.html","ad9bbde20291316f8e89027411857f61"],["/splashscreen/index.html","d4a68f4034ba9822f6bf14a43f6983fc"],["/suika2/index.html","978d4af816995a82d508cff567b7dc41"],["/sw-register.js","225e00bc0b751ea75cfee265b440ac30"],["/tags/Hexo-plugins/index.html","a198c4c9dd14f571937c1cdbe6d82dea"],["/tags/Light-VN/index.html","6ad4cfb4929e38a4b36a8202681717f3"],["/tags/acg-creator/index.html","5038d15b330018f53b7273d25fb31440"],["/tags/ai/index.html","cd02523033ae148f8503538b78108ebd"],["/tags/butterfly-beauty-diary/index.html","86e2f2945c5a873f01ca31aa7b69b692"],["/tags/custom-hexo-theme-butterfly/index.html","ec74d1a399c7b2a85ffaebe66a9a8b90"],["/tags/custom-renpy-title/index.html","37e9503bb38f30c4e5a282f94ecf56ba"],["/tags/dialogue/index.html","424067b885d6d1bbf03d40ae2c3d70f0"],["/tags/effect/index.html","74df8a1ac3a585b1324033b99274c08d"],["/tags/event/index.html","c6c29b657ff217b25dd2bce6264c6bfe"],["/tags/hosting-own-website/index.html","afbe39f684b81baac4b49788b37e5894"],["/tags/index.html","157e531c8632fa6ee924e92df2dbfcd9"],["/tags/itch-io/index.html","2f458befb97e325388b131c64ceaf00b"],["/tags/light-vn-update/index.html","7d8802477cb64ff58002f8ba379c3e11"],["/tags/nvl-maker/index.html","edde44e881c4e5aa9dedfc797b2532b7"],["/tags/player-related/index.html","2d09595981ca0e686dde0726df3200d2"],["/tags/pro-tutorial/index.html","4c3ee3b29da7dbec681723906e0e58d9"],["/tags/pro-tutorial/page/2/index.html","32f4f0114d459a193b8bfcab897cfef7"],["/tags/pro-tutorial/page/3/index.html","32c1d99872ec6b7d282fa4a224554617"],["/tags/pro-tutorial/page/4/index.html","4e06e08f42ff510e22b7595e08b838bb"],["/tags/renpy/index.html","004fd14f41a36b96ca8248254f123626"],["/tags/rpg-maker-custom-map/index.html","97e803d06951df98ac8eb15a15272d83"],["/tags/screen/index.html","d856daa4338b7f650b924a989e2ff78e"],["/tags/special-function/index.html","acca913b6b5244e81d9aa2659a08ffb3"],["/tags/suika2/index.html","6d05085d13f9831c92653fad407d011a"],["/tags/tyranobuilder/index.html","9d3aa4e16568a0001f16df5c71b008bf"],["/tags/ui-assets/index.html","5fe8d345b573a299953dd4c7f26fceb1"],["/tags/update/index.html","152bf4bea7ff7b6ed5ab101258671455"],["/tags/upload-game/index.html","f5c08ac4a0754ecb72614fe7e9d2427e"],["/tags/variable/index.html","5e8c8e0b5406793f52ec49a00f71402a"],["/tags/visual-novel-maker/index.html","c402935d1e0e2e3c324ac5647ac24986"],["/tags/webgal/index.html","6fba6bfddba20ff352f9bd6169507e30"],["/tags/封面製作/index.html","aae8e57efe12f2b3e09bb840c5db35b5"],["/tags/背景素材/index.html","0d81b8cd08de9ea8317386ed4e7b6ed1"],["/tags/隨機功能/index.html","79a59a933ae5981ebdbc298eced79819"],["/test123/index.html","be9003c38153216257c1793b68d97c23"],["/textbutton/index.html","599f5a23faba3afe40bc73c6a19298cb"],["/to-do-tutorial/index.html","1fee02f24fa972e38df06bbffa14a61c"],["/tools/index.html","da06ed2944406bb8314c7550f79caf65"],["/tooltip-function/index.html","255c3b359f12be58b41bc8092b50b968"],["/transfer-to-hexo/index.html","1165a09bf0acc908c982703a19978624"],["/tutorial-update-history/index.html","b01bee085009f24242104b58db9448e1"],["/tyrano-name/index.html","bb7aec57d87aa5231cb9706fe29b16c7"],["/tyranobuilder/index.html","01370368654009f0df7ac032c01ede5e"],["/undefined/index.html","b561092f21c5160e132b10c074fea715"],["/unskippable-video/index.html","d9a46b883d68ae2ab6f17471074174f9"],["/update-20221211/index.html","ad4ab03d5027fe2336171c3bd6866a27"],["/update-20221218/index.html","36aee9aa2e9c8ebc56a20fd763dd8c70"],["/upload-download-save/index.html","19bc250df8b7130357a6cc6d929ff44a"],["/upload-your-game-itch-io/index.html","fd9efcf60cb98e5f75e178eb7063cbb0"],["/use-list/index.html","5a291f37a787c813ac45c701b1372cb2"],["/use-nvl-mode/index.html","94890bcdeb0cc771d4381ae3f2778b28"],["/useimage/index.html","78fe5636d6bfd4014786e2c09d2e63ba"],["/variable-change-image/index.html","1f6d7fc8100bfbd6a60fedc7246b2694"],["/variable/index.html","fb23faefb41369f35133fbb4b416de71"],["/vibration-function/index.html","7bf85d2475b70a1ebdf07caafad058f6"],["/vnmaker/index.html","fb2f67a20fbfc502e7a0ff979eff034c"],["/weather-effect-tutorial/index.html","658f133ce6d87e48e66d8d4943c825ef"],["/webgal/index.html","78d1eceb91c733612fb4797d77fbc7ab"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
