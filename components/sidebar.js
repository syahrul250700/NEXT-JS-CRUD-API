import Image from "next/image";
import Link from "next/link";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from "@mui/icons-material/Inventory";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";

export default function Sidebar() {
  return (
    <div className="px-12 pt-8 pb-4 flex justify-between bg-[#143447]">
      <Box>
        <List className="text-slate-300">
          <ListItem>
            <DashboardIcon />
            <Link href="/">
              <ListItemText primary="Dashboard" />
            </Link>
          </ListItem>
          <ListItem>
            <InventoryIcon />
            <Link href="/products">
              <ListItemText primary="Products" />
            </Link>
          </ListItem>
          <ListItem>
            <InfoIcon />
            <Link href="/about">
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem>
            <HelpIcon />
            <Link href="/help">
              <ListItemText primary="Help" />
            </Link>
          </ListItem>
          <ListItem>
            <SettingsIcon />
            <Link href="/setting">
              <ListItemText primary="Setting" />
            </Link>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
