// pages/index.js
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import ProfileMenu from './components/ProfileMenu';
import DashboardHeader from './components/DashboardHeader';
import Cards from './components/Card1'; 
import Cards2 from './components/Cards2'; 
import Announcement from './components/Announcement';
import Card3 from './components/Card3'; // Import Card3
import UpcomingSchedule from './components/UpcomingSchedule'; // Import UpcomingSchedule

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content (Right Side) */}
      <div className="w-full md:w-4/5 h-screen bg-white p-6 relative overflow-x-hidden">
        {/* Search Bar on the left side of the right-side content */}
        <div className="flex justify-start mb-6">
          <SearchBar />
        </div>

        {/* Profile Menu in the top-right corner */}
        <div className="absolute top-6 right-6">
          <ProfileMenu />
        </div>

        {/* Dashboard Header */}
        <div className="flex justify-start mb-6">
          <DashboardHeader />
        </div>

        {/* Card Components */}
        <div className="flex space-x-4 mt-12">
          <Cards />
        </div>

        {/* Card 2 Components */}
        <div className="flex space-x-4 mt-6">
          <Cards2 />
        </div>

        {/* Card 3 Components */}
        <div className="flex mt-6">
          <Card3 /> {/* Positioned card */}
        </div>

        {/* Add Announcement and Upcoming Schedule side by side */}
        <div className="flex flex-wrap justify-between mt-6">
          <div className="w-full md:w-[600px]">
            <Announcement /> {/* Only one Announcement here */}
          </div>
          <div className="w-full md:w-[600px]">
            <UpcomingSchedule /> {/* Upcoming Schedule side by side */}
          </div>
        </div>

        {/* Add more content here as you expand the page */}
      </div>
    </div>
  );
};

export default Home;
