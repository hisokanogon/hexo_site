/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","10d3e9b84b4b3dd63834ce14bec5c586"],["/2player-battle-system/index.html","2c514182e2f6dc7874e3e08f230cadc2"],["/404.html","37dfff37353ed29878f83c57a07bf51e"],["/about/index.html","4c89035516961275e8885f43dd1fe349"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","b7aa9bb0fdafc155de3bf7d423f8ffbd"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","216661b1963164fc5aa4103bee229c46"],["/animated-title-main-menu/index.html","0551aa2f5df13c2f9c41c840b1345c83"],["/archives/2022/05/index.html","b0c60e63c36a2ac9a48b997b5a3d3699"],["/archives/2022/06/index.html","938bf225c9d395d133ec07a4507810c5"],["/archives/2022/08/index.html","05a4e2f85ba622e2ed0c384d4a37f1ff"],["/archives/2022/09/index.html","bca08d2987a3b7c4c0321fc0617d503f"],["/archives/2022/10/index.html","c1d4cb771a1aca8439889843a323b1ac"],["/archives/2022/11/index.html","5c21af1474b3c75328ad3dd9d4ba7e96"],["/archives/2022/12/index.html","82ecb53db3aa4de0aa82d6855f5f00e8"],["/archives/2022/12/page/2/index.html","5e0ec183b557d0e946b83c3197193e2a"],["/archives/2022/index.html","e0e96e1c53ab7d01b7246be21612ccac"],["/archives/2022/page/2/index.html","a2cf49c2596592c65c552bfc19f2d237"],["/archives/2022/page/3/index.html","71210e700332cdd84d15e5665a2a4ed6"],["/archives/2023/01/index.html","5f04d83ca6ea5e4bbbd7ea29b7768129"],["/archives/2023/02/index.html","b3853e8761de2a4a04c0119d2865f9ef"],["/archives/2023/index.html","275473807004b9f63be8513384d75dba"],["/archives/index.html","a00ec1305864528ed36670b61c3dcc3f"],["/archives/page/2/index.html","41bd60d92bc73daec10488cbdbb2f2f1"],["/archives/page/3/index.html","0153895e5bcb408d4158d4c80e0631c4"],["/archives/page/4/index.html","cb86cecf297839577d8438df709e15bc"],["/artitalk/index.html","5fcc82ea84707e259b41b74ff7a0d866"],["/butterfly-custom-tag/index.html","63ce020a1834ef4663fd246d66ae847f"],["/butterfly-plugins-faq/index.html","ea43a9e703f99da1b108cbcda196f3c1"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","43a28de128be3f8ffd0a14bcf1317c5e"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","d1f07ab4aefff09d7c6f336bf1057b20"],["/categories/announcement/index.html","ea2b6b715184620782adf8b9cd2c2a84"],["/categories/diary/index.html","093f746bfd48a615e3c9d10b5fed4d91"],["/categories/game-dev/game-engine/index.html","5431425e0ccdb9339534f04f941cefc0"],["/categories/game-dev/game-engine/lightvn/index.html","514e29e9bb892e8107625ff02c7a02ff"],["/categories/game-dev/game-engine/nvl-maker/index.html","dbd583ad1511bb9f17d9fe3d7f2ca232"],["/categories/game-dev/game-engine/page/2/index.html","a20eb840ec17942a689ee7446dea0eb6"],["/categories/game-dev/game-engine/page/3/index.html","56f9fa4863d9d46dad417769f26a2f37"],["/categories/game-dev/game-engine/renpy/index.html","24d8afcd4a207674f59158154fb804d0"],["/categories/game-dev/game-engine/renpy/page/2/index.html","195a949e482b72d99a9c46269a1c60c4"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","cc83e0ae3a988c62f83d83161a2197f0"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","0fb3776ee985406ab345145e2716a092"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","174a5b041c1606a05a5968b082ec82d9"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","bc761026c78edbecba3b562ccd350122"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","55f3f4414350842d9eb243c2f41dfcdc"],["/categories/game-dev/game-engine/rpgmaker/index.html","aa7769a2c08322b449fdb989deef5393"],["/categories/game-dev/game-engine/tyranobuilder/index.html","e7915ab4f9e65f6782fd23e1411e0b2e"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","4ae4eb21ac662e8fe4e80a47fee463a4"],["/categories/game-dev/index.html","254c4abc33c8139e520af06fe1a2a00c"],["/categories/game-dev/page/2/index.html","94a55330b7ee957c2cf52ee8b4e0e8a8"],["/categories/game-dev/page/3/index.html","d0a94225472038688b2f8a1f0adf952a"],["/categories/hexo/index.html","cec21f660ed031b9eaaf4ab0fd209b92"],["/categories/index.html","f530ea77a357a203dff07d0ff038c68a"],["/categories/material/index.html","13b62916f2247616e263633781522b2c"],["/categories/update/index.html","afeaedcd86386cb4be2f36673058120a"],["/change-time-according-to-real-time/index.html","ecfccc4733b93cb3334e721658c55e4a"],["/change-title-based-on-event/index.html","6d743d20d9d97ebab7c2bb2b79c4b74e"],["/character-stats/index.html","b95ce4eba1698204dee913dba2a3a5ba"],["/chatbot/index.html","ce0bf2dfaff03c9ab170d21c41b2e701"],["/comments/index.html","5a2cbfad0435935ac817b75f8e2032ff"],["/create-button-anywhere/index.html","9742ada62b21357a5360db19adfbe41f"],["/css/eurkon.css","b285766069a0a357c32029fe824b7209"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","9c6e8e599880d7a218bdd7b43147c774"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","a5ba8824aac16606dc9224fcac6b02ba"],["/css/rightmenu.css","96f78ab006685dc0de0f7c82314aa6d1"],["/css/siz.css","ccd5359595890069e91ec5b74a7dc300"],["/css/swiper.css","52e9f27437492becc96677d704fa75cd"],["/css/swiperstyle.css","4aa2a4d7ea0dd1da8ce1fa1ff654eda5"],["/css/var.css","2ba168662c6af7c24915d409638517e6"],["/ctc/index.html","5754bbe167274aed2b0af4c7ab98990c"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","40d5a88923388fecab67d1d70fad8ce7"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","ba38310df5b23d1441d3ac3ed770e660"],["/custom-loading-screen/index.html","10c28133ebc93f94d032b89d20f22cd0"],["/custom-mouse/index.html","5da0a571a8c786d5b68b210d4fedeea5"],["/custom-player/index.html","aabaaa4157c8fc13918d1c0422bad69f"],["/custom-preferences-screen/index.html","7343d86234749757ba8253ce79be42b7"],["/custom-say-screen/index.html","fe544020c133ea4011aec4fadba6dc24"],["/custom-title-screen/index.html","19e55f075c3855fedeb2e1c47bfaf74d"],["/dice-function/index.html","df4d846de44fb0e3e20bb77d8d110adc"],["/disclaimer/index.html","f5b155cbad8ab21d64633e3c15ba70a4"],["/friends/index.html","c1578ed99e6cbbc60071a7898751e40c"],["/gallery/index.html","c04d14815796c8444e53687a3fc4da9b"],["/gallery/photo/bg/index.html","92ea96fe31503bf41992d5b7c16a63c7"],["/gallery/photo/gui/index.html","f7787e9f88a1ad17fb395a2213ab821a"],["/game-only-text/index.html","b14b09b45836a4cfc58d164573060a7a"],["/gui-017/index.html","a9ed240bd268d6efc33e0b209f96be4a"],["/gui012/index.html","ed0bde77e604a925f206f667e9378a8b"],["/gui018/index.html","fc7c99e8a42bb7dfd3c5cd5bd5ab35b5"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","3625a5cc4d27ef91dc321f3de2003f67"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","5aa53eca34f4cb086704b34a00e3214d"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","c0b4f33103fc5f2840a383070ddc05e2"],["/images-tip-function/index.html","bf4e995580dab2df43833112bcdc8179"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","ebd57be868e0d6537fd9d698afae84f6"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","918f69b588b643a8b3e96a6cc030ec43"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","20bd7dbfeeff5d3bddd549456186b014"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","7c1b930d9c3568085f94745653ed7dfa"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","93ce8f3702123de1811ba32c65a928ca"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","5daabe733748a525757ae3a5cdb05a97"],["/link/index.html","9a4bb0e146ebe3933d17b4314d2d8078"],["/make-butterfly-beautiful4/index.html","51cd45b02f5822d45d230980229d576c"],["/map-puzzle-system/index.html","9bf673df1cdd14f183a3f621ff9c36ac"],["/maple-effect/index.html","ddcb7acf97190131fb649b9b0d6acfc7"],["/memberships-2/index.html","095beb479aadd207ddd719c7790eddea"],["/memberships/index.html","13050097b300fe0b8eb314d65b5af7ac"],["/multiple-language/index.html","c2d89f9bd6c35ef5ceef04073f75d24a"],["/new-year-event-2023/index.html","52cdf882bdccc434689982d9494cf084"],["/newsletter/index.html","849e0e88e9d0caaebc4ba3c7e82118c2"],["/null/index.html","afb954dac6e897265ca764df543c3113"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","75b4cab5b7310015888d12faa95c6879"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","5f8927ebae5ad4bed333098129e7dac5"],["/original/index.html","04e24a1324cdc562e5d46c9ee4119c20"],["/page/2/index.html","6f6d7cf31c4ca9cd2ff66437fb85c688"],["/page/3/index.html","655d9414ccce0e227f8f89f773f24dc2"],["/page/4/index.html","47b209c7d19b44b61e9d0aabfb894338"],["/privacy-policy/index.html","841550a2401102c14125f7ae352f1483"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","cd6f5fba19959ede8e9c041f26862438"],["/random-number/index.html","ade682421e0f2f6968f94dc64051e806"],["/random.html","2ae584d9d09640f5ea492f769583217a"],["/release-017/index.html","9a4ca73803cc6e55665a539106e9b4f7"],["/renpy-basic/index.html","26b6fe28a8cef091c30751321f227245"],["/renpy-matrixcolor/index.html","c2d6faa69e171b3125f4e8536a3ebae6"],["/renpy-overlay/index.html","10a8ead8dd4cf1cc97e7902f489bf3b0"],["/renpy-review/index.html","b2df222595b746a704070a44c7278740"],["/rpgmaker-assets-menu/index.html","ddbbb757e3b11631c5fb1f581d4805a9"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","99536f1b9ebdde07d874be36b091fc17"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","c657dd15cba4604fb7c5f426664af2b9"],["/service-worker.js","9363fc305c53ab935db657e8feb64965"],["/side-image/index.html","fcd1d25d3f6cd9dcdf9925a8a146d0ba"],["/snow-effect/index.html","64297eca51e67714029c83a4039187a7"],["/speaking-animation/index.html","aefa7b9236d5781e2388e9128f87c225"],["/splashscreen/index.html","d917c474c527b07ee13e6fc9e9a99bfa"],["/sw-register.js","9ad664227af9ef6cd330bf115d960a0b"],["/tags/Hexo-plugins/index.html","11bac33315bcb366e3ed8c0bb2b6f7d6"],["/tags/Light-VN/index.html","ffe24939d7c50ffaba1ceb294b116c8e"],["/tags/ai/index.html","7b0025e0e9ac43126f6fe093a10066af"],["/tags/butterfly-beauty-diary/index.html","3ee19d2989fef4961ef742354d1b0d60"],["/tags/commision/index.html","895455a7d7ab154e35a05cd4fe68eea7"],["/tags/custom-hexo-theme-butterfly/index.html","1c1857b153f9dfb48238735f4761345f"],["/tags/custom-title/index.html","c8d4affacbb3b80221e11b80ae39458f"],["/tags/dialogue/index.html","98fd1b81fe9063c8b296fdb6ce008bad"],["/tags/effect/index.html","1366dd585aef1216b58ddfa3d89e5b89"],["/tags/event/index.html","6db3e3d118082ab691b3b51c3bab1d1b"],["/tags/hosting-own-website/index.html","cf4b55a6741933f50f1c2c0828967dc4"],["/tags/index.html","67461b0f0acaf9e044c39c5146ae49a2"],["/tags/itch-io/index.html","a38836801fead40c732a5d05723d6b1a"],["/tags/light-vn-update/index.html","0cf262a912e133b736251d6d26e4b74f"],["/tags/nvl-maker/index.html","e93b194e3b34914e7a00c0ce00883fff"],["/tags/p-tutorial/index.html","f8bf835a92a59194ac3d9e427ef8ee74"],["/tags/player-related/index.html","c76a9630314f086fdf51a48283cfdae8"],["/tags/pro-tutorial/index.html","6476a0d451ff37e1deb6479ec8bd4d49"],["/tags/pro-tutorial/page/2/index.html","b01cd522fa6434b6b23c15bbe7e4f37c"],["/tags/renpy/index.html","fcfe7b0fb8afdaf0d0a06f9d7aa9ed2b"],["/tags/rpg-maker-custom-map/index.html","bb5005c9d6996849e6df0a84f63b95dd"],["/tags/screen/index.html","d2e71f3a2504158bd0a2850ca9b5ae2a"],["/tags/special-function/index.html","339919b0ab8c0876f4298eb525455092"],["/tags/tyranobuilder/index.html","046485cd8ff94a7b00a275c7a6d56031"],["/tags/ui-assets/index.html","8dcac0736782658e174442b1d70b1856"],["/tags/update/index.html","a51ba300c2a28d18dfdff1feae175619"],["/tags/upload-game/index.html","db476fc507a002054e1a8fd6daee8f82"],["/tags/variable/index.html","54cdf330dcd124805351264e74466d0c"],["/tags/visual-novel-maker/index.html","03b09012ebb83339c7c6f54c36a3821e"],["/tags/隨機功能/index.html","0c23ab3be91874003b9111c6d63c4558"],["/test123/index.html","caa779f9d383c62120404c3c60dde825"],["/textbutton/index.html","6180fd5919af9cd624762365d739845c"],["/to-do-tutorial/index.html","37b3ca9023295f1125b01d17beee6735"],["/tools/index.html","135ec91732b2a913da2f3e9d73585320"],["/transfer-to-hexo/index.html","b5acd8db16b1e52045d6f1d9150091e4"],["/tutorial-update-history/index.html","dd4a9f90c4611821c8b294f667f6c891"],["/tyrano-name/index.html","a0944be174cc821b0a5cfad09aa8107c"],["/tyranobuilder/index.html","19f9ede40f39f8b8c386fdfd093ec3d5"],["/undefined/index.html","264b6b792b07dd42863099df623269de"],["/update-20221211/index.html","f5a085efa5a1a56b477e2ba69d61ee08"],["/update-20221218/index.html","4701be369413a52012514b77b95ff569"],["/upload-your-game-itch-io/index.html","5381c2d8bc8a5d313766014c834d9bb5"],["/use-list/index.html","558ae4b7cdff552d8c54a3736b9300fd"],["/use-nvl-mode/index.html","61f5a7a3b1fdcc091a3e2ff44e4a9809"],["/useimage/index.html","a5b0d6effd8ad80db3a3a7a8eca380cf"],["/variable/index.html","d2fa0051a01977fb873943a61f0cfd67"],["/vnmaker/index.html","10f6d01b23311315e7558addf0486220"],["/weather-effect-tutorial/index.html","4924bf0fe5d44a7cc94d5650552ffeb9"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
