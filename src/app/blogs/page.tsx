"use client"
import Card from '@/Components/Card';
import React, { useEffect, useState } from 'react';

// Define the type for a blog post
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Page = () => {
  // State to hold the fetched data

  //### step 03
  const [getdate, setgetdate] = useState<Post[]>([]);



  //### Step 02 
  useEffect(() => {
   getblogdate();
  }, []);


  //### step 01 
  const getblogdate = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) { 
        throw new Error('Failed to fetch data');
      }
      const data: Post[] = await response.json();
      setgetdate(data);
    } catch (error) {
      console.error('Error fetching blog data:', error);
      // Optionally, handle the error state here
    }
  };

//### step 04
  return (
    <div className='min-h-screen my-5 flex gap-8 flex-wrap justify-center rounded-xl'>
      {getdate.map((eachitem) => (
        <Card key={eachitem.id} postcard={eachitem} />
      ))}
    </div>
  );
};

export default Page;
