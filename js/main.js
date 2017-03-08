
      var myParam = location.search.split('nombre=')[1];
        var saludo = document.getElementById("nom");
        if (myParam == undefined) {
            var nom = prompt('¿Cual es tu nombre?');

            while(nom=="" || nom==null)
            {
              nom = prompt("Ingrese su nombre por favor");
            }
            saludo.textContent = nom;
        } else {
            saludo.textContent = myParam;
        }
        document.getElementById("coders").addEventListener('click',function() {
        this.href += "?nombre="+saludo.textContent;
      })

// Dropdown
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

// Botones sprint 1, sprint 2, sprint 3
var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.id == "text1"  ) {
    divtext.style.display ="block";
		text3.style.display = "none";
    text2.style.display ="none";
	}
  if (divtext.id == "text2"  ) {
    divtext.style.display ="block";
    text1.style.display = "none";
    text3.style.display ="none";
  }
  if (divtext.id == "text3"  ) {
    divtext.style.display ="block";
    text1.style.display = "none";
    text2.style.display ="none";
  }
}

// Quiz Spring 1
document.getElementById("bt1").onclick = function(){
  var cb = 0;  //cuenta buenas
  var op1 = document.getElementsByName("p1");
  var op2 = document.getElementsByName("p2");
  var op3 = document.getElementsByName("p3");
  if(op1[0].checked == false && op1[1].checked == false && op1[2].checked == false ){
    alert ("Responder la pregunta 1")
  }
  else if(op2[0].checked == false && op2[1].checked == false && op2[2].checked == false ){
    alert ("Responder la pregunta 2")
  }
  else if(op3[0].checked == false && op3[1].checked == false && op3[2].checked == false ){
    alert ("Responder la pregunta 3")
  }
  else {
		if(op1[0].checked){cb++}
		if(op2[2].checked){cb++}
		if(op3[2].checked){cb++}
   	document.getElementById("quiz1").innerHTML ="Tienes " +cb + " correcta(s)";
  }
}
z
// Quiz Spring 2
document.getElementById("bt2").onclick = function(){
  var cb = 0;  //cuenta buenas
  var op1 = document.getElementsByName("p4");
  var op2 = document.getElementsByName("p5");
  var op3 = document.getElementsByName("p6");

  if(op1[0].checked == false && op1[1].checked == false && op1[2].checked == false ){
    alert ("Responder la pregunta 1")
  }
  else if(op2[0].checked == false && op2[1].checked == false && op2[2].checked == false ){
    alert ("Responder la pregunta 2")
  }
  else if(op3[0].checked == false && op3[1].checked == false && op3[2].checked == false ){
    alert ("Responder la pregunta 3")
  }
  else {
		if(op1[1].checked){cb++}
		if(op2[0].checked){cb++}
		if(op3[1].checked){cb++}
 document.getElementById("quiz2").innerHTML ="Tienes " +cb + " correcta(s)";
   }
}
