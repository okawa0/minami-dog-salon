// フェードアップ・フェードダウン
// 汎用フェード処理
function setupFade(className) {
  const targets = document.querySelectorAll(`.${className}`);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // 1回だけ発火
      }
    });
  }, {
    threshold: 0.1
  });
  targets.forEach(target => observer.observe(target));
}
setupFade('fade-up');
setupFade('fade-down');

// ギャラリー画像のポップアップ表示
// 画像クリックでポップアップ表示
const triggers = document.querySelectorAll('.popup-trigger');
const popupOverlay = document.getElementById('popupOverlay');
const popupImage = document.getElementById('popupImage');

triggers.forEach(img => {
  img.addEventListener('click', () => {
    popupImage.src = img.src;
    popupOverlay.classList.add('is-active');
  });
});

// 背景クリックで閉じる
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('is-active');
  }
});

// ESCキーでも閉じる
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popupOverlay.classList.remove('is-active');
  }
});
