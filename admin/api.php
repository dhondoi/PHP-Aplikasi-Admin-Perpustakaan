<?php
session_start();
$mysqli = new mysqli("localhost", "root", "", "dbperpus2");
$response = array();
// if (isset($_POST["code"])) {
switch ($_POST["code"]) {
    case "login":
        if (!empty($row = $mysqli->query("SELECT idadmin,nm_admin FROM admin WHERE username = '$_POST[username]' AND password = '$_POST[password]';")->fetch_array(MYSQLI_ASSOC))) {
            $response["success"] = 1;
            $response["nm_admin"] = $row["nm_admin"];
            $_SESSION["id"] = $row["idadmin"];
            $_SESSION["nama"] = $row["nm_admin"];
            $_SESSION["level"] = "admin";
        } else {
            $response["success"] = 0;
        }
        break;
    case "get data table anggota":
        $ex = $mysqli->query("SELECT idanggota,nama FROM tbanggota ORDER BY nama ASC");
        while ($row = $ex->fetch_array(MYSQLI_ASSOC)) {
            $temp["id"] = $row["idanggota"];
            $temp["nama"] = $row["nama"];
            array_push($response, $temp);
        }
        break;
    case "get data anggota":
        $row = $mysqli->query("SELECT idanggota,nama,jeniskelamin,alamat,foto FROM tbanggota WHERE idanggota = '$_POST[no_registrasi]';")->fetch_array(MYSQLI_ASSOC);
        $response["id"] = $row["idanggota"];
        $response["nama"] = $row["nama"];
        $response["jk"] = $row["jeniskelamin"];
        $response["alamat"] = $row["alamat"];
        $response["foto"] = $row["foto"];
        break;
    case "update data anggota":
        if ($mysqli->query("UPDATE tbanggota SET nama = '$_POST[nama]', jeniskelamin = '$_POST[jenis_kelamin]', alamat = '$_POST[alamat]' WHERE idanggota = '$_POST[id]';")) {
            // if (file_put_contents("./assets/img/pengguna/preg_replace('/\s+/', '_', '$_POST[plat].jpeg')", base64_decode($_POST["gambar"]))) {
            //     $response['success'] = 1;
            //     die(json_encode($response));
            // } else {
            //     $response['success'] = 0;
            //     die(json_encode($response));
            // }
            $response["success"] = 1;
        } else {
            $response["success"] = 0;
        }
        break;
    case "add data anggota":
        if (isset($_FILES['file']['name'])) {

            $nama_file   = $_FILES['file']['name'];
            // Baca lokasi file sementar dan nama file dari form (fupload)
            $lokasi_file = $_FILES['file']['tmp_name'];
            $tipe_file = pathinfo($nama_file, PATHINFO_EXTENSION);
            $file_foto = preg_replace('/\s+/', '_', $_POST["id"]) . "." . $tipe_file;

            // Tentukan folder untuk menyimpan file
            $folder = "./assets/img/anggota/$file_foto";
            // Apabila file berhasil di upload
            move_uploaded_file($lokasi_file, $folder);
        } else {
            if ($mysqli->query("INSERT INTO tbanggota (idanggota, nama, jeniskelamin, alamat, foto) VALUES ('$_POST[id]', '$_POST[nama]', '$_POST[jk]', '$_POST[alamat]', '" . preg_replace('/\s+/', '_', $_POST["id"]) . ".jpg');")) {
                if ($mysqli->query("INSERT INTO tbuser (iduser, username, `password`) VALUES ('$_POST[id]', '" . strtolower($_POST["id"]) . "', '" . strtolower($_POST["id"]) . "');")) {
                    $response["success"] = 1;
                } else {
                    $response["success"] = 0;
                }
            } else {
                $response["success"] = 0;
            }
        }
        break;
    case "delete data anggota":
        if ($mysqli->query("DELETE FROM tbuser WHERE iduser = '$_POST[id]';")) {
            if ($mysqli->query("DELETE FROM tbanggota WHERE idanggota = '$_POST[id]';")) {
                unlink("./assets/img/anggota/$_POST[id].jpg");
                $response["success"] = 1;
            } else {
                $response["success"] = 0;
            }
        } else {
            $response["success"] = 0;
        }
        break;
    case "get data table buku":
        $ex = $mysqli->query("SELECT idbuku,judulbuku,kategori FROM tbbuku ORDER BY judulbuku ASC");
        while ($row = $ex->fetch_array(MYSQLI_ASSOC)) {
            $temp["id"] = $row["idbuku"];
            $temp["judul"] = $row["judulbuku"];
            $temp["kategori"] = $row["kategori"];
            array_push($response, $temp);
        }
        break;
    case "get data buku":
        $row = $mysqli->query("SELECT idbuku,judulbuku,kategori,pengarang,penerbit FROM tbbuku WHERE idbuku = '$_POST[id]';")->fetch_array(MYSQLI_ASSOC);
        $response["id"] = $row["idbuku"];
        $response["judul"] = $row["judulbuku"];
        $response["kategori"] = $row["kategori"];
        $response["pengarang"] = $row["pengarang"];
        $response["penerbit"] = $row["penerbit"];
        break;
    case "update data buku":
        if ($mysqli->query("UPDATE tbbuku SET judulbuku = '$_POST[judul]', kategori = '$_POST[kategori]', pengarang = '$_POST[pengarang]', penerbit = '$_POST[penerbit]' WHERE idbuku = '$_POST[id]';")) {
            $response["success"] = 1;
        } else {
            $response["success"] = 0;
        }
        break;
    case "delete data buku":
        if ($mysqli->query("DELETE FROM tbbuku WHERE idbuku = '$_POST[id]';")) {
            $response["success"] = 1;
        } else {
            $response["success"] = 0;
        }
        break;
    case "add data buku":
        if ($mysqli->query("INSERT INTO tbbuku (idbuku, judulbuku, kategori, pengarang, penerbit) VALUES ('$_POST[id]', '$_POST[judul]', '$_POST[kategori]', '$_POST[pengarang]', '$_POST[penerbit]');")) {
            $response["success"] = 1;
        } else {
            $response["success"] = 0;
        }
        break;
    case "get data table transaksi":
        $ex = $mysqli->query("SELECT idtransaksi, idanggota, idbuku, statuspinjam FROM tbtransaksi ORDER BY statuspinjam ASC");
        while ($row = $ex->fetch_array(MYSQLI_ASSOC)) {
            $temp["idtransaksi"] = $row["idtransaksi"];
            $temp["idanggota"] = $row["idanggota"];
            $temp["idbuku"] = $row["idbuku"];
            $temp["statuspinjam"] = $row["statuspinjam"];
            array_push($response, $temp);
        }
        break;
    case "get data transaksi":
        $row1 = $mysqli->query("SELECT idtransaksi,idanggota,idbuku,tglpinjam,tglkembali FROM tbtransaksi WHERE idtransaksi = '$_POST[id]';")->fetch_array(MYSQLI_ASSOC);
        $response["idtransaksi"] = $row1["idtransaksi"];
        $response["idanggota"] = $row1["idanggota"];
        $response["idbuku"] = $row1["idbuku"];
        $response["tglpinjam"] = $row1["tglpinjam"];
        $response["tglkembali"] = $row1["tglkembali"];
        $row2 = $mysqli->query("SELECT nama FROM tbanggota WHERE idanggota = '$row1[idanggota]';")->fetch_array(MYSQLI_ASSOC);
        $response["namaanggota"] = $row2["nama"];
        $row3 = $mysqli->query("SELECT judulbuku FROM tbbuku WHERE idbuku = '$row1[idbuku]';")->fetch_array(MYSQLI_ASSOC);
        $response["judulbuku"] = $row3["judulbuku"];
        break;
    case "add data transaksi":
        if ($mysqli->query("INSERT INTO tbtransaksi (idanggota, idbuku, tglpinjam, tglkembali, statuspinjam) VALUES ('$_POST[idanggota]', '$_POST[idbuku]', '$_POST[tglpinjam]', '$_POST[tglkembali]', 'Pinjam');")) {
            $response["success"] = 1;
        } else {
            $response["success"] = 0;
        }
        break;
    case "update data transaksi":
        if ($mysqli->query("UPDATE tbtransaksi SET statuspinjam = 'Selesai', tglselesai = NOW() WHERE idtransaksi = '$_POST[idtransaksi]';")) {
            $response["success"] = 1;
        } else {
            $response["success"] = 0;
        }
        break;
    case "print data table anggota":
        $ex = $mysqli->query("SELECT * FROM tbanggota ORDER BY nama ASC");
        while ($row = $ex->fetch_array(MYSQLI_ASSOC)) {
            $temp["idanggota"] = $row["idanggota"];
            $temp["nama"] = $row["nama"];
            $temp["jeniskelamin"] = $row["jeniskelamin"];
            $temp["alamat"] = $row["alamat"];
            $temp["foto"] = $row["foto"];
            array_push($response, $temp);
        }
        break;
    case "print data table buku":
        $ex = $mysqli->query("SELECT * FROM tbbuku ORDER BY judulbuku ASC");
        while ($row = $ex->fetch_array(MYSQLI_ASSOC)) {
            $temp["idbuku"] = $row["idbuku"];
            $temp["judulbuku"] = $row["judulbuku"];
            $temp["kategori"] = $row["kategori"];
            $temp["pengarang"] = $row["pengarang"];
            $temp["penerbit"] = $row["penerbit"];
            array_push($response, $temp);
        }
        break;
    case "print data table transaksi":
        $ex = $mysqli->query("SELECT * FROM tbtransaksi ORDER BY statuspinjam ASC");
        while ($row = $ex->fetch_array(MYSQLI_ASSOC)) {
            $temp["idtransaksi"] = $row["idtransaksi"];
            $temp["idanggota"] = $row["idanggota"];
            $temp["idbuku"] = $row["idbuku"];
            $temp["tglpinjam"] = $row["tglpinjam"];
            $temp["tglkembali"] = $row["tglkembali"];
            $temp["tglselesai"] = $row["tglselesai"];
            $temp["statuspinjam"] = $row["statuspinjam"];
            array_push($response, $temp);
        }
        break;
    default:
        break;
}
die(json_encode($response));
$mysqli->close();
// } else {
//     $mysqli->close();
//     header("location:./login.php");
// }
