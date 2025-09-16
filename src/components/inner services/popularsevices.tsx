import React from 'react';

interface Service {
    arabicTitle: string;
    englishServices: string[];
}

const servicesData: Service[] = [
    {
        arabicTitle: 'نظام ميكنة (لأتمتة) المنازل: تبني مستقبل الحياة الذكية',
        englishServices: [
            'Network And Wifi Services',
            'Website Development Company in Dubai',
            'Laptop Repair In Dubai',
            'Data Recovery Services in Dubai',
        ],
    },
    {
        arabicTitle: 'اصلاح اي فون في دبي',
        englishServices: [
            'Buy Back Trade in UAE',
            'Data Recovery Abu Dhabi',
            'Computer Repair Service in Dubai',
        ],
    },
    {
        arabicTitle: 'صلاح الكمبيوتر المحمول',
        englishServices: ['iMac Repair Dubai'],
    },
    {
        arabicTitle: 'إعادة الشراء',
        englishServices: ['Additional Services'],
    },
    {
        arabicTitle: 'خدمات إصلاح البيانات المتنقلة في دبي',
        englishServices: ['iPad Repair In Dubai'],
    },
];

const PopularServices: React.FC = () => {
    return (
        <div className="relative overflow-hidden bg-white py-24 sm:py-32">
            {/* Background blur elements */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10"
            >
                <div className="absolute left-[50%] top-[10%] h-[322px] w-[326px] -translate-x-1/2 bg-[#47FFFC] opacity-50 blur-[300px]" />
                <div className="absolute left-[60%] top-[30%] h-[313px] w-[318px] -translate-x-1/2 bg-[#8A38F5] opacity-30 blur-[450px]" />
                <div className="absolute left-[45%] top-[55%] h-[122px] w-[122px] -translate-x-1/2 bg-[#8A38F5] opacity-40 blur-[10px]" />
                <div className="absolute left-[55%] top-[70%] h-[313px] w-[318px] -translate-x-1/2 bg-[#47FFFC] opacity-50 blur-[400px]" />
                <div className="absolute left-[40%] top-[90%] h-[313px] w-[318px] -translate-x-1/2 bg-[#FFD23B] opacity-30 blur-[450px]" />
            </div>

            <div className="container mx-auto max-w-2xl px-4 text-center">
                <h2 className="font-montserrat text-4xl font-bold uppercase tracking-tight text-[#003B5A] sm:text-5xl">
                    Popular Services
                </h2>

                <div className="mt-16 space-y-12">
                    {servicesData.map((service, index) => (
                        <div key={index}>
                            {index !== 0 && (
                                <hr className="mx-auto mb-12 w-full max-w-md border-t border-black/30" />
                            )}
                            <h3 className="font-montserrat text-2xl font-bold capitalize text-[#003B5A] leading-relaxed">
                                {service.arabicTitle}
                            </h3>
                            <div className="mt-4 space-y-2">
                                {service.englishServices.map((item, itemIndex) => (
                                    <p
                                        key={itemIndex}
                                        className="font-montserrat text-xl capitalize text-black/70"
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularServices; 