<?php
// Website Contact Form Generator 
// http://www.tele-pro.co.uk/scripts/contact_form/ 
// This script is free to use as long as you  
// retain the credit link  

// get posted data into local variables
$EmailFrom = Trim(stripslashes($_POST['email'])); 
$EmailTo = "contato@diegogarcia.com.br";
$Subject = "Contato Site GCIA";
$nome = Trim(stripslashes($_POST['nome'])); 
$email = Trim(stripslashes($_POST['email'])); 
$mensagem = Trim(stripslashes($_POST['mensagem'])); 

// validation
$validationOK=true;
if (Trim($EmailFrom)=="") $validationOK=false;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "nome: ";
$Body .= $nome;
$Body .= "\n";
$Body .= "email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "mensagem: ";
$Body .= $mensagem;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://www.gcia.cc/ok.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://www.gcia.cc/error.html\">";
}
?>
