// import React, { useState } from "react";
// import axios from "axios";

// function SearchItem() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:5000/search?keyword=${searchTerm}`
//       );

//       setResults(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {results.map((result) => (
//           <li key={result._id}>{JSON.stringify(result)}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchItem;
import React, { useState } from "react";
import axios from "axios";

function SearchItem() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(
      `http://localhost:5000/cards/search?searchQuery=${searchQuery}`
    );
    setSearchResults(response.data);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults?.map((card) => (
          <li key={card._id}>{card.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchItem;

