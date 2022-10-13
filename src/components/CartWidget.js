import LocalMallIcon from '@mui/icons-material/LocalMall';
import React, { useContext } from "react";
import { cartCtx } from "./CartContext";

function CartWidget() {
const { getTotalItemsInCart } = useContext(cartCtx);

return (
    <div>
        <LocalMallIcon />
        <span>{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</span>
    </div>
)
}

export default CartWidget;