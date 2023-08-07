/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","aca67ae16e61111a98720522015f751a"],["/2player-battle-system/index.html","346363db08e12d007eac10c1e0470579"],["/404.html","c7bfe667806eec085fecaf7be8d6b590"],["/about/index.html","60dc7fd3dbcc1398f701e6145e8b69aa"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","c5d02fdd0b2f885330e8c744229bcc82"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","dd0d65838d975955e707279ffc77c14e"],["/animated-title-main-menu/index.html","e17171620b152e0d8d25641dc5d81435"],["/archives/2022/05/index.html","bbff72a55f203e48640c8adeb836f262"],["/archives/2022/06/index.html","fae4925eed214f0f938db010673f7449"],["/archives/2022/08/index.html","4db0867f4109e7631f4bd05131777fdf"],["/archives/2022/09/index.html","e32c1d10c2f63a0961b663b5efdb066a"],["/archives/2022/10/index.html","f89d9f9f15be6886e6f316396056de81"],["/archives/2022/11/index.html","317d55c4cf55d50f48483f3b5be1f24e"],["/archives/2022/12/index.html","e6ae915ce2c13d1b9825c000f4cd694d"],["/archives/2022/12/page/2/index.html","516d5df121c779ed6ec309fc2d6c50ed"],["/archives/2022/index.html","85904635bc6a1518a9073ad2c9982f04"],["/archives/2022/page/2/index.html","ad43b2935907ceeceb4f20176b2126a5"],["/archives/2022/page/3/index.html","d955d9893c107e3d035ce3b4f6fff828"],["/archives/2023/01/index.html","e63233a5bb018553835558eb8a95453c"],["/archives/2023/02/index.html","50f19931cf89466c434a9dcf6de00a98"],["/archives/2023/03/index.html","9577f058f4dd99c81539423ed3ae4767"],["/archives/2023/04/index.html","7cf80ce76be5c40567779e1ccab82346"],["/archives/2023/05/index.html","12f69d264ea69c84ffdd0ff07b51c5af"],["/archives/2023/06/index.html","89bad46c86261bbcbf1b334256f8ca0b"],["/archives/2023/07/index.html","753272f340456986026a60731d4ebfb5"],["/archives/2023/08/index.html","1b86ccb42fc14b855c863b3b5f85d5ad"],["/archives/2023/index.html","b4724b6959f34e2ab72f89cc498c2461"],["/archives/2023/page/2/index.html","7b2aec7fea6811d77defdb4ccca67eb5"],["/archives/index.html","6538383bfa7d645b50a7342a292eb828"],["/archives/page/2/index.html","eb098eb39017327402509936a0b7fe3f"],["/archives/page/3/index.html","9767269da430fca79cb6d6b3531fec58"],["/archives/page/4/index.html","46973ae2d2cd5130fa89fd18997ac38a"],["/archives/page/5/index.html","0ca333022bf427b7e5dd834325f7848a"],["/artitalk/index.html","e32eb68f9a92589cef1dfade6f79f707"],["/battle-beautiful/index.html","0275f118d31011dd81ef8743a99e2b1f"],["/blur-effect/index.html","5880d36a7e6f873ad9def6297a7ad3a1"],["/butterfly-custom-tag/index.html","57e79816e57c145229e36d2aafa2a58f"],["/butterfly-plugins-faq/index.html","31c0830574a512d37a417d4c92beb6c3"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","057439ee9012fca44e499366b3c1c343"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","d751d7e47c7a2debc655e9b6085b9350"],["/categories/announcement/index.html","ce459775431fbcb0793fddc431051999"],["/categories/diary/index.html","3182f8d116175cc0f9e0575f4990624a"],["/categories/game-dev/game-engine/index.html","67e50e262dc556ed60d7403bd0391929"],["/categories/game-dev/game-engine/lightvn/index.html","69bffa0fff9d518bd03f882537356c53"],["/categories/game-dev/game-engine/nvl-maker/index.html","4694e50d60b5a22224979c0936cf5820"],["/categories/game-dev/game-engine/page/2/index.html","9de533ddbe3e47ce079ed63ff11935ca"],["/categories/game-dev/game-engine/page/3/index.html","d760d9b762a3c5308876f306a94314a5"],["/categories/game-dev/game-engine/page/4/index.html","d1e9b19b734ee72af7f99fef0bf5e838"],["/categories/game-dev/game-engine/renpy/index.html","50c646a68377d3ec12e4a8c8eba44a41"],["/categories/game-dev/game-engine/renpy/page/2/index.html","9a0dc45eda721805a62c9059bcd5d515"],["/categories/game-dev/game-engine/renpy/page/3/index.html","777b0d70afe7409dfc8fe5709ef2046e"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","e3d5b785498a51413208467cac4ca821"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","a86f7cabaea1f30f645252757a6be1c6"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","12858fa4234e602630ed9e56ed7cc9d2"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","99b1cc55b3516b66a57d1b0c3f5b7669"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","a1fafdecc14cfd156756d1aec7a10d98"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","adccbadab857d2b57d79782ea54d1bbc"],["/categories/game-dev/game-engine/rpgmaker/index.html","1fe0be6c7b28fee84dc0da6934c35242"],["/categories/game-dev/game-engine/tyranobuilder/index.html","6777a074fd46ffea3142762c934b82b4"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","6d46017b3ee1b3901a5427abec03fb3f"],["/categories/game-dev/index.html","003a80a8f474052004b5271c97fb5f78"],["/categories/game-dev/page/2/index.html","a7e6ead54bfab11e71e75f6a9603f6e9"],["/categories/game-dev/page/3/index.html","1705175fb7902d73f5d8be8ea881c077"],["/categories/game-dev/page/4/index.html","8f9fea0dc21e24c9c230ee30a39b2811"],["/categories/hexo/index.html","675365ac751e7fd8a78377e774fef149"],["/categories/index.html","9c152a781a26bf37a37074489333840d"],["/categories/material/index.html","af6ed83758a7df07e73f7f4b62827642"],["/categories/update/index.html","6e1f1df6c6b93b6421c9a8c62a4c8091"],["/change-according-to-real-time/index.html","b56a03151747d4ec24986b5cf37a93c0"],["/change-title-after-first-time-viewing/index.html","373b6c1e6c03f14bea00539353d75ed8"],["/change-title-based-on-event/index.html","579362e9b77e01d299c9c5c194648d27"],["/character-interaction/index.html","ac7bf92519cccc488e475b108beb281a"],["/character-stats/index.html","9a92036143c040de7bd8902a2e3c1f22"],["/chatbot/index.html","0d9f5416dadca473b519a6742a0e0fad"],["/choice-time/index.html","bf507c0ff5658ce0f0e970491e6d771a"],["/comments/index.html","1b9c0731d256592711b016d50074afce"],["/commission-info/index.html","fae899b53d394ba8d8f7170edfa5d3df"],["/create-button-anywhere/index.html","a4432ad8b0f6cbf82f0232dc4ed7cda9"],["/css/eurkon.css","b95717adf6eeb6e7dbee1dea3cd19066"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","bef071f32df035cd639549291c2b0525"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","412edab8c25d4b695e336585f907acce"],["/css/rightmenu.css","a615166ea51b851c120437c405300773"],["/css/siz.css","1e96291fe535f4376ad66b9e04bbacc4"],["/css/swiper.css","e9e5d9112e14cc969af078c7f662273e"],["/css/swiperstyle.css","34ac3d4abb9324a479e4fce26f50c801"],["/css/var.css","c3c71720418c54d232a6e506fa7a1d04"],["/ctc/index.html","401f9c1d6fab216edc01f74871ce00aa"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","3d62f0077d393cabc5669566882e0be6"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","f527cfd93d44863b4104bfc34142c624"],["/custom-launcher/index.html","aa911bf56c761ce83fc2ec7dd5a94f5c"],["/custom-loading-screen/index.html","30f95b79ee340227ebd65e836dd379d5"],["/custom-mouse/index.html","ca49f519362e70d32b41f797d17bcddc"],["/custom-music-room-screen/index.html","724867e9916f86f117af436cf93bb2bb"],["/custom-music-room-screen2/index.html","fa3393e2bbcb955f8c192c98c2b0cd8a"],["/custom-nvl/index.html","eae1d555d984947a3bc7c24b62a6885f"],["/custom-player/index.html","5ac2e91bcf0d45480ee95447ecd2a9b3"],["/custom-preferences-screen/index.html","e9c1a4d5f889c1cd076ac29110b6e9c1"],["/custom-say-screen/index.html","e589a48889d9e153f74864741279f5c9"],["/custom-title-screen/index.html","83eadabd4fe49e398dd311e89d8cee69"],["/define-npcs/index.html","bfa9b97f4b8ebe173580d5027d7df545"],["/dice-function/index.html","e789438c8f278878290753cc9cf5e204"],["/disclaimer/index.html","97cbfbe4529a4ea4d67df37ed2257d0e"],["/enter-name-screen/index.html","8e22fe7beacb539a9a4e64e6d75d7793"],["/export-game/index.html","f34cef53e29d9313f00ef8e1d8928cac"],["/friends/index.html","b7bf18c1d8da99decea8680a0ceb4fc7"],["/gallery/index.html","90a031cf5fc541bd0f3d26e352e5ceb9"],["/gallery/photo/bg/index.html","a90fe5f35e54ee39bd685c8bf4404e04"],["/gallery/photo/gui/index.html","f4b1aab4330a03130859e586015d0c69"],["/game-only-text/index.html","45993c6f07a0434daf8e27227e16165d"],["/gui-017/index.html","3717f4f096f4241c2bcf11cfef93842a"],["/gui-vertical-002/index.html","7c733e14ebdd9cad4c512c53511e6104"],["/gui012/index.html","5e70e083629c4c4e431760fbd45ec70b"],["/gui018/index.html","fc58f01134dd18e8b528085084108519"],["/gui019/index.html","977a39dc3535d1f0b10c5d989f39814b"],["/gui020/index.html","2f10dcb0b67da50730e3a9de997822ab"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","1b7fa33ad8b7d25a72356e0584820fb2"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","c3822cbdafb6f01fc251fb207363f465"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","365cf51067341f566231858cad48aef1"],["/images-tip-function/index.html","ac2c90388e3500aced3113ea8ec1daf2"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","b014fa6921f4a78de9b20f3e68450b04"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","d930efeddf1db8a2acf0b4cc2e6c8e14"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","f124e79d8283c6e3a967c21131cede8b"],["/items-sprites-effect/index.html","8f746e07ad90b1c5240240338fa9d381"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","bc3c00cba6fa8d4255adf18b40a85d70"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","e0a3b9573e0f2dfaacb1a53e03dbf853"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","3f62218d5a792a41167e30a96405c8d3"],["/link/index.html","9e09a1ff759642a118d4d926d59ca099"],["/make-butterfly-beautiful4/index.html","9d49796e43f77dd0a08fa5b189aeace8"],["/map-puzzle-system/index.html","1bc0ffdf9e99a6f091278090d1fa9427"],["/maple-effect/index.html","fbfb457a16b2344d21bcd9045fe3df99"],["/memberships-2/index.html","1517c56644783f9dc0958820c4b362ae"],["/memberships/index.html","fd70227fd22e3a8c3e44d5e1fd860c2d"],["/multiple-language/index.html","324161bfe6c8cb5f44782820f7cc1b45"],["/name-input-assets/index.html","02e0bda0559e79e9f0415bd039365e80"],["/new-year-event-2023/index.html","d289fff22adc54dad1e1ea13784f69a7"],["/newsletter/index.html","6b49dfff9cfcdcbdff9bea36593d90e9"],["/nsfw-limited/index.html","60b08d315505d15eed46fdc6c1ef0bdd"],["/null/index.html","e7bb48b3dcaca3826c3ac1aaa12ae296"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","4e6f6dbe3f6448977620b5437894d709"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","7a55f370870cfd0dbbcd3c49b271adcd"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","b1848e04229e6a025c1d6460af892bb9"],["/original/index.html","db8ac4906a497f25283982826e1d62a9"],["/page/2/index.html","fa3db9999f3e0d3a67aacae2713d7edb"],["/page/3/index.html","fbb02087bf73c6eb0ced231a4a538bef"],["/page/4/index.html","bb294e68e5f5f9f7f27f9c14c4bd8431"],["/page/5/index.html","4e37bc0e63c09baca25db9c822ea862a"],["/point-pop-up-assets/index.html","16dd184e6089e71b68342e5ab46470c7"],["/pop-point/index.html","8adee73b14510e9d361a9c70e2fa8749"],["/privacy-policy/index.html","f96e559f95929c02c79cc9919003a4a9"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","960b4bf5631ba34aa15813cc7ba60d0d"],["/random-number/index.html","6726578179a16541a78bfa3757449f0c"],["/random.html","b6d35c1ed44307743812cd31737e4e76"],["/release-017/index.html","16212c992b71aa034190305dd1710f02"],["/renpy-basic/index.html","1fd459e2c602217df68a7d81cd64dd79"],["/renpy-crash-glitch-effect/index.html","de9c3e1140f83ac89260cfe4baf5d00f"],["/renpy-matrixcolor/index.html","928db1359b55e677a259c38fb1dba7ae"],["/renpy-overlay/index.html","7f6f789308594c745d1af65282098614"],["/renpy-review/index.html","c723f5c0cf7295e2b10dc7ed2a870ea6"],["/renpy-typing-effect/index.html","29d042c685ba888653a32b271160cb0f"],["/rpgmaker-assets-menu/index.html","d21575bd6d7031ef571060b4ab98d87f"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","c167a5bdce89c538d5fbe627ce275a63"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","a781066a940eaf9d354c005a20475b2e"],["/sakura-tree-background/index.html","972d35dcb52781166d82fb6a4fca0097"],["/service-worker.js","05ef9a2413c6a2066f030b221c27b244"],["/show-variable/index.html","5c7000c4467f05f62ad599d785fc18bd"],["/side-image/index.html","092bf61ba5f8d49ff5cf5f33c0e2a12d"],["/snow-effect/index.html","7f197fb84fe0c24f97ba736781623889"],["/speaking-animation/index.html","f9e87c94fea167f6c7e8933cc09e98be"],["/splashscreen/index.html","898b6c5a0cccb9660eea01688221f1a0"],["/sw-register.js","3a635f5dce398ff6e48ebcc6613e2047"],["/tags/Hexo-plugins/index.html","e9c60392184716af7bd4cfbcb2c62f24"],["/tags/Light-VN/index.html","5de7aad668498037ac29b9647dc03f48"],["/tags/ai/index.html","9ef3fd7b29cb21e3d5c24918e7acda1f"],["/tags/butterfly-beauty-diary/index.html","fa52b2c3ca1d131f3aa660b7c6fd0398"],["/tags/custom-hexo-theme-butterfly/index.html","9d3d05eda07f9bf5e826fc23241e532e"],["/tags/custom-renpy-title/index.html","b4cadee61dd0665c291205c827e4daf9"],["/tags/dialogue/index.html","973a2fae7780c2f5b1bc3c5fdb17974a"],["/tags/effect/index.html","ae7dd1dfb93fe9bcc5f7ab886c4fd233"],["/tags/event/index.html","1332c2bdfdd142d77ea67039888e192f"],["/tags/hosting-own-website/index.html","aecbe2a622f8e2ebc69de5e0940337d0"],["/tags/index.html","a79fec0adc414f5f1346ee1aee95c95f"],["/tags/itch-io/index.html","32a36ec715dd3db94c3a060a8dd00570"],["/tags/light-vn-update/index.html","5fe1e0f8eeadb710b9cc5ee33f249e04"],["/tags/nvl-maker/index.html","222d253263793dc0a0ad03c6949cc755"],["/tags/player-related/index.html","4ada7a76ec429fc1c24e6eae7009b381"],["/tags/pro-tutorial/index.html","74947196d484259ae573f4b7a16de9cc"],["/tags/pro-tutorial/page/2/index.html","f5d620320dc73005e11567e07da5d659"],["/tags/pro-tutorial/page/3/index.html","1057810e0401c88b3c86d1d1d050765e"],["/tags/renpy/index.html","d2ba1b5e1427ddc3eb6b4cc66a144baf"],["/tags/rpg-maker-custom-map/index.html","f1f9cb8f589be550a367c874f5e5f5f8"],["/tags/screen/index.html","2ebddae8cd2a8a091828a636c3eb3f9a"],["/tags/special-function/index.html","a59d63829bb74ebbd5810c1278df5556"],["/tags/tyranobuilder/index.html","9dfa799cf3b4311588d1cfde6896856b"],["/tags/ui-assets/index.html","781f36d901c2f33121aca51974f0cb56"],["/tags/update/index.html","a74ced162bb78317142bdb9fc4051fa1"],["/tags/upload-game/index.html","04ad4edaf93a386c9de3aa2ea8536acf"],["/tags/variable/index.html","8307f825185578cbb64d140e990ffd7c"],["/tags/visual-novel-maker/index.html","c9bb404b69e315e7dd00737998723201"],["/tags/封面製作/index.html","5ec8002cde07a0726e6d5796c1eaeb96"],["/tags/背景素材/index.html","b2bd56e61ae3923322bdf5ec97613dd9"],["/tags/隨機功能/index.html","4b3bfa180f021c93e9df74af29549b82"],["/test123/index.html","1c275027b79cb0e91e181305afa0e90d"],["/textbutton/index.html","d5257c2ac9f9009b43da8a2ae191387e"],["/to-do-tutorial/index.html","2bbc3d1f42d50733c871e1f84aef458a"],["/tools/index.html","88c1ac952ece795c10fd8ab9b77b7bfb"],["/transfer-to-hexo/index.html","70820365fd7d6cd64eb2ee89f67106a0"],["/tutorial-update-history/index.html","73702b0b39074ab8f2ea515cc657422d"],["/tyrano-name/index.html","4b76e1d0e0f5d7d70425c0001497abd8"],["/tyranobuilder/index.html","f4e009bd6ebf5da9e36f04b14dab7221"],["/undefined/index.html","590e41ac378bd4e3a5ca118e92e84ec6"],["/update-20221211/index.html","2228ce7861df70268f843668078fea60"],["/update-20221218/index.html","9d42ab584c02c7e11b6602cc30582dd6"],["/upload-your-game-itch-io/index.html","2a338f8c7ebad853e0fe78c68c5136ea"],["/use-list/index.html","c3a65c5d88c4326edfdba7df12382cfb"],["/use-nvl-mode/index.html","fc81244da605fe2eb1ab42bf79149d59"],["/useimage/index.html","0139d644974814d3760f0448c144527c"],["/variable-change-image/index.html","7380be41200c25a3517dac71df751a15"],["/variable/index.html","fa8968353056893ccf2727d4e9506b67"],["/vnmaker/index.html","3f8d8eae78855b35920eaf282fd8562e"],["/weather-effect-tutorial/index.html","13b640ed04fc82bb73174402dc01f4eb"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
