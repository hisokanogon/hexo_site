/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","85b63279341884a6c218016af246c068"],["/2player-battle-system/index.html","0ee10aaa08a6d24532295bb180c13447"],["/404.html","3039dc0d1d63058e0f5820bcda9952fb"],["/about/index.html","16903a67be2a4948122d46b2d587c28e"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","60ab4aa8ac045c917c21d41dade54df2"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","5c0797fedb355d20dc9f409cfbae2444"],["/animated-title-main-menu/index.html","96cdb7d255bd88db664fa36bd8652621"],["/archives/2022/05/index.html","fe6af21bc1f13b6cb3485f76dd853c2b"],["/archives/2022/06/index.html","e96e376d2c11f1e215a53ee1f9b99a88"],["/archives/2022/08/index.html","638aa4f273b25b7d2a846f0485460fce"],["/archives/2022/09/index.html","b25ce369938aa986b91a9964afa003ce"],["/archives/2022/10/index.html","3be3b3683383bb5291b67f12472e04d9"],["/archives/2022/11/index.html","4c736d5f9d6a7102a4ca82870e9d380a"],["/archives/2022/12/index.html","092398dde6248bad1bb853e394b1e2de"],["/archives/2022/12/page/2/index.html","eccddfec9bbe6239333126d3d440d8be"],["/archives/2022/index.html","5ea5a8ddfd85a4a589b826b8c8dcf169"],["/archives/2022/page/2/index.html","928860144e1f5a03f07e19ac944324d9"],["/archives/2022/page/3/index.html","cc39c2f346098cab6d95a4d4fb22365a"],["/archives/2023/01/index.html","f694688755e3fd2c6416f8981c8b8362"],["/archives/2023/02/index.html","887a4a0c70461268d69afe61ab8aa5e9"],["/archives/2023/03/index.html","74df646b5f6177ac4b362853644e37d1"],["/archives/2023/index.html","be72f33fe92d7cad0e05fb725ae46b79"],["/archives/index.html","dd32ac3b2c64faf807adbdcaee28eff4"],["/archives/page/2/index.html","3d58051d4aeec4bffb2eb06f9e1e1235"],["/archives/page/3/index.html","9ff7a4969b26470b5e5af97d634619a7"],["/archives/page/4/index.html","e44b94c3747bb7afa042fd601cea71ab"],["/artitalk/index.html","31c12c8270e047a5936ff43e531daa7e"],["/battle-beautiful/index.html","e91e92d0205fc6dd63e5f4582e8ffeee"],["/butterfly-custom-tag/index.html","dc2083fa3f7e3a87c6a138d58d2b7c79"],["/butterfly-plugins-faq/index.html","bda9013aa3a492a86e601f42e7b1ccb2"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","9bddcae7fe1a40f0c6ac8db3015877d6"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","17a9ddbc8d7f593f074f5bd8cf0443a8"],["/categories/announcement/index.html","66ddd6318eb0e6ae91b4faa9b6476245"],["/categories/diary/index.html","303fbdc50b9b7fc49ac0a77ff53e9e45"],["/categories/game-dev/game-engine/index.html","7c2fd9e5153afece5c98292a2b3df700"],["/categories/game-dev/game-engine/lightvn/index.html","21b302dfc3238cb2528ea8c91b80e4c0"],["/categories/game-dev/game-engine/nvl-maker/index.html","ba22af75265a2f496cfa6d1450caee20"],["/categories/game-dev/game-engine/page/2/index.html","9aa51ce8a93b5de8912269471659f3ba"],["/categories/game-dev/game-engine/page/3/index.html","40b140aa0d28933afd851b479575bda2"],["/categories/game-dev/game-engine/renpy/index.html","204acbd91ad6ef9eb373887eb1e16079"],["/categories/game-dev/game-engine/renpy/page/2/index.html","e690f6a2e9337189efc30b266f951c7e"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","ca61c23b66e97682776596a169fe48c2"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","3ef073be1f658538d4ee7e3bb252be4a"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","c6c8ea9d2dc9857926b4228fed71bb4b"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","fadebd2ff99bafa39c7c30483d1cddab"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","ed60879eae92423db721356b5fedf7d1"],["/categories/game-dev/game-engine/rpgmaker/index.html","24429e78dbe8d3b0abc84bcc9141cf32"],["/categories/game-dev/game-engine/tyranobuilder/index.html","8ad5be77a915cac9193666ac6480abb8"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","ad3f2fbcd91067e13f635349bb677317"],["/categories/game-dev/index.html","c89607f3f0c07b906a529e3432e728aa"],["/categories/game-dev/page/2/index.html","034b1e3df11008fc260106b1aae9a4f3"],["/categories/game-dev/page/3/index.html","394c8a95b0d469331339e7f64e1dfe6e"],["/categories/hexo/index.html","8ffddd8a29aa7dc2264f5c162bd19a6e"],["/categories/index.html","560781f4e13908ff09ca8b2bda3ae47a"],["/categories/material/index.html","b9bd0c0622cc099ec30f7fe8cd3dec31"],["/categories/update/index.html","cc592c7c0c46aa08e73a1ff29709f75a"],["/change-according-to-real-time/index.html","ebcfb9ccba2b66a734ea35bde34af600"],["/change-title-after-first-time-viewing/index.html","6b2e6bbbf13594b5110dfb5325693d3b"],["/change-title-based-on-event/index.html","9b50c0d20e553a95067b0177f1e857f3"],["/character-stats/index.html","19f2cfb03350657161ff7b9ea1860826"],["/chatbot/index.html","7a936e5577f2334ae6307f5345bdb1be"],["/comments/index.html","90856bead6c6713b35fd07075e1026bf"],["/create-button-anywhere/index.html","c0ce1524fa3c1f6ce64913c6ff39ecbc"],["/css/eurkon.css","32754d81437c14d1a3c5a0a68991f37d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","7b30fec4366e40f62d896786b914f7ae"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","11f03595adb955a56ca0cbdab0d5917a"],["/css/rightmenu.css","7dbd18b4b87abfe9f08100135079eecc"],["/css/siz.css","ea2fcd4c5206d6f9fd664db868d5feca"],["/css/swiper.css","e36b78c6719190364f665e35f8a7e0f4"],["/css/swiperstyle.css","1afd45c7fe1c2c7d03408e9027968013"],["/css/var.css","2c62407c4fc2aa3ab90a876b3698e062"],["/ctc/index.html","c2721ead0145108407791b5ef982e0b4"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","421f5f3e1b063969e7de16f9c624f230"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","4ea6832695d05fa351464d5f584d9c26"],["/custom-loading-screen/index.html","10d42cce3de74882110cd033b079452d"],["/custom-mouse/index.html","1c1bac725d5198bb560577e68e598ceb"],["/custom-player/index.html","d82076c468a68ffffc30d3c4a35c5f56"],["/custom-preferences-screen/index.html","5be1f32eaa71b168767ca762b48033b8"],["/custom-say-screen/index.html","02822f30254a70f9b203608ec4c3a567"],["/custom-title-screen/index.html","9ad7f3b9b2f3eee7ae4f33d356eb2863"],["/dice-function/index.html","ceb8f4102d5680209faf9d6bfc9558a4"],["/disclaimer/index.html","56d88bc6c895e990ab4bb431c9eb342c"],["/friends/index.html","01b7e0cb4e268e9245c3d4076bdbca6c"],["/gallery/index.html","fefef27b6e46a82e489a07f82f81de70"],["/gallery/photo/bg/index.html","137c60bb68253ad084c94207ada426d6"],["/gallery/photo/gui/index.html","b9b8f174b1e10deaaf98d5f70853eba4"],["/game-only-text/index.html","02977b9bdaf55e419800f4f6cd47f6b4"],["/gui-017/index.html","562d6b2f1c7bfbdb44bcd1ad86c7eb7f"],["/gui012/index.html","81c21050037ebc8a16bf18c33fe0137d"],["/gui018/index.html","8f87e75d07b659396f0eeb663729898d"],["/gui019/index.html","bea830b505f0e6f9e5841e4b5ed3d24e"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","316b98e5c39c4d840424c413ff740b70"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","28450b6b38760b9a7fbf9f866f485f6c"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","20cc730184678659e6ad9b6e9f3ce3f8"],["/images-tip-function/index.html","1da1e2c7dfc600bf2ad2c0515bbb3d2d"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","fef0f36192ffbd8c5dc318442b74e580"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","0af2d5e56f0af223814c07bb5ade6d25"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","c53bfd553e700ec27f91448f82ac329a"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","675db7b109187a8b6e8022810e4c7731"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","8664c35600cec75f42e08276dc0f608a"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","57f2055d3f0c5cc25ffdb25d1b305b3a"],["/link/index.html","e72899b81e152fea64bbd40203acbcee"],["/make-butterfly-beautiful4/index.html","da7eb19d3333709afb6a514c986c7f4f"],["/map-puzzle-system/index.html","d78912194ef597d8136d0cbd264d99d7"],["/maple-effect/index.html","31a6f1e008bb13683e8c0335ac8d16f1"],["/memberships-2/index.html","1eb318c3c7ba8ad617b2f1e846685795"],["/memberships/index.html","46f83980765e9a308905b062da248943"],["/multiple-language/index.html","2e7f611323fac7d68f03dde9f6b1dedc"],["/new-year-event-2023/index.html","e30beb58354b4fbfcd9709781cf371be"],["/newsletter/index.html","b61ad5471b061885c588e7fd02908236"],["/null/index.html","c7fdcdd9edb4104e9c8dbded3b21c3cc"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b7432e1416a0ee324935a3cddd50b2da"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","ee8986c20afaa7eb0a1d4dae39841639"],["/original/index.html","06ac6837713176e0b3c0aa56fd881724"],["/page/2/index.html","3fe20f8e485f7f00b14169a7bfe0553e"],["/page/3/index.html","d618cb3f00102f0fae7de8645cb3440d"],["/page/4/index.html","c7d31eb34da17a3e94c8f0b6c3d44b96"],["/privacy-policy/index.html","92d1a2a335b776cc216fed806983eb95"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","a82d40fc98529cbd68aaca44c1538229"],["/random-number/index.html","40ae2dc1a898ea1d08e1c39459a8f1f4"],["/random.html","bf12487bf1a997dc3670393a2c9cf926"],["/release-017/index.html","77684dcb07a53641a996c3c35f59d008"],["/renpy-basic/index.html","cc40108d0229f6ecae5469dc5dd480ae"],["/renpy-error-crash-glitch-effect/index.html","bc7101b6b0dc7ef2a853c5338249de1a"],["/renpy-matrixcolor/index.html","5d0c8112c95a942fd3a356cbfd4b2bc7"],["/renpy-overlay/index.html","bec38e4d81e4a4873181e83fd40822c5"],["/renpy-review/index.html","bc0661243df280cf82aaff5567f3537b"],["/rpgmaker-assets-menu/index.html","78424fb2f8d8a00e8fb11538b2e00505"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","22f3b02c85ce59b1890d166863f50bd6"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","dc61f552d86b476c62df9f50cd365337"],["/sakura-tree-background/index.html","971fa6e3f59b59ee65b3b0cc0879c9fd"],["/service-worker.js","6638d1c6157bbdb8bfba827b7b63fa1b"],["/side-image/index.html","9f71c90e6bb765f30c5caad2db02fe9e"],["/snow-effect/index.html","f48d435e97b8cf088d40e044c749476b"],["/speaking-animation/index.html","089ad4ab5d5f79223be104b1d49083e6"],["/splashscreen/index.html","26227deff4e6a4b67d7d21fe2e5a11aa"],["/sw-register.js","91dba7fd5ed8566121b06ecc7dc59bc6"],["/tags/Hexo-plugins/index.html","7797aa88a5f6cf59aa16c58cb78c3c05"],["/tags/Light-VN/index.html","d8aeefc9767974e4975fe7a30e97b101"],["/tags/ai/index.html","358b6cd3a8cb8fadb56508ed22a64a3d"],["/tags/butterfly-beauty-diary/index.html","df0084654ac991f34554895cc0b54702"],["/tags/commision/index.html","c4acf629e32d8855c5c1d4f168d1996c"],["/tags/custom-hexo-theme-butterfly/index.html","576e9324538fc09ecbd077e72de3f148"],["/tags/custom-renpy-title/index.html","fd2106422c36de01a4eebbe033829bae"],["/tags/dialogue/index.html","cc5cf82d2069b786c96e27f105c50f8e"],["/tags/effect/index.html","169f2bda06fb86560a94333fdba66ec3"],["/tags/event/index.html","45c2f79d79ffbfd5d2d4c8f0faec6cb6"],["/tags/hosting-own-website/index.html","b42399731e805a862f48f5af412349f7"],["/tags/index.html","08b989af158efb612b2f4330e7482050"],["/tags/itch-io/index.html","20625d01f8566c10b0db421a807d178a"],["/tags/light-vn-update/index.html","7f473cf7bc413cb760f537722f0755b1"],["/tags/nvl-maker/index.html","a9c340a34458b6481d7684148fca3102"],["/tags/player-related/index.html","9e53d26aa9785ac3ec0dbca3d210a050"],["/tags/pro-tutorial/index.html","b7acb04cc70222096983f4e8be091664"],["/tags/pro-tutorial/page/2/index.html","f31326a9cc0abcdf83ba912a68f06ff2"],["/tags/renpy/index.html","0d7d1834a83379ad0bb5653435167a7c"],["/tags/rpg-maker-custom-map/index.html","0144bf0dcc77273f376678c60d858ee7"],["/tags/screen/index.html","c89578dfcc643f6b4001bb984d41be72"],["/tags/special-function/index.html","8147abc7ce31c7ba81c133c748a1aaaf"],["/tags/tyranobuilder/index.html","4119e9215e5a9a31998a7e42d715e440"],["/tags/ui-assets/index.html","c96620858b00d5f4aa0bfadcef9b73bb"],["/tags/update/index.html","b9b471d0351610c1de1319c1d72b6aee"],["/tags/upload-game/index.html","0b3112535060dc99d885478611214890"],["/tags/variable/index.html","d3003b9f5fe5c9a5fd96879f92f0243c"],["/tags/visual-novel-maker/index.html","23b75c1bf993d4c15581cc7312ea44d2"],["/tags/封面製作/index.html","106495b3a74ae25d3af3bc89ac15024e"],["/tags/背景素材/index.html","37c7ed8b7ee6dad52f91676bdef831f0"],["/tags/隨機功能/index.html","264e98b11422e9872a70abb815e6d595"],["/test123/index.html","fc628d024723a2e6569411f6428dc485"],["/textbutton/index.html","d5375779e97ae5a7ee517622d7f2de16"],["/to-do-tutorial/index.html","15b69c6a499bbdf881505a8af7996ad2"],["/tools/index.html","204c90d145cfabb5ed5668031a79f2c6"],["/transfer-to-hexo/index.html","b324473c3f11f3bd5a06ad6a45976f73"],["/tutorial-update-history/index.html","1fb92feb27a3825f53dc83e3f1ceb1f3"],["/tyrano-name/index.html","78221fbb96dbb0f694ff44286b44aa81"],["/tyranobuilder/index.html","b005b64f270bd180a307a9ed0de52635"],["/undefined/index.html","f9d8c9c49426ca6cc52c64c3374897d6"],["/update-20221211/index.html","f7534ba84ee313f7b5f086b94e0b2866"],["/update-20221218/index.html","1839cf236fe53e7be84da3ff1f04f88c"],["/upload-your-game-itch-io/index.html","4dbd1ff2ec0c7d4c0f34800233ea21c3"],["/use-list/index.html","ed33b4805b7144447310786c97e5d467"],["/use-nvl-mode/index.html","87e7a07b6051fdb953b6b321bc364371"],["/useimage/index.html","f2d4bc2b0a6d7e9fe1bb85cde1a04fa2"],["/variable/index.html","7958a714bd43fcbd3c79de55425ba8fe"],["/vnmaker/index.html","f8595436403d10c68e2c08cb3e33a987"],["/weather-effect-tutorial/index.html","004cac815ca0119c4620b383f49c4bd8"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
