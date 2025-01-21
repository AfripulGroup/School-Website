import { GiBookCover } from "react-icons/gi";
import { motion } from "framer-motion";

const History = () => {
   return (
      <section className="history">
         <motion.div
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, delay: 0.2 } }
         >
            <h2 className="section-title">Our History</h2>
            <div className="history__content">
               <div className="icon-box">
                  <GiBookCover className="history-icon" />
               </div>
               <p>
                  Established in 1990, Rockville Montessori School has been a pillar of academic excellence and community engagement for over three decades. From humble beginnings, we&apos;ve grown into a diverse and inclusive school community that values tradition and innovation.
               </p>
            </div>
         </motion.div>
      </section>
   );
};

export default History;
