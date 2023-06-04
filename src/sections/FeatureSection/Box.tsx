type Props = {
  image: string
  heading: string
  body: string
  className?: string
}

const Box = ({ image, heading, body, className }: Props) => {
  return (
    <div
      className={`${className} relative flex flex-col space-y-6 rounded-lg bg-white p-6 md:w-1/3`}
    >
      {/* IMAGE POSITIONING */}
      <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
        {/* IMAGE CONTAINER FOR BACKGROUND & CENTER */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
          <img src={image} alt="brand recognition" />
        </div>
      </div>
      <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
        {heading}
      </h5>
      <p className="text-center text-gray-400 md:text-left">{body}</p>
    </div>
  )
}

Box.defaultProps = {
  className: '',
}

export default Box
