$(document).ready(function(){
	$("#butentrar").click(function () {

		var usuario =  $("#inputlogin").val();
		var senha = $("#inputsenha").val();
		var validaU = 1;
		var validaS = 1;

		if(usuario == " " || usuario == "." || usuario == "," || usuario == "/" || usuario == "*" ||
			usuario == "+" || usuario == "-" || usuario == "@" || usuario == "$" || usuario == "%" ||
			usuario == "!" || usuario == "(" || usuario == ")" || usuario == "&" || usuario == "~" ||
			usuario == ";" || usuario == "<" || usuario == ">" || usuario == "^" || usuario == "¨" ||
			usuario == "_" || usuario == "-" || usuario == ""){
			alert("Campo email com dados vazios ou incorretos ");
			$("#inputlogin").addClass("inputVazio");
			validaU = 0;
		}else{
			validaU = 1;
			$("#inputlogin").removeClass("inputVazio");
		}
		if(senha == " " || senha == "." || senha == "," || senha == "/" || senha == "*" ||
			senha == "+" || senha == "-" || senha == "@" || senha == "$" || senha == "%" ||
			senha == "!" || senha == "(" || senha == ")" || senha == "&" || senha == "~" ||
			senha == ";" || senha == "<" || senha == ">" || senha == "^" || senha == "¨" ||
			senha == "_" || senha == "-" || usuario == ""){
			alert("Campo senha com dados vazios ou incorretos");
			$("#inputsenha").addClass("inputVazio");
			validaS = 0;
		}else{
			validaS = 1;
			$("#inputsenha").removeClass("inputVazio");
		}

		if(validaU == 1 && validaS == 1){
			$.ajax({
				type:"POST",
				url:"php/login.php",
				data:{
					email: usuario,
					senha: senha
				},
				success:function(resposta){
					if(resposta == 1){
						window.location.href = ("/paginas/caixaEntrada.html")
					}else{
						$("#inputlogin").addClass("inputVazio");
						$("#inputsenha").addClass("inputVazio");
					}
				}
			});
		}
		
	});
});