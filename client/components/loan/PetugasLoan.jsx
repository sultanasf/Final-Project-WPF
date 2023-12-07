import React, { useEffect, useState } from "react";
import EditLoanModal from "@/components/loan/EditLoanModal";
import AddLoanModal from "@/components/loan/AddLoanModal";

const PetugasLoan = ({
  loans,
  title,
  id,
  handleEditLoan,
  handleAddNewLoan,
  allBooks,
  allAnggota,
  allPetugas,
}) => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState({
    id: "",
    tanggalPinjam: "",
    tanggalKembali: "",
  });
  const [newLoan, setNewLoan] = useState({
    anggotaId: "",
    petugasId: "",
    tanggalPinjam: "",
    bukuId: [""],
  });

  useEffect(() => {
    if (selectedLoan.id !== "") {
      setModalIsOpen(true);
    }
  }, [selectedLoan]);

  return (
    <>
      <div className="container-fluid p-3" style={{ marginLeft: "80px" }}>
        <h1 className="text-center">{title}</h1>
        <EditLoanModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          selectedLoan={selectedLoan}
          setSelectedLoan={setSelectedLoan}
          handleEditLoan={handleEditLoan}
        />
        <AddLoanModal
          addModalIsOpen={addModalIsOpen}
          setAddModalIsOpen={setAddModalIsOpen}
          newLoan={newLoan}
          setNewLoan={setNewLoan}
          handleAddNewLoan={handleAddNewLoan}
          allBooks={allBooks}
          allAnggota={allAnggota}
          allPetugas={allPetugas}
        />
        <div className="row justify-content-center g-1 mt-4 col-11 mx-auto">
          <div className="col-12 d-flex">
            <div className="input-group">
              <button
                className="btn btn-outline-success ms-auto"
                onClick={() => setAddModalIsOpen(true)}
              >
                Tambah Peminjaman
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-1 mt-2">
          <div className="col-11">
            <table className="table table-striped table-bordered table-sm border-black shadow-lg text-center">
              <thead>
                <tr>
                  <th scope="col">Nama Peminjam</th>
                  <th scope="col">Nama Petugas</th>
                  <th scope="col">Buku</th>
                  <th scope="col">Tanggal Pinjam</th>
                  <th scope="col">Tanggal Kembali</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {loans.map((loan) => (
                  <tr key={loan.id}>
                    <td scope="row">{loan.Anggota.nama}</td>
                    <td
                      scope="row"
                      className={`${
                        id === loan.Petugas.id
                          ? "text-decoration-underline"
                          : ""
                      }`}
                    >
                      {loan.Petugas.nama}
                    </td>
                    <td scope="row">
                      {loan.DetailPeminjaman.map((detail, index) => (
                        <span className={"d-block"} key={index}>
                          {detail.Buku.judul}
                        </span>
                      ))}
                    </td>
                    <td scope="row">
                      {new Date(loan.tanggalPinjam).toLocaleDateString(
                        "id-ID",
                        {
                          dateStyle: "medium",
                        },
                      )}
                    </td>
                    <td scope="row">
                      {loan.tanggalKembali
                        ? new Date(loan.tanggalKembali).toLocaleDateString(
                            "id-ID",
                            {
                              dateStyle: "medium",
                            },
                          )
                        : "Belum Kembali"}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => setSelectedLoan(loan)}
                      >
                        Edit
                      </button>
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

export default PetugasLoan;
