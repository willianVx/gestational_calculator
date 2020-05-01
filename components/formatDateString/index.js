const formatDateMouth = date => {
    if (date < 10) return `0${date}`;
    return date;
}

const formatDateString = date => {
    const nowDate = new Date(date);
    return `${formatDateMouth(nowDate.getDate())}/${formatDateMouth(nowDate.getMonth() + 1) }/${nowDate.getFullYear()}`;
}

export default formatDateString;
