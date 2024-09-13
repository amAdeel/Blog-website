import Image from 'next/image'
import React from 'react'

interface CommentProps {
  getcommit: {
    name: string;
    email: string;
    body: string;
  };
}

const Comments: React.FC<CommentProps> = ({ getcommit }) => {
    return (
     <div className='shadow-md p-8'>
        <div>
        <div className='flex items-center '>
        <img
        className='w-10 h-10 rounded-full'
        src={`https://ui-avatars.com/api/?name=${getcommit.name}&background=random`}
        alt={getcommit.name}
        />
        <h1 className='text-gray-400 p-2'>{getcommit.email}</h1>
        </div>
        {getcommit.body}
        </div>
    </div>

  )
}

export default Comments