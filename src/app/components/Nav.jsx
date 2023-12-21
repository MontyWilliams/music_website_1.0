import { Link } from "react-scroll"

const links = [
  {
    path: 'home',
    name: 'Home'
  },
  {
    path: 'tours',
    name: 'Tours'
  },
  {
    path: 'discography',
    name: 'Discography'
  },
  {
    path: 'contact',
    name: 'Contact'
  },
] 

const Nav = ({containerStyles, linkStyles}) => {
  return (
    <nav>
      {links.map((link, index) => {
        return <Link to={link.path}>{link.name}</Link>
      })}
    </nav>
  )
}

export default Nav
