import { ListItem } from '@mui/material';
import Link from 'next/link';
import React from 'react'

interface SideBarLinkProps {
    link: string;
    title: string;
}

const SideBarLink = ({link, title}: SideBarLinkProps) => {
  return (
    <ListItem className="hover:text-white hover:bg-black">
        <Link href={link}>{title}</Link>
    </ListItem>
  )
}

export default SideBarLink