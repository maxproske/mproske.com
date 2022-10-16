export const Tile = ({ promotionName, year, size, color }) => {
  return (
    <article
      className={`${
        promotionName === 'Fuel Runner' && 'row-span-3'
      } row-span-2 flex flex-wrap content-center items-center justify-center bg-[#0055ff] p-8 text-white`}
    >
      <h3 className="mb- mt-0 text-3xl">{promotionName}</h3>
    </article>
  )
}
