var paciente = document.querySelector(".paciente");

var tabela = document.getElementById("table");

tabela.addEventListener("dblclick", (event) => {
	
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(() => {
		event.target.parentNode.remove();
	}, 500)
		
});


	
