import React from "react";
import Card from "@/components/dashboard/Card";
import { ArrowRight } from "react-bootstrap-icons";

const Dashboard = ({ title }) => {
  return (
    <>
      <div className="container-fluid p-3" style={{ marginLeft: "80px" }}>
        <h1 className={"text-center"}>{title}</h1>
        <div className="row justify-content-center mx-auto g-1 col-11 mt-4 bg-secondary-subtle rounded-1">
          <Card
            title={"Books"}
            image={"/assets/dashboard/books.png"}
            link={"/book"}
            caption={"See Books"}
            icon={<ArrowRight />}
          />
          <Card
            title={"Loans"}
            image={"/assets/dashboard/peminjaman.png"}
            link={"/loan"}
            caption={"See Loans"}
            icon={<ArrowRight />}
          />
          <Card
            title={"User Profile"}
            image={"/assets/dashboard/profile.png"}
            link={"/profile"}
            caption={"See Profile"}
            icon={<ArrowRight />}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
