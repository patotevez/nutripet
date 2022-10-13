import { useContext } from "react";
import {cartCtx} from "./CartContext";

function CartView() {
    const context= useContext(cartCtx);
    const {cart, clearCart, removeFromCart} = context;

    let carritovacio = false;

    if (carritovacio) {
        return <div>Tu carrito esta vacio</div>
    }

    return (
        <div>
            {cart.map((item=> 
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.count}</p>
                    <strong>{item.price*item.count}</strong>
                </div>
                ))}
        </div>
    );
}

export default CartView;