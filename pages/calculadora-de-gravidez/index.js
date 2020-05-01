import Head from 'next/head';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { useState } from 'react';
import '../style/styles.css';
import FormContainer from '../../components/formContainer';
import Form from '../../components/form';
import Menu from '../../components/menu';
import MenuIcon from '../../components/menuIcon';
import HeaderImage from '../../components/headerImage';

const LoadingComponent = dynamic(() => import("../../components/loading"));

const PregnanceCalc = () => {

const [menuDisplay, setMenuDisplay] = useState(false);
const [ submitForm, setSubmitForm ] = useState({redirect: false, data: null, param: null}); 

return(
    <>
      <Head>
        <title>Calculadora de gravidez: semanas em meses</title>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="Calcular semanas em meses"></meta>
        <meta name="keywords" content="calculadora de gravidez: semanas em meses"></meta>
        <script data-ad-client="ca-pub-9572035864447557" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      
      { submitForm.redirect && <LoadingComponent data={submitForm.data} param={submitForm.param} /> }

      <MenuIcon menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
      <Menu menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
      <HeaderImage src="/sapatos-de-bb.png" alt="Baby photo created by freepik  " />

      <FormContainer 
        title="Calculadora de gravidez: semanas em meses" 
        backgroundColor="#46a09d"
      >
        <p>
            Oi, como você está? A gravidez faz com que a gente fale em código: sempre usando as semanas para se referir ao desenvolvimento do bebê. 
            Aqui embaixo, você pode transformar as semanas em meses de gestação. 
            Se você tem a data provável do parto e se perdeu na contagem de semanas, clique aqui para <Link href="/"><a>calcular semanas de gravidez.</a></Link> 
        </p>
        <Form 
          legend="Calcular gravidez de semana para meses" 
          secondaryColor="#204a48" 
          type="a"
          setSubmitForm={setSubmitForm}
        />
      </FormContainer>
    </>
  )
}
  export default PregnanceCalc
