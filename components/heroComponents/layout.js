import Link from 'next/link'
import { slugify } from '../utils/helpers'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { navItemLength } from '../ecommerce.config'

export default function Layout({ categories, children }) {
  const truncatedCategories = categories.slice(0, navItemLength)

  const navLinks = [
    { label: 'Home', href: '/' },
    ...truncatedCategories.map(category => ({
      label: category.charAt(0).toUpperCase() + category.slice(1),
      href: `/category/${slugify(category)}`
    })),
    { label: 'All', href: '/categories' }
  ]

  return (
    <div>
      <nav>
        <div className="flex justify-center">
          <div className="flex flex-col px-4 pt-8 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0 w-full max-w-fw">
            <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
              <Link href="/" aria-label="Home">
                <a>
                  <img src="/logo.png" alt="Logo" width="250" height="250" />
                </a>
              </Link>
            </div>
            <div className="flex flex-wrap mt-1">
              {navLinks.map(({ label, href }, index) => (
                <Link href={href} key={index} aria-label={label}>
                  <a>
                    <p className="sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4">
                      {label}
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="px-4 pb-10 flex justify-center">
        <main className="w-full">{children}</main>
      </div>
      <footer className="flex justify-center border-t border-red-300 desktop:px-0">
        <div className="flex flex-col sm:flex-row sm:items-center px-12 py-8">
          <span className="block text-red-900 text-xs">
            © 2023 André Lobo. All rights reserved
          </span>
          <div className="sm:justify-end flex flex-1 mt-4 sm:m-0">
            <Link href="/admin" aria-label="Admin panel">
              <a>
                <p className="text-sm font-semibold">Admins</p>
              </a>
            </Link>
          </div>
        </div>
      </footer>
      <ToastContainer autoClose={3000} />
    </div>
  )
}
