
function EventBox({events}) {
  console.log(events)
  return (
    <div>
    {events.map((e) => {
      return (
        <div className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative">
          <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:full gap-4">
            {/* image */}
            <div className="hidden xl-flex w-[400px]">
            </div>
              {/* event list */}
              <div className="flex-1 bg-purple-400/10 h-[500px] flex flex-col">
                {/* events mapping */}
              </div>
          </div>

        </div>
      )
    })}
    </div>
  )
}
export default EventBox
