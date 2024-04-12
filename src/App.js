import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import DialogContainer from "./components/Dialog/DialogContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialog/*" element={<DialogContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
