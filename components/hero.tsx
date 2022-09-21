import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="lg:h-[500px] grid grid-flow-row lg:grid-cols-3 gap-10 lg:gap-0 lg:grid-cols-3">
      {/* image */}
      <div className="h-[400px] lg:h-full relative lg:col-start-2 lg:col-end-3">
        <Image src="/images/hero-img.jpg" layout="fill" objectFit="cover" />

        <div className="hidden lg:block z-50">
          <div className="absolute top-20 -left-2 font-bold text-black tracking-wide text-6xl">
            <h1>l</h1>
            <h1>LERY</h1>
          </div>
        </div>
      </div>

      {/* heading */}
      {/* mobile */}
      <div className="relative lg:hidden">
        <h1 className="font-bold text-black text-center lg:text-white text-4xl">
          MODERN ART GALLERY
        </h1>
      </div>

      {/* laptop */}
      <div className="bg-black relative hidden lg:block lg:col-start-1 lg:col-end-2 lg:row-start-1">
        <div className="absolute top-20 -right-0 font-bold text-white tracking-wide text-6xl z-50">
          <h1>MODERN</h1>
          <h1>ART GAL</h1>
        </div>
      </div>

      {/* paragraph */}
      <div className="lg:col-start-3 lg:col-end-4 flex flex-col items-center lg:justify-end text-left text-center gap-6 z-50 lg:p-6">
        <p className="text-md lg:text-lg text-typography font-medium">
          The arts in collection of the Modern Art Gallery all started from a
          spark of inspiration. Will these pieces inspire you? Visit us and find
          out.
        </p>

        <div className="flex">
          <div className="bg-black px-6 py-4 text-white text-sm lg:text-md font-semibold tracking-wide">
            OUR LOCATION
          </div>
          <div className="bg-pitch px-6 py-4 grid items-center place-items-center">
            <ChevronRightIcon className="w-6 h-6 text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
