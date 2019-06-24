var todo_url = "https://awiclass.monoame.com/api/command.php?type=get&name=tododata";
var todolist_html = "<li class='{{class}}'>{{num}}.{{name}}<div class='date'>{{date}}</div></li>"

//用ajax載入清單的物件內容

/* =================================
AJAX：Asynchronous JavaScript and XML
-$.ajax(
{    url: "伺服器端的網址",
    type: "傳遞方式，可填入POST/GET",
    data:  "傳送的參數"
    success:  function(res){
       載入進來的內容如何運用，res=回傳/取得的內容，預設為html，
       可以到"datetyep"更改回傳的內容類型(html/ xml/ script/ json)。
    }
});
這裡的例子 user_name: $(‘#user_name’).val()，
傳送 $_GET[‘user_name’] 到 id_validate.php
然後它的 value 是 $(‘#user_name’).val()
ajax參數可參考： http://www.runoob.com/jquery/ajax-ajax.html
-------------------------------------------
if 條件式縮寫：
- 如果條件式"a"成立，則變數b為1，不成立則變數b為2
      var b="";
      if (a== true){
             b = "1";
       }else {
 b="2"
}
-- 效果等同於以下縮寫，「(條件)? "true的話"："false的話"」
      var b = (a== true)? "1": "2";
 ================================= */

$.ajax(
  {
    url: todo_url,
    success: function (res) {

      //JSON.parse()：解析 JSON 字串，能改變給定值和屬性、接著回傳解析值。
      todo_list = JSON.parse(res);

      for (i = 0; i < todo_list.length; i++) {
        var todoitem = todo_list[i];
        var doneclass = (todoitem.done == true) ? "item done" : "item";
        new_todolist_html =
          todolist_html.replace("{{num}}", i + 1)
            .replace("{{name}}", todoitem.name)
            .replace("{{date}}", todoitem.date)
            .replace("{{class}}", doneclass)
        ;

        $("#todolist").append(new_todolist_html);
      }
    }
  });






