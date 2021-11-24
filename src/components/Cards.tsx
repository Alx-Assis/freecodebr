import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

const Card=styled.div`
display:flex;
padding:2%;

width:340px;
box-sizing:border-box;
margin:3%;
box-shadow: 10px 10px 17px rgba(0, 0, 0, 0.25);

.imageContainer{
    padding:1%;
    width:150px;
    
    }

.cardText{
    padding:1%;
    margin-left:15px;

      h1{
        font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 26px;
line-height: 30px;
margin-bottom:5%;
    }
    p{
        font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

color: #000000;
    }

    .card :hover{
    box-shadow:10px 10px 17px rgba(1, 1, 1, 0.25);
}
   
`
export default function Cards(props){
    
    return(
        <Link  href='/about'>
            <Card>
            <div className="imageContainer">
            <Image src={props.img} width={52} height={52} alt='web'/>
            </div>
                <div className="cardText">
                <h1>{props.soluctions}</h1>
                <p>{props.description}</p>
            </div>         
        </Card>
        </Link>
    )
}
