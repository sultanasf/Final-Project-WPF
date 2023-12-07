import Image from "next/image";

export default function Profile({
  title,
  profile,
  role,
  isEdit,
  setIsEdit,
  newProfile,
  setNewProfile,
  handleUpdate,
  handleCancel,
}) {
  return (
    <>
      <div className="container-fluid p-3" style={{ marginLeft: "80px" }}>
        <h1 className={"text-center text-uppercase"}>
          {title} {role}
        </h1>
        <div className="row rounded-4 justify-content-center mx-auto g-1 col-6 mt-4 bg-secondary-subtle">
          <div className="container justify-content-center align-content-center align-items-center mt-4 mb-3">
            <Image
              src={"/assets/profile.png"}
              width={150}
              height={150}
              alt={"Dummy Profile"}
              className={"rounded-circle mx-auto d-block"}
            />
            {/*  Form that shows user profile from profile props*/}
            <div className="col-md-9 mx-auto">
              <div className="form-group mt-2">
                <label htmlFor="nama">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  value={newProfile.nama}
                  onChange={(e) =>
                    setNewProfile({ ...newProfile, nama: e.target.value })
                  }
                  disabled={!isEdit}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={newProfile.email}
                  onChange={(e) =>
                    setNewProfile({ ...newProfile, email: e.target.value })
                  }
                  disabled={!isEdit}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={newProfile.password}
                  onChange={(e) =>
                    setNewProfile({ ...newProfile, password: e.target.value })
                  }
                  disabled={!isEdit}
                />
              </div>
              <div className={"d-flex justify-content-center mt-3"}>
                <div>
                  <a
                    className={"btn btn-warning"}
                    onClick={() => setIsEdit(true)}
                    hidden={isEdit}
                  >
                    Edit
                  </a>
                </div>
                <div>
                  <a
                    className={"btn btn-success"}
                    onClick={() => handleUpdate()}
                    hidden={!isEdit}
                  >
                    Save
                  </a>
                </div>
                <div>
                  <a
                    className={"btn btn-danger"}
                    onClick={() => handleCancel()}
                    hidden={!isEdit}
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
