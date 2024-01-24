/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","fc729a2ecf075e269294d271215de76e"],["/2024-future-plan/index.html","1ff7d96cbed6ad1b4d9dcb6e5cb80c4b"],["/2player-battle-system/index.html","8c09f282bf6047a128c9af7ea021eeff"],["/404.html","762e4df64d3a6be04af7ed3277b41288"],["/about/index.html","756a9dfaaa51104ea631346c4faba556"],["/acg-creator/index.html","6719ed9add9fd0bf0700e997d3f2b73b"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","52d3ec00d5073ba99d7c9a023920be54"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","3d398a69ca3bf587a9838053d8d2b0a1"],["/animated-title-main-menu/index.html","84311c401bd455c4297e0b54b2227ea6"],["/archives/2022/05/index.html","4170f737de2d6c0c0b6a7939b935b602"],["/archives/2022/06/index.html","c4afbf788c378c5495327bec2695602d"],["/archives/2022/08/index.html","91a5b6b1c82957045fa457b0fa182d36"],["/archives/2022/09/index.html","751382962ab7c054a2a638c1d26bdb4b"],["/archives/2022/10/index.html","74432a05c527cab07313eec0e8fb28be"],["/archives/2022/11/index.html","62cbc1d64eb9613c984af02e2d31e950"],["/archives/2022/12/index.html","f17c971c57fb10a91119451e98447f79"],["/archives/2022/12/page/2/index.html","f15445f8e62c6d69c952b648666af936"],["/archives/2022/index.html","7d78c10f15d289b09a0dba27cd481f7d"],["/archives/2022/page/2/index.html","27005553dc3061d04d4687828c9531ee"],["/archives/2022/page/3/index.html","8a39980db7a8cbeee50701d02ce1ff77"],["/archives/2023/01/index.html","7f2f3ab699aae2cf641849e614f3b396"],["/archives/2023/02/index.html","a8921bd2254d2abf6d426857aa01c4e2"],["/archives/2023/03/index.html","3b4393e593bd5ee9b6f1b3a685f3a0ef"],["/archives/2023/04/index.html","a126613f910fae9d22cd9f4f92c16deb"],["/archives/2023/05/index.html","010ce9b482e9e9448bfdb97892c9403c"],["/archives/2023/06/index.html","e5a4ab37d59ac5af61ce539ff5c53a99"],["/archives/2023/07/index.html","1b9f28a2700a24d0d5a80f20887dd7c0"],["/archives/2023/08/index.html","929c4d5183b9cc23851a5b78c935a405"],["/archives/2023/09/index.html","d1e20585f4dc24fa98147e38209f8083"],["/archives/2023/10/index.html","54424b4665968e5b0152c6088d69293d"],["/archives/2023/11/index.html","dd61ea222207c631ccd5001f9b976c07"],["/archives/2023/12/index.html","4c9c24d983c85569e536cf28e609aaae"],["/archives/2023/index.html","187c6af902bbc6b38427f0814968b240"],["/archives/2023/page/2/index.html","6e134b576857d8283855e676818dddf5"],["/archives/2023/page/3/index.html","f63e200c3a4285d110afa59101c7c4d6"],["/archives/2024/01/index.html","fbfa79c9ab14e11e237fd5979b9757dd"],["/archives/2024/index.html","eafaf76afbb440ccf1f3508c78f80381"],["/archives/index.html","60bd198f664e1a5a1876074afa7692ec"],["/archives/page/2/index.html","f771193812815fc4cd6ef34c5e12494c"],["/archives/page/3/index.html","e9e82fdb9031ee8b0f10f63c70f438e9"],["/archives/page/4/index.html","7e0a543a3ae54534d18933ce8d20d853"],["/archives/page/5/index.html","88e83f34882448d5ca7467715c13f9f0"],["/archives/page/6/index.html","425f8740a943498b2815fea543abadce"],["/artitalk/index.html","966c4851ddd60bc660696bb6138470a8"],["/battle-beautiful/index.html","ceb9e95acabb5de6f373d7647caed199"],["/blur-effect/index.html","9989776dcbd7ac83cf5c9728cd596e87"],["/butterfly-custom-tag/index.html","19c5bcd3b74b619799c9706210e543fb"],["/butterfly-plugins-faq/index.html","23c8ba341d2fcd63106d9300084eaa4e"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","86815389e7a316e9fb537375e4189414"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","beaca9192f68c5f168048eb30a21b5f1"],["/categories/announcement/index.html","2b41070203c3ed54404ee00461a70779"],["/categories/diary/index.html","04d4be78b6765e6a01370a9310877fb1"],["/categories/game-dev/game-engine/acg-creator/index.html","32e28afa73ec824cf35c169614a7d3a8"],["/categories/game-dev/game-engine/index.html","9949f05ab3c56729b83fac3aea388283"],["/categories/game-dev/game-engine/lightvn/index.html","fb51d19b554c3c9b36eaa028bd536575"],["/categories/game-dev/game-engine/nvl-maker/index.html","4cf5a7f48dd995e746566fcf48644d9e"],["/categories/game-dev/game-engine/page/2/index.html","bf1d9786feb1d48c68e0931ea6dc34d3"],["/categories/game-dev/game-engine/page/3/index.html","633c290d7ca2a1fc984744bef544e45a"],["/categories/game-dev/game-engine/page/4/index.html","d64fb0803195a8e495f33707a263e22c"],["/categories/game-dev/game-engine/renpy/index.html","05d065e376f1c3eba4c9fb31f321a4c7"],["/categories/game-dev/game-engine/renpy/page/2/index.html","71f1620d5878461c433b0aed091ba177"],["/categories/game-dev/game-engine/renpy/page/3/index.html","5ab7c611bc82d19f6f79975df3565281"],["/categories/game-dev/game-engine/renpy/page/4/index.html","a14d88ee7c9ce75c0df2d276cc025722"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","9113b3b35eadffa04f3590fec5f1b015"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","1f0251e20f0e71b08033399bf967d9db"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","3fbd937584b93985739e64aee4ff05d4"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","2ebefe4bc7c7dd97b62a187a74a19606"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","618330fc25a3f7100fe9f770454facff"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","914613846e99b3289775f1e59d90517c"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","8a0a831e71518b0d3239bfbe491f26bb"],["/categories/game-dev/game-engine/rpgmaker/index.html","64ee513de82231309cd6cbb4656c705f"],["/categories/game-dev/game-engine/suika2/index.html","8d1d3eedd82d2deb843cd15617a653bd"],["/categories/game-dev/game-engine/tyranobuilder/index.html","a1bbb24a0f2fe5c895d0cdd48082bacf"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","6e5fb793062b8ce8d4f04a2b3f3eda3d"],["/categories/game-dev/game-engine/webgal/index.html","97941f4c3629f2477ca094ac0b118031"],["/categories/game-dev/index.html","b1df5759eb167b95c5be266846076dc7"],["/categories/game-dev/page/2/index.html","ffd17a739af7dabee4222250ee3bb4c5"],["/categories/game-dev/page/3/index.html","647ab84d05fe742b5df86825d9219297"],["/categories/game-dev/page/4/index.html","fa876929f9b727533f2a894a45cfbfc8"],["/categories/hexo/index.html","c440c6d1e9543bfe7245c253c2282b89"],["/categories/index.html","35f2d6a007852503128807641b8c8889"],["/categories/material/index.html","39363e495030d3aa6f7401ca8fdb6d38"],["/categories/update/index.html","aa0589a8479bf37758c646c8ea854352"],["/change-according-to-real-time/index.html","61bd65e6b59d8d322694c4c8bfd90922"],["/change-character-info/index.html","554aa62559ca29c18d61dfce67f5972a"],["/change-title-after-first-time-viewing/index.html","01b64c747ff1e9f61b418c6e0480a9c2"],["/change-title-based-on-event/index.html","6f867ff8778278a05a527b26eb484c93"],["/character-interaction/index.html","5a25563a563a079f415dbc3a6aee9bd5"],["/character-stats/index.html","f0b4eac7c1da5ded0c18684e1ee1b1fa"],["/chatbot/index.html","982ceebfe2e9317cf32ccdf7be207dfa"],["/choice-time/index.html","1bf3c6d3888b9fe3c7f53bbc46b7288b"],["/comments/index.html","b3ebf6c90bc638ae163367565f5047e5"],["/commission-info/index.html","b58399075478e644cc4e079d777c3344"],["/count-login-number/index.html","8c10008a592fb6f47d1d405ca88b10b1"],["/create-button-anywhere/index.html","92f83b8c48ad22aee186f32a44312c89"],["/css/eurkon.css","5549f9e3621ad695ff389eca5604f681"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","5752f27e80bb5a55827a00f903faea29"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","2c77937e5dc207da5d7401fd87c6d55f"],["/css/rightmenu.css","29816da11bd2cbb2f1a0b162103212c3"],["/css/siz.css","539383603e22b47dfcfcb08eaa2b1651"],["/css/swiper.css","0d0cc0e07d1f64fcf52a52a28a71f629"],["/css/swiperstyle.css","81acb866855f401a63a5937bba3aaf56"],["/css/var.css","fd5356ce3be1f4572fb300fe4c16d703"],["/ctc/index.html","41e50b628946b005fcb07f311c336d4f"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","1da54951f3876932daaddae7daded6ea"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","bc1309067ab61c5719e6a83bc820c1bc"],["/custom-launcher/index.html","f228f9fb34a437f0f3dcc2849e486fb2"],["/custom-loading-screen/index.html","6e43c4b70b9c0303c0c231378f874876"],["/custom-mouse/index.html","7d6a323935a435b5225fd10d26083469"],["/custom-music-room-screen/index.html","47eb77625db0d081ef92f6234c08c64c"],["/custom-music-room-screen2/index.html","551394f4cd53959ba3ce91ca883438dd"],["/custom-nvl/index.html","42061380e5a28af60ab803241f6c9622"],["/custom-player/index.html","5c60f4c245dafa9c616f308d63791e17"],["/custom-preferences-screen/index.html","83a18aea0d6ab32e41d4b8f199a6dfac"],["/custom-say-screen/index.html","d652fed5349f18abc036317878605bbd"],["/custom-title-screen/index.html","632a929621789eaafbfd598d636be6dc"],["/define-npcs/index.html","c31af9ae69c7554f5f8aa1261a5dfc83"],["/delete-save/index.html","190e93c5b89ac302c2f7e40fbe040481"],["/dice-function/index.html","7ef6ac28fffa75063748c8b359df66b9"],["/disclaimer/index.html","386e20936f790c37bb8001bc7342853c"],["/display-immediately-all-dialogues/index.html","a1b2d4a9b5e5dbd19fe6210b377d8bf9"],["/display-real-time/index.html","50fbaf78254112a1030586084d74e35b"],["/enter-name-screen/index.html","96da61089ed7e63320c00fed7bfe8d31"],["/export-game/index.html","0042e0f9ad7aa1ff9be2428fede79218"],["/faq/index.html","1267852725e6ad83b0f6c3ad0a2ceec8"],["/friends/index.html","b96fab57993b87a50d89ced18c7868dd"],["/gallery-template-assets/index.html","d865dc2bac5637a88390c07a7b5c09f5"],["/gallery-template-default-ver/index.html","65b3b36c3af823cbc99ec6b0286aa770"],["/gallery/index.html","f60423e6bb98b791235562689363b305"],["/gallery/photo/bg/index.html","dfc719aa07c9a0d7fc3e0bc17da10da1"],["/gallery/photo/gui/index.html","d1fee17614f6a3e7dc09a594f778a39e"],["/game-only-text/index.html","9d0aeb7db6c32ef1bd73b19aeda70f48"],["/gui-017/index.html","f0fbc56406377994780f729e818989db"],["/gui-vertical-002/index.html","d920718e0917bb9a5d52e3c539bbb069"],["/gui012/index.html","7cf1ddc668ac5260cdbdf3f640cae3bb"],["/gui018/index.html","df190a2d892bba26833f68cc9810c9b0"],["/gui019/index.html","d357d57ac81ab88a230c3271e3d0d2e6"],["/gui020/index.html","72cc4d85253701daf7bb18b640b55a0e"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","29c79165072f5ae3ce6d2e759be607c6"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","f1ce2cfbadcf2913242501834ca6156b"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","de5b930b18f2e6fabd1c5e75b88e8ecb"],["/images-tip-function/index.html","f089e97a57aa2568d431e0873a6a37e5"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","bd259beb669e372b36f004d798e2e829"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","3890eeec70761d70bc86e98d9b23f09e"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","89b8b6252ccb799d6109e3fc8a8df4f7"],["/items-sprites-effect/index.html","308f37a4c315e1b918f596193d25d0af"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","720664e2b22ed1bdb203e05447ccc766"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","d4b6a2e59e6192fa210e4300e4a229c1"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","c734c69a925e7bd36aa496eac0e390fb"],["/link/index.html","659cf4ffad51c4afcf09ca8c88eec49a"],["/login-reward/index.html","8ef1b940457759d42fc93502b8f187c1"],["/make-butterfly-beautiful4/index.html","dffbbc12b41141f4de289e52b3a9dff3"],["/map-puzzle-system/index.html","47a0921c0ebdd4db426f9f715e9b4e05"],["/maple-effect/index.html","3d2cb8323fe7c23f40429e01ba462f4e"],["/memberships-2/index.html","984174ff053ed29a7be386fb22683e5c"],["/memberships/index.html","17c8a6342303dfafb0ef767aa7865230"],["/multiple-language/index.html","68c748eeaeb77b1869f6bedf8cf5f5ef"],["/name-input-assets/index.html","aa436d2a09e1388969ec9f392896b53f"],["/new-year-event-2023/index.html","1982a4bb325eece9a129a453f1478930"],["/newsletter/index.html","4180db3f992bce4c683c3bb2e5d5b891"],["/nsfw-limited/index.html","b798cf0f4e5b814f7007a5fd1490a489"],["/null/index.html","95cd7621739879130e4b915b60eb5b31"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","835af4f7c18060d1c7ca685b1d43e0d0"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","38d59af68eca514338d865961ace13dd"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","ab6bf31a9e72b4c4a306ba7aa2c3d677"],["/original/index.html","2019a931d1163b937f124dda4d488531"],["/page/2/index.html","1afd2994cadeeaa0a607aa1b5178d982"],["/page/3/index.html","7f124cc74e602c4edc2c4f3d1aa143ae"],["/page/4/index.html","17a691d4977b3695939073c5bcf4e518"],["/page/5/index.html","44eb5281c1e6446a05024472736457a9"],["/page/6/index.html","f72474ca10013b8ec75376f591138750"],["/point-pop-up-assets/index.html","1cc2966674b435a9c402a6d46e57d88c"],["/pop-point/index.html","24b93c935c2d3078675bcaafe789c888"],["/privacy-policy/index.html","72414cc1352b0cdb4a6e9a8e937d2ef8"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","05fbdaebe08570ee5b6b600c9cacf6c3"],["/random-number/index.html","0abc8825ffe3da3eac8f874b6dbab044"],["/random.html","93568a69fb157bbb3ce1e993e310ba20"],["/release-017/index.html","d7a23c5584ee23275ce2079303ac04ff"],["/renpy-basic/index.html","2703e990cdc0137f00869b19e978a5a1"],["/renpy-crash-glitch-effect/index.html","73c06a20755251dc939dc2492030af5a"],["/renpy-matrixcolor/index.html","eefe3f7564ba411f6646ba5068ffcb64"],["/renpy-overlay/index.html","2b1003041659f2e5bc6a06527b6babef"],["/renpy-review/index.html","6b7a474186477391bff31e0c54f137f1"],["/renpy-typing-effect/index.html","f2a763108c56bc422e59580715ca9233"],["/rpgmaker-assets-menu/index.html","92ef5281c033f87ca17e86922d3f195e"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","45a1c2f936f40bc2c7e4fb82074572eb"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","99c8a01a8b823717ca7ed9e39be331f2"],["/sakura-tree-background/index.html","3c6b515797f977a72fd5f832267252b2"],["/selected-button-style/index.html","441a2e80ae1f731d6470f5b58fb5ce3c"],["/service-worker.js","59e26b647d90828f6eecc3851b58a09a"],["/show-variable/index.html","7e57d0a2a0ce874f6eb65233d9f5672e"],["/side-image/index.html","fba9014db9c206e84be5d8a14875474e"],["/snow-effect/index.html","c40022895a82a7ddba646db53415230e"],["/speaking-animation/index.html","f8c71a979c65523fc48abe36434bc305"],["/splashscreen/index.html","b1f9bf3881b72fa9d1ce3615c74ecb44"],["/suika2/index.html","9ebfe0afcf367cd556d14b3b01c3b523"],["/sw-register.js","bb45fad632210323d08c114c504f0b0b"],["/tags/Hexo-plugins/index.html","eeb20f85b2251e072598e711bf349b1a"],["/tags/Light-VN/index.html","a34e085754b3aecddc9940025f2c6e81"],["/tags/acg-creator/index.html","de7237882f270b89f50de52804c11770"],["/tags/ai/index.html","dc2d72630e6eaf16d50cc25da5834262"],["/tags/butterfly-beauty-diary/index.html","31373c083bf801acdda44c2d14f0838b"],["/tags/custom-hexo-theme-butterfly/index.html","cbb72df7aa89e8ff55e1923494a9a84a"],["/tags/custom-renpy-title/index.html","26b11d95227cae03067005b4727bc0e7"],["/tags/dialogue/index.html","e9e54c961b9507539e4ed01ecb070c19"],["/tags/effect/index.html","3ad7140920ecdcbbd26d3fd4383d6c59"],["/tags/event/index.html","df8bb4272d317768323a136f0306ce6d"],["/tags/hosting-own-website/index.html","34e3615c9998682ef5be2f474f76cff8"],["/tags/index.html","a8c53ea54e6c57714e769d02b7c924f6"],["/tags/itch-io/index.html","c18664780143281de8cc459b10e36d7b"],["/tags/light-vn-update/index.html","41314d8740164af59910800b6f712527"],["/tags/nvl-maker/index.html","bad843bbce0a9a173600362b0c780472"],["/tags/player-related/index.html","71a9d2e3b4e5060f18118cd0ff31caaa"],["/tags/pro-tutorial/index.html","52e5e3b27aefa2d9de1a3d316f555fb1"],["/tags/pro-tutorial/page/2/index.html","d0abc0b74d3897057e14e70754ae8ea7"],["/tags/pro-tutorial/page/3/index.html","9ce5914550df4c2cab8e5fdfeb6413a9"],["/tags/pro-tutorial/page/4/index.html","62dfc43af4ba37fec1f678def02ea259"],["/tags/renpy/index.html","cfb28a77232f026aed8df5fdbbc1571b"],["/tags/rpg-maker-custom-map/index.html","1d802916aef16f509cebdb8af56cb453"],["/tags/screen/index.html","f490e182658c63e737f55d8fbd2256e5"],["/tags/special-function/index.html","ba02837f67d0bfd7292e577ab22ae350"],["/tags/suika2/index.html","58bec43a7d50d0949838abca1f14b03c"],["/tags/tyranobuilder/index.html","9ca3c1d6d1476fa28153dbe63eab9982"],["/tags/ui-assets/index.html","ede3d096b16c6c5c2cae3a182f3e964c"],["/tags/update/index.html","e81a4df099c8036a13cacfbf89ecaba0"],["/tags/upload-game/index.html","1ba1d61fe31d8d3dfc6ffe2ce620b366"],["/tags/variable/index.html","22d19a9e0137bf1de17e51737f37c8a2"],["/tags/visual-novel-maker/index.html","41c8440eba1006212da30c02ee6e292c"],["/tags/webgal/index.html","5db3354e699759cd4c31dca6102eccc3"],["/tags/封面製作/index.html","6204169727c8674d4e87ed79c27930e2"],["/tags/背景素材/index.html","54bb6b5ae63905cac5b329a0257ae81f"],["/tags/隨機功能/index.html","33b760df6ef2f6619fa62e4d92b3b6c9"],["/test123/index.html","a554ec7a8e8f5ad714314dbb959c76d3"],["/textbutton/index.html","72d0481a0600379d8025e86ba1bedcca"],["/to-do-tutorial/index.html","ccabb1c35af0f1151672ce16dc1be0be"],["/tools/index.html","c3d8313640c3b6d0480fef91c574c825"],["/tooltip-function/index.html","281ba88006a8a3a37be9c8f9f3865165"],["/transfer-to-hexo/index.html","efd53b24bd2623f9fb4e110347f18d8c"],["/tutorial-update-history/index.html","0d4fee2c555f6bd471c2bac106b9259a"],["/tyrano-name/index.html","07affbcefcdebe11924dc17eb6ba1e54"],["/tyranobuilder/index.html","b475dde1da1c1eef62afd1c5d62a2838"],["/undefined/index.html","69e9fabde5e40297f6f065f28045f3b6"],["/update-20221211/index.html","09aff469d18e69fba54c019b4dfbc9fd"],["/update-20221218/index.html","787c5c86b0e01fc43cfe97e5013fb275"],["/upload-download-save/index.html","c5c6bf37156a7cec118fe1627b71b0d8"],["/upload-your-game-itch-io/index.html","66a9a7f9dcff3791d1ead9f4fcba3a79"],["/use-list/index.html","b2851a2c5e18fa8f7eabbbd4970510d9"],["/use-nvl-mode/index.html","e78c09cc761b27b42b12eed6a627db33"],["/useimage/index.html","18e51d6193961a3f78a6de0fd316e748"],["/variable-change-image/index.html","9053e80d8a36adcda651e6476c6cb068"],["/variable/index.html","eda2c1031120601bc4fb2dede95b11e2"],["/vibration-function/index.html","4320877412a7f6a17d5561ad9e00f669"],["/vnmaker/index.html","f091da071bddbfe9424ea2550d448957"],["/weather-effect-tutorial/index.html","d16c0ac58336cb243aafe1b93cf486cc"],["/webgal/index.html","d99c3d2dd27c0c5d44903cf2c2e3b4be"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
