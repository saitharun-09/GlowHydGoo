import { useState } from 'react';

/* ─── Shared Icons ─── */
const SparklesIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const StarIcon = ({ filled = true }) => (
  <svg className={`w-3.5 h-3.5 ${filled ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckBadgeIcon = () => (
  <svg className="w-4 h-4 text-blue-600 inline-block ml-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const MapPinIcon = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={`${className} inline-block`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const GridIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const ListIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

const HeartIcon = ({ filled = false }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-red-500' : 'text-gray-400'}`} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const FilterIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
  </svg>
);

/* ─── Data ─── */
const SALONS_DATA = [
  {
    id: 1,
    name: 'Lakmé Salon',
    rating: 4.8, reviews: 512, distance: '2.4 km',
    location: 'Banjara Hills, Hyderabad',
    priceRange: '₹900 – ₹2,500', priceLevel: '₹₹₹',
    discount: '20% OFF', discountColor: 'bg-green-600',
    tags: ['Haircut', 'Hair Spa', 'Makeup', 'Facial'],
    gradient: 'from-amber-900 via-stone-800 to-slate-800',
    open: true,
  },
  {
    id: 2,
    name: 'Naturals Salon',
    rating: 4.7, reviews: 756, distance: '3.1 km',
    location: 'Jubilee Hills, Hyderabad',
    priceRange: '₹500 – ₹1,800', priceLevel: '₹₹',
    discount: '15% OFF', discountColor: 'bg-green-600',
    tags: ['Hair Spa', 'Facial', 'Coloring', 'More'],
    gradient: 'from-emerald-900 via-teal-900 to-slate-800',
    open: true,
  },
  {
    id: 3,
    name: 'Jean Claude Biguine',
    rating: 4.6, reviews: 389, distance: '3.8 km',
    location: 'Madhapur, Hyderabad',
    priceRange: '₹1,200 – ₹3,000', priceLevel: '₹₹₹₹',
    discount: '10% OFF', discountColor: 'bg-blue-600',
    tags: ['Haircut', 'Coloring', 'Spa', 'More'],
    gradient: 'from-violet-900 via-purple-900 to-slate-800',
    open: true,
  },
  {
    id: 4,
    name: 'Enrich Salon',
    rating: 4.6, reviews: 1100, distance: '4.2 km',
    location: 'Hitech City, Hyderabad',
    priceRange: '₹600 – ₹2,000', priceLevel: '₹₹',
    discount: '25% OFF', discountColor: 'bg-orange-500',
    tags: ['Haircut', 'Hair Spa', 'Facial', 'More'],
    gradient: 'from-blue-900 via-indigo-900 to-slate-800',
    open: true,
  },
  {
    id: 5,
    name: 'Aveda Experience Center',
    rating: 4.7, reviews: 263, distance: '4.5 km',
    location: 'Gachibowli, Hyderabad',
    priceRange: '₹1,000 – ₹2,800', priceLevel: '₹₹₹',
    discount: '18% OFF', discountColor: 'bg-green-600',
    tags: ['Spa', 'Coloring', 'Haircut', 'More'],
    gradient: 'from-rose-900 via-pink-900 to-slate-800',
    open: false,
  },
  {
    id: 6,
    name: 'Looks Salon',
    rating: 4.5, reviews: 473, distance: '5.0 km',
    location: 'Begumpet, Hyderabad',
    priceRange: '₹500 – ₹1,700', priceLevel: '₹₹',
    discount: '12% OFF', discountColor: 'bg-blue-600',
    tags: ['Haircut', 'Makeup', 'Spa', 'More'],
    gradient: 'from-cyan-900 via-teal-800 to-slate-800',
    open: true,
  },
];

const SERVICE_CATEGORIES = [
  { label: 'All Services', icon: '✦' },
  { label: 'Haircut', icon: '✂' },
  { label: 'Beard Styling', icon: '🧔' },
  { label: 'Facial', icon: '✨' },
  { label: 'Makeup', icon: '💄' },
  { label: 'Hair Spa', icon: '💆' },
  { label: 'Bridal Makeup', icon: '👰' },
  { label: 'Nail Care', icon: '💅' },
  { label: 'Massage', icon: '🤲' },
];

/* ─── Navbar (shared style, Salons active) ─── */
const NAV_ITEMS = ['Home', 'Services', 'Salons', 'AI Stylist', 'Professionals', 'Offers'];
const NAVIGABLE = ['Home', 'Salons'];

const Navbar = ({ activePage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (item) => {
    if (NAVIGABLE.includes(item)) {
      onNavigate(item);
      setMobileOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinkClass = (item) => [
    'text-sm font-medium transition-colors relative pb-0.5',
    activePage === item
      ? 'text-blue-600 after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full'
      : 'text-gray-600 hover:text-blue-600',
    NAVIGABLE.includes(item) ? 'cursor-pointer' : 'cursor-default',
  ].join(' ');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => handleNav('Home')} className="flex items-center gap-2" aria-label="GlowHyd home">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <SparklesIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Glow<span className="text-blue-600">Hyd</span></span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <button key={item} onClick={() => handleNav(item)}
                className={navLinkClass(item)}
                aria-current={activePage === item ? 'page' : undefined}>
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-blue-600 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">Become a Pro</a>
            <a href="#" className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span>Hi, Ananya</span>
              </span>
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map(item => (
              <button key={item} onClick={() => handleNav(item)}
                className={['text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full',
                  activePage === item ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'].join(' ')}
                aria-current={activePage === item ? 'page' : undefined}>
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

/* ─── Search Bar ─── */
const SearchBar = () => (
  <div className="bg-white border-b border-gray-100 py-4 sticky top-16 z-40 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Keyword search */}
        <div className="flex-1 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><SearchIcon /></span>
          <input
            type="text"
            placeholder="Search for salons, services..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Location */}
        <div className="relative sm:w-56">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
            <MapPinIcon className="w-4 h-4" />
          </span>
          <select className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer">
            <option>Hyderabad, India</option>
            <option>Jubilee Hills</option>
            <option>Banjara Hills</option>
            <option>Gachibowli</option>
            <option>Hitech City</option>
          </select>
        </div>

        {/* Search button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 flex-shrink-0">
          <SearchIcon />
          Search
        </button>
      </div>
    </div>
  </div>
);

/* ─── Filter Bar ─── */
const FilterBar = ({ activeFilter, setActiveFilter, sortBy, setSortBy }) => (
  <div className="bg-white border-b border-gray-100 py-3">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-2">
        {/* Service filter */}
        <button className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-200 bg-blue-600 text-white">
          All Services <ChevronDownIcon />
        </button>

        {/* Rating */}
        <button className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
          <StarIcon filled /> Rating: 4.0+ <ChevronDownIcon />
        </button>

        {/* Price */}
        <button className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
          ₹ Price: Any <ChevronDownIcon />
        </button>

        {/* Distance */}
        <button className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
          <MapPinIcon className="w-3.5 h-3.5 text-gray-400" /> Distance: Any <ChevronDownIcon />
        </button>

        {/* More filters */}
        <button className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
          <FilterIcon /> More Filters <ChevronDownIcon />
        </button>

        {/* Sort — pushed right */}
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="text-sm font-medium text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
          >
            <option>Popular</option>
            <option>Rating</option>
            <option>Distance</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Sidebar ─── */
const Sidebar = ({ activeCategory, setActiveCategory, priceRange, setPriceRange }) => (
  <aside className="w-52 flex-shrink-0 hidden lg:block">
    {/* Services */}
    <div className="mb-6">
      <h3 className="text-sm font-bold text-gray-900 mb-3">Services</h3>
      <ul className="flex flex-col gap-0.5">
        {SERVICE_CATEGORIES.map(cat => (
          <li key={cat.label}>
            <button
              onClick={() => setActiveCategory(cat.label)}
              className={[
                'w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors text-left',
                activeCategory === cat.label
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              ].join(' ')}
            >
              <span className="text-base w-5 text-center">{cat.icon}</span>
              {cat.label}
            </button>
          </li>
        ))}
        <li>
          <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-gray-400 hover:text-gray-600 transition-colors text-left">
            <span className="text-base w-5 text-center">···</span>
            More
          </button>
        </li>
      </ul>
    </div>

    {/* Price Range */}
    <div className="mb-6">
      <h3 className="text-sm font-bold text-gray-900 mb-3">Price Range</h3>
      <input
        type="range" min={0} max={5000} step={100}
        value={priceRange}
        onChange={e => setPriceRange(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>₹0</span>
        <span>₹{priceRange.toLocaleString()}+</span>
      </div>
    </div>

    {/* Rating */}
    <div className="mb-6">
      <h3 className="text-sm font-bold text-gray-900 mb-3">Rating</h3>
      <ul className="flex flex-col gap-1">
        {[[5,'326'],[4,'562'],[3,'832'],[2,'1023']].map(([stars, count]) => (
          <li key={stars}>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors w-full">
              <div className="flex">
                {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= stars} />)}
              </div>
              <span className="text-xs text-gray-400">&amp; up ({count})</span>
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* More Filters */}
    <div>
      <h3 className="text-sm font-bold text-gray-900 mb-3">More Filters</h3>
      <ul className="flex flex-col gap-2">
        {['Offers Available', 'Open Now'].map(f => (
          <li key={f}>
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 accent-blue-600" />
              {f}
            </label>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

/* ─── Salon Card ─── */
const SalonCard = ({ salon }) => {
  const [saved, setSaved] = useState(false);
  const fullStars = Math.floor(salon.rating);

  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-0.5">
      {/* Image */}
      <div className={`h-44 bg-gradient-to-br ${salon.gradient} relative`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Discount badge */}
        <div className="absolute bottom-3 left-3">
          <span className={`${salon.discountColor} text-white text-xs font-bold px-2 py-1 rounded-md`}>
            {salon.discount}
          </span>
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setSaved(s => !s)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          aria-label={saved ? `Remove ${salon.name} from saved` : `Save ${salon.name}`}
        >
          <HeartIcon filled={saved} />
        </button>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-bold text-gray-900 text-sm flex items-center">
            {salon.name}<CheckBadgeIcon />
          </h3>
          <span className="text-xs text-gray-400 font-medium ml-2 flex-shrink-0">{salon.priceLevel}</span>
        </div>

        {/* Stars + distance */}
        <div className="flex items-center gap-1 mb-1 flex-wrap">
          <div className="flex">{[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= fullStars} />)}</div>
          <span className="text-xs font-semibold text-gray-700">{salon.rating}</span>
          <span className="text-xs text-gray-400">({salon.reviews.toLocaleString()})</span>
          <span className="text-gray-200 mx-0.5">·</span>
          <MapPinIcon className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-400">{salon.distance}</span>
        </div>

        <p className="text-xs text-gray-500 mb-2">{salon.location}</p>
        <p className="text-xs font-semibold text-gray-800 mb-3">{salon.priceRange}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {salon.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>

        <a href="#" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
          Book Now
        </a>
      </div>
    </article>
  );
};

/* ─── Map Panel ─── */
const MapPanel = () => (
  <div className="hidden xl:flex flex-col w-80 flex-shrink-0 sticky top-32 self-start rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white" style={{ height: 'calc(100vh - 140px)' }}>
    {/* Map placeholder — realistic Hyderabad map style */}
    <div className="flex-1 relative bg-slate-100 overflow-hidden">
      {/* Grid lines simulating map tiles */}
      <div className="absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px,transparent 1px),linear-gradient(90deg,#e2e8f0 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
      {/* Roads */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/3 left-0 right-0 h-1 bg-amber-300 rotate-3" />
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -rotate-2" />
        <div className="absolute top-2/3 left-0 right-0 h-1 bg-amber-200 rotate-1" />
        <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-amber-300 rotate-3" />
        <div className="absolute left-2/3 top-0 bottom-0 w-0.5 bg-gray-300 -rotate-1" />
      </div>
      {/* Map pins */}
      {[
        { top: '25%', left: '30%', count: 18, color: 'bg-blue-600' },
        { top: '35%', left: '65%', count: 12, color: 'bg-blue-600' },
        { top: '50%', left: '45%', count: 25, color: 'bg-blue-600', large: true },
        { top: '60%', left: '70%', count: 32, color: 'bg-blue-600' },
        { top: '70%', left: '25%', count: 8, color: 'bg-blue-600' },
        { top: '78%', left: '80%', count: 65, color: 'bg-blue-600' },
      ].map((pin, i) => (
        <div key={i} className={`absolute flex items-center justify-center ${pin.large ? 'w-9 h-9' : 'w-7 h-7'} ${pin.color} rounded-full text-white text-xs font-bold shadow-lg -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform`}
          style={{ top: pin.top, left: pin.left }}>
          {pin.count}
        </div>
      ))}
      {/* Selected pin */}
      <div className="absolute w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-xl cursor-pointer"
        style={{ top: '55%', left: '40%' }}>
        <MapPinIcon className="w-4 h-4 text-white" />
      </div>
      {/* Label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow text-xs font-semibold text-gray-700 whitespace-nowrap">
        Hyderabad
      </div>
      {/* Search as move */}
      <div className="absolute top-3 left-3 right-3 flex justify-center">
        <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm text-xs text-gray-600">
          <input type="checkbox" className="accent-blue-600" defaultChecked readOnly />
          Search as I move the map
        </div>
      </div>
      {/* Zoom controls */}
      <div className="absolute right-3 bottom-16 flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-lg font-light border-b border-gray-100">+</button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-lg font-light">−</button>
      </div>
      {/* Location button */}
      <button className="absolute right-3 bottom-28 w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm text-blue-600 hover:bg-gray-50">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <circle cx="12" cy="11" r="3" strokeWidth={2} />
        </svg>
      </button>
    </div>

    {/* Nearby card */}
    <div className="p-3 border-t border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-semibold text-gray-700">Showing salons near you</p>
        <button className="text-xs text-blue-600 font-medium hover:underline">Update location</button>
      </div>
      <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2.5">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-800 to-stone-700 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">Glitz Unisex Salon</p>
          <div className="flex items-center gap-1">
            <div className="flex">{[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= 4} />)}</div>
            <span className="text-xs text-gray-500">4.5 (210) · 1.2 km</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">10% OFF</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Salon List Item (list view) ─── */
const SalonListItem = ({ salon }) => {
  const [saved, setSaved] = useState(false);
  const fullStars = Math.floor(salon.rating);
  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex overflow-hidden hover:-translate-y-0.5">
      {/* Thumbnail */}
      <div className={`w-36 sm:w-48 flex-shrink-0 bg-gradient-to-br ${salon.gradient} relative`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-2 left-2">
          <span className={`${salon.discountColor} text-white text-xs font-bold px-2 py-0.5 rounded-md`}>{salon.discount}</span>
        </div>
      </div>
      {/* Info */}
      <div className="flex-1 p-4 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-gray-900 text-sm flex items-center flex-wrap">
            {salon.name}<CheckBadgeIcon />
            {!salon.open && <span className="ml-2 text-xs text-red-500 font-medium bg-red-50 px-2 py-0.5 rounded-full">Closed</span>}
          </h3>
          <button onClick={() => setSaved(s => !s)} className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors" aria-label="Save salon">
            <HeartIcon filled={saved} />
          </button>
        </div>
        <div className="flex items-center gap-1 mt-1 flex-wrap">
          <div className="flex">{[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= fullStars} />)}</div>
          <span className="text-xs font-semibold text-gray-700">{salon.rating}</span>
          <span className="text-xs text-gray-400">({salon.reviews.toLocaleString()})</span>
          <span className="text-gray-200 mx-0.5">·</span>
          <MapPinIcon className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-500">{salon.distance} · {salon.location}</span>
        </div>
        <p className="text-xs font-semibold text-gray-700 mt-1">{salon.priceRange} <span className="text-gray-400 font-normal">· {salon.priceLevel}</span></p>
        <div className="flex flex-wrap gap-1 mt-2">
          {salon.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center pr-4">
        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
          Book Now
        </a>
      </div>
    </article>
  );
};

/* ─── Main Page ─── */
const SalonsPage = ({ activePage, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [priceRange, setPriceRange] = useState(5000);
  const [sortBy, setSortBy] = useState('Popular');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Navbar activePage={activePage} onNavigate={onNavigate} />

      {/* Sticky search + filter bars */}
      <div className="pt-16">
        <SearchBar />
        <FilterBar activeFilter={activeCategory} setActiveFilter={setActiveCategory} sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">

          {/* Sidebar */}
          <Sidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Results header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h1 className="text-base font-bold text-gray-900">
                  342 Salons found
                </h1>
                <p className="text-xs text-gray-400 mt-0.5">in Hyderabad · {activeCategory}</p>
              </div>

              {/* Grid / List toggle */}
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={['flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                    viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'].join(' ')}
                  aria-pressed={viewMode === 'grid'}
                >
                  <GridIcon /> Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={['flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                    viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'].join(' ')}
                  aria-pressed={viewMode === 'list'}>
                  <ListIcon /> List
                </button>
              </div>
            </div>

            {/* Cards grid */}
            <div className={viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'
              : 'flex flex-col gap-4'}>
              {SALONS_DATA.map(salon => (
                viewMode === 'grid'
                  ? <SalonCard key={salon.id} salon={salon} />
                  : <SalonListItem key={salon.id} salon={salon} />
              ))}
            </div>

            {/* Load more */}
            <div className="mt-8 text-center">
              <button className="text-sm font-semibold text-blue-600 border border-blue-200 px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Load More Salons
              </button>
            </div>
          </div>

          {/* Map */}
          <MapPanel />
        </div>
      </div>
    </div>
  );
};

export default SalonsPage;
