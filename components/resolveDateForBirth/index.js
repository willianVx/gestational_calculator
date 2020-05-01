const resolveDateForBirth = date => {
    const diferenceInTime = new Date(date) - new Date();
    const diferenceInDays = diferenceInTime / (1000 * 3600 * 24);
    const result = 40 - Math.round(diferenceInDays / 7);
    return result;
}

export default resolveDateForBirth;
