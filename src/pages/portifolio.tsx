import Link from 'next/link'
import Navigation from '../components/Navigation'
import {Nav} from '../components/Home'

export default function Portifolio(){
  return(
    <>
      <Nav>
        <Navigation/>
      </Nav>

      <h1>Portifólio</h1>
      <Link href="/"><a>Home</a></Link>
    </>
  )
}

