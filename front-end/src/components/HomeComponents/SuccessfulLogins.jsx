import {Cloud, Check} from "lucide-react";


export default function SettingsUserStorage() {
    return (
            <div id="user-storage" className="flex flex-col justify-between bg-white rounded-2xl h-96 w-full p-4 mr-6">
                <div className="flex flex-col">
                    <div id="cloud-check" className="relative flex justify-center items-center rounded-1 text- bg-dashboard-gray-100 h-8 w-28 text-">
                        This month
                    </div>
                    <h1 className="font-bold text-xl">User Storage</h1>
                    <p className="text-dashboard-gray-50">
                        Supervise your user limit
                    </p>
                </div>
                    
                <div id="progress-bar" className="w-full">
                    <div className="flex justify-between">
                        <div>0</div> <div>100</div>

                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-dashboard-purple-300 h-2.5 rounded-full" style={{width: 250}}></div>
                    </div>
                </div>
            </div>

            
    )
}