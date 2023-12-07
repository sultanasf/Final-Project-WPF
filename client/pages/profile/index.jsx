import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Profile from "@/components/profile/Profile";
import axios from "axios";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState("");
  const [profile, setProfile] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [newProfile, setNewProfile] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const handleUpdate = async () => {
    try {
      const res = await axios.patch(
        `/api/user/${role === "anggota" ? "update-anggota" : "update-petugas"}`,
        newProfile,
      );
      setProfile(res.data.data);
      setIsEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setIsEdit(false);
    setNewProfile({
      nama: profile.nama,
      email: profile.email,
      password: "",
    });
  };

  const fetchRole = async () => {
    try {
      const res = await axios.get("/api/user/get-role");
      setRole(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProfile = async (roleParam) => {
    try {
      const res = await axios.get(`/api/user/${roleParam}`);
      setProfile(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRole();
  }, []);

  useEffect(() => {
    if (role !== "") {
      fetchProfile(role === "anggota" ? "get-anggota" : "get-petugas");
    }
  }, [role]);

  useEffect(() => {
    if (profile !== null) {
      setNewProfile({
        nama: profile.nama,
        email: profile.email,
        password: "",
      });
    }
  }, [profile]);

  useEffect(() => {
    if (newProfile.nama !== "") {
      setIsLoading(false);
    }
  }, [newProfile]);

  return (
    <>
      <Layout
        isLoading={isLoading}
        activeNav={"Profile"}
        Content={Profile}
        contentProps={{
          title: "Profile",
          profile,
          role,
          isEdit,
          setIsEdit,
          newProfile,
          setNewProfile,
          handleUpdate,
          handleCancel,
        }}
      />
    </>
  );
}
