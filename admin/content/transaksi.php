<!-- start content -->
<h1 class="font-weight-bold text-primary">Data Transaksi</h1>
<div class="row justify-content-end mb-3">
    <div class="col-auto">
        <button type="button" class="btn btn-primary font-weight-bold" id="btnPrintTransaksi"><i class="fas fa-print mr-2"></i>Cetak</button>
    </div>
    <div class="col-auto">
        <button type="button" class="btn btn-success font-weight-bold" id="btnAddTransaksi"><i class="fas fa-plus-circle mr-2"></i>Tambah Data</button>
    </div>
</div>
<table class="table border border-dark border-3" id="tableTransaksi">
    <thead class="bg-primary">
        <tr>
            <th scope="col" class="text-white">ID TRANSAKSI</th>
            <th scope="col" class="text-white">ID ANGGOTA</th>
            <th scope="col" class="text-white">ID BUKU</th>
            <th scope="col" class="text-white">STATUS</th>
            <th scope="col" class="text-white"></th>
        </tr>
    </thead>
    <tfoot class="bg-primary">
        <tr>
            <th scope="col" class="text-white">ID TRANSAKSI</th>
            <th scope="col" class="text-white">ID ANGGOTA</th>
            <th scope="col" class="text-white">ID BUKU</th>
            <th scope="col" class="text-white">STATUS</th>
            <th scope="col" class="text-white"></th>
        </tr>
    </tfoot>
    <tbody id="tBodyTransaksi">
    </tbody>
</table>
<!-- end content -->

<!-- start modal transaksi-->
<div class="modal fade" id="modalTransaksi" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-labelledby="labelJudulEx" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title font-weight-bold text-primary" id="labelJudulEx"></h5>
                <button type="button" class="close" id="btnCloseFormTransaksi">
                    X
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3" id="divIDtransaksi">
                        <label for="editTextTransaksi" class="font-weight-bold text-primary">ID Transaksi</label>
                        <input type="text" class="form-control" id="editTextTransaksi" placeholder="ID Transaksi" readonly>
                    </div>
                    <div class="mb-3 row row-cols-3">
                        <div class="col">
                            <label for="editTextAnggota" class="font-weight-bold text-primary">ID Anggota</label>
                            <input type="text" class="form-control" id="editTextAnggota" placeholder="ID Anggota" readonly>
                        </div>
                        <div class="col">
                            <label for="editTextNamaAnggota" class="font-weight-bold text-primary">Nama Anggota</label>
                            <input type="text" class="form-control" id="editTextNamaAnggota" placeholder="Nama Anggota" readonly>
                        </div>
                        <div class="col">
                            <label for="btnGetAnggota" class="d-block font-weight-bold text-primary">Pilih Data Anggota</label>
                            <button id="btnGetAnggota" type="button" class="w-100 btn font-weight-bold btn-info">CARI ANGGOTA</button>
                        </div>
                    </div>
                    <div class="mb-3 row row-cols-3">
                        <div class="col">
                            <label for="editTextBuku" class="font-weight-bold text-primary">ID Buku</label>
                            <input type="text" class="form-control" id="editTextBuku" placeholder="ID Buku" readonly>
                        </div>
                        <div class="col">
                            <label for="editTextNamaBuku" class="font-weight-bold text-primary">Nama Buku</label>
                            <input type="text" class="form-control" id="editTextNamaBuku" placeholder="Nama Buku" readonly>
                        </div>
                        <div class="col">
                            <label for="btnGetBuku" class="d-block font-weight-bold text-primary">Pilih Data Buku</label>
                            <button id="btnGetBuku" type="button" class="w-100 btn font-weight-bold btn-info">CARI BUKU</button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="editTextTglPinjam" class="font-weight-bold text-primary">Tanggal Pinjam</label>
                        <input type="date" class="form-control" id="editTextTglPinjam" placeholder="Tanggal Pinjam" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="editTextTglKembali" class="font-weight-bold text-primary">Tanggal Kembali</label>
                        <input type="date" class="form-control" id="editTextTglKembali" placeholder="Tanggal Kembali" readonly>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="btnExTransaksi1" type="button" class="btn font-weight-bold btn-success">SIMPAN</button>
            </div>
        </div>
    </div>
</div>
<!-- end modal -->
<!-- start modal anggota -->
<div class="modal fade bg-primary" id="modalAnggota" tabindex="-1" data-backdrop="static" data-keyboard="false" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <table class="table border border-dark border-3" id="tableAnggota">
                    <thead class="bg-primary">
                        <tr>
                            <th scope="col" class="text-white">NO</th>
                            <th scope="col" class="text-white">ID ANGGOTA</th>
                            <th scope="col" class="text-white">NAMA LENGKAP</th>
                            <th scope="col" class="text-white"></th>
                        </tr>
                    </thead>
                    <tfoot class="bg-primary">
                        <tr>
                            <th scope="col" class="text-white">NO</th>
                            <th scope="col" class="text-white">ID ANGGOTA</th>
                            <th scope="col" class="text-white">NAMA LENGKAP</th>
                            <th scope="col" class="text-white"></th>
                        </tr>
                    </tfoot>
                    <tbody id="tBodyAnggota">
                        <!-- here from mahasiswa.js -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- end modal anggota -->
<!-- start modal buku-->
<div class="modal fade bg-primary" id="modalBuku" tabindex="-1" data-backdrop="static" data-keyboard="false" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <table class="table border border-dark border-3" id="tableBuku">
                    <thead class="bg-primary">
                        <tr>
                            <th scope="col" class="text-white">NO</th>
                            <th scope="col" class="text-white">ID BUKU</th>
                            <th scope="col" class="text-white">JUDUL</th>
                            <th scope="col" class="text-white">KATEGORI</th>
                            <th scope="col" class="text-white"></th>
                        </tr>
                    </thead>
                    <tfoot class="bg-primary">
                        <tr>
                            <th scope="col" class="text-white">NO</th>
                            <th scope="col" class="text-white">ID BUKU</th>
                            <th scope="col" class="text-white">JUDUL</th>
                            <th scope="col" class="text-white">KATEGORI</th>
                            <th scope="col" class="text-white"></th>
                        </tr>
                    </tfoot>
                    <tbody id="tBodyBuku">
                        <!-- here from mahasiswa.js -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- end modal buku-->
<script src="./assets/js/transaksi.js"></script>