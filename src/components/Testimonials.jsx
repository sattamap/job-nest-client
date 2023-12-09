
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'

const Testimonials = () => {
    return (
        <div className='max-w-[1000px] mx-auto my-20'>
            <h2 className="text-4xl font-bold font-poppin text-center mb-10">Happy Candidates</h2>
            <h2 className="text-2xl text-center">NEVER LOSE YOUR SPIRIT</h2>
            <div className="divider mb-10">Build Your Future</div>

            <div className=''>
                <Carousel
                    showThumbs={false} // Hide thumbnail navigation
                    showStatus={false} // Hide status indicator
                    infiniteLoop={true} // Enable infinite loop
                    autoPlay={true} // Enable auto-play
                    interval={5000} // Auto-play interval in milliseconds
                    swipeable={true} // Enable swipe gestures on mobile
                    emulateTouch={true} // Enable touch emulation for desktop
                    dynamicHeight={false} // Adjust slide height dynamically
                    centerMode={true} // Center the current slide
                    centerSlidePercentage={36} // Set the percentage width of the center slide


                >
                    <div className='border rounded-xl shadow-xl p-6 mx-2'>
                        <p className='text-sm font-edu font-normal'>
                            This job platform made finding the perfect job a breeze. I quickly secured a fantastic remote job with the help of this website.</p>

                        <div className='flex items-center justify-center gap-4'>
                            <div className="avatar gap-2 mt-5">
                                <div className="w-12">
                                    <img src={img1} alt="" />

                                </div>
                            </div>
                            <div>
                                <p className='text-base font-semibold'>Ema Watson</p>
                                <p className='text-xs'>Web Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-xl shadow-xl p-6 mx-2'>
                        <p className='text-sm font-edu font-normal'>
                            The user-friendly design and easy job posting process on this website have been a game-changer for our company.   </p>
                            <div className='flex items-center justify-center gap-4'>
                            <div className="avatar gap-2 mt-5">
                                <div className="w-12">
                                    <img src={img2} alt="" />

                                </div>
                            </div>
                            <div>
                                <p className='text-base font-semibold'>John Mill</p>
                                <p className='text-xs'>Full-Stack Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-xl shadow-xl p-6 mx-2'>
                        <p className='text-sm font-edu font-normal'>
                            As a job seeker, I love how I can filter jobs by type, making it simple to find part-time positions that fit my schedule. </p>
                            <div className='flex items-center justify-center gap-4'>
                            <div className="avatar gap-2 mt-5">
                                <div className="w-12">
                                    <img src={img3} alt="" />

                                </div>
                            </div>
                            <div>
                                <p className='text-base font-semibold'>Prima </p>
                                <p className='text-xs'>Web Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-xl shadow-xl p-6 mx-2'>
                        <p className='text-sm font-edu font-normal'>
                            This website interface is clean and intuitive. We received a flood of applications for our hybrid job listings. I landed my dream job here! </p>
                            <div className='flex items-center justify-center gap-4'>
                            <div className="avatar gap-2 mt-5">
                                <div className="w-12">
                                    <img src={img4} alt="" />

                                </div>
                            </div>
                            <div>
                                <p className='text-base font-semibold'>Kane</p>
                                <p className='text-xs'>Full-stack Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-xl shadow-xl p-6 mx-2'>
                        <p className='text-sm font-edu font-normal'>
                            The diverse job categories, including on-site, remote, hybrid, and part-time, provide options for every job seeker.</p>
                            <div className='flex items-center justify-center gap-4'>
                            <div className="avatar gap-2 mt-5">
                                <div className="w-12">
                                    <img src={img5} alt="" />

                                </div>
                            </div>
                            <div>
                                <p className='text-base font-semibold'>Adrila</p>
                                <p className='text-xs'>Web Desiger</p>
                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;