import Link from 'next/link';
import { RiYoutubeFill, RiInstagramFill, RiSpotifyFill } from 'react-icons/ri';

const socials= [
  {
    path: '#',
    icon: <RiYoutubeFill />
  },
  {
    path: '#',
    icon: <RiInstagramFill />
  },
  {
    path: '#',
    icon: <RiSpotifyFill />
  },
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return(
          <Link href={item.path} key={index}>
            <div className={`${iconStyles}`}>{item.icon}</div>
          </Link>)
      })}
      
    </div>
  )
}

export default Socials
