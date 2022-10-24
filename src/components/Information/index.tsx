import group1 from "../../assets/group1.png";
import group2 from "../../assets/group2.png";
import chart from "../../assets/chart.png";
import subtract from "../../assets/subtract.png";
import vector from "../../assets/vector.png";

const Information = () => {
  return (
    <div id="information" className='bg-information bg-no-repeat bg-cover bg-center bg-fixed h-[696px] mx-auto max-w-screen-2xl relative overflow-hidden'>
      <div className="w-full h-full flex xl:flex-row flex-col justify-center items-center relative gap-7">
        <div className="flex flex-col gap-[10px]" data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <div className="w-[56px] h-[56px]">
            <img src={subtract} className="w-full"></img>
          </div>
          <h2 className="text-[26px] md:text-[37px] xl:text-[48px] font-bold xl:leading-[64px]">
            $7M+ paid out to <br />
            investors
          </h2>
          <p className="text-[15px] md:text-[18px] xl:text-[24px] xl:leading-[32px] text-[#999999] z-10">
            Next Invest has already paid out over $7M in cash<br />
            returns to investors. Earn potential cash payments<br />
            through unique revenue-share and debt financing<br />
            investments.
          </p>
        </div>
        <div className="z-[10]">
          <img src={chart} data-aos="fade-up-left"></img>
        </div>
      </div>
      <img data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" src={group1} className="absolute right-0 bottom-[30%] z-0"></img>
      <img data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" src={group2} className="absolute -right-[12%] md:-right-[6%] xl:-right-[3%] top-0"></img>
      <img data-aos="fade-up"
        data-aos-duration="3000" src={vector} className="absolute bottom-0 left-0 z-0"></img>
    </div>
  )
}

export default Information;
