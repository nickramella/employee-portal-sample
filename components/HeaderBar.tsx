import Link from 'next/link'
import Search from './Search'

const HeaderBar = () => {
  return (
    <div className='w-screen h-18 p-6 items-center bg-purple-500 text-white flex space-x-8'>
        <div>
            <Link href="/" className='text-2xl font-bold'>HOME</Link>
        </div>
        <Search label="Search Widgets Here:" options={["Personal Info"]} />
    </div>
  )
}

export default HeaderBar