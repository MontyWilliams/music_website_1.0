import Events from '@/components/events/Events';
import Hero from '@/components/Hero';
import Player from '@/components/Player';
import Albums from '@/app/components/albulms/Albums';

export default function Home() {
  
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <div className="h-[4000px]"></div>
    </main>
    
  )
}
