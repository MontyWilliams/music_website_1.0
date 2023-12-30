import Events from '@/components/events/Events';
import Hero from '@/components/Hero';
import Player from '@/components/Player';
import Albulm from '@/app/components/albulms/Albulm';

export default function Home() {
  
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albulm />
      <div className="h-[4000px]"></div>
    </main>
    
  )
}
