import React from "react";
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import {useEffect,useState} from 'react';

export const Cartas = ( {id, title, img , detail, price , stock, category } ) => {
    return (
        <div>
            <div>{title}</div>
            <img src={img} />
            <div>{detail}</div>
            <div>{price}</div>
        </div>
    )
}

const ItemListContainer = () => {

    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    useEffect(()=> {
        getProducts()
    }, [])

    const getProducts = () => {
        const db = getFirestore()
        const productsCollection = collection (db, 'products')
        getDocs(productsCollection).then( res => { 
            const productsData = res.docs.map( d => ({id: d.id,...d.data()}) )
            console.log(productsData);
            setProducts(productsData);
        })
    }

    return (
        <div>{products.map( p => <Cartas key={p.id} {...p} />)}</div>
    )

}

export default ItemListContainer