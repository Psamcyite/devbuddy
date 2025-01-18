import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-gray-600 text-white text-center py-2">
            <div className="container">
                <div className="bg-gray-600 text-center py-4 mt-8">
                    <p className="text-sm">&copy; {new Date().getFullYear()} DevBuddy
                        Inc. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    </div>
  )
}
