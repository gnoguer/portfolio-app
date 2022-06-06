import React, { useState } from "react";
import { logInWithEmailAndPassword } from "../firebase";

function Login(props) {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        try {
            let userCredential = await logInWithEmailAndPassword(
                userData.username,
                userData.password
            );

            if (userCredential !== undefined) {
                props.setLoggedIn(true);
            }
        } catch {
            console.log(props.loggedIn);
            alert("Error con el login");
        }
    };

    return (
        <div className="grid place-items-center h-screen p-4">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Usuari
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Usuari"
                            onChange={handleInputChange}
                            name="username"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Contrasenya
                        </label>
                        <input
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            onChange={handleInputChange}
                            name="password"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleOnSubmit}
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
