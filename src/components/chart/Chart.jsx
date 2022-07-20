import axios from 'axios';
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-date-fns';
import 'chartjs-plugin-zoom';
import zoomPlugin from 'chartjs-plugin-zoom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    TimeScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    zoomPlugin,
    Legend
);

const Chart = (props) => {
    const [label, setLabels] = useState([])
    const [dataset, setDataset] = useState([])
    // const [bulan, setBulan] = useState(props.bulan)
    // const [tahun, setTahun] = useState(props.tahun)
    let ref = useRef(null);
    const downloadImage = useCallback(() =>{
        const link = document.createElement("a");
        link.download = "chart.png";
        link.href = ref.current.toBase64Image();
        link.click();
    },[]);

    const testChart = () => {
        let label = [];
        let dataset = [];
        const bulan = props.bulan;
        const tahun = props.tahun;

        axios.post("http://35.232.8.249:8081/api/temperature", {
            "month": bulan,
            "year": tahun
        })
            .then(res => {
                console.log(res);
                for (const dataObj of res.data.payload) {
                    // console.log(dataObj.temperature);
                    dataset.push(parseFloat(dataObj.temperature));
                    label.push(dataObj.timestamp);
                }
                setLabels(label)
                setDataset(dataset)
            },
            )
            .catch(err => {
                console.log("error nih bang");
                console.log(err);
            })
    }
    useEffect(() => {
        testChart();
    }, [props.bulan,props.tahun]);

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: "minute",
                }
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'xy'
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    mode: 'xy',

                },
            }
        }
    };
    const labels = label;
    const data = {
        labels,
        datasets: [
            {
                label: 'Data Suhu',
                data: dataset,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return (
        <div className="App">
            <button type='button' onClick={downloadImage}>Download Chart</button>
            <Line ref={ref} options={options} data={data} redraw={true}/>
        </div>
    )
}

export default Chart;