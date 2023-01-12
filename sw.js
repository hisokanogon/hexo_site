/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","62d20eb3d242cbf3c8ff3753b3d63cd8"],["/2player-battle-system/index.html","9f97abbf8961d2fa941f0bf79434feec"],["/404.html","1971c53411d4b0cc4227a3c4043c70cc"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","2faf04cb8ad6d2a86b949c88e94a7c6f"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","0ec051581a2def6817bf4dc59ea1cd07"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","0936aac17057d3eea7069de6b14229f7"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","4a6106267f109464be02fa7a094ad81b"],["/animated-title-main-menu/index.html","be8feaae5ad2ea0f7b7e454382da2820"],["/archives/2022/05/index.html","9f29b1bec1af55ea0b825ea1e6052032"],["/archives/2022/06/index.html","85b24a2b5c39034510e559c5bd77dc24"],["/archives/2022/08/index.html","fd0d4f3aae323a75d3e5caf3eb0d98ee"],["/archives/2022/09/index.html","7aac297e865756d2b2e0df648a42a0f0"],["/archives/2022/10/index.html","7c719099f229f37ba029dded8067df77"],["/archives/2022/11/index.html","ab82fad571c0779c3c49e8de671ff379"],["/archives/2022/12/index.html","42bd28f53353cd2ca3f5738ed7cd3d7a"],["/archives/2022/12/page/2/index.html","1fc5db453b3c756e1d5da0b566d18022"],["/archives/2022/index.html","1137bdc50176c3ded1052f325f340c32"],["/archives/2022/page/2/index.html","a471e3c97a455ed54b902aab90254f62"],["/archives/2022/page/3/index.html","3443d01fd40c791c381f43b1ee9f20a0"],["/archives/2023/01/index.html","f91537d7e8741ff15591943df92b4759"],["/archives/2023/index.html","07127d0c380010e1b60eae982f05c156"],["/archives/index.html","fbf704e119efdab5ad3a4a47b659d68d"],["/archives/page/2/index.html","846ad7f16d0fa53edecf49360fb7506f"],["/archives/page/3/index.html","dc2afcbce14ff51a86485bc62d69b52d"],["/archives/page/4/index.html","ce1f258f17d7966d3fee9ef8ff217f65"],["/artitalk/index.html","27c927ef1868a031362e8111135e658b"],["/butterfly-custom-tag/index.html","d6fb9d07a10bfc4c6bad0748715f427c"],["/butterfly-plugins-faq/index.html","1593bdfe979cf7f9f20b7451df460779"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","cd72c7af25c4a34f781b447ad36dc23c"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/diary/index.html","17cf2cc217ab8a80df18238850a277b4"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","7bab466e322a9f4defe4c169ca9c3779"],["/categories/game-dev/game-engine/index.html","4672371a09a522bb27da103dfc97965c"],["/categories/game-dev/game-engine/lightVN/index.html","10e23b31d8fcf7da8cae95cdd5f2ac0d"],["/categories/game-dev/game-engine/nvl-maker/index.html","6b615fb6f82800aed6fa44875b0df9e2"],["/categories/game-dev/game-engine/page/2/index.html","11552b990614946586e470dff3ca8afb"],["/categories/game-dev/game-engine/renpy/index.html","937389e6aa2f572e920a421904849bdf"],["/categories/game-dev/game-engine/renpy/page/2/index.html","de209b0c21d11454d67dc151781de94a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","4a5fbfb740813f2c970a339bbbf073a8"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","9a649f06b37f1f6744a9cfedd9c963c6"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","1ad702920c8359386f42a42bddb312dd"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","87e662ffb6319f9cfb17a014ee94368f"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","5002d31c88237867f456fff339bfce63"],["/categories/game-dev/game-engine/rpgmaker/index.html","3dc552f377e1f3dbb4428bbd00dec0b5"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","d5212d37eaf05289b76a847f5395137a"],["/categories/game-dev/index.html","1b0e8807397108fb2e7b27d85ce498b4"],["/categories/game-dev/page/2/index.html","6f59a4037ecd8c8751054e646b055b5a"],["/categories/hexo/index.html","772bd25c5c35fe907e119d15808b585f"],["/categories/index.html","fd0f988fdd964b27e15c0cbb64eb9659"],["/categories/material/index.html","5e556eaff3be479e05e8abfe4f8897ad"],["/categories/公告/index.html","a2035c056fe547fe10bebbbd9179a744"],["/categories/更新update/index.html","442250792b38db37b0f79536bfa5e045"],["/change-title-based-on-event/index.html","2f1b9a36722fc06e25d1ca16647540c3"],["/character-stats/index.html","b3acdd2ee2b84ab89ed020808ebe4e59"],["/chatbot/index.html","a449bc08ef54761faec0db0a02134ae2"],["/comments/index.html","d075d91bb08224f8fa784dcd82a118db"],["/create-button-anywhere/index.html","e06f9adf05edd27f340ea3099f978890"],["/css/eurkon.css","cd663482b1da55e0c5aeecfdc1c670c5"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","9f171f5a111a96cab156da7202200263"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","1703f6c54ae3e4e5a029b9c9bdf25e85"],["/css/rightmenu.css","a6bb3c3050ee3e3aeb17fee35378e79d"],["/css/siz.css","2d3c733ab88ffc49b8be6dfe894ffa82"],["/css/swiper.css","c93d6cce3c327fff95e363cd8300b8c4"],["/css/swiperstyle.css","409095385dfae8dc2427c4be7306c3e3"],["/css/var.css","87d5a4401f230398b9cbc4128a169c96"],["/ctc/index.html","33a82d13274dff8f93a7e92345eb9994"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","c501cfe82efd141ab45ff6c95a41f6c1"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","7df1c87456338bfd6624a8315d4183e2"],["/custom-mouse/index.html","765e5c316f2edbe4f2c69e5a1edd5085"],["/custom-player/index.html","5fd00881266ced641f018add4f9dc3e6"],["/custom-preferences-screen/index.html","3317814c60da69289708d6c6ed0812c2"],["/custom-say-screen/index.html","3ffb1a59dd01867ada1c86d36b217347"],["/custom-title-screen/index.html","acc8981dfabd805c41cb50fb2e4194cf"],["/dice-function/index.html","e6baa4336fcc323e80ec48f4ca3820c9"],["/friends/index.html","b99afc3486072ce48b8d627026770a52"],["/gallery/index.html","ba6ef9c0853b72601527beab8f76b305"],["/gallery/photo/bg/index.html","d6b0032ff0b1a1d3558aa3b9ff670288"],["/gallery/photo/gui/index.html","4dc2ffa601bb7cdfe2ccd2b9e3ffebed"],["/gui-017/index.html","a36934f6ad02cad4c54b887586889454"],["/gui018/index.html","8a9f78617c8e84c702546d42fb1def3b"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","1a8fd2d696645005ef83e1c8f18e5fb3"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","162a448d3d1e31c67612750f41b76da5"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","7c6a8b7633d15e079b974e70b92a8c7d"],["/inventory-system/index.html","947c426242cdf1e937aee3c6fb244ae1"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","05ca1c5fb8bb4b62ceef86da153f64c9"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","c9d63aea8948cec0f0b000ba185eb1b3"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","d49a2f14693ee3d730c35ad304b374e0"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","4b5d5ec5a99b4c5b9172ab693d2994c1"],["/link/index.html","2b52c6539425842cf41478bae125bb2c"],["/map-puzzle-system/index.html","2d6040a5082fd02ac1f47b9b96bbaaec"],["/maple-effect/index.html","f843dcddae8908ad7d8f81d47a0c1def"],["/memberships/index.html","8f18d0578c59c9f3a755da650598d9e6"],["/new-year-event-2023/index.html","c40e38397b2abc4fa3121478659e7588"],["/newsletter/index.html","930910289fd6621fdf7be01a93aee9ee"],["/null/index.html","c1984bca74a9ac54334e706ff5fbefd5"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","eb71cdbaf7525b3d2ea3aeefb695b7e5"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","e01797bffbc004bd860ffb062e70287b"],["/original/index.html","4ae03a522da506c590986b39dc637b5a"],["/page/2/index.html","a58de4a5f6d6bc5f1c390fa9840cf481"],["/page/3/index.html","fdba6dcf18de229a7d78fa3778c3116f"],["/page/4/index.html","126db6fbe6b815df7781a4496ec20165"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","b28cc6b8403c7427c7e84fb495d01705"],["/random.html","f896fbc2bcaedfc51ada14d6d7fadc77"],["/release-017/index.html","97424d3200b390febf1d90d9688b5947"],["/renpy-basic/index.html","cf9783a7543bc71ffbc44fd824a33fe4"],["/renpy-matrixcolor/index.html","74620a82ce6c05374c2dd732e385ef97"],["/renpy-overlay/index.html","3ad510840cf82261645d0b0525714136"],["/renpy-review/index.html","327e33f20e8d670ee3f8d5d34fa0f587"],["/rpgmaker-assets-menu/index.html","412cb90352229b678a2fe21602913aff"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","291d545d628131875c6dc0579ddae42f"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","5c73416e3f08025b50c98c4bb5411178"],["/service-worker.js","726d3ff76758f75d83ce93b2a1a3bd11"],["/side-image/index.html","df385a7c9dde1d415914f6b8aae93b59"],["/snow-effect/index.html","26808b57eb9476d452b72ea57998088e"],["/speaking-animation/index.html","7455043f97e0166c28a5745bf2356de5"],["/splashscreen/index.html","0825f7f1d18100d6b5bba8331a2d35a7"],["/sw-register.js","61a58d2dc2e80dd6ebdc9a9f74347135"],["/tags/Hexo-plugins/index.html","c4e62c3ed89656651989d3ba0c88a017"],["/tags/Light-VN/index.html","912a18028fd121fcd3f4cb43a1499f1d"],["/tags/Renpy/index.html","297d18b2d492e76b55b8aabf94c2b4c5"],["/tags/ai/index.html","42918ee72f4a48f5c48a28b5f92f5bb1"],["/tags/butterfly-beauty-diary/index.html","6c5839f3fa4e29c72b1686a8ce10d48b"],["/tags/commision/index.html","f01585290fe32641b88a5a6a40210c8d"],["/tags/custom-hexo-theme-butterfly/index.html","0300fcce4a4a09e8be64d299aaf5329b"],["/tags/custom-title/index.html","794769818e25e1a81c1ce46a36909eed"],["/tags/dialogue/index.html","ab3a9eddf0af8cf2c35732c22065c55e"],["/tags/effect/index.html","c2bc938be5978ce2967d40b90c4da20e"],["/tags/event/index.html","1fae02c126a97ce71f4dadce0e627342"],["/tags/hosting-own-website/index.html","3c18e9042098b9f5df212d5d4230a4c4"],["/tags/index.html","2e33f6bac61e29baa1865f956ddc243b"],["/tags/itch-io/index.html","7bc4af60f3918241e112e010c7e1071b"],["/tags/light-vn-update/index.html","cdb80cc949a939402bbb94ec9572b129"],["/tags/nvl-maker/index.html","cca61dfb729c4257d9cc1c2df1bf5e89"],["/tags/player-related/index.html","44d26df1f510b6e3399300fcbad858fc"],["/tags/pro-tutorial/index.html","06bb5b274324b1cb52aba04b6510d73a"],["/tags/pro-tutorial/page/2/index.html","7d245321c7599aa268b384099d6efe1b"],["/tags/rpg-maker-custom-map/index.html","acc4f7b59798bff0064153b8a78afac2"],["/tags/screen/index.html","7b3cb1ed14b428b6135c8aee31846525"],["/tags/special-function/index.html","46b2ab98c50a89cf01a260459114e368"],["/tags/tyranobuilder/index.html","b77b0c68d23efbd946cce713834e04ae"],["/tags/ui-assets/index.html","d287006803ca3ed750a4d6e5c4bd593e"],["/tags/update/index.html","9aa31842ab8a5334aba2292a7c23f34d"],["/tags/upload-game/index.html","5ff9a55f2eb9b7d1fccd8c5ebfbbc7e0"],["/tags/variable/index.html","7d378c5fe22b9b1445afb3cdbcf618c9"],["/tags/visual-novel-maker/index.html","74789cd3eb53382c6274b16601af83cb"],["/test123/index.html","5eb3f2322465745facc273fe216fb110"],["/textbutton/index.html","c0ebc92f013c2b3f7e1a3858057e001c"],["/to-do-tutorial/index.html","a27b76d76902e607843b12f24f57dce1"],["/tools/index.html","0b2fafa705fc8f395b517442b8c12201"],["/transfer-to-hexo/index.html","4256c37e548f26d4089000df1e6ba18d"],["/tutorial-update-history/index.html","9cf0476ed4d67cf8d7276d1deede6501"],["/tyrano-name/index.html","c81d1df32128d960af6712a4b7738879"],["/tyranobuilder/index.html","9302637d5d00110b96c0007b4945f3a0"],["/undefined/index.html","ebc849f26ab988eed34f0e2a880a0611"],["/update-20221211/index.html","85af5d2234f71bbeeed83c9e5d2fc711"],["/update-20221218/index.html","338d7b7a934ec82dd9741b3cd761be46"],["/upload-your-game-itch-io/index.html","57312d2798ab344ef56d4417431285df"],["/use-list/index.html","74089fa9e5a554b65a1437260e8bd1e8"],["/use-nvl-mode/index.html","33b5fef0c6d4bd9e14063d07738490b1"],["/useimage/index.html","90c1b1c758ac784c59f89284b2eefa73"],["/variable/index.html","6b7a48e589c48902db7b6f84cd7e9814"],["/vnmaker/index.html","1e479fe36d8bdf32046f1d1d7b534117"],["/weather-effect-tutorial/index.html","f53b738376ddb8f13348b78267f9ee52"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
