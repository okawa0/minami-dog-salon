<?php
function theme_enqueue_assets()
{

  // CSSの読み込み＋キャッシュ対策
  wp_enqueue_style(
    'theme-style',
    get_stylesheet_uri(),
    [],
    filemtime(get_stylesheet_directory() . '/style.css')
  );

  // JSの読み込み＋キャッシュ対策
  wp_enqueue_script(
    'main-js',
    get_template_directory_uri() . '/js/main.js',
    [],
    filemtime(get_template_directory() . '/js/main.js'),
    true
  );

  wp_enqueue_script(
    'header-js',
    get_template_directory_uri() . '/js/header.js',
    [],
    filemtime(get_template_directory() . '/js/header.js'),
    true
  );
}
add_action('wp_enqueue_scripts', 'theme_enqueue_assets');
