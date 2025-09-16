import React from 'react';

// Placeholder icons - replace with your actual SVG components or image paths
const OverheatingIcon = () => <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657zM9 13a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const SpinningWheelIcon = () => <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M5.5 9.5a7 7 0 107-7" /></svg>;
const AppCrashesIcon = () => <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const BootLoopIcon = () => <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M5.5 9.5a7 7 0 107-7M19 20v-5h-5M18.5 14.5a7 7 0 10-7 7" /></svg>;
const NotChargingIcon = () => <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 18h2m-1-14v10a4 4 0 01-4 4H6a4 4 0 01-4-4V8a4 4 0 014-4h4a4 4 0 014 4v2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 7l-4 4m0-4l4 4" /></svg>;
const AppFreezingIcon = () => <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0v4M5 9h14l1 12H4L5 9z" /></svg>;
const NoWifiIcon = () => <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.393 9.393a15 15 0 0121.214 0" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l16 16" /></svg>;
const FrozenScreenIcon = () => <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>;


const servicesData = [
    {
        icon: <OverheatingIcon />,
        title: "Overheating",
        description: "If your iPad heats up frequently, we can identify the cause and repair it to prevent long-term damage.",
    },
    {
        icon: <SpinningWheelIcon />,
        title: "Spinning Wheel",
        description: "Is your iPad stuck on a loading screen? Our technicians can fix this issue quickly.",
    },
    {
        icon: <AppCrashesIcon />,
        title: "App Crashes",
        description: "Experiencing frequent app crashes? We’ll diagnose the issue and restore smooth performance.",
    },
    {
        icon: <BootLoopIcon />,
        title: "Boot Loop Issues",
        description: "If your iPad is stuck in a boot loop, we can resolve it to ensure proper functionality again.",
    },
    {
        icon: <NotChargingIcon />,
        title: "Not Charging",
        description: "If your iPad isn't charging, it could be due to a damaged charging port or a faulty battery. We'll diagnose and fix it quickly.",
    },
    {
        icon: <AppFreezingIcon />,
        title: "App Freezing",
        description: "Freezing apps can be annoying. Our experts will identify the cause and restore your device's smooth functionality.",
    },
    {
        icon: <NoWifiIcon />,
        title: "No Wi-Fi Connection",
        description: "If your iPad can't connect to Wi-Fi, it may be a hardware or software issue. We'll troubleshoot and get you back online.",
    },
    {
        icon: <FrozenScreenIcon />,
        title: "Frozen Screen",
        description: "If your screen is unresponsive, we can repair it so your device works perfectly again.",
    },
];

const IpadRepairServices = () => {
    return (
        <div className="relative py-20 lg:py-32 font-montserrat overflow-hidden">
            {/* Background Blur Ellipses */}
            <div className="absolute top-[10%] left-[-150px] w-[300px] h-[300px] bg-[#88C057]/30 rounded-full filter blur-3xl" />
            <div className="absolute top-[20%] left-[50px] w-[292px] h-[288px] bg-[#FF6469]/30 rounded-full filter blur-3xl" />
            <div className="absolute top-[35%] left-[-20px] w-[292px] h-[288px] bg-[#0022FF]/30 rounded-full filter blur-3xl" />
            <div className="absolute bottom-[20%] right-[-150px] w-[306px] h-[300px] bg-[#96D696]/30 rounded-full filter blur-3xl" />
            <div className="absolute bottom-[5%] left-[10%] w-[318px] h-[313px] bg-[#FC4798]/30 rounded-full filter blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Introduction Section */}
                <div className="max-w-4xl mx-auto text-center lg:text-left">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#003B5A] tracking-tighter capitalize leading-tight">
                        iPad Repair In Dubai
                    </h1>
                    <div className="mt-8 space-y-6 text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
                        <p>
                            Your iPad Is An Essential Device For Both Personal And Professional Tasks, Making Accidental Drops Or Water Exposure Highly Inconvenient. These Accidents Can Lead To Screen Cracks, Battery Failures, Or More Severe Issues.
                        </p>
                        <p>
                            At Royal Step, We Understand How Critical It Is To Have Your iPad Functioning Smoothly. If You&apos;re Facing Any Problems, Our Trusted Team In Dubai Is Here To Provide Comprehensive Repair Solutions Quickly And Efficiently.
                        </p>
                        <p>
                            For All Your iPad Repair Needs, Royal Step Is Your Go-To Destination In Dubai, Committed To Offering A Seamless And Hassle-Free Repair Experience.
                        </p>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mt-24 lg:mt-32">
                    <h2 className="text-4xl font-bold text-[#003B5A] text-center uppercase tracking-tight">
                        Our Services
                    </h2>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-purple-100/50"
                            >
                                <div className="h-32 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="mt-4 text-2xl lg:text-3xl font-semibold text-[#003B5A] tracking-tight capitalize">
                                    {service.title}
                                </h3>
                                <p className="mt-4 text-base lg:text-lg text-black/60 font-medium leading-relaxed max-w-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IpadRepairServices;