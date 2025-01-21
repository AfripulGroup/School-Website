
import { FaDollarSign } from "react-icons/fa";
import { tuitionDetails } from "./AdmissionData";

const TuitionFees = () => {
   return (
      <div className="tuition-fees">
         <h3 className="section-subtitle">Tuition and Fees</h3>
         <div className="tuition-table">
            { tuitionDetails.map((item, index) => (
               <div key={ index } className="tuition-row">
                  <div className="tuition-row__program">{ item.program }</div>
                  <div className="tuition-row__fee">
                     <FaDollarSign /> { item.fee }
                  </div>
               </div>
            )) }
         </div>
      </div>
   );
};

export default TuitionFees;
