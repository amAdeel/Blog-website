"use client"
import Card from '@/Components/Card'
import React from 'react'
import { useEffect , useState } from 'react'

const Page = () => {
    // now i want to create a function , i want when someone comes in my blog pagew then a api hit and fetch some data from there 
    // now our function is complet but can't use it's ,, for this purpose we knopw that when ever we want some functionality on the time of rerending we use useEffect for that purpose , now we use a use effect and updating blog page according to fetching data .
    const [getdate, setgetdate] = useState([])

    useEffect(() => {
        getblogdate()
    },[])
    // dependies hum ny empty rahk di mean k ya only one time click able ho ga first time blog page par jy gy to humari api target ho gi , or data show karva dy gi
    

    const getblogdate =async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const date=await response.json()
        setgetdate(date)
        console.log(date)
    }
  return (
    <div className='min-h-screen my-5 flex gap-8 first-line: flex-wrap md:first-line:flex-wrap sm:first-line:flex-wrap justify-center rounded-xl'>
        {getdate.map((eachitems:any)=>{
            return(
                <Card postcard={eachitems} />
            )
        }
        )}
        
    </div>
  )
}

export default Page






