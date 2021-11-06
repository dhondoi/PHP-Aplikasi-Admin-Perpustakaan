# Aplikasi Admin Perpustakaan Berbasis Web
 
 ![Untitled](https://user-images.githubusercontent.com/90187106/140598123-3a4912e0-b1fe-4648-a378-a6bca7f60e62.png)
 
 ![Untitled](https://user-images.githubusercontent.com/90187106/140598157-23c9db52-fc2e-462a-9278-eb43b93b161c.png)

Aplikasi ini digunakan untuk para admin yang mengelola data-data yang terkait dengan perpustakaan seperti mengelola data anggota,buku, dan transaksi peminjaman dan pengembalian buku. Mulai pekerjaan pada tanggal 31 Oktober 2021 dan berakhir pada 05 November 2021
 
 **DAFTAR MENU**
 1. [_**Download**_](#Download)
 2. [_**Referensi**_](#Referensi)
 3. [_**Kebutuhan**_](#Kebutuhan)
 4. [_**Panduan Penggunaan Aplikasi**_](#Panduan-Penggunaan-Aplikasi)
 5. [_**Catatan Pengembangan Aplikasi**_](#Catatan-Pengembangan-Aplikasi)
 6. [_**My Social Links**_](#My-Social-Links)
 
 ## Download
 Silahkan jika berminat, ada beberapa opsi.
 
 - _Download_ via [**Git**](https://github.com/dhondoi/Aplikasi-Perpustakaan-Berbasis-Web.git) 
 > https://github.com/dhondoi/Aplikasi-Perpustakaan-Berbasis-Web.git
- _Download_ via [**Github Desktop**](https://github.com/dhondoi/Aplikasi-Perpustakaan-Berbasis-Web)>**code**>**Open With Github Desktop**
 > https://github.com/dhondoi/Aplikasi-Perpustakaan-Berbasis-Web
 - _Download_ [**ZIP**](https://github.com/dhondoi/Aplikasi-Perpustakaan-Berbasis-Web/archive/refs/heads/main.zip) 
 > https://github.com/dhondoi/Aplikasi-Perpustakaan-Berbasis-Web/archive/refs/heads/main.zip
 
 ## Referensi
 Aplikasi ini dibuat dari beberapa referensi.
 - Tampilan [**Modal**](https://www.creative-tim.com/product/login-and-register-modal) (atau biasa saya sebut _pop-up_)
 - Tampilan [**Halaman Login**](https://www.creative-tim.com/product/coming-sssoon-page)
 - Tampilan [**Halaman Admin**](https://startbootstrap.com/theme/sb-admin-2)
 - [**Bootstrap**](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
 - [**jQuery**](https://api.jquery.com/)
 - [**StackOverflow**](https://stackoverflow.com/)
 - [**W3S**](https://www.w3schools.com/)
 
 ## Kebutuhan
 Aplikasi ini membutuhkan [**_XAMPP_**](https://www.apachefriends.org/download.html) untuk menjalankan **_Apache_** sebagai **_server_** lokal dan **_MySQL_** sebagai manajemen **_Database_**
 
 ## Panduan Penggunaan Aplikasi
 Berikut adalah tahapan dalam menggunakan aplikasi ini.
 1. [_**Download**_](#Download) _Project_ yang berisi _file_ berikut.
 
 ```
 D:.
|   .gitattributes
|   README.md
|
+---admin <------------------------------------- Folder Utama
|   |   api.php
|   |   index.php
|   |   login.php
|   |   logout.php
|   |
|   +---assets
|   |   +---css
|   |   |       all.min.css
|   |   |       bootstrap.css
|   |   |       coming-sssoon-demo.css
|   |   |       coming-sssoon.css
|   |   |       dataTables.bootstrap4.min.css
|   |   |       login.css
|   |   |       sb-admin-2.min.css
|   |   |
|   |   +---font
|   |   |       fa-brands-400.eot
|   |   |       fa-brands-400.svg
|   |   |       fa-brands-400.ttf
|   |   |       fa-brands-400.woff
|   |   |       fa-brands-400.woff2
|   |   |       fa-regular-400.eot
|   |   |       fa-regular-400.svg
|   |   |       fa-regular-400.ttf
|   |   |       fa-regular-400.woff
|   |   |       fa-regular-400.woff2
|   |   |       fa-solid-900.eot
|   |   |       fa-solid-900.svg
|   |   |       fa-solid-900.ttf
|   |   |       fa-solid-900.woff
|   |   |       fa-solid-900.woff2
|   |   |
|   |   +---img
|   |   |   |   about.jpg
|   |   |   |   anggota.jpg
|   |   |   |   bootstrap.png
|   |   |   |   jquery.jpg
|   |   |   |   loading.gif
|   |   |   |   logo.png
|   |   |   |   stackoverflow.png
|   |   |   |   undraw_posting_photo.svg
|   |   |   |   undraw_profile.svg
|   |   |   |   undraw_rocket.svg
|   |   |   |   vid.mp4
|   |   |   |   w3school.png
|   |   |   |
|   |   |   \---anggota
|   |   |           PRW171.jpg
|   |   |           PRW172.jpg
|   |   |           PRW173.jpg
|   |   |           PRW174.jpg
|   |   |           PRW1744.jpg
|   |   |           PRW175.jpg
|   |   |           PRW176.jpg
|   |   |           PRW1763.jpg
|   |   |           PRW1765.jpg
|   |   |           PRW1777.jpg
|   |   |           PRW1799.jpg
|   |   |
|   |   \---js
|   |           anggota.js
|   |           beranda.js
|   |           bootstrap.bundle.min.js
|   |           bootstrap.bundle.min.js.map
|   |           bootstrap.min.js
|   |           buku.js
|   |           dataTables.bootstrap4.min.js
|   |           jquery-1.10.2.js
|   |           jquery.dataTables.min.js
|   |           jquery.easing.min.js
|   |           jquery.min.js
|   |           jquery.min.map
|   |           login.js
|   |           print-anggota.js
|   |           print-buku.js
|   |           print-transaksi.js
|   |           sb-admin-2.min.js
|   |           transaksi.js
|   |
|   \---content
|           anggota.php
|           bantuan.php
|           beranda.php
|           buku.php
|           print-anggota.php
|           print-buku.php
|           print-transaksi.php
|           tentang.php
|           transaksi.php
|
\---database <------------------------------------- Folder Database
        dbperpus2.sql

 ```
 
 2. Download [**_XAMPP_**](https://www.apachefriends.org/download.html) dan instal.
 3. Simpan _folder_ **admin** ke folder **_XAMPP_** server. contoh : `C:\xampp\htcdocs\admin`.
 4. Aktifkan **_Apache_** dan **_MySQL_** dangan cara klik tombol _**`start`**_ pada aplikasi **_XAMPP Control Panel_**.
 5. Jalankan **_Browser_** dan masukkan alamat `http://localhost/phpmyadmin/`, behasil masuk jika halaman **_phpMyAdmin_** muncul dan disini sisi untuk menegelola _database_.
 6. Buat _database_ baru dengan nama **dbperpus2**.
 7. Masuk ke _database_ **`dbperpus2`** lalu pilih menu **_`import`_** dan masukkan _file_ **dbperpus2** `(database\dbperpus2.sql)` lalu **_`Go`_**.
 8. Masukkan alamat `http://localhost/admin`, selamat anda sudah menjalankan aplikasi. Halaman awal seharusnya tampilan login atau menu utama (jika sudah login).
 9. Coba Masukkan _username_ `admin` dan _password_ `admin` jika berhasil login, _database_ terhubung.
 
 ## Catatan Pengembangan Aplikasi
 Sebagai catatan saya yang nantinya mungkin nanti akan dikembangkan
 - ID anggota, buku, dan transaksi belum otomatis
 - Besar ukuran file foto belum dibatasi
 - Buku belum ada data foto
 - Database belum normal :
   - belum ditentukan batasan anggota meminjam
   - belum ditentukan (satu kode dengan judul sama punya jumlah. ex : "NOV1-Aku-4") atau (banyak kode dengan judul sama. ex : "NOV1-Aku","NOV2-Aku")
 - Masih belajar konsep dari javascript, sehingga program terjadi :
   - terjadi error menampilkan halaman, padahal script tidak error (walaupun ada solusi yang tidak tahu benar atau tidak seperti : tekan ctrl+shift+del > clear cahche).
   - penggunaan jQuery.post() masih belum rapih (belum belajar callback (kalau di java listener)).
 - buat halaman untuk anggotanya dong, hehe.
 - baru segini(nanti lanjut dari sini).
 
 ## My Social Links
 
 - <code><img src="https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667" width="2%"></code> **Instagram** : [**https://www.instagram.com/dhondoii/**](https://www.instagram.com/dhondoii/)
 - <code><img src="https://camo.githubusercontent.com/4a3dd8d10a27c272fd04b2ce8ed1a130606f95ea6a76b5e19ce8b642faa18c27/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f676d61696c2e737667" width="2%"></code> **E-Mail** : **donifirmansyah33@gmail.com**
 - <code><img src="https://camo.githubusercontent.com/8f245234577766478eaf3ee72b0615e99bb9ef3eaa56e1c37f75692811181d5c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f66616365626f6f6b2e737667" width="2%"></code> **Facebook** : [**https://www.facebook.com/dhondoi/**](https://www.facebook.com/dhondoi/)
