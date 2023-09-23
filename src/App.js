import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./Pages/About";
import Campaigns from "./Pages/Campaigns";
import Donate from "./Pages/Donate";
import Latest from "./Pages/Latest";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/latest" element={<Latest />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
