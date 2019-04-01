var date = new Date();
function start() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(start, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}i;
  return i;
}
function showDate(){
  document.getElementById("date").innerHTML = date;
}
function one(){
  document.getElementById("date").innerHTML = date.toUTCString();
}
function two(){
  document.getElementById("date").innerHTML = date.toDateString();
}
function hover(){
	document.body.style.backgroundColor = "white";
	document.body.style.backgroundImage = "";
}
function hoverTwo(){
	document.body.style.backgroundColor = "black";
	document.body.style.backgroundImage = "";
}
function space(){
	document.body.style.backgroundImage = "url('img/space.jpeg')";
}
function landscapes(){
	document.body.style.backgroundImage = "url('img/landscapes.jpeg')";
}
function mt(){
	document.body.style.backgroundImage = "url('img/mt.jpeg')";
}
function mb(){
	document.body.style.backgroundImage = "url('img/mb.jpeg')";
}
