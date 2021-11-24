import Image from 'next/image'
import styled from 'styled-components'

const Valor=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:240px;
height:auto;
box-sizing:border-box;
box-shadow: 10px 10px 17px rgba(0, 0, 0, 0.25);
margin:2%;
.imageContainer{
      width:240px;
    }
    .valoresText{
        text-align:center;
        padding:2%;
    }
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

    }
   
`
export default function Valores(props){
    
    return(
               <Valor>
            <h1>{props.title}</h1>
                <div className="imageContainer">
                    <Image src={props.img} width={340} height={150} alt='web' layout='responsive'/>
                </div>
            <div className="valoresText">
            <p>{props.text}</p>
            </div>   
        </Valor>
       )
}
