import React,{useState,useEffect} from "react";
import pet, { ANIMALS } from "@frontendmasters/pet"
import useDropdown from "./useDropdown";
import Result from './Results'

const SearchParams = () => {
 const [location,setLocation]=useState('');
 const [breeds,setBreeds]=useState([]);
 const [animal,AnimalDropdown]=useDropdown("Animal", "dog",ANIMALS);
 const [breed,BreedDropdown,setBreed]=useDropdown("Breed","",breeds)
 const [pets,setPets]=useState([]);

 async function requestPets(){
   const {animals} = await pet.animals({
    location,
    breed,
    type:animal
   });

   setPets(animals|| []);
 }

 useEffect(()=>{
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({breeds})=>{
            const breedStrings = breeds.map(({name})=>name);
            setBreeds(breedStrings);
        })
 },[animal,setBreed,setBreeds]);

  return (
    <div className="search-params">
      <form onSubmit={(e)=>{
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" onChange={e=>setLocation(e.target.value)}></input>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Result pets={pets}></Result>
    </div>
  );
};

export default SearchParams;