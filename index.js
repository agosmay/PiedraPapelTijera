const boton = document.querySelectorAll('.boton')

boton.forEach((i)=> {
	i.addEventListener('click', ()=> {
		
	let opcionPC = Math.floor(Math.random()*3)

if(opcionPC===0) {
	opcionPC = "Papel"
}else if(opcionPC ===1 ){
	opcionPC = "Tijera"
} else if (opcionPC ===2) {
	opcionPC= "Piedra"	
}

let userChoice = i.textContent

if(opcionPC === userChoice) {
	alert('Empate!')
}else if (opcionPC === "Papel" && userChoice === "Piedra"){
	alert('Perdiste! La pc eligio ' + opcionPC + ' y vos ' + userChoice)
}else if (opcionPC === "Piedra" && userChoice === "Papel") {
	alert('Ganaste! La pc eligio ' + opcionPC + ' y vos ' + userChoice)
	
}else if (opcionPC === "Papel" && userChoice === "Tijera") {
	alert('Ganaste ! La pc eligio ' + opcionPC + ' y vos ' + userChoice)
}else if (opcionPC === "Tijera" && userChoice === "Papel") {
	alert('Perdiste! La pc eligio ' + opcionPC + ' y vos ' + userChoice)
	
}else if(opcionPC ==="Tijera" && userChoice === "Piedra") {
	alert('Ganaste! La pc eligio ' + opcionPC + ' y vos ' + userChoice)
}else if(opcionPC === "Piedra" && userChoice ===" Tijera") {
	alert('Perdiste! La pc eligio ' + opcionPC + ' y vos ' + userChoice)
}
	})
})





