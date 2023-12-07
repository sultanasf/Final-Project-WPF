import React from "react";

const Card = ({ tanggalPinjam, tanggalKembali, detailPeminjaman }) => {
  return (
    <div className="container">
      <div className={`card ${tanggalKembali ? "bg-success" : "bg-warning"}`}>
        <div className="card-body">
          <h4 className="card-title text-center">
            {new Date(tanggalPinjam).toLocaleDateString("id-ID", {
              dateStyle: "medium",
            })}
          </h4>
        </div>
        <ul className="list-group list-group-flush">
          {detailPeminjaman.map((book, index) => (
            <li className="list-group-item" key={index}>
              {book.Buku.judul}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
