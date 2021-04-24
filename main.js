    // 動きのきっかけの起点となるアニメーションの名前を定義
    function BgFadeAnime(){

      // 背景色が伸びて出現（左から右）
      $('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
      }else{
        $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
      }
    });

     // 文字列を囲う子要素
    $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
      }else{
        $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
      }
    });
};

$(window).on('load', function () {
  $(".op-loading").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $(".spinner").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

      $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

 //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() {
      //この中に動かしたいJSを記載
    $('.mv , .logo').addClass('zoomOut');
    BgFadeAnime();

  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  BgFadeAnime();
});

 // ハンバーガーメニュー
document.getElementById('menu_btn_inner').onclick = function(){
var element = document.getElementById("h_nav");
element.classList.toggle('active');
// var element = document.getElementById("h_search");
// element.classList.toggle('active');
var element = document.getElementById("menu_btn_inner");
element.classList.toggle('active');
};
