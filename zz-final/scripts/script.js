
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  
  const x = document.getElementById("hamburgerBtn")
  x.onclick = toggleMenu;
  
  
var date = new Date();
var get_year = date.getFullYear()
document.querySelector("#currentYear").textContent = get_year;


var current_date = (date.getMonth()+1)+"-"+ date.getDate() +"-"+ date.getFullYear();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
var date_time = current_date+" "+current_time;	

document.querySelector("#currentDate").textContent = date_time;



// Current Date and Time //

document.getElementById(".currDateTime").value = date_time;

