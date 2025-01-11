// components/Card3.js
const Card3 = () => {
  return (
    <div
      className="absolute p-4"
      style={{
        top: '150px',
        left: '750px',
        width: '600px',
        height: '258px',
        backgroundColor: '#1B204A',
        borderRadius: '8px',
      }}
    >
      {/* Heading */}
      <h3 className="text-white text-lg font-medium mb-6">Recent Activity</h3>

      {/* Timestamp */}
      <p className="text-gray-300 text-xs mb-6">10:40 AM 10 Sep 2021</p>

      {/* Activity Description */}
      <p className="text-white text-sm mb-6">You Posted a New Job</p>

      {/* Details */}
      <p className="text-white text-sm mb-6">
        Kindly check the requirements and terms of work and make sure everything is right.
      </p>

      {/* Activity Count */}
      <p className="text-white text-sm mb-6">Today you made 12 Activity</p>

      {/* Button */}
      <button
        className="mt-4 py-2 px-4 bg-[#FF5151] text-white text-sm rounded-md"
        style={{ position: 'absolute', right: '10px', bottom: '10px' }}
      >
        See All Activity
      </button>
    </div>
  );
};

export default Card3;
