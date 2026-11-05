// Network-first: always the newest version when online; cached copy when offline.
const CACHE = "lineup-380b6c49";
const CORE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "assets/SplitText.min.js",
  "assets/audio/bg.mp3",
  "assets/audio/crowd.mp3",
  "assets/audio/var.mp3",
  "assets/audio/whistle.mp3",
  "assets/confetti.js",
  "assets/fonts/19f81ebb27.woff2",
  "assets/fonts/33ee390031.woff2",
  "assets/fonts/5e25e550fc.woff2",
  "assets/fonts/5fabe5fde2.woff2",
  "assets/fonts/7846cbf04f.woff2",
  "assets/fonts/8c2db0bfca.woff2",
  "assets/fonts/98b08fde64.woff2",
  "assets/fonts/9d0948fa70.woff2",
  "assets/fonts/a618c41c8d.woff2",
  "assets/fonts/c9750cc0b0.woff2",
  "assets/fonts/d403ead48c.woff2",
  "assets/fonts/ec4a9cb97d.woff2",
  "assets/gsap.min.js",
  "assets/img/0ed1f5e3f7.webp",
  "assets/img/128393a6a8.webp",
  "assets/img/209bc4e22e.png",
  "assets/img/228f427786.webp",
  "assets/img/23745953cb.webp",
  "assets/img/35ff4fa447.webp",
  "assets/img/3d5b02c7e1.webp",
  "assets/img/439b7a51ea.webp",
  "assets/img/44fe53162d.webp",
  "assets/img/48d593a237.webp",
  "assets/img/5085235a27.webp",
  "assets/img/59d772fb10.webp",
  "assets/img/5af8062348.webp",
  "assets/img/5e6b3785be.webp",
  "assets/img/773187648c.webp",
  "assets/img/7aa278d391.webp",
  "assets/img/7fc6ca24a5.webp",
  "assets/img/8437ba2295.webp",
  "assets/img/8b74b87c46.webp",
  "assets/img/9d1ad883d9.webp",
  "assets/img/9d3b01a172.webp",
  "assets/img/a0e43af5dc.webp",
  "assets/img/a8b37d184b.webp",
  "assets/img/b7c0cad812.webp",
  "assets/img/bc4f501677.webp",
  "assets/img/bf609edfbf.webp",
  "assets/img/dee19638a3.webp",
  "assets/img/e5517f1dee.webp",
  "assets/img/f146fcefe5.webp",
  "assets/lottie.min.js",
  "assets/lottie/goal.json",
  "assets/lottie/trophy.json",
  "assets/lottie/whistle.json"
];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))); });
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: "no-cache" })
      .then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return res; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("./")))
  );
});
