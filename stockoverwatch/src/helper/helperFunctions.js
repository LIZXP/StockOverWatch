/* eslint-disable */
import axios from "axios";
export const stocksPriceDataFinn = () => {
  const stocksSymbols = ["AAPL", "META", "GOOGL", "NFLX", "AMZN", "TSLA"];
  // const fulllist = [
  //   "AAPL",
  //   "META",
  //   "GOOGL",
  //   "NFLX",
  //   "AMZN",
  //   "TSLA",
  //   "MSFT",
  //   "JNJ",
  //   "MMM",
  //   "NVDA",
  //   "AMD",
  //   "EA",
  //   "KO",
  //   "ORCL",
  //   "INTC",
  //   "IBM",
  //   "ADP",
  //   "PYPL",
  //   "ZBRA",
  //   "BABA",
  // ];

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

export const monthStockPriceFinn = () => {
  const stocksSymbols = ["AAPL", "META", "GOOGL", "NFLX", "AMZN", "TSLA"];
  const baseUrl = "https://finnhub.io/api/v1/stock/candle";
  const token = "cdmjq6aad3ibvooj3ue0cdmjq6aad3ibvooj3ueg";
  const UNIXtsFrom = "1666391811";
  const UNIXtsTo = "1668969826";
  const allPromiseCandle = [];
  const getStockPriceData = (stock) => {
    return axios
      .get(
        `${baseUrl}?symbol=${stock}&resolution=D&from=${UNIXtsFrom}&to=${UNIXtsTo}&token=${token}`
      )
      .catch((error) => {
        console.error("FinnError", error.message);
      });
  };
  stocksSymbols.map((ssymb) => {
    allPromiseCandle.push(
      getStockPriceData(ssymb)
        .then((res) => {
          return { ...res.data, symbol: ssymb };
        })
        .catch((e) => console.log(e))
    );
  });

  return allPromiseCandle;
};

monthStockPriceFinn();
