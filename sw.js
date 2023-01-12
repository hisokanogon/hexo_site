/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","287d6f432afbc9aa6f7f900c5a44f7b6"],["/2player-battle-system/index.html","d1b6bcaea5d311ec082b2ce951144431"],["/404.html","c034f5e62f5715161906221016c670e4"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","4293451d0301a6d2c737df9913a5e585"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","e9de055a4ed55fe19fbde07ebb39b05c"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","31ba0c92ec9ae1eda1904a6fcc683323"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","e2dd216324e4f09c1eac48e3100e98fa"],["/animated-title-main-menu/index.html","3c77f98103eccc7bf7c54668b4e9927d"],["/archives/2022/05/index.html","f3fb9216348d6d01310654dd6febbb13"],["/archives/2022/06/index.html","20627bb07d976ac28ad14ee60aaff24f"],["/archives/2022/08/index.html","87f4125e4c098285afc0caf145418385"],["/archives/2022/09/index.html","d0e6ebbdcb67c1c341842348f6a850ea"],["/archives/2022/10/index.html","c5d6e7303a6742e0915cc5fddbd23d22"],["/archives/2022/11/index.html","42e1b308601a6f4ddf77ffb31b5ba394"],["/archives/2022/12/index.html","87509aebf3b34bf3d19614bdec2b64ab"],["/archives/2022/12/page/2/index.html","83068e0e6a69ed365d972a53b28bf55b"],["/archives/2022/index.html","205cb4da0e542a6153bd4c6c94cdce9b"],["/archives/2022/page/2/index.html","065781914b3998fa1f8484b3bdaee3fe"],["/archives/2022/page/3/index.html","e8bb98178a0a4aa391c7b3b26475e783"],["/archives/2023/01/index.html","0168afead71d20c112d8221b3e09888f"],["/archives/2023/index.html","95a344f6da774bc498e6451dae8f0177"],["/archives/index.html","bcf45185805eeff079b5431ae4ce863b"],["/archives/page/2/index.html","e8f2a86bfd00688449d4a14d5ee48c30"],["/archives/page/3/index.html","fcc98c2704f2a820cc2f03e31214e87e"],["/archives/page/4/index.html","a6ace414edc21fa063928eb6b68d2682"],["/artitalk/index.html","bf62016170e0098da97f2ae095d20bf0"],["/butterfly-custom-tag/index.html","1d1175c16cafb667e731d5f800315cd6"],["/butterfly-plugins-faq/index.html","211c1128665ce173005f206c0a149884"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","38d0ec5c9e4e89f2361dfe945f49ff08"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/diary/index.html","319c9636f03403ba4ef723dcd73a7ada"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","0fb7b0f8e813444ec245467872b3479b"],["/categories/game-dev/game-engine/index.html","5814f701b927c0bce4cffaa07f9bfe62"],["/categories/game-dev/game-engine/lightVN/index.html","f527ec0dde936bccad933485a01bf210"],["/categories/game-dev/game-engine/nvl-maker/index.html","eb86602eadb3346587bc875022551bb7"],["/categories/game-dev/game-engine/page/2/index.html","8c1f8617f96f9f90fe50cff2659d7cac"],["/categories/game-dev/game-engine/renpy/index.html","24984d4721bfd4f07bde388ea1611849"],["/categories/game-dev/game-engine/renpy/page/2/index.html","6b3fe381aa203d41614d1b35bc6af9fd"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","12c5b65cee940c01a8a1707f91bdc2e3"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","6b5561ac1def19527ef1d4de06d7af6e"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","6ba781ed2b09e94e8158ac9c2731da5c"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","505dec641d83ecb89ad7d9dd19ebcc0d"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","be3fe13463f5a1e1ea9b33bb9694d959"],["/categories/game-dev/game-engine/rpgmaker/index.html","7b44d429515162de839aab78f36bd62f"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","797f107c9721d19862e019582a6e4fe3"],["/categories/game-dev/index.html","ec3ed8922da96dea15579bd0093cc4e3"],["/categories/game-dev/page/2/index.html","b7c6b4dbc052ca530688bf54247615e5"],["/categories/game-dev/page/3/index.html","6e98142ea95566bc01984dfa99a45778"],["/categories/hexo/index.html","880b20c6262b00d35304c106a5cd70ca"],["/categories/index.html","5f759fedf8815f02379f735dc3add055"],["/categories/material/index.html","a4ceea34e44c6c928f0f3a69f6b2d881"],["/categories/公告/index.html","031706e352c319652ecf6220ff3042ed"],["/categories/更新update/index.html","57a2c532ca9f683c8ad3bc64bfb782da"],["/change-title-based-on-event/index.html","2a3ab5ef94999bd5a7ba90ac900bd9e1"],["/character-stats/index.html","7f9e828e107b897e5940c921071f51dc"],["/chatbot/index.html","0d63c00612ae8fce37a056a68d7cec37"],["/comments/index.html","21c1ef4aef4945129dc2f1fa4ac72256"],["/create-button-anywhere/index.html","47fdaf2a123e59dce23a3657d0ff40bf"],["/css/eurkon.css","038de261444e16c5b0a7aa8f310b9a42"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c53758f94d5fb78192b168d93a8b91b6"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","632338a62664d4688c93e9d3f49e2a47"],["/css/rightmenu.css","456cb8c91691fababa495d027a8f06d8"],["/css/siz.css","94d0e570c85e40623201abf4fb6872ed"],["/css/swiper.css","52ef37fc06e9823d3508d4e7110678c7"],["/css/swiperstyle.css","a2774532a8ba192a2b9a04ad9f79c6f0"],["/css/var.css","53d98a80c3a1f3ce2a1b850a855cbd09"],["/ctc/index.html","8b060cb32be26343c26376191a6911e7"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","3c8d3cede40b78ac082538c457b46775"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","65f9f583607713a8cbe72f93ea0b652e"],["/custom-loading-screen/index.html","6896365af960c279f9b5ff3b6476f710"],["/custom-mouse/index.html","628e3124524f1eb6906ffe31a5c99e87"],["/custom-player/index.html","1c5c819d8fbf650e1ad2c404a89060f5"],["/custom-preferences-screen/index.html","7cee05bda97d541eff5e0d53df091bd2"],["/custom-say-screen/index.html","dcfa39fe074354c2e3dc7c106788cc8d"],["/custom-title-screen/index.html","b2100603b417c91d1fd2bf26784b9ed0"],["/dice-function/index.html","a39c07659c35a47f1a8ee8061480e06e"],["/friends/index.html","e08d68ec5c44f25eadb44cc605243333"],["/gallery/index.html","33144d49ca5c02e8228075d84bb9ea13"],["/gallery/photo/bg/index.html","e5840893ff39c78f5132598593c72437"],["/gallery/photo/gui/index.html","23bd87c3096084730b1e1b013f1f8b47"],["/gui-017/index.html","dc6e70af869327be91547cf06e3857da"],["/gui018/index.html","10fa87ebf06a745ad6e04725644aff15"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","f07ce9faabd31e3d106473ea91cbf866"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","375f50287ac41d43481c294e6631b5cd"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","7899381eeaaadb5b16aaabb4edb773fb"],["/inventory-system/index.html","85ef964859b77fdfe1a28999d96dd0e9"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","94c99eef497c8168b9981642c3921f83"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","352b0fd9c2b0d29ccca0e1eb8c28b11e"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","0b72b09ab9dc58658b970d33e9e023e9"],["/link/index.html","ccb89b91f836ad4a5573581c1eeb63b3"],["/map-puzzle-system/index.html","4bf704c117f9126ec3d5e7a933338455"],["/maple-effect/index.html","c73093a2921bf63bc68a2d7beb821123"],["/memberships/index.html","fea22bf631b9d7265323dba2c847d9a5"],["/new-year-event-2023/index.html","b9b726101cb5bfdc792f74724387ca3f"],["/newsletter/index.html","921b95324c039ef3f2dc7afaa5558ee5"],["/null/index.html","3447b08360084bef0a6cf808f948fbe2"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","0ffc3c2d9dcdf225ee824f93c6f2f7c8"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","94162bdb3ce241d9f912b0b7daf27531"],["/original/index.html","fdc62717cdda60c03ef2e99311df7943"],["/page/2/index.html","acd2410ec46f41c6f9d2614aa7f56b8f"],["/page/3/index.html","80bf4edd456312f6c864ad611ce53d89"],["/page/4/index.html","0570f0309a4e09c20cbfd52ded3a517a"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","a68e713d036039ff63a7eb90559951e8"],["/random.html","7570308d83987682075895511feefdbc"],["/release-017/index.html","e9599b955b0ad8b04fda0cd4bd532816"],["/renpy-basic/index.html","845380ff2ec79b6dd74502fa81afcb32"],["/renpy-matrixcolor/index.html","e4056e781a69e3ca32552aa1b5ebc321"],["/renpy-overlay/index.html","599c718d9d006d6f303c7a4ee362c24d"],["/renpy-review/index.html","f8fbc1735cbb6d0b4aecb1aa6a210a32"],["/rpgmaker-assets-menu/index.html","00810c1fdd474450169001056b17c466"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","cad082c91bc329e0d9ecb252c621c76e"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","a41dfcea6ea6d75aa25aebd8c0eaa384"],["/side-image/index.html","562e49d1f3b54e46f854d9c4670cdd3e"],["/snow-effect/index.html","809131659f3a38857915da64627e25a7"],["/speaking-animation/index.html","04f9738efe3ec4358444099b946a415e"],["/splashscreen/index.html","d3fcd9e3bf5a13530294aa52d02f6678"],["/sw-register.js","aa1552a1ee3ed40dcd3704f642d65874"],["/tags/Hexo-plugins/index.html","ce4efcd39175244c8c2c71ba495264c3"],["/tags/Light-VN/index.html","52458ba09d350b7c03c3878533884b57"],["/tags/Renpy/index.html","c368fc6c05855df3272e7e1b2261cbaf"],["/tags/ai/index.html","cbeb3dfb7662db69341a1c8cd687edb6"],["/tags/butterfly-beauty-diary/index.html","1f9ffb6b89f778af5f6e4ab216fd59d6"],["/tags/commision/index.html","0bf044942edeabb2c95d76f6fa05e75e"],["/tags/custom-hexo-theme-butterfly/index.html","150aba931f16eee13a4a16a745d90e51"],["/tags/custom-title/index.html","31051e245ee6e7f2319df2abee0db03b"],["/tags/dialogue/index.html","145cd24791bea18f0e1873dd55e0947e"],["/tags/effect/index.html","622062e8a7117965ba3220a2135402b8"],["/tags/event/index.html","3f1e74440052fc984088d4f89465b1fe"],["/tags/hosting-own-website/index.html","2c46bd147b0497f111b1973eb6ba19ce"],["/tags/index.html","8cd0ceba397cfed40e5aaf91eeed39b7"],["/tags/itch-io/index.html","59df427e875e483df0387b1885936bdd"],["/tags/light-vn-update/index.html","09ea7e7ebe840929a08061c88ffb9985"],["/tags/nvl-maker/index.html","4a76038a7616856ec87f0a6098538acd"],["/tags/player-related/index.html","c7a043852a157cc729a4635dfc673901"],["/tags/pro-tutorial/index.html","667ec132bcc19460aee585ccd44ecd65"],["/tags/pro-tutorial/page/2/index.html","6ca4e4e07ec5940138ce3dab3e067a0d"],["/tags/rpg-maker-custom-map/index.html","39ccd27b4258a4923d019eb9aacf219c"],["/tags/screen/index.html","09d40eb541b1dab39a6ef40f8422ca58"],["/tags/special-function/index.html","df11589442c52a511093f58af59bb334"],["/tags/tyranobuilder/index.html","521294e553d840084414146179f587ab"],["/tags/ui-assets/index.html","d33d37a118d1c7836ca6208029d3f0e6"],["/tags/update/index.html","a610203c066ee5a84a3dd7b9886c0ab3"],["/tags/upload-game/index.html","683461b3a31812819c3098983d68911b"],["/tags/variable/index.html","2644c54e03a1b5f50dc878fd221fa129"],["/tags/visual-novel-maker/index.html","e7de6a1367a1f53abe6e1be3314a0b40"],["/test123/index.html","081bc0f0932b379bedefe8dbffa2ad85"],["/textbutton/index.html","8a321195ced6161e1b762c47db7eb67e"],["/to-do-tutorial/index.html","f76e255d4b6f40a3c4947aa07d9996ad"],["/tools/index.html","d7071383358515bb101c4bf6d20e74b4"],["/transfer-to-hexo/index.html","e76b5f83ca150aacd505ac0ff1a339fc"],["/tutorial-update-history/index.html","63fc7e6990e5a19c2793adb6f328e713"],["/tyrano-name/index.html","8a33dda1aacf51a2b0577bbb1592b3d7"],["/tyranobuilder/index.html","aca2e1ba00cba71fd275b6a6bf4ab420"],["/undefined/index.html","b9c224ccf72a72b3cda5a11a0caee9b4"],["/update-20221211/index.html","b3788fe744eb69963eb831a2e0c08e31"],["/update-20221218/index.html","6cc4e5a743ee8450c9761d35eeaeafab"],["/upload-your-game-itch-io/index.html","933c042de0ce7f52c4654981679df812"],["/use-list/index.html","ad7c40888aa2320bc1fb955d17013f34"],["/use-nvl-mode/index.html","084a6c11160ddf478eda52ad4674797c"],["/useimage/index.html","cc82466bb9298e60afdcd11731a831e7"],["/variable/index.html","226998d503dadf5b464ab167633a4647"],["/vnmaker/index.html","80de02904deed4499224169c930102f2"],["/weather-effect-tutorial/index.html","f9441cd678b176631668b6d5f61fca48"]];
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
