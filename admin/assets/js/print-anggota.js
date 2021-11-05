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
      { code: "print data table anggota" },
      function (data) {
        let no = 1;
        //save into table
        $.each(data, function (i, data) {
          $("tbody").append(/*html*/ `
              <tr class="font-weight-bold text-black">
                <td>${no++}</td>
                <td>${data.idanggota}</td>
                <td>${data.nama}</td>
                <td>${data.jeniskelamin}</td>
                <td>${data.alamat}</td>
                <td><img src="./assets/img/anggota/${data.foto}" width="10%"></td>
              </tr>
            `);
        });
        $("#totalDataAnggota").text("Total Data Anggota " + (no - 1));
      },
      //type object callback from server
      "json"
    );
  }
});
