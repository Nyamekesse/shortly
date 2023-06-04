type Props = { icon: string; altText: string }

const Icon = ({ icon, altText }: Props) => {
  return (
    <div className="ficon">
      <a href="#">
        <img src={icon} alt={altText} />
      </a>
    </div>
  )
}

export default Icon
