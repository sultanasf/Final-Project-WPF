import axios from "axios";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "PATCH") {
    try {
      const { nama, email, password } = req.body;
      const response = await axios.patch(
        `http://localhost:3000/user/update-petugas`,
        {
          nama,
          email,
          password,
        },
        { headers: { Authorization: "Bearer " + req.cookies.token } },
      );
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
