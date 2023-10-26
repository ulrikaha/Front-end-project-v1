'use client';


import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateRangeComp = () => {

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle 
const refOne = useRef<HTMLDivElement>(null)

useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
}, [])

// hide dropdown on ESC press
const hideOnEscape = (e: KeyboardEvent) => {
    if( e.key === "Escape" ) {
            setOpen(false)
    }
}

// Hide on outside click
const hideOnClickOutside = (e: MouseEvent) => {
    if( refOne.current && !(refOne.current.contains(e.target as Node)) ) {
            setOpen(false)
    }
}

  return (
    <div className="calendarWrap">

      <input
        value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(range[0].endDate, "dd/MM/yyyy")}`}
        readOnly
                className="inputBox"
                onClick={ () => setOpen(open => !open) }
              />

              <div ref={refOne}>
                {open && 
                  <DateRange
                    onChange={item => {
                      if (item.selection.startDate && item.selection.endDate) {
                        setRange([{
                          startDate: item.selection.startDate,
                          endDate: item.selection.endDate,
                          key: 'selection'
                        }])
                      }
                    }}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    months={1}
                    direction="horizontal"
                    className="calendarElement"
                  />
                }
              </div>

            </div>
          )
        }

 

export default DateRangeComp