// ==UserScript==
// @name         Cookie Master
// @namespace    http://tampermonkey.net/
// @description  try to take over the world!
// @author       me
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://orteil.dashnet.org/cookieclicker/favicon.ico
// @grant        none
// ==/UserScript==
var hogehoge = 0;
var hogeInterval;
var hoge = false;

// ゴールデンクッキー自動
setInterval(() => {
  Game.shimmers.forEach(function (shimmer) {
    if (shimmer.type == 'golden' && shimmer.wrath == 0) {
      shimmer.pop();
      hogehoge++;
      console.log('[info] あなたがいない間にゴールデンクッキー' + hogehoge + '回クリック');
    }
  });
}, 0);

// トナカイ自動
setInterval(() => {
  Game.shimmers.forEach(function (shimmer) {
    if (shimmer.type == 'reindeer') {
      shimmer.pop();
    }
  });
}, 0);

// クリックon
function on() {
  hogeInterval = setInterval(function(){
    Game.ClickCookie();
  }, 0); 
  hoge = true;
}

// クリック停止
function off() {
  clearInterval(hogeInterval);
  hoge = false;
}

// key bind
window.addEventListener('keydown', (event) => {
  if (event.key === 'c' && hoge == true) {
    off();
  } else if (event.key === 'c') {
    on();
  }
})
