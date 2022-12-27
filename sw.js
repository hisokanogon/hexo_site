/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","cc10897fe08c75fed784873958744a46"],["/2player-battle-system/index.html","640ee636e42a11909da15abde8eb458d"],["/404.html","3f980d8a655ae08c7c52e1346062afb8"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","497860946e54b240ec22e89240c06a34"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","d8e46c8b1190197f7a25a77089d52212"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","f442cf7876a083e390fc81eaaa1075bd"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","ea0392a9f5c41a545ad3483adea826ec"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/Transfer-To-Hexo/index.html","fc9ddb28cf7890c258eea6759bc0130e"],["/TyranoBuilder/index.html","50a9fa9ccdb033f9da4b22e64e44aaea"],["/about/index.html","1264d14f2e67d600f5f9042cdf7673ea"],["/all-discount/index.html","59854683e024e84f19bcfddbea0bb7ff"],["/archives/2022/05/index.html","79abfa093374c097cbd6bac282d0593c"],["/archives/2022/06/index.html","6e410ef88058ac26c25144a65210ff79"],["/archives/2022/08/index.html","163f6b1209beeeec8ef55ab41f6f6a87"],["/archives/2022/09/index.html","57d2271f19e4e1b456ff7365b631f1fa"],["/archives/2022/10/index.html","25d3365694b0b68f8f1997939268ca5a"],["/archives/2022/11/index.html","4519afb7270c725cee26b75a93441e35"],["/archives/2022/12/index.html","e5a0d7d50adfd30a3911a4f462337298"],["/archives/2022/index.html","19e40f641afc6c1bf515c95926362c69"],["/archives/2022/page/2/index.html","63e867c29ded6c71012687353b97e180"],["/archives/2022/page/3/index.html","9765c9e55eb0e77af1250317ab429b7b"],["/archives/index.html","c2ec95cf33cfe8d7925f14f8de2f7bcc"],["/archives/page/2/index.html","ff399848f758467ea10a081f02950162"],["/archives/page/3/index.html","43d5c69855c402405aeafc89da32d603"],["/artitalk/index.html","d01ca0f99708e0898b9506175ac73845"],["/butterfly-plugins-faq/index.html","318f89bbb151c93702b35396fb15c59d"],["/categories/Announcement公告/index.html","44264ccfcbe64203ff3264ce4f35c58a"],["/categories/Hexo/index.html","c20b3ca0fefcf6881cd27be1a3e3b34d"],["/categories/game-dev遊戲開發/index.html","670403bfb6a49a3a7e78dc6b87d88aa5"],["/categories/game-dev遊戲開發/page/2/index.html","e476bb394f4794551b3f7498c08ee5d6"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","8865723d3503ce35d7536492ac3f7907"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","c7a622a0669e1b85e345b0f309df520a"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","ee245177413bcfd52d1db009a8950938"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","ded486994acf2bdb4dbadd36b2db07eb"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","e61f4e7897e5f570ea856c0bed302e2f"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","b1debc4ed996198d71cee6833559cac8"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","843d2be11c8934a25070db52f82ff07c"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","ecabea17568453ef1d8b048e1fa28bb7"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","5a75cbc3a8ad94da2c12be339a2effe3"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","a6086cbb126ddaad3174e62c6711afae"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","cf88b53398c8f1669d4cb7c1988f82fd"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","178e229a18f3e97285d8749fdcf32d0f"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","50ac38c41a90626dc2ad681fdebcd172"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","9e583df8c1291e72559e3167e173dc67"],["/categories/index.html","cac1c5d9e317b9bc5243d7b6b775a629"],["/categories/更新update/index.html","1d5f9e55445813191d4006949785d3b0"],["/categories/資源/index.html","05a8556cdabf236977addf3c0df3959c"],["/change-title-based-on-event/index.html","0842831f7d3817e58cde7afe059013b7"],["/character-stats/index.html","815ccff9d4c013118809a4917484e9ea"],["/chatbot/index.html","3c712a8c77ff107a224d684bf4e6e9f5"],["/comments/index.html","6f3b3dd354f6abbc5b1ec836cf0a0aae"],["/create-button-anywhere/index.html","cee0f242d9004bd946ee42d408faaeff"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","1a7411f470bc07a73f1f1432706f47f0"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","d7b015bfb0c5c077fef4d2594dff7515"],["/css/rightmenu.css","ffcbd3c16f7963c4864d2012a0cf6ba4"],["/css/siz.css","354c329c8d761bca753b1830e0f7d8d2"],["/css/swiper.css","b1f354cd630f89a10eec3ddd1208f0d8"],["/css/var.css","a4adcc578caed973323591034b267ebc"],["/ctc/index.html","d69c2d7fe9e402f7b689fd2788e72a49"],["/custom-gallery-cg-screen/index.html","a2a5dc52e037d2e8631346475039df12"],["/custom-mouse/index.html","2533f9a3a68385cd7b85306526cc23f3"],["/custom-player/index.html","790436fecc7caf83f121918a522fdd8c"],["/custom-preferences-screen/index.html","fbaa1a060912ea8c13afa1b19604a21e"],["/custom-say-screen/index.html","a5a184ffe4a616c8bf36f823dc9bf894"],["/custom-title-screen/index.html","be87693cca1a2ba0253a857474ad72a8"],["/dice-function/index.html","29700e53ea10babe235707c32e37dcd5"],["/friends/index.html","912649d5e6b74c1a66551ad71e33a856"],["/gallery/index.html","7b34b3fedf2764e446455bbf1755f032"],["/gallery/photo/bg/index.html","e87d0dc448d7bd5aacbec8dbfc436093"],["/gallery/photo/gui/index.html","4f2f69a5665fca394733967ed4e309cc"],["/gui-017/index.html","b3dcda50226f68bdaac9cb402cd7c597"],["/gui018/index.html","872db70735aff1cbbf423f483cf539f3"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","9f52a988487e7fa4ffd71666a64cc317"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","b17c207427f7cd719ac54a4fec50fdc8"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","418b1060a9e15f92c7bc450499412ac7"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","24e5f4581e9f05dccfccee2de875ee62"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","d300578843eb155f88cb9ef3edf05f7c"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","5253b2d89da19db1b70e12db3a19ae1e"],["/link/index.html","e9f9f207d39b0f5dda5321624da4b283"],["/map-puzzle-system/index.html","0a6078b06086f95aa7c941c89c2621e5"],["/maple-effect/index.html","13ec49b819fe7277b63235c0b34436e4"],["/messageboard/index.html","19c7567e9005df8aecebd59ff78759eb"],["/newsletter/index.html","a35407fc1d8f129488d68e0a534b0474"],["/null/index.html","e4688f75220e0354449103a5495006e8"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","68cfc84769172b5b092c2494771f6ebe"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","79e3a979d30ff1577ea339e61f8e4864"],["/othersite/index.html","27aca2a2c82055836df0b6e54a14d378"],["/page/2/index.html","5d0d7c9725f137126164eb811e4309ab"],["/page/3/index.html","bd5f6477cbe444d01911c21ab90f0a05"],["/pricing/index.html","60e8da264c9d8d5bd786fec6f6a8a967"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","c63f108f7264f56136dbfcf8a0d454d7"],["/release-017/index.html","308d141fb6c38cddffe406e94905cbfe"],["/renpy-MatrixColor/index.html","35e9cfef0da65fb3c2b91f43d622a252"],["/renpy-basic/index.html","cd1973aedb3d8bae7e7a5b89f26f1b9f"],["/renpy-overlay/index.html","46296b60c7831b2365e5384c42e57489"],["/renpy-review/index.html","80d27551399191ba0479ab16e802cfa7"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","ebc54c1506416b3ebf81bf28198ed2f6"],["/rpgmaker-assets-menu/index.html","cb35eef40a4873086376d6d2f4a29d53"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","49fd76054842091b538a0d94d7ed3569"],["/service-worker.js","f97b08f4af6a1967f8a98370cb3c32f7"],["/side-image/index.html","70048aebd570923fd3faa771a22558cf"],["/snow-effect/index.html","903a467af84eb51fef58682dd07e9b3c"],["/speaking-animation/index.html","efed1a6f6e1eb47f63621332ba519806"],["/sw-register.js","841760af370adfd6459b6f6f92b69b10"],["/tags/2022-年-12-月/index.html","a04ecd496d0e88eb8f4437ac20edc337"],["/tags/Hexo-插件/index.html","9a427cf815c132e6cb312f69f6afc3ce"],["/tags/Hexo-頁面-Page/index.html","a31012af18932e1380de916c24cf1d9e"],["/tags/Itch-io/index.html","fcb547c01a2eb0dccd32c4c9f67fada1"],["/tags/Light-VN-更新update/index.html","37f8f9e4a0854dff57b4705daf6d6aaa"],["/tags/Light-VN/index.html","3adece424f23fde8e4b08452d55b0c9e"],["/tags/NVL-Maker/index.html","b791c476f701fe3df60060b3010b71aa"],["/tags/Premium教學/index.html","4b476b09eaf2428d2afe5f10d89fff60"],["/tags/Premium教學/page/2/index.html","f3a6c3ab81ab3f0f10adff47b6d12a44"],["/tags/RPG-Maker-地圖製作/index.html","715daa05359669cd82aba1d50e4f8f29"],["/tags/Renpy-教學/index.html","0d08125ca11b0c2f355e28919c46be37"],["/tags/Renpy/index.html","b1185c4ce1708553f6c621999d4f4aab"],["/tags/TyranoBuilder/index.html","eaad083b72cb0f4f7349b7bae4b42eaa"],["/tags/UI素材/index.html","64c3a7df8800b9e6651818660ae33c74"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","c261be849eb82fbca59a63f2d69196a7"],["/tags/index.html","0391da36e230a691c5c2d0650df8454d"],["/tags/renpy-basic-Code/index.html","48fa58503492bc3acba9f336705b84c6"],["/tags/委託/index.html","c9e7c3f9e131324b803612488094452e"],["/tags/封面製作/index.html","e3e865671df1aaa9413eebea66ec493d"],["/tags/對話/index.html","3fa984cc9d7412b4c6958d93f9ebee29"],["/tags/特效/index.html","a60b55f0132b6b83d9a99c9c8f040484"],["/tags/特殊功能/index.html","ec1d93b1223bfab053b7f57b8b9deeb3"],["/tags/畫面/index.html","70db1dd323b0146241571bda911aaf70"],["/tags/網站發布/index.html","75ac403293fc46e290d3bcec51eaaaaa"],["/tags/自架網站/index.html","e4d9a505c0dfe80a3af702bd4bbf2cb1"],["/tags/自訂-Hexo-主題-Butterfly/index.html","bb89ea1f698f5551a18e03f951c43407"],["/tags/角色相關/index.html","14bfeda82ea3f438953be309bc64a749"],["/tags/變量/index.html","2d653e5c573ba970508e485c6befa20e"],["/tags/遊戲上架/index.html","c8508b8e9e653a1bfbf49c10e1bf8204"],["/test123/index.html","f892bf5d41aab6913c0f077796af13f5"],["/textbutton/index.html","82168f085904143451bf4d743988f8b4"],["/to-do-tutorial/index.html","c7568d648e78081b733da8e2ff55bb6f"],["/tools/index.html","2a3f2c575bf7dbb3901055b644526596"],["/tutorial-update-history/index.html","ac14232352e1ef7356b4784a76508de6"],["/tyrano-name/index.html","cbcd47b8997343de21788bb855bda3ab"],["/undefined/index.html","13d0aac62b96bb6ea55638fbf2f407ee"],["/update-20221211/index.html","dc62ee5b4ff80184782e02750f0e56f5"],["/update-20221218/index.html","10c8c03fdd9fc5aaba607fa686b1c39a"],["/update/index.html","fa2ff3957765d42d08d2366ab714e236"],["/upload-your-game-itch-io/index.html","72ed38d3ba1f96ba2d3d2602a7f78a0a"],["/use-list/index.html","13a9989a8ae48f72209ef81c7d3892d1"],["/use-nvl-Mode/index.html","d6e851562713299d84beed9735c99e79"],["/useimage/index.html","fd62e6ffee498cbd2013436149d68404"],["/variable/index.html","525698ef470efa14e7bfc0a15b3e27d3"],["/vnmaker/index.html","7e125a486a0c1149eaf3cd954c19bd59"],["/weather-effect-tutorial/index.html","cf50c6fe539b8a235f50d185dfaa08ab"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
