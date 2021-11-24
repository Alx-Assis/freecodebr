// eslint-disable-next-line
import React from "react"
import Link from "next/link";
import styled from "styled-components";
import Image from 'next/image';


const PortifolioContainer=styled.div`
    width:90vw;
    height:auto;
    `
export default function Portifolio(props){
    return(
        <Link href={props.pp}>
        <PortifolioContainer>
            <Image src={props.layout} width={100} height={100} alt='port' layout='responsive'/>
        </PortifolioContainer>
        </Link>
    )
}
