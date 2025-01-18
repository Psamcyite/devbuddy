import Link from 'next/link'
import React from 'react'


function Header() {
  return (
   <nav className="bg-blue-900 text-white p-1">
      <div 
        className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <img src="/assets/logo/buddy.png" alt="DevBuddy" className="h-8" />
          DevBuddy
        </Link>
      </div>
   </nav>
  )
}

export default Header;
