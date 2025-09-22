<?php
$currentOrder = 0;
$showGrade = null;
$result;
$nilai;
$dataMahasiswa = [
    ['nrp' => 3124600061, 'name' => 'Reyhan Putra Ariutama'],
    ['nrp' => 3124600062, 'name' => 'Faira Fidelia Novatiara'],
    ['nrp' => 3124600063, 'name' => 'Zahrin Savana Khadijah'],
    ['nrp' => 3124600064, 'name' => 'Abubakar Adni'],
    ['nrp' => 3124600065, 'name' => 'Janesh Windi Az Putra'],
    ['nrp' => 3124600066, 'name' => 'Mochammad Akhdan Rafif'],
    ['nrp' => 3124600067, 'name' => 'Yeremia Ega Wahyudi'],
    ['nrp' => 3124600068, 'name' => 'Fatimah Azzahra'],
    ['nrp' => 3124600069, 'name' => 'Yoga Prastyo Bayu Laksono'],
    ['nrp' => 3124600070, 'name' => 'Navyz Abdillah Zikhav'],
    ['nrp' => 3124600071, 'name' => 'Muhammad Daffa Al Ghifary'],
    ['nrp' => 3124600072, 'name' => 'Rasyiid Wierastama'],
    ['nrp' => 3124600073, 'name' => 'Muhammad Rafif Hadziq'],
    ['nrp' => 3124600074, 'name' => 'Aisha Zarrah Amalia'],
    ['nrp' => 3124600075, 'name' => 'Muhammad Fathoni Widyawanto'],
    ['nrp' => 3124600076, 'name' => 'Bagus Mukti Purnomo'],
    ['nrp' => 3124600077, 'name' => 'James Eugene Sarongallo Palisungan'],
    ['nrp' => 3124600078, 'name' => 'Septareno Nugroho Aji'],
    ['nrp' => 3124600080, 'name' => 'Muhammad Ahnaf'],
    ['nrp' => 3124600081, 'name' => 'Rindang Tulus Sumalyo'],
    ['nrp' => 3124600082, 'name' => 'Adryan Fahmi Ramadhan'],
    ['nrp' => 3124600083, 'name' => 'Rosalia Dwi Arlusi'],
    ['nrp' => 3124600085, 'name' => 'Sayyidhina Raka Maulana'],
    ['nrp' => 3124600086, 'name' => 'Candra Putra Pratama'],
    ['nrp' => 3124600087, 'name' => 'Ahmad Izzudin Arrosyid'],
    ['nrp' => 3124600088, 'name' => 'Amalia Chasanah Zahty'],
    ['nrp' => 3124600089, 'name' => 'Farrel Athallah Kurniawan'],
    ['nrp' => 3124600090, 'name' => 'Tarissa Dewi Arimbi']
];

session_start();

if (isset($_SESSION['rawr'])) {
    $result = $_SESSION['rawr'];
} else {
    $result = [];
}

if ($_POST['order']) {
    $currentOrder = $_POST['order'];
    // var_dump($_POST['order']);
}

if ($_GET['order']) {
    $currentOrder = $_GET['order'];
}

if ($_POST['gradeRawr']) {
    $gradeRawr = (int) $_POST['gradeRawr'];

    if ($gradeRawr >= 80) {
        $grade = 'A';
    } elseif ($gradeRawr >= 70) {
        $grade = 'B';
    } elseif ($gradeRawr >= 60) {
        $grade = 'C';
    } elseif ($gradeRawr >= 50) {
        $grade = 'D';
    } else {
        $grade = 'E';
    }

    // fix ts
    $_SESSION['rawr'][$dataMahasiswa[$currentOrder]['nrp']] = [
        'name' => $dataMahasiswa[$currentOrder]['name'],
        'grade' => $grade,
        'gradeNum' => $gradeRawr
    ];

    $result = $_SESSION['rawr'];


    // var_dump($_SESSION['rawr'], $grade, $order);
}

if ($_GET['nrp']) {
    $nrp = $_GET['nrp'];
    $name = $_GET['name'];
    $currentOrder = array_search($name, array_column($dataMahasiswa, 'name'));
    $showGrade = $_SESSION['rawr'][$dataMahasiswa[$currentOrder]['nrp']]['grade'];
    $nilai = $_SESSION['rawr'][$dataMahasiswa[$currentOrder]['nrp']]['gradeNum'];
    // var_dump($nilai, $currentOrder);
}

// session_destroy();
ksort($result);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    </style>
</head>

<body class="bg-[#FFF4E6]">
    <div class="flex h-screen justify-center items-center">
        <div>
            <div class="w-[650px] h-auto pb-[16px] bg-[#FFD6A5] rounded-lg font-['Quicksand'] text-[30px] text-[#3A2E28] shadow-md">
                <div class="relative w-full text-center">
                    <img src="./peek-right.png" height="90" width="90" class="absolute top-[5%] right-[-0.5%]" alt="">
                    <img src="./peek-left.png" height="90" width="90" class="absolute top-[24%] left-[0%]" alt="">
                    <form action="http://127.0.0.1:8080/praktekweb2/nilai-kelas-elmo.php" method="post" class="flex items-center justify-center gap-[30px] pt-[20px]">
                        <div class="w-[42px] h-[42px]">
                            <button name="order" value="<?php echo $currentOrder <= 5 ? 0 : $currentOrder - 5; ?>" class="w-full h-full rounded-full bg-gradient-to-r from-pink-400 to-orange-400 shadow-sm hover:border-2 border-yellow-400 transition-transform duration-200 hover:scale-105 active:scale-95 group transform-gpu origin-center">
                                <span class="flex items-center justify-center w-6 h-6 mx-auto">
                                    <i class="text-[15px] fa fa-chevron-left text-white group-hover:text-yellow-300 transition-colors"></i>
                                    <i class="text-[15px] fa fa-chevron-left text-white group-hover:text-yellow-300 transition-colors"></i>
                                </span>
                            </button>
                        </div>
                        <div class="w-[42px] h-[42px]">
                            <button name="order" value="<?php echo $currentOrder <= 0 ? $currentOrder : $currentOrder - 1; ?>" class="w-full h-full rounded-full bg-gradient-to-r from-pink-400 to-orange-400 shadow-sm hover:border-2 border-yellow-400 transition-transform duration-200 hover:scale-105 active:scale-95 group transform-gpu origin-center">
                                <span class="flex items-center justify-center w-6 h-6 mx-auto">
                                    <i class="text-[15px] fa fa-chevron-left text-white group-hover:text-yellow-300 transition-colors"></i>
                                </span>
                            </button>
                        </div>

                        <img src="./zero-two.png" height="56" width="56" alt="">

                        <div class="w-[42px] h-[42px]">
                            <button name="order" value="<?php echo $currentOrder >= 27 ? $currentOrder : $currentOrder + 1; ?>" class="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 shadow-sm hover:border-2 border-pink-200 transition-transform duration-200 hover:scale-105 active:scale-95 group transform-gpu origin-center">
                                <span class="flex items-center justify-center w-6 h-6 mx-auto">
                                    <i class="fa fa-chevron-right text-[15px] text-white group-hover:text-pink-400 transition-colors"></i>
                                </span>
                            </button>
                        </div>
                        <div class="w-[42px] h-[42px]">
                            <button name="order" value="<?php echo $currentOrder >= 22 ? 27 : $currentOrder + 5; ?>" class="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 shadow-sm hover:border-2 border-pink-200 transition-transform duration-200 hover:scale-105 active:scale-95 group transform-gpu origin-center">
                                <span class="flex items-center justify-center w-6 h-6 mx-auto">
                                    <i class="fa fa-chevron-right text-[15px] text-white group-hover:text-pink-400 transition-colors"></i>
                                    <i class="fa fa-chevron-right text-[15px] text-white group-hover:text-pink-400 transition-colors"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                    <div class="mt-[8px]">
                        <div><?php echo $dataMahasiswa[$currentOrder]['name'] ?></div>
                        <div class="text-[22px] mt-[3px]"><?php echo $dataMahasiswa[$currentOrder]['nrp'] ?></div>
                    </div>
                    <form action="http://127.0.0.1:8080/praktekweb2/nilai-kelas-elmo.php" method="post" class="flex justify-center mt-[40px]">
                        <input hidden name="order" value="<?php echo $currentOrder ?>">
                        <div>Nilai ┈┈➤&nbsp; </div>
                        <input id="numberInput" name="gradeRawr" type="number" value="<?php echo $nilai ? $nilai : '' ?>" class="w-[80px] bg-transparent rounded-lg bg-gradient-to-r from-pink-400 to-orange-400 text-white text-center" max="100">
                    </form>
                </div>
                </div>
                <div class="text-center text-[35px]">⇅</div>
                <div <?php echo $showGrade == null ? '' : "hidden";  ?> class="w-[650px] h-auto min-h-[300px] bg-[#FFD6A5] rounded-lg shadow-md pt-[7px] text-center">
                    <div class="text-[26px] mb-[12px]">~~~~~~~~~~~ Dashboard Nilai (,,>﹏<,,)&nbsp~~~~~~~~~~~ </div>
                            <?php
                            foreach ($result as $nrp => $data) {
                                echo '<a href="http://127.0.0.1:8080/praktekweb2/nilai-kelas-elmo.php?nrp=' . $nrp . '&' . 'name=' . $data['name'] . '">' . $nrp . ' - ' . $data['name'] . '</a><br>';
                            }
                            ?>
                    </div>
                    <div <?php echo $showGrade == null ? 'hidden' : ''; ?> class="w-[650px] h-auto bg-[#FFD6A5] rounded-lg shadow-md">
                        <img <?php echo $showGrade == 'A' ? '' : 'hidden' ?> src="./lulus.png" class="rounded-lg" width="650px" height="300px" alt="">
                        <img <?php echo $showGrade == 'B' ? '' : 'hidden' ?> src="./chico.png" class="rounded-lg" width="650px" height="300px" alt="">
                        <img <?php echo $showGrade == 'C' ? '' : 'hidden' ?> src="./dog.png" class="rounded-lg" width="650px" height="300px" alt="">
                        <img <?php echo $showGrade == 'D' ? '' : 'hidden' ?> src="./lmao.png" class="rounded-lg" width="650px" height="300px" alt="">
                        <img <?php echo $showGrade == 'E' ? '' : 'hidden' ?> src="./goku.png" class="rounded-lg" width="100%" height="100%" alt="">
                        <a href="<?php echo 'http://127.0.0.1:8080/praktekweb2/nilai-kelas-elmo.php?order=' . $currentOrder ?>" class="w-full h-full rounded-full bg-gradient-to-r from-pink-400 to-orange-400 shadow-sm hover:border-2 border-yellow-400 transition-transform duration-200 hover:scale-105 active:scale-95 group transform-gpu origin-center">
                            <span class="flex items-center justify-center w-6 h-6 mx-auto">
                                <i class="text-[15px] fa fa-chevron-left text-white group-hover:text-yellow-300 transition-colors"></i>
                                <i class="text-[15px] fa fa-chevron-left text-white group-hover:text-yellow-300 transition-colors"></i>
                            </span>
                        </a>
                    </div>
                </div>
        </div>

        <script>
            const input = document.getElementById('numberInput');

            input.addEventListener('input', function() {
                if (this.value > 100) {
                    this.value = 100;
                }
            });

            document.getElementById('numberInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.form.submit();
                }
            });
        </script>
</body>

</html>