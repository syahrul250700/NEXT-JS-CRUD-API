import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { TextField, Grid, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";

const DetailProductPage = () => {
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
  return (
    <Layout>
      <title>NASH | Create Products</title>
      <Typography component="h1" variant="h5" className="text-center">
        Detail Product
      </Typography>
      <Box
        className="text-center flex flex-col items-center h-screen"
        component="form"
        sx={{ mt: 3 }}
      >
        {/* <p>{JSON.stringify(products)}</p> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="nameProduct"
              label="Name Product"
              value={products?.nameProduct || ""}
              InputProps={{
                readOnly: true,
              }}
              // defaultValue={products.nameProduct}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="description"
              label="Description"
              value={products?.description || ""}
              InputProps={{
                readOnly: true,
              }}
              // defaultValue={products.description}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              name="price"
              label="Price"
              value={products?.price || ""}
              InputProps={{
                readOnly: true,
              }}
              // defaultValue={products.price}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              name="quantity"
              label="Quantity"
              value={products?.quantity || ""}
              InputProps={{
                readOnly: true,
              }}
              // defaultValue={products.quantity}
            />
          </Grid>
        </Grid>
      </Box>
      ;
    </Layout>
  );
};

export default DetailProductPage;
