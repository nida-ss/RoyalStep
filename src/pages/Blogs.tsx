import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BlogHeader from '../components/blogs sections/blogs';
import BlogList from '../components/blogs sections/list';

const Blogs: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <BlogHeader />
        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;