import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DemoDashboard from "./components/DemoDashboard";
import Signup from "./components/SignUp";
import Loading from "./components/Loading";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo2" element={<DemoDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loading" element={<Loading />} />

      </Routes>
    </Router>
  );
}

export default App;
