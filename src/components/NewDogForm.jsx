import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPuppy } from "../ajaxHelpers";

export default function NewDogForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div className="container">
      <form
        className="pure-form pure-form-stacked"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPuppy(name, breed);
          navigate("/");
        }}
      >
        <h3>Create a New Dog</h3>
        <label>Name:</label>
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Breed:</label>
        <input
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
          type="text"
          placeholder="breed"
        />
        <button
          variant="secondary"
          className="pure-button pure-button-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
