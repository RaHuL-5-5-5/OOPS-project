import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchBar() {
    const [startDate, setStartDate] = useState(null);
  
    const handleChange = date => {
      setStartDate(date);
    };
  
    const handleSearch = () => {
      // Perform search action with startDate
    };
  
   
     return  <div className='SearchBar'>
       <div ><DatePicker className='SearchInput' 
          selected={startDate}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select date"
        /></div>
       <div ><button className='SearchButton' onClick={handleSearch}>Search</button></div>
     </div> ;
  }
  
export default SearchBar;