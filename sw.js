/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","f8b4edb769d96f1fc6eda535cf3fd54a"],["/2player-battle-system/index.html","a8469e8c4d8c6c77f559ce7ed88ab9a6"],["/404.html","ab418536eb47464a23d868aa58d33b3f"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","bdf742d62c3fb0bcdc783e7a73b39b2d"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","417e15edbe47e7e586d4c6d8e4d1e4a2"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","68d8a01c596583d3278f84429108ca6e"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","2ae9dead20cdaa5dfb4663dc7289325c"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/OpenChatAI-Renpy/index.html","0fb38c864c6b0d4885c926cb7d1f3a4e"],["/Transfer-To-Hexo/index.html","2504627a6cdfa13da0589484c9f3ea19"],["/TyranoBuilder/index.html","316cd0e62a30bb66ede6502d2f872423"],["/about/index.html","149a49c849e72cef50a09ab0f4ada232"],["/all-discount/index.html","1155477792bd810eb10ce1b3614ec02a"],["/animated-title-main-menu/index.html","3b0826c76b40c627dbebd37f28573762"],["/archives/2022/05/index.html","7c300944ed07202c08e7401556e96c4e"],["/archives/2022/06/index.html","1156477007b23252eecf2fc0ee19e5fc"],["/archives/2022/08/index.html","a0896949ab8062033fd6e53e726db629"],["/archives/2022/09/index.html","be3c3cd92a93a48b282f462ee0ffd097"],["/archives/2022/10/index.html","b3ecd62de5ac805ddb42878d36652eea"],["/archives/2022/11/index.html","6219ac8c545a951b6276a3e9fc05dfd6"],["/archives/2022/12/index.html","b1e9d605a8f8f0bb1adf7f19df8ca830"],["/archives/2022/12/page/2/index.html","97eeb8e5813087b81df350a2380c6e28"],["/archives/2022/index.html","69bf6a82791ba40c2bda74a815f20934"],["/archives/2022/page/2/index.html","ee22516622c174ce9ffadf9bd72b1730"],["/archives/2022/page/3/index.html","cd18d0f8eaeb66680a6e1ca8827d73f6"],["/archives/index.html","4a62ea11cccd929dcdee7513765a05a9"],["/archives/page/2/index.html","116052a37f4c19ef8eea7dbafd8a6140"],["/archives/page/3/index.html","7c97a1e34ad6ac76a02924c79791a4cf"],["/artitalk/index.html","b12ded447bbcd2789ca7e05aec10e7b3"],["/butterfly-plugins-faq/index.html","ec2a3d7b0990415f474711d77ac5ac4a"],["/categories/Announcement公告/index.html","8d0de39839addb6d4ac55114ee387ea3"],["/categories/Hexo/index.html","cfa436c50b9fcd4b1ae384d3aa578e1b"],["/categories/game-dev遊戲開發/index.html","387869f70e20f352261a90b81a5cccc3"],["/categories/game-dev遊戲開發/page/2/index.html","b0c548b4de2efc2f30d2ea99959d45cb"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","647fad954e220a36bc29f7f8f912798b"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","b5dc26faa96033ef731b14397f840207"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","f6f76ca5c318d8bf88a415435c5a2f70"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","7e135ba445c702c590e9fe68aeb84946"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","82e8fab5479f62e5bfe8bab118bb4589"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","ba1d9e9f43e708f32ccbd8e492ad0fc4"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","224bbafa54a4f7f88fcf2f2cd8c1cb29"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","1454883caa69bdc0777ec61bd9285e24"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","c5f5a856eb8229bd575d3aab08e80a6c"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","a48b937cfa155f7197c0f5ddcebc2dbb"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","303f9609190f7e6406c17ddb7b1f3c93"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","8f438b81f182707ee549790066b12d3d"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","506517e65e2f4d6b310fbc754b1826c8"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","463b4c834be376fdc305858758b4e234"],["/categories/index.html","8f2a3f1543cee013a1852961d81125c3"],["/categories/更新update/index.html","9a80ae7bbb0b299191a3ecd909b0aa94"],["/categories/資源/index.html","70a8e0a2b1608c911ab0fcf0507ae964"],["/change-title-based-on-event/index.html","4a759907f2a912399abc5445e6f9374f"],["/character-stats/index.html","fe620ed8a8581322efe7314c1fc8a9fc"],["/chatbot/index.html","2ed33f4e53806c04209e88caa71f18f4"],["/comments/index.html","36ec0fd9d25acab82f048bde46584ccf"],["/create-button-anywhere/index.html","536b8dfde74bd8f0a8dfd563c1cb99be"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","c582eec9f2bce39d51b703b363e1e3c1"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","d1f712f6efdfe2403d4ff44b8db5c635"],["/css/rightmenu.css","6a2642061b6c4a66e80a9cf8566a9f1e"],["/css/siz.css","4f958ee09bb7d9e3b3126536bab32b62"],["/css/swiper.css","b9aebb9038815763c7815478cffed46e"],["/css/swiperstyle.css","1d9a7214ae463b66dd0efca8106e3cd7"],["/css/var.css","e94b63f5502816a1e64d2ae8033333fb"],["/ctc/index.html","86078e9031d21dfa73569ffb0358068d"],["/custom-gallery-cg-screen/index.html","da505c30786e885e834a5dedf8ec25b4"],["/custom-mouse/index.html","32de9678f7cfab333ae4a9c0d6e6b381"],["/custom-player/index.html","e5d03eec0decdc9f3e676564062f4cbd"],["/custom-preferences-screen/index.html","70d4c9bf5c559689ea900ac87de3b89a"],["/custom-say-screen/index.html","e998ff20352185f8bd600c0643e6499d"],["/custom-title-screen/index.html","91391ddbabf6eac325539061bfb6c44f"],["/dice-function/index.html","fae426e5f621158d35b2a57c2241a88d"],["/friends/index.html","0ff37e602c9791388eea4078a68c06c0"],["/gallery/index.html","6576edda3a7318973946e78e9304092a"],["/gallery/photo/bg/index.html","93db8df5062636587bc3e322b11b7318"],["/gallery/photo/gui/index.html","993616b8e56da3110d092f48bf3c170b"],["/gui-017/index.html","d92614f5be7be11697504940a00ba67b"],["/gui018/index.html","ce68efe2cf376eac3d716c3626aae6b9"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","ccbf5f71a6603ca6ab89d132ee5cb601"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","5d6a372831d80b164ceafec3561c2168"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","9715714fc8b252ca06e72f9f49b19ff7"],["/inventory-system/index.html","8a2ba8b516d26ea0cfa1caf50ac9e44d"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","6e2fb4d4416d2ce89b78e9932fd2638a"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","06ff5622d5706b7d99ecf58dac1ee0b0"],["/link/index.html","3dc72242c024a59b2d5f570179038c48"],["/map-puzzle-system/index.html","a1a1993171f852c521cc1da18d03d5b0"],["/maple-effect/index.html","49623ef4c8428c93a2e3445a06e0e6ff"],["/memberships/index.html","b4a494ba5d1eeac841abd85135d60861"],["/messageboard/index.html","1db2c05ed1d3d1e093ac80c5fc81f262"],["/new-year-event-2023/index.html","246ea028f98489848f84539b8b660f29"],["/newsletter/index.html","ca3ef3c903af828103d5909e6c07dc7c"],["/null/index.html","8188b0771909b6adc8e0cfdf92bddf19"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","edfeebf75b17140bf71fe57c78bf4294"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","9460a02ede216eb75c00659764dd7699"],["/othersite/index.html","b5dfc0b32d4f609a06592e7899dda66d"],["/page/2/index.html","20118961cf0cd1b5727f115da2c7250b"],["/page/3/index.html","54e1bc820c0bbc737b4581f5c0652cb8"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","7ad014abe865b4875c1cf9e4d3d1683a"],["/release-017/index.html","057059b94aee424fde6c2a009eb4af5f"],["/renpy-MatrixColor/index.html","b6c7767844d0554ad495763c994d49eb"],["/renpy-basic/index.html","5184a420ac0af8fda9e6d8f69e2132b8"],["/renpy-overlay/index.html","36a1ce26e5102ce4e7f9fc49c5513da8"],["/renpy-review/index.html","fee4e2977460fda0d34d8c266359b127"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","777bdb5f96672a905ea43a7cfd8d1a88"],["/rpgmaker-assets-menu/index.html","b9ed02b2b870819ce5d7d7f174841cb0"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","2303064c2ba5eeea6c22568dd08b88fe"],["/side-image/index.html","2c4141287c949db36f39272dbe9f4463"],["/snow-effect/index.html","2199329a4c74e870326386939436b9ce"],["/speaking-animation/index.html","e4b0af92e414e33e9d25a79a1957e16e"],["/sw-register.js","69458d8ca7f06be0aeb61706506de61f"],["/tags/2022-年-12-月/index.html","ac6f94828fcd8bcbf733bf09775dc501"],["/tags/AI/index.html","2726be437e2960f73185cd49e819ec0f"],["/tags/Hexo-插件/index.html","d043b7ab952a952814cb8655a71d8d5e"],["/tags/Itch-io/index.html","12f632d3c7a31dec5f151c32b6d03728"],["/tags/Light-VN-更新update/index.html","d682b7d067c6bc4bf6af1f309016b941"],["/tags/Light-VN/index.html","87d4fc39e3f52eb9b4cb992cd3add84d"],["/tags/NVL-Maker/index.html","d8ede7a1b45107c259f9d7cf4e80e2af"],["/tags/Premium教學/index.html","2829cb0bbff582effcb7b10dcc3618f1"],["/tags/Premium教學/page/2/index.html","0066ed2b029e3751712ba202f193d417"],["/tags/RPG-Maker-地圖製作/index.html","54218a26424e57928f5c2d627dab07bd"],["/tags/Renpy/index.html","9fa0dd254766c98cdb97b4a19a40c28b"],["/tags/TyranoBuilder/index.html","7ace72d4acd2b0afa48b56ccd1e4d703"],["/tags/UI素材/index.html","f8045c4604ad538880fdb95cee4e5d17"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","3f6a1f0a8b50b9efebe5508fc91eccac"],["/tags/index.html","8374912f584cee8c13ed1ea76bd20b27"],["/tags/renpy-basic-Code/index.html","2669f517f9751e82cddd8d3e5613b440"],["/tags/委託/index.html","f8586aeacdcd7e234c462f86eea394c0"],["/tags/封面製作/index.html","ef5c55705284a916be21be264ac0bb87"],["/tags/對話/index.html","106342e90c7c1a36f85542d6dc413db3"],["/tags/活動/index.html","aebe3f352696b3ae4d7fd8a6488e9ceb"],["/tags/特效/index.html","ae2894638747072a20d4f229e38a066a"],["/tags/特殊功能/index.html","bd858de487a206a6de0eed07d66e79ca"],["/tags/畫面/index.html","ae05ebf0822d5fd9acf12a5d7384160c"],["/tags/網站發布/index.html","99b779c854c9fe3d26ab7e093deba0f2"],["/tags/自架網站/index.html","003cc9232afe1a1b3418a68f3484ec0e"],["/tags/自訂-Hexo-主題-Butterfly/index.html","3a0ecc30d7ed06aee98df1c30d8b0241"],["/tags/角色相關/index.html","edd3a1dc0f84c05d571e9aff78dda1d5"],["/tags/變量/index.html","f94e3b804cbf74872e3f1e9111b83fb7"],["/tags/遊戲上架/index.html","7f3da9417b8f934d500fb08f30d50d1d"],["/test123/index.html","c059c5cc0c602fc7a0ed491bdd45599f"],["/textbutton/index.html","0b7213b2c02e5d29009b12e14cc7b4bb"],["/to-do-tutorial/index.html","a0bddb31c637891207b98b6514ce3ca0"],["/tools/index.html","63a94b9b312c4875a4f860da67a2617a"],["/tutorial-update-history/index.html","ef84272a21e8c77eca2fbddceecb0a8e"],["/tyrano-name/index.html","7265e56b9e1100dd0c058e56ce448e47"],["/undefined/index.html","43880e82a9b83e9619f0db8fc504a7ee"],["/update-20221211/index.html","b24f41812feab2ffbfadab87e8fa2079"],["/update-20221218/index.html","660be1068ea6624cfa22a83258e34b40"],["/update/index.html","d8eef1ba7f35b8161fa5f0b4e4b3a5be"],["/upload-your-game-itch-io/index.html","b8ce4e920e29715e175dd7db489e8ad5"],["/use-list/index.html","2517c6a7b9ccc1cfa492f064926a76c7"],["/use-nvl-Mode/index.html","52f1a59cdb6a7eea1009892b5e9585ca"],["/useimage/index.html","ee8c386b768b34c9f6f0297c05cf4dbb"],["/variable/index.html","0a3a673445f375db237176379bccd187"],["/vnmaker/index.html","08bb7c7e4172ea18fca5c46dc2cb7ab3"],["/weather-effect-tutorial/index.html","78de62d7b698ec74a4a50ac402f14f1a"]];
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
