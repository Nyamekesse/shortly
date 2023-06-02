import Logo from '../../assets/logo.svg'
import NavButton from '../../components/NavButton.tsx'

const NavSection = () => {
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
      </div>
      {/* MOBILE MENU */}
    </nav>
  )
}

export default NavSection
