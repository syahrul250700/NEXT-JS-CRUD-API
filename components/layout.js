import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { Box, CssBaseline } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      <div className="content">
        <CssBaseline />
        <Navbar />
        <Box display="flex">
          <Sidebar />
          <Box component="main" sx={{ flex: "1", mt: 8 }}>
            <main>{children}</main>
          </Box>
        </Box>
        {/* <Footer /> */}
      </div>
    </>
  );
}
