if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const r=e=>a(e,i),n={module:{uri:i},exports:d,require:r};s[i]=Promise.all(c.map((e=>n[e]||r(e)))).then((e=>(f(...e),d)))}}define(["./workbox-03115cca"],(function(e){"use strict";e.setCacheNameDetails({prefix:"kislovodsk"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/acropolis.e22c67bd.png",revision:"563e356fff114efbdb4273d20363dfa7"},{url:"assets/artclip.b6e6e696.jpeg",revision:"0dd96df1e9cae7ddbc56022ea7b4ff29"},{url:"assets/axios.f066d119.js",revision:"f2208912103f33a16b369aa04d10da4c"},{url:"assets/BestPage.144a1d51.js",revision:"d1b8b23f735378e0820778a42f991b44"},{url:"assets/BestPage.ff6c0c09.css",revision:"1c274c1f7a7517ba86a16cf1dce53a35"},{url:"assets/bitmap.3a69beaa.png",revision:"53b86c6833280ee62f051a45db8de4b8"},{url:"assets/BookingPage.0249d535.js",revision:"d0332147305b45797c9e845f09e3b9c0"},{url:"assets/BookingPage.df0b5472.css",revision:"34039aa35b24b9d9053aef9fa6235f0c"},{url:"assets/boutique.f83d9efb.png",revision:"5298b00f5ba8aa96ccdf4c4c41fca21d"},{url:"assets/cafeBan.86c13bc2.jpeg",revision:"fc12e7cdaed0096bc3cd87a607fa799a"},{url:"assets/car-wash.7f5a6eb1.png",revision:"03d43defd4583b85d77c0ba88be3d894"},{url:"assets/cat.9c8bb014.png",revision:"b2a77f651c7e8e9c47ccdb789fcec95b"},{url:"assets/cexcursionfe.3673f299.webp",revision:"56168d1dd7b5fec4211affbf81ef4178"},{url:"assets/cexcursionfe.4347bf77.png",revision:"96f96b747ffbb0e89949a07799b454aa"},{url:"assets/child.f287c099.png",revision:"3bd28aaaf501cda05b28038d6483cb41"},{url:"assets/children.47445c51.webp",revision:"77234732ee2fabc1631d11ae418ea897"},{url:"assets/circ.d2111a26.jpg",revision:"642c56aa88660dc38faded676af2cf80"},{url:"assets/ClosePopup.bab27e77.js",revision:"96737ad74c2f5bafdd021b466c9221f9"},{url:"assets/eksban.ced9d903.jpg",revision:"8faa06a165650bbf06daa4e329a323c0"},{url:"assets/ErrorNotFound.02a7acfe.js",revision:"e19c3338ba8b8edd66a1b27ffe121ff2"},{url:"assets/fa-brands-400.404c746c.woff2",revision:"cd2b4095e9ce66cde642c3502a4022d9"},{url:"assets/fa-brands-400.e523f49c.ttf",revision:"a78ffbbed2d858c61e068e3b756c9988"},{url:"assets/fa-regular-400.4e96a7e0.ttf",revision:"b1a1bebb63656b34a23982706f712f71"},{url:"assets/fa-regular-400.6a274e76.woff2",revision:"e8a1ba418ee6d897d1339ef22e6d8e60"},{url:"assets/fa-solid-900.03f2986c.ttf",revision:"738201559a50502aacabdbdb02720910"},{url:"assets/fa-solid-900.d76fb4e8.woff2",revision:"55b416a8df21f9f987aa352f10d1343b"},{url:"assets/fa-v4compatibility.0db31bef.woff2",revision:"786e6b3373bab47e928c81c26eeccb08"},{url:"assets/fa-v4compatibility.86a687cf.ttf",revision:"0d6f5f1852affca569715821fe4aa29b"},{url:"assets/fastBan.144dd5e1.jpg",revision:"d5a6cc714b619f46c0aa7099916b052b"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/fil.3dfdda86.webp",revision:"17836c23c6ab4da4a849187e0251fdb7"},{url:"assets/fitness.c3b90587.png",revision:"09349ba9ccde114844d97d98e2fbd217"},{url:"assets/flat.3152b289.png",revision:"857ce6c53bcffa59bc2b42e8d2b01dbd"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.1659ac2b.woff",revision:"e7ee6642f9771137444ed489b12f99cc"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.115bdc62.woff2",revision:"4525df77e6f46e1ed85e150ea763d185"},{url:"assets/focus-manager.32f8d49a.js",revision:"35bd0ea6212d7e6f10bfeb9df3258bcc"},{url:"assets/format.573576cb.js",revision:"33fcdbbc8327abfe66eb86772077c1da"},{url:"assets/fur.0c8f859d.png",revision:"114adf61c488db1eb1151fdf54eae78c"},{url:"assets/gift.6a2c77c0.png",revision:"ff183bbf4e5368c6a6450fe9222cab71"},{url:"assets/Gostinitsa.72e08783.png",revision:"81fcaa3f0f79742e4015c86938c35f67"},{url:"assets/hair-cut.39c4f034.png",revision:"0b52940cf3c6e66fc6a32207f20fed7e"},{url:"assets/harp.259e70de.png",revision:"1c79d4c609ec71324128a62a81bc1f1f"},{url:"assets/HealthPage.0f72c15d.js",revision:"0a2a57eaee77208dd00336d9742af2ab"},{url:"assets/HealthPage.6357ba46.css",revision:"9f900852199053c551d7ce4fde71c5bb"},{url:"assets/HelpPage.99c7d9b5.css",revision:"7b560afbad739fea8f390504185b8caf"},{url:"assets/HelpPage.dbdbcec3.js",revision:"788b080a2f74655fdd63c42ab07a2571"},{url:"assets/hotel.48311715.png",revision:"f4cc106111a438eb27c10ef8430313d8"},{url:"assets/i18n.e754090a.js",revision:"9a8e667f1d1cf62c22db2eec6f517c04"},{url:"assets/index.094d4d74.css",revision:"8a92641e3f07dc6d489a2e88b3d93a21"},{url:"assets/index.b482a12a.js",revision:"5f628fcd0eeabffdf55cc8bc511e9a7d"},{url:"assets/IndexPage.9f519015.js",revision:"077e0650e98267fd33f0f856bc3758f6"},{url:"assets/IndexPage.e8bcf769.css",revision:"49ab1c326ae6c0ccd37d851b0f04f9d7"},{url:"assets/InfoPage.0b9f7702.css",revision:"f4f59c5fe7e2054054c5aa827d3def2d"},{url:"assets/InfoPage.9cb0c161.js",revision:"a1fdcafee9768b6d41257ec2bd1110b2"},{url:"assets/intro.276f3199.mp4",revision:"ebe59f6c1b9987f4f6d88f3f8bd0409e"},{url:"assets/kick.1cba1701.png",revision:"5b7a89a3e8a6d219a21f47d2e9ff14ff"},{url:"assets/kislovodsk.15683c6e.jpg",revision:"43b23b57af7caac7be53efb06465ca65"},{url:"assets/laptop.256df84e.png",revision:"f4b40ac045ba489effcf7a829a03c882"},{url:"assets/MainLayout.3ccc23e5.css",revision:"018f4be5077d0c7e48c366e55cd85f62"},{url:"assets/MainLayout.c50e9c17.js",revision:"f570eb0baaafaee2c755c0ec7f017630"},{url:"assets/marshrut.9da03d5d.webp",revision:"dd334eb02137eb8527aaf32337b0953e"},{url:"assets/motel.8271edca.png",revision:"b2ef7477e76e3dfef8e438eaaa887eca"},{url:"assets/painting.b2261059.png",revision:"7831a926126aca52d8042d9b52d60cd0"},{url:"assets/parking.454ee43a.png",revision:"8954f1d9228c8433edfb392f848cf0de"},{url:"assets/ParkingPage.c8ae56fd.js",revision:"8ab45fb78c12791dfeb9b5a8bb8a11a2"},{url:"assets/PostPage.43db81b4.css",revision:"8837c2063d06c94be88753a30c1bc226"},{url:"assets/PostPage.f9d3f2c7.js",revision:"0f4073c303178ca3ae2c450438d6cf1c"},{url:"assets/QCard.6d1ccc9a.js",revision:"f23ff37a45d203dc00c02947f3e3f62a"},{url:"assets/QCardSection.b80d42ee.js",revision:"3845ac9495af2512dda64bc252689550"},{url:"assets/QCarousel.6a655443.js",revision:"d02ffb4eaa153dfd320dd6d4203e288a"},{url:"assets/QImg.45e83603.js",revision:"550fefbab596de9603a948c092301ed8"},{url:"assets/QItem.da107263.js",revision:"174aa0c329054572e3627497c67bec9f"},{url:"assets/QSeparator.7d45022e.js",revision:"7c7618c6c500202c14c1589eca58cd5c"},{url:"assets/repair.61afdd05.png",revision:"aee12cfe4588b2d3ea59cbfca9e582c2"},{url:"assets/RepairPage.857cdaa8.js",revision:"766b0ba1d1c417af1f91144792397235"},{url:"assets/restBan.947541d2.jpeg",revision:"cff07006336e4adaf117a8a69692e558"},{url:"assets/Sanvoen.339f137a.jpeg",revision:"ade742bd548e93fff4696b559d7d3009"},{url:"assets/selection.973ac545.js",revision:"491fe3ed9674eb3ecdd3734599ed4e9c"},{url:"assets/SPA.6433707f.png",revision:"14fc3f0b833c27ddd1fe8a41709ab171"},{url:"assets/sport.2311a863.png",revision:"e60d7ecc2cf071a1f68afce770d700c1"},{url:"assets/stolBan.86d4a170.jpg",revision:"d6d158731835143596fafc3e6a480232"},{url:"assets/tour.ae151d7b.webp",revision:"0262a56451e689180087984e87f8b207"},{url:"assets/TourPage.886b192d.js",revision:"bd9ece9b2fd81cf47e1233234a3c3181"},{url:"assets/TourPage.f65bbb49.css",revision:"de4378d739088e16a87e4342530b4d8c"},{url:"assets/uid.42677368.js",revision:"01add560b365ffb4147667d832fc2267"},{url:"assets/UniPage.24e06560.js",revision:"40d66171712ee7f55575c4070ecd1098"},{url:"assets/UniPage.dd83db5a.css",revision:"9c478d0081d9a95277a7f7e385249beb"},{url:"assets/use-dark.9d8cb914.js",revision:"89d9ba15e7ade81bee6d783dba2f3e0f"},{url:"assets/use-form.b88bc090.js",revision:"d84a86344fdada6f88dd67eb2d1a6c2c"},{url:"assets/use-model-toggle.8086d134.js",revision:"b31da307f642f1e29ba1c59e21aeecba"},{url:"assets/use-quasar.2676abfe.js",revision:"8cc3108dbcdedf3cf4f90797dfeb07ef"},{url:"assets/use-ratio.72048474.js",revision:"bf05fc1d9856d2fc1a1dd51e7c20a5db"},{url:"assets/use-timeout.1c03ce2d.js",revision:"1a0666dc9b8148322a1dbe91290cd870"},{url:"assets/van.642ff995.png",revision:"2b3a3f849f61442bca34f8d12778f466"},{url:"assets/VanPage.8153e7ef.css",revision:"7a5d606483522a8271d75945554ab280"},{url:"assets/VanPage.d72e615e.js",revision:"e65c380951fd54c658cbc4cf84ac21b0"},{url:"assets/video.68409141.png",revision:"8381bcceddb8efb1b9adc7d8f0d24733"},{url:"assets/VideoPage.39374b28.js",revision:"c9f9e4f323be493425828cb9a8f63b83"},{url:"assets/vustavk.862afa60.webp",revision:"32f3418efc45460742de4ca2dfc94313"},{url:"favicon.ico",revision:"4b65c47d2441240f9b5c8950edd9c495"},{url:"icons/apple-icon-120x120.png",revision:"161d08152803337e96e569fe64b036cb"},{url:"icons/apple-icon-152x152.png",revision:"3787c4d0d695c6012f52cc564f227fb2"},{url:"icons/apple-icon-167x167.png",revision:"38b343653438505a727a0cf996072b0e"},{url:"icons/apple-icon-180x180.png",revision:"4856f7e877361b0ad721ecacc30dc294"},{url:"icons/apple-launch-1125x2436.png",revision:"58a0105848b8f8fbdd2a4b79dd87f738"},{url:"icons/apple-launch-1170x2532.png",revision:"a7c3e0ea964acf6db7bb034417bee924"},{url:"icons/apple-launch-1242x2208.png",revision:"1bced703592ec41b1e1513f6e29d0cc2"},{url:"icons/apple-launch-1242x2688.png",revision:"96b790cb80287bb6c4afb2f45a22ea4e"},{url:"icons/apple-launch-1284x2778.png",revision:"4563eec2abc69d340e07767ab78d0824"},{url:"icons/apple-launch-1536x2048.png",revision:"efeef15f07afa152787c08739e001332"},{url:"icons/apple-launch-1620x2160.png",revision:"be5937c00a001db90ba0824bedf09f91"},{url:"icons/apple-launch-1668x2224.png",revision:"274ce9cdaf39366b0f43b3263763da7d"},{url:"icons/apple-launch-1668x2388.png",revision:"500f11d5f13dd8ed356ea9cbb4acdc00"},{url:"icons/apple-launch-2048x2732.png",revision:"a576709ef1de67200ad93ed99d63b427"},{url:"icons/apple-launch-750x1334.png",revision:"cf8d039e80af370b6181a4104ac75912"},{url:"icons/apple-launch-828x1792.png",revision:"f29e1fd010ed4ed6ca60dc7fa03f1a59"},{url:"icons/favicon-128x128.png",revision:"51b68ce1861041b9c85cd4c6c2daa996"},{url:"icons/favicon-16x16.png",revision:"334e9d1834f0d60c45ddcc5c5104ba13"},{url:"icons/favicon-32x32.png",revision:"77dbbce5f8a0c90c79c068d2c941ae16"},{url:"icons/favicon-96x96.png",revision:"3e6649da21c164fc3883d9d88d2b905c"},{url:"icons/icon-128x128.png",revision:"51b68ce1861041b9c85cd4c6c2daa996"},{url:"icons/icon-192x192.png",revision:"9f459ff703fef1e58e1fe135c13031c0"},{url:"icons/icon-256x256.png",revision:"c9caaf166ff102805a518f7340ec7723"},{url:"icons/icon-384x384.png",revision:"28aaa462f06e212f140ccf46ca1b9d4a"},{url:"icons/icon-512x512.png",revision:"fee8488dbc7aad04edce23c843ec4bdc"},{url:"icons/ms-icon-144x144.png",revision:"5951d03b8ed341230ff51803aae3d432"},{url:"icons/safari-pinned-tab.svg",revision:"4123dc1b1dc5393eb83a17887314c894"},{url:"index.html",revision:"e45c6ff94e415728fa657f7208506f04"},{url:"load.svg",revision:"4260122ceafe3148f41dcce415059544"},{url:"manifest.json",revision:"38a67158418ef066d6838de4fdae13ff"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
