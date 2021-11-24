import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const FormContainer=styled.div`
display:flex;
width:90vw;

.container-whats-email{
 display:flex;
 width:100vw;
 flex-wrap:wrap;
 justify-content:space-evenly;
 align-items:center;

.contact{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:180px;
    justify-content:center;
     height:auto;
     margin-bottom:3%; 
    span{
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 42px;

text-align: center;


    }

}
}
`


export default function Form(props){
    return(
        <FormContainer>
            <div className="container-whats-email">
                <div className='contact' style={{color:`${props.colorWhats}`}}>
                    <Link href={props.whats}>
                        <Image src={props.whatsImg} width={'100vw'} height={60} alt='whats' layout='fixed'/>
                     </Link>
                     <span>WhatsApp</span>
                     <span>(21) 99016-3817</span>
                </div>
                <div className='contact' style={{color:`${props.colorEmail}`}}>
                     <Link href={props.email}>

                         <Image src={props.emailImg} width={'100vw'} height={60} alt='whats' layout='fixed'/>
                       </Link>
                       <span>Email</span>
                     <span>contatos@freecode.tk</span>

                 </div>
            </div>
            
        </FormContainer>
    )
    
}

