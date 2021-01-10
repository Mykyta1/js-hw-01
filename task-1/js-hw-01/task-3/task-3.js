let message;
let ADMIN_PASSWORD = prompt('Пароль?');
if (ADMIN_PASSWORD == null){
    alert('Отменено!')}
else if(ADMIN_PASSWORD == 'adminpass'){
    alert('Добро пожаловать!');
}
else {
    alert('Доступ запрещен, неверный пароль!')};