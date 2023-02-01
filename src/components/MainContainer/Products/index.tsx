import React, { useReducer } from "react";
import { ProductContainer } from "./styles";
import { useEffect, useState } from "react";
import Image from "next/image";
import Bag from "../../../assets/images/bag.svg"
import { useDispatch } from "react-redux";
import { addToCart } from '../../../redux/cart/Cart.store'
import { IProduct, IProducts } from "@/interfaces";


export const Products: React.FC = () => {

  const [data, setData] = useState<IProduct[]>([])

  const dispatch = useDispatch();

  const handleIncrement = (item:any) => {
    dispatch(addToCart(item))
  }

  async function getData() {
    try {
      const res = await fetch('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC', { cache: 'force-cache' });
      const data = await res.json()
      setData(data?.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {data && React.Children.toArray(data.map((item: any) => (
        <ProductContainer>
          <Image 
          alt='imagem do produto'
          loader={() => item.photo}
          unoptimized={true}
          priority={true}
          src={item.photo} 
          width={200} 
          height={200} 
          />
          <div className="titleWrapper">
            <span className="productName">{item.name}</span>
            <span className="productPrice">R${item.price}</span>
          </div>
          <p className="productDescription">{item.description}</p>
          <button 
          onClick={() =>{
            handleIncrement(item)
          }}
          className="productButton">
            <Image 
            src={Bag} 
            alt='ícone da sacola de compra' 
            width={20} 
            height={20}
            />
            <span>COMPRAR</span>
          </button>
        </ProductContainer>
      )))}
    </>
  )
}





