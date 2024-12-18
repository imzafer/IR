import React, { useState } from "react";
import { Button, FormLabel, Input } from '@chakra-ui/react';
import Link from 'next/link'
import { useRouter } from "next/router";


const Indexing= () => {
    const router = useRouter()
    const [read, setRead] = useState("")
    const [write, setWrite] = useState("")

    const btnHandle = () => {
       fetch(`http://localhost:8080/button?btn=1&s1=${write}&s2=${read}`)
    }

    
  return (
    <div>
      <FormLabel>The reading folder</FormLabel>
      <Input onChange={e=>setRead(e.target.value)}/>
      <FormLabel>The writing folder</FormLabel>
      <Input onChange={e=>setWrite(e.target.value)} />
      <Button margin={10} onClick={btnHandle}><Link href={'/clustering'}>CONTINUE</Link></Button>
      
    </div>
  )
}

export default Indexing
