var $ = document.querySelector.bind(document);

var botaoAdicionar = $("#adicionar-paciente");


botaoAdicionar.addEventListener("click",function(event){
	
	event.preventDefault();
	
	var form = $("#form-adiciona");
	var paciente = obtemPacienteDoFormulario(form);
	
	var erros = validaPaciente(paciente);

	if (erros.length > 0){
		exibeMensagensDeErro(erros);		
		return;
	}
	
	adicionaPacienteNaTabela(paciente);

	form.reset();

	var mensagensErro = $("#mensagens-erro");
	mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros){
	var ul = $("#mensagens-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function obtemPacienteDoFormulario(form){
	
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		imc: calculaImc(form.peso.value, form.altura.value)		
	}
	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

	return pacienteTr;
}

function montaTd (dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente){

	var erros = [];

	if (!validaPeso(paciente.peso)){
		erros.push("Peso é inválido");
	}

	if (!validaAltura(paciente.altura)){
		erros.push("Altura é inválida")
	}
	if(paciente.nome.length == 0){
		erros.push("O nome não pode ficar em branco");
	}
	if (paciente.peso.length == 0){
		erros.push("O peso não pode ficar em branco ")
	}
	if (paciente.altura.length == 0){
		erros.push("A altura não pode ficar em branco")
	}
	return erros;
}

function adicionaPacienteNaTabela(paciente){

	var pacienteTr = montaTr(paciente);
	var tabela = $("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}


	