// ハンバーガーメニュー
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menu = document.querySelector('.header__nav'); 
const overlay = document.getElementById('overlay');

// --- SP かどうかを判定 ---
function isMobile() {
  return window.matchMedia('(max-width: 1024px)').matches;
}

function toggleMenu() {
  // SP のときだけメニューを開閉 & overlay を操作
  if (isMobile()) {
    hamburgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  }
}

// SP のみハンバーガーボタン動作
hamburgerBtn.addEventListener('click', toggleMenu);

// SP のみ overlay クリックで閉じる
overlay.addEventListener('click', toggleMenu);

// SP のみ nav 項目クリックで閉じる
document.querySelectorAll('.nav-list__item').forEach(item => {
  item.addEventListener('click', () => {
    if (isMobile()) toggleMenu();
  });
});