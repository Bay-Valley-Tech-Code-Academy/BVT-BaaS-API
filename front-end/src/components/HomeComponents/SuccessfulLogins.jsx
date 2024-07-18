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
    const [calendarShows, setCalendarShows] = React.useState(false);
    const [range, setRange] = React.useState();
    

    const [logins, setLogins] = React.useState(200);

    function calendarClicked () {
        setCalendarShows(true);
    }
    function closeClicked () {
        setCalendarShows(false);
    }

    return (
            <div id="user-storage" className="relative flex flex-col justify-between bg-white rounded-2xl w-full h-96 p-4 mr-6">
                <div className="flex flex-col">

                    <select name="" id="" className="
                        relative flex justify-center items-center rounded-md font-medium text-gray-400 bg-dashboard-gray-100 h-10 w-32 cursor-pointer hover:bg-blue-50 
                        hover:text-slate-700">
                        <option value="">Project</option>
                        <option value="">Project1</option>
                    </select>
                    <div 
                        id="logins-period" 
                        className="
                            relative flex justify-center items-center rounded-md font-medium text-gray-400 bg-dashboard-gray-100 h-10 w-32 cursor-pointer hover:bg-blue-50 
                            hover:text-slate-700"
                        onClick={calendarClicked}
                    >
                        <Calendar className=' bg-dashboard-gray-100 mr-1' size={20}/>This month
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
                {(calendarShows) && <div> 
                    <DayPicker mode='range' selected={range} onSelect={setRange} className='absolute top-0 left-0 drop-shadow-md bg-dashboard-gray-100 ' size={2}/>
                    <button 
                        onClick={closeClicked} 
                        className='absolute top-[1.4rem] left-[10.75rem] pl-1 pr-1 border-solid border-2 rounded-3xl hover:bg-blue-100 hover:text-slate-700 hover:border-blue-100'
                    >
                        close
                    </button>
                </div>}

            </div>

            
    )
}