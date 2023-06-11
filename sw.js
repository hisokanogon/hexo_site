/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","85d1ebc594e3f49feaee4acc7afcabdc"],["/2player-battle-system/index.html","9afb5fe2e4ef0bfb0c90754a417695a1"],["/404.html","e086e795698d8f9d3eedbac7a9837dfd"],["/about/index.html","e36a5e4707934777a193b84afedcef43"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","be7d6a3722db3e93a3a98ee6e568d2a5"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","1f5b1c3865e2737ced645ea9c0341b97"],["/animated-title-main-menu/index.html","db79c23e2da3ead438bd0edf6cab951f"],["/archives/2022/05/index.html","922a9801a0eda5e4e9bfc0c4b05e4c31"],["/archives/2022/06/index.html","19a7c75f28d654597f758d5a79b41c90"],["/archives/2022/08/index.html","c50d0298132d4c679f4161d7977d5e86"],["/archives/2022/09/index.html","c3b0090b10c0c2e6be1771c17e2c08a5"],["/archives/2022/10/index.html","5174dae6cfb8ec8c8b0f744a20e909fb"],["/archives/2022/11/index.html","af37f608a8dfeefcd7181ca4db0c89df"],["/archives/2022/12/index.html","91fa1067a7051d278b620cd050d04e09"],["/archives/2022/12/page/2/index.html","2c23e19d1e043fd761ceff179baeb2fe"],["/archives/2022/index.html","49dfc41b9efa80b132e9600a348fed2c"],["/archives/2022/page/2/index.html","a5213440dc09afdcf8300bca1cbb1a37"],["/archives/2022/page/3/index.html","e6a55cf7e89c8e48a9bf1ddaef35e682"],["/archives/2023/01/index.html","4c1e26dce69b658c60b100b989cc7675"],["/archives/2023/02/index.html","27cee2d5b05696e10882b0a533982958"],["/archives/2023/03/index.html","18882ce4e8962af34d7daf847c4ae85b"],["/archives/2023/04/index.html","ada3d5f81f6ed9345b566ece2bbace2a"],["/archives/2023/05/index.html","5b1520a9afa9161421610b3d23ace683"],["/archives/2023/index.html","9de1b237eb51af5baf6abf7297eed3c1"],["/archives/2023/page/2/index.html","01d2c41c434f33ef47486f3d2170c129"],["/archives/index.html","70ebdbcd15567a2624f217430ddf7a4b"],["/archives/page/2/index.html","6ac176d9de73c17ff6600f1a44302918"],["/archives/page/3/index.html","32d8fe64a338ceb28db4716e59ecbc4c"],["/archives/page/4/index.html","e73749a20bc391b264bc072d15e23345"],["/archives/page/5/index.html","317c4d20c321c4c5afd5639d3cd57163"],["/artitalk/index.html","9c99ebee140754790e533f622384d134"],["/battle-beautiful/index.html","9bc72623e96d46c069910c523c8ce119"],["/blur-effect/index.html","de9d86d79fcfe71a8b627a61ee9353ac"],["/butterfly-custom-tag/index.html","d4b3172e2fbeba7e9767a71450d84781"],["/butterfly-plugins-faq/index.html","8b3e78e27e611b69e96e1b5b3caf6999"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","0721ccf6654166825434bb291ff5f772"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","4bb1512c4bb0006083062ce0d12e0564"],["/categories/announcement/index.html","fd420bb42be81e69e09a070f6e25ebca"],["/categories/diary/index.html","9a65fba57dc1e95c5e6a33b26e6dc66c"],["/categories/game-dev/game-engine/index.html","61ebe48abaa7831d880bfb2b866c16bf"],["/categories/game-dev/game-engine/lightvn/index.html","bb354a4f1b82f62ce751b82bab4e68b8"],["/categories/game-dev/game-engine/nvl-maker/index.html","64d52b02bc384c1fa6bb93fe972a9202"],["/categories/game-dev/game-engine/page/2/index.html","145b1655fdc2b9fd7d8ec55a3c3a856e"],["/categories/game-dev/game-engine/page/3/index.html","82c4ad08ed686619e0d4b77ad5c99b5a"],["/categories/game-dev/game-engine/renpy/index.html","9f90ea3a53688c91ed15187b7b4a610a"],["/categories/game-dev/game-engine/renpy/page/2/index.html","da57699f380ab5569c1ba982e58ae9e6"],["/categories/game-dev/game-engine/renpy/page/3/index.html","72ec80a340c7f68337f20268a348ad03"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","0aab9e607b9b35ee46adc073eb3d3ab0"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","702089e5ab3579612bdabab48d5ad47c"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","c8ee5297324769466044a448e86c64c5"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","f4b70e90d9e8ad57d72ed222f0398204"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","247db4a22c12db9984500d8c2ddd6ff3"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","13503c87ac23f9d6cb88ff10ce27450b"],["/categories/game-dev/game-engine/rpgmaker/index.html","395f0c0e1a571963fe83971bb31d4953"],["/categories/game-dev/game-engine/tyranobuilder/index.html","7a07836e27c947deb78490dbb24b5012"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","cddeb5931d59ad53b40e38b57d8ddf20"],["/categories/game-dev/index.html","a149f27546b9451c9de927dfc302d57a"],["/categories/game-dev/page/2/index.html","3c280c428c8bae86bba2dc58842345f1"],["/categories/game-dev/page/3/index.html","6cf8747adffd84b4584f6d2db570a70a"],["/categories/hexo/index.html","81abbee0a5c6385ef0d6d41f1df1c9fc"],["/categories/index.html","a48c90a8f4d68e0061cdefc72ee52a46"],["/categories/material/index.html","f35c914a26267e1678f6022c6d5fab0f"],["/categories/update/index.html","d3fde5cda62fb43546f13c7a4e3cf46f"],["/change-according-to-real-time/index.html","f89f6245ba12579f7c12ed3bb111a3cb"],["/change-title-after-first-time-viewing/index.html","d3e6ba053527b0a3a5c3a2c494ba2573"],["/change-title-based-on-event/index.html","bba179a6000510d113695f31bf6ae700"],["/character-stats/index.html","63b2deb67ef2b1400913f154318c8d53"],["/chatbot/index.html","10829102858112f6bc184186ebbdf88c"],["/comments/index.html","628ddf2d77a2cfd7ae84aa7a4925ccec"],["/create-button-anywhere/index.html","1ef6b10fc62a55664cbeed4beb70d7d4"],["/css/eurkon.css","e6a8d8927c7e0de58e17eb6b7c47acdc"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","05908ba88934ccbf996b02d7d0be8f75"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","aaf4224ed1fc1c38e4002c23ceac0a23"],["/css/rightmenu.css","ba47461a1d01b0c643b98ac8d7d8517e"],["/css/siz.css","091ca0ac7f120fb7116e575fb4d9d853"],["/css/swiper.css","9de6c92234967b3a78825f774e583a34"],["/css/swiperstyle.css","6f3ef03c384814455a2a5848ebbbdf96"],["/css/var.css","3ccad8fe7e10f40c695a4e235a02ffd8"],["/ctc/index.html","18437646b71b3c01a168f7a0ceb5ce84"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","bbd9f20756fd106505b29b15413a9aa6"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","8f516c7c70f20e8cf50e864c5125e48a"],["/custom-loading-screen/index.html","3530b3279993c93b47f9967e184d4113"],["/custom-mouse/index.html","30350be78665085554a3546577da5c8d"],["/custom-music-room-screen/index.html","bb264a1df7d1dac0d41af704d5c25922"],["/custom-music-room-screen2/index.html","379052f62a6f84c1c77f48a7fd23bc42"],["/custom-nvl/index.html","b9e704a959555331a985b1c51c833513"],["/custom-player/index.html","eded2359adbd2f62b73e09c850814e3a"],["/custom-preferences-screen/index.html","da03ef30a31c0afb653bf963cb7bc7a6"],["/custom-say-screen/index.html","335602a66b549bc96a349881c87c06b1"],["/custom-title-screen/index.html","c18fd3900058871cc9c3b6b92a0dda6a"],["/define-npcs/index.html","cecf5db9bedd5b829a5048281ce9928b"],["/dice-function/index.html","ca237ff68166f4cc699d7644f0ceafd1"],["/disclaimer/index.html","e94b3ad37db7ceb8e4190ca7c3578013"],["/export-game/index.html","216819b1a5127030cf996854c8f88ac5"],["/friends/index.html","dbdfda6170e7a92f444fbc4a56745b17"],["/gallery/index.html","014413e43b839f9bb72ef43b3d6bf98c"],["/gallery/photo/bg/index.html","e9681b67147a42e19e9a0bc4c30b811e"],["/gallery/photo/gui/index.html","e89828be6f786bc559d13b43cfad3531"],["/game-only-text/index.html","aeb36cf47cf05f6939c6d43f317ea6f5"],["/gui-017/index.html","a62b4d4efb1c78c03da773f61c4e9e4a"],["/gui-vertical-002/index.html","12215d7c147b2df52f66b9f5c8332ece"],["/gui012/index.html","96ce1b0f2602cc2e0c78d56aa33e6388"],["/gui018/index.html","a2f2b53cccad893b0206ac437b64f9ff"],["/gui019/index.html","1d32dc34c0a284f49fc30a1e31235bbf"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e11709cf6ed81d7ad174300723e11985"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","f75a42df0f87bfc17bb825a87ec4a7cd"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","8a4775af1e42147d164a9e9c5b3596dc"],["/images-tip-function/index.html","369896193691f9b2e766bd5b7624ded4"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","dfc6129d33be3ee5f4d74c81ba76bccd"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","1b34afff82ce042fa6a81937bad4420e"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","7453a23605a908c607fe52e7435d7611"],["/items-sprites-effect/index.html","cd605eb7ec6d9f0e37fc9ccf4328c7e3"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","2c7c2b3052575733795879434e470a96"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","9b30aa8985078d773f24b25f06179ee4"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","b3ce2f0d5829d9f2baabff5e00e76f56"],["/link/index.html","f256a024c87aab8b6613cbb807281a7c"],["/make-butterfly-beautiful4/index.html","9d3b7fb9c5238db52d9dba35b0c4cd63"],["/map-puzzle-system/index.html","07d8c6512233644fef73a44aaf6f61d5"],["/maple-effect/index.html","410ec934ef62a0b05dd1213488433519"],["/memberships-2/index.html","0e32f68736464b80473ac175341c01e7"],["/memberships/index.html","bab44c07dc46782a641fed37dacd667a"],["/multiple-language/index.html","a0621f1468cce21af862b8f216e4855a"],["/new-year-event-2023/index.html","bbc1e7d9b3380ae34eae515310cff3a8"],["/newsletter/index.html","a48841c79854576a73c5af3ed54c4474"],["/null/index.html","db6f14964e9a4177c7b7aeb57c720e83"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","979357746181f5a4f83ba8eeee8591c7"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","8592f5bd0fad17119dab7b2a67dc6dd2"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","438aebffb5bfc9e89903963a22534b65"],["/original/index.html","02ae59c0c12c57c43e685734e58af4b9"],["/page/2/index.html","c2300fada45fc028148adf69e399e373"],["/page/3/index.html","3c04c8becf843ded82de1f59ce5ed528"],["/page/4/index.html","87787117762a2cf318a6c694c160b827"],["/page/5/index.html","94e36b558a95f82923cdba78b5c26e56"],["/pop-point/index.html","f8a6bb0d47bcbb8f7aa01c6b4e2308c8"],["/privacy-policy/index.html","36fe30d8a51049a749d950ebc94486a5"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","8c385d744935025f7d4af704048213f7"],["/random-number/index.html","67407846fef43bf92e40f7e698a008de"],["/random.html","00af23d801774d3d00cd48f0167524b5"],["/release-017/index.html","b56ea7776e51243b0c045e389eba989f"],["/renpy-basic/index.html","095ee5b9b89bf485a9dc9835b68ae657"],["/renpy-crash-glitch-effect/index.html","25626cb9182a46054dd2e8054ed0a632"],["/renpy-matrixcolor/index.html","0130d8420f5b49bb39b5523858d1731f"],["/renpy-overlay/index.html","8247826d220ea55690262b0b383ab1f8"],["/renpy-review/index.html","993eb4d301956d8ad0eff20e13c790e0"],["/renpy-typing-effect/index.html","375856e9dd0482a59b05476cf302780d"],["/rpgmaker-assets-menu/index.html","829a31abe8ffb2c06a7691569da1c104"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","afe121a33915c90caeaea086aed2ec55"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","e531fdb374f2c6d23d007739a615c9b4"],["/sakura-tree-background/index.html","48d81674d3bd9a5907c989e1d0d83524"],["/show-variable/index.html","f68d724e17a856a7a0b7c5b9500135f7"],["/side-image/index.html","c5ce106a2409ac5bce41b2c200b41953"],["/snow-effect/index.html","c595e6c93911cde9d78e6843838313a3"],["/speaking-animation/index.html","6f132bd3d99205e102eeb66649e49cdd"],["/splashscreen/index.html","0b472223f4638a5bb8a9d5c28647379f"],["/sw-register.js","9002f169d84ad788e46fe224e30099c4"],["/tags/Hexo-plugins/index.html","08d31261d3fe5aeb2b48563666f87a79"],["/tags/Light-VN/index.html","1466defd3fd56a978396f30bba512a7e"],["/tags/ai/index.html","e12c9e70689176d7c828c46be249d39a"],["/tags/butterfly-beauty-diary/index.html","c3b88b3cdb65599f98fa430f7aee9c11"],["/tags/commision/index.html","bf9194adf4dd82d028e9103cf2b1f707"],["/tags/custom-hexo-theme-butterfly/index.html","84de593778981e3276a29c0085e4262b"],["/tags/custom-renpy-title/index.html","53ac2862650fa682ba45054a765c85c8"],["/tags/dialogue/index.html","60094f276c4ebb96b34edb9f1b57ba85"],["/tags/effect/index.html","4fdf72aefac4266db34404fc354813d2"],["/tags/event/index.html","338730f5f3d8f3c47dac7b0345a9d36a"],["/tags/hosting-own-website/index.html","1dae4e104221e6f6ba55ae7f516482a6"],["/tags/index.html","8283246cd22892c968306a962f85ecfe"],["/tags/itch-io/index.html","eb7caadef2f8a55dd977b6d41a0f7fc7"],["/tags/light-vn-update/index.html","23866330fdb593ce3c86bcfbd0290b6c"],["/tags/nvl-maker/index.html","04859fec95b65bd49ab41de2c139a99c"],["/tags/player-related/index.html","95f29f2175b62bae04478a7d5f87901c"],["/tags/pro-tutorial/index.html","e1ff16220b65ac0e0e9e9ddb57456202"],["/tags/pro-tutorial/page/2/index.html","472cee38aa564462301e6ffc8d17ca06"],["/tags/pro-tutorial/page/3/index.html","de18a5bc9b8323897449486706c40203"],["/tags/renpy/index.html","736ac16dff8bdff653c05be0414fc56a"],["/tags/rpg-maker-custom-map/index.html","fde8f6158e957d7d1f5b88565a34f93e"],["/tags/screen/index.html","6192de2a6728ab6aa2a072fb14f1d212"],["/tags/special-function/index.html","4878e23d33613f50b095cd13e9e93768"],["/tags/tyranobuilder/index.html","fb8e0b1a2c09bcf117fec10561d7ab91"],["/tags/ui-assets/index.html","2679283fd52e995e516f499f71f1003d"],["/tags/update/index.html","ceaf2c2d04d10477e138fc089be3b0fc"],["/tags/upload-game/index.html","eb68c76595fab386e9f6c852e94994fa"],["/tags/variable/index.html","ec5e830029c51abccd7f45a733b24700"],["/tags/visual-novel-maker/index.html","f83fe9e50f66cd236cc421a5bef58f5d"],["/tags/封面製作/index.html","d03c1c7b379399b2fc6750ac71fb3d4b"],["/tags/背景素材/index.html","2f692723f43b7ebf0bb0aac3e0c9ad02"],["/tags/隨機功能/index.html","9e4c7a77af100326766a00bad13cefc2"],["/test123/index.html","84c8bdb8edb5c1bb60349c8d7dcf10d8"],["/textbutton/index.html","932b7a4d854b357b1204bf3249b4b140"],["/to-do-tutorial/index.html","aae3b5c054c56cf8da5f53db78459f73"],["/tools/index.html","0b1a1c8f735c1d4ff93959e2a29b2721"],["/transfer-to-hexo/index.html","f18a661d24dcc969ebbc96cd14c47651"],["/tutorial-update-history/index.html","9af32f84d46ed76a791d289889473a2f"],["/tyrano-name/index.html","e31a6f4af922b74d6fee5d4df993829b"],["/tyranobuilder/index.html","e6b553c51bb29ec02f87369913c465cf"],["/undefined/index.html","0a31d9d5e898934fcc60eca3b8fd4991"],["/update-20221211/index.html","85fc2bb2e364bc98b58828ce71958e01"],["/update-20221218/index.html","fd60e269f5da0113add943d543240912"],["/upload-your-game-itch-io/index.html","00a06e6adde68692e6ff198db8c041b9"],["/use-list/index.html","10e10ea90b3e307debc341bfae875e5c"],["/use-nvl-mode/index.html","5a8c191874b09612da8a8deaa0508513"],["/useimage/index.html","bd4b3d23cfa9f06a5a02f78a707df430"],["/variable/index.html","a5afb8188fa839bb8060627f9f19d47e"],["/vnmaker/index.html","44002f5bf3b8e5acbdc4d5e0d6b282e2"],["/weather-effect-tutorial/index.html","be364be0f62b757aa61c1bfb8c9a090d"]];
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
