
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [mahasiswa] = useState([
  {
    nim: "452310145",
    nama: "Rizky Ramadhan",
    hp: "081298765421",
    email: "452310145@univpancasila.ac.id",
    alamat: "Jakarta Selatan",
    prodi: "Teknik Informatika",
    tahun: "2023",
  },
  {
    nim: "452310146",
    nama: "Nadia Putri",
    hp: "082112345678",
    email: "452310146@univpancasila.ac.id",
    alamat: "Depok",
    prodi: "Teknik Informatika",
    tahun: "2023",
  },
  {
    nim: "452310147",
    nama: "Fajar Maulana",
    hp: "085712345690",
    email: "452310147@univpancasila.ac.id",
    alamat: "Bogor",
    prodi: "Teknik Informatika",
    tahun: "2023",
  },
  {
    nim: "452310148",
    nama: "Salsabila Putri",
    hp: "087812345690",
    email: "452310148@univpancasila.ac.id",
    alamat: "Bekasi",
    prodi: "Teknik Informatika",
    tahun: "2023",
  },
  {
    nim: "452310149",
    nama: "Dimas Pratama",
    hp: "089876543210",
    email: "452310149@univpancasila.ac.id",
    alamat: "Tangerang",
    prodi: "Teknik Informatika",
    tahun: "2023",
  },
]);

  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">S</div>
          <h1>Student Management</h1>
        </div>
        <span className="navbar-label">Data Mahasiswa</span>
      </header>

      <main className="content">
        <section className="page-heading">
          <div>
            <p className="eyebrow">STUDENT DATABASE</p>
            <h2>Daftar Data Mahasiswa</h2>
            <p className="subtitle">
              Informasi dan data mahasiswa yang terdaftar.
            </p>
          </div>
        </section>

        <section className="info-bar">
          <div className="student-count">
            <span className="dot"></span>
            Menampilkan <strong>{mahasiswa.length} mahasiswa</strong>
          </div>

          <div className="clock">
            <span>Waktu saat ini</span>
            <strong>{waktu.toLocaleTimeString("id-ID")}</strong>
          </div>
        </section>

        <section className="table-section">
          <div className="table-heading">
            <h3>Data Mahasiswa</h3>
            <span className="table-label">Daftar terdaftar</span>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>NIM</th>
                  <th>Nama Mahasiswa</th>
                  <th>No. HP</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                </tr>
              </thead>

              <tbody>
                {mahasiswa.map((mhs) => (
                  <tr key={mhs.nim}>
                    <td className="nim">{mhs.nim}</td>
                    <td className="nama">{mhs.nama}</td>
                    <td>{mhs.hp}</td>
                    <td>{mhs.email}</td>
                    <td>{mhs.alamat}</td>
                    <td>{mhs.prodi}</td>
                    <td>
                      <span className="year">{mhs.tahun}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer>
          <p>© 2026 Student Management. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
