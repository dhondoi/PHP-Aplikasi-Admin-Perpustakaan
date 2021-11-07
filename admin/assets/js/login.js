$(document).ready(function () {
  function openLoginModal() {
    $('input[type="text"]').val("");
    $('input[type="password"]').val("");
    $(".error").removeClass("alert alert-danger").html("");
    setTimeout(function () {
      $("#loginModal").modal("show");
    }, 230);
  }
  function doLogin() {
    $("#loginModal").modal("hide");
    $("#modalLoading").modal("show");
    $(".error").removeClass("alert alert-danger").html("");
    $.post(
      "./api.php",
      {
        code: "login",
        username: $("#loginUsername").val(),
        password: $("#loginPassword").val(),
      },
      function (data) {
        //callback from server
        if (JSON.parse(data).success === 1) {
          setTimeout(function () {
            $("#modalLoading").modal("hide");
            setTimeout(function () {
              alert("Selamat Datang ".concat(JSON.parse(data).nm_admin));
              location.replace("./index.php");
            }, 400);
          }, 1000);
        } else {
          setTimeout(function () {
            $("#modalLoading").modal("hide");
            $("#loginModal").modal("show");
            shakeModal();
          }, 1000);
          //console.log(data);
        }
      }
    );
  }

  function shakeModal() {
    $("#loginModal .modal-dialog").addClass("shake");
    $(".error").addClass("alert alert-danger").html("Kombinasi username/password tidak sesuai");
    $('input[type="password"]').val("");
    setTimeout(function () {
      $("#loginModal .modal-dialog").removeClass("shake");
    }, 1000);
  }

  $("#a-login").on("click", openLoginModal);
  $("#input-login").on("click", doLogin);
});
