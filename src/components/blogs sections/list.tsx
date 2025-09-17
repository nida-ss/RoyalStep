import React from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';

interface Blog {
    id: number;
    title: string;
    description: string;
    extraInfo?: string;
    imageUrl: string;
    imageAlt: string;
    learnMoreLink: string;
}

const blogData: Blog[] = [
    {
        id: 1,
        title: 'FAST AND RELIABLE COMPUTER REPAIR SERVICE IN DUBAI SOUTH YOU CAN TRUST',
        description: "Looking For A Reliable Computer Repair Service In Dubai South That Solves All Your Laptop And PC Problems Quickly? From Broken Screens To Slow Performance And Data Loss, Professional Repair Can Save You Time, Money, And Stress. Instead Of Trying Risky DIY Fixes That Can Make Things Worse, It's Smarter To Trust...",
        extraInfo: "Don't Let Computer Issues Slow You Down. Call Royal Step At 04 3420080 Or 050 8088819 And Book Your Appointment Today.",
        imageUrl: '/api/placeholder/800/450',
        imageAlt: 'Technician repairing a computer motherboard',
        learnMoreLink: '#',
    },
    {
        id: 2,
        title: 'FIX BROKEN SCREEN NEAR ME | FAST, AFFORDABLE, AND TRUSTED REPAIR SERVICES',
        description: "A Broken Screen Can Ruin Your Whole Day. Imagine This: You're Chatting With A Friend Or Watching A Video, And Suddenly, Your Phone Slips From Your Hand. The Screen Shatters Into Tiny Cracks. Not Only Does It Look Ugly, But It Also Makes Using Your Device Frustrating. If You're Searching For Fix Broken Screen Near Me, You Probably Need A Service That Is Quick, Reliable, And Affordable.",
        extraInfo: 'At Royal Step, We Understand How Much You Depend On Your Device.',
        imageUrl: '/api/placeholder/800/450',
        imageAlt: 'Smartphone with a shattered screen',
        learnMoreLink: '#',
    },
    {
        id: 3,
        title: 'SELL APPLE PRODUCTS FOR CASH NEAR ME AT A GOOD PRICE',
        description: "The Moment You Type Sell Apple Products For Cash Near Me Into Your Search Bar, It Means You're Looking For More Than Just A Buyer. You're Looking For Convenience, Trust, And Instant Results. Maybe Your iPhone Is Sitting In A Drawer, Unused. Maybe Your MacBook Has Been Replaced By The Latest Model, Or Maybe Your Apple Watch No Longer Excites You The Way It Once Did. Instead Of Letting It Gather Dust Or Lose Value Day By Day, You Can Turn It Into Cash Today.",
        imageUrl: '/api/placeholder/800/450',
        imageAlt: 'Collection of Apple products including MacBook, iPhone, and AirPods',
        learnMoreLink: '#',
    },
    {
        id: 4,
        title: 'NEAREST MOBILE REPAIR SHOP AT DAMAC BUSINESS TOWER 907 QUICK & TRUSTED FIXES',
        description: "The Nearest Mobile Repair Shop At DAMAC Business Tower 907 Is Not Only A Place To Fix Your Phone, It's A Place Where You Get Quick Help, Friendly Service, And Repairs You Can Trust. Imagine Your Phone Slips From Your Hand, The Screen Cracks, And You Feel That Sinking Moment. Instead Of Stress, You Need To Walk Into Royal Step, Where We Greet You With A Smile, Check Your Device, And Start Working On It Instantly.",
        extraInfo: "In A Busy City Like Dubai, You Can't Afford To Be Without Your Phone.",
        imageUrl: '/api/placeholder/800/450',
        imageAlt: 'Technician repairing a mobile phone',
        learnMoreLink: '#',
    },
];

const BlogCard: React.FC<{ blog: Blog; isReversed: boolean }> = ({ blog, isReversed }) => (
    <div className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} items-center gap-8 lg:gap-16 p-8 bg-white/5 backdrop-blur-xl rounded-2xl`}>
        <div className="lg:w-1/2">
            <img src={blog.imageUrl} alt={blog.imageAlt} className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{blog.title}</h3>
            <p className="text-gray-600 text-base">{blog.description}</p>
            {blog.extraInfo && <p className="text-gray-600 text-base">{blog.extraInfo}</p>}
            <a href={blog.learnMoreLink} className="font-semibold text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-2 mt-4">
                Learn More <ArrowRight size={16} />
            </a>
        </div>
    </div>
);

const BlogList: React.FC = () => {
    return (
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-[5%] left-[-5%] w-72 h-72 bg-[#47FFFC]/30 rounded-full filter blur-3xl opacity-50" />
            <div className="absolute top-[10%] right-[-5%] w-80 h-80 bg-[#FC4798]/30 rounded-full filter blur-3xl opacity-50" />
            <div className="absolute bottom-[5%] right-[5%] w-64 h-64 bg-[#FFD23B]/30 rounded-full filter blur-3xl opacity-50" />
            <div className="absolute bottom-[10%] left-[5%] w-56 h-56 bg-[#88C057]/30 rounded-full filter blur-3xl opacity-50" />

            <div className="container mx-auto max-w-7xl space-y-12 md:space-y-20">
                {blogData.map((blog, index) => (
                    <BlogCard key={blog.id} blog={blog} isReversed={index % 2 !== 0} />
                ))}
                <div className="text-center mt-16">
                    <button className="flex items-center justify-center gap-3 mx-auto px-6 py-3 text-lg font-semibold text-gray-600 hover:text-black transition-colors">
                        <RefreshCw size={22} />
                        <span>Load More Blogs</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogList;