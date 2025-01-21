import EventsCalendar from "./EventsCalendar";
import RecentNews from "./RecentNews";
import BlogArticles from "./BlogArticles";
import { motion } from 'framer-motion';

import './NewsEvents.css';

const NewsEvents = () => {
   return (
      <div className="news-events">
         <motion.div
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
         >
            <EventsCalendar />
            <RecentNews />
            <BlogArticles />
         </motion.div>
      </div>
   );
};

export default NewsEvents;
