import axios from "axios";
import { setCookie } from "cookies-next";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { email, password, role } = req.body;
  try {
    const response = await axios.post(
      `http://localhost:3000/auth/login/${role == 0 ? "anggota" : "petugas"}`,
      {
        email,
        password,
      },
    );
    setCookie("token", response.data.token, {
      req,
      res,
      httpOnly: true,
      path: "/",
      //max age in 1 day
      maxAge: 60 * 60 * 24, // 1 day
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error);
  }
}
