import Link from 'next/link'
import React from 'react'

const Card = (props:any) => {
    const {postcard} = props
  return (
    <Link className=' inline-flex w-1/5 h-72  ' href={`/blogs/${postcard.id}`}>
        <div className=" bg-white shadow-xl rounded-xl border-2  overflow-hidden  hover:border-l-emerald-500 hover:border-r-blue-500 hover:border-b-orange-300 hover:border-t-red-800">
            <section className='h-2/5 bg-gray-200 text-gray-400'><span className='flex justify-center items-center min-h-full'>400 X 300</span> </section>
            <section className='m-2 p-1 '>
                <h1 className='text-black font-bold'>{postcard.title}</h1>
                {postcard.body}
            </section>
        </div>
    </Link>
  )
}

export default Card