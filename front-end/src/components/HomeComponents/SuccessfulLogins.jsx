import React from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Calendar } from 'lucide-react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function SettingsUserStorage() {
    const [selected, setSelected] = React.useState();
    const [loginsPeriod, setLoginsPeriod] = React.useState();
    

    const [logins, setLogins] = React.useState(200);

    return (
            <div id="user-storage" className="flex flex-col justify-between bg-white rounded-2xl h-96 w-full p-4 mr-6">
                <div className="flex flex-col">
                    <div id="logins-period" className="relative flex justify-center items-center rounded-md font-medium text-gray-400 bg-dashboard-gray-100 h-10 w-32 text-">
                        <DayPicker className='absolute drop-shadow-md bg-dashboard-gray-100 mr-1' size={2}/>This month
                    </div>
                    <div id='login-analytics' className='flex'>
                        <div id='login-analytics-left' className='mr-8'>

                            <h1 className="font-bold text-4xl mt-6">{logins}</h1>
                            <div id='logins-net' className='flex items-center '>

                                <div className="text-sm font-medium text-gray-400 mr-28">
                                    Logins
                                </div>
                                
                            </div>
                        </div>
                        <div id='login-analyitcs-right'>
                        <LineChart
                            width={500}
                            height={300}
                            series={[
                                { data: pData, label: 'pv' },
                                { data: uData, label: 'uv' },
                            ]}
                            xAxis={[{ scaleType: 'point', data: xLabels }]}
                        />
                        <div id='login-chart-x-axis'>

                        </div>
                        </div>
                    </div>
                </div>
                    
            </div>

            
    )
}