import LoginFormAnggota from "@/components/auth/login/LoginFormAnggota";
import LoginFormPetugas from "@/components/auth/login/LoginFormPetugas";
import Switcher from "@/components/auth/login/Switcher";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [role, setRole] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("/api/auth/login", {
        email,
        password,
        role,
      })
      .then((res) => {
        router.push("/dashboard");
      })
      .catch((err) => console.log(err.response.data.status));
  };

  return (
    <>
      <Switcher role={role} setRole={setRole} />
      {role === 1 ? (
        <LoginFormPetugas
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <LoginFormAnggota
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}
    </>
  );
};

export default Index;
