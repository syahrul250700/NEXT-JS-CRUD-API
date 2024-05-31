import { db } from "@/server/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, password, username } = req.body;
    console.log(req.body);
    try {
      const regist = await db.user.create({
        data: {
          email,
          name,
          password,
          username,
        },
      });
      res
        .status(201)
        .json({ data: regist, message: "Berhasil Registrasi User" });
      console.log(regist);
    } catch (error) {
      res.status(500).json({
        error: "Gagal Register",
      });
    }
  } else {
    // Return a 405 Method Not Allowed response
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
