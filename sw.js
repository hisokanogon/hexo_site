/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","19a547d02d725771bcc1e72eec073a6a"],["/2player-battle-system/index.html","0bc1a97310aa111f1f95b75c6788d276"],["/404.html","ed80bf6626a673b7561790e972535f56"],["/about/index.html","2d089749a2781292d208f935d99dfee8"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","95f15be039b8d09810833b702a92f051"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","3a5f200eb27ba2e266a553f52ab418f1"],["/animated-title-main-menu/index.html","0358723f53ff6f304e54a5f401624952"],["/archives/2022/05/index.html","1434b166ddac5274cd87934c079087ed"],["/archives/2022/06/index.html","77eb554517399bf06b153cc032182fc0"],["/archives/2022/08/index.html","71d1e63921c455151b5cf5c696ff1866"],["/archives/2022/09/index.html","b7c7a28678c387500a7cc4734ba594b3"],["/archives/2022/10/index.html","794a43253dcbaa9d193948f600c25f4d"],["/archives/2022/11/index.html","886eb14a224e8ecedd5ddf84d570db43"],["/archives/2022/12/index.html","b368e97ae8fe96c215bbade2aefedbb7"],["/archives/2022/12/page/2/index.html","7ef8e285a7a2ad4a9e7d74d057dba6eb"],["/archives/2022/index.html","220e3fea5c5e3b3c6b10187101c0ec9d"],["/archives/2022/page/2/index.html","8230d489ac6e39153df0124f2cfa1aa3"],["/archives/2022/page/3/index.html","22fb5587fd9842979d25a5cf6385043d"],["/archives/2023/01/index.html","ec7f0240a31165b905c3e2c46f2a2052"],["/archives/2023/02/index.html","26c5a6096b5a649951066d4ff8008101"],["/archives/2023/03/index.html","45bc51e776deb97181fc73ce3d6f8d42"],["/archives/2023/04/index.html","47e09c162234ea9231889e96becd94d8"],["/archives/2023/05/index.html","f6926dbb2aa4ef987b92dae4b86779b6"],["/archives/2023/06/index.html","9296efc8e5da59042a8f2ff3c6de96dc"],["/archives/2023/07/index.html","7eb5a369ac02b60502c10d44c69cd28b"],["/archives/2023/08/index.html","59ba90c426824af10c3af47fa9294c3e"],["/archives/2023/index.html","e4dd185c6c3a66b04f91576dcae78d72"],["/archives/2023/page/2/index.html","47a68d361125e56eefa491d9a8e24dea"],["/archives/2023/page/3/index.html","3037fe21fd228282007a652de7b9cc2d"],["/archives/index.html","3628e664666dc9056c6f76ca46e04f89"],["/archives/page/2/index.html","57c3d319773d8ffc8040900ba0fff065"],["/archives/page/3/index.html","54244f3c06fc7f7ac4ccc3aedd7e8fc6"],["/archives/page/4/index.html","0d15c03c455ffa8b73cea03e93585f56"],["/archives/page/5/index.html","a8e3041016b70e08126497550a03ca69"],["/artitalk/index.html","d0fd461cefe5c32a8389e9fcf40fdbc1"],["/battle-beautiful/index.html","751bcfd20f2dfcd8e9173e06c94d8d40"],["/blur-effect/index.html","97d1bda58508e6ad6ad5aa3042212c47"],["/butterfly-custom-tag/index.html","b48601b3783b7e4652105471b05b532b"],["/butterfly-plugins-faq/index.html","4470c5f6a0f51b666dda706f643d547a"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","de6894c0a98255f4d1141424a114d2d3"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","1e647d02d4e6597e5fed65c750ce1eef"],["/categories/announcement/index.html","e05e0d799fa419a3eca30fd00da337fe"],["/categories/diary/index.html","4aac65f26171b9a809c4c8f4f0c5d680"],["/categories/game-dev/game-engine/index.html","5d2b2a93659de4a672a4c7b664d0a7fa"],["/categories/game-dev/game-engine/lightvn/index.html","b2f883bdf9daae93f53ddb26a872e23c"],["/categories/game-dev/game-engine/nvl-maker/index.html","4478c547560fdd7d8378c40d523ec475"],["/categories/game-dev/game-engine/page/2/index.html","60b736a8e0c8c488d1d797cde1b1a106"],["/categories/game-dev/game-engine/page/3/index.html","ce865627cd8453a25d3f28dfa609abf8"],["/categories/game-dev/game-engine/page/4/index.html","2d0e7a5b3253944dc00f0cadc904658d"],["/categories/game-dev/game-engine/renpy/index.html","c937cd90bbd57638051d8b990be35712"],["/categories/game-dev/game-engine/renpy/page/2/index.html","eadb1f744d74da3920642ae307059a78"],["/categories/game-dev/game-engine/renpy/page/3/index.html","100f1daae4ce7ed74697cc29984b1cf5"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","f313668304f41ddc38a4092851703863"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","a577a5200e39634b9d99fe27494c2e96"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","11bc2bb86be9b1a187fcef1f56be9ab4"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","608036500abf5f20c9f7cdd0600a4765"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","f4285a59f2e76aaa942f5ac3ef8c54b2"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","55b7b4c4312565fe3fa2067b784ed62c"],["/categories/game-dev/game-engine/rpgmaker/index.html","bfc3b917249be7728c4c29a5eef2d9d6"],["/categories/game-dev/game-engine/tyranobuilder/index.html","ad2e2be02b5be4b25f946008f0a16413"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","18aeccfc766cfbe37f946ae195520ccd"],["/categories/game-dev/index.html","a353bc5dbbec764a4d5c9d054432b020"],["/categories/game-dev/page/2/index.html","4f493c41f7bc0cfc8d00faad7d30ee14"],["/categories/game-dev/page/3/index.html","952d26239f0fbbeadae07c126ef760eb"],["/categories/game-dev/page/4/index.html","02b2921e4dc9052c5a8bb493001f0985"],["/categories/hexo/index.html","e96a7440db9be74ec9d49ae5e3468220"],["/categories/index.html","b7aba8558d100eb239e0fc0430fb488c"],["/categories/material/index.html","a207e12bca893b5b9d2e6b75c9513389"],["/categories/update/index.html","9c30162a03310cfa686ba25bc76d9eba"],["/change-according-to-real-time/index.html","b40e37c061baf60d6464f70fe8862328"],["/change-character-info/index.html","09a5f56d92e3fb9cb492dc1341e02b9e"],["/change-title-after-first-time-viewing/index.html","db202bebe525092ce02d18d55d066226"],["/change-title-based-on-event/index.html","9c07b808ae9452b2f5d079c157ffe1e9"],["/character-interaction/index.html","c8324d464a3301cfc9f9bfeabec9f66a"],["/character-stats/index.html","dca07d143c30262e072a69303d9a0e45"],["/chatbot/index.html","cdf42af738ce3cdabe5ef4ab26bc77d4"],["/choice-time/index.html","3f509388f347dd1a3b66b4bd742ecdff"],["/comments/index.html","9e642489ab88c8d0cd41d94298009896"],["/commission-info/index.html","860b96eae593bd6daa27bd3cb37f608f"],["/create-button-anywhere/index.html","889d115e01387664d0ce94039a26720c"],["/css/eurkon.css","d381a824f7e203202b27273d862884eb"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","a0cdfb60c487e280a831dc0ed7e44b46"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9379a38c51852e6696b3869063003d9e"],["/css/rightmenu.css","c00fe2c5dee39f992197130f16360ff6"],["/css/siz.css","c91835531dd52a66f3ef729785943d6e"],["/css/swiper.css","fd2c004cf92e9728b78a04fae69f181f"],["/css/swiperstyle.css","6a3138d2b9f6a909e09c138c56fab32e"],["/css/var.css","f9c876a57ad4bd169c2644ada246f0fb"],["/ctc/index.html","cdcfaea668d1b743aa8de7dab9ffa290"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","9bfba7ea1af368ddfbac859a18994867"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","aca78c48a0c1c988576fdf777127fc2d"],["/custom-launcher/index.html","e8b6379bc4c740261cd55117d360a3b0"],["/custom-loading-screen/index.html","3e3c74d869c1d57466c143e6c3ad657e"],["/custom-mouse/index.html","a0ae5498aa42691f31938cc84abd7244"],["/custom-music-room-screen/index.html","162313e32017ba12e02b49b48840828d"],["/custom-music-room-screen2/index.html","8a024a6c85cbea5d826b2d326625bd4f"],["/custom-nvl/index.html","74ff1df986134cf073a466e254207fdf"],["/custom-player/index.html","1df1a3493a75e3cc5662f35773516fe6"],["/custom-preferences-screen/index.html","64e0528c7bcdc267ec891888826b5761"],["/custom-say-screen/index.html","99cff89481d9a96ab165a7a6885e5cc5"],["/custom-title-screen/index.html","2cdba0454b3d5f273e2793a4274392b4"],["/define-npcs/index.html","68914300d58296698f2eb6106c18259d"],["/dice-function/index.html","b54c78c6a461479222efaa68af72d768"],["/disclaimer/index.html","58eb08961c775c3cd7bb700d068c9646"],["/enter-name-screen/index.html","27b33ed57bcb1974205de5373245adf6"],["/export-game/index.html","1d24b96b7188b3fbdb014825301193dd"],["/faq/index.html","6252dd97f75b1d8e5afc87495f49c5ff"],["/friends/index.html","8425958c775a176322472b92c55185c0"],["/gallery/index.html","1eb0a2a8e39de1703e3367f260cd1eac"],["/gallery/photo/bg/index.html","72377a153c5150256e8ec93cce25184c"],["/gallery/photo/gui/index.html","a4f9c509025ae98e69df8925785c22ce"],["/game-only-text/index.html","41206e65de63217c73925cb2e21e3f28"],["/gui-017/index.html","00e95616264bbc02ef29e282639f6539"],["/gui-vertical-002/index.html","1c4a4ba78a506b7394c19894a8f3d47d"],["/gui012/index.html","ac58f042452a9582cba46f1e535defb4"],["/gui018/index.html","69ca9627d28a36c8bba062b07e62a9f6"],["/gui019/index.html","c27f0aa5cf74d809ec968a352eddcef4"],["/gui020/index.html","18df3ee531a0a4287644ac5af8ea047a"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e44280ca4871220e3728f87375c9d0f6"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","6b6a11fdfcc82117ff18e20752d9ea86"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","dcc10d80e61f6385fae75be8f8284808"],["/images-tip-function/index.html","1e24cfe8ee669711e88daffda39e5b23"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","e0df6bb1259aa3b8c4d9971f84fff3d4"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","fb843e1438221b523f589ca4f488b5fb"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","c8b6329ac2b462108bf88d50084e8668"],["/items-sprites-effect/index.html","3d2d1b5e4a90918ddb47dfcf26367cf7"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","5a44b4af3a8cdd8a7ed85a24d4fc40d9"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","dfa44010830211dd366f22ab80b2d785"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","8e9c4194bb8c2ce31afe6a3152081131"],["/link/index.html","c6abc6e30ba19f4e55db4acee2f40c52"],["/make-butterfly-beautiful4/index.html","7604eea28cb158bc8cf35781ee864a43"],["/map-puzzle-system/index.html","a43b98065d48d42c74edbc6f62e84d44"],["/maple-effect/index.html","48def8924d77850cf47c0d5abb451a7a"],["/memberships-2/index.html","e4b5931c3fca2f6f20f68a56c5feb7fc"],["/memberships/index.html","53cbee8f8974c4eb8084334b156f9950"],["/multiple-language/index.html","99c679b0f83d9fa5072c5f585d87050c"],["/name-input-assets/index.html","b827998ce064fa8c2307c2f44194a38b"],["/new-year-event-2023/index.html","0794be7e6ec23ba36eb43c9d1462498f"],["/newsletter/index.html","d7318de855183b3fe073a2c6482dc42d"],["/nsfw-limited/index.html","19b5f1196e6feba2ebcc9036f7153d35"],["/null/index.html","17a8dd5670aace80b18e0cc7b8a44adb"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","efeefd0f245f2c39590263c8f5f13792"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","83cbbd2d739f476fb325de7ab87aaceb"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","a801e33698846c814c168b1103cf737e"],["/original/index.html","0c30d02063bb80053f03070fa58af8c9"],["/page/2/index.html","523f2977516e25c9b3d761c708e21e6e"],["/page/3/index.html","6f77682389cfd6bd85d9621fde2dd30b"],["/page/4/index.html","e79d80a6ed0db10b0bb60946bb3dab0f"],["/page/5/index.html","8f4a4f0239efefb102b856285b96d2ef"],["/point-pop-up-assets/index.html","32786098a64e0181cb3d3b29fb66092f"],["/pop-point/index.html","70671a7344c91c38b947e6711b0df250"],["/privacy-policy/index.html","8c4dba3b322836a822f0dcfb51476ea5"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","766a60acf9f162ab6c0c76241340cef4"],["/random-number/index.html","2d69a17cff500bac7655a68488fbbf31"],["/random.html","366fa63ea25a3340b3e0cfe39bb46e58"],["/release-017/index.html","ed815d3521804721d2821dea253e01e7"],["/renpy-basic/index.html","dd7f2c8b012a96e939418159610255b2"],["/renpy-crash-glitch-effect/index.html","ab96bb651684e568ee517948c5aa4e65"],["/renpy-matrixcolor/index.html","fb610af64f479fc01c07afcd359e4f40"],["/renpy-overlay/index.html","a357367bb86f56beebcb2cf8f77c0be2"],["/renpy-review/index.html","e12cc35ff8e00bd695b6ac4f95b4212c"],["/renpy-typing-effect/index.html","bad48ffd78181d8f9af159a744ca12f4"],["/rpgmaker-assets-menu/index.html","01052a322f5659cdc506430c5dcff458"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","4100504294fe1014ae459799e53cd49e"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","ef826a2375ae900a6759c8ece8cf176d"],["/sakura-tree-background/index.html","33c62abe300bf25f4151ae12e2d7a49c"],["/service-worker.js","ab75bd2b9b9d127e52c387929a985f7c"],["/show-variable/index.html","8fe453baee03a15661dc12918ad6455c"],["/side-image/index.html","48f0bf9a958ee6550d02f3d0a0a97456"],["/snow-effect/index.html","77bdbae8c0914ee69f87075e99d90abb"],["/speaking-animation/index.html","303e398b7a9925e0bb139dfbb25b3aec"],["/splashscreen/index.html","dfb44f39b0db0d4c5650d859ac345b83"],["/sw-register.js","d9316a17c6c43d5602105ae1e20ecc13"],["/tags/Hexo-plugins/index.html","5fff155d8181de63f7cbb1160139c9d0"],["/tags/Light-VN/index.html","baac0dbb392d854e216e1962d43227ba"],["/tags/ai/index.html","c53beb4533da63508d53c06e60c75af3"],["/tags/butterfly-beauty-diary/index.html","a53f5f4999f7e8a44afabcde9160eac4"],["/tags/custom-hexo-theme-butterfly/index.html","9c662688b8834071ce15e8504c6d3b06"],["/tags/custom-renpy-title/index.html","9970602e93beea0f087167e872d78603"],["/tags/dialogue/index.html","a1552fb592689b22ecb1a9025ad1de59"],["/tags/effect/index.html","fafea2ac8f890e97a07b0db6e9b69fec"],["/tags/event/index.html","1f7e9de412d4862cfce6607c44f507a1"],["/tags/hosting-own-website/index.html","09917d57a4eeb5e0e4ef5ea03d6c32f1"],["/tags/index.html","3587890e8f46034ec9e7007db7ab12e5"],["/tags/itch-io/index.html","766e784b8dc9a8577cc37d9f13502a86"],["/tags/light-vn-update/index.html","e104881b00bfc813449b164202b2d7aa"],["/tags/nvl-maker/index.html","ed71610c07425e1bc4499a056f0d0572"],["/tags/player-related/index.html","9eab4c646391c79965987daf78f988b7"],["/tags/pro-tutorial/index.html","c2e5ac7ecff1cf9634935f0992c70cc4"],["/tags/pro-tutorial/page/2/index.html","cec91b1c0a628b15df4bcaf1978a616b"],["/tags/pro-tutorial/page/3/index.html","89f77badcb546d936f3e693c3ac8f837"],["/tags/renpy/index.html","cceb01025e6a2c976e1ab09a6801f1bd"],["/tags/rpg-maker-custom-map/index.html","6c58c348f53f471db5897b82d2ac4cef"],["/tags/screen/index.html","0213262a035a48cd2ea4a0e3d090e06d"],["/tags/special-function/index.html","861aa91feff355b1e3e983560a48dd25"],["/tags/tyranobuilder/index.html","33cd94b75cc322ee4c5aa1adb9a588ac"],["/tags/ui-assets/index.html","457a377fb9bbbc1af930f39f8b0b09eb"],["/tags/update/index.html","24f19a1764a57394d6e1f37d7494daf4"],["/tags/upload-game/index.html","a134863e51fefa835eab61a6655ff418"],["/tags/variable/index.html","e3fab4e1ad777771c130306da63257e2"],["/tags/visual-novel-maker/index.html","cbbf9cdd7b8fd7f7f3720c99a4b57a34"],["/tags/封面製作/index.html","10cea250221d4214ded2ffadcbefa606"],["/tags/背景素材/index.html","9abb34ced40a1f9d339e5f95e366441f"],["/tags/隨機功能/index.html","c5dfa51d41b7bcb5833c6de0fdba9c2b"],["/test123/index.html","6e9cda9f31ae1d6c22fea050b57d2e07"],["/textbutton/index.html","59138e200a5906c8fdc954d790d2a857"],["/to-do-tutorial/index.html","4d51f941979337fa3cbd559f917255db"],["/tools/index.html","eae73e6c143484f1633c2bc4de155657"],["/transfer-to-hexo/index.html","5e24aed2319a55b3a26ceb7012285080"],["/tutorial-update-history/index.html","fcb6b6b5772ee8533ba8b59be003888e"],["/tyrano-name/index.html","e43773330ee91c1a3065a43209022682"],["/tyranobuilder/index.html","b05ab686f93a2125894740a0f59de464"],["/undefined/index.html","84e7ccc1d254ff3af3860f23bc4b3769"],["/update-20221211/index.html","76da65413c6be6603bd3aef614c5bafd"],["/update-20221218/index.html","59693164066aaed1581bd7fec718ea44"],["/upload-your-game-itch-io/index.html","023ed17855c28c59974874d187447e63"],["/use-list/index.html","bab140cbe4286eee5f03aa3045a7f4f3"],["/use-nvl-mode/index.html","0f12b20c5c81426eb62c24bf58b732c9"],["/useimage/index.html","ac6f0653763c9a56afb94486432ec80b"],["/variable-change-image/index.html","fc381e218d5fb9df99929549b88fa662"],["/variable/index.html","007c419b5647380e8c4115daca19c89a"],["/vnmaker/index.html","bec7325448de9015b6225a51bc993988"],["/weather-effect-tutorial/index.html","811dc1a663269372a285d0b64b7f4b80"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
