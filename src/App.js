import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Profile from "./pages/Profile";
import System from "./pages/System";
import Login from "./pages/Login";

function App() {
  const red = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/system" />} />
          <Route index path="/login" element={<Login />} />
          {red && (
            <>
              <Route path="/system" element={<System />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
          <Route path="*" element={<h1>No page found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
