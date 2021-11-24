import Link from 'next/link'
import {Nav} from './styles/Home'
import Navigation from '../components/Navigation'
export default function Contatos(){
  return(
    <>
       <Nav>
      <Navigation/>
      </Nav>

      <h1>Contatos</h1>
      <Link href="/"><a>Home</a></Link>
    </>
  )
}

