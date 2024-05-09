/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","1e8e7ad2cea29f04e39d1507f8a4ad70"],["/2024-future-plan/index.html","a52f7234a19ebc355aac62d845d8d88c"],["/2player-battle-system/index.html","99c382b82b90f5cd5d57e2a08db9b67d"],["/404.html","106417f7fb6e7356974212247102c092"],["/about/index.html","8590d4db06b3bddc575ced7e3c076888"],["/acg-creator/index.html","4e6a0f21a6d74c748697d9bfbcacda49"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","5b2728b3b5402ea59a00e9f79099ed56"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","d86cb2cf0308d07931923930c1e32e21"],["/animated-title-main-menu/index.html","2fc575d34be90dfa67222790eb9cfebb"],["/archives/2022/05/index.html","0ddaea433c5a3e04f77dcd109e54b51e"],["/archives/2022/06/index.html","842bd68e1ed99a432ee65c5866678414"],["/archives/2022/08/index.html","41843b3b9361dcf35774657ee1921221"],["/archives/2022/09/index.html","936c53d28fa0df8e99af91b761931019"],["/archives/2022/10/index.html","3a97d99e6b991c6d4089571ef50106ea"],["/archives/2022/11/index.html","199d6445f359b6e42ccfab517291a078"],["/archives/2022/12/index.html","e478a47539cbb5c12f558d1d8b8f5124"],["/archives/2022/12/page/2/index.html","93fc7bc9af0c38c53ba39a17efc58b9a"],["/archives/2022/index.html","59e520991ae4890f989e33ed261a03de"],["/archives/2022/page/2/index.html","40e6431dbaf0d9619236723bc63bf872"],["/archives/2022/page/3/index.html","b09df6c32173902929fe1b65dac58e39"],["/archives/2023/01/index.html","4d83cffde550d5d99915f043afeeccd2"],["/archives/2023/02/index.html","2aa62820b3d376fef4b88c055df6336e"],["/archives/2023/03/index.html","09ecb3f99bb94efe1672f7a8da4b7a03"],["/archives/2023/04/index.html","3ab31b2bbcdce988470d9c5340bd4555"],["/archives/2023/05/index.html","f8749d2f9adc8d7a6fe0cded47bea9db"],["/archives/2023/06/index.html","ee865cd4a93f4ff871f8ad91b3bfbe06"],["/archives/2023/07/index.html","d5f894cb742e879d20ffcf70fc145540"],["/archives/2023/08/index.html","a8cd4cdfa10b4bdd6504bfdd1e0e8626"],["/archives/2023/09/index.html","467d02a5cda295447137f79c60b78fb9"],["/archives/2023/10/index.html","6953df0b1272f7c9462a51df8a1cd219"],["/archives/2023/11/index.html","3e8faa3d7b70dfbff48a99ebc150d5aa"],["/archives/2023/12/index.html","53b1834d72573a3ce0ce8199859a8506"],["/archives/2023/index.html","f73bf6864bc08284050382cd17a55633"],["/archives/2023/page/2/index.html","a4172ebfa7ae54d023faa3fa090b655a"],["/archives/2023/page/3/index.html","ee08ff1afba1df6982d20d7ab67a3225"],["/archives/2024/01/index.html","192079441f207c0bb942339a741c106d"],["/archives/2024/02/index.html","ea26b76db340c970a4a39469c02adf88"],["/archives/2024/03/index.html","c5bc63e777eb2351ee79094d1c600a47"],["/archives/2024/04/index.html","040844a687ae188016119496611d1bf9"],["/archives/2024/05/index.html","11e8a806064cc5e157c9add282259539"],["/archives/2024/index.html","5250aa18a1aa13565b1a325f490b9372"],["/archives/index.html","f9a0e55c2e9f4499b6de5943be2de576"],["/archives/page/2/index.html","c1b55f6b1e8ad7b4839af78902126f68"],["/archives/page/3/index.html","2383b16a99b61be2b35efa665301f40b"],["/archives/page/4/index.html","dee3e160f98769b92f7c6cc469aa3745"],["/archives/page/5/index.html","52b6494b0b6bda9686b073eb34ce3c03"],["/archives/page/6/index.html","1845375e9cc942d04f6b7927b741a8e2"],["/artitalk/index.html","fef5a2b5a0a230be377d3581ec0d6786"],["/battle-beautiful/index.html","4834a5624f2f44db5456a8ee6009ece5"],["/blur-effect/index.html","4e774f191b83197caeb38d8053625423"],["/butterfly-custom-tag/index.html","6ea181e83d24d57e1ae9e2113da15e0e"],["/butterfly-plugins-faq/index.html","f8743b83dd8dbdced2a1b2f7f826f946"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","4fd6b120ca5b3df9c5e66ed8f426bf7b"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","f58f704e7244d9c818ad84e518524a81"],["/categories/announcement/index.html","55e574d3e5ba0fccd057fc2e8d80ca95"],["/categories/diary/index.html","51ad696ca5e2e4a626cafd0d8ceb7174"],["/categories/game-dev/game-engine/acg-creator/index.html","fb03b431d649bbd7ccf7105196ebc3fe"],["/categories/game-dev/game-engine/index.html","074fe68acad328993e6c7437b3b1b473"],["/categories/game-dev/game-engine/lightvn/index.html","ebb7e774ea9827eb95079b27001360dc"],["/categories/game-dev/game-engine/nvl-maker/index.html","281e2c09e6e9c81a1e37dec85a886f01"],["/categories/game-dev/game-engine/page/2/index.html","2513988a8868603537238c60ac157e14"],["/categories/game-dev/game-engine/page/3/index.html","9b09d62876946293a82a571b47f32fa7"],["/categories/game-dev/game-engine/page/4/index.html","e6f26406fc990da224f7bde8af9f9043"],["/categories/game-dev/game-engine/page/5/index.html","09c7618ae0f24ece72cfc675b6200c9b"],["/categories/game-dev/game-engine/renpy/index.html","8566ebd775f05148b29454133588b9e7"],["/categories/game-dev/game-engine/renpy/page/2/index.html","9a8d3f59c06b6adc8ebac2103f34b185"],["/categories/game-dev/game-engine/renpy/page/3/index.html","35f352f74a06ddfd863b5e1eebc4c78a"],["/categories/game-dev/game-engine/renpy/page/4/index.html","64786e203c4f2ead95d1b5328769d20b"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","e203a266d434827046778f1bf4b46f21"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","1f65cf33d816c285433ad4e1634a058e"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","22a135220f52062630e89967404b3527"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","365622916815d4fab306512c29d4e98c"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","9a2b8b8eac87b99d2ab5e6267878e2bc"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","bc2e84d491e153a6f3a102fd44ad40c3"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","b15e7221173c97bc19c112c3628e551e"],["/categories/game-dev/game-engine/rpgmaker/index.html","3052c40998cf42a6135cc59a256ce458"],["/categories/game-dev/game-engine/suika2/index.html","79cc10c8aaadab8385384cb745094ff6"],["/categories/game-dev/game-engine/tyranobuilder/index.html","ad5b26bc63502812666afa56da49b90b"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","2b1767a8137297481349435564cd77a1"],["/categories/game-dev/game-engine/webgal/index.html","83a0957e26e55b82efee763eef1ee300"],["/categories/game-dev/index.html","3fbd50e31c47d5d2f19287275aca7dce"],["/categories/game-dev/page/2/index.html","4cbb2078e02f4af374b34b6294300edf"],["/categories/game-dev/page/3/index.html","b5479b6787c48b4eaad1fab093d041ba"],["/categories/game-dev/page/4/index.html","d524096c74840b6129ff9bc782704f5a"],["/categories/game-dev/page/5/index.html","75dc1eabcccf69cac7042558fdb52d0d"],["/categories/hexo/index.html","fc0967cf56c54b5a83d566f71c74958f"],["/categories/index.html","96244e5d81bef1f7311adc4fb07f7e2b"],["/categories/material/index.html","15996404a4b0c8d9bb5061789d88ae0c"],["/categories/update/index.html","502a2e0b632829bfefb7de8765127e53"],["/change-according-to-real-time/index.html","80b0eee1af6b5d6bad519c26c202dfca"],["/change-character-info/index.html","744f49946ad75e1835ac4aa424a47819"],["/change-title-after-first-time-viewing/index.html","075deeb921d749c9be2f72477d44a5da"],["/change-title-based-on-event/index.html","9a49effac3bcd016842c628dd4bc489d"],["/character-interaction/index.html","7511c40454fa6b6914d162040880896b"],["/character-stats/index.html","3a3b1e229a133fb1fdb8686ac3c30430"],["/chatbot/index.html","3813fbc76dc71cb5ec4c8764ed0de153"],["/choice-time/index.html","62c12c14ef5f871d608cd384449850e0"],["/comments/index.html","561881a009e20415c516d3a49e4fdb66"],["/commission-info/index.html","b020f6a838dd52be2268d41461ecf6b5"],["/count-login-number/index.html","b71e1cac753666c466b8479b0ae2984c"],["/create-button-anywhere/index.html","800796fe24adb3bf351f55c1d13962dd"],["/css/eurkon.css","75509834ac71ab3f2f5c9660e1350c61"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","395655c4781d4c125338d3e01eef0b29"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","8b85b5682692b593cae96d2ebd948176"],["/css/rightmenu.css","898ab0cab76a8b05a2c032623a828cff"],["/css/siz.css","ad97b402dcfa1a1fa2eff767496df5d4"],["/css/swiper.css","3906056278023636f02576e192a06c6e"],["/css/swiperstyle.css","c5d03625758987af2b2fe44a42cc7f77"],["/css/var.css","cd1e19afd125788d4653b55bda544cbb"],["/ctc/index.html","01c8948bb43a746a2ce5450ef2c44239"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","3fc1177517ddb419faa55bd7d46453d0"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","7a086012970e97809c8daadd62165762"],["/custom-launcher/index.html","8e95404d75b9f6b10cff6fb1ec807485"],["/custom-loading-screen/index.html","8e41c1687d4c17b336cb7555be519a30"],["/custom-mouse/index.html","93174192abb3306c17b82aa979be082e"],["/custom-music-room-screen/index.html","0b01ba4fec08cbf4d305dc9f2e6ca525"],["/custom-music-room-screen2/index.html","961e49e98a5a012aaad51db8da5690a6"],["/custom-nvl/index.html","df3442c5f16b4110951957b645b1c804"],["/custom-player/index.html","e63ca0d7e5ee78d57ee926af9f72630c"],["/custom-preferences-screen/index.html","0f155d41cad257302fb54ac9b956fc78"],["/custom-say-screen/index.html","4b8b0f45999de5abf73c22a373518d80"],["/custom-title-screen/index.html","849a781e2edeffc1f255b58178b0efe0"],["/define-npcs/index.html","3ae322c7bcc1aa451ff25471d9a5297b"],["/delete-save/index.html","056a1054166143e8381bde91f24198e2"],["/dice-function/index.html","6a9effb046f771efc3556ff7048a1560"],["/disclaimer/index.html","7eb7ba5e9b34c62c33a898c071e9bc79"],["/display-immediately-all-dialogues/index.html","40278354ff77bffa82afc612ed7017c7"],["/display-real-time/index.html","d70424cfa5aabf4921a74be0b5c01db4"],["/enter-name-screen/index.html","84a614c0452cfafc1b5267fef968ff7f"],["/export-game/index.html","8e74f1e6566735a0d2c7ae20df6f9625"],["/faq/index.html","fbb153bd8a0e1d06073a6114079394a0"],["/friends/index.html","8ff93ca23e0de2b0a4ea7826d4fff3e3"],["/gallery-template-assets/index.html","62cc390fab8fdd0a6fecaf09a6a66151"],["/gallery-template-default-ver/index.html","ee99710ac74f366b844f4bb092aaa196"],["/gallery/index.html","2d356661ff98bd102d4a98303582fed1"],["/gallery/photo/bg/index.html","8224c4c199f889916968cb70c445eb33"],["/gallery/photo/gui/index.html","b9ca4e5a742a7e1db8b22cfc6aae07c0"],["/game-only-text/index.html","fd17fe2cb7a399e110cf9dbc501846f0"],["/gui-017/index.html","fa843825d70ec10a27e6f9dc96aad28c"],["/gui-vertical-002/index.html","07316e276ae1be03136233d4b513d058"],["/gui012/index.html","885ab5cf1c55b30bd91614b3ee6aba31"],["/gui018/index.html","25556e5691179c5879e45c1b0f55de66"],["/gui019/index.html","d13200c64e177a266f011d0deb7d3578"],["/gui020/index.html","1ebb054ccf2b5cb8ed8b923a2431108f"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","fd852d05027c12efc222484a66c72e2d"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","7f949a82d995d21b81fdfd006d0743f2"],["/hide-textbox/index.html","ab3a4ac96f4c98b4518827916eea61b0"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","22ef2d48feadef9dff38126978e18301"],["/images-tip-function/index.html","8e506cdc3f0464d005e79c008d02e82a"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","5fd622f8ba3908518492beb7ce8bcd30"],["/index.html","7907e579be5c442ef265a577b03d773f"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","a4f00b89a363cddc70f77fbfe17519b7"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","fc851cd2020811904a898ebd6f85b624"],["/items-sprites-effect/index.html","7f3d99e425fc641be7dcbe0a87fc0cf6"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","4f1bfd88210b7504767570da61a24edf"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","068bb930e21fd3134eb814ccd06450d4"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","a576d5beecef1ec05b67858da7bee453"],["/link/index.html","73c4072b37a7a5c1091c97cf693e3a86"],["/login-reward/index.html","c60b1a0390ef6de5861c6fdf05b89d94"],["/make-butterfly-beautiful4/index.html","fcd0704d412c4f40853a29b6fcb665bd"],["/map-puzzle-system/index.html","06da6734306b1d7213f7d195808ac32e"],["/maple-effect/index.html","f4a1436ef8b65f2d36c64e6aeaf35e8c"],["/memberships-2/index.html","1d32291ebd8e3326ff1a715666b9ce0f"],["/memberships/index.html","68e2db43f02d057d86649807f96a95aa"],["/multiple-language/index.html","4ef94c64b2afbfaf1f92dd8436f47b58"],["/name-input-assets/index.html","ac81827b8511b1ef3d9d500d4bfb57ec"],["/new-year-event-2023/index.html","ffeb074e3ba8f63089932fac9b30befd"],["/newsletter/index.html","2d68f26e5b098178d7161b815def2e55"],["/nsfw-limited/index.html","4ce0edbec9a274022e948bb322e69575"],["/null/index.html","a8af124e87cbf73d4b17274a16a06dc9"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","7722710102aeaa59b934b41500306ca4"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","75a9edd039bd76e2551276a8e8b97c3b"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","ce379494e8685acfb440116547d2f664"],["/openchatai-renpy/index.html","d3d496c0d36bf3094ac1158b8611ed23"],["/original/index.html","b86e91efe46bf81526825ed530d155b1"],["/page/2/index.html","7d771e4fc87faae9ba1ca9b9c294c9b0"],["/page/3/index.html","5e248b982bc60e199a3b9075403db754"],["/page/4/index.html","8c1ae2efd35d20eff0f7b4625342cf18"],["/page/5/index.html","f867d916278c6383b3e0ba3f780a3b6c"],["/page/6/index.html","5faa78835a0bc618d2479d407e3b94c0"],["/point-pop-up-assets/index.html","82d5d567ebae0310785cccdeaed2fa20"],["/pop-point/index.html","4a51408cb4a7cde12aadaf2f111d3b3c"],["/privacy-policy/index.html","a8f12c74740a564fb18588f196de7f9f"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","ff91cbe173ebb5e4563e279108656176"],["/random-number/index.html","0e3cfae74d21b3c799161695f5f71fe9"],["/random.html","a7dd8727dceaeee07e65b722be3ed852"],["/release-017/index.html","2a4d1f82ef901b9e21ca740bb5b6b1c1"],["/renpy-basic/index.html","e598965c552acd94e6b1e2addb9b4083"],["/renpy-crash-glitch-effect/index.html","b7870d192a457e78b7e197c48b3e0419"],["/renpy-flip-image/index.html","53b9c6a74bc49e55cae783fc28abdfea"],["/renpy-matrixcolor/index.html","7bbde18bf84cac3535175a59cb7fb426"],["/renpy-overlay/index.html","69761fa07e26aeb82620fc141cf0715a"],["/renpy-review/index.html","eba3417da38d874c4793e382222425d0"],["/renpy-typing-effect/index.html","6bb724040a709a70d0093447ebf7bfad"],["/rpgmaker-assets-menu/index.html","27295551ab957eec4a676e68a016d863"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","d5141586293e54105ba81238611fc8c2"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","e515c04faaac3a41eb51d71b5c7dc408"],["/sakura-tree-background/index.html","579197ee605558e5341955cfe9f8572b"],["/selected-button-style/index.html","df0ea0f0b029625926db9a1b8eac32ea"],["/service-worker.js","3553e2f2335084fdb4e1f8f90d9a7293"],["/show-variable/index.html","f9221c5ce8cd736d0a228e103a3c899c"],["/side-image/index.html","3e5f58bf52d1fded14b65f57bb71e20c"],["/snow-effect/index.html","06976ad435daedeebfbf46777ac733a8"],["/speaking-animation/index.html","3ce018a27a96471775f3dbfee33cb1e4"],["/splashscreen/index.html","13f07390afa38a206c04950ed7d2c3b7"],["/suika2/index.html","8d2967b56d811ddd6ffefd72bf504e89"],["/sw-register.js","13f44d95b3b4489bcac2a888827f1456"],["/tags/Hexo-plugins/index.html","809607ce23d917b6f70278c17f195cfd"],["/tags/Light-VN/index.html","58ff820d8c3c75b45335cfea65ac3a21"],["/tags/acg-creator/index.html","b67271d001302828372ae92f35bc4550"],["/tags/ai/index.html","fdb5ed4568eecac45b06114a0e1662c1"],["/tags/butterfly-beauty-diary/index.html","3aa571ee2f883fcf65a22a5273b12ce1"],["/tags/custom-hexo-theme-butterfly/index.html","69e9e768000ce1ce6327c15795bad8ef"],["/tags/custom-renpy-title/index.html","8c0af2789000fd735bf6841551c8b25b"],["/tags/dialogue/index.html","426586482baac9ecb308b6791b445897"],["/tags/effect/index.html","0946d1ab1350efd7aaa7d71190b862da"],["/tags/event/index.html","83b482dc1fc4aac4eb92ed16000878fe"],["/tags/hosting-own-website/index.html","beb385ab58afd5d0be0c32989a013cb4"],["/tags/index.html","11ec87743cc10ebed68b363482ac3d02"],["/tags/itch-io/index.html","ceb4d995da81300b6414e053de8092ca"],["/tags/light-vn-update/index.html","b6a16ff352626db5a409954ef0c06da4"],["/tags/nvl-maker/index.html","ccd66e0638684eab3089905d3689f5c5"],["/tags/player-related/index.html","e4846f0b00e9a5c55dacbaac3670e232"],["/tags/pro-tutorial/index.html","08759713a0d1bf4db5b9671b0e5cd9c4"],["/tags/pro-tutorial/page/2/index.html","5fa74fb3286380203ace877432af1a43"],["/tags/pro-tutorial/page/3/index.html","67b705a404f862b028dc6a34a55671d1"],["/tags/pro-tutorial/page/4/index.html","800a20e886914e79884ab1bc83fe9712"],["/tags/renpy/index.html","978fc84ab1a9dbe004ead23ede6c28d6"],["/tags/rpg-maker-custom-map/index.html","8bb12ef7d9298b8b13420cbc53eb50f4"],["/tags/screen/index.html","cd2f93c50577e4532e2bbf57a5959abf"],["/tags/special-function/index.html","839390973518f7fe74796137fe584e5f"],["/tags/suika2/index.html","d1b437be47c352e9ba183581564be6c8"],["/tags/tyranobuilder/index.html","1a75eedb898d1407575715d92a6fdc13"],["/tags/ui-assets/index.html","ecb6ce2be1ff3a7e3dc7cf14370a2a64"],["/tags/update/index.html","269b1ca7e925ba4178796cf1150df72d"],["/tags/upload-game/index.html","ee48cd1eaf33682566f428645aba52a4"],["/tags/variable/index.html","62b646e7c2f889360de9aadb46343144"],["/tags/visual-novel-maker/index.html","67d9bf4d010095433bbdda492ebfb3d9"],["/tags/webgal/index.html","b065b86cbfc98b6ca93d47fe144cc642"],["/tags/封面製作/index.html","e7e25f566f10b257dfe5f3e1e10ac122"],["/tags/背景素材/index.html","1200c57fb4d1bcc3934d59a7b464b73b"],["/tags/隨機功能/index.html","de648bb67c5bfa68df86e3d210d5b469"],["/test123/index.html","516e958d711a650a106740afd1ae9b57"],["/textbutton/index.html","7584d7a619b8b6a72419ef3daf923df6"],["/to-do-tutorial/index.html","74dc94c2d82135285ff8cbae0ca1fe62"],["/tools/index.html","56fc49745e6c61a1ccface4b40e72251"],["/tooltip-function/index.html","837f17379d675a2e23a9c8482bc302f7"],["/transfer-to-hexo/index.html","ef332c08aa41db07553b109799042e3e"],["/tutorial-update-history/index.html","50df38febebd1a66cd8a3fec58266860"],["/tyrano-name/index.html","dce971fbe8136fc868493fe7b630d583"],["/tyranobuilder/index.html","37fb0664d271f6156a9b3d2a55c44eda"],["/undefined/index.html","70317c1c002c0489103807faf3d47c8d"],["/unskippable-video/index.html","b28149e41b47c5065569395abf9c923b"],["/update-20221211/index.html","c99d007cf1bdc4693db9dca1654f92b3"],["/update-20221218/index.html","cd9c87bd36753df5be71cdfe587ec02c"],["/upload-download-save/index.html","1030d7b6ec37e95525771dd04b498415"],["/upload-your-game-itch-io/index.html","101cd472849997a5e3c955e65279b28b"],["/use-list/index.html","752f38204e63770ec7baaf33e1fa8954"],["/use-nvl-mode/index.html","c9d584d882d37876fafcdacc24aed154"],["/useimage/index.html","c3d34f9e4a84b23a57dc694774cf4f5d"],["/variable-change-image/index.html","caf1c85afb5d66f7af2f0ce78f1dde52"],["/variable/index.html","90bd9361a3795eb8f12592db0b3774e2"],["/vibration-function/index.html","d8acb1312e307db293e5f91146406ee1"],["/vnmaker/index.html","7970ad14f204c526e086dff256119b67"],["/weather-effect-tutorial/index.html","61a21331b2ccee4a06de9161dc9e2650"],["/webgal/index.html","71edcdf057d93217989ad2182896b585"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
