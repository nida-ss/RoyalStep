import React from 'react';
import Card from '../ui/Card';

const NewsAndBlogs: React.FC = () => {
  const blogs = [
    {
      title: "Fast Reliable Computer Repair Service Dubai South You Can Trust",
      description: "Looking for a reliable computer repair service in Dubai South that solves all your laptop and PC problems quickly? From broken screens to slow performance and data ...",
      image: 'computer-repair.png'
    },
    {
      title: "Fix Broken Screen Near You. Fast, Affordable And Trusted Repair Services",
      description: "A broken screen can ruin your whole day. Imagine this: you're chatting with a friend or watching a video, and suddenly ...",
      image: "broken-screen.png"
    },
    {
      title: "Sell Apple Products For Cash Near You At Much Better Price",
      description: "The moment you type Sell Apple products for cash near me into your search bar, it means you're looking for more than just a buyer. You're looking for convenience, trust ...",
      image: "apple-products.png"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 relative">
      {/* Background gradient effect */}
      <div className="absolute w-[250px] sm:w-[350px] md:w-[414px] h-[250px] sm:h-[350px] md:h-[408px] left-1/2 -translate-x-1/2 top-1/4 bg-[#FFDC69] rounded-full blur-[350px] sm:blur-[400px] md:blur-[450px] -z-10 transform -rotate-90"></div>
      
      {/* Section Heading */}
      <h2 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-12 sm:mb-16 md:mb-20 leading-snug tracking-tight uppercase">
        News and blogs
      </h2>

      {/* ✅ Force 3 in a row on laptop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <Card 
            key={index} 
            className="border border-primary/40 shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 w-full flex flex-col"
          >
            {/* Blog Image */}
            <div className="flex-shrink-0 w-full h-56 sm:h-64 lg:h-[300px] overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            {/* Blog Content */}
            <div className="p-5 md:p-6 flex flex-col justify-between flex-1">
              <h3 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl text-primary leading-tight mb-3 sm:mb-4 line-clamp-2">
                {blog.title}
              </h3>
              <p className="font-montserrat font-medium text-sm sm:text-base md:text-lg text-black/60 line-clamp-3">
                {blog.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewsAndBlogs;
