import css from './style.css';
import { useState } from 'react';
import formatDateString from '../formatDateString';

const actualDate = formatDateString(new Date());

const Form = ({legend, secondaryColor, type, setSubmitForm}) => { 
    
    const [ dateWeek, setDateWeek ] = useState();

    const [ dateForBirth, setDateForBirth ] = useState(); 

    const [ menstruationDate, setMenstruationDate ] = useState();

    const handleDateWeek = (e) => {
        e.preventDefault();
        const value = e.target.value;
        if(value > 42 || value < 0) return;
        setDateWeek(value);
    }

    const handleDPPValues = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setDateForBirth(value);
    }

    const handleMenstruationDate = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setMenstruationDate(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!dateWeek && !dateForBirth && !menstruationDate) return;
        
        if(dateWeek) {
            setSubmitForm({redirect: true, data: dateWeek, param: "week"});
        }

        if(dateForBirth) {
            setSubmitForm({redirect: true, data: dateForBirth, param: "dateForBirth"});
        }

        if(menstruationDate) {
            setSubmitForm({redirect: true, data: menstruationDate, param: "dateForLastM"});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend style={{backgroundColor: secondaryColor, textAlign: "center"}}>{ legend }</legend>
            <div className={css.inputContainer}>
            
            {type === "a" && 
                <>
                    <section>
                        <label htmlFor="dateWeek" > Semanas de gravidez: 
                            <input 
                                type="number" 
                                name="dateWeek" 
                                onChange={handleDateWeek} 
                                value={dateWeek} 
                                style={{backgroundColor: secondaryColor}}
                                required
                        />
                        </label>
                    </section>
                </>
            }
            
            {
                type === "b" &&
                <>
                    <section>
                        <label htmlFor="dateForBirth">Data provável de parto: </label>
                        <input 
                            type="date"
                            name="dateForBirth" 
                            onChange={handleDPPValues} style={{backgroundColor: secondaryColor}} 
                            value={dateForBirth}
                            required
                        />
                    </section>

                    <section>
                        <label htmlFor="actualDate">Data atual: </label>
                        {actualDate}
                    </section>
                </>
            }

            {
                type === "c" &&
                <>
                    <section>
                        <label htmlFor="dateForBirth">Primeiro dia da sua última menstruação: </label>
                        <input 
                            type="date"
                            name="menstruationDate" 
                            onChange={handleMenstruationDate} style={{backgroundColor: secondaryColor}} 
                            value={menstruationDate}
                            required
                        />
                    </section>

                </>
            }

            </div>

            <div className={css.submitContainer}>
                <input 
                    type="submit" 
                    className={css.submitForm} 
                    style={{backgroundColor: secondaryColor}} 
                    value="Ver resultado"
                />
            </div>

        </form>
   )
}
export default Form;  
