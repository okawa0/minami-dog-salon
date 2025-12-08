const hamburgerBtn = document.getElementById('hamburgerBtn');
const menu = document.querySelector('.header__nav'); 
const overlay = document.getElementById('overlay');

function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

hamburgerBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// メニュー項目クリック時もメニューを閉じる
document.querySelectorAll('.nav-list__item').forEach(item => {
    item.addEventListener('click', toggleMenu);
});