
const Announcement = () => {
  return (
    <div className="w-[648px] bg-white rounded-md shadow-md p-6 m-2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#0A1F44]">Announcement</h2>
        <button className="text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-600">
          Today, 13 Sep 2021 ▾
        </button>
      </div>

      {/* Announcements */}
      <div className="mt-4 space-y-3">
        {/* Announcement 1 */}
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
          <div>
            <h3 className="font-medium text-black">Outing schedule for every department</h3>
            <p className="text-sm text-gray-500">5 Minutes ago</p>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div>

        {/* Announcement 2 */}
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
          <div>
            <h3 className="font-medium text-black">Meeting HR Department</h3>
            <p className="text-sm text-gray-500">Yesterday, 12:30 PM</p>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div>

        {/* Announcement 3 */}
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
          <div>
            <h3 className="font-medium text-black">IT Department needs two more talents for UX/UI Designer position</h3>
            <p className="text-sm text-gray-500">Yesterday, 09:15 AM</p>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <button className="text-red-500 font-medium">See All Announcement</button>
      </div>
    </div>
  );
};

export default Announcement;
