import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchResults.css";
import { mockData } from "./data";

const SearchResults = () => {
   const location = useLocation();
   const query = new URLSearchParams(location.search).get("query");
   const [results, setResults] = useState([]);

   useEffect(() => {
      if (query) {
         const filteredResults = mockData.filter(
            (item) =>
               item.title.toLowerCase().includes(query.toLowerCase()) ||
               item.description.toLowerCase().includes(query.toLowerCase())
         );
         setResults(filteredResults);
      }
   }, [query]);

   return (
      <div className="search-results">
         <h1>Search Results</h1>
         <p className="search-query">
            Showing results for: <strong>{ query }</strong>
         </p>
         { results.length === 0 ? (
            <div className="no-results">No results found for &quot;{ query }&quot;.</div>
         ) : (
            <div className="results-grid">
               { results.map((result, index) => (
                  <div className="result-card" key={ index }>
                     <h3>{ result.title }</h3>
                     <p>{ result.description }</p>
                     <a href={ result.link }>View More</a>
                  </div>
               )) }
            </div>
         ) }
      </div>
   );
};

export default SearchResults;
