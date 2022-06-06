import React, { useEffect } from "react";
import axios from "axios";

function DataEntry(props) {
    useEffect(() => {
        axios
            .get(
                "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
                {
                    headers: {
                        "X-CMC_PRO_API_KEY":
                            "19ee7cd6-5c72-4061-b877-a03035e934d4",
                    },
                }
            )
            .then((response) => {
                console.log(response);
            });

        // axios({
        //     url: "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        // })
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    });

    return (
        <div className="flex p-5 items-center border border-gray-500 rounded-md mt-5 w-fit ">
            <div className="text-center">
                <img
                    src={require("../resources/images/" + props.coin + ".png")}
                    alt="No s'ha pogut carregar la imatge"
                />
                <span>{props.coin.toUpperCase()}</span>
            </div>

            <span className="ml-10 w-40">Quantitat: {props.quantity}</span>

            <span className="ml-10 w-40">Preu: 40.000 €</span>

            <span className="ml-10 w-40"> Total: 45.000 €</span>
        </div>
    );
}

export default DataEntry;
