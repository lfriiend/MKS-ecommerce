import React from "react";
import { ProductContainer } from "./styles";
import { useEffect, useState } from "react";
import Image from "next/image";
import Bag from "../../../assets/images/bag.svg"
import { useDispatch } from "react-redux";
import { incrementCounterAction } from "@/redux/counter/action";
import { addingCartAction } from "@/redux/cart/action";


export const Products: React.FC = () => {

  const [data, setData] = useState<any>(null)

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounterAction(1))
    dispatch(addingCartAction(data))
    console.log(addingCartAction)
  }

  async function getData() {
    try {
      const res = await fetch('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC', { cache: 'force-cache' });
      const data = await res.json()
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {data && React.Children.toArray(data.products.map((item: any) => (
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
            console.log(item);
            handleIncrement()
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





