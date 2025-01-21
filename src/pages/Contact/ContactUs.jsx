import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import { motion } from 'framer-motion';
import "./ContactUs.css";

const ContactUs = () => {
   return (
      <section className="contact-us">
         <motion.div
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
         >
            <h2 className="section-title">Contact Us</h2>
            <p className="contact-us__intro">
               We&apos;d love to hear from you! Feel free to reach out to us with any questions, comments, or concerns.
            </p>
            <div className="contact-us__content">
               <ContactForm />
               <ContactDetails />
            </div>
         </motion.div>
      </section>
   );
};

export default ContactUs;
