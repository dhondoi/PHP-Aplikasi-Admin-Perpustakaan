$(document).ready(function () {
  //call method to get data table

  refreshTable();

  //show modal
  $(document).on("click", async function (a) {
    //get data from data base, then insert in form
    if (a.target.id == "btnDetailBuku") {
      $("#modalLoading").modal("show");
      $("#labelExBuku").html("Detail Buku");
      $("#btnExBuku1").html("Ubah").addClass("btn-warning");
      $("#btnExBuku2").html("Hapus").addClass("btn-danger");
      await $.post(
        "./api.php",
        { code: "get data buku", id: a.target.value },
        function (data) {
          // save into form
          $("#idBuku").attr("value", data.id);
          $("#judulBuku").attr("value", data.judul);
          $("#kategoriBuku").attr("value", data.kategori);
          $("#pengarangBuku").attr("value", data.pengarang);
          $("#penerbitBuku").attr("value", data.penerbit);
        },
        //type object callback from server
        "json"
      );
      setTimeout(function () {
        $("#modalLoading").modal("hide");
        setTimeout(function () {
          $("#modalBuku").modal("show");
        }, 300);
      }, 1000);
    } else if (a.target.id == "btnAddBuku") {
      $("#labelExBuku").html("Tambah Data Buku");
      $("#idBuku,#judulBuku,#kategoriBuku,#pengarangBuku,#penerbitBuku").prop("readonly", false);
      // change color and name of button
      $("#btnExBuku1").html("Save").addClass("btn-success");
      $("#btnExBuku2").html("Reset").addClass("btn-info");
      $("#modalBuku").modal("show");
    }
  });

  // button ubah in modal do something
  $("#btnExBuku1").on("click", function () {
    if ($(this).text() == "Ubah") {
      $("#labelExBuku").html("Ubah Data Buku");
      // remove attribute readonly and disabled from element
      $("#judulBuku,#kategoriBuku,#pengarangBuku,#penerbitBuku").prop("readonly", false);
      // change color and name of button
      $(this).html("Simpan").removeClass("btn-warning").addClass("btn-success");
      $("#btnExBuku2").html("Batal").removeClass("btn-danger").addClass("btn-info");
    } else if ($(this).text() == "Simpan") {
      updateData();
    } else if ($(this).text() == "Save") {
      insertData();
    }
  });

  // button X in modal do something
  $("#btnCloseBuku").on("click", resetModal);

  //button hapus in modal do something
  $("#btnExBuku2").on("click", function () {
    if ($(this).text() === "Hapus") {
      const status = confirm("Hapus Data Buku Dengan ID " + $("#idBuku").val() + " ?");
      if (status === true) {
        $("#modalBuku").modal("hide");
        $("#modalLoading").modal("show");
        $.post(
          "./api.php",
          { code: "delete data buku", id: $("#idBuku").val() },
          async function (data) {
            //callback from server
            if (data.success === 1) {
              await refreshTable();
              resetModal();
              setTimeout(function () {
                $("#modalLoading").modal("hide");
                setTimeout(function () {
                  alert("Data Buku Berhasil Dihapus");
                }, 300);
              }, 1000);
            } else {
              setTimeout(function () {
                $("#modalLoading").modal("hide");
                setTimeout(function () {
                  alert("Data Buku Gagal Dihapus");
                  $("#modalBuku").modal("show");
                }, 300);
              }, 1000);
            }
          },
          //type object callback from server
          "json"
        );
      }
    } else if ($(this).text() == "Batal") {
      $("#labelExBuku").html("Detail Buku");
      $("#btnExBuku1").html("Ubah").removeClass("btn-success").addClass("btn-warning");
      $("#btnExBuku2").html("Hapus").removeClass("btn-info").addClass("btn-danger");
      $("#judulBuku,#kategoriBuku,#pengarangBuku,#penerbitBuku").prop("readonly", true);
    } else if ($(this).text() == "Reset") {
      $("form").trigger("reset");
    }
  });

  //back to first code created from modal
  function resetModal() {
    $("#labelExBuku").html("");
    $("#idBuku,#judulBuku,#kategoriBuku,#pengarangBuku,#penerbitBuku").removeAttr("value").prop("readonly", true);
    $("#btnExBuku1").html("").removeClass("btn-success").removeClass("btn-warning");
    $("#btnExBuku2").html("").removeClass("btn-info").removeClass("btn-danger");
    $("#modalBuku").modal("hide");
    $("form").trigger("reset");
  }

  //get data from server and show in table
  async function refreshTable() {
    await $("#tableBuku").DataTable().clear().destroy();
    await $("tbody").empty();
    await $.post(
      "./api.php",
      { code: "get data table buku" },
      function (data) {
        let no = 1;
        //save into table
        $.each(data, function (i, data) {
          $("tbody").append(/*html*/ `
              <tr class="font-weight-bold text-black">
                <td>${no++}</td>
                <td>${data.id}</td>
                <td>${data.judul}</td>
                <td>${data.kategori}</td>
                <td><button type="button" id="btnDetailBuku" class="btn btn-info font-weight-bold" value="${data.id}"><i class="fas fa-info-circle mr-2"></i>Detail</button></td>
              </tr>
            `);
        });
      },
      //type object callback from server
      "json"
    );
    $("#tableBuku").DataTable();
  }

  function checkForm() {
    if (
      $("#idBuku").val().trim().length !== 0 &&
      $("#judulBuku").val().trim().length !== 0 &&
      $("#kategoriBuku").val().trim().length !== 0 &&
      $("#pengarangBuku").val().trim().length !== 0 &&
      $("#penerbitBuku").val().trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  async function insertData() {
    if (checkForm()) {
      const status = confirm("Simpan Penambahan Data?");
      if (status == true) {
        $("#modalBuku").modal("hide");
        $("#modalLoading").modal("show");
        await $.post(
          "./api.php",
          {
            code: "add data buku",
            id: $("#idBuku").val().toUpperCase(),
            judul: $("#judulBuku").val(),
            kategori: $("#kategoriBuku").val(),
            pengarang: $("#pengarangBuku").val(),
            penerbit: $("#penerbitBuku").val(),
          },
          async function (data) {
            //callback from server
            if (data.success === 1) {
              await refreshTable();
              resetModal();
              setTimeout(function () {
                $("#modalLoading").modal("hide");
                setTimeout(function () {
                  alert("Data Buku Berhasil Ditambah");
                }, 300);
              }, 1000);
            } else {
              setTimeout(function () {
                $("#modalLoading").modal("hide");
                setTimeout(function () {
                  alert("Data Buku Gagal Ditambah (ID Sudah Dipakai)");
                  $("#modalBuku").modal("show");
                }, 300);
              }, 1000);
            }
          },
          "json"
        );
      }
    } else {
      alert("Harap Diisi");
    }
  }

  function updateData() {
    if (checkForm()) {
      const status = confirm("Simpan Perubahan Data?");
      if (status == true) {
        $("#modalBuku").modal("hide");
        $("#modalLoading").modal("show");
        $.post(
          "./api.php",
          {
            code: "update data buku",
            id: $("#idBuku").val(),
            judul: $("#judulBuku").val(),
            kategori: $("#kategoriBuku").val(),
            pengarang: $("#pengarangBuku").val(),
            penerbit: $("#penerbitBuku").val(),
          },
          async function (data) {
            await refreshTable();
            resetModal();
            setTimeout(function () {
              $("#modalLoading").modal("hide");
              setTimeout(function () {
                alert("Data Buku Berhasil Diubah");
              }, 300);
            }, 1000);
          },
          //type object callback from server
          "json"
        );
      }
    } else {
      alert("Harap Diisi");
    }
  }
  $("#btnPrintBuku").on("click", function () {
    $("#modalLoading").modal("show");
    setTimeout(function () {
      $("body").load("./content/print-buku.php");
      $("#modalLoading").modal("hide");
    }, 1000);
  });
});
