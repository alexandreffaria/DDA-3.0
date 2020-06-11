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

  $email_body = "Nome: $nome.\n".
                "Email: $visitor_email.\n".
                "Empresa: $empresa.\n".
                "Cargo: $cargo.\n".
                "Forma de contato Preferida: $contatopref.\n".
                "Telefone de Contato: $telefone.\n".
                "Envio de Materiais: $materiais.\n".
                "Política de Privacidade: $pdp.\n".
                "Autorização de email: $newsletter.\n".
                "Mensagem: $message.\n";

  $to = "contato@diadoarauto.com.br";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);
  header("Location: email-recebido.html")

?>
