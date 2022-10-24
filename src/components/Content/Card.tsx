interface ICardProp {
  type?: string;
  img?: any;
};

const Card = ({ type, img }: ICardProp) => {

  if (type === "mainCard") {
    return (
      <div className="w-[370px] h-[480px] flex flex-col justify-between shadow-xl shadow-gray-300]">
        <div className="p-[15px] flex flex-col gap-4">
          <div data-aos="zoom-in-up">
            <h3 className="text-black text-[18px] font-bold">Oxalis</h3>
            <p className="text-[#b8b7b7] text-[14px]">Brooklyn, NY</p>
          </div>
          <div>
            <p className="text-[16px]" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              A recognized leader in language immersion <br />
              & early education opening second school.
            </p>
            <div data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500">
              <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                <div className="h-2 w-1/3 rounded-full bg-[#128C76]"></div>
              </div>
              <p className="text-[15px] mt-[5px]" >
                <span className="text-[#128C76]">$374,920 </span>
                raised of $1,000,000
              </p>
            </div>
            <hr className="my-[20px]" />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col text-left gap-3">
              <p>Security Type</p>
              <p>Investment Multiple</p>
              <p>Maturity</p>
              <p>Min. Investment</p>
            </div>
            <div className="flex flex-col text-right font-bold gap-3">
              <p>Revenue Sharing Note</p>
              <p>1.4x</p>
              <p>48 Months</p>
              <p>$100</p>
            </div>
          </div>
        </div>
        <button data-aos="zoom-out-left" className="uppercase text-white bg-[#F56B8D] h-[72px] hover:opacity-70">View</button>
      </div>
    )
  }
  return (
    <div className="w-[370px]  h-[480px] flex flex-col justify-between shadow-xl shadow-gray-300]">
      <img data-aos="flip-right" src={img} className="w-full"></img>
      <div className="p-[15px] pb-[25px] flex flex-col gap-6">
        <div data-aos="zoom-in-up">
          <h3 className="text-black text-[18px] font-bold">Oxalis</h3>
          <p className="text-[#b8b7b7] text-[14px]">Brooklyn, NY</p>
        </div>
        <div>
          <p className="text-[16px]" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            A recognized leader in language immersion <br />
            & early education opening second school.
          </p>
          <div data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">
            <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
              <div className="h-2 w-1/3 rounded-full bg-[#128C76]"></div>
            </div>
            <p className="text-[15px] mt-[5px]">
              <span className="text-[#128C76]">$374,920 </span>
              raised of $1,000,000
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
