import { db } from "@/server/db";

export default async function handler(req, res) {
  if (req.method === "GET" && req.body.id) {
    try {
      const users = await db.user.findFirst({
        where: {
          id: parseInt(req.query.id),
        },
      });
      res
        .status(200)
        .json({ data: users, message: "Data User sukses ditampilkan" });
    } catch (error) {
      console.log("Failed to fetch products data");
    }
  } else if (req.method === "PUT") {
    try {
      const id = parseInt(req.query.id);
      if (!id) {
        return res.status(400).json({ error: "Invalid ID Provider" });
      }
      const { email, name, password, username } = req.body;
      console.log(req.body);

      const updatedUser = await db.user.update({
        where: { id: parseInt(id) },
        data: {
          email,
          name,
          password,
          username,
          updatedAt: new Date(),
        },
      });
      res
        .status(200)
        .json({ data: updatedUser, message: "Data user berhasil diubah" });
    } catch (error) {
      return res.status(404).json({ error: "Could not update user" });
    }
  }
}
