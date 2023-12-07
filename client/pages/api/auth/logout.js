import { deleteCookie } from "cookies-next";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  // clear token cookie
  deleteCookie("token", {
    req,
    res,
  });
  res.status(200).redirect("/login");
}
