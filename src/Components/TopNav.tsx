import Link from 'next/link'
import React from 'react'

const TopNav = () => {
  return (
<nav className="bg-gray-800 p-4 text-lg">
    <div className="container mx-auto flex items-center">
    <div className="text-white font-bold mr-auto">
      <Link href="/home">Adeel Blogs </Link>
    </div>

    <div className="flex space-x-10 ">
    <Link href="/home" className="text-gray-300 hover:text-white hover:bg-gray-700 p-1 px-4 rounded-sm">Home page </Link>

      <Link href="/blogs" className="text-gray-300 hover:text-white hover:bg-gray-700 p-1 px-4 rounded-sm">Blog Page </Link>
      <Link href="/About" className="text-gray-300 hover:text-white hover:bg-gray-700 p-1 px-4 rounded-sm">About us</Link>
    </div>
  </div>
</nav>

  )
}

export default TopNav