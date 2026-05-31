import Link from 'next/link';

const RESTAURANTS = [
  { name: 'LM Social', icon: 'gray' },
  { name: 'Pasta Sisters', icon: 'outline' },
  { name: 'Harvest Kitchen + Bar', icon: 'dark' },
  { name: 'Family Restobar', icon: 'none' },
  { name: 'The Nosy Nif- a wine bar', icon: 'dark' },
  { name: 'HIDE Dallas', icon: 'gray' },
  // { name: 'Sushi El Manny', icon: 'dark' },
  // { name: 'TABOO Astoria', icon: 'dark' },
  // { name: 'The Spot Sports Bar And Grill', icon: 'none' },
  // { name: 'Vybez Restaurant & Lounge', icon: 'none' },
  // { name: "Mel's HonkyTonk N' Grill", icon: 'outline' },
  // { name: 'Mango Loco', icon: 'none' },
  // { name: "MAMBO'S DOMINICAN KITCHEN", icon: 'none' },
  // { name: 'Ararat Fish and Meat', icon: 'none' },
  // { name: 'Rooftop at HIDE', icon: 'gray' },
  // { name: "Lilly's sweets", icon: 'dark' },
  // { name: '24K Bistro & Lounge', icon: 'gray' },
  // { name: 'BARCITO SUSHI', icon: 'outline' },
  // { name: 'BOCAO SUSHI', icon: 'dark' },
  // { name: 'OneSixty Cocktails and Kitchen', icon: 'dark' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-black relative">
            OddMenu
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gray-300 rounded-full"></span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Menu Examples</a>
            <a href="#" className="hover:text-black transition-colors">Blog</a>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/login" className="text-gray-600 hover:text-black transition-colors">Log in</Link>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Create menu
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12">
        <div className="mb-8">
          <button className="flex items-center gap-2 text-xl font-semibold text-gray-900 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            United States
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          {RESTAURANTS.map((restaurant, index) => (
            <Link
              key={index}
              href={`/restaurant?name=${encodeURIComponent(restaurant.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white px-4 py-2.5 rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 text-sm font-medium text-gray-700 hover:text-black"
            >
              {restaurant.icon === 'dark' && (
                <div className="w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center"></div>
              )}
              {restaurant.icon === 'gray' && (
                <div className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center"></div>
              )}
              {restaurant.icon === 'outline' && (
                <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center"></div>
              )}
              <span className={restaurant.icon !== 'none' ? 'underline decoration-gray-300 group-hover:decoration-gray-600 underline-offset-2' : ''}>
                {restaurant.name}
              </span>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-12 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-black relative inline-block mb-2">
              OddMenu
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gray-300 rounded-full"></span>
            </Link>
            <div className="text-xs text-gray-500 flex gap-4">
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
            </div>
            <p className="text-xs text-gray-400">© 2026 All rights reserved</p>
          </div>
          
          <div className="flex flex-col items-end gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-black">Help</a>
            <button className="flex items-center gap-1 hover:text-black">
              English
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
