
let dieRolls = [];
let numDie = document.querySelector("#number"); 
let showButton = document.querySelector(".show"); 
let rollButton = document.querySelector(".roll"); 
let countspan = document.querySelector("#countspan");
let DieTotal = 0;
let list = document.querySelector(".show_all_rolls");
rollButton.addEventListener("click", function(){ 
  let numDieValue = numDie.value; 
  console.log(numDieValue);
  for (var i = 0; i < numDieValue; i++) {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    dieRolls.push(diceRoll);
  }
  console.log(dieRolls);

  for (var i = 0; i < dieRolls.length; i++){
    DieTotal += dieRolls[i]
  }
  let newcountspanValue = Number(countspan.innerHTML) + DieTotal; 
  countspan.innerHTML = newcountspanValue;
});

showButton.addEventListener("click", function(){
  var html = "";
  for (var i =0; i < dieRolls.length; i++) {
    html += "<li>" + dieRolls[i]+ "</li>";
  }
  list.innerHTML = html
  // console.log (list)
})
