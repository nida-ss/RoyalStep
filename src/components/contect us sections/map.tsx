import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapSection: React.FC = () => {
    return (
        <div className="relative w-full flex flex-col items-center justify-center py-20 overflow-hidden">
            {/* Background blur effect - bottom left */}
            <div
                className="absolute -bottom-20 -left-20 w-[292px] h-[288px] bg-[#FF6469]/50 rounded-full blur-[250px] -z-10"
                aria-hidden="true"
            ></div>
            {/* Background blur effect - bottom right */}
            <div
                className="absolute -bottom-10 -right-20 w-[326px] h-[322px] bg-[#47FFFC]/50 rounded-full blur-[200px] -z-10"
                aria-hidden="true"
            ></div>

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#003B5A] mb-12 text-center md:text-left">
                    Type Your Location And Check
                </h2>

                <div className="relative w-full h-[450px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                    {/* Map Placeholder */}
                    <div className="absolute inset-0 w-full h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231231.2222959227!2d55.08710484323939!3d25.15553943200781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1689252875935!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        ></iframe>
                    </div>

                    {/* Search Input Overlay */}
                    <div className="absolute top-8 left-8 w-full max-w-md">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Enter Here..."
                                className="w-full h-14 pl-6 pr-12 py-2 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
                            />
                            <div className="absolute right-4 text-gray-500">
                                <FaMapMarkerAlt size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapSection;