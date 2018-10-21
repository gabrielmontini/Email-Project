$(document).ready(function(){

	$("#butentrar").click(function(){
	var login = $("#inputlogin").val();
	var senha = $("#inputsenha").val();
	var logsenha = login + senha;
		if (login == "nome") {
			if (senha == "1234") {
			alert(logsenha);
			window.location.href = ("paginas/email.html")
			}
		} else {
			alert("Nome de Usuário ou senha errado");
		}
	});
});