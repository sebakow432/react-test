export const convertUSDToPLN = (USD) => {
  if(typeof PLN === 'string'){
    return NaN;
  }
  const USDtoPLN = USD * 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PLN'
  });

  return formatter.format(USDtoPLN).replace(/\u00a0/g, ' ');
}