import React from 'react';

const InnerServices = () => {
    return (
        <div className="relative overflow-hidden bg-white py-24 sm:py-32">
            {/* Background decorative ellipses */}
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute left-[868px] top-[324px] h-[362px] w-[356px] bg-[#5BBBA9] opacity-50 blur-[500px]"></div>
                <div className="absolute left-[-100px] top-[414px] h-[300px] w-[306px] bg-[#FF8952] opacity-50 blur-[252.5px]"></div>
                <div className="absolute left-[25px] top-[1122px] h-[54px] w-[54px] bg-[#FC4798] opacity-50 blur-[15px]"></div>
                <div className="absolute left-[1055px] top-[556px] h-[82px] w-[82px] bg-[rgba(255,220,105,0.49)] opacity-50 blur-[15px]"></div>
                <div className="absolute right-[-150px] top-[244px] h-[176px] w-[176px] bg-[#FF8383] opacity-50 blur-[10px]"></div>
                <div className="absolute right-[-200px] top-[466px] h-[82px] w-[82px] bg-[#6FFFD9] opacity-50 blur-[15px]"></div>
                <div className="absolute bottom-[-150px] left-[50%] h-[218px] w-[218px] -translate-x-1/2 bg-[#FFA46F] opacity-50 blur-[10px]"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-bold tracking-tight text-[#003B5A] sm:text-6xl lg:text-7xl">
                            Trusted IPad Repair Services In Dubai
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
                            Get Reliable And Affordable IPad Repair Dubai Services With A Focus On Customer Satisfaction. Whether It's Ipad Screen Repair, Ipad Battery Replacement, Or Hardware Repair, Our Expert Technicians Ensure Your Device Is Fixed Quickly And Professionally. We Prioritize Quality And Timely Service, Making Sure Your IPad Is Back In Top Condition Without Hassle. Visit Us For Cost-Effective Repair Solutions That You Can Trust.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-[#003B5A] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003B5A]"
                            >
                                See Services &rarr;
                            </a>
                            <a
                                href="#"
                                className="rounded-md border border-[#003B5A] px-8 py-3 text-sm font-semibold text-[#003B5A] shadow-sm hover:bg-gray-100"
                            >
                                More
                            </a>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="rounded-xl border border-gray-200 bg-white/50 p-8 shadow-2xl backdrop-blur-lg">
                        <h2 className="text-2xl font-bold text-[#003B5A]">Repair Services</h2>
                        <form action="#" method="POST" className="mt-6 space-y-6">
                            <div>
                                <label htmlFor="device-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Device Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="device-name"
                                        id="device-name"
                                        placeholder="Device Name"
                                        className="block w-full rounded-md border-0 bg-white/80 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003B5A] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        placeholder="Type Your Name"
                                        required
                                        className="block w-full rounded-md border-0 bg-white/80 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003B5A] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        placeholder="Type Email Here"
                                        required
                                        className="block w-full rounded-md border-0 bg-white/80 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003B5A] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                    Number*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="tel"
                                        name="number"
                                        id="number"
                                        autoComplete="tel"
                                        placeholder="Your Contact Number"
                                        required
                                        className="block w-full rounded-md border-0 bg-white/80 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003B5A] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                    SMS*
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        placeholder="Write Your Message"
                                        required
                                        className="block w-full rounded-md border-0 bg-white/80 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003B5A] sm:text-sm sm:leading-6"
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-[#003B5A] py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003B5A]"
                                >
                                    Proceed
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnerServices;