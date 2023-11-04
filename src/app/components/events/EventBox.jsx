import Image from 'next/image'

function EventBox({events}) {
  console.log(events)
  return (
    <div>
        <div className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative">
          <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:full gap-4">
            {/* image */}
            <div className="hidden xl:flex w-[400px]">
            <Image
              src={'/assets/albums/cover/band_standing.jpg'}
              width={358}
              height={489}
              priority
              quality={100}
              alt=''
            />
            </div>
              {/* event list */}
              <div className="flex-1 bg-purple-400/10 h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10 xl:pr-6">
                {events.map((event) => {
                  return (
                    <div key={event.id} className="flex flex-col xl:flex-row items-center justify-between gap-y-4 xl:gap-y-0 xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:py-3 last-of-type:border-none first-of-type:pt-0">
                      <div>
                        {/* day and month */}
                        <div className="flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0">
                          <div>{event.date.day}</div>
                          <div>{event.date.month}</div>
                        </div>
                        {/* location  */}
                        <div>
                          <div>{`${event.location.city}, ${event.location.country} `}</div>
                          <div>
                            <div>location.icon</div>
                            <div>{event.location.address}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
          </div>
        </div>
    </div>
  )
}
export default EventBox
