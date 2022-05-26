<?php
session_start();
include_once "php/config.php";
if (!isset($_SESSION['unique_id'])) {
    header("location: login.php");
}
?>
<?php include_once "header.php"; ?>

<body>
    <div class="wrapper">
        <section class="config">
            <header>
                <div class="content">
                    <?php
                    $sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$_SESSION['unique_id']}");
                    if (mysqli_num_rows($sql) > 0) {
                        $row = mysqli_fetch_assoc($sql);
                    }
                    ?>
                    <img src="php/images/<?php echo $row['img']; ?>" alt="">
                    <div class="details">
                        <span><?php echo $row['fname'] . " " . $row['lname'] ?></span>
                    </div>
            </header>
            <div class="config-list">
                <a href="#">
                    <div class="content">
                        <img src="php/images/1652547418121308634_1579746812224467_8152838339713802185_n.jpg" alt="">
                        <div class="details">asa</div>
                    </div>
                </a>
                <a href="#">
                    <div class="content">
                        <img src="php/images/1652548477163977259_1701464293386051_4629478784749758407_n.jpg" alt="">
                        <div class="details">asa</div>
                    </div>
                </a>

            </div>
        </section>
    </div>
</body>

</html>