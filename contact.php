<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Aquí puedes enviar el email o guardar en la base de datos
    // Ejemplo: mail($to, $subject, $message, $headers);

    echo "Gracias, $name. Tu mensaje ha sido enviado.";
} else {
    echo "Método no permitido.";
}
?>
