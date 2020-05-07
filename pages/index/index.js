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

const Home = () => {

  const [menuDisplay, setMenuDisplay] = useState(false);
  const [ submitForm, setSubmitForm ] = useState({redirect: false, data: null, param: null}); 

  return(
    <>
      <Head>
        <title>Calculadora gestacional</title>
        <meta charSet="UTF-8"></meta>

        <meta name="description" content="Calculadora gestacional"></meta>
        <meta name="keywords" content="calculadora gestacional"></meta>
        <meta http-equiv="Content-Language" content="pt-br"></meta>

        <meta property="og:title" content="Calculadora gestacional"></meta>
        <meta property="og:description" content="Oi, como você está? Esse é o espaço para calcular a semana de gravidez em que você está pela DPP (Data Provável de Parto)."></meta>
        <meta property="og:image" content="https://www.calculargravidez.com.br/barriga-gravida-fita.png"></meta>
        <meta property="og:url" content="https://www.calculargravidez.com.br/"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>

        {/* <!-- Google Tag Manager --> */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MGQPVLT');`
        }} />
        {/* <!-- End Google Tag Manager --> */}
      </Head>

      { submitForm.redirect && <LoadingComponent data={submitForm.data} param={submitForm.param} />}

      <MenuIcon menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
      <Menu menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
      <HeaderImage src="/barriga-gravida-fita.png" alt="Fita foto criado por freepik " />
      
      <FormContainer 
        title="Calcular semanas de gravidez" 
        backgroundColor="#46a09d" 
      >
        <p>
        Oi, como você está? Esse é o espaço para calcular a semana de gravidez em que você está pela DPP (Data Provável de Parto). 
        A DPP foi estimada pelo seu médico na primeira consulta de pré-natal, usando o dia em que veio sua última menstruação. 
        Se você ainda não sabe, clique aqui para <Link href="/calcular-dpp"><a>calcular DPP.</a></Link>
        </p>
        <Form 
          legend="Calcular a semana de gravidez" 
          secondaryColor="#204a48" 
          type="b"
          setSubmitForm={setSubmitForm}
        />
      </FormContainer>
    </>
  )
}
export default Home
