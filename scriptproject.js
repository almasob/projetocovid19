var febre = document.getElementById("febre");
var faltar = document.getElementById("faltar");
var dorpeito = document.getElementById("dorpeito");
var tosseseca = document.getElementById("tosseseca");
var dores = document.getElementById("dores");
var submiting = document.getElementsByClassName("submits");
var formulario = document.getElementById("formularioSaude");

formulario.addEventListener("submit", function(){
	if(febre.checked && faltar.checked && dorpeito.checked && tosseseca.checked && dores.checked){
	alert("ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!")}
	
	else if(febre.checked && faltar.checked && dorpeito.checked && tosseseca.checked){
	alert("ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!")}
	else if(febre.checked && faltar.checked && dorpeito.checked){
	alert("ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!")}
	else if(febre.checked && faltar.checked && dorpeito.checked && dores.checked){
	alert("ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!")}
	else if(febre.checked && faltar.checked && tosseseca.checked && dores.checked){
	alert("ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!")}
	else if(febre.checked && dorpeito.checked && tosseseca.checked && dores.checked){
	alert("ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!")}
	else if(faltar.checked && dorpeito.checked && tosseseca.checked && dores.checked){
	alert("ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!ATENÇÂO!!! Vá ao médico imediatamente, você pode estar INFECTADO!")}
	else if(febre.checked || faltar.checked || dorpeito.checked || tosseseca.checked || dores.checked){
	alert("Você tem sintomas leves... Mantenha-se distante das pessoas por pelo menos 15 dias... Se persistir, procure um MÉDICO!!\nVocê tem sintomas leves... Mantenha-se distante das pessoas por pelo menos 15 dias... Se persistir, procure um MÉDICO!!\nVocê tem sintomas leves... Mantenha-se distante das pessoas por pelo menos 15 dias... Se persistir, procure um MÉDICO!!")}
	else(alert("Muito bom!!!!\nVocê está livre de sintomas... Continue se previnindo, em breve estaremos todos livres!!"));
		}
	);
