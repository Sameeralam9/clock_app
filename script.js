
let hours = document.querySelector('#hour');
let todayDate = document.querySelector('.date');

setInterval(()=>{
const date = new Date()
todayDate.innerText = date.toDateString();

let hh = parseInt(date.getHours())
let mm = parseInt(date.getMinutes())
let ss = parseInt(date.getSeconds())

  hh = (hh < 10) ? "0" + hh : hh
  hh = (hh > 12) ? "0" + 1 : hh
  mm = 	(mm < 10 )? "0" + mm : mm
  ss =	(ss < 10) ? "0" + ss : ss

if (hh > 12) {
hours.innerText = hh + ":" + mm + ":" + ss + " PM";
}else{
	hours.innerText = hh + ":" + mm + ":" + ss +" AM"
}

},1000);
