/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","84d14537f514a9028bc4b324a6ac8c39"],["/2player-battle-system/index.html","53524f2fd06cca0d918fa1fd363b9224"],["/404.html","59fac71dfefac4b7ab0f3abfdf538a75"],["/about/index.html","265bd4e4ccbb1d1efc3976ea1b3a8f4c"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","b25ac73a7c3d06b8cd507a842b95bc2a"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","76c7293e6ca70788e076e6238405ac28"],["/animated-title-main-menu/index.html","2ee0bc7c679a302a48dd2e7fefc6399a"],["/archives/2022/05/index.html","53f009e41cfd682837826f56f60d128d"],["/archives/2022/06/index.html","24d2a42aa9deff73f5d9ba5b98a2e905"],["/archives/2022/08/index.html","5455d489c9d77c9865630950d88c6f4d"],["/archives/2022/09/index.html","89f8394c5f1e6e3b16b860d8f75016f2"],["/archives/2022/10/index.html","6d10e7cce19e1f81773ed939da186209"],["/archives/2022/11/index.html","39bf9eff3d8bed22a6b2a839fedb0f27"],["/archives/2022/12/index.html","abd46488df21775bc48df74d0b05c61c"],["/archives/2022/12/page/2/index.html","54e731cb2c2bc79d3564718455d2e2da"],["/archives/2022/index.html","2912d7bf89c84708f13dce24a1ebb7a2"],["/archives/2022/page/2/index.html","f17c9b4e47c5c6e3bdeb7b6bc79a0d9d"],["/archives/2022/page/3/index.html","d64e93c91b876d1e62397a06e2998098"],["/archives/2023/01/index.html","621155f6c06b08c663552b2ae82f18e7"],["/archives/2023/02/index.html","b19b11120e91d17b40a920c0697badf4"],["/archives/2023/03/index.html","03017d8b9b4dc62aa2f4a0c182ba2c48"],["/archives/2023/04/index.html","268bc3f510999e9dd44b65b8f07d9628"],["/archives/2023/index.html","fd4ae7f797ffc1e91b9524e539cc80ae"],["/archives/2023/page/2/index.html","6d694a27c42eeb0dcc98643651976866"],["/archives/index.html","343d59d1bab4c0c0199b289884812a84"],["/archives/page/2/index.html","d6ef85eba955852a8d0d381fde20b529"],["/archives/page/3/index.html","26fc2201739c569a6690c65d73f1c319"],["/archives/page/4/index.html","ac658b517bf2e2016403695d22a10d90"],["/archives/page/5/index.html","3a81a8d7e18d897c008ad82346cfc6f9"],["/artitalk/index.html","f75517c4fb143d58e0cfeea1432a56ce"],["/battle-beautiful/index.html","a0a17afcb644f893bb3258e7a8200418"],["/blur-effect/index.html","354487591d28e1d4f57922252434c856"],["/butterfly-custom-tag/index.html","c91fd05b0c8804eaf948f956914a6e64"],["/butterfly-plugins-faq/index.html","1ca919acf4f5d99873357c6fd679d409"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","839e87c102b0169916d845302f6b316c"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","c67b15629bad375098bd81caa1b64688"],["/categories/announcement/index.html","fd2c64faba61a921eb245f2dc4498b05"],["/categories/diary/index.html","27cb6f2ca8c37adf8fe57ac752bde4f3"],["/categories/game-dev/game-engine/index.html","edb2ffa957e6f4a921e545096b67fbdd"],["/categories/game-dev/game-engine/lightvn/index.html","85ea7564cfa8e3d7600e8ed8980e8fee"],["/categories/game-dev/game-engine/nvl-maker/index.html","d831201fd78574d359def6c5ed758a2b"],["/categories/game-dev/game-engine/page/2/index.html","3c08bb2f1c767c5961bfc806ee8ebf59"],["/categories/game-dev/game-engine/page/3/index.html","ec400aca920e88facc925fbdf36a4bc7"],["/categories/game-dev/game-engine/renpy/index.html","37339fa0f2a723e5e012221f064b20ec"],["/categories/game-dev/game-engine/renpy/page/2/index.html","7899978d00ae6def9c1f87f9874b3eca"],["/categories/game-dev/game-engine/renpy/page/3/index.html","06a31eec7c6f9970b93bd455141a7274"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","fd577840892ca2f141b2747b24e4352e"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","f8e25a092407f68cd8697673dbbe2883"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","0caf3e37a993c9153056dd484f5db622"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","65707cba66fb2209c026fd89ead02771"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","a5c37d50c4879a2d7777d2cdd81204a4"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","f8a1b56b7fcbeec27ee7ddda47ce5166"],["/categories/game-dev/game-engine/rpgmaker/index.html","f8387d0a4f0f6dae0e45d4262570b163"],["/categories/game-dev/game-engine/tyranobuilder/index.html","d6ca244f5726b269f4739eff0032988b"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","4eb8a667cfdff704882c24746d8d77f0"],["/categories/game-dev/index.html","060dcc791ecbe844fc169b5bf9679d43"],["/categories/game-dev/page/2/index.html","f7d21336b37dc96157ba73a3e6b690ce"],["/categories/game-dev/page/3/index.html","b31fd54cc9eb0464b64992d063ebb360"],["/categories/hexo/index.html","52139bbc4cbd270b93b455d0e614af41"],["/categories/index.html","06dd0165692c38b418c00c392b7f07f5"],["/categories/material/index.html","e78b94c7ee7b1042d8c272253386838e"],["/categories/update/index.html","b578875001089f56b77ec296fdd5bc6c"],["/change-according-to-real-time/index.html","e9e918b39517edaba7b042aa466214d7"],["/change-title-after-first-time-viewing/index.html","77e7da6e2de7c7337182bb3b3f9ccc85"],["/change-title-based-on-event/index.html","0db70891afad4d6f74306ab2de325b50"],["/character-stats/index.html","8cc6f4ab0dbd8588cff0a9de09aa2270"],["/chatbot/index.html","86dc53800efbde182c77f8be5a9111d3"],["/comments/index.html","11782b690f9b80cf798211102b5ba5a4"],["/create-button-anywhere/index.html","445cc358d8921870966a57bc72f56edd"],["/css/eurkon.css","8ac72be9c27d44f232cd1a355e2b1549"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","ffb35640b753abb5b2a939ad47afc911"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","eed32b8d5d70e6b5bb91c481e25ea16a"],["/css/rightmenu.css","19a9eaf5af2210ed5430dae276062183"],["/css/siz.css","d6065e70942d55a813032d119f7b39a0"],["/css/swiper.css","7e426bce3fb3e690357b36647630837c"],["/css/swiperstyle.css","343a4248924c3891db333457df59be08"],["/css/var.css","faef3f91d7b69eb8ce7d889e5ef135f0"],["/ctc/index.html","13426b1453d927c339a4283947c25557"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","1ba19734d0d1cb527e0490ac7966970c"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","508279f3ad350c03347ff78b5a03f18e"],["/custom-loading-screen/index.html","e3fe6c07d3c74ff3d833dfdbf1cd8a55"],["/custom-mouse/index.html","21d2044682ba7f555e8033e326eaf11f"],["/custom-music-room-screen/index.html","989f982a67a15bddd62f138241e63cc5"],["/custom-music-room-screen2/index.html","88204352040c916b3d0187ac37e40f49"],["/custom-player/index.html","de60cdde3ecf52b75485babc09b3b02d"],["/custom-preferences-screen/index.html","0af91922c6022cf36defbde3b01a2ff6"],["/custom-say-screen/index.html","568fb62febf7ecb9f8def085979e2cd8"],["/custom-title-screen/index.html","d7149dcc7ba8e55b930dbc26dfe6cb38"],["/define-npcs/index.html","3ff7a736a6f073ed567836caf7cf9fd8"],["/dice-function/index.html","937712c5dc26427fe0c49ee8cf527bb2"],["/disclaimer/index.html","787b6e5537a3cf98d05979927b0e84c4"],["/export-game/index.html","146a1320ab899d639f821a100fd0ac15"],["/friends/index.html","85885071a4ff9e67b62b822fd6ceb5e8"],["/gallery/index.html","66e4f32ff42c140ef04847c62dd96870"],["/gallery/photo/bg/index.html","86c82434e85fe5c8d4c9dd652d73a168"],["/gallery/photo/gui/index.html","c54903475d610a164855e2dde717f6c6"],["/game-only-text/index.html","a3c3ffc177e762c147ae235d7a156ee9"],["/gui-017/index.html","46062abf22ef988a71d1047a88c9950d"],["/gui-vertical-002/index.html","125b1b8c4bcca22cd1a2c54a0588176f"],["/gui012/index.html","e49cd2b2b37919883bbabf4e0a8dc963"],["/gui018/index.html","d7b705551072e91fc9244b90d50784e3"],["/gui019/index.html","2195add1f7f80ebaf6b1369e7009d4cd"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","80e169067d13b2f0e465b2b4c03903d0"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","46c3fac58123abbcc24d900c11e67b83"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","091d7f87cb54d075c6bd3a37904b2afa"],["/images-tip-function/index.html","12073863030e66a02cb84d605946062b"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","e6133e9208ff1db0a326eae04c42ec44"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","28015f916a094841b76f2fb0efe0e293"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","6d10c750446589ce21c4af49d65867e0"],["/items-sprites-effect/index.html","905df1bfaff0130a0859458c4225cebb"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","5bbf9d2063d5f2128f1613ece30b40ff"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","fd0734ed5767580b8acfb693cf0e63bb"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","57ccb96f9b51df85f0b5371e28cd796d"],["/link/index.html","66f1fb100f5ce50f64f2e747323801de"],["/make-butterfly-beautiful4/index.html","a7d3f3f65fd44892e15e0eaba421e085"],["/map-puzzle-system/index.html","71f6698f30751fd0b7383ab2f68ad08a"],["/maple-effect/index.html","705880b322c565baec09ae642b093d29"],["/memberships-2/index.html","11570947749cf6ce6f290b09e2a1aeec"],["/memberships/index.html","2386c938a1ee70c1c4a62c4867f6b24c"],["/multiple-language/index.html","f55e963903548bb1ad16049a821e811b"],["/new-year-event-2023/index.html","9ce0e4963693912d2835f9454d7c8b40"],["/newsletter/index.html","012d0ab13c08f31901419c90c2ee39fd"],["/null/index.html","3dc63079da49a4810c1f375acf4a7cfd"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","2c8d2825ddf1246264de1d5ce4e46e6c"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","69d7db820d505052aa921cf71744d875"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","a5b304d52a5ed0aa4727d432a59d0e5a"],["/original/index.html","773199b7017692a6ff59eca06dfbc730"],["/page/2/index.html","67fa4494223f64e37627b977d03af53c"],["/page/3/index.html","757a0001a098c7884e4b6fd001a93dd9"],["/page/4/index.html","82b8aefe14045355096f0f81e4facafc"],["/page/5/index.html","84b65aeb6b3c7735c0f5cb09216510e8"],["/privacy-policy/index.html","22dce671426ff4490a3c4b734a317f61"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","8fc24058e3be8bb5482dbad0d163f5a0"],["/random-number/index.html","8cbf4d41786560d5ce43800d23f7e60a"],["/random.html","80b069d3b7cff53099f53cb85415afea"],["/release-017/index.html","ce813c0367a57085747cb990bb658f30"],["/renpy-basic/index.html","c40cd5695960e1cd84e97ebe0dddae50"],["/renpy-crash-glitch-effect/index.html","4ebb33a86bcc14bc8ee364dc6e7a019c"],["/renpy-matrixcolor/index.html","0c3ad027986d7bf0d2c49dfd1525fd4d"],["/renpy-overlay/index.html","cfecda59cef9ba1ed93134d08d0a3694"],["/renpy-review/index.html","f02529f984de192f8aa3f06bdd5ce179"],["/renpy-typing-effect/index.html","a4de733c9e2ff908225ecb8fcca6df6a"],["/rpgmaker-assets-menu/index.html","4aa58dcf76d8399b61f3ad52aa91235b"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","d3b587331329f1e4468e972239208029"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","969272ea5786d33d662d9f4a87c9785f"],["/sakura-tree-background/index.html","e5f06a7b457001e81109300fa361d6ed"],["/side-image/index.html","8384602432eaad984318aa4084d26aa2"],["/snow-effect/index.html","17e0a8c6c72fbc6a943a4e91e947e70c"],["/speaking-animation/index.html","fb19125c5805ccda59864a6e52f1f412"],["/splashscreen/index.html","a87751c98190aea38dca886d1fa8c4e7"],["/sw-register.js","55ce5ce591fd65e58cd343500bd92bf5"],["/tags/Hexo-plugins/index.html","5b03aceb7225a9488049e5205e6d8739"],["/tags/Light-VN/index.html","28425af9d0b4bc4413b67236e9c4a57c"],["/tags/ai/index.html","d48f739f8503aafd694833386303c75e"],["/tags/butterfly-beauty-diary/index.html","0bfd6528937bbbcc9cef54378a9ed944"],["/tags/commision/index.html","94230381ed371c9854c1133bc47a0765"],["/tags/custom-hexo-theme-butterfly/index.html","7c467b01cffb9c1ae9de83ba764433cf"],["/tags/custom-renpy-title/index.html","82d52aed31c5d0e04c0fd72bf81cbc50"],["/tags/dialogue/index.html","ef603bd3a247b71bb0314d009a89a41e"],["/tags/effect/index.html","8f8e71e52d94646e2216f90701974200"],["/tags/event/index.html","e69164c9cb6c51ed999912aad87f445a"],["/tags/hosting-own-website/index.html","9be689cea9c2fd2574e7876ac4aefca8"],["/tags/index.html","da6646636dda3f8733aca7f277029ebc"],["/tags/itch-io/index.html","07053b392e8eee807f154627c358b810"],["/tags/light-vn-update/index.html","36402dc17e750f1f3d5c45746b5d4f1a"],["/tags/nvl-maker/index.html","2fcbc4af0eda878c06b4b107669f34c1"],["/tags/player-related/index.html","c154dac682ffc970c4f8d11179288026"],["/tags/pro-tutorial/index.html","c102f86f8b40c182a1b67bdfd8290d1c"],["/tags/pro-tutorial/page/2/index.html","d01eee2714a44b88897d2884ba7a10f7"],["/tags/pro-tutorial/page/3/index.html","7aa8fc86766499fa0a05d058552b0aba"],["/tags/renpy/index.html","8b3cce0807a4c20b7f16f8468ae7a8dc"],["/tags/rpg-maker-custom-map/index.html","f4269c4891681d530f168e0b99eb24d8"],["/tags/screen/index.html","f0c3ecc30b6d723f016eafe433ef0cab"],["/tags/special-function/index.html","60bb26014b895aa8d2fb146305f39e30"],["/tags/tyranobuilder/index.html","b31935ff54ab22d315b821242e44beec"],["/tags/ui-assets/index.html","58598462ed8b73ab9e3957808f0bc4f2"],["/tags/update/index.html","9b934b9a74128ab68cd68cf123c31bda"],["/tags/upload-game/index.html","4c075ce44b6c0a7895357d4db2be0806"],["/tags/variable/index.html","1c8f60f04fd3dd996da032e126900e20"],["/tags/visual-novel-maker/index.html","8232a0a447e250d488e82effc7c1890b"],["/tags/封面製作/index.html","0f0581b3768bdbb5bdef414e1108fae8"],["/tags/背景素材/index.html","6ec339c4d7b7e71739865be3231eec76"],["/tags/隨機功能/index.html","52b1a1f1a2359f7408fe6570701115aa"],["/test123/index.html","988b1c1750428ab43801d315594521f8"],["/textbutton/index.html","6bdeb963f1e8451ea21ba777c820b659"],["/to-do-tutorial/index.html","0614ed6c13bf6385b6a860df0bc98221"],["/tools/index.html","35748ddb329b8e9518ec0173bad7f18a"],["/transfer-to-hexo/index.html","97616808cfd6127ed1226bcc4a028166"],["/tutorial-update-history/index.html","8479d6302510c30eb550bab0f8237be5"],["/tyrano-name/index.html","e7775c9b687c670177369a4b765b516a"],["/tyranobuilder/index.html","1c4b8c319d737db7259dfc8e816e83a7"],["/undefined/index.html","2d47df3e9c149db817d74e594e8ee33a"],["/update-20221211/index.html","9f7eff7f32818db1b2d0819228bfd107"],["/update-20221218/index.html","af6dc58ebb9d3185e0444283803c0db5"],["/upload-your-game-itch-io/index.html","62314d489f200678ed8e41f0179fd840"],["/use-list/index.html","ed65c9be0a20bce73d1df9d051131b90"],["/use-nvl-mode/index.html","32ee355e6f148ed312ac1c5d81854260"],["/useimage/index.html","a17c0d6e1743527b335e256c1288abc5"],["/variable/index.html","954806ef5016914d1af7046c10b6a449"],["/vnmaker/index.html","757c469e514723edbe7e04e8c125c777"],["/weather-effect-tutorial/index.html","0c1eb01dc9da7603f53cbd10f286133d"]];
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
