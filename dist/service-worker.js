if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const s=e=>c(e,n),f={module:{uri:n},exports:r,require:s};i[n]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(a(...e),r)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.cbfc4d72.png",revision:"032bc7d807514f1eb6efb000f9fdff26"},{url:"camera-scanner.42ef82b0.png",revision:"6379ba2fd5e1e6b16874979a282077b8"},{url:"es.456c6bac.js",revision:"412266f3a906b5ad6388322e1a64adfa"},{url:"es.456c6bac.js.map",revision:"54f4bc09bea2212d7e93f7cc40c15bca"},{url:"es.49586eb0.js",revision:"47a4d887aea54f84a6c44e40c17eb3ad"},{url:"es.49586eb0.js.map",revision:"e25d8331b8fc3345236813c3caaabc36"},{url:"favicon.a05bdb0a.ico",revision:"ece89efb9e6bf43b4a1a4bddc3e6c0ee"},{url:"icon-large.cd373832.png",revision:"52b2012c4056f0da66ea3ed518dd8e10"},{url:"icon-medium.ede1e868.png",revision:"03ee967b5d869e1ae1e8e63ed13edbf2"},{url:"icon-small.81a93e10.png",revision:"70955d3c62fbbfeec3ce088f908d6f57"},{url:"image-scanner.82276613.png",revision:"c878ced18794653941259faa24e9d41c"},{url:"index.98a7b582.js",revision:"3fa2ad8d96c4c904414f858a549cdb14"},{url:"index.98a7b582.js.map",revision:"075a517ce0210c3eb84f9da7e2f21645"},{url:"index.9d2a37ce.css",revision:"745a9ac248610b66f7b939208a27b024"},{url:"index.9d2a37ce.css.map",revision:"0fe2afb31b630d2e84e99ef97419f41a"},{url:"index.bb1ce697.js",revision:"82f689cbc7405307d1eb42c297e81360"},{url:"index.bb1ce697.js.map",revision:"a581e787ac4468ce653d4028ea2d6f76"},{url:"index.bc90d08c.js",revision:"d002817581887217206442b620ce9c44"},{url:"index.bc90d08c.js.map",revision:"1f2dad12e0ac026c30504e06f541e7b4"},{url:"index.e31c897a.js",revision:"6be71908f3a15047961dc5ce057921b6"},{url:"index.e31c897a.js.map",revision:"330d72990881ef56394856043ebc0764"},{url:"index.html",revision:"63fec737dcd2e875486910dd29965ac4"},{url:"index.runtime.8f6efb6c.js",revision:"01b19770bc9b888e003d8ea8cd06c0ca"},{url:"index.runtime.8f6efb6c.js.map",revision:"0d20fbc6d002daef7ff53d582b503ec5"},{url:"index.runtime.e6d292da.js",revision:"68bc6eac4bc0475b3fa3f546f9da8826"},{url:"index.runtime.e6d292da.js.map",revision:"2aa57e45d9f201735c3543fd88c70068"},{url:"manifest.webmanifest",revision:"d7bd1470f20cc3f518b91def065661ae"},{url:"spinner-light.4452ed29.svg",revision:"609c6274c68c19f6badaf5488b6aeef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
