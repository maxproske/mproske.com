import Link from 'next/link'
import Image from 'next/image'
import { Tile } from '../../../components/Tile'
import { Awards } from '../../../components/Awards'

export default function SIX12() {
  const tiles = [
    '/img/six12/circlekgames-31dock-open.png',
    '/img/six12/circlekgames-dss-open.png',
    '/img/six12/circlekgames-klondike-open.png',
    '/img/six12/circlekgames-RPP6A-open.png',
    '/img/six12/circlekgames-RPP6B-contest-open-FR-CT.png',
    '/img/six12/circlekgames-RPP6B-contest-open.png',
    '/img/six12/circlekgames-RPP6fuel-open.png',
    '/img/six12/ckn_Hockey-Game_747x830_Open.png',
    '/img/six12/ct_en_FuelRunner-2_website-tiles_747x830_open.png',
    '/img/six12/ct_en_WinFuel_website-tile_747x830_open.png',
    '/img/six12/ct_fr_FuelRunner-2_website-tiles_747x830_open.png',
    '/img/six12/ct_fr_WinFuel_website-tile_747x830_open (1).png',
    '/img/six12/ct_fr_WinFuel_website-tile_747x830_open.png',
    '/img/six12/DSS2-circlekgames-open.png',
    '/img/six12/ec_31DOCK_website-tiles_747x830_open.png',
    '/img/six12/ec_31DOCK-ckgames-open.png',
    '/img/six12/ec_ck_Big_Brother_Contest_website-tiles_747x830_open.png',
    '/img/six12/ec_ckgames-cokeFIFA-open.png',
    '/img/six12/ec_DrPepper_website-tiles_747x830_open.png',
    '/img/six12/ec_FFY_Contest_website-tiles_747x830_open.png',
    '/img/six12/ec_FuelRunner-2_website-tiles_747x830_open.png',
    '/img/six12/ec_FuelRunner-ckgames-open.png',
    '/img/six12/ec_GURU_website-tiles_747x830_open.png',
    '/img/six12/ec_MondelezXbox_website-tiles_747x830_open.png',
    '/img/six12/ec_monster_website-tiles_747x830_open.png',
    '/img/six12/ec_MonsterStreamer_website-tiles_747x830_open.png',
    '/img/six12/ec_Pepsi_P12_UEFA_Contest_website-tiles_747x830_open.png',
    '/img/six12/ec_PepsiContest-ckgames-open.png',
    '/img/six12/en_Biosteel-747x830_open.png',
    '/img/six12/en_ck_Coke-Creations_website-tiles_open_747x830.png',
    '/img/six12/en_ck_coke-trivia_open-tiny.png',
    '/img/six12/en_ck_coke-trivia_open.png',
    '/img/six12/en_ck_Nestle_RoadTripContest_open_747x830.png',
    '/img/six12/en_ck_Pepsi-NHL-UPC-Contest_webtiles_747x830_open.png',
    '/img/six12/en_ck_RPP7_PartB_website-tiles_open_747x830_v2.png',
    '/img/six12/en_ck_RPP7_website-tiles_open_747x830.png',
    '/img/six12/en_ck_RPP7B_PeelCard_webtile_open_747x830.png',
    '/img/six12/en_ck_WinFuel_website-tiles_open_747x830.png',
    '/img/six12/en_ct_Coke-Creations_website-tiles_open_747x830.png',
    '/img/six12/en_ct_coke-trivia_open-tiny.png',
    '/img/six12/en_ct_coke-trivia_open.png',
    '/img/six12/en_ct_Pepsi-NHL-UPC-Contest_webtiles_747x830_open.png',
    '/img/six12/en_ct_RPP7_PartB_website-tiles_open_747x830_v2.png',
    '/img/six12/en_ct_RPP7_website-tiles_open_747x830.png',
    '/img/six12/en_ct_RPP7B_PeelCard_webtile_open_747x830.png',
    '/img/six12/en_ct_WinFuel_website-tiles_open_747x830.png',
    '/img/six12/en_OhHenry_website-tile_747x830_open_v2.png',
    '/img/six12/en_qc_Biosteel-747x830_open.png',
    '/img/six12/en_qc_Pepsi_P12_UEFA_Contest_website-tiles_747x830_open.png',
    '/img/six12/en_WinFuel_website-tile_747x830_open.png',
    '/img/six12/fc_ckgames-cokeFIFA-open.png',
    '/img/six12/fc_EN-FuelRunner-ckgames-open.png',
    '/img/six12/fc_FR-31DOCK-ckgames-open.png',
    '/img/six12/fc_FR-FuelRunner-ckgames-open.png',
    '/img/six12/fc_PepsiContest-ckgames-open.png',
    '/img/six12/fr_ct_Coke-Creations_website-tiles_open_747x830.png',
    '/img/six12/fr_ct_coke-trivia_open-tiny.png',
    '/img/six12/fr_ct_Nestle_RoadTripContest_open_747x830.png',
    '/img/six12/fr_ct_Pepsi-NHL-UPC-Contest_webtiles_747x830_open.png',
    '/img/six12/fr_ct_RPP7_PartB_website-tiles_open_747x830_v2.png',
    '/img/six12/fr_ct_RPP7_website-tiles_open_747x830.png',
    '/img/six12/fr_ct_RPP7B_PeelCard_webtile_open_747x830.png',
    '/img/six12/fr_ct_WinFuel_website-tiles_open_747x830.png',
    '/img/six12/jeuxcouchetard-31dock-open.png',
    '/img/six12/jeuxcouchetard-dss-open.png',
    '/img/six12/jeuxcouchetard-RPP6A-open.png',
    '/img/six12/jeuxcouchetard-RPP6fuel-open.png',
    '/img/six12/mondelez-circlekgames-open.png',
    '/img/six12/NBA-Hershey-circlekgames-open.png',
    '/img/six12/NBA-Hershey-jeuxcouchetard-open.png',
    '/img/six12/qc_31DOCK_website-tiles_747x830_open.png',
    '/img/six12/qc_Biosteel-747x830_open.png',
    '/img/six12/qc_ct_OhHenry_website-tile_747x830_open_v2.png',
    '/img/six12/qc_DrPepper_website-tiles_747x830_open.png',
    '/img/six12/qc_en_31DOCK-website-tiles_747x830_open.png',
    '/img/six12/qc_en_MonsterStreamer_website-tiles_747x830_open.png',
    '/img/six12/qc_monster_website-tiles_747x830_open.png',
    '/img/six12/qc_MonsterStreamer_website-tiles_747x830_open.png',
    '/img/six12/qc_Pepsi_P12_UEFA_Contest_website-tiles_747x830_open.png',
    '/img/six12/RPP5-circlekgames-open.png',
    '/img/six12/RPP5-jeuxcouchetard-open.png',
    '/img/six12/RPP5B-circlekgames-open.png',
    '/img/six12/RPP5B-jeuxcouchetard-open.png',
  ]

  return (
    <>
      <Link href="#content" className="skip">
        Skip to content
      </Link>
      <main id="content" className="content">
        <div className="go-back">
          <Link href="/#my-work">« Go back</Link>
        </div>

        <section id="work">
          <h1 className="header">SIX12</h1>

          <div className="project">
            <p className="description">
              SIX12 delivers highly customized web-based solutions for well-known brands throughout North America. As a
              Director, I lead an agency of talented individuals who specialize in a full range of marketing,
              engineering, and design services. We combine great strategy, design, and technology to pioneer innovative
              online gamification and loyalty initiatives.
            </p>

            <p className="description">
              By continuously defining behaviour norms, I prioritize a company culture that fosters trust and
              psychological safety, which are crucial components for innovation and growth. I've led a subculture within
              my development team that's centered around adopting a senior growth mindset, constantly challenging and
              empowering them to accelerate their career growth just as I have.
            </p>

            <p className="description">
              <strong>Key Clients:</strong> Big Brother, Bungie, Circle K, Coca-Cola, Couche-Tard, FIFA, GURU, Hershey,
              Marvel, McDonald's, Mondelēz, Monster Energy, NBA, Nestlé, NFL, NHL, Pepsi, Red Bull, Ubisoft, and
              Unilever.
            </p>

            <h2 className="m-0 mt-16 pb-4 pt-8 text-5xl font-black" id="projects">
              Projects
            </h2>

            <div className="grid grid-cols-5 gap-4 text-center">
              {tiles
                .sort(() => Math.random() - Math.random())
                .map((tile, index) => (
                  <Tile
                    key={index}
                    promotionName=""
                    imgSrc={tile}
                    technologies={[]}
                    href="/work/six12creative/fuel-runner"
                  />
                ))}
            </div>
          </div>
        </section>

        <div className="back-to-top">
          <Link href="#">Back to top</Link>
        </div>
        <div className="go-back">
          <Link href="/#my-work">« Go back</Link>
        </div>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}
