type Props = { originalLink: string; shortenLink: string }

const SavedLinks = ({ originalLink, shortenLink }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
      <p className="text-center font-bold text-veryDarkViolet md:text-left">
        {originalLink}
      </p>
      <div className="flex flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0">
        <div className="font-bold text-cyan">{shortenLink}</div>
        <button
          type="button"
          className="rounded-lg bg-cyan p-2 px-8 text-white hover:opacity-70 focus:outline-none"
        >
          Copy
        </button>
      </div>
    </div>
  )
}

export default SavedLinks
