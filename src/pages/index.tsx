import React from 'react';
import Image from 'next/image'
import { Nav,App,Banner,Category, Section, Carrossel} from './styles/Home';

//import components
import Cards from '../components/Cards';
import Valores from '../components/Valores';
import Navigation from '../components/Navigation';
import CarrosselItens from '../components/CarrosselItens';
import Portifolio from '../components/Portifolio';
import Form from '../components/Form';

// import de imagens
import web from '../../public/iconWeb.svg';
import email from '../../public/iconMail.svg';
import mobile from'../../public/iconMobile.svg';
import website from '../../public/iconWebsite.svg';
import banner from '../../public/banner1.png';
import missao from '../../public/missao.svg';
import visao from '../../public/visao.svg';
import valor from '../../public/valor.svg';
import emailMarketing from '../../public/1.png';
import layout from '../../public/layoutsPet.svg';
import layout2 from '../../public/layoutsChef.svg';
import layout3 from '../../public/layoutsDisc.svg';
import layout4 from '../../public/layoutsart 1.svg';
import whatsContactIcon from '../../public/whatsContactIcon.svg';
import emailContactIcon from '../../public/emailContactIcon.svg';
import formImg from '../../public/form.svg';

const msg='tire suas dúvidas com a *FreeCode-Br* '
const number='5521990163817'


export default function Home(props){
  return( 
  <App>
    <Nav>
    <Navigation/>
    </Nav>
    
       <Banner>

   </Banner>
    <Category>
    <h1 id="soluction">Soluções</h1>
  
      <h2>Conheça quais são os serviços oferecidos pela <span>FreeCodeBr</span></h2>
    </Category>

    <Section> 
  <Cards img={website} soluctions='WebSites' description={'Desenvolvimento de soluções web específicas para a necessidade do seu negócio. E-commerce, portais, landing pages e tudo mais que você precisar.'}/>
 <Cards img={web}soluctions='Web' description={'Desenvolvimento de soluções web específicas para a necessidade do seu negócio. E-commerce, portais, landing pages e tudo mais que você precisar.'}/>
 <Cards img={mobile}soluctions='Mobile' description={'Desenvolvimento de soluções web específicas para a necessidade do seu negócio. E-commerce, portais, landing pages e tudo mais que você precisar.'}/>
 <Cards img={email}soluctions='E-Mail' description={'Desenvolvimento de soluções web específicas para a necessidade do seu negócio. E-commerce, portais, landing pages e tudo mais que você precisar.'}/>
      </Section>

    <Category>
      <h1  id ="about">Sobre Nós</h1>
      <h2>Conheça um pouco mais sobre a FreeCode-Br, como a nossa <span>missão, visão </span>e <span>valores</span></h2>
    </Category>

    <Section >
       <Valores title={'Nossa Missão'} img={missao} text={'Promover, de uma maneira simples e inovadora, a entrada de nossos clientes no mundo digital.'}/>
       <Valores title={'Nossa visão'} img={visao} text={'Ser referência em Soluções Tecnológicas, tanto para pequenas quanto para grandes empresas.'}/>
      <Valores title={'NossosValores'} img={valor} text={'Buscamos a felicidade e a confiança de nossos clientes e parceiros, sempre usando a ética e a humildade.'}/>
     </Section>

    <Category>
      <h1>Soluções</h1>
    </Category>

    <Carrossel>
    <CarrosselItens icon={email} img={emailMarketing} title={'Email Marketing'} description={'Mude a forma como você gerencia o envio de  e-mails do seu negócio através do FreeCodeMail '} textBtn={'Saiba Mais'} color={'#9E00FF'}/>

 <CarrosselItens icon={website} img={emailMarketing} title={'WebSites'} description={'Mude a forma como você gerencia o envio de  e-mails do seu negócio através do FreeCodeMail '} textBtn={'Saiba Mais'}color={'#1987B7'} />

    <CarrosselItens icon={mobile} img={emailMarketing} title={'Mobile'} description={'Mude a forma como você gerencia o envio de  e-mails do seu negócio através do FreeCodeMail '} textBtn={'Saiba Mais'} color={'#00fff0'}/>
    
<CarrosselItens icon={web} img={emailMarketing} title={'Web'} description={'Mude a forma como você gerencia o envio de  e-mails do seu negócio através do FreeCodeMail '} textBtn={'Saiba Mais'} color={'#00ff00'}/>
  </Carrossel>

    <Category>
      <h1 id="portifolio">Portifólio</h1>
    </Category>
  
    <Section> 
      <Portifolio pp={'./Portifolio'} layout={layout}  /> 
      <Portifolio pp={'./Portifolio'} layout={layout2}  /> 
      <Portifolio pp={'./portifolio'} layout={layout3}  /> 
      <Portifolio pp={'./portifolio'} layout={layout4}  /> 
    </Section>

<Category>
      <h1 id="contato">Fale conosco</h1>
  <h2>Solicite seu orçamento, deixe suas dúvidas e sugestões</h2>
    </Category>
    <Form whats={`https://api.whatsapp.com/send?phone=${number}&text=${msg}`} email={'https://www,google.com.br'} whatsImg={whatsContactIcon} emailImg={emailContactIcon} colorWhats={'#079504'} colorEmail={'#1927A3'}/>

    <Image src={formImg} width={360} height={200} alt="form" layout='intrinsic'/>
     </App>
  )
  } 
