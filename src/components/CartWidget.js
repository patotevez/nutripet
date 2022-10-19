import React, { useContext } from "react";
import { cartCtx } from "./CartContext";


function CartWidget() {
const { getTotalItemsInCart } = useContext(cartCtx);

return (
    <div> 
        <h3>Carrito</h3>
        <span>{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</span>
    </div>
)
}

export default CartWidget;