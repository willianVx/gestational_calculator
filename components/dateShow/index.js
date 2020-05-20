import css from './style.css';

const DateForm = () => {

    const weekDays = ['domingo', 'segunda', 'terça', 
                    'quarta', 'quinta', 'sexta', 'sábado'];

    const monthStrings = ['janeiro', 'fevereiro', 'março', 
                        'abril', 'maio', 'junho', 'julho', 
                        'agosto', 'setembro', 'outubro', 
                        'novembro', 'dezembro'];

    const date = new Date();
    console.log(date);
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();

    const fullDateString = `${weekDays[date.getDay()]} ${day} ${monthStrings[month]}`

    return (
        <div className={css.containerDateShow}>
            <div className={css.internalContainer}>
                <span>{year}</span>
                <span>{fullDateString}</span>
                <hr />
                <div className={css.dayCircleContainer}>
                    <div className={css.dayCircle}>
                        {day}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DateForm;
