import mobile from '../assets/mobile.jpg'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';


const AppSote = () => {
    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col justify-around gap-20 lg:flex-row">
    <div data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1500"><img src={mobile} className="max-w-sm rounded-lg shadow-2xl" /></div>
    <div data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <h3>DOWNLOAD & ENJOY</h3>
      <h1 className="text-5xl font-bold">Get the Superio Job
Search App</h1>
      <p className="py-6">Search through millions of jobs and find the right fit. Simply
swipe right to apply.</p>
<a
      href="https://play.google.com/store/apps/details?id=your-app-package-name"
      target="_blank"
      rel="noopener noreferrer"
      className="google-play-button w-2/5 flex items-center text-white bg-blue-600 rounded-md p-2 space-x-2 hover:bg-blue-700 mb-4"
    >
      <FaGooglePlay size={32} />
      <span className="text-lg font-semibold">Download on the <br /> Google Play</span>
    </a>
    <a
        href="https://apps.apple.com/us/app/your-app-name/idyour-app-id"
        target="_blank"
        rel="noopener noreferrer"
        className="download-button w-2/5  flex items-center text-white bg-gray-800 rounded-md p-2 space-x-2 hover:bg-gray-900"
      >
        <FaAppStoreIos size={32} />
        <span className="text-lg font-semibold">Download on the <br /> Apple Store</span>
      </a>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppSote;