import LogoImage from '../../assets/logo.svg'
import FacebookIcon from '../../assets/icon-facebook.svg'
import InstagramIcon from '../../assets/icon-instagram.svg'
import TwitterIcon from '../../assets/icon-twitter.svg'
import PinterestIcon from '../../assets/icon-pinterest.svg'
import Menu from './Menu.tsx'
import Icon from './Icon.tsx'

const CTAFooterSection = () => {
  return (
    <>
      <section id="cta" className="bg-darkViolet py-24">
        <div className="flex flex-col space-y-6 p-2">
          <h5 className="mx-auto space-y-10 text-center text-4xl font-bold text-white">
            Boost your links today
          </h5>
          <button
            type="button"
            className="mx-auto rounded-full bg-cyan px-10 py-5 text-2xl font-bold text-white hover:bg-cyanLight focus:outline-none md:py-3 md:text-base"
          >
            Get Started
          </button>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-veryDarkViolet py-16">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-16 md:flex-row md:items-start md:space-y-0">
          {/* LOGO */}
          <img src={LogoImage} alt="logo" />
          {/* MENUS CONTAINER */}
          <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">
            {/* MENU */}
            <Menu
              heading="Features"
              subLinks={['Link shortening', 'branded links', 'analytics']}
            />
            <Menu
              heading="Resources"
              subLinks={['blog', 'developers', 'support']}
            />
            <Menu
              heading="Company"
              subLinks={['about', 'our team', 'careers']}
            />
          </div>
          {/* SOCIAL LINKS */}
          <div className="flex space-x-6">
            <Icon icon={FacebookIcon} altText="facebook icon" />
            <Icon icon={TwitterIcon} altText="twitter icon" />
            <Icon icon={InstagramIcon} altText="instagram icon" />
            <Icon icon={PinterestIcon} altText="pinterest icon" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default CTAFooterSection
