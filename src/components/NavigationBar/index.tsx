import { TopMenu, Logo, Sublogo, Cartbutton, WrapLogo } from "./styles"
import Cart from '../../assets/images/Cart.svg'
import CloseCart from '../../assets/images/CloseCart.svg'
import Image from "next/image"
import { useState } from "react"
import { useSelector } from 'react-redux'

export default function NavigationBar() {
  const [cartOpen, setCartOpen] = useState<boolean>(false)

  const reduxStateCount: any = useSelector((state) => state)
  const { count } = reduxStateCount

  const reduxStateCart: any = useSelector((state) => state)
  const { cart } = reduxStateCart
  console.log("cart nav",cart)
  console.log("count nav",count)

  return (
    <TopMenu>
      <WrapLogo>
        <Logo>
          MKS
        </Logo>
        <Sublogo>
          Sistemas
        </Sublogo>
      </WrapLogo>
      <Cartbutton onClick={()=> {
      setCartOpen(!cartOpen)
    }
      }>
        <Image
          src={Cart}
          alt='Cart Button'
          width={20}
        />
        <span>{count}</span>
      </Cartbutton>

      <div id="nav" className={cartOpen ? "open" : ""}>
        <div className="containerTop">
        <span>Carrinho de compras</span>
        <button onClick={() => {setCartOpen(!cartOpen)}}><Image src={CloseCart} alt='' width={40} height={40}/></button>
        </div>
        <div className="containerBot">
        <div className="priceWrap">
        <span>Total:</span>
        <span>R${cart}</span>
        </div>
        <button>Finalizar Compra</button>
        </div>
      </div>
    </TopMenu>
  )
}