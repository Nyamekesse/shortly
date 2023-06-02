type Props = { label: string }

const NavButton = ({ label }: Props) => {
  return (
    <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
      {label}
    </a>
  )
}

export default NavButton
