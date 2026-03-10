import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ThemeToggle from "./components/ThemeToggle";

import ThemeProvider from "./context/ThemeContext";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="container">

          <div className="card">
            <Navbar />
          </div>

          <div className="card">
            <Profile />
          </div>

          <div className="card">
            <ThemeToggle />
          </div>

        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;