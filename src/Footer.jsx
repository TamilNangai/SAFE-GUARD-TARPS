import Fb from './assets/footer/footerDv/Facebook .png'
import Insta from './assets/footer/footerDv/Instagram .png'
import Place from './assets/footer/footerDv/Place Marker.png'
import Twit from './assets/footer/footerDv/Twitter .png'
import Vector from './assets/footer/footerDv/Vector.png'
import What from './assets/footer/footerDv/WhatsApp.png'



function Footer() {
    return (
        <div >
            <footer className='w-1440px h-360px bg-color-#D9D9D9'>
                <h1 id="footerheading" className='font-bold  p-32'>SAFE GUARD TARPS</h1>
                <div id='footer-item'className='flex  justify-evenly'>
                    <div id='one'className='flex'>
                        <img id='oneimg'className='w-40px h-61px mr-20px ml-20px ' src={Place} alt="place" />
                        <p id='onep'className='w-200px h-160px font-Be Vietnam   font-normal text-sm'>
                            123, Raja Street,
                            Kumbakonam,
                            Thanjavur District,
                            Tamil Nadu, 612001,
                            India.
                        </p>
                    </div>
                    <div id='line1' className='p-5 border-2 border-solid shadow-[0px 10px 4px 0px] '></div>
                    <div id='two'>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Product</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div id='line2'></div>
                    <div id='three'>

                        <ul>
                            <a href="https://www.facebook.com/"> <img src={Fb} alt="fb" /></a>
                            <a href="https://www.whatsapp.com/"><img src={What} alt="what" /></a>
                            <a href="https://www.instagram.com/"><img src={Insta} alt="insta" /></a>
                            <a href="https://www.twitter.com/"><img src={Twit} alt="twit" /></a>
                            <a href="https://www.threads.com/"><img src={Vector} alt="vector" /></a>
                        </ul>
                    </div>
                </div>
            </footer>
            <div id='df'>
                <span>Designed  by  DesFlyer</span>
            </div>
        </div>
    );
}
export default Footer