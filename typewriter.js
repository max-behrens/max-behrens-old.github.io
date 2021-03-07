var i = 0;
var txt = "Mathematics and Computer Science Graduate";
var speed = 65;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("subtitle").innerHTML += txt.charAt(i);
	
    i++;
    setTimeout(typeWriter, speed);
  }
}


typeWriter();



