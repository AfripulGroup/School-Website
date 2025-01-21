import { FaPenFancy } from "react-icons/fa";
import { useState } from "react";
import { articles } from "./newsEventData";
import FullViewModal from "./FullViewModal";


const BlogArticles = () => {
   const [selectedArticle, setSelectedArticle] = useState(null);

   return (
      <section className="blog-articles">
         <h2 className="section-title">
            <FaPenFancy className="icon" /> Blog & Articles
         </h2>
         <div className="article-grid">
            { articles.map((item, index) => (
               <div className="article-card" key={ index }>
                  <img src={ item.thumbnail } alt={ item.title } />
                  <h3>{ item.title }</h3>
                  <button
                     className="read-more-btn"
                     onClick={ () => setSelectedArticle(item) }
                  >
                     Read More
                  </button>
               </div>
            )) }
         </div>
         <FullViewModal
            isOpen={ !!selectedArticle }
            closeModal={ () => setSelectedArticle(null) }
            title={ selectedArticle?.title }
            content={ selectedArticle?.content }
         />
      </section>
   );
};

export default BlogArticles;
