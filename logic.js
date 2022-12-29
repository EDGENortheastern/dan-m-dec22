const convertToNum = (value) => parseFloat(value);

const convertCurrency = (amountVal, exchangeRate) => {
    return (convertToNum(amountVal) * convertToNum(exchangeRate)).toFixed(2);
}



export {
    convertToNum,
    convertCurrency
};