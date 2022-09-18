
var date = new Date();
var get_year = date.getFullYear()
document.getElementById("currentYear").innerHTML = get_year;
var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
var date_time = current_date+" "+current_time;	
document.getElementById("currentDate").innerHTML = date_time;


