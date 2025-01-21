import './AboutUs.css';
import Accreditations from './Accreditations';
import History from './History';
import Leadership from './Leadership';
import MissionVision from './MissionVision';


const AboutUs = () => {
   return (
      <div className="about-us">
         <MissionVision />
         <History />
         <Leadership />
         <Accreditations />
      </div>
   );
};

export default AboutUs;

