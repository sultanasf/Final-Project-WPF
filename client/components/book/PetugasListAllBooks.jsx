import React, { useEffect, useState } from "react";
import AddBookModal from "@/components/book/AddBookModal";
import EditBookModal from "@/components/book/EditBookModal";

const PetugasListAllBooks = ({
  title,
  filteredBooks,
  handleSearch,
  handleAddNewBook,
  handleDeleteBook,
  handleEditBook,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    judul: "",
    pengarang: "",
    penerbit: "",
    tahun: "",
  });
  const [selectedBook, setSelectedBook] = useState({
    id: "",
    judul: "",
    pengarang: "",
    penerbit: "",
    tahun: "",
  });

  useEffect(() => {
    if (selectedBook.id !== "") {
      setEditModalIsOpen(true);
    }
  }, [selectedBook]);

  return (
    <>
      <div className="container-fluid p-3" style={{ marginLeft: "80px" }}>
        <h1 className="text-center">{title}</h1>
        <AddBookModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          newBook={newBook}
          setNewBook={setNewBook}
          handleAddNewBook={handleAddNewBook}
        />
        <EditBookModal
          modalIsOpen={editModalIsOpen}
          setModalIsOpen={setEditModalIsOpen}
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          handleEditBook={handleEditBook}
        />
        <div className="row justify-content-start g-1 mt-4 col-11 mx-auto">
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
          <div className="col-8 d-flex">
            <button
              className="btn btn-outline-success ms-auto"
              onClick={() => setModalIsOpen(true)}
            >
              Tambah Buku
            </button>
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
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {filteredBooks.map((book) => (
                  //   loop starts here
                  <tr key={book.id}>
                    <td scope="row">{book.judul}</td>
                    <td>{book.pengarang}</td>
                    <td>{book.penerbit}</td>
                    <td>{book.tahun}</td>
                    <td>
                      {book.siapPinjam ? "Siap Pinjam" : "Tidak Siap Pinjam"}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteBook(book.id)}
                      >
                        Hapus
                      </button>
                      <button
                        className="btn btn-warning btn-sm ms-1"
                        onClick={() => {
                          setSelectedBook({
                            id: book.id,
                            judul: book.judul,
                            pengarang: book.pengarang,
                            penerbit: book.penerbit,
                            tahun: book.tahun,
                          });
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                  //   loop ends here
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetugasListAllBooks;
