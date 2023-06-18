// Context that stores the user Authentication

import { createContext, useState } from "react";

export const UserContext = createContext({  // Initial value of the context and this what we use in the components
    currentUser: null,
    setCurrentUser: () => null,
})

export function UserProvider({children}) {   // The component used to wrap the components that need to subscribe to this Context, children: for the children components that is wrapped by this component

    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}