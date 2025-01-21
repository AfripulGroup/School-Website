import AdmissionsProcess from "./AdmissionsProcess";
import RequiredDocument from "./RequiredDocument";
import TuitionFees from "./TuitionFees";
import "./Admissions.css";
import { motion } from "framer-motion";

const Admissions = () => {
   return (
      <section className="admissions">
         <motion.div
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
         >
            <h2 className="section-title">Admissions</h2>
            <p className="admissions__intro">
               Join the Rockville Montessori School family! Learn about our admission process, required documents, and tuition details.
            </p>
            <AdmissionsProcess />
            <RequiredDocument />
            <TuitionFees />
         </motion.div>
      </section>
   );
};

export default Admissions;
