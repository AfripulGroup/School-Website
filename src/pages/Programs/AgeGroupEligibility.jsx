import { FaUserGraduate, FaBaby, FaChild } from "react-icons/fa";

const AgeGroupEligibility = () => {
   return (
      <div className="age-group-eligibility">
         <h3 className="section-subtitle">Age Group Eligibility</h3>
         <div className="eligibility-grid">
            <div className="eligibility-card">
               <FaBaby className="eligibility-icon" />
               <p>Infant Program: 6 weeks to 18 months</p>
            </div>
            <div className="eligibility-card">
               <FaChild className="eligibility-icon" />
               <p>Toddler Program: 18 months to 3 years</p>
            </div>
            <div className="eligibility-card">
               <FaUserGraduate className="eligibility-icon" />
               <p>Primary Program: 3 years to 6 years</p>
            </div>
            <div className="eligibility-card">
               <FaUserGraduate className="eligibility-icon" />
               <p>After-School Program: 6 years and above</p>
            </div>
         </div>
      </div>
   );
};

export default AgeGroupEligibility;
