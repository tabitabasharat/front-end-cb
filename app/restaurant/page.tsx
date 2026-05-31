"use client";

import { useState, Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PASTA_SISTERS_ALL = [
  { title: 'FRESH PASTA', bgImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-900', overlay: 'bg-black/20 group-hover:bg-black/10' },
  { title: 'LASAGNA', bgImage: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/20 group-hover:bg-black/10' },
  { title: 'ENTREES', bgImage: 'https://images.unsplash.com/photo-1544025162-8366fd06fee2?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-700', overlay: 'bg-black/20 group-hover:bg-black/10' },
  { title: 'BEVERAGES', bgColor: 'bg-[#8ca7a1]', bgImage: null, overlay: 'bg-transparent' },
  { title: 'COFFEE & TEA', bgColor: 'bg-[#8a5a2b]', bgImage: null, overlay: 'bg-transparent' },
  { title: 'BUBBLES', bgColor: 'bg-[#b6bba0]', bgImage: null, overlay: 'bg-transparent' },
  { title: 'WHITE WINE', bgColor: 'bg-[#bcab4a]', bgImage: null, overlay: 'bg-transparent' },
  { title: 'RED WINE', bgColor: 'bg-[#811d20]', bgImage: null, overlay: 'bg-transparent' },
];

const RESTAURANT_DB: Record<string, any> = {
  'The Nosy Nif- a wine bar': {
    name: 'The Nosy Nif- a wine bar',
    themeColor: '#ff8a65', // coral
    activeTextColor: '#ffffff',
    bgColor: '#f3f4f6',
    cardBg: '#ffffff',
    textColor: '#111827',
    mutedText: '#6b7280',
    inputBg: '#f4f4f5',
    coverImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    logoText: 'THE NOSY\nNIF',
    address: '2327 Tacoma Ave S, Tacoma, USA',
    phone: '2533378522',
    description: 'Washington wine Focused Wine Bar 🍷🥂🍻\n•Pre Picked charcuterie can be substituted\n•2 pre packaged limited edition charcuterie to be easy\n•$ glass/bottle\n*When you click "add to order", you\'ll be taking notes to tell',
    tabs: ['Specials', 'Food', 'Drinks'],
    menuData: {
      'Specials': [
        { title: '$5 MIMOSA', bgColor: 'bg-[#a3a3a3]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'THE SOCIAL CLUB AKA COMMITMENT-LESS WINE CLUB', bgColor: 'bg-[#a3a3a3]', bgImage: null, overlay: 'bg-transparent' }
      ],
      'Food': [
        { title: 'PRE-PICKED CHARCUTERIE', bgImage: 'https://images.unsplash.com/photo-1615486171448-43bf6a71d234?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30 group-hover:bg-black/20' },
        { title: 'POPCORN', bgImage: 'https://images.unsplash.com/photo-1572889813508-306ff95c62d0?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30 group-hover:bg-black/20' }
      ],
      'Drinks': [
        { title: 'WHITE WINE', bgImage: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30 group-hover:bg-black/20' },
        { title: 'RED WINE', bgImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30 group-hover:bg-black/20' }
      ]
    }
  },
  'Pasta Sisters': {
    name: 'Pasta Sisters',
    themeColor: '#f59e0b',
    activeTextColor: '#ffffff',
    bgColor: '#f3f4f6',
    cardBg: '#ffffff',
    textColor: '#111827',
    mutedText: '#6b7280',
    inputBg: '#f4f4f5',
    coverImage: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    logoText: 'PASTA\nSISTERS',
    address: '3280 Helms Ave, Culver City, CA',
    phone: '(424) 603-4503',
    tabs: ['Food', 'Beverages', 'Coffee & Tea', 'Wine & Beer'],
    menuData: {
      'Food': PASTA_SISTERS_ALL,
      'Beverages': [
        { title: 'BEVERAGES', bgColor: 'bg-[#8ca7a1]', bgImage: null, overlay: 'bg-transparent' },
      ],
      'Coffee & Tea': [
        { title: 'COFFEE & TEA', bgColor: 'bg-[#8a5a2b]', bgImage: null, overlay: 'bg-transparent' },
      ],
      'Wine & Beer': [
        { title: 'BUBBLES', bgColor: 'bg-[#b6bba0]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'WHITE WINE', bgColor: 'bg-[#bcab4a]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'RED WINE', bgColor: 'bg-[#811d20]', bgImage: null, overlay: 'bg-transparent' },
      ]
    }
  },
  'HIDE Dallas': {
    name: 'HIDE Dallas',
    themeColor: '#000000', // black
    activeTextColor: '#ffffff',
    bgColor: '#f3f4f6',
    cardBg: '#ffffff',
    textColor: '#111827',
    mutedText: '#6b7280',
    inputBg: '#f4f4f5',
    coverImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    logoText: 'H',
    logoBg: '#fde047', // yellow background for logo
    logoColor: '#000000', // black text
    address: '',
    phone: '',
    description: '',
    tabs: ['Cocktails', 'Food', 'Beer, Wine, N/A', 'HAPPY HOUR', 'BRUNCH'],
    menuData: {
      'Cocktails': [
        { title: 'SPECIALTY COCKTAILS', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'SHOTS', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' }
      ],
      'Food': [
        { title: 'SHARE PLATES - ALL DAY', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'BRUNCH - SAT / SUN 11A-4P', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'PLATES - ALL DAY', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' }
      ],
      'Beer, Wine, N/A': [
        { title: 'CAN BEER', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'WINE', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'N/A', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' }
      ],
      'HAPPY HOUR': [
        { title: 'HAPPY HOUR FOOD 3PM-6PM', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'HAPPY HOUR DRINKS 3PM - 6PM', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' }
      ],
      'BRUNCH': [
        { title: 'MIMOSAS - SAT / SUN 11A-4P', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'EARLY RISERS - SAT / SUN 11A-4P', bgColor: 'bg-[#b3b3b3]', bgImage: null, overlay: 'bg-transparent' }
      ]
    }
  },
  'Family Restobar': {
    name: 'Family Restobar',
    themeColor: '#fbcfe8', // soft pink
    activeTextColor: '#000000',
    bgColor: '#262626',
    cardBg: '#1c1c1c',
    textColor: '#f9fafb',
    mutedText: '#9ca3af',
    inputBg: '#2d2d2d',
    coverImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    logoText: 'FAMILY\nRESTOBAR',
    address: '1915 Coney Island Avenue, New-York , Usa',
    phone: '(929) 441-8040',
    description: 'Prepare to be amazed and savor every moment',
    tabs: ['FOODS', 'SUSHI AND ROLLS', 'STEAKS AND KEBABS', 'DESSERTS'],
    menuData: {
      'FOODS': [
        { title: 'TANDOORI', bgImage: 'https://images.unsplash.com/photo-1544025162-8366fd06fee2?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30 group-hover:bg-black/20' },
        { title: 'BURGERS', bgImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/40 group-hover:bg-black/30' },
        { title: 'SALADS', bgImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/40 group-hover:bg-black/30' },
      ],
      'SUSHI AND ROLLS': [
        { title: 'SUSHI', bgImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30 group-hover:bg-black/20' }
      ],
      'STEAKS AND KEBABS': [
        { title: 'KEBABS', bgImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30 group-hover:bg-black/20' },
        { title: 'STEAKS', bgImage: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30 group-hover:bg-black/20' }
      ],
      'DESSERTS': []
    }
  },
  'LM Social': {
    name: 'LM Social',
    themeColor: '#ffffff',
    activeTextColor: '#000000',
    bgColor: '#262626',
    cardBg: '#1c1c1c',
    textColor: '#f9fafb',
    mutedText: '#9ca3af',
    inputBg: '#2d2d2d',
    coverImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    logoText: 'LM\nSOCIAL',
    address: '238 W Jefferson St, Syracuse, United States',
    phone: '3153960014',
    tabs: ['Liquor'],
    menuData: {
      'Liquor': [
        { title: 'BOURBON | WHISKEY', bgImage: null, bgColor: 'bg-[#262626]', overlay: 'bg-transparent' },
        { title: 'RYE WHISKEY', bgImage: null, bgColor: 'bg-[#262626]', overlay: 'bg-transparent' },
        { title: 'IRISH WHISKEY', bgImage: null, bgColor: 'bg-[#262626]', overlay: 'bg-transparent' },
      ]
    }
  },
  'Ararat Fish and Meat': {
    name: 'Ararat Fish and Meat',
    themeColor: '#b91c1c',
    activeTextColor: '#ffffff',
    bgColor: '#f3f4f6',
    cardBg: '#ffffff',
    textColor: '#111827',
    mutedText: '#6b7280',
    inputBg: '#f4f4f5',
    coverImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    logoText: 'ARARAT',
    address: '620 S Glendale ave unit A, Glendale, US',
    phone: '+ (818) 240-3727',
    tabs: ['Meals'],
    menuData: {
      'Meals': [
        { title: 'PLATES', bgImage: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-900', overlay: 'bg-black/40 group-hover:bg-black/30' },
        { title: 'WRAPS', bgImage: 'https://images.unsplash.com/photo-1626804475297-41609ea064eb?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/40 group-hover:bg-black/30' },
        { title: 'FAMILY BBQ SETS', bgImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-700', overlay: 'bg-black/40 group-hover:bg-black/30' },
      ]
    }
  },
  'Rooftop at HIDE': {
    name: 'Rooftop at HIDE',
    themeColor: '#000000',
    activeTextColor: '#ffffff',
    bgColor: '#f3f4f6',
    cardBg: '#ffffff',
    textColor: '#111827',
    mutedText: '#6b7280',
    inputBg: '#f4f4f5',
    coverImage: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80',
    logoText: 'HIDE',
    address: 'Dallas, US',
    phone: '',
    tabs: ['Rooftop Cocktails', 'Happy Hour', 'Food', 'Beer, Wine, N/A'],
    menuData: {
      'Rooftop Cocktails': [
        { title: 'SPECIALITY DRINKS', bgColor: 'bg-[#a3a3a3]', bgImage: null, overlay: 'bg-transparent' }
      ],
      'Happy Hour': [],
      'Food': [],
      'Beer, Wine, N/A': []
    }
  },
  'Lilly\'s sweets': {
    name: 'Lilly\'s sweets',
    themeColor: '#f87171',
    activeTextColor: '#ffffff',
    bgColor: '#f3f4f6',
    cardBg: '#ffffff',
    textColor: '#111827',
    mutedText: '#6b7280',
    inputBg: '#f4f4f5',
    coverImage: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    logoText: 'Lilly\'s',
    address: '103 W Kansas Ave, Garden city, United States',
    phone: '6205214000',
    tabs: ['Combo Bowls', 'COMBO CUP', 'Quesadillas', 'TACOS', 'Hotdogs'],
    menuData: {
      'Combo Bowls': [
        { title: 'COMBO BOWL', bgImage: 'https://images.unsplash.com/photo-1512852939750-130d07a6227c?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30 group-hover:bg-black/20' }
      ],
      'COMBO CUP': [],
      'Quesadillas': [],
      'TACOS': [],
      'Hotdogs': []
    }
  },
  '24K Bistro & Lounge': {
    name: '24K Bistro & Lounge',
    themeColor: '#eab308',
    activeTextColor: '#000000',
    bgColor: '#262626',
    cardBg: '#171717',
    textColor: '#f9fafb',
    mutedText: '#9ca3af',
    inputBg: '#2d2d2d',
    coverImage: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=800&q=80',
    logoText: '24K',
    address: '9330 Center Lake Dr Suite 100, Charlotte, United States',
    phone: '7045260695',
    tabs: ['Promo Nights', 'Taco Tuesday', 'Dinner (Thursday-Sunday)'],
    menuData: {
      'Promo Nights': [
        { title: 'WEEKLY SPECIALS', bgImage: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/40 group-hover:bg-black/30' }
      ],
      'Taco Tuesday': [],
      'Dinner (Thursday-Sunday)': []
    }
  },
  'OneSixty Cocktails and Kitchen': {
    name: 'OneSixty Cocktails and Kitchen',
    themeColor: '#d946ef',
    activeTextColor: '#ffffff',
    bgColor: '#262626',
    cardBg: '#171717',
    textColor: '#f9fafb',
    mutedText: '#9ca3af',
    inputBg: '#2d2d2d',
    coverImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    logoText: 'ONE\nSIXTY',
    address: '4847 Shopton Road Suite A, Charlotte, United States',
    phone: '(980) 416-0262',
    tabs: ['Dinner', 'Brunch', 'Table Service', 'Drinks', 'Shisha'],
    menuData: {
      'Dinner': [
        { title: 'COCKTAIL SPECIALS', bgImage: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30 group-hover:bg-black/20' },
        { title: 'WEEKLY SPECIALS', bgImage: 'https://images.unsplash.com/photo-1544025162-8366fd06fee2?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-700', overlay: 'bg-black/30 group-hover:bg-black/20' }
      ],
      'Brunch': [],
      'Table Service': [],
      'Drinks': [],
      'Shisha': []
    }
  },
  'Harvest Kitchen + Bar': {
    name: 'Harvest Kitchen + Bar',
    themeColor: '#000000',
    activeTextColor: '#ffffff',
    bgColor: '#f3f4f6',
    cardBg: '#ffffff',
    textColor: '#111827',
    mutedText: '#6b7280',
    inputBg: '#f4f4f5',
    coverImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    logoText: 'HARVEST',
    address: '4241 Conestoga Dr, Springfield, IL 62711, Springfield, IL, United States',
    phone: '(217) 717-1978',
    description: "Welcome to Harvest Kitchen & Bar — where fresh flavors meet cozy vibes. From morning brunch classics to hearty dinners and craft drinks, every dish is made to bring people together. Whether you're here for a quick bite, a date night, or a weekend brunch with friends, we've got a seat (and a cocktail) waiting for you.",
    tabs: ['BREAKFAST', 'LUNCH', 'INSPIRED BY TRIP TO', 'DINNER'],
    menuData: {
      'BREAKFAST': [
        { title: 'MORNING PLATES', bgImage: 'https://images.unsplash.com/photo-1525351484163-7e16ab13824f?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30' },
        { title: 'THE FARM TABLE', bgImage: 'https://images.unsplash.com/photo-1544025162-8366fd06fee2?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30' },
      ],
      'LUNCH': [
        { title: 'SANDWICHES', bgImage: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30' },
        { title: 'SALADS', bgImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/30' },
      ],
      'INSPIRED BY TRIP TO': [],
      'DINNER': [
        { title: 'APPETIZERS', bgColor: 'bg-[#a3a3a3]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'SALADS', bgColor: 'bg-[#a3a3a3]', bgImage: null, overlay: 'bg-transparent' },
        { title: 'HARVEST SPECIALTIES', bgImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', bgColor: 'bg-gray-800', overlay: 'bg-black/40' },
      ]
    }
  }
};

function RestaurantContent() {
  const searchParams = useSearchParams();
  const nameQuery = searchParams.get('name') || 'Pasta Sisters';
  
  // Find restaurant data or fallback to Pasta Sisters
  const restaurant = RESTAURANT_DB[nameQuery] || RESTAURANT_DB['Pasta Sisters'];

  const [activeTab, setActiveTab] = useState(restaurant.tabs[0]);
  const [searchQueryState, setSearchQueryState] = useState('');

  // Reset tab when restaurant changes
  useEffect(() => {
    setActiveTab(restaurant.tabs[0]);
    setSearchQueryState('');
  }, [restaurant]);

  // Handle potential missing sections gracefully
  const currentSectionItems = restaurant.menuData[activeTab] || [];
  const displayedItems = currentSectionItems.filter((item: any) => 
    item.title.toLowerCase().includes(searchQueryState.toLowerCase())
  );

  return (
    <div className="min-h-screen flex justify-center font-sans transition-colors duration-300" style={{ backgroundColor: restaurant.bgColor }}>
      <div className="w-full max-w-md min-h-screen relative shadow-2xl overflow-hidden flex flex-col transition-colors duration-300" style={{ backgroundColor: restaurant.cardBg }}>
        
        {/* Cover Image */}
        <div className="h-48 w-full relative shrink-0">
          <img 
            src={restaurant.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover" 
          />
          {/* Back button */}
          <Link href="/" className="absolute top-4 left-4 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </Link>
        </div>
        
        {/* Content Card */}
        <div className="rounded-t-[2.5rem] -mt-8 relative px-6 pb-12 flex flex-col flex-1 z-10 transition-colors duration-300" style={{ backgroundColor: restaurant.cardBg }}>
          
          {/* Logo */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[88px] h-[88px] rounded-full p-1.5 shadow-sm" style={{ backgroundColor: restaurant.cardBg }}>
            <div className="w-full h-full rounded-full border border-gray-200/50 flex items-center justify-center text-center text-[10px] font-bold leading-tight tracking-widest" style={{ backgroundColor: restaurant.logoBg || restaurant.cardBg, color: restaurant.logoColor || restaurant.textColor }}>
              {restaurant.logoText.split('\n').map((line: string, i: number) => (
                <span key={i} className="block text-[28px] leading-none">{line}</span>
              ))}
            </div>
          </div>

          {/* Title & Info */}
          <div className="mt-14 text-center">
            <h1 className="text-2xl font-medium tracking-tight" style={{ color: restaurant.textColor }}>{restaurant.name}</h1>
            
            {/* Address & Contact */}
            <div className="text-xs mt-3 flex flex-col items-center gap-1.5 font-medium" style={{ color: restaurant.mutedText }}>
              <p className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                {restaurant.address}
              </p>
              {restaurant.phone && (
                <p className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {restaurant.phone}
                </p>
              )}
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-4 mt-4" style={{ color: restaurant.mutedText }}>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>

            {/* Description */}
            {restaurant.description && (
              <div className="mt-4 text-xs leading-relaxed text-left font-medium" style={{ color: restaurant.mutedText }}>
                {restaurant.description.split('\n').map((line: string, i: number) => (
                  <p key={i} className={i > 0 ? "mt-1" : ""}>{line}</p>
                ))}
              </div>
            )}
          </div>

          {/* Tabs */}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scroll::-webkit-scrollbar {
              display: none !important;
            }
            .hide-scroll {
              -ms-overflow-style: none !important;
              scrollbar-width: none !important;
            }
          `}} />
          <div className="flex overflow-x-auto items-center gap-2.5 mt-6 pb-2 hide-scroll">
            {restaurant.tabs.map((tag: string) => {
              const isActive = activeTab === tag;
              return (
                <button 
                  key={tag} 
                  onClick={() => {
                    setActiveTab(tag);
                    setSearchQueryState('');
                  }}
                  className="shrink-0 px-3 py-1 rounded-full border-2 text-[13px] font-bold tracking-tight transition-all"
                  style={{
                    backgroundColor: isActive ? restaurant.themeColor : 'transparent',
                    borderColor: restaurant.themeColor,
                    color: isActive ? restaurant.activeTextColor : restaurant.themeColor
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="mt-7 relative">
            <input 
              type="text" 
              value={searchQueryState}
              onChange={(e) => setSearchQueryState(e.target.value)}
              placeholder="Search" 
              className="w-full rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none transition-shadow border border-transparent focus:border-gray-500/20" 
              style={{ 
                backgroundColor: restaurant.inputBg, 
                color: restaurant.textColor 
              }}
            />
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full shadow-sm flex items-center justify-center transition-colors border"
              style={{
                backgroundColor: restaurant.cardBg,
                borderColor: restaurant.inputBg,
                color: restaurant.mutedText
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
          </div>

          {/* Menu Categories */}
          <div className="mt-8 space-y-4">
            {displayedItems.length > 0 ? (
              displayedItems.map((section: any, idx: number) => (
                <div 
                  key={idx}
                  className={`relative h-32 rounded-2xl overflow-hidden flex items-center justify-center text-white group cursor-pointer shadow-sm`}
                  style={{ backgroundColor: section.bgColor ? undefined : '#333' }}
                >
                  {section.bgColor && (
                    <div className={`absolute inset-0 ${section.bgColor}`}></div>
                  )}
                  {section.bgImage && (
                    <img 
                      src={section.bgImage} 
                      alt={section.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105" 
                    />
                  )}
                  <div className={`absolute inset-0 transition-colors duration-500 ${section.overlay || 'bg-black/20 group-hover:bg-black/10'}`}></div>
                  <span className="relative text-xl font-semibold tracking-[0.15em] drop-shadow-lg z-10 text-center px-4">
                    {section.title}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-sm" style={{ color: restaurant.mutedText }}>
                No items found
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default function RestaurantPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans">
        <div className="text-gray-400 font-medium">Loading restaurant...</div>
      </div>
    }>
      <RestaurantContent />
    </Suspense>
  );
}
