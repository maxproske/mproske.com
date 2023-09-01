import Image from 'next/image'

export const Awards = () => {
  return (
    <div className="awards flex-row flex-wrap sm:flex-nowrap">
      <div className="award">
        <div className="award-icon">
          <Image src="/img/icons/icons8-laurel-wreath-96-fast.png" width="96" height="96" alt="Award" />
        </div>
        <div className="award-description">
          <strong>
            Top 100
            <br /> Fastest-Growing
          </strong>{' '}
          Companies in BC <br />
          <em>2023</em>
        </div>
      </div>
      <div className="award">
        <div className="award-icon">
          <Image src="/img/icons/icons8-laurel-wreath-96-fast.png" width="96" height="96" alt="Award" />
        </div>
        <div className="award-description">
          <strong>
            Top 100
            <br /> Fastest-Growing
          </strong>{' '}
          Companies in BC <br />
          <em>2022</em>
        </div>
      </div>
      <div className="award">
        <div className="award-icon">
          <Image src="/img/icons/icons8-laurel-wreath-96-profit.png" width="96" height="96" alt="Award" />
        </div>
        <div className="award-description">
          <strong>
            Top 100
            <br /> Most Profitable
          </strong>{' '}
          Companies in BC <br />
          <em>2022</em>
        </div>
      </div>
      <div className="award">
        <div className="award-icon">
          <Image src="/img/icons/icons8-laurel-wreath-96-fast.png" width="96" height="96" alt="Award" />
        </div>
        <div className="award-description">
          <strong>
            Top 100
            <br /> Fastest-Growing
          </strong>{' '}
          Companies in BC <br />
          <em>2021</em>
        </div>
      </div>
      <div className="award">
        <div className="award-icon">
          <Image src="/img/icons/icons8-laurel-wreath-96-fast.png" width="96" height="96" alt="Award" />
        </div>
        <div className="award-description">
          <strong>
            Top 100
            <br /> Fastest-Growing
          </strong>{' '}
          Companies in BC <br />
          <em>2020</em>
        </div>
      </div>
      <div className="award">
        <div className="award-icon">
          <Image src="/img/icons/icons8-laurel-wreath-96-profit.png" width="96" height="96" alt="Award" />
        </div>
        <div className="award-description">
          <strong>
            Top 100
            <br /> Most Profitable
          </strong>{' '}
          Companies in BC <br />
          <em>2020</em>
        </div>
      </div>
      <div className="award">
        <div className="award-icon">
          <Image src="/img/icons/icons8-laurel-wreath-96-fast.png" width="96" height="96" alt="Award" />
        </div>
        <div className="award-description">
          <strong>
            Top 100
            <br /> Fastest-Growing
          </strong>{' '}
          Companies in BC <br />
          <em>2019</em>
        </div>
      </div>
    </div>
  )
}
