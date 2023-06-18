// Context that stores the shop products

import { createContext, useState } from "react";
import productsData from "../shop-data.json"

export const ProductContext = createContext({  // Initial value of the context and this what we use in the components
    products: []
})

export function ProductProvider({children}) {  // The component used to wrap the components that need to subscribe to this Context, children: for the children components that is wrapped by this component
    const [products, setProducts] =  useState(productsData)
    const value = {products}

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}