import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';

const ContactUs = () => {
    const timings = [
        { day: 'Monday', time: '8:00 AM To 5:00 PM' },
        { day: 'Tuesday', time: '8:00 AM To 5:00 PM' },
        { day: 'Wednesday', time: '8:00 AM To 5:00 PM' },
        { day: 'Thursday', time: '8:00 AM To 5:00 PM' },
        { day: 'Friday', time: '8:00 AM To 5:00 PM' },
        { day: 'Saturday', time: '8:00 AM To 5:00 PM' },
        { day: 'Sunday', time: 'Closed' },
    ];

    return (
        <div className="relative font-montserrat bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-[324px] left-[868px] w-[356px] h-[362px] bg-[#5BBBA9] rounded-full filter blur-[500px] opacity-50"></div>
            <div className="absolute top-[888px] left-[1653px] w-[384px] h-[379px] bg-[#FC4798] rounded-full filter blur-[450px] opacity-50"></div>
            <div className="absolute top-[324px] left-[115px] w-[306px] h-[300px] bg-[#FF8952] rounded-full filter blur-[252.5px] opacity-50"></div>
            <div className="absolute top-[275px] left-[1839px] w-[236px] h-[232px] bg-[#FFDC69] rounded-full filter blur-[300px] opacity-50"></div>
            <div className="absolute top-[244px] left-[1831px] w-[176px] h-[176px] bg-[#FF8383] rounded-full filter blur-[10px] opacity-30"></div>
            <div className="absolute top-[466px] left-[1955px] w-[82px] h-[82px] bg-[#6FFFD9] rounded-full filter blur-[15px] opacity-50"></div>
            <div className="absolute top-[556px] left-[1055px] w-[82px] h-[82px] bg-[#ffdc697d] rounded-full filter blur-[15px] opacity-50"></div>
            <div className="absolute top-[1021px] left-[1121px] w-[218px] h-[218px] bg-[#FFA46F] rounded-full filter blur-[10px] opacity-40"></div>
            <div className="absolute top-[1122px] left-[25px] w-[54px] h-[54px] bg-[#FC4798] rounded-full filter blur-[15px] opacity-50"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <h1 className="text-6xl md:text-7xl font-bold text-[#003B5A] capitalize tracking-tight">Contact Us</h1>
                        <p className="mt-6 text-xl md:text-2xl text-black/50 leading-relaxed max-w-3xl">
                            If You Have Any Question, Fill Out The Form Please. Feel Free To Contact Us If You Want To Ask Queries Or Any Request From Our Services. We Are 24/7 Available For Our Costumers!
                        </p>
                        <div className="mt-10 flex items-center gap-4">
                            <button className="bg-[#003B5A] text-white px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-colors">
                                See Services <FiArrowRight />
                            </button>
                            <button className="bg-white text-[#003B5A] px-8 py-4 rounded-lg border border-[#003B5A] hover:bg-gray-100 transition-colors">
                                More
                            </button>
                        </div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-[#003B5A] uppercase">Our Timings</h2>
                                <ul className="mt-4 space-y-2 text-lg text-black/55">
                                    {timings.map((item) => (
                                        <li key={item.day}>
                                            <a href="#" className="hover:underline">{item.day}: {item.time}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-[#003B5A] uppercase">Contact Details</h2>
                                <p className="mt-4 text-lg text-black/55 leading-relaxed">
                                    <a href="#" className="hover:underline">Marasi Drive 51, DAMAC Business Tower 907- Business Bay - Dubai UAE</a>
                                </p>
                                <div className="mt-12">
                                    <h2 className="text-3xl font-bold text-[#003B5A] uppercase">Dropoff Location</h2>
                                    <p className="mt-4 text-lg text-black/55 leading-relaxed">
                                        <a href="#" className="hover:underline">Al Barsha Business Centre - Al Barsha - Al Barsha 1 - Dubai</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-[#003B5A] uppercase">Pickup Location</h2>
                                <p className="mt-4 text-lg text-black/55 leading-relaxed">
                                    Al Barsha Business Centre - Al Barsha - Al Barsha 1 - Dubai
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FiPhone className="text-2xl text-[#003B5A]" />
                                    <span className="text-xl font-bold">Phone:</span>
                                    <a href="tel:043420080" className="text-lg text-black/80 hover:underline">04 3420080</a>,
                                    <a href="tel:0505088819" className="text-lg text-black/80 hover:underline">050 5088819</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiMail className="text-2xl text-[#003B5A]" />
                                    <span className="text-xl font-bold">Email:</span>
                                    <a href="mailto:Support@Royalstep.Ae" className="text-lg text-black/80 hover:underline">Support@Royalstep.Ae</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiMapPin className="text-2xl text-orange-500" />
                                    <a href="#" className="text-lg font-semibold text-black/80 hover:underline">Check Location</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:col-span-5 p-8 rounded-2xl border border-gray-300 bg-white/50 backdrop-blur-xl shadow-lg">
                        <h2 className="text-3xl font-bold text-[#003B5A]">Repair Services</h2>
                        <form className="mt-6 space-y-6">
                            <div>
                                <label htmlFor="deviceName" className="sr-only">Device Name</label>
                                <input type="text" id="deviceName" placeholder="Device Name" className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B5A] focus:border-transparent outline-none transition" />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                                <input type="text" id="name" placeholder="Type Your Name" className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B5A] focus:border-transparent outline-none transition" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                                <input type="email" id="email" placeholder="Type Email Here" className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B5A] focus:border-transparent outline-none transition" required />
                            </div>
                            <div>
                                <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Number*</label>
                                <input type="tel" id="number" placeholder="Your Contact Number" className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B5A] focus:border-transparent outline-none transition" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">SMS*</label>
                                <textarea id="message" placeholder="Write Your Message" rows={5} className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B5A] focus:border-transparent outline-none transition" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#003B5A] text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-colors">
                                Proceed
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;