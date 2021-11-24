import Link from 'next/link'
import Navigation from '../components/Navigation'
import {Nav} from './styles/Home'

export default function About(){
  return(
    <>
      <Nav>
      <Navigation/>
      </Nav>
      <h1>About us</h1>
      <Link href="/"><a>Home</a></Link>
    </>
  )
}

