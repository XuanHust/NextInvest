import Card from "./Card";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import shape from "../../assets/shape.png";

const Content = () => {
  return (
    <div id="project" className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col gap-[10px] sm:gap-[18px] lg:gap-[23px] xl:gap-[30px] justify-center items-center relative py-[70px]">
      <h2 className="text-black text-[24px] sm:text-[30px] lg:text-[35px] xl:text-[48px] font-bold" data-aos="fade-down">
        Offering open for investment
      </h2>
      <p data-aos="fade-up" className="text-[#adabab] text-[12px] sm:text-[17px] lg:text-[20px] xl:text-[24px] font-medium text-center">
        Explore pre-vetted investment opportunities available in a growing <br />
        number of industry categories.
      </p>
      <div className="flex gap-5 justify-center flex-wrap gap-y-6">
        <Card img={img1} />
        <Card type="mainCard" />
        <Card img={img2} />
        <Card img={img3} />
        <Card img={img4} />
        <Card img={img5} />
      </div>
      <button
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="uppercase mt-[30px] text-[12px] w-[130px] h-[40px] flex justify-center items-center rounded-md hover:opacity-80 font-medium text-[#F56B8D] border-[1px] border-[#F56B8D]">View All Projects</button>
      <div data-aos="zoom-out-right" className="absolute left-[10px] xl:-left-[100px] w-[75px] h-[70px] sm:w-[153px] sm:h-[150px]">
        <img data-aos="zoom-in-up" src={shape} className="w-full"></img>
      </div>
    </div>
  )
}
export default Content;
