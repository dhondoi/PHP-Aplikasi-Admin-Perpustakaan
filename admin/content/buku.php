<!-- start content -->
<h1 class="font-weight-bold text-primary">Data Buku</h1>
<div class="row justify-content-end mb-3">
    <div class="col-auto">
        <button type="button" class="btn btn-primary font-weight-bold" id="btnPrintBuku"><i class="fas fa-print mr-2"></i>Cetak</button>
    </div>
    <div class="col-auto">
        <button type="button" class="btn btn-success font-weight-bold" id="btnAddBuku"><i class="fas fa-plus-circle mr-2"></i>Tambah Data</button>
    </div>

</div>
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
    <tbody>
        <!-- here from mahasiswa.js -->
    </tbody>
</table>
<!-- end content -->

<!-- start modal -->
<div class="modal fade" id="modalBuku" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-labelledby="labelExBuku" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title font-weight-bold text-primary" id="labelExBuku"></h5>
                <button type="button" class="close" id="btnCloseBuku">
                    X
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="idBuku" class="font-weight-bold text-primary">ID Buku</label>
                        <input type="text" class="form-control" id="idBuku" placeholder="ID Buku" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="judulBuku" class="font-weight-bold text-primary">Judul Buku</label>
                        <input type="text" class="form-control" id="judulBuku" placeholder="Judul Buku" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="kategoriBuku" class="font-weight-bold text-primary">Kategori</label>
                        <input type="text" class="form-control" id="kategoriBuku" placeholder="Kategori" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="pengarangBuku" class="font-weight-bold text-primary">Pengarang</label>
                        <input type="text" class="form-control" id="pengarangBuku" placeholder="Pengarang" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="penerbitBuku" class="font-weight-bold text-primary">Penerbit</label>
                        <input type="text" class="form-control" id="penerbitBuku" placeholder="Penerbit" readonly>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="btnExBuku1" type="button" class="btn font-weight-bold"></button>
                <button id="btnExBuku2" type="button" class="btn font-weight-bold"></button>
            </div>
        </div>
    </div>
</div>
<!-- end modal -->
<script src="./assets/js/buku.js"></script>