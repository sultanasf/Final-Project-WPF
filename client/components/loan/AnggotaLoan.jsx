import React from "react";
import Card from "./Card";

const AnggotaLoan = ({ loans, title }) => {
  return (
    <>
      <div className="container-fluid p-3" style={{ marginLeft: "80px" }}>
        <h1 className="text-center">{title}</h1>
        <div className="row justify-content-center mx-auto g-1 col-11 mt-4 bg-secondary-subtle rounded-1">
          {loans.map((loan) => (
            <div className="col-md-3 mb-2 mt-2" key={loan.id}>
              <Card
                tanggalPinjam={loan.tanggalPinjam}
                tanggalKembali={loan.tanggalKembali}
                detailPeminjaman={loan.DetailPeminjaman}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnggotaLoan;
