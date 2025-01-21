import ProgramCard from "./ProgramCard";
import CurriculumHighlights from "./CurriculumHighlights";
import AgeGroupEligibility from "./AgeGroupEligibility";
import "./Programs.css";
import programsData from "./programData";
import { motion } from 'framer-motion';

const Programs = () => {
   return (
      <section className="programs">
         <motion.div
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
         >
            <h2 className="section-title">Our Programs</h2>
            <p className="programs__intro">
               Discover the diverse programs we offer, designed to nurture growth and inspire learning.
            </p>
            <div className="programs__list">
               { programsData.map((program, index) => (
                  <ProgramCard key={ index } program={ program } />
               )) }
            </div>
            <CurriculumHighlights />
            <AgeGroupEligibility />
         </motion.div>
      </section>
   );
};

export default Programs;
