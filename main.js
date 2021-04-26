    // 動きのきっかけの起点となるアニメーションの名前を定義
    function BgFadeAnime(){

      // 背景色が伸びて出現（左から右）
      $('.white_bgLRextendTrigger, .black_bgLRextendTrigger').each(function(){
      var elemPos = $('.white_bgLRextendTrigger, .black_bgLRextendTrigger').offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $('.white_bgLRextendTrigger').addClass('white_bgLRextend');
        $('.black_bgLRextendTrigger').addClass('black_bgLRextend');
      }else{
        $('.white_bgLRextendTrigger').removeClass('white_bgLRextend');
        $('.black_bgLRextendTrigger').removeClass('black_bgLRextend');
      }
    });

     // 文字列を囲う子要素
    $('.white_bgappearTrigger,.black_bgappearTrigger').each(function(){
      var elemPos = $('.white_bgappearTrigger,.black_bgappearTrigger').offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $('.white_bgappearTrigger').addClass('white_bgappear');
        $('.black_bgappearTrigger').addClass('black_bgappear');
      }else{
        $('.white_bgappearTrigger').removeClass('white_bgappear');
        $('.black_bgappearTrigger').removeClass('black_bgappear');
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
    $('.mv,.logo,#search-wrap').addClass('zoomOut');
    BgFadeAnime();

  });
});



 // ハンバーガーメニュー
document.getElementById('menu_btn_inner').onclick = function(){
var element = document.getElementById("h_nav");
element.classList.toggle('active');
var element = document.getElementById("menu_btn_inner");
element.classList.toggle('active');
};

 // ドロップダウンメニュー
 function mediaQueriesWin(){
    $(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
    $(".has-child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
      var parentElem =  $(this).parent();// aタグから見た親要素の<li>を取得し
      $(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
      $(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
      return false;//リンクの無効化
    });
 }

 // ページが読み込まれたらすぐに動かしたい場合の記述
 $(window).on('load',function(){
  mediaQueriesWin();
 });

 // 画面をスクロールをしたら動かしたい場合の記述
 $(window).scroll(function (){
  BgFadeAnime();
});
