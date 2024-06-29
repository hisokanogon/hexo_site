/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","e887034d4721bd25e20f171494b10d2d"],["/2024-future-plan/index.html","81cb7f3b4e284f3ed4498b19f7532392"],["/2player-battle-system/index.html","19c87ec46d4b2bf249321a56a0d6a7fa"],["/404.html","cc52393c68111b83858d45185383c124"],["/about/index.html","72817f92221b70babe72d853c3d61db3"],["/acg-creator/index.html","c8cdabdc5956fc15dd1bd15a3de3f394"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","a03f3efeded8bf765a199430dd76db3b"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","b1fa8ef21a185b74dcc1e0e25174a26c"],["/animated-title-main-menu/index.html","140547038bba8340c310c0798d494830"],["/archives/2022/05/index.html","a88c2b80ba7086be8e47bb905a691e3e"],["/archives/2022/06/index.html","e0f044c60c1aa6758e78e54c48a61082"],["/archives/2022/08/index.html","bbd4f36b1b602de3fdf606873ebc257b"],["/archives/2022/09/index.html","3b77d0ead9bb67688ea9d3a01a5da4dc"],["/archives/2022/10/index.html","aa8afb223e72a8c6f74aaae97f0aae1e"],["/archives/2022/11/index.html","cb028aefc32875b0da17ce3d62aec388"],["/archives/2022/12/index.html","133840391754d38476c09c3a6569e535"],["/archives/2022/12/page/2/index.html","91edfef745618a179058e589302ec381"],["/archives/2022/index.html","f079dd869694db458cdc6e995301f45f"],["/archives/2022/page/2/index.html","ba6c7b10b7dbc75b5a3bb18bcf126393"],["/archives/2022/page/3/index.html","42c6b17ac77e1c9a6c437c1c169d9b65"],["/archives/2023/01/index.html","936bc29c48eb9fb42b41c8c2480231da"],["/archives/2023/02/index.html","494eb9b5715bd3dcd2f80c30f572add1"],["/archives/2023/03/index.html","15af6d95d2c0767b35fbd40a0abbc379"],["/archives/2023/04/index.html","84ba9bc454055a1b92f897dae2d05b0e"],["/archives/2023/05/index.html","0931518cabba504d7e1c70a580bc4d74"],["/archives/2023/06/index.html","d7c49f6c8b0c559c443d2fa621b4a786"],["/archives/2023/07/index.html","f1cba6ce4db9a2468cb4cf617f3b8e2a"],["/archives/2023/08/index.html","8057381d6d1575e9c3eee4d234b74a69"],["/archives/2023/09/index.html","108b5dafe90f5327894245a72d0e1ff8"],["/archives/2023/10/index.html","9a1ab2e912274edb78dd17d7d7fccc84"],["/archives/2023/11/index.html","a415e926dc2c3f89ec7a79cc528f590c"],["/archives/2023/12/index.html","1e780bae1aab2c34ea7908a4d3927087"],["/archives/2023/index.html","9a8130393574b7820b1b9a56e91d557d"],["/archives/2023/page/2/index.html","ce1ef6b4190e8e732a30c1d95180a9d0"],["/archives/2023/page/3/index.html","e690ce6de4d221d06c5e63676cb18b68"],["/archives/2024/01/index.html","08511f9726f4ee4c7cb928be4aad0947"],["/archives/2024/02/index.html","3d3e41f6c4d9d1ffc91aece478645a8a"],["/archives/2024/03/index.html","aed1faad841baa735f1fbc7ae5cfd810"],["/archives/2024/04/index.html","e6a27bf136dc2b84d06bd54325f515b5"],["/archives/2024/05/index.html","827aa529fe5252375a57266f80bd2cf7"],["/archives/2024/06/index.html","807792cf519a4b645979c2db46bc4b63"],["/archives/2024/index.html","f52a56228296a3ac5234cfbd8f525a0a"],["/archives/index.html","260ffeea7d310a68f312c4d7ce3d1a77"],["/archives/page/2/index.html","f3ac0837053fe665dbe75aebe48e2da3"],["/archives/page/3/index.html","11bc18bc81a2351b2e7f413fc5ad3f9d"],["/archives/page/4/index.html","4af43dbf0eb45908e9361aa878382097"],["/archives/page/5/index.html","c748ceac673a7bf134b7e9332f1f4ac5"],["/archives/page/6/index.html","3373b1ae100909442185094750eebf5f"],["/archives/page/7/index.html","c00f9c599ae40e6895f33224c393cff4"],["/artitalk/index.html","4a0055bff74ffc1312230f80dfd5b33b"],["/battle-beautiful/index.html","14804fd8eb1ab68212997eb8b074d872"],["/blur-effect/index.html","b0cfa55574cdecbe15c1315df38b1fe2"],["/butterfly-custom-tag/index.html","a7ce1019a7962c87daa081e12c5dd425"],["/butterfly-plugins-faq/index.html","a2625971f672c49075ea8a1454b2a805"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","a6f89ecf5a2aa5b8f1066790375f4bf4"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","c2c7687fce1ffbcb88e5092ebfd4e63e"],["/categories/announcement/index.html","6b693a52bdf5e2e8c60c44d171461e52"],["/categories/diary/index.html","10c4141803f1f29447f599908a7b6f53"],["/categories/game-dev/game-engine/acg-creator/index.html","ec388722361b7b5098950e086dc9d07d"],["/categories/game-dev/game-engine/index.html","e3d526750a44b9d0d6cee9d61ab91fe7"],["/categories/game-dev/game-engine/lightvn/index.html","b0c242bee0a3b7d50276422612c06135"],["/categories/game-dev/game-engine/nvl-maker/index.html","4ddea31b567dc857ccb96341337b6174"],["/categories/game-dev/game-engine/page/2/index.html","e3f18747c91a7ac94bb27446c310902e"],["/categories/game-dev/game-engine/page/3/index.html","a9c10450a8aedf5a7bb62091ce115e15"],["/categories/game-dev/game-engine/page/4/index.html","d3b8e70c78027cd4d7f543904f19a3f3"],["/categories/game-dev/game-engine/page/5/index.html","80b87b30a86f5276036da69c3d1cce54"],["/categories/game-dev/game-engine/renpy/index.html","97ca1afc650b58baef9b07873d4b68a8"],["/categories/game-dev/game-engine/renpy/page/2/index.html","79883454c1fb2b1b1b827e1c7b523d81"],["/categories/game-dev/game-engine/renpy/page/3/index.html","0511587488bcfb8f457b2e458c9590a8"],["/categories/game-dev/game-engine/renpy/page/4/index.html","1ee60fff4e06eb2e4bcb3001a4971e73"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","320261fd1d2b6d807c6909115c6cc52d"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","9de6f79bbd19cb7eeca9f63ca207bf0b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","9c3271d156f7f943561ea3a61d496858"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","722d4658d09c118240da0ba447797d63"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","41b069821d289eb556119f007537c37e"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","c9d36f5d3f0b4d5868818962b1ee24e3"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","da1ee016e44729960081258e3cdf10ee"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","0a36f506f98f099da67d9f3d0e9fe294"],["/categories/game-dev/game-engine/rpgmaker/index.html","b8d086a35cb392df51b5bd39835839c2"],["/categories/game-dev/game-engine/suika2/index.html","e6dd3a69c5d61c65f38e87fd419c4fcb"],["/categories/game-dev/game-engine/tyranobuilder/index.html","915b809b81cf811414515a2da2b3a5d4"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","bc9c6748310af15d19267f6e68c89e99"],["/categories/game-dev/game-engine/webgal/index.html","5f756593c0da7c75984d9d0b9d6fcb30"],["/categories/game-dev/index.html","f162ec8f0a72135d3b146486b9489d84"],["/categories/game-dev/page/2/index.html","cc8a6b3e01d20daddd5060e87710be6d"],["/categories/game-dev/page/3/index.html","b1f633b25d2c49abf599ec802ff0171f"],["/categories/game-dev/page/4/index.html","4c8e21eeb89f9bff0ae4b11dde7afeed"],["/categories/game-dev/page/5/index.html","43920397e80980716a60d6099d6041f0"],["/categories/hexo/index.html","efe8d1d6babfea2a478a3d7497218426"],["/categories/index.html","09118d0572c00c5756f7e28238f4331a"],["/categories/material/index.html","ca40efc24957131f12fa892e6229e160"],["/categories/update/index.html","d42e5f1672418f1e839ff3fe89712b14"],["/change-according-to-real-time/index.html","02332e9b31e20de9935100e515a6c286"],["/change-character-info/index.html","9ea07e3276f4a112ca585e98c0fc1fba"],["/change-title-after-first-time-viewing/index.html","820f480e7554a30b50139b8934c028c4"],["/change-title-based-on-event/index.html","4e28ff2249e44830285bddc027f718d8"],["/character-interaction/index.html","1491536ba2edbb0edf0116e857388abd"],["/character-stats/index.html","7774e1836ad34354e1f9ef32dbe08baa"],["/chatbot/index.html","f6ca979cc00d35965f6d220304b22129"],["/choice-time/index.html","1cf6efaed9b2d82a829290dc92cbc7b8"],["/comments/index.html","27e8efb76b3a64019e7116404827141c"],["/commission-info/index.html","d7f32650c59ff6d0667f53a5ab634bdd"],["/count-login-number/index.html","33f9fadc1d1200454a71d6e8d83b8752"],["/create-button-anywhere/index.html","afe913ad3be3950ed83fb8760cd8837b"],["/css/eurkon.css","e997e938f877d8f863c2ebab33a38e96"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","fa95a9733b5416356fa422a73d119b74"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b0a03ad040eb949ea0fd24621336d167"],["/css/rightmenu.css","2514db6fe3c147b4232529fa7d7b6307"],["/css/siz.css","47a4268c98ba4d3deed476039fd2a7b7"],["/css/swiper.css","cb0f1cc62dd34556cfb8598549520993"],["/css/swiperstyle.css","1487d88426e7b31e33e07e3ef89fb9e0"],["/css/var.css","31ae774b0cab5304f9b97bbd12d84435"],["/ctc/index.html","692fd748d123ed83c121244d72fca96f"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","2f0653643dac7465d0fb1f74b8685115"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","1b1134f3bb42dbb0ebf804f6757a00a4"],["/custom-gallery-cg-screen/index.html","bf8fecb5c96b92b1e7dab0cf43c5bcdb"],["/custom-launcher/index.html","7853dfe2550b13e94fcec3c72fd77c8a"],["/custom-loading-screen/index.html","b3e5a0ece1a23750a359c91ba720a352"],["/custom-mouse/index.html","2cb389e35d189abf49e65017c98a6bad"],["/custom-music-room-screen/index.html","6170256e2b84d23539f20e2fe5ee53e7"],["/custom-music-room-screen2/index.html","ecf1353ddc80623a69ed155082c942c4"],["/custom-nvl/index.html","901451a537d09a38d06acc53880629c7"],["/custom-player/index.html","868cd8916b4251c2bc2b9e9c486c514b"],["/custom-preferences-screen/index.html","74e874f13e23457ce1781f926bbf900d"],["/custom-say-screen/index.html","251724acfb5b37e6ea456212638085ab"],["/custom-style-position/index.html","accef0d2361d0568c6f56494f8e26331"],["/custom-style-prefix/index.html","c99a1740153d92e7580b8270b24388ae"],["/custom-title-screen/index.html","14ccdb92e27f9bf18c7448918f722c47"],["/define-npcs/index.html","39cc9041220131fff5ba3ee613648a90"],["/delete-save/index.html","16909d56d674fc4268946f249723f202"],["/dice-function/index.html","28ae658d71d03b3401778e061dc9eaf1"],["/disclaimer/index.html","7dc23944592aa8e91082d96d7fc6c16c"],["/display-immediately-all-dialogues/index.html","e5cfd735e8d101fbe4ff1747fca09740"],["/display-real-time/index.html","0c0569a9906bb5dd2d312316fb847fed"],["/enter-name-screen/index.html","a9f657bb80d3b493ffd1edf89d9b3ef5"],["/export-game/index.html","3802abf2ad3895611eb99d4bcd0e7a0b"],["/faq/index.html","54958010a643a483ebe188c663ebc953"],["/friends/index.html","f27da80cdd35e51cf04c8d1c3080253e"],["/gallery-template-assets/index.html","9ffdbde5275219d54787168de22211e6"],["/gallery-template-default-ver/index.html","7d9ff6f5923b6b113a345bf6ef09c5f7"],["/gallery/index.html","e55b8b8cd4247d03950e0a12b5333427"],["/gallery/photo/bg/index.html","787ae1729963ce8dda34618cd83f50c6"],["/gallery/photo/gui/index.html","f057fa6b2da8754381f0dd51967d267f"],["/game-only-text/index.html","faf8f6f0f4568da17edd986cbcc1abfc"],["/generate-random-name/index.html","c64eb69908a80fb3ca5db9a5cfcf0102"],["/gui-017/index.html","4a9e9b2ebd39c4918189648654b787fc"],["/gui-vertical-002/index.html","89a0bb9ce80bfd2734ce97f2679a99df"],["/gui012/index.html","6dd81847b6542be9508ec481ecb16eac"],["/gui018/index.html","47bcd83c89e4478c65fdbc5e3ba3f4c5"],["/gui019/index.html","a4ae43771ac3287ffe9a8eb32ea5260c"],["/gui020/index.html","504c24563ccf3fbc0ec0667f8f5fed04"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","62b405d133316b0041d29b565cc183e0"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","601671ef6b99e38a06ac50ac768058a7"],["/hide-textbox/index.html","9daf1fbfc1c7d3c45857f98d11305640"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","620b3eed9670571178b817f817d448df"],["/images-tip-function/index.html","4044bbb7e202fad8d899f77b1b572fae"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","89fe11ab0c2ed049c8db4229b79c3440"],["/index.html","35f27332f0c1c3983b8937d4dd8ecd91"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","c0f6e9e4f09e159c6def2620f74bd747"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","e8a043e134d80fac9a5d3756a30fa6fc"],["/items-sprites-effect/index.html","09838061923e77e6a5e3cbc60e0bef45"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","55b59f52027f85f0b773d13169f2bb42"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","ffeb8deb5c09a71b5c715d194a981b38"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","df43567f7ede6ec006b9a251c44457fe"],["/link/index.html","c406a90a01ab3b3195f84dd8a951db2d"],["/login-reward/index.html","b5e28e73cb2b05b44e702ac77b443e53"],["/main-menu-music/index.html","cea6b24d828ea5d49e65f105095c3e59"],["/make-butterfly-beautiful4/index.html","30ed09b0afe97a8fb844c772f7981d5f"],["/map-puzzle-system/index.html","06b986e7ec656b31c182379f12ceac1c"],["/maple-effect/index.html","f7c9336d6f4ff815d9e917d4fabc7c10"],["/memberships-2/index.html","f51ba4584ec51cc238af3c4cd0580b90"],["/memberships/index.html","111173ae7f415a816a8ebd5543ded391"],["/multiple-language/index.html","fe992d797f7214c969db0b59dc9a3c9c"],["/name-input-assets/index.html","c7201623b15224ad787e4c745cd63483"],["/new-year-event-2023/index.html","1b5a56fa063307cc5f4b5dec07d376bf"],["/newsletter/index.html","d91885dede722f8202ae977faa3c18b4"],["/nsfw-limited/index.html","374d78e441b5e34e650643760bbe0f2e"],["/null/index.html","00b57e4f24aeb06bc6451c4c52a1dc93"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","c213623a4a8e4f07d88fd80349efe766"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","5968cacfba7a58ff5cc98d024cacc1ca"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","bf4112d3fc9ca42a691b7732e83c7b06"],["/openchatai-renpy/index.html","1e3e566cdb9bcf6acd93c2fe596dbeea"],["/original/index.html","dd14e9c915203b993fe756eeb30a180c"],["/page/2/index.html","dff62de7028860c3ccc79cb5a09e7e50"],["/page/3/index.html","4156a607d557fd7b4fa75635b40b40d8"],["/page/4/index.html","008fd53851598310b8f41405b4c8d558"],["/page/5/index.html","d4686d806594f353b0a529c9a3ac02c7"],["/page/6/index.html","ed098138bff7bbf624f6904b4a305956"],["/page/7/index.html","13e7093749252adaddc84f8b5f75e48a"],["/point-pop-up-assets/index.html","668922968b6c927b55170b3f29702aec"],["/pop-point/index.html","2d677580d6cfb08dbf220fac53340251"],["/privacy-policy/index.html","4fc816c66611226d30aedc671629600e"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","079e249760ca2f5fdbf8def3bb1962e5"],["/random-number/index.html","879d267809e6bd5002d11dc8a483ce31"],["/random.html","c4c00a47b807b1349d0c57ae6f7c4220"],["/release-017/index.html","df218a054c2ecb0c49baf5750bfc9613"],["/remembering-choices/index.html","bb382ed905b984b239e808c8017d4c09"],["/renpy-basic/index.html","1fa7d8f712fb35f28189f1556aaf87ed"],["/renpy-crash-glitch-effect/index.html","feb8d625c2037abdd71966eb2c5f6829"],["/renpy-flip-image/index.html","1059c5c4a34a6eb3485afd3dfddc0a98"],["/renpy-matrixcolor/index.html","059face223fc0969f34ab41dd0a0f220"],["/renpy-overlay/index.html","a1819760f172febfc72c892de74c3aec"],["/renpy-review/index.html","fb534013778a38eb905e7b7e61a3e9fa"],["/renpy-typing-effect/index.html","5feb59b58046679b92056563845cf595"],["/rpgmaker-assets-menu/index.html","faf82459c2dd681ce677c4c2853b7ec7"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","e4f9b2a84aeffdc0617d809c80610f52"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","c401afd0e0d05243706e00d528d3c780"],["/sakura-tree-background/index.html","4021ff08f32f143c66492b58dbc68f4e"],["/selected-button-style/index.html","519e262ad0fda7022a4122a74d7d1ce3"],["/service-worker.js","36d8b6db621c6080007b1eb271f79119"],["/show-variable/index.html","6b1ccd0702e2f87513d546afda4441c8"],["/side-image/index.html","de617fd5a6e9f353592a5c0f81256afb"],["/snow-effect/index.html","3f6ae5a983e5fe6d3b74c36119fa67e0"],["/speaking-animation/index.html","c1e9b29ff68d2759cddf0de5e0966092"],["/splashscreen/index.html","d42609ebc29e17da12bf7ca513a334fe"],["/suika2/index.html","812e31b3665dcc1b240e7d6749b44769"],["/sw-register.js","c6ac8e9823006ed53c88458730a1ccd4"],["/tags/Hexo-plugins/index.html","5a0e3129a3340ac3f321f98ced42d33f"],["/tags/Light-VN/index.html","7bf20f43564f8e222787150d72c43edb"],["/tags/acg-creator/index.html","d2273f5d6849dfcc591c6a374d372d2b"],["/tags/ai/index.html","9c130f9e7313c462436e14b474d84f72"],["/tags/butterfly-beauty-diary/index.html","c6723a416e12c66fd3ee9d795180bc90"],["/tags/custom-hexo-theme-butterfly/index.html","0b10bf2677947f0f7ad412c0f8840bb7"],["/tags/custom-renpy-title/index.html","5a2a376f82c0047f2a78cee7318a3fdc"],["/tags/dialogue/index.html","71b57528a87cfa0b06a49feff0dad782"],["/tags/effect/index.html","3fbff3a3a3ef6de408d1eca0229938ca"],["/tags/event/index.html","ebc846f0140267729f0ccf8db0307889"],["/tags/hosting-own-website/index.html","dd7c3c986e6d762072e4aeaa17e43feb"],["/tags/index.html","36e444406cd0c7bd342d963709a968d1"],["/tags/itch-io/index.html","8093e9e1c519262cd645002b81eae349"],["/tags/light-vn-update/index.html","773c90725b4c0f8e39ac220421197320"],["/tags/nvl-maker/index.html","0a2c9276c9c4f9b6326aaeb7766955bd"],["/tags/player-related/index.html","8355b9cc4ad7408b38b33a3940bf7996"],["/tags/pro-tutorial/index.html","4979ea948b5fca76a96c51461c31a01a"],["/tags/pro-tutorial/page/2/index.html","515dec7e66af56a392fbbbf5d0e84893"],["/tags/pro-tutorial/page/3/index.html","df10fb56cd3a59365877872682a40648"],["/tags/pro-tutorial/page/4/index.html","ae5d5445344abdc9115b47071bc3c3f8"],["/tags/renpy/index.html","2acbd9a55e70874a80ecbf0c4589ee36"],["/tags/rpg-maker-custom-map/index.html","63a293025ab08be966a05a7a9dab1677"],["/tags/screen/index.html","f9da1982b28144aed60d3e660b5326ad"],["/tags/special-function/index.html","a3f3d2f5b460d93b78849aeb16036cc5"],["/tags/suika2/index.html","5f8211c25dba117ffa5a61c546ee6e8a"],["/tags/tyranobuilder/index.html","ac8bf7b5a8b38bcc4d3db07520b5d107"],["/tags/ui-assets/index.html","897714beb73d0cd37d71bc79f696ee06"],["/tags/update/index.html","5a6a4f1f524105b0ce299c882d23276d"],["/tags/upload-game/index.html","2e402db1bfa93bbe8a6f491258b8f81f"],["/tags/variable/index.html","e2822be1fe355efbb029685cc77d4666"],["/tags/visual-novel-maker/index.html","93e4feb462843143a08146069a6c4e0a"],["/tags/webgal/index.html","a46fbf0f849c24943f69c7485996b1a0"],["/tags/封面製作/index.html","f4ad8503c132abdefb497dfa451fee74"],["/tags/背景素材/index.html","d5926b39181081a86e4dc9773ca06e1e"],["/tags/隨機功能/index.html","d62ff956fdd670459629cec2015c000b"],["/test123/index.html","4b13b819f50b11cded34aa3e4a24f11a"],["/textbutton/index.html","e09190e06e41d06c01a343da0d1431d8"],["/to-do-tutorial/index.html","b5af061762117d259e56f5125c6d6f05"],["/tools/index.html","62810222233cbf00c3748548029e746c"],["/tooltip-function/index.html","cd4631aaa907e675b6589519491a07f6"],["/transfer-to-hexo/index.html","a6f79fd208401023b8f8bec9aaf22c95"],["/tutorial-update-history/index.html","4164e85b3d6ae0cdc42c9a15c834674f"],["/tyrano-name/index.html","bc3ab3999dc0aa483a5a1c09a6dadbb5"],["/tyranobuilder/index.html","89779eaa2310faca924a097508d84ff1"],["/undefined/index.html","27861ce0105cdd6d674314c5f3e61610"],["/unskippable-video/index.html","2de759965a49c968ce5e66da527e4881"],["/update-20221211/index.html","1c8b5e2cf147379e1b1ec84d2b3d80a8"],["/update-20221218/index.html","b7c4a73f8263f1567478f363451f0848"],["/upload-download-save/index.html","5619a8aea2a4385eca02d5a6e38805ee"],["/upload-your-game-itch-io/index.html","6ab59ac0c3d05d9dee5c72ebde9dbecb"],["/use-list/index.html","012ccfeae73b84a3ab3f35ec93c30acb"],["/use-nvl-mode/index.html","430ae966be7f17f26494bdb266aecb7f"],["/useimage/index.html","a59754fa740ef4fb61751aff1d78020d"],["/variable-change-image/index.html","45a9cccf805c58e064f8f16f7e19b029"],["/variable/index.html","295d492e5c40ad3c42e20aad2f5ec9a2"],["/vibration-function/index.html","3ddf560d00a6a47e69cfa219efbc76d7"],["/vnmaker/index.html","7159240e44c84e69007eb063392c8c24"],["/weather-effect-tutorial/index.html","c8f402de0d9423dbe94706b7b421655d"],["/webgal/index.html","075a6bf06b24de820e208ad439eafeb9"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
