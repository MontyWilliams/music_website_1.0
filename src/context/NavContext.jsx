import React, {createContext, useState } from 'react'

export const NavContext = createContext();

function NavContext({children}) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <NavContext.Provider value={'nav context'}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContext
