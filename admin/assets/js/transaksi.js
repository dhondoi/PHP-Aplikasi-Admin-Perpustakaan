//call method to get data table
$(document).ready(function () {
  // inisial variable
  (() => {
    const tableTransaksi = $("#tableTransaksi");
    const tableAnggota = $("#tableAnggota");
    const tableBuku = $("#tableBuku");
    const tBodyTransaksi = $("#tBodyTransaksi");
    const tBodyAnggota = $("#tBodyAnggota");
    const tBodyBuku = $("#tBodyBuku");
    const modalTransaksi = $("#modalTransaksi");
    const modalAnggota = $("#modalAnggota");
    const modalBuku = $("#modalBuku");
    const modalLoading = $("#modalLoading");
    const labelJudulEx = $("#labelJudulEx");
    const btnCloseFormTransaksi = $("#btnCloseFormTransaksi");
    const btnGetAnggota = $("#btnGetAnggota");
    const btnGetBuku = $("#btnGetBuku");
    const btnPrintTransaksi = $("#btnPrintTransaksi");
    const btnExTransaksi1 = $("#btnExTransaksi1");
    const editTextTransaksi = $("#editTextTransaksi");
    const editTextAnggota = $("#editTextAnggota");
    const editTextNamaAnggota = $("#editTextNamaAnggota");
    const editTextBuku = $("#editTextBuku");
    const editTextNamaBuku = $("#editTextNamaBuku");
    const editTextTglPinjam = $("#editTextTglPinjam");
    const editTextTglKembali = $("#editTextTglKembali");
    const divIDtransaksi = $("#divIDtransaksi");
    const form = $("form");
    const body = $("body");
    // nama perform
    const click = "click";
    const show = "show";
    const hide = "hide";
    const reset = "reset";
    // value atribut
    const d_none = "d-none";

    const btnDetailTransaksi = "btnDetailTransaksi";
    const btnAddTransaksi = "btnAddTransaksi";
    const btnPilihAnggota = "btnPilihAnggota";
    const btnPilihBuku = "btnPilihBuku";
    // nama atribut
    const readonly = "readonly";
    const disabled = "disabled";

    const mValue = "value";

    // nama label

    const pinjam = "Pinjam";

    const titleAdd = "Tambah Data Transaksi";
    const titleDetail = "Selesai Transaksi";

    const harapDiisi = "Harap Diisi";
    const questionAdd = "Simpan Penambahan Data?";
    const successAdd = "Data Transaksi Berhasil Ditambah";
    const failAdd = "Data Transaksi Gagal Ditambah";
    const questionFinish = "Buku Sudah Dikembalikan?";
    const successFinish = "Buku Telah Dikembalikan";
    const failFinish = "Kesalahan Data";
    // configuration request data
    const url = "./api.php";
    const urlPrint = "./content/print-transaksi.php";
    const getDataTabel = "get data table transaksi";
    const getDataForm = "get data transaksi";
    const insertDataTransaksi = "add data transaksi";
    const updateDataTransaksi = "update data transaksi";
    const getDataTableAnggota = "get data table anggota";
    const getDataTableBuku = "get data table buku";
    const json = "json";

    //button close form
    btnCloseFormTransaksi.on(click, function () {
      hideForm();
    });

    btnExTransaksi1.on(click, async function () {
      if (labelJudulEx.html() === titleAdd) {
        if (checkFormTransaksi()) {
          addDataTransaksi();
        }
      } else if (labelJudulEx.html() === titleDetail) {
        const status = confirm(questionFinish);
        if (status == true) {
          modalTransaksi.modal(hide);
          modalLoading.modal(show);
          await $.post(
            url,
            {
              code: updateDataTransaksi,
              idtransaksi: editTextTransaksi.val().trim(),
            },
            async function (data) {
              //callback from server
              if (JSON.parse(data.success) === 1) {
                await refreshTable();
                hideForm();
                setTimeout(function () {
                  modalLoading.modal(hide);
                  setTimeout(function () {
                    alert(successFinish);
                  }, 300);
                }, 1000);
              } else {
                setTimeout(function () {
                  modalLoading.modal(hide);
                  setTimeout(function () {
                    alert(failFinish);
                    modalTransaksi.modal(show);
                  }, 300);
                }, 1000);
              }
            },
            json
          );
        }
      }
    });

    // cari data anggota
    btnGetAnggota.on(click, async function () {
      tableAnggota.DataTable().clear().destroy();
      await tBodyAnggota.empty();
      await $.post(
        url,
        { code: getDataTableAnggota },
        function (data) {
          let no = 1;
          //save into table
          $.each(data, function (i, data) {
            tBodyAnggota.append(/*html*/ `
              <tr class="font-weight-bold text-black">
                <td>${no++}</td>
                <td>${data.id}</td>
                <td>${data.nama}</td>
                <td><button type="button" id="btnPilihAnggota" class="btn btn-info font-weight-bold" value="${data.id}"><i class="fas fa-info-circle mr-2"></i>Pilih</button></td>
              </tr>
            `);
          });
        },
        //type object callback from server
        json
      );
      tableAnggota.DataTable();
      modalAnggota.modal(show);
      $(document).on(click, function (params) {
        if (params.target.id === btnPilihAnggota) {
          let id = params.target.parentElement.parentElement.children[1].innerText;
          let nama = params.target.parentElement.parentElement.children[2].innerText;
          editTextAnggota.val(id);
          editTextNamaAnggota.val(nama);
          modalAnggota.modal(hide);
        }
      });
    });

    // cari data buku
    btnGetBuku.on(click, async function () {
      tableBuku.DataTable().clear().destroy();
      await tBodyBuku.empty();
      await $.post(
        url,
        { code: getDataTableBuku },
        function (data) {
          let no = 1;
          //save into table
          $.each(data, function (i, data) {
            tBodyBuku.append(/*html*/ `
              <tr class="font-weight-bold text-black">
                <td>${no++}</td>
                <td>${data.id}</td>
                <td>${data.judul}</td>
                <td>${data.kategori}</td>
                <td><button type="button" id="btnPilihBuku" class="btn btn-info font-weight-bold" value="${data.id}"><i class="fas fa-info-circle mr-2"></i>Pilih</button></td>
              </tr>
            `);
          });
        },
        //type object callback from server
        json
      );
      tableBuku.DataTable();
      modalBuku.modal(show);
      $(document).on(click, function (params) {
        if (params.target.id === btnPilihBuku) {
          let id = params.target.parentElement.parentElement.children[1].innerText;
          let nama = params.target.parentElement.parentElement.children[2].innerText;
          editTextBuku.val(id);
          editTextNamaBuku.val(nama);
          modalBuku.modal(hide);
        }
      });
    });

    //button detail and add
    $(document).on(click, async function (params) {
      if (params.target.id === btnDetailTransaksi) {
        modalLoading.modal(show);
        labelJudulEx.html(titleDetail);
        btnGetAnggota.prop(disabled, true);
        btnGetBuku.prop(disabled, true);
        await $.post(
          url,
          { code: getDataForm, id: params.target.value },
          function (data) {
            // save into form
            editTextTransaksi.attr(mValue, data.idtransaksi);
            editTextAnggota.attr(mValue, data.idanggota);
            editTextNamaAnggota.attr(mValue, data.namaanggota);
            editTextBuku.attr(mValue, data.idbuku);
            editTextNamaBuku.attr(mValue, data.judulbuku);
            editTextTglPinjam.attr(mValue, data.tglpinjam);
            editTextTglKembali.attr(mValue, data.tglkembali);
            setTimeout(function () {
              modalLoading.modal(hide);
              setTimeout(function () {
                modalTransaksi.modal(show);
              }, 300);
            }, 1000);
          },
          //type object callback from server
          json
        );
      } else if (params.target.id === btnAddTransaksi) {
        labelJudulEx.html(titleAdd);
        divIDtransaksi.addClass(d_none);
        editTextTglPinjam.prop(readonly, false);
        editTextTglKembali.prop(readonly, false);
        modalTransaksi.modal(show);
      }
    });

    // perform load table
    refreshTable();

    //get data table
    async function refreshTable() {
      await tableTransaksi.DataTable().clear().destroy();
      await tBodyTransaksi.empty();
      await $.post(
        url,
        { code: getDataTabel },
        function (data) {
          //save into table
          $.each(data, function (i, data) {
            tBodyTransaksi.append(/*html*/ `
              <tr class="font-weight-bold text-black">
                <td>${data.idtransaksi}</td>
                <td>${data.idanggota}</td>
                <td>${data.idbuku}</td>
                <td>${data.statuspinjam}</td>
                ${
                  data.statuspinjam === pinjam
                    ? '<td><button type="button" id="btnDetailTransaksi" class="btn btn-info font-weight-bold" value="' +
                      data.idtransaksi +
                      '"><i class="fas fa-info-circle mr-2"></i>Selesai</button></td>'
                    : "<td></td>"
                }
                
              </tr>
            `);
          });
        },
        //type object callback from server
        json
      );
      tableTransaksi.DataTable();
    }

    //check form
    function checkFormTransaksi() {
      if (editTextAnggota.val().trim().length !== 0 && editTextBuku.val().trim().length !== 0 && editTextTglPinjam.val().trim().length !== 0 && editTextTglKembali.val().trim().length !== 0) {
        return true;
      } else {
        alert(harapDiisi);
        return false;
      }
    }
    //add data to db
    async function addDataTransaksi() {
      const status = confirm(questionAdd);
      if (status == true) {
        modalTransaksi.modal(hide);
        modalLoading.modal(show);
        await $.post(
          url,
          {
            code: insertDataTransaksi,
            idanggota: editTextAnggota.val().trim(),
            idbuku: editTextBuku.val().trim(),
            tglpinjam: editTextTglPinjam.val().trim(),
            tglkembali: editTextTglKembali.val().trim(),
          },
          async function (data) {
            //callback from server
            if (data.success === 1) {
              await refreshTable();
              hideForm();
              setTimeout(function () {
                modalLoading.modal(hide);
                setTimeout(function () {
                  alert(successAdd);
                }, 300);
              }, 1000);
            } else {
              setTimeout(function () {
                modalLoading.modal(hide);
                setTimeout(function () {
                  alert(failAdd);
                  modalTransaksi.modal(hide);
                }, 300);
              }, 1000);
            }
          },
          json
        );
      }
    }

    // hide form
    function hideForm() {
      labelJudulEx.empty();
      form.trigger(reset);
      divIDtransaksi.removeAttr(mValue).removeClass(d_none);
      editTextAnggota.removeAttr(mValue).prop(readonly, true);
      editTextNamaAnggota.removeAttr(mValue).prop(readonly, true);
      btnGetAnggota.prop(disabled, false);
      editTextBuku.removeAttr(mValue).prop(readonly, true);
      editTextNamaBuku.removeAttr(mValue).prop(readonly, true);
      btnGetBuku.prop(disabled, false);
      editTextTglPinjam.removeAttr(mValue).prop(readonly, true);
      editTextTglKembali.removeAttr(mValue).prop(readonly, true);
      modalTransaksi.modal(hide);
    }

    btnPrintTransaksi.on(click, function () {
      modalLoading.modal(show);
      setTimeout(function () {
        body.load(urlPrint);
        modalLoading.modal(hide);
      }, 1000);
    });
  })();
});
