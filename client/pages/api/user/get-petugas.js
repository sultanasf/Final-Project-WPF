import axios from "axios";

export default async function handler(req, res) {
    const { method } = req;
    if (method === "GET") {
        try {
            const response = await axios.get(`http://localhost:3000/user/get-petugas`, { headers: { Authorization: "Bearer " + req.cookies.token } });
            const { data } = response;
            res.status(200).json(data);
        } catch (error) {
            // console.log(error);
            res.status(400).json({ message: "Data not found" });
        }
    } else {
        res.status(400).json({ message: "Method not allowed" });
    }
}