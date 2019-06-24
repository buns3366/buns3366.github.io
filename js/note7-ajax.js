var todo_url = "https://awiclass.monoame.com/api/command.php?type=get&name=tododata";
var todolist_html = "<li class='{{class}}'>{{num}}.{{name}}<div class='date'>{{date}}</div></li>"

//用ajax載入清單的物件內容
$.ajax(
  {
    url: todo_url,
    success: function (res) {
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






