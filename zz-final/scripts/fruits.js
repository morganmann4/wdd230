const infopath = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let dropDown = document.querySelector("#fruits");
let dropDown2 = document.querySelector("#fruits2");
let dropDown3 = document.querySelector("#fruits3");

const drinkBtn = document.querySelector("#submitDrink");

fetch(infopath)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const data = jsonObject;
    let out = "";
    for(let fruit of data){
      out += `<option value="${fruit.name}">${fruit.name}</option>`;
    }
    dropDown.innerHTML = out;
    dropDown2.innerHTML = out;
    dropDown3.innerHTML = out;

    drinkBtn.addEventListener("click", function(){
      getOption(data);
    });
    
  });

  function getOption(data) {
    const name  = document.getElementById('first-name').value;
    const lname = document.getElementById('last-name').value
    const email  = document.getElementById('email').value;
    const phone   = document.getElementById('phone').value;
    const fruit1 = document.getElementById("fruits").value;
    const fruit2 = document.getElementById("fruits2").value;
    const fruit3 = document.getElementById("fruits3").value;
    const inst = document.getElementById("instructions").value;

    calculate(data, fruit1, fruit2, fruit3);
    displayInfo(name, lname, email, phone, inst, fruit1, fruit2, fruit3);
     
   }
 


function displayInfo(name, lname, email, phone, inst, fruit1, fruit2, fruit3){

  const date = new Date();

  document.querySelector('.nameout').textContent =  `${name} ${lname}`;
  document.querySelector('.phoneout').textContent =  phone;
  document.querySelector('.emailout').textContent =  email;
  document.querySelector('.dateout').textContent =  (date.getMonth()+1)+"-"+ date.getDate() +"-"+ date.getFullYear();
  document.querySelector('.fruitout1').textContent =  fruit1;
  document.querySelector('.fruitout2').textContent = fruit2;
  document.querySelector('.fruitout3').textContent = fruit3;
  document.querySelector('.special').textContent = inst;


}

function calculate(data, fruit1, fruit2, fruit3) {
  let data1 = data.filter(data => data.name == fruit1)[0].nutritions;
  let data2 = data.filter(data => data.name == fruit2)[0].nutritions;
  let data3 = data.filter(data => data.name == fruit3)[0].nutritions;

  const carbs = data1.carbohydrates  +  data2.carbohydrates + data3.carbohydrates;
  const pro  = data1.protein  +  data2.protein + data3.protein;
  const fats = data1.fat  +  data2.fat + data3.fat;
  const sugar = data1.sugar +  data2.sugar + data3.sugar;
  const cals  = data1.calories  +  data2.calories + data3.calories;


  document.querySelector('.carbs').textContent = carbs.toFixed(0);
  document.querySelector('.proteins').textContent = pro.toFixed(0);
  document.querySelector('.fats').textContent = fats.toFixed(0);
  document.querySelector('.sugar').textContent = sugar.toFixed(0);
  document.querySelector('.cals').textContent = cals.toFixed(0);
}




// // let count = 0
// let drinkCount = document.getElementById('#drinkAmount');

// let currentValue = localStorage.getItem('count');

// if(drinkCount == null)
//   drinkCount.innerHTML = currentValue;
    
// drinkBtn.addEventListener('click', () => {
//   drinkCount.innerHTML = ++currentValue;
  
//   localStorage.setItem('count', currentValue);
// });