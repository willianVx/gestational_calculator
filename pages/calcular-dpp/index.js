import Head from 'next/head';
import dynamic from "next/dynamic";
import { useState } from 'react';
import '../style/styles.css';
import FormContainer from '../../components/formContainer';
import Form from '../../components/form';
import Menu from '../../components/menu';
import MenuIcon from '../../components/menuIcon';
import HeaderImage from '../../components/headerImage';

const LoadingComponent = dynamic(() => import("../../components/loading"));

const DateToBirth = () => {

const [ menuDisplay, setMenuDisplay ] = useState(false);
const [ submitForm, setSubmitForm ] = useState({redirect: false, data: null, param: null}); 

return(
    <>
      <Head>
        <title> Calcular DPP</title>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="Calcular DPP"></meta>
        <meta name="keywords" content="calcular DPP"></meta>
        <meta http-equiv="Content-Language" content="pt-br"></meta>

        <meta property="og:title" content="Calcular DPP"></meta>
        <meta property="og:description" content="Data Provável de Parto através da última menstruação"></meta>
        <meta property="og:image" content="https://www.calculargravidez.com.br/casal-feliz-sorrindo.png"></meta>
        <meta property="og:url" content="https://www.calculargravidez.com.br/calcular-dpp"></meta>
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
      {/* <HeaderImage src="/casal-feliz-sorrindo.png" alt="Pessoas foto criado por jcomp" /> */}

      <FormContainer title="Calcular DPP" backgroundColor="white" >
        <p>
            Oi, como você está? Se você está grávida, saiba que é possível estimar o dia em que ele vai nascer. 
            Basta inserir aqui qual foi o primeiro dia da sua última menstruação. 
            Assim, vai obter a Data Provável de Parto, chamada de DPP. 
        </p>
        <p>
            Caso você esteja pretendendo engravidar, também pode calcular uma data futura, 
            colocando o dia em que estima que irá menstruar pela última vez antes do nascimento do seu filho. 
        </p>
        <hr></hr>
        <Form 
          legend="Por data provável do parto" 
          secondaryColor="#204a48" 
          type="c"
          setSubmitForm={setSubmitForm}
        />
        <hr></hr>
        <p>
            Ah, lembre-se de que esta é uma data estimada! Ou seja: ela calcula quando sua gravidez completará 40 semanas.
            Mas é possível que seu bebê não seja apressadinho e espere para decidir nascer até as 42 semanas.
        </p>
      </FormContainer>
    </>
  )
}
  export default DateToBirth;
