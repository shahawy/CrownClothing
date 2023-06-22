// Context that stores the shop products

import { createContext, useState } from "react";

export const CategoriesContext = createContext({  // Initial value of the context and this what we use in the components
    categoriesMap: {},
    setCategoriesMap: () => null
})

export function CategoriesProvider({children}) {  // The component used to wrap the components that need to subscribe to this Context, children: for the children components that is wrapped by this component
    const [categoriesMap, setCategoriesMap] =  useState({})
    const value = {categoriesMap, setCategoriesMap}

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}