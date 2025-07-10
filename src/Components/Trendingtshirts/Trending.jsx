import { useRef, useState } from 'react';
import { Search } from 'lucide-react'; // Using lucide for a clean search icon

const originalShirts = [
  { src: '/Images/t-shirt1.jpg', label: 'Shirt 1' },
  { src: '/Images/t-shirt2.jpg', label: 'Shirt 2' },
  { src: '/Images/t-shirt3.jpg', label: 'Shirt 3' },
  { src: '/Images/t-shirt4.png', label: 'Shirt 4' },
  { src: '/Images/t-shirt5.png', label: 'Guts characture t-shirt' },
  { src: '/Images/t-shirt6.png', label: 'Shirt 6' },
  { src: '/Images/t-shirt7.png', label: 'Shirt 7' },
  { src: '/Images/t-shirt8.png', label: 'Shirt 8' }
];

const Trending = () => {
  const scrollContainerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const scrollLeft = () => {
    scrollContainerRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollLeft += 300;
  };

  const handleSearch = () => {
    setSearchTerm(searchQuery);
  };

  return (
    <section className="py-10 px-4 bg-zinc-900 text-white relative overflow-hidden"> 
      
      {/* Header and Search Bar */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-3xl font-bold text-center md:text-left font-family: 'Sawarabi Gohthic'">
          Trending T-Shirts
        </h2>

        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search T-Shirts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full px-4 py-2 pr-12 rounded-md border border-zinc-700 bg-zinc-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={handleSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
          >
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-sm hover:bg-white/20 transition"
      >
        ❮
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-sm hover:bg-white/20 transition"
      >
        ❯
      </button>

      {/* Shirt Cards */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto overflow-y-hidden gap-6 py-4 scroll-smooth scrollbar-hide "
      >
        {originalShirts.map((shirt, idx) => {
          const isVisible = shirt.label.toLowerCase().includes(searchTerm.toLowerCase());
          return (
            <div
              key={idx}
              className={`min-w-[180px] bg-zinc-800 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300 hover:shadow-[0_10px_20px_rgba(225,225,225,0.1)] ${
                !isVisible ? 'hidden' : ''
              }`}
            >
              <img
                src={shirt.src}
                alt={shirt.label}
                className="w-[180px] h-auto object-contain rounded-md mx-auto hover:brightness-110 transition duration-300 hover:drop-shadow-[0_0_8px_#ff0000]"
              />
              <p className="mt-3 text-sm font-family: 'Sawarabi Gohthic'">{shirt.label}</p>
            </div>
          );
        })}
      </div>

      {/* No results message */}
      {originalShirts.filter(shirt =>
        shirt.label.toLowerCase().includes(searchTerm.toLowerCase())
      ).length === 0 && (
        <p className="text-center w-full py-4 font-family: 'Sawarabi Gohthic'">No T-Shirts found.</p>
      )}
    </section>
  );
};

export default Trending;
