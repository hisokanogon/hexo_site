/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","b8b0ced718ea01ee5ca32ed3144690c5"],["/2player-battle-system/index.html","b255aa2d3751c835018916c6e0b36b1f"],["/404.html","5edf37b7e85885f8d67123add93d5563"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","7769d6f14a23e3f2e150515c3ee0b24b"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","5b314cce42133042abceea60cf5ebbca"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","6b9f53b104a9535f7d430db57c9bd42c"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","cf0fa9ed8623979b9b71d13f22912007"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/OpenChatAI-Renpy/index.html","daa7508839e2a9facaa6ed45fe6267da"],["/Transfer-To-Hexo/index.html","f67df2a5593cf5012bfc98cb16cc239d"],["/TyranoBuilder/index.html","aa97a0b90fab495f2b3cb5ffeea51686"],["/about/index.html","93ebe0f832d7699d5db6d1bf7a089a15"],["/all-discount/index.html","4d607351b17c59257eed82bbb5e05c91"],["/animated-title-main-menu/index.html","968f83dcaf26dff9b24b8c8390b16372"],["/archives/2022/05/index.html","54cd021ee4e28ade485265622dc29332"],["/archives/2022/06/index.html","4703ad8ec5b821f75374d4ef79e7e621"],["/archives/2022/08/index.html","80c525593cc291d2e8c822ed12e3d31c"],["/archives/2022/09/index.html","832e3bdad1b6659bc68015656bb9a321"],["/archives/2022/10/index.html","b959d83f69dfddd03c72c9a4b6aaea4c"],["/archives/2022/11/index.html","483302ff38379301914fba9a14c1be89"],["/archives/2022/12/index.html","5901ed7ea0dbf3a70c7bbcc417851620"],["/archives/2022/12/page/2/index.html","53d1351b684dc8cbf91f66f3b4cd2cfe"],["/archives/2022/index.html","ae25f4d48a40a0bf1e8c9fb9ed4524e7"],["/archives/2022/page/2/index.html","9ae434152e3bc374a764d314e43d9aec"],["/archives/2022/page/3/index.html","c7e6347a76b003f0abf1bdf68196e901"],["/archives/index.html","dba6ac43edeb11486d8a9162d0a838b8"],["/archives/page/2/index.html","ce4e2cb0577d92b17b3a54ab897c73b1"],["/archives/page/3/index.html","de23ce1ec1008f9910011607f5b1010a"],["/artitalk/index.html","8a56200e14c50abaf549b011b8bd30bf"],["/butterfly-plugins-faq/index.html","e7ad22c6beadfdd9e57da557473f8b40"],["/categories/Announcement公告/index.html","f216844f9da40ae7fc1bcd7e3a93d8c4"],["/categories/Hexo/index.html","2778bd98019f26bb2ef57e8d58b02e13"],["/categories/game-dev遊戲開發/index.html","ceac60c76f4141a0d6ec9d7711dc5711"],["/categories/game-dev遊戲開發/page/2/index.html","36631145059bd9eeab4dcf618c567c08"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","f8687eeb2cf6394a33973b6928a6fe84"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","20c78f3d57f7f46d484351534f31a8e4"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","a3163de4625ad13ebaa48f729a5912a3"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","1d9075942f2ed93882a0cbeb3999b0c6"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","7e2d942ed43a9bc8a8ae45dfb4d0880e"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","cb50a11dde98bad7f964975e2804caa2"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","037e7f263e30aa501bf718593eb8334b"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","1f5652abaf825597db3f829db020f7a3"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","a1d55928b0c7fec397ee3846ee1aade3"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","3f545f21328ad5ec272992248c8e6035"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","b50102dcee4511d16b1187033b618058"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","e7c72e571752f2093082f1678b650deb"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","b8983f05f1c5d3d3b1993517bc519533"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","84a8ff809ab1ef4ceeed975163d2487c"],["/categories/index.html","2c2359b721ed677eabcb23602df43dcb"],["/categories/更新update/index.html","b4b03ed9eeb37f4a6868f8ce700b42c4"],["/categories/資源/index.html","5e2598301d3642cfbd3931bb918aa8e4"],["/change-title-based-on-event/index.html","2501ee637cdf9b17a96b8b8b1936c944"],["/character-stats/index.html","c557f541c69374d139c88d3db4dd1b18"],["/chatbot/index.html","3bd3c935ed91b57dd29898b29a56c813"],["/comments/index.html","0abe18ea3cadaac6e553059803182ece"],["/create-button-anywhere/index.html","201985d3d5ffbb88ac25dbd0d0fbd47e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","693551abad6114f9dcf8f59bb9e1d711"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9c7d28afcf3045ae1804b375b4063624"],["/css/rightmenu.css","55fe7f8e17f246b0a66c19d388ad8855"],["/css/siz.css","dc123d18bb8e880c480e620a3bb1b0b9"],["/css/swiper.css","8e121208992270ae1b7ff7ab87f9ed8c"],["/css/swiperstyle.css","8723eabaabb72d984b670969fe723ccb"],["/css/var.css","b3cb6166a3c2762e30e8361ce8df3047"],["/ctc/index.html","cb5c15872a090418e3fa0cc4c5b6a3e9"],["/custom-gallery-cg-screen/index.html","85925f197a713d9bd8fe21b93323fba7"],["/custom-mouse/index.html","5423cb0d189fbc33665087239be78cd1"],["/custom-player/index.html","fb0c8b6a85090f63d39bcced549033fb"],["/custom-preferences-screen/index.html","85fdd5c674ad20ff25eebb00dc5680b7"],["/custom-say-screen/index.html","65bad97ff8b004c1499ea3adf133c703"],["/custom-title-screen/index.html","143e26e205a754e3bf6938f7f315f672"],["/dice-function/index.html","e5e3a77af2840dd5415779b9f38fe0bf"],["/friends/index.html","270623434e7d949bc11005ac9d49f96f"],["/gallery/index.html","496226dd80fa6625dac6b7ba3eda7984"],["/gallery/photo/bg/index.html","142988328282f4bc74da21dc8e8e87b7"],["/gallery/photo/gui/index.html","b05d0b76e0e3e5b195e567a567998f77"],["/gui-017/index.html","7639f4a3423efd641db0b68adfabb81d"],["/gui018/index.html","a8c422f53daccbe2b45843c11410bbb3"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","ebc219db151f4c45799d0e5dea2e6062"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a5332e55353194d7f1245e7af9bae611"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/images/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/images/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","fb378d0efcff0fede8ea571e413bfc67"],["/inventory-system/index.html","9ca6efcde736cf475c45b952cce47107"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","d84fe503f677823a81265d3cb6289a7a"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","916499d79885041c1632a6fca833f0cb"],["/link/index.html","58c9da96ef749164f3ec55041b380c4a"],["/map-puzzle-system/index.html","92cca9e5d33291f16c4626f9d3a65d3f"],["/maple-effect/index.html","a705d9adc7d494f94d26db0294924526"],["/memberships/index.html","84145bbcfc24513e867f92d4d17bd821"],["/messageboard/index.html","23e36361c218096c6321b8217cd6a5f9"],["/new-year-event-2023/index.html","22cbea33ae7df12c9a1c7d292c7615f5"],["/newsletter/index.html","11c9b41567b2e5ced23388a673253eaf"],["/null/index.html","95118c671404876dd295afb9463d98dd"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","5fcc9c921fd94fe1227867d78db988f9"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","551ab1543e6b02584fccd4e8b3996f0e"],["/othersite/index.html","0004754e50ce1a769410bf5e9eba8ea0"],["/page/2/index.html","4eae32be48e24a096879501b1384698d"],["/page/3/index.html","b1291abd3aa3c85c44260f5cf104a92f"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","e1a516b117ff182a81094bb1cf81bc9b"],["/release-017/index.html","10e07089cdf5692981f45c7d2f1f8263"],["/renpy-MatrixColor/index.html","969289212ccc51b3f207746ffda0f4ac"],["/renpy-basic/index.html","4242165c6e5adff615191fb4b351495d"],["/renpy-overlay/index.html","6a1529d1a6df2fd3a062d83a13c87348"],["/renpy-review/index.html","f13e92052fe213784c0533ae06a9184a"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","4b7d4a35b98bcf5001ae43ff4ca7a0ea"],["/rpgmaker-assets-menu/index.html","2af55152d85cc42a871e8c345318399a"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","32759e3d90fd3f1393ea12e0d3d33dae"],["/side-image/index.html","3a9781e43ce7450b350293c83e38b1ee"],["/snow-effect/index.html","4e3629239d2d1f413ff0ddf3dea44b37"],["/speaking-animation/index.html","7391cfedfb4b2f12ea3885906dae9aef"],["/sw-register.js","994c67702b1121641188dcc17f2dc1a6"],["/tags/2022-年-12-月/index.html","a4fba3d7beb35d0ec429b971e6c5312f"],["/tags/AI/index.html","94f8224c6bc2d3db69f362162b0bc74a"],["/tags/Hexo-插件/index.html","459773ad5b09700c3d99f892038c0385"],["/tags/Itch-io/index.html","0cc227e57a305ebacd2fe2044db59d70"],["/tags/Light-VN-更新update/index.html","69aa8760a0e1c294dfa7b0b2edeb4786"],["/tags/Light-VN/index.html","14b81f355c4161cd121c254478b6daad"],["/tags/NVL-Maker/index.html","9e0b65f09e8da12dc9f2e7a686f1e80a"],["/tags/Premium教學/index.html","a6915a208f07d551e3d7a9e386e3d1b8"],["/tags/Premium教學/page/2/index.html","ce229d63ee948d33aeab31a5b51117ef"],["/tags/RPG-Maker-地圖製作/index.html","6d255d8fc583c42fb3ab4c1d183717fd"],["/tags/Renpy/index.html","30cc3e1e61d607682975463ef09894f6"],["/tags/TyranoBuilder/index.html","a50d19ef354a10a3eb92512a674fc79c"],["/tags/UI素材/index.html","8f988da99affd8284e4bdb8efd696a14"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","b6bdf68c6ae50d359be2a5eae6293241"],["/tags/index.html","bb49884ec9b337ac48ff143b26f12cae"],["/tags/renpy-basic-Code/index.html","08a8cc387e3c122a265e64daf895c1fd"],["/tags/委託/index.html","e3b63fb4a818c1b0b1ef3f723bd1f08b"],["/tags/封面製作/index.html","3487e606c7911f37be59ffa6599acf52"],["/tags/對話/index.html","1b45906ee64c10a2041dd636c333e6c0"],["/tags/活動/index.html","404b9583d8484e5b78063cbfe3103acb"],["/tags/特效/index.html","562bfa3005c5091d3afb825e320de38e"],["/tags/特殊功能/index.html","0e70e319ada56bc97a5715514b8e26c8"],["/tags/畫面/index.html","3495b781e0fcc78e9c7031b8ab4db223"],["/tags/網站發布/index.html","b7c3e1f77c35864e4892e6a80a9d23b5"],["/tags/自架網站/index.html","aa714536523ba2f553d95f6017f04999"],["/tags/自訂-Hexo-主題-Butterfly/index.html","6b12a6967ee53da039ac3bd2f4fe702b"],["/tags/角色相關/index.html","6211d37a6ef41e8a655a00d32b5c8ad4"],["/tags/變量/index.html","d83107b83a6adfaf700531aee3e0a650"],["/tags/遊戲上架/index.html","f20d59ec4fdf48eacfc049c05b86ecfb"],["/test123/index.html","50ea53703bb553d27002c415931dd7bb"],["/textbutton/index.html","d7be4f7d8e4c43e8e7fca42e1c99ba3a"],["/to-do-tutorial/index.html","2185ce7df8b0706853b603f5653b4836"],["/tools/index.html","0d7c009226403a44260081b55a698fb6"],["/tutorial-update-history/index.html","bb258a21a194600019a96d7b1cb1662d"],["/tyrano-name/index.html","e900eac3a8a71e59657d6e1aabf5d46a"],["/undefined/index.html","1af0011e53458b3872625d063de57f30"],["/update-20221211/index.html","9366946337b04d056e7e796022e58113"],["/update-20221218/index.html","754478bb64eae423acaa93c184b4fe51"],["/update/index.html","900d28e545eca2245bee9d3df63531c2"],["/upload-your-game-itch-io/index.html","165cf420ba11895965c0d0817475153b"],["/use-list/index.html","c5e9c2574f8505bcb09b84369368718b"],["/use-nvl-Mode/index.html","f0c4660853cb8ef29a6f62de0f854617"],["/useimage/index.html","3eda7bf750f78f594a1b98bc753846c8"],["/variable/index.html","4926d7833e858d3e86da93412f5b846e"],["/vnmaker/index.html","20f8cd25291883a55ae6ab61bea04207"],["/weather-effect-tutorial/index.html","a14639358766149bc0fe8d5dcbd6dd58"]];
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
