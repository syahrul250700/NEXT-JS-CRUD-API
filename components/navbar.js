import * as React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

export default function Navbar() {
  const { data } = useSession();
  // console.log(data);
  return (
    <AppBar position="static" className="bg-[#143447]">
      <Toolbar sx={{ minHeight: "50px" }}>
        <Image
          src="/nash_logo-removebg.png"
          width={50}
          height={50}
          alt="logo"
          priority={false} // {false} | {true}
          className="pt-1 "
        />
        <Typography variant="h6" color="primary.contrastText">
          NASH JS
        </Typography>
        <div
          className="flex gap-2 items-center justify-end flex-1"
          style={{ height: "100%" }}
        >
          <IconButton className="text-slate-300">
            <Badge
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              badgeContent={4}
              color="primary"
              className="mr-4"
            >
              <MailIcon />
            </Badge>
          </IconButton>
          <Typography
            variant="h6"
            color="primary.contrastText"
            className="mr-4"
          >
            {data && data.user.name}
          </Typography>
          {data ? (
            <Button
              color="inherit"
              size="large"
              onClick={() => signOut()}
              className="bg-cyan-700"
            >
              Sign Out
            </Button>
          ) : (
            <Button
              color="inherit"
              size="large"
              onClick={() => signIn()}
              className="bg-cyan-700"
            >
              Sign In
            </Button>
          )}
        </div>
        {/* <Avatar className="ml-auto">H</Avatar> */}
      </Toolbar>
    </AppBar>

    // <div>
    //   <div>
    //     <nav className="navbar navbar-expand-lg navbar-light  bg-[#143447]">
    //       <Image
    //         src="/nash_logo-removebg.png"
    //         width={80}
    //         height={80}
    //         alt="logo"
    //         className="pt-1 ml-16"
    //       />
    //     </nav>
    //   </div>
    // </div>
  );
}
