import React from 'react'
import NavSearch from './NavSearch'
import CartButton from './CartButton'
import LinksDropdown from './LinksDropdown'
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className='border-b'>
      <section className='  flex flex-col items-center justify-center flex-wrap sm:flex-row sm:justify-between sm:items-center p-4 mx-8 max-w-[1200px]'>
        <Logo />
        <NavSearch />
        <div className='flex items-center justify-center gap-4 mt-4'>
          <CartButton />
          <LinksDropdown />
        </div>
      </section>
    </nav>
  )
}
