import Image from 'next/image'

const Footer = () => {
  return (
    <div className="px-10 py-20 bg-black grid lg:grid-cols-3 lg:items-center lg:justify-center gap-6">
      {/* logo */}
      <div className="grid lg:items-center lg:justify-center gap-1 text-3xl lg:text-2xl text-white font-bold tracking-wide">
        <h1>MODERN</h1>
        <h1>ART GALLERY</h1>
      </div>

      {/* quotes */}
      <p className="text-typography text-md lg:text-sm tracking-wide leading-relaxed font-medium">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>

      {/* social media icons */}
      <div className="flex lg:items-center lg:justify-center gap-4">
        <div className="w-8 h-8 lg:w-6 lg:h-6 relative">
          <Image src="/images/facebook.png" layout="fill" />
        </div>
        <div className="w-8 h-8 lg:w-6 lg:h-6 relative">
          <Image src="/images/instagram.png" layout="fill" />
        </div>
        <div className="w-8 h-8 lg:w-6 lg:h-6 relative">
          <Image src="/images/twitter.png" layout="fill" />
        </div>
      </div>
    </div>
  )
}

export default Footer
