import styled from 'styled-components'
import Image from 'next/image'

const CarrosselCard=styled.div`
display:flex;
flex-direction:row;
width:360px;
height:300px;
padding:2%;
box-shadow: 10px 10px 17px rgba(0, 0, 0, 0.25);
margin-left:10%;
.container{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

     width:180px;
     height:100%;
     padding:2px;

            h1{
             font-family: Roboto;
             font-style: normal;
             font-weight: 300;
             font-size: 24px;
             line-height: 42px;
             text-align: center;

             color: #000000;
         }

        p{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 21px;

            color: #000000;
            
        }

        .btnCarrossel{
             background: #1987B7;
             box-shadow: 9px 8px 8px rgba(0, 0, 0, 0.25);
             border-radius: 5px;
             padding:2%;
             color:#fff;
        }

    }

.container2{
    display:flex;
    width:180px;
     height:100%;

`

export default function CarrosselItens(props){
    return(
        <CarrosselCard style={{backgroundColor:`${props.color}`}}>
            <div className="container" style={{backgroundColor:`${props.color}`}}>
             <Image src={props.icon} width={32} height={32} alt='a'/>
                <h1 style={{backgroundColor:`${props.color}`}}>{props.title}</h1>
                <p style={{backgroundColor:`${props.color}`}}>{props.description}</p>
                <button className='btnCarrossel'>{props.textBtn}</button>
            </div>
            <div className="container2" style={{backgroundColor:`${props.color}`}}>
                <Image src={props.img}alt='c' layout='intrinsic' />
            </div>
        </CarrosselCard>

    )
}
