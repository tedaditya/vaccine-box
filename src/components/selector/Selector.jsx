import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Selector(props) {
    return (
        <div className="selector">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    views={['year', 'month']}
                    label="Select month"

                    value={props.dateValue}
                    onChange={(newValue) => {
                        props.setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
}
