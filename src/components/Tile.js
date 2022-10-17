import Link from 'next/link'
import Image from 'next/image'

export const Tile = ({ promotionName, imgSrc, technologies, href }) => {
  return (
    <section className="row-span-2">
      <Link href={href}>
        <div className="relative h-[325px] cursor-pointer p-8 text-white duration-200 hover:-translate-y-1 hover:brightness-110">
          <div className="absolute inset-y-0 left-0 h-full w-full">
            <Image
              className=""
              src={imgSrc}
              alt={promotionName}
              quality="100"
              height="1000"
              width="1000"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span class="pointer-events-none absolute inset-0 m-2 border-2 border-white md:m-4" />
        </div>
      </Link>

      <article className="mt-2 mb-4 text-center">
        <h3 className="text-3xl font-black">{promotionName}</h3>
        {/* Big sexy hook */}
        {/* <p>Placeholder</p> */}
        {technologies && <p className="text-lg">{technologies.join(' • ')}</p>}
      </article>
    </section>
  )
}
