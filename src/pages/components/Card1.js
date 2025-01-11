const Cards = () => (
  <div className="flex space-x-4 mt-2">
    {/* Card 1 */}
    <div className="w-[204px] h-[136px] bg-[#FFEFE7] rounded-md shadow-md p-4 m-2 transform transition-transform duration-300 hover:scale-105">
      <h3 className="font-medium text-left text-lg text-black" style={{ fontSize: '18px' }}>Available Position</h3>
      <div className="text-left text-3xl mt-2 text-black">24</div>
      <h3 className="font-medium text-left text-lg" style={{ fontSize: '16px', color: '#FF5151' }}>4 Urgently needed</h3>
    </div>

    {/* Card 2 */}
    <div className="w-[204px] h-[136px] bg-[#E8F0FB] rounded-md shadow-md p-4 m-2 transform transition-transform duration-300 hover:scale-105">
      <h3 className="font-medium text-left text-lg text-black" style={{ fontSize: '18px' }}>Job Open</h3>
      <div className="text-left text-3xl mt-2 text-black">10</div>
      <h3 className="font-medium text-left text-lg text-black" style={{ fontSize: '16px', color: '#3786F1' }}>4 Active hiring</h3>
    </div>

    {/* Card 3 */}
    <div className="w-[204px] h-[136px] bg-[#FDEBF9] rounded-md shadow-md p-4 m-2 transform transition-transform duration-300 hover:scale-105">
      <h3 className="font-medium text-left text-lg text-black" style={{ fontSize: '18px' }}>New Employees</h3>
      <div className="text-left text-3xl mt-2 text-black">24</div>
      <h3 className="font-medium text-left text-lg text-black" style={{ fontSize: '16px', color: '#EE61CF' }}>4 Department</h3>
    </div>
  </div>
);

export default Cards;
