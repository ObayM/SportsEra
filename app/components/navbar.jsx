'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          SportsEra
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink href="/quiz">Quiz</NavLink>
          <NavLink href="/meals">Meal Plans</NavLink>
          <NavLink href="/motivation">Motivation</NavLink>
          <NavLink href="/profile">Profile</NavLink>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Sign Up / Login button */}
        <Link href="/auth" className="hidden md:block bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Sign Up / Login
        </Link>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 mt-2 p-4 rounded-lg">
          <NavLink href="/quiz" mobile>Quiz</NavLink>
          <NavLink href="/meals" mobile>Meal Plans</NavLink>
          <NavLink href="/motivation" mobile>Motivation</NavLink>
          <NavLink href="/profile" mobile>Profile</NavLink>
          <Link href="/auth" className="block bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300 text-center mt-2">
            Sign Up / Login
          </Link>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, mobile }) => (
  <Link href={href} className={`text-white hover:text-blue-200 transition duration-300 ${mobile ? 'block mb-2' : ''}`}>
    {children}
  </Link>
);

export default Navbar;