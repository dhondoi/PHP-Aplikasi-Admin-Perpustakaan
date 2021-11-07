<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

  <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
  <meta name="viewport" content="width=device-width" />

  <title>Perpus RW. 17</title>

  <link href="./assets/css/bootstrap.css" rel="stylesheet" />
  <link href="./assets/css/coming-sssoon.css" rel="stylesheet" />
  <link href="./assets/css/login.css" rel="stylesheet" />

  <!--     Fonts     -->
  <link href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css" rel="stylesheet" />
  <link href="http://fonts.googleapis.com/css?family=Grand+Hotel" rel="stylesheet" type="text/css" />
</head>

<body>
  <!-- START navbar (untuk membuat navbar) -->
  <nav class="navbar navbar-transparent navbar-fixed-top" role="navigation">
    <!-- START container (untuk bungkus navbar) -->
    <div class="container">
      <!-- START navbar-header (untuk layar kecil) -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <!-- END navbar-header -->
      <!-- START navbar-collapse (untuk layar besar) -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a data-toggle="modal" href="javascript:void(0)" id="a-login">
              <i class="fa fa-arrow-right">
                <span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding-left: 3px">Masuk</span>
              </i>
            </a>
          </li>
        </ul>
      </div>
      <!-- END navbar-collapse -->
    </div>
    <!-- END container -->
  </nav>
  <!-- END navbar -->
  <!-- START main (isi konten)-->
  <div class="main" style="background-image: url('./assets/img/bg.jpg')">
    <!-- isi video latar belakang -->
    <video id="video_background" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
      <source src="./assets/img/vid.mp4" type="video/mp4" />
      Video not supported
    </video>
    <!-- cover warna latar -->
    <div class="cover black" data-color="black"></div>
    <!-- tulisan konten -->
    <div class="container">
      <h1 class="logo cursive">Perpustakaan Warga RW. 17</h1>
      <div class="content">
        <h4 class="motto">Selamat Datang</h4>
      </div>
    </div>
    <div class="footer">
      <div class="container">Doni Firmansyah</div>
    </div>
  </div>
  <!-- END main -->
  <!-- START modal (pop up masuk dan daftar) -->
  <div class="modal fade login" id="loginModal">
    <div class="modal-dialog login animated ">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">Masuk Akun</h4>
        </div>
        <div class="modal-body">
          <div class="box">
            <div class="content">
              <div class="error"></div>
              <div class="form loginBox">
                <form accept-charset="UTF-8">
                  <label for="loginUsername">Username</label>
                  <input id="loginUsername" class="form-control" type="text" name="username" required />
                  <label for="loginPassword">Password</label>
                  <input id="loginPassword" class="form-control" type="password" name="password" required />
                  <br />
                  <button id="input-login" class="btn btn-default btn-login" type="button" name="code" value="login">MASUK</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Loading-->
  <div class="modal fade" id="modalLoading" tabindex="-1" data-backdrop="static" data-keyboard="false" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row row-cols-1 justify-content-center text-center">
            <div class="col">
              <img src="./assets/img/loading.gif" width="100px">
            </div>
            <div class="col">
              <h1>Harap Tunggu</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END modal -->
  <script src="./assets/js/jquery-1.10.2.js" type="text/javascript"></script>
  <script src="./assets/js/bootstrap.min.js" type="text/javascript"></script>
  <script src="./assets/js/login.js" type="text/javascript"></script>
</body>

</html>