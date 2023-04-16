/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","18a21dbf252e045702f00a36d5b769a7"],["/2player-battle-system/index.html","f00714bbdfa526bcd77cc30f5f6f97f1"],["/404.html","6e8000d5d632e64260238ddfd1460533"],["/about/index.html","ec4c97e71a3e8531dac93d4b5921b4de"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","e81731e8120d65705014372993045e3e"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","203f8f01a44e7384ce51b547967857e4"],["/animated-title-main-menu/index.html","d41eada761efc96262d994ea96e1c525"],["/archives/2022/05/index.html","cf2b68b08bfccf357aa41c698958e6df"],["/archives/2022/06/index.html","0cc4dd1416245561095bedd8b2229207"],["/archives/2022/08/index.html","0f55820024c89bc987c9b0fae7fa2333"],["/archives/2022/09/index.html","0efc8d74f68c8aa4ac6d295d8487c627"],["/archives/2022/10/index.html","4ad50381ccf16af21e7cf51c5f175bd7"],["/archives/2022/11/index.html","7c680436cd5cd174bceb68a9097e5fc7"],["/archives/2022/12/index.html","b989e3ff2c6e37dd521983088069c933"],["/archives/2022/12/page/2/index.html","b740f4f4831eff90c9813f92c98ee60a"],["/archives/2022/index.html","fbf81657316c4136870fc95446b84697"],["/archives/2022/page/2/index.html","9bff705d881d2983192816e72c9e7f2e"],["/archives/2022/page/3/index.html","761e2d08b38143394084159e478917bd"],["/archives/2023/01/index.html","354768124b47bfab4eb6da25ce308e34"],["/archives/2023/02/index.html","f9a5a97daacac37e49ec2391dc6672bd"],["/archives/2023/03/index.html","a3a0e6bd4607c4368295738520c57152"],["/archives/2023/04/index.html","7670212b71e55249b31b120d3f6bf2d6"],["/archives/2023/index.html","6771379b4c0440c04534c369304d8d8d"],["/archives/2023/page/2/index.html","ab1a03d241d5d4e99f4deeb408084cb7"],["/archives/index.html","127cc9f7c3ea06c877d07335a1264767"],["/archives/page/2/index.html","07727ee6fb3f2bc44f15ec3f12cd390a"],["/archives/page/3/index.html","d76cc41e6f8bc0557f5b5f76ed39ed90"],["/archives/page/4/index.html","d2570c5f9b1222dce231aab0ca48c14c"],["/archives/page/5/index.html","a777f25b3877f7e65e168d0b5b873457"],["/artitalk/index.html","4e4a69ddf24c8da546adc277c246a5d7"],["/battle-beautiful/index.html","38c0525673514a283843428d35f82dba"],["/blur-effect/index.html","653ebb761ec2f38140581f7f502517e1"],["/butterfly-custom-tag/index.html","ab1c95eee9af02a30dd5c21391959ced"],["/butterfly-plugins-faq/index.html","53000c945d2c5af5fd335b7c7b523b7a"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","8b0ce6b152f05a58b59b633758c7470e"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","39d97d546c8340e100ee26fe6e057f80"],["/categories/announcement/index.html","81cda205fbfcdf900dd47ef613b22f25"],["/categories/diary/index.html","9eeefab813a877f05218dc3bd4a17983"],["/categories/game-dev/game-engine/index.html","51eae86203cd8aa75417dc2f4d0dc0e4"],["/categories/game-dev/game-engine/lightvn/index.html","b91bd207145c793a40bcbe0b1cb23a5a"],["/categories/game-dev/game-engine/nvl-maker/index.html","991958c54fa70c94fcb0819514ebe6e6"],["/categories/game-dev/game-engine/page/2/index.html","476ed6f0a7d26c4c5cf0f7788b6c60c2"],["/categories/game-dev/game-engine/page/3/index.html","7b5a9f15c0d48190713c7def06b00ad9"],["/categories/game-dev/game-engine/renpy/index.html","d45e36af4b19e2740682c6464b08905d"],["/categories/game-dev/game-engine/renpy/page/2/index.html","37969990a42d1dcb236618ed122369f7"],["/categories/game-dev/game-engine/renpy/page/3/index.html","2aefbd7fa95a93917fc6c75f0722bd1a"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","be929366b2537eab4b7bcbfcfeb36205"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","ba6ac9d15314c5fd6bab196a561d8990"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","6c85d51eb2d307ae2e6b086452ee7d3b"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","0c1656759835761380622283d22cb2fc"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","1746ef34674ec76f0c7a36c2dfe6ee1c"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","0e282c3774c45f35471d33cc6b56b321"],["/categories/game-dev/game-engine/rpgmaker/index.html","d4e944a6e6709be8128ed8f2a98f2d9d"],["/categories/game-dev/game-engine/tyranobuilder/index.html","a10fa96953c549120053ab5cce454d82"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","70ecb0ee878c0256cdaf39626b5e619e"],["/categories/game-dev/index.html","8423176ae825807177c89497ec71c9eb"],["/categories/game-dev/page/2/index.html","8530f32319f0c439ee630672615ee57e"],["/categories/game-dev/page/3/index.html","736704f8d89e6256853c5b62a3c62a21"],["/categories/hexo/index.html","d52c020715e5ddcb0a2d0d5bb27ffa91"],["/categories/index.html","6695a2c6e2cdd1bd59722380c41cedbe"],["/categories/material/index.html","044c344e7c4c773dc06dcb9196675960"],["/categories/update/index.html","55cf61b6f3f37fdf99436019c5673566"],["/change-according-to-real-time/index.html","0935a1b22c00e329babd85287a0a8e48"],["/change-title-after-first-time-viewing/index.html","2cebabfaad41a1702cee5556d19b9e40"],["/change-title-based-on-event/index.html","64f760f2dbd4a9ad2ab80cc416fc170a"],["/character-stats/index.html","a05280cc334862da7841abe2ff54a4a0"],["/chatbot/index.html","b3cf6019932c41ccfeebc5c8d15ac614"],["/comments/index.html","0838647ae9b76c25b8b4a5d94615f178"],["/create-button-anywhere/index.html","44b13cfa1b5d71f39225002e69b6102c"],["/css/eurkon.css","91baee92255cb7475dfb8cc166ce4e61"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c8f629f2fb051bc1349e5da9a6cf08b2"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","09ed36e570a84f2305a0e843c32e4ec3"],["/css/rightmenu.css","9976ed5c1fa3f018aa61aad2ec0c5c08"],["/css/siz.css","6d35376f376cce79bfbe368923643717"],["/css/swiper.css","ff60f485e4eb7808a622f22f5d640dd3"],["/css/swiperstyle.css","17e966f6bdc95d56e23468e8b70041a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ctc/index.html","004fcb78ef55efa736828d43b53b5fef"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","37c01cbcbb57af8b4df61a4535c6b9f1"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","a256e1b9200e2027493ffe34bff7a706"],["/custom-loading-screen/index.html","9fc8e24313668586195f8bb2f0e96140"],["/custom-mouse/index.html","e5c8ddb2b9953e06e5848beea1e63b8d"],["/custom-music-room-screen/index.html","576db681ef219836789f9c2ab173141e"],["/custom-music-room-screen2/index.html","24a25787968eb6cfbc69bf983a827df2"],["/custom-player/index.html","6e7e40704ef35ad175ef41e68eff087b"],["/custom-preferences-screen/index.html","5b059f31baaed006d7402375e3ad6d39"],["/custom-say-screen/index.html","c47c1c1967bfcd7b1f28558b9f843c05"],["/custom-title-screen/index.html","8449a3a7a51d69b79361f20fb3036a04"],["/define-npcs/index.html","bf4301858d5e40ede51175e159e58f8d"],["/dice-function/index.html","31d60709f207dde449d4737f03b8ce6d"],["/disclaimer/index.html","1b5c8cffa5f30eacad7f5b80c5e30ee4"],["/friends/index.html","b11d25c5e331dd2591dd89e5fb377d5e"],["/gallery/index.html","b3473de9ff60809a40e2bf3683ac5abe"],["/gallery/photo/bg/index.html","cd589175293a8c4f0a71d0ee57802080"],["/gallery/photo/gui/index.html","e20d10ac63e453f052a7668ec9b8c244"],["/game-only-text/index.html","f914c6b30c5a604488874e13c3a51376"],["/gui-017/index.html","6b491b550257ae8dfd805c9743c80d9a"],["/gui-vertical-002/index.html","bcc3f138ffdd283327279ab2c76cfc4c"],["/gui012/index.html","c77953387e0958cde39c1a735233b9dc"],["/gui018/index.html","8a1d37b5e05f58d4a8e1d39fd651146c"],["/gui019/index.html","56db0059a17d9113176afda6a97680af"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","1d308406a8a1004fb310fbb3f0fec608"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","141c637519be8ce0226039e70c1e4c99"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","b5d71203ff595c50beabc02e42e04b8a"],["/images-tip-function/index.html","ef9f2db9ec86be60dc13ada79d3693d1"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","c4140dec8190dc92a4d1d1c64679164b"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","53ee9232a9fbe05cce3679c075f081ae"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","01632f1b1b138180ae0fa3515a518b1a"],["/items-sprites-effect/index.html","83b64a6f0862b2f0927e226ac00fc401"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","c440303e119c977dbad74453ca8348db"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","7fa8eea200507baa90e75de511581764"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","930332a88f0eeeb57c60abeda0e0f003"],["/link/index.html","6cc6346eb879eea43b2b972cdadded6b"],["/make-butterfly-beautiful4/index.html","c32eae667d2d24ff9eff5a550f5bb570"],["/map-puzzle-system/index.html","b1265c30412fde59a0f56530f1b885d3"],["/maple-effect/index.html","1d66824618e1473cd317b87fd2976d51"],["/memberships-2/index.html","61ba46993a93323878a3182a65320b52"],["/memberships/index.html","d7619d7766266adaa4a4f4e52504ab46"],["/multiple-language/index.html","9d377314e2e8571b754f7b727cf7a7c6"],["/new-year-event-2023/index.html","74af32aa745617cc7a34d272a45919e8"],["/newsletter/index.html","32961e3088d80f77ef7e260dbbfc47da"],["/null/index.html","03e2ed9299696f58cc2caee95ec04f05"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","e459a32d3816c1a5065987a1f8a98e6f"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","fe713c52e9b596b3a9da40431793f9c3"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","e2c25f166292bf22b26160f4f0b44a61"],["/original/index.html","74577d0a95295ce8cd22f14bdde1c909"],["/page/2/index.html","03b680606b45ef579260966320faea04"],["/page/3/index.html","17b5a6132bbe3cee1d99283adc8a985c"],["/page/4/index.html","e1e384b0b1265320577a6ed2b2d8f454"],["/page/5/index.html","b1989f4a9caf326a2f8145ebd6a632b5"],["/privacy-policy/index.html","d72a869d551a78f65dc3793baf2f3140"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","84f8b11f44cd6a25f625114d29f36f46"],["/random-number/index.html","24119c7aaacf068852c349fd5dce949f"],["/random.html","89259fde8571edb2048c20c05953c27d"],["/release-017/index.html","d9bd41fff90266c64fa3b16ad2a8c2d4"],["/renpy-basic/index.html","dccd421125c89ea0a210b5b8cc91bbbb"],["/renpy-crash-glitch-effect/index.html","2b19edc10263f35ed64a3af8637ba620"],["/renpy-matrixcolor/index.html","e5494770855d3baf80d76031dd9c81a3"],["/renpy-overlay/index.html","712190417760202d9ada0ca0ce622464"],["/renpy-review/index.html","532ec5d87ff87e7b0536188390f741ab"],["/renpy-typing-effect/index.html","d1574a7de9c5430c3687ab3f027a02bf"],["/rpgmaker-assets-menu/index.html","c753b02c9ac45225b5daa71aab8fbf21"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","84f7a58b6aa0d53800e00bed358b301e"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","5abc78b0fe512a379ca9bf550f3e11a3"],["/sakura-tree-background/index.html","a76d5b8ba7b6ef6557a02c4e9cadde77"],["/service-worker.js","f2192fa7f0c091a6bd8d88b45019cc76"],["/side-image/index.html","371b20417899a26d5844e9ff83540eda"],["/snow-effect/index.html","dc656035b967f954fb627e190974b1ce"],["/speaking-animation/index.html","719c41e3bdc7989d05073015a74605d1"],["/splashscreen/index.html","877d83aca4efc7980acf310bb4b68738"],["/sw-register.js","ed1a09d6ea0500cc82ff3b8171523063"],["/tags/Hexo-plugins/index.html","cafe10de2dc6dd7316dbc2399047bb21"],["/tags/Light-VN/index.html","0d1b605604f69a134ce0a3b9dda74e5c"],["/tags/ai/index.html","62ff4ddf68a107df3fd3b86a7c468832"],["/tags/butterfly-beauty-diary/index.html","51354b97b068efc53bad625780a8a081"],["/tags/commision/index.html","0154823e482555a3a1ac7f5cef97d9fb"],["/tags/custom-hexo-theme-butterfly/index.html","5487253aed5851e168a27e0b7d3508df"],["/tags/custom-renpy-title/index.html","6e2dddb74fcd56e0158c80851fc84c9a"],["/tags/dialogue/index.html","aed27ca0242aa3d3815cafc4f24a4e59"],["/tags/effect/index.html","443f34a9e873f9cebe21aab1ee9d7d00"],["/tags/event/index.html","a4311c658a66acacc156a6b8516fc4e6"],["/tags/hosting-own-website/index.html","91eaa4f6e539c0f30305d7d72c0826f6"],["/tags/index.html","37218144cc7cd5710518855abd1c24ec"],["/tags/itch-io/index.html","0d93e6e5121cc794703df0ea398d0f32"],["/tags/light-vn-update/index.html","6c2931e8c2d7ac9808fa675c9798365e"],["/tags/nvl-maker/index.html","c7d3ef9173ffe42ce41d35cc5b68f1a6"],["/tags/player-related/index.html","2ec3e25519fa59856268b54a967e0ac3"],["/tags/pro-tutorial/index.html","0797912c5e522b5b6a53ac82afc1fa7c"],["/tags/pro-tutorial/page/2/index.html","3300cbd1d0058ea68142dc9f9c4b648a"],["/tags/pro-tutorial/page/3/index.html","d4c26b32ec797ed20d4ced4f615e3604"],["/tags/renpy/index.html","2960a37e430b5db627124866c923a595"],["/tags/rpg-maker-custom-map/index.html","fdc088505d96cfd0bf65373bad37cca8"],["/tags/screen/index.html","963090464f2a6ee5019bcab3dd6f748c"],["/tags/special-function/index.html","566a40072b4fb5251d1ee073d88f2a22"],["/tags/tyranobuilder/index.html","048190cc18107cde08d5b831841c7b62"],["/tags/ui-assets/index.html","364d86daab28629694a49ca112084bce"],["/tags/update/index.html","dfeac1eafd8fe17a7bfef11ca7daa97a"],["/tags/upload-game/index.html","b82d6b0c5cb3e0d1dfedfd39aec16943"],["/tags/variable/index.html","b57296cdca35787ca1b7662901ead259"],["/tags/visual-novel-maker/index.html","d96ba2bdc0dfa0b0d1a2cb7c47e1b44e"],["/tags/封面製作/index.html","3f1d579f5d79218546b351e039cae94a"],["/tags/背景素材/index.html","3a5bd052dbaa798139e0e6a2f12c4ec9"],["/tags/隨機功能/index.html","e8c8a4aec2e8d00b9fb2e3252e6be558"],["/test123/index.html","f3c18e12c95fffdbe63929b014c989dd"],["/textbutton/index.html","584af8409aacd5a98a777cdd60af63c6"],["/to-do-tutorial/index.html","d0cde361a04889bb450afe277adf1b0d"],["/tools/index.html","852d2dfb426efb69c7f32e600a3f4d84"],["/transfer-to-hexo/index.html","12c6917d46a6cf54e86ac839f0e85083"],["/tutorial-update-history/index.html","cd9eee8f8df3a73a555dfb64bc04a195"],["/tyrano-name/index.html","2356e608039b56a2e5811e7be0c0a3cd"],["/tyranobuilder/index.html","d9965eda31069aeceeece5468787129f"],["/undefined/index.html","d36dd8f0feecdc063c9f1778123176f1"],["/update-20221211/index.html","039ae144afcc68137c50c61f8969813e"],["/update-20221218/index.html","a5387282c6d65ea5b83975cc74bb7979"],["/upload-your-game-itch-io/index.html","2ef362364161ddcc8d895d4e9c1f0cf4"],["/use-list/index.html","846276cb003e31fe6974dc599b624ab1"],["/use-nvl-mode/index.html","1d483f5d03328b8652f42b65fd6f5b2c"],["/useimage/index.html","c177198d0a0990c59ca9dba181c4790c"],["/variable/index.html","d8b2d65a42415f6a4471cb16c414ea4e"],["/vnmaker/index.html","700383b20733bcb181f574ff50ff9675"],["/weather-effect-tutorial/index.html","a555b39ec6275b3358bfb707453609b9"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
