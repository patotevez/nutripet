import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import getItems, { getItemsByCategory } from "../Service/mockAPI";

function ItemListContainer() {
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const { cat } = useParams();

useEffect(() => {
    setIsLoading(true);
    if (cat === undefined) {
    getItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    } else {
        getItemsByCategory(cat)
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    }
    return () => {
        console.log("Componente Item List desmontado");
    };
    }, [cat]);

return (

    <div className="mainContainer">
        {data.map((item) => {
        return (
            <Card
            key={item.id}
            offer={item.offer}
            id={item.id}
            price={item.price}
            title={item.title}
            img={item.img}
            detail={item.detail}
            stock={item.stock}
            />
        );
        })}
    </div>
    )};


export default ItemListContainer;