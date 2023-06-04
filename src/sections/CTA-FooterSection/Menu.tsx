type Props = { heading: string; subLinks: Array<string> }

const Menu = ({ heading, subLinks }: Props) => {
  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <div className="mb-5 font-bold capitalize text-white">{heading}</div>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        {subLinks.map((link) => {
          return (
            <a
              href="#"
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              {link}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
