let input = +prompt()
let total = 0
while(input){
	total += input;
    input = +prompt();
}
    alert(`Общая сумма чисел равна ${total}`);