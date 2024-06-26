

export default function SettingsNotifications() {
    return(
        <div id="notifications" className="flex flex-col bg-white rounded-2xl w-96 h-96 mr-6 p-4">
                <h1 className="font-bold text-2xl mb-8">Notifications</h1>

                <div className="flex flex-col w-full h-96 mb-8">
                    <label className="inline-flex items-center cursor-pointer mb-8">
                        <input type="checkbox" value="" className="sr-only peer"></input>
                        <div className="
                        relative w-11 h-6 bg-gray-200 rounded-full peer 
                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                        after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:border-gray-600 peer-checked:bg-dashboard-purple-300
                        "></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">On user login</span>
                    </label>

                    <label className="inline-flex items-center cursor-pointer mb-8">
                        <input type="checkbox" value="" className="sr-only peer"></input>
                        <div className="
                        relative w-11 h-6 bg-gray-200 rounded-full peer 
                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                        after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:border-gray-600 peer-checked:bg-dashboard-purple-300
                        "></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">On user failed login</span>
                    </label>

                    <label className="inline-flex items-center cursor-pointer mb-8">
                        <input type="checkbox" value="" className="sr-only peer"></input>
                        <div className="
                        relative w-11 h-6 bg-gray-200 rounded-full peer 
                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                        after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:border-gray-600 peer-checked:bg-dashboard-purple-300
                        "></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Reset Password</span>
                    </label>

                </div>
            </div>
    )
}