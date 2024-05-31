import { db } from "@/server/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log(req.body);
    try {
      // Call the REST API to log in the user
      const user = await db.user.findUnique({
        where: {
          email: email,
          password: password,
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      res.status(201).json({ data: user, message: "Berhasil Login" });
      // console.log(user);
    } catch (error) {
      res.status(500).json({
        error: "Gagal Login",
      });
    }
  } else {
    // Return a 405 Method Not Allowed response
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
