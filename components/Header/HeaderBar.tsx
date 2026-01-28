"use client";
import Link from "next/link";
import Search from "./Search";
import EmailIcon from '@mui/icons-material/Email';

const HeaderBar = () => {
  return (
    <div className="fixed w-screen h-25 p-6 items-center bg-black text-white flex justify-between z-20">
      <div className="flex space-x-8 min-w-[80%] items-center">
        <Link href="/" className="text-2xl font-bold">HOME</Link>
        <Search label="Search Widgets Here:" options={["Personal Info"]} />
      </div>
      <a type="email" href="mailto:fake-hr@example.com" className="border border-white p-2 rounded-full"><EmailIcon /></a>
    </div>
  )
}

export default HeaderBar