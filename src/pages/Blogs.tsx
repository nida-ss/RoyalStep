import React from 'react';

import BlogHeader from '../components/blogs sections/blogs';
import BlogList from '../components/blogs sections/list';

const Blogs: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
     
      <main>
        <BlogHeader />
        <BlogList />
      </main>
    
    </div>
  );
};

export default Blogs;