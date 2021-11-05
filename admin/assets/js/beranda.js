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
    $("#divContent").load("./content/anggota.php");
  });
  $("#aBuku").on("click", function () {
    $("#accordionSidebar li").removeClass("active");
    $("#accordionSidebar li:eq(1)").addClass("active");
    $("#divContent").load("./content/buku.php");
  });
  $("#aTransaksi").on("click", function () {
    $("#accordionSidebar li").removeClass("active");
    $("#accordionSidebar li:eq(2)").addClass("active");
    $("#divContent").load("./content/transaksi.php");
  });
  $("#aBantuan").on("click", function () {
    console.log("tes");
    $("#accordionSidebar li").removeClass("active");
    $("#accordionSidebar li:eq(3)").addClass("active");
    $("#divContent").load("./content/bantuan.php");
  });
  $("#aTentang").on("click", function () {
    console.log("tes");
    $("#accordionSidebar li").removeClass("active");
    $("#accordionSidebar li:eq(4)").addClass("active");
    $("#divContent").load("./content/tentang.php");
  });
  $("#aHome").on("click", function () {
    $("#accordionSidebar li").removeClass("active");
    $("#divContent").load("./content/beranda.php");
  });
});
