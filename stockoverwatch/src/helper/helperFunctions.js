/* eslint-disable */
import axios from "axios";
export const stocksPriceDataFinn = () => {
  const stocksSymbols = [
    {
      name: "AAPL",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/879px-Apple_Computer_Logo_rainbow.svg.png",
    },
    {
      name: "META",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png",
    },
    {
      name: "GOOGL",
      img: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      name: "NFLX",
      img: "https://cdn.iconscout.com/icon/free/png-256/netflix-3521600-2945044.png",
    },
    {
      name: "AMZN",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",
    },
    {
      name: "TSLA",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    },
  ];
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
      getStocksData(ssymb.name)
        .then((res) => {
          return { ...res.data, symbol: ssymb.name, img: ssymb.img };
        })
        .catch((e) => console.log(e))
    );
  });
  return allPromise;
};

export const monthStockPriceFinn = () => {
  const stocksSymbols = [
    {
      name: "AAPL",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/879px-Apple_Computer_Logo_rainbow.svg.png",
    },
    {
      name: "META",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png",
    },
    {
      name: "GOOGL",
      img: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      name: "NFLX",
      img: "https://cdn.iconscout.com/icon/free/png-256/netflix-3521600-2945044.png",
    },
    {
      name: "AMZN",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",
    },
    {
      name: "TSLA",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    },
  ];
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
      getStockPriceData(ssymb.name)
        .then((res) => {
          return { ...res.data, symbol: ssymb.name, img: ssymb.img };
        })
        .catch((e) => console.log(e))
    );
  });

  return allPromiseCandle;
};
