import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/SingleDog.css";
import { fetchDogById, fetchDogs, deletePuppyById } from "../ajaxHelpers";

function SingleDog() {
  const navigate = useNavigate();

  const { dogId } = useParams();

  const [singleDog, setSingleDog] = useState({});

  useEffect(() => {
    async function getPuppyById() {
      //   fetchDogById(params.dogId);
      const puppy = await fetchDogById(dogId);
      setSingleDog(puppy);
      console.log("the puppy is", puppy);
    }

    getPuppyById();
  }, []);

  async function handleDelete() {
    const result = await deletePuppyById(singleDog.id);
    // console.log(result);
    navigate("/");
  }
  console.log({ singleDog });
  return (
    <div className="singleDog">
      <h4>{singleDog.name}</h4>
      <h5>{singleDog.breed}</h5>
      <img src={singleDog.imageUrl}></img>
      <h5>{singleDog.status}</h5>
      <button onClick={handleDelete}>Delete Puppy</button>
    </div>
  );
}

export default SingleDog;
