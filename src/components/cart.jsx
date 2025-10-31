import { useCartStore } from "../store/cart.store"
import { CartButton } from "./cart-button"
import { CartItem } from "./cart-item"
import { CartTotal } from "./cart-total"


export const Cart = () => {

  const { toggleClose, cart } = useCartStore();

  return (
    <div className="bg-Rose-50 p-6 rounded-xl ">
      <h2 className="text-Red font-bold text-2xl mb-6">Your Cart ({cart.length})</h2>
      
      {cart.map( item => (
        <CartItem key={item.name} {...item}/>  
      ))}

      <CartTotal />
      <div className="bg-Rose-300 rounded-lg flex justify-center gap-1 p-4 mb-6">
        <img src="/public/assets/images/icon-carbon-neutral.svg" alt="icon carbon neutral" />
        <p className="text-sm "> this is a <span className="font-bold">Carbon Neutral</span> delivery</p>
        <CartButton onClick={toggleClose} text='Confirm Order'/>
      </div>
    </div>
  )
}

