import { motion } from 'framer-motion';
import './FounderQuotes.css';
import { FaQuoteLeft } from 'react-icons/fa';

const FounderQuotes = () => {
   const quotes = [
      {
         quote: "Education is the most powerful weapon which you can use to change the world.",
         author: "Dr. William Carter"
      },
      {
         quote: "The goal of early childhood education should be to activate the child's own natural desire to learn.",
         author: "Dr. Kelvin Kudzordzi"
      },
      {
         quote: "Give me the children until they are seven, and anyone may have them thereafter.",
         author: "Dr.Wisdom Godzo"
      }
   ];

   return (
      <section className="founder-quotes">
         <motion.h2
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 1 } }
            className="founder-quotes__title"
         >
            Words from the Founder
         </motion.h2>
         <div className="founder-quotes__list">
            { quotes.map((quote, index) => (
               <motion.div
                  key={ index }
                  className="founder-quotes__item"
                  initial={ { opacity: 0, x: -100 } }
                  animate={ { opacity: 1, x: 0 } }
                  transition={ { delay: 0.2 * index, duration: 0.5 } }
               >
                  <p className="quote-text"><FaQuoteLeft className='quote-icon' />{ quote.quote }</p>
                  <p className="quote-author">- { quote.author }</p>
               </motion.div>
            )) }
         </div>
      </section>
   );
};

export default FounderQuotes;
