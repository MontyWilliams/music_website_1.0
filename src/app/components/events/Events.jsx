import EventBox from "./EventBox";
import SectionHeader from "../SectionHeader";

const getEvents = async () => {
  const res = await fetch('http://localhost:4000/events');
  return res.json();
}

const Events = async () => {
  const events = await getEvents();
  return (
    <div>
      <section className="section" id="tours">
        <div className="container mx-auto">
        <SectionHeader />
          {/* EventBox */}
          <EventBox events={events}/>
        </div>
      </section>
    </div>
  )
}

export default Events
