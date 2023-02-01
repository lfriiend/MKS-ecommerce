import * as Styled from "./styles"
import Cart from '../../assets/images/Cart.svg'
import CloseCart from '../../assets/images/CloseCart.svg'
import Image from "next/image"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { IProduct, IProducts } from "@/interfaces"
import { removeItem, decrementQuantity, incrementQuantity, addToCart } from '../../redux/cart/Cart.store'
import { selectCartTotal } from "@/redux/cart/cart.selector"
import produce from "immer"


export default function NavigationBar() {
  const [cartOpen, setCartOpen] = useState<boolean>(false)


  const  {cart} : any = useSelector<{
    cart: IProduct[]
  }>(state => state.cart)


  const dispatch = useDispatch();

   const handleRemove = (cart:any)  => {
      dispatch(removeItem(cart));
    }

  const handleIncrease = (cart:any) => {
    dispatch(incrementQuantity(cart));
  }

  const handleDecrease = (cart:any) => {
    dispatch(decrementQuantity(cart));
  }

const { cartTotalQuantity }:any = useSelector<any>(state => state.cart)

const total = useSelector(selectCartTotal);
console.log('total',total)

  return (
    <Styled.TopMenu>
      <Styled.WrapLogo>
        <Styled.Logo>
          MKS 
        </Styled.Logo>
        <Styled.Sublogo>
          Sistemas
        </Styled.Sublogo>
      </Styled.WrapLogo>
      <Styled.Cartbutton onClick={()=> {
      setCartOpen(!cartOpen)
    }
      }>
        <Image
          src={Cart}
          alt='Cart Button'
          width={20}
        />
        <span>{cartTotalQuantity }</span>
      </Styled.Cartbutton>

      <div id="nav" className={cartOpen ? "open" : ""}>
        <div className="containerTop">
        <span>Carrinho de compras</span>
        <button onClick={() => {setCartOpen(!cartOpen)}}><Image src={CloseCart} alt='' width={40} height={40}/></button>
        </div>
        <div className="containerMid">
        {cart.map((item:IProduct) => (
          <div className="containerProductCart">
            <div className="containerWrapper">
            <Image
              loader={() => item.photo}
              unoptimized={true}
              priority={true}
              src={item.photo} 
              width={70} 
              height={60}
              alt=''
            />
            <span className="nameProduct">{item.name}</span>
            </div>
            <div className="quantityWrapper">
            <button onClick={() => handleDecrease(item)} className="quantityBtn">-</button>
            <span className="quantityProduct">{item.quantity}</span>
            <button onClick={() => handleIncrease(item)} className="quantityBtn">+</button>
            </div>
            <span className="priceProduct">R$ {item.price * item.quantity}</span>
            <button onClick={() => handleRemove(item)}><Image src={CloseCart} alt='' width={25} height={25} className="removeItemBtn"/></button>
          </div>
          ))}
          </div>
        <div className="containerBot">
        <div className="priceWrap">
        <span>Total</span>
        <span>R${total}</span>
        </div>
        <button>Finalizar Compra</button>
        </div>
      </div>
    </Styled.TopMenu>
  )
}