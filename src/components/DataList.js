import React, { useEffect, useState } from "react";
import DataEntry from "./DataEntry";

import { getDatabase, ref, get } from "firebase/database";

export default function DataList() {
    const db = getDatabase();
    const cryptosRef = ref(db, "users/rnoguer");

    const [data, setData] = useState([]);

    useEffect(() => {
        get(cryptosRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let receivedData = snapshot.val();

                    setData(receivedData);
                } else {
                    console.log("No data");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="grid place-items-center">
            {Object.keys(data).map((key, index) => {
                return <DataEntry key={key} coin={key} quantity={data[key]} />;
            })}
        </div>
    );
}
