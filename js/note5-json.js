$(document).ready(function() {
/*===============================
 陣列[]：依照編號排排站好的資料：
  1. 陣列需先宣告變數 var a = [];
  2. 陣列內容有兩種表現方式，兩種皆可
     A. 一個個[]列出來，由0開始
          a[0] = "111";
          a[1] = "222";
     B. 全部用[]包起來，用逗號隔開，系統自動由0開始編號
          a=[111,222];
 ===============================*/

// A.一個個[]列出來，由0開始
  var menu1 = [];
  menu1[0] = "西瓜";
  menu1[1] = "草莓";
  menu1[2] = "芒果";

// B. 全部用[]包起來，用逗號隔開，系統自動由0開始編號0,1,2...(與A具相同效果)
  var menu2 = [];
  menu2 = ["西瓜","草莓","芒果"];

//使用push在後面再推入一筆資料
  menu2.push("紅蘿蔔");

// for(變數開始的值;要繼續重複的條件;每次執行完的改變)
  for(var i = 0; i < menu2.length; i++){
    //append=原本元素裡面的所有html後面加上我們給的東西
    $("#menu").append("<li class='item'>" + menu2[i] + "</li>");
  };

 /*===============================
 JSON{}：每一項資料都有名字的陣列：
  1. json不需要var，直接宣告json名稱即可：a = {};
  2. json內容有兩種表現方式，兩種皆可
     A. 一個個列出來，需打「變數名.屬姓名 = "內容"」
          a.name = "111";
          a.tel = "222";
     B. 全部用{}}包起來，需打「屬姓名 : "內容"」
          a={
          name:"111";
          tel: "222";
          }
===============================*/

//A.一個個列出來，需打「變數名.屬姓名 = "內容"」，分號隔開
  shop1 = {};
  shop1.name = "胖嘟嘟水果店";
  shop1.tel = "02-12345678";
  shop1.addr = "淡水區沙崙路";

//B. 全部用{}}包起來，需打「屬姓名 : "內容"」，逗號隔開 (與A具相同效果)
  shop2 = {};
  shop2 = {
    name: "胖嘟嘟水果店",
    tel: "02-12345678",
    addr: "淡水區沙崙路",
  };

  $("#info").append("<li>" + "店名：" + shop2.name + "</li>");
  $("#info").append("<li>" + "電話：" + shop2.tel + "</li>");
  $("#info").append("<li>" + "地址：" + shop2.addr + "</li>");

  var shop_html="<ul>";
  for(var i = 0; i < menu2.length; i++){
    shop_html += "<li class='item'>" + [i] + "." + menu2[i] + "</li>";
  };
  shop_html += "</ul>";

  $("#info").append("<li>" + "品項：" + shop_html + "</li>");

});


