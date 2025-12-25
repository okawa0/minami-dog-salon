<?php
/*
Template Name: サービスページ
*/
get_header();
?>

<main>
  <div class="service__hero">
    <img src="<?php echo htmlspecialchars(get_template_directory_uri()); ?>/img/service-bg.webp" alt="ヘアカット用品" class="service__hero-bg">
    <h1 class="service__hero-title">サービス</h1>
  </div>
  <div class="service__menus">
    <div class="tabs">
      <button class="tab is-active" data-tab="tab1">Tab1</button>
      <button class="tab" data-tab="tab2">Tab2</button>
      <button class="tab" data-tab="tab3">Tab3</button>
      <span class="tab-underline"></span>
    </div>
    <div class="tab-contents">
      <div class="tab-content is-active" id="tab1">コンテンツ1</div>
      <div class="tab-content" id="tab2">コンテンツ2</div>
      <div class="tab-content" id="tab3">コンテンツ3</div>
    </div>
  </div>
</main>

<?php get_footer(); ?>