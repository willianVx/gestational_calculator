import Head from 'next/head';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Link from 'next/link';
import '../style/styles.css';
import HeaderImage from '../../components/headerImage';
import Menu from '../../components/menu';
import MenuIcon from '../../components/menuIcon';
import resolveDateWeekValue from '../../components/weeksForMonths';
import resolveDateForBirth from '../../components/resolveDateForBirth';
import formatDateString from '../../components/formatDateString';

const resolveProbablyBirthDate = date => {
    const lastDay = new Date(date); 
    lastDay.setDate( lastDay.getDate() + 281 );
    return formatDateString(lastDay);
}

const Result = () => {

    const [menuDisplay, setMenuDisplay] = useState(false);  
    const router = useRouter();
    const { param, data } = router.query;

    return(
        <>
            <Head>
                <title>Resultado</title>
                <meta charSet="UTF-8"></meta>
                <meta name="description" content="Resultado da calculadora"></meta>
                <meta name="keywords" content="calculadora calculadora"></meta>
                <script data-ad-client="ca-pub-9572035864447557" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>

            <MenuIcon menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
            <Menu menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
            <HeaderImage src="/sapatos-de-bb.png" alt="Baby photo created by freepik  " />

            <div style={{maxWidth: "700px"}}>
                {
                    param === "week" && 
                    
                    <>
                        <h1>Semanas em meses:</h1>
                        <h3>
                            A semana {data} faz parte do {resolveDateWeekValue(data)} mês de gravidez. 
                        </h3>
                        <p>
                            Essa medida é importante para se guiar sobre em qual fase da gravidez está. Mas o melhor jeito de contar o crescimento do seu bebê é em semanas, porque cada mês tem um número diferente de dias. 
                        </p>
                        <p>
                            Descubra a&nbsp;
                                <Link href="/">
                                    <a>
                                    data provável do parto.
                                    </a>
                                </Link>
                        </p>
                    </>
                }
                
                {
                    param === "dateForBirth" && 
                    
                    <>
                        <h1>Semana de gravidez:</h1>
                        <h3>
                            Pelos meus cálculos, você está na {resolveDateForBirth(data)}ª semana de gravidez.
                        </h3>
                        <p>
                            É hora de checar se os exames do pré-natal estão em dia e aproveitar para se planejar até a chegada do seu bebê, por volta das 40 semanas.
                        </p>
                        <p>
                            Se você preferir contar de outra forma, 
                            é possível converter as&nbsp;
                                <Link href="/calculadora-de-gravidez">
                                    <a>semanas em meses de gravidez.</a>
                                </Link>
                        </p>
                    </>
                }

                {
                    param === "dateForLastM" && 
                    
                    <>
                        <h1>Data provável do parto:</h1>
                        <h3>
                            Tudo indica que seu bebê nascerá próximo ao dia {resolveProbablyBirthDate(data)}. 
                        </h3>
                        <p>
                            Mas isso não é uma ordem de despejo, tá? A Data Prevista do Parto é o dia em que se completam 40 semanas de gravidez, mas a gestação pode ir até 42.
                        </p>
                        <p>
                            Segure a ansiedade e aproveite para deixar tudo pronto para a chegada do seu bebê.
                        </p>
                    </>
                }

            </div>
        </>
    )
}

export default Result;
