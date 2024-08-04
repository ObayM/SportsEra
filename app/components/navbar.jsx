'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Home, Dumbbell, Utensils, User } from 'lucide-react';

const NavLink = ({ href, children, icon: Icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <motion.span
        className={`flex items-center px-4 py-2 rounded-full text-white transition-colors cursor-pointer ${
          isActive ? 'bg-blue-600' : 'hover:bg-blue-700'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="mr-2" size={20} />
        {children}
      </motion.span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.span
              className="text-white text-2xl font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SportEra
            </motion.span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink href="/" icon={Home}>Home</NavLink>
            <NavLink href="/quiz" icon={Dumbbell}>Quiz</NavLink>
            <NavLink href="/meal-plan" icon={Utensils}>Meal Plan</NavLink>
            <NavLink href="/profile" icon={User}>Profile</NavLink>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-2">
            <NavLink href="/" icon={Home}>Home</NavLink>
            <NavLink href="/quiz" icon={Dumbbell}>Quiz</NavLink>
            <NavLink href="/meal-plan" icon={Utensils}>Meal Plan</NavLink>
            <NavLink href="/profile" icon={User}>Profile</NavLink>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;