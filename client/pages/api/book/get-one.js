import axios from "axios";

const getOneBook = async (req, res) => {
    // Check if method is POST
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    try {
        const { id } = req.body;
        const response = await axios.get(`http://localhost:3000/buku/${id}`);
        // check if response.status is 404
        res.status(200).json(response.data);
    } catch (error) {
        // check if error.response.status is 404
        if (error.response.status === 404) {
            return res.status(404).json({ message: "Buku not found" });
        }
        res.status(500).json({ message: "Internal server error" });
    }
};

export default getOneBook;