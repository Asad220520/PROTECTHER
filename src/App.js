import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AuthLogin from "./components/Auth/auth-login";
import Create from "./Pages/Create";
import MyPet from "./Pages/MyPet";
import SeePet from "./Pages/SeePet";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/myPet" element={<MyPet />} />
          <Route path="/seePet" element={<SeePet />} />
          <Route path="/auth" element={<AuthLogin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
