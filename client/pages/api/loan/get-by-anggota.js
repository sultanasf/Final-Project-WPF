import axios from "axios";

const getByAnggota = async (req, res) => {
    // Check if method is GET
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    try {
        const { id } = req.query;
        const { data } = await axios.get("http://localhost:3000/peminjaman/anggota/" + id, { headers: { Authorization: "Bearer " + req.cookies.token } });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "Data not found", error: error });
    }
};

export default getByAnggota;
