import React from 'react';

const BlogHeader = () => {
    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#FEF6F6] via-[#F8F7FF] to-[#F4F8FF] py-32">
            {/* Decorative Shapes */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-[#FF8952] rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-[#73B6D5] rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-10 left-20 w-24 h-24 bg-[#FC4798] rounded-full filter blur-xl opacity-30"></div>
            <div className="absolute bottom-20 left-32 w-12 h-12 bg-[#FB6609] rounded-full filter blur-lg opacity-40"></div>
            <div className="absolute top-10 right-20 w-24 h-24 bg-[#FFDD94] rounded-full filter blur-xl opacity-50"></div>
            <div className="absolute top-20 right-32 w-12 h-12 bg-[#73B6D5] rounded-full filter blur-lg opacity-40"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-[#003B5A] leading-tight">
                        Blogs
                    </h1>
                    <p className="mt-6 max-w-4xl font-montserrat text-lg md:text-2xl text-black/70 leading-relaxed">
                        We Are Here For Your Service At Anytime In Dubai. Having Any Issue With Your Device Or Gadgets? Just Contact Us Instantly!
                    </p>
                    <button className="mt-8 flex items-center justify-center gap-2 px-8 py-4 bg-[#003B5A] text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition-colors duration-300">
                        <span>Go Back</span>
                        <span>&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;