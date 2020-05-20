import css from './style.css';
import { useState } from 'react';
import formatDateString from '../formatDateString';
import DateForm from '../dateShow';

const actualDate = formatDateString(new Date());

const Form = ({legend, type, setSubmitForm}) => { 
    
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
            <legend style={{textAlign: "center"}}>{ legend }</legend>
            <div className={css.inputContainer}>
            
            {type === "a" && 
                <>
                    <section>
                        <div>
                            <label htmlFor="dateWeek" > Semanas de gravidez: 
                                <input 
                                    type="number" 
                                    name="dateWeek" 
                                    onChange={handleDateWeek} 
                                    value={dateWeek} 
                                    required
                            />
                            </label>
                        </div>
                    </section>

                    <DateForm />
                    
                </>
            }
            
            {
                type === "b" &&
                <>
                    <section>
                        <div> 
                            <label htmlFor="dateForBirth">Data provável de parto: </label>
                            <input 
                                type="date"
                                name="dateForBirth" 
                                onChange={handleDPPValues}
                                value={dateForBirth}
                                required
                            />
                        </div>
                    </section>

                    <DateForm />
                </>
            }

            {
                type === "c" &&
                <>
                    <section>
                        <div>
                            <label htmlFor="dateForBirth">Primeiro dia da sua última menstruação: </label>
                            <input 
                                type="date"
                                className={css.inputBox}
                                name="menstruationDate" 
                                onChange={handleMenstruationDate}
                                value={menstruationDate}
                                required
                            />
                        </div>
                    </section>

                    <DateForm />

                </>
            }

            </div>

            <div className={css.submitContainer}>
                <input 
                    type="submit" 
                    className={css.submitForm} 
                    value="Ver resultado"
                />
            </div>

        </form>
   )
}
export default Form;  
