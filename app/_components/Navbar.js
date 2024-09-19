"use client"

import { useState } from "react"
import Image from "next/image"
import logo from "@/public/logo.png"
import Link from "next/link"
import CloseIcon from "./CloseIcon"
import MenuIcon from "./MenuIcon"
import { motion } from "framer-motion"

function Navbar() {
  const navLinks = [
    { title: 'Why Open Enterprise', link: '/why-open-enterprice' },
    { title: 'Features', link: '/features' },
    { title: 'Contribute', link: '/contribute' },
    { title: 'Request early access', link: '/request-early-access' }
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header className="mt-12 relative z-20 px-4"
      initial={{ opacity: 0, y: "-100vw" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, }}
    >
      <div className="flex justify-between items-center relative">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="Open Enterprise Logo" width={70} height={70} quality={100} loading="lazy" className="w-auto h-auto" placeholder="blur" />
          <Link href="/" className="font-medium tracking-wide text-lg md:text-xl lg:text-2xl">Open Enterprise</Link>
        </div>
        <button
          className='lg:hidden p-2'
          style={{ minWidth: '48px', minHeight: '48px' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav
          id="mobile-menu"
          className={`
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} 
            lg:max-h-screen lg:opacity-100
            content-visibility: auto
            lg:flex
            flex-col lg:flex-row
            absolute lg:relative
            left-0 lg:left-auto
            top-full lg:top-auto
            w-full lg:w-auto
            lg:bg-transparent
            mt-2 lg:mt-0
            p-4 lg:p-0
            bg-slate-50
            border-b-1
          `}
          style={{ willChange: isMenuOpen ? 'transform' : 'auto' }}
        >
          <ul className="flex flex-col lg:flex-row gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.link} className="duration-150 hover:text-primaryBgColor text-sm md:text-base lg:text-lg">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar


