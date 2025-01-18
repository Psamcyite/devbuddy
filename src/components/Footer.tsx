import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white text-center py-2 mt-auto">
            <div className="container mx-auto">
                <p className="text-sm">&copy; {new Date().getFullYear()} DevBuddy
                    . All rights reserved
                </p>
            </div>
        </footer>
    </div>
  )
}
