// Context that stores the shop products

import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utilities/folder/Firebase.js";

export const CategoriesContext = createContext({  // Initial value of the context and this what we use in the components
    categoriesMap: {}
})

export function CategoriesProvider({children}) {  // The component used to wrap the components that need to subscribe to this Context, children: for the children components that is wrapped by this component
    const [categoriesMap, setCategoriesMap] =  useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap()
      }, []);

    const value = {categoriesMap}

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}