import axios from "axios";

const editOneBook = async (req, res) => {
  // Check if method is POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { id, judul, pengarang, penerbit, tahun } = req.body;
    const response = await axios.patch(
      `http://localhost:3000/buku/${id}`,
      {
        judul,
        pengarang,
        penerbit,
        tahun,
      },
      {
        headers: { Authorization: "Bearer " + req.cookies.token },
      },
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default editOneBook;
