if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const o=e=>s(e,c),t={module:{uri:c},exports:a,require:o};i[c]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-b833909e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CYb9gcmT.js",revision:null},{url:"assets/index-D1jPMHd-.css",revision:null},{url:"index.html",revision:"9a4f20027067443aaf848d7f31dafa18"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"dbfcb8bb55207ef14e93c29005f9b2e1"},{url:"logo.svg",revision:"20c142ec5977a1168f76e419864b155f"},{url:"maskable-icon-512x512.png",revision:"acf06ff96683792beee53e53817d01bc"},{url:"pwa-192x192.png",revision:"de4eafb9e3e8248c5fc076c6f4bafa25"},{url:"pwa-512x512.png",revision:"dadad10ae477a38a2dd7e21d3f9949c2"},{url:"pwa-64x64.png",revision:"bf357accc088b32283622aec9b0a120b"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"cache-static-resources/images/image-01.png",revision:"c8ac726b296d462b2c156aa9c22c0622"},{url:"manifest.webmanifest",revision:"144f18e35b70b9f0b45cc789503296b4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https?:\/\/.*\.(jpg|jpeg|png|gif|svg)$/i,new e.CacheFirst({cacheName:"external-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
