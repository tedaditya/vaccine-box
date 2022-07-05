import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns = [
    { field: 'ID', headerName: 'ID', width: 70 },
    { field: 'timestamp', headerName: 'Time', width: 200 },
    { field: 'report', headerName: 'Report message', width: 750 },
];

export default function Table(props) {
    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        const isiBody = {
            "limit": 0,
            "offset": 199
        }
        fetch('http://35.232.8.249:8081/api/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(isiBody)
        })
            .then((response) => response.json())
            .then((json) => setDataTable(json))
    }, []);

    console.log(dataTable)
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={dataTable}
                columns={columns}
                getRowId={(row) => row.ID}
                pageSize={5}
                initialState={{
                    sorting: {
                        sortModel: [
                            {
                                field: 'ID',
                                sort: 'desc',
                            },
                        ],
                    },
                }}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}
