const Cards2 = () => (
  <div className="flex space-x-4 mt-2">
    {/* Card 4 with white background */}
    <div className="w-[312px] h-[190px] bg-white rounded-md shadow-md p-6 m-2 flex items-center justify-between transform transition-transform duration-300 hover:scale-105">
      {/* Left Side (Text) */}
      <div>
        <h3 className="font-medium text-left text-lg text-black" style={{ fontSize: '18px' }}>Total Employees</h3>
        <div className="text-left mt-2" style={{ fontSize: '48px', color: 'black' }}>216</div>

        
        <div className="text-left mt-2" style={{ fontSize: '12px', color: '#4A4A4A' }}>120 Men</div>
        <div className="text-left mt-1" style={{ fontSize: '12px', color: '#4A4A4A' }}>96 Women</div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-28 h-28 ml-4">
        <img src="g1.png" alt="employee image" className="w-full h-full object-cover rounded-md" />
      </div>
    </div>

    {/* Card 5 with white background */}
    <div className="w-[312px] h-[190px] bg-white rounded-md shadow-md p-6 m-2 flex items-center justify-between transform transition-transform duration-300 hover:scale-105">
      {/* Left Side (Text) */}
      <div>
        <h3 className="font-medium text-left text-lg text-black" style={{ fontSize: '18px' }}>Talent Request</h3>
        <div className="text-left mt-2" style={{ fontSize: '48px', color: 'black' }}>16</div>

        
        <div className="text-left mt-2" style={{ fontSize: '12px', color: '#4A4A4A' }}>6 Men</div>
        <div className="text-left mt-1" style={{ fontSize: '12px', color: '#4A4A4A' }}>10 Women</div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-28 h-28 ml-4">
        <img src="g2.png" alt="employee image" className="w-full h-full object-cover rounded-md" />
      </div>
    </div>
  </div>
);

export default Cards2;
