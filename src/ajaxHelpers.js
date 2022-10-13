export const fetchDogs = async () => {
  const response = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-pt-web-ft/players`
  );
  const result = await response.json();
  console.log(result.data.players);
  return result.data.players;
};

export const fetchDogById = async (id) => {
  const response = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-pt-web-ft/players/${id}`
  );
  const result = await response.json();
  return result.data.player;
};

export const createPuppy = async (name, breed) => {
  const response = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-pt-web-ft/players`,
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const deletePuppyById = async (id) => {
  const response = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-pt-web-ft/players/${id}`,
    {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
};
