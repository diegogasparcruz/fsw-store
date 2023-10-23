'use client'

import { Product } from '@prisma/client'
import { ReactNode, createContext, useContext, useState } from 'react'

type CartProduct = Product & {
  quantity: number
}

type CartContextProps = {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  addProductToCart: (product: CartProduct) => void
}

const CartContext = createContext<CartContextProps>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  addProductToCart: () => {},
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([])

  const addProductToCart = (product: CartProduct) => {
    setProducts((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
