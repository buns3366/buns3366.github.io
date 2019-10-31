$(function () {
  $('.btn-menu').on('click',function () {
    if(!$(this).hasClass('opened')){
      $('nav').css('display','block');
      $(this).addClass('opened');
    }else {
      $('nav').css('display','none');
      $(this).removeClass('opened');
    }
  });

  // resize 設定計時器處理
  var resizeTimer = null;
  $(window).on('resize', function() {
    if (resizeTimer) {
      clearTimeout(resizeTimer)
    }
    resizeTimer = setTimeout(function(){

      //== resize function START====
      // console.log($(window).innerWidth());
      if($(window).innerWidth() < 1024){
        $('nav').css('display','none');
        $('.btn-menu').removeClass('opened');
      }else{
        $('nav').css('display','block');
      }
      //== resize function END====

    }, 300);
  });

  ///==  主視覺球體扭動動畫 ====
  var randomness = 90;
  var threshold = 285;
  var anim_duration = 900; //1000 = 1s

  animate = function() {

    $('.fluid').animate({
      borderTopLeftRadius: String(Math.round((Math.random() * randomness + threshold)) + 'px'),
      borderTopRightRadius: String(Math.round((Math.random() * randomness + threshold)) + 'px'),
      borderBottomLeftRadius: String(Math.round((Math.random() * randomness + threshold)) + 'px'),
      borderBottomRightRadius: String(Math.round((Math.random() * randomness + threshold)) + 'px')
    }, anim_duration, animate);
  };

  animate();



});
