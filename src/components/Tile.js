import Image from 'next/image'

export const Tile = ({ promotionName, imgSrc, technologies }) => {
  return (
    <section className="row-span-2">
      <div className="relative h-full min-h-[170px] cursor-pointer p-8 text-white duration-200 hover:-translate-y-1 hover:brightness-110">
        <div className="absolute inset-y-0 left-0 h-full w-full">
          <Image src={imgSrc} alt={promotionName} height={500} width={500} />
        </div>
        <span className="pointer-events-none absolute inset-0 m-2 border-2 border-white md:m-2" />
      </div>

      <article className="mb-4 mt-2 text-center">
        <h3 className="text-3xl font-black">{promotionName}</h3>
        {technologies && <p className="text-lg">{technologies.join(' • ')}</p>}
      </article>
    </section>
  )
}
