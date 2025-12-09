const targets = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // ←1回だけ発火にする
    }
  });
}, {
  threshold: 0.1
});

targets.forEach(target => observer.observe(target));
