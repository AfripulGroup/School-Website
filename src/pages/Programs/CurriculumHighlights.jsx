import { FaBook, FaLightbulb, FaHandsHelping } from "react-icons/fa";

const CurriculumHighlights = () => {
   return (
      <div className="curriculum-highlights">
         <h3 className="section-subtitle">Curriculum Highlights</h3>
         <div className="highlights-grid">
            <div className="highlight-card">
               <FaBook className="highlight-icon" />
               <p>Focus on practical life skills and sensory activities.</p>
            </div>
            <div className="highlight-card">
               <FaLightbulb className="highlight-icon" />
               <p>Innovative STEM and creative arts programs.</p>
            </div>
            <div className="highlight-card">
               <FaHandsHelping className="highlight-icon" />
               <p>Community building and social responsibility.</p>
            </div>
         </div>
      </div>
   );
};

export default CurriculumHighlights;
