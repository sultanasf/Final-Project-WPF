import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookHalf,
  BoxArrowLeft,
  HouseDoor,
  ListCheck,
  PersonGear,
} from "react-bootstrap-icons";

const Sidebar = ({ activeNav }) => {
  const activeNavStyle = {
    backgroundColor: "#3A396B",
    borderRadius: "10px",
  };

  return (
    <>
      <div
        className="d-flex flex-column align-items-center fixed-top shadow shadow-lg"
        style={{ width: "80px", height: "100vh", backgroundColor: "#2B2A4C" }}
      >
        <div className="d-flex mt-3 mb-3">
          <h1 className="">
            <Image
              src={"/assets/library.png"}
              width={60}
              height={60}
              alt="logo"
            />
          </h1>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item py-2"
            style={activeNav == "Home" ? activeNavStyle : null}
          >
            <Link href="/dashboard" className="nav-link text-center text-white">
              <HouseDoor size={25} />
              <small>Home</small>
            </Link>
          </li>
          <li
            className="nav-item py-2"
            style={activeNav == "Books" ? activeNavStyle : null}
          >
            <Link href="/book" className="nav-link text-center text-white">
              <BookHalf size={25} />
              <small>Books</small>
            </Link>
          </li>
          <li
            className="nav-item py-2 "
            style={activeNav == "Loan" ? activeNavStyle : null}
          >
            <Link href="/loan" className="nav-link text-center text-white">
              <ListCheck size={25} />
              <small>Loan</small>
            </Link>
          </li>
          <li
            className="nav-item py-2"
            style={activeNav == "Profile" ? activeNavStyle : null}
          >
            <Link href="/profile" className="nav-link text-center text-white">
              <PersonGear size={25} />
              <small>Profile</small>
            </Link>
          </li>
        </ul>
        <div className="nav-item p-4 mt-auto d-flex">
          <Link
            href="/api/auth/logout"
            className="nav-link text-center text-white"
          >
            <BoxArrowLeft size={25} />
            <small>Logout</small>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
