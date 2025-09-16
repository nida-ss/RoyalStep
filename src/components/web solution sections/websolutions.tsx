import React from 'react';

const WebSolutions: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
            {/* Background Decorative Ellipses */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large blur ellipses */}
                <div className="absolute w-80 h-80 bg-pink-500 rounded-full blur-[400px] opacity-60" 
                         style={{ left: '1648px', top: '825px' }} />
                <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-[350px] opacity-60" 
                         style={{ left: '34px', top: '587px' }} />
                <div className="absolute w-76 h-75 bg-orange-400 rounded-full blur-[400px] opacity-60" 
                         style={{ left: '810px', top: '579px' }} />
                <div className="absolute w-60 h-58 bg-orange-500 rounded-full blur-[250px] opacity-60" 
                         style={{ left: '1794px', top: '275px' }} />
                
                {/* Small decorative ellipses */}
                <div className="absolute w-32 h-32 bg-orange-400 rounded-full blur-sm opacity-80" 
                         style={{ left: '1881px', top: '503px' }} />
                <div className="absolute w-14 h-14 bg-green-400 rounded-full blur-sm opacity-80" 
                         style={{ left: '1854px', top: '645px' }} />
                <div className="absolute w-20 h-20 bg-yellow-300 rounded-full blur-sm opacity-80 -rotate-150" 
                         style={{ left: '13px', top: '762px' }} />
                <div className="absolute w-12 h-12 bg-red-400 rounded-full blur-sm opacity-80 rotate-45" 
                         style={{ left: '189px', top: '947px' }} />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content Section */}
                    <div className="space-y-8">
                        {/* Main Heading */}
                        <h1 className="text-6xl lg:text-7xl font-bold text-slate-800 leading-tight tracking-tight capitalize font-montserrat">
                            Web Solutions
                        </h1>
                        
                        {/* First Paragraph */}
                        <p className="text-xl lg:text-2xl font-medium text-black/50 leading-relaxed capitalize font-montserrat max-w-4xl">
                            Businesses big and small need a web presence outside of their brick-and-mortar establishment. 
                            If you want to create your online persona, our team is at your service. Royal Step Computer 
                            Solution brings you a complete portfolio of web solutions in Dubai at competitive rates.
                        </p>
                        
                        {/* Second Paragraph */}
                        <p className="text-xl lg:text-2xl font-medium text-black/50 leading-relaxed capitalize font-montserrat max-w-4xl">
                            From web design and development to digital marketing, we offer you a complete package of 
                            advanced solutions delivered by a team of experienced professionals. Reach out for a free 
                            consultation today!
                        </p>
                        
                        {/* CTA Button */}
                        <div className="pt-6">
                            <button className="group relative inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                See Services
                                <svg 
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Image Section */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative">
                            <img 
                                src="/api/placeholder/748/664" 
                                alt="Web development dashboard" 
                                className="w-full max-w-3xl h-auto rounded-2xl shadow-2xl object-cover"
                            />
                            
                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                    </svg>
                                    Reliable Web Solutions In Dubai
                                </div>
                            </div>
                        </div>
                        
                        {/* Secondary Image */}
                        <div className="absolute -top-8 -right-8 hidden lg:block">
                            <img 
                                src="/api/placeholder/272/257" 
                                alt="Team collaboration" 
                                className="w-68 h-64 rounded-2xl shadow-xl object-cover border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Decorative Element */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-12 h-px bg-slate-400"></div>
                    <span className="text-sm font-medium">2017 - 863 Projects Completed</span>
                    <div className="w-12 h-px bg-slate-400"></div>
                </div>
            </div>
        </section>
    );
};

export default WebSolutions;