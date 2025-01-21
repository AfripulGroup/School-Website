import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const MissionVision = () => {
   return (
      <section className="mission-vision">
         <motion.div
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
         >
            <h2 className="section-title">Our Mission & Vision</h2>
            <div className="mission-vision__content">
               <div className="icon-box">
                  <FaBullseye className="mission-icon" />
               </div>
               <p>
                  At Rockville Montessori School, our mission is to inspire lifelong learning and cultivate a love for knowledge in every student. Our vision is to create a nurturing environment where children thrive academically, socially, and emotionally.
               </p>
            </div>
            <div className="mission-vision__content">
               <div className="icon-box">
                  <FaLightbulb className="mission-icon" />
               </div>
               <p>
                  Our philosophy is to foster independence, creativity, and critical thinking through hands-on learning experiences that honor each child&apos;s unique potential.
               </p>
            </div>
         </motion.div>
      </section>
   );
};

export default MissionVision;
