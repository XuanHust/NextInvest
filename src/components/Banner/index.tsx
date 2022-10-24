import banner from "../../assets/banner.png";
import banner_shape from "../../assets/banner_shape.png";

const Banner = () => {
  return (
    <div id="about" className="mx-auto max-w-screen-2xl relative">
      <img src={banner} className="w-full"></img>
      <img src={banner_shape} className="absolute right-0 bottom-0 h-[70%]"></img>
      <div className="absolute top-[6%] left-[15%] sm:top-[10%] sm:left-[20%] lg:top-[15%] lg:left-[20%] md:top-[13%] md:left-[20%] flex flex-col flex-start gap-[5px] sm:gap-[10px] md:gap-[25px]">
        <h1 data-aos="fade-left" className="text-white text-[15px] sm:text-[23px] lg:text-[40px] xl:text-[60px] font-medium">
          Meaningfull investments in<br />
          Main Street bussinesses.
        </h1>
        <p data-aos="fade-right" className="text-white text-[12px] sm:text-[15px] lg:text-[19px] xl:text-[24px] font-light">
          Browse vetted investment offerings in <br />
          communities all over the US.
        </p>
        <button data-aos="fade-up" className="uppercase text-white text-[11px] w-[130px] h-[30px] xl:text-[16px] bg-emerald-600 sm:w-[180px] sm:h-[40px] lg:w-[200px] lg:h-[50px] xl:w-[270px] xl:h-[70px] flex justify-center items-center rounded-xl hover:bg-emerald-800">Get Started</button>
      </div>
    </div >
  )
}

export default Banner;
