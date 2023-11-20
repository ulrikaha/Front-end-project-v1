import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { useSearchContext } from '../context/SearchContext';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeComp = () => {
  const { startDate, endDate, selectedPackage, updateSearchCriteria } = useSearchContext();

  // Initialize the range state with values from the context
  const [range, setRange] = useState([
    {
      startDate,
      endDate,
      key: 'selection',
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // event listeners
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e: MouseEvent) => {
    if (refOne.current && !(refOne.current.contains(e.target as Node))) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <div className="ml-4 font-custom text-xl">Check in & Check out</div>

      <div className="relative">
        <input
          value={`${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(
            range[0].endDate,
            'dd/MM/yyyy'
          )}`}
          readOnly
          className="inputBox border rounded-xl p-2 h-20 w-100 font-custom text-xl text-center"
          onClick={() => setOpen((open) => !open)}
        />

        {open && (
          <div ref={refOne} className="absolute bg-gray-200 border rounded p-2 z-10">
            <DateRange
              onChange={(item) => {
                if (item.selection.startDate && item.selection.endDate) {
                  setRange((prevRange) => [
                    {
                      startDate: item.selection.startDate || prevRange[0].startDate,
                      endDate: item.selection.endDate || prevRange[0].startDate,
                      key: 'selection',
                    },
                  ]);

                  // Update the context state here with both date range and selected package
                  updateSearchCriteria(
                    item.selection.startDate,
                    item.selection.endDate,
                    selectedPackage
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
  );
};

export default DateRangeComp;
