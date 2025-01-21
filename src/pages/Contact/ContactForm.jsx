import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
   };

   return (
      <form className="contact-form" onSubmit={ handleSubmit }>
         <h3 className="form-title">Get in Touch</h3>
         <div className="form-group">
            <input
               type="text"
               name="name"
               placeholder="Your Name"
               value={ formData.name }
               onChange={ handleChange }
               required
            />
         </div>
         <div className="form-group">
            <input
               type="email"
               name="email"
               placeholder="Your Email"
               value={ formData.email }
               onChange={ handleChange }
               required
            />
         </div>
         <div className="form-group">
            <textarea
               name="message"
               placeholder="Your Message"
               value={ formData.message }
               onChange={ handleChange }
               required
            />
         </div>
         <button type="submit" className="submit-button">
            Send Message <FaPaperPlane />
         </button>
      </form>
   );
};

export default ContactForm;
