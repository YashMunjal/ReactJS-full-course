import React, { useState, useEffect, useContext, FunctionComponent } from "react";
import pet, { ANIMALS ,Animal} from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Result from "./Results";
import ThemeContext from "./themeContext";
import {RouteComponentProps} from '@reach/router'



const SearchParams :FunctionComponent<RouteComponentProps>= () => {
  const [location, setLocation] = useState("");
  const [breeds, setBreeds] = useState([] as string[]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([] as Animal[]);
  const [theme,setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    });
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">Theme 
        <select value={theme} onChange={e=>setTheme(e.target.value)}  onBlur={e=>setTheme(e.target.value)}>
          <option value="peru">Peru</option>
          <option value="darkblue">darkblue</option>
          <option value="red">red</option>
        </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
