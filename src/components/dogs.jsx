import { useState, useEffect } from "react";
import { fetchDogs } from "../ajaxHelpers";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Styles/Dogs.css";

function Dogs() {
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getAllPuppies() {
      const puppies = await fetchDogs();
      setDogs(puppies);
    }
    getAllPuppies();
  }, []);

  return (
    <div className="dogs">
      {dogs.map((dog) => {
        // console.log(dog);
        return (
          <div className="dogCard" key={dog.id}>
            <h3>{dog.name}</h3>
            <label>Breed:</label>
            <h4 className="breed">{dog.breed}</h4>
            <img src={dog.imageUrl} />
            <button
              className="seeDetails"
              onClick={() => {
                navigate(`/dogs/${dog.id}`);
              }}
            >
              See Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Dogs;
