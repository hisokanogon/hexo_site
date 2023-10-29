/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","85943e0ea2b832265a4166f82c3de35c"],["/2player-battle-system/index.html","56bbc9a50c55ae028f96d3495d0ec60b"],["/404.html","781423cd9e6d917724d4359fd53e5d00"],["/about/index.html","e6235b91f9596f82e2be724b149db687"],["/acg-creator/index.html","657a07400a5a650daa96d46bde786a8f"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","3da7fd13809d3be48e4cc4e774f20dab"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","70cf170b1fba98060728879b0f038b44"],["/animated-title-main-menu/index.html","5d64dfcec88bfaa504bf06ba4447c880"],["/archives/2022/05/index.html","9d0141ddcc4557579f861c898d344957"],["/archives/2022/06/index.html","f4e2c1c7a702e916740d84279766a3d8"],["/archives/2022/08/index.html","6f82d25a065cc151e086406db9e8936b"],["/archives/2022/09/index.html","cc79ce4a00680557a7155a6f5b133077"],["/archives/2022/10/index.html","12f46439e611bf936641bbbf5e4d459e"],["/archives/2022/11/index.html","e8f067795adbcce6bf208a518bd356f4"],["/archives/2022/12/index.html","b89f8d29ba7e2dfaf1d56488634fd61f"],["/archives/2022/12/page/2/index.html","41ef35b74ded8ca5cf62f3fa163bb711"],["/archives/2022/index.html","f23adca534fefe70935a5329b4ff116e"],["/archives/2022/page/2/index.html","9fa5ce6ceb469fba36e10c3702909342"],["/archives/2022/page/3/index.html","50b64607bb5506f7ee7ce100acff1ec4"],["/archives/2023/01/index.html","11ab3e6047036a9b964dfe10ecd18677"],["/archives/2023/02/index.html","b804f2192ee9e82c1ef1e2e4b84aaabf"],["/archives/2023/03/index.html","14208ff301d2ba3d0d2b1e82e208df2b"],["/archives/2023/04/index.html","856f3d3f52e281dad4eaea5dd016a5f8"],["/archives/2023/05/index.html","57d7ea09fc0b96d2180e6e3315a06473"],["/archives/2023/06/index.html","75ec114b5c56a4f4ea1e0323e20f3011"],["/archives/2023/07/index.html","c198d8f3484a8aad77d7a542f32602cb"],["/archives/2023/08/index.html","269af181f505542ad6e05d0a8c753b48"],["/archives/2023/09/index.html","1c53a95fa5e76dc206c26f063a6b2eb7"],["/archives/2023/10/index.html","060f90a07ac26c291fa92f4a8a4f1e01"],["/archives/2023/index.html","b5f5ef406e02298b5bb11cd8054ff368"],["/archives/2023/page/2/index.html","e37fb4ebd85733695c40e1fe78487697"],["/archives/2023/page/3/index.html","322bebc9697ef87cda3b44c25d03b0a6"],["/archives/index.html","3d8be304dd7312a870156c0671d148e1"],["/archives/page/2/index.html","c8a47494c4432ab19d8e28d76932e7b3"],["/archives/page/3/index.html","88d55efd7355e212c848d98fccef5d03"],["/archives/page/4/index.html","5e306f4adebc55cb915f28f3fdbcae88"],["/archives/page/5/index.html","5ec8b0d2da171911d805eed70d5abeed"],["/archives/page/6/index.html","658b624cfa3913434f8ac30e60033b24"],["/artitalk/index.html","50ca509cbde0455c4eeeb8a459b0b2e0"],["/battle-beautiful/index.html","de99e6d59b0e71ddd15de060c9320bcb"],["/blur-effect/index.html","8175cda4549bf6a150958c2aa273e387"],["/butterfly-custom-tag/index.html","801d334cb28a5d1b305004f6375e63b1"],["/butterfly-plugins-faq/index.html","b0e37f84dbeebd855698c454c4c1e0a8"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","2095d6274ebc8a19ffba72d2d7e3f2ba"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","d731ae58b8b5e64b4d6b15cb97ed3c3b"],["/categories/announcement/index.html","967e9935ea2d477acd236517dbfc2598"],["/categories/diary/index.html","722a43b03d677ed4831d94ab20b31cc8"],["/categories/game-dev/game-engine/acg-creator/index.html","6a4e510f387db010ed00d48772c86238"],["/categories/game-dev/game-engine/index.html","45f93184b099fe32942df69a7a83ee9a"],["/categories/game-dev/game-engine/lightvn/index.html","b6ce711cc2c1e7bc198c3ca8e5ed4c05"],["/categories/game-dev/game-engine/nvl-maker/index.html","898c3299d7340cffe3cd67b682d23dfe"],["/categories/game-dev/game-engine/page/2/index.html","f3a3149a2f61b6d96e58ef2c4879eddd"],["/categories/game-dev/game-engine/page/3/index.html","e50ce8a0ec6dd35e332a6c87c97905e1"],["/categories/game-dev/game-engine/page/4/index.html","f5e92a43983ba9ff4e4b32b5f40c2621"],["/categories/game-dev/game-engine/renpy/index.html","09de0ffd4dd3661d78cec69b77d27b30"],["/categories/game-dev/game-engine/renpy/page/2/index.html","c97a7d07a53126b1c2873c3ced1fdcb4"],["/categories/game-dev/game-engine/renpy/page/3/index.html","8b1a28ce9d945650c9ef667b9e5bafa9"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","63edb8c7397c9023882b1eafd451296d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","83c5d9a3f5b992353c8efb9ba7f39662"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","97183022ffc75373f8a29651e769f162"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","a587eb75058cd9679bf9bc23678491ae"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","042a1599e430ee192f2c5a17c3541daf"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","46168d63c63f12881d322af6e10b956f"],["/categories/game-dev/game-engine/rpgmaker/index.html","9cedbd6b7f788a7c708e2d641d8bf970"],["/categories/game-dev/game-engine/suika2/index.html","88ca3a5a0baaf567505bf9b517c9c90b"],["/categories/game-dev/game-engine/tyranobuilder/index.html","325dc46f4b46ff0f242c12b430379b3c"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","f1442b9d1f4a1b83af73ddb8ac23c242"],["/categories/game-dev/index.html","cbc7cd535ef6b1afdbdf0bc51f638a0f"],["/categories/game-dev/page/2/index.html","26c75213df9a94907bdc9317b18b9563"],["/categories/game-dev/page/3/index.html","d924c2f52309f58b5ead4e6bbd804a92"],["/categories/game-dev/page/4/index.html","cb82685acd44ba912fce04dc44c513a4"],["/categories/hexo/index.html","7b2e3a89561c4815947a573029022628"],["/categories/index.html","e4a16873bc06edca23898d52033dec35"],["/categories/material/index.html","07089e718ac7304d7c768abcd6e97f50"],["/categories/update/index.html","09cf37d814f694731ec003af979adfda"],["/change-according-to-real-time/index.html","ab05be9e5fb2de7414caaa6cfb1dca78"],["/change-character-info/index.html","96b842bb78ab425e38a57c462c59198c"],["/change-title-after-first-time-viewing/index.html","0386b01f8e49d9df021a970cf9b58e05"],["/change-title-based-on-event/index.html","6157ec3e4cb57aeb1b3295cc820b40a4"],["/character-interaction/index.html","33627a49eeaed99c4d306870c2dcd610"],["/character-stats/index.html","7daba4c1380e911f7c3e522e049a081e"],["/chatbot/index.html","8bd7860293ad72323ef185103392172b"],["/choice-time/index.html","e0f6cf70fdb40816a5b3d0c56f92e3f8"],["/comments/index.html","09a1e04e3d7f1143279d06cbe7ae5b16"],["/commission-info/index.html","b56a5a8760400d3f3ffb20faa0b45dca"],["/create-button-anywhere/index.html","e9cfcf80020ad1e26763819256a85f98"],["/css/eurkon.css","d68997e69cbdff7898ee8b1323575e81"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","923651a10438f09e7f36a8b78a7ca345"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9ee0c05c8aaab32fc37dc994a5897b97"],["/css/rightmenu.css","ba01a2bef58a9c1ae8dc666a6ddb8fea"],["/css/siz.css","5736f520783f0fcb4f0d9a6e2b5bc515"],["/css/swiper.css","74d6841f751139b6283da36a51ec0f25"],["/css/swiperstyle.css","9398992c45f86e93172dda68d4034197"],["/css/var.css","52a1bfb60a775d4b4bde34df494d2822"],["/ctc/index.html","ee36609c32890d88a4921bf023501eb6"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","955b6831eecf4b8683a95418311899be"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","9c781863c8b6bfa4670b2161c9121037"],["/custom-launcher/index.html","a934bb0389eabc58680f409e4faaec6d"],["/custom-loading-screen/index.html","09aa86cc42a159c5ce8692172e534b0b"],["/custom-mouse/index.html","5c0f478b997babe6d0abe8ce512550c6"],["/custom-music-room-screen/index.html","5cad2e3005704f6f9c7a6f5e74f28c87"],["/custom-music-room-screen2/index.html","284e7d0ad01a46b426127c78abf564af"],["/custom-nvl/index.html","6fd3527496d1cfeef108cf0f094e9cc7"],["/custom-player/index.html","ed0ad969f5f3eea3d31935c389244b79"],["/custom-preferences-screen/index.html","765fac6bb714f765ee9603f3665b9491"],["/custom-say-screen/index.html","e0cdfb9471d8139c702a594c24962f14"],["/custom-title-screen/index.html","fbb513fcadbb048193c8e25333e7e584"],["/define-npcs/index.html","ce10dbdb98284127c56ed632b9407398"],["/dice-function/index.html","13cd57855b8138bd6382f47491daca6f"],["/disclaimer/index.html","3f699d586f5d31fd303e02a255792def"],["/display-immediately-all-dialogues/index.html","f2d9c23629be12fe1907d64e94541e44"],["/enter-name-screen/index.html","7fa8adb69ab2e5c10b3518522b2c97f6"],["/export-game/index.html","a14a532f2d494c96412a866acddb259f"],["/faq/index.html","fc2ef6afc35c0fa80d7485b81e467920"],["/friends/index.html","0440a0ef1b26788b51029c5e537b8ee1"],["/gallery-template-assets/index.html","517da2761f3130d42c7040f0537e552c"],["/gallery/index.html","82fc1bcfebf137afa769f9f45f529d1d"],["/gallery/photo/bg/index.html","402f1e00add7fed95e2ffa493bc07c5a"],["/gallery/photo/gui/index.html","91fc3819ee0e60c0ec2890d4c939d687"],["/game-only-text/index.html","936012ea7c8907a3eaf9f661d47160b4"],["/gui-017/index.html","2af54111d6e943dec20556de1c61be0e"],["/gui-vertical-002/index.html","c2a3db740da9f38c8d1ae3f7157959eb"],["/gui012/index.html","a1152f371c30be6cc89632666069e9a2"],["/gui018/index.html","707ac1dd6edad6e3e45d4e83ddc7e6a8"],["/gui019/index.html","527e124ab56f5f6242b12aab78fd0488"],["/gui020/index.html","6c38d366d208825b40abc668274c870a"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","d5837f0c038a2b63c49f58013098bbb4"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","ede90d654144ee3fbab37ad477f19304"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","7e5f4869121421b98e4ea1a42ec0789d"],["/images-tip-function/index.html","ddacf320c5003187effcbcbbd635659b"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","f4d7e49154219d677357373f920ea49f"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","f57a87311caae3dff349b402329ec2d0"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","5211f03b2758b7cb119054d72f6b5582"],["/items-sprites-effect/index.html","63e6b4b9cbe308a8f59a4887e4d19897"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","7316063807f0619109d8bb9f2ca33d4b"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","6972c2e64c5fbe147628c0a0cea767d2"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","440af642318a338bb4a9b0aef190b0f9"],["/link/index.html","dff61cdad6bb6d15dce5b21a55e160ff"],["/make-butterfly-beautiful4/index.html","f9895f0b7698f6ca808b9558f8259cc3"],["/map-puzzle-system/index.html","adb5229a7d64ffa8a5e06f03c6ba5435"],["/maple-effect/index.html","99481c8d592410fcea05156c7748d196"],["/memberships-2/index.html","8483c8ead7945488ea224122d804e0c6"],["/memberships/index.html","72ca1009320f30770804218831435859"],["/multiple-language/index.html","7dbe245aba26f73e1d32391cb7c4289d"],["/name-input-assets/index.html","350799dcef8d2857b81c99f68866ea65"],["/new-year-event-2023/index.html","25f0b08a13096bf2a37b7e78496c1902"],["/newsletter/index.html","9258fc5dd20aa14bba19eff24dcfba15"],["/nsfw-limited/index.html","6a83eb46104c68cea741807c88ba89c1"],["/null/index.html","a2ee39cf3ece5dd599ef4ac09394ee89"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","aa8c56c048eb2e0e3bf556e7fdf68b6a"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","7eab4ed4aad29d0b280294b60852c99b"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","34c495c4e6295406f2677c55d5c7d503"],["/original/index.html","cf5b42d9edfb2e7f509214b662fda0f8"],["/page/2/index.html","ef8bffc5cbea1a6976a3f15ba1652ed8"],["/page/3/index.html","939b44d36d95b5a80ba47c85dd815926"],["/page/4/index.html","4c567624badcfee7f6c0dda2feaff2e4"],["/page/5/index.html","fb76fce2cb0d2806912e77ec307af049"],["/page/6/index.html","615bde29809be13f6ee74bdafada5448"],["/point-pop-up-assets/index.html","731ea9151978baebab434612998da3ea"],["/pop-point/index.html","43a87537668fc4db007b1d6e8ee36b7f"],["/privacy-policy/index.html","a356b8c5e33da1c03accc4a561c4f156"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","a83eb5467309c0ddb7c7505c195bea07"],["/random-number/index.html","96002b92c05050db4b1e6561edef1d1a"],["/random.html","3bc1eb9e153ce50ca2f128198165850b"],["/release-017/index.html","28ed93ebb52328a85b1ac1c098c3fb9e"],["/renpy-basic/index.html","89cd8be82587b5fb24792be985e73cbc"],["/renpy-crash-glitch-effect/index.html","643963b8ed083a82c65f9fca5d0b46ca"],["/renpy-matrixcolor/index.html","a1c54661560f522501d97f99aa850167"],["/renpy-overlay/index.html","4816815201764efce524ee76688fb799"],["/renpy-review/index.html","4a25bb8ba4001949fd893a470ca11c9d"],["/renpy-typing-effect/index.html","3e70cb0b7c6721a0aa7d2d824c7d6009"],["/rpgmaker-assets-menu/index.html","9fc06efc3c20b0bc711f691c85f43a78"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","a5d4efe17a48f9dae2b020c2799e5458"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","c012f697b7d35b1be092faf7dfdbc573"],["/sakura-tree-background/index.html","8daa36232abdc571d912d4c8a3b36be2"],["/selected-button-style/index.html","aa232176ae722ad41028ace93600f54f"],["/service-worker.js","2340bd54701b44963dbc7d7f77893584"],["/show-variable/index.html","3d367bfff8ac0d9e4aed6265d1481e73"],["/side-image/index.html","8a5dccd8e208b0be58d607ef4f1c280a"],["/snow-effect/index.html","7b0fae233696ca3cdba25aabc91e1db6"],["/speaking-animation/index.html","becb74175ed7c296dac193081421f9c8"],["/splashscreen/index.html","ff2714073146d44996e11875ddba0492"],["/suika2/index.html","3c07e1a784d58c176330b939b9324984"],["/sw-register.js","c26d8faace96e4fae68bf180bd37f35b"],["/tags/Hexo-plugins/index.html","d8f7d553658a49b6507dd20d8ddeb0b4"],["/tags/Light-VN/index.html","463b1cbc82410d9ac5295ee0b63ed119"],["/tags/acg-creator/index.html","fb14752f401aeb735aa6c213d873e640"],["/tags/ai/index.html","068a4912b5f98e10231622b564f77e9b"],["/tags/butterfly-beauty-diary/index.html","cb7c55a47a36dd67b53ffcf729c70b93"],["/tags/custom-hexo-theme-butterfly/index.html","1fbc118080c6bfe4cb29de076e6c26e4"],["/tags/custom-renpy-title/index.html","9d917e07e95e44f34f742e8ebe64ba36"],["/tags/dialogue/index.html","95abd2f6b285091b12f09c114cc4aafe"],["/tags/effect/index.html","86c21f9cae658614f0660efdd45427cd"],["/tags/event/index.html","73417d9b55f80fe4907a42f2b83b4482"],["/tags/hosting-own-website/index.html","398219c7c7bb7791cda152917e6d92d9"],["/tags/index.html","9262dd4d149b4730d0c968c8b02faec2"],["/tags/itch-io/index.html","30a80d4019822fb6b6c2879efb629daf"],["/tags/light-vn-update/index.html","32a30630e5c74c74d6735c11812a9e24"],["/tags/nvl-maker/index.html","df0200d8ce354565c332efa53363994f"],["/tags/player-related/index.html","c7917046a4cfa9ec342b4279e4fad1bb"],["/tags/pro-tutorial/index.html","681c7ae7cda3a5f585feec38f1b8225a"],["/tags/pro-tutorial/page/2/index.html","6352bcce5c966c85ece50f05253cab11"],["/tags/pro-tutorial/page/3/index.html","30e8e1c3b55daeb2adffa21bdcbb0517"],["/tags/renpy/index.html","1257c9b785cbd9f0f58f603c7dd90b31"],["/tags/rpg-maker-custom-map/index.html","a81f0e8c3ba91453c6832e097eadfad2"],["/tags/screen/index.html","93dfb41a4ae703c8fc2063d5865aaf2d"],["/tags/special-function/index.html","b7669e25ed0a8f6cd72b086070aba1a7"],["/tags/suika2/index.html","5d23197e1388a77e87e3baa6842efd3b"],["/tags/tyranobuilder/index.html","e3df4b45da103969c4b8150947bee00e"],["/tags/ui-assets/index.html","80e084d296163eb6e1d5b63a768eb5e2"],["/tags/update/index.html","74a66e1ce937249c732b12184dda6e3a"],["/tags/upload-game/index.html","28d50f5b4398b2eadaa7d444345a7a70"],["/tags/variable/index.html","9c85f73807f4ec609fe878bbd248677a"],["/tags/visual-novel-maker/index.html","4dc53391d31743fc4952144bfe2aa101"],["/tags/封面製作/index.html","cdc45658aaede6fd3a8cdcb8ebeb63cb"],["/tags/背景素材/index.html","cc45d160455cf3fb2841737425841b19"],["/tags/隨機功能/index.html","c7add8af0d46be7cd10b8e188ab0180d"],["/test123/index.html","19dc9202eb7d360ef023761472c4fe18"],["/textbutton/index.html","aa6f1ecdeedc7208f5746aa6bc3cfa10"],["/to-do-tutorial/index.html","3831ec4ae9601b1254ab96a8094557f2"],["/tools/index.html","a70757d8db8abd6ca3527676159e7eb5"],["/transfer-to-hexo/index.html","fe4a82512b2bfef1d72cf1da1c18931f"],["/tutorial-update-history/index.html","5a129cc943df153bb279d523d615a7b4"],["/tyrano-name/index.html","6ed6c519163878885637b5c98e3b592a"],["/tyranobuilder/index.html","8f109a63ba32f93eb871e35692849f5e"],["/undefined/index.html","bb280c7c10d11833f343514d13d32654"],["/update-20221211/index.html","6d3421e965d0a55e12e401d5f49c2eb3"],["/update-20221218/index.html","9a3d27540f5946d720409b1a3b96b966"],["/upload-your-game-itch-io/index.html","757d65f15ddbb69b458365ddd99940a6"],["/use-list/index.html","a1918052d090372d231cd1ece37b0381"],["/use-nvl-mode/index.html","8a2694de933060a8822c69d2d77c975e"],["/useimage/index.html","18e61368c6b9390074c2d0af7ed07676"],["/variable-change-image/index.html","dae3b0ec0436d894f10952aeba725097"],["/variable/index.html","df4bb506fb417b40786f936fc47b1122"],["/vnmaker/index.html","18f50832ad69b312321209b3263198bb"],["/weather-effect-tutorial/index.html","3274657514d5e4d6bddea831ef3bb2ea"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
