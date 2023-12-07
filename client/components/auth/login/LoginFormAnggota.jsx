import React from "react";
import Image from "next/image";

const LoginForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row border rounded-4 p-3 bg-white shadow box-area">
          <div
            className="col-md-6 left-box rounded-4 d-flex justify-content-center align-items-center flex-column"
            style={{ backgroundColor: "#effafd" }}
          >
            <div className="featured-image mb-3">
              <Image
                src={"/assets/login-panel.jpg"}
                width={250}
                height={0}
                className="img-fluid"
                alt=""
                placeholder="blur"
                blurDataURL="assests/login-panel.jpg"
              />
              <p className="text-center fs-2" style={{ fontWeight: 600 }}>
                E-Library
              </p>
              <small
                className="text-wrap text-center"
                style={{ fontWeight: 400 }}
              >
                Manage your books on this platform.
              </small>
            </div>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hello There</h2>
                <p>Get Ready For New Knowledge</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control form-control-lg bg-light fs-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // when click enter, it will switch to password input
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      document.querySelector("input[type=password]").focus();
                    }
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control form-control-lg bg-light fs-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // when click enter, it will submit the form
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                />
              </div>
              <div className="input-group mb-4 d-flex">
                <div className="forgot ms-auto">
                  <small>
                    <a href="">Forgot Password?</a>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button
                  className="btn btn-lg btn-primary w-100 fs-6"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
              <div className="row">
                <small>
                  Don&rsquo;t Have account? <a href="">Sign Up</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
