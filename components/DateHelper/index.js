
const dateBox = (stringDate) => {
    const date = new Date(stringDate);
    const year = date.getFullYear();
    const day = date.getDate();
    const numberDayWeek = date.getDay();
    const month = date.getMonth();

    return {
        year: year,
        day: day + 1,
        month: month,
        numberDayWeek: numberDayWeek
    }
}

const highestDateValue = (stringDate1, stringDate2) => {
    const date1 = new Date(stringDate1);
    const date2 = new Date(stringDate2);
       
    return date1.getTime() > date2.getTime();   
}

const weekDays = ['domingo', 'segunda', 'terça', 
                    'quarta', 'quinta', 'sexta', 'sábado'];

const monthStrings = ['janeiro', 'fevereiro', 'março', 
                        'abril', 'maio', 'junho', 'julho', 
                        'agosto', 'setembro', 'outubro', 
                        'novembro', 'dezembro'];

class DateProc {
    constructor(date) {
        this.date = dateBox(date);
        return {
            date: this.date,
            weekDay: weekDays[this.date.numberDayWeek],
            monthString: monthStrings[this.date.month],
            highestValue: highestDateValue
        };
    }
}

export default DateProc;
