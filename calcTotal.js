var form = document.getElementById("foodForm");

form.addEventListener("change", calculateTotal);

function calculateTotal(){
  var result = 0;
  console.log("Calculating...");

  //get style
  var foodStyle = document.getElementsByClassName("food-style");
  for(i=0; i < foodStyle.length; i++){
    if(foodStyle[i].checked){
      result = Number(foodStyle[i].value);
    }
  }

  //get Tip
  var tip = document.getElementsByClassName("tip-amount");
  for(i=0; i < tip.length; i++){
    if(tip[i].checked){
      result = result + (result*Number(tip[i].value));
    }
  }

  result = result.toFixed(2);

  var totalElem = document.getElementById('totalCost');
  totalElem.innerHTML = result;
}

function resetForm()  {
  var result = 0.00;
  var totalElem = document.getElementById('totalCost');
  totalElem.innerHTML = result;
}