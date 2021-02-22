<?php


  $nome = $_POST['nome'];
  $visitor_email = $_POST['email'];
  $empresa = $_POST['empresa'];
  $cargo = $_POST['cargo'];
  $contatopref = $_POST['forma-de-contato'];
  $telefone = $_POST['telefone'];
  $materiais = $_POST['materiais'];
  $pdp = $_POST['pdp'];
  $newsletter = $_POST['autorizo-email'];
  $message = $_POST['mensagem'];

  $email_from = "contato@diadoarauto.com.br";

  $email_subject = "Formulário do Site";

 

  $to = "contato@diadoarauto.com.br";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  function reCaptcha($recaptcha){
    $secret = "6Lc4aWIaAAAAAK0DiFGI1u9GmdAkXJOOLyJBITRK";
    $ip = $_SERVER['REMOTE_ADDR'];
  
    $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
    $data = curl_exec($ch);
    curl_close($ch);
  
    return json_decode($data, true);
  }

  $recaptcha = $_POST['g-recaptcha-response'];
  $res = reCaptcha($recaptcha);
  $captchaWork = $res['success'];
  $email_body = "Nome: $nome.\n".
  "Email: $visitor_email.\n".
  "Empresa: $empresa.\n".
  "Cargo: $cargo.\n".
  "Forma de contato Preferida: $contatopref.\n".
  "Telefone de Contato: $telefone.\n".
  "Envio de Materiais: $materiais.\n".
  "Política de Privacidade: $pdp.\n".
  "Autorização de email: $newsletter.\n".
  "Mensagem: $message.\n".
  "Captcha Status: $captchaWork \n";

  if($res['success']){
    mail($to,$email_subject,$email_body,$headers);
    header("Location: email-recebido.html");
  }
  else{
    header("Location: index.html");
  }

  

?>
