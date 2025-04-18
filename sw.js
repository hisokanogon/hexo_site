/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","c598a55e9cb5cee30bfb1dc0472cf3d1"],["/2024-future-plan/index.html","1c2f9099f094cbafca7e2695570bb5ad"],["/2player-battle-system/index.html","829461eb0a8cb231b786b44a2f69166c"],["/404.html","5656e7f86b73c8e4a6c873a869ff40f5"],["/about/index.html","6dfa1b9d4c16bfa7bca147545d937a17"],["/acg-creator/index.html","1d5047e69b15309c7ee28d68892e717e"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","944004f8cc97b679caf5945ca5c88171"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","eaaa50f04084bef9566f108c5ae5c099"],["/animated-title-main-menu/index.html","573b40e8752b8f502406d970c25b1a18"],["/animation-movie-cg-gallery-screen/index.html","f0a9ea54575fea893eb5caabf054001f"],["/archives/2022/05/index.html","fe08f8863bb2eecd47fe077f7167940c"],["/archives/2022/06/index.html","faf2e3d1bca6b0909fa3e94efc1515f6"],["/archives/2022/08/index.html","240a6047eaa3d79b83ae2ed5f7b28a32"],["/archives/2022/09/index.html","6c3395c0331016c33eb1895a643b472e"],["/archives/2022/10/index.html","376855e64a7fb5f3d2508f7f4cd1eb88"],["/archives/2022/11/index.html","599064ba7507c8809fdd977ecf0ebb0d"],["/archives/2022/12/index.html","1a38b6b21167ef471e848631369d5942"],["/archives/2022/12/page/2/index.html","c01559136690761b72b03554663a9d47"],["/archives/2022/index.html","9019dbd9b683eadd3e640e30d5273ef6"],["/archives/2022/page/2/index.html","bccdb5caf7915d3737de502141a0e058"],["/archives/2022/page/3/index.html","ec472df3bed3f7955c76e439bde84f34"],["/archives/2023/01/index.html","e2a0670e8d2fbdee7681b87ed11867d3"],["/archives/2023/02/index.html","d6b750262b8c9c41a2ba8eeff6c77b15"],["/archives/2023/03/index.html","608d3e886a7d825d2a7ad7af97e61ac8"],["/archives/2023/04/index.html","737ff60d328648e91d866c91709cf386"],["/archives/2023/05/index.html","f6a192aef6f420545c4f56b342f82695"],["/archives/2023/06/index.html","df94a4fab872469feaf08694f7c56822"],["/archives/2023/07/index.html","bc2c89841372b60d1e1fb2a1ede03095"],["/archives/2023/08/index.html","f5e7353c5cde48271f03f79f82b2a207"],["/archives/2023/09/index.html","81f01b05b4d8c9fce397dfd1ca880981"],["/archives/2023/10/index.html","063b49136f6c064fc8414134626488ef"],["/archives/2023/11/index.html","301bdea8cb26da4a8beff4752d83484e"],["/archives/2023/12/index.html","d7b05e99a113fe44a77444905b27783b"],["/archives/2023/index.html","ac3ff966da63ca584a503ed2fcf9040b"],["/archives/2023/page/2/index.html","94e417b2472e58f71d51850bfbb1bd3d"],["/archives/2023/page/3/index.html","e89c547f090e5ebd4d0c619297bd0d82"],["/archives/2024/01/index.html","848d5b7f73740bf06676d5621f3b726d"],["/archives/2024/02/index.html","803793c379554f08e7d309a88af0b7b7"],["/archives/2024/03/index.html","e4181a119ef61482814398b0649adf22"],["/archives/2024/04/index.html","93ba9cc6c335b7822b5e966edd04f84f"],["/archives/2024/05/index.html","49a11efe0aa356a1cb4afb5b6670463d"],["/archives/2024/06/index.html","297f331660b5d1633ffffda277f03898"],["/archives/2024/07/index.html","9a27ff1be0266c596c8ccccc4a0d61d6"],["/archives/2024/08/index.html","81c2d68332c74be6fd0931ae35ddce1b"],["/archives/2024/10/index.html","1aebd51324ea45378efb581aedc0476c"],["/archives/2024/11/index.html","1b1a3a7fb527a1be635106d2c1a01311"],["/archives/2024/12/index.html","a12770527f34d2f28ba645b9ebb5eba6"],["/archives/2024/index.html","0679347dde08d0c54c310cb20e0cb04a"],["/archives/2024/page/2/index.html","e0a85062e3d81396c2e237aa0e40e9c1"],["/archives/2025/04/index.html","82ddc68914aeee8b3f90e00558552cff"],["/archives/2025/index.html","d44cc1e7ae168078d7c680e56b0b238c"],["/archives/index.html","670df5ae3025fd15b064fbc2a444704c"],["/archives/page/2/index.html","104639be920b8bfa7cee08a2d99dd204"],["/archives/page/3/index.html","3ce330b42516abb2122467071eedd7ae"],["/archives/page/4/index.html","c115f4d4bde57cf35c8e713add2e00f5"],["/archives/page/5/index.html","23457a3dc7e994fb8443e2581e79f446"],["/archives/page/6/index.html","d44aadb82d7d901ed1d25073007778b8"],["/archives/page/7/index.html","4a0821c4580afea9c8a6c3d97efd3270"],["/archives/page/8/index.html","0689cb1877e380c03d6e97772ac44013"],["/artitalk/index.html","86a1f5d36b3525637b8178ec743c988b"],["/battle-beautiful/index.html","1bcc62b0e5cc5da2963d26438e6747e2"],["/blur-effect/index.html","42f14ad2c83a6d65d602349cd055391b"],["/butterfly-custom-tag/index.html","ff2547c6670638f98b850f503d7861f1"],["/butterfly-plugins-faq/index.html","74a448773bd963ab0e7e8d4234f9f481"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","8cc68da8ba09cf125f8f6325a2b83976"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","222149599d706c992400d82ea6f2314a"],["/categories/announcement/index.html","0b4004aeb2f07fdcf433afc0d68139ca"],["/categories/diary/index.html","81a48c13bf9ccf2e2ef2073ab10a4cf0"],["/categories/game-dev/game-engine/acg-creator/index.html","fc06fed0b02639508112d8b27e0acf4e"],["/categories/game-dev/game-engine/index.html","55c82766d6c41c7b6237080b8aaf210d"],["/categories/game-dev/game-engine/lightvn/index.html","4a42a844828b75f46d37a35f4e39c573"],["/categories/game-dev/game-engine/nvl-maker/index.html","0cbf7f2c0feb8dfaf18485d38ba6c7c4"],["/categories/game-dev/game-engine/page/2/index.html","c7a4c948381c7d9def0ac16992b10120"],["/categories/game-dev/game-engine/page/3/index.html","b9bdd7e2d1c83fda740bf43133ee5eb4"],["/categories/game-dev/game-engine/page/4/index.html","b347f678198878e24a101a44581ce853"],["/categories/game-dev/game-engine/page/5/index.html","5b0916b69f94e46c69db335ec4188f07"],["/categories/game-dev/game-engine/page/6/index.html","0d2c87729267f339476b34f65cc701a8"],["/categories/game-dev/game-engine/renpy/index.html","e4eeabac74812e8ee0620c5a11842863"],["/categories/game-dev/game-engine/renpy/page/2/index.html","fbc6f1fdef99ec9c2545474945c3679a"],["/categories/game-dev/game-engine/renpy/page/3/index.html","d31db3081b993dc004518618ee1ea84f"],["/categories/game-dev/game-engine/renpy/page/4/index.html","d50709b71d35f175844ad53c8e85517b"],["/categories/game-dev/game-engine/renpy/page/5/index.html","2ce040ed621cc9c21d8452fe15597042"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","2b3cd964cb71e05ceb6c55b2ace5fdf2"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","03c10c0833418be930fb6044c45bcfcf"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","d7e87e4926c85ff0155c98e7a3248280"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","f5f346e1d0e7ef1514ac276eb9e7961d"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","1657a194769b49db6bb4abe216cc22d9"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","48037caaf112b67074293afce48172fd"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","c36c93daa70e40d4012d56876d4b748c"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","2c30a6c0ff5db913d49a711b9cadc1c4"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","e2cd55f433cdaae151cca9501c110d08"],["/categories/game-dev/game-engine/rpgmaker/index.html","c3ba94750d3883babc7ddc5df461ab9d"],["/categories/game-dev/game-engine/suika2/index.html","b3f5584301b88a0a7324cbecc06c563d"],["/categories/game-dev/game-engine/tyranobuilder/index.html","d1a37a266f779cd4392d3c0eba856fe8"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","a378e9f1202acc819f583882c5020cc4"],["/categories/game-dev/game-engine/webgal/index.html","5ac41e2f86f38b0acf15c3053f2a7c4e"],["/categories/game-dev/index.html","792573c030aec86abd44e596afee8271"],["/categories/game-dev/page/2/index.html","5596749ff05d9e34f32c9b8238ecc1b2"],["/categories/game-dev/page/3/index.html","3cf458174aee8ca11283d099378b3135"],["/categories/game-dev/page/4/index.html","e121098fdca6735274d3cf5e06602896"],["/categories/game-dev/page/5/index.html","aa3f68fa77a2bc0c5d5fabb04a1ea4da"],["/categories/game-dev/page/6/index.html","f19f56702857a5207cade34887f26a25"],["/categories/hexo/index.html","ef87c266831caa29523a85903e7981a6"],["/categories/index.html","94ccdb9318cbb344966a24f939da6e34"],["/categories/material/index.html","dd025779a11167c263f0285c73dc041a"],["/categories/update/index.html","2a29160c977ab1cbe471cb57fd87ea4e"],["/change-according-to-real-time/index.html","02a2688cf87b105dae01eb486ab28ff4"],["/change-character-info/index.html","0e2474e54877129712c5bc4bc2b2a6cc"],["/change-title-after-first-time-viewing/index.html","78c4b04caeeff32dfebc6cf84558577d"],["/change-title-based-on-event/index.html","6f26ed5ff83c9e3bf7bba2d7ff739baf"],["/chapter-selection/index.html","34749d14c3e56905724fb64ac160c809"],["/character-base-state/index.html","d90383a53fb637014cefc649235f65b5"],["/character-interaction/index.html","46327f0e065cbece57e99a69cde953a1"],["/character-stats/index.html","d43c5d0d8c0fef43c2ea8e13c0d3286c"],["/chatbot/index.html","ecd410e04aa925698ecd35d71da37232"],["/choice-time/index.html","6da825cbd9ea1200d0525c173f011440"],["/comments/index.html","f7a99f7ced171e35c395397e91fce87d"],["/commission-info/index.html","1a23fdf7930bb1d3314c35dd86bbab55"],["/count-login-number/index.html","b3f7959425a03f3e1999404b02f1f91a"],["/create-button-anywhere/index.html","b1a4f040883309426492dd7cf17cac5b"],["/css/eurkon.css","160361fff11b8cd3e1f5989739a6c917"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","2b6a61ebd0cb08a3202d517008fdf77a"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","3cd2f7e4019bada66971646bbd180d4b"],["/css/rightmenu.css","8ad07c6acdb3e8833533ccc2a313678d"],["/css/siz.css","ba4f0a6bec1ff6112d4a6273919a3d09"],["/css/swiper.css","0b69c891bf082229ca800196ee4e63d6"],["/css/swiperstyle.css","5af52a7c4c7abf61f7ef7c8c94f01a46"],["/css/var.css","d8e2104ebd05aea598090713dc2de3bd"],["/ctc/index.html","d45da68743e50dd850ac8dde8a433094"],["/custom-credit-screen/index.html","fef3cd3068cbfe32a38d92275f18e4fb"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","1d8ae87327926101e564e6ff62ef17db"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","e2e858a504660641489a6bc8a55e9de7"],["/custom-gallery-cg-screen/index.html","899a7ad62031390c26731027fe8e8726"],["/custom-launcher/index.html","a1f849885add7f47af6d42076527d5e0"],["/custom-loading-screen/index.html","0a3795a49f894b350a6a1ae8bf3f9619"],["/custom-mouse/index.html","eb3a24643ab08ec1afee5d3758777e70"],["/custom-music-room-screen/index.html","b2653c1be05690dabcf9ae405bce51de"],["/custom-music-room-screen2/index.html","fddd824566e86546f14f9350cd719941"],["/custom-nvl/index.html","1d60b9ae8cf6e96e3cbec8659779c800"],["/custom-player/index.html","a4f7b8b63d696a580b1ccfd526e087fb"],["/custom-preferences-screen/index.html","3697cec30b5b58c38652bc041a436857"],["/custom-say-screen/index.html","e6fbf7eb664af8537197842e95751088"],["/custom-scrollbar/index.html","71d95a6612eb044f4a41d28f47e999d5"],["/custom-style-bar/index.html","4eb56fd722d59079c36e34479a32e9cd"],["/custom-style-box/index.html","47c3f4c5d805e8a42099946e722b0d49"],["/custom-style-button/index.html","e88599970a1eca9b21b7bd2432eb552e"],["/custom-style-grid/index.html","af2285fc6a6a6924b31ec3d5af019c03"],["/custom-style-position/index.html","ee6a3a63fe616a90d8c27a7d5017f371"],["/custom-style-prefix/index.html","81344c303352221c37d1cab14f5eb8b0"],["/custom-style-text/index.html","a31766268faeed1f7f15f681e3cf79fc"],["/custom-style-window/index.html","9bb5557cf45bc768a972d4ddde9b317f"],["/custom-title-screen/index.html","ec47995a8f1c07e02a55a41cd82c305f"],["/define-npcs/index.html","9e7887a25b053ff7911ad8fe02fbd7af"],["/delete-save/index.html","ccf8dcfd827b4b39e5f31ba7b77bf369"],["/dice-function/index.html","226c697b40dd227fe777e59ed3a0a151"],["/disclaimer/index.html","3e4dacf8bda0a5b93098a1b43f0dc938"],["/display-immediately-all-dialogues/index.html","62d4d3a9f4835509ff165669e3e17a78"],["/display-real-time/index.html","5e73ce9156233cdf7db6cfd4e76c0ca2"],["/en.refund-policy/index.html","fcf4cbe6bb068db8f6c2359f868c570b"],["/enter-name-screen/index.html","23edf125230d2d52fc2dea5b31473846"],["/export-game/index.html","32f4c0329b193503e901faf1f594ac68"],["/faq/index.html","a168e3a5feb81d9befc4cfbe2fce7877"],["/friends/index.html","db8914af9f23d5d46d93baa3d5f25173"],["/gallery-template-assets/index.html","a0592d0457d4fa938f07e36c028fe26c"],["/gallery-template-default-ver/index.html","1137e74ad64987727c654f8f340ea961"],["/gallery/index.html","f2bbc8553f46c6b9c1c4fe5ff0e235a3"],["/gallery/photo/bg/index.html","e70436fc22fdddb4ec0dc49f42d64b59"],["/gallery/photo/gui/index.html","5def29660f53f1f112207c36715ba9be"],["/game-only-text/index.html","ad7b86d79241c4a6a395473677160e94"],["/generate-random-name/index.html","86b1525e1f91205c8ade0e62d621239a"],["/gui-017/index.html","2eecae2217977b79132e2d9bec32e611"],["/gui-vertical-002/index.html","097206323c26619adead81752d939c6b"],["/gui012/index.html","d03763f932553c2f35ef969f9e37dd34"],["/gui018/index.html","42e8328881f8eb6c073d653aba07f49c"],["/gui019/index.html","c9f8970a746030f03f03d16521ce4f2b"],["/gui020/index.html","1316e0bdae325b5559c2f70456d4f4f4"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","59a33bd94694b0378f37da7c6123befe"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","233494efa7eac90b7fc30b67ccaf2852"],["/hide-quickmenu/index.html","9f0e60d1e1f8f862a25e019e58e9ee75"],["/hide-textbox/index.html","0c1214d91749a8d2d38c47a28bc76a39"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","a398d3547fda82a659d7c99ef5c628df"],["/images-tip-function/index.html","6b9e8699e4c7108d240bde33992e9e69"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","4f6b31bed77569c21a1c593c81e30b6d"],["/index.html","5234c32bf750c7619f8903140eeae7e6"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","c0d58dc6aa1a04327665162dabe42b0c"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","4e0807bb80bd7d1e05e943c27d423d3c"],["/items-sprites-effect/index.html","cb5fad8f53303c96e402741f6fbb4b30"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","34c1d25f21903c790276ea614caf3b2e"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","e07a84084ed36a60edca462433ee6d06"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","be4089c92a8e4ea4126ee56e0202f5bd"],["/link/index.html","becb38aa335880556743c19bf29e04f8"],["/login-reward/index.html","2ae675baf5ec5f88b8a45542a750a468"],["/long-press/index.html","b561780e96aec10a6a462a92ff45e93c"],["/main-menu-music/index.html","8f26f873d3faea8c16f62ab63e4d3580"],["/make-butterfly-beautiful4/index.html","b3d8ff3a7a62ad7e6800b19e0de20655"],["/map-puzzle-system/index.html","369167b0358999d186f21f415639e10c"],["/maple-effect/index.html","da44b60f5ec730a5257373b3b241b712"],["/memberships-2/index.html","43ec1547d27cb70f6fa7c19ecbc7a366"],["/memberships/index.html","e602d2bb08d95d21295f384e64e48ec7"],["/multiple-language/index.html","3a57d86abcf704969dd2c8d8bded3680"],["/name-input-assets/index.html","edefe01df5303a82ef53fecf52bea1bd"],["/new-year-event-2023/index.html","a550e4660723406828116a648c69b5a8"],["/newsletter/index.html","763ed8d5e57b548f213b1ae1a2988ffc"],["/nsfw-limited/index.html","29d91a0676f02eb7b48adbef015467dc"],["/null/index.html","6e7b4df470921079765b01c38aef5799"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","719486db38f398e2735f9ec0482e4d60"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","25522e2c6c855531d9caacf686061671"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","26ed0f6a0152552d62ba77b80f112959"],["/openchatai-renpy/index.html","924febc0797ddd15a4d244983ef65038"],["/original/index.html","d0c73968356d4016a62ac68c8754c902"],["/page/2/index.html","02dffb7a77921ba6f39f236e51038b8f"],["/page/3/index.html","98105ec7b9f9115a73aed0e70ce5b63d"],["/page/4/index.html","86697b8da9ba5353aae4a20d1fa65182"],["/page/5/index.html","f0fb93a059ee38178462f1b3e781d3b4"],["/page/6/index.html","219f177e110938c28c165a1bd485b0ee"],["/page/7/index.html","51093f863d8521604fe707dd933b2108"],["/page/8/index.html","1e21a6e32b45f05b6a7537be18f1d3bd"],["/point-pop-up-assets/index.html","535398a18dc1d6c71c11aecb3be2fcb5"],["/pop-point/index.html","8d6d150be157bca78469717dee6db3a5"],["/privacy-policy/index.html","01f3ae26768337965d2305d2cd4a7e85"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","0801c1a59cb0d1974634eca7dba9fce0"],["/random-number/index.html","d941cbab2de4548452307145364e593e"],["/random.html","2894934c673429d4d2e830543977a0ac"],["/refund-policy/index.html","6c533e24fe60d513ffb52869f82e911e"],["/release-017/index.html","fcf38c26d1e2fa2f8be84b3b7feb4e45"],["/remembering-choices/index.html","42203583bbc27616c0b64664fd20f0a2"],["/renpy-basic/index.html","74682594fbf5593223904d4fb515d1c6"],["/renpy-crash-glitch-effect/index.html","11617bb20d2609e9e37160e71ed65628"],["/renpy-flip-image/index.html","11eb5790b781becdec37ffd5183d6599"],["/renpy-matrixcolor/index.html","17b586a240de0d2ebbd63e8a1c82b69c"],["/renpy-overlay/index.html","a9bea0c92b872bf434f09dba878f16ff"],["/renpy-review/index.html","a6f93f9b4a90c95a40b3d9d73484de71"],["/renpy-typing-effect/index.html","0e4bada1c082ff682ecdf15adc3e3fbf"],["/replay-cg-screen/index.html","31f6913c541d1ce45d880fbe4e460a50"],["/rpgmaker-assets-menu/index.html","ced11262a07924984e2e0206e0c69b43"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","671b3322b8f9e1edcea13f7042884aa0"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","6259755614065c09eb33ae3642f9d981"],["/sakura-tree-background/index.html","4d80d8becd99522be684a63e0bba159c"],["/selected-button-style/index.html","6c7ab703bef86361620eb85e3b48f248"],["/service-worker.js","d2fa46abcc0264fb3da94d8e3a456c6c"],["/show-variable/index.html","adaeb3d6a9467292f558e58ede4644e3"],["/side-image/index.html","5479bd6031bec7d91e6f77e219c5866e"],["/snow-effect/index.html","b6ec83a32bd0ba590976869249594d3a"],["/speaking-animation/index.html","69f83848c5b785fd4edcea1d5dbcfb53"],["/splashscreen/index.html","4efdf05698dc989a5781348bebdb3e9c"],["/suika2/index.html","a70d75778f14bedc3c7593923ea05d13"],["/sw-register.js","41aa4c298ddecd407e432918c783636b"],["/switch-chapter/index.html","6c7cdf2354137bcb912bb5292ce3d806"],["/tags/Hexo-plugins/index.html","9beb96fb61c7790b1747b257ae57cf93"],["/tags/Light-VN/index.html","95f3f5146c9264ed9d587814e441ab42"],["/tags/acg-creator/index.html","68c96a16df0a3247907cfad0ccd62595"],["/tags/ai/index.html","14350982d541d63ea57bdd946e2b5b6f"],["/tags/butterfly-beauty-diary/index.html","4be669c6793b2622d8065106d36eaa47"],["/tags/custom-hexo-theme-butterfly/index.html","66b2aa29a427adeaa1f6c675af27757c"],["/tags/custom-renpy-title/index.html","68f04d65b41ee269158a6412c17901d8"],["/tags/dialogue/index.html","b8a0cd2beaf5974d0caa06230ede1392"],["/tags/effect/index.html","95cb3eac1328665ab3b5b177c97cb383"],["/tags/event/index.html","78fda544bd6b66350f75253a3697881b"],["/tags/hosting-own-website/index.html","b40bc7546a3afdcb39da2151404db396"],["/tags/index.html","7fd6e326d1ec0a8d8ff291bf970353b6"],["/tags/itch-io/index.html","3e50743430463c7e0c38dc8b6d268ca9"],["/tags/light-vn-update/index.html","3c6a46ab7e4915ac4a15bfdc539489f5"],["/tags/nvl-maker/index.html","94c0d5fda5e0b516c91382602cd29cdd"],["/tags/player-related/index.html","2161e611442b9cecc532928e6dfebcff"],["/tags/pro-tutorial/index.html","97216c7be5ddc239f1282176b6aef767"],["/tags/pro-tutorial/page/2/index.html","a58fb12c0de1126ea50abbfbb748a41e"],["/tags/pro-tutorial/page/3/index.html","cb7cffb3944328d72980de9d28a49e53"],["/tags/pro-tutorial/page/4/index.html","1c33f815e2c97cf1b7c9074af53cd5b2"],["/tags/pro-tutorial/page/5/index.html","9e27ca5c9fb42deef158cc4b69b828fd"],["/tags/renpy/index.html","797fac295a988de6c3db575c3b2d885d"],["/tags/rpg-maker-custom-map/index.html","c0b29b450edce1661542543e1c258a7b"],["/tags/screen/index.html","44b99e6a587837587b066c3c1b085803"],["/tags/special-function/index.html","2ec1fc2aae9eabd501f19255f78b5399"],["/tags/suika2/index.html","6ba33887602f5855c399aab159a78861"],["/tags/terms/index.html","b562d9f711203fbe65fcf89fd54f7b26"],["/tags/tyranobuilder/index.html","aa6766ed59c0a9f82fe80b8e0f1dda09"],["/tags/ui-assets/index.html","ab4be4199d86e9558f563a03e4a8ee1d"],["/tags/update/index.html","7b66809fc22e0b02b201a13afce66616"],["/tags/upload-game/index.html","bd934a20f3fca4d928498e445a1e3317"],["/tags/variable/index.html","e21df7b71dfdbf669967a4d81f999674"],["/tags/visual-novel-maker/index.html","2005ce12bd9dcf7fd64d26bc65e59759"],["/tags/webgal/index.html","7614596c2b94993fd4f2ece83b966ec0"],["/tags/封面製作/index.html","1bddca024fe5d1c9afbcfc5a9a172119"],["/tags/背景素材/index.html","5dcac1e07a4ab7d6a6025590d3029d6e"],["/tags/隨機功能/index.html","4f06c5527dff0120fff11398a6b8f1fa"],["/test123/index.html","94728c5551d3e503ac9863ca7289a40f"],["/textbutton/index.html","70a5fd3001619dbf2ab1e8f0af9625dc"],["/to-do-tutorial/index.html","02f3813d5b869c39cc3134d7f896a933"],["/tools/index.html","9ae6de1cdc0c95b10b158aaec550e0f6"],["/tooltip-function/index.html","6b87a5a805aa7eecac8fb20e8cdbdd53"],["/transfer-to-hexo/index.html","5c25ea89728d76e43f67187f6ea3cd43"],["/tutorial-update-history/index.html","7b6cb273b59fc3d026409480b82edb04"],["/tyrano-name/index.html","f06c89d5685a84c56a11b64949370723"],["/tyranobuilder/index.html","3f7bcfd4b60f8e4914fa8706102ca17f"],["/undefined/index.html","d86d2d2d37d89fe93733f3b1fdfe5a72"],["/unskippable-video/index.html","a9a3db382764e79e03628dbd0bec8715"],["/update-20221211/index.html","dcfac639ba1a2dd1eb95461751f2afec"],["/update-20221218/index.html","46a92c70ddb670f26f4daa0724cf633f"],["/upload-download-save/index.html","c3f1c4ecfce365ddf564d48bbf867965"],["/upload-your-game-itch-io/index.html","8383c4521b6f28cef58f4a24f2c062ad"],["/use-list/index.html","fd6b0cdd8306c1f997baa4a208719bb5"],["/use-nvl-mode/index.html","c1a679226d2ea523c7526e8e9e922fcb"],["/useimage/index.html","0590df5680954fb2d9f6dd1e31645826"],["/variable-change-image/index.html","5452df5eb8aea9fcbdb2f243b769e786"],["/variable/index.html","d5566a954df56fd882da66c5f595078e"],["/vibration-function/index.html","5f7521ac22d672722c31b0f38a986acd"],["/vnmaker/index.html","719eca1adf34d65e2c842a4d3dac1a8b"],["/weather-effect-tutorial/index.html","c8c5111b267517922d7d5f4f5f9d562f"],["/webgal/index.html","55d24d573e028942ddc2411cc1bbf606"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
