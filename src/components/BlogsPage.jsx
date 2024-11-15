import React, { useState } from 'react';
import './BlogsPage.css';

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Temporary SAP-related blog data
  const blogData = [
    {
      id: 1,
      title: "SAP S/4HANA: Next-Generation ERP",
      author: "Alice Thompson",
      date: "10 Oct 2023",
      text: "An in-depth look into SAP S/4HANA, the next-gen ERP suite that’s transforming business processes.",
      thumbnail: "https://via.placeholder.com/300x200.png?text=SAP+S4HANA"
    },
    {
      id: 2,
      title: "Getting Started with SAP FICO",
      author: "John Carter",
      date: "12 Sep 2023",
      text: "A beginner’s guide to SAP FICO, one of the most critical modules in SAP for financial management.",
      thumbnail: "https://via.placeholder.com/300x200.png?text=SAP+FICO"
    },
    {
      id: 3,
      title: "Top Benefits of SAP Certification",
      author: "Emily Chen",
      date: "20 Aug 2023",
      text: "Discover the advantages of getting SAP certified and how it can enhance your career in tech.",
      thumbnail: "https://via.placeholder.com/300x200.png?text=SAP+Certification"
    },
    {
      id: 4,
      title: "Implementing SAP in Small Businesses",
      author: "Michael Lee",
      date: "05 Jul 2023",
      text: "How small businesses can leverage SAP to streamline operations and improve productivity.",
      thumbnail: "https://via.placeholder.com/300x200.png?text=SAP+for+Small+Businesses"
    },
    {
      id: 5,
      title: "The Future of SAP Cloud Platform",
      author: "Sophie Martinez",
      date: "15 Jun 2023",
      text: "Explore what’s next for the SAP Cloud Platform and how it’s driving digital transformation.",
      thumbnail: "https://via.placeholder.com/300x200.png?text=SAP+Cloud+Platform"
    },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="blogs-page">
      
      <div>
        
        <button className="filter-category-blogs"><i id="icon-cate" className="fas fa-filter"></i>Filter by Category</button>
        <div id="c-c">
          <button className={`Categories-container ${activeCategory === 'All' ? 'active' : ''}`} onClick={() => handleCategoryClick('All')}>All</button>
          <button className={`Categories-container ${activeCategory === 'SAP Ariba' ? 'active' : ''}`} onClick={() => handleCategoryClick('SAP Ariba')}>SAP Ariba</button>
          <button className={`Categories-container ${activeCategory === 'SAP S/4 Hana' ? 'active' : ''}`} onClick={() => handleCategoryClick('SAP S/4 Hana')}>SAP S/4 Hana</button>
          <button className={`Categories-container ${activeCategory === 'SAP SD' ? 'active' : ''}`} onClick={() => handleCategoryClick('SAP SD')}>SAP SD</button>
          <button className={`Categories-container ${activeCategory === 'Data Science' ? 'active' : ''}`} onClick={() => handleCategoryClick('Data Science')}>Data Science</button>
          <button className={`Categories-container ${activeCategory === 'Data Analytics' ? 'active' : ''}`} onClick={() => handleCategoryClick('Data Analytics')}>Data Analytics</button>
          <button className={`Categories-container ${activeCategory === 'Mern Stack' ? 'active' : ''}`} onClick={() => handleCategoryClick('Mern Stack')}>Mern Stack</button>
          <button className={`Categories-container ${activeCategory === 'DevOps' ? 'active' : ''}`} onClick={() => handleCategoryClick('DevOps')}>DevOps</button>
          <button className={`Categories-container ${activeCategory === 'HR Courses' ? 'active' : ''}`} onClick={() => handleCategoryClick('HR Courses')}>HR Courses</button>
          <button className={`Categories-container ${activeCategory === 'Digital Marketing' ? 'active' : ''}`} onClick={() => handleCategoryClick('Digital Marketing')}>Digital Marketing</button>
          
          {/* Add more categories as needed */}
        </div>
      </div>

      <div className="blogs-content">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-img-wrapper">
            <img src={blog.thumbnail} alt={blog.title} className="blog-thumbnail" />
            <p className="blog-title">{blog.title}</p>
            <h6 className="blog-author">{blog.author} <span>| {blog.date}</span></h6>
            <h6 className="blog-text">{blog.text}</h6>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default BlogsPage;
