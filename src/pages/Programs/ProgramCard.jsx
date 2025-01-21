/* eslint-disable react/prop-types */
import { FaBaby, FaChild, FaChalkboardTeacher, FaSchool } from "react-icons/fa";

const iconMap = {
   FaBaby: <FaBaby />,
   FaChild: <FaChild />,
   FaChalkboardTeacher: <FaChalkboardTeacher />,
   FaSchool: <FaSchool />,
};

const ProgramCard = ({ program }) => {
   const { title, description, icon } = program;

   return (
      <div className="program-card">
         <div className="program-card__icon">{ iconMap[icon] }</div>
         <h3 className="program-card__title">{ title }</h3>
         <p className="program-card__description">{ description }</p>
         <button className="program-card__cta">Apply Now</button>
      </div>
   );
};

export default ProgramCard;

