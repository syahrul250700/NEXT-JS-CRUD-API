import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Layout from "@/components/layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { formatDate } from "@/libs/utils";
import Search from "@/components/ui/search";
import CloseIcon from "@mui/icons-material/Close";
import {
  CreateButton,
  EditButton,
  DeleteButton,
  DetailButton,
} from "@/components/ui/button";
// import { Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete"; //delete icon

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
    // console.log("oke jalan");
  }, []);
  // useEffect(() => {
  // const handleDelete = async (id) => {
  //   const res = await fetch(`/api/products?=${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Conten-type": "application/json",
  //     },
  //   });
  //   if (!res.ok) {
  //     console.log("GAGAL menghapus data produk dengan id ", id);
  //   } else {
  //     console.log("Berhasil menghapus data produk dengan id ", id);
  //   }
  // };
  // });
  return (
    <Layout>
      <title>NASH | Products</title>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text font-bold mb-4 text-2xl">PRODUCTS</h1>
        <div className="flex items-center justify-between gap-1 mb-5">
          <CreateButton />
          <Search />
        </div>
        <Alert id="deleteProduct" sx={{ display: "none" }} severity="error">
          Data berhasil dihapus
          <CloseIcon></CloseIcon>
        </Alert>
        <Alert id="updateProduct" sx={{ display: "none" }} severity="success">
          Data Berhasil diubah
          <CloseIcon></CloseIcon>
        </Alert>
        <Alert id="createProduct" sx={{ display: "none" }} severity="success">
          Data Berhasil ditambah
          <CloseIcon></CloseIcon>
        </Alert>
        {products.length > 0 ? (
          <TableContainer component={Paper} className="px-4 ">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Name Product</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Created At</TableCell>
                  <TableCell align="left">Updated At</TableCell>
                  <TableCell align="center">Action </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={product?.id}>
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                      {product?.nameProduct}
                    </TableCell>
                    <TableCell align="left">{product?.description}</TableCell>
                    <TableCell align="left">{product?.price}</TableCell>
                    <TableCell align="left">{product?.quantity}</TableCell>
                    <TableCell align="left">
                      {formatDate(product?.createdAt)}
                    </TableCell>
                    <TableCell align="left">
                      {formatDate(product?.updatedAt)}
                    </TableCell>
                    <TableCell align="center">
                      <DetailButton id={product.id} />
                      <EditButton id={product.id} />
                      <DeleteButton id={product.id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p>Data Kosonng</p>
        )}
      </div>
    </Layout>
  );
};
export default Products;
