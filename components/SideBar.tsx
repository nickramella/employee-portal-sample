"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectProfile } from "@/lib/rootSlice";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const profile = useSelector(selectProfile);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        { profile.lastName && profile.firstName && profile.email && 
          <div className="p-4">
              <h1>{`${profile.lastName}, ${profile.firstName}`}</h1>
              <h2>{`${profile.email}`}</h2>
          </div>
        }
        <List className="font-bold text-2xl">
            <SideBarLink link="/" title="Home" />
            <SideBarLink link="/personal-info" title="Personal Info" />
            <SideBarLink link="/taxes" title="Taxes" />
            <SideBarLink link="/career" title="Career" />
            <SideBarLink link="/payroll" title="Payroll" />
            <SideBarLink link="/admin" title="Admin" />
        </List>
    </Box>
  );

  return (
    <div className="bg-gray-100 p-3 h-screen fixed mt-25">
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{color: "black"}} fontSize="large" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default SideBar;
