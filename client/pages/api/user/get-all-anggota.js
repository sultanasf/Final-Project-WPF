import axios from "axios";

const getAllAnggota = async (req, res) => {
  // Check if method is GET
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const response = await axios.get(
      `http://localhost:3000/user/get-all-anggota`,
      {
        headers: { Authorization: "Bearer " + req.cookies.token },
      },
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllAnggota;