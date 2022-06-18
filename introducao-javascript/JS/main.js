var paciente = document.querySelector("#primeiro-paciente");

var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc");


var altura = tdAltura.textContent;
var peso = tdPeso.textContent;

var alturaEhValida = true;
var pesoEhValido = true;

if (peso <= 0 || peso > 1000) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;

}

if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {

    var imc = peso / (altura * altura);
    tdImc.textContent = imc;    
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
let botaoAdicionar = document.querySelector('#adicionar-paciente')
{
    botaoAdicionar.addEventListener('click', function(e){
        e.preventDefault()
        var form = document.querySelector('#form-adiciona')

        var nome = form.nome.value;
        var peso= form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;

        var pacienteTr = document.createElement('tr')
        var nomeTd = document.createElement('td')
        var pesoTd = document.createElement('td')
        var alturaTd = document.createElement('td')
        var gorduraTd = document.createElement('td')
        var imcTd = document.createElement('td')

        nomeTd.textContent = nome
        pesoTd.textContent = peso
        alturaTd.textContent = altura
        gorduraTd.textContent = gordura
        imcTd.textContent = imc

        pacienteTr.appendChild(nomeTd)
        pacienteTr.appendChild(pesoTd)
        pacienteTr.appendChild(alturaTd)
        pacienteTr.appendChild(gorduraTd)

        var tabela = document.querySelector("#tabela-pacientes");

        tabela.appendChild(pacienteTr)
        
    })
}