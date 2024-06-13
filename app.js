"use strict"
const botao = document.querySelector(".btn");
botao.addEventListener("click",function(){
	document.body.classList.toggle("dark-theme");
	var className = document.body.className;
	if(className == "ligth-theme"){
		this.textContent = "Dark";
	}else{
		this.textContent = "Ligth";
	}
	console.log("COR SELECIONADA É :"+className);
});