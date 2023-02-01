export interface IProducts {
  products: IProduct[]
}

export interface IProduct {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: number
  createdAt: string
  updatedAt: string
  quantity: number
  cartTotalQuantity: number
  subtotal: number
}