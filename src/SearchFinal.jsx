import React from "react";
import Navbar from "./Navbar.jsx"
import SearchBar from "./SearchBar";
import SearchTable from "./SearchTable.jsx";
import Trial2 from "./trial2.jsx";
import Trial from "./trial.jsx"
function SearchFinal(){
return <div>
    <Navbar />
    <div className="SearchPage">
        <SearchBar />
    </div>
    <div className="SearchResults">
    <SearchTable />
    </div>
</div>;
}
export default SearchFinal;