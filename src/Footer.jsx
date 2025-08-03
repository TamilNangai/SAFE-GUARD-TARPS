import Fb from './assets/footer/footerDv/Facebook .png'
import Insta from './assets/footer/footerDv/Instagram .png'
import Place from './assets/footer/footerDv/Place Marker.png'
import Twit from './assets/footer/footerDv/Twitter .png'
import Vector from './assets/footer/footerDv/Vector.png'
import What from './assets/footer/footerDv/WhatsApp.png'

function Footer() {
    return (
        <div>
            <footer className='w-full h-auto bg-gray-100 max-sm:h-auto'>
                <p id="footerheading" className='text-3xl font-bold  p-8 text-black  font-[Abhaya-Libre] max-lg:text-3xl  max-sm:text-[14px] max-sm:p-1'>SAFE GUARD TARPS</p>                
                <div id='footer-item' className='flex  justify-evenly'>
                    <div id='one' className='flex  w-50 ms-15 max-sm:ms-0 max-lg:ms-0  max-sm:w-40 '>
                        <img id='oneimg' className='w-10 h-15 m-[0px_20px_0px_20px] max-sm:w-[20px] max-sm:h-[25px]' src={Place} alt="place" />
                        <p id='onep' className='w-50 h-40  font-[Be-Vietnam] font-normal text-2xl max-lg:w-[189px] max-lg:h-[135px]  max-lg:font-bold  max-lg:text-[18px]  max-sm:w-[86px] max-sm:h-[57.04px] max-sm:text-[8px] max-sm:font-bold'>
                            123, Raja Street,
                            Kumbakonam,
                            Thanjavur District,
                            Tamil Nadu, 612001.
                        </p>
                    </div>
                    <div id='line1' className='me-1 border shadow-[0px_5px_5px] h-[200px] max-lg:h-[180px] border-black  border-solid  shadow-gray-400 max-sm:h-[58.95px]'></div>
                    <div id='line1' className=' border shadow-[0px_5px_5px]  h-[200px]  max-lg:h-[180px] border-black  border-solid shadow-gray-400 max-sm:h-[58.95px]'></div>
                    <div id='two' className='w-50 max-sm:hidden'>
                        <ul className='list-none font-[Be-Vietnam]  text-2xl font-bold '>
                            <li className='mb-4 flex justify-center max-lg:m-0 max-lg:text-[18px]'>Home</li>
                            <li className='mb-4 flex justify-center max-lg:m-0 max-lg:text-[18px]'>About us</li>
                            <li className='mb-4 flex justify-center max-lg:m-0 max-lg:text-[18px]'>Product</li>
                            <li className='mb-4 flex justify-center max-lg:m-0 max-lg:text-[18px]'>Contact us</li>
                        </ul>
                    </div>
                    <div id='line1' className='me-1   border shadow-[0px_20px_10px_0px]  h-[200px]  max-lg:h-[180px] border-black  border-solid  shadow-gray-500 max-sm:hidden  max-sm:relative  max-sm:right-25'></div>
                    <div id='line1' className=' border   shadow-[0px_20px_10px_0px]  h-[200px]  max-lg:h-[180px] border-black  border-solid shadow-gray-500 max-sm:hidden'></div>
                    <div id='three' className='w-50 '>
                         <p className='max-lg:ms-3 max-sm:ms-3 max-sm:mb-0 mb-0 font-bold font-[Abhaya-Libre] lg:hidden max-sm:text-[12px] max-lg:text-[18px]'>Follow us on</p>
                         <div  className='flex'>
                        <a href="https://www.facebook.com/"> <img className='m-[0px_10px_0px_10px] max-lg:w-[40px] max-lg:h-[40px] max-sm:w-[25px] max-sm:h-[25px]' src={Fb} alt="fb" /></a>
                        <a href="https://www.whatsapp.com/"><img className='m-[0px_10px_0px_10px] max-lg:w-[40px] max-lg:h-[40px] max-sm:w-[25px] max-sm:h-[25px]' src={What} alt="what" /></a>
                        <a href="https://www.instagram.com/"><img className='m-[0px_10px_0px_10px] max-lg:w-[40px] max-lg:h-[40px] max-sm:w-[25px] max-sm:h-[25px]'  src={Insta} alt="insta" /></a>
                        <a href="https://www.twitter.com/"><img className='m-[0px_10px_0px_10px] max-lg:w-[40px] max-lg:h-[40px] max-sm:w-[25px] max-sm:h-[25px]' src={Twit} alt="twit" /></a>
                        <a href="https://www.threads.com/"><img className='m-[0px_13px_0px_10px] max-lg:w-[30px] max-lg:h-[35px] max-sm:w-[20px] max-sm:h-[23px]' src={Vector} alt="vector" /></a>
                        </div>
                    </div>
                </div>
            </footer>
            <div id='df' className='w-full h-8 bg-black max-sm:hidden'>
                <span className='w-56 h-7  font-[Be-Vietnam]  font-bold size-5 text-white relative left-1/2 max-lg:left-[350px]'>Designed  by  DesFlyer</span>
            </div>
        </div>
    );
}
export default Footer