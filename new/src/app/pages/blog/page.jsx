'use client'
import React, { useEffect, useState } from 'react'
import Blog from '@/app/components/Blog'
import Link from 'next/link'

const blog = () => {
  return (
  <div className='Block'>   
   <h1 className='title'>THIS IS THE NEW BLOG</h1>
   <App/>
   </div>
  )
}


function App() {
  const [blogs, setBlogs] = useState([]);
  const Apicall = async () => {
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    const finalres = await response.json();
    console.log("final res", finalres);
    setBlogs(finalres.posts);
  };
  useEffect(() => {
    Apicall();
  });
  return (

    <Link href="/pages/blogpage"><div className="block">
      {blogs?.map((item) => (
        <Blog item={item} />
      ))}
    </div>
    </Link>
  );
}

export default blog
