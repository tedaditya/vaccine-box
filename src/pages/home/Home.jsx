import Chart from '../../components/chart/Chart';
import Navbar from "../../components/navbar/Navbar"
import Selector from '../../components/selector/Selector';
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import React from 'react'
import { useState} from "react";

function Home() {
    const [dateValue, setValue] = useState(new Date());
    return (
        <>
            <Navbar />
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <p className='homeLabel'>Select month</p>
                    <Selector dateValue={dateValue} setValue={setValue}/>
                    <p className='homeLabel mt'>Realtime data update</p>
                    <div>
                        <Chart bulan={dateValue.getMonth()+1} tahun={dateValue.getFullYear()} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
