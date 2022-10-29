
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  
  const x = document.getElementById("hamburgerBtn")
  x.onclick = toggleMenu;
  
  
var date = new Date();
var get_year = date.getFullYear()
document.querySelector("#currentYear").textContent = get_year;


var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
var date_time = current_date+" "+current_time;	

document.querySelector("#currentDate").textContent = date_time;

try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDay').textContent = new Date(). toLocaleDateString('en-US', options);   
  } catch (e) {
    alert('Error with code or your browser does not support Locate');
  }

//////////Banner/////////////
const dayNum = date.getDay();
if(dayNum == 1 ||dayNum == 3){
  document.querySelector("#banner").textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
}

