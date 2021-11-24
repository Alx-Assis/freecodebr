import Link from 'next/link'
import Navigation from '../components/Navigation'
import {Nav} from './styles/Home'
export default function Soluction(){
 return(
    <>
       <Nav>
         <Navigation/>
       </Nav>
    <h1>Soluções</h1>
      <Link href="/"><a>Home</a></Link>
    </>
  )
}
