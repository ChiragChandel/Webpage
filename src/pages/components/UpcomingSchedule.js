// components/UpcomingSchedule.js
const UpcomingSchedule = () => {
  return (
    <div className="w-[550px] bg-white rounded-md shadow-md p-6 m-2 -mt-20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#0A1F44]">Upcoming Schedule</h2>
        <button className="text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-600">
          Today, 13 Sep 2021 ▾
        </button>
      </div>

      {/* Announcements */}
      <div className="mt-4 space-y-3">
        {/* Priority Section */}
        <div>
          <h3 className="font-semibold text-lg text-gray-500 mb-2">Priority</h3>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-4">
            <div>
              <h3 className="font-medium text-black">Review Candidate Applications</h3>
              <p className="text-sm text-gray-500">Today 11:30 AM</p>
            </div>
          </div>
        </div>

        {/* Other Section */}
        <div>
          <h3 className="font-semibold text-lg text-gray-500 mb-2">Other</h3>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-4">
            <div>
              <h3 className="font-medium text-black">Interview With Candidates</h3>
              <p className="text-sm text-gray-500">Today 10:30 AM</p>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-4">
            <div>
              <h3 className="font-medium text-black">Short meeting with product designer from IT Department</h3>
              <p className="text-sm text-gray-500">Today 9:15 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <button className="text-red-500 font-medium">Create a New Schedule</button>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
