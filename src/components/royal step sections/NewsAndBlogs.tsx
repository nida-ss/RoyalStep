import React from 'react';
import Card from '../ui/Card';

const NewsAndBlogs: React.FC = () => {
  const blogs = [
    {
      title: "Fast Reliable Computer Repair Service Dubai South You Can Trust",
      description: "Looking for a reliable computer repair service in Dubai South that solves all your laptop and PC problems quickly? From broken screens to slow performance and data ...",
      image: "/images/computer-repair.jpg"
    },
    {
      title: "Fix Broken Screen Near You. Fast, Affordable And Trusted Repair Services",
      description: "A broken screen can ruin your whole day. Imagine this: you're chatting with a friend or watching a video, and suddenly ...",
      image: "/images/broken-screen.jpg"
    },
    {
      title: "Sell Apple Products For Cash Near You At Much Better Price",
      description: "The moment you type Sell Apple products for cash near me into your search bar, it means you're looking for more than just a buyer. You're looking for convenience, trust ...",
      image: "/images/apple-products.jpg"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-24 relative">
      {/* Background gradient effect */}
      <div className="absolute w-[414px] h-[408px] left-1/3 top-1/4 bg-[#FFDC69] rounded-full blur-[450px] -z-10 transform -rotate-90"></div>
      
      <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-20 leading-[30px] tracking-tight uppercase">
        News and blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <Card key={index} className="border border-primary/40 shadow-md">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-[330px] object-cover border-b border-primary/40 rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="font-montserrat font-bold text-xl md:text-2xl text-primary leading-tight mb-4">
                {blog.title}
              </h3>
              <p className="font-montserrat font-medium text-lg text-black/60">
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
