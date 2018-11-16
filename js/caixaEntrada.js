$(document).ready(function(){

	$("#caixaentrada").click(function(){
		fLocalAbrirArquivo();
		return false;
		window.location.href = "../paginas/caixaEntrada.html";
	});
	$("#enviados").click(function(){
		window.location.href = "../paginas/itensEnviados.html";
	});
	
	$("#nova").click(function(){
		window.location.href = "../paginas/novaMensagem.html";
	});
});

function fLocalAbrirArquivo(){

	$.ajax({
		type: "POST",
		dataType: "json",
		url: "../php/caixaEntrada.php",
		success:function(retorno){

			var html = "";

			for(var i = 0; i < retorno.length; i++){

				html += "<tr>";
				html += "<td>"+retorno[i]["assunto"]+"</td>";
				html += "<td>"+retorno[i]["mensagem"]+"</td>";
				html += "</tr>";
			}

			$("#tableemail").html(html);

		}
	});
}

