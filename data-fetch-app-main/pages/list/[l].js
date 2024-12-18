import {  Text } from '@chakra-ui/react';
import Link from 'next/link';
import { withRouter } from 'next/router'

const List= ({ router, stars }) => {
  // const router = useRouter()
  const q = router.query.l

  console.log(q, stars);

  return (
    <div>
     {stars.map(topic => {return (<Text marginTop={10}><Link href={`https://en.wikipedia.org/wiki/${topic.replaceAll(" ","_")}`}>{topic}</Link></Text>)})}
    </div>
  )
}

export async function getServerSideProps(context) {
  const q = parseInt(context.query.l);
  const res = await fetch(`http://localhost:8080/cluster?n=${q}`)
  const json = await res.json()

  return {
    props: {
      stars: json,
    },
  }
}

export default withRouter(List)
