$(document).ready(function() {

  //隱藏h1
  $("h1").hide();

  //定義物件內容
  var tog={};
  tog.name = "{{清單標題}}";
  tog.time = "2019-6-20";
  tog.list = [
    {title: "什麼是iCi", content: "Ci是關於美的科學，iCi分析儀...."},
    {title: "什麼是222", content: "222是關於美的科學，iCi分析儀...."},
    {title: "什麼是333", content: "333是關於美的科學，iCi分析儀...."},
  ];

  //定義元素用的html模板，{{名稱}}代表要套入的地方
  var tog_html = "<li class='item_tog' ><div id='{{title_tog_ids}}' class='title_tog' data-id='{{ids}}'>{{title}}<div id='{{btn_tog_ids}}' class='btn_tog dn'></div></div><div id='{{content_tog_ids}}' class='content_tog'>{{content}}</div></li>";

  //刪除並重新產生清單中所有項目
  function show() {
    $("#list_tog").html("");

    for(i = 0; i < tog.list.length; i++) {
      var item = tog.list[i];
      var title_tog_id = "title_tog_" + i;
      var btn_tog_id = "btn_tog_" + i;
      var content_tog_id = "content_tog_" + i;

      //取代模板位置成資料，replace(要取代的,取代成...)
      var new_tog_html =  tog_html.replace("{{title_tog_ids}}", title_tog_id)
                                  .replace("{{title}}", item.title)
                                  .replace("{{btn_tog_ids}}", btn_tog_id)
                                  .replace("{{ids}}", i)
                                  .replace("{{content_tog_ids}}", content_tog_id)
                                  .replace("{{content}}", item.content)
      ;
      //更新html
      $("#list_tog").append(new_tog_html);

      //點選title_tog(各列標題區塊)，新增CSS展開，移除CSS收合
      $("#title_tog_" + i).click(function () {
        //show();
        var current_id = $(this).attr("data-id");
        $("#content_tog_"+current_id).toggleClass("open");
        $("#btn_tog_"+current_id).toggleClass("up");

      });
    };

    };

  show();


});


