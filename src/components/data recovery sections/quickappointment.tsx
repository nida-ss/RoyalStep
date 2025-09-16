import React from 'react';

const servicesData = {
    recoveryTypes: [
        "Laptop Hard Drive Data Recovery",
        "Desktop Hard Drive Data Recovery",
        "Raid Hard Drive Data Recovery",
        "MacBook Hard Drive Data Recovery",
        "External Hard Drive Data Recovery",
    ],
    osList1: ["DOS", "Windows XP/Vista", "Windows 7, 8, 8.1, 10", "Linux", "Ubuntu", "NetWare"],
    osList2: ["VMware", "OpenSUSE", "Fedora", "Mandriva", "Debian"],
    popularServices: [
        { english: "Network And Wifi Services" },
        { english: "Website Development Company In Dubai" },
        { english: "Laptop Repair In Dubai" },
        { arabic: "نظام ميكنة (أتمتة) المنازل: تبني مستقبل الحياة الذكية", english: "Data Recovery Services In Dubai" },
        { arabic: "اصلاح اي فون في دبي", english: "Buy Back Trade In UAE" },
        { english: "Data Recovery Abu Dhabi" },
        { english: "Computer Repair Service In Dubai" },
        { arabic: "صلاح الكمبيوتر المحمول", english: "iMac Repair Dubai" },
        { arabic: "إعادة الشراء", english: "Additional Services" },
        { arabic: "خدمات إصلاح البيانات المتنقلة في دبي", english: "iPad Repair in Dubai" },
    ]
};

const QuickAppointment = () => {
    return (
        <div className="relative bg-white font-montserrat text-gray-700 overflow-hidden py-24 sm:py-32">
            {/* Decorative Blobs */}
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute top-[1619px] left-[34px] w-[292px] h-[288px] bg-[#B4BED7] rounded-full filter blur-[325px]"></div>
                <div className="absolute top-[1832px] left-[162px] w-[292px] h-[318px] bg-[#FFDC69] rounded-full filter blur-[400px]"></div>
                <div className="absolute top-[2344px] left-[-4px] w-[292px] h-[288px] bg-[#EA6248] rounded-full filter blur-[400px]"></div>
                <div className="absolute top-[2930px] left-[34px] w-[292px] h-[288px] bg-[#A485BE] rounded-full filter blur-[300px]"></div>
                <div className="absolute top-[3179px] left-[34px] w-[54px] h-[54px] bg-[#FC4798] rounded-full filter blur-[15px]"></div>
                <div className="absolute top-[1611px] left-[810px] w-[306px] h-[300px] bg-[#0022FF] rounded-full filter blur-[475px]"></div>
                <div className="absolute top-[2183px] left-[902px] w-[306px] h-[300px] bg-[#FC4798] rounded-full filter blur-[550px]"></div>
                <div className="absolute top-[2922px] left-[810px] w-[306px] h-[300px] bg-[#73B6D5] rounded-full filter blur-[440px]"></div>
                <div className="absolute top-[1669px] left-[1610px] w-[318px] h-[313px] bg-[#FFD23B] rounded-full filter blur-[450px]"></div>
                <div className="absolute top-[1870px] left-[1640px] w-[318px] h-[313px] bg-[#FB6609] rounded-full filter blur-[400px]"></div>
                <div className="absolute top-[2128px] left-[1873px] w-[122px] h-[122px] bg-[#8A38F5] rounded-full filter blur-[10px]"></div>
                <div className="absolute top-[2449px] left-[1634px] w-[318px] h-[313px] bg-[#6FFFD9] rounded-full filter blur-[430px]"></div>
                <div className="absolute top-[2896px] left-[1753px] w-[79px] h-[79px] bg-[#FFDC69] rounded-full filter blur-[15px] -rotate-150"></div>
                <div className="absolute top-[3040px] left-[1571px] w-[318px] h-[313px] bg-[#FB6609] rounded-full filter blur-[550px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-8">
                        <div className="space-y-12">
                            {/* Quick Data Recovery Section */}
                            <section>
                                <h1 className="text-5xl md:text-6xl lg:text-[74px] font-bold text-[#003B5A] leading-tight lg:leading-[80px] tracking-[-0.02em] capitalize">
                                    Quick Data Recovery At Pocket-Friendly Price
                                </h1>
                                <p className="mt-8 text-lg md:text-xl lg:text-2xl text-black/50 leading-8 capitalize">
                                    Royal Step Provides Hard-Drive Data Recovery Services To Both Individuals And Organizations. We Adopt Modern Tools And Techniques To Ensure Delivering Quality Services To Our Clients. Whether Your System Is Crashed Or Corrupted, Our Technicians Diagnose The Problem And Help You Recover The Data Without Causing A Delay. Our affordable hard drive data recovery services in Dubai include-
                                </p>
                                <ul className="mt-6 list-disc list-inside text-lg md:text-xl lg:text-2xl text-black/50 leading-8 capitalize">
                                    {servicesData.recoveryTypes.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                                </ul>
                                <p className="mt-8 text-lg md:text-xl lg:text-2xl text-black/50 leading-8 capitalize">
                                    We Also Offer Online Payment Solutions, Software Solutions, And More. Give Us A Call For A Detailed Consultation Regarding Your Business Needs And The Scope Of Our Services.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-x-20 text-lg md:text-xl lg:text-2xl text-black/50 leading-8 capitalize">
                                    <ul className="list-disc list-inside">
                                        {servicesData.osList1.map((os, index) => <li key={index}>{os}</li>)}
                                    </ul>
                                    <ul className="list-disc list-inside">
                                        {servicesData.osList2.map((os, index) => <li key={index}>{os}</li>)}
                                    </ul>
                                </div>
                                <p className="mt-8 text-lg md:text-xl lg:text-2xl text-black/50 leading-8 capitalize">
                                    No Matter What Device You Own, You Can Hire Us To Get The Deleted Data Without A Hassle. Do You Have Any Queries? Feel Free To Call Us.
                                </p>
                            </section>

                            {/* Book an Appointment Section */}
                            <section className="pt-12">
                                <h2 className="text-5xl md:text-6xl lg:text-[74px] font-bold text-[#003B5A] leading-tight lg:leading-[80px] tracking-[-0.02em] capitalize">
                                    Book An Appointment For A Complete Hard Drive Data Recovery
                                </h2>
                                <p className="mt-8 text-lg md:text-xl lg:text-2xl text-black/50 leading-8 capitalize">
                                    Royal Step Is Well-known For Its Excellent hard disk data recovery services in Dubai. If You Choose Us, We Will provide You With A Free Pick-Up And Timely Delivery Service At An Affordable Price. The Best Thing Is That You Can Reach Out To Us Whenever You Want. It Is Because Our Experts Work Round The Clock To Serve Clients With Excellence. So, If You Have Recently Experienced Hard Drive Failure And Data Loss, Schedule An Appointment With Us. We Will Help You Get Rid Of The Problem With Our Effective Services.
                                </p>
                            </section>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="h-full w-px bg-gray-300 mx-auto"></div>
                    </div>

                    {/* Popular Services Section */}
                    <div className="mt-16 lg:mt-0 lg:col-span-3">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#003B5A] tracking-[-0.02em] uppercase">
                            Popular Services
                        </h3>
                        <div className="mt-8 space-y-6">
                            {servicesData.popularServices.map((service, index) => (
                                <div key={index} className="text-center">
                                    {service.arabic && (
                                        <p className="font-bold text-xl md:text-2xl text-[#003B5A] capitalize leading-relaxed">
                                            {service.arabic}
                                        </p>
                                    )}
                                    <p className="text-lg md:text-xl text-black/70 capitalize leading-normal">
                                        {service.english}
                                    </p>
                                    {index < servicesData.popularServices.length - 1 && (
                                        <hr className="mt-6 border-black/30" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickAppointment;