"use client"

import { Menu, X } from 'lucide-react'
import { NavLink, MobileNavLink } from './nav-links'

import "../css/header.css"
import { ModeToggle } from './mode-toggle'

export function Header({ isMenuOpen, toggleMenu }) {
    return (
        <header className="bg-background shadow-sm sticky top-0 z-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold">My Portfolio</span>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#description">About</NavLink>
                        <NavLink href="#education">Education</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>

                        <div className="container flex h-14 max-w-screen-2xl items-center pt-2">
                            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                                <nav className="flex items-center">
                                    <ModeToggle />
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <MobileNavLink href="#home">Home</MobileNavLink>
                        <MobileNavLink href="#description">About</MobileNavLink>
                        <MobileNavLink href="#education">Education</MobileNavLink>
                        <MobileNavLink href="#skills">Skills</MobileNavLink>
                        <MobileNavLink href="#experience">Experience</MobileNavLink>
                        <MobileNavLink href="#projects">Projects</MobileNavLink>
                        <MobileNavLink href="#contact">Contact</MobileNavLink>

                        <div className="container flex h-14 max-w-screen-2xl items-center px-4">
                            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                                <nav className="flex items-center">
                                    <ModeToggle />
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}