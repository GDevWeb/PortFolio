const getCurrentYear = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    
    return currentYear;
}

export default getCurrentYear;