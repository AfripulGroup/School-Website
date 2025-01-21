import { FaNewspaper } from "react-icons/fa";
import { useState } from "react";
import { news } from "./newsEventData";
import FullViewModal from "./FullViewModal";

const RecentNews = () => {
   const [selectedNews, setSelectedNews] = useState(null);

   return (
      <section className="recent-news">
         <h2 className="section-title">
            <FaNewspaper className="icon" /> Recent News
         </h2>
         <div className="news-grid">
            { news.map((item, index) => (
               <div className="news-card" key={ index }>
                  <h3>{ item.title }</h3>
                  <p className="news-date">{ item.date }</p>
                  <p className="news-summary">{ item.summary }</p>
                  <button
                     className="read-more-btn"
                     onClick={ () => setSelectedNews(item) }
                  >
                     Read More
                  </button>
               </div>
            )) }
         </div>
         <FullViewModal
            isOpen={ !!selectedNews }
            closeModal={ () => setSelectedNews(null) }
            title={ selectedNews?.title }
            content={ selectedNews?.content }
         />
      </section>
   );
};

export default RecentNews;
