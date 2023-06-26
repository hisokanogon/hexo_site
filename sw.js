/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","b5f4719907f34f5914a706aa90c9762a"],["/2player-battle-system/index.html","1133bf25d2ac0229462baa3a98119b86"],["/404.html","4a1041e1a3151792ece53b3f98d0c20c"],["/about/index.html","93f159f1eeedaae214354f575a4a0ebc"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","bad238e62c2d00a4ab985a4f714b08d7"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","fbf7d7e4a4eede1764567d56e609a8bc"],["/animated-title-main-menu/index.html","a4f044e7b12ddec9661b7e98a710e7f6"],["/archives/2022/05/index.html","792522c27d8232e362f86fd8022d2d0a"],["/archives/2022/06/index.html","5d1916377463ce117401520a658e3e71"],["/archives/2022/08/index.html","d39f314ef978306625c15fc3fac71f92"],["/archives/2022/09/index.html","fd85bafc4414372a283a14cfd74e969d"],["/archives/2022/10/index.html","fd7d6123d65226ec0c44cee00eee9e9b"],["/archives/2022/11/index.html","1cdcac8b998bb4a18b110a8203ccc122"],["/archives/2022/12/index.html","4cd73b6de5c83ad68c4575b05cc35a2b"],["/archives/2022/12/page/2/index.html","d8996a05f3dc7746d6a395d4794b1a38"],["/archives/2022/index.html","3c1e03cc628dd3acf938a50170162bd3"],["/archives/2022/page/2/index.html","7e66e6980175925dc0671f46f7b2f625"],["/archives/2022/page/3/index.html","f0e2f7ce143393005ab324d515b27eb0"],["/archives/2023/01/index.html","969ba35444c13a1c322b5c76f8506b49"],["/archives/2023/02/index.html","0c65a4924e67edbd2d875d1a52722f0d"],["/archives/2023/03/index.html","820e19cb5532572a9c542a9caf61fe6c"],["/archives/2023/04/index.html","2f3b387b48db5264fed95445f04e9d69"],["/archives/2023/05/index.html","56a94d58999e8907d7b9133ab3b75605"],["/archives/2023/06/index.html","8e6aedfeaffcb2a5c7346c5bbb90daee"],["/archives/2023/index.html","37819318d16cda05790041f9fe9c898c"],["/archives/2023/page/2/index.html","38caa620e41ba5382f19842f5e589830"],["/archives/index.html","111e05462130545cbda4026621c549d4"],["/archives/page/2/index.html","ab12526d3ad6b5959095122fa4aaa65f"],["/archives/page/3/index.html","626c6f2959950bb3ff1a9451082e3e85"],["/archives/page/4/index.html","5242bfbb51960fc684c54d66d5f39fe6"],["/archives/page/5/index.html","5100f435a797109ef756f53f380414bc"],["/artitalk/index.html","a4f42f89ebfcd8e2a5530fc36fbf27ce"],["/battle-beautiful/index.html","c3490a8e5180147c321be08854eee566"],["/blur-effect/index.html","00f344e638a9ec2275513e2304b70b4c"],["/butterfly-custom-tag/index.html","738bfd67c2bb90dc1b3c10b25feaf294"],["/butterfly-plugins-faq/index.html","7e1ecfbd6e9606b295b0894687513454"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","2ee4e687d1ceb41613a97778c826c4c9"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","6c8cd1c756be4ef45ccaa866b05264b8"],["/categories/announcement/index.html","fc4a1a09c9396566ef383f324b02a8f8"],["/categories/diary/index.html","e54862a0fb3fcd6c09cb70d08c6d2991"],["/categories/game-dev/game-engine/index.html","eb6dfb57e91d9535a7ce23d8df954d7f"],["/categories/game-dev/game-engine/lightvn/index.html","472f6367f7d86fa3347746a6eb5866ce"],["/categories/game-dev/game-engine/nvl-maker/index.html","ff69411ed4f4c14a3cff119b33a1bece"],["/categories/game-dev/game-engine/page/2/index.html","a394f6b8007011694f292f2c73121cbd"],["/categories/game-dev/game-engine/page/3/index.html","11336d2df80c53f57221c6186ff5f9a4"],["/categories/game-dev/game-engine/page/4/index.html","76d6b5282b707ec31d685aca6a382ae0"],["/categories/game-dev/game-engine/renpy/index.html","6af2850dbb97ac99480c0cc1c739e5dd"],["/categories/game-dev/game-engine/renpy/page/2/index.html","966364cd91e1d3779ba09eaa2db469ed"],["/categories/game-dev/game-engine/renpy/page/3/index.html","b34cf9e20f183b34ce5c9e1e323bcaf3"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","e764b6d1d6848bb770173d8a0da02ea7"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","32b8db2b0f11f8155dc3c82e24938b58"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","9d1f8f159d1efe226d17037a983ba0f5"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","5de9b3ee0b3d2422e562dc5760de8c69"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","e9a07b10b0af22cfcfa6bec219020fa9"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","83734a9da86990a1ef4be906e568f938"],["/categories/game-dev/game-engine/rpgmaker/index.html","9c4fc11cb7bb6ef7292be2e30bc8fb86"],["/categories/game-dev/game-engine/tyranobuilder/index.html","5defcb8ef7251295c75ce5d47260f9f8"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","ef6c5692ce9316e2e44d43656864b069"],["/categories/game-dev/index.html","af7789216df20527ffd536e6961aca6b"],["/categories/game-dev/page/2/index.html","d998631b63a2dc7faedd97916cc07447"],["/categories/game-dev/page/3/index.html","0494e47530c4a9404102caaf0105527a"],["/categories/game-dev/page/4/index.html","f7e90eb1e92f2970f8108401b150badf"],["/categories/hexo/index.html","87afb78c451daa883f14833f8b3191f0"],["/categories/index.html","645a3e181645f5a46c6c062c05746d87"],["/categories/material/index.html","c3749a578abe6dc94ffeaf6ef9c2a137"],["/categories/update/index.html","df21ab8b09d0e70a03677617a15a8c33"],["/change-according-to-real-time/index.html","0ac93e8eb592ccfca183889ca24e1ddd"],["/change-title-after-first-time-viewing/index.html","d54c18c8aa00321bb3d515c1e9bb7ce8"],["/change-title-based-on-event/index.html","122892a516994096f9715861f547dba6"],["/character-stats/index.html","8464961639b498afd5b91f42b70888b2"],["/chatbot/index.html","739182bf4a91cc2329f74b72c92a1f8c"],["/choice-time/index.html","3bb5eab3b41ecdbde154628c3507d93c"],["/comments/index.html","2b1dd19ee1f3a2c042fd4cb83944dcc0"],["/create-button-anywhere/index.html","ad824dd6cd3069b3bb7d5b10ac5d3eb9"],["/css/eurkon.css","7d901b4a4c6675b59cb43418ec5295f8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","187edf026733690579357f3d35bad3fd"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","765abaab072630f0c439cd0dbed37ca2"],["/css/rightmenu.css","2bd8cf59bdf009ca8d50d57e3741cfa1"],["/css/siz.css","97c686e22d384b599c2ed1e875b4f461"],["/css/swiper.css","3dae9860d9db9202bd26772f2786aa11"],["/css/swiperstyle.css","c6e59d62d1916e4d3f36107de71f35d3"],["/css/var.css","34798a2ceb087f3b2dfb151a6eaab27c"],["/ctc/index.html","e1f8af6fe7705bee845f4b1b38211f73"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","68f80bbd31b04ee31b116032b10b5a18"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","e485e78ddfab592ed81fcef0c3f0b3b9"],["/custom-loading-screen/index.html","a93cf91b412bcb9629bc55a8be0aff83"],["/custom-mouse/index.html","4fa2afe2eaa5646b4d45985cefd12e45"],["/custom-music-room-screen/index.html","2a88634c808e5f65b6a6af68c1687f4b"],["/custom-music-room-screen2/index.html","4d53b4c96b1b1cbed53893e1237486e3"],["/custom-nvl/index.html","73f669a6a41254504f1851d4c40c957d"],["/custom-player/index.html","74d4962270ac43e70f252a2a84a8cc8c"],["/custom-preferences-screen/index.html","d5058b713e30f226312a71b3717507d8"],["/custom-say-screen/index.html","1da23afbdea63ba450baf59f95738e08"],["/custom-title-screen/index.html","03ffdfbbb5bba7b5accecf5367551ab1"],["/define-npcs/index.html","380206c8e5ba7bc35f048bfe9846676f"],["/dice-function/index.html","b1cc7628f10b95ebc949e30995f15ee2"],["/disclaimer/index.html","496c440262273e36d1f0ba3a2293965e"],["/enter-name-screen/index.html","cb1071d9ad2839648e0bbe7af43fe530"],["/export-game/index.html","699dcdb5d7505853dc148004ff18798e"],["/friends/index.html","e21f0b31108a877be0abfab5563de6ca"],["/gallery/index.html","7a47bca8f8dd64a3fba7dadfbc21fb0a"],["/gallery/photo/bg/index.html","1938008e9d4907664c368cf97b10b599"],["/gallery/photo/gui/index.html","23ef11cd711ecb9d27a9e0c789297c50"],["/game-only-text/index.html","008348b202c9eae90f966332aab31079"],["/gui-017/index.html","8cb799824d2f615c992eac1b03c48b09"],["/gui-vertical-002/index.html","cacac979561bbc87da8d1ac867a4b440"],["/gui012/index.html","3b36d606a21229e155d2293bfd8427fa"],["/gui018/index.html","bd7795ae0895284b700ebb88bc564a18"],["/gui019/index.html","48142ce0775f5512f8b73ec034f51982"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","7ef2e9e4bb2db07a21cf079ce655c4ef"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","086c99ef410a47f1516900157e90fd63"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","8e63b762b95d0de49c261f975ecca8ba"],["/images-tip-function/index.html","1321feb86214f3b01ec8212c95851917"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","b2e46e9d59d0c83650a5ef6e19367db5"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","f75f99d4de37dc709b7ffffb2ed01f2f"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","f057f8c0ee3ce128a77100fb0e152044"],["/items-sprites-effect/index.html","b35a0e0a1922d4857eeb861dfdce3c0a"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","189c499095c5630c7dfc2766c4c2741d"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","1d8d65a9250305e0eee9d398b024a56d"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","dca8e522bc01bf5f9bf36883dc56693a"],["/link/index.html","2aef590bb4b6ba838e41620241a6afa8"],["/make-butterfly-beautiful4/index.html","7380ca4b8457868997b260fad05c85ca"],["/map-puzzle-system/index.html","7cdd821a5a49e3f8dd7cb6a2d723e99d"],["/maple-effect/index.html","26ec57fe7644cf924aa045e0b53c192a"],["/memberships-2/index.html","3883464d70c6c7dec89e545eadd55ab3"],["/memberships/index.html","0271929f3cb9e44be53c4c34fd750e82"],["/multiple-language/index.html","0402f15ebcde786a3d0ab93a3c2b6c6e"],["/new-year-event-2023/index.html","5caf9af4780d238cbb534c61261240b8"],["/newsletter/index.html","921582bd885c600272b3a03600f8a46f"],["/null/index.html","37d1ced1794efeb1452c11927ae55fe5"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","b1ad8a230a4d93f1b1ebb6c49961ce10"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","b975a0cc183da7179ffb46a4b518627a"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","f01fb9a9944eaeb88f943aa9e50c56c6"],["/original/index.html","c81b8fffc845ff7fa803ad5cac1de8c8"],["/page/2/index.html","ebd2b54a6df0845530e68af50b6f4571"],["/page/3/index.html","a7b9dae3cf0ba55803ce64ff67dc146c"],["/page/4/index.html","2b63d72b9edf41c755c60e5e222c9366"],["/page/5/index.html","39c1cfd56e8abadc14e4c55737d074e7"],["/pop-point/index.html","6131d419d37348e3edf4889d220fcc95"],["/privacy-policy/index.html","14d2b5b251c85231c17dff922ed05e95"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","38d4191788d276a63115c5f45d993854"],["/random-number/index.html","7f197c0731dabd64ae562ac89a336bf4"],["/random.html","2e89177f70d65b9e7b5808707230959f"],["/release-017/index.html","1d6c0df1817d1c313e139bafd0f18712"],["/renpy-basic/index.html","921ac2c828cec9ec3d8d8e994fbb4347"],["/renpy-crash-glitch-effect/index.html","846b1e51ad7df8cce9ab58fd697741bc"],["/renpy-matrixcolor/index.html","25edfb6730c1d3d702c92c53911bc7af"],["/renpy-overlay/index.html","62f9fb223595a567af66cb52fa110484"],["/renpy-review/index.html","713b5069d61011fd86633cd4115a8898"],["/renpy-typing-effect/index.html","420144f9fc51ca4fe0666f5ed62691af"],["/rpgmaker-assets-menu/index.html","5315c89b94e4ff0a577ee83acfb549e0"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","d20de9bb94a53e60346ffee21bad7f2a"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","469067929eb3421a15e9c5e5de905c7c"],["/sakura-tree-background/index.html","cc689d259364a2ba258f67e125d97f7d"],["/service-worker.js","b3380a1556deb11955444b0bbbedbfa6"],["/show-variable/index.html","cd236fefbb32b62c2969a9422c1ab795"],["/side-image/index.html","1455368c4b02b6f9f22a90fa98c9eb29"],["/snow-effect/index.html","54f76008c0efa459f02094ade0477f18"],["/speaking-animation/index.html","7f2a3cf279ecbab61496114df547c668"],["/splashscreen/index.html","1d8b59bad8f8a64e8275f06283135b9b"],["/sw-register.js","91236a8faa5aab0d14e2149b27a4f61a"],["/tags/Hexo-plugins/index.html","50e0d4c5e6b9e09cbc0befee623aa41b"],["/tags/Light-VN/index.html","dae3a0b98a5367935a8765b92ab5b534"],["/tags/ai/index.html","067252e6744639614861619f2cbe1b25"],["/tags/butterfly-beauty-diary/index.html","485b9357a4cbcc023f116c3616fb63a1"],["/tags/commision/index.html","73d498cc9599c69114e9268f76c0ca45"],["/tags/custom-hexo-theme-butterfly/index.html","f1651665790c0c8fd47dfee4abfe05fd"],["/tags/custom-renpy-title/index.html","d2c3ffe1e0fe1b8c7b320c9244f82056"],["/tags/dialogue/index.html","a6ba27bc5ce98e4f06365600d485697d"],["/tags/effect/index.html","7d67a16ddfe940b245703f4fed1ec3de"],["/tags/event/index.html","363eb912bc5402dca2b822e1969b5a4d"],["/tags/hosting-own-website/index.html","7b6f6b63ef264da2fd1287665eead0d5"],["/tags/index.html","dc411464ea183c9d9205b2050008efae"],["/tags/itch-io/index.html","90766ebd6694e983e1d0b6bd03ab95ac"],["/tags/light-vn-update/index.html","84387a3a9181d9ef0498eddd7f984698"],["/tags/nvl-maker/index.html","588a1796e873ffc91de4a8d466fc2d86"],["/tags/player-related/index.html","759ca9404877fe80f20154bddc9982c5"],["/tags/pro-tutorial/index.html","c75ffc5527e9410b22f7bd891b2af5f2"],["/tags/pro-tutorial/page/2/index.html","297ce593a0db65322fe1bb330ce65ad7"],["/tags/pro-tutorial/page/3/index.html","42a9dbae0c10b8783366c8e7708e0b32"],["/tags/renpy/index.html","4d2835f522af9a7d338f728af9285b61"],["/tags/rpg-maker-custom-map/index.html","0d97effc95b0b7b1eaa9b8375b25855f"],["/tags/screen/index.html","ebda7d47c54a21d3b1a6d8e377408941"],["/tags/special-function/index.html","c65f1b9ee75a8b28896654dc5009ef56"],["/tags/tyranobuilder/index.html","3697b8bbf6ac28ef68bc86447c571374"],["/tags/ui-assets/index.html","7108995d167682ae501891dc19358d73"],["/tags/update/index.html","5da622eb1e07f2f4ac8670858f561fab"],["/tags/upload-game/index.html","1ad69324b35bbb906d165ff14901c6c2"],["/tags/variable/index.html","d63ccc332e8c30a920616bfef7c46689"],["/tags/visual-novel-maker/index.html","37ed179b0d8b429d5bddfa02287b7bab"],["/tags/封面製作/index.html","5b757cb4d3f96b0634650e0bbb0c0668"],["/tags/背景素材/index.html","9fa9be5c49e578b16b10f7b17053bbba"],["/tags/隨機功能/index.html","05b4a4a2bbef0153f07b29b672929382"],["/test123/index.html","7855cc9891b149f326eb48536d39be7e"],["/textbutton/index.html","f965767edecc4a293803980c0ce21b8b"],["/to-do-tutorial/index.html","6afc7375e0f03e2b5d01f1d2f0708adc"],["/tools/index.html","71af61c881b218338292260f348d6489"],["/transfer-to-hexo/index.html","69c7957ed6b380c9e6c65acebf8a326a"],["/tutorial-update-history/index.html","d14b1b1718d0d9c5530bdfa1ec47e7d2"],["/tyrano-name/index.html","95ff14449e5b70a648741b52b2b6f905"],["/tyranobuilder/index.html","e988d5e3f81e11106a42f8cda5f56938"],["/undefined/index.html","46bf5050e3cb9ceddd53c8ca798f4c94"],["/update-20221211/index.html","f012ca457f99fbfa640a71a1da0fa8ea"],["/update-20221218/index.html","96098335d282ce874f9f4a121f02dec6"],["/upload-your-game-itch-io/index.html","26341d237a5837d5c79e4df95a86bfd7"],["/use-list/index.html","747ea998abe570be35376bba2dbbe445"],["/use-nvl-mode/index.html","7c3cec97867f2a4c65107ceb1910d423"],["/useimage/index.html","5f6beee4f2992fc11c9d9db87343d10f"],["/variable-change-image/index.html","ff91cb91ff13babf598098bb63838783"],["/variable/index.html","f2dd079872858120ddf04bf84f528044"],["/vnmaker/index.html","f24945474a676dc6193ac8d037f3ce55"],["/weather-effect-tutorial/index.html","4350fc13606d503ffe56cd924c4bd311"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
