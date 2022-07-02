import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Table from "../../components/table/Table"
import "./log.css"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Log = () => {
    const [dateValue, setValue] = useState(new Date());

    return (
        <>
            <Navbar />
            <div className="log">
                <Sidebar />
                <div className="logContainer">
                    <div className="selector">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                views={['year', 'month', 'day']}
                                label="Select month"

                                value={dateValue}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                    //console.log(Date.parse(value));
                                    // console.log(value.getMonth(), value.getFullYear());
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        {/* <h1>{dateValue.getMonth()}</h1>
            <h1>{dateValue.getFullYear()}</h1> */}

                    </div>
                    <p className='homeLabel mt'>This month data summary</p>
                    <div className="widgets">
                        <Widget title="Maximum" suhu="15" />
                        <Widget title="Average" suhu="7" />
                        <Widget title="Minimum" suhu="5" />
                    </div>
                    <Table/>
                </div>
            </div>
        </>

    )
}

export default Log