/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","5df7dbaf8fa9ca604004393b65700ba0"],["/2player-battle-system/index.html","f2c24f45ec8bfbd8ca7547d569021779"],["/404.html","e09b5c6f6b487ffc7877c0c60d7882aa"],["/about/index.html","7ba817e2ed420f92c300cf742568b0be"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","faf19603798e802d0dee7527b58c9f4f"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","86c0a297723c89e605b23234043f6873"],["/animated-title-main-menu/index.html","ed73ede0c78b47672df3a7315e62c273"],["/archives/2022/05/index.html","a29009072a9b487c6aeb6922c7c8ea29"],["/archives/2022/06/index.html","77b392823bbf6c3d17844b6226dfaefd"],["/archives/2022/08/index.html","d59477d49a6660f6f3e6b34bc8efe8ed"],["/archives/2022/09/index.html","7564ae99cef89ba3521c162bdd8aca67"],["/archives/2022/10/index.html","360674bd56914a8e7ff998094e77821d"],["/archives/2022/11/index.html","260dfd3baed86fcef95b2018ed4191fb"],["/archives/2022/12/index.html","97dc8217ffbaa40c9fc98082c6867cf5"],["/archives/2022/12/page/2/index.html","544a8bad03a890e1b8160491fe0df649"],["/archives/2022/index.html","85f777b66a513b03822eca7931c66d64"],["/archives/2022/page/2/index.html","27d91b3dcb21cd22baf83a805bad5792"],["/archives/2022/page/3/index.html","9272a7604deddf72eafd10fd5a2d8214"],["/archives/2023/01/index.html","bf65c4a3bd90a45c8d2b28524d0a6396"],["/archives/2023/02/index.html","2408e1e0fe092a480f53ecdfe744a369"],["/archives/2023/index.html","805537bae20c9a95de800950e9669231"],["/archives/index.html","ad9db23daed6d42bc5210d1728ce84be"],["/archives/page/2/index.html","ff31706321853ba461e3047fba1f5fdc"],["/archives/page/3/index.html","13178882385ab604135705b5f68c9248"],["/archives/page/4/index.html","cee4eaa56655930215ba5d7e80c4d332"],["/artitalk/index.html","83fc2d46c39bd54c88ff988e362493f9"],["/butterfly-custom-tag/index.html","af3d7633dd0bfee0cd0d53807c5e4369"],["/butterfly-plugins-faq/index.html","827359c9609e17fe5348336c8d86e091"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","6b0a17f942e758d0878e97707bf4ab52"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/announcement/index.html","6ed2bd64555343fc852b76de921e4250"],["/categories/diary/index.html","3fd50f7c8ada5b6c46825892f27d2ae0"],["/categories/game-dev/game-engine/index.html","b26b62769a0113998e47f036c839b9bf"],["/categories/game-dev/game-engine/lightvn/index.html","03b1eadfc36976e313f4a7db231ce61b"],["/categories/game-dev/game-engine/nvl-maker/index.html","86a6347a7f8e07c3d7608e28d1b35d22"],["/categories/game-dev/game-engine/page/2/index.html","0f94f067c17b681d053b16d56e991033"],["/categories/game-dev/game-engine/page/3/index.html","432b6d52edc2c291c0afeb0a8ea778e7"],["/categories/game-dev/game-engine/renpy/index.html","2dd9370e096a76c393c34efb7929854c"],["/categories/game-dev/game-engine/renpy/page/2/index.html","1569863a914f91814c21511a1f66875d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","9b7034e867ef03234eb915069113f4a7"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","b24d4ab414c5ed25500ce9bd632c18c4"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","8d5a57e80bd87a1a9f149a40a2a30c90"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","665a39865db35c7826cf6c8dba5f5300"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","616300cffe4c974387cf0b5993429343"],["/categories/game-dev/game-engine/rpgmaker/index.html","d1bcc1d8e1678fc60270bcae5afb9db0"],["/categories/game-dev/game-engine/tyranobuilder/index.html","e739ef8498efd4e673608c5de100cbd7"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","4f5acf3efabb42f37a31e475883c930c"],["/categories/game-dev/index.html","b44ed8f3e1549d5afc0a50d21e8ea316"],["/categories/game-dev/page/2/index.html","a8152bee2f00f98511967d65fa005f37"],["/categories/game-dev/page/3/index.html","3a5d419dae7d93317b232ea2e2a8e641"],["/categories/hexo/index.html","db1ff6edc3f10304f2a0053596259511"],["/categories/index.html","6d78e5006b4a567e25ed630d4be95571"],["/categories/material/index.html","c54169228f95e4ee3696d221787f434b"],["/categories/update/index.html","ae0ad64fe4367ca34f370a2c7a176aec"],["/change-time-according-to-real-time/index.html","fec9a89d627efa4bc639517350046668"],["/change-title-based-on-event/index.html","2f4361cd7864d4acbe2329784ad1a7f1"],["/character-stats/index.html","7da65b5f59ef47482fdfbabe436380ba"],["/chatbot/index.html","4ddac504bb820e33e0c7e6e78723d369"],["/comments/index.html","bcfd388e1b02fec4dae12f1e30c1d2c9"],["/create-button-anywhere/index.html","6ccbaaa40559bc8caa610996af8349ec"],["/css/eurkon.css","6514ceb12b264851c145b3ecdac03926"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","f038ed7f35551a629fffefbe4d250fb2"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","a7b5948f733b2232b3ce62aaa99c026d"],["/css/rightmenu.css","6cd1fb026f296f78c35d726b4e12b365"],["/css/siz.css","e7896308a218206b136e09a18fbfe5ef"],["/css/swiper.css","3876ba9bb3d7ce6a7e17f27a2c72286a"],["/css/swiperstyle.css","1a6af9295423d652be1769a201ff1095"],["/css/var.css","556f2156e88514424b67b1a12aad5233"],["/ctc/index.html","f71b21eb2d1189f038f7fb5283bfd10e"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","2a90fbbdaf668adb12a337607a0a3d1d"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","54c3967d0dc4b193df66afb2d495ae5a"],["/custom-loading-screen/index.html","85d9503c1aeabba5f4423354009457d2"],["/custom-mouse/index.html","8f927ef45f0b0a747287e2d8fab3795e"],["/custom-player/index.html","3ac03dff83f75927899cb7f8c1b459c4"],["/custom-preferences-screen/index.html","240400c6a364c05f17116f6bffb61c6b"],["/custom-say-screen/index.html","13e2d803d9affd1e78282b04a97568b0"],["/custom-title-screen/index.html","4d9d256c6c29aa315091b7ae9af7a285"],["/dice-function/index.html","d8fc824768b15ed44212b820201e4ba9"],["/friends/index.html","14b7f5e92dc0519e94c442ffeeb85a06"],["/gallery/index.html","bfc077015f2caafb19befbd0579596b1"],["/gallery/photo/bg/index.html","3dd7dcd247c083c314e8b6b3d938c71f"],["/gallery/photo/gui/index.html","0318bc19f7da50bb17720af91d2b1ddb"],["/gui-017/index.html","c347b9e946f82fc95ea8142bd1aa936c"],["/gui012/index.html","5acfabb7d304d62f2f81c40a22b766e6"],["/gui018/index.html","f57342d06fb02d19e85d0b5064ba2bb5"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","5d5a844299fff680e1d49058cbc8294b"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","de0e6a0c199ff887b8ef553a6ee4917a"],["/images-tip-function/index.html","2db1a698e55f643612a9721d28f6cd4f"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","f962ef46b5b263a401a3aecf7192bb7d"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","9ac7794fa377312424ef7443e03f6f52"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","677ec8b929dec8e4a4585e7ac8c75392"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","b1c4e5c385c2aac1f4b5444f60581e8b"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","786f54aea386b9624048f035549deb83"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","700644d7d3f0239cc0f7b866e23ebace"],["/link/index.html","d1b9b775c04100698110f2f59a459a14"],["/map-puzzle-system/index.html","3119916397b52ec5076dba902588f5b4"],["/maple-effect/index.html","672f1376fc43bf3af06ba89e34fb1538"],["/memberships/index.html","b012e2026ddda72557a42b9a2ae71331"],["/multiple-language/index.html","50f1a01961963814e35693f2f26fab7e"],["/new-year-event-2023/index.html","90604c0e371d4c2562940693fadfe954"],["/newsletter/index.html","f87551daffe0083fe58875a4aa68ac69"],["/null/index.html","248b5a8c947a1a1d9ea70f780e618c2d"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","1fda5c69129e5fce8f0cf60baf81192b"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","6b617d1da22c902ad13accafc5fbceb2"],["/original/index.html","e04831b816f48b868889c63a8d9b82e0"],["/page/2/index.html","0ee66335289a5c40d03d21ed8febe396"],["/page/3/index.html","deb5101846e37f6ac0880ce5d115d0e8"],["/page/4/index.html","71b53c73c966889d7c8fd9a5918697cc"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","501c73dbe4b000788d05deaaa21e0a30"],["/random-number/index.html","b3f115f54adb8d0ce9d8023623beaf17"],["/random.html","97ecf5c0a755b7b85e248c95df7a56d1"],["/release-017/index.html","e49c3ac7881ff0c0a77ededec3712d03"],["/renpy-basic/index.html","a920002f5b4e7f48c8d2e3a1d5065034"],["/renpy-matrixcolor/index.html","540451ce45f5222d10459c379e47740e"],["/renpy-overlay/index.html","fa5fa6c246d715af563078b5c2af3b40"],["/renpy-review/index.html","43a566654caccb3a2e12fbac53f05daa"],["/rpgmaker-assets-menu/index.html","2668b31e41f1655856131a40fff24bd7"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","490cdb1bb8a0c1b1bd918bd643de8c95"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","6488cb5ac7334da56663c0e196814bcb"],["/side-image/index.html","ac3e555ebcfb72dbef91bd4ccb4d2ce0"],["/snow-effect/index.html","9e829812f0830e569a53a9473ece892a"],["/speaking-animation/index.html","82f6be324cb948baa2af3a4f823a0889"],["/splashscreen/index.html","a3127e9005f05e3e385b0abf9817572c"],["/sw-register.js","78db138b4a12c4cfe60d9e7e584078b5"],["/tags/Hexo-plugins/index.html","4c17413c83351c6204e9771e3dd58a1c"],["/tags/Light-VN/index.html","4c2bb746fa7201d3d2b3013bdc96547e"],["/tags/ai/index.html","e2b2756b588b8baf154e8d55aedf959a"],["/tags/butterfly-beauty-diary/index.html","cf6ea1a91163b3bddb9ee3b5ae5833ec"],["/tags/commision/index.html","0f80202ca04f05b4f2993611db9bd99c"],["/tags/custom-hexo-theme-butterfly/index.html","560eb8d86684f499a2bb04b7c030ba89"],["/tags/custom-title/index.html","ba785948dd8ea0aeaf1ae79f40e35bf1"],["/tags/dialogue/index.html","19dc486e654ceb92b3bbd43512c121f0"],["/tags/effect/index.html","5d9348849db88eae0a4ec27e49372f5f"],["/tags/event/index.html","f12b0bf1f5bd81ada60168e0a758fbd2"],["/tags/hosting-own-website/index.html","c7f70a541da2bb90980b92ca8e6ba73b"],["/tags/index.html","ea6d38fe073f28ad389ed2eaedd9f961"],["/tags/itch-io/index.html","5754512f8a89f417c61eda5e3cb58ec4"],["/tags/light-vn-update/index.html","9c288755b08c90561ae12cd0ce369e3d"],["/tags/nvl-maker/index.html","917fc1fbadcfd632897eff0a4feb86f4"],["/tags/p-tutorial/index.html","cd26121f53e3b8cf4fe29e514b92074a"],["/tags/player-related/index.html","67d93ca4dee2eb35fe35e764f8014f3b"],["/tags/pro-tutorial/index.html","a067b191fbcba151e1625dca26bcedc3"],["/tags/pro-tutorial/page/2/index.html","93e002578c10e2e16241ef0b31a7c354"],["/tags/renpy/index.html","c7503945267f93fb828b41c49a4e9123"],["/tags/rpg-maker-custom-map/index.html","2f2392289d64b12ac3fec9369823e784"],["/tags/screen/index.html","d0dca14062ea125259a683648f4a2bea"],["/tags/special-function/index.html","49042220f083840dcbf6e1012c8535a3"],["/tags/tyranobuilder/index.html","560fad68cdad1c2c6eb2daea0683a9fd"],["/tags/ui-assets/index.html","d35937c8b8062bb41c265d6748af7695"],["/tags/update/index.html","b29118727554f8048e94259730bbe4a0"],["/tags/upload-game/index.html","06917a61b110787f6c7e5097a0510bdb"],["/tags/variable/index.html","f8d7ec964efe6bd889e50176d985b425"],["/tags/visual-novel-maker/index.html","090ce578f1c7adee4a1d48cc8e38fde3"],["/tags/隨機功能/index.html","035f6ad1814790c8b364110637f22fd0"],["/test123/index.html","a14849e98bd063eb08b04eed46d5819b"],["/textbutton/index.html","e630821d171199d10ffc33dd0a40ae37"],["/to-do-tutorial/index.html","a0236107584fb23375fdfd1203a35f17"],["/tools/index.html","c154920459c4639eaf3d2ae87b424df9"],["/transfer-to-hexo/index.html","26322dd863c1a7ddb8521930149ab5c2"],["/tutorial-update-history/index.html","b518bc4608af81b5c458c7951df67c1a"],["/tyrano-name/index.html","68375c9e37a90460b04953dc71022595"],["/tyranobuilder/index.html","01c270363992dae76ef685c953ef83cf"],["/undefined/index.html","fed7e2aeedba3e0e1cdcb71bb6216ccd"],["/update-20221211/index.html","8386a26fe416b935c2d08c19643279d5"],["/update-20221218/index.html","e63cf2eac2e8a5facc726f83dab695da"],["/upload-your-game-itch-io/index.html","d4d7b3cfbdf6f4e261237637f6083bbb"],["/use-list/index.html","7918885b44601b09df47eb0b9416d502"],["/use-nvl-mode/index.html","c88a06cd06dec1b71d2fa6d538bf4b84"],["/useimage/index.html","34fcbac894ca710cd9263aefd0f56e1e"],["/variable/index.html","474f9e1d2a7860610d0b21669b6c484a"],["/vnmaker/index.html","6ccee7163cf6c488254e47005a410e8b"],["/weather-effect-tutorial/index.html","6c319f087fa7b782839630744fbed395"]];
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
