// export const BasketItem = ({ cart, countPlus }) => {
//     return <>
//         <p>Basket Item</p>
//         <table className='table table-dark table-bordered'>
//             <thead>
//                 <tr>

//                     <th>Basket</th>
//                     <th>Price</th>
//                     <th>Count</th>
//                     <th>Subtotal</th>
//                     <th>Actions</th>
//                 </tr>

//             </thead>
//             <tbody>

//                 {
//                     cart.map(elm => <tr>

//                         <td>{elm.name}</td>
//                         <td>{elm.price}</td>
//                         <td>{elm.count}</td>
//                         <td>{elm.price * elm.count}</td>
//                         <td>
//                             <button onClick={() => countPlus(elm.id)} className="btn btn-success">+</button>

//                         </td>
//                     </tr>)

//                 }

//             </tbody>
//         </table>
//     </>
// }

export const BasketItem = ({ cart, countPlus, countMinus, deleteFromBasket }) => {
    return <>
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(elm => <tr key={elm.id}>
                        <td>{elm.name}</td>
                        <td>{elm.price}</td>
                        <td>{elm.count}</td>
                        <td>{elm.count * elm.price} USD</td>
                        <td>
                            <button onClick={() => countPlus(elm.id)} className="btn btn-success">+</button>
                            <button onClick={() => countMinus(elm.id)} className="btn btn-warning" >-</button>
                            <button onClick={() => deleteFromBasket(elm.id)} className="btn btn-danger">&times;</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}