$(document).ready(function () {
  //call method to get data table

  refreshTable();

  //show modal
  $(document).on("click", async function (a) {
    //get data from data base, then insert in form
    if (a.target.id == "no_regis") {
      $("#modalLoading").modal("show");
      $("#staticBackdropLabel").html("Detail Anggota");
      $("#modal-btn-ubah").html("Ubah").addClass("btn-warning");
      $("#modal-btn-hapus").html("Hapus").addClass("btn-danger");
      await $.post(
        "./api.php",
        { code: "get data anggota", no_registrasi: a.target.value },
        function (data) {
          // save into form
          $("#noregis").attr("value", data.id);
          $("#nama").attr("value", data.nama);
          if (data.jk == "Pria") {
            $("#pria").prop("checked", true);
          } else {
            $("#wanita").prop("checked", true);
          }
          $("#alamat").html(data.alamat);
          $("#myImg").attr("src", "./assets/img/anggota/" + data.foto);
        },
        //type object callback from server
        "json"
      );
      setTimeout(function () {
        $("#modalLoading").modal("hide");
        setTimeout(function () {
          $("#staticBackdrop").modal("show");
        }, 300);
      }, 1000);
    } else if (a.target.id == "btn-add-data") {
      $("#staticBackdropLabel").html("Tambah Data Anggota");
      $("#noregis,#nama,#alamat").prop("readonly", false);
      $("#pria,#wanita").prop("disabled", false);
      $("#file").prop("disabled", false);
      // change color and name of button
      $("#modal-btn-ubah").html("Save").addClass("btn-success");
      $("#modal-btn-hapus").html("Reset").addClass("btn-info");
    }
  });

  // button ubah in modal do something
  $("#modal-btn-ubah").on("click", function () {
    if ($(this).text() == "Ubah") {
      $("#staticBackdropLabel").html("Ubah Data Anggota");
      // remove attribute readonly and disabled from element
      $("#nama,#alamat").prop("readonly", false);
      $("#pria,#wanita").prop("disabled", false);
      $("#file").prop("disabled", false);
      // change color and name of button
      $(this).html("Simpan").removeClass("btn-warning").addClass("btn-success");
      $("#modal-btn-hapus").html("Batal").removeClass("btn-danger").addClass("btn-info");
    } else if ($(this).text() == "Simpan") {
      updateData();
    } else if ($(this).text() == "Save") {
      insertData();
    }
  });

  // button X in modal do something
  $("#modal-btn-x").on("click", resetModal);

  //button hapus in modal do something
  $("#modal-btn-hapus").on("click", function () {
    if ($(this).text() === "Hapus") {
      const status = confirm("Hapus Data Anggota Dengan ID " + $("#noregis").val() + " ?");
      if (status === true) {
        $("#staticBackdrop").modal("hide");
        $("#modalLoading").modal("show");
        $.post(
          "./api.php",
          { code: "delete data anggota", id: $("#noregis").val() },
          async function (data) {
            //callback from server
            if (data.success === 1) {
              await refreshTable();
              resetModal();
              setTimeout(function () {
                $("#modalLoading").modal("hide");
                setTimeout(function () {
                  alert("Data Anggota Berhasil Dihapus");
                }, 300);
              }, 1000);
            }
          },
          //type object callback from server
          "json"
        );
      }
    } else if ($(this).text() == "Batal") {
      $("#staticBackdropLabel").html("Detail Anggota");
      $("#modal-btn-ubah").html("Ubah").removeClass("btn-success").addClass("btn-warning");
      $("#modal-btn-hapus").html("Hapus").removeClass("btn-info").addClass("btn-danger");
      $("#nama,#alamat").prop("readonly", true);
      $("#pria,#wanita").prop("disabled", true);
      $("#file").prop("disabled", true);
    } else if ($(this).text() == "Reset") {
      $("form").trigger("reset");
      $("#myImg").removeAttr("src");
    }
  });

  //back to first code created from modal
  function resetModal() {
    $("#staticBackdropLabel").html("");
    $("#noregis,#nama,#alamat").removeAttr("value").prop("readonly", true);
    $("#alamat").removeAttr("value").empty();
    $("#pria,#wanita").prop("checked", false).prop("disabled", true);
    $("#file").prop("disabled", true).val("");
    $("#myImg").removeAttr("src");
    $("#modal-btn-ubah").html("").removeClass("btn-success").removeClass("btn-warning");
    $("#modal-btn-hapus").html("").removeClass("btn-info").removeClass("btn-danger");
    $("#staticBackdrop").modal("hide");
    $("form").trigger("reset");
  }

  //get data from server and show in table
  async function refreshTable() {
    await $("#dataTable").DataTable().clear().destroy();
    await $("tbody").empty();
    await $.post(
      "./api.php",
      { code: "get data table anggota" },
      function (data) {
        let no = 1;
        //save into table
        $.each(data, function (i, data) {
          $("tbody").append(/*html*/ `
              <tr class="font-weight-bold text-black">
                <td>${no++}</td>
                <td>${data.id}</td>
                <td>${data.nama}</td>
                <td><button type="button" id="no_regis" class="btn btn-info font-weight-bold" value="${data.id}"><i class="fas fa-info-circle mr-2"></i>Detail</button></td>
              </tr>
            `);
        });
      },
      //type object callback from server
      "json"
    );
    $("#dataTable").DataTable();
  }

  function checkForm(params) {
    if (params === "simpan") {
      if (
        $("#noregis").val().trim().length !== 0 &&
        $("#nama").val().trim().length !== 0 &&
        $("#alamat").val().trim().length !== 0 &&
        $("#file")[0].files.length !== 0 &&
        ($("#pria").is(":checked") || $("#wanita").is(":checked"))
      ) {
        return true;
      } else {
        return false;
      }
    } else if (params === "ubah") {
      if ($("#noregis").val().trim().length !== 0 && $("#nama").val().trim().length !== 0 && $("#alamat").val().trim().length !== 0 && ($("#pria").is(":checked") || $("#wanita").is(":checked"))) {
        return true;
      } else {
        return false;
      }
    }
  }

  async function insertData() {
    if (checkForm("simpan")) {
      const status = confirm("Simpan Penambahan Data?");
      if (status == true) {
        $("#staticBackdrop").modal("hide");
        $("#modalLoading").modal("show");
        const no_registrasi = $("#noregis").val().toUpperCase();
        const nama = $("#nama").val();
        const alamat = $("#alamat").val();
        let jenis_kelamin;
        if ($("#pria:checked").val()) jenis_kelamin = "Pria";
        else jenis_kelamin = "Wanita";
        await $.post(
          "./api.php",
          {
            code: "add data anggota",
            id: no_registrasi,
            nama: nama,
            alamat: alamat,
            jk: jenis_kelamin,
          },
          async function (data) {
            //callback from server
            if (data.success === 1) {
              await uploadImage();
              await refreshTable();
              resetModal();
              setTimeout(function () {
                $("#modalLoading").modal("hide");
                setTimeout(function () {
                  alert("Data Anggota Berhasil Ditambah");
                }, 300);
              }, 1000);
            } else {
              setTimeout(function () {
                $("#modalLoading").modal("hide");
                setTimeout(function () {
                  alert("Data Anggota Gagal Ditambah (ID Sudah Dipakai)");
                  $("#staticBackdrop").modal("show");
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
    if (checkForm("ubah")) {
      const status = confirm("Simpan Perubahan Data?");
      if (status == true) {
        $("#staticBackdrop").modal("hide");
        $("#modalLoading").modal("show");
        const no_registrasi = $("#noregis").val();
        const nama = $("#nama").val();
        const alamat = $("#alamat").val();
        let jenis_kelamin;
        if ($("#pria:checked").val()) jenis_kelamin = "Pria";
        else jenis_kelamin = "Wanita";
        $.post(
          "./api.php",
          {
            code: "update data anggota",
            id: no_registrasi,
            nama: nama,
            alamat: alamat,
            jenis_kelamin: jenis_kelamin,
          },
          async function (data) {
            await uploadImage();
            await refreshTable();
            resetModal();
            setTimeout(function () {
              $("#modalLoading").modal("hide");
              setTimeout(function () {
                alert("Data Anggota Berhasil Diubah");
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

  async function uploadImage() {
    let fd = new FormData();
    let files = $("#file")[0].files;

    // Check file selected or not
    if (files.length !== 0) {
      fd.append("file", files[0]);
      fd.append("code", "add data anggota");
      fd.append("id", $("#noregis").val().toUpperCase());

      await $.ajax({
        url: "./api.php",
        type: "post",
        data: fd,
        contentType: false,
        processData: false,
      });
    }
  }

  $("#file").on("change", function () {
    const myimg = document.getElementById("myImg");
    const input = document.getElementById("file");
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        myimg.src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      myimg.src = "";
    }
  });

  $("#btnPrintAnggota").on("click", function () {
    $("#modalLoading").modal("show");
    setTimeout(function () {
      $("body").load("./content/print-anggota.php");
      $("#modalLoading").modal("hide");
    }, 1000);
  });
});
