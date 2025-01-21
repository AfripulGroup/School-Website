import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { galleryData } from "./galleryData";
import { motion } from 'framer-motion';
import "./Gallery.css";

const Gallery = () => {
   const [activeCategory, setActiveCategory] = useState("facilities");
   const [modalData, setModalData] = useState(null);

   const openModal = (item) => {
      setModalData(item);
   };

   const closeModal = () => {
      setModalData(null);
   };

   return (
      <section className="gallery">
         <motion.div
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
         >
            <h2 className="section-title">Gallery</h2>
            <div className="gallery-categories">
               { Object.keys(galleryData).map((category) => (
                  <button
                     key={ category }
                     className={ `category-btn ${activeCategory === category ? "active" : ""}` }
                     onClick={ () => setActiveCategory(category) }
                  >
                     { category.charAt(0).toUpperCase() + category.slice(1) }
                  </button>
               )) }
            </div>
            <div className="gallery-grid">
               { galleryData[activeCategory].map((item, index) => (
                  <div
                     key={ index }
                     className="gallery-item"
                     onClick={ () => openModal(item) }
                  >
                     { item.type === "photo" ? (
                        <img src={ item.src } alt={ item.title } className="gallery-photo" />
                     ) : (
                        <div className="gallery-video">
                           <FaPlayCircle className="play-icon" />
                           <img src={ item.thumbnail } alt={ item.title } className="gallery-photo" />
                        </div>
                     ) }
                     <p className="gallery-title">{ item.title }</p>
                  </div>
               )) }
            </div>
            { modalData && (
               <div className="modal-overlay" onClick={ closeModal }>
                  <div className="modal-content" onClick={ (e) => e.stopPropagation() }>
                     { modalData.type === "photo" ? (
                        <img src={ modalData.src } alt={ modalData.title } className="modal-photo" />
                     ) : (
                        <iframe
                           src={ modalData.src }
                           title={ modalData.title }
                           frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           referrerPolicy="strict-origin-when-cross-origin"
                           allowFullScreen
                        ></iframe>
                     ) }

                     <button className="close-btn" onClick={ closeModal }>
                        &times;
                     </button>
                  </div>
               </div>
            ) }
         </motion.div>
      </section>
   );
};

export default Gallery;
