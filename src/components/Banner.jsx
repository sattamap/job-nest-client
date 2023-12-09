
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const Banner = () => {


  return (
    <div>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full h-64 sm:h-96 md:h-128 lg:h-192 xl:h-[600px]  object-cover" />
    <div className="absolute flex items-center justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
      <a href="#slide3" className="btn btn-circle ">❮</a>
      <a href="#slide2" className="btn btn-circle ">❯</a>  
    </div>
    <div className="max-w-md absolute text-center right-1/2   md:right-1/4  top-1/4" >
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-red-600">Find Your Dream Job</h1></div>
<div className="flex flex-col justify-center items-center mt-10">
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                            <input
                                className=" border-white p-3 rounded-l w-36 md:w-60 lg:w-80"
                                type="text"
                                placeholder="Search here..."
                                // value={searchQuery}
                                // onChange={handleInputChange}
                            />
                            <button
                                className="bg-[#06315d] text-white px-6 py-3 rounded-r"
                                // onClick={handleSearchClick}
                            >
                                Search
                            </button>
                        </div>
                    </div>
    </div>
    
 
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full h-64 sm:h-96 md:h-128 lg:h-192 xl:h-[600px]  object-cover" />
    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="max-w-md absolute   text-center right-20   md:right-1/4  top-1/4" >
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><h1 className="text-lg md:text-3xl lg:text-5xl font-bold text-fuchsia-900">Your Future Starts Here</h1></div>
     <div className="flex flex-col justify-center items-center mt-10">
                        <div>
                            <input
                                className=" border-white p-3 rounded-l w-36 md:w-60 lg:w-80"
                                type="text"
                                placeholder="Search here..."
                                // value={searchQuery}
                                // onChange={handleInputChange}
                            />
                            <button
                                className="bg-[#06315d] text-white px-6 py-3 rounded-r"
                                // onClick={handleSearchClick}
                            >
                                Search
                            </button>
                        </div>
                    </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} className="w-full h-64 sm:h-96 md:h-128 lg:h-192 xl:h-[600px]  object-cover" />
    <div className="absolute inset-0 bg-white opacity-50"></div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle ">❮</a> 
      <a href="#slide1" className="btn btn-circle ">❯</a>
    </div>
    <div className="max-w-md absolute  text-center right-20  md:right-1/4  top-1/4" >
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><h1 className="text-lg md:text-3xl lg:text-5xl font-bold text-blue-950">Where Careers Begin</h1></div>
      <div className="flex flex-col justify-center items-center mt-10">
                        <div>
                            <input
                                className=" border-white p-3 rounded-l w-36 md:w-60 lg:w-80"
                                type="text"
                                placeholder="Search here..."
                                // value={searchQuery}
                                // onChange={handleInputChange}
                            />
                            <button
                                className="bg-[#06315d] text-white px-6 py-3 rounded-r"
                                // onClick={handleSearchClick}
                            >
                                Search
                            </button>
                        </div>
                    </div>
    </div>
  </div> 
</div>
    </div>
  );
};

export default Banner;