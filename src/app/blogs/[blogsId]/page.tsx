"use client"
import Comments from '@/Components/Comments';
import React, { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type ParamsType = {
  blogsId: string;
};

const Page = ({ params }: { params: ParamsType }) => {
  const [postData, setPostData] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getSpecificPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogsId}`);
        if (!response.ok) throw new Error('Failed to fetch post data');

        const post = await response.json();
        setPostData(post);

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogsId}/comments`);
        if (!commentsResponse.ok) throw new Error('Failed to fetch comments data');

        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error(error);
        // Optionally set some error state here
      }
    };

    getSpecificPost();
  }, [params.blogsId]);

  return (
    <div className='w-full mx-auto shadow-md rounded-lg my-4 p-6'>
      <h1 className='font-extrabold underline text-2xl mb-4'>{postData?.title ?? 'Post Title'}</h1>
      <p className='text-base mb-6'>{postData?.body ?? 'Post Body'}</p>
      {comments.map((comment) => (
        <Comments key={comment.id} getcommit={comment} />
      ))}
    </div>
  );
};

export default Page;
