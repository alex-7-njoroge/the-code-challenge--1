import React, { useState } from "react";

function Search({searchData}) {
  const [searchTerm,setSearchTerm]=useState('')
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => 
        {
          setSearchTerm(e.target.value)
          searchData(searchTerm)
        }
        }
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
