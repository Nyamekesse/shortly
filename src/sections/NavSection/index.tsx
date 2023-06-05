import React from 'react'
import Logo from '../../assets/logo.svg'
import NavButton from '../../components/NavButton.tsx'

const NavSection = () => {
  const [openMenu, setOpenMenu] = React.useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <nav className="container relative mx-auto p-6">
      {/* FLEX CONTAINER ALL ITEMS */}
      <div className="flex items-center justify-between">
        {/* FLEX CONTAINER FOR LOGO & MENU */}
        <div className="flex items-center space-x-20">
          {/* LOGO */}
          <img src={Logo} alt="logo" />
          {/* LEFT MENU */}
          <div className="hidden space-x-8 font-bold lg:flex">
            <NavButton label="Feature" />
            <NavButton label="Pricing" />
            <NavButton label="Resources" />
          </div>
        </div>
        {/* RIGHT BUTTONS */}
        <div className="font0bold hidden items-center space-x-6 text-grayishViolet lg:flex">
          <div className="hover:text-veryDarkViolet">Login</div>
          <a
            href="#"
            className="rounded-full bg-cyan px-8 py-3 font-bold text-white hover:opacity-70"
          >
            Sign Up
          </a>
        </div>
        {/* HAMBURGER MENU */}
        <div
          className="md:hidden"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              toggleMenu()
            }
          }}
        >
          <button
            type="button"
            className={`${
              openMenu ? 'open' : ''
            } hamburger z-40 block focus:outline-none md:hidden`}
            id="btnMenu"
          >
            <span className="hamburger-top" />
            <span className="hamburger-middle" />
            <span className="hamburger-bottom" />
          </button>
        </div>
      </div>
      {/* MOBILE MENU */}
      <div
        id="menu"
        className={`z-100 absolute left-6 right-6 top-20 ${
          openMenu ? 'flex' : 'hidden'
        } rounded-lg bg-darkViolet p-6`}
      >
        <div className="flex w-full flex-col items-center justify-center space-y-6 rounded-sm font-bold text-white">
          <a href="#" className="w-full text-center">
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a>
          <a
            href="#"
            className="w-full border-t border-gray-400 pt-6 text-center"
          >
            LogIn
          </a>
          <a href="#" className="w-full rounded-full bg-cyan py-3 text-center">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavSection
