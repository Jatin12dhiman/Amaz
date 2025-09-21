import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import Search from './search'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'

export default function Header() {
  return (
    <header className="bg-black text-white w-full">
      {/* Top Section */}
      <div className="px-3 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-2xl header-button"
            aria-label={`${APP_NAME} Home`}
          >
            <Image
              src="/icons/logo.svg"
              width={40}
              height={40}
              alt={`${APP_NAME} logo`}
              priority
            />
            <span>{APP_NAME}</span>
          </Link>

          {/* Search (Desktop Only) */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <Search />
          </div>

          {/* Menu (Icons: Sign In, Cart, etc.) */}
          <Menu />
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="flex items-center px-3 bg-gray-800">
        {/* Left "All" Menu */}
        <Button
          variant="ghost"
          className="header-button flex items-center gap-1 text-base [&_svg]:size-6"
        >
          <MenuIcon />
          <span>All</span>
        </Button>

        {/* Horizontal Menus */}
        <nav
          className="flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]"
          aria-label="Main navigation"
        >
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className="header-button !p-2 whitespace-nowrap"
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
