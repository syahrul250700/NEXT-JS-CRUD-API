import React from "react";
import Layout from "@/components/layout";
import Button from "@mui/material/Button";
import { TextField, Grid, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const UpdateProduct = () => {
  const router = useRouter();
  const id = router.query.id;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (id) {
      fetch(`/api/products?id=${id}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.data));
    }
  }, [id]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send the update request here
    const res = await fetch(`/api/products?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    });

    if (res.ok) {
      router.push("/products"); // Redirect to the product list after updating
    }
  };
  return (
    <Layout>
      <title>NASH | Create Products</title>
      <Typography component="h1" variant="h5" className="text-center">
        Update Product
      </Typography>

      <Box
        className="text-center flex flex-col items-center h-screen"
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 3 }}
      >
        {/* <p>{JSON.stringify(products)}</p> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="nameProduct"
              label="Name Product"
              id="nameProduct"
              required
              onChange={(e) =>
                setProducts((prev) => {
                  return {
                    ...prev,
                    nameProduct: e.target.value,
                  };
                })
              }
              value={products?.nameProduct || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="description"
              name="description"
              label="Description"
              id="description"
              required
              onChange={(e) =>
                setProducts((prev) => {
                  return {
                    ...prev,
                    description: e.target.value,
                  };
                })
              }
              value={products?.description || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="price"
              name="price"
              label="Price"
              id="price"
              required
              onChange={(e) =>
                setProducts((prev) => {
                  return {
                    ...prev,
                    price: parseInt(e.target.value),
                  };
                })
              }
              value={products?.price || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="quantity"
              label="Quantity"
              required
              onChange={(e) =>
                setProducts((prev) => {
                  return {
                    ...prev,
                    quantity: parseInt(e.target.value),
                  };
                })
              }
              value={products?.quantity || ""}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          label={"update"}
          className="bg-blue-600 text-white hover:bg-green-600 hover:text-white mt-4"
        >
          Update Product
        </Button>
      </Box>
    </Layout>
  );
};

export default UpdateProduct;
