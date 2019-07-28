  'use strict'
$(document).ready(_=> {
const addDnDHandlers=()=>
  {
    let img=document.querySelector(".img");
    let zone=document.querySelector("#shoppingcart");
    let shoppingcart=document.querySelectorAll("#shoppingcart ul")[0];

    for (var i=0;i<img.length;i++){
      img[i].addEventListener("dragstart",(ev)=>{
        ev.dataTransfer.effectAllowed='copy';
        ev.dataTransfer.setData("Text",this.getAttribute("id"));
      },false)
    };

    zone.addEventListener("dragover",function(ev){
      if (ev.preventDefault)
          ev.preventDefault();
      ev.dataTransfer.dropEffect='copy';
      return false;
    },false);

    zone.addEventListener("drop",(ev)=>{
      if (ev.stopPropagation)
          ev.stopPropagation();

      var coffeId=ev.dataTransfer.getData("Text");
      var element=document.getElementById("one1");
      console.log(coffeId);
      addCoffeeToShoppingCart(element,coffeId);
      ev.stopPropagation();

      return false;
    },false);
  }

addDnDHandlers()

  function addCoffeeToShoppingCart(item,id) {
    var html=id+" "+item.getAttribute("data-price");

    var liElement=document.createElement("li");
    liElement.innerHTML=html;
    shoppingcart.appendChild(liElement)

  }
});
