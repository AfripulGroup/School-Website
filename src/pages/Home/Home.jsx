
import AnnouncementNews from '../../components/Annoucement/AnnoucementNews';
import FAQ from '../../components/FAQ/FAQ';
import FounderQuotes from '../../components/FounderQuotes/FounderQuotes';
import Hero from '../../components/Hero/Hero';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
   return (
      <div className="home">
         <Hero />
         <Testimonial />
         <FounderQuotes />
         <AnnouncementNews />
         <FAQ />
      </div>
   );
};

export default Home;
