import React from "react";
import { ArrowRight, RefreshCw } from "lucide-react";

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
    title:
      "FIX BROKEN SCREEN NEAR ME | FAST, AFFORDABLE, AND TRUSTED REPAIR SERVICES",
    description:
      "A Broken Screen Can Ruin Your Whole Day. Imagine This: You're Chatting With A Friend Or Watching A Video, And Suddenly, Your Phone Slips From Your Hand. The Screen Shatters Into Tiny Cracks. Not Only Does It Look Ugly, But It Also Makes Using Your Device Frustrating. If You're Searching For Fix Broken Screen Near Me, You Probably Need A Service That Is Quick, Reliable, And Affordable.",
    extraInfo: "At Royal Step, We Understand How Much You Depend On Your Device.",
    imageUrl: "blog01.png",
    imageAlt: "Smartphone with a shattered screen",
    learnMoreLink: "#",
  },
  {
    id: 2,
    title: "SELL APPLE PRODUCTS FOR CASH NEAR ME AT A GOOD PRICE",
    description:
      "The Moment You Type Sell Apple Products For Cash Near Me Into Your Search Bar, It Means You're Looking For More Than Just A Buyer. You're Looking For Convenience, Trust, And Instant Results. Maybe Your iPhone Is Sitting In A Drawer, Unused. Maybe Your MacBook Has Been Replaced By The Latest Model, Or Maybe Your Apple Watch No Longer Excites You The Way It Once Did. Instead Of Letting It Gather Dust Or Lose Value Day By Day, You Can Turn It Into Cash Today.",
    imageUrl: "blog02.png",
    imageAlt:
      "Collection of Apple products including MacBook, iPhone, and AirPods",
    learnMoreLink: "#",
  },
  {
    id: 3,
    title:
      "NEAREST MOBILE REPAIR SHOP AT DAMAC BUSINESS TOWER 907 QUICK & TRUSTED FIXES",
    description:
      "The Nearest Mobile Repair Shop At DAMAC Business Tower 907 Is Not Only A Place To Fix Your Phone, It's A Place Where You Get Quick Help, Friendly Service, And Repairs You Can Trust. Imagine Your Phone Slips From Your Hand, The Screen Cracks, And You Feel That Sinking Moment. Instead Of Stress, You Need To Walk Into Royal Step, Where We Greet You With A Smile, Check Your Device, And Start Working On It Instantly.",
    extraInfo:
      "In A Busy City Like Dubai, You Can't Afford To Be Without Your Phone.",
    imageUrl: "blog03.png",
    imageAlt: "Technician repairing a mobile phone",
    learnMoreLink: "#",
  },
];

const BlogCard: React.FC<{ blog: Blog; isReversed: boolean }> = ({
  blog,
  isReversed,
}) => (
  <div
    className={`grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden 
      bg-[#D5E0F133] border border-[#003B5A66] 
      drop-shadow-[2px_2px_8px_rgba(0,0,0,0.2)] backdrop-blur-md`}
    style={{ direction: isReversed ? "rtl" : "ltr" }}
  >
    {/* Image side */}
    <div className="h-full">
      <img
        src={blog.imageUrl}
        alt={blog.imageAlt}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text side */}
    <div className="flex flex-col gap-4 p-6" style={{ direction: "ltr" }}>
      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase">
        {blog.title}
      </h3>
      <p className="text-gray-700 text-base leading-relaxed">
        {blog.description}
      </p>
      {blog.extraInfo && (
        <p className="text-gray-700 text-base">{blog.extraInfo}</p>
      )}
      <a
        href={blog.learnMoreLink}
        className="font-semibold text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm"
      >
        Learn More <ArrowRight size={14} />
      </a>
    </div>
  </div>
);

const BlogList: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-[5%] left-[-5%] w-72 h-72 bg-[#47FFFC]/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-[15%] right-[-5%] w-80 h-80 bg-[#FC4798]/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-[5%] right-[5%] w-64 h-64 bg-[#FFD23B]/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-[10%] left-[5%] w-56 h-56 bg-[#88C057]/20 rounded-full blur-3xl opacity-60" />

      <div className="relative container mx-auto max-w-6xl space-y-10 md:space-y-16 z-10">
        {blogData.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} isReversed={index % 2 !== 0} />
        ))}

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="flex items-center justify-center gap-2 mx-auto px-6 py-3 text-base font-medium text-gray-600 hover:text-black transition-colors">
            <RefreshCw size={20} />
            <span>Load More Blogs</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
