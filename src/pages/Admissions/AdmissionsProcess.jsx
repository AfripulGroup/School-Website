import { processSteps } from "./AdmissionData";

const AdmissionProcess = () => {
   return (
      <div className="admission-process">
         <h3 className="section-subtitle">Admission Process</h3>
         <div className="process-steps">
            { processSteps.map((step, index) => (
               <div key={ index } className="process-step">
                  <div className="process-step__icon">{ step.icon }</div>
                  <h4 className="process-step__title">{ step.title }</h4>
                  <p className="process-step__description">{ step.description }</p>
               </div>
            )) }
         </div>
      </div>
   );
};

export default AdmissionProcess;
