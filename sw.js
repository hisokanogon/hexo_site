/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","9272ed700e054a73c216c6d9c178c018"],["/2player-battle-system/index.html","22453b8357d0e864e01ab5920341d07f"],["/404.html","dbfa8536bfcfd9776e99b838c539c131"],["/about/index.html","458ebebe8205ff93b22d5c7a13ded305"],["/acg-creator/index.html","4873ac687729b4fb5e0e6d42782cb2bd"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","6b9ad5a3ced85e67803615414e4b5adf"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","704f32de5eba218daa47167aa7398715"],["/animated-title-main-menu/index.html","b0b76973c00a41dc84a420af267486ad"],["/archives/2022/05/index.html","6dba92e91073fc71324e37b4c6c94ff4"],["/archives/2022/06/index.html","84809396add2da796bb27d16e1bbe0ef"],["/archives/2022/08/index.html","70e3754f0d35bd1aa7941c9d4e6a9f06"],["/archives/2022/09/index.html","47bdc7476aac5ab4114f3c491d1b9fd3"],["/archives/2022/10/index.html","cfccb1405e8db7df496f73c3ea3e0c92"],["/archives/2022/11/index.html","ac7395ce6f108a1bcf447bff959f7589"],["/archives/2022/12/index.html","b8295319a9e05177d31aa8928072903f"],["/archives/2022/12/page/2/index.html","7908a27e95e43d4be6ed6364d75056e4"],["/archives/2022/index.html","8b028c3dde822bc9b902966620243b7d"],["/archives/2022/page/2/index.html","dc0aef98e27a7f9c522fda53bd262e36"],["/archives/2022/page/3/index.html","7780402f4007c1909e581afda5b3ca18"],["/archives/2023/01/index.html","c40b7566d284a23f50f3623c03803f9b"],["/archives/2023/02/index.html","055bde7ce9a8cc7739b1d2b128f1d459"],["/archives/2023/03/index.html","ff288e529de94e43a37e654ae1ba8964"],["/archives/2023/04/index.html","cbada4f7b09bf0746a9160e73a37a7ea"],["/archives/2023/05/index.html","2c7dcdb56ab2b8f4470428d92e8d879d"],["/archives/2023/06/index.html","685db0ea0ff36b2b006358d41aa03dd4"],["/archives/2023/07/index.html","08d5b22469a3a8ac7bf83f195e53c5dc"],["/archives/2023/08/index.html","b3ca6d8f5886228f9b7b96143429b048"],["/archives/2023/09/index.html","0d908c43974b2563eea7b8b51d52a23c"],["/archives/2023/10/index.html","5eb00753f1e4f4709c51ff550235790f"],["/archives/2023/11/index.html","c5d4b614384b6c1d64ff7671c8a28cf4"],["/archives/2023/12/index.html","d40e18f3a55f8fbacd4a139b53f059f1"],["/archives/2023/index.html","2c70a4264b9e5edca97857865a569a3f"],["/archives/2023/page/2/index.html","8829f212264114586a7e5206654e493c"],["/archives/2023/page/3/index.html","4c78f06710e1e0368ef27857c03aceea"],["/archives/index.html","a2975b382263581673f6648658782302"],["/archives/page/2/index.html","5f42fd47aaf03b7f3c3d0071183d1a9b"],["/archives/page/3/index.html","9eb30fe0b0cbcd90d19843ea442acf20"],["/archives/page/4/index.html","d493918bf9b138e8979ed1229d90ba89"],["/archives/page/5/index.html","e79cb035e25f708393b1f2857046fbd5"],["/archives/page/6/index.html","6fe0b05c428bf3b1ae11daf0b5dfa1e5"],["/artitalk/index.html","7dea4c5fa7f82175643839b35baf5b90"],["/battle-beautiful/index.html","21b845c06dde845f5ec942a8e29b4faa"],["/blur-effect/index.html","dceb83335ea38bbbf5c45f0958bdc516"],["/butterfly-custom-tag/index.html","66c9cebff56080635585d320a76b3ab1"],["/butterfly-plugins-faq/index.html","017b545cd1a317c5f8356a0401461713"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","b42a7797968a99b485a388ab7a2964d1"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","496991e007c42da60f543f6d19040653"],["/categories/announcement/index.html","203dde8d598986d79781a8f1df2226e2"],["/categories/diary/index.html","91eb6a2569185c2c561d63893ad62975"],["/categories/game-dev/game-engine/acg-creator/index.html","a40aa658e137d4e5bafa911fb14da377"],["/categories/game-dev/game-engine/index.html","00491c4088798c435ce7b0df8603bfbe"],["/categories/game-dev/game-engine/lightvn/index.html","2b7dfd3d3236a514ee145ceac31084f1"],["/categories/game-dev/game-engine/nvl-maker/index.html","8c39a95b41de9ca7c4c05d69807e987d"],["/categories/game-dev/game-engine/page/2/index.html","df817cb7aed82761bfd933c0a959cbbc"],["/categories/game-dev/game-engine/page/3/index.html","afa01fa760f04eb3571076b917d40d92"],["/categories/game-dev/game-engine/page/4/index.html","d06edff3e8d92e490d29df2f40750121"],["/categories/game-dev/game-engine/renpy/index.html","14f7e4a7e46102f5d9560ebba3d434c6"],["/categories/game-dev/game-engine/renpy/page/2/index.html","dd6f278f960bc13685cf85cc85bc2204"],["/categories/game-dev/game-engine/renpy/page/3/index.html","a8b2d67198a63fc44354783c7d9cda5d"],["/categories/game-dev/game-engine/renpy/page/4/index.html","500b7107d9a1e6bc2cd6bbe6e89e80da"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","e467a5d5c4232e99f45644594252f2fb"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","745066904afcda00d6441919f8cdba11"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","0773bd9cf7a493922818ed88127e3f11"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","cd12bd9485df4dafcd0acb4eb01d4de2"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","0b2379633bfcb5c1930239baf6207cac"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","4487372a285460a32f5e8cd8fc3c04b3"],["/categories/game-dev/game-engine/rpgmaker/index.html","7d40f73ed6718b6da5fcfdc1401101a0"],["/categories/game-dev/game-engine/suika2/index.html","cdaabfcf593233e6ed219c33e82c1547"],["/categories/game-dev/game-engine/tyranobuilder/index.html","51610f86dc42f9663c961cf1edcef006"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","860ae197c1944c197a13831122d808e5"],["/categories/game-dev/game-engine/webgal/index.html","68a722ac35c0d49c99c27d3a074ac680"],["/categories/game-dev/index.html","3fa0a1c622af177c6308d26dadfd1c0b"],["/categories/game-dev/page/2/index.html","7235d85b92d5fdd5a2715aa4832c46a9"],["/categories/game-dev/page/3/index.html","2557706cfa20f608e7e058cf432de260"],["/categories/game-dev/page/4/index.html","be24f27caa7786cc61fa8399f4d8113a"],["/categories/hexo/index.html","f1a4a18ae26f5e1da07d31422aee88fd"],["/categories/index.html","dc3a2bfae52b119c86e457f5cd8a116c"],["/categories/material/index.html","e4d33d152530c999cc05d3178d69a508"],["/categories/update/index.html","31742a1b970701dfca6784b5d3644ebf"],["/change-according-to-real-time/index.html","b8e33ce7e1d809f9819cfd2df4946f88"],["/change-character-info/index.html","fe60094c7a89904c2ef69098e57c6e98"],["/change-title-after-first-time-viewing/index.html","5665c863c93c34abc058ab311c83acd6"],["/change-title-based-on-event/index.html","edc3024cd97ab700e8865a4bb5cc2b2d"],["/character-interaction/index.html","64cbe2379aa461493cd10cb9aea5fbb2"],["/character-stats/index.html","513113600a37ba3e117674c0f816f731"],["/chatbot/index.html","8c37fd0ebe8c67060c259b1617fc5abf"],["/choice-time/index.html","5b5cfbeb0ad95fbf332185bbcb93641c"],["/comments/index.html","b43c06990ea7fe0b690bcbef4a0ecd53"],["/commission-info/index.html","d928937f9595c3778fc5820e8947da5f"],["/create-button-anywhere/index.html","fb445373e453ef5aa29d694fcb192679"],["/css/eurkon.css","52116b09ba437cd72c2439a2d749bf86"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","8401b5a0a1b6a357e07bd3ddaf7c1c33"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","121a05218baedb14084c1b6373bba818"],["/css/rightmenu.css","6d09cb41bf8097cbf92fef252e99fb84"],["/css/siz.css","e47d2e1570e22ae0f3c9d37993dde000"],["/css/swiper.css","a24e0a3f76d66545dcc51addcf32df4e"],["/css/swiperstyle.css","e71b3ad3c3f31d5f76af947586bc00a7"],["/css/var.css","25f859ccf2b804b8e35ba651f529110e"],["/ctc/index.html","780db9975fd6f2f6c13e2f575e5bf4e2"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","3708a272c9b60f091273369898f987e3"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","873cc6048d06e3689434976af32c8ee9"],["/custom-launcher/index.html","3c5147057aa6366b78fae45ab020fb36"],["/custom-loading-screen/index.html","d93245bcb6e346afc7a257333e2f8b23"],["/custom-mouse/index.html","de4848b143f35d9c7f4d8b87e88e8ca8"],["/custom-music-room-screen/index.html","a1d40995e86ad17c0a726e28ec2c951a"],["/custom-music-room-screen2/index.html","0b8575d66ab37d564835e32c893840e2"],["/custom-nvl/index.html","a32d60dc96cb89cd1cb4bb03bcc434fc"],["/custom-player/index.html","9273e98f468b320c2f16b85e0253d361"],["/custom-preferences-screen/index.html","f6d82ce3554650866cb011e045361b38"],["/custom-say-screen/index.html","d630e70fa8348c33f5a2f89325413673"],["/custom-title-screen/index.html","38eba9bc3c8e70d4ed6222191970a069"],["/define-npcs/index.html","31b8fe4f08f3c20ac34396d0be379a28"],["/dice-function/index.html","6179b9fe4df38e77a3ca26eaf6cf0d6c"],["/disclaimer/index.html","9fcb062e189f37d47da33f81e0fc8489"],["/display-immediately-all-dialogues/index.html","f13a9353b06784d088dbeb06498f70f0"],["/display-real-time/index.html","fe464a05bb473929bfc00c72dbb8681b"],["/enter-name-screen/index.html","aab8b552b94c67e4139005f93aa4f4af"],["/export-game/index.html","c6f355cd3c13c8196175f8fdc027b306"],["/faq/index.html","4329027d710d26abb081299f574d97f4"],["/friends/index.html","d8ca57908f15d5b7db304afdb319d18b"],["/gallery-template-assets/index.html","0252883f567fa62370dac8051c0bff05"],["/gallery/index.html","1d143e0967bbdf7c7844f26c6e7b78c6"],["/gallery/photo/bg/index.html","23f826fb96c1f99a91ec5e97d2279613"],["/gallery/photo/gui/index.html","7c14eb47d2eae95a9ea4902423e0f699"],["/game-only-text/index.html","49da4f650278ac9200b13de3d88b89b5"],["/gui-017/index.html","245fc33bead253201cd13c186bfe4424"],["/gui-vertical-002/index.html","699782b5600229e7e52867446d0ba61a"],["/gui012/index.html","9ad205178665bee7057940e541bd1976"],["/gui018/index.html","f31bf704f249b81a04c618ea4a0ea08f"],["/gui019/index.html","8c6bfff41fda6826972db85819672620"],["/gui020/index.html","f95145339a57b3a98e78a284a856c954"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","0bc757bf2a382ff170e2cfbe25192fdd"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","3a69a1f2c1b869a6b7b93118475a0db3"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","8e75f24e985bfc69f22ee128620be8a3"],["/images-tip-function/index.html","7af094dda203cbb7157099e973cfe395"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","be81a135765dd533e8e0bf14b2081486"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","6981f0eb342cd25c2ada156dd692f19c"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","02aee81e06485ff33f3552c3069d63ed"],["/items-sprites-effect/index.html","d05f1b77a911207756bb3a76ffbffb62"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","2d324cfb2686dd7e9239237725a67242"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","b715e5c2a85bd67fde22bf5d21fb40da"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","8b2f8bcdebd197ab0fa47d21c295471d"],["/link/index.html","389ef5f650358f961a693c5190b16170"],["/make-butterfly-beautiful4/index.html","3bd039a1f84feabce071fbb2da751ff8"],["/map-puzzle-system/index.html","4a2892b2e6717529585f21de53739f4a"],["/maple-effect/index.html","3f3886e9f96f820004f7a286f9d698db"],["/memberships-2/index.html","fd8244da528151ff48c2f99ce9d9d1ce"],["/memberships/index.html","6377d4260345cd2bb9c908e381983702"],["/multiple-language/index.html","d6168991a35f070760d62de48c5c3842"],["/name-input-assets/index.html","fb851103b0d9e34f0297f432dece1075"],["/new-year-event-2023/index.html","ca39c7ebe799664b8da04cc384dfc115"],["/newsletter/index.html","5ed6b7e5061cc7f592ab99ea7f4a1a45"],["/nsfw-limited/index.html","84fe0376371006da299556e1740edfd2"],["/null/index.html","d96c3df38277ad495ad231c0a9d46dd1"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","7f6ae7d4bb23e55ade25df7c2b91689c"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","641eabd70ff2855a645d78427114f346"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","3ce76be0e0738b88681ad5317051d704"],["/original/index.html","0eaf7e15ba04ecc6dd3370173a332819"],["/page/2/index.html","54b23ce87f724bcd8123ae5120215a3c"],["/page/3/index.html","0a1f59e0d5223f83f356dde87542441d"],["/page/4/index.html","b2d2b31b20990837e05b77a3a0a58de3"],["/page/5/index.html","48d6fddfd1129e09df264046e7423b21"],["/page/6/index.html","b6adb98b9ded49e1e2275665918b3b74"],["/point-pop-up-assets/index.html","73b09512b80bd84ad7bc584320c9a30b"],["/pop-point/index.html","7845d302e5d4d641068e3f893056fc50"],["/privacy-policy/index.html","524992e204562ffc815ede3fd3cc3141"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","b5eaf0fb38bab4800cd4a8d617f49fbd"],["/random-number/index.html","1026307bc4cbc664be5a611f4e525fd7"],["/random.html","58ad56032f7f8ec0d99d903efcf63901"],["/release-017/index.html","8c2401150647beab0e371b177e1eccad"],["/renpy-basic/index.html","1b71823bfe17e172f522538cb9877dac"],["/renpy-crash-glitch-effect/index.html","05c04a56c5c322ffbd1531890e2ffd43"],["/renpy-matrixcolor/index.html","2af2bde81812e71dc01cd49a518b5013"],["/renpy-overlay/index.html","59d00c72a0b7e60be9ada51b7b41602c"],["/renpy-review/index.html","3650ebacda06242ab71f92a65b74a455"],["/renpy-typing-effect/index.html","a807f4eefabd9adabf9c7d5e4cda962c"],["/rpgmaker-assets-menu/index.html","2e560747deb090dd53f6d858375f7ce7"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","96a8f3e8c9aad8743a64ccb4a4013200"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","cf4fe0d19e7a32e3e06b42365b9f088b"],["/sakura-tree-background/index.html","f06a831c5760aa260364b636d9e86d25"],["/selected-button-style/index.html","5ffd7b81aada06b41cdb8d8c5735305c"],["/show-variable/index.html","06c7d26a322f3171237c3cb952664263"],["/side-image/index.html","d64b27f5bc13c334987979cd987a8bf4"],["/snow-effect/index.html","6ba460c124f0db28819f51321c994fc5"],["/speaking-animation/index.html","54cedb7a6c6935e0da498caaf508347f"],["/splashscreen/index.html","2a5624b23c24878284345596b8be5fa4"],["/suika2/index.html","42b3b4cf822d468420b6b1b4addeb6e6"],["/sw-register.js","b761a4a4c326f9cca15c05c4a76091bf"],["/tags/Hexo-plugins/index.html","e52d3abb84a1ad5846fab74a22064972"],["/tags/Light-VN/index.html","6cce47b0f9d2b341fdad58033cff999b"],["/tags/acg-creator/index.html","4dffd54055427f66f956ea830e63306f"],["/tags/ai/index.html","e09b3207194090da4da503eec2bfc679"],["/tags/butterfly-beauty-diary/index.html","b3079dcecaa93ce9c1344675e11b1d45"],["/tags/custom-hexo-theme-butterfly/index.html","3e988eba954170be970fa8a8b44e8931"],["/tags/custom-renpy-title/index.html","8038cae27f73a1833baf045724bf6bf9"],["/tags/dialogue/index.html","fd71a21abf78c1e9a422954db2a7e4ce"],["/tags/effect/index.html","535a8c68d34b352e1856a76d1a39fb62"],["/tags/event/index.html","ff40f44ba2e72a3132657b0f24c3cecd"],["/tags/hosting-own-website/index.html","6dd3e017318ede6801ae92a66edcb9bd"],["/tags/index.html","5686cbb4f8db4444405741dbc1fa3280"],["/tags/itch-io/index.html","5c2d4c881c2132ceafcb4ed18a90441f"],["/tags/light-vn-update/index.html","4d00a2343e6fd47f1dbd5558f4a218e7"],["/tags/nvl-maker/index.html","724530fd701fdd39c9bb1d787bb8f11e"],["/tags/player-related/index.html","33746031a40c4cbad2500aa05a8cec6f"],["/tags/pro-tutorial/index.html","80a24eef84f7eda679336386692ced25"],["/tags/pro-tutorial/page/2/index.html","a2db61e52de52efc2555e8ebd0d79f21"],["/tags/pro-tutorial/page/3/index.html","5cb65ca38bfd377586ce9544ac35d8cb"],["/tags/renpy/index.html","c4ea890a4142fbb42d6e2bef2782a585"],["/tags/rpg-maker-custom-map/index.html","23bf8d94239bf589ab4e58863923bc0b"],["/tags/screen/index.html","a1a7057008213d5bdef6a93ba6fcfbbc"],["/tags/special-function/index.html","67c174234f86bcfa6438ffdbb58da268"],["/tags/suika2/index.html","631fcd02299d6bf136194810b5832890"],["/tags/tyranobuilder/index.html","30bcb21cce16ac9f660385c99bba8bab"],["/tags/ui-assets/index.html","7b76c4956ea10c737d2b8af0ef068eec"],["/tags/update/index.html","9a22222d58d4908e2b691c6c06b5e76a"],["/tags/upload-game/index.html","223f1911ed747d76089ed4303e097885"],["/tags/variable/index.html","3e80dc9fd74c420d234c4461bafb8dc1"],["/tags/visual-novel-maker/index.html","954f324f5754cc1118f727b46a050044"],["/tags/webgal/index.html","47fac42618efe9baea33a77eb52f9ea2"],["/tags/封面製作/index.html","2283693019c8046096963ca8d424bbbc"],["/tags/背景素材/index.html","7ba6d730b68f81105cc60792f7539ff3"],["/tags/隨機功能/index.html","629df4176415c50fcaee7685253211ff"],["/test123/index.html","ff0d84fb5cd96545296bd45ff368a462"],["/textbutton/index.html","73408ac7b3f620aea90dfe0ec71f5673"],["/to-do-tutorial/index.html","2ea84eed42de13800f69ae864c2048a3"],["/tools/index.html","b214654cde8ac86aab6a0c7649695d2b"],["/tooltip-function/index.html","e1156dfa11ef68aa6c4043cb6935c063"],["/transfer-to-hexo/index.html","0fd990d4c8f149b16f75a5e7351343b8"],["/tutorial-update-history/index.html","2769723adde3bb85d20a3d3297ea3426"],["/tyrano-name/index.html","1b6ae7d31894b032b596aa781f9eaf89"],["/tyranobuilder/index.html","e8cea1d9e5515c1c73e8c37522d6bc15"],["/undefined/index.html","c82d09e8a8a91680854b49a300479b6d"],["/update-20221211/index.html","ebe705240859ffa333f1cb0ca1cc5b96"],["/update-20221218/index.html","3e04b1250f2d15f094c3fb663635a072"],["/upload-your-game-itch-io/index.html","f4d29288363b165e1414869227f6513a"],["/use-list/index.html","09eddc9dd950b02b37f48fd013f003ae"],["/use-nvl-mode/index.html","4897f28f60d0905f9fb91e1352bc9797"],["/useimage/index.html","8c7a01a912a2d09bf2e52121b6f3378e"],["/variable-change-image/index.html","5f9d894b916a3be12b620bd9f24921e4"],["/variable/index.html","92a9acabf051c5544d356fbfa916045a"],["/vibration-function/index.html","3836a8339b35fca77808bd414c288411"],["/vnmaker/index.html","7c00eb01755d818b07119cc3154ada53"],["/weather-effect-tutorial/index.html","6953f999616d8d904fb6132e3e12ad25"],["/webgal/index.html","d789a9799fb60b9301da16482875acb0"]];
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
