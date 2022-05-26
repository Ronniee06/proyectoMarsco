<?php
session_start();
if (isset($_SESSION['unique_id'])) {
    header("location: users.php");
}
?>

<?php include_once "header.php"; ?>

<body>
    <div class="wrapper">
        <section class="form signup">
            <header>Marsco</header>
            <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
                <div class="error-text"></div>
                <div class="name-details">
                    <div class="field input">
                        <label>Nombre</label>
                        <input type="text" name="fname" placeholder="Introduzca el nombre" required>
                    </div>
                    <div class="field input">
                        <label>Apellido</label>
                        <input type="text" name="lname" placeholder="Introduzca el apellido" required>
                    </div>
                </div>
                <div class="field input">
                    <label>Correo Electrónico</label>
                    <input type="text" name="email" placeholder="Introduzca elcorreo electronico" required>
                </div>
                <div class="field input">
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder="Introduzca la contraseña nueva" required>
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field image">
                    <label>Escoga foto de perfil</label>
                    <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required>
                </div>
                <div class="field button">
                    <input type="submit" name="submit" value="Crear cuenta">
                </div>
            </form>
            <div class="link">ya tienes cuenta? <a href="login.php">Inicia Session</a></div>
        </section>
    </div>

    <script src="javascript/pass-show-hide.js"></script>
    <script src="javascript/signup.js"></script>

</body>

</html>