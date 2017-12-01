//trae los elementos correspondientes a la clase "card" del html
var cards = document.getElementsByClassName('card');

console.log(cards);

//iteración sobre cada elemento del arreglo cards
//en la posición i
for(var i=0; i<cards.length; i++){
//  console.log(cards[i]);
  var item = cards[i];
    //cards[i].classList.add("efects");
  item.classList.add('efects');
  item.addEventListener('mouseover', rotation);
}

function rotation(){
  if(this.classList.contains('rotation-efect')){
    this.classList.remove('rotation-efect');
  }
  else{
    this.classList.add('rotation-efect');
  }
}
