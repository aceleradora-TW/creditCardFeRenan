let card_number = '4408041234567893';

cardArray = card_number.split('');
inverseCard = cardArray.reverse();

var sumNumbers = 0;
for(let i = 0; i < inverseCard.length; i++){
  if(i % 2 != 0){
    inverseCard[i] = inverseCard[i] * 2;
  }
  if(inverseCard[i] > 9){
    inverseCard[i] = inverseCard[i] - 9;
  }
  sumNumbers += parseInt(inverseCard[i]);
}

if(sumNumbers % 10 == 0){
  if((card_number.slice(0,2) == "34" || card_number.slice(0,2) == "37") && card_number.length == 15){
    console.log("FLAG: AMEX");
  }else if ((card_number.slice(0,2) >= "51" && card_number.slice(0,2) <= "55") && card_number.length == 16){
    console.log("FLAG: Master Card");
  }else if ((card_number.slice(0,4) == "6011") && card_number.length == 16){
    console.log("FLAG: Discover");
  }else if((card_number.slice(0,1) == "4") && (card_number.length == 13 || card_number.length == 16)){
    console.log("FLAG: Visa");
  }else{
    console.log("Flag not identified");
  }
}else{
  console.log("Credit Card Invalid.");
}
