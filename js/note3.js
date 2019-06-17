// $(document).ready(function() 網頁本身的HTML載入後就觸發。
// $(window).load(fn)  等到網頁HTML標籤中引用的圖檔或其他物件都載入完成才觸發。
$(document).ready(function() {
  $(".block1").html("成功更新HTML內文!!");
  $(".block2").css("background-color","orange");
  $(".block31").addClass("big");
  $(".block32").removeClass("big");
  $(".block4").css("height","auto");
  $(".block4").html("<div class='small'>新增區塊1</div> <div class='small'>新增區塊2</div>");
  $(".block4").prepend("<p>前方新增HTML內容</p>");
  $(".block4").append("<p>後方新增HTML內容</p>");
  $(".block5").text("<p>內容皆為純文字</p>");

  $(".btn1").click(function () {
    $(this).text("已購買商品");
    $(this).addClass("buyed");
  });

  $(".btn2").click(function () {
    $(".show_item").text("選擇商品："+$(this).text());
    var cata=$(this).attr("cata");
    if(cata=="love"){
      $(".show_cata").text("| 最喜歡了！");
    }else {
      $(".show_cata").text("| 我不喜歡...");
    };
  });

  $(".btn3").mouseenter(function (){
    $(this).text("是我啦！");
  });

  $(".btn3").mouseleave(function (){
    $(this).text("選我選我選我");
  });

});


