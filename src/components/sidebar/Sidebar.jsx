import React from 'react';
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CampaignIcon from '@mui/icons-material/Campaign';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="list-menu">
                <ul>
                    <li >
                        <a href='/'>
                            <DashboardIcon className='icon' />
                            <br />
                            <span>Home</span>
                        </a>

                    </li>
                    <li>
                        <a href='/notify'>
                            <NotificationsActiveIcon className='icon' />
                            <br />
                            <span>Notify</span>
                        </a>

                    </li>
                    <li>
                        <a href='/log'>
                            <CampaignIcon className='icon' />
                            <br />
                            <span>Log</span>
                        </a>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar