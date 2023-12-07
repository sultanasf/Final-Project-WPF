import React from "react";

const Switcher = ({role, setRole}) => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mb-3 mt-4">
        <div className="row border rounded-4 bg-white shadow">
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center "
            style={{ backgroundColor: !role ? "#effafd" : "#ffffff" }}
          >
            <button className="fs-6 btn btn-lg" onClick={() => setRole(0)}>
              Anggota
            </button>
          </div>
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center "
            style={{ backgroundColor: role ? "#effafd" : "#ffffff" }}
          >
            <button className="fs-6 btn btn-lg" onClick={(e) => setRole(1)}>
              Petugas
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Switcher;
