import { Square, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { withRouter } from 'next/router'

const List= ({ router, stars }) => {
  // const router = useRouter()
  const q = router.query.q
  const n = router.query.n

  return (
    <div>
      <Link href={'/list/1'}><Square size={200}  width={'100vw'} bg={'red.400'}>{stars[0].map((top)=>{return (<Text marginRight={2} >{'| '+top+' |'}</Text>)})}</Square></Link>
      <Link href={'/list/2'}><Square size={200} width={'90vw'} bg={'yellow.400'}>{stars[1].map((top)=>{return (<Text marginRight={2} >{'| '+top+' |'}</Text>)})}</Square></Link>
      {n<3 || <Link href={'/list/3'}><Square size={200} width={'80vw'} bg={'blue.400'}>{stars[2].map((top)=>{return (<Text marginRight={2} >{'| '+top+' |'}</Text>)})}</Square></Link>}
      {n<4 || <Link href={'/list/4'}><Square size={200} width={'70vw'} bg={'green.400'}>{stars[3].map((top)=>{return (<Text marginRight={2} >{'| '+top+' |'}</Text>)})}</Square></Link>}
      {n<5 || <Link href={'/list/5'}><Square size={200} width={'60vw'} bg={'purple.400'}>{stars[4].map((top)=>{return (<Text marginRight={2} >{'| '+top+' |'}</Text>)})}</Square></Link>}
    </div>
  )
}

export async function getServerSideProps(context) {
  const q = context.query.q
  const n = parseInt(context.query.n)
  const res = await fetch(`http://localhost:8080/search?x=${n}&q=${q}`)
  const json = await res.json()

  return {
    props: {
      stars: json,
    },
  }
}

export default withRouter(List)
