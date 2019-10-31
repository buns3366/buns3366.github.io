var trello_url = "https://buns3366.github.io/res/wJdWD3CY.json";

// 導入json方法一
// var request = new XMLHttpRequest();
// request.open('GET', trello_url);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//   var superHeroes = request.response;
//   show(superHeroes);
// };



// 導入json方法二
// 將變數內容替換為ajax內容
$.ajax({
  dataType: "json",
  url: trello_url,
  success: function (res) {
    // aa = JSON.parse(res);   dataType: "json" 就已經自動將json轉為js物件，不需要再寫一次。
    show(res);
  },

});


var item_html="<tr id='{{data_card_id}}' class='item'><td>{{data_card_idShort}}</td><td>{{data_list_name}}</td><td>{{data_card_name}}</td><td>{{card_closed}}</td>></tr>";


// function test() {
//   var new_item_html = item_html.replace("{{data_card_idShort}}", AA.cards[1].name);
//   $("#menulist").append(new_item_html);
// }
//
// test();

function show(aa) {
$("#menulist").html("");

for (i = 0; i < aa.cards.length; i++) {
  var new_id = aa.cards[i].id;
  var new_id_short= aa.cards[i].idShort;
  var new_list_name = aa.cards[i].idList;
  var new_card_name = aa.cards[i].name;
  var new_card_closed = aa.cards[i].closed;

  var new_item_html =
    item_html.replace("{{data_card_id}}", new_id)
      .replace("{{data_card_idShort}}", new_id_short)
      .replace("{{data_list_name}}", new_list_name)
      .replace("{{data_card_name}}", new_card_name)
      .replace("{{card_closed}}", new_card_closed)
  ;
  $("#menulist").append(new_item_html);

  // //刪除，點選後刪除指定id的陣列物件->重新渲染。陣列.splice(陣列第幾項,刪除多少個)
  // $("#" + new_del_id).click(function () {
  //   menu.list.splice(parseInt($(this).attr("data-id")),1);
  //   show();
  // });
}

// //總價，取代模板位置成資料replace(要取代的,取代成...)
// var new_totle_html =
//   totle_html.replace("{{tol_price}}",new_totle_price);
//
// $("#menulist").append(new_totle_html);

};

//先顯示一次，因為前面只定義好function 還沒有執行
show();

// //新增資料流程: 動態push一筆資料->呼叫show()重新渲染清單
// $(".addbtn").click(
// function () {
// menu.list.push(
//   {
//     name: $("#addmenu").val(),
//     price: $("#addprice").val()
//   }
// );
//   //清空輸入方塊的內容
// $("#addmenu").val("");
// $("#addprice").val("");

// show();
// });



