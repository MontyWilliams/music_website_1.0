import React, {createContext, useState } from 'react'

export const NavContext = createContext();

function NavContextProvider({children}) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <NavContext.Provider value={'nav context'}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider
