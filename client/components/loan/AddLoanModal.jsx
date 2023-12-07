import React from "react";
import Modal from "react-modal";
import SelectSearch from "react-select-search";

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

const AddLoanModal = ({
  addModalIsOpen,
  setAddModalIsOpen,
  newLoan,
  setNewLoan,
  handleAddNewLoan,
  allBooks,
  allAnggota,
  allPetugas,
}) => {
  const optionsAnggota = allAnggota.map((anggota) => ({
    name: anggota.nama,
    value: anggota.id,
  }));
  const optionsPetugas = allPetugas.map((petugas) => ({
    name: petugas.nama,
    value: petugas.id,
  }));
  const optionsBuku = allBooks.map((buku) => ({
    name: buku.judul,
    value: buku.id,
  }));
  const handleChangeAnggota = (value) => {
    setNewLoan({
      ...newLoan,
      anggotaId: value,
    });
  };
  const handleChangePetugas = (value) => {
    setNewLoan({
      ...newLoan,
      petugasId: value,
    });
  };
  const handleChangeBuku = (value, index) => {
    let newBukuId = [...newLoan.bukuId];
    newBukuId[index] = value;
    setNewLoan({
      ...newLoan,
      bukuId: newBukuId,
    });
  };
  return (
    <>
      <Modal
        isOpen={addModalIsOpen}
        onRequestClose={() => {
          setNewLoan({
            anggotaId: "",
            petugasId: "",
            tanggalPinjam: "",
            bukuId: [""],
          });
          setAddModalIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container-fluid">
          <h1 className="text-center">Tambah Peminjaman</h1>
          <div className="row justify-content-center g-1 mt-4 col-12 mx-auto d-flex">
            <div className="col-12">
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder={"Tanggal Pinjam"}
                  value={newLoan.tanggalPinjam.split("T")[0]}
                  aria-label="Tanggal Pinjam"
                  onChange={(e) =>
                    setNewLoan({
                      ...newLoan,
                      tanggalPinjam: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <SelectSearch
                  options={optionsAnggota}
                  value={newLoan.anggotaId}
                  search
                  placeholder={"Anggota"}
                  onChange={handleChangeAnggota}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <SelectSearch
                  options={optionsPetugas}
                  value={newLoan.petugasId}
                  search
                  // make the dropdown not overlapped by the element at the bottom
                  style={{ zIndex: 1 }}
                  placeholder={"Petugas"}
                  onChange={handleChangePetugas}
                />
              </div>
            </div>
            {newLoan.bukuId.map((bukuId, index) => (
              <div className="col-12" key={index}>
                <div className="input-group">
                  <SelectSearch
                    options={optionsBuku}
                    value={bukuId}
                    search
                    // Make this elemnt did not overlapping the element at the top(the dropdown from anggota and petugas)
                    placeholder={"Buku"}
                    onChange={(value) => handleChangeBuku(value, index)}
                  />
                  <button
                    className="btn btn-outline-danger"
                    style={{ zIndex: 0 }}
                    onClick={() => {
                      let newBukuId = [...newLoan.bukuId];
                      newBukuId.splice(index, 1);
                      setNewLoan({
                        ...newLoan,
                        bukuId: newBukuId,
                      });
                    }}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}

            <div className="col-12 mt-4 d-flex">
              <div className="input-group">
                <div className={"ms-auto"}>
                  <button
                    className="btn btn-outline-success"
                    // Set this button to bottom, so it will not clicked when the dropdown from SelectSearch is opened
                    style={{ zIndex: 0 }}
                    onClick={() =>
                      setNewLoan({
                        ...newLoan,
                        bukuId: [...newLoan.bukuId, ""],
                      })
                    }
                  >
                    Tambah Buku
                  </button>
                  <button
                    className="btn btn-success"
                    style={{ zIndex: 0 }}
                    onClick={() => {
                      handleAddNewLoan(newLoan);
                      setNewLoan({
                        anggotaId: "",
                        petugasId: "",
                        tanggalPinjam: "",
                        bukuId: [""],
                      });
                      setAddModalIsOpen(false);
                    }}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddLoanModal;
