/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","a6d865efafe44c9d49fd17e8b742cd1a"],["/2player-battle-system/index.html","a9b3400b20319aa1e6a444059f3e8fed"],["/404.html","aceff41d8df41a9d6ba257883bf244d9"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","a37415feb7c9caabfe55f2631095a1dd"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/about/index.html","d166f0ff89b40f5dd092ccd2e5ecf740"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","b9908388582cbd9ecafa872a2834cbcb"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","5730744f72399df07d80c20d3f02c654"],["/animated-title-main-menu/index.html","0a228d9768d23cda7a303736116001fc"],["/archives/2022/05/index.html","544e194e980d87d5c67893a22dff578b"],["/archives/2022/06/index.html","b6692c7e38f4ee7803fb90d1d2158a0e"],["/archives/2022/08/index.html","f1f574ddc26881c55389353e29b418ad"],["/archives/2022/09/index.html","40413a19a1509c597a60eb7fb44dc750"],["/archives/2022/10/index.html","fe707b2fb375f659c1e7cb0d7384e6d0"],["/archives/2022/11/index.html","0aa1f8807f13f526c36143baf1a6906f"],["/archives/2022/12/index.html","dfc1a78778641c4e31d66c9f3c3044eb"],["/archives/2022/12/page/2/index.html","3051721061d004dc50e10a5ae2b9d420"],["/archives/2022/index.html","f9afb9f708b94ca9be9bef1b1f9c8b9a"],["/archives/2022/page/2/index.html","466530fdf916fa9d06208f4ff1981874"],["/archives/2022/page/3/index.html","fd358c229427f19075da5b1ef37e1fcb"],["/archives/2023/01/index.html","a4362ba112bf46a18055cd20f1bf2d31"],["/archives/2023/index.html","372e386c810e7feac13f6e93bd797085"],["/archives/index.html","43937bc6e59effe74a5187b7e75792d8"],["/archives/page/2/index.html","d8395d9d4ed398e611fe8ccf6bf8dce4"],["/archives/page/3/index.html","b2d65f2a6fa9492e989d540426d9dd7f"],["/archives/page/4/index.html","1a70a6ebac30e8f478766503c20917f9"],["/artitalk/index.html","c917f9aa8c4a323ef8810487aaa45b0a"],["/butterfly-custom-tag/index.html","c332f5f5b2da14a8c4c858fd4b665f9d"],["/butterfly-plugins-faq/index.html","58643f8542a3fb81bfef17830ceb5521"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","05a1a8f7cdfc0d9578b9898f8010f974"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/categories/game-dev/game-engine/TyranoBuilder/index.html","a7fa406a85eb0da7acbdf022252088c0"],["/categories/game-dev/game-engine/index.html","ffc182b97d1507ee88acee75c2a03ce6"],["/categories/game-dev/game-engine/lightVN/index.html","c5838d2fa1b87433b27c319dbeeb424d"],["/categories/game-dev/game-engine/nvl-maker/index.html","d37b5049bd9576f229f78a1db1bf21e7"],["/categories/game-dev/game-engine/page/2/index.html","9042dad81fe88e806a73f3c43af2f150"],["/categories/game-dev/game-engine/renpy/index.html","783bbbfa775fd61412f64a4d713a3a38"],["/categories/game-dev/game-engine/renpy/page/2/index.html","886cbc84ec7c44cab4ff47ca9dcca8f5"],["/categories/game-dev/game-engine/renpy/tutorial/GUI/index.html","5171a666ee88f01d167c7e015a52cd20"],["/categories/game-dev/game-engine/renpy/tutorial/GUI/small-things/index.html","364fee8e610bc9e7b178e0ac7d0dc2de"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","c4bad87fdc8b7a955ad08dda4da62697"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","c3db3bfc8ffe9760451ac428efd2a9fe"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","499c58dd0fb3d158d1f652bd7f0acdb4"],["/categories/game-dev/game-engine/rpgmaker/index.html","a9cf639783f5667506f0bbbc31ffad09"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","c0f24bca9c3039f1c84497d5b41520db"],["/categories/game-dev/index.html","654e162f9ee3600f8a17deac18e2fb9d"],["/categories/game-dev/page/2/index.html","73306389a59e5a0c43935e608060e27f"],["/categories/hexo/index.html","df927ea6e02d1f2cb9fad257a0007916"],["/categories/index.html","3544991494f95763357a9be386f86823"],["/categories/material/index.html","eb831240a18550cd0add894e04bea9ae"],["/categories/公告/index.html","ec497a1cfc8779bfd20263001b25b17c"],["/categories/我的日常/index.html","177c078fe6dea5940b9a339e27ea0997"],["/categories/更新update/index.html","59ba6c629243658113d0f9ce7cd51df6"],["/change-title-based-on-event/index.html","44df36f5717016579f0ff3124fddc5b0"],["/character-stats/index.html","120af0ea7fee1943562b432a4e1a8cdf"],["/chatbot/index.html","5502ff1d9f7765a2fd16d9c23ad37411"],["/comments/index.html","905dd46a5c5ce619d5ab4159d349d16b"],["/create-button-anywhere/index.html","7d414eba867572614781b08947875316"],["/css/eurkon.css","8a917cfed1ae25d6dde878b54f9e5a89"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","e6e77d443ef2c6f1eccfd68eaf9c72f3"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9f5c98c92dc7c3c917ca28bf206c0df0"],["/css/rightmenu.css","2799dbf558771cd9cd4cabb25380ddd3"],["/css/siz.css","cba6e9cdaea3c07433be440a75f10884"],["/css/swiper.css","db503ce820702f8b4a5aa45a0ad91e6c"],["/css/swiperstyle.css","d1dc80e692e2f087d13534c6b71bda8b"],["/css/var.css","a46ecde4292f3d1c4442993edb07c55e"],["/ctc/index.html","3a53efdadfdd520b51cd42eb2fef3744"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","c343294663ea2b634f78656bf6adc6e3"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","267f44db1909aa4e6355ab07802b6c0d"],["/custom-mouse/index.html","6cd373efe1ed1b2e7327b363c88fc31a"],["/custom-player/index.html","d37877262c0e0d280cbc7c60635b6e5a"],["/custom-preferences-screen/index.html","fb4448c0984db997ecdfd0d67661a8db"],["/custom-say-screen/index.html","1b643c7762cb2a572cdc10449ca2eb62"],["/custom-title-screen/index.html","fc9bb6021baaf564eb3e189345ff4684"],["/dice-function/index.html","2c87f9874c3694184f1a5406e32890ba"],["/friends/index.html","6273f16684226475a4c2dd86f0b512aa"],["/gallery/index.html","0484b1f568ce7fc53a983c373b941fb7"],["/gallery/photo/bg/index.html","c03afc00a1854eb08dbceeb915ad981c"],["/gallery/photo/gui/index.html","0821d88cbcf18e62273f65dfea76aa58"],["/gui-017/index.html","b1bba11ef56e6bd34e5e0e338fe352ac"],["/gui018/index.html","d91d5ee4441ffb8153c5be30307c6f9f"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","95bb4f2786789abd5502a92dac15acba"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","27905725a189c24c4cfbda9699864420"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","1bd27490cb3d71793e77d48d22bf5dd5"],["/inventory-system/index.html","a01ff4ba38ecc179b37359d429edf1a7"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","05ca1c5fb8bb4b62ceef86da153f64c9"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","f1a86e99fd67f71d57a221a0064cd760"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","57a78f543b2fd8e4cd557b46ffda176a"],["/link/index.html","c158f8b2487b9f1ae2c39dc0b3227eb5"],["/map-puzzle-system/index.html","26b57fb60e4ef3d4eb91fc3226dd35ff"],["/maple-effect/index.html","016dbe92bf0af857b76f299b6091890e"],["/memberships/index.html","0cec38a4c64b02854bb584390fb1a5ce"],["/new-year-event-2023/index.html","bba55872562f13d259df0f57b8b4c37e"],["/newsletter/index.html","95d91722bf0b75251ee62cb9f2563a99"],["/null/index.html","3443883abaae049d7b16a99278955632"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","5ca4c3afa852211537fec368bef972cc"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","570999ee4875f4a494ad574c49158a70"],["/original/index.html","67d7cbbf2ae288fcb73d3f6378deea5b"],["/page/2/index.html","5bd95029663c04668736fba5108932de"],["/page/3/index.html","daca00182c97f9f6afc244dc6c5490e0"],["/page/4/index.html","b10c88cb706be06fd49009b3956a8de8"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","8456fde2d766915ee77fc29221859345"],["/random.html","7f05c3f661715231b05924b2e7214948"],["/release-017/index.html","f27432c0b1387256f3d91d3397af216c"],["/renpy-basic/index.html","226a4ad9628a55aa81ce1fb4720451e7"],["/renpy-matrixcolor/index.html","1aa40c9963b0ddd652b940ae08e5f751"],["/renpy-overlay/index.html","385938f441f497c97680ea561a1741d4"],["/renpy-review/index.html","6d3df7be7aff93e9134442f12f57cb3e"],["/rpgmaker-assets-menu/index.html","f76c475f7e9cec4553c749da910711be"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","5eb85401e43a4f65c34bd2372390fa42"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","182af8ea05d1a5e2bac296a27489ea0d"],["/side-image/index.html","6e42dd60c3961af084a4a866fb0a4113"],["/snow-effect/index.html","85484e7973d98118aeccadafcbd24c20"],["/speaking-animation/index.html","b8f083e27769e02cc64417602573dea5"],["/splashscreen/index.html","d3ca03fb807b7f24002aedf8539f458e"],["/sw-register.js","77c7cadeba0550e8fcd52e14e5b42ef1"],["/tags/AI/index.html","5a94e4dc5cb9b37b4c750d6dec3a4d6b"],["/tags/Hexo-plugins/index.html","3daf9b1c928d30f338445a1fed2726f0"],["/tags/Itch-io/index.html","c896d98ad2f9f19fc8287bc8a78f731f"],["/tags/Light-VN/index.html","87572c8227cae562ef494d973167d786"],["/tags/Renpy/index.html","5f69795fecf6931471af3dae95cdd34e"],["/tags/TyranoBuilder/index.html","ded10ec7b2349f834d76b8b94a9de4b4"],["/tags/butterfly-beauty-diary/index.html","40d140a849d4ae9e8c94ba396e5d928e"],["/tags/commision/index.html","5383017f008a53d61d353cdb75073d18"],["/tags/custom-hexo-theme-butterfly/index.html","bfde8e60518a86e9beed13d6e680f4bf"],["/tags/custom-title/index.html","dc968b46512517da268327235f16cfdf"],["/tags/dialogue/index.html","3e0b703e1a034c835afe6dde46e843e6"],["/tags/effect/index.html","056ab264d5ad73a10d464f107ccb6899"],["/tags/event/index.html","93b965749ba19f9b0a8e40b2a05f478e"],["/tags/hosting-own-website/index.html","431f98d236176354510f6bf7dc081686"],["/tags/index.html","3a01fb729c9f200224799ed05ae62d49"],["/tags/light-vn-update/index.html","1f373cd6a97930c6c655cf21e4e6923e"],["/tags/nvl-maker/index.html","c48059c5a7410e75bf5d920c09e657ca"],["/tags/player-related/index.html","678d59c9abb4721a19d93b317c33fa70"],["/tags/pro-tutorial/index.html","2b2a55841d8e31b60258ad598a73b9f9"],["/tags/pro-tutorial/page/2/index.html","a660429cf94ab4006c763f00114c0e80"],["/tags/rpg-maker-custom-map/index.html","2e945f0c4432e2dd55e87a12ccd2d74e"],["/tags/screen/index.html","ebfebc2639f7328bba1d3b027cd91abc"],["/tags/special-function/index.html","133a7491e1dd975dd425c7935fcb4adb"],["/tags/ui-assets/index.html","4606b6505b9325af00675b4bd1cfa0de"],["/tags/update/index.html","a88fbe84d4e5993d4718f025ae0cb13f"],["/tags/upload-game/index.html","69cb3d41a688ed83d85994fae0e4d9f0"],["/tags/variable/index.html","58f43004aef9f98f27c358b31e91eb1c"],["/tags/visual-novel-maker/index.html","3b5ed7a3462c6a0579210ada533c1968"],["/test123/index.html","0d6d2e6206951dced79b48e49567ef47"],["/textbutton/index.html","7b6ad9695ebbd09aa9bc3caef1dfdfed"],["/to-do-tutorial/index.html","a0cc42514eb871550cdd8cbc04623f4d"],["/tools/index.html","fb751fe5083c5b0eee436616c71af683"],["/transfer-to-hexo/index.html","2d1ac83aca894a327ee10e2c1d648b8c"],["/tutorial-update-history/index.html","7768238e4800c967147c22e59def5df5"],["/tyrano-name/index.html","ae112c2144956edd72b5f291a38fa561"],["/tyranobuilder/index.html","cd7a5f74b49c95e4f3c1b91daeab6184"],["/undefined/index.html","aa6e3421612a40f0f2aed068116f3560"],["/update-20221211/index.html","1793e8faff056205ef4ff9cb9dca8cf2"],["/update-20221218/index.html","edac36b55a5445d0445506f1a97cb8a5"],["/upload-your-game-itch-io/index.html","7f1e981bb3351f3ae76e81a47f7c833a"],["/use-list/index.html","0b5a0981145f9a404a89c5f17e7e560d"],["/use-nvl-mode/index.html","75dea0f831aabe17403c93be160015eb"],["/useimage/index.html","584255756fd833dddba3183ba015c076"],["/variable/index.html","dc7c91f3d029b56274726790b51cc514"],["/vnmaker/index.html","ff9819dad7d65b3c3a2394d2d4f700ee"],["/weather-effect-tutorial/index.html","1b0382f715150d62cd2044123b858bfa"]];
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
