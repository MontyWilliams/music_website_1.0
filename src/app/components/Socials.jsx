import Link from 'next/link';
import { RiYoutubeFill, RiInstagramFill, RiSpotifyFill, RiSoundcloudFill } from 'react-icons/ri';

const socials= [
  {
    path: 'https://www.youtube.com/',
    icon: <RiYoutubeFill />
  },
  {
    path: 'https://www.instagram.com/thebad_jokes/',
    icon: <RiInstagramFill />
  },
  {
    path: 'https://soundcloud.com/',
    icon: <RiSoundcloudFill />
  },
  {
    path: 'https://open.spotify.com/',
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
