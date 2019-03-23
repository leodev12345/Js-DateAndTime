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
