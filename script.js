"use strict";
let basket = [];
basket.push("Молоко");
basket.push("Хлеб");
basket.push("Кока-кола");
basket.push("Чипсы");
basket.push("Печенье");
while (basket.length > 0) {
  alert(basket.pop());
  if (basket.length == 0) {
    alert("Вы выняли все товары!");
  }
}
