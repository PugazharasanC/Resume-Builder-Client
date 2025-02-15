import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import LoginPage from "./Pages/LoginPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateResume from "./pages/CreateResume";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-resume" element={<CreateResume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
