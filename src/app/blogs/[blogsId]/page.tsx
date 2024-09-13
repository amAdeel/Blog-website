"use client"
import Comments from '@/Components/Comments';
import React, { useState } from 'react'
import { useEffect } from 'react'

interface Post{
  userId:number;
  id:number;
  title:string;
  body:string
}

const Page = ({ params }:any) => {
  // now we create a useEffect that call our function that we create below 
  useEffect(() => {
    getspecificpost()
  },[])

  // now we want to create a useState that work on our ui 

  const[getdateofpost,setgetdateofpost]=useState< Post | null>(null)
  const[getcommitfromfunction,setgetcommitfromfunction]=useState([])
  
  const getspecificpost=async()=>{
    const specificpostdate=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogsId}`)
    if (specificpostdate.ok){
      const date=await specificpostdate.json()
      setgetdateofpost(date)
      const getcommet=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogsId}/comments`)
      const getcommitdate=await getcommet.json()
      setgetcommitfromfunction(getcommitdate)
      console.log(getcommitdate)

  
    }
  }
  return (
    <div className='w-full mx-auto shadow-md rounded-lg my-4 p-6'>
      <h1 className='font-extrabold underline text-2xl mb-4'>{(getdateofpost || {}).title}</h1>
      <p className='text-base mb-6'>{(getdateofpost || {}).body}</p>
      {getcommitfromfunction && getcommitfromfunction.map((com=>{
        return(<Comments getcommit={com}/>)
      }))}
    </div>
  )
}

export default Page