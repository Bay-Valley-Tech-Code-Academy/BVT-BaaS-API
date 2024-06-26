import {Cloud, Check} from "lucide-react";


export default function SettingsUserStorage() {
    return (
        <div>
            <div id="user-storage" className="flex flex-col justify-between items-center bg-white rounded-2xl h-96 w-96 p-4 mr-6">
                <div className="flex flex-col items-center">
                    <div id="cloud-check" className="relative flex justify-center items-center rounded-full bg-dashboard-gray-100 w-28 h-28">
                        <Cloud className="text-dashboard-purple-300" size={70}/>
                        <Check className="absolute top-12 text-dashboard-purple-300" size={31}/>
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
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: 250}}></div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}