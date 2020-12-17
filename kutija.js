var djela = [
	"Odi susjedi u dućan po namirnice.",
	"Napravi nekome koga voliš omiljeno jelo.",
	"Prošetaj starijem susjedu psa.",
	"Nazovi svoju baku i reci joj da ju voliš.",
	"Zagrli svoju braću."
]


function NovoDjelo() {
	var randomNumber = Math.floor(Math.random() * (djela.length));
	document.getElementById("DobraDjela").innerHTML = djela[randomNumber];
}