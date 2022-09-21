import Image from 'next/image'

const Gallery = () => {
  return (
    <section className="grid lg:grid-rows-2 gap-10">
      <div className="grid grid-flow-row lg:grid-cols-[auto,1fr] gap-10 lg:gap-20">
        <div className="lg:w-[500px] h-full flex flex-col items-center justify-center gap-10 p-10">
          <h3 className="text-3xl lg:text-4xl font-bold text-black text-center lg:text-left tracking-wide">
            YOUR DAY AT THE GALLERY
          </h3>
          <p className="text-sm text-lg:text-md tracking-wide leading-relaxed text-typography text-center lg:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            sunt explicabo assumenda voluptates neque, eum, tempore totam autem
            pariatur, voluptatibus illo! Numquam blanditiis pariatur, ab quasi
            laboriosam hic enim cum. Mollitia consequatur illum sit voluptatum
            odit fugiat soluta, corporis ullam commodi provident consequuntur
            suscipit! Aperiam vitae quia ut nostrum id eaque ea
          </p>
        </div>
        <div className="relative h-[400px] lg:h-full">
          <Image src="/images/image-one.png" layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="grid grid-flow-row lg:grid-cols-2 grid-rows-2 gap-6">
        <div className="relative h-[400px] lg:h-full lg:col-start-1 lg:end-start-1 lg:row-start-1 lg:row-end-3">
          <Image src="/images/image-two.png" layout="fill" objectFit = "cover"/>
        </div>

        <div className="relative h-[400px] lg:h-full lg:col-start-2 lg:end-start-3 lg:row-start-1 lg:row-end-2">
          <Image src="/images/image-three.png" layout="fill" objectFit = "cover"/>
        </div>

        <div className="lg:col-start-2 lg:end-start-3 lg:row-start-2 lg:row-end-3 bg-black grid items-center justify-center gap-4 p-16">
          <h3 className="text-4xl lg:text-3xl font-black text-white tracking-wide">
            COME AND BE INSPIRED
          </h3>
          <p className="text-sm text-lg:text-md tracking-wide leading-relaxed text-typography">
            We're excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Gallery
