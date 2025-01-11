// components/ProfileMenu.js
import { ChevronDownIcon, BellIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

const ProfileMenu = () => {
  return (
    <div className="flex items-center space-x-4 cursor-pointer">
      
      
      {/* Notification Bell Icon*/}
      <div className="relative">
        <BellIcon className="w-6 h-6 text-black hover:text-orange-500 cursor-pointer" />
        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
      </div>

      {/* Message Icon */}
      <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-black hover:text-orange-500 cursor-pointer" />
      
      {/* Profile Section */}
      <div className="flex items-center space-x-2 group">
        <img
          src="/profile-pic.png"  
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium text-black group-hover:text-orange-500">Chirag Chandel</span>
        <ChevronDownIcon className="w-5 h-5 text-black group-hover:text-orange-500" />
      </div>
    </div>
  );
};

export default ProfileMenu;
