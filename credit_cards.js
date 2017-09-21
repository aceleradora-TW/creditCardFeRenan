let card_number  = ['5','1','1','1','3','4','5','5','5','5','5','5','5','5','5','5'];
let flag;



if((card_number.slice(0,2) == "34" || card_number.slice(0,2) == "37") && card_number.length == 15){
  console.log("FLAG: AMEX");
  flag = "AMEX";
}else if ((card_number.slice(0,2) == "51" || card_number.slice(0,2) == "55") && card_number.length == 16){
  console.log("FLAG: Master Card");
  flag = "MASTER";
}else if ((card_number.slice(0,4) == "6011") && card_number.length == 16){
  console.log("FLAG: Discover");
  flag = "DISCOVER";
}else if ((card_number.slice(0,1) == "4") && card_number.length == 13 || card_number.length == 16){
  console.log("FLAG: Visa");
  flag = "VISA";
}else{
  console.log("Credit Card Invalid.")
}

// card_number.forEach(function())


 for (let i ; i < card_number.length; i++){
    var aux = card_number[i];
   				card_number[i] = card_number[i+1];
   				card_number[i+1] = aux;

 }

card_number.reverse();

var numbercard = card_number.join('')

var testuda = parseInt(card_number);

 console.log("TESTE",numbercard, " int >  ", testuda);
