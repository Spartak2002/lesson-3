import { BasketItem } from "./BasketItem"
export const Basket = ({cart,countPlus,countMinus,deleteFromBasket}) => {
    return <div className='col-md-5'>
        <h3>items: {cart.length}</h3>
       
        <BasketItem  
        cart = {cart} 
        countPlus = {countPlus}
        countMinus = {countMinus}
        deleteFromBasket = {deleteFromBasket}
        />
    </div>
}