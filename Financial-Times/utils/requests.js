const url =
  "https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=";

export async function fetchFtseInfo() {
  const fetchData = await fetch(url + 'FTSE:FSI');
  return await fetchData.json();
}

export async function fetchSpInfo() {
  const sp500 = await fetch(url + "INX:IOM");
  return sp500.json();
}

export async function fetchEuroDollarInfo() {
  const euroDollar = await fetch(url + "EURUSD");
  return euroDollar.json();
}

export async function fetchPoundDollarInfo() {
  const poundDollar = await fetch(url + "GBPUSD");
  return poundDollar.json();
}

export async function fetchBrentOilInfo() {
  const oil = await fetch(url + "IB.1:IEU");
  return oil.json();
}
