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

triggers.forEach(box => {
  box.addEventListener('click', () => {
    const img = box.querySelector('img'); 
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

const gallery = document.getElementById('galleryImgs');
const btnLeft = document.getElementById('arrowLeft');
const btnRight = document.getElementById('arrowRight');

btnRight.addEventListener('click', () => {
  const imgWidth = gallery.querySelector('.item').offsetWidth;
  gallery.scrollLeft += imgWidth;
});

btnLeft.addEventListener('click', () => {
  const imgWidth = gallery.querySelector('.item').offsetWidth;
  gallery.scrollLeft -= imgWidth;
});

// ヘッダー高さ吸収
const header = document.querySelector('.site-header');
document.documentElement.style.paddingTop =`${header.offsetHeight}px`;


// ポップアップ閉じるボタン
const closeBtn = popupOverlay.querySelector('.modal__close');

closeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('is-active');
});


// ポップアップ内の画像切り替え
const items = document.querySelectorAll('#galleryImgs .item');
const prevBtn = document.querySelector('.arrow--prev');
const nextBtn = document.querySelector('.arrow--next');

let currentIndex = 0;

// 初期表示（ポップアップを開いたタイミングで呼ぶ想定）
popupImage.src = items[currentIndex].src;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  popupImage.src = items[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  popupImage.src = items[currentIndex].src;
});

document.querySelectorAll('.popup-trigger').forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    currentIndex = index;
    popupImage.src = items[currentIndex].src;
    popupOverlay.classList.add('is-open');
  });
});
