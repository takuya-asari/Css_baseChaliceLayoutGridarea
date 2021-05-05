 // ドロップダウンメニュー
function mediaQueriesWin(){
  $(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
  $(".has-child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
    var parentElem =  $(this).parent();// aタグから見た親要素の<li>を取得し
    $(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
    $(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
    return false;//リンクの無効化
  });
};

// 文字の背景アニメーション
    function fadeAnime(){

      // 背景色が伸びて出現（左から右）
      $('.bgLRextendTrigger').each(function(){
      var elemPos = $(this).offset().top-100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgLRextend');
      }else{
        $(this).removeClass('bgLRextend');
      }
    });

     // 文字列を囲う子要素
    $('.bgappearTrigger').each(function(){
      var elemPos = $(this).offset().top-100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgappear');
      }else{
        $(this).removeClass('bgappear');
      }
    });

    $('.fadeUpTrigger').each(function(){
      var elemPos = $(this).offset().top-100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');
      }else{
      $(this).removeClass('fadeUp');
      }
      });
};

 // 画面をスクロールをしたら動かしたい場合の記述
 $(window).scroll(function (){
  fadeAnime();
});

$(window).on('load', function () {
    $('.mv,.logo').addClass('zoomOut');
    mediaQueriesWin();
    fadeAnime();
});

 // ハンバーガーメニュー
document.getElementById('menu_btn_inner').onclick = function(){
var element = document.getElementById("h_nav");
element.classList.toggle('active');
var element = document.getElementById("menu_btn_inner");
element.classList.toggle('active');
};
