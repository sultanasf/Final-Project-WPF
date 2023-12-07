import React from "react";

const AnggotaListAllBooks = ({ title, filteredBooks, handleSearch }) => {
  return (
    <>
      <div className="container-fluid p-3" style={{ marginLeft: "80px" }}>
        <h1 className="text-center">{title}</h1>
        <div className="row justify-content-center g-1 mt-4 col-11 mx-auto">
          <div className="col-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder={"Cari Buku"}
                aria-label="Cari Buku"
                onChange={(e) => handleSearch(e)}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-1 mt-2">
          <div className="col-11">
            <table className="table table-striped table-bordered table-sm border-black shadow-lg text-center">
              <thead>
                <tr>
                  <th scope="col">Judul</th>
                  <th scope="col">Pengarang</th>
                  <th scope="col">Penerbit</th>
                  <th scope="col">Tahun Terbit</th>
                  <th scope="col">Status Buku</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {filteredBooks.map((book) => (
                  <tr key={book.id}>
                    <td scope="row">{book.judul}</td>
                    <td>{book.pengarang}</td>
                    <td>{book.penerbit}</td>
                    <td>{book.tahun}</td>
                    <td>
                      {book.siapPinjam ? "Siap Pinjam" : "Tidak Siap Pinjam"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnggotaListAllBooks;
