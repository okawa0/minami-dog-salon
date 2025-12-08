<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Document</title>
  <meta name="description" content="説明文">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/header.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/top-page.css">

</head>

<body>
  <header class="site-header">
    <div class="header__container">
      <div class="header__logo">
        <a class="header__logo-link" href="/">
          <img class="header__logo-img" src="<?php echo get_template_directory_uri(); ?>/img/logo-minami-dog-salon.png" alt="ロゴ">
          <span class="header__logo-title">みなみドッグサロン</span>
        </a>
      </div>

      <button class="header__menu-btn" type="button" aria-expanded="false" aria-controls="global-nav" aria-label="メニューを開く">
        <span class="header__menu-line"></span>
        <span class="header__menu-line"></span>
        <span class="header__menu-line"></span>
      </button>

      <nav class="header__nav" id="global-nav" aria-label="グローバルナビゲーション">
        <ul class="nav-list">
          <li class="nav-list__item"><a href="#">ホーム</a></li>
          <li class="nav-list__item"><a href="#">オンライン予約</a></li>
          <li class="nav-list__item">
            <ul class="nav-list__item-sns">
              <li class="nav-list__item-sns-icon"><a class="nav-list__item-sns-icon-link" href="#"><img class="nav-list__item-sns-icon-img" src="<?php echo get_template_directory_uri(); ?>/img/facebook-logo.png" alt="facebookロゴ"></a></li>
              <li class="nav-list__item-sns-icon"><a class="nav-list__item-sns-icon-link" href="#"><img class="nav-list__item-sns-icon-img" src="<?php echo get_template_directory_uri(); ?>/img/instagram-logo.png" alt="instagramロゴ"></a></li>
              <li class="nav-list__item-sns-icon"><a class="nav-list__item-sns-icon-link" href="#"><img class="nav-list__item-sns-icon-img" src="<?php echo get_template_directory_uri(); ?>/img/yelp-logo.png" alt="yelpロゴ"></a></li>
            </ul>
          </li>
          <li class="nav-list__item"><a class="nav-list__item-login" href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/user-icon.png" alt="user-icon">ログイン</a></li>
          <li class="nav-list__item"><a class="nav-list__item-cta" href="#">今すぐ予約</a></li>
        </ul>
      </nav>
    </div>
  </header>