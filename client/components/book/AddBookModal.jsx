import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f8f9fa",
  },
};

export default function AddBookModal({
  modalIsOpen,
  setModalIsOpen,
  newBook,
  setNewBook,
  handleAddNewBook,
}) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
          setNewBook({
            judul: "",
            pengarang: "",
            penerbit: "",
            tahun: "",
          });
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container-fluid">
          <h1 className="text-center">Tambah Buku</h1>
          <div className="row justify-content-center g-1 mt-4 col-12 mx-auto">
            <div className="col-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder={"Judul"}
                  value={newBook.judul}
                  aria-label="Judul"
                  onChange={(e) =>
                    setNewBook({ ...newBook, judul: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder={"Pengarang"}
                  value={newBook.pengarang}
                  aria-label="Pengarang"
                  onChange={(e) =>
                    setNewBook({ ...newBook, pengarang: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder={"Penerbit"}
                  value={newBook.penerbit}
                  aria-label="Penerbit"
                  onChange={(e) =>
                    setNewBook({ ...newBook, penerbit: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder={"Tahun Terbit"}
                  value={newBook.tahun}
                  aria-label="Tahun Terbit"
                  onChange={(e) =>
                    setNewBook({ ...newBook, tahun: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          {/*    Button for submit new book*/}
          <div className="row justify-content-center g-1 mt-2">
            <div className="col-12 d-flex">
              <button
                className="btn btn-outline-success ms-auto"
                onClick={() => {
                  if (
                    newBook.judul === "" ||
                    newBook.pengarang === "" ||
                    newBook.penerbit === "" ||
                    newBook.tahun === ""
                  ) {
                    alert("Data belum lengkap!");
                    return;
                  }
                  handleAddNewBook(newBook);
                  setModalIsOpen(false);
                  setNewBook({
                    judul: "",
                    pengarang: "",
                    penerbit: "",
                    tahun: "",
                  });
                }}
              >
                Tambah Buku
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
