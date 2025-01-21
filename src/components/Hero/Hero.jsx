import heroImg1 from '../../assets/hero-bg.jpeg';
import heroImg2 from '../../assets/hero-bg2.jpeg';
import heroImg3 from '../../assets/hero-bg3.jpg';
import heroImg4 from '../../assets/hero-bg4.jpg';
import heroImg5 from '../../assets/hero2.jpg';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
   const navigate = useNavigate();

   // Animations setup
   const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1 } },
   };

   return (
      <section className="hero">
         {/* Carousel Component */ }
         <motion.div
            className="hero__carousel-container"
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
               <div>
                  <img
                     src={ heroImg1 }
                     alt="Students enjoying outdoor activities"
                  />
               </div>
               <div>
                  <img
                     src={ heroImg2 }
                     alt="Classroom setup at Rockville Montessori"
                  />
               </div>
               <div>
                  <img
                     src={ heroImg3 }
                     alt="Montessori learning tools in use"
                  />
               </div>
               <div>
                  <img
                     src={ heroImg4 }
                     alt="Montessori learning tools in use"
                  />
               </div>
               <div>
                  <img
                     src={ heroImg5 }
                     alt="Montessori learning tools in use"
                  />
               </div>

            </Carousel>
         </motion.div>

         {/* Content Section */ }
         <motion.div
            className="hero__content"
            initial="hidden"
            animate="visible"
            variants={ fadeInUp }
         >
            <h1 className="hero__title">Welcome to Rockville Montessori School</h1>
            <p className="hero__subtitle">
               Inspiring curiosity, creativity, and a lifelong love of learning.
            </p>
            <motion.button
               className="hero__cta"
               whileHover={ { scale: 1.1 } }
               whileTap={ { scale: 0.9 } }
               onClick={ () => navigate('/programs') }
            >
               Discover More
            </motion.button>
         </motion.div>
      </section>
   );
};

export default Hero;
