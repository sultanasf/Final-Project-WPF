import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [id, setId] = useState(null);
  const [book, setBook] = useState({});

  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id);
    }
  }, [router.query.id]);

  useEffect(() => {
    if (id) {
      axios
        .post("/api/book/get-one", { id: id })
        .then((res) => {
          setBook(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <>
      <div>
        {!book ? (
          <h1>gaada Buku</h1>
        ) : (
          <>
            <h1>{book.judul}</h1>
            <h1>{book.pengarang}</h1>
          </>
        )}
      </div>
    </>
  );
}
