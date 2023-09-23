import logo from "./logo.svg";
import "./App.css";
import AllRoute from "./Routes/AllRoute";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
     <div className="nav">
     </div>
      <AllRoute />
      <Toaster />
    </div>
  );
}

export default App;
