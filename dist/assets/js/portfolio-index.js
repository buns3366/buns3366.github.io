$(function () {

  //滾動視窗顯示section動畫
  new WOW().init();


  // == 滾動視窗偵測事件 ====
  var showletter = false;
  $(window).on('scroll',function () {
    var bodyTop = $(window).scrollTop();
    console.log(bodyTop);

    //--#about 標題效果 ----

    if(bodyTop >= 550 && !showletter){
      showletter = true;
      shoeletters();
    }
  });

  //==  主視覺球體扭動動畫 ====
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

//== #about 標題動態效果 ====
function shoeletters() {
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.intro .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<h2 class='letter'>$&</h2>");

  anime.timeline({loop: false})
    .add({
      targets: '.intro .letter',
      translateY: ["1.65em", 0],
      translateZ: 0,
      duration: 1200,
      delay: (el, i) => 50 * i
      // }).add({
      // targets: '.text-wrapper',
      // opacity: 0,
      // duration: 1000,
      // easing: "easeOutExpo",
      // delay: 300
    });
}
