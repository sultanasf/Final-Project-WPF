import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "@/components/dashboard/Dashboard";
import Layout from "@/components/Layout";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/user/get-role")
      .then((res) => {
        setRole(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (role !== "") {
      setIsLoading(false);
    }
  }, [role]);

  return (
    <>
      <Layout
        isLoading={isLoading}
        activeNav={"Home"}
        Content={Dashboard}
        contentProps={{
          title: role === "anggota" ? "Anggota Dashboard" : "Petugas Dashboard",
        }}
      />
    </>
  );
};

export default Home;
