import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Table from "../../components/table/Table"
import "./log.css"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';

const Log = () => {
    const [dateValue, setValue] = useState(new Date());
    const [max, setMax] = useState();
    const [min, setMin] = useState();
    const [avg, setAvg] = useState();
    const date = String(dateValue.getDate()) + '/' + String((dateValue.getMonth() + 1)) + '/' + String(dateValue.getFullYear())

    const getData = () => {
        axios.post("http://35.232.8.249:8081/api/temperature/minmax/daily", {
            "day": dateValue.getDate(),
            "month": dateValue.getMonth() + 1,
            "year": dateValue.getFullYear()
        })
            .then(res => {
                console.log("sukses bang");
                console.log(res);
                setMax(res.data.max.toFixed(2));
                setMin(res.data.min.toFixed(2));
                setAvg(res.data.avg.toFixed(2));
                console.log(max, min, avg);
            },
            )
            .catch(err => {
                console.log("error nih bang");
                console.log(err);
            })
    }
    useEffect(() => {
        getData();
    }, [dateValue]);
    return (
        <>
            <Navbar />
            <div className="log">
                <Sidebar />
                <div className="logContainer">
                    <p className='homeLabel'>Select date</p>
                    <div className="selectorContainer selector">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                views={['year', 'month', 'day']}
                                label="Select month"
                                inputFormat="dd/MM/yyyy"
                                value={dateValue}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                    </div>
                    <p className='homeLabel mt'>{date} data summary</p>
                    <div className="widgets">
                        <Widget title="Maximum" suhu={max} />
                        <Widget title="Average" suhu={avg} />
                        <Widget title="Minimum" suhu={min} />
                    </div>
                    <div className='tableContainer mt'>
                        <Table />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Log