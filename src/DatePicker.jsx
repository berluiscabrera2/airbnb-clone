import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import Button from '@mui/material/Button';
import PeopleIcon from '@mui/icons-material/People';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './DatePicker.css'

function DatePicker() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

  return (
    <div className='datepicker'>
        <div><DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/></div>
        <h2>
            Number of People
            <PeopleIcon />
        </h2>
        <input type="number" min={1} max={16} defaultValue={2}/>
        <Button>Search</Button>
    </div>
  )
}

export default DatePicker