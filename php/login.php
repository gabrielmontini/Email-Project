<?php
	$xml_string = file_get_contents("../xml/login.xml");
	$php_object = simplexml_load_string($xml_string);

	$validar = 0;

	foreach($php_object->usuario as $cont){
		if($cont->email == $_POST['email']){
			if($cont->senha == $_POST['senha']){
				$validar = 1;
			}
		}
	}

	echo json_encode($validar);

?>