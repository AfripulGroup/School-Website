import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const ContactDetails = () => {
   return (
      <div className="contact-details">
         <h3 className="details-title">Our Contact Details</h3>
         <div className="details-item">
            <FaMapMarkerAlt className="details-icon" />
            <p>
               123 Rockville Montessori Lane, <br />
               Rockville, MD 20850, Accra
            </p>
         </div>
         <div className="details-item">
            <FaPhone className="details-icon" />
            <p>(123) 456-7890</p>
         </div>
         <div className="details-item">
            <FaEnvelope className="details-icon" />
            <p>info@rockvillemontessori.edu</p>
         </div>
         <div className="details-item">
            <FaClock className="details-icon" />
            <p>
               Office Hours: <br />
               Mon - Fri: 8:00 AM - 5:00 PM
            </p>
         </div>
         <iframe
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.72272950516!2d-0.2621328401979873!3d5.591373810938514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1737216778592!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="School Location"
         ></iframe>
      </div>
   );
};

export default ContactDetails;