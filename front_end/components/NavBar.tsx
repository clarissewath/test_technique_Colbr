import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (

    <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto">
            
                <ul className="flex items-center justify-end h-16 gap-5">
                    <li className="text-white">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>    
                    <li className="text-white flex">
                        <Link href="/register">
                        <a>Register</a>
                        </Link>
                    </li>
                    <li className="text-white flex">
                        <Link href="/login">
                        <a>Login</a>
                        </Link>
                    </li>
                </ul>
            
        </div>
    </nav>
        
  )
}

export default NavBar