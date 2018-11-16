$(document).ready(function(){
	
	$("#btCaixaEntrada").click(function(){
		window.location.href = "../paginas/CaixaEntrada.html";
	});
	$("#enviados").click(function(){
		window.location.href = "../paginas/itensEnviados.html";
	});
	
	$("#nova").click(function(){
		window.location.href = "../paginas/novaMensagem.html";
	});

	$("#botaoEnviar").click(function(){
		$.ajax({
				type:"POST",
				url:"../php/email.php",
				data:{
					para: $("#taPara").val(),
					assunto: $("#taAssunto").val(),
					mensagem: $("#taMensagem").val()
				},
				success:function(resposta){
					alert("Email Enviado");
				}
			});
	});

});