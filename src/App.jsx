import Dogs from "./components/dogs.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SingleDog from "./components/SingleDog.jsx";
import NavBar from "./components/NavBar.jsx";
import NewDogForm from "./components/NewDogForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<Dogs />} />
          <Route path="/dogs/:dogId" element={<SingleDog />} />
          <Route path="/newDogForm" element={<NewDogForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
