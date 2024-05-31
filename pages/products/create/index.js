import Layout from "@/components/layout";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { TextField, Grid, Typography, Box, Alert } from "@mui/material";

const CreateProductPage = () => {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const productsData = {
      nameProduct: formData.get("nameProduct"),
      description: formData.get("description"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
    };
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(productsData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      // document.getElementById("createProduct");
      router.push("/products");
    } else {
      console.error("Error creating product");
    }
  };
  return (
    <Layout>
      <title>NASH | Create Products</title>
      <Typography component="h1" variant="h5" className="text-center">
        Create a New Product
      </Typography>
      <Alert id="createProduct" sx={{ display: "none" }} severity="success">
        Data Berhasil ditambah
      </Alert>

      <Box
        className="text-center flex flex-col items-center h-screen"
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="nameProduct"
              name="nameProduct"
              label="Name Product"
              id="nameProduct"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="description"
              name="description"
              label="Description"
              id="description"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="price"
              name="price"
              label="Price"
              id="price"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="quantity"
              name="quantity"
              label="Quantity"
              id="quantity"
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          label={"save"}
          className="bg-blue-600 text-white hover:bg-blue-600 hover:text-white mt-4"
        >
          Create Product
        </Button>
      </Box>
    </Layout>
  );
};
export default CreateProductPage;
