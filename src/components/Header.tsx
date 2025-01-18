import Link from 'next/link'
import React from 'react'

function Header() {
  return (
   <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
        
          DevBuddy
        </Link>
      </div>
   </nav>
  )
}

export default Header;
