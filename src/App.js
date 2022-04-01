import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    if (!loggedIn) {
        return <Login setLoggedIn={setLoggedIn} />;
    } else {
    }
}

export default App;
