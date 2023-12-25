import React, { useContext }from 'react'
import { NavContext } from '../../context/NavContext'

const NavMobile = () => {
  const {isOpen, setIsOpen } = useContext(NavContext)
  
  return (
    <nav
    className={`${isOpen ? 'right-0' : 'right-full'}
      fixed xl:hidden bg-primary w-full top-0 z-20 bottom-0 transition-all duration-500
    `}
      
      >
        Nav Mobile
      </nav>
  )
}

export default NavMobile
