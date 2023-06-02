import SavedLinks from '../../components/SavedLinks.tsx'

const FormSection = () => {
  return (
    <section id="form" className="relative bg-gray-100">
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        {/* FORM */}
        <form
          action="#"
          id="link-form"
          className="-mt-20 flex w-full flex-col space-y-4 rounded-lg bg-darkViolet p-10 md:flex-row md:space-x-3 md:space-y-0"
        >
          <input
            type="text"
            className="b-2 flex-1 rounded-lg p-3 placeholder-yellow-500 focus:outline-none"
            placeholder="Shorten a link here"
            id="link-input"
          />
          <button
            type="button"
            className="rounded-lg bg-cyan px-10 py-3 text-white hover:bg-cyanLight focus:outline-none md:py-2"
          >
            Shorten it!
          </button>
        </form>
        {/* SAVED LINKS */}
        <SavedLinks
          originalLink="https://www.frontendmentor.io"
          shortenLink="https://rel.ink/k4IKyk"
        />
        <SavedLinks
          originalLink="https://www.twitter.com/frontendmentor"
          shortenLink="https://rel.ink/q473yk"
        />
        <SavedLinks
          originalLink="https://www.linkedin.com/frontendmentor"
          shortenLink="https://rel.ink/8fs1lf"
        />
      </div>
    </section>
  )
}

export default FormSection
