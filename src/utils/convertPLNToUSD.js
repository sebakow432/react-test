export const convertPLNToUSD = (PLN) => {

  if (typeof PLN === 'string' || (!PLN && PLN !== null)){
    return NaN;
  } else if ((typeof PLN === 'object' && typeof USD !== 'string' && typeof PLN !== 'number') || PLN === [] ||PLN === null || typeof PLN === 'function'){
    return 'Error';
  } else if (PLN < 0) {
    return '$0.00';
  } else{
    const PLNtoUSD = PLN / 3.5;
  
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  
    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  }
}