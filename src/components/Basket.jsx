import { useEffect } from "react"
import { BasketItem } from "./BasketItem"
export const Basket = ({ cart, countPlus, countMinus, deleteFromBasket, total,setTotal }) => {
    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + item.price * item.count, 0))
    }, [cart])

    return <div className='col-md-5'>
        <h3>total:{total}</h3>
        <h3>count:{cart.length}</h3>


        <BasketItem
            cart={cart}
            countPlus={countPlus}
            countMinus={countMinus}
            deleteFromBasket={deleteFromBasket}
            total={total}
        />
    </div>
}