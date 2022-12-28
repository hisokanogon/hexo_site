/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","d8323329eea133c545fb9926894d2dc7"],["/2player-battle-system/index.html","0cf3c4aa5a3f8028b3942cd7e651b656"],["/404.html","33f631460a3d347b12502dd021d15bda"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","52da05ee46ba5e95e9bcdf9b4ed03a6d"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","8a5275c5625e0937b3f5a61c9fdfa899"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","78c75d00ccfa52594fc410d21237a333"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","33995d800f10e9007d8e006ba6a77487"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/OpenChatAI-Renpy/index.html","8c7bd02af3822b25d1393b2c76533bc1"],["/Transfer-To-Hexo/index.html","f97f90b96b6f9e5dfd15697d433452a8"],["/TyranoBuilder/index.html","cf54d66d79a60dc23beab9a9f12ee192"],["/about/index.html","218ea058a948d94908d8610df047a93e"],["/all-discount/index.html","d8628a153174274b011652e5b1e0aea8"],["/animated-title-main-menu/index.html","23678bc810f21129236e65677d849285"],["/archives/2022/05/index.html","6bbd8505516fce00cd6f6282bd197034"],["/archives/2022/06/index.html","9f0d9be1715d23c9053e5cd8516235b8"],["/archives/2022/08/index.html","2ac69ec408c725d3eff30f0fb9c8c8c0"],["/archives/2022/09/index.html","be7e28403a78032ce794d5f041b517db"],["/archives/2022/10/index.html","33e9a64baf23d2c43a382f86d50dc498"],["/archives/2022/11/index.html","1c1b7ba4d39393aaeac6d055478857f8"],["/archives/2022/12/index.html","db6963df1cad1e1c8a1679e46225fdfa"],["/archives/2022/index.html","c4431145b2b4291042047fe0cc196474"],["/archives/2022/page/2/index.html","a62e3f3e6e51538c0bdb1d8cba37e751"],["/archives/2022/page/3/index.html","5440b80f3301060c3a746f17b05ffafc"],["/archives/index.html","6ef0f29157a2a97b3a2e8e02a522b17e"],["/archives/page/2/index.html","29a787549597bf877948fbdd067ace08"],["/archives/page/3/index.html","033076b93ac1c4ba093656a98d207798"],["/artitalk/index.html","a8126f72da09fd532eb566ecf8843df1"],["/butterfly-plugins-faq/index.html","12fb7b6133af2d6cfd93ddd7290220f5"],["/categories/Announcement公告/index.html","5aa9c0c066ccd341f0c890984ac92863"],["/categories/Hexo/index.html","017acc3ad4a1c4da8688bf27b5d05a1d"],["/categories/game-dev遊戲開發/index.html","9b7325e5584e2527544619f361079144"],["/categories/game-dev遊戲開發/page/2/index.html","afc5d6eeedbb51adfb435e7784c92848"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","8881c47cfcd22937c4ea4ee6fb62f677"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","f52569dc483ba28f2af44550b65c67ff"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","603ce18fb5ee5b9e434b19b6a2841cc4"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","2824d9ac76a1fa83a5d3bacf22a56999"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","ed3815028843efa886e3dae5de8691a6"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","a712eb077a565f6cdcadd330c026dd0e"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","eaf09439e59570507b190528b21d6f20"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","6450a30c146325c99084891b4dfd5b6b"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","2497b4879f43a9eb1a9646a1728dacae"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","9ccd343a88ed5ed14ab51cfe61ac7a6b"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","14cd7fdd1e098b965aebbd5cfaf1f2be"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","eab42ab01365a0f31734093480b68210"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","77ece449f7293479cadd997aff3b66fa"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","9ae0b86c142a64d0d16b2fb0f759b213"],["/categories/index.html","c251c33ce7512e21195bdb5f90fbfe1c"],["/categories/更新update/index.html","bbe36da10f5aa973cadc16f68302eaaa"],["/categories/資源/index.html","c8faffd191c9aa2c90991019b8dcfd88"],["/change-title-based-on-event/index.html","423a5c703be4ba9527e7973fcd7a4d0a"],["/character-stats/index.html","1d576b72f0367b9a54c5ab56e5509991"],["/chatbot/index.html","117b0484e8cd05d362b75074a1efd9d5"],["/comments/index.html","aeeddd946f17b4ccaa15ff2c7ab0d3b2"],["/create-button-anywhere/index.html","094bb478676ff866a97c97f60070c1fb"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","8aadb6d58685535e8fae175ce3ddd4f4"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","e3fe3305677a8950bc7be81f0df9649d"],["/css/rightmenu.css","57db67a95fadc18f093415bf66bee88e"],["/css/siz.css","c35fa71872149cea3348a3c36eefe38e"],["/css/swiper.css","2e7b5286f951a644e8547e06b584ca90"],["/css/var.css","50253bacdf94209590da438dd92373b7"],["/ctc/index.html","c0857d32aff61cb357d97d8543aa04c0"],["/custom-gallery-cg-screen/index.html","0354cec5095d6fe3880a11a9d06715d6"],["/custom-mouse/index.html","ed41d43895ec9b774ad4b75afd013e48"],["/custom-player/index.html","7d0e867623eb0ca6a3345c41351f92fe"],["/custom-preferences-screen/index.html","1940a25db1b71384f6a53386bdc4af8e"],["/custom-say-screen/index.html","875a4b7349cc8688bb602b05f6daf42a"],["/custom-title-screen/index.html","e3f0799835569ac5cd5b6fd1b0370808"],["/dice-function/index.html","8bdc0cab64b32c52e3e2a778bb3c6d86"],["/friends/index.html","c7492b7098485fa838eeedf9af5ba433"],["/gallery/index.html","b5473ba9b1787d1e6954d4d550df4249"],["/gallery/photo/bg/index.html","2717ea19e2a706f944d81058bc9444d9"],["/gallery/photo/gui/index.html","98ab285da5f356cc5bc2fb8b5441ae12"],["/gui-017/index.html","5899f13c4b99ac599aa75e3411136ebf"],["/gui018/index.html","30e5f89e34a7a54278959849d41eb6ba"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e4d301e5f74b2d47f8254483b45ee853"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a09672e29a0f44f6c57e0cc8c230a9da"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","72b5b5be78d159c7d1509179da69250b"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","667e76a1da1f6703ed31759bb12eedf4"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","13797b14cb8597667c8ab2f6aa05ba6f"],["/link/index.html","e56b85c43bd32226ba0af970e77da2ba"],["/map-puzzle-system/index.html","617331b518ed00f86e2edd14d738e904"],["/maple-effect/index.html","cee5545ab1b58eceb90d29e22d65cb39"],["/messageboard/index.html","67b93ce6f1047bf3e3d1bb47d4115518"],["/new-year-event-2023/index.html","4e1ede90a516300dec7459022d1b3154"],["/newsletter/index.html","110ca722ad3460e9fd0d9e9369d12928"],["/null/index.html","4d30433b17ae71e3c89e040e63192ac5"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","399eb70a5089e662d0e343bd4a0e06a7"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","6bb3859c6a1abaa6c718d78e6c2799e2"],["/othersite/index.html","9310f2fdc138a8f4113945522050c565"],["/page/2/index.html","92313ac0ae2e056fd72d56120ac6c889"],["/page/3/index.html","4e85445ccdc3916ccad59146cd145237"],["/pricing/index.html","ae13df106ed56e74dcd86d4ceceb59c1"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","e1134f52275d5197d75b194acf9d3b84"],["/release-017/index.html","bca738a0b0e87b957edeb5e2ccefff36"],["/renpy-MatrixColor/index.html","e0586d1410f8e55ea0ac8cf7e12204f7"],["/renpy-basic/index.html","74b96e72855d85200db54a1148983df2"],["/renpy-overlay/index.html","a8b1848a1c230719fe8c1edb03e86b5d"],["/renpy-review/index.html","61bfff5774004dcf04471befc92a7bfe"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","7376aefda96bea5dfae480050aa4245e"],["/rpgmaker-assets-menu/index.html","17c3c6dd8d68e026d35a5082eae31daa"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","d69a49dbda0973554fb3070f1cd22629"],["/service-worker.js","f7f240235ed59805d0e22e365fd1ac38"],["/side-image/index.html","7d691a116a75850aa32a8a0a2733b81d"],["/snow-effect/index.html","7f3051572b8daa0050c09712a401740e"],["/speaking-animation/index.html","cab6b6fc991ccc7f416a8f25f920cdde"],["/sw-register.js","ec8e15af536f27fce78ec37b3aebf771"],["/tags/2022-年-12-月/index.html","563438bd40e7e5f0d0b95ce66fd3d2f5"],["/tags/Hexo-插件/index.html","da40751ad41fd6b2d133d6f814282031"],["/tags/Itch-io/index.html","c3fc0abf2c69dcf169947bd95680c22e"],["/tags/Light-VN-更新update/index.html","a95c12eb31c9f6dcdc6aaef0f817389c"],["/tags/Light-VN/index.html","08e6cf9028abc408960fab198c598648"],["/tags/NVL-Maker/index.html","e2a703dfe725f94a3aa95466227cf4c4"],["/tags/Premium教學/index.html","07f788033ce1f889063724b67f7d6716"],["/tags/Premium教學/page/2/index.html","53a2c48f6160658d5599e0f776f82e39"],["/tags/RPG-Maker-地圖製作/index.html","94f09e4e94f716611193568613e049aa"],["/tags/Renpy-教學/index.html","ae6a3f1358d4fabdc4c956e1ebda83fc"],["/tags/Renpy/index.html","7810c50a676fc8b5b735054477fff011"],["/tags/TyranoBuilder/index.html","e038ef20ab6d977d2c53b98b5ec71a7f"],["/tags/UI素材/index.html","df28741f06026dfe9e25b4fc5438a4d4"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","48b1fdb2a6b6bb76dd9b7819389c4517"],["/tags/index.html","0c45784322d13ee1bb1a5e0bf3213a13"],["/tags/renpy-basic-Code/index.html","edacfee4c35d8111d72b07382c944867"],["/tags/委託/index.html","b26728cc598544a9203fa9af074b83b5"],["/tags/封面製作/index.html","8271950838dced57141275ca3de994d6"],["/tags/對話/index.html","9e11d1b39fe855e6e964bc32d4ba589e"],["/tags/活動/index.html","d11beaaac07879a817a6ef6cd20f941d"],["/tags/特效/index.html","d5a13b6e66c5737f55effb173ba2685a"],["/tags/特殊功能/index.html","83acbd94806a03cbb950dccb76ac516d"],["/tags/畫面/index.html","e0183a17111666fde949c2b942fdaa28"],["/tags/網站發布/index.html","dcb5fa06311eab87bd32969c5a11c429"],["/tags/自架網站/index.html","ca6c96dc43063a002ff0d34d99729ede"],["/tags/自訂-Hexo-主題-Butterfly/index.html","e665e43c726bd577de1736bd4a380cb0"],["/tags/角色相關/index.html","cdb80f793939338314c85e6e0e9f1660"],["/tags/變量/index.html","8816be04fe59c9c61b971986fe2ff647"],["/tags/遊戲上架/index.html","df0d794216ea05597bd6e33c83a888e8"],["/test123/index.html","d37311044827ce55ea2b2c7e2fc24323"],["/textbutton/index.html","5b6c140798ceab857aefcc3e55e5879a"],["/to-do-tutorial/index.html","29e995874938f2789756945f75976572"],["/tools/index.html","f8a957b22776d7b805f1cd943b2a6b5e"],["/tutorial-update-history/index.html","117125e255501235ead05fa296cb7433"],["/tyrano-name/index.html","e973597122fcb4dc5c1a947923cd4fb5"],["/undefined/index.html","69ae2d6e31fd3111791aeaa367765f41"],["/update-20221211/index.html","5e371d32c1fd0840c4d18edf786a863e"],["/update-20221218/index.html","433c60b067ad81c12fdb613fbcab7b3a"],["/update/index.html","8af7a005724e4afb6209cdbf571ec029"],["/upload-your-game-itch-io/index.html","f5e22eb20206aaaa32c2aab677f6adb4"],["/use-list/index.html","bd7d9a2b39d5f0b51278317e5185d03d"],["/use-nvl-Mode/index.html","02df7907906014ce732f553249e7fda6"],["/useimage/index.html","8fbeafefb3da045b15d4379af673ffd4"],["/variable/index.html","13bcc7ccd41a2ebf0f88a87c17f21449"],["/vnmaker/index.html","21ffa1ff8077579a89c5848796cb00e5"],["/weather-effect-tutorial/index.html","323d138ae4feb3c21a496620eae755b2"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
