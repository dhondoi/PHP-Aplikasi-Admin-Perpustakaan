<!-- start content -->
<h1 class="font-weight-bold text-primary">Data Anggota</h1>
<div class="row justify-content-end mb-3">
    <div class="col-auto">
        <button type="button" class="btn btn-primary font-weight-bold" id="btnPrintAnggota"><i class="fas fa-print mr-2"></i>Cetak</button>
    </div>
    <div class="col-auto">
        <button type="button" class="btn btn-success font-weight-bold" id="btn-add-data" data-toggle="modal" data-target="#staticBackdrop"><i class="fas fa-plus-circle mr-2"></i>Tambah Data</button>
    </div>

</div>
<table class="table border border-dark border-3" id="dataTable">
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
    <tbody>
        <!-- here from mahasiswa.js -->
    </tbody>
</table>
<!-- end content -->

<!-- start modal -->
<div class="modal fade" id="staticBackdrop" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title font-weight-bold text-primary" id="staticBackdropLabel"></h5>
                <button type="button" class="close" id="modal-btn-x">
                    X
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="noregis" class="font-weight-bold text-primary">ID Anggota</label>
                        <input type="text" class="form-control" id="noregis" placeholder="ID Anggota" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="nama" class="font-weight-bold text-primary">Nama Lengkap</label>
                        <input type="text" class="form-control" id="nama" placeholder="Nama Lengkap" readonly>
                    </div>
                    <div class="mb-3 ps-2">
                        <div class="font-weight-bold text-primary">Jenis Kelamin</div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="jenis_kelamin" id="pria" disabled>
                            <label class="form-check-label" for="pria">
                                Pria
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="jenis_kelamin" id="wanita" disabled>
                            <label class="form-check-label" for="wanita">
                                Wanita
                            </label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="alamat" class="font-weight-bold text-primary">Alamat</label>
                        <textarea class="form-control" id="alamat" placeholder="Alamat" style="height: 200px;" readonly></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="file" class="font-weight-bold text-primary">Foto</label>
                        <input type="file" class="form-control-file" id="file" name="file" accept=".jpg" disabled>
                    </div>
                    <div class="mb-3">
                        <img class="img-thumbnail" id="myImg">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="modal-btn-ubah" type="button" class="btn font-weight-bold"></button>
                <button id="modal-btn-hapus" type="button" class="btn font-weight-bold"></button>
            </div>
        </div>
    </div>
</div>
<!-- end modal -->
<script src="./assets/js/anggota.js"></script>