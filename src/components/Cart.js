import React, { useEffect, useState } from 'react'
import './Cart.css'
import CartRow from './CartRow'

import { useSelector } from 'react-redux'
import { selectCartItems } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const cartItems = useSelector(selectCartItems)

    console.log(cartItems)

    useEffect(() => {
        let priceTotal = 0

        cartItems.map(item => {
            console.log(item)
            priceTotal += (item.price * item.quantity)
        })

        setTotalPrice(priceTotal)
    }, [])

    return (
        <div className='cart'>
            <div className="cart__list">
                <h2>Shopping Cart</h2>
                <p>Price</p>
                <hr />

                {
                    cartItems.map(item => (
                        <CartRow img={item.image} name={item.name} price={item.price} quantity={item.quantity} id={item.id} />
                    ))
                }
            </div>

            <div className="cart__total">
                <div className="cart__totalContainer">
                    <h2>Subtotal ({cartItems.length} items): <span>${totalPrice}</span></h2>
                    <div className="cart__totalGiftWrap">
                        <input type="checkbox" /> {/* add wrap option */}
                        <p> This order contains a gift</p>
                    </div>
                    <Link to='/checkout'>
                        <button className='amzButton'>Proceed to checkout</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Cart
