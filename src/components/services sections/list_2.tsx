import React from 'react';

interface ServiceItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

const ServicesList2: React.FC = () => {
    const services: ServiceItem[] = [
        {
            id: 1,
            title: "PC And Laptop Repair In Dubai",
            description: "Quick PC And Laptop Repair In Dubai. PC And Laptop Are Crucial Part Of Our Business And Personal Life. Most Complicated Problems, As A Result, You...",
            image: "/api/placeholder/400/300"
        },
        {
            id: 2,
            title: "Mobile Repair And Data Recovery Services In Dubai",
            description: "Affordable Mobile Repair And Data Recovery Services In Dubai Mobiles Or Smartphones Are The Components...",
            image: "/api/placeholder/400/300"
        },
        {
            id: 3,
            title: "Web Solutions",
            description: "Reliable Web Solutions In Dubai. Businesses Big And Small Need A Web Presence Outside Of Their Brick And Mortar Establishment. If You Want To Create Your...",
            image: "/api/placeholder/400/300"
        },
        {
            id: 4,
            title: "Additional Services",
            description: "With Several Different Services For Creating Machines, Royal Step Support Its Customers. Our Professional Engineers And Specialists Have Years Of Expertise...",
            image: "/api/placeholder/400/300"
        },
        {
            id: 5,
            title: "Computer Repair Service In Dubai",
            description: "Royal Step Offers Reliable Computer Repair Services Dubai. Fixing Top Solutions For All Your Computer Repair Needs. Whether It's A Simple Issue Or...",
            image: "/api/placeholder/400/300"
        },
        {
            id: 6,
            title: "Home Service",
            description: "Home Service Computer Repair, Convenient, Reliable And Efficient In Today's Tech-Driven World. Having A Functional Computer Is Essential For Both Personal...",
            image: "/api/placeholder/400/300"
        }
    ];

    return (
        <section className="relative bg-[#003B5A] w-full min-h-[1500px] -ml-3 mt-[2177px]">
            <div className="absolute inset-0 px-4 py-20">
                {/* Grid Container */}
                <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="w-[595px] h-[620px] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image Container */}
                            <div className="h-[300px] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            
                            {/* Content Container */}
                            <div className="p-6 h-[320px] flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                
                                {/* Action Button */}
                                <button className="mt-4 bg-[#003B5A] text-white px-6 py-2 rounded-md hover:bg-[#004A6B] transition-colors duration-300 self-start">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Bottom Pagination/Logo */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-2 text-white">
                        <span className="text-lg font-bold">2077</span>
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">1500</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesList2;