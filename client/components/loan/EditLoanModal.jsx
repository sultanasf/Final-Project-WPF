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

export default function EditLoanModal({
  modalIsOpen,
  setModalIsOpen,
  selectedLoan,
  setSelectedLoan,
  handleEditLoan,
}) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setSelectedLoan({
            id: "",
            tanggalPinjam: "",
            tanggalKembali: "",
          });
          setModalIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container-fluid">
          <h1 className="text-center">Edit Peminjaman</h1>
          <div className="row justify-content-center g-1 mt-4 col-12 mx-auto">
            <div className="col-12 d-flex">
              <div className="input-group">
                <label
                  htmlFor="
                tanggalPinjam
                "
                  className={"input-group-text"}
                >
                  <p>Tanggal Pinjam</p>
                </label>
                <input
                  id="tanggalPinjam"
                  type="date"
                  className="form-control"
                  placeholder={"Tanggal Pinjam"}
                  value={selectedLoan.tanggalPinjam.split("T")[0]}
                  aria-label="Tanggal Pinjam"
                  onChange={(e) =>
                    setSelectedLoan({
                      ...selectedLoan,
                      tanggalPinjam: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input-group">
                <label
                  htmlFor="
                tanggalKembali
                "
                  className={"input-group-text"}
                >
                  <p>Tanggal Kembali</p>
                </label>
                <input
                  id="tanggalKembali"
                  type="date"
                  className="form-control"
                  placeholder={"Tanggal Kembali"}
                  value={
                    selectedLoan.tanggalKembali
                      ? selectedLoan.tanggalKembali.split("T")[0]
                      : ""
                  }
                  aria-label="Tanggal Kembali"
                  onChange={(e) =>
                    setSelectedLoan({
                      ...selectedLoan,
                      tanggalKembali: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-12 mt-4 d-flex">
              <button
                className="btn btn-success ms-auto"
                onClick={() => {
                  handleEditLoan(selectedLoan);
                  setSelectedLoan({
                    id: "",
                    tanggalPinjam: "",
                    tanggalKembali: "",
                  });
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
