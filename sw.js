/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","b538a362cf80a814f75fb3cdadfdf0e9"],["/2player-battle-system/index.html","81a6c8fca20d467ebf39ecd4fada5e6c"],["/404.html","83f5d12c953dec3dfc9fa89e5540abc7"],["/Add-Artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/Add-Artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/Add-Artitalk/index.html","d315613df56530ff3145db4713432c2f"],["/Add-Artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/Add-Artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/Add-Artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/Add-Artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/Add-Artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/Add-Artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/Add-Artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/Add-Artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/Butterfly-Change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/Butterfly-Change/index.html","34ea2a4708970df136fa4a8db4817ac4"],["/Butterfly-Change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/Butterfly-Change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/Butterfly-Change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/Custom-CSS/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/Custom-CSS/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/Custom-CSS/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/Custom-CSS/index.html","49c48441c889396f6cb7533b5ef25115"],["/Custom-CSS/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/Custom-CSS/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/Custom-CSS/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/Custom-CSS/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/Custom-CSS/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/Custom-CSS/pad.png","3ff20632cab5874cea70198e9d051266"],["/Custom-CSS/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/Install-Use-Valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/Install-Use-Valine/index.html","1b1290946a2052545e6ffcf16be91efb"],["/Install-Use-Valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/Install-Use-Valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/OpenChatAI-Renpy/index.html","18db7c594400e7c0ef847cc20ab0188c"],["/Transfer-To-Hexo/index.html","737fa888b0a11d4bbfccb6745a512f38"],["/TyranoBuilder/index.html","6087b92f31bbd22dfdde8eaf532b8d2d"],["/about/index.html","057f3cb413999456fa82a0b41bc623a2"],["/all-discount/index.html","f58bd31ee84c4f9f67c9fb6da6c3ae7f"],["/animated-title-main-menu/index.html","b756ca2058e4871bb7e491096341b6be"],["/archives/2022/05/index.html","5b785c1856c1e8053bbbebae2a9d6a6e"],["/archives/2022/06/index.html","0426fab868cfc0c712ea0a43ce97d118"],["/archives/2022/08/index.html","b64b17ec47673cb15f297b2464554f21"],["/archives/2022/09/index.html","5100cb9e21e5be4630e963091bfad359"],["/archives/2022/10/index.html","59bc6d2a616b67d0f61ec40c547d6de9"],["/archives/2022/11/index.html","ce7bd7192a83f336385237ecdb848288"],["/archives/2022/12/index.html","7e124f23348d4b907bfce3e3a5bf5cd6"],["/archives/2022/12/page/2/index.html","bbaeed7e9eedf9539ac251271d0de3ca"],["/archives/2022/index.html","4887574b5284e11bb0b8b3d93e5ca557"],["/archives/2022/page/2/index.html","a59959e60f5c3b35ce8957482dde34ed"],["/archives/2022/page/3/index.html","ae4e00409386072a6c2f5bd342f5393e"],["/archives/2023/01/index.html","0efef1be8cde307ec620f6ac47f54d2f"],["/archives/2023/index.html","4a1dc8fc7323ef369c9a711d02139f21"],["/archives/index.html","c3c1228ed7f632096075c48a9643be97"],["/archives/page/2/index.html","bfc31a629f889a435b579e95203059c9"],["/archives/page/3/index.html","b9e9b133ce817dbab2332297c1bbab72"],["/archives/page/4/index.html","4c45cf67d285aab22d0ee6de031e92ba"],["/artitalk/index.html","d85b45d4f90244ade2fa3683412b79d4"],["/butterfly-custom-tag/index.html","887cf39b34188504969269860dbeea18"],["/butterfly-plugins-faq/index.html","7a942f53cab4b8b6be027c735e51014d"],["/categories/Announcement公告/index.html","66afbef25c45d2f673219b15c884268b"],["/categories/Hexo/index.html","b9c89bb640dc58ad7e00e3ab63f241e7"],["/categories/game-dev遊戲開發/index.html","032634f0dd8bdc0c37e21a608e138327"],["/categories/game-dev遊戲開發/page/2/index.html","1315581c905f83914139cad14fb0d2ff"],["/categories/game-dev遊戲開發/遊戲引擎/TyranoBuilder/index.html","a5b1957db476994263b4abccb72ea902"],["/categories/game-dev遊戲開發/遊戲引擎/index.html","3ddda05ec035980d34c8c31b25f110a9"],["/categories/game-dev遊戲開發/遊戲引擎/lightVN/index.html","c7c17060320f33eb26c127e078be960f"],["/categories/game-dev遊戲開發/遊戲引擎/nvl-maker/index.html","49dfd73b1fb948980e72387a732d4e1e"],["/categories/game-dev遊戲開發/遊戲引擎/page/2/index.html","a58d7e9ed967711ba35563d2c8da0149"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/index.html","56d245fce211f70cddbee6683af3d674"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/GUI/小東西/index.html","667af40f3f8c632850cde2cf4d968198"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/index.html","4c2ae3a634a0543a0f43e35715a3385c"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/page/2/index.html","c4cbe2006617780617ca2479f677b03c"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/Tutorial教學/天氣-懸浮粒子製作/index.html","15408a14d997a5eabe53cffc421b13eb"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/index.html","347a422e3813281c826c2c3a0616c2b0"],["/categories/game-dev遊戲開發/遊戲引擎/renpy/page/2/index.html","094f8a361d0423514174d9859308d4ad"],["/categories/game-dev遊戲開發/遊戲引擎/rpgmaker/index.html","0709ba4253e119f68e565db911202a92"],["/categories/game-dev遊戲開發/遊戲引擎/visual-novel-maker/index.html","79dc72ea55efa8d492214ca51603e577"],["/categories/index.html","d488232b8d39ab98f338079a175eea46"],["/categories/更新update/index.html","bf3c793eddc283a8a9a87b3a0aac5db9"],["/categories/資源/index.html","852000c926cdd006fcfb0a6bfd4f96a0"],["/change-title-based-on-event/index.html","9e561ae4fa3809885d2f73bf25bdab8b"],["/character-stats/index.html","3724872046cf06085efd8e3b2ff5d3ed"],["/chatbot/index.html","41ce6c08ae6c1e3afdf7507d6682744c"],["/comments/index.html","554da196d5dd1b0ff218504c20256c0c"],["/create-button-anywhere/index.html","45c085cd7e7bcd232c79dbb73851706b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","caab83391b8928578b940c54b9d790df"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","569bb188f6bf99becac295417ccd44bb"],["/css/rightmenu.css","419cd1dc44236bbd690a97f2edbd31cc"],["/css/siz.css","adc5607fd764f53fa8a0696acfc17d8d"],["/css/swiper.css","b4ffd860399c8f9c2697a9cd81cb53c8"],["/css/swiperstyle.css","455c8c146a9759a33d8ea24dc34aaf5f"],["/css/var.css","2ae449459f9b66df49f1cbc246bd55a1"],["/ctc/index.html","5a8d15556d25a64638629b5d40791aaa"],["/custom-gallery-cg-screen/index.html","8c6b9da7131136d590d1d33d22c38c8c"],["/custom-mouse/index.html","c4f7ddf67f0625553f3b9001c1f1419a"],["/custom-player/index.html","5836ac86c237573d034852ab029ca429"],["/custom-preferences-screen/index.html","03800359fd6326c205a7cf3508622cfa"],["/custom-say-screen/index.html","6d0fee3f65204e3b6a699cca903dda97"],["/custom-title-screen/index.html","9b34941ba2c5b22ee78965ffab65b13b"],["/dice-function/index.html","1b1addc78bd9460227d3b8e3fa3e9974"],["/friends/index.html","1dce52f563a423b504ce416be34a43d4"],["/gallery/index.html","f4e2f49641c0e0bea0201fac093135af"],["/gallery/photo/bg/index.html","cfb4c085da22ef8be51aaaf29e89e6cb"],["/gallery/photo/gui/index.html","2a9c150dd734f4084f2dc1d6a00faa55"],["/gui-017/index.html","66b7cf2b210a6c078577db1179fe5d71"],["/gui018/index.html","b16d4a8dd3b5a978276c4fa090cb2c8d"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","41950783d13077f6629eae358384738f"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","754cd91f0f720cc0cd7885f2661a3129"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_16x16.jpg","cd3428135e94f5a83aadb8d5ced778e6"],["/img/pwa/favicon_32x32.jpg","1257041ac1eb102a40768d4bfeff16a2"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","1ab95369409eb1df6fd9c35e4af137a7"],["/inventory-system/index.html","da1b13c381383085a025b61d76fbcc5e"],["/js/main.js","39e84a3dfe3dc80e6157c06b4b5d4699"],["/js/rightmenu.js","ffd0799d731f2fcaf5b440de585c4d57"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightVN22-10-03/index.html","eea96e5ca02bd71cff5c2b6ca06e2258"],["/lightVN22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightVN22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightVN22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightVN22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/likeButton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likeButton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likeButton/index.html","626b25e4c4f4293af0e90a36e6832b7b"],["/link/index.html","2a6ac8a4a6b574ce52345445ecbebdf1"],["/map-puzzle-system/index.html","a9820a42fe77be1fc8812786fe37145f"],["/maple-effect/index.html","a44455d86fb7c3f99573f85543e6f9bc"],["/memberships/index.html","5f4488988737d7878fe75347ed736ea6"],["/messageboard/index.html","37755ed5aa7fc0de369acdc949dc7690"],["/new-year-event-2023/index.html","1aebba86c4411ac782a45fb68b7f94c2"],["/newsletter/index.html","9d73095abad4b1e00da70662017e792e"],["/notice/index.html","fee84f60b0e4213b56f8e1c885460df5"],["/null/index.html","6dc757e33fca81808117fe7dcedfa176"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","c078072faa845bdb4b9647001886128f"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/original/index.html","4e5106a88ea895c7aa93f01c36320dc1"],["/othersite/index.html","c810c2bcf52122bcd22be7ca9e8357fe"],["/page/2/index.html","a390a4697debd469a8c7b4d9119396aa"],["/page/3/index.html","7fedb1bff840afcb308e6584b5ddd199"],["/page/4/index.html","5626985fe0efcc46f08583238a680027"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-number/index.html","0c849e45916629d47f2f327ee10512b7"],["/random.html","8067fd0ccd375fc11afd089df44b7607"],["/release-017/index.html","981c1c616dc04ec5a79c7b025e82accc"],["/renpy-MatrixColor/index.html","6f0da694c059ad0e434879cd04c16a2f"],["/renpy-basic/index.html","0f4ddedfd8bacc3641f80ea73d61ecb0"],["/renpy-overlay/index.html","dc18042987b9e591bb8ed4966254399d"],["/renpy-review/index.html","47c4968e39a5025c0d53723bab337a5d"],["/rpgMaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgMaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgMaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgMaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgMaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgMaker-create-a-new-map/index.html","51b06c787678b6623d9425772fe21cf9"],["/rpgmaker-assets-menu/index.html","175783a34063e7a98d280ee3a92da6d6"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","8c2eb7cb2f3bf39a7baa37afe2cbaad2"],["/side-image/index.html","2a97d7a9caa60d3766640b0c8bfa754c"],["/snow-effect/index.html","681a744baf915bb09d0d0f02f7f77e9c"],["/speaking-animation/index.html","edfa0a5bf22ac176d9b93a29c3746e7a"],["/splashscreen/index.html","628c304813a22c2a453db7ec6bafa462"],["/sw-register.js","97d5ccd3e96ad5e44936841052099e6c"],["/tags/2022-年-12-月/index.html","21dae6aa7fb47b19d6da30537f5d954d"],["/tags/AI/index.html","f0319358629e6f9c4ced2cdcc0aa8ca2"],["/tags/Butterfly-主題美化教學日記/index.html","c338abf279b4ef7fce87013912a50113"],["/tags/Hexo-插件/index.html","53352987b5d7dd5f4a3927399509c4fd"],["/tags/Itch-io/index.html","c0abb7f112344b034b69707b6165c5d0"],["/tags/Light-VN-更新update/index.html","cf2f20c944d3216740391afa61215078"],["/tags/Light-VN/index.html","2c5e3efaa1a72ca23b4b3a40e4ee6d56"],["/tags/NVL-Maker/index.html","5363e0cf3590ca63363d320dd97b38cc"],["/tags/Premium教學/index.html","6643efa011373cfecfd1936d9f25c2c9"],["/tags/Premium教學/page/2/index.html","3b1a44031c72dbb96e0462b1a6c7887a"],["/tags/RPG-Maker-地圖製作/index.html","add53d5145c8350928946bbcca3fb160"],["/tags/Renpy/index.html","e73bc7f1fea3b6c194ae06dd17d6eada"],["/tags/TyranoBuilder/index.html","040e7ec75ed79a2bc851beea04bb5c80"],["/tags/UI素材/index.html","0fe3b6d38b17e6ef9b558a9d2d882e81"],["/tags/Visual-Novel-Maker-視覺小說製作大師/index.html","97dc35cb704ba6e878ebf2fb59931d12"],["/tags/index.html","2a940be810bdc6d4b894e7cd9e0e912d"],["/tags/renpy-basic-Code/index.html","7fab66c14ed0527dcec34fb99e2d7f95"],["/tags/委託/index.html","abf1aaad7a3dae5a7494fb36d27af4a9"],["/tags/封面製作/index.html","e65a4cdbbf0ea0800e6703e0825e8982"],["/tags/對話/index.html","59802e1418abf82e816d832a87ebb44e"],["/tags/活動/index.html","31ec5e0744f7ff6f87c7d588acbf8f45"],["/tags/特效/index.html","e66cc298a4bb120d7412b2e2bc97322a"],["/tags/特殊功能/index.html","478177b9df3e827f63e0b9e299ec6a41"],["/tags/畫面/index.html","36ebe8398919d8f6796e103ea8a266a6"],["/tags/網站發布/index.html","151d03387afcc9057314e6f70f12bf6e"],["/tags/自架網站/index.html","8571a9a3637a0fed0908b81787e947f3"],["/tags/自訂-Hexo-主題-Butterfly/index.html","c465eb6d0c7fd1c7db227e7d9dadc576"],["/tags/角色相關/index.html","29ce3b4c81687b828b19177c7d4ac222"],["/tags/變量/index.html","982424549fcca15dc730deb6250d40e0"],["/tags/遊戲上架/index.html","902f9a27476f5b36dd862520fc6145ab"],["/test123/index.html","fd8965fabe2c5dfd8d0a7944cdc772c9"],["/textbutton/index.html","b86ee93739d05d7cfad251c5015a2479"],["/to-do-tutorial/index.html","f58e18be768b07fa5626c9aed06f360b"],["/tools/index.html","6a924538de3ee45bee92e97336353a99"],["/tutorial-update-history/index.html","0088c1e0b8f8bbfd6a333e2ede65a3a0"],["/tyrano-name/index.html","ad46db635a3624b8b582841f4657d26e"],["/undefined/index.html","d680b81b01a3db3a1a479ef1024dd216"],["/update-20221211/index.html","3a65781b185f19bf245aa54b6d4e0720"],["/update-20221218/index.html","b92a13275eb45d2738300cc05e0324bc"],["/update/index.html","47a7fd50ecce7381f12dc41eb353e742"],["/upload-your-game-itch-io/index.html","0660f7d9412e8bba1d82de1821dbed30"],["/use-list/index.html","ab644fb41752895d753d67a7b1e268df"],["/use-nvl-Mode/index.html","697a14db65547410397c0a54196f3828"],["/useimage/index.html","2cea48c5e8c337bad24321da6d7896c2"],["/variable/index.html","34776bdd411d0947b65dc97a045364ab"],["/vnmaker/index.html","2b2a8635c111d48a83a03bebf6e1ad93"],["/weather-effect-tutorial/index.html","26b27e09d9f388e9e1800dae7b0f96b4"]];
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
