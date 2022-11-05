import './itemDetail.css'

import React, {useState} from "react";
import { useCartContext } from '../../context/CartContext';
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className='detail_image' src={data.img} alt="" />
                <div className="content">
                    <h1 className='font-bold text-3xl'>{data.title}</h1>
                    {
                        goToCart
                        ? <Link to='/cart' className='btn mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Terminar Compra</Link>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;