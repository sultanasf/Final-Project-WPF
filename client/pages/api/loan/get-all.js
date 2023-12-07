import axios from "axios";

const getAllLoan = async (req, res) => {
    // Check if method is GET
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    const { data } = await axios.get("http://localhost:3000/peminjaman/");
    res.status(200).json(data);
};

export default getAllLoan;
