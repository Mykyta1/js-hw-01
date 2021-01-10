let credits = 35500;
let pricePerDroid = 3000
let count = prompt ("Сколько дроидов вы хотите приобрести?");
let totalPrice = pricePerDroid * count;
if (count == null) {
    console.log("Отменено пользователем!");}
else if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!"); }
else if (totalPrice < credits){
    console.log (`Вы купили ${count} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)}
