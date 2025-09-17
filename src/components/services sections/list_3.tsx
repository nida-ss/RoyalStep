import React from 'react';

interface ServiceCard {
    id: string;
    title: string;
    description: string;
    image: string;
    alt: string;
}

const services: ServiceCard[] = [
    {
        id: 'home-automation',
        title: 'Home Automation System',
        description: 'Welcome To Our Home Automation Services. Your Gateway To The World Of Home Automation. With Our Cutting Edge Home Automation System Services.',
        image: '/api/placeholder/400/300',
        alt: 'Modern living room with smart home automation'
    },
    {
        id: 'network-wifi',
        title: 'Network And WiFi Services',
        description: 'Royal Step Is The Number One Choice When It Comes To Providing Our For Seamless Internet And WiFi Configuration Support To Boost These Service.',
        image: '/api/placeholder/400/300',
        alt: 'Person working on network configuration'
    },
    {
        id: 'remote-support',
        title: 'Remote IT Support',
        description: 'Royal Step Helps Its Customers By Offering Several Relevant Services To Building Machines The World Of And Professional Engineers Over Years Of Experience.',
        image: '/api/placeholder/400/300',
        alt: 'IT professional providing remote support'
    },
    {
        id: 'custom-build',
        title: 'Custom Build Machine',
        description: 'Custom Build Machines Can Provide You With A Solution. This Is Tailored To Your Specific Needs, Whether You Are A Gamer, Content Creator, Or Professional Who.',
        image: '/api/placeholder/400/300',
        alt: 'Custom computer building process'
    },
    {
        id: 'data-recovery',
        title: 'Data Recovery Services In Dubai',
        description: 'Best Data Recovery Services In Dubai. People These Days Are Highly Dependent Upon Advanced Technologies And Digital Devices Such As.',
        image: '/api/placeholder/400/300',
        alt: 'Data recovery hardware and process'
    },
    {
        id: 'buy-back',
        title: 'Buy Back',
        description: 'IT Recycling Is A Popular Practice Among Organizations These Days, Where You Can Exchange Your Depreciated Devices Like PC, Laptops, And Likewise For Brand.',
        image: '/api/placeholder/400/300',
        alt: 'IT equipment buyback service'
    }
];

const ServiceCard: React.FC<{ service: ServiceCard }> = ({ service }) => {
    return (
        <div className="relative w-full h-[620px] bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative w-full h-48 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            
            {/* Content Container */}
            <div className="p-6 h-[calc(620px-192px)] flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                </p>
                
                {/* Optional: Learn More Button */}
                <button className="mt-4 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors duration-200 self-start">
                    Learn More →
                </button>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive IT solutions tailored to meet your business needs
                    </p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
                
                {/* Bottom Statistics */}
                <div className="flex justify-center items-center mt-12 space-x-8">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold">
                        1824
                    </div>
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold">
                        1260
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;