
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';
import hero4 from '../../assets/hero4.jpg';
import './AnnoucementNews.css';

const announcements = [
   {
      id: 1,
      title: 'New Academic Year Begins',
      description: 'The new academic year starts on September 1st, welcoming students back to an exciting learning journey.',
      image: hero2,
      link: '#',
   },
   {
      id: 2,
      title: 'Montessori Workshop',
      description: 'Join us for a workshop on Montessori methods, open to parents and educators on October 10th.',
      image: hero3,
      link: '#',
   },
   {
      id: 3,
      title: 'Science Fair Winners Announced',
      description: 'Congratulations to the winners of this year’s science fair for their incredible projects!',
      image: hero4,
      link: '#',
   },
   {
      id: 4,
      title: 'Winter Break Schedule',
      description: 'Winter break begins on December 20th and ends on January 5th. Enjoy the holidays!',
      image: hero2,
      link: '#',
   },
];

const AnnouncementNews = () => {
   return (
      <section className="announcement-news">
         <h2 className="announcement-news__title">Announcements & News</h2>
         <div className="announcement-news__list">
            { announcements.map((news, index) => (
               <div
                  key={ news.id }
                  className={ `announcement-news__card ${index % 2 === 0 ? 'reverse' : ''
                     }` }
               >
                  <div className="announcement-news__image">
                     <img src={ news.image } alt={ news.title } />
                  </div>
                  <div className="announcement-news__content">
                     <h3>{ news.title }</h3>
                     <p>{ news.description }</p>
                     <a href={ news.link } className="read-more-btn">
                        Read More
                     </a>
                  </div>
               </div>
            )) }
         </div>
      </section>
   );
};

export default AnnouncementNews;

