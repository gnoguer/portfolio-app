import React, { useState } from "react";
import { auth, logInWithEmailAndPassword } from "../firebase";

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
            console.log(userCredential);

            if (userCredential != undefined) {
                props.setLoggedIn(true);
                console.log(props.loggedIn);
            }
        } catch {
            console.log(props.loggedIn);
            alert("Error con el login");
        }
    };

    return (
        <div class="grid place-items-center h-screen p-4">
            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                        >
                            Usuari
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Usuari"
                            onChange={handleInputChange}
                            name="username"
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                        >
                            Contrasenya
                        </label>
                        <input
                            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            onChange={handleInputChange}
                            name="password"
                        />
                    </div>
                    <div class="flex justify-center">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
