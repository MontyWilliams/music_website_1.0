import EventBox from "./EventBox";
import SectionHeader from "../SectionHeader";
import event from '../../../../_data/db.json'

// const getEvents = () => {
//   return event.events
// }

const Events = () => {
  const events = event.events

  return (
    <div>
      <section className="section" id="tours">
        <div className="container mx-auto">
        <SectionHeader pretitle='World Tour' title='Upcoming Events'/>
          {/* EventBox */}
          <EventBox events={events}/>
        </div>
      </section>
    </div>
  )
}

export default Events
