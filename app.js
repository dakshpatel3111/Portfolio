


var i = 0;
var h1_n = 'Daksh Patel'; 
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < h1_n.length) {
    document.getElementById("h1_name").innerHTML += h1_n.charAt(i);          
    i++;
    setTimeout(typeWriter, speed);
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
