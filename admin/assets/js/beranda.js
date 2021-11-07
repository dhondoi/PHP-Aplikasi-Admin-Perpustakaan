$(document).ready(function () {
  //$("#divContent").load("./content/beranda.php");
  //   $("#modalLoading").modal("show");
  //   setTimeout(function () {
  //     $("#modalLoading").modal("hide");
  //   }, 3000);
  $("#divContent").load("./content/beranda.php");

  $("#aAnggota").on("click", function () {
    $("#accordionSidebar li").removeClass("active");
    $("#accordionSidebar li:eq(0)").addClass("active");
    $("#modalLoading").modal("show");
    setTimeout(function () {
      $("#divContent").load("./content/anggota.php");
      $("#modalLoading").modal("hide");
    }, 1000);
  });
  $("#aBuku").on("click", function () {
    $("#accordionSidebar li").removeClass("active");
    $("#accordionSidebar li:eq(1)").addClass("active");
    $("#modalLoading").modal("show");
    setTimeout(function () {
      $("#divContent").load("./content/buku.php");
      $("#modalLoading").modal("hide");
    }, 1000);
  });
  $("#aTransaksi").on("click", function () {
    $("#accordionSidebar li").removeClass("active");
    $("#accordionSidebar li:eq(2)").addClass("active");
    $("#modalLoading").modal("show");
    setTimeout(function () {
      $("#divContent").load("./content/transaksi.php");
      $("#modalLoading").modal("hide");
    }, 1000);
  });
  $("#aBantuan").on("click", function () {
    $("#accordionSidebar li").removeClass("active");
    $("#accordionSidebar li:eq(3)").addClass("active");
    $("#modalLoading").modal("show");
    setTimeout(function () {
      $("#divContent").load("./content/bantuan.php");
      $("#modalLoading").modal("hide");
    }, 1000);
  });
  $("#aTentang").on("click", function () {
    $("#accordionSidebar li").removeClass("active");
    $("#accordionSidebar li:eq(4)").addClass("active");
    $("#modalLoading").modal("show");
    setTimeout(function () {
      $("#divContent").load("./content/tentang.php");
      $("#modalLoading").modal("hide");
    }, 1000);
  });
  $("#aHome").on("click", function () {
    $("#accordionSidebar li").removeClass("active");
    $("#modalLoading").modal("show");
    setTimeout(function () {
      $("#divContent").load("./content/beranda.php");
      $("#modalLoading").modal("hide");
    }, 1000);
  });
});
