import React from 'react';

const DataRecovery: React.FC = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white">
            {/* Background blur elements */}
            <div className="absolute w-[318px] h-[313px] left-[1648px] top-[825px] bg-black/70 rounded-full blur-[400px] pointer-events-none" />
            <div className="absolute w-[292px] h-[288px] left-[34px] top-[574px] bg-[#FFDC69] rounded-full blur-[350px] pointer-events-none" />
            <div className="absolute w-[306px] h-[300px] left-[810px] top-[566px] bg-[#EADED9] rounded-full blur-[400px] pointer-events-none" />
            <div className="absolute w-[236px] h-[232px] left-[1794px] top-[275px] bg-[#FF7230] rounded-full blur-[250px] pointer-events-none" />
            
            {/* Smaller decorative elements */}
            <div className="absolute w-[122px] h-[122px] left-[1881px] top-[503px] bg-[#F88439] rounded-full blur-[10px] pointer-events-none" />
            <div className="absolute w-[54px] h-[54px] left-[1854px] top-[645px] bg-[#FC4798] rounded-full blur-[15px] pointer-events-none" />
            <div className="absolute w-[79px] h-[79px] left-[4px] top-[781px] bg-[#FFDC69] rounded-full blur-[15px] -rotate-[150deg] pointer-events-none" />
            <div className="absolute w-[47px] h-[47px] left-[715px] top-[1012px] bg-[#FF6469] rounded-full blur-[15px] rotate-[30deg] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Main heading */}
                <h1 className="absolute w-[768px] h-[160px] left-[120px] top-[340px] font-montserrat font-bold text-[74px] leading-[80px] tracking-[-0.02em] capitalize text-[#003B5A]">
                    Hard Drive Data Recovery
                </h1>

                {/* Main description */}
                <p className="absolute w-[875px] h-[320px] left-[120px] top-[550px] font-montserrat font-medium text-[26px] leading-[32px] capitalize text-black/50">
                    Are you using a hard disk or a hard drive to store large volumes of data? If so, losing the data due to device failure can bring a big problem. It is when you need hard drive data recovery services from Royal Step. Royal Step has specialization in offering hard-drive data recovery services in Dubai. Whether it is an internal hard drive of a laptop/desktop or an external hard disk, we know how to fix the problem and retrieve all data. We have certified experts to handle hard drive data-related issues and restore the required data at your preferred location.
                </p>

                {/* Call to action */}
                <p className="absolute w-[849px] h-[64px] left-[120px] top-[932px] font-montserrat font-medium text-[26px] leading-[32px] capitalize text-black/50">
                    Do you need immediate hard drive data recovery services? Contact Royal Step.
                </p>

                {/* Main image */}
                <div className="absolute w-[748px] h-[637px] left-[1062px] top-[359px]">
                    <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
                        {/* Replace with actual image */}
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                            <div className="w-64 h-64 bg-gray-400 rounded-full flex items-center justify-center">
                                <div className="w-32 h-32 bg-white rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary image */}
                <div className="absolute w-[270px] h-[255px] left-[1672px] top-[263px]">
                    <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
                        {/* Replace with actual image */}
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-200 to-orange-400">
                            <div className="text-white font-semibold">Data Recovery</div>
                        </div>
                    </div>
                </div>

                {/* Bottom section/Group 2 */}
                <div className="absolute w-[608px] h-[80px] left-[1122px] top-[952px] bg-[#003B5A] rounded-xl flex items-center justify-center">
                    <span className="text-white font-montserrat font-semibold text-lg">
                        Guaranteed Data Recovery Services in Dubai
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DataRecovery;