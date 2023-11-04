
const getEvents = async () => {
  const res = await fetch('http://localhost:4000/envents');
  return res.json();
}

function events() {
  return (
    <div>
      const events = await getEvents();
      console.log(events);
    </div>
  )
}

export default events
