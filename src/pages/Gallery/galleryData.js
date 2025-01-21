import facility1 from '../../assets/facility1.jpg';
import facility2 from '../../assets/facility2.jpg';
import event1 from '../../assets/event1.jpg';
import event2 from '../../assets/event2.jpg';
import event3 from '../../assets/event3.jpg';
import activity1 from '../../assets/activity1.jpg';
import activity2 from '../../assets/activity2.jpg';
import activity3 from '../../assets/activity3.jpg';

export const galleryData = {
   facilities: [
      { type: "photo", src: facility1, title: "Modern Classroom" },
      { type: "photo", src: facility2, title: "Library" },
      { type: "video", src: "https://www.youtube.com/embed/JQD_wBHgjSQ", title: "Campus Tour", thumbnail: "https://img.youtube.com/vi/JQD_wBHgjSQ/hqdefault.jpg" },
      { type: "photo", src: facility1, title: "Modern Classroom" },
      { type: "photo", src: facility2, title: "Library" },
      { type: "photo", src: facility1, title: "Modern Classroom" },
   ],
   events: [
      { type: "photo", src: event1, title: "Annual Sports Day" },
      { type: "photo", src: event2, title: "Cultural Day" },
      { type: "video", src: "https://www.youtube.com/embed/MqCBdUKIIdk", title: "Science Fair Highlights", thumbnail: "https://img.youtube.com/vi/MqCBdUKIIdk/hqdefault.jpg" },
      { type: "photo", src: event2, title: "Cultural Day" },
      { type: "photo", src: event1, title: "Annual Sports Day" },
      { type: "photo", src: event3, title: "Cultural Day" },
   ],
   activities: [
      { type: "photo", src: activity1, title: "Art Class" },
      { type: "photo", src: activity2, title: "Music Practice" },
      { type: "video", src: "https://www.youtube.com/embed/48wBikebFEE", title: "Drama Performance", thumbnail: "https://img.youtube.com/vi/48wBikebFEE/hqdefault.jpg" },
      { type: "photo", src: activity2, title: "Music Practice" },
      { type: "photo", src: activity1, title: "Art Class" },
      { type: "photo", src: activity3, title: "Music Practice" },
   ],
};
