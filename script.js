document.addEventListener("DOMContentLoaded", () => {
    const peminjamanTable = document.getElementById("peminjamanTable");
    const peminjamanForm = document.getElementById("peminjamanForm");
    let peminjamanData = [];

    if (peminjamanForm) {
        peminjamanForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nama = document.getElementById("namaPeminjam").value;
            const alamat = document.getElementById("alamat").value;
            const namaPetugas = document.getElementById("namaPetugas").value;
            const kelas = document.getElementById("kelasPeminjam").value;
            const barang = document.getElementById("barangDipinjam").value;
            const jumlahBarang = document.getElementById("jumlahBarang").value;
            const jam = document.getElementById("jamPeminjaman").value;

            peminjamanData.push({ nama, alamat, namaPetugas, kelas, barang, jumlahBarang, jam });
            renderPeminjaman();
            peminjamanForm.reset();
        });

        function renderPeminjaman() {
            peminjamanTable.innerHTML = "";
            peminjamanData.forEach((item, index) => {
                const row = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.nama}</td>
                        <td>${item.alamat}</td>
                        <td>${item.namaPetugas}</td>
                        <td>${item.kelas}</td>
                        <td>${item.barang}</td>
                        <td>${item.jumlahBarang}</td>
                        <td>${item.jam}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="editPeminjaman(${index})">Edit</button>
                            <button class="btn btn-success btn-sm" onclick="printStruk(${index})">Cetak Struk</button>
                            <button class="btn btn-danger btn-sm" onclick="deletePeminjaman(${index})">Hapus</button>
                        </td>
                    </tr>
                `;
                peminjamanTable.innerHTML += row;
            });
        }

        window.deletePeminjaman = function (index) {
            peminjamanData.splice(index, 1);
            renderPeminjaman();
        };

        window.editPeminjaman = function (index) {
            const item = peminjamanData[index];
            document.getElementById("namaPeminjam").value = item.nama;
            document.getElementById("alamat").value = item.alamat;
            document.getElementById("namaPetugas").value = item.namaPetugas;
            document.getElementById("kelasPeminjam").value = item.kelas;
            document.getElementById("barangDipinjam").value = item.barang;
            document.getElementById("jumlahBarang").value = item.jumlahBarang;
            document.getElementById("jamPeminjaman").value = item.jam;

            peminjamanData.splice(index, 1);
            renderPeminjaman();
        };

        window.printStruk = function (index) {
            const item = peminjamanData[index];
        
            const strukData = {
                namaPeminjam: item.nama, 
                alamat: item.alamat, 
                namaPetugas: item.namaPetugas,
                kelas: item.kelas,
                barang: item.barang,
                jumlahBarang: item.jumlahBarang,
                jam: item.jam,
            };

            localStorage.setItem("strukData", JSON.stringify(strukData));
        
            window.location.href = "struk.html";
        };
        
            localStorage.setItem("strukData", JSON.stringify(strukData));

            window.location.href = "struk.html";
        };
        
            localStorage.setItem("strukData", JSON.stringify(strukData));

            window.location.href = "struk.html";
        }
        
)
