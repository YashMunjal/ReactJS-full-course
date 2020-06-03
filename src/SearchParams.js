import React,{useState} from "react";
import pet, { ANIMALS } from "@frontendmasters/pet"
const SearchParams = () => {
 const [location,setLocation]=useState('');
 const [animal,setAnimal]=useState('dog');
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" onChange={e=>setLocation(e.target.value)}></input>
        </label>
        <label htmlFor="animal">
            Animal
            <select id="animal" value={animal} onBlur={e=>setAnimal(e.target.value)}>
                <option>All</option>
                {ANIMALS.map(x=><option value={x} key={x}>{x}</option>)}
            </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;