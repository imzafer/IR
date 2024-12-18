import React, { useState } from "react";
import { Button, FormLabel, Input } from '@chakra-ui/react';
import Link from 'next/link'
import { useRouter } from "next/router";


const Clustering= () => {
    const router = useRouter()
    const [number, setNumber] = useState(0)
    const [query, setQuery] = useState("")

  return (
    <div>
      <FormLabel>Number of clusters</FormLabel>
      <Input onChange={e=>setNumber(e.target.value)}/>
      <FormLabel>the query</FormLabel>
      <Input onChange={e=>setQuery(e.target.value)} />
      <Button margin={10} onClick={()=>{router.push({
          pathname:`/cluster/${query}`,
          query:{
          
          n:number
          }
      })}}>SEARCH</Button>
      
    </div>
  )
}

export default Clustering
