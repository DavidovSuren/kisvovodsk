if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const n=e=>a(e,i),r={module:{uri:i},exports:d,require:n};s[i]=Promise.all(c.map((e=>r[e]||n(e)))).then((e=>(f(...e),d)))}}define(["./workbox-03115cca"],(function(e){"use strict";e.setCacheNameDetails({prefix:"kislovodsk"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/acropolis.e22c67bd.png",revision:"563e356fff114efbdb4273d20363dfa7"},{url:"assets/artclip.b6e6e696.jpeg",revision:"0dd96df1e9cae7ddbc56022ea7b4ff29"},{url:"assets/bitmap.3a69beaa.png",revision:"53b86c6833280ee62f051a45db8de4b8"},{url:"assets/boutique.f83d9efb.png",revision:"5298b00f5ba8aa96ccdf4c4c41fca21d"},{url:"assets/cafe.fa2107ba.png",revision:"5eb0cdba769bfd3412e668bf7a7b33b5"},{url:"assets/canteen.e287237f.png",revision:"4d798c7aa1db627c4cbef5de9872f9c9"},{url:"assets/car-wash.7f5a6eb1.png",revision:"03d43defd4583b85d77c0ba88be3d894"},{url:"assets/cat.9c8bb014.png",revision:"b2a77f651c7e8e9c47ccdb789fcec95b"},{url:"assets/cexcursionfe.4347bf77.png",revision:"96f96b747ffbb0e89949a07799b454aa"},{url:"assets/child.f287c099.png",revision:"3bd28aaaf501cda05b28038d6483cb41"},{url:"assets/cinema.eed4dbb7.png",revision:"d8a09e8de20df697d454e6e4247ae3a8"},{url:"assets/circ.d2111a26.jpeg",revision:"642c56aa88660dc38faded676af2cf80"},{url:"assets/ErrorNotFound.5bf8a391.js",revision:"a262bd6b0ec206f176ea1435e90f2267"},{url:"assets/fa-brands-400.404c746c.woff2",revision:"cd2b4095e9ce66cde642c3502a4022d9"},{url:"assets/fa-brands-400.e523f49c.ttf",revision:"a78ffbbed2d858c61e068e3b756c9988"},{url:"assets/fa-regular-400.4e96a7e0.ttf",revision:"b1a1bebb63656b34a23982706f712f71"},{url:"assets/fa-regular-400.6a274e76.woff2",revision:"e8a1ba418ee6d897d1339ef22e6d8e60"},{url:"assets/fa-solid-900.03f2986c.ttf",revision:"738201559a50502aacabdbdb02720910"},{url:"assets/fa-solid-900.d76fb4e8.woff2",revision:"55b416a8df21f9f987aa352f10d1343b"},{url:"assets/fa-v4compatibility.0db31bef.woff2",revision:"786e6b3373bab47e928c81c26eeccb08"},{url:"assets/fa-v4compatibility.86a687cf.ttf",revision:"0d6f5f1852affca569715821fe4aa29b"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/fastfood.d484c1a7.png",revision:"3c2bf14d78e2e2291cbb2833f41eb413"},{url:"assets/fitness.c3b90587.png",revision:"09349ba9ccde114844d97d98e2fbd217"},{url:"assets/flat.3152b289.png",revision:"857ce6c53bcffa59bc2b42e8d2b01dbd"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.1659ac2b.woff",revision:"e7ee6642f9771137444ed489b12f99cc"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.115bdc62.woff2",revision:"4525df77e6f46e1ed85e150ea763d185"},{url:"assets/format.801e7424.js",revision:"8a3f25e092c0ebe3324d5048818ad1f4"},{url:"assets/fur.0c8f859d.png",revision:"114adf61c488db1eb1151fdf54eae78c"},{url:"assets/gift.6a2c77c0.png",revision:"ff183bbf4e5368c6a6450fe9222cab71"},{url:"assets/Gostinitsa.72e08783.png",revision:"81fcaa3f0f79742e4015c86938c35f67"},{url:"assets/hair-cut.39c4f034.png",revision:"0b52940cf3c6e66fc6a32207f20fed7e"},{url:"assets/harp.259e70de.png",revision:"1c79d4c609ec71324128a62a81bc1f1f"},{url:"assets/HelpPage.1097c770.js",revision:"6267f7d8d07e857a8fa2a1d5884e02fc"},{url:"assets/HelpPage.80f37bf1.css",revision:"83035941b3d7d3d96fed3cada84a2848"},{url:"assets/hotel.48311715.png",revision:"f4cc106111a438eb27c10ef8430313d8"},{url:"assets/i18n.27e8fe7c.js",revision:"9d0e528490b047e74fec24c9d589b3d2"},{url:"assets/index.38280cc9.css",revision:"316c8ba4f6a3b2fd092520b8ff4f71d4"},{url:"assets/index.ae0cf7ed.js",revision:"f3bb05cae52e986b977ed827d3575d42"},{url:"assets/IndexPage.313cb07c.css",revision:"153c7af6955f7db3048bd7c1b1c03339"},{url:"assets/IndexPage.b02d7ff2.js",revision:"17f466b257472a0eaff91f5efcef4a03"},{url:"assets/InfoPage.0b9f7702.css",revision:"f4f59c5fe7e2054054c5aa827d3def2d"},{url:"assets/InfoPage.44efba47.js",revision:"dd906f0393bd744b3397b3f0c09dcef5"},{url:"assets/intro.276f3199.mp4",revision:"ebe59f6c1b9987f4f6d88f3f8bd0409e"},{url:"assets/kick.1cba1701.png",revision:"5b7a89a3e8a6d219a21f47d2e9ff14ff"},{url:"assets/kislovodsk.15683c6e.jpg",revision:"43b23b57af7caac7be53efb06465ca65"},{url:"assets/laptop.256df84e.png",revision:"f4b40ac045ba489effcf7a829a03c882"},{url:"assets/MainLayout.77172311.js",revision:"be0bbcb9b2946600ce2746ef66d3248d"},{url:"assets/motel.8271edca.png",revision:"b2ef7477e76e3dfef8e438eaaa887eca"},{url:"assets/painting.b2261059.png",revision:"7831a926126aca52d8042d9b52d60cd0"},{url:"assets/parking.454ee43a.png",revision:"8954f1d9228c8433edfb392f848cf0de"},{url:"assets/ParkingPage.884d16d4.js",revision:"f321bd227759b56a070411315a2f189f"},{url:"assets/PostPage.771b0314.css",revision:"1a0f1b12d72dce2dd844e92272f8bada"},{url:"assets/PostPage.b5df9292.js",revision:"7857d534a3a5d66ca0f831ffbc78d750"},{url:"assets/QCard.b325a83a.js",revision:"050f1b8eada5b9aa472ff18326228f22"},{url:"assets/QCarousel.963fc6f1.js",revision:"d1ac98a818818c86cca460fbf3bf9451"},{url:"assets/QImg.ed5cb5fa.js",revision:"ead809b52f0178de2a22d66b313a43f8"},{url:"assets/QItem.07f40111.js",revision:"4f08849316f92d8df0fbab9fbd02f48a"},{url:"assets/QSeparator.9a602738.js",revision:"d7894f19dde7ff25f9b6cbff961e37a8"},{url:"assets/repair.61afdd05.png",revision:"aee12cfe4588b2d3ea59cbfca9e582c2"},{url:"assets/RepairPage.e900b705.js",revision:"85e2f6c095603a323f4a291fbcd4746b"},{url:"assets/restraunt.e63d8c26.png",revision:"31139b8176dde4d0f8b7b23072fc9878"},{url:"assets/sanatoriums.8f4559d5.png",revision:"78fa5c7d5a4913e4b98bb41b96a204d4"},{url:"assets/scroll.12b5388f.js",revision:"935b9de7e3380cc395bfe80536809cfc"},{url:"assets/selection.4598e480.js",revision:"483278105bef957cb58c797c11c5d8f2"},{url:"assets/SPA.6433707f.png",revision:"14fc3f0b833c27ddd1fe8a41709ab171"},{url:"assets/sport.2311a863.png",revision:"e60d7ecc2cf071a1f68afce770d700c1"},{url:"assets/UniPage.5af5867b.css",revision:"698a6f31fab70e1f092f4215364e1a7f"},{url:"assets/UniPage.6ba1a165.js",revision:"57ab4f06f2ba2c7a9d93b211a9934b89"},{url:"assets/use-dark.4db0f58c.js",revision:"63c269638cc5672df2a6ecfa8e76291b"},{url:"assets/use-quasar.b59e588a.js",revision:"40d61fc04a487c89afca80e6802fb7ee"},{url:"assets/van.642ff995.png",revision:"2b3a3f849f61442bca34f8d12778f466"},{url:"assets/VanPage.8153e7ef.css",revision:"7a5d606483522a8271d75945554ab280"},{url:"assets/VanPage.f2dae2cc.js",revision:"58a15eb497a1c16c568c184ec68407fb"},{url:"assets/video.68409141.png",revision:"8381bcceddb8efb1b9adc7d8f0d24733"},{url:"assets/VideoPage.7e5809eb.js",revision:"e5979a6ad8d6aeb3b60ca07d930265ed"},{url:"favicon.ico",revision:"4b65c47d2441240f9b5c8950edd9c495"},{url:"icons/apple-icon-120x120.png",revision:"161d08152803337e96e569fe64b036cb"},{url:"icons/apple-icon-152x152.png",revision:"3787c4d0d695c6012f52cc564f227fb2"},{url:"icons/apple-icon-167x167.png",revision:"38b343653438505a727a0cf996072b0e"},{url:"icons/apple-icon-180x180.png",revision:"4856f7e877361b0ad721ecacc30dc294"},{url:"icons/apple-launch-1125x2436.png",revision:"58a0105848b8f8fbdd2a4b79dd87f738"},{url:"icons/apple-launch-1170x2532.png",revision:"a7c3e0ea964acf6db7bb034417bee924"},{url:"icons/apple-launch-1242x2208.png",revision:"1bced703592ec41b1e1513f6e29d0cc2"},{url:"icons/apple-launch-1242x2688.png",revision:"96b790cb80287bb6c4afb2f45a22ea4e"},{url:"icons/apple-launch-1284x2778.png",revision:"4563eec2abc69d340e07767ab78d0824"},{url:"icons/apple-launch-1536x2048.png",revision:"efeef15f07afa152787c08739e001332"},{url:"icons/apple-launch-1620x2160.png",revision:"be5937c00a001db90ba0824bedf09f91"},{url:"icons/apple-launch-1668x2224.png",revision:"274ce9cdaf39366b0f43b3263763da7d"},{url:"icons/apple-launch-1668x2388.png",revision:"500f11d5f13dd8ed356ea9cbb4acdc00"},{url:"icons/apple-launch-2048x2732.png",revision:"a576709ef1de67200ad93ed99d63b427"},{url:"icons/apple-launch-750x1334.png",revision:"cf8d039e80af370b6181a4104ac75912"},{url:"icons/apple-launch-828x1792.png",revision:"f29e1fd010ed4ed6ca60dc7fa03f1a59"},{url:"icons/favicon-128x128.png",revision:"51b68ce1861041b9c85cd4c6c2daa996"},{url:"icons/favicon-16x16.png",revision:"334e9d1834f0d60c45ddcc5c5104ba13"},{url:"icons/favicon-32x32.png",revision:"77dbbce5f8a0c90c79c068d2c941ae16"},{url:"icons/favicon-96x96.png",revision:"3e6649da21c164fc3883d9d88d2b905c"},{url:"icons/icon-128x128.png",revision:"51b68ce1861041b9c85cd4c6c2daa996"},{url:"icons/icon-192x192.png",revision:"9f459ff703fef1e58e1fe135c13031c0"},{url:"icons/icon-256x256.png",revision:"c9caaf166ff102805a518f7340ec7723"},{url:"icons/icon-384x384.png",revision:"28aaa462f06e212f140ccf46ca1b9d4a"},{url:"icons/icon-512x512.png",revision:"fee8488dbc7aad04edce23c843ec4bdc"},{url:"icons/ms-icon-144x144.png",revision:"5951d03b8ed341230ff51803aae3d432"},{url:"icons/safari-pinned-tab.svg",revision:"4123dc1b1dc5393eb83a17887314c894"},{url:"index.html",revision:"4cb584f6ae02d99b0bf5b490d2958397"},{url:"manifest.json",revision:"38a67158418ef066d6838de4fdae13ff"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
