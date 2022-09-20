
var date = new Date();
var get_year = date.getFullYear()
document.querySelector("#currentYear").textContent = get_year;


var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
var date_time = current_date+" "+current_time;	

document.querySelector("#currentDate").textContent = date_time;



