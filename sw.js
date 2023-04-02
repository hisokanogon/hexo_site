/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","702eac52f33876db1a5bcfa577cfb152"],["/2player-battle-system/index.html","c89baff05e8e21d4230607b07cf62e28"],["/404.html","714d2fde233e3025ac51ba440f139d64"],["/about/index.html","f35cb5e5be491cee0975abc58501e901"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","82557ecb80750384ace0f214304e399e"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","90eea8d9388d2b8218248ff3825c81eb"],["/animated-title-main-menu/index.html","e64223f1fb6bccbf23d09068908cdce2"],["/archives/2022/05/index.html","95e8b852480c75fbd044f1e753256fc7"],["/archives/2022/06/index.html","6734ccae440f5a2390de37ee4f524b1a"],["/archives/2022/08/index.html","e96e7f2644f63bad69f9af75ca4f6ef4"],["/archives/2022/09/index.html","18f91f496106fd931acf6cf88d05e130"],["/archives/2022/10/index.html","be16cb8ded53bf5b175f283cd6bbf710"],["/archives/2022/11/index.html","af96eeb45e7028620840c2b029e3b369"],["/archives/2022/12/index.html","c96a0a740b02b642168c2aa56b6f8713"],["/archives/2022/12/page/2/index.html","d568fe4a0c69b8def2fe964632bc574b"],["/archives/2022/index.html","aef5ea2f8d79d8a66b2495fb7aa74983"],["/archives/2022/page/2/index.html","8b5be08f60059752de5b997db9e8406e"],["/archives/2022/page/3/index.html","38c624ab7a93ca5853d3c4a386ef8e10"],["/archives/2023/01/index.html","e15cf83b66cc89f727b97d1932b92cd9"],["/archives/2023/02/index.html","4276004a3682a2e36652c89733aed7ed"],["/archives/2023/03/index.html","f4d3123e1aed6d57784df551387f5aa6"],["/archives/2023/index.html","94609c2ef1d320038949d21674f74fe7"],["/archives/2023/page/2/index.html","4a4c3968cd585fd8d58e572252dde71e"],["/archives/index.html","4e6973862ff9540f3a371b496c8feef9"],["/archives/page/2/index.html","421e9dad736547feaf34149fccdef7cb"],["/archives/page/3/index.html","4150c0e453abc53e75e69ba18b079a06"],["/archives/page/4/index.html","29488ee69f6aaa041831a4966d45da0d"],["/archives/page/5/index.html","7405d1961d8cb9acff5ef2297e47b12b"],["/artitalk/index.html","2a6558cfcdfe0e6ad0825d4644e64709"],["/battle-beautiful/index.html","73d8f5a959058a2157906c61571be187"],["/butterfly-custom-tag/index.html","4008f7a96e9eff373a0baa64859ed3d3"],["/butterfly-plugins-faq/index.html","bbb4735383732a3a9e759a68e9c1be50"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","c19b24e8705fac7f59f48467d5589ca8"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","c862a5db165100443ce3a7741e175f1b"],["/categories/announcement/index.html","40436612e838dbe9e178b1d54bed5359"],["/categories/diary/index.html","5af4f8bbe5fb3014a8a70c925c781508"],["/categories/game-dev/game-engine/index.html","a54c6eb0a58c5b99e433c0a08d109fd7"],["/categories/game-dev/game-engine/lightvn/index.html","be0a52dbc911fe5cb2f3a5f85400847e"],["/categories/game-dev/game-engine/nvl-maker/index.html","badb2fd14ebfa4a5c719938155446d6a"],["/categories/game-dev/game-engine/page/2/index.html","1758a573b0d63097ce3d4266502773f8"],["/categories/game-dev/game-engine/page/3/index.html","4e2d2ff1c397d92f3935fa3cfc4d7c54"],["/categories/game-dev/game-engine/renpy/index.html","657d31c9bb946f6a3fb55a1abf00375b"],["/categories/game-dev/game-engine/renpy/page/2/index.html","7c1f4c6f7970ba9975233bc37895e315"],["/categories/game-dev/game-engine/renpy/page/3/index.html","41a5e49abfe13af324769436946cdafd"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","c1dbf9c840925473d6fe02951bfcb3c9"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","7106a15e38631eb46d02ad2873a7d215"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","48002f26f0795ef6fb2b3c7e532fa453"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","13975a0f894f93365b165b9951d82b55"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","b026c9a2660ce49645f49327dce663de"],["/categories/game-dev/game-engine/rpgmaker/index.html","226fb07f52a3d8fee8ef17b6c7d83147"],["/categories/game-dev/game-engine/tyranobuilder/index.html","2a88ef06a902179e8c4673a44b4e1b1b"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","c5c845e0c9070d8c399e02f87dde823c"],["/categories/game-dev/index.html","cbcb1e3e9e6ec915c2776a3a3e13492c"],["/categories/game-dev/page/2/index.html","2788f470bc8ac89383b165076e5fee9e"],["/categories/game-dev/page/3/index.html","569d390f23b47678a0f3ae494c335226"],["/categories/hexo/index.html","abeac89a159b7674c2cc1d4e895f665a"],["/categories/index.html","14900a62793f7ebf66f051bd434ac43c"],["/categories/material/index.html","f09392e0ee48584ec826d130127d763b"],["/categories/update/index.html","ab6e0d2d775f9935a01a62da5de7bb3b"],["/change-according-to-real-time/index.html","f6fdb5edb0840781a04b073039ecbca2"],["/change-title-after-first-time-viewing/index.html","4a7b0b4b5d6f7ee535af40a8323279f3"],["/change-title-based-on-event/index.html","149f113893c1b1b503ed6fd671607965"],["/character-stats/index.html","577759a6bba5195c19b18be8ad281afd"],["/chatbot/index.html","6eb8bdc59ac0d63d8178862ef414bfca"],["/comments/index.html","00c818c432e20a63d7902f3cff9f3f4d"],["/create-button-anywhere/index.html","36e0b8a059f92db0b031cad0018dc7f4"],["/css/eurkon.css","a4adc83d70c4fab24f241545a53570e4"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","dde0d444cdeb9e2dc0352170e9e25b0f"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","6cc029f946b58e176f8d2408a96f33c6"],["/css/rightmenu.css","437bdfeffc12961b8073fb1181818898"],["/css/siz.css","b2c1dc0e3291367b19d2638cb2b0fbaf"],["/css/swiper.css","7b92b745404c945c0dbd46700982ab6b"],["/css/swiperstyle.css","505613753f5d67108f5d43e4bd9f006d"],["/css/var.css","0fa7a38422ce0c4e5557f7a1015250ec"],["/ctc/index.html","4ff85ae8c8559d1e9d2cc70e14109cea"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","eff24b314c9abf22d80f9a92a3dd793a"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","6345bd680cadfb1fee097e78cae0c257"],["/custom-loading-screen/index.html","73f063d6f00fced8dbcda2c4f4faaae2"],["/custom-mouse/index.html","835fa71b042b89ba75e38a7f2dd82c0b"],["/custom-music-room-screen/index.html","f7a74bed5bdace9d9e09fda9bb459d5e"],["/custom-player/index.html","53725ad6a3fe1915de670b40bb1c369f"],["/custom-preferences-screen/index.html","5bdbeef1f1ee8f9fd1ef3908b8d5da3f"],["/custom-say-screen/index.html","565e1f03c9a954f55a8861a970bafe48"],["/custom-title-screen/index.html","f6e82a8390148197577f2db5d56104a2"],["/dice-function/index.html","e06bad3ea5c00f9d1b1e5e0f56396066"],["/disclaimer/index.html","437b58b23529a0feb4312fdd1d977140"],["/friends/index.html","61b3a9ea9f17858da06443f8ba417f99"],["/gallery/index.html","967372f5972f7d75b5c7a658b9148ada"],["/gallery/photo/bg/index.html","272106db03538f537efa9b2d18105da9"],["/gallery/photo/gui/index.html","c412c75b2eba8e168cbc66146b4153f1"],["/game-only-text/index.html","dd9bcf1711032536558aa64b9bc84aed"],["/gui-017/index.html","5470633c133c7969d754c7b28c254a71"],["/gui-vertical-002/index.html","58155b87711ef993987ce0ada36e9541"],["/gui012/index.html","9064ee3453f7819fd1e6f57124cf6b14"],["/gui018/index.html","dde4de565e715fef80e3d518b88b6eda"],["/gui019/index.html","ff14f32a2db2fa95e42d6fc9b2a649cd"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","d9944928db166e7b3b927939c6afde06"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","a805d210e9fb0b1366d48ee45468a70f"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","f3248dae4175bb913a96e86f14e06bf6"],["/images-tip-function/index.html","ca371ce2a3372505023389620fb0de0e"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","0253341ec307f08ecc34b73f2ad3d6c5"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","aca428482236f1bedb3e55160d7594b6"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","9b0f3c19abebe8be0fa1d86b1db850f8"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","defbc8c28d87f5cd42c2b4b53bb867a9"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","4c094a403f451cbd21576d45895ef872"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","004ed8cb4a3d3bfbdef28cfb8df88e91"],["/link/index.html","3338b13b17d967835766a9c8c40ede44"],["/make-butterfly-beautiful4/index.html","1b399794d030c67ebce240d08187d789"],["/map-puzzle-system/index.html","348d6dab6ac24b3cb5ad21a2cea1e04f"],["/maple-effect/index.html","e5886392a10a8677ccacca13bd706c4f"],["/memberships-2/index.html","2ad64018410d6e0ca9ed5151351f6bf9"],["/memberships/index.html","78882957989c7a6d9514904ff374ad00"],["/multiple-language/index.html","d77d0f95e245cb38c55329649e705647"],["/new-year-event-2023/index.html","3d8a7ea830bb5cf8be07ea0cc34b2d93"],["/newsletter/index.html","ce605649708e39e0aed111492f0e1ea1"],["/null/index.html","57027e7aac5e3efc074d27288023e605"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","14d995835b74c8a473952d806181133c"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","bebf88b5237b5b4c37fa4bece81a36f3"],["/original/index.html","ec5f5c22bc5f49839bc60f804505c68f"],["/page/2/index.html","8cb8c46419f9d30b3baf780d75e64a02"],["/page/3/index.html","ab1f3bc31279dc7294481398ff4a15cf"],["/page/4/index.html","d547a7cdadc62e9e073d5badd1087c11"],["/page/5/index.html","340c99a185ef3ecac8abe591c9bcb872"],["/privacy-policy/index.html","8ddc2d32d808322e4cae98e32a4abee6"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","6af978a381aca32820bee94319aec405"],["/random-number/index.html","e2067a799a20566c2c246cf13f60e1c5"],["/random.html","a0e9509041d4e01a9597c4f6bde27a7d"],["/release-017/index.html","5fb096fcd89c344e7a1003e9ce7e5a0e"],["/renpy-basic/index.html","4de758332fbc29823a20953bf885aa02"],["/renpy-crash-glitch-effect/index.html","d0e7e01f6a1b6879e0363606c1cbb248"],["/renpy-matrixcolor/index.html","c5ac623ebe399b05e15fb31ec6c6092a"],["/renpy-overlay/index.html","9f169948945ab344471d1bdf767196d2"],["/renpy-review/index.html","e26bcaa2f29aef5c81d166fa0f0880ab"],["/renpy-typing-effect/index.html","8f74480a3778f747fb30197b5eb71690"],["/rpgmaker-assets-menu/index.html","5b53b77487c449957ebe04af9d2e8f76"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","fc4064616c08d2e6d04f7193a226369f"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","271978028c448075885ce5620a3d8636"],["/sakura-tree-background/index.html","3d96a3a14068e279ed3b4ae9a7debeb6"],["/service-worker.js","c0ff00afe99c4bd57578d4e354d1540a"],["/side-image/index.html","7e7e661f75e9b76f6365b240e8580e7f"],["/snow-effect/index.html","307dcde8fa72d91485f0bdfd4235bdfe"],["/speaking-animation/index.html","7f8e884a66501196c2c2a1838cfe5e06"],["/splashscreen/index.html","9cd7eb0929e51a74b4696ba4ed14fac3"],["/sw-register.js","57aeeefff6152d6e570c9bc82f4ba725"],["/tags/Hexo-plugins/index.html","599eb8d0a87d2442084cabdce388761a"],["/tags/Light-VN/index.html","4699fbd52cb7f4cbce22958ac256120f"],["/tags/ai/index.html","a8465a6e45529b8e01e00854b2f81ee3"],["/tags/butterfly-beauty-diary/index.html","99d6cec36e9900af51dc9b37f7691ce3"],["/tags/commision/index.html","c3f7b1d5bf999bfe044ef5d88114f608"],["/tags/custom-hexo-theme-butterfly/index.html","537fd39ad5f16e46a74d934341be7e7d"],["/tags/custom-renpy-title/index.html","8ad223ab32d59f547da56425b37d38c5"],["/tags/dialogue/index.html","aa78fe6bfdd0da99359ae7e915d3d3c5"],["/tags/effect/index.html","e960421db9c23fa9dded8fab495fcd45"],["/tags/event/index.html","0e49cb55a0a0af3595f5e75788ddb50d"],["/tags/hosting-own-website/index.html","68556aad40ab1723ce4b5d49ec1bf486"],["/tags/index.html","e1cc91f17e7ddedf292dea3d2eaee27d"],["/tags/itch-io/index.html","c5e503a3758fa735ddddfe7fc00f0bd3"],["/tags/light-vn-update/index.html","93d39c16120f968952ebc2a8b76749b1"],["/tags/nvl-maker/index.html","a9198fc4966ff680ae977164edadcbf5"],["/tags/player-related/index.html","20904e7045e7bc972855514057762ab0"],["/tags/pro-tutorial/index.html","29ab441d3e6285e60d14b116f282bbe8"],["/tags/pro-tutorial/page/2/index.html","485df33750fc5de0ad10a29b93469048"],["/tags/renpy/index.html","855d4c57494038f2eaa304c30c17d2ac"],["/tags/rpg-maker-custom-map/index.html","30dae3ab222daa3599a7ada2aef060a3"],["/tags/screen/index.html","c8738bd0a19bf54e8a591535f83de74f"],["/tags/special-function/index.html","10b32919b9748d66d9fdb644a7aeea8d"],["/tags/tyranobuilder/index.html","149eb46e57a6f060585ca8c6213045a5"],["/tags/ui-assets/index.html","e8f85e3fbbbffb4f7ceac7d1fdcfd08d"],["/tags/update/index.html","5b77f3b1bfa8a28b8ed6e2f6dc49866d"],["/tags/upload-game/index.html","67bd151bb64242f031f4a78e00546c9c"],["/tags/variable/index.html","e1e1abe449e5962c0f8840be89b18a17"],["/tags/visual-novel-maker/index.html","c30dd313ff4d1ca28aeaf18a93639fd3"],["/tags/封面製作/index.html","ff0421f85e1482f8839d18a508148228"],["/tags/背景素材/index.html","744c40ac9e4a2a67303ccd60a30216f4"],["/tags/隨機功能/index.html","10cdf055372331e4514041a7e0a2f2d4"],["/test123/index.html","98a9796e87921e1fb815678c40c4dcba"],["/textbutton/index.html","c07ee3661780c041051aeea860e37954"],["/to-do-tutorial/index.html","ecb0bf01bc3093f57ae73a0aa6c26bbd"],["/tools/index.html","191a426aa63b9c785e0ea55e22ddc22a"],["/transfer-to-hexo/index.html","faceea5fe0e27d1d91f9f02251d9777e"],["/tutorial-update-history/index.html","0525cc796e8df53fc1203355a52b657d"],["/tyrano-name/index.html","6e78bcdfb7c9b2e90e927b49d8ca722d"],["/tyranobuilder/index.html","971e6f380ace6665a247ecf19adfe69d"],["/undefined/index.html","9acb4a0fad62e7e6cb9195037242b23c"],["/update-20221211/index.html","0eed9301ccca47513da82cfdf384b047"],["/update-20221218/index.html","946f2360ecd84ea9b58a83fd4a87a110"],["/upload-your-game-itch-io/index.html","5b24455ca2b030fa8168d3b8d159ba02"],["/use-list/index.html","9d97989d9aa87828f1a4f9a0a6401630"],["/use-nvl-mode/index.html","5e5f238c54a42beb52649b0554e9966d"],["/useimage/index.html","a1259955b391724c491d3c9772411c15"],["/variable/index.html","24e29f46575dc30a1263af8acbadcb3e"],["/vnmaker/index.html","6458280fdcfb0f09722521876ea65773"],["/weather-effect-tutorial/index.html","c73763f59fc07d9e9de0f6bacd6b8435"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
