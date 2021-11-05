<!-- start content -->
<div class="container-fluid">
    <h1 class="font-weight-bold text-dark my-5">Data Transaksi</h1>
    <p class="text-dark font-weight-bold" id="totalDataTransaksi"></p>
    <table class="table border border-dark border-3" id="dataTable">
        <thead>
            <tr class="font-weight-bold text-white bg-primary">
                <th >NO</th>
                <th >ID TRANSAKSI</th>
                <th >ID ANGGOTA</th>
                <th >ID BUKU</th>
                <th >TANGGAL PINJAM</th>
                <th >TANGGAL KEMBALI</th>
                <th >TANGGAL SELESAI</th>
                <th >STATUS</th>
            </tr>
        </thead>
        <tfoot class="font-weight-bold text-white bg-primary">
            <tr>
                <th >NO</th>
                <th >ID TRANSAKSI</th>
                <th >ID ANGGOTA</th>
                <th >ID BUKU</th>
                <th >TANGGAL PINJAM</th>
                <th >TANGGAL KEMBALI</th>
                <th >TANGGAL SELESAI</th>
                <th >STATUS</th>
            </tr>
        </tfoot>
        <tbody>
            <!-- here from mahasiswa.js -->
        </tbody>
    </table>
</div>
<!-- end content -->
<script src="./assets/js/print-transaksi.js"></script>