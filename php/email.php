<?php

$validar = 0;

$para = $_POST['para'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];

$xml = new DOMDocument("1.0");
$xml_emails = $xml->createElement("emails");
$xml_email = $xml->createElement("email");
$xml_para = $xml->createElement("para", $para . "\n");
$xml_copia = $xml->createElement("copia", $copia . "\n");
$xml_assunto = $xml->createElement("assunto", $assunto . "\n");
$xml_mensagem = $xml->createElement("mensagem", $mensagem . "\n");

$xml_emails->appendChild($xml_email);
$xml_email->appendChild($xml_para);
$xml_email->appendChild($xml_copia);
$xml_email->appendChild($xml_assunto);
$xml_email->appendChild($xml_mensagem);


$xml->appendChild($xml_emails);

$xml->save("../xml/email.xml");

echo json_encode($validar);

?>