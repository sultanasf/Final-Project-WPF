import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import AnggotaLoan from "@/components/loan/AnggotaLoan";
import PetugasLoan from "@/components/loan/PetugasLoan";

export default function Home() {
  const [id, setId] = useState(null);
  const [loans, setLoans] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState("");
  const [allPetugas, setAllPetugas] = useState([]);
  const [allAnggota, setAllAnggota] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  const fetchAllBooks = async () => {
    try {
      const res = await axios.get(`/api/book/get-all`);
      setAllBooks(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchAllPetugas = async () => {
    try {
      const res = await axios.get(`/api/user/get-all-petugas`);
      setAllPetugas(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllAnggota = async () => {
    try {
      const res = await axios.get(`/api/user/get-all-anggota`);
      setAllAnggota(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditLoan = async (editedLoan) => {
    try {
      await axios.post(`/api/loan/edit-one`, editedLoan);
      await fetchLoan(role === "anggota" ? "anggota" : "petugas", id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddNewLoan = async (newLoan) => {
    try {
      // console.log(newLoan);
      await axios.post(`/api/loan/add-one`, newLoan);
      fetchLoan(role === "anggota" ? "anggota" : "petugas", id);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRole = async () => {
    try {
      const res = await axios.get("/api/user/get-role");
      setRole(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserId = async (roleParam) => {
    try {
      const res = await axios.get(`/api/user/${roleParam}`);
      setId(res.data.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLoan = async (roleParam, idParam) => {
    try {
      let res;
      if (roleParam === "anggota") {
        res = await axios.get(`/api/loan/get-by-${roleParam}/`, {
          params: { id: idParam },
        });
        setLoans(res.data.data);
        return;
      }
      res = await axios.get(`/api/loan/get-all/`);
      setLoans(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchRole();
  }, []);

  useEffect(() => {
    if (role !== "") {
      fetchUserId(role === "anggota" ? "get-anggota" : "get-petugas");
    }
    if (role === "petugas") {
      fetchAllPetugas();
      fetchAllAnggota();
      fetchAllBooks();
    }
  }, [role]);

  useEffect(() => {
    if (id !== null && role !== "") {
      fetchLoan(role === "anggota" ? "anggota" : "petugas", id);
    }
  }, [id, role]);

  useEffect(() => {
    if (loans !== null) {
      setIsLoading(false);
    }
  }, [loans, allPetugas, allAnggota, allBooks]);

  const anggotaProps = {
    title: "List Peminjaman",
    loans: loans,
  };

  const petugasProps = {
    title: "List Peminjaman",
    loans: loans,
    id: id,
    handleEditLoan: handleEditLoan,
    handleAddNewLoan: handleAddNewLoan,
    allPetugas: allPetugas,
    allAnggota: allAnggota,
    allBooks: allBooks,
  };

  return (
    <>
      <Layout
        isLoading={isLoading}
        activeNav={"Loan"}
        Content={role === "anggota" ? AnggotaLoan : PetugasLoan}
        contentProps={role === "anggota" ? anggotaProps : petugasProps}
      />
    </>
  );
}
