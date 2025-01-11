// components/SearchBar.js
const SearchBar = () => {
  return (
    <div className="w-full max-w-sm"> {/* Adjust width here */}
      <input
        type="text"
        placeholder="Search"
        className="w-full py-1 px-3 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
};

export default SearchBar;
