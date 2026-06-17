import { useState } from 'react';

/* ─── Inline SVG Icons ─── */
const StarIcon = ({ filled = true, size = 'w-4 h-4' }) => (
  <svg className={`${size} ${filled ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckBadgeIcon = () => (
  <svg className="w-4 h-4 text-blue-600 inline-block ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-400 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SparklesIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const CalendarIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ScissorsIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="6" cy="6" r="3" strokeWidth={1.8} />
    <circle cx="6" cy="18" r="3" strokeWidth={1.8} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
  </svg>
);


/* ─── Navbar ─── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="GlowHyd home">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <SparklesIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Glow<span className="text-blue-600">Hyd</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Salons', 'AI Stylist', 'Professionals', 'Offers'].map(item => (
              <a key={item} href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-blue-600 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Become a Pro
            </a>
            <a href="#" className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-3">
            {['Home', 'Services', 'Salons', 'AI Stylist', 'Professionals', 'Offers'].map(item => (
              <a key={item} href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-2 py-1 transition-colors">
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#" className="flex-1 text-center text-sm font-medium text-blue-600 border border-blue-200 px-4 py-2 rounded-lg">Become a Pro</a>
              <a href="#" className="flex-1 text-center text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg">Sign In</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


/* ─── Hero Section ─── */
const HeroSection = () => (
  <section className="pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
    {/* Background decorative circles */}
    <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Copy */}
        <div className="flex flex-col gap-6">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-full w-fit">
            <SparklesIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Hyderabad's #1 Grooming Marketplace</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Your Perfect Look,<br />
            <span className="text-blue-400">Just a Tap Away</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
            Discover Hyderabad's elite salons in Jubilee Hills, Banjara Hills &amp; Gachibowli. Book instantly, get AI-powered style recommendations, and walk in looking like royalty.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 py-2">
            {[['500+', 'Premium Salons'], ['25K+', 'Happy Customers'], ['4.8★', 'Average Rating']].map(([val, label]) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-bold text-white">{val}</span>
                <span className="text-sm text-slate-400">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#salons" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5">
              <CalendarIcon className="w-5 h-5" />
              Book a Salon
            </a>
            <a href="#ai-feature" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 backdrop-blur-sm">
              <SparklesIcon className="w-5 h-5 text-blue-400" />
              Try AI Grooming Assistant
            </a>
          </div>
        </div>

        {/* Right: Visual card stack */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main card */}
          <div className="relative w-full max-w-sm">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
              {/* Simulated salon image */}
              <div className="h-52 bg-gradient-to-br from-amber-900/60 via-stone-800 to-slate-900 relative flex items-end p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="relative flex items-center gap-2">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">15% OFF</span>
                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">Open Now</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-white">Lakmé Salon</span>
                  <CheckBadgeIcon />
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= 5} />)}
                  <span className="text-sm text-slate-400 ml-1">4.8 (512)</span>
                </div>
                <p className="text-sm text-slate-400 mb-3"><MapPinIcon />Jubilee Hills, Hyderabad</p>
                <div className="flex gap-2 mb-3">
                  {['Haircut', 'Hair Spa', 'Makeup'].map(tag => (
                    <span key={tag} className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Floating AI badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2 border border-blue-100">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <SparklesIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">AI Match</p>
                <p className="text-xs text-blue-600 font-semibold">92% Score</p>
              </div>
            </div>

            {/* Floating booking badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2 border border-gray-100">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <CalendarIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Booked!</p>
                <p className="text-xs text-green-600 font-semibold">10:00 AM Today</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" aria-hidden="true" />
  </section>
);


/* ─── Salon Listings Preview ─── */
const SALONS = [
  {
    name: 'Lakmé Salon',
    rating: 4.8,
    reviews: 512,
    distance: '2.4 km',
    location: 'Jubilee Hills, Hyderabad',
    price: '₹900 – ₹2,500',
    priceLevel: '₹₹₹',
    discount: '20% OFF',
    tags: ['Haircut', 'Hair Spa', 'Makeup', 'Facial'],
    gradient: 'from-amber-900 via-stone-800 to-slate-800',
  },
  {
    name: 'Naturals Salon',
    rating: 4.7,
    reviews: 756,
    distance: '3.1 km',
    location: 'Banjara Hills, Hyderabad',
    price: '₹500 – ₹1,800',
    priceLevel: '₹₹',
    discount: '15% OFF',
    tags: ['Hair Spa', 'Facial', 'Coloring', 'More'],
    gradient: 'from-emerald-900 via-teal-900 to-slate-800',
  },
  {
    name: 'Enrich Salon',
    rating: 4.6,
    reviews: 389,
    distance: '4.2 km',
    location: 'Gachibowli, Hyderabad',
    price: '₹600 – ₹2,000',
    priceLevel: '₹₹',
    discount: '25% OFF',
    tags: ['Haircut', 'Hair Spa', 'Facial', 'More'],
    gradient: 'from-purple-900 via-indigo-900 to-slate-800',
  },
];

const SalonCard = ({ salon }) => {
  const fullStars = Math.floor(salon.rating);
  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 border border-gray-100">
      {/* Image area */}
      <div className={`h-44 bg-gradient-to-br ${salon.gradient} relative flex items-end p-3`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative flex items-center gap-2">
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow">{salon.discount}</span>
        </div>
        {/* Wishlist */}
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
          aria-label={`Save ${salon.name} to favourites`}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-bold text-gray-900 text-base">
            {salon.name}
            <CheckBadgeIcon />
          </h3>
          <span className="text-xs text-gray-500 font-medium">{salon.priceLevel}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-1">
          {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= fullStars} />)}
          <span className="text-sm font-semibold text-gray-700 ml-1">{salon.rating}</span>
          <span className="text-sm text-gray-400">({salon.reviews})</span>
          <span className="text-gray-300 mx-1">·</span>
          <MapPinIcon />
          <span className="text-sm text-gray-400">{salon.distance}</span>
        </div>

        <p className="text-sm text-gray-500 mb-3">{salon.location}</p>

        {/* Price */}
        <p className="text-sm font-semibold text-gray-800 mb-3">{salon.price}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {salon.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>

        <a
          href="#"
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
        >
          Book Now
        </a>
      </div>
    </article>
  );
};

const SalonListingsPreview = () => (
  <section id="salons" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Curated for You</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Top Rated Salons in Hyderabad</h2>
          <p className="text-gray-500 mt-2">Hand-picked from 342 premium salons across the city</p>
        </div>
        <a href="#" className="text-sm font-semibold text-blue-600 border border-blue-200 px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap self-start sm:self-auto">
          View All Salons →
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SALONS.map(salon => <SalonCard key={salon.name} salon={salon} />)}
      </div>

      {/* Filter chips row */}
      <div className="flex flex-wrap gap-3 mt-10 justify-center">
        {['All Services', 'Haircut', 'Beard Styling', 'Hair Spa', 'Makeup', 'Bridal Makeup', 'Nail Care'].map((f, i) => (
          <button
            key={f}
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${i === 0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'}`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  </section>
);


/* ─── Features / Ecosystem Section ─── */
const FEATURES = [
  {
    icon: <ScissorsIcon className="w-7 h-7 text-blue-600" />,
    bgColor: 'bg-blue-50',
    accentColor: 'text-blue-600',
    label: 'Salon Marketplace',
    headline: "Connect with Hyderabad's Elite Stylists",
    body: "Browse 500+ verified salons across Jubilee Hills, Banjara Hills, Gachibowli, and Hitech City. Filter by rating, price, distance, and specialty to find your perfect match.",
    bullets: ['Verified & Hygiene Certified', 'Real reviews from real customers', 'Price transparency before you book'],
  },
  {
    icon: <CalendarIcon className="w-7 h-7 text-indigo-600" />,
    bgColor: 'bg-indigo-50',
    accentColor: 'text-indigo-600',
    label: 'Smart Booking',
    headline: 'Instant, Seamless Scheduling',
    body: 'Our 6-step booking flow lets you choose your service, pick a professional, select a date and time, and confirm — all in under 60 seconds. No calls, no waiting.',
    bullets: ['Real-time slot availability', 'Choose your preferred expert', 'Instant booking confirmation'],
  },
  {
    icon: <SparklesIcon className="w-7 h-7 text-purple-600" />,
    bgColor: 'bg-purple-50',
    accentColor: 'text-purple-600',
    label: 'AI Grooming Assistant',
    headline: 'Discover Your Perfect Hairstyle with AI',
    body: 'Upload your selfie and our AI analyzes your face shape, hair texture, and skin tone to recommend hairstyles with a match score. See a before & after preview before you ever sit in the chair.',
    bullets: ['Face shape analysis in seconds', 'Personalised style recommendations', 'Before & After AI preview'],
    featured: true,
  },
];

const FeatureCard = ({ feature }) => (
  <div className={`relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col gap-4 ${feature.featured ? 'ring-2 ring-purple-500/30' : ''}`}>
    {feature.featured && (
      <span className="absolute top-4 right-4 text-xs font-bold text-purple-600 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
        ✦ Featured
      </span>
    )}
    <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center`}>
      {feature.icon}
    </div>
    <div>
      <p className={`text-xs font-bold uppercase tracking-widest ${feature.accentColor} mb-1`}>{feature.label}</p>
      <h3 className="text-xl font-bold text-gray-900 leading-snug">{feature.headline}</h3>
    </div>
    <p className="text-gray-500 text-sm leading-relaxed">{feature.body}</p>
    <ul className="flex flex-col gap-2 mt-auto">
      {feature.bullets.map(b => (
        <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const EcosystemSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Our Ecosystem</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need, In One Place</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base">
          From discovering the best salons to previewing your new look with AI — GlowHyd is your end-to-end premium grooming companion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map(f => <FeatureCard key={f.label} feature={f} />)}
      </div>
    </div>
  </section>
);


/* ─── AI Feature Deep-Dive ─── */
const AIFeatureSection = () => (
  <section id="ai-feature" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full w-fit">
            <SparklesIcon className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Powered by AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            AI Hairstyle Recommender —<br />
            <span className="text-purple-400">See Your Look Before You Book</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Our AI analyzes your facial structure, hair texture, and skin tone to match you with the hairstyles that truly suit you. Get a 92% accuracy score and a Before & After preview — all before stepping into a salon.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '📸', title: 'Upload Selfie', desc: 'A single front-facing photo is all it takes.' },
              { icon: '🔬', title: 'Face Analysis', desc: 'AI detects shape, symmetry, and dimensions.' },
              { icon: '✨', title: 'Style Matches', desc: 'Ranked recommendations with match scores.' },
              { icon: '🪞', title: 'Before & After', desc: 'Preview the transformation before booking.' },
            ].map(item => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-start backdrop-blur-sm">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-0.5">{item.title}</p>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 py-4 rounded-xl transition-all w-fit shadow-lg shadow-purple-600/30">
            <SparklesIcon className="w-5 h-5" />
            Try AI Grooming Assistant Free
          </a>
        </div>

        {/* Right: Simulated AI UI panel */}
        <div className="relative">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-2xl">
            {/* Header */}
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
              <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center">
                <SparklesIcon className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">AI Analysis Summary</p>
                <p className="text-xs text-slate-400">Face detected • Oval shape</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-2xl font-bold text-blue-400">92%</p>
                <p className="text-xs text-slate-400">Overall Match</p>
              </div>
            </div>

            {/* Analysis rows */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                ['Hair Density', 'Thick'], ['Hair Texture', 'Wavy'],
                ['Face Symmetry', 'High'], ['Skin Tone', 'Warm'],
              ].map(([k, v]) => (
                <div key={k} className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-slate-400">{k}</p>
                  <p className="text-sm font-semibold text-white">{v}</p>
                </div>
              ))}
            </div>

            {/* Recommended styles */}
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Recommended For You</p>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Textured Lob', match: '92%', tag: 'Best Match', color: 'bg-green-500' },
                { name: 'Curtain Bangs', match: '88%', tag: 'Popular', color: 'bg-blue-500' },
                { name: 'Layered Cut', match: '87%', tag: 'Trendy', color: 'bg-purple-500' },
              ].map(style => (
                <div key={style.name} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-700 to-stone-800" />
                    <span className="text-sm font-medium text-white">{style.name}</span>
                    <span className={`text-xs text-white ${style.color} px-2 py-0.5 rounded-full`}>{style.tag}</span>
                  </div>
                  <span className="text-sm font-bold text-green-400">{style.match}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);


/* ─── How It Works ─── */
const STEPS = [
  {
    number: '01',
    icon: <SparklesIcon className="w-7 h-7 text-purple-600" />,
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    iconBg: 'bg-purple-100',
    title: 'Explore & Analyze',
    subtitle: 'via AI Stylist',
    desc: 'Upload your photo and let our AI analyze your face shape, hair type, and skin tone. Get personalized style recommendations with a match score before you decide.',
    pill: 'AI Powered',
    pillColor: 'bg-purple-100 text-purple-700',
  },
  {
    number: '02',
    icon: <CalendarIcon className="w-7 h-7 text-blue-600" />,
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    title: 'Select & Book',
    subtitle: 'Your Ideal Salon',
    desc: 'Browse top-rated salons in your area, pick your preferred stylist, choose a date and time slot that works for you, and confirm your booking in seconds.',
    pill: 'Instant Booking',
    pillColor: 'bg-blue-100 text-blue-700',
  },
  {
    number: '03',
    icon: <ScissorsIcon className="w-7 h-7 text-green-600" />,
    bg: 'bg-green-50',
    border: 'border-green-200',
    iconBg: 'bg-green-100',
    title: 'Get Groomed',
    subtitle: 'Walk Out Confident',
    desc: 'Visit your salon at the booked time and enjoy a premium grooming experience by certified professionals. Rate your session and share your transformation.',
    pill: 'Premium Experience',
    pillColor: 'bg-green-100 text-green-700',
  },
];

const HowItWorksSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Simple Process</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How GlowHyd Works</h2>
        <p className="text-gray-500 max-w-xl mx-auto">From selfie to salon chair in three simple steps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connector lines (desktop only) */}
        <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 z-0" aria-hidden="true" />

        {STEPS.map((step, index) => (
          <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
            {/* Step badge + icon */}
            <div className={`relative w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mb-4 border-2 ${step.border} shadow-sm`}>
              {step.icon}
              <span className="absolute -top-3 -right-3 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                {index + 1}
              </span>
            </div>

            <span className={`text-xs font-bold px-3 py-1 rounded-full ${step.pillColor} mb-3`}>{step.pill}</span>

            <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
            <p className="text-sm font-medium text-gray-500 mb-3">{step.subtitle}</p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


/* ─── Trust / Social Proof Bar ─── */
const TrustBar = () => (
  <section className="py-12 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { stat: '500+', label: 'Premium Salons', sub: 'Across Hyderabad' },
          { stat: '25K+', label: 'Happy Customers', sub: 'This month alone' },
          { stat: '4.8 ★', label: 'Average Rating', sub: 'From 12,000+ reviews' },
          { stat: '₹799', label: 'Starting Price', sub: 'For premium services' },
        ].map(item => (
          <div key={item.label}>
            <p className="text-3xl font-bold text-blue-600 mb-1">{item.stat}</p>
            <p className="text-sm font-semibold text-gray-900">{item.label}</p>
            <p className="text-xs text-gray-400">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    location: 'Jubilee Hills',
    text: 'Amazing experience! The AI stylist recommended a cut that completely transformed my look. The staff is so professional and the salon was immaculate.',
    rating: 5,
    service: 'Haircut & Styling',
  },
  {
    name: 'Rahul Verma',
    location: 'Gachibowli',
    text: 'Best salon booking app in Hyderabad. Great ambiance, excellent service, and the instant booking feature is a lifesaver for my busy schedule.',
    rating: 5,
    service: 'Beard Styling',
  },
  {
    name: 'Ananya Reddy',
    location: 'Banjara Hills',
    text: 'Love their attention to detail, highly recommend. The AI match score was spot on — 92% match and I absolutely love my new look!',
    rating: 5,
    service: 'Keratin Treatment',
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Real Reviews</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map(t => (
          <blockquote key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= t.rating} />)}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
            <footer className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">{t.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400">{t.location} · {t.service}</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);


/* ─── Conversion Banner ─── */
const ConversionBanner = () => (
  <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
      <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-2 rounded-full mb-6">
        <SparklesIcon className="w-4 h-4 text-white" />
        <span className="text-sm font-medium text-white">Your First Booking Awaits</span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
        Ready to Transform<br />Your Look?
      </h2>
      <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
        Join 25,000+ happy customers across Hyderabad. Book your first premium salon appointment today and get ₹200 off.
      </p>

      {/* Offer card */}
      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 inline-flex flex-col sm:flex-row items-center gap-4 mb-8 backdrop-blur-sm">
        <div className="bg-white rounded-xl px-5 py-3">
          <p className="text-xs text-gray-500 font-medium">First booking offer</p>
          <p className="text-2xl font-bold text-blue-600">₹200 OFF</p>
        </div>
        <div className="text-left text-white">
          <p className="font-semibold">Use code: <span className="bg-white/20 px-2 py-0.5 rounded font-mono tracking-wider">GLOWHYD200</span></p>
          <p className="text-sm text-blue-200 mt-0.5">Valid at 500+ partner salons · Expires soon</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#salons" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-700 font-bold px-8 py-4 rounded-xl transition-all shadow-xl hover:-translate-y-0.5">
          <CalendarIcon className="w-5 h-5" />
          Book Your First Appointment
        </a>
        <a href="#ai-feature" className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 backdrop-blur-sm">
          <SparklesIcon className="w-5 h-5" />
          Try AI Stylist First
        </a>
      </div>
    </div>
  </section>
);


/* ─── Footer ─── */
const Footer = () => (
  <footer className="bg-slate-900 text-slate-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
              <SparklesIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Glow<span className="text-blue-400">Hyd</span></span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Hyderabad's premium grooming marketplace. Connecting you with elite salons across Jubilee Hills, Banjara Hills, Gachibowli, and Hitech City.
          </p>
          <div className="flex gap-3">
            {['Instagram', 'Facebook', 'Twitter'].map(platform => (
              <a key={platform} href="#" aria-label={platform} className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h4>
          <ul className="flex flex-col gap-2">
            {['Browse Salons', 'Book Appointment', 'AI Stylist', 'Top Professionals', 'Offers & Deals', 'Gift Cards'].map(link => (
              <li key={link}><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Areas in Hyderabad</h4>
          <ul className="flex flex-col gap-2">
            {['Jubilee Hills', 'Banjara Hills', 'Gachibowli', 'Hitech City', 'Madhapur', 'Begumpet', 'Secunderabad'].map(area => (
              <li key={area}><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{area}</a></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
          <ul className="flex flex-col gap-2">
            {['About Us', 'Become a Pro', 'Blog', 'Careers', 'Help Center', 'Privacy Policy', 'Terms of Service'].map(link => (
              <li key={link}><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© 2025 GlowHyd. All rights reserved. Made with ♥ in Hyderabad.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms</a>
          <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);


/* ─── Root Export ─── */
const LandingPage = () => (
  <div className="font-sans antialiased">
    <Navbar />
    <main>
      <HeroSection />
      <TrustBar />
      <SalonListingsPreview />
      <EcosystemSection />
      <AIFeatureSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ConversionBanner />
    </main>
    <Footer />
  </div>
);

export default LandingPage;
