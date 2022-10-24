import shape1 from "../../assets/shape1.png";
import dragon from "../../assets/dragonball.png";

const Contact = () => {
  return (
    <div id="contact" className="h-[782px] mx-auto max-w-screen-2xl relative ">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-[90px] xl:gap-[130px]">
        <div className="flex flex-col gap-[20px] xl:gap-[30px]">
          <h2 data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="text-[18px] sm:text-[23px] lg:text-[30px] xl:text-[48px] xl:leading-[64px] font-bold">
            Looking to raise capital<br />
            for your growing<br />
            business?
          </h2>
          <p data-aos="fade-up-left" className="text-[15px] sm:text-[19px] lg:text-[21px] xl:text-[24px] xl:leading-[32px] text-[#999999]">
            Whether expanding or opening a brand-new<br />
            concept, we make it easy to raise money from<br />
            thousands of local investors.
          </p>
          <button data-aos="flip-left" className="uppercase text-start w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] xl:w-[270px] xl:h-[70px] bg-[#128C76] flex justify-center items-center text-[13px] sm:text-[14px] xl:text-[16px] font-bold text-white rounded-lg hover:opacity-80">Apply Online</button>
        </div>
        <div className="w-[370px] h-[340px] xl:w-[470px] xl:h-[462px] z-10 ">
          <img data-aos="zoom-in-left" src={dragon} className="w-full h-full"></img>
        </div>
      </div>
      <img data-aos="fade-up"
        data-aos-duration="3000" src={shape1} className="absolute right-0 w-[75px] h-[70px] sm:w-[150px] sm:h-[148px] xl:w-[306px] xl:h-[301px] top-[20%] z-0"></img>
    </div>
  )
}

export default Contact;
