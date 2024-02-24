import { useEffect, useState } from 'react'
import { dayjs } from '../util/dayjs';

const now = () => dayjs().tz()
const events = {
  christmas: [25, 12],
  newYear: [1, 1],
  earthDay: [22, 4],
  birthday: [12, 12],
  thanksgiving: [24, 11],
}

const Time = () => {
  const [date, setDate] = useState(now())

  const currentEvent = Object.entries(events)
    .filter((entry) => entry[1][0] === date.date() && entry[1][1] === date.month() + 1)
    .flat()[0] as string

  useEffect(() => {
    const timer = setInterval(() => setDate(now()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <p className="hidden md:block">
      {date.format('MMMM Do, YYYY • h:mm:ss A')}{' '}
      {currentEvent && (
        <span className="font-bold">
          —{' '}
          {
            {
              christmas: 'Merry Christmas!',
              newYear: 'Happy New Year!',
              earthDay: 'Happy Earth Day!',
              birthday: 'It\'s my birthday!',
            }[currentEvent]
          }
        </span>
      )}
    </p>
  )
}

export default Time
