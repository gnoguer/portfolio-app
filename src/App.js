import { useState } from "react";
import "./App.css";
import DataEntry from "./components/DataEntry";
import DataList from "./components/DataList";
import Login from "./components/Login";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogOut = () => {
        setLoggedIn(false);
    };

    if (!loggedIn) {
        return <Login setLoggedIn={setLoggedIn} />;
    } else {
        return (
            <div>
                <DataList />
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleLogOut}
                    >
                        Log out
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
