// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "@/server/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Process to fetch all data
    try {
      const post = await db.post.findMany();
      res
        .status(200)
        .json({ data: post, message: "Data Produk sukses ditampilkan" });
    } catch (error) {
      throw new Error("Failed to fetch post data");
    }
  } else if (req.method === "POST") {
    // Add a new product
    try {
      const { nameProduct, description, price, quantity } = req.body;
      console.log(
        `Received post request with ${nameProduct}, ${description}, ${price} and ${quantity}`
      );
      const product = await db.post.create({
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
    const id = parseInt(req.query.id);
    if (!id) {
      return res.status(400).json({ error: "Invalid ID provided" });
    }
    const { nameProduct, description, price, quantity } = req.body;
    console.log(req.body);
    if (!nameProduct || !description || !price || !quantity) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    let updatedProduct = await db.post.update({
      where: { id },
      data: {
        nameProduct,
        description,
        price: parseInt(price),
        quantity: parseInt(quantity),
      },
    });

    if (!updatedProduct) {
      return res.status(404).json({ error: "Could not update product" });
    }

    res.status(200).json(updatedProduct);

    // const id = req.query.id;
    // const { nameProduct, description, price, quantity } = req.body;
    // console.log(`Updating product with ID: ${id}`);
    // let updatedProduct = await db.post.update({
    //   where: { id: parseInt(id) },
    //   data: {
    //     nameProduct,
    //     description,
    //     price: parseInt(price),
    //     quantity: parseInt(quantity),
    //   },
    // });
    // if (!updatedProduct) {
    //   return res.status(404).json({ error: "Could not update product" });
    // }
    // res.status(200).JSON(updatedProduct);
  } else if (req.method === "DELETE") {
    // Delete a product by its id
    const id = req.query.id;
    const deleted = await db.post.delete({ where: { id: parseInt(id) } });
    if (!deleted) {
      return res.status(404).send({ error: "Could not delete product" });
    }
    res.status(200).send("Deleted");
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
