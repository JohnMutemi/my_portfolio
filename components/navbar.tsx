"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          John Mutemi
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Resume Dropdown */}
          <div className="relative group">
            <Button variant="outline" className="gap-2">
              Resume <Download className="h-4 w-4" />
            </Button>
            <div className="absolute right-0 mt-2 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <a
                  href="/john-mutemi-resume.pdf"
                  download
                  className="block px-4 py-2 text-sm hover:bg-muted cursor-pointer"
                >
                  Download PDF
                </a>
                <a
                  href="/john-mutemi-resume.docx"
                  download
                  className="block px-4 py-2 text-sm hover:bg-muted cursor-pointer"
                >
                  Download Word
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open("/john-mutemi-resume.pdf", "_blank")
                  }}
                  className="block px-4 py-2 text-sm hover:bg-muted cursor-pointer"
                >
                  View Online
                </a>
              </div>
            </div>
          </div>

          <ModeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-lg py-2 border-b border-border"
              >
                {link.label}
              </Link>
            ))}

            {/* Resume Options */}
            <div className="py-2 border-b border-border">
              <p className="text-lg mb-2">Resume</p>
              <div className="flex flex-col space-y-2 pl-4">
                <a
                  href="/john-mutemi-resume.pdf"
                  download
                  className="text-sm text-muted-foreground"
                  onClick={closeMenu}
                >
                  Download PDF
                </a>
                <a
                  href="/john-mutemi-resume.docx"
                  download
                  className="text-sm text-muted-foreground"
                  onClick={closeMenu}
                >
                  Download Word
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open("/john-mutemi-resume.pdf", "_blank")
                    closeMenu()
                  }}
                  className="text-sm text-muted-foreground"
                >
                  View Online
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
