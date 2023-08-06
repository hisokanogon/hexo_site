/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","c2abc8ec320ec8b3f5585a069badfe2c"],["/2player-battle-system/index.html","169ebea0496c378046003da9458ff145"],["/404.html","9f38613364b1c11598734c16c44c8551"],["/about/index.html","9b83a343bea7c5bcf095b952ceb90ee7"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","e574a4fcf63e1786457548d092040c2b"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","2c606e5e4ca1ad9c47889965ff3ded52"],["/animated-title-main-menu/index.html","b16003970678912947e962bb784a2ed4"],["/archives/2022/05/index.html","5c52759d6dbe875e1c4899a9d93741c2"],["/archives/2022/06/index.html","6105801647c06ffdb28a971799d22bde"],["/archives/2022/08/index.html","c0326221b8f7a7f2b2e56791bad0cb3c"],["/archives/2022/09/index.html","47df7259961bfa6c0d16f34d8f638953"],["/archives/2022/10/index.html","8d797d151ea82b9a5a2e1265ca0066f1"],["/archives/2022/11/index.html","5a3e90f1eb28c41ce1a50b53568c2802"],["/archives/2022/12/index.html","24e1b7d0ef37ec3989b9ff89669fa34c"],["/archives/2022/12/page/2/index.html","f4c1140f15c5998a66ca207b6478e332"],["/archives/2022/index.html","1d38e2dab08ea0354d37e3db9ff50c0e"],["/archives/2022/page/2/index.html","21570ef3c88bd1255a975c8ca6155ab1"],["/archives/2022/page/3/index.html","68a1f697164c28f65c277fd4a200056f"],["/archives/2023/01/index.html","9e1c36e129d3ead3338f43520be4130c"],["/archives/2023/02/index.html","f3bb9a8a551847f9984e20180bb5c0c5"],["/archives/2023/03/index.html","6e2381edec938fa0eb8509d1f4ac9e10"],["/archives/2023/04/index.html","ee3dce3f8bd592d074ec5e04c501214e"],["/archives/2023/05/index.html","589c810e10b503eb25b0ebc02fa21fcc"],["/archives/2023/06/index.html","48bce02b3bc888c8348c9ab90dccb263"],["/archives/2023/07/index.html","0ec9a4cc768dd2de82f7158b298fb18c"],["/archives/2023/index.html","40c0aaa52f1a9a79b1026bccbe9faef2"],["/archives/2023/page/2/index.html","3aa416bcd149e84332c30173dd9c5c44"],["/archives/index.html","bc1d1b406c9b3f2d25d19470015f0cff"],["/archives/page/2/index.html","b984fb9747fa1a8fa38838384faeed73"],["/archives/page/3/index.html","42043e0b2fe3785df3564e3e21ff8a48"],["/archives/page/4/index.html","11c1550ae55895347c9eb013ce19f42e"],["/archives/page/5/index.html","665d15c80ac271880f0c6a612955ad29"],["/artitalk/index.html","40cc15e21d7788ecb9ef197a8381c8a4"],["/battle-beautiful/index.html","3c402651d9adc7daa9a657a73e23157c"],["/blur-effect/index.html","43606f53b1afe3a56286f4606d04d3d1"],["/butterfly-custom-tag/index.html","1e761be3c04139f3152d1cd16dbd393f"],["/butterfly-plugins-faq/index.html","862f6b05d660d68207817bf86b80dd02"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","912abb35d4438ec3a1d4101c18efaddb"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","0f5690471fd2893be9f11456689c8eac"],["/categories/announcement/index.html","012130dc03a202f9c5798ec4e9527ee8"],["/categories/diary/index.html","fe2f279850d60af06b4e5699c0434f4e"],["/categories/game-dev/game-engine/index.html","c9c4f999c3b179d2e6b0090d50bf4c1f"],["/categories/game-dev/game-engine/lightvn/index.html","4be131a46a9b082fc843fb186ae2bfc6"],["/categories/game-dev/game-engine/nvl-maker/index.html","0a7782ee82467fa6ad0f7cb7b7e34a12"],["/categories/game-dev/game-engine/page/2/index.html","67a25f3173d343165fa8dba1e5bcb62a"],["/categories/game-dev/game-engine/page/3/index.html","525fdea1be28956e901e61b261fdb58b"],["/categories/game-dev/game-engine/page/4/index.html","b6255ca95826d16e262a6b50199c604e"],["/categories/game-dev/game-engine/renpy/index.html","fe64b8d32919441f1e5d6637b92d7f5e"],["/categories/game-dev/game-engine/renpy/page/2/index.html","25622fc4c8d89efc7fa239d59bacd803"],["/categories/game-dev/game-engine/renpy/page/3/index.html","d835afe099ddf43d89513cadafcd45e0"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","bf61c4e47386706cc5f5a51321ad3772"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","c205a0478282767d4ed68879458ce421"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","af30ab3d952314992b36ac6445602529"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","650d1016b28d2722d6248d95e323218c"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","b37a09478ae46eacd68eb523a5dfdba7"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","7121c27f34b48e8c6bbc4106ae376869"],["/categories/game-dev/game-engine/rpgmaker/index.html","a01a89886c92f968d3070bd1f8bee7fd"],["/categories/game-dev/game-engine/tyranobuilder/index.html","43d14234b4ad8bc5351fa853bcea66dc"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","d4cbbb6da20dac045d7073d165e7d8d8"],["/categories/game-dev/index.html","38fe258d1dbfb1a45df85567d8683d52"],["/categories/game-dev/page/2/index.html","e2720eebf474a8163dc9ba830174bbd3"],["/categories/game-dev/page/3/index.html","6c56fc6edae1a493cf7a09a320f68fed"],["/categories/game-dev/page/4/index.html","6ba7e479574faa8900e268aaec8ee95e"],["/categories/hexo/index.html","5c1013cf2091ecb9221048757ea36032"],["/categories/index.html","f2ae87af3e6fcd74e0b94be1c737fa30"],["/categories/material/index.html","e0447f42e33e474bce305a22a017c50a"],["/categories/update/index.html","9d35664b8a5e6a365875b27e0a2b1a17"],["/change-according-to-real-time/index.html","bd5cba7eec697cedb8f1963252197469"],["/change-title-after-first-time-viewing/index.html","6a4da38be682b45ac03277664b02b580"],["/change-title-based-on-event/index.html","1bec903ba86a520e76b508ab99cb02c9"],["/character-interaction/index.html","52ffbe3cdd7c8bc659aaf8a38d17c90c"],["/character-stats/index.html","e074d20b93404c15c66c71a9d1720427"],["/chatbot/index.html","02553b5ccc89b7a24ec98d0e336c1dcf"],["/choice-time/index.html","c9141bf17d3190f8c8530e7818eb153b"],["/comments/index.html","aafccdf6f0f7c16ad841a63a25974999"],["/commission-info/index.html","867752fe95f237872fe0f911006275b8"],["/create-button-anywhere/index.html","e6706d582f324f80f9beecdf0df0d568"],["/css/eurkon.css","8e0a7f872d8ddbc39a0a8c331a8da0f1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","06d52acbf4e2d460d5c76e4693ca3b3e"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","217b586659799f849cc65edcfa3e986c"],["/css/rightmenu.css","786cb223f96db5fba0aae2ef5ad391d8"],["/css/siz.css","7daffba23b32c5e8d71e2bcf703fe5cb"],["/css/swiper.css","567b04b05a80ac664e85cd427d41f2c5"],["/css/swiperstyle.css","6a1ecb58435a8256da5bda07cdca334c"],["/css/var.css","70a92c1cb20c7945a54e044222c5fe59"],["/ctc/index.html","e6a07c55d12e0ae7ceb6275cd0dabcdb"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","95bee109ec0362a78c310ec2690bc278"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-gallery-cg-screen/index.html","ef7e1f6a5fe0a6073bd9ff7acb90d41f"],["/custom-launcher/index.html","888a1c73c2d9c449a67a566796fb46a2"],["/custom-loading-screen/index.html","65d3b81ad5197f872e46f367737f2786"],["/custom-mouse/index.html","00d9863ec6095000e41fe2f77b4600c0"],["/custom-music-room-screen/index.html","c151dae59b9f6efad9f543eb88b380b7"],["/custom-music-room-screen2/index.html","3ff0315462286a19e06bc5c36eecf325"],["/custom-nvl/index.html","143a40a5328475e4ed954efc1b1a10bc"],["/custom-player/index.html","1d62c4a453ecf4bb5033030b795bb74c"],["/custom-preferences-screen/index.html","312875d458e15a7c63e869a65fa4c1cc"],["/custom-say-screen/index.html","c462d5d74c6dca7ed40d810537819568"],["/custom-title-screen/index.html","84a72ba49688a03c202644f489051041"],["/define-npcs/index.html","e08c8aec18b83c0120212bfee4aababc"],["/dice-function/index.html","a9b8bf1f5f1801b4d70062b98c6070e0"],["/disclaimer/index.html","b8cfff5c8555449ce871fe4f8489eef5"],["/enter-name-screen/index.html","994fe9970e389499f96c9f9485154c87"],["/export-game/index.html","7d63760dd1eb0254c91342f18b0cc397"],["/friends/index.html","616c1266156157a34eae667a91b3562c"],["/gallery/index.html","76c2cade9c4077e96ab6f628f10e745d"],["/gallery/photo/bg/index.html","eb9dd3a033f0e38907f68cab1f2c17a8"],["/gallery/photo/gui/index.html","99a4358c23fad9e991b5252803d3e208"],["/game-only-text/index.html","763d7d31415df4059ba95a755a338092"],["/gui-017/index.html","d41c538062e594b51bc652774ebbc975"],["/gui-vertical-002/index.html","1bb834f095d77ba1319d546ab90cead4"],["/gui012/index.html","da52edf35d279230455e0460af3530e2"],["/gui018/index.html","6904b36b6e24c7c9aa5c14d5c4ee5033"],["/gui019/index.html","ae320a759a7205940c6a06d1cf63772c"],["/gui020/index.html","50706d6c65935410501c4d4803cbe480"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","53813d5f889556da221db0e20792c0ce"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","3adaf26148699eb5126e5ae7efecc16d"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","5b9407af83d3f2d368d28601ce63c7a5"],["/images-tip-function/index.html","6d44bb50840c11dd745d9e283597bc4d"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/index.html","87bc8fb2358c55eb0848ec093501f54f"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","7142e58f95abf6008f714ec573a51c09"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","5ea86a4d3b94667dd9a6194fbcf0d8b1"],["/items-sprites-effect/index.html","b907afa2152a6f8d7d40f39b487b3bd5"],["/js/countup.js","5f2f77ec867d7f85d3bdbad2bf804fac"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","1c4831b89fe839fa0d76f5458e1ff9c2"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","f1a7dc422a5c731ec52a743d53a8c20c"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","739e54b0175c7041af3329c74625722a"],["/link/index.html","43ef4c4f08a93a2b0562539549884318"],["/make-butterfly-beautiful4/index.html","561f840ccf1b6514430ed55235645707"],["/map-puzzle-system/index.html","5c6fc29271bf57b0ae1b69f28be12a8c"],["/maple-effect/index.html","c289aea3d45f8fda185b4c95c554a2c1"],["/memberships-2/index.html","ed96592098ad70cbccdc03196b0002d2"],["/memberships/index.html","bae5d932e683f8bf51857cea9068971a"],["/multiple-language/index.html","04059a0087a7228c82455620c1abd54c"],["/name-input-assets/index.html","76ea0deccef441d1a79f93ef6090f02a"],["/new-year-event-2023/index.html","4f29afb15706319584102feedf928f46"],["/newsletter/index.html","6d45efbf9d4dbdea63f44009f82e8193"],["/nsfw-limited/index.html","7a464e947cd7f6283379c02d0ffc2c84"],["/null/index.html","a65b29732738e5f9f52fd989f2ea1209"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","2dabac8ab688a8df4a3685fecabcff5a"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","e7f67bf9d9d73789399d7eeab0b5c47c"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/openchatai-renpy/index.html","62f641e63528ddf2fbbdc0c6fe268e57"],["/original/index.html","20fe15467f281eb885579a47495bac4a"],["/page/2/index.html","8d208b6d930ddd0c04b7e4fd6aeba9c6"],["/page/3/index.html","a8bc8188edb313b9e16010edc4911030"],["/page/4/index.html","8b50074380f98b9c2a18e987ea7e3faf"],["/page/5/index.html","5b09f016e4289c5e81dd071d6b67924b"],["/pop-point/index.html","47d0e7cfda0e79d310d3d0ab277fefab"],["/privacy-policy/index.html","5b096ad963a97200d5646a6e0fc23c97"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","6104ed802e9c752948dd041faad516fe"],["/random-number/index.html","a6eab4fd204475746e5b8047abb97f09"],["/random.html","be9bcf67bc1798c5a2ee3ef4003a3349"],["/release-017/index.html","96d3fa03aa35c6f4a87d0cea86e502cf"],["/renpy-basic/index.html","7f5c4f8915077c3da3bfa093763c6582"],["/renpy-crash-glitch-effect/index.html","9758d830fe8fcb294c775a57de51b9d5"],["/renpy-matrixcolor/index.html","735969c83d3085d88abdeb7a96f35fab"],["/renpy-overlay/index.html","3d772833a1efd39ed57607ccda0f9df8"],["/renpy-review/index.html","ebc48f760f7ca744359062255c6985ff"],["/renpy-typing-effect/index.html","0392371531d107876fac26d80d6e8690"],["/rpgmaker-assets-menu/index.html","6404e8e6d710c9a409474513e8ddbb13"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","69524acf3aee8b3c8b298da7384d77c4"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","3147c7a7050d8d1b23e424e363b2981c"],["/sakura-tree-background/index.html","bae423435da90b298fe4f5491d2d7146"],["/service-worker.js","8e1e9080a20413f632fae1406658bd49"],["/show-variable/index.html","74cc9a605b93d67ddca9517ae1a79790"],["/side-image/index.html","2ec11b6a8094d524e5456e8b6738b937"],["/snow-effect/index.html","d4be88c4d2cafdf957e74ede3dd21162"],["/speaking-animation/index.html","a08b63bebc5200a0b54fef2125d277b6"],["/splashscreen/index.html","d4b0505de1a5abba5dac8e64d600d03f"],["/sw-register.js","7b954b8142ccec9be26eada8c5891cac"],["/tags/Hexo-plugins/index.html","ce42daa41e6d00778b574fe563d8a6f3"],["/tags/Light-VN/index.html","4f835948735063c5723ab288f3933c7d"],["/tags/ai/index.html","abd2daa2820754d47d47e608fcc9feb3"],["/tags/butterfly-beauty-diary/index.html","0e4aebf74a3b2f813b88736f6379d88d"],["/tags/commision/index.html","c2c4084fbc440b80094e380f61ddb0b1"],["/tags/custom-hexo-theme-butterfly/index.html","9d9a29189a6de44f158e7933695106f5"],["/tags/custom-renpy-title/index.html","c6666b3ff9bb1104d4fbc31cfe65ab7b"],["/tags/dialogue/index.html","35a64e6344e084fdd1151c81e8a85b0b"],["/tags/effect/index.html","748cd07e07736bc5a5d95cf30916632a"],["/tags/event/index.html","128bc48dfdd005f47de91bbd6fd0c076"],["/tags/hosting-own-website/index.html","21c26bf1905b1aa24a22ae072e7a2c9a"],["/tags/index.html","733f7e08cf0ae83783493f328db943bf"],["/tags/itch-io/index.html","cae5519f9f1bf28df0281704ab14e33f"],["/tags/light-vn-update/index.html","f28a139ccc4dcb23d38ed119566829a0"],["/tags/nvl-maker/index.html","d6027a56e4ddea1396a7b0813c8710e6"],["/tags/player-related/index.html","42e42e1bf9e80d77e658d594c1fccd3b"],["/tags/pro-tutorial/index.html","5fb1ea5ce313e56b19314d0adae4df5a"],["/tags/pro-tutorial/page/2/index.html","b357a1d2f89a91778fdfec27f5467d17"],["/tags/pro-tutorial/page/3/index.html","e12ed45871cac4b64caa3f44ebc6b03d"],["/tags/renpy/index.html","c1fd787ab0ee3793c6b5b86b43d69b77"],["/tags/rpg-maker-custom-map/index.html","6c41fe9b96eacbeefff41624ac710fb4"],["/tags/screen/index.html","b0d69c43f6ee81f3ec3bc0121b0835f9"],["/tags/special-function/index.html","f544b2aace5e789651285f634aa706d9"],["/tags/tyranobuilder/index.html","232bcef3bd448e03294401130faf2e82"],["/tags/ui-assets/index.html","28d5b35dba0fa4d4cf0ecdcdce576a4c"],["/tags/update/index.html","2aea271c08edaaf0fa46f68e7c693760"],["/tags/upload-game/index.html","c20ac0f34bf9dbb6fed3131f2000db4b"],["/tags/variable/index.html","e48581847cbfafc0ba9740bee20d0657"],["/tags/visual-novel-maker/index.html","ce2f4f9a23381eed540843e11cc53fc0"],["/tags/封面製作/index.html","f7c20a34203575f225e25a9d8c1d4eb9"],["/tags/背景素材/index.html","2c0b1dc332d271a1dc16aa5cc60d70bd"],["/tags/隨機功能/index.html","e40e53e6a2a955132e0539f290a25535"],["/test123/index.html","794cc08c6f12a1f24879044ee95399b4"],["/textbutton/index.html","8fae6cb25f942a3634d538bdf7010682"],["/to-do-tutorial/index.html","022af471a0a7ad1d74c2a11ab54c0d1d"],["/tools/index.html","9d63840d36e3290164236ab6861dff3b"],["/transfer-to-hexo/index.html","46ef9f2415cd587062c85ec43c24c886"],["/tutorial-update-history/index.html","3538905fdb6e03304cda4eaf8cb26c81"],["/tyrano-name/index.html","cae58bb3705221468d0c72bdbd372f61"],["/tyranobuilder/index.html","858665db393123cc046c989f783159ee"],["/undefined/index.html","7c7e02c23f924bfd220cf05c14417368"],["/update-20221211/index.html","3ad53f037dec4faa26a4b219b5ff0aef"],["/update-20221218/index.html","f1eca3c908498b6b1814012f71797a52"],["/upload-your-game-itch-io/index.html","62782fe1e1cdd7a4b3c989c96552e0c6"],["/use-list/index.html","a29f143c343bf56946cfd5ad563f7645"],["/use-nvl-mode/index.html","fcd7aae55d042492fa0160fba1a56cf0"],["/useimage/index.html","282efb2a05eb533a5927462c0aa64046"],["/variable-change-image/index.html","32ab61caf0c79561aa2928d72af366ea"],["/variable/index.html","75d88514a03d61c57e9d12f4b9f0b2a7"],["/vnmaker/index.html","b464d53af65f72098351b572c7ca722e"],["/weather-effect-tutorial/index.html","edbaf242038b84e97692fe57e9e41403"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
