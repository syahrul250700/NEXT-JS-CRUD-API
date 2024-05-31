// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "@/server/db";

// const ITEMS_PER_PAGE = 10;

export default async function handler(req, res) {
  if (req.method === "GET" && req.query.id) {
    try {
      const products = await db.products.findFirst({
        where: {
          id: parseInt(req.query.id),
        },
      });

      res
        .status(200)
        .json({ data: products, message: "Data Produk sukses ditampilkan" });
    } catch (error) {
      console.log("Failed to fetch products data");
    }
  } else if (req.method === "GET") {
    // Process to fetch all data

    try {
      const products = await db.products.findMany();
      res
        .status(200)
        .json({ data: products, message: "Data Produk sukses ditampilkan" });
    } catch (error) {
      console.log("Failed to fetch products data");
    }
  } else if (req.method === "POST") {
    // Add a new product
    try {
      const { nameProduct, description, price, quantity } = req.body;
      // if (!nameProduct > 0) {
      //   throw new Error("Nama produk sudah ada");
      // }
      const product = await db.products.create({
        data: {
          nameProduct,
          description,
          price: parseInt(price),
          quantity: parseInt(quantity),
        },
      });

      res.status(201).json({ data: product });
    } catch (error) {
      res.status(500).json({
        error: "Gagal menambah produk baru",
      });
    }
  } else if (req.method === "PUT") {
    // Update an existing product
    try {
      const id = parseInt(req.query.id);
      if (!id) {
        return res.status(400).json({ error: "Invalid ID provided" });
      }
      const { nameProduct, description, price, quantity, updatedAt } = req.body;
      console.log(req.body);
      // if (!nameProduct || !description || !price || !quantity || !updatedAt) {
      //   return res.status(400).json({ error: "Missing required fields" });
      // }
      const updatedProduct = await db.products.update({
        where: { id: parseInt(id) },
        data: {
          nameProduct,
          description,
          price: parseInt(price),
          quantity: parseInt(quantity),
          updatedAt: new Date(),
        },
      });
      res
        .status(200)
        .json({ data: updatedProduct, message: "Produk berhasil diubah." });
      // console.log(updatedProduct);
    } catch (error) {
      return res.status(404).json({ error: "Could not update product" });
    }
  } else if (req.method === "DELETE") {
    // Delete a product by its id
    const id = req.query.id;
    const deleted = await db.products.delete({ where: { id: parseInt(id) } });
    if (!deleted) {
      return res.status(404).send({ error: "Could not delete product" });
    }
    res.status(200).json("Berhasil menghapus data produk");
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
