import { useState } from "react";
import faqData from "./faqData";
import "./FAQ.css";

const FAQ = () => {
   const [activeIndex, setActiveIndex] = useState(null);

   const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
   };

   return (
      <section className="faq">
         <h2 className="faq__title">Frequently Asked Questions</h2>
         <div className="faq__list">
            { faqData.map((item, index) => (
               <div
                  key={ index }
                  className={ `faq__item ${activeIndex === index ? "active" : ""}` }
                  onClick={ () => toggleFAQ(index) }
               >
                  <div className="faq__question">
                     <span>{ item.question }</span>
                     <span className="faq__icon">{ activeIndex === index ? "-" : "+" }</span>
                  </div>
                  { activeIndex === index && <div className="faq__answer">{ item.answer }</div> }
               </div>
            )) }
         </div>
      </section>
   );
};

export default FAQ;
