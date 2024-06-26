import {TriangleAlert} from "lucide-react";


export default function SettingsDeleteAccount() {
    return (
        <div>
            <div id="user-storage" className="flex flex-col justify-between items-center bg-white rounded-2xl h-96 w-96 p-4 mr-6">
                <div className="flex flex-col items-center">
                <div id="cloud-check" className="relative flex justify-center items-center rounded-full bg-dashboard-gray-100 w-28 h-28">
                        <TriangleAlert className="text-dashboard-purple-300" size={60}/>
                    </div>
                    <h1 className="font-bold text-xl">Delete Account</h1>
                    <p className="  text-dashboard-gray-50 text-center">
                        Deleting your account will delete all your information from the system
                    </p>
                </div>
                    
                <button type="button" className="
                    py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white w-3/5 rounded border border-gray-200 hover:bg-gray-100 
                    hover:text-dashboard-purple-300  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
                    ">Delete</button>

            </div>

            
        </div>
    )
}