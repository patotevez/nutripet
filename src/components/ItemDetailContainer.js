import React, { useState, useEffect } from "react";
import { getSingleItem } from "../Service/mockAPI";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
const [data, setData] = useState({});

const [error, setError] = useState(false);
const [isLoading, setIsLoading] = useState(true);

const { id } = useParams();

useEffect(() => {
    getSingleItem(id)
    .then((respuestaDatos) => setData(respuestaDatos))
    .catch((errormsg) => {
        setError(errormsg.message);
    })
    .finally(() => setIsLoading(false));
}, [id]);

if (isLoading) {
    return (
    <>
        {error ? (
        <div>
            <h2 style={{ color: "#aa0033" }}>Error obteniendo los datos</h2>
            <p>{error}</p>
        </div>
        ) : (
        <h3></h3>
        )}
    </>
    );
}

return (
    <div>
    <div className="mainContainer">
        <ItemDetail item={data} />
    </div>
    </div>
);}

export default ItemDetailContainer;