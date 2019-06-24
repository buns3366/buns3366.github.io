var menu_url = "https://awiclass.monoame.com/api/command.php?type=get&name=itemdata";

var menu={};
menu.name="胖嘟嘟水果店菜單";
menu.date="2019-6-19";
//商品清單的清單裡面是個陣列，塞商品物件們
menu.list=[
{name:"西瓜",price:"500"},
{name:"草莓",price:"1200"},
{name:"紅蘿蔔",price:"20"},
{name:"番茄",price:"150"},
{name:"葡萄",price:"300"},

];

$.ajax({
  url: menu_url,
  success: function (res) {
    menu.list = JSON.parse(res);
    show();
  }

});


//定義元素用的html模板，{{名稱}}代表要套入的地方
var item_html="<li id='{{item_id}}' class='item'>{{num}} . {{name}}<div class='price'>{{price}}</div><div id='{{del_id}}' class='delbtn' data-id='{{id}}'>X</div></li>";

var totle_html="<li id='totle_price' class='item_totle'>總計<div class='price_totle'>{{tol_price}}</div></li>";


//刪除並重新產生清單中所有項目，包成一組function。
function show() {
//清空所有內容、總價歸0
$("#menulist").html("");
var new_totle_price = 0;

for (i = 0; i < menu.list.length; i++) {

  //品項，把每個項目做出來
  var item_id = "item_id_" + i;
  var new_name = menu.list[i].name;
  var new_price = menu.list[i].price;
  var new_del_id = "del_" + i;
  var id_del = i;

  //已宣告過總價的變數，不需要再宣告一次，parseInt(...)表示將字串轉為整數數字；
  new_totle_price += parseInt(menu.list[i].price);

  //品項，取代模板位置成資料，replace(要取代的,取代成...)
  var new_item_html =
    item_html.replace("{{item_id}}}", item_id)
      .replace("{{num}}", i + 1)
      .replace("{{name}}", new_name)
      .replace("{{price}}", new_price)
      .replace("{{del_id}}", new_del_id)
      .replace("{{id}}", id_del)

  ;
  //品項，用jquery操作，將新的HTML顯示出來
  $("#menulist").append(new_item_html);

  //刪除，點選後刪除指定id的陣列物件->重新渲染。陣列.splice(陣列第幾項,刪除多少個)
  $("#" + new_del_id).click(function () {
    menu.list.splice(parseInt($(this).attr("data-id")),1);
    show();
  });
};

//總價，取代模板位置成資料replace(要取代的,取代成...)
var new_totle_html =
  totle_html.replace("{{tol_price}}",new_totle_price);

//總價，用jquery操作，將新的HTML顯示出來
$("#menulist").append(new_totle_html);

};

//先顯示一次，因為前面只定義好function 還沒有執行
show();

//新增資料流程: 動態push一筆資料->呼叫show()重新渲染清單
$(".addbtn").click(
function () {
menu.list.push(
  {
    //使用val()存取輸入的值，val("..") 有給參數是設定
    name: $("#addmenu").val(),
    price: $("#addprice").val()
  }
);
  //清空輸入方塊的內容
$("#addmenu").val("");
$("#addprice").val("");

show();
});



