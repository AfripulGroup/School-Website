import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import './Testimonial.css';
import testimonials from './testimonialData';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
   const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1 } },
   };

   return (
      <section className="testimonials">
         <motion.h2
            className="testimonials__title"
            initial="hidden"
            animate="visible"
            variants={ fadeInUp }
         >
            What Our Parents and Alumni Say
         </motion.h2>

         <motion.div
            className="testimonials__carousel"
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { delay: 1, duration: 1.5 } }
         >
            <Carousel
               showArrows={ true }
               infiniteLoop={ true }
               autoPlay={ true }
               interval={ 5000 }
               showThumbs={ false }
               showStatus={ false }
            >
               { testimonials.map((testimonial, index) => (
                  <div key={ index } className="testimonial">
                     <div className="testimonial__image">
                        <img
                           src={ testimonial.image }
                           alt={ `${testimonial.name}'s testimonial` }
                        />
                     </div>

                     <div className="testimonial__text">
                        <p className="testimonial__message"> <FaQuoteLeft className='quote-icon' />{ testimonial.message }</p>
                        <h3 className="testimonial__name">{ testimonial.name }</h3>
                        <p className="testimonial__relationship">{ testimonial.relationship }</p>
                     </div>
                  </div>
               )) }
            </Carousel>
         </motion.div>
      </section>
   );
};

export default Testimonial;
