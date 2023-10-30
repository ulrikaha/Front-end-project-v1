'use client';

import { useSearchContext } from '../context/SearchContext'
import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateRangeComp = () => {
  const { updateSearchCriteria } = useSearchContext();

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
      <div className="ml-4 font-custom text-xl">Check in & Check out</div>
     
 <div className="relative">
        <input
        value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(range[0].endDate, "dd/MM/yyyy")}`}
        readOnly
                className="inputBox border rounded-xl p-2 h-20 w-100  font-custom text-xl text-center"
                onClick={ () => setOpen(open => !open) }
              />
             

              
                {open && ( 
                  <div ref={refOne} className="absolute bg-gray-200 border rounded p-2 z-10">
                  <DateRange
                    onChange={(item) => {
                      if (item.selection.startDate && item.selection.endDate) {
                        setRange([{
                          startDate: item.selection.startDate,
                          endDate: item.selection.endDate,
                          key: 'selection'
                        },
                      ]);
                      updateSearchCriteria(
                        item.selection.startDate,
                        item.selection.endDate,
                        'all'
                      );
                      }
                    }}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    months={1}
                    direction="horizontal"
                    className="calendarElement"
                  />
                </div>
            )}
            </div>
            </div>
          )
        }

 

export default DateRangeComp