/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022-last-event/index.html","5dce4c58232151b4055a1c12d17e5609"],["/2024-future-plan/index.html","4a033063c343def9db88b4110341473b"],["/2player-battle-system/index.html","3b5119293aa1280446136a245a29577a"],["/404.html","24662061d3e6085460c79e99a6587422"],["/about/index.html","49c2f420ac978b213218d9d6088a9f76"],["/acg-creator/index.html","7d09b3fb0b05adea86603b795d947eba"],["/add-artitalk/aimg.png","4d9458a063d9dea1cff322eec89ddf6c"],["/add-artitalk/class.png","8f665d6e4b6bc80dd8fef0d35091aab2"],["/add-artitalk/index.html","8eb9f0ae546d043ce04861b666ae7bce"],["/add-artitalk/learn.png","122c16dbe8da6a9d93cdc37e60acd81b"],["/add-artitalk/nin.png","004fef4510be9de746ecf2a123da4591"],["/add-artitalk/per.png","2408b33d606a12d970164f759a65f202"],["/add-artitalk/per2.png","6d9865d1325b571bdb01656821b33dcd"],["/add-artitalk/per3.png","3d3f08aba0d01ac0a1a41efe01eb7aae"],["/add-artitalk/sett.png","7597dc9af61149ade691ce2a4d533872"],["/add-artitalk/sho.png","c0811e0aba0bc821a67db8068fef764f"],["/add-artitalk/user.png","0d0ac6ad35faa33922a2867bc13d9fa6"],["/all-discount/index.html","426f814f175aec2286dcf9a407df13af"],["/animated-title-main-menu/index.html","ede31f7f6c5b3ea049358c0294f26f7a"],["/archives/2022/05/index.html","0435b6392ba19c5818ab8b6571aa196a"],["/archives/2022/06/index.html","2e04ea39be143f66a9c52b30b0c587f2"],["/archives/2022/08/index.html","06f3412c4f538a1c565399e9bb56fce7"],["/archives/2022/09/index.html","38f491d6c45c974e81bbd50ab6f0d8b3"],["/archives/2022/10/index.html","d1dd3fc72a787c6ab9cb21969f19006d"],["/archives/2022/11/index.html","b0a8f6670a28da225ea1a8d01b780234"],["/archives/2022/12/index.html","5607d4dd746e6ef20c1d86ad87ca801e"],["/archives/2022/12/page/2/index.html","2cad4c443f8cebb01ebe5b569c94711a"],["/archives/2022/index.html","b00ebba730fb55431da1d221e861b024"],["/archives/2022/page/2/index.html","8b65c18ed2acec1e5b55e74669966669"],["/archives/2022/page/3/index.html","02f609ba501407745644ccb9b21bd40d"],["/archives/2023/01/index.html","d1f806a4784f3ed7892f921d8ff8d370"],["/archives/2023/02/index.html","9cf273fe66575c5b6b9f19dc5cb2b687"],["/archives/2023/03/index.html","d0b9db6e214fc09eacfbfc808e5fa76b"],["/archives/2023/04/index.html","77a05581872d7991f329a8d657e3eff1"],["/archives/2023/05/index.html","749cf9f771e11750d0903c1ea7ec6a14"],["/archives/2023/06/index.html","56949aa8dc405f8a142f131ec73a2357"],["/archives/2023/07/index.html","266f9643fd629afeb69c344cc5934003"],["/archives/2023/08/index.html","e4a09c56ceb24688786d36236aad3532"],["/archives/2023/09/index.html","9311358b3d14d3e78a3d8469b3782b6c"],["/archives/2023/10/index.html","bc3261560d14950665e3a620b4335edf"],["/archives/2023/11/index.html","194804f5e9c4d31caa5236bccb0e9ecb"],["/archives/2023/12/index.html","5707b243f2d34e10a0af920aab87d960"],["/archives/2023/index.html","e964e587fc4eff19dac297b9d68d84cf"],["/archives/2023/page/2/index.html","f28993a1c2e6ed71eb0be4dfab9880da"],["/archives/2023/page/3/index.html","af9d17f49aa8f7a7a8532a23c8db553d"],["/archives/2024/01/index.html","f443232428d23043b37ebfc657f1e1d9"],["/archives/2024/02/index.html","e94c294d8eed3a14f746ac247b67f191"],["/archives/2024/03/index.html","1630c001b73fc5f8085a65aa2e068bb4"],["/archives/2024/04/index.html","c63e23176d9f9d9ad81b8d528d8dbb97"],["/archives/2024/05/index.html","23f99c4f32e4ddb904cf63eb511c12db"],["/archives/2024/06/index.html","38bb6c91ae458177ca1ed9cfc46874ea"],["/archives/2024/07/index.html","af67205e3b1b94ffa8648d9ded83acd9"],["/archives/2024/index.html","e0afe636bdc5ba0a973073519cc62237"],["/archives/index.html","e3b2b31cc4aa1b4fc2491bfe4f054b4d"],["/archives/page/2/index.html","113cce37c43c832eacc970f2bb00df34"],["/archives/page/3/index.html","985c6628b5f8343591628fadb04cef39"],["/archives/page/4/index.html","a4626958650034830a1144e7916b87c0"],["/archives/page/5/index.html","30a7766520360dde1987b3400c9cce82"],["/archives/page/6/index.html","217c12af16e17202658fac80588fbebc"],["/archives/page/7/index.html","113b57d65de1fff5fc5554a6b4142df5"],["/artitalk/index.html","7c64e93bc4d58a65873cdd070b8c4d24"],["/battle-beautiful/index.html","04001a6b20b8d73469e6b90ccd46a261"],["/blur-effect/index.html","37df0b959ed522d5e5374b3b84c46c22"],["/butterfly-custom-tag/index.html","a7aa46e6ec0660cce98ec6b060282525"],["/butterfly-plugins-faq/index.html","ac1ceb29be540ffabb662be788faa3fc"],["/butterfly-ui-change/icon.png","7d8c313b097e8a022a89c43153e1f988"],["/butterfly-ui-change/index.html","e8db46b157faf1e7c4f3a3d457fc57bd"],["/butterfly-ui-change/nu.png","8a28ac1e9d1f22613dcb944c313eab3c"],["/butterfly-ui-change/people.png","ab47e097d71b6e1ba331d37f6561d2e2"],["/butterfly-ui-change/qrcode.png","4f19273a21fa3b27503cdd1cf9a97136"],["/butterfly-ui-change2/index.html","13ec1d500c34639de24af1fbcd7b6c5a"],["/categories/announcement/index.html","1ec2fb128e94f7c75cce2d70613ad826"],["/categories/diary/index.html","00ac33ab0eb9780325d6eb3a5a8440be"],["/categories/game-dev/game-engine/acg-creator/index.html","887611f0218c6e6bc3a6e976c9046e42"],["/categories/game-dev/game-engine/index.html","f2558abb83bf04a2aa05788675235d7a"],["/categories/game-dev/game-engine/lightvn/index.html","1053bdb5d7dcc19eab737659b3be294c"],["/categories/game-dev/game-engine/nvl-maker/index.html","b1810c252597e4bc80e7c73fb1abf086"],["/categories/game-dev/game-engine/page/2/index.html","99d2a4758432cb8796c4fcb84aaa64e3"],["/categories/game-dev/game-engine/page/3/index.html","f21cc376ec84ed353fef9c08a6db6bfa"],["/categories/game-dev/game-engine/page/4/index.html","35181b9bc5d678682124f26c112f5721"],["/categories/game-dev/game-engine/page/5/index.html","bbdf132e10340ce7c9a8a2ca413145a0"],["/categories/game-dev/game-engine/renpy/index.html","f7d0d9f5017ede409a83a0676a0fc4d1"],["/categories/game-dev/game-engine/renpy/page/2/index.html","0b60b2fd7e56c1368611794d9af975f0"],["/categories/game-dev/game-engine/renpy/page/3/index.html","f572e0260ae103f5df7d3831cebf8a7c"],["/categories/game-dev/game-engine/renpy/page/4/index.html","0467ec1292f842daf86e0915cf005783"],["/categories/game-dev/game-engine/renpy/page/5/index.html","7ea00c70c2195b9ee347014a1bf3bf46"],["/categories/game-dev/game-engine/renpy/tutorial/gui/index.html","01780c9388214fb226327def9776d704"],["/categories/game-dev/game-engine/renpy/tutorial/gui/page/2/index.html","1d8541fb6fe19ef8fc8e534c3226ba04"],["/categories/game-dev/game-engine/renpy/tutorial/gui/small-things/index.html","7bedf069fe6129b2bd9752ee8d16c8a1"],["/categories/game-dev/game-engine/renpy/tutorial/index.html","762a2e18cf6fb48a459877cca847a31d"],["/categories/game-dev/game-engine/renpy/tutorial/page/2/index.html","d39d1ee6f4edef1c985f2eb661a3fb6b"],["/categories/game-dev/game-engine/renpy/tutorial/page/3/index.html","2a765756a710d1f93da5cf8f09226489"],["/categories/game-dev/game-engine/renpy/tutorial/page/4/index.html","fb9bcc85f7958c25174367bd80bb41f4"],["/categories/game-dev/game-engine/renpy/tutorial/weather-particles/index.html","1d2facb2a279bf2b9d6874b1c544acfe"],["/categories/game-dev/game-engine/rpgmaker/index.html","ac711789ebf7f601235ea98b382461c4"],["/categories/game-dev/game-engine/suika2/index.html","c1680fdd9d6a51bcce0070ad6bc08655"],["/categories/game-dev/game-engine/tyranobuilder/index.html","410a4937b46edee4534cf2b3b957f927"],["/categories/game-dev/game-engine/visual-novel-maker/index.html","576c0306793ed1f4e66430998efabbf5"],["/categories/game-dev/game-engine/webgal/index.html","34f6466d18f2876e5d3170fd272fa6e3"],["/categories/game-dev/index.html","4037e88919ea0d9b3bc37103885e6da4"],["/categories/game-dev/page/2/index.html","3a89e51db10151077fe7462eaad6eec7"],["/categories/game-dev/page/3/index.html","93bac538a511b05d3cb788cf1b245108"],["/categories/game-dev/page/4/index.html","ca52f92f4a6f1d9523d114a5933ddc79"],["/categories/game-dev/page/5/index.html","5bdc4aae0bd4d4da4e698ee46ef01216"],["/categories/hexo/index.html","5baf09caecb07b90eb3029950ddee1e1"],["/categories/index.html","14c915e2fde2fa19a9c149ea3f8ace2f"],["/categories/material/index.html","b4b111346091fe149aa52bb04f19d002"],["/categories/update/index.html","225f103167bbb5019d47237029217b5e"],["/change-according-to-real-time/index.html","715d5573d8275f518a1ce51d54edd712"],["/change-character-info/index.html","ab3e151fcfdef290b0efa96f06a4e392"],["/change-title-after-first-time-viewing/index.html","14602a0a3b694e760d50e8d840e2aa61"],["/change-title-based-on-event/index.html","21f1ec94febda7e99954969ab139f125"],["/character-interaction/index.html","bb23d83561cb67c914e5263986578fb0"],["/character-stats/index.html","a14b9572c237d7b14c8ccdaa14ee5402"],["/chatbot/index.html","d476f559016d0d16be458374b7b09a67"],["/choice-time/index.html","64a8f77c3a26481a5a946e88ae437b64"],["/comments/index.html","d0da9ebfdd04e92ddf0a29d261d88a25"],["/commission-info/index.html","be2db6e227371d0235b19e1ce77f5f07"],["/count-login-number/index.html","6d6c72fd349ceb80187e48d8581cc821"],["/create-button-anywhere/index.html","6be707e408f3c197d3d936ff81f56bf5"],["/css/eurkon.css","63f6f9124cd2090ae9439f1e6d1ff61a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/iconfont.css","25c59b7a8af161d6ccfea788565384f5"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","e718dcd7c2d645090f6e2dd44c458119"],["/css/rightmenu.css","12b6f638876e84fc845d595a7e7fe911"],["/css/siz.css","d99c54c19c6022ba8837ad3f6124a86d"],["/css/swiper.css","e94baee2d086aee3cd0cd3dc25861f48"],["/css/swiperstyle.css","2f1413d82dd274fc90c71e304c38e1a2"],["/css/var.css","9870edcb0e2cff2d1572c30d1f9429d7"],["/ctc/index.html","e2185df435c588fa7e1da42c340480db"],["/custom-css/add.png","82570852240e3cf9a8cf375a0d344cb7"],["/custom-css/css.png","f4566571f2026a7ddfd804f4deb82a0d"],["/custom-css/footer.png","1af94f86b23a84399f265d8fbf2879c0"],["/custom-css/index.html","7a982fcbe6f401ae77c0e65781fb4107"],["/custom-css/name.png","99cebf2b1499e7cb224dd47f1ac49980"],["/custom-css/ori.png","90f905a0a8b9cfa1a1af5e17310090df"],["/custom-css/pa2.png","507eb5b7fa94fb1800e12bd725fd15fe"],["/custom-css/pa3-2.png","99e82c78f332988f7a79e8f64cf9fce0"],["/custom-css/pa3.png","feaeadf67b73ef4a88678e97411a501d"],["/custom-css/pad.png","3ff20632cab5874cea70198e9d051266"],["/custom-css/screen.png","dde94c2b5211b483dbcda07c7eccb48b"],["/custom-frame/index.html","671ba90448ac2d1582668d9d41925ad7"],["/custom-gallery-cg-screen/index.html","1896c7db8c3122f7bf00ed416cac119f"],["/custom-launcher/index.html","9ce34f14c36ef605b2482fd917b0c816"],["/custom-loading-screen/index.html","abc6b8bc2f550df76db8905324e2052d"],["/custom-mouse/index.html","2896f0eaac0622e1a4f5ea47015b3804"],["/custom-music-room-screen/index.html","f6d09a8d95b65061e0557dda95c23352"],["/custom-music-room-screen2/index.html","8219b7115747ab0d9711777f108dbad9"],["/custom-nvl/index.html","c927bf5c346e2ede5599e787fcc990e9"],["/custom-player/index.html","3da36a5061b6d968ed1257ab1405eb5b"],["/custom-preferences-screen/index.html","424eb1c5528f39051ff1ba5561c787cb"],["/custom-say-screen/index.html","cac39e50995c14a8106a5d0468e69485"],["/custom-style-bar/index.html","d35b587a572e8e1f6e60c71d8f41b7dc"],["/custom-style-box/index.html","d77cfb999accaafe7346c4b2557db7c5"],["/custom-style-button/index.html","ec6224529872b02d01d475786d0eacc6"],["/custom-style-grid/index.html","5ede40919b924620d422eab3b5a4f224"],["/custom-style-position/index.html","343a54d4ce4485109533b7a0a7b8d8a8"],["/custom-style-prefix/index.html","98c1541bfe9974e858707b6fd23d65f5"],["/custom-style-text/index.html","d25ebc0f38468381637dfb693358da17"],["/custom-style-window/index.html","ea14198d848e40e8691efa25364f93b5"],["/custom-title-screen/index.html","1f7a48bcb0c09bfbdcee0ae4c0a36250"],["/define-npcs/index.html","4df4ac32207d9ff1d0e4d38a1ed46e7c"],["/delete-save/index.html","37596d5b10214378a10556fa8e881766"],["/dice-function/index.html","27e71bc4d2038fc1a7b5a30983f10800"],["/disclaimer/index.html","967060222a1ac41eb933914fc9d7b35d"],["/display-immediately-all-dialogues/index.html","fd1d92c5f9d0b86c499cd72c53811387"],["/display-real-time/index.html","97fdb948ec50b5d8fc7d300806f48059"],["/enter-name-screen/index.html","b649574d1cd1b29d42233d4937183715"],["/export-game/index.html","e146acfc8350cf792d6a376de94785db"],["/faq/index.html","66f05b55e08eca95ee1a7f5f8ca08f1e"],["/friends/index.html","e40922cbf234c9d12f07eb3574c76608"],["/gallery-template-assets/index.html","c125341d7a05e5c4c5eb20df9f53a718"],["/gallery-template-default-ver/index.html","28e428ce49f56960714f4b957946016f"],["/gallery/index.html","225cd995b5564aa711f2f2ce30128ae3"],["/gallery/photo/bg/index.html","d2eaa72926a105dae95e83b5cdb85196"],["/gallery/photo/gui/index.html","91381354acdacd675fd56ea632aa1ada"],["/game-only-text/index.html","92e99ac13f03223ea4c7c610a8a98c72"],["/generate-random-name/index.html","ff4dc909f7b972fce810c36941c317fe"],["/gui-017/index.html","0fe9a4adc0cff498ac9d383ce34be1e5"],["/gui-vertical-002/index.html","65aef1c35bd0f9008d764dbe9d403dd0"],["/gui012/index.html","9c820fcc91350d6072f062877b33567f"],["/gui018/index.html","fe0108f068838c23805700f1fb8e4148"],["/gui019/index.html","80fa47c1330065e02916cdb87b9054a7"],["/gui020/index.html","b78d0bc5c7d4635dc55c67a79b199844"],["/hexo-basic/cmd.png","45ef5bba503f7ec8b0da05ca5dcb4912"],["/hexo-basic/cmd2.png","52eda27f7b027cfb72ff6a67f02ca9d7"],["/hexo-basic/cmd3.png","e4b077eac5d465a0b6add06ecded1f39"],["/hexo-basic/git.png","b2d22e15a054b592da8db9a889abd97f"],["/hexo-basic/index.html","c7f315f8fb27eded19c27fd25f537e3d"],["/hexo-basic/node.png","fc0a7226a716bb933b892e3690149a09"],["/hexo-custom-mouse-disply/index.html","3236710cb057e696deaef113cafc9095"],["/hide-textbox/index.html","f2fa6ae54741d537bb0a3aa532f0ce56"],["/how-to-choose-vn-engine/1.png","d7a6c5078031778a916476a099dea4e3"],["/how-to-choose-vn-engine/index.html","75a8344f5aad0273b935419dbf24cffc"],["/images-tip-function/index.html","f2056167457c7b526a3df1b1568edd05"],["/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/images/pawicons/32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/images/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/images/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/images/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/images/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/images/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/images/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pawicons/favicon_16x16.jpg","7170a7a0a8983fb2790e28c864648f5b"],["/images/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pawicons/favicon_32x32.jpg","b7c8a8f8bc324df4758a5c611c623837"],["/images/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/images/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/images/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/images/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/images/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/images/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/images/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/1.png","d7a6c5078031778a916476a099dea4e3"],["/img/404.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/about/infj.png","ca9602d3250d40b9621b89884a405140"],["/img/about/infp.png","b579b5acf80e6970b34504df98f20f25"],["/img/avatar.png","23d3630eaefa5276d9229ad840fe715a"],["/img/bg.jpg","42be14e79e6a48df2f0ff0f42908383d"],["/img/bg2.jpg","bbf70c6075b8f37faf4f38c0937c0b73"],["/img/bmc.png","40b98209d9deb3e69053d4a559cc8a30"],["/img/favicon.png","4ed0320564232b69ec8a28f66cb18115"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/kofi.png","164e2a1727fc90ff7cc45834e794f915"],["/img/n1.png","46102d8b356c543063af22b91125de66"],["/img/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/img/n3.png","6e5658c09602eada3635092bb303a734"],["/img/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/img/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/192.png","854c9024d2235b09714ad264590aa61d"],["/img/pawicons/32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/36.png","a034a149093988bfbbe6a63d8bd9eb59"],["/img/pawicons/48.png","bf59c3d6452c607b83902df11de2f1c9"],["/img/pawicons/512.png","4c01addfddca35335050e6aa8e958f80"],["/img/pawicons/72.png","e4f5a3f8d7f86bea9d072d1837ee1d76"],["/img/pawicons/96.png","2bd2af18ac87be4bd4ed9ec9eec72c61"],["/img/pawicons/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/img/pawicons/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pawicons/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pawicons/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pawicons/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pawicons/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pawicons/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/paypal.png","80bff034d3f4f5c10287535e67f74d6e"],["/img/pwa/apple-touch-icon.png","4baf4ed8f0ca9617ebd2d2e1ac0ec159"],["/img/pwa/favicon_144x144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/img/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/img/pwa/favicon_16x16.png","8cb58ed708c756f9bcc25b23aea5fc1d"],["/img/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/img/pwa/favicon_32x32.png","37029cdf7589ff8a6ddd4426ad9cd43d"],["/img/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/img/renpy1.png","28e219b7d1e5cda04c84a92716f4df8f"],["/in-game-change-size/index.html","a584913f2da138533a81bfd768845133"],["/index.html","0ffe2f2dd076e136158587be98d458c4"],["/install-use-valine/config.png","a1c4f20e0d2d31cb87f435d6c8f12d6e"],["/install-use-valine/index.html","1df1d871235a208ad537c8206c426194"],["/install-use-valine/learn.png","9f5cab271ae5770186567993839e6acb"],["/install-use-valine/sett.png","000afcbbf1632280b86074e3ebd5a057"],["/inventory-system/index.html","d85c6e2987ab1bae3888e4529309cba5"],["/items-sprites-effect/index.html","6e7c5aeed8e6d56d4a2d3cd11318f97f"],["/js/countup.js","04397b967e3ec0c509586356266b3ded"],["/js/main.js","80de3021a5d1ba2ecc68d332b284c836"],["/js/rightmenu.js","e4b3044aa999f5c624cb1432ff11d15d"],["/js/search/algolia.js","93ffd0a34bdc6ae3371140da18142343"],["/js/search/local-search.js","979ec59da4b1a01e6b1a9d344c972dd0"],["/js/tw_cn.js","44dc15cfe343a2507e75c2a9b90a3e74"],["/js/user.js","2de95d9d8f34f27ab47eab36534271c1"],["/js/utils.js","8e49a06cd405efabb8958ec2dad30c94"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lightvn22-10-03/index.html","f4a87379ea5ec27c44d9fdd415e124e7"],["/lightvn22-10-03/n1.png","46102d8b356c543063af22b91125de66"],["/lightvn22-10-03/n2.png","328d44546d0aceb42f8c1b1185b93e33"],["/lightvn22-10-03/n3.png","6e5658c09602eada3635092bb303a734"],["/lightvn22-10-03/n4.png","f950f04d1aca5af2dc5639bcfac93ae7"],["/lightvn22-11-24/index.html","ad92a7ed53d9e8b8a0ac4c2330d06bd6"],["/likebutton/b2.png","2ba76e233d358389260c0a04e0021a69"],["/likebutton/button.png","a3b1dc71d3f7ce8a3e1eb23db394ee93"],["/likebutton/index.html","bebc1612066f6fce1658e0fda559f6a1"],["/link/index.html","22af0db3bc8aba3ff5a046523b7bdc3f"],["/login-reward/index.html","9716942e94823dc0a7d75f80a248453d"],["/main-menu-music/index.html","9e6a100f9cfd6e0e396e1b232116ca51"],["/make-butterfly-beautiful4/index.html","f146057beea706c3cdfc4f1fd119a45c"],["/map-puzzle-system/index.html","eb44ad5df00617870bb994e136a6a592"],["/maple-effect/index.html","d640922c8a70f2d18a83d87fd7ff2cb9"],["/memberships-2/index.html","eb98d5f78077817db87f283b10d3229d"],["/memberships/index.html","8db8811c27b7612b59199df2dea7f6a0"],["/multiple-language/index.html","4635e19fb7152df135fbcf88191461ee"],["/name-input-assets/index.html","b4bf62b50ffba765fc55d44da128d567"],["/new-year-event-2023/index.html","a0e68317c9f7fe27f113cf320a7d1ed8"],["/newsletter/index.html","5fe4cb4c6665eb9b3d03cabb47e3df8e"],["/nsfw-limited/index.html","07639018f514033f58f1ca37ffa7292e"],["/null/index.html","bd9d1a50545ebb8c44ac4efe59a747b5"],["/null/s1.png","1176983004870afc4f08e0d2be9a8bb6"],["/null/s2.png","46f15dedf94714c15101b0ac6c64e324"],["/nvl-ctc/index.html","21da074ffa7076c368531cc748f37852"],["/nvlmaker/command.png","6e0f649bf1751b3b11c76269c3d37b24"],["/nvlmaker/direkt.png","09e2e2151bca608bb495008ba50daa6f"],["/nvlmaker/ed.png","d91ac2357ccca993ad183f8a39cd7be2"],["/nvlmaker/index.html","26ba4b840db5802887dd406ee9955959"],["/nvlmaker/new.png","420b39c1987d7c58e1c18a85e1be7a79"],["/nvlmaker/scri.png","887b182fd9cd5f23a6a0765967d8b5b6"],["/nvlmaker/time.png","46b645a2c6a52ec40a3677e701bafcf8"],["/nvlmaker/time2.png","a5486ac563fe6dde70282348a703c375"],["/open-external-link/index.html","e9bdcc1e5aeb0daad26b292af90872f8"],["/openchatai-renpy/index.html","d4760aaa3fcf5e3758a738998f2699cb"],["/original/index.html","1b545219e06a15c29c7b2135375ad7a2"],["/page/2/index.html","ecb164125cbc313f4a557fbd21e35610"],["/page/3/index.html","6ef7389264142933da6f329b8b616919"],["/page/4/index.html","2f6ba83b4a6ed289fe8cc395b9fc1016"],["/page/5/index.html","3d234fc9fd1e33f84a01666323c31031"],["/page/6/index.html","68c61f2dcea6d2fe0c67d0cc977ed44b"],["/page/7/index.html","29f6f22159416acab716d0f7a68d8065"],["/point-pop-up-assets/index.html","f4c2dfe934bcce2a35f6e16f26acbb23"],["/pop-point/index.html","25a7e0200905a180bc0489dfebbbde0f"],["/privacy-policy/index.html","3b3140070e6d9d4bc97f425cec1faa1a"],["/pwa/apple-touch-icon.png","7af86bc2a2d91f2b6959543e9a941215"],["/pwa/favicon_16x16.jpg","171c36385b27a85539df87f8729317ec"],["/pwa/favicon_32x32.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.jpg","46e57f9fcc55a0242745fc27d3fef46b"],["/pwa/images/pawicons/144.png","ecd3156214cdb6a4f1d124a79337fd6a"],["/pwa/safari-pinned-tab.svg","07f07de3fdbc4f8dfda96df3b8c652d5"],["/random-dialogue/index.html","ed674c16f72b8f26e3def1bd33fadbcc"],["/random-number/index.html","72d5d03333c204a977961a127dd5054e"],["/random.html","ded19e743a6ffa3c0fa5cd266b7812a8"],["/release-017/index.html","7dcefda047067e43aa9050766d6d38fc"],["/remembering-choices/index.html","a4cd9b2bb6b8860f60f932b5d827a9b7"],["/renpy-basic/index.html","d7fca7591abb40268567289ae566377e"],["/renpy-crash-glitch-effect/index.html","efd119d5bb4f948c3503da9992dbbc0f"],["/renpy-flip-image/index.html","5f141dd7479bc0d3298075380b9ece64"],["/renpy-matrixcolor/index.html","3453feea546053e5ebe2cb0cdd11acc8"],["/renpy-overlay/index.html","d41baa95b3d81104d569201e35b97459"],["/renpy-review/index.html","a5ca17fc37e573fa1641a900d40ef75b"],["/renpy-typing-effect/index.html","44befaa047bc491354e530809f94e736"],["/rpgmaker-assets-menu/index.html","0dea4653c1cec2e95f05408d6b2c4141"],["/rpgmaker-create-a-new-map/1.png","a81910172c8e1e275e04c7674e15105a"],["/rpgmaker-create-a-new-map/2.png","af38fdfd4701227edf452d27d6755f92"],["/rpgmaker-create-a-new-map/3.png","a25b61ac9cefcd2e0e52554c93378ee0"],["/rpgmaker-create-a-new-map/4.png","96b86467bcaaf99a64436126d9b14f3e"],["/rpgmaker-create-a-new-map/5.png","9f7132517b5b8eb9a61e4b26162109f5"],["/rpgmaker-create-a-new-map/index.html","2c97ffcbc21a21e95ee0c4f1c643c3b8"],["/rpgmaker-walking/3.png","0fe4ff1345bf469de63e5015dfa45ec5"],["/rpgmaker-walking/4.png","64bf69239d5d26e45c6600084e47d521"],["/rpgmaker-walking/5.png","d0c78222ec92038ef2343af31e4f229f"],["/rpgmaker-walking/index.html","e1c4282889f34b6c6091a166c47586ad"],["/sakura-tree-background/index.html","34909d83b9f96a1c3f21f8dfcd7bd9e6"],["/selected-button-style/index.html","72b8f0ccc8631d7fb82123b5ccfbdb56"],["/service-worker.js","67287872309c8f0ffe5664b4a6a34eb0"],["/show-variable/index.html","d1bc6e281df6097fccf81c087bf9bcf7"],["/side-image/index.html","23c9d0b010e692d69b1aa3dc6098a0c9"],["/snow-effect/index.html","c5b71066ead6fadf07d4449558a4d402"],["/speaking-animation/index.html","13e82a9a5a0dde24933bacab8c851a7f"],["/splashscreen/index.html","bb0e158fc96e6895c203e294e61cec79"],["/suika2/index.html","d7d85fc8d34dfddf90935a6bb9b5b280"],["/sw-register.js","dcf1c1324a848c80bbbf5d79904ae2a5"],["/tags/Hexo-plugins/index.html","3909b16741ac2a3b2991b00fb6bf873e"],["/tags/Light-VN/index.html","53f7dae1e7d20fb446a91a54facaf2ac"],["/tags/acg-creator/index.html","ed374c7485964a174d3677f6c6e56b28"],["/tags/ai/index.html","7550664c7d96e9263b3dd1a5bb690dab"],["/tags/butterfly-beauty-diary/index.html","29fbc0e4ecca9873267422c33f17344d"],["/tags/custom-hexo-theme-butterfly/index.html","a1bf50b036eb7ed66e432a1925d9e69d"],["/tags/custom-renpy-title/index.html","057f72956686f931a2bf01ba9d1b88d2"],["/tags/dialogue/index.html","eeb14802fca5d6cdf4b0e3030c2a227d"],["/tags/effect/index.html","439536a16ad827edfae1265c97e838ff"],["/tags/event/index.html","4cefdc3b3e2259e01e76c55cc616ef0f"],["/tags/hosting-own-website/index.html","dbd6abff7eb6afcdd34cfedfffdc0d24"],["/tags/index.html","066e4a5e4155c08c95854225441f4e52"],["/tags/itch-io/index.html","3ba9ca5bf5ead4968c113713e6d38dca"],["/tags/light-vn-update/index.html","67cb7a26c7f144d64ed892b43c143650"],["/tags/nvl-maker/index.html","99e40ff69897164e74aec1ca8e257b72"],["/tags/player-related/index.html","e2e9398af2f982fc9fc91349f77cb4ad"],["/tags/pro-tutorial/index.html","1a0680e769f390a9c1da3801a2b6564c"],["/tags/pro-tutorial/page/2/index.html","4f8e3b26b4c70344b6b9a2124e50ed1c"],["/tags/pro-tutorial/page/3/index.html","6eb2d12ad62dcc25f02cff9a3a9d66c7"],["/tags/pro-tutorial/page/4/index.html","9402f47299fc605e624b0e74f6dc816b"],["/tags/renpy/index.html","6d8f2cd9739df824ceb0499ebc2293fd"],["/tags/rpg-maker-custom-map/index.html","5df9ada38c955371ce069f4114db29ee"],["/tags/screen/index.html","06ac45dee4cf15c9794c2d8f7fae567f"],["/tags/special-function/index.html","a8494ba0f6e4f4ec02ac94e669364ad1"],["/tags/suika2/index.html","bb39265a4587984aaedb4cc702bba303"],["/tags/tyranobuilder/index.html","ebc3c74ff01687499a9eadb81ec41571"],["/tags/ui-assets/index.html","b04948dc17441954436544a02d2e040d"],["/tags/update/index.html","da17fceb3684a05b9201f9502ec62ea2"],["/tags/upload-game/index.html","22b7217d886f6d5c3d4b51e82c099855"],["/tags/variable/index.html","187104923df4603cf55bbbc59e387836"],["/tags/visual-novel-maker/index.html","5a604e298512417a1b12a431195ac3c3"],["/tags/webgal/index.html","d1545cc7261f438b747665fab0ebfae7"],["/tags/封面製作/index.html","6bb0b0f7392cb3f6a90697b65ca880bb"],["/tags/背景素材/index.html","2d682c766e1eb01a86679ecf7d897cce"],["/tags/隨機功能/index.html","72881a5e1d834a52bf2ee6fa57c2c4f9"],["/test123/index.html","53710b16214b726f7102f25d38b17523"],["/textbutton/index.html","459367f03058d2a4437915f48610b4ed"],["/to-do-tutorial/index.html","85a1fd0d78b70374f4f36d99ce40f8e5"],["/tools/index.html","40ced566bee9d7099a2d603d4dba0ede"],["/tooltip-function/index.html","75a5d4d7b21d94bae0f2c92fbbe07998"],["/transfer-to-hexo/index.html","e3330448ada4ce32fa2dd5db4d9a72e2"],["/tutorial-update-history/index.html","5bcd8402d8c9f404dc284259a0438e14"],["/tyrano-name/index.html","2d3f56284e2164dc844cb8605b6485b0"],["/tyranobuilder/index.html","961df482bf1604da5a46ba2a807cd741"],["/undefined/index.html","4bf652d92740e95ff30aa6eb3d79db4e"],["/unskippable-video/index.html","4da1dc641241ba966581b4df69b70114"],["/update-20221211/index.html","a664a0d561c9d0e4697aafbb1a67ef5b"],["/update-20221218/index.html","edfba2decbf643ff934c2eb39ecae58a"],["/upload-download-save/index.html","2324489a23f541feaaf457c4d09d628b"],["/upload-your-game-itch-io/index.html","97df26b6ea8f28afc9e204ba9171f0ae"],["/use-list/index.html","58abb79d4b19ae602c53048e7deebd37"],["/use-nvl-mode/index.html","c75903ef549406ae917ecdcfd1f87b2c"],["/useimage/index.html","cacbfab4343d302752d0737ffc2aa716"],["/variable-change-image/index.html","92af26426d7b95e50fe47b6cd9de4bc2"],["/variable/index.html","7b187d9724ddc46a58f39ce7e687a3da"],["/vibration-function/index.html","3f3ba892ff3787686de9e335e21428fe"],["/vnmaker/index.html","4360b516f4e3ef4e7c917df6a6f4c119"],["/weather-effect-tutorial/index.html","7002a1100657025bce9e6a9f577a13c9"],["/webgal/index.html","240729aa796c996fbd28c73f61ed3993"],["/workbox-d249b2c8.js","a2207807f7bb5e593e7abede626f75a5"]];
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
