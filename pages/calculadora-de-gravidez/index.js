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
        <meta http-equiv="Content-Language" content="pt-br"></meta>

        <meta property="og:title" content="Calcular semanas em meses"></meta>
        <meta property="og:description" content="Transforme as semanas em meses de gestação"></meta>
        <meta property="og:image" content="https://www.calculargravidez.com.br/sapatos-de-bb.png"></meta>
        <meta property="og:url" content="https://www.calculargravidez.com.br/calculadora-de-gravidez"></meta>
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
