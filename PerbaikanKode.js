class Mahasiswa {
    constructor(nama, nim, nilai) 
    {
        this.nama = nama;  
        this.nim = nim;    
        let _nilai = nilai; 

        // Getter untuk mengakses value
        this.getNilai = () => 
        {
            return _nilai;
        };

        // Setter untuk update value dengan validasi
        this.setNilai = (nilaiBaru) => 
        {
            if (nilaiBaru >= 0 && nilaiBaru <= 100) 
            {
                _nilai = nilaiBaru;
            } 
            else 
            {
                console.log("Nilai harus antara 0 dan 100");
            }
        }
    }
}

class MahasiswaView 
{
    render(mahasiswa)
    {
        return `
        Mahasiswa:
        Nama  : ${mahasiswa.nama}
        NIM   : ${mahasiswa.nim}
        Nilai : ${mahasiswa.getNilai()}
        `;
    }
}

class MahasiswaController 
{
    constructor(model, view) 
    {
        this.model = model;
        this.view = view;
    }

    tampilkanMahasiswa() 
    {
        const mahasiswa = new this.model("Tanzil Kirami", "2023011110047", 95);
        const output = this.view.render(mahasiswa);
        console.log(output);
    }

    ubahNilai(nama, nim, nilaiBaru) 
    {
        const mahasiswa = new this.model(nama, nim, 0);
        mahasiswa.setNilai(nilaiBaru);
        console.log(`${nama} memiliki nilai baru : ${mahasiswa.getNilai()}`);
    }
}

// Inisialisasi dan Penggunaan
const mahasiswaView = new MahasiswaView();
const mahasiswaController = new MahasiswaController(Mahasiswa, mahasiswaView);

mahasiswaController.tampilkanMahasiswa();
mahasiswaController.ubahNilai("Tanzil Kirami", "2023011110047", 95);

