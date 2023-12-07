import React from "react";
import Modal from "react-modal";

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

export default function EditBookModal({
  modalIsOpen,
  setModalIsOpen,
  selectedBook,
  setSelectedBook,
  handleEditBook,
}) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setSelectedBook({
            id: "",
            judul: "",
            pengarang: "",
            penerbit: "",
            tahun: "",
          });
          setModalIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container-fluid">
          <h1 className="text-center">Edit Buku</h1>
          <div className="row justify-content-center g-1 mt-4 col-12 mx-auto">
            <div className="col-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder={"Judul"}
                  value={selectedBook.judul}
                  aria-label="Judul"
                  onChange={(e) =>
                    setSelectedBook({
                      ...selectedBook,
                      judul: e.target.value,
                    })
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
                  value={selectedBook.pengarang}
                  aria-label="Pengarang"
                  onChange={(e) =>
                    setSelectedBook({
                      ...selectedBook,
                      pengarang: e.target.value,
                    })
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
                  value={selectedBook.penerbit}
                  aria-label="Penerbit"
                  onChange={(e) =>
                    setSelectedBook({
                      ...selectedBook,
                      penerbit: e.target.value,
                    })
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
                  value={selectedBook.tahun}
                  aria-label="Tahun Terbit"
                  onChange={(e) =>
                    setSelectedBook({
                      ...selectedBook,
                      tahun: e.target.value,
                    })
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
                    selectedBook.judul === "" ||
                    selectedBook.pengarang === "" ||
                    selectedBook.penerbit === "" ||
                    selectedBook.tahun === ""
                  ) {
                    alert("Data belum lengkap!");
                    return;
                  }
                  handleEditBook(selectedBook);
                  setModalIsOpen(false);
                }}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
