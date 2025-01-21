import { documents } from "./AdmissionData";

const RequiredDocuments = () => {
   return (
      <div className="required-documents">
         <h3 className="section-subtitle">Required Documents</h3>
         <div className="documents-list">
            { documents.map((doc, index) => (
               <div key={ index } className="document-card">
                  <div className="document-card__icon">{ doc.icon }</div>
                  <h4 className="document-card__title">{ doc.title }</h4>
                  <p className="document-card__description">{ doc.description }</p>
               </div>
            )) }
         </div>
      </div>
   );
};

export default RequiredDocuments;
