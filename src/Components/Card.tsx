import Link from 'next/link';
import React from 'react';

// Define the props type
interface PostCard {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  postcard: PostCard;
}

// Define the component using the props type
//const card =(props)=> props = postcard{
//}

//### step 05 
const Card: React.FC<PostCardProps> = ({ postcard }) => {
  return (
    <Link href={`/blogs/${postcard.id}`} className='inline-flex w-1/5 h-72'>
      <div className="bg-white shadow-xl rounded-xl border-2 overflow-hidden hover:border-l-emerald-500 hover:border-r-blue-500 hover:border-b-orange-300 hover:border-t-red-800">
        <section className='h-2/5 bg-gray-200 text-gray-400'>
          <span className='flex justify-center items-center min-h-full'>400 X 300</span>
        </section>
        <section className='m-2 p-1'>
          <h1 className='text-black font-bold'>{postcard.title}</h1>
          <p>{postcard.body}</p>
        </section>
      </div>
    </Link>
  );
};

export default Card;
