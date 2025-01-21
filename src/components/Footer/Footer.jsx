import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container">
            {/* Company Info */ }
            <div className="footer__info">
               <h3 className="footer__title">Rockville Montessori School</h3>
               <p className="footer__description">
                  Building a foundation for lifelong learning through personalized education and care.
               </p>
               <p className="footer__contact">
                  <strong>Contact Us:</strong> <br />
                  Phone: (123) 456-7890 <br />
                  Email: info@rockvillemontessori.com
               </p>
            </div>

            {/* Quick Links */ }
            <div className="footer__links">
               <h4 className="footer__title">Pages</h4>
               <ul>
                  <li><Link to="/parent-portal" className='link'>Parent Portal</Link></li>
                  <li><Link to="/gallery" className='link'>Gallery</Link></li>
                  <li><Link to="/Careers" className='link'>Careers</Link></li>
                  <li><Link to="/news-events" className='link'>News And Events</Link></li>
                  <li><Link to="/news-events" className='link'>Blogs</Link></li>
                  <li><Link to="/terms-service" className='link'>Terms of Service</Link></li>
                  <li><Link to="/privacy-policy" className='link'>Privacy Policy</Link></li>
               </ul>
            </div>

            {/* Quick Links */ }
            <div className="footer__links">
               <h4 className="footer__title">Quick Links</h4>
               <ul>
                  <li><Link to="/about-us" className='link'>About Us</Link></li>
                  <li><Link to="/admissions" className='link'>Admissions</Link></li>
                  <li><Link to="/programs" className='link'>Programs</Link></li>
                  <li><Link to="/contact-us" className='link'>Contact</Link></li>
                  <li><Link to="/" className='link'>FAQ</Link></li>
               </ul>
            </div>

            {/* Newsletter */ }
            <div className="footer__newsletter">
               <h4 className="footer__title">Subscribe to Our Newsletter</h4>
               <form className="footer__form">
                  <input
                     type="email"
                     className="footer__input"
                     placeholder="Enter your email address"
                     required
                  />
                  <button type="submit" className="footer__button">Subscribe</button>
               </form>
               <p className="footer__note">Stay updated with the latest news and events.</p>
            </div>
         </div>

         {/* Bottom Bar */ }
         <div className="footer__bottom">
            <p>© { new Date().getFullYear() } Rockville Montessori School. All Rights Reserved.</p>
            <div className="footer__socials">
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
               </a>
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
               </a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
