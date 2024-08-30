/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","b738f5aa1228bb46e3e8fa7ceab131f1"],["/2024-future-plan/index.html","dcd9f88ee72bf6886bd4f85420942f9d"],["/2player-battle-system/index.html","6ceab51bef7e17bd4b39a2d3195c1fc7"],["/404.html","097fd0ae0aa10c021d6e8f75f0952ff3"],["/about/index.html","b71cec167deca1721cb0475c24223299"],["/acg-creator/index.html","dc19beb65b7a705adf240d42fa73de10"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","d9a88ecd477bc497694c02eff8eba95b"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","5e111b163e9e4692b3f6ce496c3dfdab"],["/animated-title-main-menu/index.html","2a283d7aad97abe7b0c3d993a810b5b3"],["/archives/2022/05/index.html","10a95c0dae6ac7b799f7fcda63a631ce"],["/archives/2022/06/index.html","12589ec1825fb6e9dcdaad2793332ec4"],["/archives/2022/08/index.html","f73053d7540d52b04e6729e669ae206e"],["/archives/2022/09/index.html","b167745ee7f9b1370e65cdce293e3da5"],["/archives/2022/10/index.html","73b96db960dcf760cf48f6203a6141a6"],["/archives/2022/11/index.html","f91b392c586a3c7115201fa9080dd12a"],["/archives/2022/12/index.html","9b6d06ab9d9e93a3be5ecba051857d0e"],["/archives/2022/12/page/2/index.html","157094250cb0b8b75d93e0b2ec07fa77"],["/archives/2022/index.html","740389f9227baaa59527c5b82cb3c5f4"],["/archives/2022/page/2/index.html","95baf9ff83e39734aaf2393010806894"],["/archives/2022/page/3/index.html","a1ac85ca3cec807830533e5355544ccd"],["/archives/2023/01/index.html","e0bdaef231fd4f556de6c6bd4ae7ebb4"],["/archives/2023/02/index.html","9fcf800b92387a2d0f6bbb2693fdeddb"],["/archives/2023/03/index.html","1b32971378fe2987265239203d33ea75"],["/archives/2023/04/index.html","c987d2d68c23fca97377324580fde20e"],["/archives/2023/05/index.html","62dd118ea8cec99da1979425553dc724"],["/archives/2023/06/index.html","7424c2127e42361b5d503ef99ee700d3"],["/archives/2023/07/index.html","99acb06604ff63e19d210fb1fa52fea0"],["/archives/2023/08/index.html","a643714cdaa23a03f3e3ede9497baf54"],["/archives/2023/09/index.html","bb94a8c357d2d40fc6cbb669ce15334c"],["/archives/2023/10/index.html","88e957b477b012bf10af29047ad1cb10"],["/archives/2023/11/index.html","a7bd9e5b425f82c1a657f297d952a0bb"],["/archives/2023/12/index.html","2bb3c706d0f7798a9d7bc378bb3e2e54"],["/archives/2023/index.html","04b7a2829c78d9f3340ba84a6fec3a5b"],["/archives/2023/page/2/index.html","3cae9ef63b8f4a451c1b124bdc064c71"],["/archives/2023/page/3/index.html","e6e51348c6fc7353afbae625a05fa9c9"],["/archives/2024/01/index.html","69dfcfa7b60700a5292e8001748e510a"],["/archives/2024/02/index.html","cd765e8302b6c605f97cb440d7ce6973"],["/archives/2024/03/index.html","f96457252b97d3a69c352d035004bbd6"],["/archives/2024/04/index.html","8e604f0577919f044198bf37c95e66fd"],["/archives/2024/05/index.html","bb20e17875fd06f245110f479190f8fc"],["/archives/2024/06/index.html","2ef468633b124266e580128c276ab9e7"],["/archives/2024/07/index.html","26ac900a89a48d45fddacccd1ce78757"],["/archives/2024/08/index.html","28553fbb003242f3f6e9e00cc376282c"],["/archives/2024/index.html","f8bb20c0929448d89ba98820ebd8090c"],["/archives/2024/page/2/index.html","c61aeaaec0ca7725b87613c2bb47a368"],["/archives/index.html","6b494ea335446c5d903dfd4d73661cef"],["/archives/page/2/index.html","2986171f7489e913fc5941a65d97fbef"],["/archives/page/3/index.html","f0e75da360633bc5147fb7cc74b0b8bd"],["/archives/page/4/index.html","7af6831cdac0daa3d1e88f9937e6e929"],["/archives/page/5/index.html","ae4382966f0ca584addd7da040335a74"],["/archives/page/6/index.html","9970248dff240e2fde71f6927a0e404a"],["/archives/page/7/index.html","6af6b4c59c84a9d4bd56594a404cc7f8"],["/artitalk/index.html","c9cd97b01bb51a8a088e8ffb1694aa2d"],["/battle-beautiful/index.html","9b567ed42b722af4d230967dfe04d970"],["/blur-effect/index.html","d439add9879c66cac166177a9d11d1f0"],["/butterfly-custom-tag/index.html","b654081890fac55d37094e39bd1ab3ec"],["/butterfly-plugins-faq/index.html","6198415496b0c9091f50336e4ded7d28"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","3ad3d3ed1ecf1b187a05bdec08e7634c"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","f9e89ebcd65362d38d072d6c8a8bda5c"],["/categories/announcement/index.html","9c1dc58511be4e543cbfc612e80edc5a"],["/categories/diary/index.html","0c2eb3aaeb8e60d42bee666553dcbae5"],["/categories/game-dev/game-engine/acg-creator/index.html","755163b92dbbef4d3c75ee8d46f2bb2d"],["/categories/game-dev/game-engine/index.html","2f0a982baaf4d0899e0ce4c01c68a478"],["/categories/game-dev/game-engine/lightvn/index.html","36b85811b3e2dcea99051fba34db264f"],["/categories/game-dev/game-engine/nvl-maker/index.html","17e0a89bc4e6b0b0341751af547f46dd"],["/categories/game-dev/game-engine/page/2/index.html","72b340167ad61978b8d060783172f7fa"],["/categories/game-dev/game-engine/page/3/index.html","cca9421769a38563d7c7b0769b9dd1e6"],["/categories/game-dev/game-engine/page/4/index.html","53197d9ac67f7da9667f4cbc946a8fc2"],["/categories/game-dev/game-engine/page/5/index.html","0e260e03d9c972c57faf32f165719298"],["/categories/game-dev/game-engine/renpy/index.html","d18f230d3ce3a9e05e368f239d4588d2"],["/categories/game-dev/game-engine/renpy/page/2/index.html","9a175eb28b5ae1a78f02a9e960d138ba"],["/categories/game-dev/game-engine/renpy/page/3/index.html","8d4a28b4a2fa2bf6c360fd45a8480aa3"],["/categories/game-dev/game-engine/renpy/page/4/index.html","721eeb990998eef3a25634687e61ab50"],["/categories/game-dev/game-engine/renpy/page/5/index.html","d4e30909a962f5ac501c0c1a3a9703e8"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","4c1a1af8ba9e823133e7326247e2d722"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","c9e7bc1325039df069455fed47890faa"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","40e61954bc7d56d9431381bf0d3fb618"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","9d8fd9af1d9615484acd074e7751d863"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","c6fcfd9deeb2e0260500fdf3e024c9ba"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","a515c2066aa2b59788926c03716b402c"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","cc3d2807e2fbcbceeeabcb25cc3fb5e7"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","7fb98d2190a9e55f6d2fc523b159eaa0"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","3f5864f5e677069cc338c65ba32106c8"],["/categories/game-dev/game-engine/rpgmaker/index.html","1d091a2223038723df7bc40ec5cd0869"],["/categories/game-dev/game-engine/suika2/index.html","bcf6dba78a702c79c1499fdb968a1dd0"],["/categories/game-dev/game-engine/tyranobuilder/index.html","4952adc346a6cda1bd3e36d722ef6580"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","d19cb54bb223f922fe5ddf2d615ac695"],["/categories/game-dev/game-engine/webgal/index.html","d62b06d89d6c9fc7ea8e0a7355bca016"],["/categories/game-dev/index.html","3fbf4aef652b7cf84fba06452460819d"],["/categories/game-dev/page/2/index.html","af44c03424d387eea01ee2edcf211a66"],["/categories/game-dev/page/3/index.html","0aa6fb31322efee108ed04df88b7d2ff"],["/categories/game-dev/page/4/index.html","172cfc5099e4a2f5ae70ded954f37ee3"],["/categories/game-dev/page/5/index.html","1ba069eed7a0453b11ac9329cfeb1ede"],["/categories/hexo/index.html","f20c556a2ea8a22ef7f6832acc623834"],["/categories/index.html","e04a3f587ed3fa38c9923c7a1549ad35"],["/categories/material/index.html","7db0b4c1cf5bfdfbfeccaaa34252b66f"],["/categories/update/index.html","7e05226cedddfa6aa90b6fa5f580b75d"],["/change-according-to-real-time/index.html","ce78b6ad772f7aee787f8f3edb62684e"],["/change-character-info/index.html","264f65ad42d71fae8d4f12ac72271de5"],["/change-title-after-first-time-viewing/index.html","a403f3b72ee4f552171f8f493cf23c4c"],["/change-title-based-on-event/index.html","e14328b50a58f57a6c0642bb3edb1d46"],["/chapter-selection/index.html","b3d1c07620a8c783b54dfefd92f4a350"],["/character-interaction/index.html","1774c96db767f00aed95f64e975b3c16"],["/character-stats/index.html","75f669dd34b3687d978042b6b064369d"],["/chatbot/index.html","de2f4cdf7f150846ef636ba3d64d98f7"],["/choice-time/index.html","6368a1bca81bf77957a4a916cebc3afe"],["/comments/index.html","85c61ea16fbd220e6d13b3bf7608fed5"],["/commission-info/index.html","bcbe29dd61230ba5ff1219d3dbc43cb0"],["/count-login-number/index.html","364953d69c21ce0fa1edf36e73a659b6"],["/create-button-anywhere/index.html","930d4ce4edd04b962549268e457c430d"],["/css/eurkon.css","efd70849511cf92e7b9f293c5eee20ee"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","184854586bea88b75661f7facdb3f61b"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","98faef4971edc2fdedddedadbe7f91b7"],["/css/rightmenu.css","3ce5bb7c720d607a32e4c75fc54ea93b"],["/css/siz.css","50903b05e30137192f0d7342a3e648a3"],["/css/swiper.css","62302f6928998e2b4e1ac59c203eb11f"],["/css/swiperstyle.css","948395998ea631ab452fefbfe2895dfc"],["/css/var.css","f506a41384c8160f9cf0bd35b68f7db8"],["/ctc/index.html","09a2e29547c4fe43ee078d78233432d1"],["/custom-credit-screen/index.html","9143fefe705e5d8c7573f57540fe2c84"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","1bff5e70828043a21e41776e2579906c"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","173a4161c5cf225eac81fe4733f48647"],["/custom-gallery-cg-screen/index.html","44c108438d288e2a5a48a80ea2c7db8e"],["/custom-launcher/index.html","0a0bd1c5b1a362894688132c1b5787eb"],["/custom-loading-screen/index.html","409b457c8ed76f45a207e8cd643f9a6c"],["/custom-mouse/index.html","df5062415927ccd2f2c6a906a0dc1061"],["/custom-music-room-screen/index.html","734888ade97f05fcb0e55dfbac5db0c9"],["/custom-music-room-screen2/index.html","25175f1845421ebc76225295e8110a6f"],["/custom-nvl/index.html","9dafdda44ad5ead140642628c7ff2192"],["/custom-player/index.html","9440cec8b953907a0df374b6ea1e47d7"],["/custom-preferences-screen/index.html","51020de3a8f40dac8818df33d49e149e"],["/custom-say-screen/index.html","212511ef0e1a9f3b1d0c3b58887f0253"],["/custom-style-bar/index.html","1ec2ba4238ece3067d64cebb48a722f5"],["/custom-style-box/index.html","e60ed20e28b7e4e86b278d20ab684d6d"],["/custom-style-button/index.html","c9531da35587adb76805eaddabd2371b"],["/custom-style-grid/index.html","e3d31634e5aca7259b0e8adf97a1771e"],["/custom-style-position/index.html","8561afcf65e786c96484fe5a337f7048"],["/custom-style-prefix/index.html","68122d783a8fb9d734681753e454b51b"],["/custom-style-text/index.html","290a6b18c3ed8bbdab735298b73f02df"],["/custom-style-window/index.html","2b6a568e47db31975e6377d0ddb5ccc7"],["/custom-title-screen/index.html","edfc6eafc716a580a5177fdd8b057eda"],["/define-npcs/index.html","9ba36a0903326c90e05429ce1111d2fa"],["/delete-save/index.html","c7baf83776c4c40fe2114e5099fe7777"],["/dice-function/index.html","56273958f3894254d86726c6c89a1348"],["/disclaimer/index.html","0da02828c4ea0bcdaebf9e3d75fc9c35"],["/display-immediately-all-dialogues/index.html","9bda7bf7f78bf23c10bc180537972289"],["/display-real-time/index.html","679d33527de06599f7d4aefc0489b762"],["/en.refund-policy/index.html","7586eb0bf5c9c5dd25e4a3c3ffb404b1"],["/enter-name-screen/index.html","7083d1cb8538001e1d570895fa966225"],["/export-game/index.html","9747b6f838cca42fc465f140d477094c"],["/faq/index.html","f630010c60c687ee8494cdb5a68a4fb3"],["/friends/index.html","440005d7d9c0c81cf6df89da5aaca9c4"],["/gallery-template-assets/index.html","dede7c2bdad8d7d151cd4ff065fcce7c"],["/gallery-template-default-ver/index.html","9f5580042bf45759118569380ca18c06"],["/gallery/index.html","646f8d03cc8ccf0f393b5e66d9f61e30"],["/gallery/photo/bg/index.html","13742b9ef062e45259269c71d83ef6e5"],["/gallery/photo/gui/index.html","5e235d24fccb94b7a1e02180e4f5658a"],["/game-only-text/index.html","54eba4be41530af243d1dde569518ec0"],["/generate-random-name/index.html","5d8299763ea610224d41a21ba585b2ab"],["/gui-017/index.html","08846d74c48e7379a48cdddb14bc7011"],["/gui-vertical-002/index.html","3927e09efa7a4f8284f439fa641c04ff"],["/gui012/index.html","1ce63326988e4a48b472186de341ab2b"],["/gui018/index.html","890e00a5092d476dccf715874b6373d4"],["/gui019/index.html","97dcd1508ad02e58775e998cc2ad24f8"],["/gui020/index.html","4d9d35adb21df27c66758a0d6c9958b8"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e0e30364aaab7831791557b51c38169f"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","20462e33c8e62c621b9c06ae722851ff"],["/hide-quickmenu/index.html","d9a04cecfb8d562a4e94c7ec3925a8d9"],["/hide-textbox/index.html","ea4512a18730353537c378056b69b1f4"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","e22042ff484fb989a6a7d9f64d556c19"],["/images-tip-function/index.html","ffd07efebcbb0e59161bdb21afbdb4de"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","ce641ac90a27bdd18c5d1ac4450b2b01"],["/index.html","72ed5e539ffbe6fcf2d17edc3fcb4623"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","2dbb76365e76ed53e166f964a35b2793"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","5bdae195a722ef23ba1885a170702765"],["/items-sprites-effect/index.html","80ad503380f03d85dbf4d0ce79b9accb"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","d0de3e9a227439058eccdf67c2738a55"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","18a3613cb544c733f44ff81293ffbf22"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","697afb6630c5f22d2708761f8e3bd71f"],["/link/index.html","c3135e2365c5535c3ad376d8434dd9d1"],["/login-reward/index.html","357dd44f808f9e001572401c946d4020"],["/main-menu-music/index.html","02815c171c9910632c8d0a0a4216de43"],["/make-butterfly-beautiful4/index.html","bb73e7048fccdb5899fa726ab88c07b8"],["/map-puzzle-system/index.html","86e328f2969e0359e8638bd0c9598273"],["/maple-effect/index.html","c945a3ba173503e44badea4f9d61cffd"],["/memberships-2/index.html","d65c28fd70c37f1ee85d37f452725cd3"],["/memberships/index.html","58ceeac1682d9313046620cc30f32f57"],["/multiple-language/index.html","66557c3d8d8bab4d0c5dd5edb799e987"],["/name-input-assets/index.html","f7c00aa644e49d826170e35691bf68f6"],["/new-year-event-2023/index.html","46db044cdcff9d155e27b0556684f2d3"],["/newsletter/index.html","1d58748b463e96308671e7f8b39d46c1"],["/nsfw-limited/index.html","12b13e5bdaaae9363e6d4be0241239b9"],["/null/index.html","690e8720f75fcccf0d44cc62731e28e9"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","f293c80d03f1b410283906ebc6f3c70e"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","0a18c884a2a2a6837e1c0c030de80854"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","d05d4b95b27de03b11ceb227478d779f"],["/openchatai-renpy/index.html","1de1a638e2f9d41ed91f79d478a68463"],["/original/index.html","229316b54cbfd02d35b0d3a31b5d152f"],["/page/2/index.html","64b430b39b1729db55e026e141a57af4"],["/page/3/index.html","061606d9596b5c7ad332dbd71bdc95a7"],["/page/4/index.html","26d6a7bae19c033bff27626259482127"],["/page/5/index.html","ee588cd45ea70f72dbad65aa3c3fd659"],["/page/6/index.html","65ab48ba648717ffa08fd29caa4d32bf"],["/page/7/index.html","c6461f7af18f76f762a1da5331c4fcd7"],["/point-pop-up-assets/index.html","b82de4a73a2f600d24b9e83fdb99c1f8"],["/pop-point/index.html","dce30eaf5e477b4d90e8bbf7032e588c"],["/privacy-policy/index.html","41f15325904dee21c35a38abef03b2c8"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","5e1ef3b0c28c7c97e84c08dc629aca5e"],["/random-number/index.html","3396aa5e46ca3d524b7cdd52559f1bbd"],["/random.html","272a9c367d94b1b34815bc68162abacd"],["/refund-policy/index.html","9cdaf2dfa58529dbcce2918ce5c3bd88"],["/release-017/index.html","086882dc89140d18ce491f5f79783fbd"],["/remembering-choices/index.html","51eb29333a44e89ddad2bac26a222e01"],["/renpy-basic/index.html","844abe9dc507f578cf945545724fa128"],["/renpy-crash-glitch-effect/index.html","e7fca52e062397191b24be310c3e275c"],["/renpy-flip-image/index.html","c3f53631b599676df2e7bd8b207ffaaf"],["/renpy-matrixcolor/index.html","a60c9df9ab5fd4f27c4b9df0ef9fb02d"],["/renpy-overlay/index.html","32302c3edcef05e0d8cfad95829d6ffe"],["/renpy-review/index.html","073c76ec94371a478c437b0b974130db"],["/renpy-typing-effect/index.html","4db5ad5f5c87d5bdab2daa672cd26ce2"],["/rpgmaker-assets-menu/index.html","51bcb8d13a219587ede39f1189dd3909"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","2fe85fe15791d8b94a7efb1d9b299e4f"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","1ba43ffbe90d191179dd47266a867315"],["/sakura-tree-background/index.html","c5393f03d41cfb92c11278bdec92f4be"],["/selected-button-style/index.html","79fa1c46fa07cfd63bdda5e98c638cf7"],["/service-worker.js","4eec66d10b16e65ad745ee6fa99159b6"],["/show-variable/index.html","2b4ebad30d2f17fdcfcec0a44f2e148f"],["/side-image/index.html","597c38cde8ba15072d06006a6fd8eee4"],["/snow-effect/index.html","7242ddd197ff4f8c5cc32e434b90d1a8"],["/speaking-animation/index.html","1e9c5353e8c31cc14148e3c33c63a5b9"],["/splashscreen/index.html","bdfbd37474a643ab928e7748fc612c78"],["/suika2/index.html","7c262fe27847a631cd1323606e1df3c1"],["/sw-register.js","8ce6503e7234a7d8cc1ef09cf02da1eb"],["/switch-chapter/index.html","133bf99b583de06140b1ff84aeddd8e9"],["/tags/Hexo-plugins/index.html","835a34c452a4fa44c0f7488557348d17"],["/tags/Light-VN/index.html","8614ef32ab62b2023dba4bca887d4e02"],["/tags/acg-creator/index.html","286d6f6d52a89a923b37f9081df8dbe2"],["/tags/ai/index.html","d5010b61af8bf9946ad7ef5a510d7253"],["/tags/butterfly-beauty-diary/index.html","8cac0f633664ca253c1796957ca3f53b"],["/tags/custom-hexo-theme-butterfly/index.html","7c19fbf91c3eeb0dfbb5f5bcb06195d2"],["/tags/custom-renpy-title/index.html","8f6aa786ca149d9cafd8f4815d536692"],["/tags/dialogue/index.html","1d9b29e3d9b4c08e1073902c7a6b561a"],["/tags/effect/index.html","ae18a860289294cdbae645785b5e8110"],["/tags/event/index.html","4a474f0efc18f264852bc03e512b552a"],["/tags/hosting-own-website/index.html","9d2afebe4eb696358b1fac635e5423dd"],["/tags/index.html","49c4cc893c6e4e040bc85bc9259961b6"],["/tags/itch-io/index.html","92861be247547e8c0a76e6bc3ea9ec9a"],["/tags/light-vn-update/index.html","71cff0e5b3a8451645632a995da94b1c"],["/tags/nvl-maker/index.html","21c28e32473ce27d021b064a6020af77"],["/tags/player-related/index.html","b1f61664356a85a6200fec8fb01b84be"],["/tags/pro-tutorial/index.html","2b33c01a0c00fc41f9dcca32aced003f"],["/tags/pro-tutorial/page/2/index.html","2483dd20dfa8f5e2b7eb22366904d397"],["/tags/pro-tutorial/page/3/index.html","aa3a4a50124df934cc7f5132d48a94ec"],["/tags/pro-tutorial/page/4/index.html","f5feb83c1edfb426a0aa7d371e0cd3c6"],["/tags/pro-tutorial/page/5/index.html","5ba4524a22a6f2902a624fa84c3ff415"],["/tags/renpy/index.html","5c2c1d6d5c29bfeff0425404747d2e89"],["/tags/rpg-maker-custom-map/index.html","112c3f2208654b0372b9c3905127c1bc"],["/tags/screen/index.html","90009fb8c9f985537b899ce6e9323b1e"],["/tags/special-function/index.html","c8e95f93e4ffb3b3facfb64348d86c4a"],["/tags/suika2/index.html","5996875c2c1a3a8b4adae80a694d1f3d"],["/tags/terms/index.html","4dc4e0f4994aef36eaee5a7801ecd241"],["/tags/tyranobuilder/index.html","c2e4d33d55b1b7d1ec49112a90ccb9b1"],["/tags/ui-assets/index.html","cea1229be443c89fc6f76cb76dc030a8"],["/tags/update/index.html","2826f85977b88afd10956f29aef8f330"],["/tags/upload-game/index.html","eb37524669fb4ac56c34a244dc72a735"],["/tags/variable/index.html","109016e628b54c1b2fa8e3c38b3b97f9"],["/tags/visual-novel-maker/index.html","c678ff124ec69ff120311b40ecf27f09"],["/tags/webgal/index.html","6d0c0c15843e4a9178b066f23551a643"],["/tags/封面製作/index.html","24ef2ac0c45bb650abe6fc0f3c9452b2"],["/tags/背景素材/index.html","ab675cacab93efee28041a66ff501603"],["/tags/隨機功能/index.html","2c29b17906d806f7854749a06fa97609"],["/test123/index.html","0dde43b88fad13d0681f026641d2b9e5"],["/textbutton/index.html","10b91cd7812234b39e0b4c735ff46444"],["/to-do-tutorial/index.html","38dc0947bf37105ab25697daee72f57b"],["/tools/index.html","8767829c76bc687343a1edd71e9978d0"],["/tooltip-function/index.html","81b25b2b5e8454cb859a3b6b3cc667a5"],["/transfer-to-hexo/index.html","063393dc8de61ec1875b4877e4bbe8f4"],["/tutorial-update-history/index.html","bdd698fa16af7958ad53040aa999ae66"],["/tyrano-name/index.html","bf7c86ade535b3c203299e1c902e2bad"],["/tyranobuilder/index.html","1303038d591e0cda53d499d6fb570b4b"],["/undefined/index.html","a65e68013f67858ccf568b9da7525a84"],["/unskippable-video/index.html","558a80d7ecf1f6421d0bb4e930b9b827"],["/update-20221211/index.html","9ae4572b774d121657950f9703fa213a"],["/update-20221218/index.html","0d1063bff78b52cf5ceeb2a2ec40c42f"],["/upload-download-save/index.html","74705a0203e5f514ead684c695207b01"],["/upload-your-game-itch-io/index.html","2ffeca5a56fac6644afd85c0eabaa030"],["/use-list/index.html","6d52a40dc8479838f9186e08dfa1fb88"],["/use-nvl-mode/index.html","c43b0a2d1d94b7d7f46efad24fb11833"],["/useimage/index.html","b9f5bbe20923aa51c0f769099c6d61b4"],["/variable-change-image/index.html","5e00fd4610bccf91a00d315848200042"],["/variable/index.html","845ecab2e66d91dedca27fb74725f812"],["/vibration-function/index.html","d820acfa3fbcec310830b9d8596d24e3"],["/vnmaker/index.html","a2b0006227f2b0e3ac48485abc01aedf"],["/weather-effect-tutorial/index.html","e933d3aaf4fa2b15af4ad87a7687d161"],["/webgal/index.html","2829cdbd15508b78c142e2a51cfa2dab"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
