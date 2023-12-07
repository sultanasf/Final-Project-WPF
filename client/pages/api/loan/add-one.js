import axios from "axios";

const addOneLoan = async (req, res) => {
  // Check if method is POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { anggotaId, petugasId, tanggalPinjam, bukuId } = req.body;
    // change tanggalPinjam to iso format
    const tanggalPinjamIso = new Date(tanggalPinjam).toISOString();
    const response = await axios.post(
      `http://localhost:3000/peminjaman/`,
      {
        anggotaId,
        petugasId,
        tanggalPinjam: tanggalPinjamIso,
        bukuId,
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

export default addOneLoan;
