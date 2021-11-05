$(document).ready(async function () {
  //call method to get data table

  await refreshTable();
  window.print();
  //show modal

  //get data from server and show in table
  async function refreshTable() {
    await $("tbody").empty();
    await $.post(
      "./api.php",
      { code: "print data table transaksi" },
      function (data) {
        let no = 1;
        //save into table
        $.each(data, function (i, data) {
          $("tbody").append(/*html*/ `
              <tr class="font-weight-bold text-black">
                <td>${no++}</td>
                <td>${data.idtransaksi}</td>
                <td>${data.idanggota}</td>
                <td>${data.idbuku}</td>
                <td>${data.tglpinjam}</td>
                <td>${data.tglkembali}</td>
                <td>${data.tglselesai}</td>
                <td>${data.statuspinjam}</td>
              </tr>
            `);
        });
        $("#totalDataTransaksi").text("Total Data Transaksi " + (no-1));
      },
      //type object callback from server
      "json"
    );
  }
});
