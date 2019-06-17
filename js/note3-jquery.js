/*=======================================
  1. $("xxx") ：選擇器
  2. $(this)：指選擇器的元件，如有兩個一樣class的原件，則只有被觸發的元件會執行動作。
    -  $(".aaa") .click (
      function(){
        $(this).addClass("bbb")
      });
    --點選aaa元件時，「該元件」新增Clas bbb。
  3. 增加CSS內容，會替換掉相同屬性CSS內容： $("選擇條件").css("CSS屬性", "值")
    - $(".aaa").css("font-size","12px");
  4. 增加純文字：$("選擇條件").text("...")
    - $(".aaa").html("原始碼也會顯示為純文字");
  5. 元件增加/移除Class：$("選擇條件").addClass/.removeClass("class名稱")：
    - $(".aaa") .addClass ("box");
  6. 更改HTML內容，替換掉該元件所有HTML內容：$("選擇條件").html("...")
    - $(".aaa").html("<p>更新公告</p>");
  7. 於原內容前方，增加HTML內容： $("選擇條件").prepand("...")
    - $(".aaa"). prepand("<p>前方新增內容</p>");
  8. 於原內容後方，增加HTML內容： $("選擇條件").appand("...")
    - $(".aaa"). appand("<p>後方新增內容</p>");
   =======================================*/

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

  /*=======================================
  滑鼠點擊觸發事件：.click
  =======================================*/
  $(".btn1").click(function () {
    $(this).text("已購買商品");
    $(this).addClass("buyed");
  });

  /*=======================================
  1. if判斷式：if (true){run this;} else{runthis;}
    --給三角形邊長a, b, c 判斷是不是直角三角形?
    if (a*a == b*b+c*c){
     是直角三角形
      }else if (b*b == a*a+c*c){
        是直角三角形
      }else if (c*c == a*a+b*b){
        是直角三角形
      }else{
      不是直角三角形
      }
    --※如條件內容為兩邊值相等，用等於「==」，大於「>」，小於「<」

  2. 抓取HTML內容：.attr
     - $(".aaa").attr("xxx")
     --會自動抓取HTML中xxx=ooo的值
  3. 顯示的字串可以用「+」串接，例如： 「"已選擇："+$(this).attr("box")」
  4. 宣告變數：var a=1  (表示變數名稱為"a"，預設值為"1")
  =======================================*/
  $(".btn2").click(function () {
    $(".show_item").text("選擇商品："+$(this).text());
    var cata=$(this).attr("cata");
    if(cata=="love"){
      $(".show_cata").text("| 最喜歡了！");
    }else {
      $(".show_cata").text("| 我不喜歡...");
    };
  });

  /*=======================================
   1. 滑鼠移入：.mouseenter
   2. 滑鼠移出：.mouseleave
   =======================================*/
   $(".btn3").mouseenter(function (){
     $(this).text("是我啦！");
   });

   $(".btn3").mouseleave(function (){
     $(this).text("選我選我選我");
   });

  /*=======================================
  1. 經過特定時間後執行：setTimeout(動作, 時間千分之一秒)
  2. 每經過特定時間後執行： setInterval (動作, 時間)
   =======================================*/
  setTimeout(function () {
   $(".btn41").text("高雄不會發大財！！");
   $(".btn41").css("background-color","#ff7c30");
  },5000);

  var sec=0
  setInterval(function () {
   sec=sec+1
   $(".btn42").text("已經過"+sec+"秒")
  },1000)


  /*=======================================
  function可設定模組化，(宣告變數一樣的功能)
    - function check(){
      if (num<10){
        $(".text").text("數量極少!!");
      }
    -- 設定function模組「click()」，之後如需要套用此function只需要打上 click()即可。
   =======================================*/

});


