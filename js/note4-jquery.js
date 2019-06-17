$(document).ready(function() {
  var n=10;

  /*
  可將function模組化，使用「function aaa(){....}」
  套用時只需要打「aaa()」即可
   */
  function clickbtn(){
    if(n<10){
      $(".text").text("庫存不足了 T_T");
      $(".text").css("color","#ff5930");
      $(".text").css("border-color","#ff5930");
      $(".contact").addClass("contact_open");
    }else if(n<20){
      $(".text").text("庫存充足");
      $(".text").css("color","#58d894");
      $(".text").css("border-color","#58d894");
      $(".contact").removeClass("contact_open");
    }else {
      $(".text").text("庫存滿滿的 ^_^");
      $(".text").css("color", "#fffa02");
      $(".text").css("border-color", "#fffa02");
    }
    };

  $(".minus").click(function () {
    n=n-1;
    $(".num").text(n);
    clickbtn();
    });

  $(".plus").click(function () {
    n=n+1;
    $(".num").text(n);
    clickbtn();
  });

  var sec=0;
  $(".contact").click(function () {
    setInterval(function () {
      sec=sec+1;
      $(this).text("撥話中...."+sec+"秒");
    },1000);
  });

});


