type NavLink = {
  href: string
  label: string
}

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/products', label: 'products' },
  { href: '/cart', label: 'cart' },
  { href: '/orders', label: 'orders' },
  { href: '/admin', label: 'admin' },
  { href: '/about', label: 'about' },
]
