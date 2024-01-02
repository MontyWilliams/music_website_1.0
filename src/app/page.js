import Events from '@/components/events/Events';
import Hero from '@/components/Hero';
import Player from '@/components/Player';
import Albums from '@/app/components/albums/Albums';
import Blog from './components/blog/Blog';

export default function Home() {
  
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <div className="h-[4000px]"></div>
    </main>
    
  )
}
