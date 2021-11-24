import  React from 'react'
import Link from 'next/link'
export default function Navigation(){
   return (
    <>
        <ul>    
          <li><Link href="#soluction"><a>Soluções</a></Link></li>
          <li><Link href="#about"><a>Sobre Nós</a></Link></li>
          <li><Link href="#portifolio"><a>Portifólio</a></Link></li>
          <li><Link href="#contato"><a>Contatos</a></Link></li>
        </ul>
    </>

   )
}
