//ideas and inspiration came from foodar script.js (ownership of Revature Pro)
//universal variables

var cityElem = "zipResult";
var cityButton = "cityChecker";
var cityInput = "userZip";
var deliveryZip = [76028, 76058, 77840, 77841, 77842, 77843, 77844, 77845, 77801, 77802, 77803, 77803];

function findDriver(){
  //get zip and check if in valid area
  var btn = g("cityChecker");
	if (btn != null){

    btn.addEventListener("click", function zipChecker() {

      console.log("working...");
      var userZip = g(cityInput).value;
      var resultElem = g(cityElem);

      if(userZip != null)  {
        var inArea = false;

        //check array of cities served
        for(var i = 0; i < deliveryZip.length; i++) {
          if(userZip == deliveryZip[i]){
            inArea = true;
            break;}
        }

        if(inArea){
          resultElem.innerHTML = "We cover that area! Start your order <a href=\"./request.html\" style=\"color: black; text-decoration:underline;font-weight:bold;\">now</a>!";
          resultElem.style.color = "green";
        } else {
          resultElem.innerHTML = "Unfortunately, you are not in a delivery zone";
          resultElem.style.color = "red";
        }
    }});
  }
}


//shorthand
function g(id){
	return document.getElementById(id);
}


findDriver();
//updateCity();