import React from 'react';

interface ServiceItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

const ServicesList1: React.FC = () => {
    const services: ServiceItem[] = [
        {
            id: 1,
            title: "Macbook Repair In Dubai",
            description: "We're Bringing Solutions, Fixing Or Emails, And Zooming Processor, Digital World On Your MacBook Suddenly, Everything Can Be Busy.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 2,
            title: "iMac Repair In Dubai",
            description: "Welcome To Rigel Step, Your Top Choice For Expert iMac Repair Services In Dubai Since The iMac's Debut In 1998, Apple Has Continuously Innovated.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 3,
            title: "iPad Repair In Dubai",
            description: "Planning Is An Essential Service For Both Personal And Professional Tasks, Making Accidental Drops Or Water Damage To Your iPad Particularly Frustrating.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 4,
            title: "iPhone Repair In Dubai",
            description: "Rigel Step Is Well-Known For Its Professional iPhone Repair Services In Dubai, Delivering A One-Stop Repair Solution For Different Versions Of iPhone Devices.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 5,
            title: "Hard Drive Data Recovery",
            description: "Experienced Hard Drive Data Recovery Services In Dubai Are You Using A Hard Disk Or A Hard Drive To Store Large Volumes Of Data? If You Losing The Data.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 6,
            title: "IT Support Services",
            description: "In General, The Setups, Installations, And Settings Need To Be Done Accurately When Building New Computers, Laptops, Or Workstations, Whether For The Home.",
            image: "/api/placeholder/400/300"
        }
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {/* Background Blur Effects */}
            <div className="absolute w-80 h-80 bg-pink-400 rounded-full blur-[320px] opacity-60 right-0 top-1/3 transform translate-x-1/2"></div>
            <div className="absolute w-72 h-72 bg-cyan-400 rounded-full blur-[350px] opacity-60 left-0 bottom-1/4 transform -translate-x-1/2"></div>
            
            {/* Services Grid Container */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                            style={{
                                width: '595px',
                                height: '620px',
                                maxWidth: '100%'
                            }}
                        >
                            {/* Service Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            
                            {/* Service Content */}
                            <div className="p-8 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-6">
                                        {service.description}
                                    </p>
                                </div>
                                
                                {/* Call to Action */}
                                <div className="mt-6">
                                    <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 group-hover:shadow-lg">
                                        Learn More
                                        <svg 
                                            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
                
                {/* Bottom Section with Contact Info */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
                        <span className="text-blue-600 font-semibold text-lg">1928</span>
                        <div className="w-px h-6 bg-gray-300"></div>
                        <span className="text-blue-600 font-semibold text-lg">1371</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesList1;