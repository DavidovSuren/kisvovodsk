if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const d=e=>a(e,f),r={module:{uri:f},exports:n,require:d};s[f]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(i(...e),n)))}}define(["./workbox-03115cca"],(function(e){"use strict";e.setCacheNameDetails({prefix:"kislovodsk"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/acropolis.e22c67bd.png",revision:"563e356fff114efbdb4273d20363dfa7"},{url:"assets/axios.7a5c7ec8.js",revision:"f969c04cc682c07c1f52572174b3748b"},{url:"assets/bitmap.3a69beaa.png",revision:"53b86c6833280ee62f051a45db8de4b8"},{url:"assets/boutique.f83d9efb.png",revision:"5298b00f5ba8aa96ccdf4c4c41fca21d"},{url:"assets/cafe.fa2107ba.png",revision:"5eb0cdba769bfd3412e668bf7a7b33b5"},{url:"assets/canteen.e287237f.png",revision:"4d798c7aa1db627c4cbef5de9872f9c9"},{url:"assets/car-wash.7f5a6eb1.png",revision:"03d43defd4583b85d77c0ba88be3d894"},{url:"assets/cat.9c8bb014.png",revision:"b2a77f651c7e8e9c47ccdb789fcec95b"},{url:"assets/cexcursionfe.4347bf77.png",revision:"96f96b747ffbb0e89949a07799b454aa"},{url:"assets/child.f287c099.png",revision:"3bd28aaaf501cda05b28038d6483cb41"},{url:"assets/ErrorNotFound.706dd3e3.js",revision:"8a8ab5611211da49842d52ea31a983fd"},{url:"assets/events.3eeaebd1.png",revision:"fa182bfd6ea5566104d21133cc4f286f"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/fastfood.d484c1a7.png",revision:"3c2bf14d78e2e2291cbb2833f41eb413"},{url:"assets/fitness.c3b90587.png",revision:"09349ba9ccde114844d97d98e2fbd217"},{url:"assets/flat.3152b289.png",revision:"857ce6c53bcffa59bc2b42e8d2b01dbd"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.66dca61a.woff",revision:"7814880c701adbefed31b0647a92570c"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.e1c9ce90.woff2",revision:"af7b20a08fc8f6fd190ee9ca3d0ee5d7"},{url:"assets/format.801e7424.js",revision:"8a3f25e092c0ebe3324d5048818ad1f4"},{url:"assets/fur.0c8f859d.png",revision:"114adf61c488db1eb1151fdf54eae78c"},{url:"assets/gift.6a2c77c0.png",revision:"ff183bbf4e5368c6a6450fe9222cab71"},{url:"assets/Gostinitsa.72e08783.png",revision:"81fcaa3f0f79742e4015c86938c35f67"},{url:"assets/guides.b39dd1ee.png",revision:"10d34e2866fa05fc710fb9a3a50d2718"},{url:"assets/hair-cut.39c4f034.png",revision:"0b52940cf3c6e66fc6a32207f20fed7e"},{url:"assets/hotel.48311715.png",revision:"f4cc106111a438eb27c10ef8430313d8"},{url:"assets/i18n.a0207f50.js",revision:"01d2cf52a351c77cede222b4e3e7f8a6"},{url:"assets/index.1e34cb5e.css",revision:"dc66074a86a5df8886cc410cc2f3e2b7"},{url:"assets/index.a59205f8.js",revision:"ef5e387a662db613e08b3bad910cccaf"},{url:"assets/IndexPage.188baf47.js",revision:"79c87d9b1cfcfb08770847c0c129233d"},{url:"assets/IndexPage.c001e0c0.css",revision:"c2be546574a13d30587fde1ce8b3f5d1"},{url:"assets/InfoPage.521fcbbe.js",revision:"392ccb44946c99288478f86bcbbb93a9"},{url:"assets/intro.b970e847.mp4",revision:"63122dfb61dc40ba24f72a436b56efae"},{url:"assets/kick.1cba1701.png",revision:"5b7a89a3e8a6d219a21f47d2e9ff14ff"},{url:"assets/laptop.256df84e.png",revision:"f4b40ac045ba489effcf7a829a03c882"},{url:"assets/MainLayout.919ad4dd.js",revision:"8ab8676cf2fb48ff8342bee8235736b8"},{url:"assets/MainLayout.d4a7ff37.css",revision:"4fa64179a0b97dd3feb2dbd22cdca0df"},{url:"assets/motel.8271edca.png",revision:"b2ef7477e76e3dfef8e438eaaa887eca"},{url:"assets/parking.454ee43a.png",revision:"8954f1d9228c8433edfb392f848cf0de"},{url:"assets/PostPage.08ac4f8a.js",revision:"d947df45052bcaca062a67d35d62f815"},{url:"assets/PostPage.771b0314.css",revision:"1a0f1b12d72dce2dd844e92272f8bada"},{url:"assets/QImg.837826aa.js",revision:"c9a726b14a697a716704b0a51576c5b4"},{url:"assets/QPage.3676064b.js",revision:"03a4c0f4496f72f55fc93d3125c54094"},{url:"assets/QSeparator.ed571622.js",revision:"0a4fb0058c3488276ae4eb3802267a31"},{url:"assets/repair.61afdd05.png",revision:"aee12cfe4588b2d3ea59cbfca9e582c2"},{url:"assets/restraunt.e63d8c26.png",revision:"31139b8176dde4d0f8b7b23072fc9878"},{url:"assets/sanatoriums.8f4559d5.png",revision:"78fa5c7d5a4913e4b98bb41b96a204d4"},{url:"assets/selection.f7b31737.js",revision:"a95557c23c4815915744d5f8d0db860e"},{url:"assets/SPA.6433707f.png",revision:"14fc3f0b833c27ddd1fe8a41709ab171"},{url:"assets/sport.2311a863.png",revision:"e60d7ecc2cf071a1f68afce770d700c1"},{url:"assets/UniPage.b2b7516c.js",revision:"99ed827bc75cd49619f23c810f5237b4"},{url:"assets/UniPage.dadcda62.css",revision:"8fc928c9ffd2074420c074b76b430d00"},{url:"assets/use-dark.079bf027.js",revision:"283cc9eb56536500d36a18409d5225a5"},{url:"assets/van.642ff995.png",revision:"2b3a3f849f61442bca34f8d12778f466"},{url:"favicon.ico",revision:"4b65c47d2441240f9b5c8950edd9c495"},{url:"icons/apple-icon-120x120.png",revision:"161d08152803337e96e569fe64b036cb"},{url:"icons/apple-icon-152x152.png",revision:"3787c4d0d695c6012f52cc564f227fb2"},{url:"icons/apple-icon-167x167.png",revision:"38b343653438505a727a0cf996072b0e"},{url:"icons/apple-icon-180x180.png",revision:"4856f7e877361b0ad721ecacc30dc294"},{url:"icons/apple-launch-1125x2436.png",revision:"58a0105848b8f8fbdd2a4b79dd87f738"},{url:"icons/apple-launch-1170x2532.png",revision:"a7c3e0ea964acf6db7bb034417bee924"},{url:"icons/apple-launch-1242x2208.png",revision:"1bced703592ec41b1e1513f6e29d0cc2"},{url:"icons/apple-launch-1242x2688.png",revision:"96b790cb80287bb6c4afb2f45a22ea4e"},{url:"icons/apple-launch-1284x2778.png",revision:"4563eec2abc69d340e07767ab78d0824"},{url:"icons/apple-launch-1536x2048.png",revision:"efeef15f07afa152787c08739e001332"},{url:"icons/apple-launch-1620x2160.png",revision:"be5937c00a001db90ba0824bedf09f91"},{url:"icons/apple-launch-1668x2224.png",revision:"274ce9cdaf39366b0f43b3263763da7d"},{url:"icons/apple-launch-1668x2388.png",revision:"500f11d5f13dd8ed356ea9cbb4acdc00"},{url:"icons/apple-launch-2048x2732.png",revision:"a576709ef1de67200ad93ed99d63b427"},{url:"icons/apple-launch-750x1334.png",revision:"cf8d039e80af370b6181a4104ac75912"},{url:"icons/apple-launch-828x1792.png",revision:"f29e1fd010ed4ed6ca60dc7fa03f1a59"},{url:"icons/favicon-128x128.png",revision:"51b68ce1861041b9c85cd4c6c2daa996"},{url:"icons/favicon-16x16.png",revision:"334e9d1834f0d60c45ddcc5c5104ba13"},{url:"icons/favicon-32x32.png",revision:"77dbbce5f8a0c90c79c068d2c941ae16"},{url:"icons/favicon-96x96.png",revision:"3e6649da21c164fc3883d9d88d2b905c"},{url:"icons/icon-128x128.png",revision:"51b68ce1861041b9c85cd4c6c2daa996"},{url:"icons/icon-192x192.png",revision:"9f459ff703fef1e58e1fe135c13031c0"},{url:"icons/icon-256x256.png",revision:"c9caaf166ff102805a518f7340ec7723"},{url:"icons/icon-384x384.png",revision:"28aaa462f06e212f140ccf46ca1b9d4a"},{url:"icons/icon-512x512.png",revision:"fee8488dbc7aad04edce23c843ec4bdc"},{url:"icons/ms-icon-144x144.png",revision:"5951d03b8ed341230ff51803aae3d432"},{url:"icons/safari-pinned-tab.svg",revision:"4123dc1b1dc5393eb83a17887314c894"},{url:"index.html",revision:"44c96b04bcc702a00f9e8f13dcb330e4"},{url:"manifest.json",revision:"38a67158418ef066d6838de4fdae13ff"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
