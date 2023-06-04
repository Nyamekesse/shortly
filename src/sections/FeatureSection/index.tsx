import BrandRecognitionImage from '../../assets/icon-brand-recognition.svg'
import DetailedRecordsImage from '../../assets/icon-detailed-records.svg'
import FullyCustomizableImage from '../../assets/icon-fully-customizable.svg'
import Box from './Box.tsx'

const FeatureSection = () => {
  return (
    <section id="features" className="bg-gray-100 pb-32">
      <div className="container relative mx-auto flex flex-col items-start px-6 md:flex-row md:space-x-7">
        {/* HORIZONTAL LINE */}
        <div className="absolute left-16 top-24 hidden h-3 w-10/12 bg-cyan md:block" />
        {/* VERTICAL */}
        <div className="absolute left-1/2 -ml-1 h-full w-2 bg-cyan md:hidden" />
        {/* BOXES */}
        <Box
          image={BrandRecognitionImage}
          heading=" Brand recognition"
          body="Boost your brand recognition with each click. Generic links don't
        mean a thing. Branded links help instil confidence in your content."
        />
        <Box
          image={DetailedRecordsImage}
          className="mt-24 md:mt-8"
          heading="Detailed records"
          body="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <Box
          image={FullyCustomizableImage}
          className="mt-24 md:mt-16"
          heading="Full Customizable"
          body="Improve brand awareness and content discoverability through customizable links, super charging audience engagement."
        />
      </div>
    </section>
  )
}

export default FeatureSection
