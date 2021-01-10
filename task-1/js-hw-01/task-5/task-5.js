let destination = prompt ('Укажите страну доставки').toLowerCase();
destination = destination[0].toUpperCase() + destination.slice(1);

switch (destination) {
    case "Китай":
      alert("Доставка в Китай будет стоить 150 кредитов");
      break;
    case "Чили":
      alert("Доставка в Чили будет стоить 250 кредитов");
      break;
    case "Австралия":
      alert("Доставка в Австралию будет стоить 165 кредитов");
      break;
    case "Индия":
      alert("Доставка в Индию будет стоить 90 кредитов");
      break;
    case "Ямайка":
      alert("Доставка в Ямайку будет стоить 130 кредитов");
      break;
    default:
      alert("В вашей стране доставка не доступна");
}