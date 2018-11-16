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

function fLocalAbrirArquivo(){

	$.ajax({
		type: "POST",
		dataType: "json",
		url: "../php/enviadas.php",
		success:function(retorno){

			var html = "";

			for(var i = 0; i < retorno.length; i++){

				html += "<tr>";
				html += "<td>"+retorno[i]["para"]+"</td>";
				html += "<td>"+retorno[i]["assunto"]+"</td>";
				html += "<td>"+retorno[i]["mensagem"]+"</td>";
				html += "</tr>";
			}

			$("#tableemail").html(html);

		}
	});
}