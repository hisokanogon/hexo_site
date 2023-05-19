/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","0c24c4f212c1b0953fce0c3f4129b5ce"],["/2player-battle-system/index.html","663622bc4c59e47fc27f1707f5fae659"],["/404.html","267c849a750e799755f594c2e9108761"],["/about/index.html","6c584c2a820eea327bfb8dcaeb49a79c"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","11fd65330d30692311357dbeb81c7d8a"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","014e8218cf74ca5a297677912ef959b0"],["/animated-title-main-menu/index.html","13ef6337e911c8454320160ed13ed3fd"],["/archives/2022/05/index.html","790ea9aaaaf710314ffca5473d2eb82b"],["/archives/2022/06/index.html","6d8068ea0c746fe97310f71c8f14d741"],["/archives/2022/08/index.html","292be2841dd33d1bff8d39272d4f523f"],["/archives/2022/09/index.html","8e857e7c4a51067771160894639f6efb"],["/archives/2022/10/index.html","459460546dec0fe8b902e5f0ca7b3d78"],["/archives/2022/11/index.html","75907846a37be92fca9a7e3093bf971e"],["/archives/2022/12/index.html","90255feee1501bfc63f5f7c661cca932"],["/archives/2022/12/page/2/index.html","7a1a14c56cabe24202102a84cd1ec104"],["/archives/2022/index.html","61326ab6d883a3b39b9803ce33af41fd"],["/archives/2022/page/2/index.html","74431e8d5dd34af1e265f8fa82383deb"],["/archives/2022/page/3/index.html","82dae2fb3cd96cd126e98a563ff05bb5"],["/archives/2023/01/index.html","cf30b3a24d04c56a7d6eaebe184f375c"],["/archives/2023/02/index.html","d1265bafab3a318a6b3f595851ba399b"],["/archives/2023/03/index.html","3c1a4cfa3f797e8f2756cc84450b167b"],["/archives/2023/04/index.html","c7eeaa89ea98a979584c8ef70e417d39"],["/archives/2023/05/index.html","a9ffe15348bd2d1d392fdf31889ba064"],["/archives/2023/index.html","279d0b175a6001a46961176feb47ccc2"],["/archives/2023/page/2/index.html","deb1992e7eed88b353d42dcb03662324"],["/archives/index.html","ab1253eef5531f2d457269c937091b07"],["/archives/page/2/index.html","b09d15c5a97c13e9cd57daf1c945219b"],["/archives/page/3/index.html","6206b320dde01d239029edffaf94daf5"],["/archives/page/4/index.html","5c2334b11a33e59cfdf2cdf87736df78"],["/archives/page/5/index.html","d1fbe8f481dc32fadd9b8e97f17bab41"],["/artitalk/index.html","cc7edc2678ef2c66b432b3eb1653f580"],["/battle-beautiful/index.html","ef5076d1fd1ee8a027c26605e2dc45fb"],["/blur-effect/index.html","9826752f3e00598393ae554f8c2dd58b"],["/butterfly-custom-tag/index.html","347b1db88d06a4d116ac65322cc737ba"],["/butterfly-plugins-faq/index.html","6117c8f61e192960d79f6aa972cae8c7"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","c04f3b9e9497dd43bcc835cf976c0aca"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","46304eb1bff3fc149a0496dd9e9e8c49"],["/categories/announcement/index.html","2e95bc67360a2bb2ef11b845107c2178"],["/categories/diary/index.html","59c3023a1c512e1f43de240cc4088f67"],["/categories/game-dev/game-engine/index.html","f84cc319b3669ac47502ffbc4292e773"],["/categories/game-dev/game-engine/lightvn/index.html","96967977b629e686b4272464cf5dd664"],["/categories/game-dev/game-engine/nvl-maker/index.html","c1bd93dcbd99e861ba446eef538704e6"],["/categories/game-dev/game-engine/page/2/index.html","7f8dfba81b10fbf27f8ed2f5b1e37ff8"],["/categories/game-dev/game-engine/page/3/index.html","321025e1bb68286e3fdc3b7002836eb3"],["/categories/game-dev/game-engine/renpy/index.html","bec2a415536fda583852baf4419af2d4"],["/categories/game-dev/game-engine/renpy/page/2/index.html","bcac00ae06ac74f0bd89955b44af709a"],["/categories/game-dev/game-engine/renpy/page/3/index.html","a4959bd4500f67f13f2a2ab9ce06493a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","cd575eddc6de18ae1fd67aa844f4c51e"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","b3875cc9d5c7e10956737485d47baa4d"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","71ef269b4baae9c8001413778178f9f4"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","e112e4a4d254749f22145fde9b78165d"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","f940b7ad1350e87fd94626c8a0b3a172"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","e790b5083d063f4aec9940d746cda4a5"],["/categories/game-dev/game-engine/rpgmaker/index.html","60f46d331b4bc3dae215941b45a3c8b7"],["/categories/game-dev/game-engine/tyranobuilder/index.html","732e53941605d4348423815572d682b1"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","2554e0781764a4ea0896496313ad7470"],["/categories/game-dev/index.html","6bac3d192d2e94c8e704bc92f157b725"],["/categories/game-dev/page/2/index.html","3d6ab9c8b8df615e54c88da68062aacc"],["/categories/game-dev/page/3/index.html","5e8fc5db38314e80ff302cf2b6611ea1"],["/categories/hexo/index.html","ad6de964f4975a939d4fc4341de49ff5"],["/categories/index.html","1b7efdf5b25ac758bca6af353a2a80d1"],["/categories/material/index.html","2e2ecd391ef77d6171d41016f22dce52"],["/categories/update/index.html","f8fd1308cdad838625621dbc8f55fa40"],["/change-according-to-real-time/index.html","04465a486256c98cbfd176e8297056af"],["/change-title-after-first-time-viewing/index.html","f7903d520767074d74e0e28475f183a2"],["/change-title-based-on-event/index.html","a50e40ceaefbd99192f3ef3dad2202d0"],["/character-stats/index.html","49822072510024f58fa19e2306d05929"],["/chatbot/index.html","3dc3171f799007684bd59dc71da9452b"],["/comments/index.html","6fae0e37679b47f6b65153cb704638b9"],["/create-button-anywhere/index.html","dfa5f1ed09f0ab489306b352cf8b4acf"],["/css/eurkon.css","77368eb91f70e764a83f2c65d2d1ead6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","af300fcf5933add72ec9b5e049445ebf"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9aba1d163a2c5b04e477ed3f7061749c"],["/css/rightmenu.css","d18f8978c88b2b739f38317c1bf3591f"],["/css/siz.css","0bf31de53e9be9bf70ad49af5c626a85"],["/css/swiper.css","86710ecbf765952553fa09f84e119649"],["/css/swiperstyle.css","f8ec791e13309783a17ab81309c1a5fd"],["/css/var.css","e6e7c19ce6b946aa49075f5a433cd326"],["/ctc/index.html","1d3f6a34ea167734f1590db92775cb1a"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","a685cd2e287d58ced5d0f20b4ee7feb5"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","f37fc5fc0eaeed0a347bc64b7045a67d"],["/custom-loading-screen/index.html","3405544583fbb94019eab230c97ca103"],["/custom-mouse/index.html","a82e3c5529a4fde3eea85f0e82fa52d0"],["/custom-music-room-screen/index.html","64b0329aafd4796fd4d6dcdc7434f30d"],["/custom-music-room-screen2/index.html","cea64640392fb7f55032462a96f10e33"],["/custom-nvl/index.html","1b0cdc2bc31ac480d7e80475c302a7ef"],["/custom-player/index.html","da2ce932ca8a4edded4ebbf649855fe8"],["/custom-preferences-screen/index.html","5d6de05472bb98ba06777b7211f6b748"],["/custom-say-screen/index.html","f98cfcca6a935792539b8b3de7cde8ab"],["/custom-title-screen/index.html","27563f0ecb9bbc56a7a8b0d7bddc617b"],["/define-npcs/index.html","3c3fb7cc6406bef5ebf4e80522a0a3fa"],["/dice-function/index.html","e1976e2e4df9e5dcf7f403ad5c68c676"],["/disclaimer/index.html","94b9c701ebbb916b87693d2148d00722"],["/export-game/index.html","b01d568463dd0df2718d7bab1705761e"],["/friends/index.html","08c643700caf0250ec8306191527e722"],["/gallery/index.html","7f4f3400070b1e3dee1a74ae7703abcf"],["/gallery/photo/bg/index.html","f15c9535916eb856477cb20a312d30c7"],["/gallery/photo/gui/index.html","35daf83538d95268f5e161c424c4dbf9"],["/game-only-text/index.html","e0843ea4ac096caead19e2dfa3bd2b6d"],["/gui-017/index.html","3526d7156f8a1ef5d9685d30d038a7a9"],["/gui-vertical-002/index.html","73d0102c3b76d54c6eb7f3473f906a53"],["/gui012/index.html","d40e207ef2de68ec1752b5cc91e247ae"],["/gui018/index.html","b79f6a59a0497760c001a13cbac0f01c"],["/gui019/index.html","398f5a101f774cca0f0028a542fd9a0f"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e504bba4952c3ec790c4f3d579a8bd24"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","d9387a2096a89b2232e9df1550471a5b"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","d4ac70b460387ff449b6b75c630e3a45"],["/images-tip-function/index.html","2b1c5ebd0d0aaa61db02d1f126a2b45d"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","3c88b419be86c52246ad4560bc0d07d6"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","b2016c28011ac239514cb5fb72522157"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","bb2fa7f09acc16aa75abb4dc5eccaf7b"],["/items-sprites-effect/index.html","5aa0c3ae1d1446e174acb80827020c93"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","0eebc96333ccd709e2509d2cff032a2b"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","cfd563253baf044c2eb5664c4d1dace2"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","bef112d138656c0312080656d22b4f9f"],["/link/index.html","68587352a018b7141f3340ade3222097"],["/make-butterfly-beautiful4/index.html","3bf2803590cefcc828dfa285345b5e33"],["/map-puzzle-system/index.html","4a46ee04de7ded5c3dd94ed29572835e"],["/maple-effect/index.html","c257c022ac8addd7be2c1eacf757b416"],["/memberships-2/index.html","0ab75a8df1692b812dd98084a2d78071"],["/memberships/index.html","0aebc90d3a531aa2c9c5671b8c5a1c52"],["/multiple-language/index.html","d7130cda328b6a5e97693660def97708"],["/new-year-event-2023/index.html","01329eac1330d83447f6fc5039c8c0de"],["/newsletter/index.html","26394ab2e7ba7fb18e42550ad2cbf37b"],["/null/index.html","34ee07e2ba449b76f24b1ec5d245aaf8"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","6f4a49315dc89125e97ddae34730a6fe"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b53bc67fa866fc24b8c139300bb949a4"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","da7394994b143278576ffd8886733f3e"],["/original/index.html","1b98b06fa56ef96ead771040da8e324f"],["/page/2/index.html","d1c479b8332bbeff90df38a62b5e1474"],["/page/3/index.html","8f238cf36ba9b709195d6bd6d8f91c65"],["/page/4/index.html","e995c0b31aa97c63a28bcb070198f97c"],["/page/5/index.html","a5ad72a3091ca22ddcbd3b8354d6271f"],["/pop-point/index.html","e419465f4a105c0832d1b47ed63eae61"],["/privacy-policy/index.html","d83feab029461b1e02825fcb75dbb28e"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","4fbe320f79ca121c95f43e43ea6b23ac"],["/random-number/index.html","8ed2e517858d6a9f20b125614a8a245a"],["/random.html","02a49e0d474c783203a378c65c7a6e0a"],["/release-017/index.html","cc18ce4143062261dbaaac571425b32e"],["/renpy-basic/index.html","dcb0ac84385a82ad922515e5a4c5af26"],["/renpy-crash-glitch-effect/index.html","d87fc2fa91f04b5e2e711f0aba5d0546"],["/renpy-matrixcolor/index.html","dbc69fec17a4ee3c949c604a17710b5c"],["/renpy-overlay/index.html","056a1e930e12f25ee661df38ab6e830d"],["/renpy-review/index.html","ec8309dcf0d7bbaf302edb557c17062e"],["/renpy-typing-effect/index.html","16390807062f848d38990287f117c8bf"],["/rpgmaker-assets-menu/index.html","37eb88c8af307c96e661eaf2ea488531"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","c5851c2ee685c4cb62e07f02eaf2ec52"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","cc23bb571b639caa81bf9853a7d2b9af"],["/sakura-tree-background/index.html","f96b81514579f96b0e81eb71b6460b7d"],["/service-worker.js","24db85aacb8333ecaefc07b449fb5548"],["/show-variable/index.html","4fcb30a32c03cf9f2b305a174ad0734d"],["/side-image/index.html","ead2a531f28ca19232bb404d51b75b72"],["/snow-effect/index.html","66372863e51518e347d51da867b86e77"],["/speaking-animation/index.html","03d43b90ff63de16c89c5fbfee06c221"],["/splashscreen/index.html","9843549ca5ca61e4e5f72935c9dbfd57"],["/sw-register.js","179498410719ed83571d47197a0f774d"],["/tags/Hexo-plugins/index.html","6b65c3cdd66a6490ea91f231ad81b0f3"],["/tags/Light-VN/index.html","e60f6c81c8d305d583287be9a1b02f4e"],["/tags/ai/index.html","4334f69bbe681dc34a5c27a922588f6f"],["/tags/butterfly-beauty-diary/index.html","d145db0d3c3bf377fd61cecde4074730"],["/tags/commision/index.html","f87f8cc287c91f43e249dbc1a0b917c6"],["/tags/custom-hexo-theme-butterfly/index.html","2a9dbc494a0de0fa40c5e31bcc1c4633"],["/tags/custom-renpy-title/index.html","eae7bf3ba45cdbee8225eac2e87cb4f6"],["/tags/dialogue/index.html","659d65f75f9a00f13fa19e50ba8a058c"],["/tags/effect/index.html","2a7ca03835dab430d89684de67b07987"],["/tags/event/index.html","8e8e11589d9f21089094bc43cefed7c3"],["/tags/hosting-own-website/index.html","9c332cce41ee6eb488db819b639da500"],["/tags/index.html","3244f71b4702d43106f4352c7893eff5"],["/tags/itch-io/index.html","8d75e25fa3e0433a5c5033d82c72eb82"],["/tags/light-vn-update/index.html","2e04c201d9a449a2060bad2627a4a14c"],["/tags/nvl-maker/index.html","365f1b649ea4cba671b683f2bc12fe0e"],["/tags/player-related/index.html","18785fdbfa2f5bee499af07644fe45b2"],["/tags/pro-tutorial/index.html","8198bd7771bbb249eaf540a3de1791df"],["/tags/pro-tutorial/page/2/index.html","19d11c2e98f4079cac88ea80550bbbe4"],["/tags/pro-tutorial/page/3/index.html","21a1e404ad731979e6de0391804fd7b6"],["/tags/renpy/index.html","a40cb0007c3ba4f542f9d0c3928bc77b"],["/tags/rpg-maker-custom-map/index.html","3413b40375596f52b8eba160735cbaa8"],["/tags/screen/index.html","f916bdcc54b62a1d7ff7bf8adf53119d"],["/tags/special-function/index.html","5dad80350b7d2865e32bac24340a2819"],["/tags/tyranobuilder/index.html","23ecebf7af21334668309ade2bc07a1a"],["/tags/ui-assets/index.html","8fe18cb10bdf1e4712fdf875ac67454c"],["/tags/update/index.html","a75bb635163e058cd0728b784bf07a6b"],["/tags/upload-game/index.html","286d7bf024194022edd1cdc054009d56"],["/tags/variable/index.html","4983590c15a9d963ee3774e1ab3dc9c5"],["/tags/visual-novel-maker/index.html","6fc10dcb3bd47c1be4e78721316c841a"],["/tags/封面製作/index.html","81d610c355f3cb1d65e2ad07396a371b"],["/tags/背景素材/index.html","3701336a115e6a6fcff4b04ccb01168e"],["/tags/隨機功能/index.html","451733a57c25061010cf0adee5ed7194"],["/test123/index.html","e8c4f14f88b291f7b9b1a25a666f627a"],["/textbutton/index.html","fb5333abe5b4a4ba7a1dc0087ca2ec2a"],["/to-do-tutorial/index.html","a2662bd9a8d44dd0e4c9846a9d410238"],["/tools/index.html","3ff313cf0b680ced2a46ebe4a6d861ef"],["/transfer-to-hexo/index.html","81b2852b220b7bf6476ad562e664e717"],["/tutorial-update-history/index.html","3cf877bb12dbd4b3d58003a752f209f1"],["/tyrano-name/index.html","6fb87c2a43addd773663b369cfb79ac0"],["/tyranobuilder/index.html","07b2654570400634e326146a7e7e3100"],["/undefined/index.html","82d1387f737f61f7e3db39e0d51e316d"],["/update-20221211/index.html","0d264ab0eef4e3488d596aadd7d6c870"],["/update-20221218/index.html","d8b5a3cb3c001488fd4f1f2446671486"],["/upload-your-game-itch-io/index.html","5138d35c9064ffba02de6c5889afe4d4"],["/use-list/index.html","96d87d55603aa1dc8ce698b72623c840"],["/use-nvl-mode/index.html","acd7026861de7d172052a6cc75b2fa9c"],["/useimage/index.html","d4d799992fbeb82bf6ad5d018d67bbc8"],["/variable/index.html","1bc3ce318af21e774cc2a3bd66e1608f"],["/vnmaker/index.html","5573d3d1fbffef34c8ee136c71817ce0"],["/weather-effect-tutorial/index.html","80090bb49933624554f64e6393da8238"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
