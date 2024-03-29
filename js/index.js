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
  $(".op_load").delay(1200).fadeOut('slow');
  $(".op_load_text").addClass('visible').delay(1500).fadeOut('slow',function(){
  $('body').addClass('appear');
  });
  $('.splashbg').on('animationend', function() {
      //この中に動かしたいJSを記載
    $('.mv,.logo').addClass('zoomOut');
    mediaQueriesWin();
    fadeAnime();
  });
});

 // ハンバーガーメニュー
document.getElementById('menu_btn_inner').onclick = function(){
var element = document.getElementById("h_nav");
element.classList.toggle('active');
var element = document.getElementById("menu_btn_inner");
element.classList.toggle('active');
};

 // スライドショー
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: true,
  centeredSlides: true,
  speed: 400,
  delay: 500,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    420: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2.3,
      spaceBetween:20,
    },
    780: {
      slidesPerView: 3,
      spaceBetween:20,
    },
    980: {
      slidesPerView: 3.5,
      spaceBetween:20,
    },
    1280: {
      slidesPerView: 4.5,
      spaceBetween:25,
    },
    1480: {
      slidesPerView: 5.5,
      spaceBetween:25,
    },
    1920: {
      slidesPerView: 6.5,
      spaceBetween: 25,
    },
  },


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});