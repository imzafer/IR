import { Button } from '@chakra-ui/react';
import Link from 'next/link'

function Index({ stars }) {

  return (
    <div>
      <Button marginLeft={10} marginTop={30}><Link href="/indexing">INDEX</Link></Button>
      <Button marginLeft={10} marginTop={30}><Link href="/clustering">SKIP</Link></Button>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8080/search?q=player&x=2')
  const json = await res.json()

  return {
    props: {
      stars: json,
    },
  }
}

export default Index
