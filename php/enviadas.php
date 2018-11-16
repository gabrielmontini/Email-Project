<?php

	$conteudo = file_get_contents("../xml/email.xml");
	$xml = simplexml_load_string($conteudo);

	
	for($i = 0; $i < count($xml->email); $i++){

		$retorno[$i]["para"] = trim($xml->email[$i]->para);
		$retorno[$i]["assunto"] = trim($xml->email[$i]->assunto);
		$retorno[$i]["mensagem"] = trim($xml->email[$i]->mensagem);

	}

	echo json_encode($retorno);

?>