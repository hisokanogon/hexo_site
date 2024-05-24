/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","5a6f1c5eb05da9b2f0a839c01a0bfeea"],["/2024-future-plan/index.html","ec68805d47389dbb6c4a2d984d867341"],["/2player-battle-system/index.html","406566f5f4eaab3a8dd1c9be77836e8c"],["/404.html","ac128861c44513f50c71bec772fb8a4f"],["/about/index.html","c141842d9eb16c094e4830aac24277e9"],["/acg-creator/index.html","1dcd71f70db3c9f175d057d7edd51e7a"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","728dd762a7ada9a6e8cf81fd0da42de9"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","47ade22cae29353b57112167bd5264b8"],["/animated-title-main-menu/index.html","facbc12faa2922fccabc3560c2abd52d"],["/archives/2022/05/index.html","cff1846f088d1fb415010af73b07aabf"],["/archives/2022/06/index.html","5818f2926df1f80fb024f68c86c98c26"],["/archives/2022/08/index.html","e2418dcb63aa72bd9387b0672322a56f"],["/archives/2022/09/index.html","b61cd878bf81d2202f1125a7c029b3d2"],["/archives/2022/10/index.html","b059a023cd3330a44642ec328032d028"],["/archives/2022/11/index.html","82e325d0ba58560df17497a15389e306"],["/archives/2022/12/index.html","037df2d45a757ca4f7e94c9d3236ae50"],["/archives/2022/12/page/2/index.html","3cc548cd8a4aa1ff67a5cdb584a8b801"],["/archives/2022/index.html","c4f2f1c1d658fd6b65007ec683ab925c"],["/archives/2022/page/2/index.html","f6f566536b11465d5bc5d763b0414c8c"],["/archives/2022/page/3/index.html","1d70e9aab720aed7804b63883f4ecf91"],["/archives/2023/01/index.html","c18860936b940267b390a2007ddc3337"],["/archives/2023/02/index.html","49d47b9fbcbd57ed78cc5650770d4e03"],["/archives/2023/03/index.html","1817a033e0935e0db11996ad7cec8983"],["/archives/2023/04/index.html","2ad329055550ef5b8d3445ae98d80633"],["/archives/2023/05/index.html","e28db74d22ea9ce0055ff221d7ed9220"],["/archives/2023/06/index.html","06af60f07bee206f9a222989abb5f65a"],["/archives/2023/07/index.html","650a692188ab524b902a140b81d6fab1"],["/archives/2023/08/index.html","43f1e9cff2fc5cfeea8d93eacf07304a"],["/archives/2023/09/index.html","f452999a8d4a0a90054b56316e16d8cf"],["/archives/2023/10/index.html","3029c4abe4586388160793d8d323b6ba"],["/archives/2023/11/index.html","d5751ac9d03e7162085a2565e9defb62"],["/archives/2023/12/index.html","fd8619f4ebafd8888ecda3b32e14113d"],["/archives/2023/index.html","e56f2b248afd260579be37690c8dc59e"],["/archives/2023/page/2/index.html","3deb4c8f51198a0e07dc782ec2d63866"],["/archives/2023/page/3/index.html","0deb92a8fee064d8cdaf073dd2339ca9"],["/archives/2024/01/index.html","b9356b3abda5e6cb0c8019efdf49a5cc"],["/archives/2024/02/index.html","8de68eb5c0d05ea430042d94dfaa597a"],["/archives/2024/03/index.html","4f729779bc3dc5503202b40ff6a983f1"],["/archives/2024/04/index.html","d27d25c7eb582a026bc3003cf0d2b528"],["/archives/2024/05/index.html","e04d22d0dd3df3e8c0fce88fd0113f5f"],["/archives/2024/index.html","eb22a54a495414d57c65052636c37ec6"],["/archives/index.html","f553aa651111a1cb1473c20028b5c7ef"],["/archives/page/2/index.html","0b05e6e55211521948d424f731752dee"],["/archives/page/3/index.html","cf55544144ce103e0a67de5bc00d223b"],["/archives/page/4/index.html","7f28e23eba3ff31f9a00c6f7e8660ef1"],["/archives/page/5/index.html","78d1ade6463d0ca0646af5d1a69d0845"],["/archives/page/6/index.html","ca524efdfd319afc8dde48b93ce5c81c"],["/archives/page/7/index.html","a4a8cdc8271cacd625df464370926349"],["/artitalk/index.html","ffabac8c253a2ecbe53fe4774d7c3095"],["/battle-beautiful/index.html","3cf6618c92a3107d3567b867bc237796"],["/blur-effect/index.html","ae5184011d6c59e2f72c44e234a99787"],["/butterfly-custom-tag/index.html","03621a4641ad3e02f87b991818e8bebc"],["/butterfly-plugins-faq/index.html","1ce8630442321198d9e4435bfda37613"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","f33a060cf92295064a847916f5250925"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","76e70e42d8f99fcffc018a5f125e880f"],["/categories/announcement/index.html","23fd1496f3b3fa8753a3c36640758a2c"],["/categories/diary/index.html","b09724903811b559fb8f26dc36d1c830"],["/categories/game-dev/game-engine/acg-creator/index.html","9963537ff68d8626ca38108ee328783c"],["/categories/game-dev/game-engine/index.html","63bbabfd9203467a068c704d2fb7149c"],["/categories/game-dev/game-engine/lightvn/index.html","46be0094872e61a567c99608b517ff82"],["/categories/game-dev/game-engine/nvl-maker/index.html","f50f8002197e77255d309ceaea8b8726"],["/categories/game-dev/game-engine/page/2/index.html","b401d0107c1bf5308c19f60ceeb26ad9"],["/categories/game-dev/game-engine/page/3/index.html","5535c3aa1cf4f7c0e08e56dc9bb1feaf"],["/categories/game-dev/game-engine/page/4/index.html","b56eb6ac3ea6bb7fe63f0c74ed9d976b"],["/categories/game-dev/game-engine/page/5/index.html","a93035cdabf49522b64d4282688f9f08"],["/categories/game-dev/game-engine/renpy/index.html","6d18ba911bcbef0d248333758b727f5b"],["/categories/game-dev/game-engine/renpy/page/2/index.html","20a2b923ad8606787acffd1e59685651"],["/categories/game-dev/game-engine/renpy/page/3/index.html","9b61cf117f617a03a820a7e2419d2cea"],["/categories/game-dev/game-engine/renpy/page/4/index.html","010c09cb48abd825bc2afca52f911f38"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","ce47e0b8fe03a05d96762c99f81be7cf"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","b05b4bdb9de82f7a07c8046c470c72f2"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","5ef1c93b26805e2d46afc4c0c56004a9"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","d5b525a4f93ca908535e6d9aac97ba3b"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","ac13dcde5c9a9720e5050545b21d83aa"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","a86bcbaaab989b5f004084dfa673ffd1"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","a3abfb60dfc15acd7f84c9337d6048bb"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","f4e7c8ea459a074e28bd6b6271448bc8"],["/categories/game-dev/game-engine/rpgmaker/index.html","fa97d3f36b73e3485f2bc92590e8cfa5"],["/categories/game-dev/game-engine/suika2/index.html","a4e048ceff1a2c6e9bbd10404651dbe8"],["/categories/game-dev/game-engine/tyranobuilder/index.html","283730ba9a377ed052086f3d05c1b3bd"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","b753c8229a8e231d1469e46500f53e70"],["/categories/game-dev/game-engine/webgal/index.html","b2abe8c2bf57f76e761791890c0f36cb"],["/categories/game-dev/index.html","a4e54d808db1518cd3611b93149b1c5b"],["/categories/game-dev/page/2/index.html","d981aa5945550e48f007c9eeaed216c1"],["/categories/game-dev/page/3/index.html","505fad11b4c8c278bdebed3e580bece6"],["/categories/game-dev/page/4/index.html","6f093b93f33ed63963594c8024c3e55e"],["/categories/game-dev/page/5/index.html","88cef68a2faf3fe4242de14242f382e3"],["/categories/hexo/index.html","69a3309c2e3f3dc007944eed334b02ec"],["/categories/index.html","3fe0a46434328108567c7c328f3b9c38"],["/categories/material/index.html","423798c3d6185c2a71bc169bde066ee4"],["/categories/update/index.html","a962ad8e1e0fd87c343d9034399b44f8"],["/change-according-to-real-time/index.html","02b88f117e37ccaac5f22a4ffea04259"],["/change-character-info/index.html","a3892c4744b79decb7c2ab31cc2eef7a"],["/change-title-after-first-time-viewing/index.html","05e9c85a833cdf28bf44ec2816d78d65"],["/change-title-based-on-event/index.html","48603d16cc0767571590b35af07412f2"],["/character-interaction/index.html","a1c15729bc871a63989a4622335097eb"],["/character-stats/index.html","905ab7da4c72c8aa296b878e3562496c"],["/chatbot/index.html","28b1cda1eb324a40522173356d0e6826"],["/choice-time/index.html","e0b084f10dad05d11bc7a89428adb920"],["/comments/index.html","7c640816db1a27e48cfcf646f396078f"],["/commission-info/index.html","c682f2f0e66e7fb8a4a0385b7aae141a"],["/count-login-number/index.html","73d3fd3f857315c9628084c7451635a2"],["/create-button-anywhere/index.html","4b92568f9d31b9535f1749e0f9a84a3a"],["/css/eurkon.css","a4b091de11613d191be89f412b16aa72"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","e1d4748ef018588d912be990763b6967"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","2c6910c8186b6b046abe9af0e41044dd"],["/css/rightmenu.css","1d9e152ebe64bd7c6b131e0abd8e2f81"],["/css/siz.css","e6c8710b633d515521c8da6e546b1bbe"],["/css/swiper.css","a30f6bf7007c31400e80708561ff2a7b"],["/css/swiperstyle.css","2485b6e0d1ab5107b5d52ac1bd9f6865"],["/css/var.css","e7e8f8358a6f4413e5cba6e6c8c2926a"],["/ctc/index.html","26a5635171dcb5c9d884e7565a6990cd"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","6802b378aa7d8fec856126521ef86567"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","17bb5e500bbe550ae41516d1d6f785ef"],["/custom-launcher/index.html","a2d3dd10d7459265443eda0e871ec4f8"],["/custom-loading-screen/index.html","93201d01e1877f97ef1a9e8262732cd2"],["/custom-mouse/index.html","7be904443af4092b4ec04283401a1017"],["/custom-music-room-screen/index.html","21821cfeff7a75c67f4fd6626d73ab60"],["/custom-music-room-screen2/index.html","78197897890323c64c9d3dcfc42deed5"],["/custom-nvl/index.html","0415bfcc6e835438602dbe724b38a691"],["/custom-player/index.html","62baa073e275f6d06b308c17f69c3efd"],["/custom-preferences-screen/index.html","62da92ea64b3f546206f2389fb332105"],["/custom-say-screen/index.html","a47b61a7baf746939bbbd5155b9f8891"],["/custom-title-screen/index.html","c7d7d1b90206b4c5c6a4ffb172ff1969"],["/define-npcs/index.html","b2d4228c1f2648d7b32d970d2aa53f28"],["/delete-save/index.html","1b5a5630650606a69de2184a7769a2af"],["/dice-function/index.html","f2a5844f7fa131f1c19c8cf15ac305a2"],["/disclaimer/index.html","cc5c6b0443c5bdc482b98456888264aa"],["/display-immediately-all-dialogues/index.html","66152aabcf0fe17c8dba4310058c8656"],["/display-real-time/index.html","85a7e2ece6d0e2c18dfaf092e0c79ed7"],["/enter-name-screen/index.html","e81c7e7472ba5292eca062636203594f"],["/export-game/index.html","8bef5f05286c1242e2b5de45bc570bf3"],["/faq/index.html","52cb739bc1325bec766f7bbcb488a147"],["/friends/index.html","90a0620ced6aa0f807a35f7501e7b946"],["/gallery-template-assets/index.html","2fcd342f967710f072d9b68b71e00cee"],["/gallery-template-default-ver/index.html","e164946a44caccd73d935bdbf57c2ab0"],["/gallery/index.html","d038613c09dc51fc66f8185cfbd8f00a"],["/gallery/photo/bg/index.html","0635a933a27f3aaab095b34295bdc627"],["/gallery/photo/gui/index.html","df2fd2c34e8f6d600c3e22c212076a9f"],["/game-only-text/index.html","d51982fecc5a1a7ca972482887e99c52"],["/gui-017/index.html","51926d35590c5dd853ffff34b0fc4857"],["/gui-vertical-002/index.html","2a34e1c099be7171183e27916b5f428e"],["/gui012/index.html","0be6a66ac9ef29675f7d37114b04cc6d"],["/gui018/index.html","a2bbae769fe8c9e850efa90960d52a53"],["/gui019/index.html","76f229511440703cf104ce6a88f34018"],["/gui020/index.html","a7dcf0ad290ef1ad92e2d058a56ad1a7"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","add181508fa05344c35e283e0a0bcc6a"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","bdcbdb0b6f87ca2ed14de6d78f3d3fa1"],["/hide-textbox/index.html","0858cb16bf7991771d7bd899b01a1e92"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","ba7edc31b0777daa0dfa09e40143791a"],["/images-tip-function/index.html","5fdb20819dd7106797b42b49a28965f8"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","52138ff765e3923a8b2be4fff462a7a7"],["/index.html","62d71d48c4f2d57e7cb465e55e5089c1"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","94185e2a174be52456006261cdea1b25"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","009b3dbf984cda2b35455f760b374fe0"],["/items-sprites-effect/index.html","ab998ff14b3bb320c0822ff7edd322cb"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","024a9f9de8830ff63f20e3c4461e2821"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","78c7fa0a28d06c09a187e1bb9098324b"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","5ae53bf2091f2670dd659db920db1b45"],["/link/index.html","4d00d40ec6ab8146ca4e736aee4e4dd7"],["/login-reward/index.html","b612c00df5fd7fd7d764ff2461a97103"],["/main-menu-music/index.html","91f672ee49a10da95f72c6ad208440c5"],["/make-butterfly-beautiful4/index.html","74fefb0bcf5da04818d0d4958c1f9f07"],["/map-puzzle-system/index.html","d205943fae91e96d675741e937e31d0d"],["/maple-effect/index.html","f9cc92458c19dc9b54d6df4d23129021"],["/memberships-2/index.html","e18c8b15a4ba2acf82676e81e11f7b1f"],["/memberships/index.html","b89a221a09e0c7102062da1c3a3ac916"],["/multiple-language/index.html","f1d3d462bac14fa39d1829c2a1bd9a57"],["/name-input-assets/index.html","f78098592ae95f30f7dd6ea1e8887d0e"],["/new-year-event-2023/index.html","37ccddba470679e90a376dae560d8fd8"],["/newsletter/index.html","5c034818b13ab5c11e4e584935687e52"],["/nsfw-limited/index.html","8528874df1732afa68f425dc7d7b8047"],["/null/index.html","f3979078a20bcd0cf5c5e746740cce39"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","8a12b9275fc2d26cf0be06434aaf88ed"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b0038cff0e05b7cf0586172e80541ac8"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","6f7e3f5f6d1a06a33e60286d287bf514"],["/openchatai-renpy/index.html","e8093390500ae40730fe64522cdfa9bd"],["/original/index.html","5d9aefc77fc7ef7af7249121ebdd7d23"],["/page/2/index.html","26040086dd6bde1e5c4c1dde22c2fc6c"],["/page/3/index.html","963c8647cdde7c645ea31783469b7464"],["/page/4/index.html","17ee69233124b25348b2a378487bc45c"],["/page/5/index.html","36652cd5293136ae00b4c395126fbd39"],["/page/6/index.html","08b383c68d7f75eb1b0509c6092cb171"],["/page/7/index.html","16bbe89e70f821a34f6dfdf86f50d340"],["/point-pop-up-assets/index.html","324d9ae229c44d98fc67ff3e1a79dfc9"],["/pop-point/index.html","23dd5735e154aed7869582a4e475bfff"],["/privacy-policy/index.html","f46d5a08d406702c76b1cc47cfdb3c36"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","b01b6138b6ac847a33eb977fbaaf0ab3"],["/random-number/index.html","96136bef57900abdda27a8b43644ffa9"],["/random.html","dd2fc3c74bb828562d4a881cfb175a8c"],["/release-017/index.html","193f5b9cb050e98aa5632673d3945841"],["/remembering-choices/index.html","e624ca352f937d2d4e109d65e35feea2"],["/renpy-basic/index.html","cf2bdd8b2d32c6b7c0e80496219e754f"],["/renpy-crash-glitch-effect/index.html","91aff3394fd99fc021f97db4f331ad1d"],["/renpy-flip-image/index.html","fa42eec3eeda2b2547e3cd1db3fff228"],["/renpy-matrixcolor/index.html","842566a62580babf40acbe96c3544caf"],["/renpy-overlay/index.html","f09cb09b520de45f140ab1f0d8d310fb"],["/renpy-review/index.html","8ee97491cbe601262cb874a656a39fcd"],["/renpy-typing-effect/index.html","675656b0b9cd6ee7fb974d484df2cc00"],["/rpgmaker-assets-menu/index.html","4a24d7f9f80574c5e7352e08ed29a92d"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","e040b21cb10becb78e291aa860ced2b5"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","42be3f0fcb83383a274888afa5474bc1"],["/sakura-tree-background/index.html","121b71d129f69054ea315a14c8579f06"],["/selected-button-style/index.html","d3725269e00313a96b58db26d169c022"],["/service-worker.js","718d440d49842e1cd35da2ac915b6960"],["/show-variable/index.html","fb035a95da6d7ae0038bcd68654468dd"],["/side-image/index.html","b3d8d1e4a3b5ac03240f93b01a945f97"],["/snow-effect/index.html","a69954e3384626bcdbe8d0cb82c85373"],["/speaking-animation/index.html","b99d6255c33dc34726e4f0032438d132"],["/splashscreen/index.html","985a53d96f6b27eda83f2389ed1fd5d3"],["/suika2/index.html","57202e905ba311b65e7cff80d1b12a4e"],["/sw-register.js","bf82506aa600c884df5b07c4a4319256"],["/tags/Hexo-plugins/index.html","7289c87d0c52857a78de1776bbc808b2"],["/tags/Light-VN/index.html","7a3be914141632c847b0633ccd67985d"],["/tags/acg-creator/index.html","d7a88de78c3611ec33f3f1a85651dbc7"],["/tags/ai/index.html","d74f54670c7a86f2db1e19dea1945c63"],["/tags/butterfly-beauty-diary/index.html","f381484975f1fc2ca013aca284befbe6"],["/tags/custom-hexo-theme-butterfly/index.html","fb4fd32a5e795cf15ea0f583826063fc"],["/tags/custom-renpy-title/index.html","6ae787a05d590d1f8c1c3070b501fb8a"],["/tags/dialogue/index.html","17b938ba008c74b422863636f8038711"],["/tags/effect/index.html","4fa0ec35ed5bd98387a85770ea423ca7"],["/tags/event/index.html","c3d05913877ef02cd5e1e49b087edf4e"],["/tags/hosting-own-website/index.html","38d89e00c4a03035e03010dc46cf0fa7"],["/tags/index.html","1f631019653550bfe0ab94f159a93177"],["/tags/itch-io/index.html","f50a1c46e9452030cc21d38503976df6"],["/tags/light-vn-update/index.html","f5c71f0c4f8833f0eac44a61c2da7bf2"],["/tags/nvl-maker/index.html","e23bca61bbcbcb984479856af5d449ab"],["/tags/player-related/index.html","5dc11bd8472f956cc04dbd4bcfd4b102"],["/tags/pro-tutorial/index.html","97aa269647130d732eea47f03cc6b716"],["/tags/pro-tutorial/page/2/index.html","7831da9e06b84da9829add829b7f72ee"],["/tags/pro-tutorial/page/3/index.html","016610d2a7a2e1d105e8cb158e650929"],["/tags/pro-tutorial/page/4/index.html","5c5218ee3ec554d1c4d4216bce7360a4"],["/tags/renpy/index.html","b25dfcaae5d263fcb174e67ec89436a1"],["/tags/rpg-maker-custom-map/index.html","697287b1ac38a6696aad0ca72c841c73"],["/tags/screen/index.html","91d0ef9b9a4d9b3a3c0a93d05147db7e"],["/tags/special-function/index.html","4eca816a7a2f7b5ee980bda6f7944d35"],["/tags/suika2/index.html","8a4b2725e1a6cd1a5a987ad5fb9b2e8b"],["/tags/tyranobuilder/index.html","b211dcf856c17eaa6bcc13cbf8bebcc7"],["/tags/ui-assets/index.html","24d2c7d2bcfe94fc109a5233f1a7be99"],["/tags/update/index.html","6e6180d58953904803c747173b17b3dc"],["/tags/upload-game/index.html","0aed2c641bd351cb66c984ca07c1a605"],["/tags/variable/index.html","d4e1aa7ae6e053d7752c2dd41f95a12f"],["/tags/visual-novel-maker/index.html","8f29a8794db4d24e50540f38355fdab4"],["/tags/webgal/index.html","3ad2da44f5448c99fc7ab7f4fdad5fb4"],["/tags/封面製作/index.html","d3a0d09392e9aa7495a32de4595cc0b8"],["/tags/背景素材/index.html","3e6cbec0f2134a6f7d20e7b1df483045"],["/tags/隨機功能/index.html","1ee8a3ec0dfb324087b7990de29838e2"],["/test123/index.html","a9f88986ed70ba4c564b6df5687c2b60"],["/textbutton/index.html","160c0d3795df1513ef9fade9fa427856"],["/to-do-tutorial/index.html","1155917b48d7cd85db1927a48fa2d390"],["/tools/index.html","c682a0c6414072205c86e0f15a2bae00"],["/tooltip-function/index.html","db196336ee937747cfee1bfb99ade919"],["/transfer-to-hexo/index.html","1af605e70983d2f6fe725ff464219194"],["/tutorial-update-history/index.html","661caf443c9ec9d352786807a1fda8bf"],["/tyrano-name/index.html","eb2fa31077157e1155c0e6997647eaaf"],["/tyranobuilder/index.html","0c0e77da2a26a32028ddfa0a77a7bb4c"],["/undefined/index.html","454f625a21fcc524d9f81ac879da1039"],["/unskippable-video/index.html","5d3d20ecb4bc2628783d2542e2e04269"],["/update-20221211/index.html","8e1316113ca110759b7514db3c41cd2b"],["/update-20221218/index.html","7472ab2eb8aed17bc7e18368755373f3"],["/upload-download-save/index.html","5d0df535347e081afd24796ba920f946"],["/upload-your-game-itch-io/index.html","ec7f231a0631eb9aadf2a5d874683ca7"],["/use-list/index.html","2b5cd850a7a5ad723049ca66374aca3d"],["/use-nvl-mode/index.html","0c644ada8b4cc3b18bdf559a4be58a79"],["/useimage/index.html","107a8445fe861c7f2b6bf59afdf6593c"],["/variable-change-image/index.html","9e03d082f7b7e9f02184169d711a8fca"],["/variable/index.html","b73cfe288b79c4b325364dc84ec452fa"],["/vibration-function/index.html","f8178531a5525993dbb2f6c31df39f8e"],["/vnmaker/index.html","7117bcd95bb8b776067064dabeb2c4b4"],["/weather-effect-tutorial/index.html","44290fade42fbb86426868a7228ff60e"],["/webgal/index.html","d756c62f68364ccd113e8bf82d693407"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
