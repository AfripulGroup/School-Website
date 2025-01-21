import { FaCheckCircle } from 'react-icons/fa';

const accreditationsData = [
   "Accredited by the Montessori Accreditation Council for Teacher Education (MACTE).",
   "Affiliated with the American Montessori Society (AMS).",
   "Certified by the National Association for the Education of Young Children (NAEYC).",
   "Recognized by the local Department of Education.",
];

const Accreditations = () => {
   return (
      <section className="accreditations">
         <h2 className="section-title">Accreditations and Affiliations</h2>
         <ul className="accreditations__list">
            { accreditationsData.map((item, index) => (
               <li key={ index } className="accreditations__item">
                  <FaCheckCircle className="accreditations__icon" />
                  { item }
               </li>
            )) }
         </ul>
      </section>
   );
};

export default Accreditations;
