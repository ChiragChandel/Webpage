// components/Sidebar.js
import { HomeIcon, UsersIcon, CalendarIcon, BriefcaseIcon, BuildingOfficeIcon, QuestionMarkCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
const Sidebar = () => {
  return (
    <div className="w-1/5 h-screen bg-[#efefee] border-r">
       <div className="flex items-center justify-center pt-10">        
        <img
          src="/logoshoshin.png" 
          alt="Logo"
          className="max-w-full h-auto"
        />
        </div>

        <div className="mt-12 px-6">
            <h2 className="text-lg text-gray-600">Main Menu</h2>         
            <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-4 group">
                <HomeIcon className="w-5 h-5 text-gray-700  group-hover:text-orange-500" />
                <a href="#" className="text-gray-700 group-hover:text-orange-500">Dashboard</a>

            </li>
            <li className="flex items-center space-x-4 group">
                <BriefcaseIcon className="w-5 h-5 text-gray-700  group-hover:text-orange-500" />
                <a href="#" className="text-gray-700 group-hover:text-orange-500">Recruitment</a>
            </li>
            <li className="flex items-center space-x-4 group">
            <CalendarIcon className="w-5 h-5 text-gray-700 group-hover:text-orange-500" />
            <a href="#" className="text-gray-700 group-hover:text-orange-500">Schedule</a>
            </li>

            <li className="flex items-center space-x-4 group">
                <UsersIcon className="w-5 h-5 text-gray-700  group-hover:text-orange-500" />
                <a href="#" className="text-gray-700 group-hover:text-orange-500">Employees</a>
            </li>
            <li className="flex items-center space-x-4 group">
                <BuildingOfficeIcon className="w-5 h-5 text-gray-700  group-hover:text-orange-500" />
                <a href="#" className="text-gray-700 group-hover:text-orange-500">Department</a>
            </li>
            </ul>
      </div>

      <div className="mt-12 px-6">
            <h2 className="text-lg text-gray-600">Other</h2>         
            <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-4 group">
                <QuestionMarkCircleIcon className="w-5 h-5 text-gray-700  group-hover:text-orange-500" />
                <a href="#" className="text-gray-700 group-hover:text-orange-500">Support</a>

            </li>
            <li className="flex items-center space-x-4 group">
                <Cog6ToothIcon className="w-5 h-5 text-gray-700  group-hover:text-orange-500" />
                <a href="#" className="text-gray-700 group-hover:text-orange-500">Settings</a>
            </li>            
            </ul>
      </div>
    </div>
  );
};

export default Sidebar;
