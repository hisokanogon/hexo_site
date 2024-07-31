/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","73415d43ca6da6f00e7bbc07a4429dd3"],["/2024-future-plan/index.html","c2901209363ca62ac6e4369fce8a319e"],["/2player-battle-system/index.html","326d7cdc8720e5ce5f6a0febb4ce12fb"],["/404.html","6591c312c8fdfb77e96f45374d7c315e"],["/about/index.html","cec0179a110ecaaa4fcf075c75aef9d2"],["/acg-creator/index.html","f6711fbb9ba435c08e8616ecd3a8e575"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","2369bf45eaaf287ea313d59a27e5e6d2"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","bff935f41ba4d3c582ea8935e54d13a8"],["/animated-title-main-menu/index.html","aa1e4a96c754f7f5820caff3c788e957"],["/archives/2022/05/index.html","3dbb3d57d89bda43e1f6fe2cfcd2fd94"],["/archives/2022/06/index.html","1f94ccc3490f984b0563dff1c901dc3f"],["/archives/2022/08/index.html","61fcf946b0d6d0ab6ae30e1b4b64e4a4"],["/archives/2022/09/index.html","fa0260325b2b53e0bf9097922d23e7f8"],["/archives/2022/10/index.html","57d3c2aeed6abfbc246570b62b3291ef"],["/archives/2022/11/index.html","35abbec382e3b3836c0cae4e823d5bde"],["/archives/2022/12/index.html","3b5c5bf4c40088e1d74c9dad868b8ef6"],["/archives/2022/12/page/2/index.html","abee604f0c837acb7fbe80948fa378ad"],["/archives/2022/index.html","8768ef9209a10dd708c072063b86517f"],["/archives/2022/page/2/index.html","0cf61f2c1d8a46dc84ae566535ea4029"],["/archives/2022/page/3/index.html","433545d6aa8a0c2cb583480eb877cf68"],["/archives/2023/01/index.html","023f457d8644a1773bbc6e620979513d"],["/archives/2023/02/index.html","ad64b34fe821e85bf943d588cffc64b2"],["/archives/2023/03/index.html","c5b95fa6a772d5432ff78f74968c861c"],["/archives/2023/04/index.html","1c8dce2e93c1a0848428900e4a69e05f"],["/archives/2023/05/index.html","19bee12efc51b0b4864d39176b6e651b"],["/archives/2023/06/index.html","9c0ec25113f87801d630f6c899519b96"],["/archives/2023/07/index.html","91e2c9ea678bd955c24cd15c0be0997d"],["/archives/2023/08/index.html","24791611228accff48b94d8514137292"],["/archives/2023/09/index.html","be7830e901ce68da090ffba13094b767"],["/archives/2023/10/index.html","d6eb2548edb9a80ebdd2996723c294ea"],["/archives/2023/11/index.html","da69626d5280abf47a58d71c13f9cf35"],["/archives/2023/12/index.html","f25027d933a3f6e2cad39d881a19617a"],["/archives/2023/index.html","a62c39587ec0164bf6736c03494f9479"],["/archives/2023/page/2/index.html","0d1414d9688b739e2855485c2531e02a"],["/archives/2023/page/3/index.html","558e4cab8890ff0642795cec25344af4"],["/archives/2024/01/index.html","f46e639d7274aa98e795515b6c11260b"],["/archives/2024/02/index.html","1681fd4f7774387a7449d05a98853e84"],["/archives/2024/03/index.html","675f319f402cb2d65e4dc6ef6d0537b4"],["/archives/2024/04/index.html","d651fbb6f5d727eac51690bfbe653c08"],["/archives/2024/05/index.html","7d476fffc4214137e4b5e3f8960236ff"],["/archives/2024/06/index.html","b9ed41121fbf2e9e2bcd5bcbf4c06864"],["/archives/2024/07/index.html","2cdffeb59f98b48275f850f718973124"],["/archives/2024/index.html","08aac89f937adb0619ae78179b0347c7"],["/archives/2024/page/2/index.html","32197e6ca57078ab2aafc627e0e65f33"],["/archives/index.html","672a1950adc8195ee4fa2f832cbd42a0"],["/archives/page/2/index.html","aac3b6118ee7b9217bfc4025deb6858a"],["/archives/page/3/index.html","7f46b1bb009bb9fea0b6ad6735210d85"],["/archives/page/4/index.html","c81fc4e6a598ffb403ac7fcadaad138d"],["/archives/page/5/index.html","19a091a68984e26f8575f96130f1ed39"],["/archives/page/6/index.html","7bb0251691a487abab8a667d90ac86bc"],["/archives/page/7/index.html","9d506f7f61bc25b2e13c8ceffdaf7564"],["/artitalk/index.html","53351cb03ff786846e2606c23d2b0454"],["/battle-beautiful/index.html","e3ff43ef1c93293f41e214781615658b"],["/blur-effect/index.html","3561bae2bf14ff2e29a3936109d41d7a"],["/butterfly-custom-tag/index.html","84d02b112452912bb0cab562f117f1dc"],["/butterfly-plugins-faq/index.html","d209ab353103b3f025cba70f4a208892"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","bde0094e5b962521a5b2b5ba18fe1b64"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","d3d1ec30ef64cfac5151539828a8b1f6"],["/categories/announcement/index.html","0e7be9f844e56c44b7cd4498f961654f"],["/categories/diary/index.html","112264ce1bcaeea1cda485226144c1a1"],["/categories/game-dev/game-engine/acg-creator/index.html","079e5b0b0394dd471211ad2960f17788"],["/categories/game-dev/game-engine/index.html","b8b33d967e82df307c45e45d2d2dbfed"],["/categories/game-dev/game-engine/lightvn/index.html","29d997a4cd9241b1db98ec981d908212"],["/categories/game-dev/game-engine/nvl-maker/index.html","9dcfae2b75389191c3d118cca9d8ae0d"],["/categories/game-dev/game-engine/page/2/index.html","8228a7f667c7ed31c78505b45e874bc7"],["/categories/game-dev/game-engine/page/3/index.html","e3df2a99319b596598d50ac3aec3f29c"],["/categories/game-dev/game-engine/page/4/index.html","73c28080412a01cbbd4ebf88eb18763f"],["/categories/game-dev/game-engine/page/5/index.html","461e2fa3d00dd23dead53aa3cc1a44c0"],["/categories/game-dev/game-engine/renpy/index.html","cd3c2c50abd7f179f348fdd7a608e93d"],["/categories/game-dev/game-engine/renpy/page/2/index.html","8dd13599e203f13287099b7ec642a7ac"],["/categories/game-dev/game-engine/renpy/page/3/index.html","e24bbd46cf97225ef209bd8ae0536e99"],["/categories/game-dev/game-engine/renpy/page/4/index.html","b1c0b7bd6e0a4116066f6636efdeae59"],["/categories/game-dev/game-engine/renpy/page/5/index.html","683bc670ed27d6f952019da7b99561a1"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","ef8e2de1656591ee13524a741280356a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","2fbffb97dcb8aec8be6b5651b1a1e37c"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","211a05a5af603f177e9791350dac6090"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","16827f6c86abdc7ff6d315e2fd86420c"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","ad5535e46f71d2831b212647239e4773"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","02120c3d92bc108c8a1a446a0c9a668b"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","925d6e50c88ae831fd28df3fd347df8f"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","855ac84111a23830fe9df84f43305546"],["/categories/game-dev/game-engine/rpgmaker/index.html","ff0ff0ccf96cac272653cade798a53b2"],["/categories/game-dev/game-engine/suika2/index.html","2e236d0c8e4defa15735852637e1217c"],["/categories/game-dev/game-engine/tyranobuilder/index.html","ec0114339e73f248429e124d415aaa92"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","4c9d176eafc086df313587db6ce023b8"],["/categories/game-dev/game-engine/webgal/index.html","814da51d6a1dd89d4c9be32e6078ff53"],["/categories/game-dev/index.html","aeb8e438c0a6f1048e0a71ff32f367f4"],["/categories/game-dev/page/2/index.html","9a779234642dbdfcaca100b0e86999ba"],["/categories/game-dev/page/3/index.html","20ff422b3e341f5d358c0797c5ca44e7"],["/categories/game-dev/page/4/index.html","bc7238bba867624dd88f9a901ca5b9b3"],["/categories/game-dev/page/5/index.html","854aec46c00d2b920bb4e0888ae656cf"],["/categories/hexo/index.html","e1848e772c3be12a803784c1029e188c"],["/categories/index.html","4d9039500f83005e0fea401b68c14ff3"],["/categories/material/index.html","3fce381e0c8a10b170eb897467cc87b5"],["/categories/update/index.html","b9982d605c56c2605594114bf1881b12"],["/change-according-to-real-time/index.html","e6a93685aab1d9d965648ddeac200683"],["/change-character-info/index.html","943d71593e4d18f425c1e6034b70fd59"],["/change-title-after-first-time-viewing/index.html","27796ae1ba39c8360d00da3264154517"],["/change-title-based-on-event/index.html","0d93c1d61d424d2f3b1ad4ed80cdba08"],["/chapter-selection/index.html","b9c95c2391b4656c9755d14dd4ecd1ac"],["/character-interaction/index.html","da65bb197e7af2d59f859a50792426a0"],["/character-stats/index.html","d4db6a73e2fa8e086be1e6f28ed084e9"],["/chatbot/index.html","7030354b49c20521d67d8a2dff94215b"],["/choice-time/index.html","a406e4da6221b814ab9128c233e3f380"],["/comments/index.html","d7896527ffd39b46ef623ee5786dc8d9"],["/commission-info/index.html","a43a4e64655559ec8fd8d86d469da599"],["/count-login-number/index.html","56b0335a1bca8e44e9450c0211219cc1"],["/create-button-anywhere/index.html","177d49a4eb0c15ac7e97cbfd3ea29e73"],["/css/eurkon.css","ef294c12ee09d03a5ed67a25bf877441"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","02b41b18f7f73e467dfc8d1f883c1f32"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","52485c48fd59b0472492670157514457"],["/css/rightmenu.css","9da7718cc940f34427fb7e77ccb05ae0"],["/css/siz.css","848c5383700cf9c841c81d347914250a"],["/css/swiper.css","554c4d0dc553fbee75d929eddba23b97"],["/css/swiperstyle.css","a5999159a8f08bc50c8495c3625746bc"],["/css/var.css","ed8d209fec0164cc743a139d7c3db08a"],["/ctc/index.html","56cb89805d7540ba64ab21f3ab73bb09"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","6f6ba4e270b873e934b28ebdec5062ff"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","075447deb0675e7a06b8bf374c75dd55"],["/custom-gallery-cg-screen/index.html","e60cc9f8bdf43de5310b55cff6d1902b"],["/custom-launcher/index.html","f05579c8a22c13f1e4728f3854d4dc40"],["/custom-loading-screen/index.html","55b7fa4cc554ea9f81b4c08d1e172bb0"],["/custom-mouse/index.html","c429a9d76a010f28799c6a8971f43077"],["/custom-music-room-screen/index.html","adc3121e42750676822b55de86f2db40"],["/custom-music-room-screen2/index.html","6389973d28efbecec670f2ca621e8cc1"],["/custom-nvl/index.html","e49810249a135e2fec98d028523d0be0"],["/custom-player/index.html","37f8d78e3ca93f43bef9708b928ccc1a"],["/custom-preferences-screen/index.html","36c57174a0831067a07c044350dde857"],["/custom-say-screen/index.html","4c48ed9217faf87c323d3a30c14480dd"],["/custom-style-bar/index.html","1613e11c700c98fe9beb8330282a9b0a"],["/custom-style-box/index.html","b8d17bdc2b9f5e7fdd99ed21677e076c"],["/custom-style-button/index.html","01d667a6f3dacd6b5ba5b4978633885c"],["/custom-style-grid/index.html","37d0275bd600894a31bba543c8a87637"],["/custom-style-position/index.html","ff848d0d45c9e9b094fbe0ab26c20797"],["/custom-style-prefix/index.html","04d0bfbbd822b7bf31ab0fab5258575a"],["/custom-style-text/index.html","874bf0b7f2d8cc1948eb4727f25c2f84"],["/custom-style-window/index.html","3506f580800688d4206b6ee026ace50d"],["/custom-title-screen/index.html","c64392b9b45f378cc2e81ca6c695d6ba"],["/define-npcs/index.html","ddf14627ea8ee36b8f81402156817bc7"],["/delete-save/index.html","0a83f9c1b450daaac795605f2dcf2fec"],["/dice-function/index.html","b0bc71c463476720de9b3b14c879b574"],["/disclaimer/index.html","85d60145269f78aea4326a626f119818"],["/display-immediately-all-dialogues/index.html","d942f75737a301a91b695fb00a023d4d"],["/display-real-time/index.html","e9dea186e3404a74344610e732594ed9"],["/enter-name-screen/index.html","2d68017ef3a1e9f5983c2769b6970a4f"],["/export-game/index.html","81fd5003ec418592d1e84c197b38bb5d"],["/faq/index.html","c10cd4ad0e4084a6e3e0271c6be1c055"],["/friends/index.html","62f0d9759acf79dda1db6fd0e148b0b7"],["/gallery-template-assets/index.html","c289f244c3781199e340b708fc50d6d3"],["/gallery-template-default-ver/index.html","529e1f3eff9fabc3f488801c3e4f1f74"],["/gallery/index.html","cc62d6f9530d52bffafaefa9ca076220"],["/gallery/photo/bg/index.html","d8296750043405ed9b4a26bf7b24b2da"],["/gallery/photo/gui/index.html","fd419e9064c66c85ca1b8548b64401a8"],["/game-only-text/index.html","a0a21b75909905957004dfc5dd19ec8e"],["/generate-random-name/index.html","f70b3d526c55d0dfd15876d6e6ddf589"],["/gui-017/index.html","d95d3e8b88a0eeaaa5e44c7056543181"],["/gui-vertical-002/index.html","54fbe1f2adb1aba0ce0c974c260e85b2"],["/gui012/index.html","7be566f3fce4faa81b2f4ffeff79a4f7"],["/gui018/index.html","326bf543be49788ecfc98d496fc00899"],["/gui019/index.html","78f0201b4cc82d013e05af2372a8ed18"],["/gui020/index.html","f53c78e1bcf36f1cfa3e10d872290d24"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","77a5aa4855ccab4d484bbc32865dc69e"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","4dd54b7b7f6f9410451d93fcbb1b5a48"],["/hide-textbox/index.html","bf1381d7e891ec2ec1b89d8d1bda8b2c"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","8af9320deabb5ff0b7b41896fb990621"],["/images-tip-function/index.html","d3690b77677849466a0fbf830ec7ec22"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","47492b84d6e6ad1ce4285c092ee436e4"],["/index.html","122c2a2d5011711fb4e3b46da8752888"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","9dbf024764c026192cfc36b0edda6364"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","31c88a8d94e44c19d36895a4de45614a"],["/items-sprites-effect/index.html","48e8cb687837ddc969f53e87122c74f8"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","2df59691d7fe8c956e581acf0c7011fa"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","c69a8c5a108c3464fe9c91b59297317a"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","5cbfdbaae68f11839a3aa09a0b8cc173"],["/link/index.html","47448ff00b9877339c50d9a0e8d51029"],["/login-reward/index.html","6da7b18e21d5dc4ac470586b8db250d1"],["/main-menu-music/index.html","f224915e9c79b686d7d371d27c7eea8e"],["/make-butterfly-beautiful4/index.html","e37815ae2f878faa0c6b93799cb26141"],["/map-puzzle-system/index.html","5be62ef3d32ba43ca8de33763d704925"],["/maple-effect/index.html","a65c5b3554e7fd81fb9df415dbec59ac"],["/memberships-2/index.html","5c886da756d0f15f152fcab0f0693f6b"],["/memberships/index.html","052a4dc92fc4cc7878270f0460f64c80"],["/multiple-language/index.html","1efeb86113c232448c45c08da0cd342f"],["/name-input-assets/index.html","93e8c5f8c4c49e112249899aba818f4a"],["/new-year-event-2023/index.html","12a8d9346a72a635c6c57a676d83e099"],["/newsletter/index.html","a474b93898adf0421471f7495a111b8d"],["/nsfw-limited/index.html","9503348febd0d6eacf38644c787f6f99"],["/null/index.html","31f3271db3f03a4e1f607090411f990e"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","c157d0f1884effb3d74bd7c6b5524ba4"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","59efb6519dbef6a1bb5d41371836aef6"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","0c17cbe78f9c2e1ff571dbcab7d85d5e"],["/openchatai-renpy/index.html","4a31f53566fbcd35abf50b35e675b29a"],["/original/index.html","c9d2aadb58108cf03e6dcfd99d3610ad"],["/page/2/index.html","0167849a6b52b040247d7255b2242ff3"],["/page/3/index.html","cef54747a256d17b946431fc715562ee"],["/page/4/index.html","64a66b7ed9d07bf2eb5daedc29f70a37"],["/page/5/index.html","fad3fcca9bade445a2212ada0b69d011"],["/page/6/index.html","b12637fba4e2d01d370ce3b63f4b68fc"],["/page/7/index.html","9c37dd32bfbe4c6dbe117dd545e496d1"],["/point-pop-up-assets/index.html","c7277330f09a9398426c95028a51a278"],["/pop-point/index.html","71f7129fa584e8ac3e974fcd3ab28487"],["/privacy-policy/index.html","2481970274abae442b91dd05bef0816e"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","449464583845401f84a7a96699704d51"],["/random-number/index.html","ed86f8aac721789957757e224e04d04b"],["/random.html","11f1a94061839a6a02f9c8701acd6f91"],["/release-017/index.html","ad17bde90b23703aa87af1aa99ac435c"],["/remembering-choices/index.html","8eb0245f080d45861a68f3fa9db9eb11"],["/renpy-basic/index.html","5c9cb719ccd70b8a7c22b7d96b147cad"],["/renpy-crash-glitch-effect/index.html","9071a0567e88f23e50e16cc39bf637c8"],["/renpy-flip-image/index.html","ed3f70bcc5d28343632560b6fa8384f7"],["/renpy-matrixcolor/index.html","1d4c4605222e3a9cdeee4a91ecb31f57"],["/renpy-overlay/index.html","9e56e0aa8b20589ef29d57cb4e60232a"],["/renpy-review/index.html","bb92f7a3b1102745ad06f57445bfc64c"],["/renpy-typing-effect/index.html","166cd211bc5be0ceb6d8b83b26d7830e"],["/rpgmaker-assets-menu/index.html","8587e78b0d78744d7da863180e2a1f14"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","50878586ca88b55c3400d3f8322a214e"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","4ed206d1d4962c52dd2d324557e32933"],["/sakura-tree-background/index.html","b1bd3c126057e0f35a301e9a83def7eb"],["/selected-button-style/index.html","de54e8ef6e9361daf92d10193929626c"],["/service-worker.js","8c145f47a266ea5f28e1e090a772e3f5"],["/show-variable/index.html","dffc9532ef1aa7221c05d3429311c919"],["/side-image/index.html","40874fe1767f7be985efd44858e89fa5"],["/snow-effect/index.html","8ee1f0c89b07328411520056a22d6e22"],["/speaking-animation/index.html","3f4c8eb11c6abb2fd545290c57d2e5bc"],["/splashscreen/index.html","33203b0a4e2762df1e6782f6ae1c55bc"],["/suika2/index.html","bf8d8e726b5e95cfc68d9120922e709e"],["/sw-register.js","1da744d0442048129818624c8128e39a"],["/tags/Hexo-plugins/index.html","359ad9dca5764690015456e72ccd99ce"],["/tags/Light-VN/index.html","88ee520fa59323ae46e7f2739b64f9d2"],["/tags/acg-creator/index.html","d780ad3271f4277856ea9d1f0b416ea5"],["/tags/ai/index.html","120130762d92540ef0f0b736fb02e4d3"],["/tags/butterfly-beauty-diary/index.html","a1880ceffc43a0b8d4a1924bea1a4373"],["/tags/custom-hexo-theme-butterfly/index.html","12ee10efa7fc1a9b4b8d36ef6333b703"],["/tags/custom-renpy-title/index.html","2ac8564877c1ae29c10d84e22c95ff39"],["/tags/dialogue/index.html","b94b6afbb23a449afd14da69ae86a5cc"],["/tags/effect/index.html","3e1ef1087bc0f6db2c04e63c65d05457"],["/tags/event/index.html","485037673a325bee753be1b3056ecd6f"],["/tags/hosting-own-website/index.html","fc7e4454b2ec9ca84efb8bf9c750da8d"],["/tags/index.html","1795e38af65f496b17dfe2f6a903d33b"],["/tags/itch-io/index.html","3140fc2a094c29b5afaa1760393b70db"],["/tags/light-vn-update/index.html","b610ae9bc342d99b1ff23d0a917de30b"],["/tags/nvl-maker/index.html","b20fef9aa1a052cf1eadcf0d8835e2b0"],["/tags/player-related/index.html","67a8ec57807e7a1a4aa81c6a31f16660"],["/tags/pro-tutorial/index.html","ddae5b7ba114650859f3f154a5d20f26"],["/tags/pro-tutorial/page/2/index.html","ac440e3690aa329321734bf3975ee92e"],["/tags/pro-tutorial/page/3/index.html","55f14bcb6ab6c8ffd497b1ffa6cc0423"],["/tags/pro-tutorial/page/4/index.html","9124eeca20004b1a0fcbb412ff00e12c"],["/tags/renpy/index.html","34b166d296107f369cec6e59b47735de"],["/tags/rpg-maker-custom-map/index.html","76452fdd2daf829426f1d0642052ad2e"],["/tags/screen/index.html","1eba35169376fb870f4cfaa27a1fe94a"],["/tags/special-function/index.html","54ae285b447fb885f95e80c7b60e5b7e"],["/tags/suika2/index.html","71982d7e43f8f2106fa31e89e6c2d648"],["/tags/tyranobuilder/index.html","d0c1b4e3ee8e7f0bbe70f28198b161fc"],["/tags/ui-assets/index.html","c413b55f043efb722b9b34e929876de0"],["/tags/update/index.html","b654ab5416b277721b99c412a351cc4c"],["/tags/upload-game/index.html","61024f9b07afda3212aa612b477fc971"],["/tags/variable/index.html","7d366ff2e1230f99b57a60e3c9d62b43"],["/tags/visual-novel-maker/index.html","2ff4f8830d3247f74ae0039e0c69ff85"],["/tags/webgal/index.html","79486097389673906db5495109a36947"],["/tags/封面製作/index.html","3cc2ed83c2ee959eb270076cc872b491"],["/tags/背景素材/index.html","f32d4d53483a807b0ea94d66884adefb"],["/tags/隨機功能/index.html","f45b57d561e489e6bc84d09b9e3ab601"],["/test123/index.html","64a59632c0828bb4aee60e8dfffe1292"],["/textbutton/index.html","04cd470003cfdce4c8c72d379ac42f0d"],["/to-do-tutorial/index.html","dc15206e10da0a8d767a2d00b0a68274"],["/tools/index.html","34e202e998871bbff3815e4147793b47"],["/tooltip-function/index.html","f200981fb62b485e3fda0688ea91c9b9"],["/transfer-to-hexo/index.html","5686ae8a64ea1d3abb633c73c94a2b0f"],["/tutorial-update-history/index.html","e0d63ef96d2d53c8906f0b34b301eb2e"],["/tyrano-name/index.html","ecf8795985e766b9c31a5b35064ff7a2"],["/tyranobuilder/index.html","79e4c337369faf9458cc4988d82ef815"],["/undefined/index.html","83f51626c804ce1dd10e909db9e1e707"],["/unskippable-video/index.html","bdc146983bbbb95a4473fb408999c0b3"],["/update-20221211/index.html","a2f3c423df578b1333f72beacd1a3f01"],["/update-20221218/index.html","39dab3628bf8714761d54c4a8bbd6927"],["/upload-download-save/index.html","65c6dc810e22228d73f9764048c192a6"],["/upload-your-game-itch-io/index.html","1199e737d6792bc22343ca97a6c7cef4"],["/use-list/index.html","8745d1776071554a4cdefdc8a65d6bb0"],["/use-nvl-mode/index.html","b726e818863aadb1d6ca6233b4a71d86"],["/useimage/index.html","4ad9c07f7bfbb42a108e32d6be78a45f"],["/variable-change-image/index.html","6a2dea84f0a2aae5939d1fc8a8db4dc6"],["/variable/index.html","78bdd1d334458afe553abab12ea7b379"],["/vibration-function/index.html","a98be936b1116d6c94777793e6af09dd"],["/vnmaker/index.html","4a0603c3ebe28be8703a2a87457a72a5"],["/weather-effect-tutorial/index.html","b6a787b3f47f795e83fd4830ca884b52"],["/webgal/index.html","bcd6d4b3bd88eda22a3d851b1be7c934"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
