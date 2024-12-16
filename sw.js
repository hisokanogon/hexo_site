/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","24fc21d5a5dcfc7c726487bb1b51bcc1"],["/2024-future-plan/index.html","3d1bcf0dd43f82640901bd0af96fa44b"],["/2player-battle-system/index.html","d840e7af5d938c92a57b4384f36b93aa"],["/404.html","31b54fd35b6de0f84e1a0ed6343b4bff"],["/about/index.html","8df05c5fd9bdb07714676115eccc76b2"],["/acg-creator/index.html","8e88d09f9e88604a0486073324dbf848"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","1d7cb251b223ac3db0ab77544a78eb44"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","b094b634c77309cb78bbf0e6db817c70"],["/animated-title-main-menu/index.html","573d889ae701019d8b65df9261f1781d"],["/animation-movie-cg-gallery-screen/index.html","745274932a2208f136d2a4f4b75048cf"],["/archives/2022/05/index.html","8450b2da9e59d0543a872a5648c74906"],["/archives/2022/06/index.html","2cf7230e1a0290e36e57d098d728eb6c"],["/archives/2022/08/index.html","a7025165fa44a12f2b25cdfaa643590f"],["/archives/2022/09/index.html","c53e35dc6a1f2b9c636adc6a24a80b5c"],["/archives/2022/10/index.html","400e646052a7974d2986dbdc9377d0a3"],["/archives/2022/11/index.html","71226b24b7b0f5614d11a205d3e1b8b9"],["/archives/2022/12/index.html","0193aae309553df7abe0b920f01bbec0"],["/archives/2022/12/page/2/index.html","6d71ebe463c113ad0ebf26f2abeae97e"],["/archives/2022/index.html","0436aba69808c7baa2a7036f8138f97c"],["/archives/2022/page/2/index.html","1ba175605f25bfc1fff5a829231b656c"],["/archives/2022/page/3/index.html","7c162292a37273cc9a4d761b246cee0d"],["/archives/2023/01/index.html","d941d0078dc9c28de46096f5aaa97fc6"],["/archives/2023/02/index.html","4c612ec8f603bdcdc1a1e95603404504"],["/archives/2023/03/index.html","583df5a31309f860ac4a81b089e9a0f1"],["/archives/2023/04/index.html","b66211dffdec63bd6d61284303af9399"],["/archives/2023/05/index.html","66054b0d2b6f4d1dcae2bbd84d6bbe1a"],["/archives/2023/06/index.html","3367996f3ab7486630c54341f2bd85a5"],["/archives/2023/07/index.html","e2d5f6a289be93b166260fff42927b34"],["/archives/2023/08/index.html","5afecf7f79ebeb46753434d51c57bbe0"],["/archives/2023/09/index.html","f6c47d498a08b7314e849484842004fa"],["/archives/2023/10/index.html","288d41c9fd36ffe17c274899af9643bf"],["/archives/2023/11/index.html","4e73f9d8a1ff3085f29ff2f42d96b8c1"],["/archives/2023/12/index.html","b45720664cf2357694bf1aa849bf8376"],["/archives/2023/index.html","939562689e9fe5d51ffbd4899d237e95"],["/archives/2023/page/2/index.html","49dfb27c6ce0c55af1d64d0a6458d059"],["/archives/2023/page/3/index.html","91756f1f5edf725f2213498cea2fa7e8"],["/archives/2024/01/index.html","9af77d7ad040e281ca316f63061c153e"],["/archives/2024/02/index.html","d623e7d9a5d8e9d2a3276cdda52883d1"],["/archives/2024/03/index.html","6997d004041ee4340d191c6679ff0c50"],["/archives/2024/04/index.html","f4dbec1eb736a00fc4dee94cb38d92aa"],["/archives/2024/05/index.html","3ac283a26986fc2ecfe84f05d765f6ff"],["/archives/2024/06/index.html","3a81f6f943c19a34a584e0a6b9306e0b"],["/archives/2024/07/index.html","ec7ff17e2836a8fa952f1af943199562"],["/archives/2024/08/index.html","7f9829d088e930320ae6662453e52f55"],["/archives/2024/10/index.html","1c1c5cec4dd7907f0aa8a00864bcbb57"],["/archives/2024/11/index.html","640d4ab8e766b58688d357a971a43393"],["/archives/2024/12/index.html","e89c27a361e6a04dd24e5677de891e86"],["/archives/2024/index.html","b758402715032fbd19b78c65ff286033"],["/archives/2024/page/2/index.html","acbb943b43772b5b0f203b1ef472b243"],["/archives/index.html","e8e9416a43a3242fa798860631804de0"],["/archives/page/2/index.html","2f0ab08fbc18ab1599084f0c3d35016d"],["/archives/page/3/index.html","c692f7d06f2c98ce30fd564baa2d9703"],["/archives/page/4/index.html","d739552a246e1880275811a99aea3c44"],["/archives/page/5/index.html","a7991e279fe166c36cf3ee01cfa97fb6"],["/archives/page/6/index.html","e852e2ae5e211162ce89efa4d84b1838"],["/archives/page/7/index.html","1dabba2b065946108556645035464aaf"],["/artitalk/index.html","6bc9780ae27cc3539830cd4147f8cdd0"],["/battle-beautiful/index.html","f7a6186d93c9cee0e339a61cc0f15b7e"],["/blur-effect/index.html","fec59f6a6c18da324a60d6826d5b7397"],["/butterfly-custom-tag/index.html","4da61d1ea06b7890649da6406fd2c9f2"],["/butterfly-plugins-faq/index.html","a074489c8568a556bf1b9088c48ca4d2"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","a49754e71212f2fde5ccbe17250ae9c4"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","fc89e2d69d9aefb3371942f8bdd91427"],["/categories/announcement/index.html","14392d7103ca85546b957afa03aeee42"],["/categories/diary/index.html","178c63f0841f8a277b6871994aba2781"],["/categories/game-dev/game-engine/acg-creator/index.html","77a3a4241be617ed8ff48214bc965605"],["/categories/game-dev/game-engine/index.html","37f811331416ed6176dea64c64e3d132"],["/categories/game-dev/game-engine/lightvn/index.html","e6575c2365a728b073125055bdb1f0ec"],["/categories/game-dev/game-engine/nvl-maker/index.html","4e3ee1a8966d8f14633245904f2cbd4c"],["/categories/game-dev/game-engine/page/2/index.html","80460fa5a8c70c49a3232823677bd879"],["/categories/game-dev/game-engine/page/3/index.html","cf45066befe142e9da09ac9cc2d4a368"],["/categories/game-dev/game-engine/page/4/index.html","46f3d3b5c982e3d74bf7ab2ecb209ee7"],["/categories/game-dev/game-engine/page/5/index.html","d8eea580a6b0b6df4fc704e2f3c09616"],["/categories/game-dev/game-engine/renpy/index.html","a7d65f272650461be3529ecb1a095fec"],["/categories/game-dev/game-engine/renpy/page/2/index.html","9ed58123a30d49245d09c8ed28671e54"],["/categories/game-dev/game-engine/renpy/page/3/index.html","3f2a960eb3e87cea4874c50753756544"],["/categories/game-dev/game-engine/renpy/page/4/index.html","0dc76fdcb87658db356e55823177db98"],["/categories/game-dev/game-engine/renpy/page/5/index.html","b936957428ccbbb8450cbd01e49252dc"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","c1a63b11f4e172936daafbfad0546f47"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","7a1e846574b87b6deb09b8ad57410e14"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","64163adc45ee13c1c48a02cb157ef7f0"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","db1cc9af7465608fa05a0b80164a0e4f"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","4b492455aeb3b3d241957803b7dc2883"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","14f551a339b67d8b2b2913c9793b9f15"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","ac5bf0d686ddb9eb46e9cd45172f0443"],["/categories/game-dev/game-engine/renpy/tutorial/page/5/index.html","317bb1d1a0dee1a8ac545efd201d4dad"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","de06cbe869b045a94b7480a0a19e984b"],["/categories/game-dev/game-engine/rpgmaker/index.html","edfa689919a1aa54d8a05fbc85174335"],["/categories/game-dev/game-engine/suika2/index.html","e40d9597179f917e17708ac49d067369"],["/categories/game-dev/game-engine/tyranobuilder/index.html","ac8dea4b4c942a4fd1ba351079f43556"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","ffb0302e08367c57925ec06b3b5b0a32"],["/categories/game-dev/game-engine/webgal/index.html","1025cb6bd743c85755b3f64ed291ebef"],["/categories/game-dev/index.html","bde460784bbd49f25742870311ff67f3"],["/categories/game-dev/page/2/index.html","e589887ccecd9e41eb6495f8dd4b7a18"],["/categories/game-dev/page/3/index.html","3438a2a0c045ffe4193c3e303ae1f08e"],["/categories/game-dev/page/4/index.html","47d75d5dd8ae2936d103e9590681686f"],["/categories/game-dev/page/5/index.html","b6f77c06e262c5579b6dc57fd0d2d4dd"],["/categories/game-dev/page/6/index.html","ecefa0ce648fdb8504f16d001f81ee70"],["/categories/hexo/index.html","a2ebb452edd4dd88b959fcc179c0a17c"],["/categories/index.html","a22e69840c06724af1eadf7c3fdb66fe"],["/categories/material/index.html","0191e8f674c108523884ede9a1a4dfaf"],["/categories/update/index.html","51df2df7e1e50152854976a89959ee97"],["/change-according-to-real-time/index.html","d3e14302782a180269b794737295a7a9"],["/change-character-info/index.html","aefb99b3eee5edf91933f6e4abe21d5c"],["/change-title-after-first-time-viewing/index.html","aa1100699404a56073d10b8ea166a2a1"],["/change-title-based-on-event/index.html","22ced76afabd17e9b27ef0b668727c81"],["/chapter-selection/index.html","7a73d43ab7be422cce45f4781f2a8806"],["/character-interaction/index.html","dd67377096558ee31f80d8bfd9e425ab"],["/character-stats/index.html","850cc0e4b1ac2c02e71a026abfffc0ce"],["/chatbot/index.html","064c919ca87df97c7d05764ebe4a49f8"],["/choice-time/index.html","d540bafcccfb74dde912aaa411aca7cd"],["/comments/index.html","5556a763cae5035e12aeec8894532a12"],["/commission-info/index.html","c7a1d603d7413e0765ffde60fa4fdc62"],["/count-login-number/index.html","25c4cc9b62f3c91097909255e0b59ddb"],["/create-button-anywhere/index.html","defdb1a110409af2bb8c7eed5954b28f"],["/css/eurkon.css","0e095f5fc6afe8ea1a0a291ce5245d95"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","483a21b835cf833347d42479edff76cc"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","fdad8afbc280cabfd69f88b054f53e6c"],["/css/rightmenu.css","b1309416e18822ddf7966e06fb3f6354"],["/css/siz.css","c9f6e3d81fa4a6effbd66a68558ce9ad"],["/css/swiper.css","640c51ace86c469795863e57b86ae5f8"],["/css/swiperstyle.css","d31cf557c9c5905eb4b364b96b6f6439"],["/css/var.css","80e2d0d8a15c597711bdacd15e35db7d"],["/ctc/index.html","ff5723ca3d53981e7a1ef2db971cb76d"],["/custom-credit-screen/index.html","ab137323d8b022c3b7ef63a38b2ea1a8"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","154051c744eafdc7821ad25a963ab608"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","a62f35f622f20f7a8099ef69b1c6aa00"],["/custom-gallery-cg-screen/index.html","e2b1dfdd1f57e6d9261d005b47a10163"],["/custom-launcher/index.html","52be0e91fd165f9f6ca6c050be788da9"],["/custom-loading-screen/index.html","78c43f841e4630e1048f637ba0e93989"],["/custom-mouse/index.html","7ea88a300c353e669dd38c4abf8059c5"],["/custom-music-room-screen/index.html","fede03151387c2a994ac08b3afe75979"],["/custom-music-room-screen2/index.html","8f6a52ae3ff69a84fff5b635b555613a"],["/custom-nvl/index.html","d73d09fa167584e4d094653fcc1c9294"],["/custom-player/index.html","f2b172b2b5d8a3deb3aaced70765b9cd"],["/custom-preferences-screen/index.html","919a882af0489fe191c3b9e06703eb42"],["/custom-say-screen/index.html","5276632db75c03d7ca93e6891998fabc"],["/custom-scrollbar/index.html","1e8759b8709b7f0b7701b7019b0f4c2e"],["/custom-style-bar/index.html","ac1cf109f561e788f7543f4fb7ec6a82"],["/custom-style-box/index.html","46913a041a1520bfb1fc730b823e532b"],["/custom-style-button/index.html","40529a387034c4863d1e451ed7b350fa"],["/custom-style-grid/index.html","7459098b3d3171768ece0a73b07dde27"],["/custom-style-position/index.html","26850d8514fc76244c0232b11bd3f1f4"],["/custom-style-prefix/index.html","6203f9a633928b1249083b6c6aa331ee"],["/custom-style-text/index.html","500dad5968d78c60efd5b1194b5b73fa"],["/custom-style-window/index.html","dc894da804fef376181068050c191126"],["/custom-title-screen/index.html","bc7b386e6d251303ef41fec8baee94dd"],["/define-npcs/index.html","10fb76437f8b302794a13a472a7e5704"],["/delete-save/index.html","5c8d8fdf22425d68533e4957d3242e0c"],["/dice-function/index.html","d1b6eedaebe84e3b4ef793925e9782d9"],["/disclaimer/index.html","c858e292ed21b956cf654668746c226e"],["/display-immediately-all-dialogues/index.html","440e8fbb7a0f26c94440be4d9f294538"],["/display-real-time/index.html","3dbb28a98f439d9d451ec6d2e3cb89a6"],["/en.refund-policy/index.html","e5b178a6add24f74e82f9f5a50693871"],["/enter-name-screen/index.html","54f9598b13c7a55abb282221149020b8"],["/export-game/index.html","dbf754d010ac8dd2fad83d32bbb0ed88"],["/faq/index.html","42a8dc03996263309758921fc98a74e7"],["/friends/index.html","731b7c0b330a89bbbccdf78a67b24052"],["/gallery-template-assets/index.html","e75e24b8bb572695de39e51cd3c200cc"],["/gallery-template-default-ver/index.html","89ad5b4b763cdd292439d07f1687ce68"],["/gallery/index.html","6abbb7e5e9b43371306e55d810fd7411"],["/gallery/photo/bg/index.html","46b6fadf8d6fdea7a02b93554d3dd797"],["/gallery/photo/gui/index.html","07f4b0f41d981346f904a5d29b1e105f"],["/game-only-text/index.html","16ea1305f4ada1ffb8b04f47fda718d2"],["/generate-random-name/index.html","08e9cb52bc695f3dfe4f6d8541d8d2b3"],["/gui-017/index.html","eafdc6a435693bb3b0043ce95f63270a"],["/gui-vertical-002/index.html","174184ee394be83cbd9bea14c6fffa34"],["/gui012/index.html","00f27feaa6f213974af985ef2e0658f8"],["/gui018/index.html","2c80a32f2c88ffefdfdf67fc1c79a51a"],["/gui019/index.html","7ddaade8c0fce5c9b9bcba34993e5338"],["/gui020/index.html","8dd054379863b6136a419d70de58c039"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","e3f1e0f59c61cf57dc319e5cf6c1a3ae"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","e0e524582782bc63164bc1cb67a5c65e"],["/hide-quickmenu/index.html","d1ebfcf9875fc00b8f839778ff90d24f"],["/hide-textbox/index.html","f4d47a61bb9fd2a8ecd73927a8b717cd"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","c9b54494d4b3201902fab6df355b799c"],["/images-tip-function/index.html","a96ac63cd71729dcf3d9d8302bca57cb"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","60abba81a08f25f2c5931887a433190b"],["/index.html","13a4f58d1b8cf38057bb18907038de22"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","9a573b0c5213578edde51e4d61fdc358"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","08104f85d86c04bcb3933669219056f3"],["/items-sprites-effect/index.html","235ae638ffca363e64b7e32a23b78f4b"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","ef1e6d6347c7d505f457a9961b7855bd"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","e0a71f05445d78353113d245b3e2321f"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","75d7e0f21cad3ba56e2606d95f43a5bd"],["/link/index.html","cca117d4c0cae3c6b2c4b110b86c631e"],["/login-reward/index.html","af6c51003e0183a306e033cf0fbcba51"],["/main-menu-music/index.html","2c27d50543cda0edcb4aa9494f90f26f"],["/make-butterfly-beautiful4/index.html","dce03beda8150bf980506249b7abc465"],["/map-puzzle-system/index.html","bc1edb4b3e783559cef6e7ebcce0568d"],["/maple-effect/index.html","66cff8344fea7001fdb08fdefba522bd"],["/memberships-2/index.html","744d48510929e0f50cb5100d9679f134"],["/memberships/index.html","6e8d3ad37dd7f5068890145188fb80fc"],["/multiple-language/index.html","e8564f20e568d072220580fdcd3598fe"],["/name-input-assets/index.html","473cad40047e18e0f81cffdd9fa02ab8"],["/new-year-event-2023/index.html","c9611e58f43ac69b4e8f96184f30cbf5"],["/newsletter/index.html","0633d804b7da3c3eaa3849f7237d1361"],["/nsfw-limited/index.html","ef4a3425ba8f44b24a1a7bd35807273d"],["/null/index.html","e63ff47a15d6dec7e56903438d7285d6"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","ac627d62829fbbdd40c4550ad98e8ba6"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","d5c55b46f703c0c3e8d011c2db862e94"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","143b7f4020081d5769a79f5cf560d306"],["/openchatai-renpy/index.html","85c5d8e42e084d89bd96dede4f43198f"],["/original/index.html","024341d5d4c9e5c9aadd4c0f122d875c"],["/page/2/index.html","13d219eeeef54c0182e89bf618a46819"],["/page/3/index.html","fbce12e5da37ac4b6655760011212048"],["/page/4/index.html","4825f9567ba5513c95814aea182cf3b5"],["/page/5/index.html","2447ec892b70c786e270417b177e6058"],["/page/6/index.html","69540e5d54f95d4fb43eb0178fc712a0"],["/page/7/index.html","70d5d18d126a81ca1520fc89afb24d88"],["/point-pop-up-assets/index.html","223d11194f1058123a69fc78a3fd378f"],["/pop-point/index.html","b0142079e9ee97e28f012fa64d933c8e"],["/privacy-policy/index.html","4931312f27c8c0b918031fb3bfe2285d"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","c760db11224523a9b0d3dabd31444738"],["/random-number/index.html","582e3e2ad2f98fdb3243da4367d34d8b"],["/random.html","9b093c0b0cbc86ee3abeb59b57cc9586"],["/refund-policy/index.html","a9cb0e9ae312f5b78cb9781ec84ddb5d"],["/release-017/index.html","b21e5c2d38f629ae31912a680b590dc8"],["/remembering-choices/index.html","2834a6a2f7dc5e44f91e194dae39df04"],["/renpy-basic/index.html","9c41fac9695edc7cfa6f3fedf5b6e12c"],["/renpy-crash-glitch-effect/index.html","0e12e003c9779e07280924c31b326c74"],["/renpy-flip-image/index.html","048854a560697f4d37fa07cdf49cca51"],["/renpy-matrixcolor/index.html","5a413ad840b0edf90e7515e026f6c34a"],["/renpy-overlay/index.html","91a33533a3f34273c8641b62c08359e0"],["/renpy-review/index.html","6d5446fd3e7d49e0ea13e6e95dc9c359"],["/renpy-typing-effect/index.html","1d6d571d21f8fab8551f7b6193b575f4"],["/replay-cg-screen/index.html","1e2b1d789124af98f91aabf8d7233835"],["/rpgmaker-assets-menu/index.html","7c51229e3f0c0b073d54cf4ab97ef3e9"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","27ba5ffec0a560e6c162e8952e8eb75b"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","c2b0c5e47ad6245e1ecf0435e8c3d195"],["/sakura-tree-background/index.html","cb2ce6b8d6e455521c951df064665475"],["/selected-button-style/index.html","f21c02e9f55e22e50de17060f6e59d74"],["/service-worker.js","e208a791503c24c010631b42b48e8845"],["/show-variable/index.html","15f100af106aa609ab6f69da3227603a"],["/side-image/index.html","b922652b185f3119119307f4962d07d4"],["/snow-effect/index.html","b3af4bc9b5cc07658dc2b00e7cd9bf9b"],["/speaking-animation/index.html","0b56c75de3fc60b536695d6586332833"],["/splashscreen/index.html","fce22c82a42fb4b0c4fadaeecb1816d5"],["/suika2/index.html","640aea2683b55a62e4df96ddb8d42c67"],["/sw-register.js","3e141640ff82dfb0ef1c0e9bc49e2723"],["/switch-chapter/index.html","6db47a2ea0d4b30deaa3cdc0a0c91275"],["/tags/Hexo-plugins/index.html","b5546f10c2813047a17722ed8c2a01a9"],["/tags/Light-VN/index.html","e276f0c84cac07f28d36c4944cccadb9"],["/tags/acg-creator/index.html","1f2380f1f511b0753405c24c1b2f2d3c"],["/tags/ai/index.html","bba1cb532512ab7303bcc1fa116d72ae"],["/tags/butterfly-beauty-diary/index.html","174a2e23f18a3381edce3183f747d0ce"],["/tags/custom-hexo-theme-butterfly/index.html","c0006c2bc2fa5088723fda0210a3bbb2"],["/tags/custom-renpy-title/index.html","b862a00cb7a887712945a17907359ecd"],["/tags/dialogue/index.html","f14b6e689d6059df92759f7eaf08b53d"],["/tags/effect/index.html","dbb33c9f641514e74b0563a1f1d88e34"],["/tags/event/index.html","9eeda51e164bfc016b2f142d14dd0aca"],["/tags/hosting-own-website/index.html","d59be473820d0ca0db2a600b3a23ad20"],["/tags/index.html","4e99bbc9687a48886f311d12f4672e42"],["/tags/itch-io/index.html","b4c2d5b9bea54e82f7526b9335fc76b0"],["/tags/light-vn-update/index.html","f6885b9e262e58b3812dce0c0b3d7854"],["/tags/nvl-maker/index.html","2e531bcc0a757ba8ecfcd15c5450750d"],["/tags/player-related/index.html","e05a84d06d256064cc9a3799ea25ca73"],["/tags/pro-tutorial/index.html","1eab38c177b143d90c92da8b5dddcc02"],["/tags/pro-tutorial/page/2/index.html","dd9ad71ace344fb09d380b525a2d86fc"],["/tags/pro-tutorial/page/3/index.html","6596231523157064db08616f053a0ed3"],["/tags/pro-tutorial/page/4/index.html","19754f7d15615bfa87416369938cc384"],["/tags/pro-tutorial/page/5/index.html","7ffa378399e78b38eece173d096968d7"],["/tags/renpy/index.html","98a2cdd540cd214e2f20862e5f81fe57"],["/tags/rpg-maker-custom-map/index.html","6129f768baf8a26def109d06e511fa57"],["/tags/screen/index.html","564bbfd787497acf8c7f391cca250ffa"],["/tags/special-function/index.html","f601c5ca32f8b1210c312f97d2b23e47"],["/tags/suika2/index.html","3ffcda7f8bc18cc9104818afec1c7327"],["/tags/terms/index.html","50355b09aa0a38552d47a229a34d625a"],["/tags/tyranobuilder/index.html","857b544d3431271032f914ffc51a6167"],["/tags/ui-assets/index.html","f879dddcfc0ed579658ada1dc82b6e89"],["/tags/update/index.html","01b05739aa436ab53ef7ea2bb775605c"],["/tags/upload-game/index.html","616b69d638e24bcaea2eb3e9d729c735"],["/tags/variable/index.html","27fb136f9d70e02b1fa19809709e67a6"],["/tags/visual-novel-maker/index.html","e8dd136539e01ad07314171d594239ce"],["/tags/webgal/index.html","003008ae39df22e5149a369f4f69a562"],["/tags/封面製作/index.html","f21b2b6dd09b310c44dfef02f4fb7021"],["/tags/背景素材/index.html","acc47e3400b546a7ab848a3fad7e0d84"],["/tags/隨機功能/index.html","e455f1a297f0aad889f9e24829aa1525"],["/test123/index.html","bceb8b96274fb9ca034b148e87bf6d98"],["/textbutton/index.html","00c4cd11cf3cc7a8b7783536e1168d14"],["/to-do-tutorial/index.html","1eb023b8301867cd5f9d77accf336bf7"],["/tools/index.html","9725ceae1a50baf24ca8ba7da96410ec"],["/tooltip-function/index.html","7f20d28060f99e4c3211d9a0fc6a3655"],["/transfer-to-hexo/index.html","f4c394255f1e324d58d43a67b375f082"],["/tutorial-update-history/index.html","800800fd0cc8ab7b78b66633a441afad"],["/tyrano-name/index.html","79084950e6c0a6a69b22c1bfef21bb56"],["/tyranobuilder/index.html","45d1b471a94f12508933cd82737cb82b"],["/undefined/index.html","941f37c6f83cf9ea6bd49654d1c26595"],["/unskippable-video/index.html","35987d131afcd4cdeeb21121084b0c4d"],["/update-20221211/index.html","cc26b96389243e47b2dcbc850c3b2c05"],["/update-20221218/index.html","5776b67cee590d3f4a8158e3c7a149ca"],["/upload-download-save/index.html","61495bd5c13d82620b6fc1820f6ec99e"],["/upload-your-game-itch-io/index.html","45a3a45fc5896457cb1247e1c2cf3f61"],["/use-list/index.html","d96e16761b9ff50d0fea0d9aa8c50a98"],["/use-nvl-mode/index.html","992fdbb4858a5ca9b9cc7d3a6724ab23"],["/useimage/index.html","85a5cd9647d4294d9a1646125106d96d"],["/variable-change-image/index.html","d6af8d201b9a52864dd5f13fa98de6a4"],["/variable/index.html","e6c2debe0bd2b0d70f0e726303f3cc1e"],["/vibration-function/index.html","23a1d8e0af6706a82144da6adb23c923"],["/vnmaker/index.html","b14726a875a0b2e2402c871f386e5d2d"],["/weather-effect-tutorial/index.html","e263bbb9b541f04babe849d0b8e703b9"],["/webgal/index.html","f876691ca19f991a4e6e5495ddb2c333"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
