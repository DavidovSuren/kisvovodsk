if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const n=e=>a(e,i),r={module:{uri:i},exports:d,require:n};s[i]=Promise.all(c.map((e=>r[e]||n(e)))).then((e=>(f(...e),d)))}}define(["./workbox-03115cca"],(function(e){"use strict";e.setCacheNameDetails({prefix:"kislovodsk"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/acropolis.e22c67bd.png",revision:"563e356fff114efbdb4273d20363dfa7"},{url:"assets/artclip.b6e6e696.jpeg",revision:"0dd96df1e9cae7ddbc56022ea7b4ff29"},{url:"assets/bitmap.3a69beaa.png",revision:"53b86c6833280ee62f051a45db8de4b8"},{url:"assets/boutique.f83d9efb.png",revision:"5298b00f5ba8aa96ccdf4c4c41fca21d"},{url:"assets/Bud.14bddfad.png",revision:"21ee93bafbfe754a667c06cb387ccc75"},{url:"assets/cafe.fa2107ba.png",revision:"5eb0cdba769bfd3412e668bf7a7b33b5"},{url:"assets/canteen.e287237f.png",revision:"4d798c7aa1db627c4cbef5de9872f9c9"},{url:"assets/car-wash.7f5a6eb1.png",revision:"03d43defd4583b85d77c0ba88be3d894"},{url:"assets/cat.9c8bb014.png",revision:"b2a77f651c7e8e9c47ccdb789fcec95b"},{url:"assets/cexcursionfe.4347bf77.png",revision:"96f96b747ffbb0e89949a07799b454aa"},{url:"assets/child.f287c099.png",revision:"3bd28aaaf501cda05b28038d6483cb41"},{url:"assets/ContactPage.7c0950ff.js",revision:"54ecff13f134ba6e94a1f06c17749aa4"},{url:"assets/ContactPage.8caed555.css",revision:"9600c9185e1e67e460e674cb8d4fb210"},{url:"assets/ErrorNotFound.2518d3f7.js",revision:"efd9f7cac0033d44324afa03daa75277"},{url:"assets/fa-brands-400.404c746c.woff2",revision:"cd2b4095e9ce66cde642c3502a4022d9"},{url:"assets/fa-brands-400.e523f49c.ttf",revision:"a78ffbbed2d858c61e068e3b756c9988"},{url:"assets/fa-regular-400.4e96a7e0.ttf",revision:"b1a1bebb63656b34a23982706f712f71"},{url:"assets/fa-regular-400.6a274e76.woff2",revision:"e8a1ba418ee6d897d1339ef22e6d8e60"},{url:"assets/fa-solid-900.03f2986c.ttf",revision:"738201559a50502aacabdbdb02720910"},{url:"assets/fa-solid-900.d76fb4e8.woff2",revision:"55b416a8df21f9f987aa352f10d1343b"},{url:"assets/fa-v4compatibility.0db31bef.woff2",revision:"786e6b3373bab47e928c81c26eeccb08"},{url:"assets/fa-v4compatibility.86a687cf.ttf",revision:"0d6f5f1852affca569715821fe4aa29b"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/fastfood.d484c1a7.png",revision:"3c2bf14d78e2e2291cbb2833f41eb413"},{url:"assets/fitness.c3b90587.png",revision:"09349ba9ccde114844d97d98e2fbd217"},{url:"assets/flat.3152b289.png",revision:"857ce6c53bcffa59bc2b42e8d2b01dbd"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.1659ac2b.woff",revision:"e7ee6642f9771137444ed489b12f99cc"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.115bdc62.woff2",revision:"4525df77e6f46e1ed85e150ea763d185"},{url:"assets/format.801e7424.js",revision:"8a3f25e092c0ebe3324d5048818ad1f4"},{url:"assets/fur.0c8f859d.png",revision:"114adf61c488db1eb1151fdf54eae78c"},{url:"assets/gift.6a2c77c0.png",revision:"ff183bbf4e5368c6a6450fe9222cab71"},{url:"assets/Gostinitsa.72e08783.png",revision:"81fcaa3f0f79742e4015c86938c35f67"},{url:"assets/hair-cut.39c4f034.png",revision:"0b52940cf3c6e66fc6a32207f20fed7e"},{url:"assets/HelpPage.80f37bf1.css",revision:"83035941b3d7d3d96fed3cada84a2848"},{url:"assets/HelpPage.fd95e8a3.js",revision:"91cf862a0ae35809e218bce391661c0a"},{url:"assets/hotel.48311715.png",revision:"f4cc106111a438eb27c10ef8430313d8"},{url:"assets/i18n.21ba1be6.js",revision:"59674c02fdb33d3d4c213dc901ec3c02"},{url:"assets/index.1730735b.js",revision:"552f431d1dfcf357b9df6acd272e1140"},{url:"assets/index.4e9d06f8.css",revision:"144f591715aa231e7e30109b0aed65fe"},{url:"assets/IndexPage.62c53633.css",revision:"cf1dac2eda42885b5985f15c6e096a68"},{url:"assets/IndexPage.7c26aa0a.js",revision:"5f5939ab8627ab81f47f48d43d264422"},{url:"assets/InfoPage.0b9f7702.css",revision:"f4f59c5fe7e2054054c5aa827d3def2d"},{url:"assets/InfoPage.921aaef1.js",revision:"d1cb06dc4dc9508d0124e66b8dc2bed0"},{url:"assets/intro.276f3199.mp4",revision:"ebe59f6c1b9987f4f6d88f3f8bd0409e"},{url:"assets/kick.1cba1701.png",revision:"5b7a89a3e8a6d219a21f47d2e9ff14ff"},{url:"assets/laptop.256df84e.png",revision:"f4b40ac045ba489effcf7a829a03c882"},{url:"assets/MainLayout.7a8deaa7.js",revision:"cfdc67addd0133376de8027a40859c71"},{url:"assets/MainLayout.d4a7ff37.css",revision:"4fa64179a0b97dd3feb2dbd22cdca0df"},{url:"assets/motel.8271edca.png",revision:"b2ef7477e76e3dfef8e438eaaa887eca"},{url:"assets/Nast.084557c0.png",revision:"f345a1993c159d4f27592008a017baaa"},{url:"assets/parking.454ee43a.png",revision:"8954f1d9228c8433edfb392f848cf0de"},{url:"assets/ParkingPage.68017c73.js",revision:"c5742b281fe98753988eda631b3de834"},{url:"assets/PostPage.771b0314.css",revision:"1a0f1b12d72dce2dd844e92272f8bada"},{url:"assets/PostPage.8d24a688.js",revision:"e76c960c4f70c2dad42bd267c7c8dd88"},{url:"assets/Prosh.7bce7581.png",revision:"63bc4c54b9a54758d2d95fdd8d13647c"},{url:"assets/QCard.c1928a34.js",revision:"c693a5ea85fd175d936f9215b1521840"},{url:"assets/QCarousel.1cfe1ccb.js",revision:"ecd4cfed5699dd9617e743cf163e6735"},{url:"assets/QImg.1687e227.js",revision:"f89a6240856bd51222cc1c9b0778c54e"},{url:"assets/QItem.04885115.js",revision:"f10a2f14602c3e5f38881f0fb665b0e0"},{url:"assets/QSeparator.278abae5.js",revision:"11ed2ad3a0942763b9b3999f301b74bf"},{url:"assets/repair.61afdd05.png",revision:"aee12cfe4588b2d3ea59cbfca9e582c2"},{url:"assets/restraunt.e63d8c26.png",revision:"31139b8176dde4d0f8b7b23072fc9878"},{url:"assets/sanatoriums.8f4559d5.png",revision:"78fa5c7d5a4913e4b98bb41b96a204d4"},{url:"assets/selection.730d2fbc.js",revision:"d9c103d4e4e6d1feeeea78be542d37eb"},{url:"assets/SPA.6433707f.png",revision:"14fc3f0b833c27ddd1fe8a41709ab171"},{url:"assets/sport.2311a863.png",revision:"e60d7ecc2cf071a1f68afce770d700c1"},{url:"assets/UniPage.758a51b5.js",revision:"56fb02a12c25ef06435118d078ebbecf"},{url:"assets/UniPage.a07fa92e.css",revision:"a6358e0d85426b34b7d1550aa17dc7ec"},{url:"assets/use-dark.7267b2e7.js",revision:"5c0cf26a1dc0228c7815b26c760b4353"},{url:"assets/use-quasar.0e206772.js",revision:"4c29308135f28ea107d3bcf3843e5858"},{url:"assets/van.642ff995.png",revision:"2b3a3f849f61442bca34f8d12778f466"},{url:"assets/VanPage.8153e7ef.css",revision:"7a5d606483522a8271d75945554ab280"},{url:"assets/VanPage.ff983402.js",revision:"85f1d5ead1146bf80f639595afa65cde"},{url:"assets/video.68409141.png",revision:"8381bcceddb8efb1b9adc7d8f0d24733"},{url:"assets/VideoPage.990f2674.js",revision:"28185a9bf207b7742b290697cadf77bf"},{url:"favicon.ico",revision:"4b65c47d2441240f9b5c8950edd9c495"},{url:"icons/apple-icon-120x120.png",revision:"161d08152803337e96e569fe64b036cb"},{url:"icons/apple-icon-152x152.png",revision:"3787c4d0d695c6012f52cc564f227fb2"},{url:"icons/apple-icon-167x167.png",revision:"38b343653438505a727a0cf996072b0e"},{url:"icons/apple-icon-180x180.png",revision:"4856f7e877361b0ad721ecacc30dc294"},{url:"icons/apple-launch-1125x2436.png",revision:"58a0105848b8f8fbdd2a4b79dd87f738"},{url:"icons/apple-launch-1170x2532.png",revision:"a7c3e0ea964acf6db7bb034417bee924"},{url:"icons/apple-launch-1242x2208.png",revision:"1bced703592ec41b1e1513f6e29d0cc2"},{url:"icons/apple-launch-1242x2688.png",revision:"96b790cb80287bb6c4afb2f45a22ea4e"},{url:"icons/apple-launch-1284x2778.png",revision:"4563eec2abc69d340e07767ab78d0824"},{url:"icons/apple-launch-1536x2048.png",revision:"efeef15f07afa152787c08739e001332"},{url:"icons/apple-launch-1620x2160.png",revision:"be5937c00a001db90ba0824bedf09f91"},{url:"icons/apple-launch-1668x2224.png",revision:"274ce9cdaf39366b0f43b3263763da7d"},{url:"icons/apple-launch-1668x2388.png",revision:"500f11d5f13dd8ed356ea9cbb4acdc00"},{url:"icons/apple-launch-2048x2732.png",revision:"a576709ef1de67200ad93ed99d63b427"},{url:"icons/apple-launch-750x1334.png",revision:"cf8d039e80af370b6181a4104ac75912"},{url:"icons/apple-launch-828x1792.png",revision:"f29e1fd010ed4ed6ca60dc7fa03f1a59"},{url:"icons/favicon-128x128.png",revision:"51b68ce1861041b9c85cd4c6c2daa996"},{url:"icons/favicon-16x16.png",revision:"334e9d1834f0d60c45ddcc5c5104ba13"},{url:"icons/favicon-32x32.png",revision:"77dbbce5f8a0c90c79c068d2c941ae16"},{url:"icons/favicon-96x96.png",revision:"3e6649da21c164fc3883d9d88d2b905c"},{url:"icons/icon-128x128.png",revision:"51b68ce1861041b9c85cd4c6c2daa996"},{url:"icons/icon-192x192.png",revision:"9f459ff703fef1e58e1fe135c13031c0"},{url:"icons/icon-256x256.png",revision:"c9caaf166ff102805a518f7340ec7723"},{url:"icons/icon-384x384.png",revision:"28aaa462f06e212f140ccf46ca1b9d4a"},{url:"icons/icon-512x512.png",revision:"fee8488dbc7aad04edce23c843ec4bdc"},{url:"icons/ms-icon-144x144.png",revision:"5951d03b8ed341230ff51803aae3d432"},{url:"icons/safari-pinned-tab.svg",revision:"4123dc1b1dc5393eb83a17887314c894"},{url:"index.html",revision:"f11770afb0e76fe5c69a853d5360f93f"},{url:"manifest.json",revision:"38a67158418ef066d6838de4fdae13ff"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
