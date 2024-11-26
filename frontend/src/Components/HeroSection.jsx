import {assets} from '../assets/frontend_assets/assets';

const HeroSection = () => {
  return (
    <div className="border border-gray-600 flex flex-col sm:flex-row">
        {/* Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
      <div className="text-gray-800">
        <div className="flex items-center gap-5">
        <p className="w-8 md:w-11 h-[2px] bg-gray-800"></p>
        <p className="text-sm font-medium md:text-base">OUR BESTSELLER</p>
        </div>
        <h1 className="leading-relaxed text-3xl sm:py-3 lg:text-5xl prata-regular">Latest Arrivals</h1>
        <div className="flex items-center gap-5">
        <p className="text-sm font-medium md:text-base text-gray-600">SHOP NOW </p>
        <p className="w-8 md:w-11 h-[1px] bg-gray-800"></p>
        </div>
      </div>

        </div>


        {/* Hero Right Side */}
        <img src={assets.hero_img} alt="" className='w-full sm:w-1/2'/>

    </div>
  )
}

export default HeroSection