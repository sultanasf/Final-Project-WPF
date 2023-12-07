import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import AnggotaListAllBooks from "@/components/book/AnggotaListAllBooks";
import PetugasListAllBooks from "@/components/book/PetugasListAllBooks";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState("");

  const fetchBooks = () => {
    axios
      .get("/api/book/get-all")
      .then((res) => {
        setBooks(() => res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/user/get-role")
      .then((res) => {
        setRole(res.data.data);
      })
      .catch((err) => console.log(err));

    fetchBooks();
  }, []);

  useEffect(() => {
    if (books.length >= 0 && role !== "") {
      setFilteredBooks(() => books);
    }
  }, [books, role]);

  useEffect(() => {
    if (filteredBooks.length >= 0) {
      setIsLoading(false);
    }
  }, [filteredBooks]);

  const handleSearch = (e) => {
    // search by judul, pengarang, penerbit, tahunTerbit
    const filtered = books.filter((book) => {
      const regex = new RegExp(e.target.value, "gi");
      return (
        book.judul.match(regex) ||
        book.pengarang.match(regex) ||
        book.penerbit.match(regex) ||
        book.tahun.toString().match(regex)
      );
    });
    setFilteredBooks(filtered);
  };

  const handleAddNewBook = async (newBook) => {
    try {
      const res = await axios.post("/api/book/add-one", newBook);
      fetchBooks();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      const res = await axios.post(`/api/book/delete-one/`, { id });
      fetchBooks();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditBook = async (editedBook) => {
    try {
      const res = await axios.post(`/api/book/edit-one/`, editedBook);
      fetchBooks();
    } catch (err) {
      console.log(err);
    }
  };

  const petugasProps = {
    title: "Daftar Buku",
    filteredBooks,
    handleSearch,
    handleAddNewBook,
    handleDeleteBook,
    handleEditBook,
  };

  const anggotaProps = {
    title: "Daftar Buku",
    filteredBooks,
    handleSearch,
  };

  return (
    <>
      <Layout
        isLoading={isLoading}
        activeNav={"Books"}
        Content={role === "anggota" ? AnggotaListAllBooks : PetugasListAllBooks}
        contentProps={role === "anggota" ? anggotaProps : petugasProps}
      />
    </>
  );
}
