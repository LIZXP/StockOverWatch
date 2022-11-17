import axios from "axios";
/* eslint-disable */
export const stocksPriceDataFinn = () => {
  const stocksSymbols = [
    "AAPL",
    "META",
    "GOOGL",
    "NFLX",
    "AMZN",
    "TSLA",
    "MSFT",
    "JNJ",
    "MMM",
    "NVDA",
    "AMD",
    "EA",
    "KO",
    "SHEL",
    "INTC",
  ];
  const baseUrl = "https://finnhub.io/api/v1/quote";
  const token = "cdmjq6aad3ibvooj3ue0cdmjq6aad3ibvooj3ueg";

  const allPromise = [];
  const getStocksData = (stock) => {
    return axios
      .get(`${baseUrl}?symbol=${stock}&token=${token}`)
      .catch((error) => {
        console.error("FinnError", error.message);
      });
  };
  stocksSymbols.map((ssymb) => {
    allPromise.push(
      getStocksData(ssymb)
        .then((res) => {
          return { ...res.data, symbol: ssymb };
        })
        .catch((e) => console.log(e))
    );
  });
  return allPromise;
};
