var d = new Date();
date = d.toISOString();
var month = d.getMonth()+1;
//var date = d.getDate()+":"+month+":"+d.getFullYear();
document.getElementById('date').innerHTML = date.slice(0,10);
