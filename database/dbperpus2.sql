-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2021 at 04:03 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbperpus2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `idadmin` int(11) NOT NULL,
  `nm_admin` varchar(30) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`idadmin`, `nm_admin`, `username`, `password`) VALUES
(1, 'Doni Firmansyah', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `tbanggota`
--

CREATE TABLE `tbanggota` (
  `idanggota` varchar(10) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `jeniskelamin` enum('Pria','Wanita') NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `foto` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbanggota`
--

INSERT INTO `tbanggota` (`idanggota`, `nama`, `jeniskelamin`, `alamat`, `foto`) VALUES
('PRW171', 'Aliando', 'Pria', 'Gang 1 No. 1', 'PRW171.jpg'),
('PRW172', 'Ahmad Dhoni', 'Pria', 'Gang 1 No. 2', 'PRW172.jpg'),
('PRW173', 'Aminah', 'Wanita', 'Gang 1 No. 3', 'PRW173.jpg'),
('PRW174', 'Japra', 'Pria', 'Gang 1 No. 4', 'PRW174.jpg'),
('PRW1744', 'Puffin Margarin', 'Pria', 'Perum. Kue Enak Sentosa No.87', 'PRW1744.jpg'),
('PRW175', 'Marfuniah', 'Wanita', 'Kp. Bojong Nan Jauh Disana No. 44', 'PRW175.jpg'),
('PRW176', 'Spygamen', 'Pria', 'Perum. Yang Selalu Banjir', 'PRW176.jpg'),
('PRW1763', 'Corn Dog', 'Pria', 'Jl. Makanan Enak No. 1', 'PRW1763.jpg'),
('PRW1765', 'Siti Anti Mage', 'Wanita', 'Kp. Dota 2', 'PRW1765.jpg'),
('PRW1777', 'Jaka Potter', 'Pria', 'Huguwart No. 77', 'PRW1777.jpg'),
('PRW1799', 'Ulen', 'Pria', 'Gg. Haji Ulen', 'PRW1799.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbbuku`
--

CREATE TABLE `tbbuku` (
  `idbuku` varchar(10) NOT NULL,
  `judulbuku` varchar(50) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `pengarang` varchar(40) NOT NULL,
  `penerbit` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbbuku`
--

INSERT INTO `tbbuku` (`idbuku`, `judulbuku`, `kategori`, `pengarang`, `penerbit`) VALUES
('DES1', 'Dasar Manajemen Desain', 'Desain', 'Muhammad Daniel Septian', 'UB Press'),
('EDU1', 'Mendidik Anak dengan Cinta', 'Edukasi', 'Sinta Yudisia', 'Gema Insani'),
('EDU2', 'Pendidikan IPA Sekolah Dasar', 'Edukasi', 'I Gede Astawan', 'NILACAKRA'),
('EDU4', 'Pendidikan Kewarganegaraan', 'Edukasi', 'Aim Abdulkarim', '-'),
('EDU5', 'Panduan Praktis Arduino Untuk Pemula', 'Edukasi', 'Hari Santoso', 'www.elangsakti.com'),
('ET1', 'SMS-SMS Lucu', 'Entertaiment', '-', '-'),
('NOV1', 'Serenada di Ujung Senja', 'Novel', 'Millea', 'Bukune Kreatif Cipta'),
('NOV67', 'Mereka Bilang, Saya Monyet!', 'Novel', 'Djenar Maesa Ayu', 'Gramedia Pustaka Utama'),
('NOV8', 'Menanti Sebuah Jawaban', 'Novel', 'Andrean Frank', 'Loveable'),
('SOS1', 'Teori-Teori Sosial Kontemporer Paling Berpengaruh', 'Sosial', 'David Goldblatt', 'IRCiSoD'),
('SOS3', 'Apa Itu Homeschooling', 'Edukasi', 'Sumardiono', 'PandaMedia');

-- --------------------------------------------------------

--
-- Table structure for table `tbtransaksi`
--

CREATE TABLE `tbtransaksi` (
  `idtransaksi` int(11) NOT NULL,
  `idanggota` varchar(10) CHARACTER SET latin1 NOT NULL,
  `idbuku` varchar(10) CHARACTER SET latin1 NOT NULL,
  `tglpinjam` date NOT NULL,
  `tglkembali` date NOT NULL,
  `tglselesai` date NOT NULL,
  `statuspinjam` enum('Pinjam','Selesai') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbtransaksi`
--

INSERT INTO `tbtransaksi` (`idtransaksi`, `idanggota`, `idbuku`, `tglpinjam`, `tglkembali`, `tglselesai`, `statuspinjam`) VALUES
(1, 'PRW172', 'NOV8', '2021-11-05', '2021-11-06', '0000-00-00', 'Pinjam'),
(2, 'PRW171', 'EDU1', '2021-11-05', '2021-11-06', '0000-00-00', 'Pinjam'),
(3, 'PRW1777', 'EDU1', '2021-11-05', '2021-11-12', '2021-11-05', 'Selesai'),
(4, 'PRW173', 'NOV8', '2021-11-05', '2021-11-13', '0000-00-00', 'Pinjam'),
(5, 'PRW175', 'EDU5', '2021-12-11', '2021-11-28', '0000-00-00', 'Pinjam'),
(6, 'PRW172', 'NOV8', '2021-11-21', '2021-11-28', '0000-00-00', 'Pinjam'),
(7, 'PRW171', 'DES1', '2021-12-11', '2021-12-04', '0000-00-00', 'Pinjam'),
(8, 'PRW1799', 'SOS1', '2021-11-05', '2021-11-06', '0000-00-00', 'Pinjam'),
(9, 'PRW1763', 'EDU5', '2021-11-05', '2021-11-09', '0000-00-00', 'Pinjam'),
(10, 'PRW173', 'EDU5', '2021-11-05', '2021-11-14', '0000-00-00', 'Pinjam'),
(11, 'PRW1744', 'EDU4', '2021-11-05', '2021-11-07', '0000-00-00', 'Pinjam');

-- --------------------------------------------------------

--
-- Table structure for table `tbuser`
--

CREATE TABLE `tbuser` (
  `iduser` varchar(10) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbuser`
--

INSERT INTO `tbuser` (`iduser`, `username`, `password`) VALUES
('PRW171', 'prw171', 'prw171'),
('PRW172', 'prw172', 'prw172'),
('PRW173', 'prw173', 'prw173'),
('PRW174', 'prw174', 'prw174'),
('PRW1744', 'prw1744', 'prw1744'),
('PRW175', 'prw175', 'prw175'),
('PRW176', 'prw176', 'prw176'),
('PRW1763', 'prw1763', 'prw1763'),
('PRW1765', 'prw1765', 'prw1765'),
('PRW1777', 'prw1777', 'prw1777'),
('PRW1799', 'prw1799', 'prw1799');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`idadmin`);

--
-- Indexes for table `tbanggota`
--
ALTER TABLE `tbanggota`
  ADD PRIMARY KEY (`idanggota`);

--
-- Indexes for table `tbbuku`
--
ALTER TABLE `tbbuku`
  ADD PRIMARY KEY (`idbuku`);

--
-- Indexes for table `tbtransaksi`
--
ALTER TABLE `tbtransaksi`
  ADD PRIMARY KEY (`idtransaksi`),
  ADD KEY `idanggota` (`idanggota`),
  ADD KEY `idbuku` (`idbuku`);

--
-- Indexes for table `tbuser`
--
ALTER TABLE `tbuser`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `idadmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbtransaksi`
--
ALTER TABLE `tbtransaksi`
  MODIFY `idtransaksi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbuser`
--
ALTER TABLE `tbuser`
  ADD CONSTRAINT `tbuser_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `tbanggota` (`idanggota`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
