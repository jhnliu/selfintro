"use client";
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignIn, SignedIn, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'


const MobileNav = () => {

    const pathname = usePathname();
    return (
        <header className='header'>
            <Link href="/" className='flex items-center gap-2 md:py-2'>
                <Image
                    src='/assets/images/logo-text.svg'
                    alt='logo'
                    width={180}
                    height={28}
                />
            </Link>
            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                </SignedIn>
                <Sheet>
                    <SheetTrigger>
                        <Image
                            src='/assets/icons/menu.svg'
                            alt='menu'
                            width={32}
                            height={32}
                            className='cursor-pointer'
                        />
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                        <>
                            <Image
                                src="/assets/images/logo-text.svg"
                                alt="logo"
                                width={153}
                                height={23}
                            />
                            <ul className="header-nav_elements">
                                {navLinks.map((link) => {
                                    const isActive = link.route === pathname

                                    return (
                                        <li
                                            className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                                            key={link.route}
                                        >
                                            <Link href={link.route}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                    </SheetContent>
                </Sheet>

            </nav>
        </header>
    )
}

export default MobileNav