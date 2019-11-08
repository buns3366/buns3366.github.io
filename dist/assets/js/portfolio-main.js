$(function () {

  // == 主選單按鈕 ====
  $('.btn-menu').on('click',function () {
    if(!$('header').hasClass('opened')){
      $('nav').addClass('opened');
      $('header').addClass('opened');
      $('body').css('position','fixed');
    }else {
      $('nav').removeClass('opened');
      $('header').removeClass('opened');
      $('body').css('position','relative')
    }
  });

  // == resize 設定計時器處理 ====
  // var resizeTimer = null;
  // $(window).on('resize', function() {
  //   if (resizeTimer) {
  //     clearTimeout(resizeTimer)
  //   }
  //   resizeTimer = setTimeout(function(){
  //
  //     //== resize function START====
  //     // console.log($(window).innerWidth());
  //     if($(window).innerWidth() < 1024){
  //       $('nav').removeClass('opened');
  //       $('header').removeClass('opened');
  //     }else{
  //       // $('nav').css('display','block');
  //     }
  //     //== resize function END====
  //
  //   }, 300);
  // });

  // == 滾動視窗偵測事件 ====
  $(window).on('scroll',function () {
    var bodyTop = $(window).scrollTop();
    // console.log(bodyTop);

    //--主選單固定 ----
    if(bodyTop>0){
      $('header').addClass('scrolled');
    }else{
      $('header').removeClass('scrolled');
    }
  });

  //== 主選單錨點，點選收合
  $('nav').on('click',function () {
    $('nav').removeClass('opened');
    $('header').removeClass('opened');
    $('body').css('position','relative')

  });


});
