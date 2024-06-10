import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Contact from "./screens/Contact/Contact.jsx";

function App () {
  return (
    <Routes>
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
