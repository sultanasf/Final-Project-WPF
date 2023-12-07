import axios from "axios";

const addOneBook = async (req, res) => {
  // Check if method is POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { judul, pengarang, penerbit, tahun } = req.body;
    const response = await axios.post(
      "http://localhost:3000/buku",
      {
        judul,
        pengarang,
        penerbit,
        tahun,
      },
      { headers: { Authorization: "Bearer " + req.cookies.token } },
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default addOneBook;
