"use client";
import Link from 'next/link';
import Search from './Search';

const HeaderBar = () => {
  return (
    <div className='fixed w-screen h-25 p-6 items-center bg-purple-700 text-white flex space-x-8 z-10'>
      <Link href="/" className='text-2xl font-bold'>HOME</Link>
      <Search label="Search Widgets Here:" options={["Personal Info"]} />
    </div>
  )
}

export default HeaderBar