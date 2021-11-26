import styled from "styled-components"

 export  const App =styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
  
 
`
export  const  Nav=styled.nav`
 display:flex;
 justify-content:center;
 flex-direction:row;
 width:100vw;
 background-color:#000;
ul{ 
   list-style:none;
   background-color:#000;
   }
 li{
   
   display:inline-block;
   padding:2px 21px;
   opacity:1;
   color:#fff;
 background-color:#000;
}
li a :hover{
  color:orange;
  transition:opacity .2s ease;
 }
a{
  background:#000;
  text-decoration:none;
}
`

 export  const Banner =  styled.main`
 display:block;
 width:100vw;
 height:auto;
`
export  const Category = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:3% 3%;

h1{
  font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size:2.4rem;
line-height: 73px;
color:#FF8A00;
  }

h2{
font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size:1.6rem;
text-align:center;
}

span{
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 1.8rem;
line-height: 2rem;
text-align: center;

color: #FF8A00;

}

`
export const Section=styled.div`
 display:flex;
 justify-content:center;
 flex-wrap:wrap;
 padding:5%;

 width:100vw;
`

export const Carrossel=styled.div`
display:flex;
flex-grow:grow;
flex-direction:row;
 overflow-x:scroll;
padding-left:2%;
 width:100vw;
 height:320px;
`

