"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectProfile } from '@/lib/rootSlice';

const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const profile = useSelector(selectProfile);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <div className='p-4'>
            <h1>{`${profile.lastName}, ${profile.firstName}`}</h1>
            <h2>{`Contact: ${profile.email}`}</h2>
        </div>
        <List>
            <ListItem>
                <Link href="/">Home</Link>
            </ListItem>
            <ListItem>
                <Link href="/personal-info">Personal Info</Link>
            </ListItem>
            <ListItem>
                <Link href="/career">Career</Link>
            </ListItem>
        </List>
    </Box>
  );

  return (
    <div className='bg-gray-100 p-3 h-screen fixed mt-25'>
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
